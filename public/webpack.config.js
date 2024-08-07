const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
  entry:{
    'post-grid': './src/block/post-grid',
    'advance-slider': './src/block/advance-slider',
     'advance-heading':'./src/block/advance-heading',
     'advance-spacer':'./src/block/advance-spacer',
     'advance-container':'./src/block/advance-container',
     'advance-button':'./src/block/advance-button',
     'advance-product':'./src/block/advance-product',
     'registerPlugin':'./src/plugins/registerPlugin.js',
     'adminDashboard':'./src/plugins/dashboard/index.js',
     'component-editor': './src/components/component-editor.scss',
     'animation-index': './src/block/animation',
     'vayu-sites': './src/vayu-sites',
     'post-grid': './src/block/post-grid',
     'advance-slider': './src/block/advance-slider',
     'view-grid': './src/block/post-grid/view.js',
     'view-grid': './src/block/advance-slider/view.js',
		 'frontend': './src/block/animation/frontend.js',
		 'anim-count': './src/block/animation/frontend/count/index.js',
		 'anim-typing': './src/block/animation/frontend/typing/index.js',
     'adminDashboard-style': './src/plugins/dashboard/adminDashboard-style.scss',
  }
};