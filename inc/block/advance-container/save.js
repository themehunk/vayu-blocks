/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

export default function Save({attributes}){

	const blockProps = useBlockProps.save({
		id: attributes.id
	});

	const Tag = attributes.containerHTMLTag;

	return (
		<div { ...blockProps } >
			<InnerBlocks.Content />
		</div>
	);
}