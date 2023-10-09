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
import { ResizableBox } from '@wordpress/components';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect, useDispatch  } from '@wordpress/data';
import { omitBy } from 'lodash';
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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import InsSettings from './settings.js';
import getUniqueId from '../../helpers/get-unique-id.js';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, toggleSelection, clientId,
	uniqueID }) {

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

const onChangeHeight = ( newHeight ) => {
  setAttributes( { height: newHeight } );
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

	if ( ! id ) {
		setAttributes( { id: clientId } );
		}
		
  let customwidth;
  let stylesheet;
  let PositionProperties;
  let flexProperties;

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

     if ( isDesktop ) {
      stylesheet = {
      '--height':attributes.height + attributes.heightUnit, 
      
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
    
    };

    /********************* */
      // position properies 
		/********************* */
		PositionProperties = { 
			'--position': attributes.position,
		 };

		 	if(attributes.position == 'absolute' || attributes.position == 'fixed'){

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

     }
    
     if ( isTablet ) {
      stylesheet = {
      '--height':attributes.heightTablet + attributes.heightUnit,
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
    };

     // position properties

	 	if(attributes.position == 'absolute' || attributes.position == 'fixed'){
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

     }
    
     if ( isMobile ) {
      stylesheet = {
      '--height':attributes.heightMobile + attributes.heightUnit,
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
    };

    // position properties

	if(attributes.position == 'absolute' || attributes.position == 'fixed'){

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

     }

  if( attributes.widthType =='fullwidth' ) {

    customwidth = {       
      '--width':'100%',
      '--maxWidth-fullwidth':'100%',
      
    };
  }
  
  if( attributes.widthType =='inlinewidth' ) {
    customwidth = {
      '--width':'auto',
      '--display':'inline-flex',
    };
  
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

  let transitionSpacerStyle = {};

	if ( attributes.transitionAll ) {
			transitionSpacerStyle ={
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

  const style = omitBy({
    // backgroundColor: '#090',
      ...borderStyle,
      ...customwidth,
      ...stylesheet,
      ...backgroundStyle,
      ...boxShadowStyle,
      ...PositionProperties,
      ...flexProperties,
      ...transitionSpacerStyle,
  }, x => x?.includes?.( 'undefined' ));



const blockProps = useBlockProps({
  id: attributes.id,
  className:spacerClasses,
  style
});

	return (
    <>
                
    <InsSettings
    attributes={ attributes }
    setAttributes={ setAttributes }
    />
   
   <div {...blockProps}
  >
		<ResizableBox
    
  	enable={{
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false
  }}
  
  size={{
    height:'100%'
  }}


  onResizeStop={(event, direction, elt, delta) => {
    onChangeHeight(attributes.height + delta.height);
    toggleSelection( true );
}}
onResizeStart={ () => {
  toggleSelection( false );
} }


>
 
</ResizableBox>
</div>

</>
        );
}
