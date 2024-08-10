import React, { useEffect, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    RangeControl,
    ToggleControl, 
} from '@wordpress/components';
import { MediaPlaceholder, MediaUploadCheck,PanelColorSettings } from '@wordpress/block-editor';



const PostSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);


    const handleImageSelect = (index, media) => {
        // Create a new array of images for the specified index
        const newPagingImages = [...attributes.pagingImages];
        newPagingImages[index] = media.url; // Update the image URL at the specified index
    
        // Update the attributes with the new pagingImages array
        setAttributes({ pagingImages: newPagingImages });
    };

    useEffect(() => {
        const totalSlides = attributes.slides.length;
        const slidesPerPage = attributes.slidesToShow * attributes.slidesPerRow;
        const calculatedTotalPages = Math.ceil(totalSlides / slidesPerPage);

        setAttributes({ custompagingvalue: calculatedTotalPages+1 });
    }, [
        attributes.slides,
        attributes.slidesToShow,
        attributes.slidesPerRow
    ]);

    return (
        <>
        
            <PanelBody title={__('Slider Settings', 'vayu-blocks')} initialOpen={false}>
                <RangeControl
                    label={__('Number Of Columns', 'vayu-blocks')}
                    value={attributes.slidesToShow}
                    onChange={(value) => setAttributes({ slidesToShow: value })}
                    min={1}
                    max={5}
                    step={1}
                />
                <RangeControl
                    label = {__('Number Of Rows', 'vayu-blocks')}
                    value={attributes.slidesPerRow}
                    onChange={(value) => setAttributes({ slidesPerRow: value })}
                    min={1}
                    max={5}
                    step={1}
                />

                 <RangeControl
                    label = {__('Number Of Slides To Scroll', 'vayu-blocks')}
                    value={attributes.slidesToScroll}
                    onChange={(value) => setAttributes({ slidesToScroll: value })}
                    min={1}
                    max={5}
                    step={1}
                />
                <h6>The number of slides to scroll after each slide movement, ensuring smooth and controlled transitions in the slider.</h6>

            </PanelBody>

            <PanelBody title={__('Advance Settings','vayu-blocks')} initialOpen={false}>

                <ToggleControl
                    label={__('Infinite', 'vayu-blocks')}
                    checked={attributes.infinite}
                    onChange={(value) => setAttributes({ infinite: value})}
                />

                <ToggleControl
                    label={__('Center Mode', 'vayu-blocks')}
                    checked={attributes.centerMode}
                    onChange={(value) => setAttributes({ centerMode: value })}
                />

                <ToggleControl
                    label={__('Fade', 'vayu-blocks')}
                    checked={attributes.fade}
                    onChange={(value) => setAttributes({ fade: value })}
                />
              <h6>Slide fade controls the smooth transition between slides by gradually fading them in and out.</h6>
                <ToggleControl
                    label={__('Animate', 'vayu-blocks')}
                    checked={attributes.waitForAnimate}
                    onChange={(value) => setAttributes({ waitForAnimate: value })}
                />

                <ToggleControl
                    label={__('Lazy Load', 'vayu-blocks')}
                    checked={attributes.lazyLoad}
                    onChange={(value) => setAttributes({ lazyLoad: value })}
                />

                <ToggleControl
                    label={__('Auto Play', 'vayu-blocks')}
                    checked={attributes.autoplay}
                    onChange={(value) => {
                        // Create an object to hold the updated attributes
                        const updatedAttributes = {
                            autoplay: value
                        };
                    
                        // Add 'infinite' attribute conditionally
                        if (value === true) {
                            updatedAttributes.infinite = true;
                        }
                    
                        // Update attributes
                        setAttributes(updatedAttributes);
                    }}
                />
                {attributes.autoplay && (
                    <>
                        <RangeControl
                            label={__('Auto play Speed', 'vayu-blocks')}
                            value={attributes.autoplaySpeed}
                            onChange={(value) => setAttributes({ autoplaySpeed: value })}
                            min={100}
                            max={5000}
                            step={1}
                        />
                        <ToggleControl
                            label={__('Right To Left', 'vayu-blocks')}
                            checked={attributes.rtl}
                            onChange={(value) => setAttributes({ rtl: value })}
                        />
                        <ToggleControl
                            label={__('Pause On Hover', 'vayu-blocks')}
                            checked={attributes.pauseOnHover}
                            onChange={(value) => setAttributes({ pauseOnHover: value })}
                        />
                    </>
                )}

                <ToggleControl
                    label={__('Focus', 'vayu-blocks')}
                    checked={attributes.focusOnSelect}
                    onChange={(value) => setAttributes({ focusOnSelect: value })}
                />
                <h6>Enable this option to ensure that clicking on any slide will move it to the center, enhancing focus and interaction.</h6>

            </PanelBody>

            <PanelBody title={__('Pagination','vayu-blocks')} initialOpen={false}>

                <ToggleControl
                    label={__('Show Dots', 'vayu-blocks')}
                    checked={attributes.dots}
                    onChange={(value) => setAttributes({ dots: value })}
                />

                <ToggleControl
                    label={__('Arrow', 'vayu-blocks')}
                    checked={attributes.arrow}
                    onChange={(value) => setAttributes({ arrow: value })}
                />

                <ToggleControl
                    label={__('custom Paging', 'vayu-blocks')}
                    checked={attributes.customPaging}
                    onChange={(value) => setAttributes({ customPaging: value })}
                />
            </PanelBody>
        </>

    );
};

export default PostSettings;
