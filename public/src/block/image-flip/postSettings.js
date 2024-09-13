import React from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    Button
} from '@wordpress/components';

import {
    ToogleGroupControl,
} from '../../components/index.js';

import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';

import { Vayu_Block_Border_Control } from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel';


const PostSettings = ({ attributes, setAttributes }) => {

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
        if(value.color === undefined ){
            setAttributes({overlaycolor: 'transparent'})
        }
        else{
            setAttributes({overlaycolor: value.color})
        }
    }

    return (
        <>
        
            {/* overlay style*/}
            <PanelBody title={__('Overlay', 'vayu-blocks')} initialOpen={false}>

                <ToggleControl
                        className='vayu_blocks_togglecontrol'
                        label={attributes.overlay ? __('With Hover', 'vayu-blocks') : __('Without Hover', 'vayu-blocks')}
                        checked={attributes.overlay}
                        onChange={(value) =>  setAttributes({overlay:value, showPreview: false})}
                    />
                    
                    {/* Show Preview Button */}

                    {!attributes.overlay && (
                        <>
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
                        </>       
                    )} 

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
                            }
                        ]}
                        handelColorPanel={(value) => handlecoloroverlay(value)}                                          
                        initialTab="color"
                    />

            </PanelBody>

            <PanelBody title={__('Overlay Effect', 'vayu-blocks')} initialOpen={false}>
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
                            { label: __('Zoom In circle', 'vayu-blocks'), value: 'overlayzoom-in-circle' },
                            { label: __('Zoom In Up', 'vayu-blocks'), value: 'overlayzoom-in-up' },
                            { label: __('Zoom In Left', 'vayu-blocks'), value: 'overlayzoom-in-left' },
                            { label: __('Zoom In Right', 'vayu-blocks'), value: 'overlayzoom-in-right' },
                            { label: __('Zoom In Down', 'vayu-blocks'), value: 'overlayzoom-in-down' },
                            { label: __('Partial Overlay', 'vayu-blocks'), value: 'overlaypartial-overlay' },
                        ]}
                        onChange={(value) => setAttributes({ imageoverlayouteffect: value })}
                    />
            </PanelBody>

            {/* Global style */}
            <PanelBody title={__('Global', 'vayu-blocks')} initialOpen={false}>

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
            </PanelBody>

        </>

    );
};

export default PostSettings; 
