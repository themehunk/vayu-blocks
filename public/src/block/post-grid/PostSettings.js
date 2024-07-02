import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToggleControl, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const PostSettings = ({ attributes, setAttributes }) => {
    const {
        pg_postLayoutColumns,
        pg_numberOfRow,
        pg_gap,
        pg_gapup,
        pg_showExcerpt,
        pg_excerptWords,
        pg_excerptSelector,
        pg_showFullContent,
        pg_showFeaturedImage,
        pg_showCategories,
        pg_showCategoriesOnImage,
        pg_showAuthor,
        pg_showDate,
        pg_showTags
    } = attributes;

    return (
        <>
            <PanelBody title={__('Layout', 'post-grid')} initialOpen={false}>
                <RangeControl
                    label={__('Number of Columns', 'post-grid')}
                    value={pg_postLayoutColumns}
                    onChange={(value) => setAttributes({ pg_postLayoutColumns: value })}
                    min={1}
                    max={10}
                />
                <RangeControl
                    label={__('Number of Rows', 'post-grid')}
                    value={pg_numberOfRow}
                    onChange={(value) => setAttributes({ pg_numberOfRow: value })}
                    min={1}
                    max={10}
                />
            </PanelBody>
            <PanelBody title={__('Filter', 'post-grid')} initialOpen={false}>
                <h4>{__('Column Space', 'post-grid')}</h4>
                <RangeControl
                    value={pg_gap}
                    onChange={(value) => setAttributes({ pg_gap: value })}
                    min={0}
                    max={100}
                />
                <h4>{__('Row Space', 'post-grid')}</h4>
                <RangeControl
                    value={pg_gapup}
                    onChange={(value) => setAttributes({ pg_gapup: value })}
                    min={0}
                    max={100}
                />
            </PanelBody>
            <PanelBody title={__('State', 'post-grid')} initialOpen={false}>
                <ToggleControl
                    label={__('Show Excerpt', 'post-grid')}
                    checked={pg_showExcerpt}
                    onChange={(value) => setAttributes({
                        pg_showExcerpt: value,
                        pg_showFullContent: false,
                    })}
                />
                {pg_showExcerpt && (
                    <>
                        <RangeControl
                            label={__('Number of words in excerpt', 'post-grid')}
                            value={pg_excerptWords}
                            onChange={(value) => setAttributes({ pg_excerptWords: value })}
                            min={1}
                            max={100}
                        />
                        <TextControl
                            label={__('Last Word', 'post-grid')}
                            value={pg_excerptSelector}
                            onChange={(value) => setAttributes({ pg_excerptSelector: value })}
                        />
                        <br />
                    </>
                )}
                <ToggleControl
                    label={__('Show Full Content', 'post-grid')}
                    checked={pg_showFullContent}
                    onChange={(value) => setAttributes({
                        pg_showFullContent: value,
                        pg_showExcerpt: false,
                    })}
                />
                <ToggleControl
                    label={__('Show Featured Image', 'post-grid')}
                    checked={pg_showFeaturedImage}
                    onChange={(value) => {
                        setAttributes({ pg_showFeaturedImage: value });

                        if (!value) {
                            setAttributes({ pg_showCategoriesOnImage: false });
                        }
                    }}
                />
                <ToggleControl
                    label={__('Show Categories', 'post-grid')}
                    checked={pg_showCategories}
                    onChange={(value) => setAttributes({ pg_showCategories: value })}
                />
                {pg_showCategories && pg_showFeaturedImage && (
                    <ToggleControl
                        label={__('Show Categories on Image', 'post-grid')}
                        checked={pg_showCategoriesOnImage}
                        onChange={(value) => setAttributes({ pg_showCategoriesOnImage: value })}
                    />
                )}
                <ToggleControl
                    label={__('Show Author', 'post-grid')}
                    checked={pg_showAuthor}
                    onChange={(value) => setAttributes({ pg_showAuthor: value })}
                />
                <ToggleControl
                    label={__('Show Date', 'post-grid')}
                    checked={pg_showDate}
                    onChange={(value) => setAttributes({ pg_showDate: value })}
                />
                <ToggleControl
                    label={__('Show Tags', 'post-grid')}
                    checked={pg_showTags}
                    onChange={(value) => setAttributes({ pg_showTags: value })}
                />
            </PanelBody>
        </>
    );
};

export default PostSettings;
