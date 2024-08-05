import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    PanelRow ,
    ToggleControl,
    RangeControl,
    Button,
    ButtonGroup,
    ColorPalette,
    GradientPicker,
    ColorPicker,
    SelectControl,
    BorderBoxControlComponent,
    BorderControl
} from '@wordpress/components';
import { MdDeleteForever, MdColorLens } from 'react-icons/md';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { PiGradient, PiSlidersDuotone } from 'react-icons/pi';
import { MediaUpload, MediaUploadCheck,MediaPlaceholder, } from '@wordpress/block-editor';

import {
    ResponsiveControl,
    SizingControl,
    HoverControl,
    Icon,
    ControlPanelControl,
    BackgroundSelectorControl,
    UnitChooser,
} from '../../components/index.js';
import { layout } from '@wordpress/icons/build-types';

const PostSettings = ({ attributes, setAttributes }) => {
    const getView = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    }, []);

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [background, setBackground] = useState('image');


    const handleExpandToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const colors = [
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

    const gradients = [
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

    const handleDeleteSlide = (index) => {
        setAttributes({
            slides: attributes.slides.filter((_, i) => i !== index),
            slidercount: attributes.slides.length - 1,
        });
    };

    const handleAddSlide = () => {
        setAttributes({
            slides: [
                ...attributes.slides,
                {
                    layout: {
                        opacity:0.6,
                        backgroundImage: '',
                        backgroundType: 'color',
                        backgroundColor: 'black', 
                        backgroundGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                        borderTopColor: 'black',
                        borderColor: 'black',
                        borderSize: '1px',
                        borderType: 'solid',
                        borderRightColor: 'black',
                        borderBottomColor: 'black',
                        borderLeftColor: 'black',
                        borderTop: '1px',
                        borderRight: '1px',
                        borderBottom: '1px',
                        borderLeft: '1px',
                        borderTopStyle: 'solid',
                        borderRightStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderLeftStyle: 'solid',
                        paddingUnit: '', // specify unit if needed
                        padding: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        borderRadius: {
                            topRight: '',
                            topLeft: '',
                            bottomRight: '',
                            bottomLeft: ''
                        },
                        borderRadiusUnit: 'px' // default unit
                    }
                }
            ]        
        });
    };
    
    const updateSliderStyles = (index,property, value) => {
        const newSlides = [...attributes.slides];
        if (!newSlides[index]) {
            newSlides[index] = {
                layout: {}
            };
        }
        if (!newSlides[index].layout) {
            newSlides[index].layout = {};
        }
        newSlides[index].layout[property] = value;
        setAttributes({ slides: newSlides });
    };
    

    return (
        <>
            <PanelBody title={__('Slider Settings', 'vayu-blocks')} initialOpen={false}>
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

                <ToggleControl
                    label={__('Show Dots', 'vayu-blocks')}
                    checked={attributes.dots}
                    onChange={(value) => setAttributes({ dots: value })}
                />

                <ToggleControl
                    label={__('Infinite', 'vayu-blocks')}
                    checked={attributes.infinite}
                    onChange={(value) => setAttributes({ infinite: value, autoplay: value })}
                />

                <ToggleControl
                    label={__('Center Mode', 'vayu-blocks')}
                    checked={attributes.centerMode}
                    onChange={(value) => setAttributes({ centerMode: value })}
                />

                <ToggleControl
                    label={__('Fade', 'vayu-blocks')}
                    checked={attributes.fade}
                    onChange={(value) => setAttributes({ fade: value })}
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
                    onChange={(value) => setAttributes({ infinite: value, autoplay: value })}
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

                <ToggleControl
                    label={__('Right To Left', 'vayu-blocks')}
                    checked={attributes.rtl}
                    onChange={(value) => setAttributes({ rtl: value })}
                />
            </PanelBody>

            <PanelBody title={__('Slider Layout', 'vayu-blocks')} initialOpen={false}>

                {attributes.slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slider-settings ${expandedIndex === index ? 'expanded' : ''}`}
                    >
                        <div className="slider-header">
                            <span className="slider-title" onClick={() => handleExpandToggle(index)}>
                                {__('Slide ' + (index + 1), 'vayu-blocks')}
                            </span>
                            <div className="slider-actions">
                                {attributes.slides.length > 2 && (
                                    <Button
                                        className="delete-button"
                                        isDestructive
                                        onClick={() => handleDeleteSlide(index)}
                                    >
                                        <MdDeleteForever />
                                    </Button>
                                )}
                                <Button
                                    className="expand-button"
                                    onClick={() => handleExpandToggle(index)}
                                >
                                    {expandedIndex === index ? <FaCaretDown /> : <FaCaretRight />}
                                </Button>
                            </div>
                        </div>
                        
                        {expandedIndex === index && (
                            <div className="slider-content">
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
                                            onSelect={(media) => updateSliderStyles(index, 'backgroundImage', media.url)}
                                            accept="image/*"
                                            allowedTypes={['image']}
                                        />
                                    </>
                                    )}

                                    { 'color' ===  background &&  (	
                                    <>
                                        <>
                                        <div className="myclasst">
                                        <label className="components-base-control__labelt">{__('Background Type', 'vayu-blocks')}</label>
                                        <ButtonGroup className="linking-controlst">
                                        <Button
                                            icon={<MdColorLens />}
                                            label={__('Background color', 'vayu-blocks')}
                                            showTooltip={true}
                                            isPrimary={attributes.slides[index].layout.backgroundType === 'color'}
                                            onClick={() => {
                                                // Create a new array of slides with updated `backgroundType` for the selected index
                                                const updatedSlides = attributes.slides.map((slide, i) =>
                                                    i === index
                                                        ? { ...slide, layout: { ...slide.layout, backgroundType: 'color' } }
                                                        : slide
                                                );
                                                // Set the updated slides to attributes
                                                setAttributes({ slides: updatedSlides });
                                            }}
                                        />

                                        <Button
                                            icon={<PiGradient />}
                                            label={__('Gradient', 'vayu-blocks')}
                                            showTooltip={true}
                                            isPrimary={attributes.slides[index].layout.backgroundType === 'gradient'}
                                            onClick={() => {
                                                // Create a new array of slides with updated `backgroundType` for the selected index
                                                const updatedSlides = attributes.slides.map((slide, i) =>
                                                    i === index
                                                        ? { ...slide, layout: { ...slide.layout, backgroundType: 'gradient' } }
                                                        : slide
                                                );
                                                // Set the updated slides to attributes
                                                setAttributes({ slides: updatedSlides });
                                            }}
                                        />

                                        </ButtonGroup>
                                        </div>

                                        {attributes.slides[index].layout.backgroundType === 'color' && (
                                            <ColorPalette
                                                label={__('Background Color', 'vayu-blocks')}
                                                colors={colors}
                                                value={attributes.slides[index].layout.backgroundColor || ''}
                                                onChange={(color) => updateSliderStyles(index, 'backgroundColor', color)}
                                            />
                                        )}

                                        {attributes.slides[index].layout.backgroundType === 'gradient' && (
                                            <GradientPicker
                                                value={attributes.slides[index].layout.backgroundGradient || ''}
                                                onChange={(value) => updateSliderStyles(index, 'backgroundGradient', value)}
                                                gradients={gradients}
                                            />
                                        )}

                                        </>
                                    </>
                                    )}

                                    <br />
                                    <RangeControl
                                        label = {__('Opacity', 'vayu-blocks')}
                                        value={attributes.slides[index].layout.opacity}
                                        onChange={(value) =>updateSliderStyles(index, 'opacity', value)}
                                        min={0}
                                        max={1}
                                        step={0.1}
                                    />



                                

                            </div>
                        )}

                    </div>
                ))}

                <Button isPrimary onClick={handleAddSlide}>
                    {__('Add Slide', 'vayu-blocks')}
                </Button>

            </PanelBody>

        </>
    );
};

export default PostSettings;
