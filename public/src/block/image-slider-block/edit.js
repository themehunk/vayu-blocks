import React from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { InnerBlocks } from '@wordpress/block-editor';


const edit = ({ attributes, setAttributes }) => {

    const REVIEW_TEMPLATE = [
        [
            'core/image', 
            {
                onSelect: (media) => setAttributes({ image: media.url }),
                url: attributes.image,  // This ensures the selected image is displayed in the block
            }
        ]
    ];
    
    
    

    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes}>
                
                <div  class="image">
                    <img src={attributes.image} alt="" />
                </div>
{/* 
             <InnerBlocks template={REVIEW_TEMPLATE} templateLock="all" /> */}
            
            </AdvanceSettings>
        </>
    );
};

export default edit;
