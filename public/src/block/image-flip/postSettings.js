import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {Vayu_blocks_typographycontrol} from '../advance-slider/Components/Typography/Vayu_blocks_typographycontrol';

import {
    PanelBody,
    SelectControl,
} from '@wordpress/components';

import {Vayu_Block_Dimension_Control} from '../advance-slider/Components/Dimesions/Vayu_Block_Dimension_Control';
import { Vayu_Block_Border_Control } from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel';


const PostSettings = ({ attributes, setAttributes }) => {

    const vayu_blocks_sizes = [
        {
            name: 'Small',
            size: '16px',
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: '28px',
            slug: 'meadium'
        },
        {
            name: 'extraMeadium',
            size: '32px',
            slug: 'extrameadium'
        },
        {
            name: 'Big',
            size: '40px',
            slug: 'big'
        }
    ];
    
    const handleTypographyChange = (newValues) => {
    
        if(newValues){
            setAttributes({ heading: newValues})
        }
    };

    const handlecaptionTypographyChange = (newValues) => {
    
        if(newValues){
            setAttributes({ caption: newValues})
        }
    };

    const handlenewbuttonDimensionChange = (newDimensions) => {

            if(newDimensions.padding.top){
                setAttributes({buttonpaddingtop:newDimensions.padding.top})
            }
            if(newDimensions.padding.bottom){
                setAttributes({buttonpaddingbottom:newDimensions.padding.bottom})
            }
            if(newDimensions.padding.left){
                setAttributes({buttonpaddingleft:newDimensions.padding.left})
            }
            if(newDimensions.padding.right){
                setAttributes({buttonpaddingright:newDimensions.padding.right})
            }
    };

    const handleButtonColor = (value) => {
        if(value.color){
            setAttributes({buttoncolor:value.color})
        }
        if(value.background){
            setAttributes({buttonbackground:value.background})
        }
    }

    const vayu_blocks_handleslideBorderChange = (newBorders) => {
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

            setAttributes({ buttonborderRadius: updatedAttributesborderradius });
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
    
        setAttributes({ buttonborder: updatedAttributes });
    };
    
    return (
        <>
        
            <PanelBody title={__('Heading', 'vayu-blocks')} initialOpen={false}>
                <>
                    <Vayu_blocks_typographycontrol
                        value={{
                            font: attributes.heading.font,
                            size: attributes.heading.size,
                            appearance: attributes.heading.appearance, // Bold font
                            letterSpacing: attributes.heading.letterSpacing,
                        }}
                        onChange={(newValues)=>handleTypographyChange(newValues)}
                        para=""
                        includeFont={true}
                        includeSize={true}
                        includeAppearance={true}
                        includeLetterSpacing={true}
                        letterSpacingunits={[
                            { label: 'px', value: 'px' },
                            { label: 'em', value: 'em' },
                            { label: 'rem', value: 'rem' }
                        ]}
                        vayu_blocks_sizes={vayu_blocks_sizes}
                        appearanceOptions= {[
                            { label: __('Normal', 'text-domain'), value: 'normal' },
                            { label: __('Lighter', 'text-domain'), value: 'lighter' },
                            { label: __('Bold', 'text-domain'), value: 'bold' },
                            { label: __('Bolder', 'text-domain'), value: 'bolder' },
                        ]}
                    />

                    <ColorPanel
                        colorTool={[
                            {
                                active: ['color'],
                                name: 'Text',
                                value: attributes.headingcolor,
                                attribute: 'color',
                            }
                        ]}
                        handelColorPanel={(value)=>setAttributes({headingcolor:value.color})}
                        initialTab="color"
                    />

                    <SelectControl
                        label={__('Tag', 'vayu-blocks')}
                        value={attributes.headingtag}
                        options={[
                            { label: __('H1 Heading h1', 'vayu-blocks'), value: 'h1' },
                            { label: __('H2 Heading h2', 'vayu-blocks'), value: 'h2' },
                            { label: __('H3 Heading h3', 'vayu-blocks'), value: 'h3' },
                            { label: __('H4 Heading h4', 'vayu-blocks'), value: 'h4' },
                            { label: __('H5 Heading h5', 'vayu-blocks'), value: 'h5' },
                            { label: __('H6 Heading h6', 'vayu-blocks'), value: 'h6' },
                        ]}
                        onChange={(value)=> setAttributes({headingtag:value})}
                    /> 

                </>
                
            </PanelBody>

            <PanelBody title={__('Image Caption', 'vayu-blocks')} initialOpen={false}>
               
                <>
                    <Vayu_blocks_typographycontrol
                        value={{
                            font: attributes.caption.font,
                            size: attributes.caption.size,
                            appearance: attributes.caption.appearance, // Bold font
                            letterSpacing: attributes.caption.letterSpacing,
                            letterCase: attributes.caption.letterCase
                        }}
                        onChange={(newValues)=>handlecaptionTypographyChange(newValues)}
                        para=""
                        includeFont={true}
                        includeSize={true}
                        includeAppearance={true}
                        includeLetterSpacing={true}
                        includeLetterCase={true}
                        letterSpacingunits={[
                            { label: 'px', value: 'px' },
                            { label: 'em', value: 'em' },
                            { label: 'rem', value: 'rem' }
                        ]}
                        vayu_blocks_sizes={vayu_blocks_sizes}
                        appearanceOptions= {[
                            { label: __('Normal', 'text-domain'), value: 'normal' },
                            { label: __('Lighter', 'text-domain'), value: 'lighter' },
                            { label: __('Bold', 'text-domain'), value: 'bold' },
                            { label: __('Bolder', 'text-domain'), value: 'bolder' },
                        ]}
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

                    <SelectControl
                        label={__('Tag', 'vayu-blocks')}
                        value={attributes.captiontag}
                        options={[
                            { label: __('H1 Heading h1', 'vayu-blocks'), value: 'h1' },
                            { label: __('H2 Heading h2', 'vayu-blocks'), value: 'h2' },
                            { label: __('H3 Heading h3', 'vayu-blocks'), value: 'h3' },
                            { label: __('H4 Heading h4', 'vayu-blocks'), value: 'h4' },
                            { label: __('H5 Heading h5', 'vayu-blocks'), value: 'h5' },
                            { label: __('H6 Heading h6', 'vayu-blocks'), value: 'h6' },
                        ]}
                        onChange={(value)=> setAttributes({captiontag:value})}
                    /> 

                </>
                
            </PanelBody>

            <PanelBody title={__('Button', 'vayu-blocks')} initialOpen={false}>
                
                <>
                    <ColorPanel
                        colorTool={[
                            {
                                active: ['gradient'],
                                name: 'Background',
                                value: attributes.buttonbackground,
                                attribute: 'background',
                            },
                            {
                                active: ['color'],
                                name: 'Text',
                                value: attributes.buttoncolor,
                                attribute: 'color',
                            }

                        ]}
                        handelColorPanel={(value)=> handleButtonColor(value)}
                        initialTab="color"
                    />

                    <Vayu_Block_Border_Control
                        value={{border:{
                            top:{
                                color: attributes.buttonborder.topcolor,
                                width: attributes.buttonborder.topwidth,
                                style: attributes.buttonborder.topstyle,
                            },
                            bottom: {
                                color: attributes.buttonborder.bottomcolor,
                                width: attributes.buttonborder.bottomwidth,
                                style: attributes.buttonborder.bottomstyle,
                            },
                            left: {
                                color: attributes.buttonborder.leftcolor,
                                width: attributes.buttonborder.leftwidth,
                                style: attributes.buttonborder.leftstyle,
                            },
                            right: {
                                color: attributes.buttonborder.rightcolor,
                                width: attributes.buttonborder.rightwidth,
                                style: attributes.buttonborder.rightstyle,
                            }
                        },
                        borderRadius:{
                            top:{
                                width: attributes.buttonborderRadius.top,
                            },
                            bottom:{
                                width: attributes.buttonborderRadius.bottom,
                            },
                            left:{
                                width: attributes.buttonborderRadius.left,
                            },
                            right:{
                                width: attributes.buttonborderRadius.right,
                            }
                        }
                        }}
                        onChange={(value)=>vayu_blocks_handleslideBorderChange(value)}
                        includeBorder={true}
                        includeBorderRadius={true}
                        para=""
                    />  

                    <Vayu_Block_Dimension_Control
                        value={{
                            padding:{
                                top:attributes.buttonpaddingtop,
                                bottom:attributes.buttonpaddingbottom,
                                left:attributes.buttonpaddingleft,
                                right:attributes.buttonpaddingright,
                            }
                        }}
                        para=""
                        onChange={(value)=> handlenewbuttonDimensionChange(value)}
                        paddingsides={["default"]}
                        includeMargin={false}
                        includePadding={true}
                    />

                </>
                
            </PanelBody>

        </>

    );
};

export default PostSettings; 
