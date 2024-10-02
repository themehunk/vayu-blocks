import React, { useEffect, useRef } from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import noimage from '../../../../inc/assets/img/no-image.png';
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
//        const timestamp = Date.now().toString(36); // Convert current timestamp to base36 (numbers + letters)
        const randomPart = Math.random().toString(36).substring(2, 10); // Generate random alphanumeric string
        return `-${randomPart}`;
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
    const vayu_block_overlay_style = {
        background:attributes.overlaycolor,
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

    //main container image style
    const vayu_blocks_image_settings = {
        ...((attributes.imagehvreffect === 'flip-front' || attributes.imagehvreffect === 'flip-back' ) && {
            backfaceVisibility: 'hidden',
        }),

        objectFit: attributes.imagecover,  // assuming this controls object-fit (e.g., 'cover', 'contain', etc.)
        // Apply focal point if it exists, default to center
        objectPosition: `${attributes.focalPoint?.x * 100 || 50}% ${attributes.focalPoint?.y * 100 || 50}%`,
         // Apply aspect ratio if it exists
        aspectRatio: attributes.imageaspectratio !== 'none' 
        ? (attributes.imageaspectratio === 'original' 
            ? 'auto' // Maintain original aspect ratio
            : attributes.imageaspectratio.replace('/', '/')) 
        : 'auto',

        borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
        borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
        borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
        borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,


        filter: attributes.duotone && attributes.duotone.length > 1 ? `url(${attributes.duotone})` : '',

        borderRadius: borderRadius,

    };
    
    const image_flip_template = [
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
       
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

                    <div  className={`vayu_blocks_image_flip_wrapper`}>

                        <div className={`vayu_blocks_image_flip_image-container`}   >             
                            <div 
                                className={`vayu_blocks_overlay_main_wrapper`} 
                                style={vayu_block_overlay_style}
                            >
                                <div className="vayu_blocks_inner_content">
                                    <InnerBlocks 
                                        template={image_flip_template} 
                                    />
                                </div>
                            </div> 
            
                            <div 
                                className={`vayu_blocks_overlay_main_wrapper back-main-container`} 
                                style={vayu_block_overlay_style}
                            >
                                <div className="vayu_blocks_inner_content">
                                    <InnerBlocks 
                                        template={image_flip_template} 
                                    />
                                </div>
                            </div> 
                        </div>
                            
                    </div>

                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;