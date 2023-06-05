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
import { RichText, useBlockProps } from '@wordpress/block-editor';

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

import Controls from './controls.js';
import InsSettings from './settings.js';
import getUniqueId from '../../../src/helpers/get-unique-id.js';

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

	const { id } = attributes;

	const { addUniqueID } = useDispatch( 'themehunk-blocks/data' );
	
	const { isUniqueID, isUniqueBlock} = useSelect(
				( select ) => {
					return {
						isUniqueID: ( value ) => select( 'themehunk-blocks/data' ).isUniqueID( value ),
						isUniqueBlock: ( value, clientId ) => select( 'themehunk-blocks/data' ).isUniqueBlock( value, clientId ),
						
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
	let buttonWrapperStyle;

	let iconPositionStyle;

	let stylesheet;

	if(attributes.iconPosition == 'before'){
		iconPositionStyle = {
			'--order': 5,
		  };
	}
	else{
		iconPositionStyle = {
			'--order': 15,
		  };
	}
	
	if(isDesktop){
		buttonWrapperStyle = {
	  	'--justify-content': attributes.align,

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
		
		'--border-style':attributes.borderType,
		'--border-color':attributes.borderColor,
		'--border-style-hvr':attributes.borderHvrType,
		'--border-color-hvr':attributes.borderColorHvr,
	}
	}

	if(isTablet){
		buttonWrapperStyle = {
			'--justify-content': attributes.alignTablet,
		}
	}

	if(isMobile){
		buttonWrapperStyle = {
			'--justify-content': attributes.alignMobile,
		}
	}

	const style = { 
		...customwidth,
		...iconPositionStyle,
		...buttonWrapperStyle,
	}


	const blockProps = useBlockProps({
			id: attributes.id,
			className: 'th-button-wrapper',
			style: style
	});

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
				<div className='th-button-inside'>
					<span dangerouslySetInnerHTML={ { __html: sanitizeSVG( attributes.icon ) } } />
					<RichText
						tagName="span" // The tag here is the element output and editable in the admin
						value={ attributes.content } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
						placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
					/>
				</div>
			</div>
			
			</>
        );
}
