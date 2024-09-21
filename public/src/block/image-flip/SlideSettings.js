import React from 'react';
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
    DuotonePicker
} from '@wordpress/components';
import {MediaPlaceholder } from '@wordpress/block-editor';

import Vayu_Block_Toggle from '../advance-slider/Components/ToggleGroupControl/Vayu_Block_Toggle';

const SlideSettings = ({ attributes, setAttributes }) => {

    //default duotone
    const vayu_blocks_DUOTONE_PALETTE = [
        { colors: ['#ff8c00', '#ff4500'], name: 'Orange and Red', slug: 'orange-red', id: '#duotone-orange-red' },
        { colors: ['#ff0000', '#00ff00'], name: 'Red and Green', slug: 'red-green', id: '#duotone-red-green' },
        { colors: ['#000000', '#ffffff'], name: 'Black and White', slug: 'black-white', id: '#duotone-black-white' },
        { colors: ['#000097', '#ff4747'], name: 'Blue and Red', slug: 'blue-red', id: '#duotone-blue-red' },
        { colors: ['#8c00b7', '#fcff41'], name: 'Purple and Yellow', slug: 'purple-yellow', id: '#duotone-purple-yellow' },
        { colors: ['#ffa500', '#008080'], name: 'Orange and Teal', slug: 'orange-teal', id: '#duotone-orange-teal' },
        { colors: ['#ff69b4', '#0000ff'], name: 'Pink and Blue', slug: 'pink-blue', id: '#duotone-pink-blue' },
        { colors: ['#00ffff', '#ff00ff'], name: 'Cyan and Magenta', slug: 'cyan-magenta', id: '#duotone-cyan-magenta' },
        { colors: ['#ffff00', '#000000'], name: 'Yellow and Black', slug: 'yellow-black', id: '#duotone-yellow-black' },
        { colors: ['#add8e6', '#90ee90'], name: 'Light Blue and Light Green', slug: 'lightblue-lightgreen', id: '#duotone-lightblue-lightgreen' },
        { colors: ['#808080', '#ffff00'], name: 'Gray and Yellow', slug: 'gray-yellow', id: '#duotone-gray-yellow' }
    ];

    //duotone change
    const vayu_blocks_duotoneHandler = (value) => {
        // Find the filter ID corresponding to the given color array
        if (!Array.isArray(value) || value.length === 0) {
            setAttributes({duotone:""});
        }

        const filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
            colors.every((color, i) => color === value[i])
        );
    
        if (filter) {
            const { id } = filter;
            setAttributes({duotone:id});
        }
    };

    //duotone value
    const vayu_blocks_duotonevalue = () => {
        // Get the ID from the slide's layout duotone
        const id = attributes.duotone;
    
        // Find the matching filter in the DUOTONE_PALETTE
        const filter = vayu_blocks_DUOTONE_PALETTE.find((filter) => filter.id === id);
    
        // If a match is found, return the colors array
        if (filter) {
            return filter.colors;
        }
        return '';
    };

    return (
        
            <div class="vayu_blocks_image-flip-settings_main">

                {/* Background Image */}
                <PanelBody title={__('Image','vayu-blocks')} initialOpen={false}>
                    <h4>{__('Background','vayu-blocks')}</h4>
                    {attributes.image ? (
                        <>         

                            <FocalPointPicker
                                __nextHasNoMarginBottom
                                url={ attributes.image }
                                value={ attributes.focalPoint }
                                onDragStart={ (value)=> setAttributes({focalPoint:value})}
                                onDrag={ (value)=> setAttributes({focalPoint:value}) }
                                onChange={ (value)=> setAttributes({focalPoint:value}) }
                            />
                            <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => setAttributes({image:""})}>
                                {__('Clear', 'vayu-blocks')}
                            </Button>


                            <div class= "vayu_blocks_image_toolspanel_flip">
                            <ToolsPanel
                                label="Filter"
                                __nextHasNoMarginBottom
                            >
                                <DuotonePicker
                                    duotonePalette={ vayu_blocks_DUOTONE_PALETTE}
                                    disableCustomColors
                                    disableCustomDuotone
                                    value={ vayu_blocks_duotonevalue() }
                                    onChange={ (value) => vayu_blocks_duotoneHandler(value) }
                                />
                            </ToolsPanel>
                            </div>

                            <TextControl
                                className="imagealttextrichcontrol"
                                label="Alt text"
                                __nextHasNoMarginBottom
                                onChange={(value)=>setAttributes({imagealttext:value})}
                                value={attributes.imagealttext}
                            />

                            <Vayu_Block_Toggle
                                value={attributes.imagecover}
                                onChange={(value) => setAttributes({imagecover:value})}
                                isBlock={true}
                                __nextHasNoMarginBottom={true}
                                options={[
                                    { value: 'contain', label: 'Contain' },
                                    { value: 'cover', label: 'Cover' },
                                ]}
                            />

                            <Vayu_Block_Toggle
                                value={attributes.imageborderradiuscircle}
                                onChange={(value) => setAttributes({imageborderradiuscircle:value})}
                                isBlock={true}
                                __nextHasNoMarginBottom={true}
                                options={[
                                    { value: 'square', label: 'Square' },
                                    { value: 'circle', label: 'Circle' },
                                ]}
                            />
                          
                            <div class= "vayu_blocks_image_toolspanel_flip">
                            <ToolsPanel
                                label="Aspect Ratio"
                                __nextHasNoMarginBottom
                                resetAll={() => setAttributes({ imageaspectratio: 'orginal' })}
                            >
                                <SelectControl
                                    value={attributes.imageaspectratio}
                                    options={[
                                        { label: __('None', 'vayu-blocks'), value: 'none' }, // No fixed aspect ratio
                                        { label: __('Original', 'vayu-blocks'), value: 'original' }, // Original aspect ratio
                                        { label: __('1:1 (Square)', 'vayu-blocks'), value: '1/1' },
                                        { label: __('16:9 (Widescreen)', 'vayu-blocks'), value: '16/9' },
                                        { label: __('4:3 (Standard)', 'vayu-blocks'), value: '4/3' },
                                        { label: __('3:2 (Photography)', 'vayu-blocks'), value: '3/2' },
                                        { label: __('21:9 (Cinematic)', 'vayu-blocks'), value: '21/9' }
                                    ]}                                    
                                    onChange={(value) => setAttributes({ imageaspectratio: value })}
                                />

                            </ToolsPanel>
                            </div>

                        </>
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: __('Background Image', 'vayu-blocks'),
                                    name: __('an image', 'vayu-blocks')
                                }}
                                onSelect={(media) => {
                                    setAttributes({image:media.url})
                                }}                                                                
                                onSelectURL='true'
                                accept="image/*"
                                allowedTypes={['image']}
                            />
                        )}

                </PanelBody >

                {/* Overlay and animation effect  */}
                <PanelBody title={__('Image Effect','vayu-blocks')} initialOpen={false}>
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
                            { label: __('Flip Horizontal', 'vayu-blocks'), value: 'flip-horizontal' },
                            { label: __('Flip Vertical', 'vayu-blocks'), value: 'flip-vertical' },
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
