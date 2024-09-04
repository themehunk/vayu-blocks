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
    Button,
    FontSizePicker,
    SelectControl,
    __experimentalBoxControl as BoxControl,
    TabPanel 
} from '@wordpress/components';
import {
    HoverControl,
    ToogleGroupControl,
    SizingControl,
    UnitChooser,
    ResponsiveControl,
} from '../../components/index.js';

import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';
import {Vayu_Block_Dimension_Control} from './Components/Dimesions/Vayu_Block_Dimension_Control';
import { Vayu_Block_Border_Control } from './Components/BorderControl/Vayu_Blocks_Border_control';
import Vayu_Block_Toggle from './Components/ToggleGroupControl/Vayu_Block_Toggle';

const PostSettings = ({ attributes, setAttributes }) => {

    const [hover, sethover] = useState('left');
    const [isPanel, settogglePanelnew] = useState('layout');
    const [hoverbutton, sethoverbutton] = useState('normal');
    const [button, setbutton] = useState('button1');
    const [activeButtonfill, setActiveButtonfill] = useState('outline');

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

    const vayu_blocks_fontsizes_small = [
        {
            name: 'Small',
            size: 10,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 14,
            slug: 'meadium'
        },
        {
            name: 'Big',
            size: 16,
            slug: 'big'
        },
        {
            name: 'ExtraBig',
            size: 20,
            slug: 'extrabig'
        }
    ];

    const vayu_blocks_sizes = [
        {
            name: 'Small',
            size: 20,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 28,
            slug: 'meadium'
        },
        {
            name: 'extraMeadium',
            size: 32,
            slug: 'extrameadium'
        },
        {
            name: 'Big',
            size: 40,
            slug: 'big'
        }
    ];

    //style update with global attributes
    const vayu_blocks_updateSliderStyles = (propertyPath, value) => {
        // Return early if the value is null, an empty string, or undefined for background gradients
        if((value===null || value === '') && (propertyPath === 'backgroundGradient' || propertyPath ==='button1.backgroundGradient' || propertyPath ==='button2.backgroundGradient')){
            return;
        }
    
        // Default value for the property if it's undefined
        if (value === undefined) {
            value = '';
        }
    
        // Step 1: Create a copy of the global attributes and update the specified property
        const newGlobal = { ...attributes.global };
    
        
        // Split the property path into individual properties
        const properties = propertyPath.split('.');
        let currentProperty = newGlobal;
    
        // Traverse the properties and set the value at the correct location
        properties.forEach((prop, idx) => {
            if (idx === properties.length - 1) {
                currentProperty[prop] = value;
            } else {
                if (!currentProperty[prop]) {
                    currentProperty[prop] = {};
                }
                currentProperty = currentProperty[prop];
            }
        });
    
        // Determine the custom style property to check based on propertyPath
        let customStyleProperty;
        if (propertyPath.includes('heading')) {
            customStyleProperty = 'customStyleheading';
        } else if (propertyPath.includes('subheading')) {
            customStyleProperty = 'customStylesubheading';
        } else if (propertyPath.includes('button1')) {
            customStyleProperty = 'customStylesubbutton1';
        } else if (propertyPath.includes('button2')) {
            customStyleProperty = 'customStylesubbutton2';
        } else {
            customStyleProperty = 'customStylelayout';
        }
    
        // Iterate through each slide and update the property only where the relevant customStyle is false
        attributes.slides.forEach((slide, index) => {
            if (slide[customStyleProperty] === false) {
                let slideProperty = slide;
                properties.forEach((prop, idx) => {
                    if (idx === properties.length - 1) {
                        slideProperty[prop] = value;
                    } else {
                        if (!slideProperty[prop]) {
                            slideProperty[prop] = {};
                        }
                        slideProperty = slideProperty[prop];
                    }
                });
            }
        });
    
        // Update the attributes with the new values
        setAttributes({ global: newGlobal, slides:  attributes.slides });
    };

    //Background style update with global attributes
    const vayu_blocks_updateSliderBackgroundStyles = (propertyPath, value) => {
        
        // Default value for the property if it's undefined
        if (value === undefined) {
            value = '';
        }
    
        // Step 1: Create a copy of the global attributes and update the specified property
        const newGlobal = { ...attributes.global };
    
        // Ensure the layout object exists
        if (!newGlobal) {
            newGlobal = {};
        }
    
        // Split the property path into individual properties
        const properties = propertyPath.split('.');
        let currentProperty = newGlobal;
    
        // Traverse the properties and set the value at the correct location
        properties.forEach((prop, idx) => {
            if (idx === properties.length - 1) {
                currentProperty[prop] = value;
            } else {
                if (!currentProperty[prop]) {
                    currentProperty[prop] = {};
                }
                currentProperty = currentProperty[prop];
            }
        });
    
        // Iterate through each slide and update the property only where customStyle is false
        attributes.slides.forEach((slide, index) => {
            if (slide.customBackgroundImage === false) {
                let slideProperty = slide;
                properties.forEach((prop, idx) => {
                    if (idx === properties.length - 1) {
                        slideProperty[prop] = value;
                    } else {
                        if (!slideProperty[prop]) {
                            slideProperty[prop] = {};
                        }
                        slideProperty = slideProperty[prop];
                    }
                });
            }
        });
    
        // Update the attributes with the new values
        setAttributes({ global: newGlobal, slides: attributes.slides });
    };
    
    //border
     const vayu_blocks_handleslideBorderChange = (property, newBorders) => { 
        const updatedAttributes = {};

        if(newBorders.borderRadius){
            vayu_blocks_handleBorderRadius(`${property}Radius`,newBorders.borderRadius);
        }

        if (newBorders.border.top) {
            if (newBorders.border.top) {
                updatedAttributes[`${property}.topcolor`] = newBorders.border.top.color;
                updatedAttributes[`${property}.topwidth`] = newBorders.border.top.width;
                updatedAttributes[`${property}.topstyle`] = newBorders.border.top.style;
            }
            if (newBorders.border.bottom) {
                updatedAttributes[`${property}.bottomcolor`] = newBorders.border.bottom.color;
                updatedAttributes[`${property}.bottomwidth`] = newBorders.border.bottom.width;
                updatedAttributes[`${property}.bottomstyle`] = newBorders.border.bottom.style;
            }
            if (newBorders.border.left) {
                updatedAttributes[`${property}.leftcolor`] = newBorders.border.left.color;
                updatedAttributes[`${property}.leftwidth`] = newBorders.border.left.width;
                updatedAttributes[`${property}.leftstyle`] = newBorders.border.left.style;
            }
            if (newBorders.border.right) {
                updatedAttributes[`${property}.rightcolor`] = newBorders.border.right.color;
                updatedAttributes[`${property}.rightwidth`] = newBorders.border.right.width;
                updatedAttributes[`${property}.rightstyle`] = newBorders.border.right.style;
            }
        } else {
            updatedAttributes[`${property}.topcolor`] = newBorders.border.color;
            updatedAttributes[`${property}.topwidth`] = newBorders.border.width;
            updatedAttributes[`${property}.topstyle`] = newBorders.border.style;
    
            updatedAttributes[`${property}.bottomcolor`] = newBorders.border.color;
            updatedAttributes[`${property}.bottomwidth`] = newBorders.border.width;
            updatedAttributes[`${property}.bottomstyle`] = newBorders.border.style;
    
            updatedAttributes[`${property}.leftcolor`] = newBorders.border.color;
            updatedAttributes[`${property}.leftwidth`] = newBorders.border.width;
            updatedAttributes[`${property}.leftstyle`] = newBorders.border.style;
    
            updatedAttributes[`${property}.rightcolor`] = newBorders.border.color;
            updatedAttributes[`${property}.rightwidth`] = newBorders.border.width;
            updatedAttributes[`${property}.rightstyle`] = newBorders.border.style;
        }
    
        Object.keys(updatedAttributes).forEach((key) => {
            vayu_blocks_updateSliderStyles(key, updatedAttributes[key]);
        });
    
    };

    //border-radius handler
    const vayu_blocks_handleBorderRadius = (property, value) => {
        const updatedAttributes = {};

        if (value.top) {
            if (value.top) {
                updatedAttributes[`${property}.top`] = value.top.width;
            }
            if (value.bottom) {
                updatedAttributes[`${property}.bottom`] = value.bottom.width;
            }
            if (value.left) {
                updatedAttributes[`${property}.left`] = value.left.width;
            }
            if (value.right) {
                updatedAttributes[`${property}.right`] = value.right.width;
            }
        } else {
            updatedAttributes[`${property}.top`] = value.width;
            updatedAttributes[`${property}.bottom`] = value.width;
            updatedAttributes[`${property}.left`] = value.width;
            updatedAttributes[`${property}.right`] = value.width;
        }

        Object.keys(updatedAttributes).forEach((key) => {
            vayu_blocks_updateSliderStyles(key, updatedAttributes[key]);
        });
    };

    const vayu_blocks_handleButtonfillClick = (type, property) => {
        setActiveButtonfill(type);
    
        const backgroundValue = type === 'fill' 
            ? 'blue' 
            : 'transparent';
    
        const borderValue = type === 'fill'
            ? `0px`
            : `1px`;
    
        vayu_blocks_updateSliderStyles( `${property}.backgroundColor`, backgroundValue);
        vayu_blocks_updateSliderStyles( `${property}.border.Width`, borderValue);
    };
     
    const vayu_blocks_getCurrentNavigationValue = () => {
        if (attributes.dots.show && attributes.arrow) {
            return 'both';
        } else if (attributes.dots.show) {
            return 'dots';
        } else if (attributes.arrow) {
            return 'arrow';
        } else {
            return 'none';
        }
    };

    const vayu_blocks_handle_navigation = (value) => {
        let showDots = false;
        let showArrow = false;
    
        switch (value) {
            case 'dots':
                showDots = true;
                break;
            case 'arrow':
                showArrow = true;
                break;
            case 'both':
                showDots = true;
                showArrow = true;
                break;
            case 'none':
            default:
                showDots = false;
                showArrow = false;
                break;
        }
    
        setAttributes({ 
            dots: { ...attributes.dots, show: showDots },
            arrow: showArrow
        });
    };

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

    // Handler to update dimensions state
    const handleDimensionChange = (newDimensions) => {
        const sides = ['top', 'right', 'bottom', 'left'];
    
        // Update padding styles
        if (newDimensions.padding) {
            sides.forEach((side) => {
                if (newDimensions.padding[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(`padding.${side}`, newDimensions.padding[side]);
                }
            });
        }
    
        // Update margin styles
        if (newDimensions.margin) {
            sides.forEach((side) => {
                if (newDimensions.margin[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(`margin.${side}`, newDimensions.margin[side]);
                }
            });
        }
    };

    // Handler to update dimensions state
    const handleButtonDimensionChange = (property,newDimensions) => {
        const sides = ['top', 'right', 'bottom', 'left'];
    
        // Update padding styles
        if (newDimensions.padding) {
            sides.forEach((side) => {
                if (newDimensions.padding[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(`${property}.padding.${side}`, newDimensions.padding[side]);
                }
            });
        }
    
        // Update margin styles
        if (newDimensions.margin) {
            sides.forEach((side) => {
                if (newDimensions.margin[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(`${property}.margin.${side}`, newDimensions.margin[side]);
                }
            });
        }
    };

    return (
        <>

            <PanelBody title={__('Global Style', 'vayu-blocks')} initialOpen={false}>

                <Vayu_Block_Toggle
                    value={isPanel}
                    onChange={(value) => settogglePanelnew(value)}
                    isBlock={true}
                    __nextHasNoMarginBottom={true}
                    options={[
                        { value: 'layout', label: 'Layout' },
                        { value: 'heading', label: 'Heading' },
                        { value: 'button', label: 'Button' },
                    ]}
                />
                
                <div>
                {isPanel === 'layout' && (
                    <>
                        <p>This style will apply to all slides except those with custom styles enabled.</p>

                        <br />
                        <ToggleControl
                            label={attributes.global.heightauto 
                                ? __('Height (Auto)', 'vayu-blocks') 
                                : `Custom Height: ${attributes.global.customheight}px`}
                            checked={attributes.global.heightauto}
                            onChange={(value) => vayu_blocks_updateSliderStyles('heightauto',value)}
                        />  
                        {attributes.global.heightauto===false && (
                            <RangeControl
                                label={__('Custom Height(px)', 'vayu-blocks')}
                                value={attributes.global.customheight}
                                onChange={(value) => vayu_blocks_updateSliderStyles('customheight',value)}
                                min={0}
                                max={1500}
                                step={1}
                            />
                        )}
                        
                        <SelectControl
                            label={__('Animation', 'vayu-blocks')}
                            value={attributes.animationtype}
                            options={[
                                { label: __('Animation (UP)', 'vayu-blocks'), value: 'animation1' },
                                { label: __('Animation (Down)', 'vayu-blocks'), value: 'animation2' },
                                { label: __('Animation (Left)', 'vayu-blocks'), value: 'animation3' },
                                { label: __('Animation (Right)', 'vayu-blocks'), value: 'animation4' },
                                { label: __('No Animation', 'vayu-blocks'), value: 'noanimation' },
                            ]}
                            onChange={(value)=> setAttributes({animationtype:value})}
                        />  
                        
                        <h4>{__('Alignment', 'vayu-blocks')}</h4>

                        <ToogleGroupControl
                            label={__('Alignment', 'vayu-blocks')}
                            value={ attributes.global.alignment}
                            onChange={(value) => vayu_blocks_updateSliderStyles('alignment', value)}
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
                            value={ attributes.global.alignmenttop}
                            onChange={(value) => vayu_blocks_updateSliderStyles('alignmenttop', value)}
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

                        <br />

                        <RangeControl
                            label={__('Gap Between Heading & Sub Heading', 'vayu-blocks')}
                            className = "vayu_blocks_gphsub"
                            value={attributes.global.gaphsub}
                            onChange={(value) =>  vayu_blocks_updateSliderStyles('gaphsub', value)}
                            min={0}
                            max={500}
                            step={1}
                        />

                        <RangeControl
                            label={__('Gap Between Heading & Button', 'vayu-blocks')}
                            className = "vayu_blocks_gphsub"
                            value={attributes.global.gaphb}
                            onChange={(value) =>  vayu_blocks_updateSliderStyles('gaphb', value)}
                            min={0}
                            max={500}
                            step={1}
                        />

                        <RangeControl
                            label={__('Gap Between Slides', 'vayu-blocks')}
                            value={attributes.slidermargin}
                            onChange={(value) => setAttributes({ slidermargin: value })}
                            min={0}
                            max={50}
                            step={1}
                        />

                        <Vayu_Block_Border_Control
                            value={{border:{
                                top:{
                                    color: attributes.global.border.topcolor,
                                    width: attributes.global.border.topwidth,
                                    style: attributes.global.border.topstyle,
                                },
                                bottom: {
                                    color: attributes.global.border.bottomcolor,
                                    width: attributes.global.border.bottomwidth,
                                    style: attributes.global.border.bottomstyle,
                                },
                                left: {
                                    color: attributes.global.border.leftcolor,
                                    width: attributes.global.border.leftwidth,
                                    style: attributes.global.border.leftstyle,
                                },
                                right: {
                                    color: attributes.global.border.rightcolor,
                                    width: attributes.global.border.rightwidth,
                                    style: attributes.global.border.rightstyle,
                                }
                            },
                            borderRadius:{
                                top:{
                                    width:attributes.global.borderRadius.top
                                },
                                bottom:{
                                    width:attributes.global.borderRadius.bottom
                                },
                                left:{
                                    width:attributes.global.borderRadius.left
                                },
                                right:{
                                    width:attributes.global.borderRadius.right
                                }
                            }
                            }}
                            onChange={(value)=>vayu_blocks_handleslideBorderChange('border',value)}
                            includeBorder={true}
                            includeBorderRadius={true}
                            para=""
                        />  

                        <Vayu_Block_Dimension_Control
                            value={{
                                padding:attributes.global.padding
                            }}
                            para=""
                            onChange={handleDimensionChange}
                            paddingsides={["horizontal","vertical"]}
                            includePadding={true}
                            
                            includeMargin={false}
                        />

                    </>
                )}

                {isPanel === 'heading' && (

                    <>
                        <p>This style will apply to all slides except those with custom styles enabled.</p>

                        <>
                            <HoverControl
                                value={hoverbutton}
                                options={[
                                    {
                                        label: __('Heading', 'vayu-blocks'),
                                        value: 'normal',
                                    },
                                    {
                                        label: __('Sub Heading', 'vayu-blocks'),
                                        value: 'active',
                                    },
                                ]}
                                onChange={sethoverbutton}
                            />

                            {'normal' === hoverbutton && (
                                <>
                                    <PanelColorSettings
                                        title={ __( 'Color Settings' ) }
                                        colorSettings={ [
                                            {
                                                value: attributes.global.heading.color,
                                                onChange: (colorValue) => {
                                                    vayu_blocks_updateSliderStyles('heading.color', colorValue);
                                                },
                                                label: __( 'Heading Color' ),
                                            },
                                        ] }
                                    >

                                    </PanelColorSettings>

                                    <FontSizePicker
                                        label={__('Font Size', 'vayu-blocks')}
                                        fontSizes={vayu_blocks_sizes}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('heading.size', value)}
                                        value={attributes.global.heading.size}
                                    />

                                    <SelectControl
                                        label={__('Title Tag', 'vayu-blocks')}
                                        value={attributes.global.heading.tag}
                                        options={[
                                            { label: __('H1 Heading h1', 'vayu-blocks'), value: 'h1' },
                                            { label: __('H2 Heading h2', 'vayu-blocks'), value: 'h2' },
                                            { label: __('H3 Heading h3', 'vayu-blocks'), value: 'h3' },
                                            { label: __('H4 Heading h4', 'vayu-blocks'), value: 'h4' },
                                            { label: __('H5 Heading h5', 'vayu-blocks'), value: 'h5' },
                                            { label: __('H6 Heading h6', 'vayu-blocks'), value: 'h6' },
                                        ]}
                                        onChange={(value)=> vayu_blocks_updateSliderStyles('heading.tag', value)}
                                    />  

                                    <SelectControl
                                        label={__('Font Weight', 'text-domain')}
                                        value={attributes.global.heading.fontWeight}
                                        options={[
                                            { label: __('Normal', 'text-domain'), value: 'normal' },
                                            { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                            { label: __('Bold', 'text-domain'), value: 'bold' },
                                            { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                        ]}
                                        onChange={(value) => vayu_blocks_updateSliderStyles('heading.fontWeight', value)}
                                    />
                                </>
                            )}

                            {'active' === hoverbutton && (
                                <>
                                    <ToggleControl
                                        className='vayu_blocks_togglecontrol'
                                        label={__('Sub Heading', 'vayu-blocks')}
                                        checked={attributes.global.subheading.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('subheading.show', value)}
                                    />

                                    {attributes.global.subheading.show &&(
                                        <>
                                            <PanelColorSettings
                                                title={ __( 'Color Settings' ) }
                                                colorSettings={ [
                                                    {
                                                        value: attributes.global.subheading.color,
                                                        onChange: (colorValue) => {
                                                            vayu_blocks_updateSliderStyles( 'subheading.color', colorValue);
                                                        },
                                                        label: __( 'Color' ),
                                                    },
                                                ] }
                                            >

                                            </PanelColorSettings>

                                            <FontSizePicker
                                                label={__('Font Size', 'vayu-blocks')}
                                                fontSizes={vayu_blocks_sizes}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles( 'subheading.size', value)}
                                                value={attributes.global.subheading.size}
                                            />

                                            <SelectControl
                                                label={__('Title Tag', 'vayu-blocks')}
                                                value={attributes.global.subheading.tag}
                                                options={[
                                                    { label: __('H1 SubHeading h1', 'vayu-blocks'), value: 'h1' },
                                                    { label: __('H2 SubHeading h2', 'vayu-blocks'), value: 'h2' },
                                                    { label: __('H3 SubHeading h3', 'vayu-blocks'), value: 'h3' },
                                                    { label: __('H4 SubHeading h4', 'vayu-blocks'), value: 'h4' },
                                                    { label: __('H5 SubHeading h5', 'vayu-blocks'), value: 'h5' },
                                                    { label: __('H6 SubHeading h6', 'vayu-blocks'), value: 'h6' },
                                                ]}
                                                onChange={(value)=> vayu_blocks_updateSliderStyles('subheading.tag', value)}
                                            />
                                            

                                            <SelectControl
                                                label={__('Font Weight', 'text-domain')}
                                                value={attributes.global.subheading.fontWeight}
                                                options={[
                                                    { label: __('Normal', 'text-domain'), value: 'normal' },
                                                    { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                                    { label: __('Bold', 'text-domain'), value: 'bold' },
                                                    { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                                ]}
                                                onChange={(value) => vayu_blocks_updateSliderStyles('subheading.fontWeight', value)}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    </>
                )}

                {isPanel === 'button' && (
                    <>  
                    <p>This style will apply to all slides except those with custom styles enabled.</p>
                        
                        <>
                            <HoverControl
                                value={button}
                                options={[
                                    {
                                        label: __('Button 1', 'vayu-blocks'),
                                        value: 'button1',
                                    },
                                    {
                                        label: __('Button 2', 'vayu-blocks'),
                                        value: 'button2',
                                    },
                                ]}
                                onChange={setbutton}
                            />

                            {button==='button1' && (
                                <>
                                    <ToggleControl
                                        className='vayu_blocks_togglecontrol'
                                        label={__('Button 1', 'vayu-blocks')}
                                        checked={attributes.global.button1.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('button1.show', value)}
                                    />

                                    {attributes.global.button1.show && (
                                        <>
                                            <div style={{marginBottom:'15px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                                                <Button
                                                    style={{ 
                                                        background: activeButtonfill === 'fill' ? 'black' : 'white',
                                                        color: activeButtonfill === 'fill' ? 'white' : 'black', 
                                                        borderWidth: "1px", 
                                                        borderStyle:"solid", 
                                                        borderColor:"black", 
                                                        padding: "18px 35px"
                                                        }}
                                                        
                                                    onClick={() => vayu_blocks_handleButtonfillClick('fill',"button1")}
                                                >
                                                    Fill
                                                </Button>
                                                <Button
                                                    style={{ 
                                                        background: activeButtonfill === 'outline' ? 'black' : 'white' ,
                                                        color: activeButtonfill === 'outline' ? 'white' : 'black', 
                                                        borderWidth: "1px", 
                                                        borderStyle:"solid", 
                                                        borderColor:"black", 
                                                        padding: "18px 22px",
                                                        marginLeft:"8px"
                                                    }}

                                                    onClick={() => vayu_blocks_handleButtonfillClick('outline',"button1")}
                                                >
                                                    Outline
                                                </Button>
                                            </div>

                                            <PanelColorGradientSettings
                                                title={ __( 'Background', 'vayu-blocks' ) }
                                                settings={[
                                                    {
                                                        colorValue: attributes.global.button1.backgroundColor,
                                                        gradientValue: attributes.global.button1.backgroundGradient,
                                                        
                                                        onColorChange: (color) => {
                                                            vayu_blocks_updateSliderStyles( 'button1.backgroundColor', color);
                                                        },
                                                        onGradientChange: (gradient) => {
                                                            vayu_blocks_updateSliderStyles( 'button1.backgroundGradient', gradient); 
                                                        },
                                                        label: __( 'Background', 'vayu-blocks' ),
                                                    },
                                                ]}
                                            />

                                            <PanelColorSettings
                                                title={ __( 'Color' ) }
                                                colorSettings={ [
                                                    {
                                                        value: attributes.global.button1.color,
                                                        onChange: (colorValue) => {
                                                            vayu_blocks_updateSliderStyles( 'button1.color', colorValue);
                                                        },
                                                        label: __( 'Color' ),
                                                    },
                                                ] }
                                            >
                                            </PanelColorSettings>
                                            
                                            <FontSizePicker
                                                label={__('Font Size', 'vayu-blocks')}
                                                fontSizes={vayu_blocks_fontsizes}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles( 'button1.size', value)}
                                                value={attributes.global.button1.size}
                                            />


                                            <Vayu_Block_Border_Control
                                                value={{border:{
                                                    top:{
                                                        color: attributes.global.button1.border.topcolor,
                                                        width: attributes.global.button1.border.topwidth,
                                                        style: attributes.global.button1.border.topstyle,
                                                    },
                                                    bottom: {
                                                        color: attributes.global.button1.border.bottomcolor,
                                                        width: attributes.global.button1.border.bottomwidth,
                                                        style: attributes.global.button1.border.bottomstyle,
                                                    },
                                                    left: {
                                                        color: attributes.global.button1.border.leftcolor,
                                                        width: attributes.global.button1.border.leftwidth,
                                                        style: attributes.global.button1.border.leftstyle,
                                                    },
                                                    right: {
                                                        color: attributes.global.button1.border.rightcolor,
                                                        width: attributes.global.button1.border.rightwidth,
                                                        style: attributes.global.button1.border.rightstyle,
                                                    }
                                                },
                                                borderRadius:{
                                                    top:{
                                                        width:attributes.global.button1.borderRadius.top
                                                    },
                                                    bottom:{
                                                        width:attributes.global.button1.borderRadius.bottom
                                                    },
                                                    left:{
                                                        width:attributes.global.button1.borderRadius.left
                                                    },
                                                    right:{
                                                        width:attributes.global.button1.borderRadius.right
                                                    }
                                                }
                                                }}
                                                onChange={(value)=>vayu_blocks_handleslideBorderChange('button1.border',value)}
                                                includeBorder={true}
                                                includeBorderRadius={true}
                                                para=""
                                            />  

                                            <Vayu_Block_Dimension_Control
                                                value={{
                                                    padding:attributes.global.button1.padding
                                                }}
                                                para=""
                                                onChange={(value)=> handleButtonDimensionChange('button1',value)}
                                                paddingsides={["default"]}
                                                includePadding={true}
                                                includeMargin={false}
                                            />

                                        </>
                                    )}
                                </>
                            )}

                            {button==='button2' && (
                                <>
                                    <ToggleControl
                                        className='vayu_blocks_togglecontrol'
                                        label={__('Button 2', 'vayu-blocks')}
                                        checked={attributes.global.button2.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('button2.show', value)}
                                    />

                                    {attributes.global.button2.show && (
                                        <>
                                            <div style={{marginBottom:'15px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                                                <Button
                                                    style={{ 
                                                        background: activeButtonfill === 'fill' ? 'black' : 'white',
                                                        color: activeButtonfill === 'fill' ? 'white' : 'black', 
                                                        borderWidth: "1px", 
                                                        borderStyle:"solid", 
                                                        borderColor:"black", 
                                                        padding: "18px 35px"
                                                        }}
                                                        
                                                    onClick={() => vayu_blocks_handleButtonfillClick('fill',"button2")}
                                                >
                                                    Fill
                                                </Button>
                                                <Button
                                                    style={{ 
                                                        background: activeButtonfill === 'outline' ? 'black' : 'white' ,
                                                        color: activeButtonfill === 'outline' ? 'white' : 'black', 
                                                        borderWidth: "1px", 
                                                        borderStyle:"solid", 
                                                        borderColor:"black", 
                                                        padding: "18px 22px",
                                                        marginLeft:"8px"
                                                    }}

                                                    onClick={() => vayu_blocks_handleButtonfillClick('outline',"button2")}
                                                >
                                                    Outline
                                                </Button>
                                            </div>

                                            <PanelColorGradientSettings
                                                title={ __( 'Background', 'vayu-blocks' ) }
                                                settings={[
                                                    {
                                                        colorValue: attributes.global.button2.backgroundColor,
                                                        gradientValue: attributes.global.button2.backgroundGradient,
                                                        
                                                        onColorChange: (color) => {
                                                            vayu_blocks_updateSliderStyles( 'button2.backgroundColor', color);
                                                        },
                                                        onGradientChange: (gradient) => {
                                                            vayu_blocks_updateSliderStyles( 'button2.backgroundGradient', gradient); 
                                                        },
                                                        label: __( 'Background', 'vayu-blocks' ),
                                                    },
                                                ]}
                                            />

                                            <PanelColorSettings
                                                title={ __( 'Color' ) }
                                                colorSettings={ [
                                                    {
                                                        value: attributes.global.button2.color,
                                                        onChange: (colorValue) => {
                                                            vayu_blocks_updateSliderStyles( 'button2.color', colorValue);
                                                        },
                                                        label: __( 'Color' ),
                                                    },
                                                ] }
                                            >

                                            </PanelColorSettings>
                                            
                                            <FontSizePicker
                                                label={__('Font Size', 'vayu-blocks')}
                                                fontSizes={vayu_blocks_fontsizes}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles( 'button2.size', value)}
                                                value={attributes.global.button2.size}
                                            />

                                            
                                            <Vayu_Block_Border_Control
                                                value={{border:{
                                                    top:{
                                                        color: attributes.global.button2.border.topcolor,
                                                        width: attributes.global.button2.border.topwidth,
                                                        style: attributes.global.button2.border.topstyle,
                                                    },
                                                    bottom: {
                                                        color: attributes.global.button2.border.bottomcolor,
                                                        width: attributes.global.button2.border.bottomwidth,
                                                        style: attributes.global.button2.border.bottomstyle,
                                                    },
                                                    left: {
                                                        color: attributes.global.button2.border.leftcolor,
                                                        width: attributes.global.button2.border.leftwidth,
                                                        style: attributes.global.button2.border.leftstyle,
                                                    },
                                                    right: {
                                                        color: attributes.global.button2.border.rightcolor,
                                                        width: attributes.global.button2.border.rightwidth,
                                                        style: attributes.global.button2.border.rightstyle,
                                                    }
                                                },
                                                borderRadius:{
                                                    top:{
                                                        width:attributes.global.button2.borderRadius.top
                                                    },
                                                    bottom:{
                                                        width:attributes.global.button2.borderRadius.bottom
                                                    },
                                                    left:{
                                                        width:attributes.global.button2.borderRadius.left
                                                    },
                                                    right:{
                                                        width:attributes.global.button2.borderRadius.right
                                                    }
                                                }
                                                }}
                                                onChange={(value)=>vayu_blocks_handleslideBorderChange('button2.border',value)}
                                                includeBorder={true}
                                                includeBorderRadius={true}
                                                para=""
                                            />  

                                            <Vayu_Block_Dimension_Control
                                                value={{
                                                    padding:attributes.global.button2.padding
                                                }}
                                                para=""
                                                onChange={(value)=> handleButtonDimensionChange('button2',value)}
                                                paddingsides={["default"]}
                                                includePadding={true}
                                                includeMargin={false}
                                            />

                                        </>
                                    )}
                                </>
                            )}

                        </>

                    </>
                )}
                </div>
            </PanelBody>

            <PanelBody title={__('Slider Layout', 'vayu-blocks')} initialOpen={false}>
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

                <RangeControl
                    label = {__('Scrolling Speed', 'vayu-blocks')}
                    value={attributes.speed}
                    onChange={(value) => setAttributes({ speed: value })}
                    min={1}
                    max={5000}
                    step={1}
                />

                <RangeControl
                    label = {__('Intial Slide', 'vayu-blocks')}
                    value={attributes.initialSlide+1}
                    onChange={(value) => setAttributes({ initialSlide: value-1 })}
                    min={1}
                    max={attributes.slides.length}
                    step={1}
                />

            </PanelBody>

            <PanelBody title={__('Slider Options','vayu-blocks')} initialOpen={false}>

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
                    label={__('Touch Swipe', 'vayu-blocks')}
                    checked={attributes.swipe}
                    onChange={(value) => setAttributes({ swipe: value })}
                />
                
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
                        {/* <ToggleControl
                            label={__('Right To Left', 'vayu-blocks')}
                            checked={attributes.rtl}
                            onChange={(value) => setAttributes({ rtl: value })}
                        /> */}
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

            <PanelBody title={__('Navigation','vayu-blocks')} initialOpen={false}>

                <SelectControl
                    label={__('Navigation', 'vayu-blocks')}
                    value={vayu_blocks_getCurrentNavigationValue()}
                    options={[
                        { label: __('Dots', 'vayu-blocks'), value: 'dots' },
                        { label: __('Arrow', 'vayu-blocks'), value: 'arrow' },
                        { label: __('Dots & Arrow both', 'vayu-blocks'), value: 'both' },
                        { label: __('None', 'vayu-blocks'), value: 'none' },
                    ]}
                    onChange={(value) => vayu_blocks_handle_navigation(value)}
                />

                {attributes.dots.show && attributes.dots.customize && (
                    <>
                        <p className='vayu_blocks_dots'>Dots Style</p>
                            <ToggleControl
                                label={ __('On Image', 'vayu-blocks') }
                                checked={ attributes.dots.onimage}
                                onChange={ (value) => setAttributes({ dots: { ...attributes.dots, onimage: value, position:60 } }) }
                            />

                            <SelectControl
                                label={__('Dots', 'vayu-blocks')}
                                value={attributes.dots.option}
                                options={[
                                    { label: __('Dots', 'vayu-blocks'), value: 'dots' },
                                    { label: __('Square', 'vayu-blocks'), value: 'square' },
                                    { label: __('Number', 'vayu-blocks'), value: 'number' }
                                ]}
                                onChange={(value)=>setAttributes({ dots: { ...attributes.dots, option: value}})}
                            />  

                            <PanelColorSettings
                                    title={ __( 'Color', 'vayu-blocks' ) }
                                    colorSettings={ [
                                        {
                                            value: attributes.dots.backgroundColor,
                                            onChange: (colorValue) => setAttributes({
                                                dots: {
                                                    ...attributes.dots,
                                                    backgroundColor: colorValue,
                                                },
                                            }),
                                            label: __( 'Background', 'vayu-blocks' ),
                                        },
                                        {
                                            value: attributes.dots.color,
                                            onChange: (colorValue) => setAttributes({
                                                dots: {
                                                    ...attributes.dots,
                                                    color: colorValue,
                                                },
                                            }),
                                            label: __( 'Color', 'vayu-blocks' ),
                                        },
                                        {
                                            value: attributes.dots.activeColor,
                                            onChange: (colorValue) => setAttributes({
                                                dots: {
                                                    ...attributes.dots,
                                                    activeColor: colorValue,
                                                },
                                            }),
                                            label: __( 'Acvtive Color', 'vayu-blocks' ),
                                        }
                                       
                                    ] }

                                >
                                </PanelColorSettings>


                            {attributes.dots.onimage && (
                                <RangeControl
                                    label={__('Position', 'vayu-blocks')}
                                    value={attributes.dots.position}
                                    onChange={(value) => setAttributes({
                                        dots: {
                                            ...attributes.dots,
                                            position: value,
                                        },
                                    })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            )}

                    </>
                )}

                {attributes.arrow && (
                    <>
                     <p className='vayu_blocks_dots'>Arrow Style</p>
                     
                            <>
                                <ToggleControl
                                    label={__('Arrow on hover', 'vayu-blocks')}
                                    checked={attributes.arrowOnHover}
                                    onChange={(value) => setAttributes({ arrowOnHover: value })}
                                />

                                {attributes.arrowOnHover && (
                                    <ToggleControl
                                        label={__('With Animation', 'vayu-blocks')}
                                        checked={attributes.arrowanimation}
                                        onChange={(value) => setAttributes({ arrowanimation: value })}
                                    />
                                )}
                                    
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
                                    title={ __( 'Color', 'vayu-blocks' ) }
                                    colorSettings={ [
                                        {
                                            value: attributes.arrowstyleleft.backgroundColor,
                                            onChange: (colorValue) => setAttributes({
                                                arrowstyleleft: {
                                                    ...attributes.arrowstyleleft,
                                                    backgroundColor: colorValue,
                                                },
                                            }),
                                            label: __( 'Background', 'vayu-blocks' ),
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
                                        },
                                        {
                                            value: attributes.arrowstyleleft.hovercolor,
                                            onChange: (colorValue) => setAttributes({
                                                arrowstyleleft: {
                                                    ...attributes.arrowstyleleft,
                                                    hovercolor: colorValue,
                                                },
                                            }),
                                            label: __( 'Hover Color', 'vayu-blocks' ),
                                        }
                                    ] }

                                >
                                </PanelColorSettings>

                                <RangeControl
                                    label={__('Opacity', 'vayu-blocks')}
                                    value={attributes.arrowstyleleft.opacity}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            opacity: value,
                                        },
                                    })}
                                    min={0}
                                    max={1}
                                    step={0.1}
                                />

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

                                <br />
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

                                <RangeControl
                                    label={__('Horizontal Position', 'vayu-blocks')}
                                    value={attributes.arrowstyleleft.position}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            position: value,
                                        },
                                    })}
                                    min={-30}
                                    max={200}
                                    step={1}
                                />

                                <RangeControl
                                    label={__('Vertical Position', 'vayu-blocks')}
                                    value={attributes.arrowstyleleft.positionVertical}
                                    onChange={(value) => setAttributes({
                                        arrowstyleleft: {
                                            ...attributes.arrowstyleleft,
                                            positionVertical: value,
                                        },
                                    })}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />
                                
                            </>

                    </>
                )}

    
            </PanelBody>

        </>

    );
};

export default PostSettings;
