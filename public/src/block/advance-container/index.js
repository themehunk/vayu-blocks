import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';
import { RxGroup as icon } from "react-icons/rx";
import { variations } from './variationPicker';


const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Container', 'vayu-blocks' ),
	description: __( 'Container block allows you to create visually consistent and organized sections within your content area.', 'vayu-blocks' ),
	icon,
	keywords: [
		__( 'section' ),
		__( 'container' )
	],
	edit,
    save,
	variations,
	
});