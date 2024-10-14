import { registerBlockVariation, createBlock,registerBlockPattern } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RxLoop } from "react-icons/rx";
import './edit.js';
registerBlockVariation('core/query', {
    name: 'vayu-blocks/advance-query-loop',
    title: __('Advance Query Block', 'vayu-blocks'),
    description: __('A custom block extending the core Query Loop block with dynamic post templates.', 'vayu-blocks'),
    icon: <RxLoop style={{color:'#6c1bc3',fontSize:'12px'}} />,
    category: 'vayu-blocks', 
    attributes: {
        namespace: 'vayu-blocks/advance-query-loop',
    },
    isActive: (blockAttributes) => blockAttributes.namespace === 'vayu-blocks/advance-query-loop',
    allowedControls: ['taxQuery','author','search','exclude'],
});