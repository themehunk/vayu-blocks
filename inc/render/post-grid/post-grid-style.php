<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function generate_inline_styles($attr) {
    $css = '';
    // Generate unique ID
    $uniqueId = $attr['pg_posts'][0]['uniqueID'];
    //Main div
    $css .= ".th-post-grid-wrapper-{$uniqueId} {";

        if (isset($attr['widthType'])) {
            if ($attr['widthType'] === 'fullwidth') {
                $css .= "width: 100%; max-width: 100%!important; display: flex;";
            } elseif ($attr['widthType'] === 'inlinewidth') {
                $css .= "width: auto; display: inline-flex;";
            } elseif ($attr['widthType'] === 'customwidth') {
                $customWidthUnit = isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px';
                $css .= isset($attr['customWidth']) ? "width: {$attr['customWidth']}{$customWidthUnit};" : '';
                $css .= "display: flex;";
            } else {
                // Default case when $attr['widthType'] does not match any expected value
                $css .= "width: 100%;"; // Adjust default styles as needed
            }
        } else {
            // Default case when $attr['widthType'] is not set
            $css .= "width: 100%;"; // Adjust default styles as needed
        }
        

        // Padding
        $paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
        $css .= isset($attr['paddingTop']) ? "padding-top: " . esc_attr($attr['paddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingBottom']) ? "padding-bottom: " . esc_attr($attr['paddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingLeft']) ? "padding-left: " . esc_attr($attr['paddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingRight']) ? "padding-right: " . esc_attr($attr['paddingRight']) . $paddingUnit . ";" : '';
        

        // Margin
        $marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
        $css .= isset($attr['marginTop']) ? "margin-top: " . esc_attr($attr['marginTop']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginBottom']) ? "margin-bottom: " . esc_attr($attr['marginBottom']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginLeft']) ? "margin-left: " . esc_attr($attr['marginLeft']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginRight']) ? "margin-right: " . esc_attr($attr['marginRight']) . $marginUnit . ";" : '';

        // Position and Z-index
        $css .= isset($attr['position']) ? "position: " . esc_attr($attr['position']) . ";" : '';
        $css .= isset($attr['zIndex']) ? "z-index: " . esc_attr($attr['zIndex']) . ";" : '';

        // Alignment and Order
        $css .= isset($attr['selfAlign']) ? "align-self: " . esc_attr($attr['selfAlign']) . ";" : '';
        $css .= isset($attr['order']) && $attr['order'] === 'custom' && isset($attr['customOrder']) ? "order: " . esc_attr($attr['customOrder']) . ";" : '';

        // Flex properties
        $css .= isset($attr['flexSize']) ? "flex-basis: " . esc_attr($attr['flexSize']) . ";" : '';
        $css .= isset($attr['flexGrow']) ? "flex-grow: " . esc_attr($attr['flexGrow']) . ";" : '';
        $css .= isset($attr['flexShrink']) ? "flex-shrink: " . esc_attr($attr['flexShrink']) . ";" : '';

        // Border
        $borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
        $css .= isset($attr['borderType']) ? "border-style: " . esc_attr($attr['borderType']) . ";" : '';
        $css .= isset($attr['borderWidthTop']) ? "border-top-width: " . esc_attr($attr['borderWidthTop']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthBottom']) ? "border-bottom-width: " . esc_attr($attr['borderWidthBottom']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthLeft']) ? "border-left-width: " . esc_attr($attr['borderWidthLeft']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthRight']) ? "border-right-width: " . esc_attr($attr['borderWidthRight']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderColor']) ? "border-color: " . esc_attr($attr['borderColor']) . ";" : '';

        // Border-radius
        $borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
        $borderRadiusTop = isset($attr['borderRadiusTop']) ? esc_attr($attr['borderRadiusTop']) : '0';
        $borderRadiusRight = isset($attr['borderRadiusRight']) ? esc_attr($attr['borderRadiusRight']) : '0';
        $borderRadiusBottom = isset($attr['borderRadiusBottom']) ? esc_attr($attr['borderRadiusBottom']) : '0';
        $borderRadiusLeft = isset($attr['borderRadiusLeft']) ? esc_attr($attr['borderRadiusLeft']) : '0';

        $css .= "border-radius: {$borderRadiusTop}{$borderRadiusUnit} {$borderRadiusRight}{$borderRadiusUnit} {$borderRadiusBottom}{$borderRadiusUnit} {$borderRadiusLeft}{$borderRadiusUnit};";

            // Box-shadow
        if (isset($attr['boxShadow']) && $attr['boxShadow']) {
            $boxShadowColor = 'rgba(' . implode(', ', [
                hexdec(substr($attr['boxShadowColor'], 1, 2)), // Red
                hexdec(substr($attr['boxShadowColor'], 3, 2)), // Green
                hexdec(substr($attr['boxShadowColor'], 5, 2))  // Blue
            ]) . ', ' . ((float) $attr['boxShadowColorOpacity'] / 100) . ')';
            $css .= "box-shadow: " . esc_attr($attr['boxShadowHorizontal']) . 'px ' .
                                esc_attr($attr['boxShadowVertical']) . 'px ' .
                                esc_attr($attr['boxShadowBlur']) . 'px ' .
                                esc_attr($attr['boxShadowSpread']) . 'px ' .
                                $boxShadowColor . ";";
        } else {
            $css .= "box-shadow: none;";
        }

        // Background
        if (isset($attr['backgroundType'])) {
            if ($attr['backgroundType'] === 'color' && isset($attr['backgroundColor'])) {
                $css .= "background: " . esc_attr($attr['backgroundColor']) . ";";
            } elseif ($attr['backgroundType'] === 'gradient' && isset($attr['backgroundGradient'])) {
                $css .= "background: " . esc_attr($attr['backgroundGradient']) . ";";
            } elseif (isset($attr['backgroundImage']) && isset($attr['backgroundImage']['url'])) {
                $css .= "background: url(" . esc_url($attr['backgroundImage']['url']) . ");";
            } else {
                $css .= "background: none;";
            }
        } elseif(isset($attr['backgroundColor'])) { 
            $css .= "background: " . esc_attr($attr['backgroundColor']) . ";";
        }

        // Background properties
        $css .= isset($attr['backgroundPosition']) ? "background-position: " . esc_attr($attr['backgroundPosition']['x']) . ',' . esc_attr($attr['backgroundPosition']['y']) . ";" : 'background-position: 50%, 50%;';
        $css .= isset($attr['backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['backgroundAttachment']) . ";" : '';
        $css .= isset($attr['backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['backgroundRepeat']) . ";" : '';
        $css .= isset($attr['backgroundSize']) ? "background-size: " . esc_attr($attr['backgroundSize']) . ";" : '';

        // Transition
        $css .= isset($attr['transitionAll']) ? "transition: all " . esc_attr($attr['transitionAll']) . "s ease-in-out;" : '';

        // Grid properties
        $css .= "display: grid;";
        $gridTemplateColumns = isset($attr['pg_postLayoutColumns']) ? esc_attr($attr['pg_postLayoutColumns']) : 'auto-fit';
        $css .= "grid-template-columns: repeat({$gridTemplateColumns}, 1fr);";
        $css .= "max-width: 100%;";
        $gridGapUp = isset($attr['pg_gapup']) ? esc_attr($attr['pg_gapup']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
        $gridGap = isset($attr['pg_gap']) ? esc_attr($attr['pg_gap']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
        $css .= "grid-gap: {$gridGapUp} {$gridGap};";
        $css .= "grid-auto-rows: minmax(100px, auto);";
    $css .= "}";

    //Post
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} {";

        // Padding
        $paddingUnit = isset($attr['buttonpaddingUnit']) ? esc_attr($attr['buttonpaddingUnit']) : 'px';
        $css .= isset($attr['pg_layoutPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_layoutPaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_layoutPaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_layoutPaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_layoutPaddingRight']) . $paddingUnit . ";" : '';
        
        // Display
        $css .= "display: grid;";
        
        // Background
        $css .= isset($attr['layout_backgroundColor']) ? "background: " . esc_attr($attr['layout_backgroundColor']) . ";" : '';
        
        // Border radius
        $css .= isset($attr['pg_postBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_postBorderRadius']) . "px;" : '';
        
        // Font size
        $css .= isset($attr['pg_textSize']) ? "font-size: " . esc_attr($attr['pg_textSize']) . "px;" : '';
        
        // Border
        if (isset($attr['layoutborderType']) && isset($attr['pg_layoutBorder']) && isset($attr['pg_layoutBorderColor'])) {
            $css .= "border: " . esc_attr($attr['layoutborderType']) . ' ' . esc_attr($attr['pg_layoutBorder']) . "px " . esc_attr($attr['pg_layoutBorderColor']) . ";";
        }
        
        // Text color
        $css .= isset($attr['pg_textColor']) ? "color: " . esc_attr($attr['pg_textColor']) . ";" : '';
        
        // Position
        $css .= "position: relative;";
        
        // Background image
        if (isset($attr['layout_backgroundImage']) && !empty($attr['layout_backgroundImage']['url'])) {
            $css .= "background-image: url(" . esc_url($attr['layout_backgroundImage']['url']) . ");";
        }
        
        // Background attachment, repeat, size
        $css .= isset($attr['layout_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['layout_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['layout_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['layout_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['layout_backgroundSize']) ? "background-size: " . esc_attr($attr['layout_backgroundSize']) . ";" : '';
        
    $css .= "}";
       
    //Category
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-category-styles-{$uniqueId} {";

       // Padding
        $categoryPaddingUnit = isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px';
        $css .= isset($attr['pg_categoryPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_categoryPaddingTop']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_categoryPaddingBottom']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_categoryPaddingLeft']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_categoryPaddingRight']) . $categoryPaddingUnit . ";" : '';

        // Text color
        $css .= isset($attr['pg_categoryTextColor']) ? "color: " . esc_attr($attr['pg_categoryTextColor']) . ";" : '';

        // Background
        $css .= isset($attr['category_backgroundColor']) ? "background: " . esc_attr($attr['category_backgroundColor']) . ";" : '';
        $css .= isset($attr['category_backgroundImage']) && !empty($attr['category_backgroundImage']['url']) ? "background-image: url(" . esc_url($attr['category_backgroundImage']['url']) . ");" : '';
        $css .= isset($attr['category_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['category_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['category_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['category_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['category_backgroundSize']) ? "background-size: " . esc_attr($attr['category_backgroundSize']) . ";" : '';

        // Font size
        $css .= isset($attr['pg_categoryTextSize']) ? "font-size: " . esc_attr($attr['pg_categoryTextSize']) . "px;" : '';

        // Border radius
        $css .= isset($attr['pg_categoryBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_categoryBorderRadius']) . "px;" : '';

        // Border
        if (isset($attr['categoryborderType']) && isset($attr['pg_categoryBorder']) && isset($attr['pg_categoryBorderColor'])) {
            $css .= "border: " . esc_attr($attr['categoryborderType']) . ' ' . esc_attr($attr['pg_categoryBorder']) . "px " . esc_attr($attr['pg_categoryBorderColor']) . ";";
        }

    $css .= "}";

    //Category
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-category-style-new-{$uniqueId} {";
        // Padding
        $categoryPaddingUnit = isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px';
        $css .= isset($attr['pg_categoryPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_categoryPaddingTop']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_categoryPaddingBottom']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_categoryPaddingLeft']) . $categoryPaddingUnit . ";" : '';
        $css .= isset($attr['pg_categoryPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_categoryPaddingRight']) . $categoryPaddingUnit . ";" : '';

        // Border radius
        $css .= isset($attr['pg_categoryBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_categoryBorderRadius']) . "px;" : '';

        // Border
        if (isset($attr['categoryborderType']) && isset($attr['pg_categoryBorder']) && isset($attr['pg_categoryBorderColor'])) {
            $css .= "border: " . esc_attr($attr['categoryborderType']) . ' ' . esc_attr($attr['pg_categoryBorder']) . "px " . esc_attr($attr['pg_categoryBorderColor']) . ";";
        }

        // Text color
        $css .= isset($attr['pg_categoryTextColor']) ? "color: " . esc_attr($attr['pg_categoryTextColor']) . ";" : '';

        // Background
        $css .= isset($attr['category_backgroundColor']) ? "background: " . esc_attr($attr['category_backgroundColor']) . ";" : '';
        $css .= isset($attr['category_backgroundImage']) && !empty($attr['category_backgroundImage']['url']) ? "background-image: url(" . esc_url($attr['category_backgroundImage']['url']) . ");" : '';
        $css .= isset($attr['category_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['category_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['category_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['category_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['category_backgroundSize']) ? "background-size: " . esc_attr($attr['category_backgroundSize']) . ";" : '';

        // Font size
        $css .= isset($attr['pg_categoryTextSize']) ? "font-size: " . esc_attr($attr['pg_categoryTextSize']) . "px;" : '';

    $css .= "}";

    //Tag
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-tag-style-new-{$uniqueId} {";
        $css .= "display: inline-block;";

        // Padding
        $css .= isset($attr['pg_tagPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_tagPaddingTop']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_tagPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_tagPaddingBottom']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_tagPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_tagPaddingLeft']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_tagPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_tagPaddingRight']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : 'px') . ";" : '';
        
        // Border radius
        $css .= isset($attr['pg_tagBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_tagBorderRadius']) . "px;" : '';
    
        // Text color
        $css .= isset($attr['pg_tagTextColor']) ? "color: " . esc_attr($attr['pg_tagTextColor']) . ";" : '';
    
        // Background
        $css .= isset($attr['tag_backgroundColor']) ? "background: " . esc_attr($attr['tag_backgroundColor']) . ";" : '';
        $css .= isset($attr['tag_backgroundImage']) && $attr['tag_backgroundImage'] ? "background-image: url(" . esc_url($attr['tag_backgroundImage']['url']) . ");" : '';
        $css .= isset($attr['tag_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['tag_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['tag_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['tag_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['tag_backgroundSize']) ? "background-size: " . esc_attr($attr['tag_backgroundSize']) . ";" : '';
    
        // Font size
        $css .= isset($attr['pg_tagTextSize']) ? "font-size: " . esc_attr($attr['pg_tagTextSize']) . "px;" : '';
    
        // Border
        $css .= isset($attr['tagborderType']) && isset($attr['pg_tagBorder']) && isset($attr['pg_tagBorderColor']) ? 
            "border: " . esc_attr($attr['tagborderType']) . ' ' . esc_attr($attr['pg_tagBorder']) . "px " . esc_attr($attr['pg_tagBorderColor']) . ";" : '';
    
    $css .= "}";
         
    //Hover
    $css .= ".th-post-grid-wrapper-{$uniqueId}:hover {";

        // Border styles
        $css .= isset($attr['borderHvrType']) ? "border-style: " . esc_attr($attr['borderHvrType']) . ";" : '';
        $css .= isset($attr['borderWidthHvrTop']) && isset($attr['borderWidthHvrUnit']) ? "border-top-width: " . esc_attr($attr['borderWidthHvrTop']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrBottom']) && isset($attr['borderWidthHvrUnit']) ? "border-bottom-width: " . esc_attr($attr['borderWidthHvrBottom']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrLeft']) && isset($attr['borderWidthHvrUnit']) ? "border-left-width: " . esc_attr($attr['borderWidthHvrLeft']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrRight']) && isset($attr['borderWidthHvrUnit']) ? "border-right-width: " . esc_attr($attr['borderWidthHvrRight']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderColorHvr']) ? "border-color: " . esc_attr($attr['borderColorHvr']) . ";" : '';

        // Border radius
        $css .= isset($attr['borderRadiusHvrTop']) && isset($attr['borderRadiusHvrUnit']) ? "border-top-left-radius: " . esc_attr($attr['borderRadiusHvrTop']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrLeft']) && isset($attr['borderRadiusHvrUnit']) ? "border-top-right-radius: " . esc_attr($attr['borderRadiusHvrLeft']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrBottom']) && isset($attr['borderRadiusHvrUnit']) ? "border-bottom-right-radius: " . esc_attr($attr['borderRadiusHvrBottom']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrRight']) && isset($attr['borderRadiusHvrUnit']) ? "border-bottom-left-radius: " . esc_attr($attr['borderRadiusHvrRight']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';

        // Box-shadow
        if (isset($attr['boxShadowHvr']) && $attr['boxShadowHvr']) {
            // Ensure the boxShadowColorHvr and boxShadowColorOpacityHvr keys are set
            if (isset($attr['boxShadowColorHvr'], $attr['boxShadowColorOpacityHvr'])) {
                $boxShadowColor = 'rgba(' . implode(', ', [
                    hexdec(substr($attr['boxShadowColorHvr'], 1, 2)), // Red
                    hexdec(substr($attr['boxShadowColorHvr'], 3, 2)), // Green
                    hexdec(substr($attr['boxShadowColorHvr'], 5, 2))  // Blue
                ]) . ', ' . ((float) $attr['boxShadowColorOpacityHvr'] / 100) . ')';
            } else {
                $boxShadowColor = 'rgba(0, 0, 0, 0)'; // Default value in case of missing color
            }

            // Ensure each box shadow dimension key is set, use a default value if not
            $boxShadowHorizontal = isset($attr['boxShadowHorizontalHvr']) ? esc_attr($attr['boxShadowHorizontalHvr']) : '0';
            $boxShadowVertical = isset($attr['boxShadowVerticalHvr']) ? esc_attr($attr['boxShadowVerticalHvr']) : '0';
            $boxShadowBlur = isset($attr['boxShadowBlurHvr']) ? esc_attr($attr['boxShadowBlurHvr']) : '0';
            $boxShadowSpread = isset($attr['boxShadowSpreadHvr']) ? esc_attr($attr['boxShadowSpreadHvr']) : '0';

            $css .= "box-shadow: " . $boxShadowHorizontal . 'px ' .
                                    $boxShadowVertical . 'px ' .
                                    $boxShadowBlur . 'px ' .
                                    $boxShadowSpread . 'px ' .
                                    $boxShadowColor . ";";
        } else {
            $css .= "box-shadow: none;";
        }

        // Background
        if (isset($attr['backgroundTypeHvr'])) {
            if ($attr['backgroundTypeHvr'] === 'color' && isset($attr['backgroundColorHvr'])) {
                $css .= "background: " . esc_attr($attr['backgroundColorHvr']) . ";";
            } elseif ($attr['backgroundTypeHvr'] === 'gradient' && isset($attr['backgroundGradientHvr'])) {
                $css .= "background: " . esc_attr($attr['backgroundGradientHvr']) . ";";
            } elseif (isset($attr['backgroundImageHvr']) && isset($attr['backgroundImageHvr']['url'])) {
                $css .= "background: url(" . esc_url($attr['backgroundImageHvr']['url']) . ");";
            } else {
                $css .= "background: none;";
            }
        } elseif(isset($attr['backgroundColorHvr'])) { 
            $css .= "background: " . esc_attr($attr['backgroundColorHvr']) . ";";
        }

        // Background position, attachment, repeat, size
        $css .= isset($attr['backgroundPositionHvr']) ? "background-position: " . esc_attr($attr['backgroundPositionHvr']['x'] . ',' . $attr['backgroundPositionHvr']['y']) . ";" : '';
        $css .= isset($attr['backgroundAttachmentHvr']) ? "background-attachment: " . esc_attr($attr['backgroundAttachmentHvr']) . ";" : '';
        $css .= isset($attr['backgroundRepeatHvr']) ? "background-repeat: " . esc_attr($attr['backgroundRepeatHvr']) . ";" : '';
        $css .= isset($attr['backgroundSizeHvr']) ? "background-size: " . esc_attr($attr['backgroundSizeHvr']) . ";" : '';

        // Transition
        $css .= "transition: all 0.3s ease-in-out;";
            
    $css .= "}";
       
    //Featured Image
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-image-{$uniqueId} {";

        // Check if pg_imageBorderRadius is set, otherwise use default value 5px
        $border_radius = isset($attr['pg_imageBorderRadius']) ? esc_attr($attr['pg_imageBorderRadius']) . 'px' : '5px';
        $css .= "border-radius: {$border_radius};";
    $css .= "}";
        
    //category not for featured image
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} . post-grid-only-category-not-image-{$uniqueId} {";
        $css .= "color: " . esc_attr(isset($attr['pg_categoryTextColor']) ? $attr['pg_categoryTextColor'] : '#000000') . ";";
    $css .= "}";
       
    //title tag
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-titletag-{$uniqueId} {";
        $css .= isset($attr['pg_blockTitleColor']) ? "color: " . esc_attr($attr['pg_blockTitleColor']) . ";" : '';
        $css .= isset($attr['pg_blockTitleSize']) ? "font-size: " . esc_attr($attr['pg_blockTitleSize']) . "px;" : '';
    $css .= "}";
        
    //author
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-date-author-span-{$uniqueId} {";

        // Check if pg_dateTextSize is set
        if (isset($attr['pg_dateTextSize'])) {
            $css .= "font-size: " . esc_attr($attr['pg_dateTextSize']) . "px;";
        } else {
            $css .= "font-size: 14px;"; // Default font-size if not set
        }
        
        // Check if pg_dateColor is set
        if (isset($attr['pg_dateColor'])) {
            $css .= "color: " . esc_attr($attr['pg_dateColor']) . ";";
        } else {
            $css .= "color: #333;"; // Default color if not set
        }
        
    $css .= "}";

    //author
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-only-show-author-div-new-{$uniqueId} {";

        // Font Size
        if (isset($attr['pg_authorTextSize'])) {
            $css .= "font-size: " . esc_attr($attr['pg_authorTextSize']) . "px;";
        } else {
            $css .= "font-size: 16px;"; // Default font size
        }
        
        // Color
        if (isset($attr['pg_authorTextColor'])) {
            $css .= "color: " . esc_attr($attr['pg_authorTextColor']) . ";";
        } else {
            $css .= "color: #333;"; // Default color
        }
        
        // Scale (assuming this is for transform scale)
        if (isset($attr['pg_authorImageScale'])) {
            $css .= "transform: scale(" . esc_attr($attr['pg_authorImageScale']) . ");";
        } else {
            $css .= "transform: scale(1);"; // Default scale
        }
        
    $css .= "}";
       
    //author name
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-author-name-{$uniqueId} {";

        // Font Size
        if (isset($attr['pg_authorTextSize'])) {
            $css .= "font-size: " . esc_attr($attr['pg_authorTextSize']) . "px;";
        }
        
        // Color
        if (isset($attr['pg_authorTextColor'])) {
            $css .= "color: " . esc_attr($attr['pg_authorTextColor']) . ";";
        }
        
    $css .= "}";
        
    //date
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-date-main-{$uniqueId} {";

        // Font Size
        if (isset($attr['pg_dateTextSize'])) {
            $css .= "font-size: " . esc_attr($attr['pg_dateTextSize']) . "px;";
        }
        
        // Color
        if (isset($attr['pg_dateColor'])) {
            $css .= "color: " . esc_attr($attr['pg_dateColor']) . ";";
        }
        
    $css .= "}";
        
         
    return $css;
}
