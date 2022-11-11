const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
  entry:{
     'advance-heading':'./inc/block/advance-heading',
     'advance-spacer':'./inc/block/advance-spacer',
     'registerPlugin':'./src/plugins/registerPlugin.js',
  }
};