import React, { useEffect, useState,useRef } from 'react';
import './editor.scss';
import Slider from 'react-slick';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaHandPointLeft,FaHandPointRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const edit = ({ attributes, setAttributes }) => {
    const [settings, setSettings] = useState({});
    const [activeIndex, setActiveIndex] = useState(attributes.initialSlide || 0);
    const sliderRef = useRef(null);
    const [dotscount, setdotscount] = useState(1);

    const addPxIfNeeded = (value) => {
        // Check if the value ends with 'px' or other units (e.g., 'em', '%')
        if (typeof value === 'string' && (value.endsWith('px') || value.endsWith('em') || value.endsWith('%'))) {
            return value;
        }
        // Default to adding 'px' if no units are present
        return `${value}px`;
    };

    useEffect(() => {
        const newSettings = {
            dots: attributes.dots.show,
            infinite: attributes.infinite,
            speed: attributes.speed,
            slidesToShow: attributes.slidesToShow,
            slidesToScroll: attributes.slidesToScroll,
            rows: attributes.slidesPerRow,
            centerMode: attributes.centerMode,
            fade: attributes.fade,
            waitForAnimate: attributes.waitForAnimate,
            lazyLoad: attributes.lazyLoad,
            autoplay: attributes.autoplay,
            autoplaySpeed: attributes.autoplaySpeed,
            cssEase: 'ease-in-out', // Smooth animation
            pauseOnHover: attributes.pauseOnHover,
            focusOnSelect: attributes.focusOnSelect,
            centerPadding: '60px',
            swipe: attributes.swipe,
            afterChange: (currentIndex) => {
 
                let newvalue = currentIndex;
                if (currentIndex > attributes.slidesToScroll-1) {
                    newvalue = Math.floor(currentIndex / attributes.slidesToScroll);
                }
                setActiveIndex(newvalue); 
            },
            onInit: (slider) => {
                setActiveIndex(slider.currentSlide);
                sliderRef.current = slider;
            }
        };


        //Dots Styling
        let dotstyle;

        if ('dots' === attributes.dots.option) {
            dotstyle = <FaCircle />; // Example for dots
        } else if ('square' === attributes.dots.option) {
            dotstyle = <FaSquare />; // Example for squares
        } else if ('number' === attributes.dots.option) {
            dotstyle = null; // No specific style for numbers
        }

        const handleDotClick = (e, dot, index) => {
            // Prevent default click action
            e.preventDefault();
    
            // Calculate the correct slide index to go to based on slidesToScroll
            const slideToGo = index * attributes.slidesToScroll;
    
            // Use sliderRef to directly manipulate the slider
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(slideToGo);
            }
        
            // Set the active index based on the dot clicked
            setActiveIndex(index);

        };

        // Conditionally customize dot appearance
        if (attributes.dots.customize && attributes.customPaging===false) { // Replace 'true' with a condition if necessary
            newSettings.appendDots = dots => {
                setdotscount(dots.length);
                setAttributes({dotslength:dotscount});
                    if(dotscount>1){
                    return (
                        
                        <div> 
                            <ul style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                listStyle: 'none',
                                padding: '0px',
                                margin: attributes.dots.onimage ? `${attributes.dots.position}px` : '0px',
                            }}>
                                {dots.map((dot, index) => (
                                    <li key={index} style={{ margin: '0 5px' }}>
                                        <button
                                            style={{
                                                color: activeIndex === index ? attributes.dots.activeColor : attributes.dots.color || '#000',
                                                cursor: 'pointer',
                                                background: 'none', 
                                                // borderColor: activeIndex === index ? 'gray' : 'transparent',
                                                // borderWidth: '1px',
                                                // borderStyle: 'solid',
                                                borderRadius: attributes.dots.option === 'square' ? '15%' : '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '3px', 
                                                fontSize: addPxIfNeeded(attributes.dots.size),
                                                background: `${attributes.dots.backgroundColor}`
                                            }}
                                            onClick={(e) => handleDotClick(e, dot, index)}
                                        >
                                            {dotstyle || index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>  
                    );
                } else{
                return (
                    <div style={{display:'none'}}>
                    </div>
                )
                }
            };
            
        }

        //arrow styling
        let leftarrow;
        let rightarrow;

        let stylearrowleft={
            fontSize: `${attributes.arrowstyleleft.size}`,
            color:`${attributes.arrowstyleleft.color}`,   
        };

        let stylearrow_div = {
            background: `${attributes.arrowstyleleft.backgroundColor}`,
            //borderRadius
            borderRadius: `${attributes.arrowstyleleft.borderRadius.top || '0px'} ${attributes.arrowstyleleft.borderRadius.right || '0px'} ${attributes.arrowstyleleft.borderRadius.bottom || '0px'} ${attributes.arrowstyleleft.borderRadius.left || '0px'}`,
               
            border: 'none',
            cursor: 'pointer',
            opacity: `${attributes.arrowstyleleft.opacity}`,
        }

        // Determine which arrow icons to use based on the selected arrow style
        if ('arrow' === attributes.arrowstyleleft.tag) {
            leftarrow = <FaArrowLeft style={stylearrowleft}/>;
            rightarrow = <FaArrowRight style={ stylearrowleft}/>;
        } else if ('chevron' === attributes.arrowstyleleft.tag) {
            leftarrow = <FaChevronLeft style={stylearrowleft}/>;
            rightarrow = <FaChevronRight style={ stylearrowleft}/>;
        } else if ('hand' === attributes.arrowstyleleft.tag) {
            leftarrow = <FaHandPointLeft style={stylearrowleft}/>;
            rightarrow = <FaHandPointRight style={ stylearrowleft}/>;
        } else if ('circle' === attributes.arrowstyleleft.tag) {
            leftarrow = <FaCircleArrowLeft style={stylearrowleft}/>;
            rightarrow = <FaCircleArrowRight style={ stylearrowleft}/>;
        } else if ('caret' === attributes.arrowstyleleft.tag) {
            leftarrow = <FaCaretLeft style={stylearrowleft}/>;
            rightarrow = <FaCaretRight style={ stylearrowleft}/>;
        }

        // Add arrow settings based on attributes
        if (attributes.arrow && dotscount>1) {
            newSettings.nextArrow = (
                <div className="next-slick-arrow">
                    <div
                        className={`inside_rightarrow_div ${
                            attributes.arrowOnHover && attributes.arrowanimation
                                ? 'arrow-on-hover-for-right'
                                : attributes.arrowOnHover
                                ? 'arrow-on-hover-only'
                                : ''
                        }`}                    
                        style={{
                            ...stylearrow_div,
                            marginLeft: `-${attributes.arrowstyleleft.position + 30}px`,
                            display: attributes.arrowOnHover ? 'none' : '', // Hide initially if arrowOnHover is true
                        }}
                    >
                        {rightarrow}
                    </div>
                </div>
            );
            
            newSettings.prevArrow = (
                <div className="prev-slick-arrow">
                    <div
                    className={`inside_rightarrow_div ${
                        attributes.arrowOnHover && attributes.arrowanimation
                            ? 'arrow-on-hover'
                            : attributes.arrowOnHover
                            ? 'arrow-on-hover-only'
                            : ''
                    }`} 
                        style={{
                            ...stylearrow_div,
                            marginLeft: `${attributes.arrowstyleleft.position}px`,
                            display: attributes.arrowOnHover ? 'none' : '', // Hide initially if arrowOnHover is true
                        }}
                    >
                        {leftarrow}
                    </div>
                </div>
            );        
        }
       

        setSettings(newSettings);
    }, [
        attributes.dots,
        attributes.infinite,
        attributes.speed,
        attributes.slidesToShow,
        attributes.slidesToScroll,
        attributes.slidesPerRow,
        attributes.centerMode,
        attributes.fade,
        attributes.waitForAnimate,
        attributes.lazyLoad,
        attributes.autoplay,
        attributes.autoplaySpeed,
        attributes.pauseOnHover,
        attributes.focusOnSelect,
        attributes.rtl,
        attributes.arrow,
        attributes.customPaging,
        attributes.pagingImages,
        attributes.arrowstyleleft,
        activeIndex,
        attributes.index,
        attributes.arrowOnHover,
        attributes.arrowanimation,
        attributes.swipe,
        dotscount
    ]);

    useEffect(() => {
        
        if (sliderRef.current && attributes.index !== undefined) {
            sliderRef.current.slickGoTo(attributes.index);
            setActiveIndex(attributes.index);
        }
        
    }, [attributes.index]);

    // Utility function to generate a unique ID
    const generateUniqueId = () =>  new Date().getTime() + '-' + Math.floor(Math.random() * 1000);
   
    useEffect(() => {
        // Check if there is exactly one slide
        if (attributes.slides.length === 1) {
            // Check if a slide with the same unique ID already exists
            const newSlide = {
                ...attributes.global,  // Use global layout attributes
                uniqueId: generateUniqueId()   // Add unique ID
            };
    
            // Add the new slide if it does not already exist
            const newSlides = [...attributes.slides, newSlide];
            setAttributes({
                slides: newSlides
            });
        }
    }, [attributes.slides]); // Dependency on attributes.slides to react to changes
    
    const vayu_blocks_slides = attributes.slides.map((slide) => {
        // Extract padding values with default '0px'
        const topPadding = slide.padding.top || '0px';
        const rightPadding = slide.padding.right || '0px';
        const leftPadding = slide.padding.left || '0px';

        const bottomPaddingValue = parseInt(slide.padding.bottom, 10) || 0; // Default to 0 if parsing fails
        const bottomPadding = (bottomPaddingValue + 50) + 'px';

        // Slide Style
        const vayu_blocks_slideStyle = {
            height: slide.heightauto 
                ? (slide.imageheight > 200 ? `${slide.imageheight}px` : '100%')
                : `${slide.customheight}px`,
            overflow: 'hidden',
            position:'relative',
            display:'flex',
            justifyContent:'center',
            alignItems:slide.alignmenttop,
            
            //border
            borderColor: slide.border?.color || 'transparent',
            borderWidth: slide.border?.width || '0',
            borderStyle: slide.border?.style || 'none',
            borderTopColor: slide.border?.topcolor || slide.border?.color || 'transparent',
            borderTopWidth: slide.border?.topwidth || slide.border?.width || '0',
            borderTopStyle: slide.border?.topstyle || slide.border?.style || 'none',
            borderBottomColor: slide.border?.bottomcolor || slide.border?.color || 'transparent',
            borderBottomWidth: slide.border?.bottomwidth || slide.border?.width || '0',
            borderBottomStyle: slide.border?.bottomstyle || slide.border?.style || 'none',
            borderLeftColor: slide.border?.leftcolor || slide.border?.color || 'transparent',
            borderLeftWidth: slide.border?.leftwidth || slide.border?.width || '0',
            borderLeftStyle: slide.border?.leftstyle || slide.border?.style || 'none',
            borderRightColor: slide.border?.rightcolor || slide.border?.color || 'transparent',
            borderRightWidth: slide.border?.rightwidth || slide.border?.width || '0',
            borderRightStyle: slide.border?.rightstyle || slide.border?.style || 'none',
            
            //borderRadius
            borderRadius: `${slide.borderRadius.top || '0px'} ${slide.borderRadius.right || '0px'} ${slide.borderRadius.bottom || '0px'} ${slide.borderRadius.left || '0px'}`,

            //padding
            padding: `${topPadding} ${rightPadding} ${bottomPadding} ${leftPadding}`,
   
             // Conditional background image
            ...(slide.backgroundImage && {
                background: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover', // Assuming you want these properties based on your preferences
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
            }),
              
        };

        const vayu_blocks_getBackgroundStyles = (value) => {
            let styles = {};
            if (value.backgroundColor) {
                styles.backgroundColor = value.backgroundColor;
            } else if (value.backgroundGradient) {
                styles.background = `-webkit-${value.backgroundGradient}`;
            }
        
            return styles;
        };

        // Overlay Style
        const vayu_blocks_color_overlay={
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width:'100%',
            height:'100%',
            ...vayu_blocks_getBackgroundStyles(slide),
            opacity:slide.opacity,
            zIndex:1,
        }

        // Inside Container
        const vayu_blocks_inside_conatiner_div = {
            zIndex: 3,
            // height: '100%',
            position:'relative',
            textAlign: slide.alignment,  // Use the alignment from slide
        };

        // Heading Style
        const vayu_blocks_generateheadingStyle = (heading) => {
            return {
                color: heading.color,
                fontSize: `${heading.size}px`,
                fontWeight: heading.fontWeight,
                textDecoration: 'none', 
                cursor: 'pointer' 
            };
        };

        // Sub Heading Style
        const vayu_blocks_generatesubheadingStyle = (heading) => {
            return {
                color: heading.color,
                fontSize: `${heading.size}px`,
                fontWeight: heading.fontWeight,
            };
        };

        // Button Style
        const vayu_blocks_generateButtonStyle = (button) => {
            return {
            ...vayu_blocks_getBackgroundStyles(button),
            fontSize: `${button.size}px`,
            border: 'none',
            cursor: 'pointer',
            
            //border
            borderColor: button.border?.color || 'transparent',
            borderWidth: button.border?.width || '0',
            borderStyle: button.border?.style || 'none',
            borderTopColor: button.border?.topcolor || button.border?.color || 'transparent',
            borderTopWidth: button.border?.topwidth || button.border?.width || '0',
            borderTopStyle: button.border?.topstyle || button.border?.style || 'none',
            borderBottomColor: button.border?.bottomcolor || button.border?.color || 'transparent',
            borderBottomWidth: button.border?.bottomwidth || button.border?.width || '0',
            borderBottomStyle: button.border?.bottomstyle || button.border?.style || 'none',
            borderLeftColor: button.border?.leftcolor || button.border?.color || 'transparent',
            borderLeftWidth: button.border?.leftwidth || button.border?.width || '0',
            borderLeftStyle: button.border?.leftstyle || button.border?.style || 'none',
            borderRightColor: button.border?.rightcolor || button.border?.color || 'transparent',
            borderRightWidth: button.border?.rightwidth || button.border?.width || '0',
            borderRightStyle: button.border?.rightstyle || button.border?.style || 'none',
            
            //borderRadius
            borderRadius: `${button.borderRadius.top || '0px'} ${button.borderRadius.right || '0px'} ${button.borderRadius.bottom || '0px'} ${button.borderRadius.left || '0px'}`,

            //padding
            padding: `${button.padding.top || '10px'} ${button.padding.right || '20px'} ${button.padding.bottom || '10px'} ${button.padding.left || '20px'}`,


            marginRight: slide.button2.show ? '5px' : '0px',
        };
        };

        //console.log(attributes.slides);
        // const blocks = wp.data.select('core/block-editor').getBlocks();
        // console.log(blocks);

        return (
            <div className="vayu_blocks_slider-container" key={slide.id}>

                <div className="vayu_blocks_slider-slide" style={vayu_blocks_slideStyle}>

                    <div style={vayu_blocks_color_overlay}>
                    </div>

                    <div style={vayu_blocks_inside_conatiner_div}>

                        <div style={{marginBottom: slide.gaphb}}>

                            <slide.heading.tag className="vayu_blocks_heading-edit" style={{marginBottom: slide.gaphsub,fontSize:'0'}}>
                                <a 
                                    href={slide.heading.link} 
                                    target={slide.heading.newtab ? "_blank" : "_self"}
                                    style={vayu_blocks_generateheadingStyle(slide.heading)}
                                >
                                    {slide.heading.text}
                                </a>
                            </slide.heading.tag>

                            {slide.subheading.show && (
                                <slide.subheading.tag className="vayu_blocks_sub_heading-edit" style={vayu_blocks_generatesubheadingStyle(slide.subheading)}>
                                        {slide.subheading.text}
                                </slide.subheading.tag>
                            )}

                        </div>
                                
                        <div>

                            {slide.button1.show && (
                                <button style={vayu_blocks_generateButtonStyle(slide.button1)} className="vayu_blocks_button1_heading">
                                    <a 
                                        href={slide.button1.link} 
                                        target={slide.button1.newtab ? "_blank" : "_self"}
                                        style={{ textDecoration: 'none', cursor: 'pointer',color: slide.button1.color }}
                                    >
                                        {slide.button1.text}
                                    </a>
                                </button>
                            )}
            
                            {slide.button2.show && (
                                <button className="vayu_blocks_button2_heading" style={vayu_blocks_generateButtonStyle(slide.button2)}>
                                    <a 
                                        href={slide.button2.link} 
                                        target={slide.button2.newtab ? "_blank" : "_self"}
                                        style={{ textDecoration: 'none', cursor: 'pointer',color: slide.button2.color }}
                                    >
                                        {slide.button2.text}
                                    </a>
                                </button>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        );

    });

    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes}>
                
                <div  class="vayu-blocks-slider-main-container">
                    <Slider ref={sliderRef} {...settings}>
                        {vayu_blocks_slides}
                    </Slider>
                </div>

            </AdvanceSettings>
        </>
    );
};

export default edit;
 