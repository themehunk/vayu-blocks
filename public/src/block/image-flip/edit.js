import React from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';

import {
    TextControl
} from '@wordpress/components';

const edit = ({ attributes, setAttributes }) => {
    
    // Utility function to generate a unique ID
    const generateUniqueId = () =>  new Date().getTime() + '----' + Math.floor(Math.random() * 1000);

    // Ensure the uniqueId is set if it's not
    if (!attributes.uniqueId) {
        setAttributes({ uniqueId: generateUniqueId() });
    }

    const vayu_block_overlay_style = {
        background:attributes.overlaycolor,
    }

    const vayu_blocks_heading_tag = {
        fontFamily: attributes.heading.font,
        fontSize: attributes.heading.size,
        fontWeight: attributes.heading.appearance,
        letterSpacing: attributes.heading.letterSpacing,
        letterCase: attributes.heading.letterCase,
        color: attributes.headingcolor,   
    };

    const vayu_blocks_caption_tag = {
        fontFamily: attributes.caption.font,
        fontSize: attributes.caption.size,
        fontWeight: attributes.caption.appearance,
        letterSpacing: attributes.caption.letterSpacing,
        letterCase: attributes.caption.letterCase,
        color: attributes.captioncolor,   
    };
    
    const vayu_blocks_image_flip_button_style = {
        background: attributes.buttonbackground,
        borderTop: `${attributes.buttonborder.topwidth} ${attributes.buttonborder.topstyle} ${attributes.buttonborder.topcolor}`,
        borderBottom: `${attributes.buttonborder.bottomwidth} ${attributes.buttonborder.bottomstyle} ${attributes.buttonborder.bottomcolor}`,
        borderLeft: `${attributes.buttonborder.leftwidth} ${attributes.buttonborder.leftstyle} ${attributes.buttonborder.leftcolor}`,
        borderRight: `${attributes.buttonborder.rightwidth} ${attributes.buttonborder.rightstyle} ${attributes.buttonborder.rightcolor}`,

        borderRadius: `${attributes.buttonborderRadius.top} ${attributes.buttonborderRadius.right} ${attributes.buttonborderRadius.bottom} ${attributes.buttonborderRadius.left}`,

        padding: `${attributes.buttonpaddingtop} ${attributes.buttonpaddingright} ${attributes.buttonpaddingbottom} ${attributes.buttonpaddingleft}`,

        color:attributes.buttoncolor,

    };
    
    const vayu_blocks_image_settings = {
        objectFit: attributes.imagecover,  // assuming this controls object-fit (e.g., 'cover', 'contain', etc.)
        // Apply focal point if it exists, default to center
        objectPosition: `${attributes.focalPoint?.x * 100 || 50}% ${attributes.focalPoint?.y * 100 || 50}%`,
         // Apply aspect ratio if it exists
        aspectRatio: attributes.imageaspectratio !== 'none' 
        ? (attributes.imageaspectratio === 'original' 
            ? 'auto' // Maintain original aspect ratio
            : attributes.imageaspectratio.replace('/', '/')) 
        : 'auto',

        filter: attributes.duotone && attributes.duotone.length > 1 ? `url(${attributes.duotone})` : '',
    };
    
    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>

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

                    <div className="vayu_blocks_image_flip_wrapper">
                            <img 
                                style= {vayu_blocks_image_settings}
                                src={attributes.image ? attributes.image : 'http://localhost/wordpress/wp-content/plugins/elementor/assets/images/placeholder.png'}                                alt={attributes.imageAlt || `Image ${Math.floor(Math.random() * 100)}`} 
                                className={`vayu_blocks_image_flip_image ${attributes.imagehvreffect} ${attributes.imagehvrfilter}`} 
                            />
                    
                        {/* Conditionally render overlay */}
                        {attributes.overlay && (
                            <div className={`vayu_blocks_overlay_main_wrapper ${attributes.showPreview ? '' : attributes.imageoverlayouteffect}`} style={vayu_block_overlay_style}>
                               
                                <attributes.headingtag style = {vayu_blocks_heading_tag} className={`${attributes.showPreview ? '' : 'vayu_block_animation_overlay_inside'} ${attributes.showPreview ? '' : attributes.imageoverlayouteffect}`}>
                                {attributes.headingtext}   
                                </attributes.headingtag>

                                <attributes.captiontag style = {vayu_blocks_caption_tag} className={`${attributes.showPreview ? '' : 'vayu_block_animation_overlay_inside'} ${attributes.showPreview ? '' : attributes.imageoverlayouteffect}`}>
                                {attributes.imageCaption}
                                </attributes.captiontag>


                                {attributes.buttonlink ? (
                                    <a
                                        href={attributes.buttonlink}
                                        target={attributes.buttonnewtab ? "_blank" : "_self"}
                                        rel={attributes.buttonnewtab ? "noopener noreferrer" : undefined} // Security best practice
                                        style={{ textDecoration: 'none' }} // Optional: Remove underline from the link
                                    >
                                        <button
                                            type="button"
                                            className={`vayu_blocks_image_flip_button ${attributes.showPreview ? '' : 'vayu_block_animation_overlay_inside'} ${attributes.showPreview ? '' : attributes.imageoverlayouteffect}`}
                                            style={vayu_blocks_image_flip_button_style}
                                        >
                                            {attributes.buttontext}
                                        </button>
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        className={`vayu_blocks_image_flip_button ${attributes.showPreview ? '' : 'vayu_block_animation_overlay_inside'} ${attributes.showPreview ? '' : attributes.imageoverlayouteffect}`}
                                        style={vayu_blocks_image_flip_button_style}
                                    >
                                        {attributes.buttontext}
                                    </button>
                                )}

                            </div>
                        )}

                    </div>

                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;
