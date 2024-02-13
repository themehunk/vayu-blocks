<?php
/**
 * Plugin Name:       Vayu Blocks
 * Description:       The Vayu Blocks is an add-on plugin For Gutenberg Block Editor. Quickstart the Gutenberg editor with Powerful and elegant blocks to design stunning websites. Free Vayu Blocks plugin that amplifies the default WordPress Gutenberg Editor with powerful blocks.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            ThemeHunk
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
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
	const VERSION = '1.0.2';

	/**
	 * Initialize the plugin.
	 */

    public function __construct() {

        define( 'VAYU_BLOCKS_BASEFILE', __FILE__ );
        define( 'VAYU_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
        define( 'VAYU_BLOCKS_PATH', dirname( __FILE__ ) );
        define( 'VAYU_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
        define( 'VAYU_BLOCKS_VERSION', '2.1.0' );
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

        add_action( 'init', array( $this, 'vayu_register_blocks' ) );

        add_action('admin_menu',  array( $this, 'vayu_plugin_menu'));

    }

    public function vayu_register_blocks() {
        $blocks = array(
            array(
                'name'           => 'vayu-blocks/advance-container',
                'script_handle'  => 'advance-container',
                'editor_style'   => 'advance-container-editor-style',
                'frontend_style' => 'advance-container-frontend-style',
                'localize_data'  => array(
                    'homeUrl' => get_home_url(),
                ),
            ),
            array(
                'name'           => 'vayu-blocks/advance-heading',
                'script_handle'  => 'advance-heading',
                'editor_style'   => 'advance-heading-editor-style',
                'frontend_style' => 'advance-heading-frontend-style',
            ),
            array(
                'name'           => 'vayu-blocks/advance-spacer',
                'script_handle'  => 'advance-spacer',
                'editor_style'   => 'advance-spacer-editor-style',
                'frontend_style' => 'advance-spacer-frontend-style',
            ),
            array(
                'name'           => 'vayu-blocks/advance-button',
                'script_handle'  => 'advance-button',
                'editor_style'   => 'advance-button-editor-style',
                'frontend_style' => 'advance-button-frontend-style',
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
                'render_callback' => array( 
                    new Vayu_Advance_Product_Tab(),
                    'render_callback' 
                )
            );
        }

        foreach ( $blocks as $block ) {

            
            // Register JavaScript file
            wp_register_script(
                $block['script_handle'],
                VAYU_BLOCKS_URL . 'build/' . $block['script_handle'] . '.js',
                array( 'wp-blocks', 'wp-element', 'wp-editor' ),
                filemtime( VAYU_BLOCKS_PATH . '/build/' . $block['script_handle'] . '.js' )
            );

            // Register editor style
            wp_register_style(
                $block['editor_style'],
                VAYU_BLOCKS_URL . 'build/' . $block['script_handle'] . '.css',
                array( 'wp-edit-blocks' ),
                filemtime( VAYU_BLOCKS_PATH . '/build/' . $block['script_handle'] . '.css' )
            );

            // Register front end block style
            wp_register_style(
                $block['frontend_style'],
                VAYU_BLOCKS_URL . 'build/style-' . $block['script_handle'] . '.css',
                array(),
                filemtime( VAYU_BLOCKS_PATH . '/build/style-' . $block['script_handle'] . '.css' )
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
    
    // plugin menu option add
    public function vayu_plugin_menu() {
        
        add_menu_page(
            'Vayu Blocks',
            'Vayu Blocks',
            'manage_options', 
            'vayu-blocks',
            array( $this, 'vayu_plugin_page_callback' ),
            plugins_url( 'vayu-blocks/inc/assets/img/menu-logo.png' ),
            10 
        );
    
        add_submenu_page(
            'vayu-blocks',
            'Blocks',
            'Blocks',
            'manage_options',
            'vayu-blocks&path=blocks',
            array( $this, 'vayu_plugin_page_callback' )
        );
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
new Vayu_Block_Plugin();