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
    
        if (attributes.aerrow) {
            newSettings.nextArrow = <SampleNextArrow />;
            newSettings.prevArrow = <SamplePrevArrow />;
        }
    
        setSettings(newSettings);
    },[
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
        attributes.aerrow,
    ]);


    const vayu_blocks_slides = attributes.slides.map((slide) => {
        
        const vayu_blocks_slideStylecontainer = {
            backgroundImage: `url(${slide.layout.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1, // Ensure this is below the content
        };

        const vayu_blocks_slideStyle = {
            background: slide.layout.backgroundType === 'color'
                ? `linear-gradient(${slide.layout.backgroundColor}, ${slide.layout.backgroundColor})`
                : slide.layout.backgroundType === 'gradient'
                    ? `linear-gradient(${slide.layout.backgroundGradient})`
                    : 'transparent',
            opacity: `${slide.layout.opacity}`,
            margin:'10px',
            height: '300px',
            padding: '20px',
            overflow: 'hidden',
            textAlign:slide.layout.alignment,

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
        };
        

        const vayu_blocks_generateButtonStyle = (button) => {
            const background = button.backgroundType === 'color'
                ? button.backgroundColor
                : button.backgroundType === 'gradient'
                ? button.backgroundGradient
                : 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';

                return {
                background: background,
                color: button.color,
                fontSize: `${button.size}px`,
                padding: '10px 20px',
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
            };
        };

        const vayu_blocks_generateheadingStyle = (heading) => {
            return {
                color: heading.color,
                fontSize: `${heading.size}px`,
                fontWeight: heading.fontWeight,
            };
        };
    

        return (
            <div className="vayu_blocks_slider-container" key={slide.id} >
                <div style={vayu_blocks_slideStylecontainer}>
                <div className="vayu_blocks_slider-slide" style={vayu_blocks_slideStyle}>

                    <slide.layout.heading.tag style={vayu_blocks_generateheadingStyle(slide.layout.heading)}>{slide.layout.heading.text}</slide.layout.heading.tag>

                    {slide.layout.button1.show && (
                        <button style={vayu_blocks_generateButtonStyle(slide.layout.button1)}>
                            {slide.layout.button1.text}
                        </button>
                    )}

                    {slide.layout.button2.show && (
                        <button style={vayu_blocks_generateButtonStyle(slide.layout.button2)}>
                            {slide.layout.button2.text}
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
                <div  class="vayu_blocks_container">
                    <Slider {...settings}>
                        {vayu_blocks_slides}
                    </Slider>
                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;
