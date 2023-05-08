import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Advanced Container', 'themehunk-block' ),
	description: __( 'Advanced Heading gives a spin to editor\'s Heading block with much needed customization options. Powered by themehunk.', 'themehunk-block' ),
	keywords: [
		__( 'section' ),
		__( 'container' )
	],
	edit,
    save,
	
});