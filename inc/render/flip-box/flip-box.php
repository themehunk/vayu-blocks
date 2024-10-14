<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
     
class Vayu_blocks_image_flip {

    private $attr; //attributes

    public function __construct($attr,$content) {
        $this->attr = $attr;
        $this->content = $content;
    }

    //Render
    public function render() {
        ob_start(); // Start output buffering
        echo $this->render_image();
        return ob_get_clean(); // Return the buffered output
    }

    //main container containing image and innerblocks
    private function render_image() {
        $attributes = $this->attr; // Access attributes
        $image_html = '';
        $animated = isset($attributes['className']) ? esc_attr($attributes['className']) : ''; // animation
        $uniqueId = isset($attributes['uniqueId']) ? esc_attr($attributes['uniqueId']) : '';
        $innerclass = '';

        // Correcting the conditional checks
        if (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-front') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-front';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-front-left') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-front-left';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-back') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-back';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-back-bottom') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-back-bottom';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-z') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-z';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'flip-x') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_flip-x';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'zoom-in') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_zoom-in';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'zoom-out') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_zoom-out';
        } elseif (isset($attributes['imagehvreffect']) && $attributes['imagehvreffect'] === 'fade-in') {
            $innerclass = 'vayu_blocks_flip-box-inner_animation_div_fade-in';
        } 

        // Assuming $attributes is already defined and contains 'dbox' and 'imagehvreffect'
        if ($attributes['dbox'] && !($attributes['imagehvreffect'] === 'zoom-in' || 
                                    $attributes['imagehvreffect'] === 'zoom-out' || 
                                    $attributes['imagehvreffect'] === 'fade-in')) {
                                     
            $innerclass .= '-dbox'; // Append '-dbox' if conditions are met
        }

        $image_html .= '<div class="vayu_blocks_image_flip_wrapper-for-front" id='. $uniqueId .'>';
            $image_html .= '<div class="vayu_blocks_flip-box-inner-for-front ' . $innerclass . '" >';            
                $image_html .= $this->content;
            $image_html .= '</div>';
        $image_html .= '</div>';
    
        return '<div class="vayu-blocks-image-flip-main-container-for-front' . $uniqueId . ' ' . $animated . '">' . $image_html . '</div>';
    }
    
}

// Render callback for the block
function vayu_blocks_flip_box_render($attr,$content) {
    // Include default attributes
    $default_attributes = include('defaultattributes.php');

    // Merge default attributes with provided attributes
    $attr = array_merge($default_attributes, $attr);

    // Initialize the image with the merged attributes
    $image = new Vayu_blocks_image_flip($attr,$content);
    
    // Ensure className is sanitized and applied correctly
    $className = isset($attr['classNamemain']) ? esc_attr($attr['classNamemain']) : '';

    // Render and return the image output inside a div with the dynamic class name
    return '<div class="wp_block_vayu-blocks-image-flip-main ' . $className . '">' . $image->render() . '</div>';
}

