<?php
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
        'container' => sanitize_text_field(get_option('container_value')),
        'button' => sanitize_text_field(get_option('button_value')),
        'wooproduct' => sanitize_text_field(get_option('wooproduct_value')),
        'heading' => sanitize_text_field(get_option('heading_value')),
        'spacer' => sanitize_text_field(get_option('spacer_value')),
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
    $value = isset($params['value']) ? sanitize_text_field($params['value']) : '1';

    // Your logic to save toggle switch value to the database or any other source
    // Example:
    update_option($key . '_value', $value);

    // Return a response
    return rest_ensure_response(array(
        'success' => true,
        'message' => __('Toggle switch value saved successfully','vayu-blocks'),
    ));
}