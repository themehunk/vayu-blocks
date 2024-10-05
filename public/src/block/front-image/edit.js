import React, { useEffect, useRef } from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';


const edit = (props) => {
    const { attributes, setAttributes} = props;

    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

// Utility function to generate a unique ID
const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 (numbers + letters)
    const randomPart = Math.random().toString(36).substring(2, 10); // Generate random alphanumeric string
    return `${timestamp}-${randomPart}`; // Combine timestamp and random part for uniqueness
};

    
    // Ensure the uniqueId is set if it's not
    if (!attributes.uniqueId) {
        setAttributes({ uniqueId: generateUniqueId() });
    }

    // Determine the borderRadius based on condition
    const borderRadius = attributes.imageborderradiuscircle === 'circle' 
    ? '50%' 
    : `${attributes.imageborderRadius.top} ${attributes.imageborderRadius.right} ${attributes.imageborderRadius.bottom} ${attributes.imageborderRadius.left}`;


    //overlay wrapper style
    const vayu_block_flip_box_style_front = {
        

         // Apply background based on the selected background option
        ...(attributes.backgroundoption === 'color' && {
            background: attributes.overlaycolor,
        }),

        ...(attributes.backgroundoption === 'image' && {
            backgroundImage: `url(${attributes.image})`,
            backgroundSize: attributes.imagecover,          // Applies 'cover', 'contain', or other values
            backgroundPosition: attributes.imageposition,   // Applies the positioning value, like 'center', 'top', etc.
            backgroundRepeat: attributes.imagerepeat,       // Applies 'no-repeat', 'repeat', etc.
        }),

        borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
        borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
        borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
        borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,

        borderRadius: borderRadius,

        ...(view === 'Desktop' && {
            alignItems: (() => {
                const [vertical] = attributes.overlayalignment.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.overlayalignment.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),
        
        ...(view === 'Tablet' && {
            alignItems: (() => {
                const [vertical] = attributes.overlayalignmenttablet.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.overlayalignmenttablet.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),

        ...(view === 'Mobile' && {
            alignItems: (() => {
                const [vertical] = attributes.overlayalignmentmobile.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.overlayalignmentmobile.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),

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

    const front_image_template2 = [
        ['vayu-blocks/advance-heading', {
            fontVariant: 'bold',
            fontFamily: 'unset',
            content: 'Image Flip Title...'
        }],
    
        ['vayu-blocks/advance-button', {
            buttonbackgroundColor: '#4e75ff',
            buttonbackgroundColorHvr: '#2F3DA3',
            buttonpaddingTop: 10,
            buttonpaddingRight: 50,
            buttonpaddingBottom: 10,
            buttonpaddingLeft: 50,
            align: 'center',
        }],
    ];
    
    
    return (
        <>
       
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-front-image-main-container" id={`${attributes.uniqueId}`}>

                    <div  className={`vayu_blocks_front_image_wrapper`} >
      
                        
                        <div 
                            className={`vayu_blocks_image-box-front`} 
                            style={vayu_block_flip_box_style_front}
                        >
                        
                            <InnerBlocks 
                                template={front_image_template2} 
                            />
                                
                        </div>
                            
                    </div>

                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;