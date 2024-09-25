<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class Vayu_blocks_Advance_Slider {

    private $attr; //attributes

    public function __construct($attr) {
        $this->attr = $attr;
    }

    //Render
    public function render() {
        ob_start(); // Start output buffering
        echo $this->render_slider();
        return ob_get_clean(); // Return the buffered output
    }

    // Slider
    private function render_slider() {
        $slides_html = '';
        $animated = isset($this->attr['className']) ? $this->attr['className'] : ''; // animation
        $className = '';
        $uniqueId = isset($this->attr['uniqueId']) ? esc_attr($this->attr['uniqueId']) : '';
    
    
        // Prepare slider data attributes
        $data_attributes = array(
            'data-unique-id' => $uniqueId,
            'data-dots-length' => esc_attr($this->attr['dotslength']),
            'data-dots-show' => esc_attr($this->attr['dots']['show'] ? 'true' : 'false'),
            'data-infinite' => esc_attr($this->attr['infinite'] ? 'true' : 'false'),
            'data-center-mode' => esc_attr($this->attr['centerMode'] ? 'true' : 'false'),
            'data-fade' => esc_attr($this->attr['fade'] ? 'true' : 'false'),
            'data-wait-for-animate' => esc_attr($this->attr['waitForAnimate'] ? 'true' : 'false'),
            'data-lazy-load' => esc_attr($this->attr['lazyLoad'] ? 'true' : 'false'),
            'data-autoplay' => esc_attr($this->attr['autoplay'] ? 'true' : 'false'),
            'data-autoplay-speed' => esc_attr($this->attr['autoplaySpeed']),
            'data-pause-on-hover' => esc_attr($this->attr['pauseOnHover'] ? 'true' : 'false'),
            'data-focus-on-select' => esc_attr($this->attr['focusOnSelect'] ? 'true' : 'false'),
            'data-rtl' => esc_attr($this->attr['rtl'] ? 'true' : 'false'),
            'data-arrows' => esc_attr($this->attr['arrow'] ? 'true' : 'false'),
            'data-swipe' => esc_attr($this->attr['swipe'] ? 'true' : 'false'),
            'data-animation-type' => esc_attr($this->attr['animationtype']),
            'data-speed' => esc_attr($this->attr['speed']),
            'data-slides-to-scroll' => esc_attr($this->attr['slidesToScroll']),
            'data-slides-per-row' => esc_attr($this->attr['slidesPerRow']),
            'data-initial-slide' => esc_attr($this->attr['initialSlide']),
            'data-slides-to-show' => esc_attr($this->attr['slidesToShow']),
        );
    
        $data_attr_string = '';
        foreach ($data_attributes as $key => $value) {
            $data_attr_string .= ' ' . $key . '="' . $value . '"';
        }
    
        // Slides
        foreach ($this->attr['slides'] as $index => $slide) {
            $slideUniqueId = isset($slide['uniqueId']) ? esc_attr($slide['uniqueId']) : '';
    
            $slides_html .= '<div class="vayu_blocks_slide_' . $slideUniqueId . '">';
            // Color overlay
            $slides_html .= '<div class="vayu_blocks_color_overlay"></div>';
    
            // Inside container
            $slides_html .= '<div class="vayu_blocks_inside_container_div">';
            $slides_html .= '<div class="vayu_blocks_inside_container_heading_div">';
            // Heading
            if (isset($slide['heading'])) {
                $slides_html .= $this->render_heading($slide['heading']);
            }
    
            // Subheading
            if (isset($slide['subheading']) && $slide['subheading']['show']) {
                $slides_html .= $this->render_subheading($slide['subheading']);
            }
            $slides_html .= '</div>';
    
            $slides_html .= '<div>';
            // Button 1
            if (isset($slide['button1']) && $slide['button1']['show']) {
                $slides_html .= $this->render_button1($slide['button1']);
            }
    
            // Button 2
            if (isset($slide['button2']) && $slide['button2']['show']) {
                $slides_html .= $this->render_button2($slide['button2']);
            }
            $slides_html .= '</div>';
            $slides_html .= '</div>'; // Closing inside container
            $slides_html .= '</div>'; // Closing slide container
        }
    
        return '<div class="vayu-blocks-advance-slider ' . $uniqueId . ' ' . $animated . ' "' . $data_attr_string . '>' . $slides_html . '</div>';
    }
    
    // Heading
    private function render_heading($heading) {
        if (empty($heading['text'])) {
            return '';
        }
        $heading_tag = $heading['tag'];
        $heading_link = esc_url($heading['link']);
        $heading_newtab = isset($heading['newtab']) && $heading['newtab'] ? '_blank' : '_self';
        $heading_text = esc_html($heading['text']);

        return "<{$heading_tag} class='vayu_blocks_heading'>
            <a href='{$heading_link}' target='{$heading_newtab}' class='vayu_blocks_slider_heading'>
                {$heading_text} 
            </a>
        </{$heading_tag}>";
    }

    // Sub Heading
    private function render_subheading($subheading) {
        if (empty($subheading['text']) || !$subheading['show']) {
            return '';
        }
        $subheading_tag = $subheading['tag'];
        $subheading_text = esc_html($subheading['text']);

        return "<{$subheading_tag} class='vayu_blocks_sub_heading'>
            {$subheading_text}
        </{$subheading_tag}>";
    }

    // Button 1
    private function render_button1($button) {
        $button_link = esc_url($button['link']);
        $button_newtab = isset($button['newtab']) && $button['newtab'] ? '_blank' : '_self';
        $button_text = esc_html($button['text']);

        return "<button class='vayu_blocks_slider_button1'>
            <a href='{$button_link}' class='vayu_blocks_slider_button1-anchor-tag' target='{$button_newtab}' style='text-decoration: none; cursor: pointer;'>
                {$button_text}
            </a>
        </button>";
    }

    // Button 2
    private function render_button2($button) {
        $button_link = esc_url($button['link']);
        $button_newtab = isset($button['newtab']) && $button['newtab'] ? '_blank' : '_self';
        $button_text = esc_html($button['text']);

        return "<button class='vayu_blocks_slider_button2'>
            <a href='{$button_link}' class='vayu_blocks_slider_button2-anchor-tag' target='{$button_newtab}' style='text-decoration: none; cursor: pointer;'>
                {$button_text}
            </a>
        </button>";
    }
      
}
     

// Render callback for the block
function vayu_blocks_advance_slider_render($attr) {

    // Include default attributes
    $default_attributes = include('defaultattributes.php');

    // Merge default attributes with provided attributes
    $attr = array_merge($default_attributes, $attr);

    // Initialize the slider with the merged attributes
    $slider = new Vayu_blocks_Advance_Slider($attr);
    
    // Ensure className is sanitized and applied correctly
    $className = isset($attr['classNamemain']) ? esc_attr($attr['classNamemain']) : '';

    $uniqueId = isset($attr['uniqueId']) ? esc_attr($attr['uniqueId']) : '';

    // Render and return the slider output inside a div with the dynamic class name
    return '<div id=' . $uniqueId . ' class="wp_block_vayu-blocks-advance-slider-main vayu-block-' . $uniqueId . ' ' . $className . ' ">' . $slider->render() . '</div>';

}


function vayu_enqueue_slick_slider_assets() {
    wp_enqueue_style('slick-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css');
    wp_enqueue_style('slick-theme-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css');
    wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'vayu_enqueue_slick_slider_assets');