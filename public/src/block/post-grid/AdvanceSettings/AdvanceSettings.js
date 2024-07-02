import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from 'react';

// Utility function to filter out undefined or null values
const omitBy = (object, condition) => (
    Object.fromEntries(
        Object.entries(object).filter(([key, value]) => !condition(value))
    )
);

export default function AdvanceSettings({ children, attributes }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const {
        widthType,
        customWidthUnit,
        customWidth,
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

        borderRadiusTop,
        borderRadiusBottom,
        borderRadiusLeft,
        borderRadiusRight,
        borderRadiusUnit,
        
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

        transitionAll
    } = attributes;

        // console.log(attributes);
        const formatBackgroundPosition = (pos) => {
            return pos && pos.x !== undefined && pos.y !== undefined ? `${pos.x * 100}% ${pos.y * 100}%` : undefined;
          };
    // Prepare the style object
    const styles = {
        width: widthType === 'fullwidth' ? '100%' :
          widthType === 'inlinewidth' ? 'auto' :
          widthType === 'customwidth' ? `${customWidth}${customWidthUnit || 'px'}` : '100%',
      
        paddingTop: paddingTop ? `${paddingTop}${paddingUnit || 'px'}` : undefined,
        paddingBottom: paddingBottom ? `${paddingBottom}${paddingUnit || 'px'}` : undefined,
        paddingLeft: paddingLeft ? `${paddingLeft}${paddingUnit || 'px'}` : undefined,
        paddingRight: paddingRight ? `${paddingRight}${paddingUnit || 'px'}` : undefined,
      
        marginTop: marginTop ? `${marginTop}${marginUnit || 'px'}` : undefined,
        marginBottom: marginBottom ? `${marginBottom}${marginUnit || 'px'}` : undefined,
        marginLeft: marginLeft ? `${marginLeft}${marginUnit || 'px'}` : undefined,
        marginRight: marginRight ? `${marginRight}${marginUnit || 'px'}` : undefined,
      
        position: position || undefined,
        zIndex: zIndex || undefined,
        alignSelf: selfAlign || undefined,
        order: order === 'custom' ? customOrder : 'undefined',
        flexBasis: flexSize || undefined,
        flexGrow: flexGrow || undefined,
        flexShrink: flexShrink || undefined,
      
        borderStyle: borderType || undefined,
        borderTopWidth: borderWidthTop ? `${borderWidthTop}${borderWidthUnit}` : undefined,
        borderBottomWidth: borderWidthBottom ? `${borderWidthBottom}${borderWidthUnit}` : undefined,
        borderLeftWidth: borderWidthLeft ? `${borderWidthLeft}${borderWidthUnit}` : undefined,
        borderRightWidth: borderWidthRight ? `${borderWidthRight}${borderWidthUnit}` : undefined,
        borderColor: borderColor || undefined,
      
        borderTopLeftRadius: borderRadiusTop ? `${borderRadiusTop}${borderRadiusUnit}` : undefined,
        borderTopRightRadius: borderRadiusLeft ? `${borderRadiusLeft}${borderRadiusUnit}` : undefined,
        borderBottomRightRadius: borderRadiusBottom ? `${borderRadiusBottom}${borderRadiusUnit}` : undefined,
        borderBottomLeftRadius: borderRadiusRight ? `${borderRadiusRight}${borderRadiusUnit}` : undefined,
       
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
      
        // Hover state styles
        
        
      };

    const hoverStyles = {
        borderStyle: borderHvrType || undefined,
        borderTopWidth: borderWidthHvrTop ? `${borderWidthHvrTop}${borderWidthHvrUnit}` : undefined,
        borderBottomWidth: borderWidthHvrBottom ? `${borderWidthHvrBottom}${borderWidthHvrUnit}` : undefined,
        borderLeftWidth: borderWidthHvrLeft ? `${borderWidthHvrLeft}${borderWidthHvrUnit}` : undefined,
        borderRightWidth: borderWidthHvrRight ? `${borderWidthHvrRight}${borderWidthHvrUnit}` : undefined,
        borderColor: borderColorHvr || undefined,

        borderTopLeftRadius: borderRadiusHvrTop ? `${borderRadiusHvrTop}${borderRadiusHvrUnit}` : undefined,
        borderTopRightRadius: borderRadiusHvrLeft ? `${borderRadiusHvrLeft}${borderRadiusHvrUnit}` : undefined,
        borderBottomRightRadius: borderRadiusHvrBottom ? `${borderRadiusHvrBottom}${borderRadiusHvrUnit}` : undefined,
        borderBottomLeftRadius: borderRadiusHvrRight ? `${borderRadiusHvrRight}${borderRadiusHvrUnit}` : undefined,

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

    const blockProps = useBlockProps({
        style: mergedStyles,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    });

    return (
        <div {...blockProps}>
            {children}
        </div>
    );
}