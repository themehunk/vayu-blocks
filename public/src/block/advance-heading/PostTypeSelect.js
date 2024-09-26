import { useSelect } from '@wordpress/data';
import { SelectControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const ContentSelect = ({ label, postType, selectedPost, onChange }) => {
    // Fetch the posts, pages, or products dynamically based on postType
    const content = useSelect((select) => {
        const { getEntityRecords } = select('core');
        if (postType && postType !== 'none') {
            return getEntityRecords('postType', postType, { per_page: -1 });
        }
        return [];
    }, [postType]);

    return (
        <>
            {content && content.length > 0 ? (
                <SelectControl
                    label={label}
                    value={selectedPost}
                    options={content.map((item) => ({
                        label: item.title.rendered,
                        value: item.id,
                    }))}
                    onChange={(newValue) => onChange(parseInt(newValue))} // Ensure the value is saved as an integer
                />
            ) : (
                <Spinner />
            )}
        </>
    );
};

const PostTypeSelect = ({ attributes, setAttributes }) => {
    const { dynamicPostType, selectedPost, selectedSourceField } = attributes;

    // Handler for post type selection
    const onPostTypeChange = (selectedType) => {
        // When post type changes, reset post and source field values
        setAttributes({
            dynamicPostType: selectedType,
            selectedPost: null, // Reset the post when type changes
            selectedSourceField: 'title', // Default field
        });
    };

    // Handler for content selection (save selected post/page/product ID)
    const onContentChange = (selectedId) => {
        setAttributes({ selectedPost: parseInt(selectedId) });
    };

    // Handler for source field selection
    const onSourceFieldChange = (selectedField) => {
        setAttributes({ selectedSourceField: selectedField });
    };

    // Define available source fields based on post type
    const sourceFields = [
        { label: __('Title', 'vayu-blocks'), value: 'title' },
        { label: __('Slug', 'vayu-blocks'), value: 'slug' },
        { label: __('Excerpt', 'vayu-blocks'), value: 'excerpt' },
       
    ];

    return (
        <div>
            {/* First SelectControl for Post Type */}
            <SelectControl
                label={__('Content Type', 'vayu-blocks')}
                value={dynamicPostType}
                options={[
                    { label: __('None', 'vayu-blocks'), value: 'none' },
                    { label: __('Post', 'vayu-blocks'), value: 'post' },
                    { label: __('Page', 'vayu-blocks'), value: 'page' },
                    { label: __('Product', 'vayu-blocks'), value: 'product' },
                ]}
                onChange={onPostTypeChange}
            />
            {/* Conditionally render Content SelectControl */}
            {(dynamicPostType === 'post' || dynamicPostType === 'page' || dynamicPostType === 'product') && (
                <>
                    <ContentSelect
                        label={__('Select ' + dynamicPostType.charAt(0).toUpperCase() + dynamicPostType.slice(1), 'vayu-blocks')}
                        postType={dynamicPostType}
                        selectedPost={selectedPost}
                        onChange={onContentChange}
                    />

                    {selectedPost && (
                        <SelectControl
                            label={__('Select Source Field', 'vayu-blocks')}
                            value={selectedSourceField}
                            options={sourceFields}
                            onChange={onSourceFieldChange}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default PostTypeSelect;