/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps} from '@wordpress/block-editor';
import DOMPurify from 'dompurify';

function sanitizeSVG( svg ) {
	return DOMPurify.sanitize( svg, { USE_PROFILES: { svg: true, svgFilters: true } } );
}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function Save({ attributes }) {

	const blockProps = useBlockProps.save({
		id: attributes.uniqueID,
		className:`th-button-wrapper${attributes.uniqueID}`
	  });

	  const blockPropsButton = {
		className: 'th-button th-button-inside',
		href: ('post' in attributes) ? attributes.post.url : '',
		target: ('post' in attributes) && attributes.post.opensInNewTab === true ? '_blank' : '_self',
		rel:"noopener"
};

	return (
		<div {...blockProps}>
			<a {...blockPropsButton}>
				<span dangerouslySetInnerHTML={ { __html: sanitizeSVG( attributes.icon ) } } />
				<span>
						<RichText.Content
							tagName="span" // The tag here is the element output and editable in the admin
							value={ attributes.content }
						/>
				</span>
			</a>

		</div>
	);
}
