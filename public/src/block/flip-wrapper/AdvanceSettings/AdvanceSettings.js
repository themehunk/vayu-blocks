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

    }

    if ( isTablet ) {

        customwidth = {
                
            'width':attributes.customWidthTablet + attributes.customWidthUnit,
            
        };
       

    }

    if ( isMobile ) {

        customwidth = {
                
            'width':attributes.customWidthMobile + attributes.customWidthUnit,
            
        };
    
    }

    // Determine the borderRadius based on condition
    const borderRadius = `${attributes.advanceRadius.top} ${attributes.advanceRadius.right} ${attributes.advanceRadius.bottom} ${attributes.advanceRadius.left}`;

    // Prepare the style object
    const styles = {
        ...customwidth,
        ...paddingStyles,
        ...marginStyles,  
        
        order: order === 'custom' ? customOrder : 'undefined',
      
        ...(attributes.advancebordertype === 'color' && {
            borderTop: `${attributes.advanceborder.topwidth} ${attributes.advanceborder.topstyle} ${attributes.advanceborder.topcolor}`,
            borderBottom: `${attributes.advanceborder.bottomwidth} ${attributes.advanceborder.bottomstyle} ${attributes.advanceborder.bottomcolor}`,
            borderLeft: `${attributes.advanceborder.leftwidth} ${attributes.advanceborder.leftstyle} ${attributes.advanceborder.leftcolor}`,
            borderRight: `${attributes.advanceborder.rightwidth} ${attributes.advanceborder.rightstyle} ${attributes.advanceborder.rightcolor}`,
    
            borderRadius: borderRadius,
        }),

        ...(attributes.advancebordertype === 'gradient' && {
            borderImage:`${attributes.advancebordergradient} 30%`,
            borderWidth: `${attributes.advancegradienttop} ${attributes.advancegradientbottom} ${attributes.advancegradientleft} ${attributes.advancegradientright}`,

            borderImageOutset : `${attributes.advancegradientborderimageoutset}px`,
        }),

        ...(attributes.advancebordertype === 'image' && {
            borderImage: 
                attributes.advanceborderimagetype === 'custom' 
                    ? `url(${attributes.advanceborderimage}) ${attributes.advanceborderimagesize}% / ${attributes.advanceimagetop} ${attributes.advanceimagebottom} ${attributes.advanceimageleft} ${attributes.advanceimageright} ${attributes.advancespace}` 
                    : attributes.advanceborderimagetype === 'image1' 
                        ? `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE3oR0_1fMluZWzbUZo_e-0O-Rkdq6xNudQ&s) ${attributes.advanceborderimagesize}% / ${attributes.advanceimagetop} ${attributes.advanceimagebottom} ${attributes.advanceimageleft} ${attributes.advanceimageright} ${attributes.advancespace}`
                        : attributes.advanceborderimagetype === 'image2' 
                            ? `url(https://t4.ftcdn.net/jpg/00/90/22/23/360_F_90222304_MnOvAi5X9Rr2ywonhlSpaDPWD0MmLgiY.jpg) ${attributes.advanceborderimagesize}% / ${attributes.advanceimagetop} ${attributes.advanceimagebottom} ${attributes.advanceimageleft} ${attributes.advanceimageright} ${attributes.advancespace}` 
                            : attributes.advanceborderimagetype === 'image3' 
                                ? `url(https://www.w3schools.com/cssref/border.png) ${attributes.advanceborderimagesize}% / ${attributes.advanceimagetop} ${attributes.advanceimagebottom} ${attributes.advanceimageleft} ${attributes.advanceimageright} ${attributes.advancespace}` 
                                : attributes.advanceborderimagetype === 'image4' 
                                    ? `url(https://w7.pngwing.com/pngs/169/875/png-transparent-frame-diamond-lace-border-border-frame-symmetry-thumbnail.png) ${attributes.advanceborderimagesize}% / ${attributes.advanceimagetop} ${attributes.advanceimagebottom} ${attributes.advanceimageleft} ${attributes.advanceimageright} ${attributes.advancespace}` 
                                    : 'none', // fallback if needed


                borderImageOutset : `${attributes.advanceborderimageoutset}px`,
        }),
        
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

    const mergedStyles = {
        ...styles,
    };

    const blockProps = useBlockProps({
        className: 'custom-margin',
        style: {
            ...mergedStyles,
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