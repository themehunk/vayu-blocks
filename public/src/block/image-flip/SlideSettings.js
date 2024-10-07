import React, { Fragment, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    TextareaControl,
    TextControl,
    SelectControl,
    __experimentalToolsPanel as ToolsPanel,
    FocalPointPicker,
    DuotonePicker,
    PanelRow
} from '@wordpress/components';
import { dispatch, select, useSelect } from '@wordpress/data';
import Vayu_Block_ToggleGroupControl from '../../components/wp-default-compoents/ToggleGroupControl/Vayu_Block_Toggle';


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
                    { value: 'front', label: 'Front Block' },
                    { value: 'back', label: 'Back Block' },
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
                        ]}
                        onChange={(value) => setAttributes({ imagehvreffect: value })}
                    />
                </PanelBody>
                

            </div>
    );
};

export default SlideSettings;
