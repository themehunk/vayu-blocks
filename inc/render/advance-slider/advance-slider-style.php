<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function generate_inline_slider_styles($attr) {
    $css = '';

    //attributes-merge
    $default_attributes = include('defaultattributes.php');
    $attr = array_merge($default_attributes, $attr);  

    $wrapper = ".vayu-blocks-advance-slider";

    //Main div
    $css .= "$wrapper {";

        $customWidthUnit = isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : '%';

      // Check if widthType is set and determine width
       if (isset($attr['widthType'])) {
           if ($attr['widthType'] === 'default') {
               $css .= isset($attr['globalwidth']) ? "width: {$attr['globalwidth']}px;" : '';
           } elseif ($attr['widthType'] === 'alignfull') {
           $css .= isset($attr['customWidth']) ? "width: {$attr['customWidth']}{$customWidthUnit};" : '';
           }
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
       
       $css .= "margin-left: auto !important;";
       $css .= "margin-right: auto !important;";

       // Position and Z-index
       $css .= isset($attr['position']) ? "position: " . esc_attr($attr['position']) . ";" : '';
       $css .= isset($attr['zIndex']) ? "z-index: " . esc_attr($attr['zIndex']) . ";" : '';

       // Alignment and Order
       $css .= isset($attr['selfAlign']) ? "align-self: " . esc_attr($attr['selfAlign']) . ";" : '';
       $css .= isset($attr['order']) && $attr['order'] === 'custom' && isset($attr['customOrder']) ? "order: " . esc_attr($attr['customOrder']) . ";" : '';


       // Border
       $borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
       $css .= isset($attr['borderType']) ? "border-style: " . esc_attr($attr['borderType']) . ";" : '';
       $css .= isset($attr['borderWidthTop']) ? "border-top-width: " . esc_attr($attr['borderWidthTop']) . $borderWidthUnit . ";" : '';
       $css .= isset($attr['borderWidthBottom']) ? "border-bottom-width: " . esc_attr($attr['borderWidthBottom']) . $borderWidthUnit . ";" : '';
       $css .= isset($attr['borderWidthLeft']) ? "border-left-width: " . esc_attr($attr['borderWidthLeft']) . $borderWidthUnit . ";" : '';
       $css .= isset($attr['borderWidthRight']) ? "border-right-width: " . esc_attr($attr['borderWidthRight']) . $borderWidthUnit . ";" : '';
       $css .= isset($attr['borderColor']) ? "border-color: " . esc_attr($attr['borderColor']) . ";" : '';

       // Border Radius
       $borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
       $borderTopLeftRadius = isset($attr['borderradiusTop']) ? esc_attr($attr['borderradiusTop']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
       $borderBottomRightRadius = isset($attr['borderradiusBottom']) ? esc_attr($attr['borderradiusBottom']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
       $borderBottomLeftRadius = isset($attr['borderradiusLeft']) ? esc_attr($attr['borderradiusLeft']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
       $borderTopRightRadius = isset($attr['borderradiusRight']) ? esc_attr($attr['borderradiusRight']) . $borderRadiusUnit : '0' . $borderRadiusUnit;

       $css .= "border-top-left-radius: {$borderTopLeftRadius};";
       $css .= "border-bottom-right-radius: {$borderBottomRightRadius};";
       $css .= "border-bottom-left-radius: {$borderBottomLeftRadius};";
       $css .= "border-top-right-radius: {$borderTopRightRadius};";

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
       $css .= "transition-duration: " . (isset($attr['transitionAll']) ? esc_attr($attr['transitionAll']) : '0') . "s;";
       
       // Grid properties
       $css .= "display: grid;";
       $gridTemplateColumns = isset($attr['pg_postLayoutColumns']) ? esc_attr($attr['pg_postLayoutColumns']) : 'auto-fit';
       $css .= "grid-template-columns: repeat({$gridTemplateColumns}, 1fr);";
       $gridGapUp = isset($attr['pg_gapup']) ? esc_attr($attr['pg_gapup']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
       $gridGap = isset($attr['pg_gap']) ? esc_attr($attr['pg_gap']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
       $css .= "grid-gap: {$gridGapUp} {$gridGap};";
       $css .= "grid-auto-rows: minmax(100px, auto);";
       
    $css .= "}";
    
    //Hover 
    $css .= "$wrapper:hover {";

        // Border styles
        $css .= isset($attr['borderHvrType']) ? "border-style: " . esc_attr($attr['borderHvrType']) . ";" : '';
        $css .= isset($attr['borderWidthHvrTop']) && isset($attr['borderWidthHvrUnit']) ? "border-top-width: " . esc_attr($attr['borderWidthHvrTop']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrBottom']) && isset($attr['borderWidthHvrUnit']) ? "border-bottom-width: " . esc_attr($attr['borderWidthHvrBottom']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrLeft']) && isset($attr['borderWidthHvrUnit']) ? "border-left-width: " . esc_attr($attr['borderWidthHvrLeft']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrRight']) && isset($attr['borderWidthHvrUnit']) ? "border-right-width: " . esc_attr($attr['borderWidthHvrRight']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderColorHvr']) ? "border-color: " . esc_attr($attr['borderColorHvr']) . ";" : '';

        // Border radius
           $borderRadiusUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
           $borderTopLeftRadius = isset($attr['borderradiusHvrTop']) ? esc_attr($attr['borderradiusHvrTop']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
           $borderBottomRightRadius = isset($attr['borderradiusHvrBottom']) ? esc_attr($attr['borderradiusHvrBottom']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
           $borderBottomLeftRadius = isset($attr['borderradiusHvrLeft']) ? esc_attr($attr['borderradiusHvrLeft']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
           $borderTopRightRadius = isset($attr['borderradiusHvrRight']) ? esc_attr($attr['borderradiusHvrRight']) . $borderRadiusUnit : '0' . $borderRadiusUnit;
   
           $css .= "border-top-left-radius: {$borderTopLeftRadius};";
           $css .= "border-bottom-right-radius: {$borderBottomRightRadius};";
           $css .= "border-bottom-left-radius: {$borderBottomLeftRadius};";
           $css .= "border-top-right-radius: {$borderTopRightRadius};";
   
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

    // Loop through each slide to generate styles
    foreach ($attr['slides'] as $slide) {

        $uniqueId = $slide['layout']['uniqueId']; //unique Id

        $container = ".vayu_blocks_slide_{$uniqueId}";
        $insideContainer = ".vayu_blocks_inside_container_div";

        $heading = $slide['layout']['heading'];
        $subheading = $slide['layout']['subheading'];
        $button1 = $slide['layout']['button1'];
        $button2 = $slide['layout']['button2'];
        $filterId = $slide['layout']['duotone'];

        // slide blocks
        $css .= "$container {";

            // Set margin-bottom and height
            $css .= "margin-bottom: 10px;";
            $css .= "height: 100%;";
            $css .= "overflow: hidden;";
            $css .= "position: relative;";
            
            // Border properties
            $borderColor = isset($slide['layout']['border']['color']) ? esc_attr($slide['layout']['border']['color']) : 'transparent';
            $borderWidth = isset($slide['layout']['border']['width']) ? esc_attr($slide['layout']['border']['width']) : '0';
            $borderStyle = isset($slide['layout']['border']['style']) ? esc_attr($slide['layout']['border']['style']) : 'none';
            
            $borderTopColor = isset($slide['layout']['border']['topcolor']) ? esc_attr($slide['layout']['border']['topcolor']) : $borderColor;
            $borderTopWidth = isset($slide['layout']['border']['topwidth']) ? esc_attr($slide['layout']['border']['topwidth']) : $borderWidth;
            $borderTopStyle = isset($slide['layout']['border']['topstyle']) ? esc_attr($slide['layout']['border']['topstyle']) : $borderStyle;
            
            $borderBottomColor = isset($slide['layout']['border']['bottomcolor']) ? esc_attr($slide['layout']['border']['bottomcolor']) : $borderColor;
            $borderBottomWidth = isset($slide['layout']['border']['bottomwidth']) ? esc_attr($slide['layout']['border']['bottomwidth']) : $borderWidth;
            $borderBottomStyle = isset($slide['layout']['border']['bottomstyle']) ? esc_attr($slide['layout']['border']['bottomstyle']) : $borderStyle;
            
            $borderLeftColor = isset($slide['layout']['border']['leftcolor']) ? esc_attr($slide['layout']['border']['leftcolor']) : $borderColor;
            $borderLeftWidth = isset($slide['layout']['border']['leftwidth']) ? esc_attr($slide['layout']['border']['leftwidth']) : $borderWidth;
            $borderLeftStyle = isset($slide['layout']['border']['leftstyle']) ? esc_attr($slide['layout']['border']['leftstyle']) : $borderStyle;
            
            $borderRightColor = isset($slide['layout']['border']['rightcolor']) ? esc_attr($slide['layout']['border']['rightcolor']) : $borderColor;
            $borderRightWidth = isset($slide['layout']['border']['rightwidth']) ? esc_attr($slide['layout']['border']['rightwidth']) : $borderWidth;
            $borderRightStyle = isset($slide['layout']['border']['rightstyle']) ? esc_attr($slide['layout']['border']['rightstyle']) : $borderStyle;
            
            $css .= "border-color: {$borderColor};";
            $css .= "border-width: {$borderWidth};";
            $css .= "border-style: {$borderStyle};";
            $css .= "border-top-color: {$borderTopColor};";
            $css .= "border-top-width: {$borderTopWidth};";
            $css .= "border-top-style: {$borderTopStyle};";
            $css .= "border-bottom-color: {$borderBottomColor};";
            $css .= "border-bottom-width: {$borderBottomWidth};";
            $css .= "border-bottom-style: {$borderBottomStyle};";
            $css .= "border-left-color: {$borderLeftColor};";
            $css .= "border-left-width: {$borderLeftWidth};";
            $css .= "border-left-style: {$borderLeftStyle};";
            $css .= "border-right-color: {$borderRightColor};";
            $css .= "border-right-width: {$borderRightWidth};";
            $css .= "border-right-style: {$borderRightStyle};";
            
            // Border-radius
            $borderRadiusTop = isset($slide['layout']['borderRadius']['top']) ? esc_attr($slide['layout']['borderRadius']['top']) : '0px';
            $borderRadiusRight = isset($slide['layout']['borderRadius']['right']) ? esc_attr($slide['layout']['borderRadius']['right']) : '0px';
            $borderRadiusBottom = isset($slide['layout']['borderRadius']['bottom']) ? esc_attr($slide['layout']['borderRadius']['bottom']) : '0px';
            $borderRadiusLeft = isset($slide['layout']['borderRadius']['left']) ? esc_attr($slide['layout']['borderRadius']['left']) : '0px';
            
            $css .= "border-radius: {$borderRadiusTop} {$borderRadiusRight} {$borderRadiusBottom} {$borderRadiusLeft};";
            
            // Padding
            $paddingTop = isset($slide['layout']['padding']['top']) ? esc_attr($slide['layout']['padding']['top']) : '0px';
            $paddingRight = isset($slide['layout']['padding']['right']) ? esc_attr($slide['layout']['padding']['right']) : '0px';
            $paddingBottom = isset($slide['layout']['padding']['bottom']) ? esc_attr($slide['layout']['padding']['bottom']) : '0px';
            $paddingLeft = isset($slide['layout']['padding']['left']) ? esc_attr($slide['layout']['padding']['left']) : '0px';
            
            $css .= "padding: {$paddingTop} {$paddingRight} {$paddingBottom} {$paddingLeft};";
            
            // End the CSS block for this slide
        $css .= "}\n";
        
        //image
        $css .= "$container .vayu_blocks_slide_image {";
            $css .= "width: 100%;";
            $css .= "height: 100%;";
            $css .= "z-index: 0;";
            $css .= "filter: url('$filterId');";
        $css .= "}\n";

        // overlay div
        $css .= "$container .vayu_blocks_color_overlay {";
            $css .= "position: absolute;";
            $css .= "top: 0;";
            $css .= "left: 0;";
            $css .= "right: 0;";
            $css .= "bottom: 0;";
            $css .= "width: 100%;";
            $css .= "height: 100%;";

            // Add opacity
            if (isset($slide['layout']['opacity'])) {
                $css .= "opacity: " . esc_attr($slide['layout']['opacity']) . ";";
            }

            // Apply background color or gradient based on the attr
            if (isset($slide['layout']['backgroundColor']) && !empty($slide['layout']['backgroundColor'])) {
                $css .= "background-color: " . esc_attr($slide['layout']['backgroundColor']) . ";";
            } elseif (isset($slide['layout']['backgroundGradient']) && !empty($slide['layout']['backgroundGradient'])) {
                $css .= "background: -webkit-" . esc_attr($slide['layout']['backgroundGradient']) . ";";
            }

        $css .= "}\n";

        // Inside Container div
        $css .= "$container $insideContainer {";
            $css .= "position: " . (!empty($slide['layout']['backgroundImage']) ? 'absolute' : '') . ";";
            $css .= "left: 50%;";
            $css .= "top: 50%;";
            $css .= "transform: " . (!empty($slide['layout']['backgroundImage']) ? 'translate(-50%, -50%)' : 'none') . ";";
            $css .= "z-index: 1;";
            $css .= "height: 100%;";
            $css .= "margin-bottom: 8%;";
            $css .= "text-align: " . (isset($slide['layout']['alignment']) ? esc_attr($slide['layout']['alignment']) : 'left') . ";";
        $css .= "}\n";

        // Heading
        $css .= "$container $insideContainer .vayu_blocks_slider_heading {";
            $css .= "color: " . esc_attr($heading['color']) . ";";
            $css .= "font-size: " . esc_attr($heading['size']) . "px;";
            $css .= "font-weight: " . esc_attr($heading['fontWeight']) . ";";
            $css .= "text-decoration: none;";
            $css .= "cursor: pointer;";
            //animation left
        $css .= "}\n";

        // Sub Heading
        $css .= "$container $insideContainer .vayu_blocks_sub_heading {";
            $css .= "color: " . esc_attr($subheading['color']) . ";";
            $css .= "font-size: " . esc_attr($subheading['size']) . "px;";
            $css .= "font-weight: " . esc_attr($subheading['fontWeight']) . ";";
            //animation left
        $css .= "}\n";

        // Button 1
        $css .= "$container $insideContainer .vayu_blocks_slider_button1 {";
            // Font Size
            $css .= "font-size: {$button1['size']}px;";
    
            // Border
            $css .= "border: none;";
            $css .= "cursor: pointer;";
            $css .= "margin: 10px;";

            $css .= "border-color: " . ($button1['border']['color'] ?? 'transparent') . ";";
            $css .= "border-width: " . ($button1['border']['width'] ?? '0') . ";";
            $css .= "border-style: " . ($button1['border']['style'] ?? 'none') . ";";

            $css .= "border-top-color: " . ($button1['border']['topcolor'] ?? $button1['border']['color'] ?? 'transparent') . ";";
            $css .= "border-top-width: " . ($button1['border']['topwidth'] ?? $button1['border']['width'] ?? '0') . ";";
            $css .= "border-top-style: " . ($button1['border']['topstyle'] ?? $button1['border']['style'] ?? 'none') . ";";

            $css .= "border-bottom-color: " . ($button1['border']['bottomcolor'] ?? $button1['border']['color'] ?? 'transparent') . ";";
            $css .= "border-bottom-width: " . ($button1['border']['bottomwidth'] ?? $button1['border']['width'] ?? '0') . ";";
            $css .= "border-bottom-style: " . ($button1['border']['bottomstyle'] ?? $button1['border']['style'] ?? 'none') . ";";

            $css .= "border-left-color: " . ($button1['border']['leftcolor'] ?? $button1['border']['color'] ?? 'transparent') . ";";
            $css .= "border-left-width: " . ($button1['border']['leftwidth'] ?? $button1['border']['width'] ?? '0') . ";";
            $css .= "border-left-style: " . ($button1['border']['leftstyle'] ?? $button1['border']['style'] ?? 'none') . ";";

            $css .= "border-right-color: " . ($button1['border']['rightcolor'] ?? $button1['border']['color'] ?? 'transparent') . ";";
            $css .= "border-right-width: " . ($button1['border']['rightwidth'] ?? $button1['border']['width'] ?? '0') . ";";
            $css .= "border-right-style: " . ($button1['border']['rightstyle'] ?? $button1['border']['style'] ?? 'none') . ";";

            // Border Radius
            $css .= "border-radius: " . ($button1['borderRadius']['top'] ?? '0px') . " ";
            $css .= ($button1['borderRadius']['right'] ?? '0px') . " ";
            $css .= ($button1['borderRadius']['bottom'] ?? '0px') . " ";
            $css .= ($button1['borderRadius']['left'] ?? '0px') . ";";

            // Padding
            $css .= "padding: " . ($button1['padding']['top'] ?? '10px') . " ";
            $css .= ($button1['padding']['right'] ?? '20px') . " ";
            $css .= ($button1['padding']['bottom'] ?? '10px') . " ";
            $css .= ($button1['padding']['left'] ?? '20px') . ";";

            if (!empty($button1['backgroundColor'])) {
                $css .= "background-color: {$button1['backgroundColor']};";
            } elseif (!empty($button1['backgroundGradient'])) {
                $css .= "background: -webkit-{$button1['backgroundGradient']};";
            }
            
            //animation left
        $css .= "}\n";

        //Button 2
        $css .= "$container $insideContainer .vayu_blocks_slider_button2 {";
            // Font Size
            $css .= "font-size: {$button2['size']}px;";
    
            // Border
            $css .= "border: none;";
            $css .= "cursor: pointer;";
            $css .= "margin: 10px;";

            $css .= "border-color: " . ($button2['border']['color'] ?? 'transparent') . ";";
            $css .= "border-width: " . ($button2['border']['width'] ?? '0') . ";";
            $css .= "border-style: " . ($button2['border']['style'] ?? 'none') . ";";

            $css .= "border-top-color: " . ($button2['border']['topcolor'] ?? $button2['border']['color'] ?? 'transparent') . ";";
            $css .= "border-top-width: " . ($button2['border']['topwidth'] ?? $button2['border']['width'] ?? '0') . ";";
            $css .= "border-top-style: " . ($button2['border']['topstyle'] ?? $button2['border']['style'] ?? 'none') . ";";

            $css .= "border-bottom-color: " . ($button2['border']['bottomcolor'] ?? $button2['border']['color'] ?? 'transparent') . ";";
            $css .= "border-bottom-width: " . ($button2['border']['bottomwidth'] ?? $button2['border']['width'] ?? '0') . ";";
            $css .= "border-bottom-style: " . ($button2['border']['bottomstyle'] ?? $button2['border']['style'] ?? 'none') . ";";

            $css .= "border-left-color: " . ($button2['border']['leftcolor'] ?? $button2['border']['color'] ?? 'transparent') . ";";
            $css .= "border-left-width: " . ($button2['border']['leftwidth'] ?? $button2['border']['width'] ?? '0') . ";";
            $css .= "border-left-style: " . ($button2['border']['leftstyle'] ?? $button2['border']['style'] ?? 'none') . ";";

            $css .= "border-right-color: " . ($button2['border']['rightcolor'] ?? $button2['border']['color'] ?? 'transparent') . ";";
            $css .= "border-right-width: " . ($button2['border']['rightwidth'] ?? $button2['border']['width'] ?? '0') . ";";
            $css .= "border-right-style: " . ($button2['border']['rightstyle'] ?? $button2['border']['style'] ?? 'none') . ";";

            // Border Radius
            $css .= "border-radius: " . ($button2['borderRadius']['top'] ?? '0px') . " ";
            $css .= ($button2['borderRadius']['right'] ?? '0px') . " ";
            $css .= ($button2['borderRadius']['bottom'] ?? '0px') . " ";
            $css .= ($button2['borderRadius']['left'] ?? '0px') . ";";

            // Padding
            $css .= "padding: " . ($button2['padding']['top'] ?? '10px') . " ";
            $css .= ($button2['padding']['right'] ?? '20px') . " ";
            $css .= ($button2['padding']['bottom'] ?? '10px') . " ";
            $css .= ($button2['padding']['left'] ?? '20px') . ";";

            if (!empty($button2['backgroundColor'])) {
                $css .= "background-color: {$button2['backgroundColor']};";
            } elseif (!empty($button2['backgroundGradient'])) {
                $css .= "background: -webkit-{$button2['backgroundGradient']};";
            }
            
            //animation left
        $css .= "}\n";
    }

    return $css;
}