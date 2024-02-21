<?php defined( 'ABSPATH' ) or exit;

// Exit if accessed directly.
if ( ! class_exists( 'AI_SITE_BUILDER_ADMIN_LOAD' ) ) {


    class AI_SITE_BUILDER_ADMIN_LOAD {

		private static $_instance = null;
			/**
		 * Set Instance
		 *
		 * @since 1.1.0
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( ! isset( self::$_instance ) ) {
				self::$_instance = new self;
			}

			return self::$_instance;
		}

        private function __construct() {

			self::includes();
		}


    private function includes() {
		require_once VAYU_BLOCKS_DIR_SITES . 'core/importer/import-log.php';
		require_once VAYU_BLOCKS_DIR_SITES . 'core/importer/import-options.php';
		require_once VAYU_BLOCKS_DIR_SITES . 'core/importer/import-widgets.php';
		require_once VAYU_BLOCKS_DIR_SITES . 'core/class-helper.php';
		require_once VAYU_BLOCKS_DIR_SITES . 'core/class-import-site.php';
		}

    }

	AI_SITE_BUILDER_ADMIN_LOAD::get_instance();

}



