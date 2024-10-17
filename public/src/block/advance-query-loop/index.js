import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit'; // Your edit component
import metadata from './block.json';
import { RxLoop } from "react-icons/rx";
import Save from './save';
registerBlockType('vayu-blocks/advance-query-loop', {
    ...metadata,
	icon: <RxLoop style={{color:'#6c1bc3',fontSize:'12px'}} />,
    edit: Edit,
    save: Save,
});