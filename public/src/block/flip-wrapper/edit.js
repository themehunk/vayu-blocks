import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import './editor.scss';
import { useSelect } from '@wordpress/data';

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
                    content:'Image Flip Title...'
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

    return (
        <>
       
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