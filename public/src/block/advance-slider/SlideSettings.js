import React, {useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    ToggleControl,
    RangeControl,
    Button,
    TextareaControl,
    TextControl,
    SelectControl,
} from '@wordpress/components';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { MdContentCopy } from "react-icons/md";
import {MediaPlaceholder } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';
import {	__experimentalPanelColorGradientSettings as PanelColorGradientSettings} from '@wordpress/block-editor';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';

import {
    ToogleGroupControl,
} from '../../components/index.js';

import {Vayu_Block_Dimension_Control} from './Components/Dimesions/Vayu_Block_Dimension_Control';
import Vayu_Block_Toggle from './Components/ToggleGroupControl/Vayu_Block_Toggle';
import { Vayu_Block_Border_Control } from './Components/BorderControl/Vayu_Blocks_Border_control';
import {Vayu_blocks_typographycontrol} from './Components/Typography/Vayu_blocks_typographycontrol';
import ColorPanel from './Components/ColorPanel/ColorPanel';


const SlideSettings = ({ attributes, setAttributes }) => {


    const [expandedIndex, setExpandedIndex] = useState(null);
    const [activeButton, setActiveButton] = useState('layout');
    const [activeButtonfill, setActiveButtonfill] = useState('outline');
    const [isPanelOpen, setIsPanelOpen] = useState('heading');
    const [isPanellayout, setIsPanellayout] = useState('background');
    const [isPanel, setIsPanel] = useState('button1');

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
        newSlide.uniqueId = generateUniqueId();
        
        // Add the new slide to the slides array
        const updatedSlides = [...attributes.slides, newSlide];
        
        // Update the attributes with the new slides array
        setAttributes({ slides: updatedSlides });
    };
    
    // Adding New Slide
    const vayu_blocks_handleAddSlide = () => {
        setAttributes({
            slides: [
                ...attributes.slides,
                {
                    ...attributes.global,  // Use global layout attributes
                    uniqueId: generateUniqueId()   // Add unique ID
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
            newSlides[index] = {};
        }
    
        if (!newSlides[index]) {
            newSlides[index] = {};
        }
    
        const properties = propertyPath.split('.');
        let currentProperty = newSlides[index];
    
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
    const vayu_blocks_handleslideBorderChange = (index,property, newBorders) => { 
        const updatedAttributes = {};

        if(newBorders.borderRadius){
            vayu_blocks_handleBorderRadius(index,`${property}Radius`,newBorders.borderRadius);
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
            vayu_blocks_updateSliderStyles(index,key, updatedAttributes[key]);
        });
    
    };

    //border-radius handler
    const vayu_blocks_handleBorderRadius = (index,property, value) => {
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
            vayu_blocks_updateSliderStyles(index,key, updatedAttributes[key]);
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
    
    //clear image
    const vayu_blocks_clearBackgroundImageAndFocalPoint = (index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index].backgroundImage = '';
        updatedSlides[index].imageheight = 0;
        setAttributes({ slides: updatedSlides });
    };

    const togglePanel = (panel) => {
        if (isPanelOpen === panel) {
            setIsPanelOpen(panel); // Close the panel if it's already open
        } else {
            setIsPanelOpen(panel); // Open the clicked panel
        }
    };

    const togglePanellayout = (panel) => {
        if (isPanelOpen === panel) {
            setIsPanellayout(panel); // Close the panel if it's already 
        } else {
            setIsPanellayout(panel); // Open the clicked panel
        }
    };

    const vayu_blocks_togglePanelnew = (panel) => {
        if (isPanel === panel) {
            setIsPanel(panel); // Close the panel if it's already open
        } else {
            setIsPanel(panel); // Open the clicked panel
        }
    };

    const handleDimensionChange = (index, property, newDimensions) => {
        const sides = ['top', 'right', 'bottom', 'left'];
    
        // Update padding styles
        if (newDimensions.padding) {
            sides.forEach((side) => {
                if (newDimensions.padding[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(index,`${property}padding.${side}`, newDimensions.padding[side]);
                }
            });
        }
    
        // Update margin styles
        if (newDimensions.margin) {
            sides.forEach((side) => {
                if (newDimensions.margin[side] !== undefined) {
                    vayu_blocks_updateSliderStyles(index,`${property}margin.${side}`, newDimensions.margin[side]);
                }
            });
        }
    };
    
    const handelBackgroundColor = (index,property,value) => {
        // Update the block’s attributes or state based on the changes
        if(value.color){
            vayu_blocks_updateSliderStyles( index,`${property}.color`, value.color);
        }
        if(value.backgroundColor){
            vayu_blocks_updateSliderStyles( index,`${property}.backgroundColor`, value.backgroundColor);
        }
    };

    const handleTypographyChange = (index,property,newValues) => {

        if(newValues.size){
            vayu_blocks_updateSliderStyles(index,`${property}.size`,newValues.size);
        }
        if(newValues.font){
            vayu_blocks_updateSliderStyles(index,`${property}.font`,newValues.font);
        }
        if(newValues.appearance){
            vayu_blocks_updateSliderStyles(index,`${property}.fontWeight`,newValues.appearance);
        }
        if(newValues.lineHeight){
            vayu_blocks_updateSliderStyles(index,`${property}.lineHeight`,newValues.lineHeight);
        }
        if(newValues.letterSpacing){
            vayu_blocks_updateSliderStyles(index,`${property}.letterSpacing`,newValues.letterSpacing);
        }
        if(newValues.textDecoration){
            vayu_blocks_updateSliderStyles(index,`${property}.textDecoration`,newValues.textDecoration);
        }
        if(newValues.letterCase){
            vayu_blocks_updateSliderStyles(index,`${property}.letterCase`,newValues.letterCase);
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

                                <Vayu_Block_Toggle
                                    value={activeButton}
                                    onChange={(value) => setActiveButton(value)}
                                    isBlock={true}
                                    __nextHasNoMarginBottom={true}
                                    options={[
                                        { value: 'layout', label: 'Layout' },
                                        { value: 'heading', label: 'Heading' },
                                        { value: 'button', label: 'Button' },
                                    ]}
                                />
                            
                                {'layout'=== activeButton &&(
                                    <>
                                        <div className="content-panel-layout">
                                            <div className="vayu_blocks_content-panel-layout-inside-button">
                                            <button 
                                                style={{ color: isPanellayout === 'background' ? 'blue' : 'initial' }} 
                                                onClick={() => togglePanellayout('background')} 
                                                className='content-panel-layout-button'
                                            >
                                                Background
                                            </button>
                                            </div>
                                            <div className="vayu_blocks_content-panel-layout-inside-button">
                                            <button 
                                                style={{ color: isPanellayout === 'style' ? 'blue' : 'initial' }} 
                                                onClick={() => togglePanellayout('style')} 
                                                className='content-panel-layout-button'
                                            >
                                                Style
                                            </button>
                                            </div>
                                        </div>

                                        {isPanellayout === 'background' && (
                                            <>
                                                <h4>{__('Background','vayu-blocks')}</h4>
                                                {attributes.slides[index].backgroundImage ? (
                                                    <>         
                                                        <div class="vayu-blocks-image-container">
                                                            <img src={attributes.slides[index].backgroundImage} alt="slideimage" />
                                                            <button class="vayu-blocks-change-button" onClick={() => vayu_blocks_clearBackgroundImageAndFocalPoint(index)}>Change</button>
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
                                                                onSelect={(media) => {
                                                                    vayu_blocks_updateSliderStyles(index, 'backgroundImage', media.url);
                                                                    vayu_blocks_updateSliderStyles(index, 'imageheight', media.height);
                                                                }}                                                                
                                                                onSelectURL='true'
                                                                accept="image/*"
                                                                allowedTypes={['image']}
                                                            />
                                                        )}

                                                <PanelColorGradientSettings
                                                    title = {__('Background','vayu-blocks')}
                                                    settings={[
                                                        {
                                                            colorValue: attributes.slides[index].backgroundColor,
                                                            gradientValue: attributes.slides[index].backgroundGradient,
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
                                                    value={attributes.slides[index].opacity}
                                                    onChange={(value) => vayu_blocks_updateSliderStyles(index,'opacity',value)}
                                                    min={0}
                                                    max={1}
                                                    step={0.1}
                                                />

                                                <ToggleControl
                                                    className="vayu_blocks_togglecontrol"
                                                    label={attributes.slides[index].heightauto 
                                                        ? __('Height (Auto)', 'vayu-blocks') 
                                                        : `Custom Height: ${attributes.slides[index].customheight}px`}
                                                    checked={attributes.slides[index].heightauto}
                                                    onChange={(value) => vayu_blocks_updateSliderStyles(index,'heightauto',value)}
                                                />
                                                {attributes.slides[index].heightauto===false && (
                                                    <RangeControl
                                                        label={__('Custom Height(px)', 'vayu-blocks')}
                                                        value={attributes.slides[index].customheight}
                                                        onChange={(value) => vayu_blocks_updateSliderStyles(index,'customheight',value)}
                                                        min={0}
                                                        max={1500}
                                                        step={1}
                                                    />
                                                )} 

                                            </>
                                        )}

                                        {isPanellayout === 'style' && (
                                            <>
                                                <br />
                                                <ToggleControl
                                                    className="vayu_blocks_togglecontrol"
                                                    label={__('Custom Style', 'vayu-blocks')}
                                                    checked={attributes.slides[index].customStylelayout}
                                                    onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStylelayout",value)}
                                                />
                                                <p>By this the global style will inactive for this slide.</p>

                                                {attributes.slides[index].customStylelayout && (
                                                    <>
                                                    <h4>{__('Alignment', 'vayu-blocks')}</h4>
                                                    
                                                        <ToogleGroupControl
                                                            label={__('Alignment', 'vayu-blocks')}
                                                            value={ attributes.slides[index].alignment}
                                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,'alignment', value)}
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
                                                            value={ attributes.slides[index].alignmenttop}
                                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,'alignmenttop', value)}
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
                                                            label={__('Gap Between Heading & Button', 'vayu-blocks')}
                                                            className = "vayu_blocks_gphb"
                                                            value={attributes.slides[index].gaphb}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'gaphb', value)}
                                                            min={0}
                                                            max={500}
                                                            step={1}
                                                        />
                                                        <RangeControl
                                                            label={__('Gap Between Heading & Sub Heading', 'vayu-blocks')}
                                                            className = "vayu_blocks_gphb"
                                                            value={attributes.slides[index].gaphsub}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'gaphsub', value)}
                                                            min={0}
                                                            max={500}
                                                            step={1}
                                                        />

                                                        <Vayu_Block_Border_Control
                                                            value={{border:{
                                                                top:{
                                                                    color: attributes.slides[index].border.topcolor,
                                                                    width: attributes.slides[index].border.topwidth,
                                                                    style: attributes.slides[index].border.topstyle,
                                                                },
                                                                bottom: {
                                                                    color: attributes.slides[index].border.bottomcolor,
                                                                    width: attributes.slides[index].border.bottomwidth,
                                                                    style: attributes.slides[index].border.bottomstyle,
                                                                },
                                                                left: {
                                                                    color: attributes.slides[index].border.leftcolor,
                                                                    width: attributes.slides[index].border.leftwidth,
                                                                    style: attributes.slides[index].border.leftstyle,
                                                                },
                                                                right: {
                                                                    color: attributes.slides[index].border.rightcolor,
                                                                    width: attributes.slides[index].border.rightwidth,
                                                                    style: attributes.slides[index].border.rightstyle,
                                                                }
                                                            },
                                                            borderRadius:{
                                                                top:{
                                                                    width:attributes.slides[index].borderRadius.top
                                                                },
                                                                bottom:{
                                                                    width:attributes.slides[index].borderRadius.bottom
                                                                },
                                                                left:{
                                                                    width:attributes.slides[index].borderRadius.left
                                                                },
                                                                right:{
                                                                    width:attributes.slides[index].borderRadius.right
                                                                }
                                                            }
                                                            }}
                                                            onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'border',value)}
                                                            includeBorder={true}
                                                            includeBorderRadius={true}
                                                            para=""
                                                        />  
                                                
                                                        <Vayu_Block_Dimension_Control
                                                            value={{
                                                                padding:attributes.slides[index].padding
                                                            }}
                                                            para=""
                                                            onChange={(value) => handleDimensionChange(index,'', value)}
                                                            paddingsides={["horizontal","vertical"]}
                                                            includePadding={true}
                                                            includeMargin={false}
                                                        />

                                                    </>
                                                )}
                                            
                                            </>
                                        )}
                                        
                                    </>
                                )}

                                {'heading'===activeButton && (

                                    <>
                                        <p>This style will apply to all slides except those with custom styles enabled.</p>
                                        
                                        
                                        <>
                                            <div className="content-panel">
                                            <div className="vayu_blocks_content-panel-layout-inside-button">
                                                <button 
                                                    style={{ color: isPanelOpen === 'heading' ? 'blue' : 'initial' }} 
                                                    onClick={() => togglePanel('heading')} 
                                                    className='content-panel-button'
                                                >
                                                    Heading
                                                </button>
                                                </div>
                                                <div className="vayu_blocks_content-panel-layout-inside-button">
                                                <button 
                                                    style={{ color: isPanelOpen === 'button' ? 'blue' : 'initial' }} 
                                                    onClick={() => togglePanel('button')} 
                                                    className='content-panel-button'
                                                >
                                                    SubHeading
                                                </button>
                                                </div>
                                            </div>


                                            {isPanelOpen==='heading' && (
                                                <>
                                                    <div className="tools-panel-wrapper-new">
                                                    <TextareaControl
                                                        label={__('Heading', 'vayu-blocks')}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.text', value)}
                                                        value={attributes.slides[index].heading.text}
                                                    />

                                                    <TextControl
                                                        className='vayu_blocks_textareatextcontrol'
                                                        label="Link URL"
                                                        value={ attributes.slides[index].heading.link }
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.link', value)}
                                                        placeholder="Enter a URL"
                                                    />

                                                    <ToggleControl
                                                        className='vayu_blocks_togglecontrol'
                                                        label="Open in new tab"
                                                        checked={attributes.slides[index].heading.newtab}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'heading.newtab', value)}
                                                    />
                                                    </div>

                                                    <br />
                                                    <ToggleControl
                                                        label={__('Custom Style', 'vayu-blocks')}
                                                        className="vayu_blocks_togglecontrol"
                                                        checked={attributes.slides[index].customStyleheading}
                                                        onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStyleheading",value)}
                                                    />
                                                    <p>By this the global style will inactive for this slide.</p>

                                                    {attributes.slides[index].customStyleheading && (
                                                        <>
                                                            <ColorPanel
                                                                colorTool={[
                                                                    {
                                                                        active: ['color'],
                                                                        name: 'Text',
                                                                        value: attributes.slides[index].heading.color,
                                                                        attribute: 'color',
                                                                    }
                                                                ]}
                                                                handelColorPanel={(value)=>handelBackgroundColor(index,'heading',value)}
                                                                initialTab="color"
                                                            />

                                                                <h4>{__('Background','vayu-blocks')}</h4>
                                                                {attributes.slides[index].heading.image ? (
                                                                    <>         
                                                                        <div class="vayu-blocks-image-container">
                                                                            <img src={attributes.slides[index].heading.image} alt="slideimage" />
                                                                            <button class="vayu-blocks-change-button" onClick={() => vayu_blocks_updateSliderStyles(index,'heading.image','')}>Change</button>
                                                                        </div>

                                                                        <br/>
                                                                        <br/>

                                                                        <ToggleControl
                                                                            label={__('Animate text background')}
                                                                            checked={attributes.slides[index].heading.animation}
                                                                            onChange={(value) => vayu_blocks_updateSliderStyles(index,'heading.animation',value)}
                                                                        /> 

                                                                        <Button style={{color:'blue',marginBottom:'20px'}} onClick={() => vayu_blocks_updateSliderStyles(index,'heading.image','')}>
                                                                            {__('Clear', 'vayu-blocks')}
                                                                        </Button>
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
                                                                                vayu_blocks_updateSliderStyles(index,'heading.image', media.url);
                                                                            }}                                                                
                                                                            onSelectURL='true'
                                                                            accept="image/*"
                                                                            allowedTypes={['image']}
                                                                        />
                                                                        <br/>
                                                                        </>
                                                                    )}

                                                                    
                                                            <p>If an image is applied, the color will automatically become transparent.</p>
                                                            

                                                            <div className="vayu_blocks_heading_unitcontrol_slides">
                                                                <Vayu_blocks_typographycontrol
                                                                    
                                                                    onChange={(value)=> handleTypographyChange(index,"heading",value)}
                                                                    includeSize={true}
                                                                    value={{size:attributes.slides[index].heading.size,
                                                                        appearance: attributes.slides[index].heading.fontWeight
                                                                    }}
                                                                    includeAppearance={true}
                                                                    vayu_blocks_sizes={vayu_blocks_sizes}
                                                                    appearanceOptions= {[
                                                                        { label: __('Normal', 'text-domain'), value: 'normal' },
                                                                        { label: __('Lighter', 'text-domain'), value: 'lighter' },
                                                                        { label: __('Bold', 'text-domain'), value: 'bold' },
                                                                        { label: __('Bolder', 'text-domain'), value: 'bolder' },
                                                                    ]}
                                                                    para=""
                                                                />
                                                            </div>

                                                            <SelectControl
                                                                label={__('Title Tag', 'vayu-blocks')}
                                                                value={attributes.slides[index].heading.tag}
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
                                                
                                                        </>
                                                    )}
                                            
                                            
                                                </>
                                            )}


                                            {isPanelOpen === 'button' && (
                                                <>
                                                    <div className="tools-panel-wrapper-new-sub">
                                                    <ToggleControl
                                                        className="vayu_blocks_togglecontrol"
                                                        label={__('Sub Heading', 'vayu-blocks')}
                                                        checked={attributes.slides[index].subheading.show}
                                                        onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.show', value)}
                                                    />
                                                    {attributes.slides[index].subheading.show &&(
                                                        <>
                                                            <TextareaControl
                                                                label={__('Sub Heading', 'vayu-blocks')}
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'subheading.text', value)}
                                                                value={attributes.slides[index].subheading.text}
                                                            />  
                                                        </>
                                                    )}

                                                    </div>

                                                    {attributes.slides[index].subheading.show &&(
                                                        <>
                                                            <br />
                                                            <ToggleControl
                                                                className="vayu_blocks_togglecontrol"
                                                                label={__('Custom Style', 'vayu-blocks')}
                                                                checked={attributes.slides[index].customStylesubheading}
                                                                onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStylesubheading",value)}
                                                            />
                                                            <p>By this the global style will inactive for this slide.</p>

                                                            {attributes.slides[index].customStylesubheading && (
                                                                <>


                                                                    <ColorPanel
                                                                        colorTool={[
                                                                            {
                                                                                active: ['color'],
                                                                                name: 'Text',
                                                                                value: attributes.slides[index].subheading.color,
                                                                                attribute: 'color',
                                                                            }
                                                                        ]}
                                                                        handelColorPanel={(value)=>handelBackgroundColor(index,'subheading',value)}
                                                                        initialTab="color"
                                                                    />

                                                                    
                                                                    <div className="vayu_blocks_heading_unitcontrol_slides">
                                                                    <Vayu_blocks_typographycontrol
                                                                        onChange={(value)=> handleTypographyChange(index,"subheading",value)}
                                                                        includeSize={true}
                                                                        value={{size:attributes.slides[index].subheading.size,
                                                                            appearance: attributes.slides[index].subheading.fontWeight
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

                                                                    <SelectControl
                                                                        label={__('Title Tag', 'vayu-blocks')}
                                                                        value={attributes.slides[index].subheading.tag}
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
                                                                    
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>      
                                            )}

                                        </>
                                    </>

                                )}

                                {'button' === activeButton && (
                                    <>
                                        <p>This style will apply to all slides except those with custom styles enabled.</p>

                                        <>
                                            <div className="content-panel">
                                            <div className="vayu_blocks_content-panel-layout-inside-button">

                                                <button 
                                                    style={{ color: isPanel === 'button1' ? 'blue' : 'initial' }} 
                                                    onClick={() => vayu_blocks_togglePanelnew('button1')} 
                                                    className='content-panel-button'
                                                >
                                                    Button 1
                                                </button>
                                                </div>
                                                <div className="vayu_blocks_content-panel-layout-inside-button">

                                                <button 
                                                    style={{ color: isPanel === 'button2' ? 'blue' : 'initial' }} 
                                                    onClick={() => vayu_blocks_togglePanelnew('button2')} 
                                                    className='content-panel-button'
                                                >
                                                    Button 2
                                                </button>
                                                </div>
                                            </div>

                                            {isPanel === 'button1' && (
                                                <>
                                                    <div className="tools-panel-wrapper-new">
                                                        <ToggleControl
                                                            className='vayu_blocks_togglecontrol'
                                                            label={__('Button 1', 'vayu-blocks')}
                                                            checked={attributes.slides[index].button1.show}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.show', value)}
                                                        />

                                                        {attributes.slides[index].button1.show && (
                                                            <>
                                                                <TextControl
                                                                className='vayu_blocks_textarea'
                                                                label={__('Text', 'vayu-blocks')}
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.text', value)}
                                                                value={attributes.slides[0].button1.text}
                                                            />

                                                            <TextControl
                                                                className='vayu_blocks_textarea'
                                                                label="Link URL"
                                                                value={ attributes.slides[index].button1.link }
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.link', value)}
                                                                placeholder="Enter a URL"
                                                            />

                                                            <ToggleControl
                                                                className='vayu_blocks_togglecontrol'
                                                                label="Open in new tab"
                                                                checked={attributes.slides[index].button1.newtab}
                                                                onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button1.newtab', value)}
                                                            />
                                                            </>
                                                        )}
                                                    </div>

                                                    {attributes.slides[index].button1.show && (
                                                        <>
                                                            <br />
                                                            <ToggleControl
                                                                className="vayu_blocks_togglecontrol"
                                                                label={__('Custom Style', 'vayu-blocks')}
                                                                checked={attributes.slides[index].customStylesubbutton1}
                                                                onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStylesubbutton1",value)}
                                                            />
                                                            <p>By this the global style will inactive for this slide.</p>

                                                                    {attributes.slides[index].customStylesubbutton1 && (
                                                                        <>
                                                                            <div style={{marginBottom:'15px',marginTop:'10px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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

                                                                            <ColorPanel
                                                                                colorTool={[
                                                                                    {
                                                                                        active: ['gradient'],
                                                                                        name: 'Background',
                                                                                        value: attributes.slides[index].button1.backgroundColor,
                                                                                        attribute: 'backgroundColor',
                                                                                    },
                                                                                    {
                                                                                        active: ['color'],
                                                                                        name: 'Text',
                                                                                        value: attributes.slides[index].button1.color,
                                                                                        attribute: 'color',
                                                                                    }
                                                                                ]}
                                                                                handelColorPanel={(value)=>handelBackgroundColor(index,'button1',value)}
                                                                                initialTab="color"
                                                                            />
                                                                        

                                                                            <Vayu_blocks_typographycontrol
                                                                                onChange={(value)=> handleTypographyChange(index,"button1",value)}
                                                                                includeSize={true}
                                                                                value={{size:attributes.slides[index].button1.size}}
                                                                                vayu_blocks_sizes={vayu_blocks_fontsizes}
                                                                                para=""
                                                                            />



                                                                            <Vayu_Block_Border_Control
                                                                                value={{border:{
                                                                                    top:{
                                                                                        color: attributes.slides[index].button1.border.topcolor,
                                                                                        width: attributes.slides[index].button1.border.topwidth,
                                                                                        style: attributes.slides[index].button1.border.topstyle,
                                                                                    },
                                                                                    bottom: {
                                                                                        color: attributes.slides[index].button1.border.bottomcolor,
                                                                                        width: attributes.slides[index].button1.border.bottomwidth,
                                                                                        style: attributes.slides[index].button1.border.bottomstyle,
                                                                                    },
                                                                                    left: {
                                                                                        color: attributes.slides[index].button1.border.leftcolor,
                                                                                        width: attributes.slides[index].button1.border.leftwidth,
                                                                                        style: attributes.slides[index].button1.border.leftstyle,
                                                                                    },
                                                                                    right: {
                                                                                        color: attributes.slides[index].button1.border.rightcolor,
                                                                                        width: attributes.slides[index].button1.border.rightwidth,
                                                                                        style: attributes.slides[index].button1.border.rightstyle,
                                                                                    }
                                                                                },
                                                                                borderRadius:{
                                                                                    top:{
                                                                                        width:attributes.slides[index].button1.borderRadius.top
                                                                                    },
                                                                                    bottom:{
                                                                                        width:attributes.slides[index].button1.borderRadius.bottom
                                                                                    },
                                                                                    left:{
                                                                                        width:attributes.slides[index].button1.borderRadius.left
                                                                                    },
                                                                                    right:{
                                                                                        width:attributes.slides[index].button1.borderRadius.right
                                                                                    }
                                                                                }
                                                                                }}
                                                                                onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'button1.border',value)}
                                                                                includeBorder={true}
                                                                                includeBorderRadius={true}
                                                                                para=""
                                                                            />  
                                                                        
                                                                            <Vayu_Block_Dimension_Control
                                                                                value={{
                                                                                    padding:attributes.slides[index].button1.padding
                                                                                }}
                                                                                para=""
                                                                                onChange={(value) => handleDimensionChange(index,'button1.', value)}
                                                                                paddingsides={["default"]}
                                                                                includePadding={true}
                                                                                includeMargin={false}
                                                                            />


                                                                        </>
                                                                    )}
                                                        </>
                                                    )}


                                                </>
                                            )}

                                            {isPanel === 'button2' && (
                                                <>
                                                    <div className="tools-panel-wrapper-new">
                                                        <ToggleControl
                                                            className='vayu_blocks_togglecontrol'
                                                            label={__('Button 2', 'vayu-blocks')}
                                                            checked={attributes.slides[index].button2.show}
                                                            onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.show', value)}
                                                        />

                                                        {attributes.slides[index].button2.show &&(
                                                            <>
                                                                <TextControl
                                                                    className='vayu_blocks_textarea'
                                                                    label={__('Text', 'vayu-blocks')}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.text', value)}
                                                                    value={attributes.slides[0].button2.text}
                                                                />

                                                                <TextControl
                                                                    className='vayu_blocks_textarea'
                                                                    label="Link URL"
                                                                    value={ attributes.slides[index].button2.link }
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.link', value)}
                                                                    placeholder="Enter a URL"
                                                                />

                                                                <ToggleControl
                                                                    className='vayu_blocks_togglecontrol'
                                                                    label="Open in new tab"
                                                                    checked={attributes.slides[index].button2.newtab}
                                                                    onChange={(value) =>  vayu_blocks_updateSliderStyles(index, 'button2.newtab', value)}
                                                                />

                                                            </>
                                                        )}
                                                    </div>
                                                    
                                                    {attributes.slides[index].button2.show && (

                                                        <>
                                                            <br />
                                                            <ToggleControl
                                                                className="vayu_blocks_togglecontrol"
                                                                label={__('Custom Style', 'vayu-blocks')}
                                                                checked={attributes.slides[index].customStylesubbutton2}
                                                                onChange={(value) => vayu_blocks_updateSliderStyles(index,"customStylesubbutton2",value)}
                                                            />
                                                            <p>By this the global style will inactive for this slide.</p>

                                                            {attributes.slides[index].customStylesubbutton2 && (
                                                                <>
                                                                <div style={{marginBottom:'15px',marginTop:'10px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
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

                                                                    <ColorPanel
                                                                        colorTool={[
                                                                            {
                                                                                active: ['gradient'],
                                                                                name: 'Background',
                                                                                value: attributes.slides[index].button2.backgroundColor,
                                                                                attribute: 'backgroundColor',
                                                                            },
                                                                            {
                                                                                active: ['color'],
                                                                                name: 'Text',
                                                                                value: attributes.slides[index].button2.color,
                                                                                attribute: 'color',
                                                                            }
                                                                        ]}
                                                                        handelColorPanel={(value)=>handelBackgroundColor(index,'button2',value)}
                                                                        initialTab="color"
                                                                    />

                                                                    <Vayu_blocks_typographycontrol
                                                                        onChange={(value)=> handleTypographyChange(index,"button2",value)}
                                                                        includeSize={true}
                                                                        value={{size:attributes.slides[index].button2.size}}
                                                                        vayu_blocks_sizes={vayu_blocks_fontsizes}
                                                                        para=""
                                                                    />
                                                                    

                                                                    <Vayu_Block_Border_Control
                                                                        value={{border:{
                                                                            top:{
                                                                                color: attributes.slides[index].button2.border.topcolor,
                                                                                width: attributes.slides[index].button2.border.topwidth,
                                                                                style: attributes.slides[index].button2.border.topstyle,
                                                                            },
                                                                            bottom: {
                                                                                color: attributes.slides[index].button2.border.bottomcolor,
                                                                                width: attributes.slides[index].button2.border.bottomwidth,
                                                                                style: attributes.slides[index].button2.border.bottomstyle,
                                                                            },
                                                                            left: {
                                                                                color: attributes.slides[index].button2.border.leftcolor,
                                                                                width: attributes.slides[index].button2.border.leftwidth,
                                                                                style: attributes.slides[index].button2.border.leftstyle,
                                                                            },
                                                                            right: {
                                                                                color: attributes.slides[index].button2.border.rightcolor,
                                                                                width: attributes.slides[index].button2.border.rightwidth,
                                                                                style: attributes.slides[index].button2.border.rightstyle,
                                                                            }
                                                                        },
                                                                        borderRadius:{
                                                                            top:{
                                                                                width:attributes.slides[index].button2.borderRadius.top
                                                                            },
                                                                            bottom:{
                                                                                width:attributes.slides[index].button2.borderRadius.bottom
                                                                            },
                                                                            left:{
                                                                                width:attributes.slides[index].button2.borderRadius.left
                                                                            },
                                                                            right:{
                                                                                width:attributes.slides[index].button2.borderRadius.right
                                                                            }
                                                                        }
                                                                        }}
                                                                        onChange={(value)=>vayu_blocks_handleslideBorderChange(index,'button2.border',value)}
                                                                        includeBorder={true}
                                                                        includeBorderRadius={true}
                                                                        para=""
                                                                    />  

                                                                    <Vayu_Block_Dimension_Control
                                                                        value={{
                                                                            padding:attributes.slides[index].button2.padding
                                                                        }}
                                                                        para=""
                                                                        onChange={(value) => handleDimensionChange(index,'button2.', value)}
                                                                        paddingsides={["default"]}
                                                                        includePadding={true}
                                                                        includeMargin={false}
                                                                    />

                                                                </>
                                                            )}
                                                        </>
                                                    )}

                                                </>
                                            )}  
                                        </>
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
