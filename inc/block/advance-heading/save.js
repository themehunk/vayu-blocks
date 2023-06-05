/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

const Save = ({
	attributes
}) => {
	const blockProps = useBlockProps.save({
		id: attributes.uniqueID,
		className:`wp-block-th-advance-heading th-h${attributes.uniqueID}`
	});

	return (
		<RichText.Content
			tagName={ attributes.tag }
			value={ attributes.content }
			{ ...blockProps }
		/>
	);
};

export default Save;
