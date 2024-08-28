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

        echo $this->render_scripts();
        echo $this->render_slider();
    
        return ob_get_clean(); // Return the buffered output
    }

    // Slider
    private function render_slider() {
        $slides_html = '';
        $animated = isset($attr['className']) ? $attr['className'] : ''; //animation
        $className = '';
        if (isset($this->attr['widthType'])) {
            switch ($this->attr['widthType']) {
                case 'fullwidth':
                    $className = 'alignfull';
                    break;
                case 'customwidth':
                    $className = 'alignwide';
                    break;
            }
        }

            //slides
            foreach ($this->attr['slides'] as $index => $slide) {
                $uniqueId = isset($slide['layout']['uniqueId']) ? esc_attr($slide['layout']['uniqueId']) : '';

                $slides_html .= '<div class="vayu_blocks_slide_' . $uniqueId . '">';//every slide with their unique id
                    // Color overlay
                    $slides_html .= '<div class="vayu_blocks_color_overlay"></div>';

                    // Inside container
                    $slides_html .= '<div class="vayu_blocks_inside_container_div">';

                        $slides_html .= '<div class="vayu_blocks_inside_container_heading_div">';
                            // Heading
                            if (isset($slide['layout']['heading'])) {
                                $slides_html .= $this->render_heading($slide['layout']['heading']);
                            }   

                            // Subheading
                            if (isset($slide['layout']['subheading']) && $slide['layout']['subheading']['show']) {
                                $slides_html .= $this->render_subheading($slide['layout']['subheading']);
                            }

                        $slides_html .= '</div>';

                        $slides_html .= '<div>';
                            // Button 1
                            if (isset($slide['layout']['button1']) && $slide['layout']['button1']['show']) {
                                $slides_html .= $this->render_button1($slide['layout']['button1']);
                            }

                            // Button 2
                            if (isset($slide['layout']['button2']) && $slide['layout']['button2']['show']) {
                                $slides_html .= $this->render_button2($slide['layout']['button2']);
                            }

                        $slides_html .= '</div>';

                    $slides_html .= '</div>'; // Closing inside container

                $slides_html .= '</div>'; // Closing slide container
            }

        return '<div class="vayu-blocks-advance-slider ' . $animated . ' ' . esc_attr($className) . '">' . $slides_html . '</div>'; //alignfull is default class of wordpress
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

    // Slider Script
    private function render_scripts() {
        // Determine the value of dots based on dotslength and dots['show']
        $dots = ($this->attr['dotslength'] <= 1 || !$this->attr['dots']['show']) ? 'false' : 'true';
        $infinite = $this->attr['infinite'] ? 'true' : 'false';
        $centerMode = $this->attr['centerMode'] ? 'true' : 'false';
        $fade = $this->attr['fade'] ? 'true' : 'false';
        $waitForAnimate = $this->attr['waitForAnimate'] ? 'true' : 'false';
        $lazyLoad = $this->attr['lazyLoad'] ? 'true' : 'false';
        $autoplay = $this->attr['autoplay'] ? 'true' : 'false';
        $pauseOnHover = $this->attr['pauseOnHover'] ? 'true' : 'false';
        $focusOnSelect = $this->attr['focusOnSelect'] ? 'true' : 'false';
        $rtl = $this->attr['rtl'] ? 'true' : 'false';
        $arrows = $this->attr['arrow'] ? 'true' : 'false';
        $swipe = $this->attr['swipe'] ? 'true' : 'false';
    
        $script = "
            <script>
                jQuery(document).ready(function($) {
                    $('.vayu-blocks-advance-slider').slick({
                        dots: {$dots},
                        infinite: {$infinite},
                        speed: {$this->attr['speed']},
                        slidesToScroll: {$this->attr['slidesToScroll']},
                        rows: {$this->attr['slidesPerRow']},
                        centerMode: {$centerMode},
                        fade: {$fade},
                        waitForAnimate: {$waitForAnimate},
                        lazyLoad: {$lazyLoad},
                        autoplay: {$autoplay},
                        autoplaySpeed: {$this->attr['autoplaySpeed']},
                        cssEase: 'linear',
                        pauseOnHover: {$pauseOnHover},
                        focusOnSelect: {$focusOnSelect},
                        centerPadding: '60px',
                        initialSlide: {$this->attr['initialSlide']},
                        arrows: {$arrows},
                        appendDots: $('.vayu-blocks-advance-slider'),
                        slidesToShow: {$this->attr['slidesToShow']},
                        swipe: {$swipe},
                    });
    
                    
                    $('.vayu-blocks-advance-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        $('.slick-slide .vayu_blocks_inside_container_div ').removeClass('slide-active');
                    });
    
                    $('.vayu-blocks-advance-slider').on('afterChange', function(event, slick, currentSlide) {
                        $('.slick-slide.slick-active .vayu_blocks_inside_container_div ').addClass('slide-active');
                    });
    
                });
            </script>
        ";
    
        return $script;
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

    // Determine the class name based on the widthType attribute
    

    // Render and return the slider output inside a div with the dynamic class name
    return  $slider->render();
}


// Enqueue Slick slider assets
function vayu_enqueue_slick_slider_assets() {
    wp_enqueue_style('slick-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css');
    wp_enqueue_style('slick-theme-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css');
    wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'vayu_enqueue_slick_slider_assets');
