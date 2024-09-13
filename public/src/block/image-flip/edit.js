import React from 'react';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import noimage from '../../../../inc/assets/img/no-image.png';
import { InnerBlocks } from '@wordpress/block-editor';


const edit = (props) => {
    const { attributes, setAttributes} = props;

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

    //overlay wrapper style
    const vayu_block_overlay_style = {
        background:attributes.overlaycolor,
        borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
        borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
        borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
        borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,

        borderRadius: `${attributes.imageborderRadius.top} ${attributes.imageborderRadius.right} ${attributes.imageborderRadius.bottom} ${attributes.imageborderRadius.left}`,

        alignItems: 
            attributes.overlayalignment === 'center' ? 'center' :
            attributes.overlayalignment === 'left' ? 'self-start' :
            attributes.overlayalignment === 'right' ? 'self-end' : 'center',

        justifyContent: 
            attributes.overlayalignmentvertical === 'center' ? 'center' :
            attributes.overlayalignmentvertical === 'start' ? 'flex-start' :
            attributes.overlayalignmentvertical === 'end' ? 'flex-end' : 'center',

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

        filter: attributes.duotone && attributes.duotone.length > 1 ? `url(${attributes.duotone})` : '',

        borderTop: `${attributes.imageborder.topwidth} ${attributes.imageborder.topstyle} ${attributes.imageborder.topcolor}`,
        borderBottom: `${attributes.imageborder.bottomwidth} ${attributes.imageborder.bottomstyle} ${attributes.imageborder.bottomcolor}`,
        borderLeft: `${attributes.imageborder.leftwidth} ${attributes.imageborder.leftstyle} ${attributes.imageborder.leftcolor}`,
        borderRight: `${attributes.imageborder.rightwidth} ${attributes.imageborder.rightstyle} ${attributes.imageborder.rightcolor}`,

        borderRadius: `${attributes.imageborderRadius.top} ${attributes.imageborderRadius.right} ${attributes.imageborderRadius.bottom} ${attributes.imageborderRadius.left}`,

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

                    <div className="vayu_blocks_image_flip_wrapper">

                        <div className={`vayu_blocks_image_flip_image ${attributes.imagehvreffect} ${attributes.imagehvrfilter}`}   >             
                            <img 
                                style= {vayu_blocks_image_settings}
                                src={attributes.image ? attributes.image : noimage} alt={attributes.imageAlt || `Image ${Math.floor(Math.random() * 100)}`} 
                                className={`vayu_blocks_image_flip_image ${attributes.imagehvreffect} ${attributes.imagehvrfilter}`} 
                            />

                        </div>  

                            <div className={`vayu_blocks_overlay_main_wrapper 
                                ${!attributes.overlay && !attributes.showPreview && attributes.imagehvreffect !== 'flip-front' && attributes.imagehvreffect !== 'flip-front-left' && attributes.imagehvreffect !== 'flip-back-bottom' && attributes.imagehvreffect !== 'flip-back' ? attributes.imageoverlayouteffect : ''} 
                                ${!attributes.overlay && !attributes.showPreview && attributes.imagehvreffect === 'flip-front' ? 'overlayflip-horizontal' : ''} 
                                ${!attributes.overlay && !attributes.showPreview && attributes.imagehvreffect === 'flip-back' ? 'overlayflip-vertical' : ''}
                                ${!attributes.overlay && !attributes.showPreview && attributes.imagehvreffect === 'flip-front-left' ? 'overlayflip-horizontal-left' : ''} 
                                ${!attributes.overlay && !attributes.showPreview && attributes.imagehvreffect === 'flip-back-bottom' ? 'overlayflip-vertical-bottom' : ''}
                            `} style={vayu_block_overlay_style}>
                                <div className="vayu_blocks_inner_content">
                                    <InnerBlocks 
                                        template={image_flip_template} 
                                    />
                                </div>

                            </div>

                    </div>


                </div>
            </AdvanceSettings>
        </>
    );
};

export default edit;