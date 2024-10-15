import React, { useState } from 'react';
import { InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import './editor.scss';
import { select, useDispatch, useSelect } from '@wordpress/data';
import { FaRegImage } from "react-icons/fa";
import { FcUndo,FcRedo  } from "react-icons/fc";

const edit = ({ attributes, setAttributes,isSelected,clientId}) => {

    // Get the parent block's name or ID
    const parentBlock = useSelect((select) => {
        const { getBlockParents, getBlock } = select('core/block-editor');
        const parentIds = getBlockParents(clientId);
        if (parentIds.length > 0) {
            const parentBlockId = parentIds[0];
            const parentBlockDetails = getBlock(parentBlockId);
            return parentBlockDetails.name; // or return parentBlockId if needed
        }
        return null;
    }, [clientId]);

    setAttributes({parentBlock:parentBlock});

    // Utility function to generate a unique ID
    const generateUniqueId = () => {
        const timestamp = Date.now().toString(36); // Convert current timestamp to base-36
        const randomPart = Math.random().toString(36).substring(2, 8); // Generate random alphanumeric string
        return `id-${timestamp}-${randomPart}`;
    };

    // Ensure the uniqueId is set if it's not
    if (!attributes.uniqueId) {
        setAttributes({ uniqueId: generateUniqueId() });
    }

    const front_image_template = [
        ['vayu-blocks/advance-container'
            , {
                verticalAlignment: 'center',
                isStackedOnMobile: true,
                width: '100%',
                alignItems:'center',
                elementGap:21,
                AlignItem:'center',
            },
              
            [
                ['vayu-blocks/advance-heading', {
                    fontVariant:'bold',
                    fontFamily:'unset',
                    content:'Flip Title...'
                }],

                ['vayu-blocks/advance-button',{
                    buttonbackgroundColor:'#4e75ff',
                    buttonbackgroundColorHvr:'#2F3DA3',
                    buttonpaddingTop: 10,
                    buttonpaddingRight: 50,
                    buttonpaddingBottom: 10,
                    buttonpaddingLeft: 50,
                    align:'center',
                }],
            ]   

        ],
    ];  


    const [blockValue, setBlockValue] = useState('front'); // Default to front side

    // Get the currently selected block
    const selectedBlock = useSelect((select) => {
        return select('core/block-editor').getSelectedBlock();
    });

    const dispatch = useDispatch(); // Get dispatch function

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
                if (value === 'flip' && parentBlock.name === 'vayu-blocks/flip-box') {
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

    return (
        <>
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    label="View Box Flip"
                    onClick={() => handleToggleChange('flip')}
                >
                    <FaRegImage style={{ color: '#6c1bc3', fontSize: '28px' }} />
                </ToolbarButton>

                {attributes.className !== 'vayu_blocks_flip-box-front ' && (
                    <ToolbarButton
                        label="View Front"
                        onClick={() => handleToggleChange('front')}
                    >
                        <FcUndo style={{ color: '#6c1bc3', fontSize: '28px' }} />
                    </ToolbarButton>
                )}

                {attributes.className !== 'vayu_blocks_flip-box-back ' && (
                    <ToolbarButton
                        label="View Back"
                        onClick={() => handleToggleChange('back')}
                    >
                        <FcRedo style={{ color: '#6c1bc3', fontSize: '28px' }} />
                    </ToolbarButton>
                )}
            </ToolbarGroup>
        </BlockControls>


            <PanelSettings attributes={attributes} setAttributes={setAttributes} isSelected={isSelected}/>
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes} clientId={clientId}>
                
                <div className="vayu-blocks-front-image-main-container" id={`${attributes.uniqueId}`}> 
                    <div className={`vayu_blocks_front-image-inner`}>

                        <InnerBlocks 
                            template={front_image_template}  
                        />

                    </div>
                </div>

            </AdvanceSettings>
        </>
    );
};

export default edit;