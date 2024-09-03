<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function generate_inline_slider_styles($attr) {
    $css = '';

    //attributes-merge
    $default_attributes = include('defaultattributes.php');
    $attr = array_merge($default_attributes, $attr);  
    $uniqueId = $attr['uniqueId'];

    // Generate the class selector by concatenating '.' with the unique ID
    $wrapper = '.' . esc_attr($uniqueId);


    //Main div
    $css .= "$wrapper {";

        $css .= "width: " . esc_attr($attr['customWidth']) . esc_attr($attr['customWidthUnit']) . ";";

        $css .= "max-width:100%;";
        
        $css .= "margin-left:auto !important;";
        $css .= "margin-right:auto !important;";
        
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
       

       
    $css .= "}";
   
    
    // Add media query for tablet screens
    $css .= "@media (max-width: 768px) {";
        $css .= "$wrapper {";
            $css .= "width: " . esc_attr($attr['customWidthTablet']) . esc_attr($attr['customWidthUnit']) . ";";
        $css .= "}";
    $css .= "}";

    // Add media query for Mobile screens
    $css .= "@media (max-width: 300px) {";
        $css .= "$wrapper {";
            $css .= "width: " . esc_attr($attr['customWidthMobile']) . esc_attr($attr['customWidthUnit']) . ";";
        $css .= "}";
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

    $css .= "$wrapper .slick-slide{";
        $css .= "margin: " . $attr['slidermargin'] . "px;";
    $css .= "}\n";

    // Common dot styles
    $css .= "$wrapper .slick-dots li button {";
        $css .= "cursor: pointer;";
        $css .= "background: none;";
        // $css .= "border: 1px solid transparent;";
        $css .= "display: flex;";
        $css .= "align-items: center;";
        $css .= "justify-content: center;";
        $css .= "color: " . $attr['dots']['color'] . ";";
        if($attr['dots']['option']=== 'number'){
            $css .= "font-size: " . (strpos($attr['dots']['size'], 'px') === false ? $attr['dots']['size'] . 'px' : $attr['dots']['size']) . ";";
        }
        $css .= "border-radius:50%;";
    $css .= "}\n";

    // Active dot styles
    $css .= "$wrapper .slick-dots .slick-active button {";
        $css .= "border-color: gray;";
        $css .= "color: " . $attr['dots']['activeColor'] . ";";
    $css .= "}\n";

    // Non-active dot styles
    $css .= "$wrapper .slick-dots li button {";
        $css .= "background-color: " . $attr['dots']['backgroundColor'] . ";";
    $css .= "}\n";

    // Non-active dot styles
    $css .= "$wrapper .slick-dots li button::before {";
        $css .= "font-Size : " . $attr['dots']['size'] ."px;";
        $css .= "color: " . $attr['dots']['color'] . ";";
        $css .= "opacity:1;";
        // Set content based on dots.option
        if ($attr['dots']['option'] === 'dots') {
            $css .= "content: '•';"; // Use a dot character
        } elseif ($attr['dots']['option'] === 'square') {
            $css .= "content: '■';"; // Use a square character
            $css .= "font-Size : 32px;";
        } else {
            $css .= "content: ''"; // No content
        }
    $css .= "}\n";
   
    $css .= "$wrapper .slick-dots .slick-active button::before {";
        $css .= "color: " . $attr['dots']['activeColor'] . ";";
    $css .= "}\n";

    // Margin and position styling if 'onimage' is set
    $css .= "$wrapper .slick-dots {";
        if ($attr['dots']['onimage']) {
            $css .= "margin-bottom: " . $attr['dots']['position'] . "px;";
        } else {
            $css .= "margin: 0;";
        }
    $css .= "}\n";

    // Determine animation type and opacity
    switch ($attr['animationtype']) {
        case 'animation1':
            $animationtype = 'fadeInUparrow';
            $opacity = '0'; // Hidden initially for animation
            break;
        case 'animation2':
            $animationtype = 'fadeInDownarrow';
            $opacity = '0'; // Hidden initially for animation
            break;
        case 'animation3':
            $animationtype = 'fadeInLeftarrow';
            $opacity = '0'; // Hidden initially for animation
            break;
        case 'animation4':
            $animationtype = 'fadeInRightarrow';
            $opacity = '0'; // Hidden initially for animation
            break;
        case 'noanimation':
            $animationtype = ''; // No animation
            $opacity = $attr['arrowstyleleft']['opacity'] ?? '0';
            break;
        default:
            $animationtype = ''; // Fallback animation
            $opacity = '0'; // Hidden initially for animation
            break;
    }

    // Arrow styles
    $css .= "$wrapper .slick-arrow {";
        $css .= "background: " . $attr['arrowstyleleft']['backgroundColor'] . ";";
        $css .= "border-radius: " . (
            $attr['arrowstyleleft']['borderRadius']['top'] ?: '0px'
        ) . " " . (
            $attr['arrowstyleleft']['borderRadius']['right'] ?: '0px'
        ) . " " . (
            $attr['arrowstyleleft']['borderRadius']['bottom'] ?: '0px'
        ) . " " . (
            $attr['arrowstyleleft']['borderRadius']['left'] ?: '0px'
        ) . ";";
        $css .= "border: none;";
        $css .= "cursor: pointer;";
        $css .= "width: 2.5rem;";  // Fixed missing semicolon
        $css .= "height: 2.5rem;"; // Fixed missing semicolon
        
        $css .= "align-items: center;";
        $css .= "justify-content: center;";
        $css .= "opacity: " . $attr['arrowstyleleft']['opacity'] . ";";
        $css .= "z-index: 1;";
        // Conditional display property
        if ($attr['arrowOnHover'] === true) {
            $css .= "display: none !important;";
        } else {
            $css .= "display: flex;";
        }
        $css .= "opacity: " . $opacity . ";";

        // Conditional animation property
        $css .= "animation: $animationtype 0.7s cubic-bezier(0.42, 0, 0.58, 1) forwards;";

    $css .= "}\n";

    $css .= "$wrapper:hover .slick-next {";
        $css .= "display: flex !important;";  // Ensure arrows are visible on hover
        // Apply animation if both conditions are true
        if ($attr['arrowOnHover'] && $attr['arrowanimation']) {
            $css .= "animation: slideInFromBottomRight 1s ease-out;";
        }
        $css .= "animation-fill-mode: forwards;"; // Ensure final state persists
    $css .= "}\n";

    $css .= "$wrapper:hover .slick-prev {";
        $css .= "display: flex !important;";  // Ensure arrows are visible on hover
        if($attr['arrowOnHover'] && $attr['arrowanimation']){
            $css .= "animation: slideInFromBottomLeft 1s ease-out;"; // Apply animation
        }
        $css .= "animation-fill-mode: forwards;"; // Ensure final state persists
    $css .= "}\n";

    // Keyframes
    $css .= "@keyframes slideInFromBottomRight {";
        $css .= "from {";
            $css .= "opacity: 0;"; /* Start invisible */
            $css .= "transform: translate(100%, 100%);"; /* Start from bottom right */
        $css .= "}";
        $css .= "to {";
            $css .= "opacity: 1;"; /* Fade in */
            $css .= "transform: translate(0, 0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";

    // Keyframes for fadeInUparrow
    $css .= "@keyframes fadeInUparrow {";
        $css .= "0% {";
            $css .= "opacity: 0;"; /* Start slightly hidden */
            $css .= "transform: translateY(20px);"; /* Start slightly lower */
        $css .= "}";
        $css .= "100% {";
            $css .= "opacity: " . $attr['arrowstyleleft']['opacity'] . ";";
            $css .= "transform: translateY(0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";
    
    // Keyframes for fadeInDownarrow
    $css .= "@keyframes fadeInDownarrow {";
        $css .= "from {";
            $css .= "opacity: 0;"; /* Start slightly hidden */
            $css .= "transform: translateY(-20px);"; /* Start slightly above */
        $css .= "}";
        $css .= "to {";
            $css .= "opacity: " . $attr['arrowstyleleft']['opacity'] . ";";
            $css .= "transform: translateY(0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";
    
    // Keyframes for fadeInLeftarrow
    $css .= "@keyframes fadeInLeftarrow {";
        $css .= "from {";
            $css .= "opacity: 0;"; /* Start slightly hidden */
            $css .= "transform: translateX(-20px);"; /* Start slightly left */
        $css .= "}";
        $css .= "to {";
            $css .= "opacity: " . $attr['arrowstyleleft']['opacity'] . ";";
            $css .= "transform: translateX(0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";
    
    // Keyframes for fadeInRightarrow
    $css .= "@keyframes fadeInRightarrow {";
        $css .= "from {";
            $css .= "opacity: 0;"; /* Start slightly hidden */
            $css .= "transform: translateX(20px);"; /* Start slightly right */
        $css .= "}";
        $css .= "to {";
            $css .= "opacity: " . $attr['arrowstyleleft']['opacity'] . ";";
            $css .= "transform: translateX(0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";
    
    // Keyframes 
    $css .= "@keyframes slideInFromBottomLeft {";
        $css .= "from {";
            $css .= "opacity: 0;"; /* Start invisible */
            $css .= "transform: translate(-100%, 100%);"; /* Start from bottom left */
        $css .= "}";
        $css .= "to {";
            $css .= "opacity: 1;"; /* Fade in */
            $css .= "transform: translate(0, 0);"; /* End at original position */
        $css .= "}";
    $css .= "}\n";
        
    // Arrow hover styles
    $css .= "$wrapper .slick-arrow:hover {";
        $css .= "background:" . esc_attr($attr['arrowstyleleft']['hovercolor']) . ";";
    $css .= "}\n";

    
    // Adjust left and right arrow specific styles
    $css .= "$wrapper .slick-prev {";
        $css .= "margin-left: " . (
            strpos($attr['arrowstyleleft']['position'], 'px') === false ? 
            $attr['arrowstyleleft']['position'] . 'px' : 
            $attr['arrowstyleleft']['position']
        ) . ";";
        $css .= "margin-top:" . esc_attr($attr['arrowstyleleft']['positionVertical']) . "px;";
    $css .= "}\n";
    
    $css .= "$wrapper .slick-next {";
        $css .= "margin-right: " . (
            strpos($attr['arrowstyleleft']['position'], 'px') === false ? 
            $attr['arrowstyleleft']['position'] . 'px' : 
            $attr['arrowstyleleft']['position']
        ) . ";";

        $css .= "margin-top: " . esc_attr($attr['arrowstyleleft']['positionVertical']) . "px;";
    $css .= "}\n";

    // Styling for slider components
    $css .= ".vayu_blocks_heading,";
    $css .= ".vayu_blocks_sub_heading,";
    $css .= ".vayu_blocks_slider_button1,";
    $css .= ".vayu_blocks_slider_button2 {";
        if($attr['animationtype'] === 'noanimation'){
            $css .= "opacity: 1;";

        }else{
            $css .= "opacity: 0; /* Initially hidden */";
        }
    $css .= "}\n";
    
    // Arrow icon customization
    $css .= "$wrapper .slick-prev:before, ";
    $css .= "$wrapper .slick-next:before {";
        $css .= "font-size: " . (
            strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
            $attr['arrowstyleleft']['size'] . 'px' : 
            $attr['arrowstyleleft']['size']
        ) . ";";
        $css .= "display: inline-block;";
        $css .= "font-Weight:bolder;";
        $css .= "color: " . $attr['arrowstyleleft']['color'] . ";";
        $css .= "content:'';";
    $css .= "}\n";

    // Specific SVG icons for different arrow types
    if ($attr['arrowstyleleft']['tag'] === 'arrow') {
        $leftArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.293 7.293a1 1 0 010 1.414L10.414 13H21a1 1 0 110 2H10.414l4.879 4.879a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" 
       /></svg>'; 
        $rightArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 16.707a1 1 0 010-1.414L13.586 12H3a1 1 0 110-2h10.586L8.707 5.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
    
        $css .= "$wrapper .slick-prev:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($leftArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";

        $css .= "$wrapper .slick-next:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($rightArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";
    }else if ($attr['arrowstyleleft']['tag'] === 'chevron'){
        $leftArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.293 7.293a1 1 0 010 1.414L10.414 13 15.293 17.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
        $rightArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 011.414 0l4.879 4.879L8.707 17.293a1 1 0 01-1.414-1.414L11.586 13 8.707 9.121a1 1 0 010-1.414z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
    
        $css .= "$wrapper .slick-prev:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($leftArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";

        $css .= "$wrapper .slick-next:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($rightArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";
    }else if ($attr['arrowstyleleft']['tag'] === 'circle'){
        $leftArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.293 7.293a1 1 0 010 1.414L10.414 13H21a1 1 0 110 2H10.414l4.879 4.879a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
        $rightArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 011.414 0l4.879 4.879L8.707 17.293a1 1 0 01-1.414-1.414L11.586 13 8.707 9.121a1 1 0 010-1.414z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
    
        $css .= "$wrapper .slick-prev:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($leftArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";

        $css .= "$wrapper .slick-next:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($rightArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";
    }else if ($attr['arrowstyleleft']['tag'] === 'hand'){
        $leftArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.293 7.293a1 1 0 010 1.414L10.414 13H21a1 1 0 110 2H10.414l4.879 4.879a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
        $rightArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 011.414 0l4.879 4.879L8.707 17.293a1 1 0 01-1.414-1.414L11.586 13 8.707 9.121a1 1 0 010-1.414z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
    
        $css .= "$wrapper .slick-prev:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($leftArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";

        $css .= "$wrapper .slick-next:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($rightArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";
    }else if ($attr['arrowstyleleft']['tag'] === 'caret'){
        $leftArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.707 7.293a1 1 0 010 1.414L10.414 13 14.707 17.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
        $rightArrowSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 7.293a1 1 0 011.414 0l4.879 4.879L9.293 17.293a1 1 0 01-1.414-1.414L11.586 13 9.293 9.121a1 1 0 010-1.414z" fill="' . esc_attr($attr['arrowstyleleft']['color']) . '" /> </svg>';
    
        $css .= "$wrapper .slick-prev:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($leftArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";

        $css .= "$wrapper .slick-next:before {";
            $css .= "background: url('data:image/svg+xml;base64," . base64_encode($rightArrowSvg) . "');";
            $css .= "width: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
            $css .= "height: " . (
                strpos($attr['arrowstyleleft']['size'], 'px') === false ? 
                $attr['arrowstyleleft']['size'] . 'px' : 
                $attr['arrowstyleleft']['size']
            ) . ";";
        $css .= "}";
    }
    
    // Loop through each slide to generate styles
    foreach ($attr['slides'] as $slide) {

        $uniqueId = $slide['uniqueId']; //unique Id

        $container = ".vayu_blocks_slide_{$uniqueId}";
        $insideContainer = ".vayu_blocks_inside_container_div";

        $heading = $slide['heading'];
        $subheading = $slide['subheading'];
        $button1 = $slide['button1'];
        $button2 = $slide['button2'];
        $filterId = $slide['duotone'];

        // slide blocks
        $css .= "$wrapper $container {";

            // Set margin-bottom and height
            $heightAuto = $slide['heightauto'];
            $alignmenttop = $slide['alignmenttop'];
            $alignment = $slide['alignment'];
            $imageHeight = $slide['imageheight'];
            $customheight = $slide['customheight'];
            // Apply conditional height logic
            if ($heightAuto) {
                if ($imageHeight > 200) {
                    $css .= "height: {$imageHeight}px;";
                } else {
                    $css .= "height: 100%;";  // If image height is 200 or less and heightAuto is enabled
                }
            } else {
                $css .= "height: {$customheight}px;";  // When heightAuto is disabled
            }


            $css .= "overflow: hidden;";
            $css .= "position: relative;";
            $css .= "display: flex !important;";
            $css .= "align-items: {$alignmenttop};";
            $css .= "justify-content: {$alignment};";
            
            // Border properties
            $borderColor = isset($slide['border']['color']) ? esc_attr($slide['border']['color']) : 'transparent';
            $borderWidth = isset($slide['border']['width']) ? esc_attr($slide['border']['width']) : '0';
            $borderStyle = isset($slide['border']['style']) ? esc_attr($slide['border']['style']) : 'none';
            
            $borderTopColor = isset($slide['border']['topcolor']) ? esc_attr($slide['border']['topcolor']) : $borderColor;
            $borderTopWidth = isset($slide['border']['topwidth']) ? esc_attr($slide['border']['topwidth']) : $borderWidth;
            $borderTopStyle = isset($slide['border']['topstyle']) ? esc_attr($slide['border']['topstyle']) : $borderStyle;
            
            $borderBottomColor = isset($slide['border']['bottomcolor']) ? esc_attr($slide['border']['bottomcolor']) : $borderColor;
            $borderBottomWidth = isset($slide['border']['bottomwidth']) ? esc_attr($slide['border']['bottomwidth']) : $borderWidth;
            $borderBottomStyle = isset($slide['border']['bottomstyle']) ? esc_attr($slide['border']['bottomstyle']) : $borderStyle;
            
            $borderLeftColor = isset($slide['border']['leftcolor']) ? esc_attr($slide['border']['leftcolor']) : $borderColor;
            $borderLeftWidth = isset($slide['border']['leftwidth']) ? esc_attr($slide['border']['leftwidth']) : $borderWidth;
            $borderLeftStyle = isset($slide['border']['leftstyle']) ? esc_attr($slide['border']['leftstyle']) : $borderStyle;
            
            $borderRightColor = isset($slide['border']['rightcolor']) ? esc_attr($slide['border']['rightcolor']) : $borderColor;
            $borderRightWidth = isset($slide['border']['rightwidth']) ? esc_attr($slide['border']['rightwidth']) : $borderWidth;
            $borderRightStyle = isset($slide['border']['rightstyle']) ? esc_attr($slide['border']['rightstyle']) : $borderStyle;
            
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
            $borderRadiusTop = isset($slide['borderRadius']['top']) ? esc_attr($slide['borderRadius']['top']) : '0px';
            $borderRadiusRight = isset($slide['borderRadius']['right']) ? esc_attr($slide['borderRadius']['right']) : '0px';
            $borderRadiusBottom = isset($slide['borderRadius']['bottom']) ? esc_attr($slide['borderRadius']['bottom']) : '0px';
            $borderRadiusLeft = isset($slide['borderRadius']['left']) ? esc_attr($slide['borderRadius']['left']) : '0px';
            
            $css .= "border-radius: {$borderRadiusTop} {$borderRadiusRight} {$borderRadiusBottom} {$borderRadiusLeft};";
            
            // Get the padding values with defaults
            $paddingTop = isset($slide['padding']['top']) ? esc_attr($slide['padding']['top']) : '0px';
            $paddingRight = isset($slide['padding']['right']) ? esc_attr($slide['padding']['right']) : '0px';
            $paddingBottom = isset($slide['padding']['bottom']) ? esc_attr($slide['padding']['bottom']) : '0px';
            $paddingLeft = isset($slide['padding']['left']) ? esc_attr($slide['padding']['left']) : '0px';

            // Get the bottom padding value or default to '0px'
            // $paddingBottom = isset($slide['padding']['bottom']) ? esc_attr($slide['padding']['bottom']) : '0px';

            // // Convert bottom padding to an integer for comparison (remove 'px' if present)
            // $paddingBottomValue = intval(str_replace('px', '', $paddingBottom));

            // // Add 50px to the bottom padding value
            // $paddingBottomValue += 50;

            // // Apply the new bottom padding value with 'px'
            // $paddingBottom = "{$paddingBottomValue}px";

            // Get the left padding value or default to '0px'

            // Apply the padding style
            $css .= "padding: {$paddingTop} {$paddingRight} {$paddingBottom} {$paddingLeft};";

            $css .= "background: url({$slide['backgroundImage']}) no-repeat center center;";
            $css .= "background-size: cover;";
            $css .= "margin: " . $attr['slidermargin'] . "px;";

            // End the CSS block for this slide
        $css .= "}\n";
        
        // overlay div
        $css .= "$wrapper $container .vayu_blocks_color_overlay {";
            $css .= "position: absolute;";
            $css .= "top: 0;";
            $css .= "left: 0;";
            $css .= "right: 0;";
            $css .= "bottom: 0;";
            $css .= "width: 100%;";
            $css .= "height: 100%;";
            $css .= "z-index: 1;";

            // Add opacity
            if (isset($slide['opacity'])) {
                $css .= "opacity: " . esc_attr($slide['opacity']) . ";";
            }

            // Apply background color or gradient based on the attr
            if (isset($slide['backgroundColor']) && !empty($slide['backgroundColor'])) {
                $css .= "background-color: " . esc_attr($slide['backgroundColor']) . ";";
            } elseif (isset($slide['backgroundGradient']) && !empty($slide['backgroundGradient'])) {
                $css .= "background: -webkit-" . esc_attr($slide['backgroundGradient']) . ";";
            }

        $css .= "}\n";

        // Inside Container div
        $css .= "$wrapper $container $insideContainer {";
            $css .= "position: relative;";
            $css .= "z-index: 3;";
            // $css .= "height: 100%;";
            $css .= "text-align: " . esc_attr($slide['alignment']) . ";";
        $css .= "}\n";

        // Inside Heading Container div
        $css .= "$wrapper $container $insideContainer .vayu_blocks_inside_container_heading_div{";
            $gaphb = isset($slide['gaphb']) ? esc_attr($slide['gaphb']) : '0px';
            $css .= "margin-bottom: {$gaphb};";
            
        $css .= "}\n";

        // Heading Button 
        $css .= "$wrapper $container $insideContainer .vayu_blocks_heading{";
            $gaphsub = isset($slide['gaphsub']) ? esc_attr($slide['gaphsub']) : '0px';
            $css .= "margin-bottom: {$gaphsub};";
            $css .= "font-size: 0;";
        $css .= "}\n";

        // Heading
        $css .= "$wrapper $container $insideContainer .vayu_blocks_slider_heading {";
            $css .= "color: " . esc_attr($heading['color']) . ";";
            $css .= "font-size: " . esc_attr($heading['size']) . "px;";
            $css .= "font-weight: " . esc_attr($heading['fontWeight']) . ";";
            $css .= "text-decoration: none;";
            $css .= "cursor: pointer;";
            //animation left
        $css .= "}\n";

        // Sub Heading
        $css .= "$wrapper $container $insideContainer .vayu_blocks_sub_heading {";
            $css .= "color: " . esc_attr($subheading['color']) . ";";
            $css .= "font-size: " . esc_attr($subheading['size']) . "px;";
            $css .= "font-weight: " . esc_attr($subheading['fontWeight']) . ";";
            //animation left
        $css .= "}\n";

        // Button 1
        $css .= "$wrapper $container $insideContainer .vayu_blocks_slider_button1 {";
            // Font Size
            $css .= "font-size: {$button1['size']}px;";
    
            // Border
            $css .= "border: none;";
            $css .= "cursor: pointer;";

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

            // Apply conditional margin-right based on button2.show
            $css .= "margin-right: " . ($slide['button2']['show'] ? '5px' : '0px') . ";";

            //animation left
        $css .= "}\n";

        // Button 1 anchor
        $css .= "$wrapper $container $insideContainer .vayu_blocks_slider_button1 .vayu_blocks_slider_button1-anchor-tag{";
            $css .= "color: {$button1['color']};";
        $css .= "}\n";
        
        // Button 2 anchor
        $css .= "$wrapper $container $insideContainer .vayu_blocks_slider_button1 .vayu_blocks_slider_button2-anchor-tag{";
            $css .= "color: {$button2['color']};";
        $css .= "}\n";

        //Button 2
        $css .= "$wrapper $container $insideContainer .vayu_blocks_slider_button2 {";
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

