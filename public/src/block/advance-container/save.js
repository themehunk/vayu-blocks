/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

import classnames from 'classnames';
import ThShaper from './shaper.js';

export default function Save({attributes}){

	let containerClasses = classnames({
				
	[`${attributes.contentWidthType}-content`]: true,
		"th-hide-desktop": attributes.responsiveTogHideDesktop,
		"th-hide-tablet": attributes.responsiveTogHideTablet,
		"th-hide-mobile": attributes.responsiveTogHideMobile,
	  });

	  let contentWidthClass = "";
	  if (attributes.isRootBlock) {
	  if(attributes.contentWidthType=='boxed' || attributes.contentWidthType=='fullwidth'){
		  contentWidthClass = 'alignfull';
	  }
	  if(attributes.contentWidthType=='alignwide'){
		contentWidthClass = 'alignwide';
	  }
	}
	  
	const blockProps = useBlockProps.save({ 
			id:attributes.anchor,
			className: `th-container-outside-wrapper ${contentWidthClass} th-c${attributes.uniqueID} ${containerClasses}`,
	});
     
	const Tag = attributes.containerHTMLTag;

	const showShouldOverlay = ( 'color' === attributes.overlaybackgroundType && attributes.overlaybackgroundColor ) 
			|| ( 'gradient' === attributes.overlaybackgroundType && attributes.overlaybackgroundGradient ) 
			|| ( 'color' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundColorHvr )
            || ( 'gradien' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundGradientHvr )
			|| ( 'image' === attributes.overlaybackgroundType && attributes.overlaybackgroundImage )
            || ( 'image' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundImageHvr );

	return (
		<Tag { ...blockProps } >
			{showShouldOverlay && (
			<div className="wp-block-th-blocks-container-overlay"/>
			)}
			<ThShaper attributes={attributes} />
			<div className='th-inside-content-wrap th-con' >
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
}