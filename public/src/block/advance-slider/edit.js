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
            rtl: attributes.rtl,
            centerPadding: '60px',
            afterChange: (currentIndex) => {
                setActiveIndex(currentIndex); 
            },
            onInit: (slider) => {
                setActiveIndex(slider.currentSlide);
                sliderRef.current = slider;
            },
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
            // Call the existing onClick handler
            if (dot.props.children.props.onClick) {
                dot.props.children.props.onClick(e);
            }
            // Set the active index
            setActiveIndex(index);
        };

        // Conditionally customize dot appearance
        if (attributes.dots.customize && attributes.customPaging===false) { // Replace 'true' with a condition if necessary
            newSettings.appendDots = dots => (
                <div>
                <ul  style={{
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
                                    borderColor: activeIndex === index ? 'gray' : 'transparent',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderRadius: attributes.dots.option === 'square' ? '15%' : '50%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    padding: '3px', 
                                    fontSize: addPxIfNeeded(attributes.dots.size),
                                    background:`${attributes.dots.backgroundColor}`
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

        // Add arrow settings if needed
        if (attributes.arrow) {
            newSettings.nextArrow = (
                <div className="next-slick-arrow" >
                    <div className="inside_rightarrow_div" style={{
                        ...stylearrow_div,
                        marginLeft: `-${attributes.arrowstyleleft.position + 30}px`, 
                    }}>
                    {rightarrow}
                    </div>
                </div>
            );
            newSettings.prevArrow = (
                <div className="prev-slick-arrow">
                    <div className="inside_rightarrow_div" style={{...stylearrow_div, marginLeft:`${attributes.arrowstyleleft.position}px`}}>
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
        attributes.index
    ]);

    useEffect(() => {
        
        if (sliderRef.current && attributes.index !== undefined) {
            sliderRef.current.slickGoTo(attributes.index);
        }
    }, [attributes.index]);

    const vayu_blocks_slides = attributes.slides.map((slide) => {
        
        const vayu_blocks_getBackgroundStyles = (value) => {
            let styles = {};
            if (value.backgroundColor) {
                styles.backgroundColor = value.backgroundColor;
            } else if (value.backgroundGradient) {
                styles.background = `-webkit-${value.backgroundGradient}`;
            }
        
            return styles;
        };

        const vayu_blocks_slideStyle = {
            marginBottom:'10px',
            height: '100%',
            overflow: 'hidden',
            position:'relative',
            
            //border
            borderColor: slide.layout.border?.color || 'transparent',
            borderWidth: slide.layout.border?.width || '0',
            borderStyle: slide.layout.border?.style || 'none',
            borderTopColor: slide.layout.border?.topcolor || slide.layout.border?.color || 'transparent',
            borderTopWidth: slide.layout.border?.topwidth || slide.layout.border?.width || '0',
            borderTopStyle: slide.layout.border?.topstyle || slide.layout.border?.style || 'none',
            borderBottomColor: slide.layout.border?.bottomcolor || slide.layout.border?.color || 'transparent',
            borderBottomWidth: slide.layout.border?.bottomwidth || slide.layout.border?.width || '0',
            borderBottomStyle: slide.layout.border?.bottomstyle || slide.layout.border?.style || 'none',
            borderLeftColor: slide.layout.border?.leftcolor || slide.layout.border?.color || 'transparent',
            borderLeftWidth: slide.layout.border?.leftwidth || slide.layout.border?.width || '0',
            borderLeftStyle: slide.layout.border?.leftstyle || slide.layout.border?.style || 'none',
            borderRightColor: slide.layout.border?.rightcolor || slide.layout.border?.color || 'transparent',
            borderRightWidth: slide.layout.border?.rightwidth || slide.layout.border?.width || '0',
            borderRightStyle: slide.layout.border?.rightstyle || slide.layout.border?.style || 'none',
            
            //borderRadius
            borderRadius: `${slide.layout.borderRadius.top || '0px'} ${slide.layout.borderRadius.right || '0px'} ${slide.layout.borderRadius.bottom || '0px'} ${slide.layout.borderRadius.left || '0px'}`,

            //padding
            padding: `${slide.layout.padding.top || '0px'} ${slide.layout.padding.right || '0px'} ${slide.layout.padding.bottom || '0px'} ${slide.layout.padding.left || '0px'}`,
        };
        
        const vayu_blocks_generateButtonStyle = (button) => {
                return {
                ...vayu_blocks_getBackgroundStyles(button),
                fontSize: `${button.size}px`,
                border: 'none',
                cursor: 'pointer',
                margin:'10px',
                
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
            };
        };

        const vayu_blocks_generateheadingStyle = (heading) => {
            return {
                color: heading.color,
                fontSize: `${heading.size}px`,
                fontWeight: heading.fontWeight,
                textDecoration: 'none', 
                cursor: 'pointer' 
            };
        };

        const vayu_blocks_generatesubheadingStyle = (heading) => {
            return {
                color: heading.color,
                fontSize: `${heading.size}px`,
                fontWeight: heading.fontWeight,
            };
        };
    
        const vayu_blocks_img ={
            width:'100%',
            height:'100%',
            zIndex: 0,
            filter: slide.layout.duotone && slide.layout.duotone.length > 1 ? `url(${slide.layout.duotone})` : 'none',
        }

        const calculateTopValue = (slidesToShow, slidesPerRow, hasImage) => {
            let topValue;
            if(slidesToShow>2 && slidesPerRow >2 ){
                topValue=0;
            }
            topValue=65;
        
            return hasImage ? `${topValue}%` : 'auto';
        };
        
        // Usage
        const topValue = calculateTopValue(attributes.slidesToShow, attributes.slidesPerRow, slide.layout.backgroundImage);

        const vayu_blocks_inside_conatiner_div = {
            position: slide.layout.backgroundImage ? 'absolute' : '',
            left:'50%',
            top:topValue,
            transform: slide.layout.backgroundImage ? 'translate(-50%, -50%)' : 'none', // Center horizontally and vertically
            zIndex: 1,
            height: '100%',
            marginBottom: '8%',
            textAlign: slide.layout.alignment,  // Use the alignment from slide.layout
        };

        const vayu_blocks_color_overlay={
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width:'100%',
            height:'100%',
            ...vayu_blocks_getBackgroundStyles(slide.layout),
            opacity:slide.layout.opacity,
        }

        return (
            <div className="vayu_blocks_slider-container" key={slide.id}>

                <div className="vayu_blocks_slider-slide" style={vayu_blocks_slideStyle}>

                    {slide.layout.backgroundImage && (
                            <img 
                                style={vayu_blocks_img} 
                                src={slide.layout.backgroundImage} 
                                alt="Slide Background" 
                            />
                    )}

                    <div style={vayu_blocks_color_overlay}></div>

                    <div style={vayu_blocks_inside_conatiner_div}>

                        <slide.layout.heading.tag className="vayu_blocks_heading">
                            <a 
                                href={slide.layout.heading.link} 
                                target={slide.layout.heading.newtab ? "_blank" : "_self"}
                                style={vayu_blocks_generateheadingStyle(slide.layout.heading)}
                            >
                                {slide.layout.heading.text}
                            </a>
                        </slide.layout.heading.tag>

                        {slide.layout.subheading.show && (
                            <slide.layout.subheading.tag className="vayu_blocks_sub_heading" style={vayu_blocks_generatesubheadingStyle(slide.layout.subheading)}>
                                    {slide.layout.subheading.text}
                            </slide.layout.subheading.tag>
                        )}
        
                        {slide.layout.button1.show && (
                            <button style={vayu_blocks_generateButtonStyle(slide.layout.button1)} className="vayu_blocks_button1_heading">
                                <a 
                                    href={slide.layout.button1.link} 
                                    target={slide.layout.button1.newtab ? "_blank" : "_self"}
                                    style={{ textDecoration: 'none', cursor: 'pointer',color: slide.layout.button1.color }}
                                >
                                    {slide.layout.button1.text}
                                </a>
                            </button>
                        )}
        
                        {slide.layout.button2.show && (
                            <button className="vayu_blocks_button2_heading" style={vayu_blocks_generateButtonStyle(slide.layout.button2)}>
                                <a 
                                    href={slide.layout.button2.link} 
                                    target={slide.layout.button2.newtab ? "_blank" : "_self"}
                                    style={{ textDecoration: 'none', cursor: 'pointer',color: slide.layout.button2.color }}
                                >
                                    {slide.layout.button2.text}
                                </a>
                            </button>
                        )}

                    </div>
                </div>
            </div>
        );

    });

    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes}>
                
                <div  class="slider-container">
                <svg class="duotone-filters" xmlns="http://www.w3.org/2000/svg">
                    {/* orange and red */}
                    <filter id="duotone-orange-red">
                            <feColorMatrix type="matrix" result="gray"
                                values="1 0 0 0 0
                                        1 0 0 0 0
                                        1 0 0 0 0
                                        0 0 0 1 0" />
                            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                <feFuncR type="table" tableValues="0.949 1"></feFuncR>
                                <feFuncG type="table" tableValues="0.6 0.8"></feFuncG>
                                <feFuncB type="table" tableValues="0.5 0.6"></feFuncB>
                                <feFuncA type="table" tableValues="0 1"></feFuncA>
                            </feComponentTransfer>
                    </filter>

                    {/* Red and Green */}
                    <filter id="duotone-red-green">
                            <feColorMatrix type="matrix" result="gray"
                                values="1 0 0 0 0
                                        1 0 0 0 0
                                        1 0 0 0 0
                                        0 0 0 1 0" />
                            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                <feFuncR type="table" tableValues="0.898 1"></feFuncR>
                                <feFuncG type="table" tableValues="0.066 0.945"></feFuncG>
                                <feFuncB type="table" tableValues="0.066 0.945"></feFuncB>
                                <feFuncA type="table" tableValues="0 1"></feFuncA>
                            </feComponentTransfer>
                    </filter>

                    {/* Black and White */}
                    <filter id="duotone-black-white">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0 1"></feFuncR>
                            <feFuncG type="table" tableValues="0 1"></feFuncG>
                            <feFuncB type="table" tableValues="0 1"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Blue and Red */}
                    <filter id="duotone-blue-red">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.929 0.996"></feFuncR>
                            <feFuncG type="table" tableValues="0.117 0.257"></feFuncG>
                            <feFuncB type="table" tableValues="0.717 0.949"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Purple and Yellow */}
                    <filter id="duotone-purple-yellow">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.537 0.988"></feFuncR>
                            <feFuncG type="table" tableValues="0.129 0.929"></feFuncG>
                            <feFuncB type="table" tableValues="0.746 0.059"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Orange and Teal */}
                    <filter id="duotone-orange-teal">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.949 0.204"></feFuncR>
                            <feFuncG type="table" tableValues="0.517 0.835"></feFuncG>
                            <feFuncB type="table" tableValues="0.318 0.549"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Pink and Blue */}
                    <filter id="duotone-pink-blue">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.949 0.235"></feFuncR>
                            <feFuncG type="table" tableValues="0.349 0.553"></feFuncG>
                            <feFuncB type="table" tableValues="0.529 0.847"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Cyan and Magenta */}
                    <filter id="duotone-cyan-magenta">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.0 0.847"></feFuncR>
                            <feFuncG type="table" tableValues="0.796 0.122"></feFuncG>
                            <feFuncB type="table" tableValues="0.996 0.643"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Yellow and Black */}
                    <filter id="duotone-yellow-black">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="1 0.125"></feFuncR>
                            <feFuncG type="table" tableValues="0.839 0.125"></feFuncG>
                            <feFuncB type="table" tableValues="0.062 0.062"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Light Blue and Light Green */}
                    <filter id="duotone-lightblue-lightgreen">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.678 0.678"></feFuncR>
                            <feFuncG type="table" tableValues="0.847 0.996"></feFuncG>
                            <feFuncB type="table" tableValues="0.847 0.678"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>

                    {/* Gray and Yellow */}
                    <filter id="duotone-gray-yellow">
                        <feColorMatrix type="matrix" result="gray"
                            values="1 0 0 0 0
                                    1 0 0 0 0
                                    1 0 0 0 0
                                    0 0 0 1 0" />
                        <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.678 1"></feFuncR>
                            <feFuncG type="table" tableValues="0.678 1"></feFuncG>
                            <feFuncB type="table" tableValues="0.678 0.278"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>


                </svg>
                    <Slider ref={sliderRef} {...settings}>
                        {vayu_blocks_slides}
                    </Slider>
                </div>

            </AdvanceSettings>
        </>
    );
};

export default edit;
