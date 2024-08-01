import { __ } from '@wordpress/i18n';
import { PanelBody,TextareaControl,ColorPicker, TextControl, Button ,ToggleControl,ToogleGroupControl,GradientPicker, ColorPalette, FontSizePicker, RangeControl,  DropdownMenu, SelectControl ,FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss'
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { CheckboxControl } from '@wordpress/components';



const PostSettings = ({ attributes, setAttributes }) => {

    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView;
	}, []);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleDeleteSlide = (index) => {
        setAttributes({
            sliderTexts: attributes.sliderTexts.filter((_, i) => i !== index),
            slidercount: attributes.slidercount - 1,
        });
    };

    const updateSliderText = (index, type, value) => {
        const updatedTexts = [...attributes.sliderTexts];
        updatedTexts[index] = { ...updatedTexts[index], [type]: value };
        setAttributes({ sliderTexts: updatedTexts });
    };

    const [activeTab, setActiveTab] = useState('content');

    const updateSliderButton = (index, key, value) => {
        // Create a copy of the current sliderButtons state
        const newSliderButtons = [...attributes.sliderButtons];
    
        // Ensure the index exists in the newSliderButtons array
        if (!newSliderButtons[index]) {
            newSliderButtons[index] = {};
        }
    
        // Update the specific key with the new value
        newSliderButtons[index][key] = value;
    
        // Update the state with the new sliderButtons array
        setAttributes({
            ...attributes,
            sliderButtons: newSliderButtons
        });
    };
    
    const handleAddSlide = () => {
        // Increase the slidercount by 1
        setAttributes({ slidercount: attributes.slidercount + 1 });
    };


    const updateSliderStyles = (index, section, property, value) => {
        const newSliderStyles = [...attributes.sliderStyles];
        if (!newSliderStyles[index]) {
            newSliderStyles[index] = {
                layout: {},
                heading: {},
                paragraph: {},
                button1: {},
                button2:{}
            };
        }
        newSliderStyles[index][section][property] = value;
        setAttributes({ sliderStyles: newSliderStyles });
    };
    
    console.log(attributes.sliderStyles);
    return(
        <>
        <PanelBody title={__('Slider Settings', 'vayu-blocks')} initialOpen={false} >
                <ToggleControl
                    label={__('Show Dots', 'vayu-blocks')}
                    checked={attributes.dots}
                    onChange={(value)=> setAttributes({dots:value})}
                />
                <ToggleControl
                    label={__('Infinite', 'vayu-blocks')}
                    checked={attributes.infinite}
                    onChange={(value)=> setAttributes({infinite:value, autoplay:value})}
                />
                <ToggleControl
                    label={__('Center Mode', 'vayu-blocks')}
                    checked={attributes.centerMode}
                    onChange={(value)=> setAttributes({centerMode:value})}
                />
                <ToggleControl
                    label={__('fade', 'vayu-blocks')}
                    checked={attributes.fade}
                    onChange={(value)=> setAttributes({fade:value})}
                />
                <ToggleControl
                    label={__('Wait For Animate', 'vayu-blocks')}
                    checked={attributes.waitForAnimate}
                    onChange={(value)=> setAttributes({waitForAnimate:value})}
                />
                <ToggleControl
                    label={__('Lazy Load', 'vayu-blocks')}
                    checked={attributes.lazyLoad}
                    onChange={(value)=> setAttributes({lazyLoad:value})}
                />
                <ToggleControl
                    label={__('Auto Play', 'vayu-blocks')}
                    checked={attributes.autoplay}
                    onChange={(value)=> setAttributes({infinite:value, autoplay:value})}
                />

                {attributes.autoplay && (
                    <RangeControl
                        label={__('Auto play Speed', 'vayu-blocks')}
                        value={attributes.autoplaySpeed}
                        onChange={(value) => setAttributes({ autoplaySpeed: value })}
                        min={100}
                        max={5000}
                        step={1}
                    />
                )}
                <ToggleControl
                    label={__('Pause On Hover', 'vayu-blocks')}
                    checked={attributes.pauseOnHover}
                    onChange={(value)=> setAttributes({pauseOnHover:value})}
                />
                <ToggleControl
                    label={__('Focus On Select', 'vayu-blocks')}
                    checked={attributes.focusOnSelect}
                    onChange={(value)=> setAttributes({focusOnSelect:value})}
                />
                <ToggleControl
                    label={__('Right To Left', 'vayu-blocks')}
                    checked={attributes.rtl}
                    onChange={(value)=> setAttributes({rtl:value})}
                />
                

                <RangeControl
                    label={__('Speed', 'vayu-blocks')}
                    value={attributes.speed}
                    onChange={(value) => setAttributes({ speed: value })}
                    min={100}
                    max={5000}
                    step={1}
                />

                <RangeControl
                    label={__('Slides To Show', 'vayu-blocks')}
                    value={attributes.slidesToShow}
                    onChange={(value) => setAttributes({ slidesToShow: value })}
                    min={1}
                    max={5}
                    step={1}
                />

                <RangeControl
                    label={__('Slides To Scroll', 'vayu-blocks')}
                    value={attributes.slidesToScroll}
                    onChange={(value) => setAttributes({ slidesToScroll: value })}
                    min={1}
                    max={5}
                    step={1}
                />

                <RangeControl
                    label={__('Row', 'vayu-blocks')}
                    value={attributes.row}
                    onChange={(value) => setAttributes({ row: value })}
                    min={1}
                    max={5}
                    step={1}
                />

                <RangeControl
                    label={__('Slides Per Row', 'vayu-blocks')}
                    value={attributes.slidesPerRow}
                    onChange={(value) => setAttributes({ slidesPerRow: value })}
                    min={1}
                    max={5}
                    step={1}
                />

        </PanelBody>

        <PanelBody title={__('Slider Layout', 'vayu-blocks')} initialOpen={false} >
            <RangeControl
                label={__('Slider Count', 'vayu-blocks')}
                value={attributes.slidercount}
                onChange={(value) => setAttributes({ slidercount: value })}
                min={2}
                max={10}
                step={1}
            />

            {Array.from({ length: attributes.slidercount }).map((_, index) => (
                <div
                    key={index}
                    className={`slider-settings ${expandedIndex === index ? 'expanded' : ''}`}
                >
                    <div className="slider-header">
                        <span className="slider-title" onClick={() => handleExpandToggle(index)}>
                            {__('Slide ' + (index + 1), 'vayu-blocks')}
                        </span>
                        <div className="slider-actions">
                            {attributes.slidercount > 2 && (
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
                        <div className="slider-tabs">

                            <Button
                                className={`tab-button ${activeTab === 'content' ? 'active' : ''}`}
                                onClick={() => setActiveTab('content')}
                            >
                                {__('Content', 'vayu-blocks')}
                            </Button>

                            <Button
                                className={`tab-button ${activeTab === 'button' ? 'active' : ''}`}
                                onClick={() => setActiveTab('button')}
                            >
                                {__('Button', 'vayu-blocks')}
                            </Button>


                            <Button
                                className={`tab-button ${activeTab === 'style' ? 'active' : ''}`}
                                onClick={() => setActiveTab('style')}
                            >
                                {__('Style', 'vayu-blocks')}
                            </Button>
                            
                        </div>
                    )}

                    {/* content */}
                    {expandedIndex === index && activeTab === 'content' && (

                        <div className="slider-content">
                                <TextareaControl
                                    className="slider-heading-text"
                                    label={__('Heading Text', 'vayu-blocks')}
                                    value={attributes.sliderTexts[index]?.heading || ''}
                                    onChange={(value) => updateSliderText(index, 'heading', value)}
                                    placeholder={__('Enter heading text', 'vayu-blocks')}
                                />
                                <TextareaControl
                                    className="slider-paragraph-text"
                                    label={__('Paragraph Text', 'vayu-blocks')}
                                    value={attributes.sliderTexts[index]?.paragraph || ''}
                                    onChange={(value) => updateSliderText(index, 'paragraph', value)}
                                    placeholder={__('Enter paragraph text', 'vayu-blocks')}
                                />
                        </div>
                    )}
                    
                    {/* button */}
                    {expandedIndex === index && activeTab === 'button' && (
                        <div className="slider-buttons">
                        <div className="button-option">
                            <CheckboxControl
                                label={__('Button 1', 'vayu-blocks')}
                                checked={attributes.sliderButtons[index]?.showButton1 || false}
                                onChange={(value) => updateSliderButton(index, 'showButton1', value)}
                            />
                            {attributes.sliderButtons[index]?.showButton1 && (
                                <>
                                    <TextControl
                                        className="slider-button-text"
                                        label={__('Button 1 Text', 'vayu-blocks')}
                                        value={attributes.sliderButtons[index]?.button1Text || ''}
                                        onChange={(value) => updateSliderButton(index, 'button1Text', value)}
                                        placeholder={__('Enter text for button 1', 'vayu-blocks')}
                                    />
                                    <TextControl
                                        className="slider-button-url"
                                        label={__('Button 1 URL', 'vayu-blocks')}
                                        value={attributes.sliderButtons[index]?.button1Url || ''}
                                        onChange={(value) => updateSliderButton(index, 'button1Url', value)}
                                        placeholder={__('Enter URL for button 1', 'vayu-blocks')}
                                    />
                                </>
                            )}
                        </div>
        
                        <div className="button-option">
                            <CheckboxControl
                                label={__('Button 2', 'vayu-blocks')}
                                checked={attributes.sliderButtons[index]?.showButton2 || false}
                                onChange={(value) => updateSliderButton(index, 'showButton2', value)}
                            />
                            {attributes.sliderButtons[index]?.showButton2 && (
                                <>
                                    <TextControl
                                        className="slider-button-text"
                                        label={__('Button 2 Text', 'vayu-blocks')}
                                        value={attributes.sliderButtons[index]?.button2Text || ''}
                                        onChange={(value) => updateSliderButton(index, 'button2Text', value)}
                                        placeholder={__('Enter text for button 2', 'vayu-blocks')}
                                    />
                                    <TextControl
                                        className="slider-button-url"
                                        label={__('Button 2 URL', 'vayu-blocks')}
                                        value={attributes.sliderButtons[index]?.button2Url || ''}
                                        onChange={(value) => updateSliderButton(index, 'button2Url', value)}
                                        placeholder={__('Enter URL for button 2', 'vayu-blocks')}
                                    />
                                </>
                            )}
                        </div>
                    </div>
        
                    )}

                    {/* style */}
                    {expandedIndex === index && activeTab === 'style' && (
                        <div className="slider-style">
                            {/* Layout Section */}
                            <div className="slider-section">
                                <div className="section-title">{__('Layout', 'vayu-blocks')}</div>
                                <div className="control-group">
                                    <div className="control-label">{__('Background Color', 'vayu-blocks')}</div>
                                    <ColorPicker
                                        color={attributes.sliderStyles[index]?.layout?.backgroundColor || ''}
                                        onChange={(color) => updateSliderStyles(index, 'layout', 'backgroundColor', color)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Padding', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.layout?.padding || 0}
                                        onChange={(value) => updateSliderStyles(index, 'layout', 'padding', value)}
                                        min={0}
                                        max={50}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Alignment', 'vayu-blocks')}</div>
                                    <SelectControl
                                        value={attributes.sliderStyles[index]?.layout?.alignment || 'left'}
                                        options={[
                                            { label: 'Left', value: 'left' },
                                            { label: 'Center', value: 'center' },
                                            { label: 'Right', value: 'right' }
                                        ]}
                                        onChange={(value) => updateSliderStyles(index, 'layout', 'alignment', value)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Border Radius', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.layout?.borderRadius || 0}
                                        onChange={(value) => updateSliderStyles(index, 'layout', 'borderRadius', value)}
                                        min={0}
                                        max={50}
                                    />
                                </div>
                            </div>

                            {/* Heading Section
                            <div className="slider-section">
                                <div className="section-title">{__('Heading', 'vayu-blocks')}</div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Size', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.heading?.fontSize || 16}
                                        onChange={(value) => updateSliderStyles(index, 'heading', 'fontSize', value)}
                                        min={10}
                                        max={36}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Weight', 'vayu-blocks')}</div>
                                    <SelectControl
                                        value={attributes.sliderStyles[index]?.heading?.fontWeight || 'normal'}
                                        options={[
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' }
                                        ]}
                                        onChange={(value) => updateSliderStyles(index, 'heading', 'fontWeight', value)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Text Color', 'vayu-blocks')}</div>
                                    <ColorPicker
                                        color={attributes.sliderStyles[index]?.heading?.textColor || ''}
                                        onChange={(color) => updateSliderStyles(index, 'heading', 'textColor', color)}
                                    />
                                </div>
                            </div>

                            
                            <div className="slider-section">
                                <div className="section-title">{__('Paragraph', 'vayu-blocks')}</div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Size', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.paragraph?.fontSize || 16}
                                        onChange={(value) => updateSliderStyles(index, 'paragraph', 'fontSize', value)}
                                        min={10}
                                        max={36}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Weight', 'vayu-blocks')}</div>
                                    <SelectControl
                                        value={attributes.sliderStyles[index]?.paragraph?.fontWeight || 'normal'}
                                        options={[
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' }
                                        ]}
                                        onChange={(value) => updateSliderStyles(index, 'paragraph', 'fontWeight', value)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Text Color', 'vayu-blocks')}</div>
                                    <ColorPicker
                                        color={attributes.sliderStyles[index]?.paragraph?.textColor || ''}
                                        onChange={(color) => updateSliderStyles(index, 'paragraph', 'textColor', color)}
                                    />
                                </div>
                            </div>

                       
                            <div className="slider-section">
                                <div className="section-title">{__('Button1', 'vayu-blocks')}</div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Size', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.button1?.fontSize || 16}
                                        onChange={(value) => updateSliderStyles(index, 'button1', 'fontSize', value)}
                                        min={10}
                                        max={36}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Weight', 'vayu-blocks')}</div>
                                    <SelectControl
                                        value={attributes.sliderStyles[index]?.button1?.fontWeight || 'normal'}
                                        options={[
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' }
                                        ]}
                                        onChange={(value) => updateSliderStyles(index, 'button1', 'fontWeight', value)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Text Color', 'vayu-blocks')}</div>
                                    <ColorPicker
                                        color={attributes.sliderStyles[index]?.button1?.textColor || ''}
                                        onChange={(color) => updateSliderStyles(index, 'button1', 'textColor', color)}
                                    />
                                </div>
                            </div>

                          
                            <div className="slider-section">
                                <div className="section-title">{__('Button2', 'vayu-blocks')}</div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Size', 'vayu-blocks')}</div>
                                    <RangeControl
                                        value={attributes.sliderStyles[index]?.button2?.fontSize || 16}
                                        onChange={(value) => updateSliderStyles(index, 'button2', 'fontSize', value)}
                                        min={10}
                                        max={36}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Font Weight', 'vayu-blocks')}</div>
                                    <SelectControl
                                        value={attributes.sliderStyles[index]?.button2?.fontWeight || 'normal'}
                                        options={[
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' }
                                        ]}
                                        onChange={(value) => updateSliderStyles(index, 'button2', 'fontWeight', value)}
                                    />
                                </div>
                                <div className="control-group">
                                    <div className="control-label">{__('Text Color', 'vayu-blocks')}</div>
                                    <ColorPicker
                                        color={attributes.sliderStyles[index]?.button2?.textColor || ''}
                                        onChange={(color) => updateSliderStyles(index, 'button2', 'textColor', color)}
                                    />
                                </div>
                            </div> */}
                        </div>
                    )}

                </div>
            ))}

            <Button
                className="add-new-slide-button"
                onClick={handleAddSlide}
            >
                {__('+ New Slide', 'vayu-blocks')}
            </Button>

        </PanelBody>


        </>
    );
};

export default PostSettings;