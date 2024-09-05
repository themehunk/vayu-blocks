import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
import InsSettings from './settings.js';

// Template for inner blocks
const TEMPLATE = [
	[
		'core/post-template',
		{ layout: { type: 'grid', columnCount: 2 } },
		[
			['core/post-title'],
			['core/post-date'],
			['core/post-excerpt'],
		],
	],
];

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	return (
		<>
			<InsSettings
				attributes={attributes}
				setAttributes={setAttributes}
			/>
			<div {...blockProps}>
				<InnerBlocks template={TEMPLATE} templateLock={false} />
			</div>
		</>
	);
};

export default Edit;
