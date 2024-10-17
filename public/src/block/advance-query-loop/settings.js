/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import { __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    ToggleControl,
    BaseControl, FormTokenField
} from '@wordpress/components';

import { useSelect} from '@wordpress/data';

import {
    Fragment,
    useState,useEffect
} from '@wordpress/element';

/**
* Internal dependencies
*/
import {
	InsSettingHeader,
} from '../../components/index.js';

import OrderControl from './component/order-control'; 
import { usePostTypes } from './component/usePostTypes';
import OffsetControl from './component/offset-controls'; 
import PagesControl from './component/pages-control';
import PerPageControl from './component/per-page-control';
import AuthorControl from './component/author-control';
import { TaxonomyControls } from './component/taxonomy-controls';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
    const [ tab, setTab ] = useState( 'setting' );
    const { query = {} } = attributes;
    const { inherit = false, author: authorIds, sticky = false, postType = 'post', exclude = [], order = 'desc', orderBy = 'date', perPage = null, pages ='0', offset='0'} = query;
    const { postTypesSelectOptions } = usePostTypes();
    const [ searchArg, setSearchArg ] = useState('');
    const [ posts, setPosts ] = useState([]);
    const setQuery = (newQuery) => {
        setAttributes({
            query: {
                ...query,
                ...newQuery,
            },
        });
    };
   // Fetch posts based on search argument and postType
    const fetchedPosts = useSelect((select) => {
    const { getEntityRecords } = select('core');
    return getEntityRecords('postType', postType, { search: searchArg, per_page: 10 });
    }, [searchArg, postType]);

    useEffect(() => {
        if (fetchedPosts) {
            setPosts(fetchedPosts);
        }
    }, [fetchedPosts]);
    return (
        <Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Setting', 'vayu-blocks' ),
							value: 'setting',
							icon: 'colorwand'
						},
						{
							label: __( 'Advanced', 'vayu-blocks' ),
							value: 'advanced',
							icon: 'colorpalette'
						}
					]}
					onChange={ setTab }
            />
        {'setting' === tab && (
            <PanelBody title={ __( 'Advance Loop Setting', 'vayu-blocks' ) }
                className="th-adv-loop-panel" initialOpen={ true }
                
            >
            <ToggleControl
                            label={__('Inherit Query From Parent', 'vayu-blocks')}
                            checked={inherit}
                            onChange={(value) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        inherit: value,
                                    },
                                });
                            }}
            />
            <ToggleControl
                            label={__('Show Sticky Posts', 'vayu-blocks')}
                            checked={sticky}
                            onChange={(value) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        sticky: value,
                                    },
                                });
                            }}
                    />
            <SelectControl
            label={__('Post Type', 'vayu-blocks')}
            value={postType}
            options={postTypesSelectOptions}
            onChange={(newPostType) => {
                setAttributes({
                    query: {
                        ...query,
                        postType: newPostType,
                    },
                });
            }}
            />
                        <OrderControl
                            order={order}
                            orderBy={orderBy}
                            onChange={(newQuery) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        ...newQuery,
                                    },
                                });
                            }}
                        />

                    { ! inherit &&  ( <>
                                        <PerPageControl
                                                perPage={ perPage }
                                                offset={ offset }
                                                onChange={ setQuery }
                                            />
                                        <OffsetControl
                                                offset={ offset }
                                                onChange={ setQuery }
                                            />
                                            <PagesControl pages={ pages } onChange={ setQuery } />
                                           
                                           
                                        <TaxonomyControls
                                            onChange={ setQuery }
                                            query={ query }
                                        />
                                         <AuthorControl
                                            value={ authorIds }
                                            onChange={ setQuery }
                                        />
                        <BaseControl
                            label={__('Exclude Posts', 'vayu-blocks')}
                            help={__('Start typing to search for a post title or manually enter one.', 'vayu-blocks')}
                        >
                            <FormTokenField
                                value={exclude && exclude.length > 0 
                                    ? exclude.map(id => {
                                        const post = posts.find(post => post.id === id);
                                        return post ? post.title.rendered : '';
                                    })
                                    : []}
                                suggestions={posts && posts.length > 0 
                                    ? posts.map(post => post.title.rendered)
                                    : []}
                                onInputChange={(searchPost) => setSearchArg(searchPost)}
                                onChange={(titles) => {
                                    const selectedPostIds = titles.map(title => {
                                        const post = posts.find(post => post.title.rendered === title);
                                        return post ? post.id : null;
                                    }).filter(Boolean);

                                    setAttributes({
                                        query: {
                                            ...query,
                                            exclude: [...new Set(selectedPostIds)],
                                        },
                                    });
                                    setSearchArg('');
                                }}
                                __experimentalExpandOnFocus
                                __experimentalShowHowTo={false}
                            />
                        </BaseControl>
                    </>
                    )}
        </PanelBody>

        )}    
        </InspectorControls>
        </Fragment>
        )

}
export default InsSettings;