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

    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'public/build/registerPlugin.asset.php';
    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'public/build/component-editor.asset.php';

	wp_enqueue_script(
		'registerPlugin-block',
		VAYU_BLOCKS_URL . 'public/build/registerPlugin.js',
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
        VAYU_BLOCKS_URL . 'public/build/component-editor.css',
        array_merge(
			$asset_file['dependencies']
		),	'1.0.0'
    );

    

        
}
add_action( 'enqueue_block_editor_assets', 'vayu_blocks_editor_assets' );


function vayu_admin_react_script() {

    $asset_file = require_once VAYU_BLOCKS_DIR_PATH .'public/build/adminDashboard.asset.php';

    $localizeItems = array(
        'homeUrl' => plugins_url( '/', __FILE__ ),
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'homeUrl2' => get_home_url(),
    );
    
    if( class_exists('Vayu_Block_Plugin_Pro') ){
        $localizeItems['vayuProStatus'] = 'activated';
    }

    wp_enqueue_script(
		'adminDashboard-block',
		VAYU_BLOCKS_URL . 'public/build/adminDashboard.js',
		array_merge(
			$asset_file['dependencies']
		),
		'1.0.0',
		true
	);

    wp_localize_script(
        'adminDashboard-block',
        'vayublock',
        $localizeItems
    );


    wp_enqueue_style(
        'adminDashboard-style',
        VAYU_BLOCKS_URL . 'public/build/adminDashboard-style.css',
        '1.0.0'
    );

    
    
}
add_action('admin_enqueue_scripts',  'vayu_admin_react_script');


// Step 1: Register Custom Endpoint
// Register custom REST API endpoints
add_action('rest_api_init', function () {
    // Endpoint to fetch toggle switch values
    register_rest_route('vayu-blocks/v1', '/get-toggle-switch-values', array(
        'methods' => 'GET',
        'callback' => 'vayu_blocks_get_toggle_switch_values_callback',
        'permission_callback' => '__return_true', // Set your permission callback here
    ));

    // Endpoint to save toggle switch value
    register_rest_route('vayu-blocks/v1', '/save-toggle-switch', array(
        'methods' => 'POST',
        'callback' => 'vayu_blocks_save_toggle_switch_callback',
        'permission_callback' => '__return_true', // Set your permission callback here
    ));
});

// Step 2: Implement Callback Function
// Callback function to fetch toggle switch values
function vayu_blocks_get_toggle_switch_values_callback($request) {
    // Your logic to fetch toggle switch values from the database or any other source
    // Example:
    $toggle_switch_values = array(
        'container' => array(
            'value' => sanitize_text_field(get_option('container_value')),
            'pro' => false,
            // Add more properties as needed
        ),
        'button' => array(
            'value' => sanitize_text_field(get_option('button_value')),
            'pro' => false,
            // Add more properties as needed
        ),
        'woo Product' => array(
            'value' => sanitize_text_field(get_option('wooproduct_value')),
            'pro' => false,
            // Add more properties as needed
        ),
        'heading' => array(
            'value' => sanitize_text_field(get_option('heading_value')),
            'pro' => false,
            // Add more properties as needed
        ),
        'spacer' => array(
            'value' => sanitize_text_field(get_option('spacer_value')),
            'pro' => false,
            // Add more properties as needed
        ),
        // 'product Filter' => array(
        //     'value' => sanitize_text_field(get_option('productfilter_value')),
        //     'pro' => true,
        //     // Add more properties as needed
        // ),
    );

    // Apply filter hook to allow other plugins to modify the toggle switch values
    $toggle_switch_values = apply_filters('vayu_blocks_toggle_switch_filter', $toggle_switch_values);

    return rest_ensure_response($toggle_switch_values);
}

// Callback function to save toggle switch value
function vayu_blocks_save_toggle_switch_callback($request) {
    $params = $request->get_json_params(); // Get JSON data sent in the request
    // Extract key and value from JSON data
    $key = sanitize_text_field($params['key']);
    // $value = sanitize_text_field($params['value']);
    $value = isset($params['value']) ? sanitize_text_field($params['value']) : 1;

    // Your logic to save toggle switch value to the database or any other source
    // Example:
    update_option($key . '_value', $value);

    // Return a response
    return rest_ensure_response(array(
        'success' => true,
        'message' => __('Toggle switch value saved successfully','vayu-blocks'),
    ));
}

// ************* Rest API of Block Settings ************* //

add_action('rest_api_init', function () {
    
    // Endpoint to save input values
    register_rest_route('vayu-blocks-sett/v1', '/save-input-values', array(
        'methods' => 'POST',
        'callback' => 'vayu_blocks_save_input_values_callback',
        'permission_callback' => '__return_true', // Set your permission callback here
    ));

    // Endpoint to retrieve input values
    register_rest_route('vayu-blocks-sett/v1', '/get-input-values', array(
        'methods' => 'GET',
        'callback' => 'vayu_blocks_get_input_values_callback',
        'permission_callback' => '__return_true', // Set your permission callback here
    ));
});

// Callback function to save input values
// Callback function to save input values
function vayu_blocks_save_input_values_callback($request) {
    $data = $request->get_json_params(); // Get JSON data sent in the request

    // Retrieve the existing settings from the database
    $settings = get_option('vayu_blocks_settings', array());

    // Update the settings with the new data
    $settings['container'] = array(
        'value' => isset($data['container']['value']) ? sanitize_text_field($data['container']['value']) : '',
        'pro' => isset($data['container']['pro']) ? (bool) $data['container']['pro'] : false,
        'description' => isset($data['container']['description']) ? sanitize_text_field($data['container']['description']) : '',
        'settings' => array(
            'containerWidth' => isset($data['container']['settings']['containerWidth']) ? absint($data['container']['settings']['containerWidth']) : 1008,
            'containerGap' => isset($data['container']['settings']['containerGap']) ? absint($data['container']['settings']['containerGap']) : 16,
            'padding' => isset($data['container']['settings']['padding']) ? absint($data['container']['settings']['padding']) : 9,
        ),
    );

    $settings['button'] = array(
        'value' => isset($data['button']['value']) ? sanitize_text_field($data['button']['value']) : '',
        'pro' => isset($data['button']['pro']) ? (bool) $data['button']['pro'] : false,
        'description' => isset($data['button']['description']) ? sanitize_text_field($data['button']['description']) : '',
        'settings' => array(
            'buttonColor' => isset($data['button']['settings']['buttonColor']) ? sanitize_text_field($data['button']['settings']['buttonColor']) : '',
        ),
    );

    // Save the updated settings back to the database
    update_option('vayu_blocks_settings', $settings);

    return rest_ensure_response(array(
        'success' => true,
        'message' => 'Input values saved successfully',
    ));
}

// Callback function to retrieve input values
function vayu_blocks_get_input_values_callback($request) {
    // Retrieve the settings from the database
    $settings = get_option('vayu_blocks_settings', array(
        'container' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
                'containerWidth' => 1250,
                'containerGap' => 18,
                'padding' => 20,
            ),
        ),
        'button' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
                'buttonColor' => '',
            ),
        ),
    ));

    // Prepare and return data
    return rest_ensure_response($settings);
}


add_action('rest_api_init', function() {
    add_filter('rest_post_query', 'vayu_blocks_filter_posts_with_featured_image', 10, 2);
});

function vayu_blocks_filter_posts_with_featured_image($args, $request) {
    if (!empty($request['with_featured_image']) && $request['with_featured_image'] === 'true') {
        $args['meta_query'] = array(
            array(
                'key' => '_thumbnail_id',
                'compare' => 'EXISTS'
            ),
        );
    }
    return $args;
}
