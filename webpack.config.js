const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
  entry:{
     'advance-heading':'./inc/block/advance-heading',
     'advance-spacer':'./inc/block/advance-spacer',
     'advance-container':'./inc/block/advance-container',
     'registerPlugin':'./src/plugins/registerPlugin.js',
  }
};