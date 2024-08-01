import React, { useEffect, useState } from 'react';
import './editor.scss';
import Slider from 'react-slick';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { InnerBlocks } from '@wordpress/block-editor';

const edit = ({ attributes, setAttributes }) => {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        setSettings({
            dots: attributes.dots,
            infinite: attributes.infinite,
            speed: attributes.speed,
            slidesToShow: attributes.slidesToShow,
            slidesToScroll: attributes.slidesToScroll,
            rows: attributes.row,
            slidesPerRow: attributes.slidesPerRow,
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
        });
    }, [
        attributes.dots,
        attributes.infinite,
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

    // Generate the slides dynamically based on attributes.sliderCount
    const slides = [];
    for (let i = 0; i < attributes.slidercount; i++) {
        slides.push(
            <div key={i} className="slider-slide">
            {/* Render InnerBlocks for each slide */}
            <InnerBlocks
                templateLock={false}
            />
        </div>
        );
    }

    console.log(slides);

    return (
        <>
            <PanelSettings
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <AdvanceSettings attributes={attributes}>
                <Slider {...settings}>
                    {slides}
                </Slider>
        
            </AdvanceSettings>
        </>
    );
};

export default edit;
