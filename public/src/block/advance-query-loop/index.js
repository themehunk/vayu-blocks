import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { loop as icon } from '@wordpress/icons';
import { createBlock } from '@wordpress/blocks';
import './edit.js';

// Register a new variation for the core/query block
registerBlockVariation('core/query', {
    name: 'vayu-blocks/advance-query-loop',
    title: __('Advance Query Block', 'vayu-blocks'),
    description: __('A custom block extending the core Query Loop block with dynamic post templates.', 'vayu-blocks'),
    icon,
    category: 'vayu-blocks', 
    scope: ['inserter', 'transforms'],
    attributes: {
        namespace: 'vayu-blocks/advance-query-loop',
    },
    isActive: (blockAttributes) => blockAttributes.namespace === 'vayu-blocks/advance-query-loop',
    // Specify only the allowed controls, hiding all others
    allowedControls: ['taxQuery','author','search','exclude'], // Only these controls will be shown
    // You can add transformations as needed
    transforms: {
        from: [
            {
                type: 'block',
                blocks: ['core/query'],
                transform: (attributes, innerBlocks) => {
                    return createBlock('vayu-blocks/advance-query-loop', attributes, innerBlocks);
                },
            },
        ],
        to: [
            {
                type: 'block',
                blocks: ['core/query'],
                transform: (attributes, innerBlocks) => {
                    return createBlock('core/query', attributes, innerBlocks);
                },
            },
        ],
    },
});
