<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function vayu_blocks_mega_menu_render($attributes) {
    $label       = esc_html( $attributes['label'] ?? '' );
    $menu_slug   = esc_attr( $attributes['menuSlug'] ?? '' );
    $close_icon  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>';

    // Don't display the mega menu link if there is no label or no menu slug.
    if ( ! $label || ! $menu_slug ) {
        return ''; // Return an empty string instead of null
    }

    // Start output buffering
    ob_start();

    // Get block wrapper attributes
    $wrapper_attributes = get_block_wrapper_attributes();

    // JSON-encode the context data
    $context_data = json_encode(['isMenuOpen' => false]);

    ?>

    <li 
        <?php echo $wrapper_attributes; ?>
        data-wp-interactive="vayu-blocks/mega-menu"
        data-wp-context='<?php echo esc_attr( $context_data ); ?>'
    >

        <button
            data-wp-on--click="actions.toggleMenu"
            data-wp-bind--aria-expanded="context.isMenuOpen"
        >

            <?php echo $label; ?>

        </button>


        <div class="wp-block-create-block-mega-menu-block__menu-container">
            <?php echo block_template_part( $menu_slug ); ?>

            <button 
                aria-label="<?php echo esc_attr__( 'Close menu', 'mega-menu' ); ?>" 
                class="menu-container__close-button" 
                type="button" 
                data-wp-on--click="actions.closeMenu"
            >
                <?php echo $close_icon; ?>
            </button>
            
        </div>
      
    </li>

    <?php
    // Get the buffered content and return it
    return ob_get_clean();
}

function enqueue_custom_scripts() {
    $script_url = plugins_url('../../../public/src/block/mega-menu/view.js', __FILE__);

    wp_enqueue_script(
        'custom-view-script',
        $script_url,
        array(), // No dependencies
        null, // No version number
        true // Load in the footer
    );

    // Add the module type attribute
    add_filter('script_loader_tag', function ($tag, $handle) {
        if ('custom-view-script' === $handle) {
            return str_replace(' src', ' type="module" src', $tag);
        }
        return $tag;
    }, 10, 2);
}

add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
