import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    ButtonGroup,
    ColorPalette,
    GradientPicker,
    TextareaControl,
    FontSizePicker,
    TextControl,
    __experimentalBoxControl as BoxControl,
    SelectControl,
} from '@wordpress/components';
import { MdDeleteForever, MdColorLens } from 'react-icons/md';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { PiGradient } from 'react-icons/pi';
import {AlignmentToolbar,MediaPlaceholder} from '@wordpress/block-editor';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';

import {
    HoverControl,
} from '../../components/index.js';


const SlideSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [background, setBackground] = useState('image');
    const [activeButton, setActiveButton] = useState(0);
    const [buttonNumber, setButtonNumber] = useState('button1');
    const [activeButtonfill, setActiveButtonfill] = useState('fill');

    const vayu_blocks_handleExpandToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const vayu_blocks_colors = [
        { name: 'Gray', color: '#808080' },
        { name: 'Light Gray', color: '#D3D3D3' },
        { name: 'Black', color: '#000' },
        { name: 'Light Black', color: '#333' },
        { name: 'Blue', color: '#00f' },
        { name: 'Light Blue', color: '#add8e6' },
        { name: 'Green', color: '#008000' },
        { name: 'Dark Blue', color: '#00008B' },
        { name: 'Red', color: '#f00' },
        { name: 'Light Red', color: '#FF6347' },
        { name: 'Purple', color: '#800080' },
    ];

    const vayu_blocks_gradients = [
        {
          gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
          name: 'Vivid cyan blue to vivid purple',
          slug: 'vivid-cyan-blue-to-vivid-purple'
        },
        {
          gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
          name: 'Light green cyan to vivid green cyan',
          slug: 'light-green-cyan-to-vivid-green-cyan'
        },
        {
          gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
          name: 'Luminous vivid amber to luminous vivid orange',
          slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
        },
        {
          gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
          name: 'Luminous vivid orange to vivid red',
          slug: 'luminous-vivid-orange-to-vivid-red'
        },
        {
          gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
          name: 'Very light gray to cyan bluish gray',
          slug: 'very-light-gray-to-cyan-bluish-gray'
        },
        {
          gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
          name: 'Cool to warm spectrum',
          slug: 'cool-to-warm-spectrum'
        },
        {
          gradient: 'linear-gradient(to right, #C90100 0%, #FF7B00 25%, #00D4E7 75%, #009DFF 100%)',
          name: 'Red to blue gradient',
          slug: 'red-to-blue-gradient'
        },
        {
          gradient: 'linear-gradient(45deg, #09009f, #00ff95 80%)',
          name: 'Blue to green gradient',
          slug: 'blue-to-green-gradient'
        },
        {
          gradient: 'linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4))',
          name: 'Purple to red gradient',
          slug: 'purple-to-red-gradient'
        },
        {
          gradient: 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)',
          name: 'Multicolor gradient',
          slug: 'multicolor-gradient'
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

    const vayu_blocks_handleDeleteSlide = (index) => {
        setAttributes({
            slides: attributes.slides.filter((_, i) => i !== index),
            slidercount: attributes.slides.length - 1,
        });
    };

    const vayu_blocks_handleAddSlide = () => {
        setAttributes({
            slides: [
                ...attributes.slides,
                {
                    layout: {
                        button1:{
                            show: true,
                            text: 'button 1',
                            size: 20,
                            backgroundColor: 'blue',
                            backgroundType:'color',
                            backgroundGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                            color:'white',
                            border:{
                                color: 'white',
                                width: '1px',
                                style: 'solid',
        
                                topcolor: 'white',
                                topwidth: '1px',
                                topstyle: 'solid',
        
                                bottomcolor: 'white',
                                bottomwidth: '1px',
                                bottomstyle: 'solid',
        
                                leftcolor: 'white',
                                leftwidth: '1px',
                                leftstyle: 'solid',
        
                                rightcolor: 'white',
                                rightwidth: '1px',
                                rightstyle: 'solid'
                            },
                            borderRadius:{
                                top: '5px',
                                right:'5px',
                                bottom:'5px',
                                left:'5px'
                            } 
                        },
                        button2:{
                            show: true,
                            text: 'button 2',
                            size: 20,
                            backgroundColor: 'blue',
                            backgroundType:'color',
                            backgroundGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                            color:'white',
                            border:{
                                color: 'white',
                                width: '1px',
                                style: 'solid',
        
                                topcolor: 'white',
                                topwidth: '1px',
                                topstyle: 'solid',
        
                                bottomcolor: 'white',
                                bottomwidth: '1px',
                                bottomstyle: 'solid',
        
                                leftcolor: 'white',
                                leftwidth: '1px',
                                leftstyle: 'solid',
        
                                rightcolor: 'white',
                                rightwidth: '1px',
                                rightstyle: 'solid'
                            },
                            borderRadius:{
                                top: '5px',
                                right:'5px',
                                bottom:'5px',
                                left:'5px'
                            } 
                        },
                        heading:{
                            text: 'Slider',
                            tag: 'h2',
                            size : 28,
                            fontWeight: "bold",
                            color : 'white'
                        },
                        border:{
                            color: 'black',
                            width: '1px',
                            style: 'solid',
    
                            topcolor: 'black',
                            topwidth: '1px',
                            topstyle: 'solid',
    
                            bottomcolor: 'black',
                            bottomwidth: '1px',
                            bottomstyle: 'solid',
    
                            leftcolor: 'black',
                            leftwidth: '1px',
                            leftstyle: 'solid',
    
                            rightcolor: 'black',
                            rightwidth: '1px',
                            rightstyle: 'solid'
                        },
                        borderRadius:{
                            top: '5px',
                            right:'5px',
                            bottom:'5px',
                            left:'5px'
                            
                        },
                        opacity:0.8,
                        backgroundImage: '',
                        backgroundType: 'color',
                        backgroundColor: 'black', 
                        backgroundGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                        alignment:'center',
                    }
                }
            ]        
        });
    };
    
    const vayu_blocks_updateSliderStyles = (index, propertyPath, value) => {
        const newSlides = [...attributes.slides];
    
        if (!newSlides[index]) {
            newSlides[index] = { layout: {} };
        }
    
        if (!newSlides[index].layout) {
            newSlides[index].layout = {};
        }
    
        const properties = propertyPath.split('.');
        let currentProperty = newSlides[index].layout;
    
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
        
        setAttributes({ slides: newSlides });
    };
    
    const vayu_blocks_handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const vayu_blocks_handleslideBorderChange = (index, property, newBorders) => { 
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
            vayu_blocks_updateSliderStyles(index, key, updatedAttributes[key]);
        });
    
    };

    const vayu_blocks_handleBorderRadius = (index, property, value) => {
        const sides = ['top', 'right', 'bottom', 'left'];
    
        sides.forEach(side => {
            if (value[side]) {
                // Update the borderRadius for the specified side
                vayu_blocks_updateSliderStyles(index, `${property}.${side}`, value[side]);
            }
        });
    };
     
    const vayu_blocks_handleButtonfillClick = (type, index, property) => {
        setActiveButtonfill(type);
    
        const backgroundValue = type === 'fill' 
            ? 'blue' 
            : 'transparent';
    
        const borderValue = type === 'fill'
            ? `0px`
            : `1px`;
    
        vayu_blocks_updateSliderStyles(index, `${property}.backgroundColor`, backgroundValue);
        vayu_blocks_updateSliderStyles(index, `${property}.border.Width`, borderValue);
    };
    
       

    return (
        
            <div style={{padding:"5px"}}>

                {attributes.slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`vayu_blocks_slider-settings ${expandedIndex === index ? 'expanded' : ''}`}
                    >
                        <div className="vayu_blocks_slider-header">
                            <span className="vayu_blocks_slider-title" onClick={() => vayu_blocks_handleExpandToggle(index)}>
                                {__('Slide ' + (index + 1), 'vayu-blocks')}
                            </span>
                            <div className="vayu_blocks_slider-actions">
                                {attributes.slides.length > 2 && (
                                    <Button
                                        className="vayu_blocks_delete-button"
                                        isDestructive
                                        onClick={() => vayu_blocks_handleDeleteSlide(index)}
                                    >
                                        <MdDeleteForever />
                                    </Button>
                                )}
                                <Button
                                    className="vayu_blocks_expand-button"
                                    onClick={() => vayu_blocks_handleExpandToggle(index)}
                                >
                                    {expandedIndex === index ? <FaCaretDown /> : <FaCaretRight />}
                                </Button>
                            </div>
                        </div>
                        
                            {expandedIndex === index && (
                                <div className="vayu_blocks_slider-content">

                                    <div className="vayu_blocks_button-container">
                                        <button
                                            className={`vayu_blocks_custom-button ${activeButton === 0 ? 'active' : ''}`}
                                            onClick={() => vayu_blocks_handleButtonClick(0)}
                                        >
                                            Style
                                            {activeButton === 0 && <div className="vayu_blocks_custom-button-active">Style</div>}
                                        </button>
                                        <button
                                            className={`vayu_blocks_custom-button ${activeButton === 1 ? 'active' : ''}`}
                                            onClick={() => vayu_blocks_handleButtonClick(1)}
                                        >
                                            Heading
                                            {activeButton === 1 && <div className="vayu_blocks_custom-button-active">Heading</div>}
                                        </button>
                                        <button
                                            className={`vayu_blocks_custom-button ${activeButton === 2 ? 'active' : ''}`}
                                            onClick={() => vayu_blocks_handleButtonClick(2)}
                                        >
                                            Button
                                            {activeButton === 2 && <div className="vayu_blocks_custom-button-active">Button</div>}
                                        </button>
                                    </div>
                                        
                                    {0=== activeButton &&(
                                        <>
                                            <HoverControl value={ background }
                                                options={[
                                                    {
                                                        label: __( 'Image', 'vayu-blocks' ),
                                                        value: 'image'
                                                    },
                                                    {
                                                        label: __( 'color', 'vayu-blocks' ),
                                                        value: 'color'
                                                    }
                                                    
                                                ]}
                                                onChange={ setBackground } />

                                            {'image'=== background && (
                                            <>
                                                <MediaPlaceholder
                                                    icon="format-image"
                                                    labels={{
                                                        title: __('Background Image', 'vayu-blocks'),
                                                        name: __('an image', 'vayu-blocks')
                                                    }}
                                                    onSelect={(media) =>  vayu_blocks_updateSliderStyles(index, 'backgroundImage', media.url)}
                                                    accept="image/*"
                                                    allowedTypes={['image']}
                                                />
                                            </>
                                            )}

                                            { 'color' ===  background &&  (	
                                            <>
                                                <>
                                                <div className="vayu_blocks_myclasst">
                                                <label className="vayu_blocks_components-base-control__labelt">{__('Background Type', 'vayu-blocks')}</label>
                                                <ButtonGroup className="vayu_blocks_linking-controlst">
                                                <Button
                                                    icon={<MdColorLens />}
                                                    label={__('Background color', 'vayu-blocks')}
                                                    showTooltip={true}
                                                    isPrimary={attributes.slides[index].layout.backgroundType === 'color'}
                                                    onClick={() => {
                                                        vayu_blocks_updateSliderStyles(index, 'backgroundType', 'color');
                                                    }}
                                                    
                                                />

                                                <Button
                                                    icon={<PiGradient />}
                                                    label={__('Gradient', 'vayu-blocks')}
                                                    showTooltip={true}
                                                    isPrimary={attributes.slides[index].layout.backgroundType === 'gradient'}
                                                    onClick={() => {
                                                        vayu_blocks_updateSliderStyles(index, 'backgroundType', 'gradient');
                                                    }}
                                                    
                                                />

                                                </ButtonGroup>
                                                </div>

                                                {attributes.slides[index].layout.backgroundType === 'color' && (
                                                    <ColorPalette
                                                        label={__('Background Color', 'vayu-blocks')}
                                                        colors={vayu_blocks_colors}
                                                        value={attributes.slides[index].layout.backgroundColor || ''}
                                                        onChange={(color) =>  vayu_blocks_updateSliderStyles(index, 'backgroundColor', color)}
                                                    />
                                                )}

                                                {attributes.slides[index].layout.backgroundType === 'gradient' && (
                                                    <GradientPicker
                                                        value={attributes.slides[index].layout.backgroundGradient || ''}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'backgroundGradient', value)}
                                                        gradients={vayu_blocks_gradients}
                                                    />
                                                )}

                                                </>
                                            </>
                                            )}

                                              <br />  
                                            <RangeControl
                                                label = {__('Opacity', 'vayu-blocks')}
                                                value={attributes.slides[index].layout.opacity}
                                                onChange={(value) => vayu_blocks_updateSliderStyles(index, 'opacity', value)}
                                                min={0}
                                                max={1}
                                                step={0.1}
                                            />

                                            <AlignmentToolbar
                                                label={__('Alignment', 'Post_blockk')}
                                                value={ attributes.slides[index].layout.alignment}
                                                onChange={(value) => vayu_blocks_updateSliderStyles(index, 'alignment', value)}								
                                                isCollapsed={ false }
                                            />

                                            <BorderBoxControlComponent
                                                label={__('Border','vayu-blocks')}
                                                value={{
                                                    all: {
                                                        color: attributes.slides[index].layout.border.color,
                                                        width: attributes.slides[index].layout.border.width,
                                                        style: attributes.slides[index].layout.border.style,
                                                    },
                                                    top: {
                                                        color: attributes.slides[index].layout.border.topcolor,
                                                        width: attributes.slides[index].layout.border.topwidth,
                                                        style: attributes.slides[index].layout.border.topstyle,
                                                    },
                                                    bottom: {
                                                        color: attributes.slides[index].layout.border.bottomcolor,
                                                        width: attributes.slides[index].layout.border.bottomwidth,
                                                        style: attributes.slides[index].layout.border.bottomstyle,
                                                    },
                                                    left: {
                                                        color: attributes.slides[index].layout.border.leftcolor,
                                                        width: attributes.slides[index].layout.border.leftwidth,
                                                        style: attributes.slides[index].layout.border.leftstyle,
                                                    },
                                                    right: {
                                                        color: attributes.slides[index].layout.border.rightcolor,
                                                        width: attributes.slides[index].layout.border.rightwidth,
                                                        style: attributes.slides[index].layout.border.rightstyle,
                                                    },
                                                }}
                                                onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'border',value)}
                                                type="border"
                                            />
                                            
                                            <BoxControl
                                                label={__('Border Radius','vayu-blocks')}
                                                onChange={(value)=> vayu_blocks_handleBorderRadius(index,'borderRadius',value)}
                                                values={attributes.slides[index].layout.borderRadius}
                                            />

                                        </>
                                    )}

                                    {1===activeButton && (
                                        <>
                                            <TextareaControl
                                                label={__('Heading', 'vayu-blocks')}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.text', value)}
                                                value={attributes.slides[index].layout.heading.text}
                                            />
                                            
                                            <SelectControl
                                                label={__('Title Tag', 'vayu-blocks')}
                                                value={attributes.slides[index].layout.heading.tag}
                                                options={[
                                                    { label: __('H1 Heading h1', 'vayu-blocks'), value: 'h1' },
                                                    { label: __('H2 Heading h2', 'vayu-blocks'), value: 'h2' },
                                                    { label: __('H3 Heading h3', 'vayu-blocks'), value: 'h3' },
                                                    { label: __('H4 Heading h4', 'vayu-blocks'), value: 'h4' },
                                                    { label: __('H5 Heading h5', 'vayu-blocks'), value: 'h5' },
                                                    { label: __('H6 Heading h6', 'vayu-blocks'), value: 'h6' },
                                                ]}
                                                onChange={(value)=> vayu_blocks_updateSliderStyles(index,'heading.tag', value)}
                                            />

                                            <FontSizePicker
                                                label={__('Font Size', 'vayu-blocks')}
                                                fontSizes={vayu_blocks_sizes}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.size', value)}
                                                value={attributes.slides[index].layout.heading.size}
                                            />

                                            <SelectControl
                                                label={__('Font Weight', 'text-domain')}
                                                value={slide.layout.heading.fontWeight}
                                                options={[
                                                    { label: __('Normal', 'text-domain'), value: 'normal' },
                                                    { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                                    { label: __('Bold', 'text-domain'), value: 'bold' },
                                                    { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                                ]}
                                                onChange={(value) => vayu_blocks_updateSliderStyles(index,'heading.fontWeight', value)}
                                            />

                                            <h4>{__('Color', 'vayu-blocks')}</h4>
                                            <ColorPalette
                                                label={__('Color', 'vayu-blocks')}
                                                colors={vayu_blocks_colors}
                                                value={attributes.slides[index].layout.heading.color}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.color', value)}
                                            />
                                            
                                        </>

                                    )}

                                    {2 === activeButton && (
                                        <>
                                        <HoverControl value={ buttonNumber }
                                            options={[
                                                {
                                                    label: __( 'Button 1', 'vayu-blocks' ),
                                                    value: 'button1'
                                                },
                                                {
                                                    label: __( 'Button 2', 'vayu-blocks' ),
                                                    value: 'button2'
                                                }
                                                
                                            ]}
                                            onChange={ setButtonNumber } />

                                        {'button1' === buttonNumber && (
                                            <>
                                            <ToggleControl
                                                label={__('Button 1', 'vayu-blocks')}
                                                checked={attributes.slides[index].layout.button1.show}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.show', value)}
                                            />
                                            {true === attributes.slides[0].layout.button1.show && (
                                                <>
                                                    <Button
                                                        style={{ 
                                                            background: activeButtonfill === 'fill' ? 'black' : 'white',
                                                            color: activeButtonfill === 'fill' ? 'white' : 'black', 
                                                            borderWidth: "1px", 
                                                            borderStyle:"solid", 
                                                            borderColor:"black", 
                                                            padding: "20px 40px"
                                                            }}
                                                            
                                                        onClick={() => vayu_blocks_handleButtonfillClick('fill',index,"button1")}
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
                                                            padding: "20px 30px",
                                                            marginLeft:"8px"
                                                        }}

                                                        onClick={() => vayu_blocks_handleButtonfillClick('outline',index,"button1")}
                                                    >
                                                        Outline
                                                    </Button>
                                                    
                                                    <TextControl
                                                        label={__('Text', 'vayu-blocks')}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.text', value)}
                                                        value={attributes.slides[0].layout.button1.text}
                                                    />

                                                    <FontSizePicker
                                                        label={__('Font Size', 'vayu-blocks')}
                                                        fontSizes={vayu_blocks_fontsizes}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.size', value)}
                                                        value={attributes.slides[index].layout.button1.size}
                                                    />

                                                    <h4>{__('Color', 'vayu-blocks')}</h4>
                                                    <ColorPalette
                                                        label={__('Color', 'vayu-blocks')}
                                                        colors={vayu_blocks_colors}
                                                        value={attributes.slides[index].layout.button1.color}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.color', value)}
                                                    />
                                                
                                                    <div className="vayu_blocks_myclasst">
                                                    <label className="vayu_blocks_components-base-control__labelt">{__('Background Type', 'vayu-blocks')}</label>
                                                    <ButtonGroup className="vayu_blocks_linking-controlst">
                                                    <Button
                                                        icon={<MdColorLens />}
                                                        label={__('Background color', 'vayu-blocks')}
                                                        showTooltip={true}
                                                        isPrimary={attributes.slides[index].layout.button1.backgroundType === 'color'}
                                                        onClick={() => {
                                                            vayu_blocks_updateSliderStyles(index, 'button1.backgroundType', 'color');
                                                        }}
                                                        
                                                    />

                                                    <Button
                                                        icon={<PiGradient />}
                                                        label={__('Gradient', 'vayu-blocks')}
                                                        showTooltip={true}
                                                        isPrimary={attributes.slides[index].layout.button1.backgroundType === 'gradient'}
                                                        onClick={() => {
                                                            vayu_blocks_updateSliderStyles(index, 'button1.backgroundType', 'gradient');
                                                        }}
                                                        
                                                    />

                                                    </ButtonGroup>
                                                    </div>

                                                    {attributes.slides[index].layout.button1.backgroundType === 'color' && (
                                                        <ColorPalette
                                                            label={__('Background Color', 'vayu-blocks')}
                                                            colors={vayu_blocks_colors}
                                                            value={attributes.slides[index].layout.button1.backgroundColor || ''}
                                                            onChange={(color) =>  vayu_blocks_updateSliderStyles(index, 'button1.backgroundColor', color)}
                                                        />
                                                    )}

                                                    {attributes.slides[index].layout.button1.backgroundType === 'gradient' && (
                                                        <GradientPicker
                                                            value={attributes.slides[index].layout.button1.backgroundGradient || ''}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.backgroundGradient', value)}
                                                            gradients={vayu_blocks_gradients}
                                                        />
                                                    )}
                                                

                                                    <BorderBoxControlComponent
                                                    label={__('Border','vayu-blocks')}
                                                    value={{
                                                        all: {
                                                            color: attributes.slides[index].layout.button1.border.color,
                                                            width: attributes.slides[index].layout.border.width,
                                                            style: attributes.slides[index].layout.border.style,
                                                        },
                                                        top: {
                                                            color: attributes.slides[index].layout.button1.border.topcolor,
                                                            width: attributes.slides[index].layout.border.topwidth,
                                                            style: attributes.slides[index].layout.border.topstyle,
                                                        },
                                                        bottom: {
                                                            color: attributes.slides[index].layout.button1.border.bottomcolor,
                                                            width: attributes.slides[index].layout.button1.border.bottomwidth,
                                                            style: attributes.slides[index].layout.button1.border.bottomstyle,
                                                        },
                                                        left: {
                                                            color: attributes.slides[index].layout.button1.border.leftcolor,
                                                            width: attributes.slides[index].layout.button1.border.leftwidth,
                                                            style: attributes.slides[index].layout.button1.border.leftstyle,
                                                        },
                                                        right: {
                                                            color: attributes.slides[index].layout.button1.border.rightcolor,
                                                            width: attributes.slides[index].layout.button1.border.rightwidth,
                                                            style: attributes.slides[index].layout.button1.border.rightstyle,
                                                        },
                                                    }}
                                                    onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'button1.border',value)}
                                                    type="border"
                                                    />

                                                    <BoxControl
                                                        label={__('Border Radius','vayu-blocks')}
                                                        onChange={(value)=> vayu_blocks_handleBorderRadius(index,'button1.borderRadius',value)}
                                                        values={attributes.slides[index].layout.button1.borderRadius}
                                                    />

                                                </>
                                            )}
                                            </>
                                        )}
                                            
                                        {'button2' === buttonNumber && (
                                            <>
                                            <ToggleControl
                                                label={__('Button 2', 'vayu-blocks')}
                                                checked={attributes.slides[index].layout.button2.show}
                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.show', value)}
                                            />
                                            {true === attributes.slides[0].layout.button2.show && (
                                                <>
                                                     <Button
                                                        style={{ 
                                                            background: activeButtonfill === 'fill' ? 'black' : 'white',
                                                            color: activeButtonfill === 'fill' ? 'white' : 'black', 
                                                            borderWidth: "1px", 
                                                            borderStyle:"solid", 
                                                            borderColor:"black", 
                                                            padding: "20px 40px"
                                                            }}
                                                            
                                                        onClick={() => vayu_blocks_handleButtonfillClick('fill',index,"button2")}
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
                                                            padding: "20px 30px",
                                                            marginLeft:"8px"
                                                        }}

                                                        onClick={() => vayu_blocks_handleButtonfillClick('outline',index,"button2")}
                                                    >
                                                        Outline
                                                    </Button>

                                                    <TextControl
                                                        label={__('Text', 'vayu-blocks')}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.text', value)}
                                                        value={attributes.slides[0].layout.button2.text}
                                                    />

                                                    <FontSizePicker
                                                        label={__('Font Size', 'vayu-blocks')}
                                                        fontSizes={vayu_blocks_fontsizes}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.size', value)}
                                                        value={attributes.slides[index].layout.button2.size}
                                                    />
                                                    
                                                    <h4>{__('Color', 'vayu-blocks')}</h4>
                                                    <ColorPalette
                                                        label={__('Color', 'vayu-blocks')}
                                                        colors={vayu_blocks_colors}
                                                        value={attributes.slides[index].layout.button2.color}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.color', value)}
                                                    />
                                                
                                                    <div className="vayu_blocks_myclasst">
                                                    <label className="vayu_blocks_components-base-control__labelt">{__('Background Type', 'vayu-blocks')}</label>
                                                    <ButtonGroup className="vayu_blocks_linking-controlst">
                                                    <Button
                                                        icon={<MdColorLens />}
                                                        label={__('Background color', 'vayu-blocks')}
                                                        showTooltip={true}
                                                        isPrimary={attributes.slides[index].layout.button2.backgroundType === 'color'}
                                                        onClick={() => {
                                                            vayu_blocks_updateSliderStyles(index, 'button2.backgroundType', 'color');
                                                        }}
                                                        
                                                    />

                                                    <Button
                                                        icon={<PiGradient />}
                                                        label={__('Gradient', 'vayu-blocks')}
                                                        showTooltip={true}
                                                        isPrimary={attributes.slides[index].layout.button2.backgroundType === 'gradient'}
                                                        onClick={() => {
                                                            vayu_blocks_updateSliderStyles(index, 'button2.backgroundType', 'gradient');
                                                        }}
                                                        
                                                    />

                                                    </ButtonGroup>
                                                    </div>

                                                    {attributes.slides[index].layout.button2.backgroundType === 'color' && (
                                                        <ColorPalette
                                                            label={__('Background Color', 'vayu-blocks')}
                                                            colors={vayu_blocks_colors}
                                                            value={attributes.slides[index].layout.button2.backgroundColor || ''}
                                                            onChange={(color) =>  vayu_blocks_updateSliderStyles(index, 'button2.backgroundColor', color)}
                                                        />
                                                    )}

                                                    {attributes.slides[index].layout.button2.backgroundType === 'gradient' && (
                                                        <GradientPicker
                                                            value={attributes.slides[index].layout.button2.backgroundGradient || ''}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.backgroundGradient', value)}
                                                            gradients={vayu_blocks_gradients}
                                                        />
                                                    )}

                                                    <BorderBoxControlComponent
                                                    label={__('Border','vayu-blocks')}
                                                    value={{
                                                        all: {
                                                            color: attributes.slides[index].layout.button2.border.color,
                                                            width: attributes.slides[index].layout.border.width,
                                                            style: attributes.slides[index].layout.border.style,
                                                        },
                                                        top: {
                                                            color: attributes.slides[index].layout.button2.border.topcolor,
                                                            width: attributes.slides[index].layout.border.topwidth,
                                                            style: attributes.slides[index].layout.border.topstyle,
                                                        },
                                                        bottom: {
                                                            color: attributes.slides[index].layout.button2.border.bottomcolor,
                                                            width: attributes.slides[index].layout.button2.border.bottomwidth,
                                                            style: attributes.slides[index].layout.button2.border.bottomstyle,
                                                        },
                                                        left: {
                                                            color: attributes.slides[index].layout.button2.border.leftcolor,
                                                            width: attributes.slides[index].layout.button2.border.leftwidth,
                                                            style: attributes.slides[index].layout.button2.border.leftstyle,
                                                        },
                                                        right: {
                                                            color: attributes.slides[index].layout.button2.border.rightcolor,
                                                            width: attributes.slides[index].layout.button2.border.rightwidth,
                                                            style: attributes.slides[index].layout.button2.border.rightstyle,
                                                        },
                                                    }}
                                                    onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'button2.border',value)}
                                                    type="border"
                                                    />

                                                    <BoxControl
                                                        label={__('Border Radius','vayu-blocks')}
                                                        onChange={(value)=> vayu_blocks_handleBorderRadius(index,'button2.borderRadius',value)}
                                                        values={attributes.slides[index].layout.button2.borderRadius}
                                                    />

                                                </>
                                            )}
                                            </>

                                        )}
                                        </>
                                    )}

                                </div>
                            )}

                    </div>
                ))}

                <Button isPrimary onClick={vayu_blocks_handleAddSlide}>
                    {__('Add Slide', 'vayu-blocks')}
                </Button>

            </div>
    );
};

export default SlideSettings;
