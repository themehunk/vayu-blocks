/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
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
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import advancejson from './AdvanceSettings/Advance.json';
import indexjson from './edit.json';
import { FaRegImage } from "react-icons/fa";


registerBlockType( metadata.name, {
	...metadata,
	attributes: {...indexjson, ...advancejson},
	edit: Edit,
	icon: <FaRegImage style={{color:'#6c1bc3'}} />,
	save,
} );