import React, { useEffect, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {	__experimentalPanelColorGradientSettings as PanelColorGradientSettings} from '@wordpress/block-editor';
import { PanelColorSettings } from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    FontSizePicker,
    SelectControl,
    __experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';
import {
    HoverControl,
} from '../../components/index.js';



const PostSettings = ({ attributes, setAttributes }) => {

    const [hover, sethover] = useState('left');

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);

    const vayu_blocks_fontsizes = [
        {
            name: 'Small',
            size: 16,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 20,
            slug: 'meadium'
        },
        {
            name: 'Big',
            size: 24,
            slug: 'big'
        },
        {
            name: 'ExtraBig',
            size: 28,
            slug: 'extrabig'
        }
    ];


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
                    label={ __('Show Dots', 'vayu-blocks') }
                    checked={ attributes.dots.show }
                    onChange={ (value) => setAttributes({ dots: { ...attributes.dots, show: value } }) }
                />

                {/* 
                { attributes.dots.show && (
                    <>
                        <PanelColorGradientSettings
                            title={ __( 'Background', 'vayu-blocks' ) }
                            settings={[
                                {
                                    colorValue: attributes.dots.backgroundColor,
                                    gradientValue: attributes.dots.backgroundGradient,
                                    onColorChange: (color) => {
                                        setAttributes({ dots: { ...attributes.dots, backgroundColor: color } });
                                    },
                                    onGradientChange: (gradient) => {
                                        setAttributes({ dots: { ...attributes.dots, backgroundGradient: gradient } });
                                    },
                                    label: __( 'Background', 'vayu-blocks' ),
                                },
                            ]}
                        />

                        <PanelColorSettings
                            title={ __( 'Color' ) }
                            colorSettings={ [
                                {
                                    value: attributes.dots.color,
                                    onChange: (colorValue) => {
                                        setAttributes({ dots: { ...attributes.dots, color: colorValue } });
                                    },
                                    label: __( 'Color' ),
                                },
                            ] }
                        />

                        <FontSizePicker
                            label={ __('Font Size', 'vayu-blocks') }
                            fontSizes={vayu_blocks_fontsizes}
                            onChange={(value) => setAttributes({ dots: { ...attributes.dots, size: value } })}
                            value={ attributes.dots.size }
                        />
                    </>
                )} */}

                <ToggleControl
                    label={__('Arrow', 'vayu-blocks')}
                    checked={attributes.arrow}
                    onChange={(value) => setAttributes({ arrow: value })}
                />
                {attributes.arrow && (
                    <>
                    <PanelBody title={__('Arrow Style','vayu-blocks')}>
                     
                            <>
                                <SelectControl
                                    label={__('Arrow', 'vayu-blocks')}
                                    value={attributes.arrowstyleleft.tag}
                                    options={[
                                        { label: __('Arrow', 'vayu-blocks'), value: 'arrow' },
                                        { label: __('Chevron', 'vayu-blocks'), value: 'chevron' },
                                        { label: __('Hand', 'vayu-blocks'), value: 'hand' },
                                        { label: __('Circle Arrow', 'vayu-blocks'), value: 'circle' },
                                        { label: __('Caret', 'vayu-blocks'), value: 'caret' },
                                    ]}
                                    onChange={(value)=>setAttributes({ arrowstyleleft: { ...attributes.arrowstyleleft, tag: value}})}
                                />  


                                <PanelColorSettings
                                    title={ __( 'Backgrund Color', 'vayu-blocks' ) }
                                    colorSettings={ [
                                        {
                                            value: attributes.arrowstyleleft.backgroundColor,
                                            onChange: (colorValue) => setAttributes({
                                                arrowstyleleft: {
                                                    ...attributes.arrowstyleleft,
                                                    backgroundColor: colorValue,
                                                },
                                            }),
                                            label: __( 'Background Color', 'vayu-blocks' ),
                                        },
                                        {
                                            value: attributes.arrowstyleleft.color,
                                            onChange: (colorValue) => setAttributes({
                                                arrowstyleleft: {
                                                    ...attributes.arrowstyleleft,
                                                    color: colorValue,
                                                },
                                            }),
                                            label: __( 'Color', 'vayu-blocks' ),
                                        }
                                       
                                    ] }

                                >
                                </PanelColorSettings>

                                <FontSizePicker
                                    label={__('Font Size', 'vayu-blocks')}
                                    fontSizes={vayu_blocks_fontsizes}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            size: value,
                                        },
                                    })}
                                    value={attributes.arrowstyleleft.size}
                                />


                                <BoxControl
                                    label={__('Border Radius', 'vayu-blocks')}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            borderRadius: value,
                                        },
                                    })}
                                    values={attributes.arrowstyleleft.borderRadius}
                                />


                                <BoxControl
                                    label={__('Margin', 'vayu-blocks')}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            margin: value,
                                        },
                                    })}
                                    values={attributes.arrowstyleleft.margin}
                                />
                            </>

                        
                        
                    </PanelBody>

                    </>
                )}

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
