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
     'component-editor': './src/components/component-editor.scss'
  }
};