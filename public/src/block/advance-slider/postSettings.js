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
} from '@wordpress/components';
import {
    HoverControl,
    ToogleGroupControl,
} from '../../components/index.js';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';


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

          if((value===null || value === '') && (propertyPath === 'backgroundGradient' || propertyPath ==='button1.backgroundGradient' || propertyPath ==='button2.backgroundGradient')){
            return;
        }
        // Default value for the property if it's undefined
        if (value === undefined) {
            value = '';
        }
    
        // Step 1: Create a copy of the global attributes and update the specified property
        const newGlobal = { ...attributes.global };
    
        // Ensure the layout object exists
        if (!newGlobal.layout) {
            newGlobal.layout = {};
        }
    
        // Split the property path into individual properties
        const properties = propertyPath.split('.');
        let currentProperty = newGlobal.layout;
    
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
        if (propertyPath.includes('layout')) {
            customStyleProperty = 'customStylelayout';
        } else if (propertyPath.includes('heading')) {
            customStyleProperty = 'customStyleheading';
        } else if (propertyPath.includes('subheading')) {
            customStyleProperty = 'customStylesubheading';
        } else if (propertyPath.includes('button1')) {
            customStyleProperty = 'customStylesubbutton1';
        } else if (propertyPath.includes('button2')) {
            customStyleProperty = 'customStylesubbutton2';
        }else {
            customStyleProperty = 'customStylelayout';
        }

        // Iterate through each slide and update the property only where the relevant customStyle is false
        attributes.slides.forEach((slide, index) => {
            if (slide.layout[customStyleProperty] === false) {
                let slideProperty = slide.layout;
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

    //Background style update with global attributes
    const vayu_blocks_updateSliderBackgroundStyles = (propertyPath, value) => {
        
        // Default value for the property if it's undefined
        if (value === undefined) {
            value = '';
        }
    
        // Step 1: Create a copy of the global attributes and update the specified property
        const newGlobal = { ...attributes.global };
    
        // Ensure the layout object exists
        if (!newGlobal.layout) {
            newGlobal.layout = {};
        }
    
        // Split the property path into individual properties
        const properties = propertyPath.split('.');
        let currentProperty = newGlobal.layout;
    
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
            if (slide.layout.customBackgroundImage === false) {
                let slideProperty = slide.layout;
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
    
        if (newBorders.borders.top) {
            if (newBorders.borders.top) {
                updatedAttributes[`${property}.topcolor`] = newBorders.borders.top.color;
                updatedAttributes[`${property}.topwidth`] = newBorders.borders.top.width;
                updatedAttributes[`${property}.topstyle`] = newBorders.borders.top.style;
            }
            if (newBorders.borders.bottom) {
                updatedAttributes[`${property}.bottomcolor`] = newBorders.borders.bottom.color;
                updatedAttributes[`${property}.bottomwidth`] = newBorders.borders.bottom.width;
                updatedAttributes[`${property}.bottomstyle`] = newBorders.borders.bottom.style;
            }
            if (newBorders.borders.left) {
                updatedAttributes[`${property}.leftcolor`] = newBorders.borders.left.color;
                updatedAttributes[`${property}.leftwidth`] = newBorders.borders.left.width;
                updatedAttributes[`${property}.leftstyle`] = newBorders.borders.left.style;
            }
            if (newBorders.borders.right) {
                updatedAttributes[`${property}.rightcolor`] = newBorders.borders.right.color;
                updatedAttributes[`${property}.rightwidth`] = newBorders.borders.right.width;
                updatedAttributes[`${property}.rightstyle`] = newBorders.borders.right.style;
            }
        } else {
            updatedAttributes[`${property}.color`] = newBorders.borders.color;
            updatedAttributes[`${property}.width`] = newBorders.borders.width;
            updatedAttributes[`${property}.style`] = newBorders.borders.style;
    
            updatedAttributes[`${property}.topcolor`] = newBorders.borders.color;
            updatedAttributes[`${property}.topwidth`] = newBorders.borders.width;
            updatedAttributes[`${property}.topstyle`] = newBorders.borders.style;
    
            updatedAttributes[`${property}.bottomcolor`] = newBorders.borders.color;
            updatedAttributes[`${property}.bottomwidth`] = newBorders.borders.width;
            updatedAttributes[`${property}.bottomstyle`] = newBorders.borders.style;
    
            updatedAttributes[`${property}.leftcolor`] = newBorders.borders.color;
            updatedAttributes[`${property}.leftwidth`] = newBorders.borders.width;
            updatedAttributes[`${property}.leftstyle`] = newBorders.borders.style;
    
            updatedAttributes[`${property}.rightcolor`] = newBorders.borders.color;
            updatedAttributes[`${property}.rightwidth`] = newBorders.borders.width;
            updatedAttributes[`${property}.rightstyle`] = newBorders.borders.style;
        }
    
        Object.keys(updatedAttributes).forEach((key) => {
            vayu_blocks_updateSliderStyles(key, updatedAttributes[key]);
        });
    
    };

    //border-radius and padding handle
    const vayu_blocks_handleBorderRadius = (property, value) => {
        const sides = ['top', 'right', 'bottom', 'left'];
    
        sides.forEach(side => {
            if (value[side]) {
                // Update the borderRadius for the specified side
                vayu_blocks_updateSliderStyles(`${property}.${side}`, value[side]);
            }
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

    //clear image
    const vayu_blocks_clearBackgroundImageAndFocalPoint = () => {
        vayu_blocks_updateSliderBackgroundStyles('backgroundImage', '');
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

    //duotone change
    const vayu_blocks_duotoneHandler = (propertyPath, value) => {
        // Find the filter ID corresponding to the given color array
        if (!Array.isArray(value) || value.length === 0) {
            vayu_blocks_updateSliderBackgroundStyles(propertyPath,"");
        }
        const filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
            colors.every((color, i) => color === value[i])
        );
    
        if (filter) {
            const { id } = filter;
            vayu_blocks_updateSliderBackgroundStyles(propertyPath,id);
        }
    };

    //duotone value
    const vayu_blocks_duotonevalue = () => {
        // Get the ID from the slide's layout duotone
        const id = attributes.global.layout.duotone;
    
        // Find the matching filter in the vayu_blocks_DUOTONE_PALETTE
        const filter = vayu_blocks_DUOTONE_PALETTE.find((filter) => filter.id === id);
    
        // If a match is found, return the colors array
        if (filter) {
            return filter.colors;
        }
        return '';
    };

    function handlePaddingChange(side, value) {
        if (side === 'horizontal') {
            vayu_blocks_updateSliderStyles('padding.left',value.left);
            vayu_blocks_updateSliderStyles('padding.right',value.right);
        } else if (side === 'vertical') {
            vayu_blocks_updateSliderStyles('padding.top',value.top);
            vayu_blocks_updateSliderStyles('padding.bottom',value.bottom);
        }
    }    

    return (
        <>

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

            <PanelBody title={__('Global Style', 'vayu-blocks')} initialOpen={false}>
                
                <div className="content-panel">
                    <button 
                        style={{ color: isPanel === 'layout' ? 'blue' : 'initial' }} 
                        onClick={() => settogglePanelnew('layout')} 
                        className='content-panel-button'
                    >
                        Layout
                    </button>
                    <button 
                        style={{ color: isPanel === 'heading' ? 'blue' : 'initial' }} 
                        onClick={() => settogglePanelnew('heading')} 
                        className='content-panel-button'
                    >
                        Heading
                    </button>
                    <button 
                        style={{ color: isPanel === 'button' ? 'blue' : 'initial' }} 
                        onClick={() => settogglePanelnew('button')} 
                        className='content-panel-button'
                    >
                        Button
                    </button>
                </div>

                {isPanel === 'layout' && (
                    <>
                        <br />
                        <ToggleControl
                            label={attributes.global.layout.heightauto 
                                ? __('Height (Auto)', 'vayu-blocks') 
                                : `Custom Height: ${attributes.global.layout.customheight}px`}
                            checked={attributes.global.layout.heightauto}
                            onChange={(value) => vayu_blocks_updateSliderStyles('heightauto',value)}
                        />  
                        {attributes.global.layout.heightauto===false && (
                            <RangeControl
                                label={__('Custom Height(px)', 'vayu-blocks')}
                                value={attributes.global.layout.customheight}
                                onChange={(value) => vayu_blocks_updateSliderStyles('customheight',value)}
                                min={0}
                                max={1500}
                                step={1}
                            />
                        )}

                        <h4>{__('Alignment', 'vayu-blocks')}</h4>

                        <ToogleGroupControl
                            label={__('Alignment', 'vayu-blocks')}
                            value={ attributes.global.layout.alignment}
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
                            value={ attributes.global.layout.alignmenttop}
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
                            value={attributes.global.layout.gaphsub}
                            onChange={(value) =>  vayu_blocks_updateSliderStyles('gaphsub', value)}
                            min={0}
                            max={500}
                            step={1}
                        />
                        <RangeControl
                            label={__('Gap Between Heading & Button', 'vayu-blocks')}
                            className = "vayu_blocks_gphsub"
                            value={attributes.global.layout.gaphb}
                            onChange={(value) =>  vayu_blocks_updateSliderStyles('gaphb', value)}
                            min={0}
                            max={500}
                            step={1}
                        />

                         <BorderBoxControlComponent
                            label={__('Border','vayu-blocks')}
                            value={{
                                all: {
                                    color: attributes.global.layout.border.color,
                                    width: attributes.global.layout.border.width,
                                    style: attributes.global.layout.border.style,
                                },
                                top: {
                                    color: attributes.global.layout.border.topcolor,
                                    width: attributes.global.layout.border.topwidth,
                                    style: attributes.global.layout.border.topstyle,
                                },
                                bottom: {
                                    color: attributes.global.layout.border.bottomcolor,
                                    width: attributes.global.layout.border.bottomwidth,
                                    style: attributes.global.layout.border.bottomstyle,
                                },
                                left: {
                                    color: attributes.global.layout.border.leftcolor,
                                    width: attributes.global.layout.border.leftwidth,
                                    style: attributes.global.layout.border.leftstyle,
                                },
                                right: {
                                    color: attributes.global.layout.border.rightcolor,
                                    width: attributes.global.layout.border.rightwidth,
                                    style: attributes.global.layout.border.rightstyle,
                                },
                            }}
                            onChange={(value)=>vayu_blocks_handleslideBorderChange('border',value)}
                            type="border"
                        />

                        <BoxControl
                            label={__('Border Radius','vayu-blocks')}
                            onChange={(value)=> vayu_blocks_handleBorderRadius('borderRadius',value)}
                            values={attributes.global.layout.borderRadius}
                        />

                        <BoxControl
                            label={__('Horizontal Padding', 'vayu-blocks')}
                            onChange={(value) => handlePaddingChange('horizontal', value)}
                            values={{
                                left: attributes.global.layout.padding.left,
                                right: attributes.global.layout.padding.right,
                            }}
                            sides={['horizontal']}
                        />

                        <BoxControl
                            label={__('Vertical Padding', 'vayu-blocks')}
                            onChange={(value) => handlePaddingChange('vertical', value)}
                            values={{
                                top: attributes.global.layout.padding.top,
                                bottom: attributes.global.layout.padding.bottom,
                            }}
                            sides={['vertical']}
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
                                                value: attributes.global.layout.heading.color,
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
                                        value={attributes.global.layout.heading.size}
                                    />

                                    <SelectControl
                                        label={__('Title Tag', 'vayu-blocks')}
                                        value={attributes.global.layout.heading.tag}
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
                                        value={attributes.global.layout.heading.fontWeight}
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
                                        checked={attributes.global.layout.subheading.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('subheading.show', value)}
                                    />

                                    {attributes.global.layout.subheading.show &&(
                                        <>
                                            <PanelColorSettings
                                                title={ __( 'Color Settings' ) }
                                                colorSettings={ [
                                                    {
                                                        value: attributes.global.layout.subheading.color,
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
                                                value={attributes.global.layout.subheading.size}
                                            />

                                            <SelectControl
                                                label={__('Title Tag', 'vayu-blocks')}
                                                value={attributes.global.layout.subheading.tag}
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
                                                value={attributes.global.layout.subheading.fontWeight}
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
                                        checked={attributes.global.layout.button1.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('button1.show', value)}
                                    />

                                    {attributes.global.layout.button1.show && (
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
                                                        colorValue: attributes.global.layout.button1.backgroundColor,
                                                        gradientValue: attributes.global.layout.button1.backgroundGradient,
                                                        
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
                                                        value: attributes.global.layout.button1.color,
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
                                                value={attributes.global.layout.button1.size}
                                            />

                                            <br />
                                            <BorderBoxControlComponent
                                                label={__('Border','vayu-blocks')}
                                                value={{
                                                    all: {
                                                        color: attributes.global.layout.button1.border.color,
                                                        width: attributes.global.layout.button1.border.width,
                                                        style: attributes.global.layout.button1.border.style,
                                                    },
                                                    top: {
                                                        color: attributes.global.layout.button1.border.topcolor,
                                                        width: attributes.global.layout.button1.border.topwidth,
                                                        style: attributes.global.layout.button1.border.topstyle,
                                                    },
                                                    bottom: {
                                                        color: attributes.global.layout.button1.border.bottomcolor,
                                                        width: attributes.global.layout.button1.border.bottomwidth,
                                                        style: attributes.global.layout.button1.border.bottomstyle,
                                                    },
                                                    left: {
                                                        color: attributes.global.layout.button1.border.leftcolor,
                                                        width: attributes.global.layout.button1.border.leftwidth,
                                                        style: attributes.global.layout.button1.border.leftstyle,
                                                    },
                                                    right: {
                                                        color: attributes.global.layout.button1.border.rightcolor,
                                                        width: attributes.global.layout.button1.border.rightwidth,
                                                        style: attributes.global.layout.button1.border.rightstyle,
                                                    },
                                                }}
                                                onChange={(value)=>vayu_blocks_handleslideBorderChange('button1.border',value)}
                                                type="border"
                                            />

                                            <BoxControl
                                                label={__('Border Radius','vayu-blocks')}
                                                onChange={(value)=> vayu_blocks_handleBorderRadius('button1.borderRadius',value)}
                                                values={attributes.global.layout.button1.borderRadius}
                                            />

                                            <BoxControl
                                                label={__('Padding','vayu-blocks')}
                                                onChange={(value)=> vayu_blocks_handleBorderRadius('button1.padding',value)}
                                                values={attributes.global.layout.button1.padding}
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
                                        checked={attributes.global.layout.button2.show}
                                        onChange={(value) =>  vayu_blocks_updateSliderStyles('button2.show', value)}
                                    />

                                    {attributes.global.layout.button2.show && (
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
                                                        colorValue: attributes.global.layout.button2.backgroundColor,
                                                        gradientValue: attributes.global.layout.button2.backgroundGradient,
                                                        
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
                                                        value: attributes.global.layout.button2.color,
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
                                                value={attributes.global.layout.button2.size}
                                            />

                                            <br />
                                            <BorderBoxControlComponent
                                                label={__('Border','vayu-blocks')}
                                                value={{
                                                    all: {
                                                        color: attributes.global.layout.button2.border.color,
                                                        width: attributes.global.layout.button2.border.width,
                                                        style: attributes.global.layout.button2.border.style,
                                                    },
                                                    top: {
                                                        color: attributes.global.layout.button2.border.topcolor,
                                                        width: attributes.global.layout.button2.border.topwidth,
                                                        style: attributes.global.layout.button2.border.topstyle,
                                                    },
                                                    bottom: {
                                                        color: attributes.global.layout.button2.border.bottomcolor,
                                                        width: attributes.global.layout.button2.border.bottomwidth,
                                                        style: attributes.global.layout.button2.border.bottomstyle,
                                                    },
                                                    left: {
                                                        color: attributes.global.layout.button2.border.leftcolor,
                                                        width: attributes.global.layout.button2.border.leftwidth,
                                                        style: attributes.global.layout.button2.border.leftstyle,
                                                    },
                                                    right: {
                                                        color: attributes.global.layout.button2.border.rightcolor,
                                                        width: attributes.global.layout.button2.border.rightwidth,
                                                        style: attributes.global.layout.button2.border.rightstyle,
                                                    },
                                                }}
                                                onChange={(value)=>vayu_blocks_handleslideBorderChange('button2.border',value)}
                                                type="border"
                                            />

                                            <BoxControl
                                                label={__('Border Radius','vayu-blocks')}
                                                onChange={(value)=> vayu_blocks_handleBorderRadius('button2.borderRadius',value)}
                                                values={attributes.global.layout.button2.borderRadius}
                                            />

                                            <BoxControl
                                                label={__('Padding','vayu-blocks')}
                                                onChange={(value)=> vayu_blocks_handleBorderRadius('button2.padding',value)}
                                                values={attributes.global.layout.button2.padding}
                                            />
                                        </>
                                    )}
                                </>
                            )}

                        </>

                    </>
                )}
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

                {/* <ToggleControl
                    label={__('Fade', 'vayu-blocks')}
                    checked={attributes.fade}
                    onChange={(value) => setAttributes({ fade: value })}
                />
              <h6>Slide fade controls the smooth transition between slides by gradually fading them in and out.</h6>
                 */}

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
                                    title={ __( 'Background Color', 'vayu-blocks' ) }
                                    colorSettings={ [
                                        {
                                            value: attributes.dots.backgroundColor,
                                            onChange: (colorValue) => setAttributes({
                                                dots: {
                                                    ...attributes.dots,
                                                    backgroundColor: colorValue,
                                                },
                                            }),
                                            label: __( 'Background Color', 'vayu-blocks' ),
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
                                    label={__('Position', 'vayu-blocks')}
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
                                
                            </>

                    </>
                )}

    
            </PanelBody>

        </>

    );
};

export default PostSettings;
