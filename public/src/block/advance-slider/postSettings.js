import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const postSettings = ( { attributes, setAttributes } ) => {
    const { autoplay, navigation, pagination,   dynamicBullets,dynamicMainBullets,centeredSlides,grabCursor,initialSlide,simulateTouch,loop,slidesPerView,spaceBetween,freeMode,mousewheel,delay,disableOnInteraction ,effect,scrollbar} = attributes;



    const vayu_blocks_handle_effect = (value)=> {
        if(value!='none'){
            setAttributes( { effect: value,loop:false })
        }
        setAttributes( { effect: value })
    }

    return (
        <PanelBody title={ __( 'Settings', 'vayu_blocks' ) }>

        <PanelRow>
            <RangeControl
                label={ __( 'Initial Slide', 'vayu_blocks' ) }
                value={ initialSlide }
                min={0}
                max={10}
                onChange={ ( value ) =>
                    setAttributes( { initialSlide: value } )
                }
                help={ __(
                    'Select the starting slide. The slide index starts from 0.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow>

        <PanelRow>
        <RangeControl
            label={ __( 'Space Between', 'vayu_blocks' ) }
            value={ spaceBetween }
            min={0} // Minimum should be 1 since you can't show 0 slides
            max={200}
            onChange={ ( value ) =>
                setAttributes( { spaceBetween: value } )
            }
            help={ __(
                'Select the amount of space (in pixels) between slides. The value should be between 0 and 200.',
                'vayu_blocks'
            ) }
        />

        </PanelRow>

        
        <PanelRow>
        <RangeControl
            label={ __( 'Slides Per View', 'vayu_blocks' ) }
            value={ slidesPerView }
            min={1} // Minimum should be 1 since you can't show 0 slides
            max={10}
            onChange={ ( value ) =>
                setAttributes( { slidesPerView: value } )
            }
            help={ __(
                'Select the number of slides to display at once. The value should be between 1 and 10.',
                'vayu_blocks'
            ) }
        />

        </PanelRow>


        <PanelRow>
            <ToggleControl
                label={ __( 'Autoplay', 'vayu_blocks' ) }
                checked={ autoplay }
                onChange={ ( value ) =>
                    setAttributes( { autoplay: value } )
                }
                help={ __(
                    '“Autoplay” will automatically advance the slides. Note: this is intentionally disabled in the editor, but will affect the front end.'
                ) }
            />
        </PanelRow>
        {autoplay && (
            <>
                   <PanelRow>
                   <RangeControl
                       label={ __( 'Delay', 'vayu_blocks' ) }
                       value={ delay }
                       min={1} // Minimum should be 1 since you can't show 0 slides
                       max={5000}
                       onChange={ ( value ) =>
                           setAttributes( { delay: value } )
                       }
                       help={ __(
                        'Set the delay (in milliseconds) between automatic slide transitions. A value of 1000 means a 1-second delay between slides.',
                        'vayu_blocks'
                    ) }
                   />
                   </PanelRow>

                   <PanelRow>
                    <ToggleControl
                        label={ __( 'Disable On Interaction', 'vayu_blocks' ) }
                        checked={ disableOnInteraction }
                        onChange={ ( value ) =>
                            setAttributes( { disableOnInteraction: value } )
                        }
                        help={ __(
                            'When enabled, autoplay will stop when the user interacts with the slides (e.g., by dragging). This allows users to manually control the slider without it automatically advancing.',
                            'vayu_blocks'
                        ) }
                    />
                </PanelRow>

                   </>
        )}

        <PanelRow>
            <ToggleControl
                label={ __( 'FreeMode', 'vayu_blocks' ) }
                checked={ freeMode }
                onChange={ ( value ) =>
                    setAttributes( { freeMode: value } )
                }
                help={ __(
                    'When enabled, slides can be freely moved without snapping to the nearest slide, allowing for a more fluid experience.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow>
        

        {/* <PanelRow>
            <ToggleControl
                label={ __( 'centeredSlides', 'vayu_blocks' ) }
                checked={ centeredSlides }
                onChange={ ( value ) =>
                    setAttributes( { centeredSlides: value } )
                }
                help={ __(
                    '“Centered Slides” will align the active slide to the center of the container.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow> */}

        
        <PanelRow>
            <ToggleControl
                label={ __( 'Mouse Wheel', 'vayu_blocks' ) }
                checked={ mousewheel } // Fixed the typo here
                onChange={ ( value ) =>
                    setAttributes( { mousewheel: value } )
                }
                help={ __(
                    'Enables slide navigation using the mouse wheel. Scroll up to navigate to the previous slide and down to the next slide.',
                    'vayu_blocks'
                ) }
            />

        </PanelRow>
        
        {/* <PanelRow>
            <ToggleControl
                label={ __( 'GrabCursor', 'vayu_blocks' ) }
                checked={ grabCursor }
                onChange={ ( value ) =>
                    setAttributes( { grabCursor: value } )
                }
                help={ __(
                    '“Grab Cursor” will display a grabbing hand cursor when hovering over the slides.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow> */}
        <PanelRow>
            <ToggleControl
                label={ __( 'SimulateTouch', 'vayu_blocks' ) }
                checked={ simulateTouch }
                onChange={ ( value ) =>
                    setAttributes( { simulateTouch: value } )
                }
                help={ __(
                    '“Simulate Touch” allows users to drag slides using a mouse or touch gestures.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow>
        <PanelRow>
            <ToggleControl
                label={ __( 'Infinite (Loop)', 'vayu_blocks' ) }
                checked={ loop }
                onChange={ ( value ) =>
                    setAttributes( { loop: value } )
                }
                help={ __(
                    'Enable this option to loop back to the first slide after reaching the last slide.',
                    'vayu_blocks'
                ) }
                
            />
        </PanelRow>

        <h4>
            Note: The selected effect will not work if "Infinite" is enabled.`,
        </h4>
        <PanelRow>
            <SelectControl
                label={ __( 'Effect', 'vayu_blocks' ) }
                value={ effect }  // Change from checked to value
                onChange={ ( value ) =>
                    vayu_blocks_handle_effect(value)
                }
                options={ [
                    { label: __( 'None', 'vayu_blocks' ), value: 'none' },
                    { label: __( 'Fade', 'vayu_blocks' ), value: 'fade' },
                    { label: __( 'Coverflow', 'vayu_blocks' ), value: 'coverflow' },
                    { label: __( 'Flip', 'vayu_blocks' ), value: 'flip' },
                ] } // Add options for effects
                help={ __(
                    'Select the transition effect for the slides. Choose from Slide, Fade, Cube, Coverflow, or Flip.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow>

        {(effect==='fade' || effect==='flip') && (
            <h4>With this effect slides per view will wont work.</h4>
        )}

      
        <PanelRow>
            <ToggleControl
                label={ __( 'Navigation', 'vayu_blocks' ) }
                checked={ navigation }
                onChange={ ( value ) =>
                    setAttributes( { navigation: value } )
                }
                help={ __(
                    '“Navigation” will display arrows so user can navigate forward/backward.'
                ) }
            />
        </PanelRow>
        <PanelRow>
            <ToggleControl
                label={ __( 'Pagination', 'vayu_blocks' ) }
                checked={ pagination }
                onChange={ ( value ) =>
                    setAttributes( { pagination: value } )
                }
                help={ __(
                    '“Pagination” will display dots along the bottom for user to click through slides.'
                ) }
            />
        </PanelRow>

        {pagination && (
            <>
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Dynamic Bullets', 'vayu_blocks' ) }
                        checked={ dynamicBullets }
                        onChange={ ( value ) =>
                            setAttributes( { dynamicBullets: value } )
                        }
                        help={ __(
                            'Enable dynamic bullets for pagination, allowing the number of dots to change based on the number of slides.'
                        ) }
                    />
                </PanelRow>
            {dynamicBullets && (
                <PanelRow>
                    <RangeControl
                        label={ __( 'Dynamic Main Bullets', 'vayu_blocks' ) }
                        value={ dynamicMainBullets }
                        min={ 1 } // Minimum should be 1 since you can't show 0 slides
                        max={ 5 }
                        onChange={ ( value ) =>
                            setAttributes( { dynamicMainBullets: value } )
                        }
                        help={ __(
                            'Set the maximum number of main bullets to display in the pagination.',
                            'vayu_blocks'
                        ) }
                    />
                </PanelRow>
                )}
             

            </>
        )}

        <PanelRow>
            <ToggleControl
                label={ __( 'Scroll Bar', 'vayu_blocks' ) }
                checked={ scrollbar }
                onChange={ ( value ) =>
                    setAttributes( { scrollbar: value } )
                }
                help={ __(
                    'Enable this option to show a scrollbar for the slides. The scrollbar allows users to drag and navigate through the slides.',
                    'vayu_blocks'
                ) }
            />
        </PanelRow>
    </PanelBody>
    );
};

export default postSettings;