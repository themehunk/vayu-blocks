const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
  entry:{
     'advance-heading':'./inc/block/advance-heading',
     'advance-spacer':'./inc/block/advance-spacer',
     'advance-container':'./inc/block/advance-container',
     'advance-button':'./inc/block/advance-button',
     'advance-product':'./inc/block/advance-product',
     'registerPlugin':'./src/plugins/registerPlugin.js',
     'adminDashboard':'./src//plugins/dashboard/index.js',
     'component-editor': './src/components/component-editor.scss',
     'animation-index': './inc/block/animation',
			'frontend': './inc/block/animation/frontend.js',
			'anim-count': './inc/block/animation/frontend/count/index.js',
			'anim-typing': './inc/block/animation/frontend/typing/index.js'
  }
};