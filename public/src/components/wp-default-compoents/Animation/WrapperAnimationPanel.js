import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, Button, Popover, SelectControl } from '@wordpress/components';
import { __experimentalHStack as HStack, __experimentalText as Text } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __experimentalToolsPanel as ToolsPanel, __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';
import { RxValueNone } from "react-icons/rx";
import ColorPanel from '../ColorPanel/ColorPanel';
import { Fragment, useEffect } from 'react';
import ControlPanelControl from '../../control-panel-control/index';

/**
 * WrapperAnimationPanel Component
 * 
 * The `WrapperAnimationPanel` component provides a UI to manage and apply animation effects to a block element in the WordPress block editor. 
 * It allows users to select animations for both block content and images, manage mask shapes, and customize settings such as animation type and mask properties.
 * 
 * Props:
 * 
 * @param {string} animationValue - The currently selected animation effect for the block.
 * @param {function} onAnimationChange - Callback function that updates the animation effect for the block.
 * 
 * @param {string} image - The image URL used in the animation panel.
 * @param {function} onEffectcolorchange - Callback to update the color of the animation effect.
 * @param {string} effectcolor - The color applied to the animation effect.
 * 
 * @param {string} imageanimationValue - The currently selected animation effect for images.
 * @param {function} onimageAnimationChange - Callback to update the image animation effect.
 * 
 * @param {function} onanimationsettingschange - Callback function to update the animation settings.
 * @param {object} animationsettings - Object containing the current animation settings for the block.
 * 
 * @param {string} mask_shapeValue - The currently selected mask shape.
 * @param {function} onmask_shapeChange - Callback function to update the mask shape.
 * 
 * @param {function} onmaskrepeatChange - Callback function to update the mask repeat option.
 * @param {function} onmaskpositionchange - Callback function to update the mask position.
 * @param {function} onmaskSizeChange - Callback function to update the mask size.
 * @param {string} masksize - The current size of the mask.
 * @param {string} maskposition - The current position of the mask.
 * @param {string} maskrepeat - The current repeat option for the mask.
 * 
 * Example usage:
 * 
 * <WrapperAnimationPanel
 *   animationValue={attributes.wrapperanimation}
 *   onAnimationChange={(value) => setAttributes({ wrapperanimation: value })}
 *   animationOptions={animationoptions}
 *   image={attributes.image}
 *   onEffectcolorchange={(value) => setAttributes({ wrapppereffect3color: value.color })}
 *   effectcolor={attributes.wrapppereffect3color}
 *   imageanimationValue={attributes.imagehvranimation}
 *   onimageAnimationChange={(value) => setAttributes({ imagehvranimation: value })}
 *   onanimationsettingschange={(value) => setAttributes({ animationsettings: value })}
 *   animationsettings={attributes.animationsettings}
 *   mask_shapeValue={attributes.maskshape}
 *   onmask_shapeChange={(value) => setAttributes({ maskshape: value })}
 *   onmaskrepeatChange={(value) => setAttributes({ maskrepeat: value })}
 *   onmaskpositionchange={(value) => setAttributes({ maskposition: value })}
 *   onmaskSizeChange={(value) => setAttributes({ masksize: value })}
 *   masksize={attributes.masksize}
 *   maskposition={attributes.maskposition}
 *   maskrepeat={attributes.maskrepeat}
 * />
 * 
 * This component handles logic such as visibility toggling, animation previews, and settings for animations, masks, and image effects.
 * 
 * @returns {JSX.Element} The rendered panel UI for managing animations, effects, and masks for a block element.
 */


const WrapperAnimationPanel = ({ animationValue, onAnimationChange,image,onEffectcolorchange, effectcolor,imageanimationValue, onimageAnimationChange, onanimationsettingschange,animationsettings ,mask_shapeValue, onmask_shapeChange,onmaskrepeatChange,onmaskpositionchange,onmaskSizeChange,masksize,maskposition,maskrepeat }) => {

    //3D animation
    const [isVisible, setIsVisible] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [selectedAnimation, setSelectedAnimation] = useState(animationValue || 'none'); // Default to 'none' if no value

    const toggleVisible = () => {
        setIsVisible((prev) => !prev); // Toggle the state
    };

    // Log isVisible whenever it changes
    useEffect(() => {
        console.log('isVisible:', isVisible);
    }, [isVisible]);

    const handleAnimationClick = (animation) => {
        setSelectedAnimation(animation);
        onAnimationChange(animation); // Update the parent component with the new animation value
    };

    let name = '';
    const animationoptions = [
        { label: __('3D Animation', 'vayu-blocks'), value: 'none' },
        { label: __('Effect 1 (3D Tilt Left)', 'vayu-blocks'), value: 'vayu_block_styling-left' },
        { label: __('Effect 2 (3D Tilt Right)', 'vayu-blocks'), value: 'vayu_block_styling-right' },
        { label: __('Effect 3 (Depth Shift)', 'vayu-blocks'), value: 'vayu_block_styling-effect3' },
        { label: __('Effect 4 (3D Clip-Path Left)', 'vayu-blocks'), value: 'vayu_block_styling-effect4-left' },
        { label: __('Effect 5 (3D Clip-Path Right)', 'vayu-blocks'), value: 'vayu_block_styling-effect4-right' },
        { label: __('Effect 6 (3D Draft Bit)', 'vayu-blocks'), value: 'vayu_block_styling-effect10' },
        { label: __('Effect 7 (Tilt Effect)', 'vayu-blocks'), value: 'vayu_block_styling-effect7' },
    ];
    
    // Find the label based on selectedAnimation
    const selectedOption = animationoptions.find(option => option.value === selectedAnimation);
    
    if (selectedOption) {
        name = selectedOption.label;
    }
    
    //image animation
    const [isimageVisible, setIsimageVisible] = useState(false);
    const [imagepopoverAnchor, setimagePopoverAnchor] = useState();
    const [imageselectedAnimation, imagesetSelectedAnimation] = useState(imageanimationValue || 'none'); // Default to 'none' if no value

    // Function to toggle the visibility of the popover
    const imagetoggleVisible = () => {
        setIsimageVisible((prev) => !prev);
    };

    const handleimageAnimationClick = (animation) => {
        imagesetSelectedAnimation(animation);
        onimageAnimationChange(animation); // Update the parent component with the new animation value
    };

    let imagename = '';
    const imageanimationoptions = [
        { label: __('Image Animation', 'vayu-blocks'), value: 'none' },
        { label: __('Infinite rotate', 'vayu-blocks'), value: 'rotate-image' },
        { label: __('Clip Animation', 'vayu-blocks'), value: 'clip-animation' },
        { label: __('Diagonal Expand', 'vayu-blocks'), value: 'clip-diagonal-expand' },
        { label: __('Starbust', 'vayu-blocks'), value: 'clip-starburst' },
        { label: __('Diamond', 'vayu-blocks'), value: 'clip-diamond' },
        { label: __('Diagonal slide', 'vayu-blocks'), value: 'clip-diagonal-slide' },
        { label: __('Hex Pulse', 'vayu-blocks'), value: 'clip-hex-pulse' },
        { label: __('Triangle Expand', 'vayu-blocks'), value: 'clip-triangle-expand' },
        { label: __('Circle Burst', 'vayu-blocks'), value: 'clip-circle-burst' },
        { label: __('Zigzag', 'vayu-blocks'), value: 'clip-zigzag' },
        { label: __('Diamond Expand', 'vayu-blocks'), value: 'clip-diamond-expand' },
    ];
    
    // Find the label based on imageselectedAnimation
    const imageselectedOption = imageanimationoptions.find(option => option.value === imageselectedAnimation);
    
    if (imageselectedOption) {
        imagename = imageselectedOption.label;
    }

    const getAnimationClass = (imageselectedAnimation) => {
        switch (imageselectedAnimation) {
            case 'rotate-image':
                return 'vayu_blocks_rotate-image_compoents_animation';
            case 'clip-animation':
                return 'vayu_blocks_clip-animation_compoents_animation';
            case 'clip-diagonal-expand':
                return 'vayu_blocks_clip-diagonal-expand_compoents_animation';
            case 'clip-starburst':
                return 'vayu_blocks_clip-starburst_compoents_animation';
            case 'clip-diamond':
                return 'vayu_blocks_clip-diamond_compoents_animation';
            case 'clip-diagonal-slide':
                return 'vayu_blocks_clip-diagonal-slide_compoents_animation';
            case 'clip-hex-pulse':
                return 'vayu_blocks_clip-hex-pulse_compoents_animation';
            case 'clip-triangle-expand':
                return 'vayu_blocks_clip-triangle-expand_compoents_animation';
            case 'clip-circle-burst':
                return 'vayu_blocks_clip-circle-burst_compoents_animation';
            case 'clip-zigzag':
                return 'vayu_blocks_clip-zigzag_compoents_animation';
            case 'clip-diamond-expand':
                return 'vayu_blocks_clip-diamond-expand_compoents_animation';
            default:
                return ''; // Return an empty string if no match
        }
    };

    //mask shape
    const [ismask_shapeVisible, setIsmask_shapeVisible] = useState(false);
    const [mask_shapepopoverAnchor, setmask_shapePopoverAnchor] = useState();
    const [mask_shapeselected, mask_shapesetSelected] = useState(mask_shapeValue || 'none'); // Default to 'none' if no value

    // Function to toggle the visibility of the popover
    const mask_shapetoggleVisible = () => {
        setIsmask_shapeVisible((prev) => !prev);
    };

    const handlemask_shapeClick = (animation) => {
        mask_shapesetSelected(animation);
        onmask_shapeChange(animation); // Update the parent component with the new animation value
    };

    let mask_shapename = '';
    const mask_shapeoptions = [
        { label: __('Mask Shape', 'vayu-blocks'), value: 'none' },
        { label: __('Circle', 'vayu-blocks'), value: 'circle' },
        { label: __('Diamond', 'vayu-blocks'), value: 'diamond' },
        { label: __('Hexagone', 'vayu-blocks'), value: 'hexagone' },
        { label: __('Rounded', 'vayu-blocks'), value: 'rounded' },
        { label: __('Mask 1', 'vayu-blocks'), value: 'bob1' },
        { label: __('Mask 2', 'vayu-blocks'), value: 'bob2' },
        { label: __('Mask 3', 'vayu-blocks'), value: 'bob3' },
        { label: __('Mask 4', 'vayu-blocks'), value: 'bob4' },
    ];
    
    // Find the label based on mask_shapeselected
    const mask_shapeselectedOption = mask_shapeoptions.find(option => option.value === mask_shapeselected);
    
    if (mask_shapeselectedOption) {
        mask_shapename = mask_shapeselectedOption.label;
    }

    const getmaskImagePath = (value) => {
        let svg;
        
        switch (value) {
            case 'circle':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <circle cx="240" cy="190" r="184"/>
                        </svg>`;
                break;
            case 'diamond':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <rect x="106.001" y="56.001" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 275.3553 494.0559)" width="267.998" height="267.999"/>
                        </svg>`;
                break;
            case 'hexagone':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <polygon points="79.386,97.269 240,4.538 400.614,97.269 400.614,282.73 240,375.462 79.386,282.73"/>
                        </svg>`;
                break;
            case 'rounded':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <path d="M421,309.436C421,343.437,393.437,371,359.436,371H120.564C86.563,371,59,343.437,59,309.436V70.564  
                                    C59,36.563,86.563,9,120.564,9h238.871C393.437,9,421,36.563,421,70.564V309.436z"/>
                        </svg>`;
                break;
            case 'bob1':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <path d="M47.846,184.442c-87.942,134.709,80.073,196.702,186.331,196.702c104.494,0,222.582-39.417,222.582-160.557  
                                    C456.758-91.25,198.783-46.776,47.846,184.442z"/>
                        </svg>`;
                break;
            case 'bob2':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <path d="M393.879,31.896c96.935,41.811,41.553,265.103-29.118,320.414c-74.443,58.259-320.428,32.36-330.586-185.032  
                                    C29.551,68.561,183.588-58.822,393.879,31.896z"/>
                        </svg>`;
                break;
            case 'bob3':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <path d="M141.699,9.958c37.611-41.211,253.977,90.988,263.995,181.115c10.016,90.134-215.692,232.896-280.453,172.106
                                    C69.045,310.428,39.531,121.932,141.699,9.958z"/>
                        </svg>`;
                break;
            case 'bob4':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 380" xml:space="preserve">
                            <g>
                                <path d="M69.19,26.334C54.496,39.876,42.91,57.185,35.302,75.221c-10.718,25.408-15.268,52.962-18.384,80.363
                                        c-10.069,88.57,17.375,190.72,112.557,217.96c63.844,18.273,133.074-0.437,191.492-27.517
                                        c85.828-39.789,206.786-163.646,105.685-255.719C372.3,40.81,284.499,59.485,220.248,32.528
                                        c-30.103-12.63-58.445-35.896-92.778-33.125C105.078,1.21,85.272,11.517,69.19,26.334z"/>
                            </g>
                        </svg>`;
                break;
            default:
                console.warn('Unknown mask shape selected:', value);
                return ''; // or a default SVG
        }
    
        // Encode the SVG to Base64 and create a Data URL
        const svgBase64 = btoa(svg);
        return `data:image/svg+xml;base64,${svgBase64}`;
    };
        
    return (
        <div className="vayu_blocks_animation_panel">
            <ToolsPanel label={__('Animation')} className="vayu_block_animation_name">
                <ToolsPanelItem
                    className="vayu_blocks_animation_toolspanel_item"
                    hasValue={() => !!animationValue}
                    label={__('Animation')}
                    onDeselect={() => handleAnimationClick('none')}
                    isShownByDefault
                >
                    <Button
                        ref={setPopoverAnchor}
                        onClick={toggleVisible}
                        className={`block-editor-panel-animation-settings__dropdown ${isVisible ? 'is-open' : ''}`}
                    >
                        <HStack alignment="left">
                        {selectedAnimation === 'none' ? (
                             <div data-wp-c16t="true" data-wp-component="Flex" class="components-flex ff-ad-ec-a-ebdfba-spl71z e19lxcc00"><span class="component-color-indicator block-editor-duotone-control__unset-indicator"></span></div>
                        ) : (
                            <img className="vayu_blocks_hstack_animation_panel_image" src={image} alt={name} />
                        )}
                            <Text>{__(name)}</Text>
                        </HStack>
                    </Button>
                </ToolsPanelItem>

                <ToolsPanelItem
                    className="vayu_blocks_animation_toolspanel_item"
                    hasValue={() => !!imageanimationValue}
                    label={__('Image Animation')}
                    onDeselect={() => handleimageAnimationClick('none')}
                    isShownByDefault
                >
                    <Button
                        ref={setimagePopoverAnchor}
                        onClick={imagetoggleVisible}
                        className={`block-editor-panel-animation-settings__dropdown ${isimageVisible ? 'is-open' : ''}`}
                    >
                        <HStack alignment="left">
                        {imageselectedAnimation === 'none' ? (
                           <div data-wp-c16t="true" data-wp-component="Flex" class="components-flex ff-ad-ec-a-ebdfba-spl71z e19lxcc00"><span class="component-color-indicator block-editor-duotone-control__unset-indicator"></span></div>
                        ) : (
                            <img className={`vayu_blocks_hstack_animation_panel_image ${getAnimationClass(imageselectedAnimation)}`} src={image} alt={name} />
                        )}
                            <Text>{__(imagename)}</Text>
                        </HStack>
                    </Button>
                </ToolsPanelItem>

                <ToolsPanelItem
                    className="vayu_blocks_animation_toolspanel_item"
                    hasValue={() => !!mask_shapeValue}
                    label={__('Mask Shape')}
                    onDeselect={() => handlemask_shapeClick('none')}
                    isShownByDefault
                >
                    <Button
                        ref={setmask_shapePopoverAnchor}
                        onClick={mask_shapetoggleVisible}
                        className={`block-editor-panel-animation-settings__dropdown ${ismask_shapeVisible ? 'is-open' : ''}`}
                    >
                        <HStack alignment="left">
                        {mask_shapeselected === 'none' ? (
                             <div data-wp-c16t="true" data-wp-component="Flex" class="components-flex ff-ad-ec-a-ebdfba-spl71z e19lxcc00"><span class="component-color-indicator block-editor-duotone-control__unset-indicator"></span></div>
                        ) : (
                            <img style={{maskImage: `url(${getmaskImagePath(mask_shapeselected)})`}} className={`vayu_blocks_hstack_animation_panel_image`} src={image} alt={name} />
                        )}
                            <Text>{__(mask_shapename)}</Text>
                        </HStack>
                    </Button>
                </ToolsPanelItem>

            </ToolsPanel>

            {isVisible && (
                <Popover
                    placement="left-start"
                    className='vayu_blocks_toolspanel_items_popover'
                    anchor={popoverAnchor}
                    onClose={() => setIsVisible(false)}
                    offset={35}
                    resize
                >
                    <div className='vayu_blocks_div_animation'>
                        <h4>{__('3D Effect')}</h4>
                        <p>{__('Select a 3D animation effect for your element.')}</p>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg  vayu_blocks_animation-none ${selectedAnimation === 'none' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('none')} // Update the animation value when clicked
                                title="None"
                            >
                                <RxValueNone style={{margin:'-7px',transform: 'scale(0.6)',background:'none'}} className={`vayu_blocks_animation_panel_svg`} />
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-left' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-left')} // Update the animation value when clicked
                                title="3D Tilt Left"
                            >
                                {/* <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-left-svg`} src={image}/> */}
                                <div className={`vayu_blocks_animation_panel_svg vayu_block_styling-left-svg`}></div>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-right' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-right')} // Update the animation value when clicked
                                title="3D Tilt Right"
                            >
                                <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-right-svg`}/>
                            </Button>

                              <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect3' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect3')} // Update the animation value when clicked
                                title="Depth Shift"
                            >
                                <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect3-svg`}/>
                               </Button>

                           <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect4-left' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect4-left')} // Update the animation value when clicked
                                title="3D Clip-Path Left"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect4-left-svg`}/>
                            </Button>

                             <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect4-right' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect4-right')} // Update the animation value when clicked
                                title="3D Clip-Path Right"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect4-right-svg`}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect10' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect10')} // Update the animation value when clicked
                                title="3D Draft Bit"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect10-svg`}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect7' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect7')} // Update the animation value when clicked
                                title="Tilt Effect"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect7`}/>
                            </Button>

                            <br/>
                            {(selectedAnimation === 'vayu_block_styling-effect3' ||selectedAnimation === 'vayu_block_styling-effect10' ) && (
                                <>
                                    <ColorPanel
                                        colorTool={[
                                            {
                                                active: ['gradient'],
                                                name: 'Wrapper',
                                                value: effectcolor,
                                                attribute: 'color',
                                            }
                                        ]}
                                        handelColorPanel={(value) => onEffectcolorchange(value)}                                       
                                        initialTab="color"
                                    />
                                </>
                            )}
                    </div>
                </Popover>
            )}

            {isimageVisible && (
                <Popover
                    placement="left-start"
                    className='vayu_blocks_toolspanel_items_popover'
                    anchor={imagepopoverAnchor}
                    onClose={() => setIsimageVisible(false)}
                    offset={35}
                    resize
                >
                    <div className='vayu_blocks_div_animation'>
                        <h4>{__('image Animation')}</h4>
                        <p>{__('Select a image animation effect for your element.')}</p>

                            <Button
                                style={{height:'59px'}}
                                className={`vayu_blocks_animation_panel_button_svg  vayu_blocks_animation-none ${imageselectedAnimation === 'none' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('none')} // Update the animation value when clicked
                                title="None"
                            >

                                
                                <RxValueNone style={{margin:'-7px',transform: 'scale(0.6)',background:'none'}} className={`vayu_blocks_animation_panel_svg`} />
                            </Button>

                            <Button
                                style={{display:'inline'}}
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none vayu_blocks_rotate_image_compoents_button ${imageselectedAnimation === 'rotate-image' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('rotate-image')} // Update the animation value when clicked
                                title="rotate image"
                            >
                                {/* <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-left-svg`} src={image}/> */}
                                <div className={`vayu_blocks_animation_panel_svg vayu_blocks_rotate-image_compoents_animation`}></div>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-animation' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-animation')} // Update the animation value when clicked
                                title="clip animation"
                            >
                                <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-animation_compoents_animation`}/>
                            </Button>

                              <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-diagonal-expand' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-diagonal-expand')} // Update the animation value when clicked
                                title="clip diagonal expand"
                            >
                                <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-diagonal-expand_compoents_animation`}/>
                               </Button>

                           <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-starburst' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-starburst')} // Update the animation value when clicked
                                title="clip starburst"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-starburst_compoents_animation`}/>
                            </Button>

                             <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-diamond' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-diamond')} // Update the animation value when clicked
                                title="clip diamond"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-diamond_compoents_animation`}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-diagonal-slide' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-diagonal-slide')} // Update the animation value when clicked
                                title="clip diagonal slide"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-diagonal-slide_compoents_animation`}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-hex-pulse' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-hex-pulse')} // Update the animation value when clicked
                                title="clip hex pulse"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-hex-pulse_compoents_animation`}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-triangle-expand' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-triangle-expand')} // Update the animation value when clicked
                                title="clip triangle expand"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-triangle-expand_compoents_animation`}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-circle-burst' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-circle-burst')} // Update the animation value when clicked
                                title="clip circle burst"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-circle-burst_compoents_animation`}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-zigzag' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-zigzag')} // Update the animation value when clicked
                                title="clip zigzag"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-zigzag_compoents_animation`}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${imageselectedAnimation === 'clip-diamond-expand' ? 'selected' : ''}`}
                                onClick={() => handleimageAnimationClick('clip-diamond-expand')} // Update the animation value when clicked
                                title="clip diamond expand"
                            >
                                 <div  className={`vayu_blocks_animation_panel_svg vayu_blocks_clip-diamond-expand_compoents_animation`}/>
                            </Button>

                            <br/>
                            <br/>
                            
                            {imageselectedAnimation != 'none' && (
                                <>
                                    <SelectControl
                                        label={__('Animation Settings', 'vayu-blocks')}
                                        value={animationsettings}
                                        options={[
                                            { label: __('One Time', 'vayu-blocks'), value: 'one-time' },
                                            { label: __('With Hover', 'vayu-blocks'), value: 'with-hvr' },
                                            { label: __('Without Hover', 'vayu-blocks'), value: 'without-hvr' },
                                        ]}
                                        onChange={(value) => onanimationsettingschange(value)}
                                    />
                                </>
                            )}
                    </div>
                </Popover>
            )}

            {ismask_shapeVisible && (
                <Popover
                    placement="left-start"
                    className='vayu_blocks_toolspanel_items_popover'
                    anchor={mask_shapepopoverAnchor}
                    onClose={() => setIsmask_shapeVisible(false)}
                    offset={35}
                    resize
                >
                    <div className='vayu_blocks_div_animation'>
                        <h4>{__('Mask Shape')}</h4>
                        <p>{__('Select a mask shape for your element.')}</p>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg  vayu_blocks_animation-none ${mask_shapeselected === 'none' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('none')} // Update the animation value when clicked
                                title="None"
                            >
                                <RxValueNone style={{margin:'-7px',transform: 'scale(0.6)',background:'none'}} className={`vayu_blocks_animation_panel_svg`} />
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none vayu_blocks_rotate_image_compoents_button ${mask_shapeselected === 'circle' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('circle')} // Update the animation value when clicked
                                title="Circle"
                            >
                                {/* <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-left-svg`} src={image}/> */}
                                <div  style={{ maskImage: `url(${getmaskImagePath('circle')})` }}  className={`vayu_blocks_animation_panel_svg `}></div>

                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'diamond' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('diamond')} // Update the animation value when clicked
                                title="Diamond"
                            >
                                <div style={{ maskImage: `url(${getmaskImagePath('diamond')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                            </Button>

                              <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'hexagone' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('hexagone')} // Update the animation value when clicked
                                title="Hexagone"
                            >
                                <div style={{ maskImage: `url(${getmaskImagePath('hexagone')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                               </Button>

                           <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'rounded' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('rounded')} // Update the animation value when clicked
                                title="Rounded"
                            >
                                 <div style={{ maskImage: `url(${getmaskImagePath('rounded')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                            </Button>

                             <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'bob1' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('bob1')} // Update the animation value when clicked
                                title="Bob 1"
                            >
                                 <div style={{ maskImage: `url(${getmaskImagePath('bob1')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'bob2' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('bob2')} // Update the animation value when clicked
                                title="Bob 2"
                            >
                                 <div style={{ maskImage: `url(${getmaskImagePath('bob2')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'bob3' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('bob3')} // Update the animation value when clicked
                                title="Bob 3"
                            >
                                 <div style={{ maskImage: `url(${getmaskImagePath('bob3')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${mask_shapeselected === 'bob4' ? 'selected' : ''}`}
                                onClick={() => handlemask_shapeClick('bob4')} // Update the animation value when clicked
                                title="Bob 4"
                            >
                                 <div style={{ maskImage: `url(${getmaskImagePath('bob4')})` }} className={`vayu_blocks_animation_panel_svg `}/>
                            </Button>
                    </div>
                    
                    {mask_shapeselected!=='none' && (
                    <div className='vayu_block_mask_shape_panel'>
                        <ControlPanelControl
                            label={ __( 'Mask Settings', 'vayu-blocks' ) }
                        >
                            <SelectControl
                                label={__('Mask size', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={masksize}
                                variant="minimal"
                                options={[
                                    { label: __('Auto', 'vayu-blocks'), value: 'auto' },
                                    { label: __('Contain', 'vayu-blocks'), value: 'contain' },
                                    { label: __('Cover', 'vayu-blocks'), value: 'cover' },
                                ]}
                                onChange={(value) => onmaskSizeChange(value)}
                            />
                            <br/>
                            <SelectControl
                                label={__('Mask Position', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={maskposition}
                                options={[
                                    { label: __('Center Top', 'vayu-blocks'), value: 'center top' },
                                    { label: __('Center Center', 'vayu-blocks'), value: 'center center' },
                                    { label: __('Center Bottom', 'vayu-blocks'), value: 'center bottom' },
                                    { label: __('Left Top', 'vayu-blocks'), value: 'left top' },
                                    { label: __('Left Center', 'vayu-blocks'), value: 'left center' },
                                    { label: __('Left Right', 'vayu-blocks'), value: 'left right' },
                                    { label: __('Right Top', 'vayu-blocks'), value: 'right top' },
                                    { label: __('Right Center', 'vayu-blocks'), value: 'right center' },
                                    { label: __('Right Right', 'vayu-blocks'), value: 'right right' },
                                ]}
                                onChange={(value) => onmaskpositionchange( value)}
                            />
                            <br/>
                            <SelectControl
                                label={__('Mask Repeat', 'vayu-blocks')}
                                __nextHasNoMarginBottom
                                value={maskrepeat}
                                options={[
                                    { label: __('No Repeat', 'vayu-blocks'), value: 'no-repeat' },
                                    { label: __('Repeat', 'vayu-blocks'), value: 'repeat' },
                                    { label: __('Repeat-X', 'vayu-blocks'), value: 'repeat-x' },
                                    { label: __('Repeat-Y', 'vayu-blocks'), value: 'repeat-y' },
                                ]}
                                onChange={(value) => onmaskrepeatChange(value)}
                            />

                        </ControlPanelControl>
                        </div>
                    )}
                    

                </Popover>

                
            )}

        </div>
    );
};

export default WrapperAnimationPanel;