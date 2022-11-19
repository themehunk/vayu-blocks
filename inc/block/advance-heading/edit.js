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
		    borderTopWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthTop }px`,
		    borderBottomWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthBottom }px`,
		    borderRightWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthRight }px`,
		    borderLeftWidth: 'linked' === attributes.borderWidthType ? `${ attributes.borderWidth }px` : `${ attributes.borderWidthLeft }px`,
		    borderTopRightRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusTop }px`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusRight }px`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusLeft }px`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusType ? `${ attributes.borderRadius }px` : `${ attributes.borderRadiusBottom }px`,
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
            borderTopWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthTopTablet }px`,
		    borderBottomWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthBottomTablet }px`,
		    borderRightWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthRightTablet }px`,
		    borderLeftWidth: 'linked' === attributes.borderWidthTypeTablet ? `${ attributes.borderWidthTablet }px` : `${ attributes.borderWidthLeftTablet }px`,
			borderTopRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusTopTablet }px`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusRightTablet }px`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusLeftTablet }px`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${ attributes.borderRadiusTablet }px` : `${ attributes.borderRadiusBottomTablet }px`,
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
	        borderTopWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthTopMobile }px`,
		    borderBottomWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthBottomMobile }px`,
		    borderRightWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthRightMobile }px`,
		    borderLeftWidth: 'linked' === attributes.borderWidthTypeMobile ? `${ attributes.borderWidthMobile }px` : `${ attributes.borderWidthLeftMobile }px`,
			borderTopRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusTopMobile }px`,
		    borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusRightMobile }px`,
		    borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusLeftMobile }px`,
		    borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${ attributes.borderRadiusMobile }px` : `${ attributes.borderRadiusBottomMobile }px`,
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