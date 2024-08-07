import React, { useEffect, useState } from 'react';
import './editor.scss';
import Slider from 'react-slick';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const edit = ({ attributes, setAttributes }) => {
    const [settings, setSettings] = useState({});

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        console.log(className);
        return (
          <div
            className={className}
            style={{ ...style, display: "block" ,background:"blue",borderRadius:"50%"}}
            onClick={onClick}
          />
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",background:"blue",borderRadius:"50%"}}
            onClick={onClick}
          />
        );
    }

    useEffect(() => {
        const newSettings = {
            dots: attributes.dots,
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
            cssEase: 'linear',
            pauseOnHover: attributes.pauseOnHover,
            focusOnSelect: attributes.focusOnSelect,
            rtl: attributes.rtl,
            centerPadding: '60px',
            className: 'center',
        };
    
        // Conditionally add customPaging settings
        if (attributes.customPaging) {
            
            newSettings.customPaging = function(i) {
               
                return (
                    <a>
                        <img src={attributes.slides[i].layout.backgroundImage} />
                    </a>
                );
            };
            newSettings.dotsClass = "slick-dots slick-thumb";
        }

    
        // Add arrow settings if needed
        if (attributes.arrow) {
            newSettings.nextArrow = <SampleNextArrow />;
            newSettings.prevArrow = <SamplePrevArrow />;
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
        attributes.pagingImages
    ]);


    const vayu_blocks_slides = attributes.slides.map((slide) => {
        
        const vayu_blocks_getBackgroundStyles = (slide) => {
            let styles = {};
        
            if (slide.layout.backgroundType === 'color') {
                styles.backgroundColor = slide.layout.backgroundColor;
            } else if (slide.layout.backgroundType === 'gradient') {
                styles.background = `-webkit-${slide.layout.backgroundGradient}`;
            }
        
            return styles;
        };

        const vayu_blocks_slideStyle = {
            margin:'10px',
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
            padding: `${slide.layout.padding.top || '20px'} ${slide.layout.padding.right || '20px'} ${slide.layout.padding.bottom || '20px'} ${slide.layout.padding.left || '20px'}`,
        };
        
        const vayu_blocks_generateButtonStyle = (button) => {
            const background = button.backgroundType === 'color'
                ? button.backgroundColor
                : button.backgroundType === 'gradient'
                ? button.backgroundGradient
                : 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';

                return {
                background: background,
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
    
        const vayu_blocks_img ={
            width:'100%',
            height:'100%',
            zIndex: 0,
            filter: slide.layout.duotone && slide.layout.duotone.length > 1 ? `url(${slide.layout.duotone})` : 'none',
        }

        const vayu_blocks_inside_conatiner_div = {
            position: slide.layout.backgroundImage ? 'absolute' : 'relative',
            top: slide.layout.backgroundImage ? '80%' : 'auto',
            left: slide.layout.backgroundImage ? '50%' : 'auto',
            transform: slide.layout.backgroundImage ? 'translate(-50%, -50%)' : 'none', // Centering when using absolute positioning
            zIndex: 1,
            height: '100%',
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
            ...vayu_blocks_getBackgroundStyles(slide),
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

                        <slide.layout.heading.tag >
                            <a 
                                href={slide.layout.heading.link} 
                                target={slide.layout.heading.newtab ? "_blank" : "_self"}
                                style={vayu_blocks_generateheadingStyle(slide.layout.heading)}
                            >
                                {slide.layout.heading.text}
                            </a>
                        </slide.layout.heading.tag>
        
                        {slide.layout.button1.show && (
                            <button style={vayu_blocks_generateButtonStyle(slide.layout.button1)}>
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
                            <button style={vayu_blocks_generateButtonStyle(slide.layout.button2)}>
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
                    <Slider {...settings}>
                        {vayu_blocks_slides}
                    </Slider>
                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;
