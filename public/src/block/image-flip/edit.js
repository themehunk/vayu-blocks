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

    const classname = (variablereturn) => {
        let backclass = '';
        let frontclass = '';
        let innerclass = '';
    
        if (attributes.imagehvreffect === 'flip-front') {
            backclass = 'vayu_blocks_rotating_animation_back_flip-front';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-front';
        } 
        else if (attributes.imagehvreffect === 'flip-front-left') {
            backclass = 'vayu_blocks_rotating_animation_back_flip-front-left';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-front-left';
        } 
        else if (attributes.imagehvreffect === 'flip-back') {
            backclass = 'vayu_blocks_rotating_animation_back_flip-back';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-back';
        } 
        else if (attributes.imagehvreffect === 'flip-back-bottom') {
            backclass = 'vayu_blocks_rotating_animation_back_flip-back-bottom';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-back-bottom';
        }
        else if (attributes.imagehvreffect === 'flip-z') {
            backclass = 'vayu_blocks_rotating_animation_back_flip_z';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-z';
        }else if (attributes.imagehvreffect === 'flip-x') {
            backclass = 'vayu_blocks_rotating_animation_back_flip_x';
            innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-x';
        }
    
        // Return the appropriate class based on the variablereturn argument
        if (variablereturn === 'inner') {
            return innerclass;
        }
    
        if (variablereturn === 'back') {
            return backclass;
        }

        if (variablereturn === 'front') {
            return frontclass;
        }
    
        return ''; // Default case if variablereturn doesn't match
    };

  
    const image_flip_template = [
        ['vayu-blocks/front-image', {
            className: `vayu_blocks_flip-box-front ${classname('front')}`
        }],
        ['vayu-blocks/front-image', {
            className: `vayu_blocks_flip-box-back ${classname('back')}`
        }], 
    ];
     
    return (
        <>
       
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

                     <div  className={`vayu_blocks_image_flip_wrapper`}>
 
                        <div className={`vayu_blocks_flip-box-inner  ${classname('inner')}`}  style={vayu_block_flip_box_style_front} >             
                          
                                <InnerBlocks 
                                    template={image_flip_template} 
                                />
                        </div>
                            
                    </div> 

                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;