/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

import { Fragment, useEffect } from '@wordpress/element';

const Save = ({attributes}) => {

	const family = attributes.fontFamily || '';

	const blockProps = useBlockProps.save({
		id:`thmk-block-${ attributes.id }`,
	});

	return (
		
		<Fragment>
			<style>
				{ 
				   `
				   @import url(https://fonts.googleapis.com/css?family=${ family.replace(/\s/g, '+') });
				   #thmk-block-${ attributes.id } {
						text-align:${ attributes.align };
						color:${ attributes.headingColor };
						font-size:${ attributes.fontSize }px;
						letter-spacing:${ attributes.letterSpacing }px;
						line-height:${ attributes.lineHeight };
						font-family:${ attributes.fontFamily };
						font-style: ${ attributes.fontStyle };
						font-weight: ${ attributes.fontVariant };
		                text-transform: ${ attributes.textTransform};
						padding-top:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingTop }px;
						padding-bottom:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingBottom }px;
						padding-right:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingRight }px;
						padding-left:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingLeft }px;
						margin-top:${'linked' === attributes.marginType ? attributes.margin : attributes.marginTop }px;
						margin-bottom:${'linked' === attributes.marginType ? attributes.margin : attributes.marginBottom }px;
						margin-right:${'linked' === attributes.marginType ? attributes.margin : attributes.marginRight }px;
						margin-left:${'linked' === attributes.marginType ? attributes.margin : attributes.marginLeft }px;
						
					}
					@media only screen and (max-width: 1024px) { #thmk-block-${ attributes.id } {
						text-align:${ attributes.alignTablet };
						font-size:${ attributes.fontSizeTablet }px;
						letter-spacing:${ attributes.letterSpacingTablet }px;
						line-height:${ attributes.lineHeightTablet };
						padding-top:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingTopTablet }px;
						padding-bottom:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingBottomTablet }px;
						padding-right:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingRightTablet }px;
						padding-left:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingLeftTablet }px;
						margin-top:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginTopTablet }px;
						margin-bottom:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginBottomTablet }px;
						margin-right:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginRightTablet }px;
						margin-left:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginLeftTablet }px;
					}}

					@media only screen and (max-width: 767px) { #thmk-block-${ attributes.id } {
						text-align:${ attributes.alignMobile };
						font-size:${ attributes.fontSizeMobile }px;
						letter-spacing:${ attributes.letterSpacingMobile }px;
						line-height:${ attributes.lineHeightMobile };
						padding-top:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingTopMobile }px;
						padding-bottom:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingBottomMobile }px;
						padding-right:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingRightMobile }px;
						padding-left:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingLeftMobile }px;
						margin-top:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginTopMobile }px;
						margin-bottom:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginBottomMobile }px;
						margin-right:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginRightMobile }px;
						margin-left:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginLeftMobile }px;
					}}
					`	 
				}
			</style>
		<RichText.Content
			tagName={ attributes.tag }
			value={ attributes.content }
			{ ...blockProps }
		/>
		</Fragment>
	);
};

export default Save;