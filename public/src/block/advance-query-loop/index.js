
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { loop as icon } from '@wordpress/icons';

// Define the inner block template with a grid layout
const TEMPLATE = [
    [
        'core/post-template',
        {}, // Grid layout with 2 columns
        [
            ['core/post-title'],
            ['core/post-date'],
            ['core/post-excerpt'],
        ],
    ],
	[
        'core/query-pagination',
        {}, // Additional attributes for pagination can be set here if needed
        [
            ['core/query-pagination-previous'],
            ['core/query-pagination-numbers'],
            ['core/query-pagination-next'],
        ],
    ],
];
// Register a new variation for the core/query block
registerBlockVariation('core/query', {
    name: 'vayu-blocks/advance-query-loop',
    title: __('Advance Query Block', 'vayu-blocks'),
    description: __('A custom block extending the core Query Loop block with dynamic post templates.', 'vayu-blocks'),
    icon,
	category: 'vayu-blocks', 
    attributes: {
        namespace: 'vayu-blocks/advance-query-loop',
        query: {
            order: 'desc',
            orderBy: 'date',
			perPage: null,
			pages : 0,
			offset : 0,
			postType : "post",
			author: "",
			search: "",
			exclude: [],
			sticky: "",
			taxQuery: null,
			parents: [],
			inherit: false,
        }
    },
	scope: [ 'inserter' ],
    innerBlocks: TEMPLATE,
    isActive: (blockAttributes) => blockAttributes.namespace === 'vayu-blocks/advance-query-loop',
    allowedControls: ['inherit', 'sticky', 'order', 'taxQuery', 'search', 'author','exclude','postType'],
});
