import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState} from 'react';
import { select, useSelect } from '@wordpress/data';
import { useViewportMatch} from '@wordpress/compose';

// Utility function to filter out undefined or null values
const omitBy = (object, condition) => (
    Object.fromEntries(
        Object.entries(object).filter(([key, value]) => !condition(value))
    )
);

export default function AdvanceSettings({ children, attributes,setAttributes }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const {
        globalwidth,
        widthType,
        customWidthUnit,
        customWidth,
        customWidthTablet,
        customWidthMobile,
        paddingUnit,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        marginUnit,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        position,
        zIndex,

        horizontalOrientation,
        horizontalOrientationOffsetUnit,
        horizontalOrientationOffsetRightUnit,
        horizontalOrientationOffset,
        horizontalOrientationOffsetRight,
        verticalOrientation,
        verticalOrientationOffsetTopUnit,
        verticalOrientationOffsetBottomUnit,
        verticalOrientationOffsetTop,
        
        selfAlign,
        order,
        customOrder,
        flexSize,
        flexGrow,
        flexShrink,

        borderType,
        borderWidthTop,
        borderWidthBottom,
        borderWidthLeft,
        borderWidthRight,
        borderColor,
        borderWidthUnit,

        boxShadow,
        boxShadowColor,
        boxShadowColorOpacity,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowHorizontal,
        boxShadowVertical,
        borderHvrType,
        borderWidthHvrTop,
        borderWidthHvrBottom,
        borderWidthHvrUnit,
        borderWidthHvrLeft,
        borderWidthHvrRight,
        borderColorHvr,
        borderRadiusHvrTop,
        borderRadiusHvrBottom,
        borderRadiusHvrLeft,
        borderRadiusHvrRight,
        boxShadowHvr,
        boxShadowColorHvr,
        boxShadowColorOpacityHvr,
        boxShadowBlurHvr,
        boxShadowSpreadHvr,
        boxShadowHorizontalHvr,
        boxShadowVerticalHvr,

        backgroundType,
        backgroundColor,
        backgroundImage,
        backgroundGradient,
        backgroundPosition,
        backgroundAttachment,
        backgroundRepeat,
        backgroundSize,
        backgroundTypeHvr,
        backgroundColorHvr,
        backgroundImageHvr,
        backgroundGradientHvr,
        backgroundPositionHvr,
        backgroundAttachmentHvr,
        backgroundRepeatHvr,
        backgroundSizeHvr,

        transitionAll,


        buttonpaddingTop, 
        buttonpaddingRight, 
        buttonpaddingBottom, 
        buttonpaddingLeft, 
        buttonpaddingTopTablet,
        buttonpaddingRightTablet,
        buttonpaddingBottomTablet,
        buttonpaddingLeftTablet,
        buttonpaddingTopMobile, 
        buttonpaddingRightMobile,
        buttonpaddingBottomMobile,
        buttonpaddingLeftMobile,
        buttonpadding,
        buttonpaddingMobile,
        buttonpaddingTablet,

        marginTopTablet,
        marginRightTablet,
        marginBottomTablet,
        marginLeftTablet,
        marginTopMobile,
        marginRightMobile,
        marginBottomMobile,
        marginLeftMobile,

        borderradiusTop,
        borderradiusBottom,
        borderradiusLeft,
        borderradiusRight,
        borderradiusType,
        borderradiusTypeTablet,
        borderradiusTypeMobile,
        borderradiusTopTablet,
        borderradiusRightTablet,
        borderradiusBottomTablet,
        borderradiusLeftTablet,
        borderradiusTopMobile,
        borderradiusRightMobile,
        borderradiusBottomMobile,
        borderradiusLeftMobile,
        borderRadiusUnit,

        borderradiusHvrTop,
        borderradiusHvrBottom,
        borderradiusHvrLeft,
        borderradiusHvrRight,
        borderradiusHvrType,
        borderradiusHvrTypeTablet,
        borderradiusHvrTypeMobile,
        borderradiusHvrTopTablet,
        borderradiusHvrRightTablet,
        borderradiusHvrBottomTablet,
        borderradiusHvrLeftTablet,
        borderradiusHvrTopMobile,
        borderradiusHvrRightMobile,
        borderradiusHvrBottomMobile,
        borderradiusHvrLeftMobile,
        borderRadiusHvrUnit,

    } = attributes;

    const formatBackgroundPosition = (pos) => {
        return pos && pos.x !== undefined && pos.y !== undefined ? `${pos.x * 100}% ${pos.y * 100}%` : undefined;
    };

    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

    const getPaddingStyle = () => {
        switch (getView) {
            case 'Desktop':
                return {
                    
                    paddingTop: buttonpaddingTop ? `${buttonpaddingTop}${paddingUnit || 'px'}` : undefined,
                    paddingBottom: buttonpaddingBottom ? `${buttonpaddingBottom}${paddingUnit || 'px'}` : undefined,
                    paddingLeft: buttonpaddingLeft ? `${buttonpaddingLeft}${paddingUnit || 'px'}` : undefined,
                    paddingRight: buttonpaddingRight ? `${buttonpaddingRight}${paddingUnit || 'px'}` : undefined
                };
            case 'Tablet':
                return {
                    paddingTop: buttonpaddingTopTablet ? `${buttonpaddingTopTablet}${paddingUnit || 'px'}` : undefined,
                    paddingBottom: buttonpaddingBottomTablet ? `${buttonpaddingBottomTablet}${paddingUnit || 'px'}` : undefined,
                    paddingLeft: buttonpaddingLeftTablet ? `${buttonpaddingLeftTablet}${paddingUnit || 'px'}` : undefined,
                    paddingRight: buttonpaddingRightTablet ? `${buttonpaddingRightTablet}${paddingUnit || 'px'}` : undefined
                };
            case 'Mobile':
                return {
                    paddingTop: buttonpaddingTopMobile ? `${buttonpaddingTopMobile}${paddingUnit || 'px'}` : undefined,
                    paddingBottom: buttonpaddingBottomMobile ? `${buttonpaddingBottomMobile}${paddingUnit || 'px'}` : undefined,
                    paddingLeft: buttonpaddingLeftMobile ? `${buttonpaddingLeftMobile}${paddingUnit || 'px'}` : undefined,
                    paddingRight: buttonpaddingRightMobile ? `${buttonpaddingRightMobile}${paddingUnit || 'px'}` : undefined
                };
            default:
                return {};
        }
    };

    const getMarginStyle = () => {
        switch (getView) {
            case 'Desktop':
                return {
                    marginTop: marginTop ? `${marginTop}${marginUnit || 'px'}` : undefined,
                    marginBottom: marginBottom ? `${marginBottom}${marginUnit || 'px'}` : undefined,
                    marginLeft: marginLeft ? `${marginLeft}${marginUnit || 'px'}` : undefined,
                    marginRight: marginRight ? `${marginRight}${marginUnit || 'px'}` : undefined
                };
            case 'Tablet':
                return {
                    marginTop: marginTopTablet ? `${marginTopTablet}${marginUnit || 'px'}` : undefined,
                    marginBottom: marginBottomTablet ? `${marginBottomTablet}${marginUnit || 'px'}` : undefined,
                    marginLeft: marginLeftTablet ? `${marginLeftTablet}${marginUnit || 'px'}` : undefined,
                    marginRight: marginRightTablet ? `${marginRightTablet}${marginUnit || 'px'}` : undefined
                };
            case 'Mobile':
                return {
                    marginTop: marginTopMobile ? `${marginTopMobile}${marginUnit || 'px'}` : undefined,
                    marginBottom: marginBottomMobile ? `${marginBottomMobile}${marginUnit || 'px'}` : undefined,
                    marginLeft: marginLeftMobile ? `${marginLeftMobile}${marginUnit || 'px'}` : undefined,
                    marginRight: marginRightMobile ? `${marginRightMobile}${marginUnit || 'px'}` : undefined
                };
            default:
                return {};
        }
    };

    const getborderradiusStyle = () => {
        switch (getView) {
            case 'Desktop':
                return {
                    borderTopLeftRadius: borderradiusTop ? `${borderradiusTop}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusBottom ? `${borderradiusBottom}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomLeftRadius: borderradiusLeft ? `${borderradiusLeft}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusRight ? `${borderradiusRight}${borderRadiusUnit || 'px'}` : undefined
                };
            case 'Tablet':
                return {
                    borderTopLeftRadius: borderradiusTopTablet ? `${borderradiusTopTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusBottomTablet ? `${borderradiusBottomTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomLeftRadius: borderradiusLeftTablet ? `${borderradiusLeftTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusRightTablet ? `${borderradiusRightTablet}${borderRadiusUnit || 'px'}` : undefined
                };
            case 'Mobile':
                return {
                    borderTopLeftRadius: borderradiusTopMobile ? `${borderradiusTopMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusBottomMobile ? `${borderradiusBottomMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopLeftRadius: borderradiusLeftMobile ? `${borderradiusLeftMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusRightMobile ? `${borderradiusRightMobile}${borderRadiusUnit || 'px'}` : undefined
                };
            default:
                return {};
        }
    };

    const getborderradiusHvrStyle = () => {
        switch (getView) {
            case 'Desktop':
                return {
                    borderTopLeftRadius: borderradiusHvrTop ? `${borderradiusHvrTop}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusHvrBottom ? `${borderradiusHvrBottom}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomLeftRadius: borderradiusHvrLeft ? `${borderradiusHvrLeft}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusHvrRight ? `${borderradiusHvrRight}${borderRadiusUnit || 'px'}` : undefined
                };
            case 'Tablet':
                return {
                    borderTopLeftRadius: borderradiusHvrTopTablet ? `${borderradiusHvrTopTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusHvrBottomTablet ? `${borderradiusHvrBottomTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomLeftRadius: borderradiusHvrLeftTablet ? `${borderradiusHvrLeftTablet}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusHvrRightTablet ? `${borderradiusHvrRightTablet}${borderRadiusUnit || 'px'}` : undefined
                };
            case 'Mobile':
                return {
                    borderTopLeftRadius: borderradiusHvrTopMobile ? `${borderradiusHvrTopMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderBottomRightRadius: borderradiusHvrBottomMobile ? `${borderradiusHvrBottomMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopLeftRadius: borderradiusHvrLeftMobile ? `${borderradiusHvrLeftMobile}${borderRadiusUnit || 'px'}` : undefined,
                    borderTopRightRadius: borderradiusHvrRightMobile ? `${borderradiusHvrRightMobile}${borderRadiusUnit || 'px'}` : undefined
                };
            default:
                return {};
        }
    };

    const getWidthStyle = () => {
        switch (getView) {
            case 'Desktop':
                return {
                    width: customWidth ? `${customWidth}${customWidthUnit || '%'}` : '100%',
                };
            case 'Tablet':
                return {
                    width: customWidthTablet ? `${customWidthTablet}${customWidthUnit || '%'}` : '100%',
                };
            case 'Mobile':
                return {
                    width: customWidthMobile ? `${customWidthMobile}${customWidthUnit || '%'}` : '100%',
                };
            default:
                return {};
        }
    };
    
    const paddingStyles = getPaddingStyle();
    const marginStyles = getMarginStyle();

    const {
		isViewportAvailable,
		isPreviewDesktop,
		isPreviewTablet,
		isPreviewMobile
	} = useSelect( select => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return {
			isViewportAvailable: __experimentalGetPreviewDeviceType ? true : false,
			isPreviewDesktop: __experimentalGetPreviewDeviceType ? 'Desktop' === __experimentalGetPreviewDeviceType() : false,
			isPreviewTablet: __experimentalGetPreviewDeviceType ? 'Tablet' === __experimentalGetPreviewDeviceType() : false,
			isPreviewMobile: __experimentalGetPreviewDeviceType ? 'Mobile' === __experimentalGetPreviewDeviceType() : false
		};
	}, []);


    const isLarger = useViewportMatch( 'large', '>=' );

	const isLarge = useViewportMatch( 'large', '<=' );

	const isSmall = useViewportMatch( 'small', '>=' );

	const isSmaller = useViewportMatch( 'small', '<=' );

    let isDesktop = isLarger && ! isLarge && isSmall && ! isSmaller;

	let isTablet = ! isLarger && ! isLarge && isSmall && ! isSmaller;

	let isMobile = ! isLarger && ! isLarge && ! isSmall && ! isSmaller;

    if ( isViewportAvailable && ! isMobile ) {
		isDesktop = isPreviewDesktop;
		isTablet = isPreviewTablet;
		isMobile = isPreviewMobile;
	}
    
    let customwidth;

    let customheight;

    if ( isDesktop ) {

        customwidth = {
                
            'width':attributes.customWidth + attributes.customWidthUnit,
            
        };
        customheight = {
                
            'height':attributes.customHeight + attributes.customHeightUnit,
            
        };

    }

    if ( isTablet ) {

        customwidth = {
                
            'width':attributes.customWidthTablet + attributes.customWidthUnit,
            
        };
        customheight = {
                
            'height':attributes.customHeightTablet + attributes.customHeightUnit,
            
        };

    }

    if ( isMobile ) {

        customwidth = {
                
            'width':attributes.customWidthMobile + attributes.customWidthUnit,
            
        };
        customheight = {
                
            'height':attributes.customHeightMobile + attributes.customHeightUnit,
            
        };
    
    }

    // Determine the borderRadius based on condition
    const borderRadius = `${attributes.advanceRadius.top} ${attributes.advanceRadius.right} ${attributes.advanceRadius.bottom} ${attributes.advanceRadius.left}`;

    // Prepare the style object
    const styles = {
        ...customwidth,
        ...customheight,
        ...paddingStyles,
        ...marginStyles,  
        
        
        order: order === 'custom' ? customOrder : 'undefined',
      
        borderTop: `${attributes.advanceborder.topwidth} ${attributes.advanceborder.topstyle} ${attributes.advanceborder.topcolor}`,
        borderBottom: `${attributes.advanceborder.bottomwidth} ${attributes.advanceborder.bottomstyle} ${attributes.advanceborder.bottomcolor}`,
        borderLeft: `${attributes.advanceborder.leftwidth} ${attributes.advanceborder.leftstyle} ${attributes.advanceborder.leftcolor}`,
        borderRight: `${attributes.advanceborder.rightwidth} ${attributes.advanceborder.rightstyle} ${attributes.advanceborder.rightcolor}`,

        borderRadius: borderRadius,
      
        // Conditionally include boxShadow if boxShadowColor is defined
        ...(boxShadowColor && {
            boxShadow: boxShadow
                ? `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowSpread}px rgba(${parseInt(boxShadowColor.slice(1, 3), 16)}, ${parseInt(boxShadowColor.slice(3, 5), 16)}, ${parseInt(boxShadowColor.slice(5, 7), 16)}, ${boxShadowColorOpacity / 100})`
                : 'none',
        }),
 
        background: backgroundType === 'color' ? backgroundColor :
        backgroundType === 'gradient' ? backgroundGradient || undefined :
        backgroundImage ? `url(${backgroundImage.url})` : 'none',
        backgroundPosition: formatBackgroundPosition(backgroundPosition),
        backgroundAttachment: backgroundAttachment || undefined,
        backgroundRepeat: backgroundRepeat || undefined,
        backgroundSize: backgroundSize || undefined,
      
        transition: transitionAll ? `all ${transitionAll}s ease-in-out` : undefined,
        
    };

    // Determine the borderRadius based on condition
    const borderRadiushvr = `${attributes.advanceRadiushvr.top} ${attributes.advanceRadiushvr.right} ${attributes.advanceRadiushvr.bottom} ${attributes.advanceRadiushvr.left}`;

    const hoverStyles = {
        borderTop: `${attributes.advanceborderhvr.topwidth} ${attributes.advanceborderhvr.topstyle} ${attributes.advanceborderhvr.topcolor}`,
        borderBottom: `${attributes.advanceborderhvr.bottomwidth} ${attributes.advanceborderhvr.bottomstyle} ${attributes.advanceborderhvr.bottomcolor}`,
        borderLeft: `${attributes.advanceborderhvr.leftwidth} ${attributes.advanceborderhvr.leftstyle} ${attributes.advanceborderhvr.leftcolor}`,
        borderRight: `${attributes.advanceborderhvr.rightwidth} ${attributes.advanceborderhvr.rightstyle} ${attributes.advanceborderhvr.rightcolor}`,

        borderRadius: borderRadiushvr,

        ...(boxShadowColorHvr && {
            boxShadow: boxShadowHvr ?
            `${boxShadowHorizontalHvr}px ${boxShadowVerticalHvr}px ${boxShadowBlurHvr}px ${boxShadowSpreadHvr}px rgba(${parseInt(boxShadowColorHvr.slice(1, 3), 16)}, ${parseInt(boxShadowColorHvr.slice(3, 5), 16)}, ${parseInt(boxShadowColorHvr.slice(5, 7), 16)}, ${boxShadowColorOpacityHvr / 100})`
            : 'none',
            }),
 

        background: backgroundTypeHvr === 'color' ? backgroundColorHvr :
            backgroundTypeHvr === 'gradient' ? backgroundGradientHvr || undefined :
                backgroundImageHvr ? `url(${backgroundImageHvr.url})` : 'none',
        backgroundPosition: formatBackgroundPosition(backgroundPositionHvr),
        backgroundAttachment: backgroundAttachmentHvr || undefined,
        backgroundRepeat: backgroundRepeatHvr || undefined,
        backgroundSize: backgroundSizeHvr || undefined,
    };
    const filteredHoverStyles = omitBy(hoverStyles, value => !value);

    const mergedStyles = {
        ...styles,
        ...(isHovered ? filteredHoverStyles : {}),
    };
   
    let transformstyle = 'none'; // Default value


    if(attributes.imagehvreffect==='flip'){
        if(attributes.flipside=== 'left'){
            transformstyle = 'rotateY(-180deg)';
        }else if(attributes.flipside === 'right'){
            transformstyle = 'rotateY(180deg)';
        } else if(attributes.flipside === 'top'){
            transformstyle = 'rotateX(180deg)';
        } else if(attributes.flipside==='bottom'){
            transformstyle = 'rotateX(-180deg)';
        }
    } else if(attributes.imagehvreffect==='flip-z'){
        transformstyle = 'rotateX(180deg) rotateZ(90deg)';
    }else if(attributes.imagehvreffect==='flip-x'){
        transformstyle = 'rotateY(180deg) rotateZ(90deg)';
    }else if(attributes.imagehvreffect==='zoom-in'){
        transformstyle = 'scale(0.5)';
    }else if(attributes.imagehvreffect==='zoom-out'){
        transformstyle = '';
    }else if(attributes.imagehvreffect==='fade-in'){
        transformstyle = '';
    }else if(attributes.imagehvreffect==='slide'){
        if(attributes.flipside=== 'left'){
            transformstyle = 'translateX(-105%)';
        }else if(attributes.flipside === 'right'){
            transformstyle = 'translateX(105%)';
        } else if(attributes.flipside === 'top'){
            transformstyle = 'translateY(-105%)';
        } else if(attributes.flipside==='bottom'){
            transformstyle = 'translateY(105%)';
        }
    }else if(attributes.imagehvreffect==='push'){
        if(attributes.flipside=== 'left'){
            transformstyle = 'translateX(-100%)';
        }else if(attributes.flipside === 'right'){
            transformstyle = 'translateX(100%)';
        } else if(attributes.flipside === 'top'){
            transformstyle = 'translateY(100%)';
        } else if(attributes.flipside==='bottom'){
            transformstyle = 'translateY(-100%)';
        }
    }

    const [selectedBlockClass, setSelectedBlockClass] = useState(null);
    
    const selectedBlock = useSelect((select) => {
        return select('core/block-editor').getSelectedBlock();
    });
    
    useEffect(() => {
        if (selectedBlock) {
            const { attributes, clientId ,name} = selectedBlock;
            const blockClass = attributes.className || ''; // Get the className of the selected block
            // Check if the selected block is an inner block
            if (name === 'vayu-blocks/image' || name === 'vayu-blocks/advance-slider' || name === 'vayu-blocks/advance-heading' || name === 'vayu-blocks/advance-button' || name==='vayu-blocks/advance-container') {
                // Find the parent block (the immediate container)
                const parentBlockClientIds = select('core/block-editor').getBlockParents(clientId);
                if (parentBlockClientIds.length > 1) {
                    // We want the first parent (the front or back image block)
                    const parentBlockClientId = parentBlockClientIds[1]; // Get the direct parent block
                    const parentBlock = select('core/block-editor').getBlock(parentBlockClientId);
                    const parentBlockClass = parentBlock.attributes.className || '';
                    // Update selectedBlockClass with parent class
                    setSelectedBlockClass(parentBlockClass);
                } else {
                    setSelectedBlockClass(null); // No valid parent found
                }
            } else {
                // Set the class for non-inner blocks
                setSelectedBlockClass(blockClass);
               
            }
        } else {
            setSelectedBlockClass(null); // Reset if no block is selected
        }
    }, [selectedBlock]);
    

    let back_z_index = 0;
    let front_opacity = 1;
    let back_opacity = 1;

    if(!attributes.selectedanimation){
        back_opacity=0;
    }

    if (selectedBlockClass && selectedBlockClass.includes('wp-block-vayu-blocks-image-flip')) {
        // Do something for the 'wp-block-vayu-blocks-image-flip' class
        setAttributes({selectedanimation:true});
        front_opacity=1;
    } else if (selectedBlockClass && selectedBlockClass.includes('vayu_blocks_flip-box-front')) {
        // Do something for the 'vayu_blocks_flip-box-front' class
        back_z_index = 1;
        setAttributes({selectedanimation:false});
        front_opacity=1;
    } else if (selectedBlockClass && selectedBlockClass.includes('vayu_blocks_flip-box-back')) {
        // Do something for the 'vayu_blocks_flip-box-back' class
        back_z_index = 100;
        back_opacity = 1;
        transformstyle= 'none';
        setAttributes({selectedanimation:false});
        front_opacity=0;
    } else{
        back_z_index = 1;
        front_opacity=1;
        back_opacity = 1;
        setAttributes({selectedanimation:true});
    }

    if(attributes.imagehvreffect === 'zoom-in'){
        back_opacity=0;
    }

    const blockProps = useBlockProps({
        className: 'custom-margin',
        style: {
            ...mergedStyles,
           '--back-transform-style': transformstyle, 
           '--back-z-index' : back_z_index,
           '--front-opacity' :front_opacity,
           '--back-opacity' : back_opacity,
        },

        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    });

    
    if(attributes.classNamemain !== blockProps.className) {
        setAttributes({classNamemain: blockProps.className});
    }

    return (
        <div {...blockProps}>
            {children}
        </div>
    );
}