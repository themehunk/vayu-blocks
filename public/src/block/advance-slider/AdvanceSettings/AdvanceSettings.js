import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState} from 'react';
import { useSelect } from '@wordpress/data';
import { useViewportMatch} from '@wordpress/compose';
import { RiEqualFill, RiExternalLinkFill } from 'react-icons/ri';

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
    const borderradiusstyles = getborderradiusStyle();
    const borderradiusHvrstyles = getborderradiusHvrStyle();
    const customwidthstyles  =  getWidthStyle(); 

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

    if ( isDesktop ) {

        customwidth = {
                
            width:attributes.customWidth + attributes.customWidthUnit,
            
        };

    }

    if ( isTablet ) {

        customwidth = {
                
            'width':attributes.customWidthTablet + attributes.customWidthUnit,
            'max-width':attributes.customWidthTablet + attributes.customWidthUnit,
            
        };

    }

    if ( isMobile ) {

        customwidth = {
                
            'width':attributes.customWidthMobile + attributes.customWidthUnit,
            'max-width':attributes.customWidthMobile + attributes.customWidthUnit,
            
        };
    
    }


    // Prepare the style object
    const styles = {
        ...customwidth,
        ...paddingStyles,
        ...marginStyles,  
        ...borderradiusstyles,
        Width: '100%',
        
        order: order === 'custom' ? customOrder : 'undefined',
      
        borderStyle: borderType || undefined,
        borderTopWidth: borderWidthTop ? `${borderWidthTop}${borderWidthUnit}` : 0,
        borderBottomWidth: borderWidthBottom ? `${borderWidthBottom}${borderWidthUnit}` : 0,
        borderLeftWidth: borderWidthLeft ? `${borderWidthLeft}${borderWidthUnit}` : 0,
        borderRightWidth: borderWidthRight ? `${borderWidthRight}${borderWidthUnit}` : 0,
        borderColor: borderColor || undefined,
      
        
        boxShadow: boxShadow ?
        `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowSpread}px rgba(${parseInt(boxShadowColor.slice(1, 3), 16)}, ${parseInt(boxShadowColor.slice(3, 5), 16)}, ${parseInt(boxShadowColor.slice(5, 7), 16)}, ${boxShadowColorOpacity / 100})`
        : 'none',
 
        background: backgroundType === 'color' ? backgroundColor :
        backgroundType === 'gradient' ? backgroundGradient || undefined :
        backgroundImage ? `url(${backgroundImage.url})` : 'none',
        backgroundPosition: formatBackgroundPosition(backgroundPosition),
        backgroundAttachment: backgroundAttachment || undefined,
        backgroundRepeat: backgroundRepeat || undefined,
        backgroundSize: backgroundSize || undefined,
      
        transition: transitionAll ? `all ${transitionAll}s ease-in-out` : undefined,
        
    };
    
    const hoverStyles = {
        borderStyle: borderHvrType || undefined,
        borderTopWidth: borderWidthHvrTop ? `${borderWidthHvrTop}${borderWidthHvrUnit}` : undefined,
        borderBottomWidth: borderWidthHvrBottom ? `${borderWidthHvrBottom}${borderWidthHvrUnit}` : undefined,
        borderLeftWidth: borderWidthHvrLeft ? `${borderWidthHvrLeft}${borderWidthHvrUnit}` : undefined,
        borderRightWidth: borderWidthHvrRight ? `${borderWidthHvrRight}${borderWidthHvrUnit}` : undefined,
        borderColor: borderColorHvr || undefined,

        ...borderradiusHvrstyles,

        boxShadow: boxShadowHvr ?
        `${boxShadowHorizontalHvr}px ${boxShadowVerticalHvr}px ${boxShadowBlurHvr}px ${boxShadowSpreadHvr}px rgba(${parseInt(boxShadowColorHvr.slice(1, 3), 16)}, ${parseInt(boxShadowColorHvr.slice(3, 5), 16)}, ${parseInt(boxShadowColorHvr.slice(5, 7), 16)}, ${boxShadowColorOpacityHvr / 100})`
        : 'none',
 

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
   
    // Assume attributes is available in your context
    const animationtype = attributes.animationtype === 'animation1' 
    ? 'fadeInUp' 
    : attributes.animationtype === 'animation2'
    ? 'fadeInDown' : attributes.animationtype === 'animation3'
    ? 'fadeInLeft': attributes.animationtype === 'animation4'
    ? 'fadeInRight'
    : ''; // Default or fallback value

    const animationopacity = attributes.animationtype === 'noanimation' ? 1 : 0;

    const blockProps = useBlockProps({
        className: 'custom-margin',
        style: {
            ...mergedStyles,
            '--slider-margin': `${attributes.slidermargin}px`,
            '--sliderarrow-hover-color': `${attributes.arrowstyleleft.hovercolor}`,
            '--animation-type': animationtype,
            '--animation-type-opacity' : animationopacity,
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

