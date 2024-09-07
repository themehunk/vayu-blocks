import React from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';

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
    

    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div className="vayu-blocks-image-flip-main-container" id={`${attributes.uniqueId}`}>
                    <div className="vayu_blocks_image_flip_wrapper">
                        {attributes.image && (

                            <img 
                                src={attributes.image} 
                                alt={attributes.imageAlt || `Image ${Math.floor(Math.random() * 100)}`} 
                                className={`vayu_blocks_image_flip_image ${attributes.imagehvreffect} ${attributes.imagehvrfilter}`} 
                            />

                        )}
                        
                        {/* Conditionally render overlay */}
                        {attributes.overlay && (
                            <div className={`vayu_blocks_overlay_main_wrapper ${attributes.imageoverlayouteffect}`} style={vayu_block_overlay_style}>
                               
                                <attributes.headingtag style = {vayu_blocks_heading_tag}>
                                {attributes.headingtext}
                                </attributes.headingtag>

                                <attributes.captiontag style = {vayu_blocks_caption_tag}>
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
                                            className="vayu_blocks_image_flip_button"
                                            style={vayu_blocks_image_flip_button_style}
                                        >
                                            {attributes.buttontext}
                                        </button>
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        className="vayu_blocks_image_flip_button"
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
