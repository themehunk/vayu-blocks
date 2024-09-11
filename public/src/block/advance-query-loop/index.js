/**
 * Wordpress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { loop as icon } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';
import variations from './variations';

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Advance Query Loop Block', 'vayu-blocks' ),
	description: __( 'Advance Query Block', 'vayu-blocks' ),
	icon,
	edit,
	example: {
		viewportWidth: 650,
		attributes: {
			namespace: 'core/posts-list',
			query: {
				perPage: 4,
				pages: 1,
				offset: 0,
				postType: 'post',
				order: 'desc',
				orderBy: 'date',
				author: '',
				search: '',
				sticky: 'exclude',
				inherit: true,
			},
		},
		innerBlocks: [
			{
				name: 'core/post-template',
				attributes: {
					layout: {
						type: 'grid',
						columnCount: 2,
					},
				},
				innerBlocks: [
					{
						name: 'core/post-title',
					},
					{
						name: 'core/post-date',
					}
				],
			},
		],
	},
	save,
    variations,
});