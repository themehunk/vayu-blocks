import React from 'react';
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
        const randomPart = Math.random().toString(30).substring(3, 10); // Generate random alphanumeric string
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
    // Main overlay wrapper style object
    const vayu_block_overlay_style = {
        background: attributes.overlaycolor,
        borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
        borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
        borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
        borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,
        borderRadius: borderRadius,


        ...(view === 'Desktop' && {
            alignItems : attributes.overlayalignment === 'center' ? 'center' :
                attributes.overlayalignment === 'left' ? 'self-start' :
                attributes.overlayalignment === 'right' ? 'self-end' : 'center',
            justifyContent : attributes.overlayalignmentvertical === 'center' ? 'center' :
                attributes.overlayalignmentvertical === 'start' ? 'flex-start' :
                attributes.overlayalignmentvertical === 'end' ? 'flex-end' : 'center',
        }),

        ...(view === 'Tablet' && {       alignItems : attributes.overlayalignmenttablet === 'center' ? 'center' :
            attributes.overlayalignmenttablet === 'left' ? 'self-start' :
            attributes.overlayalignmenttablet === 'right' ? 'self-end' : 'center',

            justifyContent : attributes.overlayalignmentverticaltablet === 'center' ? 'center' :
                attributes.overlayalignmentverticaltablet === 'start' ? 'flex-start' :
                attributes.overlayalignmentverticaltablet === 'end' ? 'flex-end' : 'center',}),
        ...(view === 'Mobile' && {
            alignItems : attributes.overlayalignmentmobile === 'center' ? 'center' :
            attributes.overlayalignmentmobile === 'left' ? 'self-start' :
            attributes.overlayalignmentmobile === 'right' ? 'self-end' : 'center',

            justifyContent : attributes.overlayalignmentverticalmobile === 'center' ? 'center' :
                attributes.overlayalignmentverticalmobile === 'start' ? 'flex-start' :
                attributes.overlayalignmentverticalmobile === 'end' ? 'flex-end' : 'center',
        }),

    };

    const captionstyle = {
        fontSize:attributes.captionsize,
        fontWeight:attributes.captionfontweight,
        color:attributes.captioncolor,
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
         // Apply aspect ratio based on the current view (Desktop, Tablet, Mobile)
        ...(view === 'Desktop' && {
            aspectRatio: attributes.imageaspectratio !== 'none'
                ? (attributes.imageaspectratio === 'original'
                    ? 'auto'  // Maintain original aspect ratio
                    : attributes.imageaspectratio.replace(':', '/'))  // Replace ':' with '/'
                : 'auto',
        }),

        ...(view === 'Tablet' && {
            aspectRatio: attributes.imageaspectratiotablet !== 'none'
                ? (attributes.imageaspectratiotablet === 'original'
                    ? 'auto'  // Maintain original aspect ratio
                    : attributes.imageaspectratiotablet.replace(':', '/'))  // Replace ':' with '/'
                : 'auto',
        }),

        ...(view === 'Mobile' && {
            aspectRatio: attributes.imageaspectratiomobile !== 'none'
                ? (attributes.imageaspectratiomobile === 'original'
                    ? 'auto'  // Maintain original aspect ratio
                    : attributes.imageaspectratiomobile.replace(':', '/'))  // Replace ':' with '/'
                : 'auto',
        }),


        filter: attributes.duotone && attributes.duotone.length > 1 ? `url(${attributes.duotone})` : '',

    };

    const image_flip_template = [
        ['vayu-blocks/advance-heading', {
            fontVariant: 'bold',
            fontFamily: 'unset',
            content: 'Image Title...',
            className: 'vayu-blocks-heading-innerblock',
            fontFamily:'cardo',
            lineHeight:0.8
        }],
        ['core/paragraph', {
            align: 'center',
            content:'write here please.....',
            className: 'vayu-blocks-para-innerblock',
            fontFamily:'cardo'
        }],
    ];

    const vayu_blocks_image_wrapper_style = (() => {
        const width = attributes.imagewidth || 'auto';
        const height = attributes.imageheight || 'auto';
    
        if (view === 'Desktop') {
            return {
                width: width,
                height: height
            };
        } else if (view === 'Tablet') {
            return {
                width: attributes.imagewidthtablet || 'auto',
                height: attributes.imageheighttablet || 'auto'
            };
        } else if (view === 'Mobile') {
            return {
                width: attributes.imagewidthmobile || 'auto',
                height: attributes.imageheightmobile || 'auto'
            };
        }
        return {}; // Fallback if no view matches
    })();
    
    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

                    {/* svg filter for dutone with display:none and height:0*/}
                    <div> 
                        <svg className="vayu_blocks_image_flip-duotone-filters" xmlns="http://www.w3.org/2000/svg">
                            {/* Orange and Red */}
                            <filter id="duotone-orange-red">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.8 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.3 0.5"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>
                            {/* Red and Green */}
                            <filter id="duotone-red-green">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.7 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.3 0.8"></feFuncG>
                                    <feFuncB type="table" tableValues="0.3 0.7"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Black and White */}
                            <filter id="duotone-black-white">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.5 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 1"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 1"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Blue and Red */}
                            <filter id="duotone-blue-red">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.6 0.9"></feFuncR>
                                    <feFuncG type="table" tableValues="0.2 0.3"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 0.8"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Purple and Yellow */}
                            <filter id="duotone-purple-yellow">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.5 0.8"></feFuncR>
                                    <feFuncG type="table" tableValues="0.2 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 0.3"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Orange and Teal */}
                            <filter id="duotone-orange-teal">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.8 0.5"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.4 0.5"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Pink and Blue */}
                            <filter id="duotone-pink-blue">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.7 0.4"></feFuncR>
                                    <feFuncG type="table" tableValues="0.3 0.5"></feFuncG>
                                    <feFuncB type="table" tableValues="0.6 0.7"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Cyan and Magenta */}
                            <filter id="duotone-cyan-magenta">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.0 0.7"></feFuncR>
                                    <feFuncG type="table" tableValues="0.7 0.2"></feFuncG>
                                    <feFuncB type="table" tableValues="0.9 0.6"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Yellow and Black */}
                            <filter id="duotone-yellow-black">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="1 0.3"></feFuncR>
                                    <feFuncG type="table" tableValues="0.7 0.3"></feFuncG>
                                    <feFuncB type="table" tableValues="0.1 0.1"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Light Blue and Light Green */}
                            <filter id="duotone-lightblue-lightgreen">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.6 0.6"></feFuncR>
                                    <feFuncG type="table" tableValues="0.8 0.9"></feFuncG>
                                    <feFuncB type="table" tableValues="0.8 0.6"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                            {/* Gray and Yellow */}
                            <filter id="duotone-gray-yellow">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.6 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.6 1"></feFuncG>
                                    <feFuncB type="table" tableValues="0.6 0.3"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                        </svg>
                    </div>

                    <div className="vayu_blocks_image_flip_wrapper" style={vayu_blocks_image_wrapper_style}>

                        <div className={`vayu_blocks_image_flip_image-container ${attributes.imagehvreffect} ${attributes.imagehvranimation}`} > 
                                 
                            <img 
                                style= {vayu_blocks_image_settings}
                                src={attributes.image ? attributes.image : noimage} alt={attributes.imagealttext} 
                                className={`vayu_blocks_image_flip_image ${attributes.imagehvrfilter} ${attributes.maskshape!=='none' ? 'maskshapeimage': ''}`} 
                            />

                        </div>  

                        {attributes.overlayshow && (
                            <>
                          
                            <div 
                                className={`vayu_blocks_overlay_main_wrapper ${attributes.imagehvreffect} ${attributes.imagehvranimation} ${attributes.maskshape!=='none' ? 'maskshapeimage' : ''}`} 
                                style={vayu_block_overlay_style}
                            >
                                <div className="vayu_blocks_inner_content">
                                    <InnerBlocks 
                                        template={image_flip_template} 
                                    />
                                </div>

                            </div>
                            </>
                        )}

                        {attributes.caption && (
                            <div style={{textAlign:attributes.captionalignment}}>
                                <p style={captionstyle}>{attributes.captiontext}</p>
                            </div>
                        )}

                    </div>
                
                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;