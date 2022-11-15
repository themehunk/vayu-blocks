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
					    z-index:${ attributes.zindex };
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

					#thmk-block-${ attributes.id } {
						border-style:${ attributes.borderType };
						border-color:${ attributes.borderColor };

						border-bottom-width:${'linked' === attributes.borderWidthType ? attributes.borderWidth :attributes.borderWidthBottom }px;
						border-left-width:${'linked' === attributes.borderWidthType ? attributes.borderWidth :attributes.borderWidthLeft }px;
						border-right-width:${'linked' === attributes.borderWidthType ? attributes.borderWidth :attributes.borderWidthRight }px;
						border-top-width:${'linked' === attributes.borderWidthType ? attributes.borderWidth :attributes.borderWidthTop }px;
					    
						border-top-right-radius:${'linked' === attributes.borderRadiusType ? attributes.borderRadius :attributes.borderRadiusTop }px;
						border-top-left-radius:${'linked' === attributes.borderRadiusType ? attributes.borderRadius :attributes.borderRadiusRight }px;
						border-bottom-right-radius:${'linked' === attributes.borderRadiusType ? attributes.borderRadius :attributes.borderRadiusLeft }px;
						border-bottom-left-radius:${'linked' === attributes.borderRadiusType ? attributes.borderRadius :attributes.borderRadiusBottom }px;
					
					    box-shadow:${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${attributes.boxShadowColor ? attributes.boxShadowColor : '#000000'} ${attributes.boxShadowColorOpacity};
					}

					#thmk-block-${ attributes.id } {
						transition:color ${ attributes.transitionHeading }s;
				        webkit-transition:color ${ attributes.transitionHeading }s;
				        moz-transition:color ${ attributes.transitionHeading }s;
				        -o-transition:color ${ attributes.transitionHeading }s;
					}


					#thmk-block-${ attributes.id }:hover {
						color:${ attributes.headingHvrColor };
						box-shadow:${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#000000'} ${attributes.boxShadowColorOpacityHvr};	
					}
					
					@media only screen and (max-width: 1024px) { #thmk-block-${ attributes.id } {
						z-index:${ attributes.zindexTablet };
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
					}
				     
					#thmk-block-${ attributes.id } {
					    border-bottom-width:${'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet :attributes.borderWidthBottomTablet }px;
						border-left-width:${'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet :attributes.borderWidthLeftTablet }px;
						border-right-width:${'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet :attributes.borderWidthRightTablet }px;
						border-top-width:${'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet :attributes.borderWidthTopTablet }px;

						border-top-right-radius:${'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet :attributes.borderRadiusTopTablet }px;
						border-top-left-radius:${'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet :attributes.borderRadiusRightTablet }px;
						border-bottom-right-radius:${'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet :attributes.borderRadiusLeftTablet }px;
						border-bottom-left-radius:${'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet :attributes.borderRadiusBottomTablet }px;
					}
				
				}

					@media only screen and (max-width: 767px) { #thmk-block-${ attributes.id } {
						z-index:${ attributes.zindexMobile };
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
					}

					#thmk-block-${ attributes.id } {
					    border-bottom-width:${'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile :attributes.borderWidthBottomMobile }px;
						border-left-width:${'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile :attributes.borderWidthLeftMobile }px;
						border-right-width:${'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile :attributes.borderWidthRightMobile }px;
						border-top-width:${'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile :attributes.borderWidthTopMobile }px;
					    
						border-top-right-radius:${'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile :attributes.borderRadiusTopMobile }px;
						border-top-left-radius:${'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile :attributes.borderRadiusRightMobile }px;
						border-bottom-right-radius:${'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile :attributes.borderRadiusLeftMobile }px;
						border-bottom-left-radius:${'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile :attributes.borderRadiusBottomMobile }px;
					
					}
				
				}
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