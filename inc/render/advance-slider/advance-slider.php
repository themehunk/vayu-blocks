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

        // Output the SVG with duotone filters
        echo $this->render_svg_filters();
        echo $this->render_scripts();
        echo $this->render_slider();
    
        return ob_get_clean(); // Return the buffered output
    }

    // Slider
    private function render_slider() {
        $slides_html = '';
        $animated = isset($attr['className']) ? $attr['className'] : ''; //animation

            //slides
            foreach ($this->attr['slides'] as $index => $slide) {
                $uniqueId = isset($slide['layout']['uniqueId']) ? esc_attr($slide['layout']['uniqueId']) : '';

                $slides_html .= '<div class="vayu_blocks_slide_' . $uniqueId . '">';//every slide with their unique id

                    // Color overlay
                    $slides_html .= '<div class="vayu_blocks_color_overlay"></div>';

                    // Inside container
                    $slides_html .= '<div class="vayu_blocks_inside_container_div">';
                        // Heading
                        if (isset($slide['layout']['heading'])) {
                            $slides_html .= $this->render_heading($slide['layout']['heading']);
                        }   

                        // Subheading
                        if (isset($slide['layout']['subheading']) && $slide['layout']['subheading']['show']) {
                            $slides_html .= $this->render_subheading($slide['layout']['subheading']);
                        }

                        // Button 1
                        if (isset($slide['layout']['button1']) && $slide['layout']['button1']['show']) {
                            $slides_html .= $this->render_button1($slide['layout']['button1']);
                        }

                        // Button 2
                        if (isset($slide['layout']['button2']) && $slide['layout']['button2']['show']) {
                            $slides_html .= $this->render_button2($slide['layout']['button2']);
                        }

                    $slides_html .= '</div>'; // Closing inside container

                $slides_html .= '</div>'; // Closing slide container
            }

        return '<div class="vayu-blocks-advance-slider ' . $animated . '">' . $slides_html . '</div>'; //alignfull is default class of wordpress
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
    
    // Svg filters for duotone
    private function render_svg_filters() {
        return '<svg class="vayu_blocks_duotone-filters" xmlns="http://www.w3.org/2000/svg">
            {/* orange and red */}
            <filter id="duotone-orange-red">
                    <feColorMatrix type="matrix" result="gray"
                        values="1 0 0 0 0
                                1 0 0 0 0
                                1 0 0 0 0
                                0 0 0 1 0" />
                    <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                        <feFuncR type="table" tableValues="0.949 1"></feFuncR>
                        <feFuncG type="table" tableValues="0.6 0.8"></feFuncG>
                        <feFuncB type="table" tableValues="0.5 0.6"></feFuncB>
                        <feFuncA type="table" tableValues="0 1"></feFuncA>
                    </feComponentTransfer>
            </filter>

            {/* Red and Green */}
            <filter id="duotone-red-green">
                    <feColorMatrix type="matrix" result="gray"
                        values="1 0 0 0 0
                                1 0 0 0 0
                                1 0 0 0 0
                                0 0 0 1 0" />
                    <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                        <feFuncR type="table" tableValues="0.898 1"></feFuncR>
                        <feFuncG type="table" tableValues="0.066 0.945"></feFuncG>
                        <feFuncB type="table" tableValues="0.066 0.945"></feFuncB>
                        <feFuncA type="table" tableValues="0 1"></feFuncA>
                    </feComponentTransfer>
            </filter>

            {/* Black and White */}
            <filter id="duotone-black-white">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0 1"></feFuncR>
                    <feFuncG type="table" tableValues="0 1"></feFuncG>
                    <feFuncB type="table" tableValues="0 1"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Blue and Red */}
            <filter id="duotone-blue-red">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.929 0.996"></feFuncR>
                    <feFuncG type="table" tableValues="0.117 0.257"></feFuncG>
                    <feFuncB type="table" tableValues="0.717 0.949"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Purple and Yellow */}
            <filter id="duotone-purple-yellow">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.537 0.988"></feFuncR>
                    <feFuncG type="table" tableValues="0.129 0.929"></feFuncG>
                    <feFuncB type="table" tableValues="0.746 0.059"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Orange and Teal */}
            <filter id="duotone-orange-teal">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.949 0.204"></feFuncR>
                    <feFuncG type="table" tableValues="0.517 0.835"></feFuncG>
                    <feFuncB type="table" tableValues="0.318 0.549"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Pink and Blue */}
            <filter id="duotone-pink-blue">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.949 0.235"></feFuncR>
                    <feFuncG type="table" tableValues="0.349 0.553"></feFuncG>
                    <feFuncB type="table" tableValues="0.529 0.847"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Cyan and Magenta */}
            <filter id="duotone-cyan-magenta">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.0 0.847"></feFuncR>
                    <feFuncG type="table" tableValues="0.796 0.122"></feFuncG>
                    <feFuncB type="table" tableValues="0.996 0.643"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Yellow and Black */}
            <filter id="duotone-yellow-black">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="1 0.125"></feFuncR>
                    <feFuncG type="table" tableValues="0.839 0.125"></feFuncG>
                    <feFuncB type="table" tableValues="0.062 0.062"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Light Blue and Light Green */}
            <filter id="duotone-lightblue-lightgreen">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.678 0.678"></feFuncR>
                    <feFuncG type="table" tableValues="0.847 0.996"></feFuncG>
                    <feFuncB type="table" tableValues="0.847 0.678"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Gray and Yellow */}
            <filter id="duotone-gray-yellow">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.678 1"></feFuncR>
                    <feFuncG type="table" tableValues="0.678 1"></feFuncG>
                    <feFuncB type="table" tableValues="0.678 0.278"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>


        </svg> ';
    }
}

// Render callback for the block
function vayu_blocks_advance_slider_render($attr) {
    //attributes Merged
    $default_attributes = include('defaultattributes.php');
    $attr = array_merge($default_attributes, $attr); 

    $slider = new Vayu_blocks_Advance_Slider($attr);
    
    return $slider->render();
}

// Enqueue Slick slider assets
function vayu_enqueue_slick_slider_assets() {
    wp_enqueue_style('slick-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css');
    wp_enqueue_style('slick-theme-css', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css');
    wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'vayu_enqueue_slick_slider_assets');
