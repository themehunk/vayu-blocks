<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Render callback for the block
function vayu_blocks_advance_slider_render($attr,$content) {
    // Include default attributes
    $default_attributes = include('defaultattributes.php');

    // Merge default attributes with provided attributes
    $attr = array_merge($default_attributes, $attr);
  
    // Ensure className is sanitized and applied correctly
    $className = isset($attr['classNamemain']) ? esc_attr($attr['classNamemain']) : '';
    $uniqueId = isset($attr['uniqueId']) ? esc_attr($attr['uniqueId']) : '';

    // Retrieve slider-specific attributes
    $autoplay   = empty($attr['autoplay']) ? false : $attr['autoplay'];
    $navigation = empty($attr['navigation']) ? false : $attr['navigation'];
    $pagination = empty($attr['pagination']) ? false : $attr['pagination'];
    $centeredSlides= empty($attr['centeredSlides']) ? false : $attr['centeredSlides'];
    $grabCursor= empty($attr['grabCursor']) ? false : $attr['grabCursor'];
    $initialSlide= $attr['initialSlide'];
    $keyboard= true;
    $simulateTouch= empty($attr['simulateTouch']) ? false : $attr['simulateTouch'];
    $loop= empty($attr['loop']) ? false : $attr['loop'];
    $slidesPerView=$attr['slidesPerView'];
    $spaceBetween=$attr['spaceBetween'];
    $freeMode=empty($attr['freeMode']) ? false : $attr['freeMode'];
    $mousewheel=empty($attr['mousewheel']) ? false : $attr['mousewheel'];
    $delay=$attr['delay'];
    $disableOnInteraction=empty($attr['disableOnInteraction']) ? false : $attr['disableOnInteraction'];
    $effect = $attr['effect'];
    $scrollbar=empty($attr['scrollbar']) ? false : $attr['scrollbar'];

    // Prepare Swiper attributes
    $swiper_attr = array(
        'autoplay'   => $autoplay,
        'navigation' => $navigation,
        'pagination' => array(
            'enabled' => $pagination,
            'dynamicBullets' => $attr['dynamicBullets'],
            'dynamicMainBullets' => $attr['dynamicMainBullets'],
        ),
        'centeredSlides' => $centeredSlides,
        'grabCursor'=>$grabCursor,
        'keyboard'=> $keyboard,
        'simulateTouch'=> $simulateTouch,
        'loop' => $loop,
        'freeMode' => $freeMode,
        'mousewheel' => $mousewheel,
        'initialSlide' => $initialSlide,
        'slidesPerView' => $slidesPerView,
        'spaceBetween' => $spaceBetween,
        'scrollbar' => $scrollbar,
    );


    // Conditionally add the effect parameter
    if ($effect != 'none') {
        $swiper_attr['effect'] = $effect;
    }

    // Conditionally add autoplay settings
    if ($autoplay) {
        $swiper_attr['autoplay'] = array(
            'delay' => $delay,
            'disableOnInteraction' => $disableOnInteraction,
            'reverseDirection'=> true,
        );
    }


    $swiper_attr = htmlspecialchars(wp_json_encode($swiper_attr));
    
    // Prepare wrapper attributes
    $wrapper_attributes = get_block_wrapper_attributes(
        array(
            'class' => 'swiper',
        )
    );

    // Render and return the slider output inside a div with the dynamic class name
    $slider_content = '<div ' . wp_kses_data($wrapper_attributes) . ' data-swiper="' . esc_attr($swiper_attr) . '">';
    $slider_content .= '<div class="swiper-wrapper">';
    $slider_content .= $content; // Output default content
    $slider_content .= '</div>'; // Close swiper-wrapper
    $slider_content .= '</div>'; // Close swiper

    return '<div id="' . $uniqueId . '" class="wp_block_vayu-blocks-advance-slider-main vayu-block-' . $uniqueId . ' ' . $className . '">' . $slider_content . '</div>';
}
?>
