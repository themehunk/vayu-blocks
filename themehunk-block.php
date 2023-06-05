<?php
/**
 * Plugin Name:       Themehunk Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       themehunk-block
 *
 * @package           themehunk-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define( 'THEMEHUNK_BLOCKS_BASEFILE', __FILE__ );
define( 'THEMEHUNK_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
define( 'THEMEHUNK_BLOCKS_PATH', dirname( __FILE__ ) );
define( 'THEMEHUNK_BLOCKS_DIR_PATH', plugin_dir_path(__FILE__) );
define( 'THEMEHUNK_BLOCKS_VERSION', '2.1.0' );
define( 'THEMEHUNK_BLOCKS_PRO_SUPPORT', true );
define( 'THEMEHUNK_BLOCKS_SHOW_NOTICES', false );

require_once 'src/function.php';
require_once 'src/render-style.php';
require_once 'src/render/advance-heading/advance-heading.php';
require_once 'src/render/advance-container/advance-container.php';
require_once 'src/render/advance-spacer/advance-spacer.php';

function themehunk_blocks_register_blocks() {

	$blocks = array(
		array(
			'name'           => 'themehunk-blocks/advance-container',
			'script_handle'  => 'advance-container',
			'editor_style'   => 'advance-container-editor-style',
			'frontend_style' => 'advance-container-frontend-style',
			'localize_data'  => array(
				'homeUrl' => get_home_url(),
			),
           
        ),
        array(
			'name'           => 'themehunk-blocks/advance-heading',
			'script_handle'  => 'advance-heading',
			'editor_style'   => 'advance-heading-editor-style',
			'frontend_style' => 'advance-heading-frontend-style',
        ),
        array(
			'name'           => 'themehunk-blocks/advance-spacer',
			'script_handle'  => 'advance-spacer',
			'editor_style'   => 'advance-spacer-editor-style',
			'frontend_style' => 'advance-spacer-frontend-style',
            
           
        ),
        array(
			'name'           => 'themehunk-blocks/advance-button',
			'script_handle'  => 'advance-button',
			'editor_style'   => 'advance-button-editor-style',
			'frontend_style' => 'advance-button-frontend-style',
           
            
        ),
	);

	foreach ( $blocks as $block ) {

		// Register JavaScript file
		wp_register_script(
			$block['script_handle'],
			THEMEHUNK_BLOCKS_URL . 'build/' . $block['script_handle'] . '.js',
			array( 'wp-blocks', 'wp-element', 'wp-editor' ),
			filemtime( THEMEHUNK_BLOCKS_PATH . '/build/' . $block['script_handle'] . '.js' )
		);

		// Register editor style
		wp_register_style(
			$block['editor_style'],
			THEMEHUNK_BLOCKS_URL . 'build/' . $block['script_handle'] . '.css',
			array( 'wp-edit-blocks' ),
			filemtime( THEMEHUNK_BLOCKS_PATH . '/build/' . $block['script_handle'] . '.css' )
		);

		// Register front end block style
		wp_register_style(
			$block['frontend_style'],
			THEMEHUNK_BLOCKS_URL . 'build/style-' . $block['script_handle'] . '.css',
			array(),
			filemtime(THEMEHUNK_BLOCKS_PATH . '/build/style-' . $block['script_handle'] . '.css')
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

add_action( 'init', 'themehunk_blocks_register_blocks' );
