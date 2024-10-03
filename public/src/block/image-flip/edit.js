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

    // Determine the borderRadius based on condition
    const borderRadiusback = attributes.backimageborderradiuscircle === 'circle' 
    ? '50%' 
    : `${attributes.backimageborderRadius.top} ${attributes.backimageborderRadius.right} ${attributes.backimageborderRadius.bottom} ${attributes.backimageborderRadius.left}`;

    const vayu_block_flip_box_style_back = {
          // Apply background based on the selected background option
          ...(attributes.backbackgroundoption === 'color' && {
            background: attributes.backoverlaycolor,
        }),

        ...(attributes.backbackgroundoption === 'image' && {
            backgroundImage: `url(${attributes.backimage})`,
            backgroundSize: attributes.backimagecover,          // Applies 'cover', 'contain', or other values
            backgroundPosition: attributes.backimageposition,   // Applies the positioning value, like 'center', 'top', etc.
            backgroundRepeat: attributes.backimagerepeat,       // Applies 'no-repeat', 'repeat', etc.
        }),

        borderTop: `${attributes.backimageborder.topwidth} ${attributes.backimageborder.topstyle} ${attributes.backimageborder.topcolor}`,
        borderBottom: `${attributes.backimageborder.bottomwidth} ${attributes.backimageborder.bottomstyle} ${attributes.backimageborder.bottomcolor}`,
        borderLeft: `${attributes.backimageborder.leftwidth} ${attributes.backimageborder.leftstyle} ${attributes.backimageborder.leftcolor}`,
        borderRight: `${attributes.backimageborder.rightwidth} ${attributes.backimageborder.rightstyle} ${attributes.backimageborder.rightcolor}`,

        borderRadius: borderRadiusback,

        ...(view === 'Desktop' && {
            alignItems: (() => {
                const [vertical] = attributes.backoverlayalignment.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.backoverlayalignment.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),
        
        ...(view === 'Tablet' && {
            alignItems: (() => {
                const [vertical] = attributes.backoverlayalignmenttablet.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.backoverlayalignmenttablet.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),

        ...(view === 'Mobile' && {
            alignItems: (() => {
                const [vertical] = attributes.backoverlayalignmentmobile.split(' ');
                return vertical === 'center' ? 'center' :
                       vertical === 'top' ? 'self-start' :
                       vertical === 'bottom' ? 'self-end' : 'center';
            })(),
            justifyContent: (() => {
                const [, horizontal] = attributes.backoverlayalignmentmobile.split(' ');
                return horizontal === 'center' ? 'center' :
                       horizontal === 'left' ? 'flex-start' :
                       horizontal === 'right' ? 'flex-end' : 'center';
            })(),
        }),

    }
  
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

    const classname = (variablereturn) => {
        let backclass = '';
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
    
        return ''; // Default case if variablereturn doesn't match
    };

    
    return (
        <>
       
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

                    <div  className={`vayu_blocks_image_flip_wrapper`}>

                        <div className={`vayu_blocks_flip-box-inner ${classname('inner')}`}   >             
                            <div 
                                className={`vayu_blocks_flip-box-front`} 
                                style={vayu_block_flip_box_style_front}
                            >
                                <div className="vayu_blocks_inner_content ">
                                    <InnerBlocks 
                                        template={image_flip_template} 
                                    />
                                </div>
                            </div> 
            
                            <div 
                                className={`vayu_blocks_flip-box-back ${classname('back')}`} 
                                style={vayu_block_flip_box_style_back}
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