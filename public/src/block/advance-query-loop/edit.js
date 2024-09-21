import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import OrderControl from './component/order-control'; 
import { usePostTypes } from './component/usePostTypes';

/**
 * Function to filter and modify controls for the block
 */
const withFilteredControls = (BlockEdit) => (props) => {
    const { attributes, setAttributes } = props;
    const { query = {} } = attributes;
    const { perPage = 5, inherit = false, sticky = false, postType = 'post', exclude = []} = query;
    const { order = 'desc', orderBy = 'date' } = query;
    const { postTypesSelectOptions } = usePostTypes();
    
    const [ searchArg, setSearchArg ] = useState('');
    const [ posts, setPosts ] = useState([]);

    // Fetch posts based on search argument and postType
    const fetchedPosts = useSelect((select) => {
        const { getEntityRecords } = select('core');
        return getEntityRecords('postType', postType, { search: searchArg, per_page: 10 });
    }, [searchArg, postType]); // Trigger fetching when searchArg or postType changes

    useEffect(() => {
        if (fetchedPosts) {
            setPosts(fetchedPosts);
        }
    }, [fetchedPosts]);

    // Function to get post ID by title
    const getPostId = (title) => {
        const post = posts.find(post => post.title.rendered === title);
        return post ? post.id : null;
    };

    // Check if the block is 'vayu-blocks/advance-query-loop'
    if (attributes.namespace === 'vayu-blocks/advance-query-loop') {
        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={__('Advanced Query Settings', 'vayu-blocks')}>
                        {/* Control for Post Inherit */}
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
                        {/* Control for Sticky Posts */}
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
                        {/* Control for Post Order */}
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
                        {/* Control for Post Type */}
                        <SelectControl
                            label={__('Post Type', 'vayu-blocks')}
                            value={postType}
                            options={postTypesSelectOptions} // Use dynamic options
                            onChange={(newPostType) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        postType: newPostType,
                                    },
                                });
                            }}
                        />
                        {/* Control for Excluded Posts */}
                        <BaseControl
    label={__('Exclude Posts', 'vayu-blocks')}
    help={__('Start typing to search for a post title or manually enter one.', 'vayu-blocks')}
>
    <FormTokenField
        value={exclude && exclude.length > 0 
            ? exclude.map(id => {
                const post = posts.find(post => post.id === id);
                return post ? post.title.rendered : ''; // Map post IDs to titles
            })
            : []}
        suggestions={posts && posts.length > 0 
            ? posts.map(post => post.title.rendered) // Provide post title suggestions
            : []}
        onInputChange={(searchPost) => setSearchArg(searchPost)}
        onChange={(titles) => {
            // Map selected titles to post IDs
            const selectedPostIds = titles.map(title => {
                const post = posts.find(post => post.title.rendered === title);
                return post ? post.id : null; // Only return post IDs
            }).filter(Boolean); // Remove any null values

            setAttributes({
                query: {
                    ...query,
                    exclude: [...new Set(selectedPostIds)], // Allow multiple IDs to be selected and stored
                },
            });
            setSearchArg(''); // Clear search input after selection
        }}
        __experimentalExpandOnFocus
        __experimentalShowHowTo={false}
                />
                  </BaseControl>


                    </PanelBody>
                </InspectorControls>
            </>
        );
    }

    // Return the original block edit component for other blocks
    return <BlockEdit {...props} />;
};

// Apply the filter to add the custom controls for the block
addFilter(
    'editor.BlockEdit',
    'vayu-blocks/with-filtered-controls',
    withFilteredControls
);
