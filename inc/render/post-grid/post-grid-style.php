<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function generate_inline_styles($attr) {

    $css = '';
    // Generate unique ID
    $uniqueId = $attr['pg_posts'][0]['uniqueID'];
   
    //attributes-merge
    $default_attributes = include('defaultattributes.php');
    $attr = array_merge($default_attributes, $attr);  


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
                $css .= "width: 100%;"; // Adjust default styles as needed
            }
        } else {
            $css .= "width: 100%;"; 
        }
        
        // Desktop Padding
        $paddingUnit = isset($attr['paddingUnit']) ? esc_attr($attr['paddingUnit']) : 'px';
        $css .= isset($attr['buttonpaddingTop']) ? "padding-top: " . esc_attr($attr['buttonpaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['buttonpaddingBottom']) ? "padding-bottom: " . esc_attr($attr['buttonpaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['buttonpaddingLeft']) ? "padding-left: " . esc_attr($attr['buttonpaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['buttonpaddingRight']) ? "padding-right: " . esc_attr($attr['buttonpaddingRight']) . $paddingUnit . ";" : '';

        // Desktop Padding
        $marginUnit = isset($attr['marginUnit']) ? esc_attr($attr['marginUnit']) : 'px';
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
    $css .= ".th-post-grid-inline-{$uniqueId} {";

        // Line height
        $css .= isset($attr['pg_spacing']) ? "line-height: " . esc_attr($attr['pg_spacing']) . ";" : '';

        // Desktop Padding
        $paddingUnit = isset($attr['pg_layoutpaddingUnit']) ? esc_attr($attr['pg_layoutpaddingUnit']) : 'px';
        $css .= isset($attr['pg_layoutpaddingTop']) ? "padding-top: " . esc_attr($attr['pg_layoutpaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutpaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_layoutpaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutpaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_layoutpaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_layoutpaddingRight']) ? "padding-right: " . esc_attr($attr['pg_layoutpaddingRight']) . $paddingUnit . ";" : '';
 
        
        if (isset($attr['layout_backgroundType'])) {
            if ($attr['layout_backgroundType'] === 'color' && isset($attr['layout_backgroundColor'])) {
                $css .= "background: " . esc_attr($attr['layout_backgroundColor']) . ";";
            } elseif ($attr['layout_backgroundType'] === 'gradient') {
                $css .= "background: " . (isset($attr['layout_backgroundGradient']) ? esc_attr($attr['layout_backgroundGradient']) : 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)') . ";";
            } elseif ($attr['layout_backgroundType'] === 'image'){
                $css .= "background: url(" . esc_url($attr['layout_backgroundImage']['url']) . ");";

            }
        } elseif (isset($attr['layout_backgroundColor'])) {
            $css .= "background: " . esc_attr($attr['layout_backgroundColor']) . ";";
        } else {
            $css .= "background: none;";
        }
    
        // Border radius
        $css .= isset($attr['pg_postTopBorderRadius']) ? "border-top-left-radius: " . esc_attr($attr['pg_postTopBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_postBottomBorderRadius']) ? "border-bottom-left-radius: " . esc_attr($attr['pg_postBottomBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_postLeftBorderRadius']) ? "border-bottom-right-radius: " . esc_attr($attr['pg_postLeftBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_postRightBorderRadius']) ? "border-top-right-radius: " . esc_attr($attr['pg_postRightBorderRadius']) . ";" : '';
                
        // Font size
        $css .= isset($attr['pg_textSize']) ? "font-size: " . esc_attr($attr['pg_textSize']) . "px;" : '';
        
        // Border
        if (isset($attr['layoutTopborderType']) && isset($attr['pg_layoutTopBorder']) && isset($attr['pg_layoutTopBorderColor'])) {
            $css .= "border-top: " . esc_attr($attr['layoutTopborderType']) . ' ' . esc_attr($attr['pg_layoutTopBorder']) . " " . esc_attr($attr['pg_layoutTopBorderColor']) . ";";
        }
        if (isset($attr['layoutBottomborderType']) && isset($attr['pg_layoutBottomBorder']) && isset($attr['pg_layoutBottomBorderColor'])) {
            $css .= "border-bottom: " . esc_attr($attr['layoutBottomborderType']) . ' ' . esc_attr($attr['pg_layoutBottomBorder']) . " " . esc_attr($attr['pg_layoutBottomBorderColor']) . ";";
        }
        if (isset($attr['layoutLeftborderType']) && isset($attr['pg_layoutLeftBorder']) && isset($attr['pg_layoutLeftBorderColor'])) {
            $css .= "border-left: " . esc_attr($attr['layoutLeftborderType']) . ' ' . esc_attr($attr['pg_layoutLeftBorder']) . " " . esc_attr($attr['pg_layoutLeftBorderColor']) . ";";
        }
        if (isset($attr['layoutRightborderType']) && isset($attr['pg_layoutRightBorder']) && isset($attr['pg_layoutRightBorderColor'])) {
            $css .= "border-right: " . esc_attr($attr['layoutRightborderType']) . ' ' . esc_attr($attr['pg_layoutRightBorder']) . " " . esc_attr($attr['pg_layoutRightBorderColor']) . ";";
        }        
        
        // Text color
        $css .= isset($attr['pg_textColor']) ? "color: " . esc_attr($attr['pg_textColor']) . ";" : '';
        
        // Position
        $css .= "position: relative;";
        
        // Background attachment, repeat, size
        $css .= isset($attr['layout_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['layout_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['layout_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['layout_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['layout_backgroundSize']) ? "background-size: " . esc_attr($attr['layout_backgroundSize']) . ";" : '';
        
    $css .= "}";

    //Category
    $css .= ".post-grid-category-style-new-{$uniqueId} {";
        // Cursor
        $css .= "cursor: pointer;";

        // Padding
        $paddingUnit = isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px';
        $css .= isset($attr['pg_CategorypaddingTop']) ? "padding-top: " . esc_attr($attr['pg_CategorypaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_CategorypaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_CategorypaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_CategorypaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_CategorypaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_CategorypaddingRight']) ? "padding-right: " . esc_attr($attr['pg_CategorypaddingRight']) . $paddingUnit . ";" : '';

        // Border radius
        $css .= isset($attr['pg_categoryBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_categoryBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_categoryTopBorderRadius']) ? "border-top-left-radius: " . esc_attr($attr['pg_categoryTopBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_categoryBottomBorderRadius']) ? "border-bottom-left-radius: " . esc_attr($attr['pg_categoryBottomBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_categoryLeftBorderRadius']) ? "border-bottom-right-radius: " . esc_attr($attr['pg_categoryLeftBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_categoryRightBorderRadius']) ? "border-top-right-radius: " . esc_attr($attr['pg_categoryRightBorderRadius']) . ";" : '';

        // Border
        $css .= isset($attr['categoryTopborderType']) && isset($attr['pg_categoryTopBorder']) && isset($attr['pg_categoryTopBorderColor']) ? 
        "border-top: " . esc_attr($attr['categoryTopborderType']) . ' ' . esc_attr($attr['pg_categoryTopBorder']) . " " . esc_attr($attr['pg_categoryTopBorderColor']) . ";" : '';
        $css .= isset($attr['categoryBottomborderType']) && isset($attr['pg_categoryBottomBorder']) && isset($attr['pg_categoryBottomBorderColor']) ? 
        "border-bottom: " . esc_attr($attr['categoryBottomborderType']) . ' ' . esc_attr($attr['pg_categoryBottomBorder']) . " " . esc_attr($attr['pg_categoryBottomBorderColor']) . ";" : '';
        $css .= isset($attr['categoryLeftborderType']) && isset($attr['pg_categoryLeftBorder']) && isset($attr['pg_categoryLeftBorderColor']) ? 
        "border-left: " . esc_attr($attr['categoryLeftborderType']) . ' ' . esc_attr($attr['pg_categoryLeftBorder']) . " " . esc_attr($attr['pg_categoryLeftBorderColor']) . ";" : '';
        $css .= isset($attr['categoryRightborderType']) && isset($attr['pg_categoryRightBorder']) && isset($attr['pg_categoryRightBorderColor']) ? 
        "border-right: " . esc_attr($attr['categoryRightborderType']) . ' ' . esc_attr($attr['pg_categoryRightBorder']) . " " . esc_attr($attr['pg_categoryRightBorderColor']) . ";" : '';

        $css .= "text-decoration: none;";
        $css .= "margin-left: 5px;";
        $css .= "font-weight: 600;";
        $css .= "margin-top: 3%;";

        // Text color
        $css .= isset($attr['pg_categoryTextColor']) ? "color: " . esc_attr($attr['pg_categoryTextColor']) . ";" : '';

        // Background
        $css .= isset($attr['category_backgroundColor']) ? "background: " . esc_attr($attr['category_backgroundColor']) . ";" : '';

        // Font size
        $css .= isset($attr['pg_categoryTextSize']) ? "font-size: " . esc_attr($attr['pg_categoryTextSize']) . "px;" : '';

    $css .= "}";

    //Tag
    $css .= ".post-grid-tag-style-new-{$uniqueId} {";
        // Cursor
        $css .= "cursor: pointer;";
        // Display
        $css .= "display: inline-block;";
        $css .= "text-decoration: none;";
        $css .= "margin-left: 2px;";
        // Desktop Padding
        $paddingUnit = isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : 'px';
        $css .= isset($attr['pg_TagpaddingTop']) ? "padding-top: " . esc_attr($attr['pg_TagpaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_TagpaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_TagpaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_TagpaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_TagpaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_TagpaddingRight']) ? "padding-right: " . esc_attr($attr['pg_TagpaddingRight']) . $paddingUnit . ";" : '';
        
        // Font Weight and Box Sizing
        $css .= "font-weight: 600;";
        $css .= "box-sizing: border-box;";
        
        // Text Color
        $css .= isset($attr['pg_tagTextColor']) ? "color: " . esc_attr($attr['pg_tagTextColor']) . ";" : '';
        
        // Background
        if (isset($attr['tag_backgroundType'])) {
            if ($attr['tag_backgroundType'] === 'color' && isset($attr['tag_backgroundColor'])) {
                $css .= "background: " . esc_attr($attr['tag_backgroundColor']) . ";";
            } elseif ($attr['tag_backgroundType'] === 'gradient' && isset($attr['tag_backgroundGradient'])) {
                $css .= "background: " . esc_attr($attr['tag_backgroundGradient']) . ";";
            } elseif (isset($attr['tag_backgroundImage']) && isset($attr['tag_backgroundImage']['url'])) {
                $css .= "background: url(" . esc_url($attr['tag_backgroundImage']['url']) . ");";
            } else {
                $css .= "background: none;";
            }
        } elseif (isset($attr['tag_backgroundColor'])) {
            $css .= "background: " . esc_attr($attr['tag_backgroundColor']) . ";";
        }
        
        // Font Size
        $css .= isset($attr['pg_tagTextSize']) ? "font-size: " . esc_attr($attr['pg_tagTextSize']) . "px;" : '';
        
        // Border Radius
        $css .= isset($attr['pg_tagTopBorderRadius']) ? "border-top-left-radius: " . esc_attr($attr['pg_tagTopBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_tagBottomBorderRadius']) ? "border-bottom-left-radius: " . esc_attr($attr['pg_tagBottomBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_tagLeftBorderRadius']) ? "border-bottom-right-radius: " . esc_attr($attr['pg_tagLeftBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_tagRightBorderRadius']) ? "border-top-right-radius: " . esc_attr($attr['pg_tagRightBorderRadius']) . ";" : '';
        
        // Border
        $css .= isset($attr['tagTopborderType']) && isset($attr['pg_tagTopBorder']) && isset($attr['pg_tagTopBorderColor']) ? 
            "border-top: " . esc_attr($attr['tagTopborderType']) . ' ' . esc_attr($attr['pg_tagTopBorder']) . " " . esc_attr($attr['pg_tagTopBorderColor']) . ";" : '';
        $css .= isset($attr['tagBottomborderType']) && isset($attr['pg_tagBottomBorder']) && isset($attr['pg_tagBottomBorderColor']) ? 
            "border-bottom: " . esc_attr($attr['tagBottomborderType']) . ' ' . esc_attr($attr['pg_tagBottomBorder']) . " " . esc_attr($attr['pg_tagBottomBorderColor']) . ";" : '';
        $css .= isset($attr['tagLeftborderType']) && isset($attr['pg_tagLeftBorder']) && isset($attr['pg_tagLeftBorderColor']) ? 
            "border-left: " . esc_attr($attr['tagLeftborderType']) . ' ' . esc_attr($attr['pg_tagLeftBorder']) . " " . esc_attr($attr['pg_tagLeftBorderColor']) . ";" : '';
        $css .= isset($attr['tagRightborderType']) && isset($attr['pg_tagRightBorder']) && isset($attr['pg_tagRightBorderColor']) ? 
            "border-right: " . esc_attr($attr['tagRightborderType']) . ' ' . esc_attr($attr['pg_tagRightBorder']) . " " . esc_attr($attr['pg_tagRightBorderColor']) . ";" : '';
        
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
    $css .= ".post-grid-image-{$uniqueId} {";
        $css .= "display: block;";
        $css .= "width: 100%;";
        $css .= "height: auto;";
        $border_radius = isset($attr['pg_imageBorderRadius']) ? esc_attr($attr['pg_imageBorderRadius']) . 'px' : '5px';
        $css .= "border-radius: {$border_radius};";
    $css .= "}";
     
    //Title Tag
    $css .= ".post-grid-titletag-{$uniqueId} {";
        $css .= isset($attr['pg_TitleColor']) ? "color: " . esc_attr($attr['pg_TitleColor']) . ";" : '';
        $css .= isset($attr['pg_TitleSize']) ? "font-size: " . esc_attr($attr['pg_TitleSize']) . "px;" : '';
       
        $css .= "text-overflow: ellipsis;";
        $css .= "margin-block-start: 0.07em;";
        $css .= "margin-left: 5px;";
        $css .= isset($attr['pg_TitlelineHeight']) ? "line-height: " . esc_attr($attr['pg_TitlelineHeight']) . ";" : '';
        $css .= "margin-block-end: 0.07em;";
        $css .= "font-weight: 600;";
    $css .= "}";
    
    //title
    $css .= ".post-grid-title-size-{$uniqueId} {";
        $css .= "display: block;";
        $css .= "margin-block-start: 0.07em;";
        $css .= "line-height: 20%;";
        $css .= "margin-block-end: 0.08em;";
        // Cursor
        $css .= "cursor: pointer;";
    $css .= "}";
     
    //author-date-container
    $css .= ".post-grid-author-date-container-{$uniqueId} {";
        $css .= "    display: flex;";
        $css .= "    align-items: center;";
        $css .= "    gap: 3px;";
        $css .= "    flex-wrap: wrap;";
        $css .= "    margin-left: 2px;";
    $css .= "}";
      
    //author-image
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-author-image-{$uniqueId} {";
        $css .= "    width: 20px;";
        $css .= "    border-radius: 50%;";
        $css .= "transform: scale(" . esc_attr($attr['pg_authorImageScale']) . ");";
    $css .= "}";
      
    //author-span
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-author-span-{$uniqueId} {";
        $css .= "    text-decoration: none;";
        $css .= "font-size: " . esc_attr($attr['pg_authorTextSize']) . "px;";
        $css .= "color: " . esc_attr($attr['pg_authorTextColor']) . ";";
        // Cursor
        $css .= "cursor: pointer;";
        $css .= "    margin-right: 10px;";
     $css .= "}";
        
    
     //date-image
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-date-image-{$uniqueId} {";
        $css .= "transform: scale(" . esc_attr($attr['pg_dateImageScale']) . ");";
        $css .= "width: 20px;";
      
    $css .= "}";
        
    //date-span
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-date-span-{$uniqueId} {";
        $css .= "font-size: " . esc_attr($attr['pg_dateTextSize']) . "px;";
        $css .= "color: " . esc_attr($attr['pg_dateColor']) . ";";
    $css .= "}";
        
    //content
    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-excerpt-view-{$uniqueId} {";

        // Font Weight
        $css .= "font-weight: 300;";
        
        // Text Color
        $css .= isset($attr['pg_textColor']) ? "color: " . esc_attr($attr['pg_textColor']) . ";" : '';
        
        // Font Size
        $css .= isset($attr['pg_textSize']) ? "font-size: " . esc_attr($attr['pg_textSize']) . "px;" : '';
        
        // Line Height
        $css .= isset($attr['pg_lineHeight']) ? "line-height: " . esc_attr($attr['pg_lineHeight']) . ";" : '';
        
        // Margin Left
        $css .= "margin-left: 5px;";
        
    $css .= "}";
        
    //pagination
    $css .= ".page-numbers-{$uniqueId} {";

        // Padding
        $paddingUnit = isset($attr['paginationpaddingUnit']) ? esc_attr($attr['paginationpaddingUnit']) : 'px';
        $css .= isset($attr['pg_PaginationpaddingTop']) ? "padding-top: " . esc_attr($attr['pg_PaginationpaddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_PaginationpaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_PaginationpaddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_PaginationpaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_PaginationpaddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['pg_PaginationpaddingRight']) ? "padding-right: " . esc_attr($attr['pg_PaginationpaddingRight']) . $paddingUnit . ";" : '';
        
        // Cursor
        $css .= "cursor: pointer;";
        
        // Font size
        $css .= isset($attr['pg_PaginationSize']) ? "font-size: " . esc_attr($attr['pg_PaginationSize']) . "px;" : '';
        
        // Color
        $css .= isset($attr['pg_PaginationColor']) ? "color: " . esc_attr($attr['pg_PaginationColor']) . ";" : '';
        // Background
        if (isset($attr['pg_PaginationbackgroundType'])) {
            if ($attr['pg_PaginationbackgroundType'] === 'color') {
                $css .= isset($attr['pg_PaginationbackgroundColor']) ? "background: " . esc_attr($attr['pg_PaginationbackgroundColor']) . ";" : '';
            } elseif ($attr['pg_PaginationbackgroundType'] === 'gradient') {
                $css .= isset($attr['pg_PaginationbackgroundGradient']) ? "background: " . esc_attr($attr['pg_PaginationbackgroundGradient']) . ";" : '';
            }
        }
        
        // Margin
<<<<<<< HEAD
        $css .= "margin: 20px 5px;";
        $css .="text-decoration: none;";
=======
        $css .= "margin: 0 5px;";
>>>>>>> origin/kuber
        
        // Border radius
        $css .= isset($attr['pg_paginationTopBorderRadius']) ? "border-top-left-radius: " . esc_attr($attr['pg_paginationTopBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_paginationBottomBorderRadius']) ? "border-bottom-left-radius: " . esc_attr($attr['pg_paginationBottomBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_paginationLeftBorderRadius']) ? "border-bottom-right-radius: " . esc_attr($attr['pg_paginationLeftBorderRadius']) . ";" : '';
        $css .= isset($attr['pg_paginationRightBorderRadius']) ? "border-top-right-radius: " . esc_attr($attr['pg_paginationRightBorderRadius']) . ";" : '';
        
        // Border
        $css .= isset($attr['PaginationTopborderType']) && isset($attr['pg_paginationTopBorder']) && isset($attr['pg_paginationTopBorderColor']) ? 
        "border-top: " . esc_attr($attr['PaginationTopborderType']) . ' ' . esc_attr($attr['pg_paginationTopBorder']) . " " . esc_attr($attr['pg_paginationTopBorderColor']) . ";" : '';
        $css .= isset($attr['PaginationBottomborderType']) && isset($attr['pg_paginationBottomBorder']) && isset($attr['pg_paginationBottomBorderColor']) ? 
        "border-bottom: " . esc_attr($attr['PaginationBottomborderType']) . ' ' . esc_attr($attr['pg_paginationBottomBorder']) . " " . esc_attr($attr['pg_paginationBottomBorderColor']) . ";" : '';
        $css .= isset($attr['PaginationLeftborderType']) && isset($attr['pg_paginationLeftBorder']) && isset($attr['pg_paginationLeftBorderColor']) ? 
        "border-left: " . esc_attr($attr['PaginationLeftborderType']) . ' ' . esc_attr($attr['pg_paginationLeftBorder']) . " " . esc_attr($attr['pg_paginationLeftBorderColor']) . ";" : '';
        $css .= isset($attr['PaginationRightborderType']) && isset($attr['pg_paginationRightBorder']) && isset($attr['pg_paginationRightBorderColor']) ? 
        "border-right: " . esc_attr($attr['PaginationRightborderType']) . ' ' . esc_attr($attr['pg_paginationRightBorder']) . " " . esc_attr($attr['pg_paginationRightBorderColor']) . ";" : '';

    $css .= "}"; 
        
    //for tablet
    $css .= "@media (max-width: 768px) {
        .th-post-grid-wrapper-{$uniqueId} {
            grid-template-columns: repeat(" . (isset($attr['pg_postLayoutColumnsTablet']) ? $attr['pg_postLayoutColumnsTablet'] : 2) . ", 1fr);
            padding-top: " . (isset($attr['buttonpaddingTopTablet']) ? esc_attr($attr['buttonpaddingTopTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['buttonpaddingBottomTablet']) ? esc_attr($attr['buttonpaddingBottomTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-left: " . (isset($attr['buttonpaddingLeftTablet']) ? esc_attr($attr['buttonpaddingLeftTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-right: " . (isset($attr['buttonpaddingRightTablet']) ? esc_attr($attr['buttonpaddingRightTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
    
            margin-top: " . (isset($attr['marginTopTablet']) ? esc_attr($attr['marginTopTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-bottom: " . (isset($attr['marginBottomTablet']) ? esc_attr($attr['marginBottomTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-left: " . (isset($attr['marginLeftTablet']) ? esc_attr($attr['marginLeftTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-right: " . (isset($attr['marginRightTablet']) ? esc_attr($attr['marginRightTablet']) . esc_attr($attr['marginUnit']) : '') . ";   
            
           grid-gap: " . (isset($attr['pg_gapupTablet']) ? esc_attr($attr['pg_gapupTablet']) . 'px ' . esc_attr($attr['pg_gapTablet']) . 'px' : '') . ";
        }
    
        .th-post-grid-inline-{$uniqueId} {
            padding-top: " . (isset($attr['pg_layoutpaddingTopTablet']) ? esc_attr($attr['pg_layoutpaddingTopTablet']) . esc_attr($attr['pg_layoutpaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_layoutpaddingBottomTablet']) ? esc_attr($attr['pg_layoutpaddingBottomTablet']) . esc_attr($attr['pg_layoutpaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_layoutpaddingLeftTablet']) ? esc_attr($attr['pg_layoutpaddingLeftTablet']) . esc_attr($attr['pg_layoutpaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_layoutpaddingRightTablet']) ? esc_attr($attr['pg_layoutpaddingRightTablet']) . esc_attr($attr['pg_layoutpaddingUnit']) : '') . ";
        }   

        .post-grid-category-styles-{$uniqueId} {
            padding-top: " . (isset($attr['pg_CategorypaddingTopTablet']) ? esc_attr($attr['pg_CategorypaddingTopTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_CategorypaddingBottomTablet']) ? esc_attr($attr['pg_CategorypaddingBottomTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_CategorypaddingLeftTablet']) ? esc_attr($attr['pg_CategorypaddingLeftTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_CategorypaddingRightTablet']) ? esc_attr($attr['pg_CategorypaddingRightTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
        }

        .post-grid-category-style-new-{$uniqueId} {
            padding-top: " . (isset($attr['pg_CategorypaddingTopTablet']) ? esc_attr($attr['pg_CategorypaddingTopTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_CategorypaddingBottomTablet']) ? esc_attr($attr['pg_CategorypaddingBottomTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_CategorypaddingLeftTablet']) ? esc_attr($attr['pg_CategorypaddingLeftTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_CategorypaddingRightTablet']) ? esc_attr($attr['pg_CategorypaddingRightTablet']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
       
        }

        .post-grid-tag-style-new-{$uniqueId} {
            padding-top: " . (isset($attr['pg_TagpaddingTopTablet']) ? esc_attr($attr['pg_TagpaddingTopTablet']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_TagpaddingBottomTablet']) ? esc_attr($attr['pg_TagpaddingBottomTablet']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_TagpaddingLeftTablet']) ? esc_attr($attr['pg_TagpaddingLeftTablet']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_TagpaddingRightTablet']) ? esc_attr($attr['pg_TagpaddingRightTablet']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
        }
    }";
    
    //for mobile
    $css .= "@media (max-width: 400px) {
        .th-post-grid-wrapper-{$uniqueId} {
            grid-template-columns: repeat(" . (isset($attr['pg_postLayoutColumnsMobile']) ? $attr['pg_postLayoutColumnsMobile'] : 1) . ", 1fr);
            padding-top: " . (isset($attr['buttonpaddingTopMobile']) ? esc_attr($attr['buttonpaddingTopMobile']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['buttonpaddingBottomMobile']) ? esc_attr($attr['buttonpaddingBottomMobile']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-left: " . (isset($attr['buttonpaddingLeftMobile']) ? esc_attr($attr['buttonpaddingLeftMobile']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-right: " . (isset($attr['buttonpaddingRightMobile']) ? esc_attr($attr['buttonpaddingRightMobile']) . esc_attr($attr['paddingUnit']) : '') . ";
            margin-top: " . (isset($attr['marginTopMobile']) ? esc_attr($attr['marginTopMobile']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-bottom: " . (isset($attr['marginBottomMobile']) ? esc_attr($attr['marginBottomMobile']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-left: " . (isset($attr['marginLeftMobile']) ? esc_attr($attr['marginLeftMobile']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-right: " . (isset($attr['marginRightMobile']) ? esc_attr($attr['marginRightMobile']) . esc_attr($attr['marginUnit']) : '') . ";
            grid-template-rows: repeat(" . (isset($attr['pg_numberOfRowMobile']) ? $attr['pg_numberOfRowMobile'] : 2) . ", minmax(100px, 1fr));
            grid-gap: " . (isset($attr['pg_gapupMobile']) ? esc_attr($attr['pg_gapupMobile']) . 'px ' . esc_attr($attr['pg_gapMobile']) . 'px' : '') . ";
        }
    
        .th-post-grid-inline-{$uniqueId} {
            padding-top: " . (isset($attr['pg_layoutpaddingTopMobile']) ? esc_attr($attr['pg_layoutpaddingTopMobile']) . (isset($attr['pg_layoutpaddingUnit']) ? esc_attr($attr['pg_layoutpaddingUnit']) : 'px') : '') . ";
            padding-bottom: " . (isset($attr['pg_layoutpaddingBottomMobile']) ? esc_attr($attr['pg_layoutpaddingBottomMobile']) . (isset($attr['pg_layoutpaddingUnit']) ? esc_attr($attr['pg_layoutpaddingUnit']) : 'px') : '') . ";
            padding-left: " . (isset($attr['pg_layoutpaddingLeftMobile']) ? esc_attr($attr['pg_layoutpaddingLeftMobile']) . (isset($attr['pg_layoutpaddingUnit']) ? esc_attr($attr['pg_layoutpaddingUnit']) : 'px') : '') . ";
            padding-right: " . (isset($attr['pg_layoutpaddingRightMobile']) ? esc_attr($attr['pg_layoutpaddingRightMobile']) . (isset($attr['pg_layoutpaddingUnit']) ? esc_attr($attr['pg_layoutpaddingUnit']) : 'px') : '') . ";
        }
    
        .post-grid-category-styles-{$uniqueId} {
            padding-top: " . (isset($attr['pg_CategorypaddingTopMobile']) ? esc_attr($attr['pg_CategorypaddingTopMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_CategorypaddingBottomMobile']) ? esc_attr($attr['pg_CategorypaddingBottomMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_CategorypaddingLeftMobile']) ? esc_attr($attr['pg_CategorypaddingLeftMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_CategorypaddingRightMobile']) ? esc_attr($attr['pg_CategorypaddingRightMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
        }
    
        .post-grid-category-style-new-{$uniqueId} {
            padding-top: " . (isset($attr['pg_CategorypaddingTopMobile']) ? esc_attr($attr['pg_CategorypaddingTopMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_CategorypaddingBottomMobile']) ? esc_attr($attr['pg_CategorypaddingBottomMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_CategorypaddingLeftMobile']) ? esc_attr($attr['pg_CategorypaddingLeftMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_CategorypaddingRightMobile']) ? esc_attr($attr['pg_CategorypaddingRightMobile']) . esc_attr($attr['categorypaddingUnit']) : '') . ";
        }
    
        .post-grid-tag-style-new-{$uniqueId} {
            padding-top: " . (isset($attr['pg_TagpaddingTopMobile']) ? esc_attr($attr['pg_TagpaddingTopMobile']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['pg_TagpaddingBottomMobile']) ? esc_attr($attr['pg_TagpaddingBottomMobile']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-left: " . (isset($attr['pg_TagpaddingLeftMobile']) ? esc_attr($attr['pg_TagpaddingLeftMobile']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
            padding-right: " . (isset($attr['pg_TagpaddingRightMobile']) ? esc_attr($attr['pg_TagpaddingRightMobile']) . esc_attr($attr['tagpaddingUnit']) : '') . ";
        }
    }";
        
    return $css;
}
