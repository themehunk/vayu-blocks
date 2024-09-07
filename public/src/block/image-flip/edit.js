import React, { useEffect, useState,useRef } from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';


const edit = ({ attributes, setAttributes }) => {

    // Utility function to generate a unique ID
    const generateUniqueId = () =>  new Date().getTime() + '-' + Math.floor(Math.random() * 1000);


    return (
        <>
            <PanelSettings attributes={attributes} setAttributes={setAttributes} />
            <AdvanceSettings attributes={attributes} setAttributes={setAttributes}>
                
                <div  class="vayu-blocks-slider-main-container" id={`${attributes.uniqueId}`}>

                    <div className="vayu_blocks_image_flip_wrapper">
                    
                    <img 
                        src={attributes.image} 
                        alt={attributes.imageAlt || `Image ${Math.floor(Math.random() * 100)}`} 
                        className={`vayu_blocks_image_flip_image ${attributes.imagehvreffect}`} 
                    />

                    </div>

                            
                            {/* {attributes.imageOverlay === "none" ? (
                                <div className="elaet-image-caption-wrapper">
                                    <div className="elaet-image-caption-inner">
                                        {attributes.headingHoverTitle && (
                                            <h3 className="elaet-image-caption-title">
                                                Kuber
                                            </h3>
                                        )}
                                    
                                        <div className="elaet-image-caption-desc">
                                            {attributes.imageHoverSubheading}
                                        </div>
                                        Button
                                        <a className="elaet-image-caption-button" href={attributes.hoverLink}>
                                            {attributes.imageHoverButtonText}
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="image-pro-overlay">
                                    <div className="elaet-image-color-overlay"></div>
                                    <div className="elaet-image-overlay-inner">
                                    
                                        {attributes.headingHoverTitle && (
                                            <h3 className="elaet-image-title">
                                                fghdh
                                            </h3>
                                        )}
                                    
                                        {attributes.imageHoverSubheading && (
                                            <div className="elaet-image-caption">
                                                gdhjrfh
                                            </div>
                                        )}
                                    
                                        <a className="elaet-image-action-button" href={attributes.hoverLink}>
                                            {attributes.imageHoverButtonText}
                                        </a>
                                    </div>
                                </div>
                            )} */}

                </div>

            </AdvanceSettings>
        </>
    );
};

export default edit;
 