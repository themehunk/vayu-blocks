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
        'nonce' => wp_create_nonce('vayu_blocks_nonce'),
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


add_action('wp_ajax_vayu_blocks_save_input_values', 'vayu_blocks_save_input_values_callback');

// Callback function to save input values
function vayu_blocks_save_input_values_callback() {
    check_ajax_referer('vayu_blocks_nonce', 'security');

    // Decode the JSON string into an associative array
    $inputData = isset($_POST['inputData']) ? json_decode(stripslashes($_POST['inputData']), true) : array();

    $settings = get_option('vayu_blocks_settings', array());

    // Dynamically loop through all provided settings and update them
    foreach ($inputData as $key => $value) {
        $settings[$key] = array(
            'value' => isset($value['value']) ? sanitize_text_field($value['value']) : '',
            'pro' => isset($value['pro']) ? (bool) $value['pro'] : false,
            'description' => isset($value['description']) ? sanitize_text_field($value['description']) : '',
            'settings' => array_map('sanitize_text_field', $value['settings']),
        );
    }

    update_option('vayu_blocks_settings', $settings);

    wp_send_json_success(array(
        'success' => true,
        'message' => 'Input values saved successfully',
    ));

    wp_die();
}


add_action('wp_ajax_vayu_blocks_get_input_values', 'vayu_blocks_get_input_values_callback');

function vayu_blocks_get_input_values_callback() {
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
        'heading' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
               
            ),
        ),
        'spacer' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
                
            ),
        ),
        'product' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
                
            ),
        ),
        'post-grid' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
                
            ),
        ),
        'slider' => array(
            'value' => '',
            'pro' => false,
            'description' => '',
            'settings' => array(
            
            ),
        ),
    ));

    // Ensure the response is in JSON format
    wp_send_json_success($settings);
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
