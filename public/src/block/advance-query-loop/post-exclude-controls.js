import { FormTokenField, BaseControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Generates a post exclude control component.
 *
 *@return {Element} PostExcludeControls
 */
export const PostExcludeControls = ( { attributes, setAttributes } ) => {
    const {
        query: {
            exclude_posts: excludePosts = [],
            postType,
            multiple_posts: multiplePosts = [],
            include_current: includeCurrent = 0,
        } = {},
    } = attributes;
    const [ searchArg, setSearchArg ] = useState( '' );
    const [ excludePostsState, setExcludePostsState ] = useState( excludePosts );

    const posts = useSelect(
        ( select ) => {
            const { getEntityRecords } = select( 'core' );

            return [ ...multiplePosts, postType ].reduce(
                ( totalRecords, currentPostType ) => {
                    const records = getEntityRecords(
                        'postType',
                        currentPostType,
                        {
                            per_page: 10,
                            search: searchArg,
                            exclude: includeCurrent ? [ includeCurrent ] : [],
                        }
                    );
                    return [ ...totalRecords, ...( records || [] ) ];
                },
                []
            );
        },
        [ postType, multiplePosts, includeCurrent, searchArg ]
    );

    useEffect( () => {
        if (
            JSON.stringify( multiplePosts ) !==
            JSON.stringify( excludePostsState )
        ) {
            setAttributes( {
                query: {
                    ...attributes.query,
                    exclude_posts: [],
                },
            } );
            setExcludePostsState( multiplePosts );
        }
    }, [ multiplePosts ] );

    const getPostId = ( postTitle ) => {
        const foundPost =
            excludePosts.find( ( post ) => post.title === postTitle ) ||
            posts.find( ( post ) => post.title.rendered.trim() === postTitle );

        return foundPost.title.rendered
            ? { id: foundPost.id, title: foundPost.title.rendered }
            : foundPost;
    };

    if ( ! posts ) {
        return <div>{ __( 'Loading…', 'advanced-query-loop' ) }</div>;
    }

    return (
        <>
            <h2> { __( 'Exclude Posts', 'advanced-query-loop' ) }</h2>
            <BaseControl
                help={ __(
                    'Start typing to search for a post title or manually enter one.',
                    'advanced-query-loop'
                ) }
            >
                <FormTokenField
                    label={ __( 'Posts', 'advanced-query-loop' ) }
                    value={ excludePosts.map( ( item ) => item.title ) }
                    suggestions={ posts.map( ( post ) => post.title.rendered ) }
                    onInputChange={ ( searchPost ) =>
                        setSearchArg( searchPost )
                    }
                    onChange={ ( titles ) => {
                        setAttributes( {
                            query: {
                                ...attributes.query,
                                exclude_posts:
                                    titles.map( ( title ) =>
                                        getPostId( title )
                                    ) || [],
                            },
                        } );
                        setSearchArg( '' );
                    } }
                    __experimentalExpandOnFocus
                    __experimentalShowHowTo={ false }
                />
            </BaseControl>
        </>
    );
};
