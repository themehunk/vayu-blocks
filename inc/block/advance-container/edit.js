/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import {
	Fragment,
	useEffect,
	useRef
} from '@wordpress/element';
import hexToRgba from 'hex-rgba';
import { applyFilters, doAction } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { useViewportMatch } from '@wordpress/compose';
import { InnerBlocks, useBlockProps , useInnerBlocksProps , store as blockEditorStore,} from '@wordpress/block-editor';
import { omitBy } from 'lodash';
import BlockAppender from './BlockAppender';
/**
 * Internal dependencies
 */
import Controls from './controls.js';
import InsSettings from './settings.js';
import './editor.scss';

export default function Edit({ 
	attributes, 
	setAttributes, 
	clientId
   }){

			const { id } = attributes;

			const {
				adjacentBlockClientId,
				adjacentBlock,
				parentBlock,
				hasInnerBlocks,
				parentClientId,
				isViewportAvailable,
				isPreviewDesktop,
				isPreviewTablet,
				isPreviewMobile
			} = useSelect( 
				select => {
					const {
						getAdjacentBlockClientId,
						getBlock,
						getBlockRootClientId
					} = select( 'core/block-editor' );
					 const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
					 const block = getBlock( clientId );
					 const adjacentBlockClientId = getAdjacentBlockClientId( clientId );
					 const adjacentBlock = getBlock( adjacentBlockClientId );
					 const parentClientId = getBlockRootClientId( clientId );
					 const parentBlock = getBlock( parentClientId );
					 const hasInnerBlocks = !! ( block && block.innerBlocks.length );
		
				return {
					adjacentBlockClientId,
					adjacentBlock,
					parentBlock: parentBlock ? parentBlock.name : null,
					hasInnerBlocks,
					parentClientId,
					isViewportAvailable: __experimentalGetPreviewDeviceType ? true : false,
					isPreviewDesktop: __experimentalGetPreviewDeviceType ? 'Desktop' === __experimentalGetPreviewDeviceType() : false,
					isPreviewTablet: __experimentalGetPreviewDeviceType ? 'Tablet' === __experimentalGetPreviewDeviceType() : false,
					isPreviewMobile: __experimentalGetPreviewDeviceType ? 'Mobile' === __experimentalGetPreviewDeviceType() : false
				};
			}, []);
		
			const isLarger = useViewportMatch( 'large', '>=' );
		
			const isLarge = useViewportMatch( 'large', '<=' );
		
			const isSmall = useViewportMatch( 'small', '>=' );
		
			const isSmaller = useViewportMatch( 'small', '<=' );
		
			let isDesktop = isLarger && ! isLarge && isSmall && ! isSmaller;
		
			let isTablet = ! isLarger && ! isLarge && isSmall && ! isSmaller;
		
			let isMobile = ! isLarger && ! isLarge && ! isSmall && ! isSmaller;
		
			if ( isViewportAvailable && ! isMobile ) {
				isDesktop = isPreviewDesktop;
				isTablet = isPreviewTablet;
				isMobile = isPreviewMobile;
			}

			if ( ! id ) {
			setAttributes( { id: clientId } );
			}


			const showShouldOverlay = ( 'color' === attributes.overlaybackgroundType && attributes.overlaybackgroundColor ) 
			|| ( 'gradient' === attributes.overlaybackgroundType && attributes.overlaybackgroundGradient ) 
			|| ( 'color' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundColorHvr )
            || ( 'gradien' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundGradientHvr )
			|| ( 'image' === attributes.overlaybackgroundType && attributes.overlaybackgroundImage )
            || ( 'image' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundImageHvr )

			let containerClasses = classnames({
				
				[`${attributes.contentWidthType}-content`]: true,
				"th-hide-desktop": attributes.responsiveTogHideDesktop,
				"th-hide-tablet": attributes.responsiveTogHideTablet,
				"th-hide-mobile": attributes.responsiveTogHideMobile,
			  });
            
			const verticalAlignValues = {
				top: 'flex-start',
				center: 'center',
				bottom: 'flex-end'
			};

			let transitiondur = {
				'--transition': attributes.transitionAll + 's',
			};


			//outside container
            let containerStyles;
			let backgroundStyle;
			let borderStyle;
			let boxShadowStyle;

			//inside container
			let insidecontainerStyles
			let flexcontainerStyles
			let flexProperties;
			let PositionProperties;

			if ( 'color' === attributes.backgroundType ) {
				backgroundStyle = {
					'--background': attributes.backgroundColor
				};
			}
			if ( 'color' === attributes.backgroundTypeHvr ) {
				backgroundStyle = {...backgroundStyle,
					'--background-color-hover': attributes.backgroundColorHvr
				};
			}

			if ( 'image' === attributes.backgroundType ) {
				backgroundStyle = {
					...backgroundStyle,
					'--background-image': `url( '${ attributes.backgroundImage?.url }' )`,
					'--background-attachment': attributes.backgroundAttachment,
					'--background-position': `${ Math.round( attributes.backgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
					'--background-repeat': attributes.backgroundRepeat,
					'--background-size': attributes.backgroundSize,
				};
			}
			if ( 'image' === attributes.backgroundTypeHvr ) {
				backgroundStyle = {
					...backgroundStyle,
					'--background-image-hvr': `url( '${ attributes.backgroundImageHvr?.url }' )`,
					'--background-attachment-hvr': attributes.backgroundAttachmentHvr,
					'--background-position-hvr': `${ Math.round( attributes.backgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
					'--background-repeat-hvr': attributes.backgroundRepeatHvr,
					'--background-size-hvr': attributes.backgroundSizeHvr
				};
			}

			if ( 'gradient' === attributes.backgroundType ) {
				backgroundStyle = {
					...backgroundStyle,
					'--background-image': attributes.backgroundGradient,
				};
			}
			
			if ( 'gradient' === attributes.backgroundTypeHvr ) {
				backgroundStyle = {
					...backgroundStyle,
					'--background-image-hvr': attributes.backgroundGradientHvr
				};
			}


			// border and box shadow style

			borderStyle = {
				'--border-style':attributes.borderType,
				'--border-color':attributes.borderColor,
				'--border-style-hvr':attributes.borderHvrType,
				'--border-color-hvr':attributes.borderColorHvr,
			};
           
			if ( attributes.boxShadow ) {
				boxShadowStyle = {
					'--boxShadow': `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${ hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#fff' ), attributes.boxShadowColorOpacity ) }`
				};
			}
			if ( attributes.boxShadowHvr ) {
				boxShadowStyle = {...boxShadowStyle,
					'--boxShadow-hvr': `${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${ hexToRgba( ( attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff' ), attributes.boxShadowColorOpacityHvr ) }`
				};
			}


			if ( isDesktop ) {

				containerStyles = {
					zIndex:   attributes.zindex,
					'--padding-top': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
					'--padding-right': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
					'--padding-bottom': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
					'--padding-left': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
					'--margin-top': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
					'--margin-bottom': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
				    '--margin-right': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginRight }${ attributes.marginUnit }`,
				    '--margin-left': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginLeft }${ attributes.marginUnit }`,   
					'--border-top': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTop }${ attributes.borderWidthUnit }`,
					'--border-bottom': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottom }${ attributes.borderWidthUnit }`,
					'--border-right': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRight }${ attributes.borderWidthUnit }`,
					'--border-left': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeft }${ attributes.borderWidthUnit }`,
					'--border-TopRight-Radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTop }${ attributes.borderRadiusUnit }`,
					'--border-TopLeft-Radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRight }${ attributes.borderRadiusUnit }`,
					'--border-BottomRight-Radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeft }${ attributes.borderRadiusUnit }`,
					'--border-BottomLeft-Radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottom }${ attributes.borderRadiusUnit }`,
					'--border-top-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTop }${ attributes.borderWidthHvrUnit }`,
					'--border-bottom-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottom }${ attributes.borderWidthHvrUnit }`,
					'--border-right-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRight }${ attributes.borderWidthHvrUnit }`,
					'--border-left-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeft }${ attributes.borderWidthHvrUnit }`,
					'--border-TopRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTop }${ attributes.borderRadiusHvrUnit }`,
					'--border-TopLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRight }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeft }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottom }${ attributes.borderRadiusHvrUnit }`,
				}

				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = {...containerStyles,
						width: attributes.fullcontentWidth + attributes.fullcontentWidthUnit,
					}; 
	
				}

				if(attributes.contentWidthType=='boxed'){
					insidecontainerStyles = {
						maxWidth: attributes.boxedcontentWidth + attributes.boxedcontentWidthUnit,
						marginLeft:'auto',
						marginRight:'auto',
					}; 
				}

				if ( attributes.contentMinHgt ) {
					insidecontainerStyles = {...insidecontainerStyles,
						minHeight:attributes.contentMinHgt + attributes.contentMinHgtUnit,
					}
				}

				flexcontainerStyles = {
					flexDirection: attributes.direction,
					justifyContent:attributes.Justify,
					alignItems:attributes.AlignItem,
					flexWrap:attributes.Wrap,
				};

				if(attributes.Wrap=='wrap'){

					flexcontainerStyles = { ...flexcontainerStyles,
						alignContent: attributes.AlignContent	
					};

				}

				/********************* */
				// flex properies 
				/********************* */
				
				// flex align self
				flexProperties = { alignSelf: attributes.alignSelf };
		
				// flex order
				if(attributes.order === 'start'){
					flexProperties = {...flexProperties,order:'-9999'}
				}else if(attributes.order === 'end'){
					flexProperties = {...flexProperties, order:'9999'}
				}else if(attributes.order === 'custom'){
					flexProperties = {...flexProperties, order: attributes.customOrder}
				}
		
					//flex size
					if(attributes.flexSize === 'none'){
						flexProperties = {...flexProperties,
							flexGrow:'0',
							flexShrink:'0'
						}
					}else if(attributes.flexSize === 'grow'){
						flexProperties = {...flexProperties,
							flexGrow:'1',
							flexShrink:'0'
						}
					}else if(attributes.flexSize === 'shrink'){
						flexProperties = {...flexProperties,
								flexGrow:'0',
								flexShrink:'1'
							}
					}else if(attributes.flexSize === 'custom'){
						flexProperties = {...flexProperties,
								flexGrow:attributes.FlexGrowSize,
								flexShrink:attributes.FlexShrinkSize
							}
					}

					/********************* */
					// position properies 
					/********************* */
					PositionProperties = { 
						position: attributes.position,
					};

					if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							left:attributes.horizontalOrientationOffset + attributes.horizontalOrientationOffsetUnit,
						}

					}
					if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							right:attributes.horizontalOrientationOffsetRight + attributes.horizontalOrientationOffsetRightUnit,
						}

					}

					if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							top:attributes.verticalOrientationOffsetTop + attributes.verticalOrientationOffsetTopUnit,
						}

					}

					if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							top:attributes.verticalOrientationOffsetBottom + attributes.verticalOrientationOffsetBottomUnit,
						}

					}
				
			}

			if ( isTablet ) {

				containerStyles = {
					zIndex:   attributes.zindexTablet,
					'--padding-top': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
					'--padding-right': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
					'--padding-bottom': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
					'--padding-left': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,
					'--margin-top': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
					'--margin-bottom': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
				    '--margin-right': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginRightTablet }${ attributes.marginUnit }`,
				    '--margin-left': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginLeftTablet }${ attributes.marginUnit }`,
					'--border-top': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopTablet }${ attributes.borderWidthUnit }`,
					'--border-bottom': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomTablet }${ attributes.borderWidthUnit }`,
					'--border-right': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightTablet }${ attributes.borderWidthUnit }`,
					'--border-left': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftTablet}${ attributes.borderWidthUnit }`,
				    '--border-TopRight-Radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopTablet }${ attributes.borderRadiusUnit }`,
					'--border-TopLeft-Radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightTablet }${ attributes.borderRadiusUnit }`,
					'--border-BottomRight-Radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftTablet }${ attributes.borderRadiusUnit }`,
					'--border-BottomLeft-Radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomTablet }${ attributes.borderRadiusUnit }`,
				    
					'--border-top-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopTablet }${ attributes.borderWidthHvrUnit }`,
					'--border-bottom-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomTablet }${ attributes.borderWidthHvrUnit }`,
					'--border-right-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightTablet }${ attributes.borderWidthHvrUnit }`,
					'--border-left-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftTablet }${ attributes.borderWidthHvrUnit }`,
					'--border-TopRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopTablet }${ attributes.borderRadiusHvrUnit }`,
					'--border-TopLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightTablet }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftTablet }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomTablet }${ attributes.borderRadiusHvrUnit }`,

					
				}
                
				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = { ...containerStyles,
						maxWidth: attributes.fullcontentWidthTablet + attributes.fullcontentWidthUnit,
					}; 
	
				}


				if(attributes.contentWidthType=='boxed'){
					insidecontainerStyles = {
						maxWidth: attributes.boxedcontentWidthTablet  + attributes.boxedcontentWidthUnit,
						marginLeft:'auto',
						marginRight:'auto',
					}; 
				}

				if ( attributes.contentMinHgtTablet ) {
					insidecontainerStyles = {...insidecontainerStyles,
						minHeight:attributes.contentMinHgtTablet + attributes.contentMinHgtUnit,
					}
				}

				// flex align self
				flexProperties = { alignSelf: attributes.alignSelfTablet };
		
				// flex order
				if(attributes.orderTablet === 'start'){
					flexProperties = {...flexProperties,order:'-9999'}
				}else if(attributes.orderTablet === 'end'){
					flexProperties = {...flexProperties, order:'9999'}
				}else if(attributes.orderTablet === 'custom'){
					flexProperties = {...flexProperties, order: attributes.customOrderTablet}
				}
		
					//flex size
					if(attributes.flexSizeTablet === 'none'){
						flexProperties = {...flexProperties,
							flexGrow:'0',
							flexShrink:'0'
						}
					}else if(attributes.flexSizeTablet === 'grow'){
						flexProperties = {...flexProperties,
							flexGrow:'1',
							flexShrink:'0'
						}
					}else if(attributes.flexSizeTablet === 'shrink'){
						flexProperties = {...flexProperties,
								flexGrow:'0',
								flexShrink:'1'
							}
					}else if(attributes.flexSizeTablet === 'custom'){
						flexProperties = {...flexProperties,
								flexGrow:attributes.FlexGrowSizeTablet,
								flexShrink:attributes.FlexShrinkSizeTablet
							}
					}

					/********************* */
					// position properies 
					/********************* */

					if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							left:attributes.horizontalOrientationOffsetTablet + attributes.horizontalOrientationOffsetUnit,
						}
			
					 }
					 if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							right:attributes.horizontalOrientationOffsetRightTablet + attributes.horizontalOrientationOffsetRightUnit,
						}
			
					 }
			
					 if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							top:attributes.verticalOrientationOffsetTopTablet + attributes.verticalOrientationOffsetTopUnit,
						}
			
					 }
			
					 if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
						PositionProperties = {...PositionProperties,
							top:attributes.verticalOrientationOffsetBottomTablet + attributes.verticalOrientationOffsetBottomUnit,
						}
			
					 }

			}

			if ( isMobile ) {

				
				containerStyles = {
					zIndex:   attributes.zindexTablet,
					'--padding-top': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
					'--padding-right': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
					'--padding-bottom': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
					'--padding-left': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,
					'--margin-top': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
					'--margin-bottom': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
				    '--margin-right': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginRightMobile }${ attributes.marginUnit }`,
				    '--margin-left': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginLeftMobile }${ attributes.marginUnit }`,
				    '--border-top': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopMobile }${ attributes.borderWidthUnit }`,
					'--border-bottom': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomMobile }${ attributes.borderWidthUnit }`,
					'--border-right': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightMobile }${ attributes.borderWidthUnit }`,
					'--border-left': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftMobile }${ attributes.borderWidthUnit }`,
				    '--border-TopRight-Radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopMobile }${ attributes.borderRadiusUnit }`,
					'--border-TopLeft-Radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightMobile }${ attributes.borderRadiusUnit }`,
					'--border-BottomRight-Radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftMobile }${ attributes.borderRadiusUnit }`,
					'--border-BottomLeft-Radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomMobile }${ attributes.borderRadiusUnit }`,
				    
					'--border-top-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-bottom-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-right-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-left-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-TopRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-TopLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomRight-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-BottomLeft-Radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomMobile }${ attributes.borderRadiusHvrUnit }`,
				}

				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = {...containerStyles,
						maxWidth: attributes.fullcontentWidthMobile + attributes.fullcontentWidthUnit,
					}; 
	
				}

				if(attributes.contentWidthType=='boxed'){
					insidecontainerStyles = {
						maxWidth: attributes.boxedcontentWidthMobile  + attributes.boxedcontentWidthUnit,
						marginLeft:'auto',
						marginRight:'auto',
					}; 
				}
				if ( attributes.contentMinHgtMobile ) {
					insidecontainerStyles = {...insidecontainerStyles,
						minHeight:attributes.contentMinHgtMobile + attributes.contentMinHgtUnit,
					}
				}
				// position properties

				if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
					PositionProperties = {...PositionProperties,
						left:attributes.horizontalOrientationOffsetMobile + attributes.horizontalOrientationOffsetUnit,
					}
		
				 }
				 if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
					PositionProperties = {...PositionProperties,
						right:attributes.horizontalOrientationOffsetRightMobile + attributes.horizontalOrientationOffsetRightUnit,
					}
		
				 }
		
				 if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
					PositionProperties = {...PositionProperties,
						top:attributes.verticalOrientationOffsetTopMobile + attributes.verticalOrientationOffsetTopUnit,
					}
		
				 }
		
				 if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
					PositionProperties = {...PositionProperties,
						top:attributes.verticalOrientationOffsetBottomMobile + attributes.verticalOrientationOffsetBottomUnit,
					}
		
				 }

		   }

			if ( attributes.verticalAlign ) {
				insidecontainerStyles = {...insidecontainerStyles, alignItems: verticalAlignValues[ attributes.verticalAlign ]};
			}

			let overlayBackground;

            if ( 'color' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					'--background-overlay': attributes.overlaybackgroundColor,
				    opacity:0.6
				};
			}
			if ( 'color' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-hvr': attributes.overlaybackgroundColorHvr,
				    opacity:0.6
				};
			}

			if ( 'gradient' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay': attributes.overlaybackgroundGradient,
				    opacity:0.6
				};
			}

			if ( 'gradient' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-hvr': attributes.overlaybackgroundGradientHvr,
				    opacity:0.6
				};
			}

            if ( 'image' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-image': `url( '${ attributes.overlaybackgroundImage?.url }' )`,
					'--background-overlay-attachment': attributes.overlaybackgroundAttachment,
					'--background-overlay-position': `${ Math.round( attributes.overlaybackgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
					'--background-overlay-repeat': attributes.overlaybackgroundRepeat,
					'--background-overlay-size': attributes.overlaybackgroundSize,
				    opacity:0.6
				};
			}

			if ( 'image' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-image-hvr': `url( '${ attributes.overlaybackgroundImageHvr?.url }' )`,
					'--background-overlay-attachment-hvr': attributes.overlaybackgroundAttachmentHvr,
					'--background-overlay-position-hvr': `${ Math.round( attributes.overlaybackgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
					'--background-overlay-repeat-hvr': attributes.overlaybackgroundRepeatHvr,
					'--background-overlay-size-hvr': attributes.overlaybackgroundSizeHvr,
				    opacity:0.6
				};
			}

			

			const overlayStyle = {
				...overlayBackground,
			};

			const style = omitBy({
				...containerStyles,
				...backgroundStyle,
				...flexProperties,
				...PositionProperties,
				...borderStyle,
				...boxShadowStyle,
				...transitiondur,
			}, x => x?.includes?.( 'undefined' ));

			
			const blockProps = useBlockProps({
				id: attributes.id,
				className:containerClasses,
				style
			});

			const innerstyle = omitBy({
				...insidecontainerStyles,
				...flexcontainerStyles,
			}, x => x?.includes?.( 'undefined' ));

			const isSelected = useSelect((select) => {
				return select('core/block-editor').getBlockSelectionStart() === clientId;
			  }, [clientId]);

			const innerBlocksProps = useInnerBlocksProps(
				{ 
					style: innerstyle,
					className: 'th-inside-container th-con' 
				},
				{   
				  templateLock:false,
				  renderAppender: () => (
					<BlockAppender clientId={ clientId } isSelected={ isSelected } attributes={ attributes } />
				  ),
				}
			  );

			const containerBlockProps = blockProps;
			const Tag = attributes.containerHTMLTag;
			const supportsLayout = useSelect( ( select ) => {
				const {
					getSettings,
				} = select( blockEditorStore );
		
				return getSettings().supportsLayout || false;
			}, [] );

			let rootContainerClassName = "";
			rootContainerClassName = supportsLayout
				? `th-root-block-container align${attributes.align} wp-block-${attributes.id}`
				: 'wp-block';

			return (
				<Fragment>
				<Controls
					attributes={attributes}
					setAttributes={setAttributes}
				/>	
				<InsSettings
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				{ ( parentBlock == 'themehunk-blocks/advance-container' || !hasInnerBlocks) ? (

				<Tag {...containerBlockProps}>
				{showShouldOverlay && (
					<div
						className="wp-block-th-blocks-container-overlay"
						style={overlayStyle}
					/>
				)}
				<div {...innerBlocksProps}>{innerBlocksProps.children}</div>
				</Tag>

			    ) : (
					<div className={rootContainerClassName}>
					<Tag {...containerBlockProps}>
						{showShouldOverlay && (
							<div
								className="wp-block-th-blocks-container-overlay"
								style={overlayStyle}
							/>
						)}
						<div {...innerBlocksProps}>{innerBlocksProps.children}</div>
					</Tag>
				</div>
				
			   )}
			
				</Fragment>
							
	        );

    }