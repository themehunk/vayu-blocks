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

            <PanelRow>
                <ToggleControl
                    className='vayu_blocks_togglecontrol_image_flip'
                    label={__('Show Back Image', 'vayu-blocks')}
                    checked={attributes.back_image}
                    onChange={(value) =>  setAttributes({back_image:value})}
                />
            </PanelRow>

                {/* Overlay and animation effect  */}
                <PanelBody title={__('Advance Hover Animation','vayu-blocks')} initialOpen={false}>
                    
                    <SelectControl
                        label={__('Image Effect', 'vayu-blocks')}
                        value={attributes.imagehvreffect}
                        options={[
                                { label: __('None', 'vayu-blocks'), value: 'none' },
                                { label: __('Flip Right', 'vayu-blocks'), value: 'flip-front' },
                                { label: __('Flip Left', 'vayu-blocks'), value: 'flip-front-left' },
                                { label: __('Flip Top', 'vayu-blocks'), value: 'flip-back' },
                                { label: __('Flip Bottom', 'vayu-blocks'), value: 'flip-back-bottom' },
                                { label: __('Flip Left Top', 'vayu-blocks'), value: 'flip-z' },
                                { label: __('Flip Right Top', 'vayu-blocks'), value: 'flip-x' },
                        ]}
                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                    />

                </PanelBody>
                

            </div>
    );
};

export default SlideSettings;
