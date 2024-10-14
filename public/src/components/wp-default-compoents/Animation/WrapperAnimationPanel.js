import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, Button, Popover, SelectControl } from '@wordpress/components';
import { __experimentalHStack as HStack, __experimentalText as Text } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __experimentalToolsPanel as ToolsPanel, __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';
import { BsImageFill } from "react-icons/bs";
import { RxValueNone } from "react-icons/rx";

const WrapperAnimationPanel = ({ animationValue, onAnimationChange, animationOptions,image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [selectedAnimation, setSelectedAnimation] = useState(animationValue || 'none'); // Default to 'none' if no value

    // Function to toggle the visibility of the popover
    const toggleVisible = () => {
        setIsVisible((prev) => !prev);
    };

    const handleAnimationClick = (animation) => {
        setSelectedAnimation(animation);
        onAnimationChange(animation); // Update the parent component with the new animation value
    };

    let name = '';
    const animationoptions = [
        { label: __('None', 'vayu-blocks'), value: 'none' },
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

    return (
        <div className="vayu_blocks_animation_panel">
            <ToolsPanel label={__('3D Animation')} className="vayu_block_animation_name">
                <ToolsPanelItem
                    className="vayu_blocks_animation_toolspanel_item"
                    hasValue={() => !!animationValue}
                    label={__('Animation')}
                    onDeselect={() => onAnimationChange(undefined)}
                    isShownByDefault
                >
                    <Button
                        ref={setPopoverAnchor}
                        onClick={toggleVisible}
                        className={`block-editor-panel-animation-settings__dropdown ${isVisible ? 'is-open' : ''}`}
                    >
                        <HStack alignment="left">
                            <Text>{__(name)}</Text>
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
                                <RxValueNone className={`vayu_blocks_animation_panel_svg`} />
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-left' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-left')} // Update the animation value when clicked
                                title="3D Tilt Left"
                            >
                                <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-left-svg`} src={image}/>
                            </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-right' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-right')} // Update the animation value when clicked
                                title="3D Tilt Right"
                            >
                               <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-right-svg`} src={image}/>
                            </Button>

                              <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect3' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect3')} // Update the animation value when clicked
                                title="Depth Shift"
                            >
                               <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect3-svg`} src={image}/>
                               </Button>

                           <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect4-left' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect4-left')} // Update the animation value when clicked
                                title="3D Clip-Path Left"
                            >
                                <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect4-left-svg`} src={image}/>
                            </Button>

                             <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect4-right' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect4-right')} // Update the animation value when clicked
                                title="3D Clip-Path Right"
                            >
                                <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect4-right-svg`} src={image}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect10' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect10')} // Update the animation value when clicked
                                title="3D Draft Bit"
                            >
                                <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect10-svg`} src={image}/>
                                </Button>

                            <Button
                                className={`vayu_blocks_animation_panel_button_svg vayu_blocks_animation-none ${selectedAnimation === 'vayu_block_styling-effect7' ? 'selected' : ''}`}
                                onClick={() => handleAnimationClick('vayu_block_styling-effect7')} // Update the animation value when clicked
                                title="Tilt Effect"
                            >
                                <img className={`vayu_blocks_animation_panel_svg vayu_block_styling-effect7`} src={image}/>
                            </Button>

                    </div>
                </Popover>
            )}
        </div>
    );
};

export default WrapperAnimationPanel;
