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
    FontSizePicker,
    TextControl,
    __experimentalBoxControl as BoxControl,
    SelectControl,
    __experimentalToolsPanel as ToolsPanel,
} from '@wordpress/components';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { MdContentCopy } from "react-icons/md";
import {MediaPlaceholder } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';
import {	__experimentalPanelColorGradientSettings as PanelColorGradientSettings} from '@wordpress/block-editor';
import { PanelColorSettings } from '@wordpress/block-editor';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';

import {
    HoverControl,
    ToogleGroupControl,
} from '../../components/index.js';

import {Vayu_Block_Dimension_Control} from './Components/Dimesions/Vayu_Block_Dimension_Control';
import Vayu_Block_Toggle from './Components/ToggleGroupControl/Vayu_Block_Toggle';
import { Vayu_Block_Border_Control } from './Components/BorderControl/Vayu_Blocks_Border_control';
import {Vayu_blocks_typographycontrol} from './Components/Typography/Vayu_blocks_typographycontrol';
import ColorPanel from './Components/ColorPanel/ColorPanel';


const SlideSettings = ({ attributes, setAttributes }) => {

    const [activeButton, setActiveButton] = useState('content');

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);


    return (
        
            <div class="vayu_blocks_image-flip-settings_main">

                <PanelBody title={__('Image','vayu-blocks')} initialOpen={false}>
                    <h4>{__('Background','vayu-blocks')}</h4>
                    {attributes.image ? (
                        <>         
                            <div class="vayu-blocks-image-container">
                                <img src={attributes.image} alt="image" />
                                <button class="vayu-blocks-change-button" onClick={() => setAttributes({image:""})}>Change</button>
                            </div>
                            <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => setAttributes({image:""})}>
                                {__('Clear', 'vayu-blocks')}
                            </Button>
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
                        value={attributes.imageoverlayeffect}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Blur', 'vayu-blocks'), value: 'blur' },
                            { label: __('Sepia', 'vayu-blocks'), value: 'sepia' },
                            { label: __('GrayScale', 'vayu-blocks'), value: 'grayScale' },
                            { label: __('GrayScale Reverse', 'vayu-blocks'), value: 'grayScalereverse' },
                        ]}
                        onChange={(value) => setAttributes({ imagehvrfilter: value })}
                    />
                    <SelectControl
                        label={__('Image Hover Effect', 'vayu-blocks')}
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

                    <SelectControl
                        label={__('Image Overlay', 'vayu-blocks')}
                        value={attributes.imageoverlayouteffect}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Fade In', 'vayu-blocks'), value: 'fade-in' },
                            { label: __('Fade In Up', 'vayu-blocks'), value: 'fade-in-up' },
                            { label: __('Fade In Down', 'vayu-blocks'), value: 'fade-in-down' },
                            { label: __('Fade In Left', 'vayu-blocks'), value: 'fade-in-left' },
                            { label: __('Fade In Right', 'vayu-blocks'), value: 'fade-in-right' },
                            { label: __('Flip Horizontal', 'vayu-blocks'), value: 'flip-horizontal' },
                            { label: __('Flip Vertical', 'vayu-blocks'), value: 'flip-vertical' },
                            { label: __('Zoom In Up', 'vayu-blocks'), value: 'zoom-in-up' },
                            { label: __('Zoom In Left', 'vayu-blocks'), value: 'zoom-in-left' },
                            { label: __('Zoom In Right', 'vayu-blocks'), value: 'zoom-in-right' },
                            { label: __('Zoom In Down', 'vayu-blocks'), value: 'zoom-in-down' },
                            { label: __('Partial Overlay', 'vayu-blocks'), value: 'partial-overlay' },
                          
                        ]}
                        onChange={(value) => setAttributes({ imageoverlayouteffect: value })}
                    />

                </PanelBody>

                <PanelBody title={__('Image Overlay')} initialOpen={false}>
                    <Vayu_Block_Toggle
                        value={activeButton}
                        onChange={(value) => setActiveButton(value)}
                        isBlock={true}
                        __nextHasNoMarginBottom={true}
                        options={[
                            { value: 'Content', label: 'content' },
                            { value: 'Color', label: 'color' },
                        ]}
                    />

                    {activeButton === 'content' && (
                        <>
                            <TextareaControl
                                label={__('Heading', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({headingtext:value})}
                                value={attributes.headingtext}
                            />

                            <TextareaControl
                                label={__('Image Caption', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({imageCaption})}
                                value={attributes.imageCaption}
                            />

                            <TextareaControl
                                label={__('Button Text', 'vayu-blocks')}
                                onChange={(value) =>  setAttributes({buttontext})}
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
                    )}

                    {activeButton === 'color' && (
                        <ColorPanel
                            colorTool={[
                                {
                                    active: ['color'],
                                    name: 'Text',
                                    value: attributes.overlaycolor,
                                    attribute: 'Background',
                                }
                            ]}
                            handelColorPanel={(value)=>setAttributes({overlaycolor:value.color})}
                            initialTab="color"
                        />
                    )}

                </PanelBody>

            </div>
    );
};

export default SlideSettings;
