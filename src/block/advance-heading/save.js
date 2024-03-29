/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = ({
	attributes
}) => {

	let Classes = classnames({	
		[`wp-block-th-advance-heading th-h${attributes.uniqueID}`]: true,
		"th-hide-desktop": attributes.responsiveTogHideDesktop,
		"th-hide-tablet": attributes.responsiveTogHideTablet,
		"th-hide-mobile": attributes.responsiveTogHideMobile,
	  });

	const blockProps = useBlockProps.save({
		id: attributes.uniqueID,
		className:Classes
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
