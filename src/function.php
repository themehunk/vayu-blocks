<?php 
if (!defined('ABSPATH')) exit;

function create_block_themehunk_block_block_init() {

    $blocks = array(
        array(
            'name' => 'advance-heading/',
            'render_callback' => 'themehunk_render_block_advance_heading',
		),
        array(
            'name' => 'advance-container/',
            'render_callback' => '',
        ),
		array(
            'name' => 'advance-spacer/',
            'render_callback' => 'render_spacer',
        )
    );

    foreach ( $blocks as $block ) {

        $block_name = $block['name'];
        $render_callback = $block['render_callback'];

            register_block_type(
                THEMEHUNK_BLOCKS_DIR_PATH . 'inc/block/' . $block_name,
                array(
                    'render_callback' => $render_callback,
                )
                );

    }
}

add_action( 'init', 'create_block_themehunk_block_block_init' );

function themehunk_block_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'themehunk-blocks',
                'title' => __( 'Themehunk Blocks', 'themehunk-block' ),
            ],
        ]
    );
}
add_filter( 'block_categories_all', 'themehunk_block_categories', 11, 2);


function themehunk_block_editor_assets(){

    $asset_file = require_once THEMEHUNK_BLOCKS_DIR_PATH .'build/registerPlugin.asset.php';

	wp_enqueue_script(
		'registerPlugin-block',
		THEMEHUNK_BLOCKS_URL . 'build/registerPlugin.js',
		array_merge(
			$asset_file['dependencies']
		),
		'1.0.0',
		true
	);

    wp_localize_script(
        'registerPlugin-block',
        'themehunkblock',
        array(
            'showOnboarding' => '',
        )
    );

}
add_action( 'enqueue_block_editor_assets', 'themehunk_block_editor_assets' );

function render_spacer(){
    return true;
}