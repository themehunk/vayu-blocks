<?php
/**
 * Plugin Name:       Vayu Blocks
*  Plugin URI:         https://themehunk.com/vayu-blocks
 * Description:       The Vayu Blocks is an add-on plugin For Gutenberg Block Editor. Quickstart the Gutenberg editor with Powerful and elegant blocks to design stunning websites. Free Vayu Blocks plugin that amplifies the default WordPress Gutenberg Editor with powerful blocks.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:            ThemeHunk
 * Author URI:        https://themehunk.com
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html
 * Text Domain:       vayu-blocks
 *
 * @package           vayu-blocks
 */

 if ( ! defined( 'ABSPATH' ) ) {
	exit;
} 

class Vayu_Block_Plugin {

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	const VERSION = '1.1.0';

	/**
	 * Initialize the plugin.
	 */

    public function __construct() {

        define( 'VAYU_BLOCKS_BASEFILE', __FILE__ );
        define( 'VAYU_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
        define( 'VAYU_BLOCKS_PATH', dirname( __FILE__ ) );
        define( 'VAYU_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
        define( 'VAYU_BLOCKS_VERSION', '1.1.0' );
        define( 'VAYU_BLOCKS_PRO_SUPPORT', true );
        define( 'VAYU_BLOCKS_SHOW_NOTICES', false );

        require_once 'inc/function.php';
        require_once 'inc/render-style.php';
        require_once 'inc/render/advance-animation/class-blocks-animation.php';
        require_once 'inc/render/advance-heading/advance-heading.php';
        require_once 'inc/render/advance-container/advance-container.php';
        require_once 'inc/render/advance-spacer/advance-spacer.php';
        require_once 'inc/render/advance-button/advance-button.php';
		require_once 'inc/render/advance-product-tab/advance-product-tab.php';
        require_once 'inc/render/advance-product-tab/advance-product-tab-style.php';
        require_once 'inc/vayu-sites/vayu-sites.php';
        require_once 'inc/render/post-grid/post-grid.php';
        require_once 'inc/render/post-grid/post-grid-style.php';
        require_once 'inc/render/advance-slider/advance-slider.php';
        require_once 'inc/render/advance-slider/advance-slider-style.php';
        // require_once 'inc/render/image-slider-block/image-slider-block.php';

        add_action( 'init', array( $this, 'vayu_register_blocks' ) );

        add_action('admin_menu',  array( $this, 'vayu_plugin_menu'));

        // Set default values for toggle switch options
        // add_option( 'container_value', 1 ); // Turn on by default
        // add_option( 'button_value', 1 ); // Turn on by default
        // add_option( 'wooproduct_value', 1 ); // Turn on by default
        // add_option( 'heading_value', 1 ); // Turn on by default
        // add_option( 'spacer_value', 1 ); // Turn on by default
        // add_option( 'productfilter_value', 1 ); // Turn on by default

    }

    public function vayu_register_blocks() {
        
    // $container_width = absint(get_option('container_width',1250));
    // $container_gap = absint(get_option('container_gap',20));
    // $padding = absint(get_option('padding',18));
    
    // Retrieve the settings from the database
$settings = get_option('vayu_blocks_settings', array(
    'container' => array(
        'value' => 1,
        'pro' => false,
        'description' => '',
        'settings' => array(
            'containerWidth' => 1250, // Default value
            'containerGap' => 20, // Default value
            'padding' => 18, // Default value
        ),
    ),
));

// Access the container settings
$container_width = absint($settings['container']['settings']['containerWidth']);
$container_gap = absint($settings['container']['settings']['containerGap']);
$padding = absint($settings['container']['settings']['padding']);
// Access the value key for each block
// Assuming $settings is an associative array with optional keys
$container_value = isset($settings['container']['value']) ? absint($settings['container']['value']) : 1;
$button_value = isset($settings['button']['value']) ? absint($settings['button']['value']) : 0;
$heading_value = isset($settings['heading']['value']) ? absint($settings['heading']['value']) : 0;
$spacer_value = isset($settings['spacer']['value']) ? absint($settings['spacer']['value']) : 0;
$product_value = isset($settings['product']['value']) ? absint($settings['product']['value']) : 0;
$post_grid_value = isset($settings['postGrid']['value']) ? absint($settings['postGrid']['value']) : 0;
$slider_value = isset($settings['slider']['value']) ? absint($settings['slider']['value']) : 0;

// Output values



    // $button_color = sanitize_text_field(get_option('button_color'));

        $blocks = array(
            array(
                'name'           => 'vayu-blocks/advance-container',
                'script_handle'  => 'advance-container',
                'editor_style'   => 'advance-container-editor-style',
                'frontend_style' => 'advance-container-frontend-style',
                'status'         => $container_value,
                'localize_data'  => array(
                    'homeUrl' => get_home_url(),
                    'container_width' => $container_width,
                    'container_gap' => $container_gap,
                    'container_padding' => $padding,
                ),
            ),
            array(
                'name'           => 'vayu-blocks/advance-heading',
                'script_handle'  => 'advance-heading',
                'editor_style'   => 'advance-heading-editor-style',
                'frontend_style' => 'advance-heading-frontend-style',
                'status'         => $heading_value,
            ),
            array(
                'name'           => 'vayu-blocks/advance-spacer',
                'script_handle'  => 'advance-spacer',
                'editor_style'   => 'advance-spacer-editor-style',
                'frontend_style' => 'advance-spacer-frontend-style',
                'status'         => $spacer_value,
            ),
            array(
                'name'           => 'vayu-blocks/advance-button',
                'script_handle'  => 'advance-button',
                'editor_style'   => 'advance-button-editor-style',
                'frontend_style' => 'advance-button-frontend-style',
                'status'         => $button_value,
            ),
            array(
                'name'           => 'vayu-blocks/post-grid',
                'script_handle'  => 'post-grid',
                 'editor_style'   => 'post-grid-editor-style',
                 'frontend_style' => 'post-grid-frontend-style',
                'status'         => $post_grid_value,
                'render_callback' => 'post_grid_render'
            ),
            array(
                'name'           => 'vayu-blocks/advance-slider',
                'script_handle'  => 'advance-slider',
                 'editor_style'   => 'advance-slider-editor-style',
                 'frontend_style' => 'advance-slider-frontend-style',
                'status'         => $slider_value,
                'render_callback' => 'vayu_blocks_advance_slider_render'
            ),
            // array(
            //     'name'           => 'vayu-blocks/image-slider-block',
            //     'script_handle'  => 'image-slider-block',
            //      'editor_style'   => 'image-slider-block-editor-style',
            //      'frontend_style' => 'image-slider-block-frontend-style',
            //     'status'         => get_option('button_value'),
            //     'render_callback' => 'vayu_blocks_image_slider_block_render'
            // ),
            
        );

        // Check if WooCommerce is active
        if (class_exists('WooCommerce')) {
            // Add the 'vayu-blocks/advance-product' block registration array
            $blocks[] = array(
                'name'            => 'vayu-blocks/advance-product',
                'script_handle'   => 'advance-product',
                'editor_style'    => 'advance-product-editor-style',
                'frontend_style'  => 'advance-product-frontend-style',
                'status'         =>  $product_value,
                'render_callback' => array( 
                    new Vayu_Advance_Product_Tab(),
                    'render_callback'
                )
            );
        }

        foreach (  $blocks as $key => $block ) { 

    if ( isset( $block['status'] ) && ( $block['status'] == 1 ) ) {
            // Register JavaScript file
            wp_register_script(
                $block['script_handle'],
                VAYU_BLOCKS_URL . 'public/build/' . $block['script_handle'] . '.js',
                array( 'wp-blocks', 'wp-element', 'wp-editor' ),
                filemtime( VAYU_BLOCKS_PATH . '/public/build/' . $block['script_handle'] . '.js' )
            );

            // Register editor
            wp_register_style(
                $block['editor_style'],
                VAYU_BLOCKS_URL . 'public/build/' . $block['script_handle'] . '.css',
                array( 'wp-edit-blocks' ),
                filemtime( VAYU_BLOCKS_PATH . '/public/build/' . $block['script_handle'] . '.css' )
            );

            // Register front end block style
            wp_register_style(
                $block['frontend_style'],
                VAYU_BLOCKS_URL . 'public/build/style-' . $block['script_handle'] . '.css',
                array(),
                filemtime( VAYU_BLOCKS_PATH . '/public/build/style-' . $block['script_handle'] . '.css' )
            );

            // Localize the script with data
            if ( isset( $block['localize_data'] ) && ! is_null( $block['localize_data'] ) ) {
                wp_localize_script(
                    $block['script_handle'],
                    'ThBlockData',
                    $block['localize_data']
                );
            }

            // Prepare the arguments for registering the block
            $block_args = array(
                'editor_script'   => $block['script_handle'],
                'editor_style'    => $block['editor_style'],
                'style'           => $block['frontend_style'],
            );

            // Check if the render callback is set and not null
            if ( isset( $block['render_callback'] ) && ! is_null( $block['render_callback'] ) ) {
                $block_args['render_callback'] = $block['render_callback'];
               
            }

            // Register each block
            register_block_type( $block['name'], $block_args );
        }

        }
    }
    
    // plugin menu option add
    public function vayu_plugin_menu() {
        
        add_menu_page(
            'Vayu Blocks',
            'Vayu Blocks',
            'manage_options', 
            'vayu-blocks',
            array( $this, 'vayu_plugin_page_callback' ),
            plugins_url( 'vayu-blocks/inc/assets/img/menu-logo.png' ),
            59
        );

        add_submenu_page(
            'vayu-blocks',
            'Vayu Sites',
            'Vayu Sites',
            'manage_options',
            'vayu-sites',
            array( $this, 'vayu_blocks_sites_callback' )
        );

    }


    public function vayu_blocks_sites_callback() {
        ?>
        <div class="themehunk-sites-menu-page-wrapper">
            <div id="vayuroot"></div>
        </div>
        <?php
    }
    
    
    
    public function vayu_plugin_page_callback() {
        
		if ( ! current_user_can( 'manage_options' ) ) {
				return;
		}?>

        <div class="vayu-blocks-wrap">
        <div id="vayu-blocks-container"></div>
        </div>

    <?php }
}


function vayu_block_plugin_init( ) {
    new Vayu_Block_Plugin();
}
add_action( 'init', 'vayu_block_plugin_init', 1 );


