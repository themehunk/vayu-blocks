/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import {
	Fragment,
	useEffect,
	useRef
} from '@wordpress/element';
import { useViewportMatch} from '@wordpress/compose';
import { useSelect, useDispatch  } from '@wordpress/data';
import hexToRgba from 'hex-rgba';
import classnames from 'classnames';
/**
 * Internal dependencies
 */

 import Controls from './controls.js';
 import InsSettings from './settings.js';
 import googleFontsLoader from '../../helpers/google-fonts.js';
 import getUniqueId from '../../helpers/get-unique-id.js';
 import './editor.scss';


 export default function Edit({ attributes, setAttributes, clientId, uniqueID }) {
  
	const { id } = attributes;
  
	if ( ! id ) {
		  setAttributes( { id: clientId } );
	  }

	const omitBy = (object, condition) => (
		Object.fromEntries(
		  Object.entries(object).filter(([key, value]) => !condition(value))
		)
	  );

	useEffect( () => {
		  googleFontsLoader.attach();
	  }, [ attributes.id ]);

	        const { addUniqueID } = useDispatch( 'vayu-blocks/data' );
			const { isUniqueID, isUniqueBlock} = useSelect(
				( select ) => {
					return {
						isUniqueID: ( value ) => select( 'vayu-blocks/data' ).isUniqueID( value ),
						isUniqueBlock: ( value, clientId ) => select( 'vayu-blocks/data' ).isUniqueBlock( value, clientId ),
						
					};
				},
				[ clientId ]
			);

			useEffect( () => {
			const uniqueId = getUniqueId( uniqueID, clientId, isUniqueID, isUniqueBlock );
			if ( uniqueId !== uniqueID ) {
				attributes.uniqueID = uniqueId;
				setAttributes( { uniqueID: uniqueId } );
				addUniqueID( uniqueId, clientId );
			} else {
				addUniqueID( uniqueId, clientId );
			}
			}, [] );

    const changeContent = value => {
		setAttributes({ content: value });
	};

    const {
		isViewportAvailable,
		isPreviewDesktop,
		isPreviewTablet,
		isPreviewMobile
	} = useSelect( select => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return {
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

    let stylesheet;

	let flexProperties;

	let PositionProperties;

	useEffect( () => {
		if ( attributes.fontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.fontFamily, attributes.fontVariant );
		}
	}, [ attributes.fontFamily ]);

	stylesheet = {
		'--heading-color':attributes.headingColor,
        '--heading-hvr-color':attributes.headingHvrColor,
		'--heading-font-family': attributes.fontFamily || undefined,
		'--heading-font-weight': 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
		'--heading-font-style': attributes.fontStyle || undefined,
		'--heading-text-transform': attributes.textTransform || undefined,
		'--heading-border-style':attributes.borderType,
		'--heading-border-color':attributes.borderColor,
		'--heading-border-hvr-style':attributes.borderHvrType,
		'--heading-border-hvr-color':attributes.borderColorHvr,
	}
    
    if ( isDesktop ) {

		stylesheet = {
			...stylesheet,
			'--h-text-align': attributes.align,
			'--h-font-size':  attributes.fontSize + attributes.fontSizeUnit,
			'--h-z-index':   attributes.zindex,
			'--h-line-height': ( 3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight ) || undefined,
		    '--h-letter-spacing': attributes.letterSpacing && `${ attributes.letterSpacing }${ attributes.letterSpacingUnit }`,
			'--h-padding-top': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
			'--h-padding-right': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
			'--h-padding-bottom': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
			'--h-padding-left': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
			'--h-margin-top': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
			'--h-margin-bottom': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
		    '--h-border-top-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTop }${ attributes.borderWidthUnit }`,
		    '--h-border-bottom-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottom }${ attributes.borderWidthUnit }`,
		    '--h-border-right-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRight }${ attributes.borderWidthUnit }`,
		    '--h-border-left-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeft }${ attributes.borderWidthUnit }`,
		    '--h-border-top-right-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTop }${ attributes.borderRadiusUnit }`,
		    '--h-border-top-left-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRight }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-right-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeft }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-left-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottom }${ attributes.borderRadiusUnit }`,
		    
			'--h-border-top-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTop }${ attributes.borderWidthHvrUnit }`,
			'--h-border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottom }${ attributes.borderWidthHvrUnit }`,
			'--h-border-right-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRight }${ attributes.borderWidthHvrUnit }`,
			'--h-border-left-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeft }${ attributes.borderWidthHvrUnit }`,
			'--h-border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTop }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRight }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeft }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottom }${ attributes.borderRadiusHvrUnit }`,
		
		};

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
		
		stylesheet = {
			...stylesheet,
			'--h-text-align': attributes.alignTablet,
			'--h-font-size':  attributes.fontSizeTablet + attributes.fontSizeUnit,
			'--h-z-Index':   attributes.zindexTablet,
			'--h-line-height': ( 3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet ) || undefined,
		    '--h-letter-spacing': attributes.letterSpacingTablet && `${ attributes.letterSpacingTablet }${ attributes.letterSpacingUnit }`,
		    '--h-padding-top': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
			'--h-padding-right': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
			'--h-padding-bottom': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
			'--h-padding-left': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,
			'--h-margin-top': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
			'--h-margin-bottom': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
            '--h-border-top-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopTablet }${ attributes.borderWidthUnit }`,
		    '--h-border-bottom-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomTablet }${ attributes.borderWidthUnit }`,
		    '--h-border-right-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightTablet }${ attributes.borderWidthUnit }`,
		    '--h-border-left-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftTablet }${ attributes.borderWidthUnit }`,
			'--h-border-top-right-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopTablet }${ attributes.borderRadiusUnit }`,
		    '--h-border-top-left-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightTablet }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-right-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftTablet }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-left-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomTablet }${ attributes.borderRadiusUnit }`,
		
			'--h-border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopTablet }${ attributes.borderWidthHvrUnit }`,
			'--h-border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomTablet }${ attributes.borderWidthHvrUnit }`,
			'--h-border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightTablet }${ attributes.borderWidthHvrUnit }`,
			'--h-border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftTablet }${ attributes.borderWidthHvrUnit }`,
			'--h-border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopTablet }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightTablet }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftTablet }${ attributes.borderRadiusHvrUnit }`,
			'--h-border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomTablet }${ attributes.borderRadiusHvrUnit }`,
		};


		/********************* */
        // flex properies 
		/********************* */

		 // flex align self
		 flexProperties = {alignSelf: attributes.alignSelfTablet }

		 // flex order
		 if(attributes.orderTablet === 'start'){
			flexProperties = {...flexProperties,order:'-9999'}
		 }else if(attributes.orderTablet === 'end'){
			flexProperties = {...flexProperties,order:'9999'}
		 }else if(attributes.orderTablet === 'custom'){
			flexProperties = {...flexProperties,order: attributes.customOrderTablet}
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

            // position properties

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

        stylesheet = {
			...stylesheet,
			'--h-text-align': attributes.alignMobile,
			'--h-font-size':  attributes.fontSizeMobile + attributes.fontSizeUnit,
			'--h-z-index':   attributes.zindexMobile,
			'--h-line-height': ( 3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile ) || undefined,
		    '--h-letter-spacing': attributes.letterSpacingMobile && `${ attributes.letterSpacingMobile }${ attributes.letterSpacingUnit }`,
		    '--h-padding-top': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
			'--h-padding-right': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
			'--h-padding-bottom': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
			'--h-padding-left': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,
			'--h-margin-top': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
			'--h-margin-bottom': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
	        '--h-border-top-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopMobile }${ attributes.borderWidthUnit }`,
		    '--h-border-bottom-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomMobile }${ attributes.borderWidthUnit }`,
		    '--h-border-right-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightMobile }${ attributes.borderWidthUnit }`,
		    '--h-border-left-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftMobile }${ attributes.borderWidthUnit }`,
			'--h-border-top-right-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopMobile }${ attributes.borderRadiusUnit }`,
		    '--h-border-top-left-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightMobile }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-right-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftMobile }${ attributes.borderRadiusUnit }`,
		    '--h-border-bottom-left-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomMobile }${ attributes.borderRadiusUnit }`,
		    
			       '--h-border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopMobile }${ attributes.borderWidthHvrUnit }`,
					'--h-border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomMobile }${ attributes.borderWidthHvrUnit }`,
					'--h-border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightMobile }${ attributes.borderWidthHvrUnit }`,
					'--h-border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftMobile }${ attributes.borderWidthHvrUnit }`,
					'--h-border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopMobile }${ attributes.borderRadiusHvrUnit }`,
					'--h-border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightMobile }${ attributes.borderRadiusHvrUnit }`,
					'--h-border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftMobile }${ attributes.borderRadiusHvrUnit }`,
					'--h-border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomMobile }${ attributes.borderRadiusHvrUnit }`,
		
		};
         /********************* */
        // flex properies 
		/********************* */
         
		 // flex align self
		 flexProperties = {alignSelf: attributes.alignSelfMobile}

		 // flex order
		 if(attributes.orderMobile === 'start'){
			flexProperties = {...flexProperties,order:'-9999'}
		 }else if(attributes.orderMobile === 'end'){
			flexProperties = {...flexProperties,order:'9999'}
		 }else if(attributes.orderMobile === 'custom'){
			flexProperties = {...flexProperties,order: attributes.customOrderMobile}
		 }

		 //flex size
           if(attributes.flexSizeMobile === 'none'){
			flexProperties = {...flexProperties,
				flexGrow:'0',
				flexShrink:'0'
			}
			}else if(attributes.flexSizeMobile === 'grow'){
				flexProperties = {...flexProperties,
				flexGrow:'1',
			    flexShrink:'0'
			}
			}else if(attributes.flexSizeMobile === 'shrink'){
				flexProperties = {...flexProperties,
					flexGrow:'0',
					flexShrink:'1'
				}
			}else if(attributes.flexSizeMobile === 'custom'){
				flexProperties = {...flexProperties,
					flexGrow:attributes.FlexGrowSizeMobile,
					flexShrink:attributes.FlexShrinkSizeMobile
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

	let customwidth;

    if( attributes.widthType=='customwidth' ) {

		if ( isDesktop ) {

		customwidth = {
             
			'--h-max-width':attributes.customWidth + attributes.customWidthUnit,
			// '--h-max-width':'100%',
			
		};

	   }

	   if ( isTablet ) {

		customwidth = {
             '--h-max-width':attributes.customWidth + attributes.customWidthUnit,
			// '--h-max-width':'100%',
		};

	   }

	   if ( isMobile ) {

		customwidth = {
             
			'--h-max-width':attributes.customWidthMobile + attributes.customWidthUnit,
			// '--h-max-width':'100%',
			
		};
		
	   }

	}

	

    if( attributes.widthType =='inlinewidth' ) {

		customwidth = {
             
	            display:'inline-flex',
				'--h-max-width':'fit-content',
			
		};

	}

    let boxShadowStyle = {};

	if ( attributes.boxShadow ) {
		boxShadowStyle = {
			'--h-boxShadow': `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${ hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#fff' ), attributes.boxShadowColorOpacity ) }`
		};
	}
	if ( attributes.boxShadowColorHvr ) {
		boxShadowStyle = {...boxShadowStyle,
			'--h-boxShadow-hvr': `${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${ hexToRgba( ( attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff' ), attributes.boxShadowColorOpacityHvr ) }`
		};
	}

    let transitionHeadingStyle = {};

	if ( attributes.transitionAll ) {
			transitionHeadingStyle ={
				'--h-transition': attributes.transitionAll + 's',
			};
	}

	let backgroundStyle = {};

	if ('color' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background': attributes.backgroundColor,
		};
	  }
	  
	  if ('color' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background-hover': attributes.backgroundColorHvr,
		};
	  }
	  
	  if ('image' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background': attributes.backgroundImage?.url ? `url('${attributes.backgroundImage.url}')` : 'none',
		  '--h-background-attachment': attributes.backgroundAttachment,
		  '--h-background-position': `${Math.round(attributes.backgroundPosition?.x * 100)}% ${Math.round(attributes.backgroundPosition?.y * 100)}%`,
		  '--h-background-repeat': attributes.backgroundRepeat,
		  '--h-background-size': attributes.backgroundSize,
		};
	  }
	  
	  if ('image' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background-hover': attributes.backgroundImageHvr?.url ? `url('${attributes.backgroundImageHvr.url}')` : 'none',
		  '--h-background-attachment-hvr': attributes.backgroundAttachmentHvr,
		  '--h-background-position-hvr': `${Math.round(attributes.backgroundPositionHvr?.x * 100)}% ${Math.round(attributes.backgroundPositionHvr?.y * 100)}%`,
		  '--h-background-repeat-hvr': attributes.backgroundRepeatHvr,
		  '--h-background-size-hvr': attributes.backgroundSizeHvr,
		};
	  }
	  
	  if ('gradient' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background': attributes.backgroundGradient,
		};
	  }
	  
	  if ('gradient' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--h-background-hover': attributes.backgroundGradientHvr,
		};
	  }

 
    const style = omitBy({
        ...stylesheet,
		...customwidth,
		...boxShadowStyle,
		...transitionHeadingStyle,
		...backgroundStyle,
		...flexProperties,
		...PositionProperties, 
		backgroundImage: attributes.headingimage ? `url(${attributes.headingimage})` : undefined
    }, x => x?.includes?.( 'undefined' ));

	let headingWidthClass = "";

	if( attributes.widthType =='fullwidth') {
		headingWidthClass = 'alignfull';
	}
	if( attributes.widthType =='customwidth') {
		headingWidthClass = 'alignwide';
	}

	const Classes = classnames(
		headingWidthClass, // Include headingWidthClass directly as a string
		attributes.headingimage && attributes.headinganimation ? 'vayu_blocks_heading_image_animation-heading' : null, // Conditional class
    	attributes.headingimage  ? 'vayu_blocks_heading_image-heading' : null, // Conditional class for image without animation
		{
		  'th-hide-desktop': attributes.responsiveTogHideDesktop,
		  'th-hide-tablet': attributes.responsiveTogHideTablet,
		  'th-hide-mobile': attributes.responsiveTogHideMobile,
		}
	  );

    const blockProps = useBlockProps({
		id:`th-block-heading-${attributes.uniqueID}`,
		className:Classes,
		style
	});

	return (
        <Fragment>
            <Controls 
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
            <InsSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		<RichText
                identifier="content"
                tagName={ attributes.tag } // The tag here is the element output and editable in the admin
                value={ attributes.content } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/bold', 'core/italic','core/link' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ changeContent } // Store updated content as a block attribute
                placeholder={ __( 'Write heading…','vayu-blocks' ) } // Display this text before any content has been added by the user
                { ...blockProps }
            />
        </Fragment>
	);
}