/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { omitBy } from 'lodash';
import hexToRgba from 'hex-rgba';
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
			fontSize:  attributes.fontSize + attributes.fontSizeUnit,
			zIndex:   attributes.zindex,
			lineHeight: ( 3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight ) || undefined,
		    letterSpacing: attributes.letterSpacing && `${ attributes.letterSpacing }${ attributes.letterSpacingUnit }`,
			paddingTop: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
			paddingRight: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
			paddingBottom: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
			paddingLeft: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
			marginTop: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
			marginBottom: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
		    
			
		    borderTopWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTop }${ attributes.borderWidthUnit }`,
		    borderBottomWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottom }${ attributes.borderWidthUnit }`,
		    borderRightWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRight }${ attributes.borderWidthUnit }`,
		    borderLeftWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeft }${ attributes.borderWidthUnit }`,
		    borderTopRightRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTop }${ attributes.borderRadiusUnit }`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRight }${ attributes.borderRadiusUnit }`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeft }${ attributes.borderRadiusUnit }`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottom }${ attributes.borderRadiusUnit }`,
		};
	}

    if ( isTablet ) {
		
		stylesheet = {
			textAlign: attributes.alignTablet,
			fontSize:  attributes.fontSizeTablet + attributes.fontSizeUnit,
			zIndex:   attributes.zindexTablet,
			lineHeight: ( 3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet ) || undefined,
		    letterSpacing: attributes.letterSpacingTablet && `${ attributes.letterSpacingTablet }${ attributes.letterSpacingUnit }`,
		    paddingTop: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
			paddingRight: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
			paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
			paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,
			marginTop: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
			marginBottom: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
			
            borderTopWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopTablet }${ attributes.borderWidthUnit }`,
		    borderBottomWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomTablet }${ attributes.borderWidthUnit }`,
		    borderRightWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightTablet }${ attributes.borderWidthUnit }`,
		    borderLeftWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftTablet }${ attributes.borderWidthUnit }`,
			borderTopRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopTablet }${ attributes.borderRadiusUnit }`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightTablet }${ attributes.borderRadiusUnit }`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftTablet }${ attributes.borderRadiusUnit }`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomTablet }${ attributes.borderRadiusUnit }`,
		};
	}
    
    if ( isMobile ) {

        stylesheet = {
			textAlign: attributes.alignMobile,
			fontSize:  attributes.fontSizeMobile + attributes.fontSizeUnit,
			zIndex:   attributes.zindexMobile,
			lineHeight: ( 3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile ) || undefined,
		    letterSpacing: attributes.letterSpacingMobile && `${ attributes.letterSpacingMobile }${ attributes.letterSpacingUnit }`,
		    paddingTop: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
			paddingRight: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
			paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
			paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,
			marginTop: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
			marginBottom: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
	        borderTopWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthTopMobile }${ attributes.borderWidthUnit }`,
		    borderBottomWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthBottomMobile }${ attributes.borderWidthUnit }`,
		    borderRightWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthRightMobile }${ attributes.borderWidthUnit }`,
		    borderLeftWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }${ attributes.borderWidthUnit }` : `${ attributes.borderWidthLeftMobile }${ attributes.borderWidthUnit }`,
			borderTopRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusTopMobile }${ attributes.borderRadiusUnit }`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusRightMobile }${ attributes.borderRadiusUnit }`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusLeftMobile }${ attributes.borderRadiusUnit }`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }${ attributes.borderRadiusUnit }` : `${ attributes.borderRadiusBottomMobile }${ attributes.borderRadiusUnit }`,
		};

    }

	let customwidth;

    if( attributes.widthType=='customwidth' ) {

		if ( isDesktop ) {

		customwidth = {
             
			width:attributes.customWidth + attributes.customWidthUnit,
			maxWidh:attributes.customWidth + attributes.customWidthUnit,
			
		};

	   }

	   if ( isTablet ) {

		customwidth = {
             
			width:attributes.customWidthTablet + attributes.customWidthUnit,
			maxWidh:attributes.customWidthTablet + attributes.customWidthUnit,
			
		};

	   }

	   if ( isMobile ) {

		customwidth = {
             
			width:attributes.customWidthMobile + attributes.customWidthUnit,
			maxWidh:attributes.customWidthMobile + attributes.customWidthUnit,
			
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
			boxShadow: `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${ hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#fff' ), attributes.boxShadowColorOpacity ) }`
		};
	}

    let transitionHeadingStyle = {};

	if ( attributes.transitionHeading ) {
			transitionHeadingStyle ={
				transition:`color ${ attributes.transitionHeading }s`,
				WebkitTransition:`color ${ attributes.transitionHeading }s`,
				MozTransition:`color ${ attributes.transitionHeading }s`,
				OTransition:`color ${ attributes.transitionHeading }s`,
			};
	}

	let transitionBorderStyle = {};

	if ( attributes.transitionBorder ) {
		transitionBorderStyle ={
				transition:` border ${ attributes.transitionBorder }s`,
				WebkitTransition:` border ${ attributes.transitionBorder }s`,
				MozTransition:` border ${ attributes.transitionBorder }s`,
				OTransition:` border ${ attributes.transitionBorder }s`,
				
			};
	}
	let transitionBackgroundStyle = {};
	if ( attributes.transitionBackground ) {
		transitionBackgroundStyle ={
				transition:` background ${ attributes.transitionBackground }s`,
				WebkitTransition:` background ${ attributes.transitionBackground }s`,
				MozTransition:` background ${ attributes.transitionBackground }s`,
				OTransition:` background ${ attributes.transitionBackground }s`,
				
			};
	}

	let backgroundStyle = {};

	if ( 'color' === attributes.backgroundType ) {
		backgroundStyle = {
			backgroundColor: attributes.backgroundColor
		};
	}

	if ( 'image' === attributes.backgroundType ) {
		backgroundStyle = {
			backgroundImage: `url( '${ attributes.backgroundImage?.url }' )`,
			backgroundAttachment: attributes.backgroundAttachment,
			backgroundPosition: `${ Math.round( attributes.backgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
			backgroundRepeat: attributes.backgroundRepeat,
			backgroundSize: attributes.backgroundSize
		};
	}

	if ( 'gradient' === attributes.backgroundType ) {
		backgroundStyle = {
			backgroundImage: attributes.backgroundGradient
		};
	}

	

    const style = omitBy({
		color: attributes.headingColor,
		fontFamily: attributes.fontFamily || undefined,
		fontWeight: 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
		fontStyle: attributes.fontStyle || undefined,
		textTransform: attributes.textTransform || undefined,
		borderStyle:attributes.borderType,
		borderColor:attributes.borderColor,
        ...stylesheet,
		...customwidth,
		...boxShadowStyle,
		...transitionHeadingStyle,
		...transitionBorderStyle,
		...transitionBackgroundStyle,
		...backgroundStyle,
		
    }, x => x?.includes?.( 'undefined' ));

	useEffect( () => {
		if ( attributes.fontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.fontFamily, attributes.fontVariant );
		}
	}, [ attributes.fontFamily ]);


    const onMouseEnter = (e) => {

			e.target.style.color = attributes.headingHvrColor;
			e.target.style.borderColor = attributes.borderColorHvr;
			e.target.style.borderStyle = attributes.borderHvrType;
			e.target.style.boxShadow = `${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${ hexToRgba( ( attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff' ), attributes.boxShadowColorOpacityHvr ) }`;
			
            if ( 'color' === attributes.backgroundType ) {
			e.target.style.backgroundColor = attributes.backgroundColorHvr;	
			}

			if ( 'image' === attributes.backgroundType ) {
				e.target.style.backgroundImage =`url( '${ attributes.backgroundImageHvr?.url }' )`,
				e.target.style.backgroundAttachment = attributes.backgroundAttachmentHvr,
				e.target.style.backgroundPosition = `${ Math.round( attributes.backgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
				e.target.style.backgroundRepeat = attributes.backgroundRepeatHvr,
				e.target.style.backgroundSize = attributes.backgroundSizeHvr

			}

			if ( 'gradient' === attributes.backgroundType ) {	
			e.target.style.backgroundImage =  attributes.backgroundGradientHvr;
			}

			if ( isDesktop ) {
				e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }px` : `${ attributes.borderWidthHvrTop }px`;
			    e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }px` : `${ attributes.borderWidthHvrBottom }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }px` : `${ attributes.borderWidthHvrRight }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrType ? `${ attributes.borderWidthHvr }px` : `${ attributes.borderWidthHvrLeft }px`;
				e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }px` : `${ attributes.borderRadiusHvrTop }px`;
				e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }px` : `${ attributes.borderRadiusHvrRight }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }px` : `${ attributes.borderRadiusHvrLeft }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${ attributes.borderRadiusHvr }px` : `${ attributes.borderRadiusHvrBottom }px`;
			}   
			if ( isTablet ) {
                e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }px` : `${ attributes.borderWidthHvrTopTablet }px`;
			    e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }px` : `${ attributes.borderWidthHvrBottomTablet }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }px` : `${ attributes.borderWidthHvrRightTablet }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${ attributes.borderWidthHvrTablet }px` : `${ attributes.borderWidthHvrLeftTablet }px`;
			    e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }px` : `${ attributes.borderRadiusHvrTopTablet }px`;
				e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }px` : `${ attributes.borderRadiusHvrRightTablet }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }px` : `${ attributes.borderRadiusHvrLeftTablet }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${ attributes.borderRadiusHvrTablet }px` : `${ attributes.borderRadiusHvrBottomTablet }px`;
			}
			if ( isMobile ) {
				e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }px` : `${ attributes.borderWidthHvrTopMobile }px`;
			    e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }px` : `${ attributes.borderWidthHvrBottomMobile }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }px` : `${ attributes.borderWidthHvrRightMobile }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${ attributes.borderWidthHvrMobile }px` : `${ attributes.borderWidthHvrLeftMobile }px`;
                e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }px` : `${ attributes.borderRadiusHvrTopMobile }px`;
				e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }px` : `${ attributes.borderRadiusHvrRightMobile }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }px` : `${ attributes.borderRadiusHvrLeftMobile }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${ attributes.borderRadiusHvrMobile }px` : `${ attributes.borderRadiusHvrBottomMobile }px`;
			}
	}
	
	const onMouseLeave = (e) => {

			e.target.style.color = attributes.headingColor;
			e.target.style.borderColor = attributes.borderColor;
			e.target.style.borderStyle = attributes.borderType;
			e.target.style.boxShadow = `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${ hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#fff' ), attributes.boxShadowColorOpacity ) }`
            if ( 'color' === attributes.backgroundType ) {
				e.target.style.backgroundColor = attributes.backgroundColor;	
				}
	
				if ( 'image' === attributes.backgroundType ) {
					e.target.style.backgroundImage =`url( '${ attributes.backgroundImage?.url }' )`,
					e.target.style.backgroundAttachment = attributes.backgroundAttachment,
					e.target.style.backgroundPosition = `${ Math.round( attributes.backgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
					e.target.style.backgroundRepeat = attributes.backgroundRepeat,
					e.target.style.backgroundSize = attributes.backgroundSize
	
				}
	
				if ( 'gradient' === attributes.backgroundType ) {	
				e.target.style.backgroundImage =  attributes.backgroundGradient;
				}
			if ( isDesktop ) {
				e.target.style.borderTopWidth = 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthTop }px`;
			    e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthBottom }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthRight }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthLeft }px`;
			    e.target.style.borderTopRightRadius =  'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusTop }px`;
				e.target.style.borderTopLeftRadius =  'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusRight }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusLeft }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusBottom }px`;
			}
			if ( isTablet ) {

				e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthTopTablet }px`,
                e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthBottomTablet }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthRightTablet }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthLeftTablet }px`;
				e.target.style.borderTopRightRadius =  'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusTopTablet }px`;
				e.target.style.borderTopLeftRadius =  'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusRightTablet }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusLeftTablet }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusBottomTablet }px`;
			}
			if ( isMobile ) {
				e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthTopMobile }px`,
                e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthBottomMobile }px`;
			    e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthRightMobile }px`;
			    e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthLeftMobile }px`;
				e.target.style.borderTopRightRadius =  'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusTopMobile }px`;
				e.target.style.borderTopLeftRadius =  'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusRightMobile }px`;
				e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusLeftMobile }px`;
				e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusBottomMobile }px`;
			}
	}

    const blockProps = useBlockProps({
		id: attributes.id,
		style,
		onMouseEnter,
		onMouseLeave
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