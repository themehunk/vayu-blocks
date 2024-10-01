import React, { useState, useRef, useEffect } from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import noimage from '../../../../inc/assets/img/no-image.png';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {MediaPlaceholder } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';

const edit = (props) => {
    const { attributes, setAttributes} = props;

    const [rotation, setRotation] = useState(attributes.rotation);

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

        ...(attributes.overlaybordertype === 'color' && {
            borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
            borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
            borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
            borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,
            borderRadius: borderRadius,
        }),

        ...(attributes.overlaybordertype === 'gradient' && {
            borderImage:`${attributes.overlaybordergradient} 30%`,
            borderWidth: `${attributes.overlaygradienttop} ${attributes.overlaygradientbottom} ${attributes.overlaygradientleft} ${attributes.overlaygradientright}`,
        }),

        ...(attributes.overlaybordertype === 'image' && {
            borderImage: 
                attributes.overlayborderimagetype === 'custom' 
                    ? `url(${attributes.overlayborderimage}) ${attributes.borderimagesize}% / ${attributes.overlayimagetop} ${attributes.overlayimagebottom} ${attributes.overlayimageleft} ${attributes.overlayimageright} ${attributes.overlayspace}` 
                    : attributes.overlayborderimagetype === 'image1' 
                        ? `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE3oR0_1fMluZWzbUZo_e-0O-Rkdq6xNudQ&s) ${attributes.borderimagesize}% / ${attributes.overlayimagetop} ${attributes.overlayimagebottom} ${attributes.overlayimageleft} ${attributes.overlayimageright} ${attributes.overlayspace}`
                        : attributes.overlayborderimagetype === 'image2' 
                            ? `url(https://t4.ftcdn.net/jpg/00/90/22/23/360_F_90222304_MnOvAi5X9Rr2ywonhlSpaDPWD0MmLgiY.jpg) ${attributes.borderimagesize}% / ${attributes.overlayimagetop} ${attributes.overlayimagebottom} ${attributes.overlayimageleft} ${attributes.overlayimageright} ${attributes.overlayspace}` 
                            : attributes.overlayborderimagetype === 'image3' 
                                ? `url(https://www.w3schools.com/cssref/border.png) ${attributes.borderimagesize}% / ${attributes.overlayimagetop} ${attributes.overlayimagebottom} ${attributes.overlayimageleft} ${attributes.overlayimageright} ${attributes.overlayspace}` 
                                : attributes.overlayborderimagetype === 'image4' 
                                    ? `url(https://w7.pngwing.com/pngs/169/875/png-transparent-frame-diamond-lace-border-border-frame-symmetry-thumbnail.png) ${attributes.borderimagesize}% / ${attributes.overlayimagetop} ${attributes.overlayimagebottom} ${attributes.overlayimageleft} ${attributes.overlayimageright} ${attributes.overlayspace}` 
                                    : 'none', // fallback if needed


                borderImageOutset : `${attributes.borderimageoutset}px`,
        }),

        ...(view === 'Desktop' && {
            width:attributes.overlaywidth,
            height:attributes.overlayheight,
            top:attributes.overlaytop,
            left:attributes.overlayleft,
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
            width:attributes.overlaywidthtablet,
            height:attributes.overlayheighttablet,
            top:attributes.overlaytoptablet,
            left:attributes.overlaylefttablet,
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
            width:attributes.overlaywidthmobile,
            height:attributes.overlayheightmobile,
            top:attributes.overlaytopmobile,
            left:attributes.overlayleftmobile,
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

    };

    const captionstyle = {
        fontSize:attributes.captionsize,
        fontWeight:attributes.captionfontweight,
        color:attributes.captioncolor,
    }

    //main container image style
    const vayu_blocks_image_settings = {
        width: attributes.imagewidth || 'auto',
        height: attributes.imageheight || 'auto',

        ...((attributes.imagehvreffect === 'flip-front' || attributes.imagehvreffect === 'flip-back' ) && {
            backfaceVisibility: 'hidden',
        }),

        objectFit: attributes.imagebackgroundSize,  // assuming this controls object-fit (e.g., 'cover', 'contain', etc.)
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

    const vayu_blocks_image_position = {
        display:'Flex',
        ...(view === 'Desktop' && {
            justifyContent: (() => {
                return attributes.imagealignment === 'center' ? 'center' :
                       attributes.imagealignment === 'left' ? 'flex-start' :
                       attributes.imagealignment === 'right' ? 'flex-end' : 'center';
            })(),
        }),
        
        ...(view === 'Tablet' && {
            justifyContent: (() => {
                return attributes.imagealignmenttablet === 'center' ? 'center' :
                       attributes.imagealignmenttablet === 'left' ? 'flex-start' :
                       attributes.imagealignmenttablet === 'right' ? 'flex-end' : 'center';
            })(),
        }),

        ...(view === 'Mobile' && {
            justifyContent: (() => {
                return attributes.imagealignmentmobile === 'center' ? 'center' :
                attributes.imagealignmentmobile === 'left' ? 'flex-start' :
                attributes.imagealignmentmobile === 'right' ? 'flex-end' : 'center';
            })(),
        }),
    }

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

    const handleimageurl = (value) => {
        setAttributes({image:value.url});
    }
    
    const handleimage = (value) => {
        setAttributes({image:value});
    }

    const rotateImage = () => {
        const newRotation = (rotation + 90);
        setRotation(newRotation);
        setAttributes({ rotation: newRotation });
    };

    // Function to handle image selection/change
    const handleImageChange = ( media ) => {
        // Handle media upload
        setAttributes({ image: media.url });
    };

    const getclassoverlay = () => {
        if (attributes.animationsettings === 'without-hvr') {
            return `${attributes.imagehvranimation}`;
        } else if (attributes.animationsettings === 'with-hvr') {
            return `${attributes.imagehvranimation}hvr`;
        } else if (attributes.animationsettings === 'one-time') {
            return `${attributes.imagehvranimation}onetime`;
        }
    };
    
    const imageWrapperRef = useRef(null);

    const tiltEffect = (e) => {
        const wrapper = imageWrapperRef.current;
        if (!wrapper) return;

        const rect = wrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const tiltX = (y - 0.5) * 5; // Adjust the multiplier for desired effect
        const tiltY = (x - 0.5) * -5; // Adjust the multiplier for desired effect
        
        wrapper.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    const resetTilt = () => {
        const wrapper = imageWrapperRef.current;
        if (wrapper) {
            wrapper.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        }
    };

    useEffect(() => {
        const wrapper = imageWrapperRef.current;
        if(attributes.wrapperanimation==='vayu_block_styling-effect7'){
        if (wrapper) {
            wrapper.addEventListener('mousemove', tiltEffect);
            wrapper.addEventListener('mouseleave', resetTilt);
        }
    }
        return () => {
            if (wrapper) {
                wrapper.removeEventListener('mousemove', tiltEffect);
                wrapper.removeEventListener('mouseleave', resetTilt);
            }
        };
    }, [attributes.wrapperanimation]);

    return (
        <>
            <BlockControls>
            {attributes.image && (
                <ToolbarGroup>

                    <ToolbarButton
                        label="Rotate Image"
                        onClick={rotateImage} // Rotate both on button click
                    >
                        {/* Icon that rotates the same degree as the image */}
                        <span
                            style={{
                                display: 'inline-block',
                                transform: `rotate(${attributes.rotation}deg)`,
                                transition: 'transform 0.3s ease-in-out'
                            }}
                            className="dashicons dashicons-image-rotate"
                        ></span>
                    </ToolbarButton>

                    <MediaUpload
                        onSelect={handleImageChange}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            
                            <ToolbarButton
                            label="Change Image"
                            onClick={open}
                        >
                            Replace 
                        </ToolbarButton>
                            
                        )}
                    />
                
                  
                </ToolbarGroup>
                )}
            </BlockControls>

            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
            <div 
            ref={imageWrapperRef} 
            className={`vayu-blocks-image-main-container `}  
            id={attributes.uniqueId}
            >
                    <div style={vayu_blocks_image_position}>
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

                    {attributes.image && (
                    
                    <div className={`vayu_blocks_image_wrapper ${attributes.wrapperanimation}`} style={vayu_blocks_image_wrapper_style}>
                        <div style={{transform:`rotate(${attributes.rotation}deg)`}}>
                            <div  className={`vayu_blocks_image-container ${attributes.imagehvreffect} ${getclassoverlay()}`} > 
                            
                                <img 
                                    style= {vayu_blocks_image_settings}
                                    src={attributes.image ? attributes.image : noimage} alt={attributes.imagealttext} 
                                    className={`vayu_blocks_image_image ${attributes.imagehvrfilter} ${attributes.maskshape!=='none' ? 'maskshapeimage': ''}`} 
                                />

                            </div>  

                            {attributes.overlayshow && (
                                <>
                                <div 
                                    className={`vayu_blocks_overlay_main_wrapper_image ${attributes.overlaywrapper} ${attributes.imagehvreffect} ${attributes.maskshape!=='none' ? 'maskshapeimage' : ''} ${getclassoverlay()}`} 
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
                            
                          </div>    
                    </div>
                  
                    )}

                </div>

                    {!attributes.image && (
                        <MediaUploadCheck>
                            <MediaPlaceholder
                                icon="format-image"
                                labels={{
                                    title: __('Background Image', 'vayu-blocks'),
                                    name: __('an image', 'vayu-blocks')
                                }}
                                onSelect={(media) => {
                                    handleimageurl(media)
                                }} 
                                onSelectURL={(value) => handleimage(value)}                                                            
                                accept="image/*"
                                allowedTypes={['image']}
                            />
                        </MediaUploadCheck>
                    )}
                    
                    {attributes.caption && (
                        <div style={{ textAlign: attributes.captionalignment }}>
                            <RichText
                                tagName="p"
                                value={attributes.captiontext}
                                onChange={(newCaption) => setAttributes({ captiontext: newCaption })}
                                placeholder={__('Add caption...', 'vayu-blocks')}
                                style={captionstyle}
                            />
                        </div>
                    )}
                
                </div>
                
            </AdvanceSettings>
        </>
    );
};

export default edit;