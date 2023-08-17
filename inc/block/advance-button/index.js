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
import save from './save';
import metadata from './block.json';

import { RxButton as icon } from "react-icons/rx";

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Button', 'vayu-blocks' ),
	description: __( 'AdvancedButton gives a spin to editor\'s Button block with much needed customization options. Powered by vayu.', 'vayu-blocks' ),
	icon,
	keywords: [
		'heading',
		'title',
		'advance button'
	],
	edit,
	save,
	example: {
		attributes: {
			content: __( 'Read', 'vayu-blocks' )
		}
	}
});