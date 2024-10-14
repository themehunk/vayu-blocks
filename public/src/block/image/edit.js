import React, { useState, useRef, useEffect } from 'react';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';
import { InnerBlocks,MediaUpload, MediaUploadCheck ,MediaPlaceholder,RichText, BlockControls} from '@wordpress/block-editor';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import noimage from '../../../../inc/assets/img/no-image.png';
import './editor.scss';
import DuotoneFilters from './DuotoneFilters';

const edit = (props) => {
    const { attributes, setAttributes,clientId} = props;

    const [rotation, setRotation] = useState(attributes.rotation);

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

        ...(attributes.imageboxShadowColor && { 
            boxShadow: attributes.imageboxShadow ?
            `${attributes.imageboxShadowHorizontal}px ${attributes.imageboxShadowVertical}px ${attributes.imageboxShadowBlur}px ${attributes.imageboxShadowSpread}px rgba(${parseInt(attributes.imageboxShadowColor.slice(1, 3), 16)}, ${parseInt(attributes.imageboxShadowColor.slice(3, 5), 16)}, ${parseInt(attributes.imageboxShadowColor.slice(5, 7), 16)}, ${attributes.imageboxShadowColorOpacity / 100})`
            : 'none',
        }),
        ...(attributes.overlaybordertype === 'color' && {
            borderRadius: borderRadius,
        }),

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
        // Start with an initial style object
        const style = {
            ...(attributes.imageboxShadowColor && {
                boxShadow: attributes.imageboxShadow
                    ? `${attributes.imageboxShadowHorizontal}px ${attributes.imageboxShadowVertical}px ${attributes.imageboxShadowBlur}px ${attributes.imageboxShadowSpread}px rgba(${parseInt(attributes.imageboxShadowColor.slice(1, 3), 16)}, ${parseInt(attributes.imageboxShadowColor.slice(3, 5), 16)}, ${parseInt(attributes.imageboxShadowColor.slice(5, 7), 16)}, ${attributes.imageboxShadowColorOpacity / 100})`
                    : 'none',
            }),
        };
    
        // Determine the width and height based on the view
        const width = attributes.imagewidth || 'auto';
        const height = attributes.imageheight || 'auto';
    
        if (view === 'Desktop') {
            style.width = width;
            style.height = height;
        } else if (view === 'Tablet') {
            style.width = attributes.imagewidthtablet || 'auto';
            style.height = attributes.imageheighttablet || 'auto';
        } else if (view === 'Mobile') {
            style.width = attributes.imagewidthmobile || 'auto';
            style.height = attributes.imageheightmobile || 'auto';
        }
    
        return style; // Return the constructed style object
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
    
        // Adjust the tilt based on the cursor position
        const tiltX = (y - 0.5) * -4; // Inverted multiplier for the X tilt
        const tiltY = (x - 0.5) * 4; // Regular multiplier for the Y tilt
    
        // Apply the calculated transformation
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
        if (attributes.wrapperanimation === 'vayu_block_styling-effect7') {
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
    
    const overlayWrapperRef = useRef(null);

    const overlaytiltEffect = (e) => {
        const wrapper = overlayWrapperRef.current;
        if (!wrapper) return;
    
        const rect = wrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
    
        // Adjust the tilt based on the cursor position
        const tiltX = (y - 0.5) * -6; // Inverted multiplier for the X tilt
        const tiltY = (x - 0.5) * 6; // Regular multiplier for the Y tilt
    
        // Apply the calculated transformation
        wrapper.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const overlayresetTilt = () => {
        const wrapper = overlayWrapperRef.current;
        if (wrapper) {
            wrapper.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        }
    };
    
    useEffect(() => {
        const wrapper = overlayWrapperRef.current;
        if (attributes.wrapperanimation === 'vayu_block_styling-effect7') {
            if (wrapper) {
                wrapper.addEventListener('mousemove', overlaytiltEffect);
                wrapper.addEventListener('mouseleave', overlayresetTilt);
            }
        }
        return () => {
            if (wrapper) {
                wrapper.removeEventListener('mousemove', overlaytiltEffect);
                wrapper.removeEventListener('mouseleave', overlayresetTilt);
            }
        };
    }, [attributes.wrapperanimation]);
    
    useEffect(() => {
        // If imagewidth is less than 200, hide the overlay
        if (parseInt(attributes.imagewidth) < 200) {
            setAttributes({ overlayshow: false });
        } 
        // If imagewidth is an empty string and defaultImageWidth is less than 200, hide the overlay
        else if (attributes.imagewidth === '' && attributes.defaultImageWidth < 200) {
            setAttributes({ overlayshow: false });
        }
    }, [attributes.imagewidth, attributes.defaultImageWidth]);
    

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
                    <div className='vayu_blocks_dustone_svg'> 
                        <DuotoneFilters />
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

                            { attributes.overlayshow && (
                                <>
                                <div ref={overlayWrapperRef} 
                                    className={`vayu_blocks_overlay_main_wrapper_image ${attributes.overlaywrapper} ${attributes.imagehvreffect} ${attributes.maskshape!=='none' ? 'maskshapeimage' : ''} ${getclassoverlay()}`} 
                                    style={vayu_block_overlay_style}
                                >
                                    <div className="vayu_blocks_inner_content" style={{height:'25%'}}>
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