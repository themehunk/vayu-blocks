import React, { useEffect, useState } from 'react';
import './editor.scss';
import Slider from 'react-slick';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const edit = ({ attributes, setAttributes }) => {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        setSettings({
            dots: attributes.dots,
            infinite: attributes.infinite,
            speed: attributes.speed,
            slidesToShow: attributes.slidesToShow,
            slidesToScroll: attributes.slidesToScroll,
            rows: attributes.slidesPerRow,
            initialSlide: attributes.initialSlide,
            //slidesPerRow: attributes.slidesToShow,
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
        });
    }, [
        attributes.dots,
        attributes.infinite,
        attributes.speed,
        attributes.slidesToShow,
        attributes.slidesToScroll,
        attributes.row,
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
    ]);

    const REVIEW_TEMPLATE = [
        ['vayu-blocks/advance-container'
            , {
                verticalAlignment: 'center',
                isStackedOnMobile: true,
                templateLock: 'all',
                width: '100%',
                display:'none',
               
            },
                [
        [ 'vayu-blocks/advance-container', {} ],
        [ 'core/image', {} ],
        [ 'core/heading', { placeholder: 'Book Title' } ],
        [ 'core/paragraph', { placeholder: 'Summary' } ]
        ]
        ],
        ['vayu-blocks/advance-container'
            , {
                verticalAlignment: 'center',
                isStackedOnMobile: true,
                templateLock: 'all',
                width: '100%'
            },
                [
        [ 'vayu-blocks/advance-container', {} ],
        [ 'core/image', {} ],
        [ 'core/heading', { placeholder: 'Book Title' } ],
        [ 'core/paragraph', { placeholder: 'Summary' } ]
        ]
        ]
    ];

    const slides = attributes.slides.map((slide) => {
        const slideStyle = {
            background: slide.layout.backgroundType === 'color'
                ? `linear-gradient(${slide.layout.backgroundColor}, ${slide.layout.backgroundColor})`
                : slide.layout.backgroundType === 'gradient'
                    ? `linear-gradient(${slide.layout.backgroundGradient})`
                    : 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: `${slide.layout.opacity}`,
        };
        
        const slideStylecontainer = {
            backgroundImage: `url(${slide.layout.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1, // Ensure this is below the content
        };
        

        return (
            <div className="slider-container" key={slide.id} >
                <div style={slideStylecontainer}>
                <div className="slider-slide" style={slideStyle}>
                    <h1 style={{ color: 'blue' }}>{slide.title || 'Default Title'}</h1>
                   
                </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes}>
                <div>
                    <Slider {...settings}>
                        {slides}
                    </Slider>
                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;
