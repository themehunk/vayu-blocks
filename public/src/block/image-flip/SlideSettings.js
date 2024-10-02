import React, { Fragment } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    TextareaControl,
    TextControl,
    SelectControl,
    __experimentalToolsPanel as ToolsPanel,
    FocalPointPicker,
    DuotonePicker,
    PanelRow
} from '@wordpress/components';


const SlideSettings = ({ attributes, setAttributes }) => {

    

    return (
        
            <div class="vayu_blocks_image-flip-settings_main">


                {/* Overlay and animation effect  */}
                <PanelBody title={__('Advance Hover Animation','vayu-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Image Filter', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.imagehvrfilter}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Blur', 'vayu-blocks'), value: 'blur' },
                            { label: __('Sepia', 'vayu-blocks'), value: 'sepia' },
                            { label: __('GrayScale', 'vayu-blocks'), value: 'grayScale' },
                            { label: __('GrayScale Reverse', 'vayu-blocks'), value: 'grayScalereverse' },
                        ]}
                        onChange={(value) => setAttributes({ imagehvrfilter: value })}
                    />
                    <p>If Duotone is applied, the image Filter won't work but image effect will.</p>

                    <SelectControl
                        label={__('Image Effect', 'vayu-blocks')}
                        value={attributes.imagehvreffect}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Zoom In', 'vayu-blocks'), value: 'zoom-in' },
                            { label: __('Zoom Out', 'vayu-blocks'), value: 'zoom-out' },
                            { label: __('Fade In', 'vayu-blocks'), value: 'fade-in' },
                            { label: __('Fade Out', 'vayu-blocks'), value: 'fade-out' },
                            { label: __('Slide Up', 'vayu-blocks'), value: 'slide-up' },
                            { label: __('Slide Down', 'vayu-blocks'), value: 'slide-down' },
                            { label: __('Slide Left', 'vayu-blocks'), value: 'slide-left' },
                            { label: __('Slide Right', 'vayu-blocks'), value: 'slide-right' },
                            { label: __('Rotate', 'vayu-blocks'), value: 'rotate' },
                            ...(attributes.overlay === false ? [
                                { label: __('Flip Right', 'vayu-blocks'), value: 'flip-front' },
                                { label: __('Flip Left', 'vayu-blocks'), value: 'flip-front-left' },
                                { label: __('Flip Top', 'vayu-blocks'), value: 'flip-back' },
                                { label: __('Flip Bottom', 'vayu-blocks'), value: 'flip-back-bottom' }
                            ] : [])
                        ]}
                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                    />

                    {(attributes.imagehvreffect === 'flip-front' || attributes.imagehvreffect === 'flip-back' || attributes.imagehvreffect === 'flip-front-left' || attributes.imagehvreffect === 'flip-back-bottom' ) && (
                        <p>For the flip animation overlay, the effect is animated by default. However, when using the flip animations, the overlay animation may stop and remain static.</p>
                    )}


                    <RangeControl
                        label={__('Image Transition Time', 'vayu-blocks')}
                        value={attributes.imagetransitiontime}
                        onChange={(value) => setAttributes({imagetransitiontime:value})}
                        min={0}
                        max={5}
                        step={0.1}
                    />

                    

                </PanelBody>
                

            </div>
    );
};

export default SlideSettings;
