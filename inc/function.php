<?php 
if (!defined('ABSPATH')) exit;

function vayu_blocks_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'vayu-blocks',
                'title' => __( 'Vayu Blocks', 'vayu-blocks' ),
            ],
        ]
    );
}
add_filter( 'block_categories_all', 'vayu_blocks_categories', 11, 2);


function vayu_blocks_editor_assets(){

    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'build/registerPlugin.asset.php';
    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'build/component-editor.asset.php';

	wp_enqueue_script(
		'registerPlugin-block',
		VAYU_BLOCKS_URL . 'build/registerPlugin.js',
		array_merge(
			$asset_file['dependencies']
		),
		'1.0.0',
		true
	);
    wp_localize_script(
        'registerPlugin-block',
        'vayublock',
        array(
            'homeUrl' => plugins_url( '/', __FILE__ ),
            'showOnboarding' => '',
        )
    );

    wp_enqueue_style(
        'component-editor-css',
        VAYU_BLOCKS_URL . 'build/component-editor.css',
        array_merge(
			$asset_file['dependencies']
		),	'1.0.0'
    );

    

        
}
add_action( 'enqueue_block_editor_assets', 'vayu_blocks_editor_assets' );


function vayu_admin_react_script() {

    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'build/adminDashboard.asset.php';

    wp_enqueue_script(
		'adminDashboard-block',
		VAYU_BLOCKS_URL . 'build/adminDashboard.js',
		array_merge(
			$asset_file['dependencies']
		),
		'1.0.0',
		true
	);

    wp_localize_script(
        'adminDashboard-block',
        'vayublock',
        array(
            'homeUrl' => plugins_url( '/', __FILE__ ),
        )
    );


    wp_enqueue_style(
        'adminDashboard-style',
        VAYU_BLOCKS_URL . 'build/adminDashboard-style.css',
        '1.0.0'
    );

    
    
}
add_action('admin_enqueue_scripts',  'vayu_admin_react_script');