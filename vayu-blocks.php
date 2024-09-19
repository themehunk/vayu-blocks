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

        require_once VAYU_BLOCKS_DIR_PATH .'inc/init.php';
        add_action( 'init', array( $this, 'vayu_register_blocks' ) );
        add_action( 'init', array( $this, 'vayu_register_blocks_new' ) );
        add_action('admin_menu',  array( $this, 'vayu_plugin_menu'));

    }

    public function vayu_register_blocks() {

        $options = (new VAYU_BLOCKS_OPTION_PANEL())->get_option();

            $blocks = array(
                array(
                    'name'           => 'vayu-blocks/advance-container',
                    'script_handle'  => 'advance-container',
                    'editor_style'   => 'advance-container-editor-style',
                    'frontend_style' => 'advance-container-frontend-style',
                    'status'         => $options['container']['isActive'],
                    'localize_data'  => array(
                        'homeUrl' => get_home_url(),
                        'container_width' => $options['global']['containerWidth'],
                        'container_gap' => $options['global']['containerGap'],
                        'container_padding' => $options['global']['containerPadding'],
                    ),
                ),
                array(
                    'name'           => 'vayu-blocks/advance-heading',
                    'script_handle'  => 'advance-heading',
                    'editor_style'   => 'advance-heading-editor-style',
                    'frontend_style' => 'advance-heading-frontend-style',
                    'status'         => $options['heading']['isActive'],
                ),
                array(
                    'name'           => 'vayu-blocks/advance-spacer',
                    'script_handle'  => 'advance-spacer',
                    'editor_style'   => 'advance-spacer-editor-style',
                    'frontend_style' => 'advance-spacer-frontend-style',
                    'status'         => $options['spacer']['isActive'],
                ),
                array(
                    'name'           => 'vayu-blocks/advance-button',
                    'script_handle'  => 'advance-button',
                    'editor_style'   => 'advance-button-editor-style',
                    'frontend_style' => 'advance-button-frontend-style',
                    'status'         => $options['button']['isActive'],
                ),
                
                array(
                    'name'            => 'vayu-blocks/advance-query-loop',
                    'script_handle'   => 'advance-query-loop',
                    'editor_style'    => 'advance-query-loop-editor-style',
                    'frontend_style'  => 'advance-query-loop-frontend-style',
                    'status'          => $options['advanceQueryLoop']['isActive'],
                    //'render_callback' => 'vayu_blocks_advance_query_loop_render'
                )
                
                
            );

            // Check if WooCommerce is active
            if (class_exists('WooCommerce')) {
                // Add the 'vayu-blocks/advance-product' block registration array
                $blocks[] = array(
                    'name'            => 'vayu-blocks/advance-product',
                    'script_handle'   => 'advance-product',
                    'editor_style'    => 'advance-product-editor-style',
                    'frontend_style'  => 'advance-product-frontend-style',
                    'status'         =>  $options['product']['isActive'],
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

            if(isset($block['script'])){
                wp_register_script(
                    $block['script'],
                    VAYU_BLOCKS_URL . 'public/build/' . $block['script'] . '.js',
                    array( 'wp-blocks', 'wp-element', 'wp-editor' ),
                    filemtime( VAYU_BLOCKS_PATH . '/public/build/' . $block['script'] . '.js' ),
                );

                add_filter('script_loader_tag', function ($tag, $handle) {
                    if ('view-mega-menu' === $handle) {
                        return str_replace(' src', ' type="module" src', $tag);
                    }
                    return $tag;
                }, 10, 2);
            }

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
                    //'script'           => isset($block['script'])?$block['script']:'',
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

    public function vayu_register_blocks_new() {

        //mega menu
        register_block_type(
            __DIR__ . '/public/build/block/mega-menu',
            array(
                'render_callback' => 'vayu_blocks_mega_menu_render',
            )
        );

        //image-flip
        register_block_type(
            __DIR__ . '/public/build/block/image-flip',
            array(
                'render_callback' => 'vayu_blocks_image_flip_render',
            )
        );

        //advance-slider
        register_block_type(
            __DIR__ . '/public/build/block/advance-slider',
            array(
                'render_callback' => 'vayu_blocks_advance_slider_render',
            )
        );

        //post-grid
        register_block_type(
            __DIR__ . '/public/build/block/post-grid',
            array(
                'render_callback' => 'post_grid_render',
            )
        );

        //image
        register_block_type(
            __DIR__ . '/public/build/block/image',
            array(
                'render_callback' => 'vayu_block_image_render',
            )
        );

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


