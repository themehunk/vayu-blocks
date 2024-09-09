<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
     
class Vayu_blocks_image_flip {

    private $attr; //attributes

    public function __construct($attr) {
        $this->attr = $attr;
    }

    //Render
    public function render() {
        ob_start(); // Start output buffering

        // Output the SVG with duotone filters
        echo $this->render_svg_filters();
        echo $this->render_image();
    
        return ob_get_clean(); // Return the buffered output
    }

    //image
    private function render_image() {
        $attributes = $this->attr; // Access attributes
        $image_html = '';
        $animated = isset($attributes['className']) ? esc_attr($attributes['className']) : ''; // animation
        $uniqueId = isset($attributes['uniqueId']) ? esc_attr($attributes['uniqueId']) : '';
        $imageSrc = !empty($attributes['image']) ? esc_url($attributes['image']) : 'http://localhost/wordpress/wp-content/plugins/elementor/assets/images/placeholder.png';

        $imageAlt = isset($attributes['imageAlt']) ? esc_attr($attributes['imageAlt']) : 'Image ' . rand(1, 100);
        $imageHvrEffect = isset($attributes['imagehvreffect']) ? esc_attr($attributes['imagehvreffect']) : '';
        $imageHvrFilter = isset($attributes['imagehvrfilter']) ? esc_attr($attributes['imagehvrfilter']) : '';
    
        $image_html .= '<div class="vayu_blocks_image_flip_wrapper">';
            $image_html .= '<img 
                                src="' . $imageSrc . '" 
                                alt="' . $imageAlt . '" 
                                class="vayu_blocks_image_flip_image ' . $imageHvrEffect . ' ' . $imageHvrFilter . '" 
                            />';
            // Append the overlay HTML
            $image_html .= $this->overlay();
        $image_html .= '</div>';
    
        return '<div class="vayu-blocks-image-flip-main-container' . $uniqueId . ' ' . $animated . '">' . $image_html . '</div>';
    }
    
    private function overlay() {
        $attributes = $this->attr; // Access attributes
        $overlay = '';
    
        // Check if overlay should be rendered
        if (isset($attributes['overlay']) && $attributes['overlay']) {
            $overlayClass = esc_attr($attributes['imageoverlayouteffect']);
            $headingTag = isset($attributes['headingtag']) ? esc_html($attributes['headingtag']) : 'h2'; // Default to h2 if not set
            $captionTag = isset($attributes['captiontag']) ? esc_html($attributes['captiontag']) : 'p'; // Default to p if not set
            $headingText = isset($attributes['headingtext']) ? esc_html($attributes['headingtext']) : '';
            $captionText = isset($attributes['imageCaption']) ? esc_html($attributes['imageCaption']) : '';
            $buttonLink = isset($attributes['buttonlink']) ? esc_url($attributes['buttonlink']) : '';
            $buttonNewTab = isset($attributes['buttonnewtab']) ? $attributes['buttonnewtab'] : false;
            $buttonText = isset($attributes['buttontext']) ? esc_html($attributes['buttontext']) : '';
            $buttonTarget = $buttonNewTab ? '_blank' : '_self';
            $buttonRel = $buttonNewTab ? 'noopener noreferrer' : '';
    
            $overlay .= '<div class="vayu_blocks_overlay_main_wrapper ' . $overlayClass . '">';
    
                $overlay .= '<' . $headingTag . ' class="vayu_blocks_heading_image_flip">' . $headingText . '</' . $headingTag . '>';
    
                $overlay .= '<' . $captionTag . ' class="vayu_blocks_caption_image_flip">' . $captionText . '</' . $captionTag . '>';
    
                if ($buttonLink) {
                    $overlay .= '<a
                                    href="' . $buttonLink . '"
                                    target="' . $buttonTarget . '"
                                    rel="' . $buttonRel . '"
                                    style="text-decoration: none;"
                                >
                                    <button
                                        type="button"
                                        class="vayu_blocks_image_flip_button"
                                    >
                                        ' . $buttonText . '
                                    </button>
                                </a>';
                } else {
                    $overlay .= '<button
                                    type="button"
                                    class="vayu_blocks_image_flip_button"
                                >
                                    ' . $buttonText . '
                                </button>';
                }
    
            $overlay .= '</div>';
        }
    
        return $overlay;
    }
    
    // Svg filters for duotone
    private function render_svg_filters() {
        return '<div class="vayu_blocks_image_flip-duotone-filters">
        <svg  xmlns="http://www.w3.org/2000/svg">
                            {/* Orange and Red */}
                            <filter id="duotone-orange-red">
                                <feColorMatrix type="matrix" result="gray"
                                    values="1 0 0 0 0
                                            1 0 0 0 0
                                            1 0 0 0 0
                                            0 0 0 1 0" />
                                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.8 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.3 0.5"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.7 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.3 0.8"></feFuncG>
                                    <feFuncB type="table" tableValues="0.3 0.7"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.5 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 1"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 1"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.6 0.9"></feFuncR>
                                    <feFuncG type="table" tableValues="0.2 0.3"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 0.8"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.5 0.8"></feFuncR>
                                    <feFuncG type="table" tableValues="0.2 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.5 0.3"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.8 0.5"></feFuncR>
                                    <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                                    <feFuncB type="table" tableValues="0.4 0.5"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.7 0.4"></feFuncR>
                                    <feFuncG type="table" tableValues="0.3 0.5"></feFuncG>
                                    <feFuncB type="table" tableValues="0.6 0.7"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.0 0.7"></feFuncR>
                                    <feFuncG type="table" tableValues="0.7 0.2"></feFuncG>
                                    <feFuncB type="table" tableValues="0.9 0.6"></feFuncB>
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
                                    <feFuncR type="table" tableValues="1 0.3"></feFuncR>
                                    <feFuncG type="table" tableValues="0.7 0.3"></feFuncG>
                                    <feFuncB type="table" tableValues="0.1 0.1"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.6 0.6"></feFuncR>
                                    <feFuncG type="table" tableValues="0.8 0.9"></feFuncG>
                                    <feFuncB type="table" tableValues="0.8 0.6"></feFuncB>
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
                                    <feFuncR type="table" tableValues="0.6 1"></feFuncR>
                                    <feFuncG type="table" tableValues="0.6 1"></feFuncG>
                                    <feFuncB type="table" tableValues="0.6 0.3"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>

                        </svg> </div>';
    }
}

// Render callback for the block
function vayu_blocks_image_flip_render($attr) {
    // Include default attributes
    $default_attributes = include('defaultattributes.php');

    // Merge default attributes with provided attributes
    $attr = array_merge($default_attributes, $attr);

    // Initialize the image with the merged attributes
    $image = new Vayu_blocks_image_flip($attr);
    
    // Ensure className is sanitized and applied correctly
    $className = isset($attr['classNamemain']) ? esc_attr($attr['classNamemain']) : '';

    // Render and return the image output inside a div with the dynamic class name
    return '<div class="wp_block_vayu-blocks-image-flip-main ' . $className . '">' . $image->render() . '</div>';
}

