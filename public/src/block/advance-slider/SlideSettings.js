import React, { useEffect, useState } from 'react';
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
    TextareaControl,
    FontSizePicker,
    TextControl,
    __experimentalBoxControl as BoxControl,
    SelectControl,
    FocalPointPicker,
    DuotonePicker,
    DuotoneSwatch ,
    __experimentalToolsPanel as ToolsPanel,

} from '@wordpress/components';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { MdContentCopy } from "react-icons/md";
import {AlignmentToolbar,MediaPlaceholder } from '@wordpress/block-editor';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';
import { Dashicon } from '@wordpress/components';
import {	__experimentalPanelColorGradientSettings as PanelColorGradientSettings} from '@wordpress/block-editor';
import { PanelColorSettings } from '@wordpress/block-editor';
import { URLInputButton } from '@wordpress/block-editor';

import {
    HoverControl,
} from '../../components/index.js';


const SlideSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [activeButton, setActiveButton] = useState(0);
    const [activeButtonfill, setActiveButtonfill] = useState('fill');
    const [isPanelOpen, setIsPanelOpen] = useState('heading');
    const [isPanel, setIsPanel] = useState('layout');
    const [hover, sethover] = useState('normal');
    const [button, setbutton] = useState('button1');


    const vayu_blocks_handleExpandToggle = (slideIndex) => {
        const { slidesToShow, slidesPerRow, slidesToScroll, index: currentIndex } = attributes;
    
        // Calculate total slides per page
        const slidesPerPage = slidesToShow * slidesPerRow;
    
        // Calculate the new page number based on the slide index
        const newPage = Math.floor(slideIndex / slidesPerPage);
    
        // Update expanded index (toggle) as per the existing logic
        setExpandedIndex(expandedIndex === slideIndex ? null : slideIndex);
    
        // Check if the new page is different from the current page
        if (newPage !== currentIndex) {
            // Update the index attribute to reflect the new page
            setAttributes({ index: newPage });
        }
    };

    // Utility function to generate a unique ID
    const generateUniqueId = () =>  new Date().getTime() + '-' + Math.floor(Math.random() * 1000);

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
          gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,128) 100%)',
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

    const vayu_blocks_blendModeOptions = [
        {
            disabled: true,
            label: 'Select an Option',
            value: ''
        },
        {
            label: 'Normal',
            value: 'normal'
        },
        {
            label: 'Multiply',
            value: 'multiply'
        },
        {
            label: 'Screen',
            value: 'screen'
        },
        {
            label: 'Overlay',
            value: 'overlay'
        },
        {
            label: 'Darken',
            value: 'darken'
        },
        {
            label: 'Lighten',
            value: 'lighten'
        },
        {
            label: 'Color-dodge',
            value: 'color-dodge'
        },
        {
            label: 'Color-burn',
            value: 'color-burn'
        },
        {
            label: 'Hard-light',
            value: 'hard-light'
        },
        {
            label: 'Soft-light',
            value: 'soft-light'
        },
        {
            label: 'Difference',
            value: 'difference'
        },
        {
            label: 'Saturation',
            value: 'saturation'
        },
        {
            label: 'Color',
            value: 'color'
        },
        {
            label: 'Luminosity',
            value: 'luminosity'
        }
    ];

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

    //delete slide
    const vayu_blocks_handleDeleteSlide = (index) => {
        setAttributes({
            slides: attributes.slides.filter((_, i) => i !== index),
            slidercount: attributes.slides.length - 1,
        });
    };

    //copy slide
    const vayu_blocks_handleCopySlide = (index) => {
        // Create a deep copy of the slide at the specified index
        const newSlide = JSON.parse(JSON.stringify(attributes.slides[index]));

        // Assign a new unique ID to the copied slide
        newSlide.layout.uniqueId = generateUniqueId();
        
        // Add the new slide to the slides array
        const updatedSlides = [...attributes.slides, newSlide];
        
        // Update the attributes with the new slides array
        setAttributes({ slides: updatedSlides });
    };
    
    //adding new slides
    const vayu_blocks_handleAddSlide = () => {
        setAttributes({
            slides: [
                ...attributes.slides,
                {
                    layout: {
                        uniqueId: generateUniqueId(),
                        button1: {
                            show: true,
                            text: "button 1",
                            link: "",
                            newtab: true,
                            size: 20,
                            backgroundColor: "blue",
                            backgroundType: "color",
                            backgroundGradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                            color: "white",
                            border: {
                                color: "white",
                                width: "1px",
                                style: "solid",
                                topcolor: "white",
                                topwidth: "1px",
                                topstyle: "solid",
                                bottomcolor: "white",
                                bottomwidth: "1px",
                                bottomstyle: "solid",
                                leftcolor: "white",
                                leftwidth: "1px",
                                leftstyle: "solid",
                                rightcolor: "white",
                                rightwidth: "1px",
                                rightstyle: "solid"
                            },
                            borderRadius: {
                                top: "5px",
                                right: "5px",
                                bottom: "5px",
                                left: "5px"
                            },
                            padding: {
                                top: "10px",
                                right: "20px",
                                bottom: "10px",
                                left: "20px"
                            }
                        },
                        button2: {
                            show: true,
                            link: "",
                            newtab: true,
                            text: "button 2",
                            size: 20,
                            backgroundColor: "blue",
                            backgroundType: "color",
                            backgroundGradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                            color: "white",
                            border: {
                                color: "white",
                                width: "1px",
                                style: "solid",
                                topcolor: "white",
                                topwidth: "1px",
                                topstyle: "solid",
                                bottomcolor: "white",
                                bottomwidth: "1px",
                                bottomstyle: "solid",
                                leftcolor: "white",
                                leftwidth: "1px",
                                leftstyle: "solid",
                                rightcolor: "white",
                                rightwidth: "1px",
                                rightstyle: "solid"
                            },
                            borderRadius: {
                                top: "5px",
                                right: "5px",
                                bottom: "5px",
                                left: "5px"
                            },
                            padding: {
                                top: "10px",
                                right: "20px",
                                bottom: "10px",
                                left: "20px"
                            }
                        },
                        heading: {
                            text: "Slider",
                            tag: "h2",
                            newtab: true,
                            size: 28,
                            fontWeight: "bold",
                            color: "black",
                            link: ""
                        },
                        subheading: {
                            show: true,
                            text: "lorem sub heading for our topic has been very important.",
                            tag: "h4",
                            size: 16,
                            fontWeight: "lighter",
                            color: "black",
                            link: "",
                            newtab: true
                        },
                        border: {
                            color: "black",
                            width: "1px",
                            style: "solid",
                            topcolor: "black",
                            topwidth: "1px",
                            topstyle: "solid",
                            bottomcolor: "black",
                            bottomwidth: "1px",
                            bottomstyle: "solid",
                            leftcolor: "black",
                            leftwidth: "1px",
                            leftstyle: "solid",
                            rightcolor: "black",
                            rightwidth: "1px",
                            rightstyle: "solid"
                        },
                        borderRadius: {
                            top: "5px",
                            right: "5px",
                            bottom: "5px",
                            left: "5px"
                        },
                        padding: {
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            left: "0px"
                        },
                        customStyle: false,
                        customBackgroundStyle:false,
                        opacity: 0.2,
                        backgroundBlend: "lighten",
                        backgroundImage: "",
                        focalPoint: {
                            x: 0.5,
                            y: 0.5
                        },
                        backgroundType: "color",
                        backgroundColor: "#000000",
                        duotone: "",
                        backgroundGradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                        alignment: "center"
                    }
                    
                }
            ]
        });
    };
    
    //style-update
    const vayu_blocks_updateSliderStyles = (index, propertyPath, value='') => {
        if((value===null || value === '') && (propertyPath === 'backgroundGradient' || propertyPath ==='button1.backgroundGradient' || propertyPath ==='button2.backgroundGradient')){
            return;
        }
        if (value === undefined) {
            value = '';
        }

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

    //border
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

    //border-radius and padding handle
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
    
    const vayu_blocks_handleButtonClick = (index) => {
        setActiveButton(index);
        vayu_blocks_updateIndicatorPosition(index);
    };

    const vayu_blocks_updateIndicatorPosition = (index) => {
        const indicator = document.querySelector('.vayu_blocks_custom-button-active');
        if (indicator) {
            const buttons = document.querySelectorAll('.vayu_blocks_custom-button');
            if (buttons.length > 0 && buttons[index]) {
                let value = buttons[index].offsetLeft;
                indicator.style.transform = `translateX(${value}px)`;
            }
        }
    };

    useEffect(() => {
        vayu_blocks_updateIndicatorPosition(activeButton);
    }, [activeButton]);
        
    const vayu_blocks_renderActiveButtonContent = () => {
        if (activeButton === 0) {
            return 'Background';
        } else if (activeButton === 1) {
            return 'Content';
        } else if (activeButton === 2) {
            return 'Style';
        }
        return '';
    };

    //clear image
    const vayu_blocks_clearBackgroundImageAndFocalPoint = (index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index].layout.backgroundImage = '';
        setAttributes({ slides: updatedSlides });
    };

    //duotone change
    const vayu_blocks_duotoneHandler = (index, propertyPath, value) => {
        // Find the filter ID corresponding to the given color array
        if (!Array.isArray(value) || value.length === 0) {
            vayu_blocks_updateSliderStyles(index,propertyPath,"");
        }
        const filter = vayu_blocks_DUOTONE_PALETTE.find(({ colors }) =>
            colors.every((color, i) => color === value[i])
        );
    
        if (filter) {
            const { id } = filter;
            console.log(id);
            vayu_blocks_updateSliderStyles(index,propertyPath,id);

        }
    };

    //duotone value
    const vayu_blocks_duotonevalue = (index) => {
        // Get the ID from the slide's layout duotone
        const id = attributes.slides[index].layout.duotone;
    
        // Find the matching filter in the vayu_blocks_DUOTONE_PALETTE
        const filter = vayu_blocks_DUOTONE_PALETTE.find((filter) => filter.id === id);
    
        // If a match is found, return the colors array
        if (filter) {
            return filter.colors;
        }
        return '';
    };

    const togglePanel = (panel) => {
        if (isPanelOpen === panel) {
            setIsPanelOpen(panel); // Close the panel if it's already open
        } else {
            setIsPanelOpen(panel); // Open the clicked panel
        }
    };

    const vayu_blocks_togglePanelnew = (panel) => {
        if (isPanel === panel) {
            setIsPanel(panel); // Close the panel if it's already open
        } else {
            setIsPanel(panel); // Open the clicked panel
        }
    };
    
    return (
        
            <div class="vayu_blocks_slide_settings_main">

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
 
                                <Button
                                    className="vayu_blocks_copy-button"
                                    
                                    onClick={() => vayu_blocks_handleCopySlide(index)}
                                >
                                    <MdContentCopy />
                                </Button>

                                {attributes.slides.length > 2 && (
                                    <Button
                                        className="vayu_blocks_delete-button"
                                        isDestructive
                                        onClick={() => vayu_blocks_handleDeleteSlide(index)}
                                    >
                                        <Dashicon icon="no-alt" />
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
                                        Background
                                    </button>
                                    <button
                                        className={`vayu_blocks_custom-button ${activeButton === 1 ? 'active' : ''}`}
                                        onClick={() => vayu_blocks_handleButtonClick(1)}
                                    >
                                        Content
                                    </button>
                                    <button
                                        className={`vayu_blocks_custom-button ${activeButton === 2 ? 'active' : ''}`}
                                        onClick={() => vayu_blocks_handleButtonClick(2)}
                                    >
                                        Style
                                    </button>
                                    <div className="vayu_blocks_custom-button-active">
                                        {vayu_blocks_renderActiveButtonContent()}
                                    </div>
                                </div>

                                {0=== activeButton &&(
                                    <>
                                        <h4>{__('Background','vayu-blocks')}</h4>
                                        {attributes.slides[index].layout.backgroundImage ? (
                                            <>         
                                                <div class="image-container">
                                                    <img src={attributes.slides[index].layout.backgroundImage} alt="slideimage" />
                                                    <button class="change-button" onClick={() => vayu_blocks_clearBackgroundImageAndFocalPoint(index)}>Change</button>
                                                </div>
                                                <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => vayu_blocks_clearBackgroundImageAndFocalPoint(index)}>
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
                                                        onSelect={(media) => vayu_blocks_updateSliderStyles(index, 'backgroundImage', media.url)}
                                                        onSelectURL='true'
                                                        accept="image/*"
                                                        allowedTypes={['image']}
                                                    />
                                                )}

                                        <PanelColorGradientSettings
                                            settings={[
                                                {
                                                    colorValue: attributes.slides[index].layout.backgroundColor,
                                                    gradientValue: attributes.slides[index].layout.backgroundGradient,
                                                    onColorChange: (color) => {
                                                        vayu_blocks_updateSliderStyles(index, 'backgroundColor', color);
                                                    },
                                                    onGradientChange: (gradient) => {
                                                        vayu_blocks_updateSliderStyles(index, 'backgroundGradient', gradient); 
                                                    },
                                                    label: __( 'Background', 'vayu-blocks' ),
                                                },
                                            ]}
                                        />

                                        <br />
                                        <RangeControl
                                            label={__('Opacity', 'vayu-blocks')}
                                            value={attributes.slides[index].layout.opacity}
                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,'opacity',value)}
                                            min={0}
                                            max={1}
                                            step={0.1}
                                        />
                                    </>
                                )}

                                {1===activeButton && (
                                    <>
                                        <div className="content-panel">
                                            <button 
                                                style={{ color: isPanelOpen === 'heading' ? 'blue' : 'initial' }} 
                                                onClick={() => togglePanel('heading')} 
                                                className='content-panel-button'
                                            >
                                                Heading
                                            </button>
                                            <button 
                                                style={{ color: isPanelOpen === 'button' ? 'blue' : 'initial' }} 
                                                onClick={() => togglePanel('button')} 
                                                className='content-panel-button'
                                            >
                                                Button
                                            </button>
                                        </div>


                                        {isPanelOpen==='heading' && (
                                            <>
                                            <div className="tools-panel-wrapper-new">
                                                <TextareaControl
                                                    label={__('Heading', 'vayu-blocks')}
                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.text', value)}
                                                    value={attributes.slides[index].layout.heading.text}
                                                />

                                                <TextControl
                                                    className='vayu_blocks_textarea'
                                                    label="Link URL"
                                                    value={ attributes.slides[index].layout.heading.link }
                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.link', value)}
                                                    placeholder="Enter a URL"
                                                />

                                                <ToggleControl
                                                    className='vayu_blocks_togglecontrol'
                                                    label="Open in new tab"
                                                    checked={attributes.slides[index].layout.heading.newtab}
                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.newtab', value)}
                                                />
                                            </div>
                                        
                                            <div className="tools-panel-wrapper-new-sub">
                                                <ToggleControl
                                                    label={__('Sub Heading', 'vayu-blocks')}
                                                    checked={attributes.slides[index].layout.subheading.show}
                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.show', value)}
                                                />
                                                {attributes.slides[index].layout.subheading.show &&(
                                                    <>
                                                        <TextareaControl
                                                            label={__('Sub Heading', 'vayu-blocks')}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.text', value)}
                                                            value={attributes.slides[index].layout.subheading.text}
                                                        />  
                                                    </>
                                                )}

                                            </div>
                                            </>
                                        )}

                                        {isPanelOpen==='button' && (
                                            <>
                                                <div className="tools-panel-wrapper-new">
                                                    <ToggleControl
                                                        className='vayu_blocks_togglecontrol'
                                                        label={__('Button 1', 'vayu-blocks')}
                                                        checked={attributes.slides[index].layout.button1.show}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.show', value)}
                                                    />

                                                    {attributes.slides[index].layout.button1.show && (
                                                        <>
                                                            <TextControl
                                                            className='vayu_blocks_textarea'
                                                            label={__('Text', 'vayu-blocks')}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.text', value)}
                                                            value={attributes.slides[0].layout.button1.text}
                                                        />

                                                        <TextControl
                                                            className='vayu_blocks_textarea'
                                                            label="Link URL"
                                                            value={ attributes.slides[index].layout.button1.link }
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.link', value)}
                                                            placeholder="Enter a URL"
                                                        />

                                                        <ToggleControl
                                                            className='vayu_blocks_togglecontrol'
                                                            label="Open in new tab"
                                                            checked={attributes.slides[index].layout.button1.newtab}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.newtab', value)}
                                                        />
                                                        </>
                                                    )}
                                                </div>
                                        

                                    
                                                <div className="tools-panel-wrapper-new-sub">
                                                    <ToggleControl
                                                        className='vayu_blocks_togglecontrol'
                                                        label={__('Button 2', 'vayu-blocks')}
                                                        checked={attributes.slides[index].layout.button2.show}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.show', value)}
                                                    />

                                                    {attributes.slides[index].layout.button2.show &&(
                                                        <>
                                                            <TextControl
                                                                className='vayu_blocks_textarea'
                                                                label={__('Text', 'vayu-blocks')}
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.text', value)}
                                                                value={attributes.slides[0].layout.button2.text}
                                                            />

                                                            <TextControl
                                                                className='vayu_blocks_textarea'
                                                                label="Link URL"
                                                                value={ attributes.slides[index].layout.button2.link }
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.link', value)}
                                                                placeholder="Enter a URL"
                                                            />

                                                            <ToggleControl
                                                                className='vayu_blocks_togglecontrol'
                                                                label="Open in new tab"
                                                                checked={attributes.slides[index].layout.button2.newtab}
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.newtab', value)}
                                                            />

                                                        </>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </>

                                )}

                                {2 === activeButton && (
                                    <>
                                        <br />
                                        <ToggleControl
                                            label={__('Custom Style', 'vayu-blocks')}
                                            checked={attributes.slides[index].layout.customStyle}
                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStyle",value)}
                                        />
                                        <p>By this the global style will inactive for this slide.</p>
                                        {attributes.slides[index].layout.customStyle && (
                                            <>
                                                <div className="content-panel">
                                                    <button 
                                                        style={{ color: isPanel === 'layout' ? 'blue' : 'initial' }} 
                                                        onClick={() => vayu_blocks_togglePanelnew('layout')} 
                                                        className='content-panel-button'
                                                    >
                                                        Layout
                                                    </button>
                                                    <button 
                                                        style={{ color: isPanel === 'heading' ? 'blue' : 'initial' }} 
                                                        onClick={() => vayu_blocks_togglePanelnew('heading')} 
                                                        className='content-panel-button'
                                                    >
                                                        Heading
                                                    </button>
                                                    <button 
                                                        style={{ color: isPanel === 'button' ? 'blue' : 'initial' }} 
                                                        onClick={() => vayu_blocks_togglePanelnew('button')} 
                                                        className='content-panel-button'
                                                    >
                                                        Button
                                                    </button>
                                                </div>

                                                {isPanel === 'layout' && (
                                                    <>
                                                    <h4>{__('Alignment', 'vayu-blocks')}</h4>
                                                        <AlignmentToolbar
                                                            label={__('Alignment', 'vayu-blocks')}
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


                                                        <BoxControl
                                                            label={__('Padding','vayu-blocks')}
                                                            onChange={(value)=> vayu_blocks_handleBorderRadius(index,'padding',value)}
                                                            values={attributes.slides[index].layout.padding}
                                                        />

                                                    </>
                                                )}

                                                {isPanel==='heading' && (
                                                    <>
                                                        <HoverControl
                                                            value={hover}
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
                                                            onChange={sethover}
                                                        />

                                                        {'normal' === hover && (
                                                            <>
                                                                
                                                                <PanelColorSettings
                                                                    title={ __( 'Color Settings' ) }
                                                                    colorSettings={ [
                                                                        {
                                                                            value: attributes.slides[index].layout.heading.color,
                                                                            onChange: (colorValue) => {
                                                                                vayu_blocks_updateSliderStyles(index, 'heading.color', colorValue);
                                                                            },
                                                                            label: __( 'Heading Color' ),
                                                                        },
                                                                    ] }
                                                                >

                                                                </PanelColorSettings>

                                                                <FontSizePicker
                                                                    label={__('Font Size', 'vayu-blocks')}
                                                                    fontSizes={vayu_blocks_sizes}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.size', value)}
                                                                    value={attributes.slides[index].layout.heading.size}
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
                                                            </>
                                                        )}

                                                        {'active' === hover && (
                                                            <>
                                                                <ToggleControl
                                                                    className='vayu_blocks_togglecontrol'
                                                                    label={__('Sub Heading', 'vayu-blocks')}
                                                                    checked={attributes.slides[index].layout.subheading.show}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.show', value)}
                                                                />

                                                                {attributes.slides[index].layout.subheading.show &&(
                                                                    <>

                                                                        <PanelColorSettings
                                                                            title={ __( 'Color Settings' ) }
                                                                            colorSettings={ [
                                                                                {
                                                                                    value: attributes.slides[index].layout.subheading.color,
                                                                                    onChange: (colorValue) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'subheading.color', colorValue);
                                                                                    },
                                                                                    label: __( 'Color' ),
                                                                                },
                                                                            ] }
                                                                        >

                                                                        </PanelColorSettings>

                                                                        <FontSizePicker
                                                                            label={__('Font Size', 'vayu-blocks')}
                                                                            fontSizes={vayu_blocks_sizes}
                                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.size', value)}
                                                                            value={attributes.slides[index].layout.subheading.size}
                                                                        />

                                                                        <SelectControl
                                                                            label={__('Title Tag', 'vayu-blocks')}
                                                                            value={attributes.slides[index].layout.subheading.tag}
                                                                            options={[
                                                                                { label: __('H1 SubHeading h1', 'vayu-blocks'), value: 'h1' },
                                                                                { label: __('H2 SubHeading h2', 'vayu-blocks'), value: 'h2' },
                                                                                { label: __('H3 SubHeading h3', 'vayu-blocks'), value: 'h3' },
                                                                                { label: __('H4 SubHeading h4', 'vayu-blocks'), value: 'h4' },
                                                                                { label: __('H5 SubHeading h5', 'vayu-blocks'), value: 'h5' },
                                                                                { label: __('H6 SubHeading h6', 'vayu-blocks'), value: 'h6' },
                                                                            ]}
                                                                            onChange={(value)=> vayu_blocks_updateSliderStyles(index,'subheading.tag', value)}
                                                                        />
                                                                        

                                                                        <SelectControl
                                                                            label={__('Font Weight', 'text-domain')}
                                                                            value={slide.layout.subheading.fontWeight}
                                                                            options={[
                                                                                { label: __('Normal', 'text-domain'), value: 'normal' },
                                                                                { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                                                                { label: __('Bold', 'text-domain'), value: 'bold' },
                                                                                { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                                                            ]}
                                                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,'subheading.fontWeight', value)}
                                                                        />
                                                                    </>
                                                                )}
                                                            </>
                                                        )}

                                                    </>
                                                )}
                                                
                                                {isPanel === 'button' && (
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
                                                                    checked={attributes.slides[index].layout.button1.show}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.show', value)}
                                                                />

                                                                {attributes.slides[index].layout.button1.show && (
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
                                                                                    padding: "18px 22px",
                                                                                    marginLeft:"8px"
                                                                                }}

                                                                                onClick={() => vayu_blocks_handleButtonfillClick('outline',index,"button1")}
                                                                            >
                                                                                Outline
                                                                            </Button>
                                                                        </div>

                                                                        <PanelColorGradientSettings
                                                                            title={ __( 'Background', 'vayu-blocks' ) }
                                                                            settings={[
                                                                                {
                                                                                    colorValue: attributes.slides[index].layout.button1.backgroundColor,
                                                                                    gradientValue: attributes.slides[index].layout.button1.backgroundGradient,
                                                                                    

                                                                                    onColorChange: (color) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button1.backgroundColor', color);
                                                                                    },
                                                                                    onGradientChange: (gradient) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button1.backgroundGradient', gradient); 
                                                                                    },
                                                                                    label: __( 'Background', 'vayu-blocks' ),
                                                                                },
                                                                            ]}
                                                                        />

                                                                        <PanelColorSettings
                                                                            title={ __( 'Color' ) }
                                                                            colorSettings={ [
                                                                                {
                                                                                    value: attributes.slides[index].layout.button1.color,
                                                                                    onChange: (colorValue) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button1.color', colorValue);
                                                                                    },
                                                                                    label: __( 'Color' ),
                                                                                },
                                                                            ] }
                                                                        >

                                                                        </PanelColorSettings>
                                                                    
                                                                        <FontSizePicker
                                                                            label={__('Font Size', 'vayu-blocks')}
                                                                            fontSizes={vayu_blocks_fontsizes}
                                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.size', value)}
                                                                            value={attributes.slides[index].layout.button1.size}
                                                                        />

                                                                        <br />
                                                                        <BorderBoxControlComponent
                                                                            label={__('Border','vayu-blocks')}
                                                                            value={{
                                                                                all: {
                                                                                    color: attributes.slides[index].layout.button1.border.color,
                                                                                    width: attributes.slides[index].layout.button1.border.width,
                                                                                    style: attributes.slides[index].layout.button1.border.style,
                                                                                },
                                                                                top: {
                                                                                    color: attributes.slides[index].layout.button1.border.topcolor,
                                                                                    width: attributes.slides[index].layout.button1.border.topwidth,
                                                                                    style: attributes.slides[index].layout.button1.border.topstyle,
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

                                                                        <BoxControl
                                                                            label={__('Padding','vayu-blocks')}
                                                                            onChange={(value)=> vayu_blocks_handleBorderRadius(index,'button1.padding',value)}
                                                                            values={attributes.slides[index].layout.button1.padding}
                                                                        />

                                                                    </>
                                                                )}
                                                            </>
                                                        )}

                                                        {button === 'button2' && (
                                                            <>
                                                                <ToggleControl
                                                                    className='vayu_blocks_togglecontrol'
                                                                    label={__('Button 2', 'vayu-blocks')}
                                                                    checked={attributes.slides[index].layout.button2.show}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.show', value)}
                                                                />
                                                                {attributes.slides[index].layout.button2.show && (

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
                                                                                    padding: "18px 22px",
                                                                                    marginLeft:"8px"
                                                                                }}
                                                                                onClick={() => vayu_blocks_handleButtonfillClick('outline',index,"button2")}
                                                                            >
                                                                            Outline
                                                                            </Button>
                                                                        </div> 
                                                                    
                                                                        <PanelColorGradientSettings
                                                                            title={ __( 'Background', 'vayu-blocks' ) }
                                                                            settings={[
                                                                                {
                                                                                    colorValue: attributes.slides[index].layout.button2.backgroundColor,
                                                                                    gradientValue: attributes.slides[index].layout.button2.backgroundGradient,
                                                                                    

                                                                                    onColorChange: (color) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button2.backgroundColor', color);
                                                                                    },
                                                                                    onGradientChange: (gradient) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button2.backgroundGradient', gradient); 
                                                                                    },
                                                                                    label: __( 'Background', 'vayu-blocks' ),
                                                                                },
                                                                            ]}
                                                                        />

                                                                        <PanelColorSettings
                                                                            title={ __( 'Color' ) }
                                                                            colorSettings={ [
                                                                                {
                                                                                    value: attributes.slides[index].layout.button2.color,
                                                                                    onChange: (colorValue) => {
                                                                                        vayu_blocks_updateSliderStyles(index, 'button2.color', colorValue);
                                                                                    },
                                                                                    label: __( 'Color' ),
                                                                                },
                                                                            ] }
                                                                        >

                                                                        </PanelColorSettings>

                                                                        <FontSizePicker
                                                                            label={__('Font Size', 'vayu-blocks')}
                                                                            fontSizes={vayu_blocks_fontsizes}
                                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.size', value)}
                                                                            value={attributes.slides[index].layout.button2.size}
                                                                        />
                                                                        

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

                                                                        <BoxControl
                                                                            label={__('Padding','vayu-blocks')}
                                                                            onChange={(value)=> vayu_blocks_handleBorderRadius(index,'button2.padding',value)}
                                                                            values={attributes.slides[index].layout.button2.padding}
                                                                        />  

                                                                    </>
                                                                )}
                                                            </>
                                                        )}

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

                <div className="vayu_blocks_add-slide">
                <Button isPrimary onClick={vayu_blocks_handleAddSlide} >
                    {__('Add Slide', 'vayu-blocks')}
                </Button>
                </div>

            </div>
    );
};

export default SlideSettings;
