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

	let headingWidthClass = "";

	if( attributes.widthType =='fullwidth') {
		headingWidthClass = 'alignfull';
	}

	console.log(attributes.headingimage);
	let Classes = classnames(
		headingWidthClass,
		attributes.headingimage && attributes.headinganimation ? 'vayu_blocks_heading_image_animation-heading' : null, // Conditional class
    	attributes.headingimage  ? 'vayu_blocks_heading_image-heading' : null, // Conditional class for image without animation
		{	
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
