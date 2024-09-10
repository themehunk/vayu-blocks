<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function generate_inline_image_flip_styles($attr) {

    $css = '';

    //attributes-merge
    $default_attributes = include('defaultattributes.php');
    $attr = array_merge($default_attributes, $attr);  
    $uniqueId = $attr['uniqueId'];

    // Generate the class selector by concatenating '.' with the unique ID
    $wrapper = '.vayu-blocks-image-flip-main-container' . esc_attr($uniqueId);

    $inline = '.vayu_blocks_image_flip_wrapper';

    $css .= ".wp_block_vayu-blocks-image-flip-main {";
        // Check if 'widthType' attribute is set to 'customwidth' and apply the width accordingly
        $css .= "width: " . esc_attr($attr['customWidth']) . esc_attr($attr['customWidthUnit']) . ";";
        $css .= "margin-left: auto !important;";
        $css .= "margin-right: auto !important;";
        
    $css .= "}";
    
    // Add media query for tablet screens
    $css .= "@media (max-width: 768px) {";
        $css .= ".th-image-flip-main-wp-editor-wrapper {";
            $css .= "width: " . esc_attr($attr['customWidthTablet']) . esc_attr($attr['customWidthUnit']) . ";";
        $css .= "}";
    $css .= "}";

    // Add media query for Mobile screens
    $css .= "@media (max-width: 300px) {";
        $css .= ".th-image-flip-main-wp-editor-wrapper {";
            $css .= "width: " . esc_attr($attr['customWidthMobile']) . esc_attr($attr['customWidthUnit']) . ";";
        $css .= "}";
    $css .= "}";

    //Main div
    $css .= "$wrapper {";

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

    $css .= ".vayu_blocks_image_flip-duotone-filters {";
        $css .= "display: none;";
        $css .= "height: 0;";
    $css .= "}";
  
    // Append CSS rules to $css
    $css .= "$wrapper $inline {";
        $css .= "    width: 100%;";
        $css .= "    height: auto;";
        $css .= "    overflow: hidden; /* Keeps the outer frame fixed */";
        $css .= "    position: relative;";
    $css .= "}";

    // Assuming $attr['imagetransitiontime'] contains the transition time value
    $transitionTime = isset($attr['imagetransitiontime']) ? esc_attr($attr['imagetransitiontime']) : '0.5'; // Default to 0.5s if not set

    // Append CSS rules to $css
    $css .= "$wrapper .vayu_blocks_image_flip_image {";

        $css .= "width: 100%;";
        $css .= "height: 100%;";
        $css .= "box-sizing: border-box;";

        $css .= "    transition: transform ${transitionTime}s ease, filter ${transitionTime}s ease, opacity ${transitionTime}s ease;";

        $css .= "    opacity: 1;"; // Assuming a default opacity value
        $css .= "    object-fit: " . esc_attr($attr['imagecover']) . ";"; // Assuming this controls object-fit

        // Apply focal point if it exists, default to center
        $css .= "    object-position: " . (isset($attr['focalPoint']) ? esc_attr($attr['focalPoint']['x'] * 100) : '50') . "% " . (isset($attr['focalPoint']) ? esc_attr($attr['focalPoint']['y'] * 100) : '50') . "%;";

        // Apply aspect ratio if it exists
        if ($attr['imageaspectratio'] !== 'none') {
            if ($attr['imageaspectratio'] === 'original') {
                $css .= "    aspect-ratio: auto;"; // Maintain original aspect ratio
            } else {
                $css .= "    aspect-ratio: " . str_replace('/', '/', esc_attr($attr['imageaspectratio'])) . ";";
            }
        } else {
            $css .= "    aspect-ratio: auto;";
        }

       // Apply duotone filter if it exists and is a valid array or string
        if (isset($attr['duotone']) && !empty($attr['duotone'])) {
            // If duotone is a string, apply it directly
            if (is_string($attr['duotone'])) {
                $css .= "    filter: url(" . esc_attr($attr['duotone']) . ") !important;";
            } 
            // If duotone is an array with more than one value, apply it as a filter
            elseif (is_array($attr['duotone']) && count($attr['duotone']) > 1) {
                $css .= "    filter: url(" . esc_attr($attr['duotone'][0]) . ") !important;";
            }
        }

        $css .= "border-top: " . esc_attr($attr['imageborder']['topwidth']) . " " . esc_attr($attr['imageborder']['topstyle']) . " " . esc_attr($attr['imageborder']['topcolor']) . ";";
        $css .= "border-bottom: " . esc_attr($attr['imageborder']['bottomwidth']) . " " . esc_attr($attr['imageborder']['bottomstyle']) . " " . esc_attr($attr['imageborder']['bottomcolor']) . ";";
        $css .= "border-left: " . esc_attr($attr['imageborder']['leftwidth']) . " " . esc_attr($attr['imageborder']['leftstyle']) . " " . esc_attr($attr['imageborder']['leftcolor']) . ";";
        $css .= "border-right: " . esc_attr($attr['imageborder']['rightwidth']) . " " . esc_attr($attr['imageborder']['rightstyle']) . " " . esc_attr($attr['imageborder']['rightcolor']) . ";";

        $css .= "border-radius: " . esc_attr($attr['imageborderRadius']['top']) . " " . esc_attr($attr['imageborderRadius']['right']) . " " . esc_attr($attr['imageborderRadius']['bottom']) . " " . esc_attr($attr['imageborderRadius']['left']) . ";";

    $css .= "}";

    // Append hover effect CSS rules
    $css .= " $wrapper $inline:hover .vayu_blocks_image_flip_image {";
        $css .= "    transform: var(--image-hover-effect-transform, none);";
        $css .= "    filter: var(--image-filter-effect, none);";
        $css .= "    opacity: var(--image-hover-effect-opacity, 1);";
    $css .= "}";

    /* Global hover effect CSS */
    $css .= "$wrapper $inline:hover .vayu_blocks_image_flip_image {";
        $css .= "    transform: var(--image-hover-effect-transform, none);";
        $css .= "    filter: var(--image-filter-effect, none);";
        $css .= "    opacity: var(--image-hover-effect-opacity, 1);";
    $css .= "}";

    /* Grayscale */
    $css .= ".grayScale {";
        $css .= "    --image-filter-effect: grayscale(100%);";
    $css .= "}";

    /* Grayscale reverse hover */
    $css .= ".grayScalereverse {";
        $css .= "    filter: grayscale(100%);";
        $css .= "    transition: filter " . esc_attr($attr['imagetransitiontime']) . "s ease;";
    $css .= "}";

    $css .= ".grayScalereverse:hover {";
        $css .= "    filter: none;";
    $css .= "}";

    /* Sepia */
    $css .= ".sepia {";
        $css .= "    --image-filter-effect: sepia(100%);";
    $css .= "}";

    /* Zoom-in and Zoom-out effects */
    $css .= ".zoom-in {";
        $css .= "    --image-hover-effect-transform: scale(1.5);";
    $css .= "}";

    $css .= ".zoom-out {";
        $css .= "    --image-hover-effect-transform: scale(0.8);";
    $css .= "}";

    /* Fade-in and Fade-out effects */
    $css .= ".fade-in {";
        $css .= "    --image-hover-effect-opacity: 1;";
    $css .= "}";

    $css .= ".fade-out {";
        $css .= "    --image-hover-effect-opacity: 0.5;";
    $css .= "}";

    /* Slide effects */
    $css .= ".slide-up {";
        $css .= "    --image-hover-effect-transform: translateY(-10px);";
    $css .= "}";

    $css .= ".slide-down {";
        $css .= "    --image-hover-effect-transform: translateY(10px);";
    $css .= "}";

    $css .= ".slide-left {";
        $css .= "    --image-hover-effect-transform: translateX(-10px);";
    $css .= "}";

    $css .= ".slide-right {";
        $css .= "    --image-hover-effect-transform: translateX(10px);";
    $css .= "}";

    /* Flip effects */
    $css .= ".flip-horizontal {";
        $css .= "    --image-hover-effect-transform: rotateY(180deg);";
    $css .= "}";

    $css .= ".flip-vertical {";
        $css .= "    --image-hover-effect-transform: rotateX(180deg);";
    $css .= "}";

    /* Rotate */
    $css .= ".rotate {";
        $css .= "    --image-hover-effect-transform: rotate(-30deg);";
    $css .= "}";

    /* Blur */
    $css .= ".blur {";
        $css .= "    --image-filter-effect: blur(3px);";
    $css .= "}";

    /* Shine */
    $css .= ".shine {";
        $css .= "    --image-filter-effect: grayscale(100%);";
    $css .= "}";


    $css .= "$wrapper .vayu_blocks_heading_image_flip {";
        $css .= "font-family: " . esc_attr($attr['heading']['font']) . ";";
        $css .= "font-size: " . esc_attr($attr['heading']['size']) . ";";
        $css .= "font-weight: " . esc_attr($attr['heading']['appearance']) . ";";
        $css .= "letter-spacing: " . esc_attr($attr['heading']['letterSpacing']) . ";";
        $css .= "color: " . esc_attr($attr['headingcolor']) . ";";
    $css .= "}";


    $css .= "$wrapper .vayu_blocks_caption_image_flip {";
        $css .= "font-family: " . esc_attr($attr['caption']['font']) . ";";
        $css .= "font-size: " . esc_attr($attr['caption']['size']) . ";";
        $css .= "font-weight: " . esc_attr($attr['caption']['appearance']) . ";";
        $css .= "letter-spacing: " . esc_attr($attr['caption']['letterSpacing']) . ";";
        $css .= "text-transform: " . esc_attr($attr['caption']['letterCase']) . ";"; // Correct CSS property for letter case
        $css .= "color: " . esc_attr($attr['captioncolor']) . ";";
    $css .= "}";


    $css .= "$wrapper .vayu_blocks_image_flip_button {";
        $css .= "font-family: " . esc_attr($attr['button']['font']) . ";";
        $css .= "font-size: " . esc_attr($attr['button']['size']) . ";";
        $css .= "font-weight: " . esc_attr($attr['button']['appearance']) . ";";
        $css .= "letter-spacing: " . esc_attr($attr['button']['letterSpacing']) . ";";

        $css .= "background: " . esc_attr($attr['buttonbackground']) . ";";

        $css .= "border-top: " . esc_attr($attr['buttonborder']['topwidth']) . " " . esc_attr($attr['buttonborder']['topstyle']) . " " . esc_attr($attr['buttonborder']['topcolor']) . ";";
        $css .= "border-bottom: " . esc_attr($attr['buttonborder']['bottomwidth']) . " " . esc_attr($attr['buttonborder']['bottomstyle']) . " " . esc_attr($attr['buttonborder']['bottomcolor']) . ";";
        $css .= "border-left: " . esc_attr($attr['buttonborder']['leftwidth']) . " " . esc_attr($attr['buttonborder']['leftstyle']) . " " . esc_attr($attr['buttonborder']['leftcolor']) . ";";
        $css .= "border-right: " . esc_attr($attr['buttonborder']['rightwidth']) . " " . esc_attr($attr['buttonborder']['rightstyle']) . " " . esc_attr($attr['buttonborder']['rightcolor']) . ";";

        $css .= "border-radius: " . esc_attr($attr['buttonborderRadius']['top']) . " " . esc_attr($attr['buttonborderRadius']['right']) . " " . esc_attr($attr['buttonborderRadius']['bottom']) . " " . esc_attr($attr['buttonborderRadius']['left']) . ";";

        $css .= "padding: " . esc_attr($attr['buttonpaddingtop']) . " " . esc_attr($attr['buttonpaddingright']) . " " . esc_attr($attr['buttonpaddingbottom']) . " " . esc_attr($attr['buttonpaddingleft']) . ";";

        $css .= "color: " . esc_attr($attr['buttoncolor']) . ";";

        $css .= "cursor:pointer;";

    $css .= "}";

    $css .= "$wrapper .vayu_blocks_image_flip_button:hover {";
        $css .= "background: " . $attr['buttonhvrbackground'] . " !important;";
        $css .= "color: " . $attr['buttonhvrcolor'] . " !important;";
    $css .= "}";
    
    /* Overlay styles */
    $css .= "$wrapper .vayu_blocks_overlay_main_wrapper {";
        $css .= "background-color: " . esc_attr($attr['overlaycolor']) . "; /* Default background */";
        $css .= "width: 100%;";
        $css .= "height: 100%;";
        $css .= "position: absolute;";
        $css .= "top: 0;";
        $css .= "left: 0;";
        $css .= "transition: " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
        $css .= "opacity: 0; ";
        $css .= "z-index: 10;";
        $css .= "display: flex;";
        $css .= "flex-direction: column;";
        $css .= "gap:" . esc_attr($attr['gap']) . "px;";

        $alignment = 'center'; // Default value

        if ($attr['overlayalignment'] === 'center') {
            $alignment = 'center';
        } elseif ($attr['overlayalignment'] === 'left') {
            $alignment = 'self-start';
        } elseif ($attr['overlayalignment'] === 'right') {
            $alignment = 'self-end';
        }
        
        $css .= "align-items: $alignment;";

        // Handle justify-content
        $justifyContent = 'center'; // Default value
        if ($attr['overlayalignmentvertical'] === 'center') {
            $justifyContent = 'center';
        } elseif ($attr['overlayalignmentvertical'] === 'start') {
            $justifyContent = 'flex-start';
        } elseif ($attr['overlayalignmentvertical'] === 'end') {
            $justifyContent = 'flex-end';
        }
        $css .= "justify-content: $justifyContent;";
        
        $css .= "box-sizing: border-box;";

        $css .= "border-top: " . esc_attr($attr['overlayborder']['topwidth']) . " " . esc_attr($attr['overlayborder']['topstyle']) . " " . esc_attr($attr['overlayborder']['topcolor']) . ";";
        $css .= "border-bottom: " . esc_attr($attr['overlayborder']['bottomwidth']) . " " . esc_attr($attr['overlayborder']['bottomstyle']) . " " . esc_attr($attr['overlayborder']['bottomcolor']) . ";";
        $css .= "border-left: " . esc_attr($attr['overlayborder']['leftwidth']) . " " . esc_attr($attr['overlayborder']['leftstyle']) . " " . esc_attr($attr['overlayborder']['leftcolor']) . ";";
        $css .= "border-right: " . esc_attr($attr['overlayborder']['rightwidth']) . " " . esc_attr($attr['overlayborder']['rightstyle']) . " " . esc_attr($attr['overlayborder']['rightcolor']) . ";";

        $css .= "border-radius: " . esc_attr($attr['overlayborderRadius']['top']) . " " . esc_attr($attr['overlayborderRadius']['right']) . " " . esc_attr($attr['overlayborderRadius']['bottom']) . " " . esc_attr($attr['overlayborderRadius']['left']) . ";";


    $css .= "}";

        /* Hover the image and show the overlay */
    $css .= "$wrapper .vayu_blocks_image_flip_wrapper:hover .vayu_blocks_overlay_main_wrapper {";
        $css .= "opacity: 1; /* Make the overlay visible on hover */";
    $css .= "}";

    /* Custom overlay hover effects */
    $css .= ".overlayfade-in {";
        $css .= "opacity: 0;";
    $css .= "}";

    $css .= "$wrapper .vayu_blocks_image_flip_wrapper:hover .overlayfade-in {";
        $css .= "opacity: 1;";
    $css .= "}";

    $css .= ".overlayfade-in-up {";
        $css .= "transform: translateY(100%); /* Start from below the container */";
        $css .= "opacity: 0; /* Initially hidden */";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease; /* Smooth transition */";
    $css .= "}";

    $css .= "$wrapper .vayu_blocks_image_flip_wrapper:hover .overlayfade-in-up {";
        $css .= "transform: translateY(0); /* Moves to the original position */";
        $css .= "opacity: 1; /* Fade in */";
    $css .= "}";

    /* Repeat the same approach for other effects */

    $css .= ".overlayfade-in-down {";
        $css .= "transform: translateY(-100%); /* Start from above the container */";
        $css .= "opacity: 0; /* Initially hidden */";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease; /* Smooth transition */";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayfade-in-down {";
        $css .= "transform: translateY(0); /* Moves to the original position */";
        $css .= "opacity: 1; /* Fade in */";
    $css .= "}";

    $css .= ".overlayfade-in-left {";
        $css .= "transform: translateX(-100%); /* Start from the left of the container */";
        $css .= "opacity: 0; /* Initially hidden */";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease; /* Smooth transition */";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayfade-in-left {";
        $css .= "transform: translateX(0); /* Moves to the original position */";
        $css .= "opacity: 1; /* Fade in */";
    $css .= "}";

    $css .= ".overlayfade-in-right {";
        $css .= "transform: translateX(100%); /* Start from the right of the container */";
        $css .= "opacity: 0; /* Initially hidden */";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease; /* Smooth transition */";
        $css .= "}";

        $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayfade-in-right {";
        $css .= "transform: translateX(0); /* Moves to the original position */";
        $css .= "opacity: 1; /* Fade in */";
    $css .= "}";

    /* Flip effects */
    $css .= ".overlayflip-horizontal {";
        $css .= "transform: rotateY(90deg);";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayflip-horizontal {";
        $css .= "transform: rotateY(0);";
    $css .= "}";

    $css .= ".overlayflip-vertical {";
        $css .= "transform: rotateX(90deg);";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayflip-vertical {";
        $css .= "transform: rotateX(0);";
    $css .= "}";

    /* Zoom effects */
    $css .= ".overlayzoom-in-up {";
        $css .= "transform: scale(0.5) translateY(-50%); /* Larger movement up for more emphasis */";
        $css .= "opacity: 0;";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayzoom-in-up {";
        $css .= "transform: scale(1) translateY(0);";
        $css .= "opacity: 1;";
    $css .= "}";

    /* Other zoom-in effects with the same pattern... */

    $css .= ".overlayzoom-in-left {";
        $css .= "transform: scale(0.5) translateX(-50%); /* Larger movement left for more emphasis */";
        $css .= "opacity: 0;";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayzoom-in-left {";
        $css .= "transform: scale(1) translateX(0);";
        $css .= "opacity: 1;";
    $css .= "}";

    $css .= ".overlayzoom-in-right {";
        $css .= "transform: scale(0.5) translateX(50%); /* Larger movement right for more emphasis */";
        $css .= "opacity: 0;";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayzoom-in-right {";
        $css .= "transform: scale(1) translateX(0);";
        $css .= "opacity: 1;";
    $css .= "}";

    /* Continue the pattern for overlayzoom-in-down */
    $css .= ".overlayzoom-in-down {";
        $css .= "transform: scale(0.5) translateY(50%); /* Larger movement down for more emphasis */";
        $css .= "opacity: 0;";
        $css .= "transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
    $css .= "}";

    $css .= ".vayu_blocks_image_flip_wrapper:hover .overlayzoom-in-down {";
        $css .= "transform: scale(1) translateY(0);";
        $css .= "opacity: 1;";
    $css .= "}";

    $transitionDelay = max(0, esc_attr($attr['overlaytransitiontime']) - 0.3);

    $css .= "$wrapper .vayu_block_animation_overlay_inside {";
        $css .= "    transition-delay: " . $transitionDelay . "s !important;";
        $css .= "    animation-fill-mode: forwards !important;";
        $css .= "    opacity: 0;";
        $css .= "    transition: transform " . esc_attr($attr['overlaytransitiontime']) . "s ease, opacity " . esc_attr($attr['overlaytransitiontime']) . "s ease;";
    $css .= "}";
    
    $css .= "$wrapper .vayu_blocks_image_flip_wrapper:hover .vayu_block_animation_overlay_inside {";
        $css .= "    opacity: 1;";
    $css .= "}";

    //for tablet
    $css .= "@media (max-width: 1024px) {

        $wrapper {
            width: " . (isset($attr['customWidthTablet']) ? esc_attr($attr['customWidthTablet']) . esc_attr($attr['customWidthUnit']) : '') . ";

            grid-template-columns: repeat(" . (isset($attr['pg_postLayoutColumnsTablet']) ? $attr['pg_postLayoutColumnsTablet'] : 2) . ", 1fr);
            padding-top: " . (isset($attr['buttonpaddingTopTablet']) ? esc_attr($attr['buttonpaddingTopTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-bottom: " . (isset($attr['buttonpaddingBottomTablet']) ? esc_attr($attr['buttonpaddingBottomTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-left: " . (isset($attr['buttonpaddingLeftTablet']) ? esc_attr($attr['buttonpaddingLeftTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
            padding-right: " . (isset($attr['buttonpaddingRightTablet']) ? esc_attr($attr['buttonpaddingRightTablet']) . esc_attr($attr['paddingUnit']) : '') . ";
    
            margin-top: " . (isset($attr['marginTopTablet']) ? esc_attr($attr['marginTopTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-bottom: " . (isset($attr['marginBottomTablet']) ? esc_attr($attr['marginBottomTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-left: " . (isset($attr['marginLeftTablet']) ? esc_attr($attr['marginLeftTablet']) . esc_attr($attr['marginUnit']) : '') . ";
            margin-right: " . (isset($attr['marginRightTablet']) ? esc_attr($attr['marginRightTablet']) . esc_attr($attr['marginUnit']) : '') . ";   
            margin-left: auto !important;
            margin-right: auto !important;

            grid-gap: " . (isset($attr['pg_gapupTablet']) ? esc_attr($attr['pg_gapupTablet']) . 'px ' . esc_attr($attr['pg_gapTablet']) . 'px' : '') . ";

            border-top-left-radius: " . (isset($attr['pg_postTopBorderRadiusTablet']) ? esc_attr($attr['pg_postTopBorderRadiusTablet']) . "px" : '') . ";
            border-bottom-left-radius: " . (isset($attr['pg_postBottomBorderRadiusTablet']) ? esc_attr($attr['pg_postBottomBorderRadiusTablet']) . "px" : '') . ";
            border-bottom-right-radius: " . (isset($attr['pg_postLeftBorderRadiusTablet']) ? esc_attr($attr['pg_postLeftBorderRadiusTablet']) . "px" : '') . ";
            border-top-right-radius: " . (isset($attr['pg_postRightBorderRadiusTablet']) ? esc_attr($attr['pg_postRightBorderRadiusTablet']) . "px" : '') . ";
   
        }
        

    }";
    
    //for mobile
    $css .= "@media (max-width: 400px) {

        $wrapper {
            width: " . (isset($attr['customWidthMobile']) ? esc_attr($attr['customWidthMobile']) . esc_attr($attr['customWidthUnit']) : '') . ";

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

           
            border-top-left-radius: " . (isset($attr['pg_postTopBorderRadiusMobile']) ? esc_attr($attr['pg_postTopBorderRadiusMobile']) . "px" : '') . ";
            border-bottom-left-radius: " . (isset($attr['pg_postBottomBorderRadiusMobile']) ? esc_attr($attr['pg_postBottomBorderRadiusMobile']) . "px" : '') . ";
            border-bottom-right-radius: " . (isset($attr['pg_postLeftBorderRadiusMobile']) ? esc_attr($attr['pg_postLeftBorderRadiusMobile']) . "px" : '') . ";
            border-top-right-radius: " . (isset($attr['pg_postRightBorderRadiusMobile']) ? esc_attr($attr['pg_postRightBorderRadiusMobile']) . "px" : '') . ";
       
            
        }

    }";
        
    return $css;
}
