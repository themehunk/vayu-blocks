import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { loop as icon } from '@wordpress/icons';
import './edit.js';

registerBlockVariation('core/query', {
    name: 'vayu-blocks/advance-query-loop',
    title: __('Advance Query Block', 'vayu-blocks'),
    description: __('A custom block extending the core Query Loop block with dynamic post templates.', 'vayu-blocks'),
    icon,
    category: 'vayu-blocks', 
    attributes: {
        namespace: 'vayu-blocks/advance-query-loop',
    },
    isActive: (blockAttributes) => blockAttributes.namespace === 'vayu-blocks/advance-query-loop',
    allowedControls: ['taxQuery','author','search','exclude'],
    innerBlocks: [
        ['vayu-blocks/wrapper'],
        [ 'core/query-pagination' ],
		[ 'core/query-no-results' ],
    ],
    
});
