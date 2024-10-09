import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
} from '@wordpress/components';
import {
	HoverControl,
	BackgroundSelectorControl,
} from '../../components/index.js';
import Vayu_Block_ToggleGroupControl from '../../components/wp-default-compoents/ToggleGroupControl/Vayu_Block_Toggle';
import { dispatch, select, useSelect } from '@wordpress/data';

const SlideSettings = ({ attributes, setAttributes }) => {

    const [ hover, setHover ] = useState( 'normal' );

    const [blockValue, setBlockValue] = useState(''); // To manage the toggle state (front/back)

    // Get the currently selected block
    const selectedBlock = useSelect((select) => {
        return select('core/block-editor').getSelectedBlock();
    });

    // Handle the toggle change event
    const handleToggleChange = (value) => {
        setBlockValue(value);

        if (selectedBlock) {

            // Get all blocks
            const allBlocks = select('core/block-editor').getBlocks();

            // Find the parent block that contains the selected block
            const parentBlock = allBlocks.find(block => {
                return block.innerBlocks.some(innerBlock => innerBlock.clientId === selectedBlock.clientId);
            });

            if (parentBlock) {

                // If toggle value is 'flip', move to the parent flip block
                if (value === 'flip' && parentBlock.name === 'vayu-blocks/image-flip') {
                    dispatch('core/block-editor').selectBlock(parentBlock.clientId);
                } 
                // If toggle value is 'back', move to the second inner block
                else if (value === 'back') {
                    const backBlock = parentBlock.innerBlocks[1]; // Get second inner block
                    if (backBlock) {
                        dispatch('core/block-editor').selectBlock(backBlock.clientId);
                    }
                }
                // If toggle value is 'back', move to the second inner block
                else if (value === 'front') {
                    const backBlock = parentBlock.innerBlocks[0]; // Get second inner block
                    if (backBlock) {
                        dispatch('core/block-editor').selectBlock(backBlock.clientId);
                    }
                }
            }
        }
    };

    // Assuming you're inside your functional component
    const options = [
        { value: 'flip', label: 'Flip Block' },
    ];

    // Conditionally add options based on the className attribute
    if (attributes.className === 'vayu_blocks_flip-box-back ') {
        options.push({ value: 'front', label: 'Front Block' });
    }

    if (attributes.className === 'vayu_blocks_flip-box-front ') {
        options.push({ value: 'back', label: 'Back Block' });
    }

    return (

        <>
        {attributes.parentBlock === 'vayu-blocks/image-flip' && (
            <div class="togglegroupcontrol_vayu_block">
            <Vayu_Block_ToggleGroupControl
                label={__('Show Block', 'vayu-blocks')}
                onChange={handleToggleChange}
                isBlock={true}
                value={blockValue}
                __nextHasNoMarginBottom={true}
                options={options}
            />

            </div> 
        )}

        <PanelBody title={ __( 'Background', 'vayu-blocks' ) }
                        initialOpen={ false }
                        className="th-button-panel"
                    > 

                    <HoverControl value={ hover }
                        options={[
                            {
                                label: __( 'Normal', 'vayu-blocks' ),
                                value: 'normal'
                            },
                            {
                                label: __( 'Hover', 'vayu-blocks' ),
                                value: 'hover'
                            }
                        ]}
                        onChange={ setHover } />
                    
                    { 'normal' ===  hover &&  (
                    
                    <BackgroundSelectorControl
                                backgroundType={ attributes.backgroundType }
                                backgroundColor={ attributes.backgroundColor }
                                image={ attributes.backgroundImage }
                            //	gradient={ attributes.backgroundGradient }
                                focalPoint={ attributes.backgroundPosition }
                                backgroundAttachment={ attributes.backgroundAttachment }
                                backgroundRepeat={ attributes.backgroundRepeat }
                                backgroundSize={ attributes.backgroundSize }
                                changeBackgroundType={ value => setAttributes({ backgroundType: value }) }
                                changeImage={ media => {
                                    setAttributes({
                                        backgroundImage: pick( media, [ 'id', 'url' ])
                                    });
                                }}
                                removeImage={ () => setAttributes({ backgroundImage: undefined })}
                                changeColor={ value => setAttributes({ backgroundColor: value })}
                                changeGradient={ value => setAttributes({ backgroundGradient: value }) }
                                changeBackgroundAttachment={ value => setAttributes({ backgroundAttachment: value })}
                                changeBackgroundRepeat={ value => setAttributes({ backgroundRepeat: value })}
                                changeFocalPoint={ value => setAttributes({ backgroundPosition: value }) }
                                changeBackgroundSize={ value => setAttributes({ backgroundSize: value }) }
                            />
                        
                    ) || 'hover' ===  hover && (
                        <>
                        <BackgroundSelectorControl
                        backgroundType={ attributes.backgroundTypeHvr }
                        backgroundColor={ attributes.backgroundColorHvr }
                        image={ attributes.backgroundImageHvr }
                        gradient={ attributes.backgroundGradientHvr }
                        focalPoint={ attributes.backgroundPositionHvr }
                        backgroundAttachment={ attributes.backgroundAttachmentHvr }
                        backgroundRepeat={ attributes.backgroundRepeatHvr }
                        backgroundSize={ attributes.backgroundSizeHvr }
                        changeBackgroundType={ value => setAttributes({ backgroundTypeHvr: value }) }
                        changeImage={ media => {
                            setAttributes({
                                backgroundImageHvr: pick( media, [ 'id', 'url' ])
                            });
                        }}
                        removeImage={ () => setAttributes({ backgroundImageHvr: undefined })}
                        changeColor={ value => setAttributes({ backgroundColorHvr: value })}
                        changeGradient={ value => setAttributes({ backgroundGradientHvr: value }) }
                        changeBackgroundAttachment={ value => setAttributes({ backgroundAttachmentHvr: value })}
                        changeBackgroundRepeat={ value => setAttributes({ backgroundRepeatHvr: value })}
                        changeFocalPoint={ value => setAttributes({ backgroundPositionHvr: value }) }
                        changeBackgroundSize={ value => setAttributes({ backgroundSizeHvr: value }) }
                    />
                    
                    </>
                    
                    )}	
                    
        </PanelBody>

        </>
    );
};

export default SlideSettings;
