import { addFilter } from '@wordpress/hooks';
import { InspectorControls, useBlockProps, __experimentalBlockVariationPicker } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, BaseControl, FormTokenField, Button, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import OrderControl from './component/order-control'; 
import { usePostTypes } from './component/usePostTypes';

/**
 * Function to filter and modify controls for the block
 */
const withFilteredControls = (BlockEdit) => (props) => {
    const { attributes, setAttributes, clientId } = props;
    const { query = {} } = attributes;
    const { inherit = false, sticky = false, postType = 'post', exclude = [] } = query;
    const { order = 'desc', orderBy = 'date' } = query;
    const { postTypesSelectOptions } = usePostTypes();
    const [ searchArg, setSearchArg ] = useState('');
    const [ posts, setPosts ] = useState([]);
    const { replaceInnerBlocks } = useDispatch('core/block-editor');
    
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

    // Check if the block has inner blocks
    const hasInnerBlocks = useSelect(
        (select) => !!select('core/block-editor').getBlocks(clientId).length,
        [clientId]
    );

    // Variation Picker
    const blockVariations = [
        {
            name: 'layout-one',
            title: 'Layout one',
            icon: 'columns',
            innerBlocks: [
                ['vayu-blocks/wrapper'],
                [ 'core/query-pagination' ],
                [ 'core/query-no-results' ],
            ],
            scope: [ 'block' ],
            isDefault:true,
        },
        {
            name: 'layout-two',
            title: 'Layout Two',
            icon: 'columns',
            innerBlocks: [
                ['vayu-blocks/wrapper'],
                [ 'core/query-pagination' ],
                [ 'core/query-no-results' ],
            ],
            scope: [ 'block' ],
            isDefault:true,
        },
    ];

    const onSelectVariation = (variation) => {
        if (variation.innerBlocks) {
            replaceInnerBlocks(
                clientId,
                createBlocksFromInnerBlocksTemplate(variation.innerBlocks),
                false
            );
        }
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
                        {/* Control for Excluded Posts */}
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
                    </PanelBody>
                </InspectorControls>
                {!hasInnerBlocks && (
                    <Placeholder
                        label={__('Advance Query Block', 'vayu-blocks')}
                        instructions={__('Select a variation to start with:', 'vayu-blocks')}
                    >
                        <__experimentalBlockVariationPicker
                            icon="layout"
                            label="Choose a layout"
                            variations={blockVariations}
                            onSelect={onSelectVariation}
                        />
                    </Placeholder>
                )}
            </>
        );
    }
    return <BlockEdit {...props} />;
};

// Apply the filter to add the custom controls for the block
addFilter(
    'editor.BlockEdit',
    'vayu-blocks/with-filtered-controls',
    withFilteredControls
);