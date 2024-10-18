import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { __experimentalHStack as HStack,
     __experimentalText as Text,
      __experimentalToolsPanel as ToolsPanel,
       __experimentalToolsPanelItem as ToolsPanelItem,
       SelectControl,
       Button, Popover,
      } from '@wordpress/components';
import { RxValueNone } from "react-icons/rx";

const ImageAnimation = ({ imageanimationValue, onimageAnimationChange, image , onanimationsettingschange,animationsettings }) => {
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
        { label: __('None', 'vayu-blocks'), value: 'none' },
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
    
    return (
        <div className="vayu_blocks_animation_panel">
            <ToolsPanel label={__('Image Animation')} className="vayu_block_animation_name">
                <ToolsPanelItem
                    className="vayu_blocks_animation_toolspanel_item"
                    hasValue={() => !!imageanimationValue}
                    label={__('Animation')}
                    onDeselect={() => onimageAnimationChange(undefined)}
                    isShownByDefault
                >
                    <Button
                        ref={setimagePopoverAnchor}
                        onClick={imagetoggleVisible}
                        className={`block-editor-panel-animation-settings__dropdown ${isimageVisible ? 'is-open' : ''}`}
                    >
                        <HStack alignment="left">
                        {imageselectedAnimation === 'none' ? (
                            <RxValueNone className="vayu_blocks_hstack_animation_panel_image" />
                        ) : (
                            <img className={`vayu_blocks_hstack_animation_panel_image ${getAnimationClass(imageselectedAnimation)}`} src={image} alt={name} />
                        )}
                            <Text>{__(imagename)}</Text>
                        </HStack>
                    </Button>
                </ToolsPanelItem>
            </ToolsPanel>

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
                                <RxValueNone style={{margin:'-7px',height:'45px'}} className={`vayu_blocks_animation_panel_svg`} />
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
        </div>
    );
};

export default ImageAnimation;
