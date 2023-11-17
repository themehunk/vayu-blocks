/**
 * WordPress dependencies.
 */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect, useDispatch  } from '@wordpress/data';

import hexToRgba from 'hex-rgba';
import {
	useEffect
} from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import googleFontsLoader from '../../helpers/google-fonts.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Controls from './controls.js';
import InsSettings from './settings.js';
import getUniqueId from '../../helpers/get-unique-id.js';

import DOMPurify from 'dompurify';

function sanitizeSVG( svg ) {
	return DOMPurify.sanitize( svg, { USE_PROFILES: { svg: true, svgFilters: true } } );
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId,
	uniqueID }) {

		const omitBy = (object, condition) => (
			Object.fromEntries(
			  Object.entries(object).filter(([key, value]) => !condition(value))
			)
		  );

	useEffect( () => {
			googleFontsLoader.attach();
		}, [ attributes.id ]);

	const { id } = attributes;

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
				  
	if ( ! id ) {
		setAttributes( { id: clientId } );
	}


  let customwidth;

  if( attributes.widthType=='customwidth' ) {
  	if ( isDesktop ) {
  		customwidth = {
		'--width':attributes.customWidth + attributes.customWidthUnit,
		'--maxWidth':attributes.customWidth + attributes.customWidthUnit, 
  	};
}
   if ( isTablet ) {
  customwidth = {      
		'--width':attributes.customWidthTablet + attributes.customWidthUnit,
		'--maxWidth':attributes.customWidthTablet + attributes.customWidthUnit,
  	};
   }
   if ( isMobile ) {
  customwidth = {      
   		'--width':attributes.customWidthMobile + attributes.customWidthUnit,
    	'--maxWidth':attributes.customWidthMobile + attributes.customWidthUnit,  
 	 };
}

}
else if( attributes.widthType =='fullwidth' ) {
    customwidth = {       
      '--width':'100%',
      '--maxWidth-fullwidth':'100%',  
    };
}
else if( attributes.widthType =='inlinewidth' ) {
    customwidth = {
      '--width':'auto',
      '--display':'inline-flex',
    }; 
}
else{
	customwidth = {       
		'--width':'100%',
		'--maxWidth-fullwidth':'650px',  
	  };
}

	let buttonWrapperStyle;
	let iconPositionStyle;
	let PositionProperties;
	let flexProperties;
	let buttonFullWidth;
	let buttonStyleSheet;

	if(attributes.iconPosition == 'before'){
		iconPositionStyle = {
			'--orderButton': 5,
			'--iconMargin' : `0 ${ attributes.iconSpacing }px 0 0`
		  };
	}
	else{
		iconPositionStyle = {
			'--orderButton': 15,
			'--iconMargin' : `0 0 0 ${ attributes.iconSpacing }px`
		  };
	}

	/********************* */
      // position properies
	/********************* */
		PositionProperties = { 
			'--position': attributes.position,
		 };
	
	if(isDesktop){
		buttonWrapperStyle = {
	'--justify-content': attributes.align,

	'--paddingTop': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
	'--paddingRight': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
	'--paddingBottom': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
	'--paddingLeft': 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
	
	'--marginTop': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
	'--marginRight': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginRight }${ attributes.marginUnit }`,
	'--marginBottom': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
	'--marginLeft': 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginLeft }${ attributes.marginUnit }`,
  
	'--zIndex':   attributes.zindex,

	'--border-top-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTop }${ attributes.borderWidthUnit }`,
	'--border-bottom-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottom }${ attributes.borderWidthUnit }`,
	'--border-right-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRight }${ attributes.borderWidthUnit }`,
	'--border-left-width': 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeft }${ attributes.borderWidthUnit }`,
	
	'--border-top-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTop }${ attributes.borderWidthHvrUnit }`,
	'--border-bottom-width-hvr' : 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottom }${ attributes.borderWidthHvrUnit }`,
	'--border-right-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRight }${ attributes.borderWidthHvrUnit }`,
	'--border-left-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeft }${ attributes.borderWidthHvrUnit }`,

	'--borderTopRightRadius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTop }${ attributes.borderRadiusUnit }`,
	'--borderTopLeftRadius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRight }${ attributes.borderRadiusUnit }`,
	'--borderBottomRightRadius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeft }${ attributes.borderRadiusUnit }`,
	'--borderBottomLeftRadius': 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottom }${ attributes.borderRadiusUnit }`,
  
	'--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTop }${ attributes.borderRadiusHvrUnit }`,
	'--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRight }${ attributes.borderRadiusHvrUnit }`,
	'--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeft }${ attributes.borderRadiusHvrUnit }`,
	'--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottom }${ attributes.borderRadiusHvrUnit }`,

	}
	 /********************* */
      // position properies Offsets Values
		/********************* */
		if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
				'--left':attributes.horizontalOrientationOffset + attributes.horizontalOrientationOffsetUnit,
			}

		 }
		 if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
				'--right':attributes.horizontalOrientationOffsetRight + attributes.horizontalOrientationOffsetRightUnit,
			}

		 }
		 if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
				'--top':attributes.verticalOrientationOffsetTop + attributes.verticalOrientationOffsetTopUnit,
			}

		 }
		 if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
				'--bottom':attributes.verticalOrientationOffsetBottom + attributes.verticalOrientationOffsetBottomUnit,
			}

		 }

		 /********************* */
        // flex properies 
		/********************* */

		 // flex align self
		 flexProperties = { '--align-self': attributes.alignSelf };

		 // flex order
		 if(attributes.order === 'start'){
			flexProperties = {...flexProperties,'--order':'-9999'}
		 }else if(attributes.order === 'end'){
			flexProperties = {...flexProperties, '--order':'9999'}
		 }else if(attributes.order === 'custom'){
			flexProperties = {...flexProperties, '--order': attributes.customOrder}
		 }

		 //flex size
        if(attributes.flexSize === 'none'){
			flexProperties = {...flexProperties,
				'--flex-grow':'0',
				'--flex-shrink':'0'
			}
		}else if(attributes.flexSize === 'grow'){
			flexProperties = {...flexProperties,
				'--flex-grow':'1',
			  '--flex-shrink':'0'
			}
		}else if(attributes.flexSize === 'shrink'){
			flexProperties = {...flexProperties,
					'--flex-grow':'0',
					'--flex-shrink':'1'
				}
		}else if(attributes.flexSize === 'custom'){
			flexProperties = {...flexProperties,
					'--flex-grow':attributes.FlexGrowSize,
					'--flex-shrink':attributes.FlexShrinkSize
				}
		}

		//Button Inside Border Radius
		buttonStyleSheet = {
	'--paddingTop': 'linked' === attributes.buttonpaddingType ? `${ attributes.buttonpadding }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingTop }${ attributes.buttonpaddingUnit }`,
	'--paddingRight': 'linked' === attributes.buttonpaddingType ? `${ attributes.buttonpadding }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingRight }${ attributes.buttonpaddingUnit }`,
	'--paddingBottom': 'linked' === attributes.buttonpaddingType ? `${ attributes.buttonpadding }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingBottom }${ attributes.buttonpaddingUnit }`,
	'--paddingLeft': 'linked' === attributes.buttonpaddingType ? `${ attributes.buttonpadding }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingLeft }${ attributes.buttonpaddingUnit }`,

	'--border-top-width': 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTop }${ attributes.buttonborderWidthUnit }`,
	'--border-bottom-width': 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottom }${ attributes.buttonborderWidthUnit }`,
	'--border-right-width': 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRight }${ attributes.buttonborderWidthUnit }`,
	'--border-left-width': 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeft }${ attributes.buttonborderWidthUnit }`,

	'--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusType ? `${ attributes.buttonborderRadius }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusTop }${ attributes.buttonborderRadiusUnit }`,
	'--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusType ? `${ attributes.buttonborderRadius }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusRight }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusType ? `${ attributes.buttonborderRadius }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusLeft }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusType ? `${ attributes.buttonborderRadius }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusBottom }${ attributes.buttonborderRadiusUnit }`,
	
	'--fontSize':  attributes.fontSize + attributes.fontSizeUnit,
	'--lineHeight': ( 3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight ) || undefined,
	'--letterSpacing': attributes.letterSpacing && `${ attributes.letterSpacing }${ attributes.letterSpacingUnit }`,

	}

	}

	if(isTablet){
		buttonWrapperStyle = {
		'--justify-content': attributes.alignTablet,

		'--paddingTop': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
		'--paddingRight': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
		'--paddingBottom': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
		'--paddingLeft': 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,

      
      '--marginTop': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
      '--marginRight': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginRightTablet }${ attributes.marginUnit }`,
      '--marginBottom': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
      '--marginLeft': 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginLeftTablet }${ attributes.marginUnit }`,
    
      '--zIndex':   attributes.zindexTablet,

      '--border-top-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopTablet }${ attributes.borderWidthUnit }`,
      '--border-bottom-width':'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomTablet }${ attributes.borderWidthUnit }`,
      '--border-right-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightTablet }${ attributes.borderWidthUnit }`,
      '--border-left-width': 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftTablet }${ attributes.borderWidthUnit }`,
      
      '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopTablet }${ attributes.borderWidthHvrUnit }`,
      '--border-bottom-width-hvr':'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomTablet }${ attributes.borderWidthHvrUnit }`,
      '--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightTablet }${ attributes.borderWidthHvrUnit }`,
      '--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftTablet }${ attributes.borderWidthHvrUnit }`,

      '--borderTopRightRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopTablet }${ attributes.borderRadiusUnit }`,
		  '--borderTopLeftRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightTablet }${ attributes.borderRadiusUnit }`,
		  '--borderBottomRightRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftTablet }${ attributes.borderRadiusUnit }`,
		  '--borderBottomLeftRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomTablet }${ attributes.borderRadiusUnit }`,

      '--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopTablet }${ attributes.borderRadiusHvrUnit }`,
      '--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightTablet }${ attributes.borderRadiusHvrUnit }`,
      '--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftTablet }${ attributes.borderRadiusHvrUnit }`,
      '--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomTablet }${ attributes.borderRadiusHvrUnit }`,   
	  
	}
	
     // position properties
	 if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
				PositionProperties = {...PositionProperties,
					'--left':attributes.horizontalOrientationOffsetTablet + attributes.horizontalOrientationOffsetUnit,
				}
	
			 }
			 if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
				PositionProperties = {...PositionProperties,
					'--right':attributes.horizontalOrientationOffsetRightTablet + attributes.horizontalOrientationOffsetRightUnit,
				}
	
			 }
	
			 if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
				PositionProperties = {...PositionProperties,
					'--top':attributes.verticalOrientationOffsetTopTablet + attributes.verticalOrientationOffsetTopUnit,
				}
	
			 }
	
			 if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
				PositionProperties = {...PositionProperties,
					'--bottom':attributes.verticalOrientationOffsetBottomTablet + attributes.verticalOrientationOffsetBottomUnit,
				}
	
			 }
       
		/********************* */
        // flex properies 
		/********************* */

		 // flex align self
		 flexProperties = {'--align-self': attributes.alignSelfTablet }

		 // flex order
		 if(attributes.orderTablet === 'start'){
			flexProperties = {...flexProperties,'--order':'-9999'}
		 }else if(attributes.orderTablet === 'end'){
			flexProperties = {...flexProperties,'--order':'9999'}
		 }else if(attributes.orderTablet === 'custom'){
			flexProperties = {...flexProperties,'--order': attributes.customOrderTablet}
		 }

		 //flex size
           if(attributes.flexSizeTablet === 'none'){
			flexProperties = {...flexProperties,
				'--flex-grow':'0',
				'--flex-shrink':'0'
			}
			}else if(attributes.flexSizeTablet === 'grow'){
				flexProperties = {...flexProperties,
				'--flex-grow':'1',
			  '--flex-shrink':'0'
			}
			}else if(attributes.flexSizeTablet === 'shrink'){
				flexProperties = {...flexProperties,
				'--flex-grow':'0',
				'--flex-shrink':'1'
				}
			}else if(attributes.flexSizeTablet === 'custom'){
				flexProperties = {...flexProperties,
				'--flex-grow':attributes.FlexGrowSizeTablet,
				'--flex-shrink':attributes.FlexShrinkSizeTablet
				}
			}

		//Button Inside Border Radius
		buttonStyleSheet = {
	
	'--paddingTop': 'linked' === attributes.buttonpaddingTypeTablet ? `${ attributes.buttonpaddingTablet }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingTopTablet }${ attributes.buttonpaddingUnit }`,
	'--paddingRight': 'linked' === attributes.buttonpaddingTypeTablet ? `${ attributes.buttonpaddingTablet }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingRightTablet }${ attributes.buttonpaddingUnit }`,
	'--paddingBottom': 'linked' === attributes.buttonpaddingTypeTablet ? `${ attributes.buttonpaddingTablet }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingBottomTablet }${ attributes.buttonpaddingUnit }`,
	'--paddingLeft': 'linked' === attributes.buttonpaddingTypeTablet ? `${ attributes.buttonpaddingTablet }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingLeftTablet }${ attributes.buttonpaddingUnit }`,

	'--border-top-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTopTablet }${ attributes.buttonborderWidthUnit }`,
      '--border-bottom-width':'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottomTablet }${ attributes.buttonborderWidthUnit }`,
      '--border-right-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRightTablet }${ attributes.buttonborderWidthUnit }`,
      '--border-left-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeftTablet }${ attributes.buttonborderWidthUnit }`,

    '--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${ attributes.buttonborderRadiusTablet }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusTopTablet }${ attributes.buttonborderRadiusUnit }`,
	'--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${ attributes.buttonborderRadiusTablet }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusRightTablet }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${ attributes.buttonborderRadiusTablet }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusLeftTablet }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${ attributes.buttonborderRadiusTablet }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusBottomTablet }${ attributes.buttonborderRadiusUnit }`,
			
	'--fontSize':  attributes.fontSizeTablet + attributes.fontSizeUnit,
	'--lineHeight': ( 3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet ) || undefined,
	'--letterSpacing': attributes.letterSpacingTablet && `${ attributes.letterSpacingTablet }${ attributes.letterSpacingUnit }`,
		
			}
	}

	if(isMobile){
		buttonWrapperStyle = {
			'--justify-content': attributes.alignMobile,

			'--paddingTop': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
			'--paddingRight': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
			'--paddingBottom': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
			'--paddingLeft': 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,

      
      '--marginTop': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
      '--marginRight': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginRightMobile }${ attributes.marginUnit }`,
      '--marginBottom': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
      '--marginLeft': 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginLeftMobile }${ attributes.marginUnit }`,
    
      '--zIndex':   attributes.zindexMobile,

      '--border-top-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopMobile }${ attributes.borderWidthUnit }`,
      '--border-bottom-width':'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomMobile }${ attributes.borderWidthUnit }`,
      '--border-right-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightMobile }${ attributes.borderWidthUnit }`,
      '--border-left-width': 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftMobile }${ attributes.borderWidthUnit }`,
      
      '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrTopMobile }${ attributes.borderWidthHvrUnit }`,
      '--border-bottom-width-hvr':'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrBottomMobile }${ attributes.borderWidthHvrUnit }`,
      '--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrRightMobile }${ attributes.borderWidthHvrUnit }`,
      '--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }${ attributes.borderWidthHvrUnit }` : `${ attributes.borderWidthHvrLeftMobile }${ attributes.borderWidthHvrUnit }`,

      '--borderTopRightRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopMobile }${ attributes.borderRadiusUnit }`,
		'--borderTopLeftRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightMobile }${ attributes.borderRadiusUnit }`,
		  '--borderBottomRightRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftMobile }${ attributes.borderRadiusUnit }`,
		  '--borderBottomLeftRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomMobile }${ attributes.borderRadiusUnit }`,
    
      '--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrTopMobile }${ attributes.borderRadiusHvrUnit }`,
      '--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrRightMobile }${ attributes.borderRadiusHvrUnit }`,
      '--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrLeftMobile }${ attributes.borderRadiusHvrUnit }`,
      '--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }${ attributes.borderRadiusHvrUnit }` : `${ attributes.borderRadiusHvrBottomMobile }${ attributes.borderRadiusHvrUnit }`,
    
	}

		// position properties

		if(attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
			  '--left':attributes.horizontalOrientationOffsetMobile + attributes.horizontalOrientationOffsetUnit,
			}
	  
		   }
		   if(attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit'){
			  PositionProperties = {...PositionProperties,
			  '--right':attributes.horizontalOrientationOffsetRightMobile + attributes.horizontalOrientationOffsetRightUnit,
			}
	  
		   }
	  
		   if(attributes.verticalOrientation === 'top' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
			  '--top':attributes.verticalOrientationOffsetTopMobile + attributes.verticalOrientationOffsetTopUnit,
			}
	  
		   }
	  
		   if(attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit'){
			PositionProperties = {...PositionProperties,
			  '--bottom':attributes.verticalOrientationOffsetBottomMobile + attributes.verticalOrientationOffsetBottomUnit,
			}
	  
		   }
			/********************* */
			  // flex properies 
			  /********************* */

			   // flex align self
			   flexProperties = {
			'--align-self': attributes.alignSelfMobile, 
		  }
	  
			   // flex order
			   if(attributes.orderMobile === 'start'){
				  flexProperties = {...flexProperties,'--order':'-9999'}
			   }else if(attributes.orderMobile === 'end'){
				  flexProperties = {...flexProperties,'--order':'9999'}
			   }else if(attributes.orderMobile === 'custom'){
				  flexProperties = {...flexProperties,'--order': attributes.customOrderMobile}
			   }
	  
			   //flex size
				 if(attributes.flexSizeMobile === 'none'){
				  flexProperties = {...flexProperties,
					  '--flex-grow':'0',
					  '--flex-shrink':'0'
				  }
				  }else if(attributes.flexSizeMobile === 'grow'){
					  flexProperties = {...flexProperties,
					  '--flex-grow':'1',
					'--flex-shrink':'0'
				  }
				  }else if(attributes.flexSizeMobile === 'shrink'){
					  flexProperties = {...flexProperties,
					  '--flex-grow':'0',
					  '--flex-shrink':'1'
					  }
				  }else if(attributes.flexSizeMobile === 'custom'){
					  flexProperties = {...flexProperties,
						  '--flex-grow':attributes.FlexGrowSizeMobile,
						  '--flex-shrink':attributes.FlexShrinkSizeMobile
					  }
				  }

	//Button Inside Border Radius
		buttonStyleSheet = {
	'--paddingTop': 'linked' === attributes.buttonpaddingTypeMobile ? `${ attributes.buttonpaddingMobile }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingTopMobile }${ attributes.buttonpaddingUnit }`,
	'--paddingRight': 'linked' === attributes.buttonpaddingTypeMobile ? `${ attributes.buttonpaddingMobile }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingRightMobile }${ attributes.buttonpaddingUnit }`,
	'--paddingBottom': 'linked' === attributes.buttonpaddingTypeMobile ? `${ attributes.buttonpaddingMobile }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingBottomMobile }${ attributes.buttonpaddingUnit }`,
	'--paddingLeft': 'linked' === attributes.buttonpaddingTypeMobile ? `${ attributes.buttonpaddingMobile }${ attributes.buttonpaddingUnit }` : `${ attributes.buttonpaddingLeftMobile }${ attributes.buttonpaddingUnit }`,

	'--border-top-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTopMobile }${ attributes.buttonborderWidthUnit }`,
	'--border-bottom-width':'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottomMobile }${ attributes.buttonborderWidthUnit }`,
	'--border-right-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRightMobile }${ attributes.buttonborderWidthUnit }`,
	'--border-left-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeftMobile }${ attributes.buttonborderWidthUnit }`,
      
	'--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${ attributes.buttonborderRadiusMobile }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusTopMobile }${ attributes.buttonborderRadiusUnit }`,
	'--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${ attributes.buttonborderRadiusMobile }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusRightMobile }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${ attributes.buttonborderRadiusMobile }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusLeftMobile }${ attributes.buttonborderRadiusUnit }`,
	'--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${ attributes.buttonborderRadiusMobile }${ attributes.buttonborderRadiusUnit }` : `${ attributes.buttonborderRadiusBottomMobile }${ attributes.buttonborderRadiusUnit }`,
					
	'--fontSize':  attributes.fontSizeMobile + attributes.fontSizeUnit,
	'--lineHeight': ( 3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile ) || undefined,
	'--letterSpacing': attributes.letterSpacingMobile && `${ attributes.letterSpacingMobile }${ attributes.letterSpacingUnit }`,			
	}

	}
	// Button Full-Width
	if(attributes.align == 'space-around'){
		buttonFullWidth = {
		'--width': '100%',
		'--justify-content': 'center',
		}
	}
	 //Background

	 let backgroundStyle = {};

	 if ( 'color' === attributes.backgroundType ) {
		 backgroundStyle = {
			 '--background-color': attributes.backgroundColor
		 };
	 }
 
	 if ( 'image' === attributes.backgroundType ) {
		 backgroundStyle = {...backgroundStyle,
			 '--backgroundImage': `url( '${ attributes.backgroundImage?.url }' )`,
			 '--backgroundAttachment': attributes.backgroundAttachment,
			 '--backgroundPosition': `${ Math.round( attributes.backgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
			 '--backgroundRepeat': attributes.backgroundRepeat,
			 '--backgroundSize': attributes.backgroundSize
		 };
	 }
 
	 if ( 'gradient' === attributes.backgroundType ) {
		 backgroundStyle = {
			 '--backgroundImage': attributes.backgroundGradient
		 };
	 }
 
   
   if ( 'color' === attributes.backgroundTypeHvr ) {
		 backgroundStyle = {...backgroundStyle,
			 '--background-color-hvr':  attributes.backgroundColorHvr
		 }; 
	 }
 
   if ( 'image' === attributes.backgroundTypeHvr ) {
	 backgroundStyle = {...backgroundStyle,
	 '--backgroundImage-hvr':`url( '${ attributes.backgroundImageHvr?.url }' )`,
	 '--backgroundAttachment-hvr': attributes.backgroundAttachmentHvr,
	 '--backgroundPosition-hvr': `${ Math.round( attributes.backgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
	 '--backgroundRepeat-hvr': attributes.backgroundRepeatHvr,
	 '--backgroundSize-hvr': attributes.backgroundSizeHvr
		 };
	 
	 }
 
   if ( 'gradient' === attributes.backgroundTypeHvr ) {	
	 backgroundStyle = {...backgroundStyle,
			 '--backgroundImage-hvr': attributes.backgroundGradientHvr
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
			 '--boxShadow-hvr' : `${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${ hexToRgba( ( attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff' ), attributes.boxShadowColorOpacityHvr ) }`
		 };
	 }
   
   
 
   let borderStyle;
 
   borderStyle = {
	 '--border-style':attributes.borderType,
	 '--border-color':attributes.borderColor,
	 '--border-style-hvr':attributes.borderHvrType,
	 '--border-color-hvr':attributes.borderColorHvr,
   };
 
   let transitionButtonStyle = {};
 
	 if ( attributes.transitionAll ) {
			 transitionButtonStyle ={
				 '--transition':`all ${ attributes.transitionAll }s`,
				 '--WebkitTransition':`all ${ attributes.transitionAll }s`,
				 '--MozTransition':`all ${ attributes.transitionAll }s`,
				 '--OTransition':`all ${ attributes.transitionAll }s`,
			 };
	 }
 
	 let spacerClasses = classnames({			 
		 "th-hide-desktop": attributes.responsiveTogHideDesktop,
		 "th-hide-tablet": attributes.responsiveTogHideTablet,
		 "th-hide-mobile": attributes.responsiveTogHideMobile,
	   });

	const style = { 
		...borderStyle,
		...boxShadowStyle,
		...customwidth,
		...iconPositionStyle,
		...buttonWrapperStyle,
		...backgroundStyle,
		...PositionProperties,
		...flexProperties,
		...transitionButtonStyle,
	}

	useEffect( () => {
		if ( attributes.fontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.fontFamily, attributes.fontVariant );
		}
	}, [ attributes.fontFamily ]);
	
	const blockProps = useBlockProps({
			id: attributes.id,
			className: 'th-button-wrapper',
			style: style
	});

	 //Background

	 let backgroundStyleButton = {};

	 if ( 'color' === attributes.backgroundType ) {
		backgroundStyleButton = {
			 '--background-color': attributes.buttonbackgroundColor
		 };
	 }

	 if ( 'image' === attributes.buttonbackgroundType ) {
		backgroundStyleButton = {...backgroundStyleButton,
			'--backgroundImage': `url( '${ attributes.buttonbackgroundImage?.url }' )`,
			'--backgroundAttachment': attributes.buttonbackgroundAttachment,
			'--backgroundPosition': `${ Math.round( attributes.buttonbackgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
			'--backgroundRepeat': attributes.buttonbackgroundRepeat,
			'--backgroundSize': attributes.buttonbackgroundSize
		};
	}

	if ( 'gradient' === attributes.buttonbackgroundType ) {
		backgroundStyleButton = {
			'--backgroundImage': attributes.buttonbackgroundGradient
		};
	}

  
  if ( 'color' === attributes.buttonbackgroundTypeHvr ) {
	backgroundStyleButton = {...backgroundStyleButton,
			'--background-color-hvr':  attributes.buttonbackgroundColorHvr
		};
	
	}

  if ( 'image' === attributes.buttonbackgroundTypeHvr ) {
	backgroundStyleButton = {...backgroundStyleButton,
	'--backgroundImage-hvr':`url( '${ attributes.buttonbackgroundImageHvr?.url }' )`,
	'--backgroundAttachment-hvr': attributes.buttonbackgroundAttachmentHvr,
	'--backgroundPosition-hvr': `${ Math.round( attributes.buttonbackgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
	'--backgroundRepeat-hvr': attributes.buttonbackgroundRepeatHvr,
	'--backgroundSize-hvr': attributes.buttonbackgroundSizeHvr
		};
	
	}

  if ( 'gradient' === attributes.buttonbackgroundTypeHvr ) {	
	backgroundStyleButton = {...backgroundStyleButton,
			'--backgroundImage-hvr': attributes.buttonbackgroundGradientHvr
		};
	}

	let borderStyleButton;
 
   borderStyleButton = {
	 '--border-style':attributes.buttonborderType,
	 '--border-color':attributes.buttonborderColor,
	 '--border-style-hvr':attributes.buttonborderHvrType,
	 '--border-color-hvr':attributes.buttonborderColorHvr,
   };

   let boxShadowStyleButton = {};
 
	 if ( attributes.buttonboxShadow ) {
		boxShadowStyleButton = {
			 '--boxShadow': `${ attributes.buttonboxShadowHorizontal }px ${ attributes.buttonboxShadowVertical }px ${ attributes.buttonboxShadowBlur }px ${ attributes.buttonboxShadowSpread }px ${ hexToRgba( ( attributes.buttonboxShadowColor ? attributes.buttonboxShadowColor : '#fff' ), attributes.buttonboxShadowColorOpacity ) }`
		 };
	 }
 
	 let colorStyleButton;
 
	 colorStyleButton = {
	   '--color':attributes.buttonColor,
	   '--color-hvr':attributes.buttonColorHvr,
	 };


	const buttonStyle = omitBy({
		'--font-family': attributes.fontFamily || undefined,
		'--font-weight': 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
		'--font-style': attributes.fontStyle || undefined,
		'--text-transform': attributes.textTransform || undefined,
		...backgroundStyleButton,
		...borderStyleButton,
		...boxShadowStyleButton,
		...colorStyleButton,
		...buttonFullWidth,
		...buttonStyleSheet,
	  }, x => x?.includes?.( 'undefined' ));

	const blockPropsButton = {
		className: 'th-button th-button-inside',
		style: buttonStyle
};
		return (
			<>
			<Controls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<InsSettings
    		attributes={ attributes }
    		setAttributes={ setAttributes }
    		/>
			<div  { ...blockProps }>
				<div { ...blockPropsButton }>
					<span dangerouslySetInnerHTML={ { __html: sanitizeSVG( attributes.icon ) } } />
					<RichText
						tagName="span" // The tag here is the element output and editable in the admin
						value={ attributes.content } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
						placeholder={ __( 'Button...','vayu-blocks' ) } // Display this text before any content has been added by the user
					/>
				</div>
			</div>
			
			</>
        );
}
