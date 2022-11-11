/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { omitBy } from 'lodash';
import {
	createBlock,
	getDefaultBlockName
} from '@wordpress/blocks';
/**
 * Internal dependencies
 */
 import metadata from './block.json';
 import Controls from './controls.js';
 import InsSettings from './settings.js';
 import googleFontsLoader from '../../../src/helpers/google-fonts.js';
 import './editor.scss';
import { Flex } from '@wordpress/components';

export default function Edit({ attributes, setAttributes,clientId }) {

	useEffect( () => {
		googleFontsLoader.attach();
	}, [ attributes.id ]);

	const { id } = attributes;

	if ( ! id ) {
        setAttributes( { id: clientId } );
    }

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
    
    if ( isDesktop ) {

		stylesheet = {
			textAlign: attributes.align,
			fontSize:  attributes.fontSize,
			zIndex:   attributes.zindex,
			lineHeight: ( 3 < attributes.lineHeight ? attributes.lineHeight + 'px' : attributes.lineHeight ) || undefined,
		    letterSpacing: attributes.letterSpacing && `${ attributes.letterSpacing }px`,
			paddingTop: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingTop }px`,
			paddingRight: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingRight }px`,
			paddingBottom: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingBottom }px`,
			paddingLeft: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingLeft }px`,
			marginTop: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginTop }px`,
			marginBottom: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginBottom }px`,
		    marginRight: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginRight }px`,
			marginLeft: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginLeft }px`,
			
		};
	}

    if ( isTablet ) {
		
		stylesheet = {
			textAlign: attributes.alignTablet,
			fontSize:  attributes.fontSizeTablet,
			zIndex:   attributes.zindexTablet,
			lineHeight: ( 3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + 'px' : attributes.lineHeightTablet ) || undefined,
		    letterSpacing: attributes.letterSpacingTablet && `${ attributes.letterSpacingTablet }px`,
		    paddingTop: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingTopTablet }px`,
			paddingRight: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingRightTablet }px`,
			paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingBottomTablet }px`,
			paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingLeftTablet }px`,
			marginTop: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginTopTablet }px`,
			marginBottom: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginBottomTablet }px`,
			marginRight: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginRightTablet }px`,
			marginLeft: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginLeftTablet }px`,
		    width:attributes.customWidthTablet,
			maxWidh:attributes.customWidthTablet,
		};
	}
    
    if ( isMobile ) {

        stylesheet = {
			textAlign: attributes.alignMobile,
			fontSize:  attributes.fontSizeMobile,
			zIndex:   attributes.zindexMobile,
			lineHeight: ( 3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + 'px' : attributes.lineHeightMobile ) || undefined,
		    letterSpacing: attributes.letterSpacingMobile && `${ attributes.letterSpacingMobile }px`,
		    paddingTop: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingTopMobile }px`,
			paddingRight: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingRightMobile }px`,
			paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingBottomMobile }px`,
			paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingLeftMobile }px`,
			marginTop: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginTopMobile }px`,
			marginBottom: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginBottomMobile }px`,
		    marginRight: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginRightMobile }px`,
			marginLeft: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginLeftMobile }px`,
		    width:attributes.customWidthMobile,
			maxWidh:attributes.customWidthMobile,
		};

    }

	let customwidth;

    if( attributes.widthType=='customwidth' ) {

		if ( isDesktop ) {

		customwidth = {
             
			width:attributes.customWidth,
			maxWidh:attributes.customWidth,
			
		};

	   }

	   if ( isTablet ) {

		customwidth = {
             
			width:attributes.customWidthTablet,
			maxWidh:attributes.customWidthTablet,
			
		};

	   }

	   if ( isMobile ) {

		customwidth = {
             
			width:attributes.customWidthMobile,
			maxWidh:attributes.customWidthMobile,
			
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

    const style = omitBy({
		color: attributes.headingColor,
		fontFamily: attributes.fontFamily || undefined,
		fontWeight: 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
		fontStyle: attributes.fontStyle || undefined,
		textTransform: attributes.textTransform || undefined,
        ...stylesheet,
		...customwidth
    }, x => x?.includes?.( 'undefined' ));

	useEffect( () => {
		if ( attributes.fontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.fontFamily, attributes.fontVariant );
		}
	}, [ attributes.fontFamily ]);
    
    const blockProps = useBlockProps({
		id: attributes.id,
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
                placeholder={ __( 'Write heading…','themehunk-block' ) } // Display this text before any content has been added by the user
                { ...blockProps }
            />
        </Fragment>
	);
}