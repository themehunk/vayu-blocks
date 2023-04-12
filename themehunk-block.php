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