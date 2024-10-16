import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import './editor.scss';

const edit = ({ attributes, setAttributes,isSelected}) => {

    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    // Utility function to generate a unique ID
    const generateUniqueId = () => {
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
    
        height:'100%',

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

    function classname(variablereturn) {
        let backclass = ''; // Define backclass if needed
        let frontclass = ''; // Define frontclass if needed
    
    
        let innerclass = ''
    
        if(attributes.imagehvreffect==='flip'){
            if(attributes.flipside=== 'left'){
                innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-front-left';
            }else if(attributes.flipside === 'right'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_flip-front';
            } else if(attributes.flipside === 'top'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_flip-back'
            } else if(attributes.flipside==='bottom'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_flip-back-bottom';
            }
        } else if(attributes.imagehvreffect==='flip-z'){
            innerclass='vayu_blocks_flip-box-inner_animation_div_flip-z';
        }else if(attributes.imagehvreffect==='flip-x'){
            innerclass='vayu_blocks_flip-box-inner_animation_div_flip-x';
        }else if(attributes.imagehvreffect==='zoom-in'){
            innerclass='vayu_blocks_flip-box-inner_animation_div_zoom-in';
        }else if(attributes.imagehvreffect==='zoom-out'){
            innerclass='vayu_blocks_flip-box-inner_animation_div_zoom-out';
        }else if(attributes.imagehvreffect==='fade-in'){
            innerclass='vayu_blocks_flip-box-inner_animation_div_fade-in';
        } else if(attributes.imagehvreffect === 'slide'){
            if(attributes.flipside=== 'left'){
                innerclass = 'vayu_blocks_flip-box-inner_animation_div_slide_animation-left';
            }else if(attributes.flipside === 'right'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_slide_animation-right';
            } else if(attributes.flipside === 'top'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_slide_animation-top'
            } else if(attributes.flipside==='bottom'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_slide_animation-bottom';
            }
        } else if(attributes.imagehvreffect === 'push'){
            if(attributes.flipside=== 'left'){
                innerclass = 'vayu_blocks_flip-box-inner_animation_div_push_animation-left';
            }else if(attributes.flipside === 'right'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_push_animation-right';
            } else if(attributes.flipside === 'top'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_push_animation-top'
            } else if(attributes.flipside==='bottom'){
                innerclass='vayu_blocks_flip-box-inner_animation_div_push_animation-bottom';
            }
        }


        // Append '-dbox' class if attributes.dbox is truthy
        // AND the current imagehvreffect is NOT one of the specified effects
        if (attributes.dbox && 
            !(attributes.imagehvreffect === 'zoom-in' || 
              attributes.imagehvreffect === 'zoom-out' || 
              attributes.imagehvreffect === 'fade-in'|| 
              attributes.imagehvreffect === 'slide'|| 
              attributes.imagehvreffect === 'push')) {
            innerclass += '-dbox';
        }
    
        // Return the appropriate class based on the variablereturn argument
        switch (variablereturn) {
            case 'inner':
                return innerclass;
            case 'back':
                return backclass; // Define backclass if needed
            case 'front':
                return frontclass; // Define frontclass if needed
            default:
                return ''; // Default case
        }
    }


    const image_flip_template = [
        ['vayu-blocks/flip-wrapper', {
            className: `vayu_blocks_flip-box-front ${classname('front')}`,
            flipSide: 'front',
            backgroundColor:'#b1c5a4',
        }],
        ['vayu-blocks/flip-wrapper', {
            className: `vayu_blocks_flip-box-back ${classname('back')}`,
            flipSide: 'back',
            backgroundColor:'#b5bdbc',
        }], 
    ];

    return (
        <>
       
            <PanelSettings attributes={attributes} setAttributes={setAttributes} isSelected={isSelected}/>
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

                     <div  className={`vayu_blocks_image_flip_wrapper`} style={vayu_block_flip_box_style_front}>
 
                              
                        <div className={`vayu_blocks_flip-box-inner ${(attributes.selectedanimation) ? classname('inner') : ''}`}>

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