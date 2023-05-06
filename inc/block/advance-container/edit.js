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
			const { id , useInnerContainer, isSelected} = attributes;

			if ( ! id ) {
			setAttributes( { id: clientId } );
			}

			let containerClasses = classnames({
				[`${attributes.contentWidthType}-content`]: true,
			  });
            
			const verticalAlignValues = {
				top: 'flex-start',
				center: 'center',
				bottom: 'flex-end'
			};

			let containerStyles = {
				maxWidth: attributes.fullcontentWidth + attributes.fullcontentWidthUnit,
			};  

			const style = omitBy({
				...containerStyles,	
			}, x => x?.includes?.( 'undefined' ));

			if ( attributes.verticalAlign ) {
				style.alignItems = verticalAlignValues[ attributes.verticalAlign ];
			}
			
			const blockProps = useBlockProps({
				id: attributes.id,
				className:containerClasses,
				style
			});

   
			const innerBlocksProps = useInnerBlocksProps(
				! useInnerContainer
					? blockProps
					: { className: 'th-inside-container' },
				{
					templateLock:false,
					renderAppender: () => <BlockAppender clientId={ attributes.id } isSelected={ isSelected } attributes={ attributes } />,
				}
			);

			const containerBlockProps = useInnerContainer ? blockProps : innerBlocksProps;

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
			   <Tag { ...containerBlockProps }>
			    <div { ...innerBlocksProps }>{ innerBlocksProps.children }</div>
			  </Tag>
			</Fragment>			
	 );

}