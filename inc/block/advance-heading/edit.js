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
import { omitBy } from 'lodash';
import hexToRgba from 'hex-rgba';
import classnames from 'classnames';
/**
 * Internal dependencies
 */

 import Controls from './controls.js';
 import InsSettings from './settings.js';
 import googleFontsLoader from '../../../src/helpers/google-fonts.js';
 import getUniqueId from '../../../src/helpers/get-unique-id.js';
 import './editor.scss';


 export default function Edit({ attributes, setAttributes, clientId, uniqueID }) {
  
	const { id } = attributes;
  
	if ( ! id ) {
		  setAttributes( { id: clientId } );
	  }
  
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
			'--text-align': attributes.align,
			'--font-size':  attributes.fontSize + attributes.fontSizeUnit,
			'--z-index':   attributes.zindex,
			'--line-height': ( 3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight ) || undefined,
		    '--letter-spacing': attributes.letterSpacing && `${ attributes.letterSpacing }${ attributes.letterSpacingUnit }`,
			'--padding-top': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
			'--padding-right': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
			'--padding-bottom': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
			'--padding-left': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
			'--margin-top': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
			'--margin-bottom': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
		    '--border-top-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTop }${ attributes.borderWidthUnit }`,
		    '--border-bottom-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottom }${ attributes.borderWidthUnit }`,
		    '--border-right-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRight }${ attributes.borderWidthUnit }`,
		    '--border-left-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeft }${ attributes.borderWidthUnit }`,
		    '--border-top-right-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTop }${ attributes.borderRadiusUnit }`,
		    '--border-top-left-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRight }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-right-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeft }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-left-radius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottom }${ attributes.borderRadiusUnit }`,
		    
			'--border-top-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTop }${ attributes.borderWidthHvrUnit }`,
			'--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottom }${ attributes.borderWidthHvrUnit }`,
			'--border-right-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRight }${ attributes.borderWidthHvrUnit }`,
			'--border-left-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeft }${ attributes.borderWidthHvrUnit }`,
			'--border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTop }${ attributes.borderRadiusHvrUnit }`,
			'--border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRight }${ attributes.borderRadiusHvrUnit }`,
			'--border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeft }${ attributes.borderRadiusHvrUnit }`,
			'--border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottom }${ attributes.borderRadiusHvrUnit }`,
		
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
			'--text-align': attributes.alignTablet,
			'--font-size':  attributes.fontSizeTablet + attributes.fontSizeUnit,
			'--z-Index':   attributes.zindexTablet,
			'--line-height': ( 3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet ) || undefined,
		    '--letter-spacing': attributes.letterSpacingTablet && `${ attributes.letterSpacingTablet }${ attributes.letterSpacingUnit }`,
		    '--padding-top': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
			'--padding-right': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
			'--padding-bottom': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
			'--padding-left': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,
			'--margin-top': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
			'--margin-bottom': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
            '--border-top-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopTablet }${ attributes.borderWidthUnit }`,
		    '--border-bottom-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomTablet }${ attributes.borderWidthUnit }`,
		    '--border-right-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightTablet }${ attributes.borderWidthUnit }`,
		    '--border-left-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftTablet }${ attributes.borderWidthUnit }`,
			'--border-top-right-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopTablet }${ attributes.borderRadiusUnit }`,
		    '--border-top-left-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightTablet }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-right-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftTablet }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-left-radius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomTablet }${ attributes.borderRadiusUnit }`,
		
			'--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopTablet }${ attributes.borderWidthHvrUnit }`,
			'--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomTablet }${ attributes.borderWidthHvrUnit }`,
			'--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightTablet }${ attributes.borderWidthHvrUnit }`,
			'--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftTablet }${ attributes.borderWidthHvrUnit }`,
			'--border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopTablet }${ attributes.borderRadiusHvrUnit }`,
			'--border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightTablet }${ attributes.borderRadiusHvrUnit }`,
			'--border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftTablet }${ attributes.borderRadiusHvrUnit }`,
			'--border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomTablet }${ attributes.borderRadiusHvrUnit }`,
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
			'--text-align': attributes.alignMobile,
			'--font-size':  attributes.fontSizeMobile + attributes.fontSizeUnit,
			'--z-index':   attributes.zindexMobile,
			'--line-height': ( 3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile ) || undefined,
		    '--letter-spacing': attributes.letterSpacingMobile && `${ attributes.letterSpacingMobile }${ attributes.letterSpacingUnit }`,
		    '--padding-top': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
			'--padding-right': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
			'--padding-bottom': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
			'--padding-left': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,
			'--margin-top': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
			'--margin-bottom': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
	        '--border-top-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopMobile }${ attributes.borderWidthUnit }`,
		    '--border-bottom-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomMobile }${ attributes.borderWidthUnit }`,
		    '--border-right-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightMobile }${ attributes.borderWidthUnit }`,
		    '--border-left-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftMobile }${ attributes.borderWidthUnit }`,
			'--border-top-right-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopMobile }${ attributes.borderRadiusUnit }`,
		    '--border-top-left-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightMobile }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-right-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftMobile }${ attributes.borderRadiusUnit }`,
		    '--border-bottom-left-radius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomMobile }${ attributes.borderRadiusUnit }`,
		    
			       '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftMobile }${ attributes.borderWidthHvrUnit }`,
					'--border-top-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-top-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-bottom-right-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftMobile }${ attributes.borderRadiusHvrUnit }`,
					'--border-bottom-left-radius-hvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomMobile }${ attributes.borderRadiusHvrUnit }`,
		
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
             
			'--width':attributes.customWidth + attributes.customWidthUnit,
			'--max-width':attributes.customWidth + attributes.customWidthUnit,
			
		};

	   }

	   if ( isTablet ) {

		customwidth = {
             
			'--width':attributes.customWidthTablet + attributes.customWidthUnit,
			'--max-width':attributes.customWidthTablet + attributes.customWidthUnit,
			
		};

	   }

	   if ( isMobile ) {

		customwidth = {
             
			'--width':attributes.customWidthMobile + attributes.customWidthUnit,
			'--max-width':attributes.customWidthMobile + attributes.customWidthUnit,
			
		};
		
	   }

	}

	if( attributes.widthType =='fullwidth' ) {

		customwidth = {
             
			width:'100%',
			
		};

	}

    if( attributes.widthType =='inlinewidth' ) {

		customwidth = {
             
	            display:'inline-flex',
			
		};

	}

    let boxShadowStyle = {};

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

    let transitionHeadingStyle = {};

	if ( attributes.transitionAll ) {
			transitionHeadingStyle ={
				'--transition': attributes.transitionAll + 's',
			};
	}

	let backgroundStyle = {};

	if ('color' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background': attributes.backgroundColor,
		};
	  }
	  
	  if ('color' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background-hover': attributes.backgroundColorHvr,
		};
	  }
	  
	  if ('image' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background': attributes.backgroundImage?.url ? `url('${attributes.backgroundImage.url}')` : 'none',
		  '--background-attachment': attributes.backgroundAttachment,
		  '--background-position': `${Math.round(attributes.backgroundPosition?.x * 100)}% ${Math.round(attributes.backgroundPosition?.y * 100)}%`,
		  '--background-repeat': attributes.backgroundRepeat,
		  '--background-size': attributes.backgroundSize,
		};
	  }
	  
	  if ('image' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background-hover': attributes.backgroundImageHvr?.url ? `url('${attributes.backgroundImageHvr.url}')` : 'none',
		  '--background-attachment-hvr': attributes.backgroundAttachmentHvr,
		  '--background-position-hvr': `${Math.round(attributes.backgroundPositionHvr?.x * 100)}% ${Math.round(attributes.backgroundPositionHvr?.y * 100)}%`,
		  '--background-repeat-hvr': attributes.backgroundRepeatHvr,
		  '--background-size-hvr': attributes.backgroundSizeHvr,
		};
	  }
	  
	  if ('gradient' === attributes.backgroundType) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background': attributes.backgroundGradient,
		};
	  }
	  
	  if ('gradient' === attributes.backgroundTypeHvr) {
		backgroundStyle = {
		  ...backgroundStyle,
		  '--background-hover': attributes.backgroundGradientHvr,
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
		
    }, x => x?.includes?.( 'undefined' ));

	let Classes = classnames({
		"th-hide-desktop": attributes.responsiveTogHideDesktop,
		"th-hide-tablet": attributes.responsiveTogHideTablet,
		"th-hide-mobile": attributes.responsiveTogHideMobile,
	  });

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