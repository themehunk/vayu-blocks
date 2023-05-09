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
import { applyFilters, doAction } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { useViewportMatch } from '@wordpress/compose';

import { InnerBlocks, useBlockProps , useInnerBlocksProps } from '@wordpress/block-editor';
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
			const { id , useInnerContainer, isSelected } = attributes;
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

			function getInnerBlocksCount(clientId) {
				const block = useSelect((select) => {
				  return select('core/block-editor').getBlock(clientId);
				});
			  
				return block ? block.innerBlocks.length : 0;
			}

			const InnerBlocksCount = getInnerBlocksCount( clientId );

			const hasChildBlocks = 0 < getInnerBlocksCount;

			let containerClasses = classnames({
				
				[`${attributes.contentWidthType}-content`]: true,

			  });
            
			const verticalAlignValues = {
				top: 'flex-start',
				center: 'center',
				bottom: 'flex-end'
			};

			//outside container
            let containerStyles;
			//inside container
			let insidecontainerStyles
			let flexcontainerStyles
			let backgroundStyle;

			if ( 'color' === attributes.backgroundType ) {
				backgroundStyle = {
					'--background': attributes.backgroundColor,
					'--background-color-hover': attributes.backgroundColorHvr
				};
			}

			if ( 'image' === attributes.backgroundType ) {
				backgroundStyle = {
					'--background-image': `url( '${ attributes.backgroundImage?.url }' )`,
					'--background-attachment': attributes.backgroundAttachment,
					'--background-position': `${ Math.round( attributes.backgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
					'--background-repeat': attributes.backgroundRepeat,
					'--background-size': attributes.backgroundSize
				};
			}

			if ( 'gradient' === attributes.backgroundType ) {
				backgroundStyle = {
					backgroundImage: attributes.backgroundGradient
				};
			}

			if ( isDesktop ) {

				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = {
						maxWidth: attributes.fullcontentWidth + attributes.fullcontentWidthUnit,
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
				
			}

			if ( isTablet ) {
                
				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = {
						maxWidth: attributes.fullcontentWidthTablet + attributes.fullcontentWidthUnit,
					}; 
	
				}

				if ( attributes.contentMinHgtTablet ) {
					style.minHeight = attributes.contentMinHgtTablet + attributes.contentMinHgtUnit;
				}

				if(attributes.contentWidthType=='boxed'){
					insidecontainerStyles = {
						maxWidth: attributes.boxedcontentWidthTablet  + attributes.boxedcontentWidthUnit,
						marginLeft:'auto',
						marginRight:'auto',
					}; 
				}

			}

			if ( isMobile ) {

				if(attributes.contentWidthType=='fullwidth'){

					containerStyles = {
						maxWidth: attributes.fullcontentWidthMobile + attributes.fullcontentWidthUnit,
					}; 
	
				}

				if ( attributes.contentMinHgtMobile ) {
					style.minHeight = attributes.contentMinHgtMobile + attributes.contentMinHgtUnit;
				}

				if(attributes.contentWidthType=='boxed'){
					insidecontainerStyles = {
						maxWidth: attributes.boxedcontentWidthMobile  + attributes.boxedcontentWidthUnit,
						marginLeft:'auto',
						marginRight:'auto',
					}; 
				}

			}

			if ( attributes.verticalAlign ) {
				insidecontainerStyles = {...insidecontainerStyles, alignItems: verticalAlignValues[ attributes.verticalAlign ]};
			}

			const style = omitBy({
				...containerStyles,
				...backgroundStyle,
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

			const innerBlocksProps = useInnerBlocksProps(
				{   
					style: innerstyle,
					className: 'th-inside-container th-con',
					templateLock:false,
					renderAppender: () => <BlockAppender clientId={ attributes.id } isSelected={ isSelected } attributes={ attributes } />,
				}
			);

			const containerBlockProps = blockProps;

			const Tag = attributes.containerHTMLTag;

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
			   <Tag { ...containerBlockProps } >
			   <div { ...innerBlocksProps } >{ innerBlocksProps.children }</div>
			   </Tag>
			   </Fragment>			
	        );

}