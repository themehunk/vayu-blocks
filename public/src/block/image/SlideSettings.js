import React, { useState } from 'react';
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
import {Vayu_blocks_typographycontrol} from '../../components/wp-default-compoents/Typography/Vayu_blocks_typographycontrol';
import ColorPanel from '../../components/wp-default-compoents/ColorPanel/ColorPanel';
import { Vayu_Block_Border_Control } from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control';

import {
    HoverControl,
    ToogleGroupControl,
} from '../../components/index.js';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';


const SlideSettings = ({ attributes, setAttributes }) => {

    const [overlay, setoverlay] = useState('normal');

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
    
    const vayu_blocks_sub_heading_sizes = [
        {
            name: 'Small',
            size: 12,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 16,
            slug: 'meadium'
        },
        {
            name: 'extraMeadium',
            size: 20,
            slug: 'extrameadium'
        },
        {
            name: 'Big',
            size: 24,
            slug: 'big'
        }
    ];

    const handleTypographyChange = (newValues) => {

        if(newValues.size){
            setAttributes({captionsize:newValues.size})
        }
        if(newValues.appearance){
            setAttributes({captionfontweight:newValues.appearance})
        }  
    };

    const setoverlayandnormal = (value) => {
        console.log(value);
        if(value==='normal'){
            setoverlay('normal');
        }
        if(value==='overlay'){
            setoverlay('overlay');
        }
    }

    const vayu_blocks_handleimageBorderChange = (newBorders) => {
        const updatedAttributes = {};
        const updatedAttributesborderradius = {};
    
        // Check if newBorders and newBorders.border are defined
        if (newBorders && newBorders.borderRadius) {
            // Handle specific side settings
            if (newBorders.borderRadius.top || newBorders.borderRadius.bottom || newBorders.borderRadius.left || newBorders.borderRadius.right) {
                
                if (newBorders.borderRadius.top) {
                    
                    updatedAttributesborderradius[`top`] = newBorders.borderRadius.top.width;
                   
                }
                if (newBorders.borderRadius.bottom) {
              
                    updatedAttributesborderradius[`bottom`] = newBorders.borderRadius.bottom.width;
            
                }
                if (newBorders.borderRadius.left) {
          
                    updatedAttributesborderradius[`left`] = newBorders.borderRadius.left.width;
       
                }
                if (newBorders.borderRadius.right) {

                    
                    updatedAttributesborderradius[`right`] = newBorders.borderRadius.right.width;

                }
            } else {
                    updatedAttributesborderradius[`top`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`bottom`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`left`] = newBorders.borderRadius.width;
                    updatedAttributesborderradius[`right`] = newBorders.borderRadius.width;
            }

            setAttributes({ imageborderRadius: updatedAttributesborderradius });
        } else {
            console.error("Invalid newBorders format:", newBorders);
        }
    
        // Check if newBorders and newBorders.border are defined
        if (newBorders && newBorders.border) {
            // Handle specific side settings
            if (newBorders.border.top || newBorders.border.bottom || newBorders.border.left || newBorders.border.right) {
                if (newBorders.border.top) {
                    updatedAttributes[`topcolor`] = newBorders.border.top.color;
                    updatedAttributes[`topwidth`] = newBorders.border.top.width;
                    updatedAttributes[`topstyle`] = newBorders.border.top.style;
                }
                if (newBorders.border.bottom) {
                    updatedAttributes[`bottomcolor`] = newBorders.border.bottom.color;
                    updatedAttributes[`bottomwidth`] = newBorders.border.bottom.width;
                    updatedAttributes[`bottomstyle`] = newBorders.border.bottom.style;
                }
                if (newBorders.border.left) {
                    updatedAttributes[`leftcolor`] = newBorders.border.left.color;
                    updatedAttributes[`leftwidth`] = newBorders.border.left.width;
                    updatedAttributes[`leftstyle`] = newBorders.border.left.style;
                }
                if (newBorders.border.right) {
                    updatedAttributes[`rightcolor`] = newBorders.border.right.color;
                    updatedAttributes[`rightwidth`] = newBorders.border.right.width;
                    updatedAttributes[`rightstyle`] = newBorders.border.right.style;
                }
            } else {
                // Handle common border settings
                updatedAttributes[`topcolor`] = newBorders.border.color;
                updatedAttributes[`topwidth`] = newBorders.border.width;
                updatedAttributes[`topstyle`] = newBorders.border.style;
            
                updatedAttributes[`bottomcolor`] = newBorders.border.color;
                updatedAttributes[`bottomwidth`] = newBorders.border.width;
                updatedAttributes[`bottomstyle`] = newBorders.border.style;
            
                updatedAttributes[`leftcolor`] = newBorders.border.color;
                updatedAttributes[`leftwidth`] = newBorders.border.width;
                updatedAttributes[`leftstyle`] = newBorders.border.style;
            
                updatedAttributes[`rightcolor`] = newBorders.border.color;
                updatedAttributes[`rightwidth`] = newBorders.border.width;
                updatedAttributes[`rightstyle`] = newBorders.border.style;
            }
        } else {
            console.error("Invalid newBorders format:", newBorders);
        }
    
        setAttributes({ imageborder: updatedAttributes });
    };

    const handlecoloroverlay = (value) => {
        if(value.color){

        
        if(value.color === undefined ){
            setAttributes({overlaycolor: 'transparent'})
        }
        else{
            setAttributes({overlaycolor: value.color})
        }
    }   
    else if(value.colorhvr){
        if(value.colorhvr === undefined ){
            setAttributes({overlayhvrcolor: 'transparent'})
        }
        else{
            setAttributes({overlayhvrcolor: value.colorhvr})
        }
    }
    }

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

                            <TextControl
                            className="imagealttextrichcontrol"
                            label="Alt text"
                            __nextHasNoMarginBottom
                            onChange={(value)=>setAttributes({imagealttext:value})}
                            value={attributes.imagealttext}
                            />
                        </>
                        ) : (
                            <>
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
                            <br/>
                            </>
                        )}

                        <HoverControl 
                            value={overlay}
							options={[
                                { value: 'normal', label: 'Normal' },
                                { value: 'overlay', label: 'Overlay' },
                            ]}
							onChange={(value)=>setoverlayandnormal(value)} 
                        />


                        {overlay==='normal' && (
                            <>
                                <SelectControl
                                    label="Aspect Ratio"
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

                                        <p>Filter</p>
                                        <DuotonePicker
                                            label="Filter"
                                            duotonePalette={ vayu_blocks_DUOTONE_PALETTE}
                                            disableCustomColors
                                            disableCustomDuotone
                                            value={ vayu_blocks_duotonevalue() }
                                            onChange={ (value) => vayu_blocks_duotoneHandler(value) }
                                        />
                                  

                                    <SelectControl
                                        label={__('Image Effect', 'vayu-blocks')}
                                        value={attributes.imagehvreffect}
                                        options={[
                                            { label: __('None', 'vayu-blocks'), value: 'none' },
                                            { label: __('Zoom In', 'vayu-blocks'), value: 'zoom-in' },
                                            { label: __('Slide', 'vayu-blocks'), value: 'slide-left' },
                                            { label: __('GrayScale Reverse', 'vayu-blocks'), value: 'grayScalereverse' },
                                            { label: __('Clip Animation', 'vayu-blocks'), value: 'clip-animation' },
                                            { label: __('Diagonal Expand', 'vayu-blocks'), value: 'clip-diagonal-expand' },
                                            { label: __('Starbust', 'vayu-blocks'), value: 'clip-starburst' },
                                            { label: __('Diamond', 'vayu-blocks'), value: 'clip-diamond' },
                                            { label: __('Diagonal slide', 'vayu-blocks'), value: 'clip-diagonal-slide' },
                                            { label: __('Hex Pulse', 'vayu-blocks'), value: 'clip-hex-pulse' },
                                            { label: __('Triangle Expand', 'vayu-blocks'), value: 'clip-triangle-expand' },
                                            { label: __('Circle Burst', 'vayu-blocks'), value: 'clip-circle-burst' },
                                            { label: __('Zigzag', 'vayu-blocks'), value: 'clip-zigzag' },
                                            { label: __('Diamond Expand', 'vayu-blocks'), value: ' clip-diamond-expand' },
                                        ]}
                                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                                    />
                            </>
                        )}

                        {overlay==='overlay' && (
                            <>
                                <ToggleControl
                                    className='vayu_blocks_togglecontrol'
                                    label={__('Overlay', 'vayu-blocks')}
                                    checked={attributes.overlayshow}
                                    onChange={(value) =>  setAttributes({overlayshow:value})}
                                />
                                {attributes.overlayshow && (<>

                                <h4>
                                    {__('Alignment', 'vayu-blocks')}
                                    </h4>
                                    <ToogleGroupControl
                                        label={__('Alignment', 'vayu-blocks')}
                                        value={ attributes.overlayalignment}
                                        onChange={(value) => setAttributes({overlayalignment:value})}
                                        options={[
                                            {
                                                icon: HorizontalLeft,
                                                label: __( 'Left', 'vayu-blocks' ),
                                                value: 'left'
                                            },
                                            {
                                                icon: Center,
                                                label: __( 'Center', 'vayu-blocks' ),
                                                value: 'center'
                                            },
                                            {
                                                icon: HorizontalRight,
                                                label: __( 'Right', 'vayu-blocks' ),
                                                value: 'right'
                                            },
                                        ]}
                                        
                                        hasIcon
                                    />

                                    <ToogleGroupControl
                                        label={__('Alignment', 'vayu-blocks')}
                                        value={ attributes.overlayalignmentvertical}
                                        onChange={(value) => setAttributes({overlayalignmentvertical:value})}
                                        options={[
                                            {
                                                icon: Start,
                                                label: __( 'start', 'vayu-blocks' ),
                                                value: 'start'
                                            },
                                            {
                                                icon: Center,
                                                label: __( 'Center', 'vayu-blocks' ),
                                                value: 'center'
                                            },
                                            {
                                                icon: End,
                                                label: __( 'end', 'vayu-blocks' ),
                                                value: 'end'
                                            },
                                        ]}
                                        
                                        hasIcon
                                    />
                                    <br/>

                                    <ColorPanel
                                        colorTool={[
                                            {
                                                active: ['gradient'],
                                                name: 'Overlay',
                                                value: attributes.overlaycolor,
                                                attribute: 'color',
                                            },
                                            {
                                                active: ['gradient'],
                                                name: 'Hover',
                                                value: attributes.overlayhvrcolor,
                                                attribute: 'colorhvr',
                                            }
                                        ]}
                                        handelColorPanel={(value) => handlecoloroverlay(value)}                                          
                                        initialTab="color"
                                    />

                                <Vayu_Block_Border_Control
                                    value={{border:{
                                        top:{
                                            color: attributes.imageborder.topcolor,
                                            width: attributes.imageborder.topwidth,
                                            style: attributes.imageborder.topstyle,
                                        },
                                        bottom: {
                                            color: attributes.imageborder.bottomcolor,
                                            width: attributes.imageborder.bottomwidth,
                                            style: attributes.imageborder.bottomstyle,
                                        },
                                        left: {
                                            color: attributes.imageborder.leftcolor,
                                            width: attributes.imageborder.leftwidth,
                                            style: attributes.imageborder.leftstyle,
                                        },
                                        right: {
                                            color: attributes.imageborder.rightcolor,
                                            width: attributes.imageborder.rightwidth,
                                            style: attributes.imageborder.rightstyle,
                                        }
                                    },
                                    borderRadius:{
                                        top:{
                                            width: attributes.imageborderRadius.top,
                                        },
                                        bottom:{
                                            width: attributes.imageborderRadius.bottom,
                                        },
                                        left:{
                                            width: attributes.imageborderRadius.left,
                                        },
                                        right:{
                                            width: attributes.imageborderRadius.right,
                                        }
                                    }
                                    }}
                                    onChange={(value)=>vayu_blocks_handleimageBorderChange(value)}
                                    includeBorder={true}
                                    includeBorderRadius={true}
                                    para=""
                                />  
                                </>)}
                            </>
                        )}
                    
                </PanelBody >

                {/* Overlay and animation effect  */}
                <PanelBody title={__('Mask','vayu-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Mask shape', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.maskshape}
                        options={[
                            { label: __('None', 'vayu-blocks'), value: 'none' },
                            { label: __('Circle', 'vayu-blocks'), value: 'circle' },
                            { label: __('Diamond', 'vayu-blocks'), value: 'diamond' },
                            { label: __('Hexagone', 'vayu-blocks'), value: 'hexagone' },
                            { label: __('Rounded', 'vayu-blocks'), value: 'rounded' },
                            { label: __('Mask 1', 'vayu-blocks'), value: 'bob1' },
                            { label: __('Mask 2', 'vayu-blocks'), value: 'bob2' },
                            { label: __('Mask 3', 'vayu-blocks'), value: 'bob3' },
                            { label: __('Mask 4', 'vayu-blocks'), value: 'bob4' },
                        ]}
                        onChange={(value) => setAttributes({ maskshape: value })}
                    />

                {attributes.maskshape!=='none' && (
                    <>
  
                    <SelectControl
                        label={__('Mask size', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.masksize}
                        variant="minimal"
                        options={[
                            { label: __('Auto', 'vayu-blocks'), value: 'auto' },
                            { label: __('Contain', 'vayu-blocks'), value: 'contain' },
                            { label: __('Cover', 'vayu-blocks'), value: 'cover' },
                        ]}
                        onChange={(value) => setAttributes({ masksize: value })}
                    />

                    <SelectControl
                        label={__('Mask Position', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.maskposition}
                        options={[
                            { label: __('Center Top', 'vayu-blocks'), value: 'center top' },
                            { label: __('Center Center', 'vayu-blocks'), value: 'center center' },
                            { label: __('Center Bottom', 'vayu-blocks'), value: 'center bottom' },
                            { label: __('Left Top', 'vayu-blocks'), value: 'left top' },
                            { label: __('Left Center', 'vayu-blocks'), value: 'left center' },
                            { label: __('Left Right', 'vayu-blocks'), value: 'left right' },
                            { label: __('Right Top', 'vayu-blocks'), value: 'right top' },
                            { label: __('Right Center', 'vayu-blocks'), value: 'right center' },
                            { label: __('Right Right', 'vayu-blocks'), value: 'right right' },
                        ]}
                        onChange={(value) => setAttributes({ maskposition: value })}
                    />

                    <SelectControl
                        label={__('Mask Repeat', 'vayu-blocks')}
                        __nextHasNoMarginBottom
                        value={attributes.maskrepeat}
                        options={[
                            { label: __('No Repeat', 'vayu-blocks'), value: 'no-repeat' },
                            { label: __('Repeat', 'vayu-blocks'), value: 'repeat' },
                            { label: __('Repeat-X', 'vayu-blocks'), value: 'repeat-x' },
                            { label: __('Repeat-Y', 'vayu-blocks'), value: 'repeat-y' },
                        ]}
                        onChange={(value) => setAttributes({ maskrepeat: value })}
                    />

                </>
                )}

                </PanelBody>

                {/* Caption */}
                <PanelBody title={__('Caption','vayu-blocks')} initialOpen={false}>
                    <ToggleControl
                        className='vayu_blocks_togglecontrol'
                        label={__('Caption', 'vayu-blocks')}
                        checked={attributes.caption}
                        onChange={(value) =>  setAttributes({caption:value})}
                    />
                    {attributes.caption &&(
                        <>
                            <TextControl
                                className="imagealttextrichcontrol"
                                label="Text"
                                __nextHasNoMarginBottom
                                onChange={(value)=>setAttributes({captiontext:value})}
                                value={attributes.captiontext}
                            />

                            <ToogleGroupControl
                                label={__('Alignment', 'vayu-blocks')}
                                value={ attributes.captionalignment}
                                onChange={(value) => setAttributes({captionalignment:value})}
                                options={[
                                    {
                                        icon: HorizontalLeft,
                                        label: __( 'Left', 'vayu-blocks' ),
                                        value: 'left'
                                    },
                                    {
                                        icon: Center,
                                        label: __( 'Center', 'vayu-blocks' ),
                                        value: 'center'
                                    },
                                    {
                                        icon: HorizontalRight,
                                        label: __( 'Right', 'vayu-blocks' ),
                                        value: 'right'
                                    },
                                ]}
                                
                                hasIcon
                            />

                                <ColorPanel
                                colorTool={[
                                    {
                                        active: ['color'],
                                        name: 'Text',
                                        value: attributes.captioncolor,
                                        attribute: 'color',
                                    }
                                ]}
                                handelColorPanel={(value)=>setAttributes({captioncolor:value.color})}
                                initialTab="color"
                            />


                            <div className="vayu_blocks_heading_unitcontrol_slides">
                                <Vayu_blocks_typographycontrol
                                    onChange={(value)=> handleTypographyChange(value)}
                                    includeSize={true}
                                    value={{size:attributes.captionsize,
                                        appearance: attributes.captionfontweight
                                    }}
                                    includeAppearance={true}
                                    vayu_blocks_sizes={vayu_blocks_sub_heading_sizes}
                                    appearanceOptions= {[
                                        { label: __('Normal', 'text-domain'), value: 'normal' },
                                        { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                        { label: __('Bold', 'text-domain'), value: 'bold' },
                                        { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                    ]}
                                    para=""
                                />
                            </div>

                        </>
                    )}
                </PanelBody>

            </div>
    );
};

export default SlideSettings;
