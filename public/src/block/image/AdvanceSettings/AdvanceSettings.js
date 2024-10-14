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

    // console.log(customwidth);
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
   
    let opacity = (attributes.showPreview || attributes.overlay) ? 1 : 0;

    // Initialize imageurl for mask outside the object
    let imageurl = '';

    let imagePath = '';

    if (attributes.maskshape === 'circle') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve"><circle cx="240" cy="190" r="184"/></svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;

    } 
    else if (attributes.maskshape === 'diamond') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<rect x="106.001" y="56.001" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 275.3553 494.0559)" width="267.998" height="267.999"/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;    } 
    else if (attributes.maskshape === 'hexagone') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<polygon points="79.386,97.269 240,4.538 400.614,97.269 400.614,282.73 240,375.462 79.386,282.73 "/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;}
    else if (attributes.maskshape === 'rounded') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<path d="M421,309.436C421,343.437,393.437,371,359.436,371H120.564C86.563,371,59,343.437,59,309.436V70.564  C59,36.563,86.563,9,120.564,9h238.871C393.437,9,421,36.563,421,70.564V309.436z"/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;    
        }
    else if (attributes.maskshape === 'bob1') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<path d="M47.846,184.442c-87.942,134.709,80.073,196.702,186.331,196.702c104.494,0,222.582-39.417,222.582-160.557  C456.758-91.25,198.783-46.776,47.846,184.442z"/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;       } 
    else if (attributes.maskshape === 'bob2') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<path d="M393.879,31.896c96.935,41.811,41.553,265.103-29.118,320.414c-74.443,58.259-320.428,32.36-330.586-185.032  C29.551,68.561,183.588-58.822,393.879,31.896z"/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;       } 
    else if (attributes.maskshape === 'bob3') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<path d="M141.699,9.958c37.611-41.211,253.977,90.988,263.995,181.115c10.016,90.134-215.692,232.896-280.453,172.106
	C69.045,310.428,39.531,121.932,141.699,9.958z"/>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;       } 
    else if (attributes.maskshape === 'bob4') {
        // Define your SVG string
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 380" enable-background="new 0 0 480 380" xml:space="preserve">
<g>
	<path d="M69.19,26.334C54.496,39.876,42.91,57.185,35.302,75.221c-10.718,25.408-15.268,52.962-18.384,80.363
		c-10.069,88.57,17.375,190.72,112.557,217.96c63.844,18.273,133.074-0.437,191.492-27.517
		c85.828-39.789,206.786-163.646,105.685-255.719C372.3,40.81,284.499,59.485,220.248,32.528
		c-30.103-12.63-58.445-35.896-92.778-33.125C105.078,1.21,85.272,11.517,69.19,26.334z"/>
</g>
</svg>`;

        // Encode the SVG to Base64
        const svgBase64 = btoa(svg);

        // Create a Data URL
         imagePath = `data:image/svg+xml;base64,${svgBase64}`;       } 


    const blockProps = useBlockProps({
        className: 'custom-margin',
        style: {
            ...mergedStyles,
            '--image-hover-effect' : `${attributes.imagehvreffect}`,
            '--image-filter-effect' : `${attributes.imagehvrfilter}`,
            '--overlay-effect': `${attributes.mageoverlayouteffect}`,
            '--overlay-transitiontime': `${attributes.overlaytransitiontime}s`,
            '--image-transitiontime': `${attributes.imagetransitiontime}s`,
            '--overlay-opacity': `${opacity}`,
            '--button-hvr-background': `${attributes.buttonhvrbackground}`,
            '--button-hvr-color': `${attributes.buttonhvrcolor}`,
            '--overlay-border-radius' : `${attributes.imageborderRadius.top} ${attributes.imageborderRadius.right} ${attributes.imageborderRadius.bottom} ${attributes.imageborderRadius.left}`,
            '--image-url-shape' : `url(${imagePath})`,
            '--image-url-size' : `${attributes.masksize}`,
            '--image-url-position' :  `${attributes.maskposition}`,
            '--image-url-repeat' :  `${attributes.maskrepeat}`,
            '--overlay-hvr-color' :  `${attributes.overlayhvrcolor}`,
            '--image-transform': `${attributes.rotation}deg`,
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

