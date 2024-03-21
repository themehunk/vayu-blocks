/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';

import { SiWoo as icon } from "react-icons/si";

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Products', 'vayu-blocks' ),
	description: __( 'This enables you to seamlessly integrate your WooCommerce products into your content, in posts or pages.', 'vayu-blocks' ),
	icon,
	edit,
	save: () => null,
	example: {
		attributes: {
			content: __( 'A product with more customization options', 'vayu-blocks' )
		}
	}
});