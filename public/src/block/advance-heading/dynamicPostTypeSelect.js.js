import { useSelect } from '@wordpress/data';
import { SelectControl, Spinner,ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
/**
 * Internal dependencies
 */
import {ControlPanelControl} from '../../components/index.js';


const ContentSelect = ({ label, postType, selectedPost, onChange }) => {
    // Fetch the posts, pages, or products dynamically based on postType
    const { content, isLoading } = useSelect((select) => {
        const { getEntityRecords } = select('core');
        if (postType && postType !== 'none') {
            const posts = getEntityRecords('postType', postType, { per_page: -1 });
            return {
                content: posts,
                isLoading: !posts,
            };
        }
        return { content: [], isLoading: false };
    }, [postType]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            {content && content.length > 0 ? (
                <SelectControl
                    label={label}
                    value={selectedPost || ''}
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

    const { isLoading } = useSelect((select) => {
        const { getEntityRecords } = select('core');
        const posts = dynamicPostType ? getEntityRecords('postType', dynamicPostType, { per_page: -1 }) : [];
        return { isLoading: !posts };
    }, [dynamicPostType]);

    return (
        <div>
           <ControlPanelControl
				label={ __( 'Dynamic Content', 'vayu-blocks' ) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							resetValues={ {
								dynamiControl: false,
                                dynamicPostType: 'none',
                                selectedPost: '',
                                selectedSourceField: '',
                                contentLinkEnable: false,
                                contentLinkUrl: ''
							} }
							onClick={ () => setAttributes({ dynamiControl: true }) }
			>
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
            {(dynamicPostType === 'post' || dynamicPostType === 'page' || dynamicPostType === 'product') && (
                <>
                    <ContentSelect
                        label={__('Select ' + dynamicPostType.charAt(0).toUpperCase() + dynamicPostType.slice(1), 'vayu-blocks')}
                        postType={dynamicPostType}
                        selectedPost={selectedPost}
                        onChange={onContentChange}
                    />

                    {!isLoading && selectedPost && (
                        <>
                        <SelectControl
                            label={__('Select Source Field', 'vayu-blocks')}
                            value={selectedSourceField || 'title'} // Default to title
                            // options={sourceFields}
                            onChange={onSourceFieldChange}
                        >
                        <optgroup label={ __( 'Post', 'vayu-blocks' ) }>
                        <option value="title">{ __( 'Post Tilte', 'vayu-blocks' ) }</option>
                        <option value="slug">{ __( 'Post Slug', 'vayu-blocks' ) }</option>
                        <option value="excerpt">{ __( 'Post Excerpt', 'vayu-blocks' ) }</option>
                        <option value="post_date">{ __( 'Post Date', 'vayu-blocks' ) }</option>
                        <option value="post_time">{ __( 'Post Time', 'vayu-blocks' ) }</option>
                        <option value="post_id">{ __( 'Post Id', 'vayu-blocks' ) }</option>
                        <option value="post_image">{ __( 'Post Featured Image', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Author', 'vayu-blocks' ) }>
                        <option value="author_name">{ __( 'Name', 'vayu-blocks' ) }</option>
                        <option value="author_bio">{ __( 'Bio', 'vayu-blocks' ) }</option>
                        <option value="author_email">{ __( 'Email', 'vayu-blocks' ) }</option>
                        </optgroup>
                       </SelectControl>

                       <ToggleControl
                       label={ __( 'Enable Link', 'vayu-blocks' ) }
                       checked={ attributes.contentLinkEnable }
					   onChange={ contentLinkEnable => setAttributes({ contentLinkEnable }) }
                       />
                       {attributes.contentLinkEnable && (
                       <SelectControl
                            label={__('Select Source Url', 'vayu-blocks')}
                            value={attributes.contentLinkUrl}
                            onChange={contentLinkUrl => setAttributes({ contentLinkUrl }) }
                        >
                        <optgroup label={ __( 'Post', 'vayu-blocks' ) }>
                        <option value="post_url">{ __( 'Post Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Archive', 'vayu-blocks' ) }>
                        <option value="archive_url">{ __( 'Archive Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Author', 'vayu-blocks' ) }>
                        <option value="author_url">{ __( 'Author Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Site', 'vayu-blocks' ) }>
                        <option value="site_url">{ __( 'Site Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Comments', 'vayu-blocks' ) }>
                        <option value="comments_url">{ __( 'Comments Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                        <optgroup label={ __( 'Media', 'vayu-blocks' ) }>
                        <option value="featured_img_url">{ __( 'Featured Image Url', 'vayu-blocks' ) }</option>
                        </optgroup>
                       </SelectControl>
                       )}
                       </>
                    )}
                 </>  
               )}
            </ControlPanelControl>
        </div>
    );
};

export default PostTypeSelect;