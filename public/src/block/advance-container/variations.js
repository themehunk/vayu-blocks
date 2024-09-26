import { __ } from '@wordpress/i18n';
const variations = [
    {
        name: 'one-column',
        title: __('One Column', 'vayu-blocks'),
        description: __('A single column layout', 'vayu-blocks'),
        icon: 'columns', // Choose any icon from Dashicons or custom.
        innerBlocks: [
            ['vayu-blocks/container', {}], // A single container block
        ],
        scope: ['block'],
    },
    {
        name: 'two-columns',
        title: __('Two Columns', 'vayu-blocks'),
        description: __('A two-column layout', 'vayu-blocks'),
        icon: 'columns', // Choose any icon
        innerBlocks: [
            ['vayu-blocks/container', {}], // First column container block
            ['vayu-blocks/container', {}], // Second column container block
        ],
        scope: ['block'],
    },
    {
        name: 'three-columns',
        title: __('Three Columns', 'vayu-blocks'),
        description: __('A three-column layout', 'vayu-blocks'),
        icon: 'columns', // Choose any icon
        innerBlocks: [
            ['vayu-blocks/container', {}], // First column container block
            ['vayu-blocks/container', {}], // Second column container block
            ['vayu-blocks/container', {}], // Third column container block
        ],
        scope: ['block'],
    },
];

export default variations;
