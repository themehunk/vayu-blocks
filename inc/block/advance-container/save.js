/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

import classnames from 'classnames';

export default function Save({attributes}){

	let containerClasses = classnames({
				
		[`${attributes.contentWidthType}-content`]: true,
		"th-hide-desktop": attributes.responsiveTogHideDesktop,
		"th-hide-tablet": attributes.responsiveTogHideTablet,
		"th-hide-mobile": attributes.responsiveTogHideMobile,
	  });

	const blockProps = useBlockProps.save({
		id: attributes.id,
		className: `th-container-outside-wrapper wp-block-th-advance-container-${attributes.id} ${containerClasses}`,
	});

	const Tag = attributes.containerHTMLTag;

	return (
		<Tag { ...blockProps } >
			<div className='th-inside-content-wrap th-con' >
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
}