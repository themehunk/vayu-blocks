import React, { useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    SelectControl,
    __experimentalToolsPanel as ToolsPanel,
    ToggleControl
} from '@wordpress/components';
import { dispatch, select, useSelect } from '@wordpress/data';
import Vayu_Block_ToggleGroupControl from '../../components/wp-default-compoents/ToggleGroupControl/Vayu_Block_Toggle';
import { FcUndo } from "react-icons/fc";
import { FcRedo } from "react-icons/fc";

const SlideSettings = ({ attributes, setAttributes }) => {

    const selectedBlock = useSelect((select) => {
        return select('core/block-editor').getSelectedBlock();
    });

    const [blockValue, setBlockValue] = useState('');

    // Handle toggle change event
    const handleToggleChange = (value) => {
        setBlockValue(value);

        // Check if a block is selected
        if (selectedBlock) {
            // Get all inner blocks of the selected block
            const innerBlocks = select('core/block-editor').getBlocks(selectedBlock.clientId);

            // Select the appropriate inner block based on the toggle value
            if (value === 'front') {
                // Assuming the first inner block is for the front
                const frontBlock = innerBlocks[0]; 
                if (frontBlock) {
                    dispatch('core/block-editor').selectBlock(frontBlock.clientId);
                }
            } else if (value === 'back') {
                // Assuming the second inner block is for the back
                const backBlock = innerBlocks[1]; 
                if (backBlock) {
                    dispatch('core/block-editor').selectBlock(backBlock.clientId);
                }
            }
        }
    };
    

    return (
        
            <div class="vayu_blocks_image-flip-settings_main">

                
            <div class="togglegroupcontrol_vayu_block">
            <Vayu_Block_ToggleGroupControl
                label={__('Show Block', 'vayu-blocks')}
                onChange={handleToggleChange}
                isBlock={true}
                value={blockValue}
                __nextHasNoMarginBottom={true}
                options={[
                    { value: 'front', label: (
                        <span className='vayu_blocks_undo_front_image'>
                           <FcUndo />
                        </span>
                    ) },
                    { value: 'back', label: (
                        <span className='vayu_blocks_undo_front_image'>
                           <FcRedo/>
                        </span>
                    ) },
                ]}
            />

              </div>      

                {/* Overlay and animation effect  */}
                <PanelBody title={__('Advance Hover Animation','vayu-blocks')} initialOpen={true}>
                    <SelectControl
                        label={__('Image Effect', 'vayu-blocks')}
                        value={attributes.imagehvreffect}
                        options={[
                                { label: __('None', 'vayu-blocks'), value: 'none' },
                                { label: __('Flip Right', 'vayu-blocks'), value: 'flip-front' },
                                { label: __('Flip Left', 'vayu-blocks'), value: 'flip-front-left' },
                                { label: __('Flip Top', 'vayu-blocks'), value: 'flip-back' },
                                { label: __('Flip Bottom', 'vayu-blocks'), value: 'flip-back-bottom' },
                                { label: __('Flip Left Top', 'vayu-blocks'), value: 'flip-z' },
                                { label: __('Flip Right Top', 'vayu-blocks'), value: 'flip-x' },
                                { label: __('Zoom in', 'vayu-blocks'), value: 'zoom-in' },
                                { label: __('Zoom out', 'vayu-blocks'), value: 'zoom-out' },
                                { label: __('Fade In', 'vayu-blocks'), value: 'fade-in' },
                        ]}
                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                    />
                    
                    {attributes.imagehvreffect && !(attributes.imagehvreffect === 'zoom-in' || 
              attributes.imagehvreffect === 'zoom-out' || 
              attributes.imagehvreffect === 'fade-in') && (
                         <ToggleControl
                            className='vayu_blocks_togglecontrol'
                            label={__('3D Box animation', 'vayu-blocks')}
                            checked={attributes.dbox}
                            onChange={(value) =>  setAttributes({dbox:value})}
                        />
                    )}
                </PanelBody>
                
            </div>
    );
};

export default SlideSettings;
