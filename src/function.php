<?php 
if (!defined('ABSPATH')) exit;
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
add_filter( 'block_categories_all', 'themehunk_block_categories', 10, 2 );


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