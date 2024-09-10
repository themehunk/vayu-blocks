import React, { useEffect, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    TextareaControl,
    TextControl,
    __experimentalBoxControl as BoxControl,
    SelectControl,
    __experimentalToolsPanel as ToolsPanel,
    FocalPointPicker,
    DuotonePicker
} from '@wordpress/components';
import {MediaPlaceholder } from '@wordpress/block-editor';

import Vayu_Block_Toggle from '../advance-slider/Components/ToggleGroupControl/Vayu_Block_Toggle';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel';

const SlideSettings = ({ attributes, setAttributes }) => {

    const [activeButton, setActiveButton] = useState('content');

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);

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
                        ]}
                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                    />

                    <RangeControl
                        label={__('Image Transition Time', 'vayu-blocks')}
                        value={attributes.imagetransitiontime}
                        onChange={(value) => setAttributes({imagetransitiontime:value})}
                        min={0}
                        max={5}
                        step={0.1}
                    />

                    {attributes.overlay && (
                        <>
                        <SelectControl
                        label={__('Image Overlay', 'vayu-blocks')}
                        value={attributes.imageoverlayouteffect}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'overlaynone' },
                            { label: __('Fade In', 'vayu-blocks'), value: 'overlayfade-in' },
                            { label: __('Fade In Up', 'vayu-blocks'), value: 'overlayfade-in-up' },
                            { label: __('Fade In Down', 'vayu-blocks'), value: 'overlayfade-in-down' },
                            { label: __('Fade In Left', 'vayu-blocks'), value: 'overlayfade-in-left' },
                            { label: __('Fade In Right', 'vayu-blocks'), value: 'overlayfade-in-right' },
                            { label: __('Flip Horizontal', 'vayu-blocks'), value: 'overlayflip-horizontal' },
                            { label: __('Flip Vertical', 'vayu-blocks'), value: 'overlayflip-vertical' },
                            { label: __('Zoom In Up', 'vayu-blocks'), value: 'overlayzoom-in-up' },
                            { label: __('Zoom In Left', 'vayu-blocks'), value: 'overlayzoom-in-left' },
                            { label: __('Zoom In Right', 'vayu-blocks'), value: 'overlayzoom-in-right' },
                            { label: __('Zoom In Down', 'vayu-blocks'), value: 'overlayzoom-in-down' },
                            { label: __('Partial Overlay', 'vayu-blocks'), value: 'overlaypartial-overlay' },
                          
                        ]}
                        onChange={(value) => setAttributes({ imageoverlayouteffect: value })}
                    />

                    <RangeControl
                        label={__('Overlay Transition Time', 'vayu-blocks')}
                        value={attributes.overlaytransitiontime}
                        onChange={(value) => setAttributes({overlaytransitiontime:value})}
                        min={0}
                        max={5}
                        step={0.1}
                    />

                    </>

                    )}

                    
                    

                </PanelBody>

                <PanelBody title={__('Overlay Content')} initialOpen={false}>
                    
                <ToggleControl
                    className='vayu_blocks_togglecontrol'
                    label={__('Overlay', 'vayu-blocks')}
                    checked={attributes.overlay}
                    onChange={(value) =>  setAttributes({overlay:value, showPreview: false})}
                />
                
                {attributes.overlay && (
                    <>
                        {/* Show Preview Button */}
                        <Button
                            isPrimary
                            onClick={() => setAttributes({showPreview:!attributes.showPreview})}
                            className='vayu_blocks_show_preview_button'
                        >
                            {attributes.showPreview ? __('Hide Preview', 'vayu-blocks') : __('Show Preview', 'vayu-blocks')}
                        </Button>
                    
                        <p>
                            The overlay will be visible, and the animation effect will be turned off.
                        </p>

                        <>
                            <TextareaControl
                                label={__('Heading', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({headingtext:value})}
                                value={attributes.headingtext}
                            />

                            <TextareaControl
                                label={__('Image Caption', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({imageCaption:value})}
                                value={attributes.imageCaption}
                            />

                            <TextareaControl
                                label={__('Button Text', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({buttontext:value})}
                                value={attributes.buttontext}
                            />

                            <TextControl
                                className='vayu_blocks_textareatextcontrol'
                                label="Link URL"
                                onChange={(value) =>  setAttributes({buttonlink})}
                                value={attributes.buttonlink}
                                placeholder="Enter a URL"
                            />

                            <ToggleControl
                                className='vayu_blocks_togglecontrol'
                                label="Open in new tab"
                                checked={attributes.buttonnewtab}
                                onChange={(value) =>  setAttributes({buttonnewtab:value})}
                            />

                        </>
                            
                           
                    </>
                )}

                </PanelBody>

            </div>
    );
};

export default SlideSettings;
