/**
 * WordPress dependencies.
 */
 import { __ } from '@wordpress/i18n';

 import {AlignmentToolbar, __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';
 
 import {
     PanelBody,
     RangeControl,
     SelectControl,
	 Placeholder,
	 Spinner,
	 ToggleControl,
 } from '@wordpress/components';
 
 import { useSelect } from '@wordpress/data';
 
 import {
     Fragment,
     useState,
	 Suspense
 } from '@wordpress/element';

 import { pick } from 'lodash';
/**
 * Internal dependencies
 */
import InsSettingHeader from '../../../src/components/ins-setting-header/index.js';
import ResponsiveControl from '../../../src/components/responsive-control/index.js';
import GoogleFontsControl from '../../../src/components/google-fonts-control/index.js';
import ClearButton from '../../../src/components/clear-button/index.js';
import SizingControl from '../../../src/components/sizing-control/index.js';
import HoverControl from '../../../src/components/hover-tab/index.js';
import ControlPanelControl from '../../../src/components/control-panel-control/index.js';
import BackgroundSelectorControl from '../../../src/components/background-selector-control/index.js'; 
import UnitChooser from '../../../src/components/unit-picker/index.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {

    const getView = useSelect( select => {
		const { getView } = select( 'themehunk-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);
    const getAlignment = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.align;
		case 'Tablet':
			return attributes.alignTablet;
		case 'Mobile':
			return attributes.alignMobile;
		default:
			return undefined;
		}
	};
    const changeAlignment = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ align: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ alignTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ alignMobile: value });
		}
	};

    
	const getFontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.fontSize;
		case 'Tablet':
			return attributes.fontSizeTablet;
		case 'Mobile':
			return attributes.fontSizeMobile;
		default:
			return undefined;
		}
	};

	const changeFontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ fontSize: value, fontSizeTablet: value, fontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ fontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ fontSizeMobile: value });
		}
	};


	const getlineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.lineHeight;
		case 'Tablet':
			return attributes.lineHeightTablet;
		case 'Mobile':
			return attributes.lineHeightMobile;
		default:
			return undefined;
		}
	};

	const changelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ lineHeight: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ lineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ lineHeightMobile: value });
		}
	};

 
	const getletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.letterSpacing;
		case 'Tablet':
			return attributes.letterSpacingTablet;
		case 'Mobile':
			return attributes.letterSpacingMobile;
		default:
			return undefined;
		}
	};

	const changeletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ letterSpacing: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ letterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ letterSpacingMobile: value });
		}
	};

	const getPaddingType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.paddingType;
		case 'Tablet':
			return attributes.paddingTypeTablet;
		case 'Mobile':
			return attributes.paddingTypeMobile;
		default:
			return undefined;
		}
	};
	const getMarginType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.marginType;
		case 'Tablet':
			return attributes.marginTypeTablet;
		case 'Mobile':
			return attributes.marginTypeMobile;
		default:
			return undefined;
		}
	};

	const getBorderWidthType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.borderWidthType;
		case 'Tablet':
			return attributes.borderWidthTypeTablet;
		case 'Mobile':
			return attributes.borderWidthTypeMobile;
		default:
			return undefined;
		}
	};

	const getBorderWidthHvrType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.borderWidthHvrType;
		case 'Tablet':
			return attributes.borderWidthHvrTypeTablet;
		case 'Mobile':
			return attributes.borderWidthHvrTypeMobile;
		default:
			return undefined;
		}
	};

	const getBorderRadiusType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.borderRadiusType;
		case 'Tablet':
			return attributes.borderRadiusTypeTablet;
		case 'Mobile':
			return attributes.borderRadiusTypeMobile;
		default:
			return undefined;
		}
	};

	const getBorderRadiusHvrType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.borderRadiusHvrType;
		case 'Tablet':
			return attributes.borderRadiusHvrTypeTablet;
		case 'Mobile':
			return attributes.borderRadiusHvrTypeMobile;
		default:
			return undefined;
		}
	};

	const changePaddingType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ paddingType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ paddingTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ paddingTypeMobile: value });
		}
	};

	const changeMarginType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ marginType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ marginTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ marginTypeMobile: value });
		}
	};

	const changeBorderWidthType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderWidthType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderWidthTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderWidthTypeMobile: value });
		}
	};

	const changeBorderWidthHvrType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderWidthHvrType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderWidthHvrTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderWidthHvrTypeMobile: value });
		}
	};
	const changeBorderRadiusType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderRadiusType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderRadiusTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderRadiusTypeMobile: value });
		}
	};

	const changeBorderRadiusHvrType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderRadiusHvrType: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderRadiusHvrTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderRadiusHvrTypeMobile: value });
		}
	};

	const desktopPaddingType = {
		top: 'paddingTop',
		right: 'paddingRight',
		bottom: 'paddingBottom',
		left: 'paddingLeft'
	};
	const desktopMarginType = {
		top: 'marginTop',
		right: 'marginRight',
		bottom: 'marginBottom',
		left: 'marginLeft'
	};
	const desktopBorderWidthType = {
		top: 'borderWidthTop',
		right: 'borderWidthRight',
		bottom: 'borderWidthBottom',
		left: 'borderWidthLeft'
	};
	const desktopBorderWidthHvrType = {
		top: 'borderWidthHvrTop',
		right: 'borderWidthHvrRight',
		bottom: 'borderWidthHvrBottom',
		left: 'borderWidthHvrLeft'
	};
	const desktopBorderRadiusType = {
		top: 'borderRadiusTop',
		left: 'borderRadiusLeft',
		right: 'borderRadiusRight',
		bottom: 'borderRadiusBottom'
	};
    const desktopBorderRadiusHvrType = {
		top: 'borderRadiusHvrTop',
		right: 'borderRadiusHvrRight',
		bottom: 'borderRadiusHvrBottom',
		left: 'borderRadiusHvrLeft'
	};
	const tabletPaddingType = {
		top: 'paddingTopTablet',
		right: 'paddingRightTablet',
		bottom: 'paddingBottomTablet',
		left: 'paddingLeftTablet'
	};
	const tabletMarginType = {
		top: 'marginTopTablet',
		right: 'margingRightTablet',
		bottom: 'marginBottomTablet',
		left: 'marginLeftTablet'
	};
	const tabletBorderWidthType = {
		top: 'borderWidthTopTablet',
		right: 'borderWidthRightTablet',
		bottom: 'borderWidthBottomTablet',
		left: 'borderWidthLeftTablet'
	};
	const tabletBorderWidthHvrType = {
		top: 'borderWidthHvrTopTablet',
		right: 'borderWidthHvrRightTablet',
		bottom: 'borderWidthHvrBottomTablet',
		left: 'borderWidthHvrLeftTablet'
	};
	const tabletBorderRadiusType = {
		top: 'borderRadiusTopTablet',
		left: 'borderRadiusLeftTablet',
		right: 'borderRadiusRightTablet',
		bottom: 'borderRadiusBottomTablet'
	};
	const tabletBorderRadiusHvrType = {
		top: 'borderRadiusHvrTopTablet',
		right: 'borderRadiusHvrRightTablet',
		bottom: 'borderRadiusHvrBottomTablet',
		left: 'borderRadiusHvrLeftTablet'
	};

	const mobilePaddingType = {
		top: 'paddingTopMobile',
		right: 'paddingRightMobile',
		bottom: 'paddingBottomMobile',
		left: 'paddingLeftMobile'
	};
	const mobileMarginType = {
		top: 'marginTopMobile',
		right: 'marginRightMobile',
		bottom: 'marginBottomMobile',
		left: 'marginLeftMobile'
	};
	const mobileBorderWidthType = {
		top: 'borderWidthTopMobile',
		right: 'borderWidthRightMobile',
		bottom: 'borderWidthBottomMobile',
		left: 'borderWidthLeftMobile'
	};
	const mobileBorderWidthHvrType = {
		top: 'borderWidthHvrTopMobile',
		right: 'borderWidthHvrRightMobile',
		bottom: 'borderWidthHvrBottomMobile',
		left: 'borderWidthHvrLeftMobile'
	};
	const mobileBorderRadiusType = {
		top: 'borderRadiusTopMobile',
		left: 'borderRadiusLeftMobile',
		right: 'borderRadiusRightMobile',
		bottom: 'borderRadiusBottomMobile'
	};
	const mobileBorderRadiusHvrType = {
		top: 'borderRadiusHvrTopMobile',
		right: 'borderRadiusHvrRightMobile',
		bottom: 'borderRadiusHvrBottomMobile',
		left: 'borderRadiusHvrLeftMobile'
	};

	const changePadding = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.paddingType ) {
				setAttributes({ padding: value });
			} else {
				setAttributes({ [desktopPaddingType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.paddingTypeTablet ) {
				setAttributes({ paddingTablet: value });
			} else {
				setAttributes({ [tabletPaddingType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.paddingTypeMobile ) {
				setAttributes({ paddingMobile: value });
			} else {
				setAttributes({ [mobilePaddingType[type]]: value });
			}
			break;
		}
	};

	const changeMargin = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.marginType ) {
				setAttributes({ margin: value });
			} else {
				setAttributes({ [desktopMarginType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.marginTypeTablet ) {
				setAttributes({ marginTablet: value });
			} else {
				setAttributes({ [tabletMarginType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.marginTypeMobile ) {
				setAttributes({ marginMobile: value });
			} else {
				setAttributes({ [mobileMarginType[type]]: value });
			}
			break;
		}
	};

	const changeBorderWidth = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderWidthType ) {
				setAttributes({ borderWidth: value });
			} else {
				setAttributes({ [desktopBorderWidthType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.borderWidthTypeTablet ) {
				setAttributes({ borderWidthTablet: value });
			} else {
				setAttributes({ [tabletBorderWidthType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.borderWidthTypeMobile ) {
				setAttributes({ borderWidthMobile: value });
			} else {
				setAttributes({ [mobileBorderWidthType[type]]: value });
			}
			break;
		}
	};

	const changeBorderWidthHvr = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderWidthHvrType ) {
				setAttributes({ borderWidthHvr: value });
			} else {
				setAttributes({ [desktopBorderWidthHvrType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.borderWidthHvrTypeTablet ) {
				setAttributes({ borderWidthHvrTablet: value });
			} else {
				setAttributes({ [tabletBorderWidthHvrType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.borderWidthHvrTypeMobile ) {
				setAttributes({ borderWidthHvrMobile: value });
			} else {
				setAttributes({ [mobileBorderWidthHvrType[type]]: value });
			}
			break;
		}
	};

	const changeBorderRadius = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderRadiusType ) {
				setAttributes({ borderRadius: value });
			} else {
				setAttributes({ [desktopBorderRadiusType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.borderRadiusTypeTablet ) {
				setAttributes({ borderRadiusTablet: value });
			} else {
				setAttributes({ [tabletBorderRadiusType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.borderRadiusTypeMobile ) {
				setAttributes({ borderRadiusMobile: value });
			} else {
				setAttributes({ [mobileBorderRadiusType[type]]: value });
			}
			break;
		}
	};

	const changeBorderRadiusHvr = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderRadiusHvrType ) {
				setAttributes({ borderRadiusHvr: value });
			} else {
				setAttributes({ [desktopBorderRadiusHvrType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.borderRadiusHvrTypeTablet ) {
				setAttributes({ borderRadiusHvrTablet: value });
			} else {
				setAttributes({ [tabletBorderRadiusHvrType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.borderRadiusHvrTypeMobile ) {
				setAttributes({ borderRadiusHvrMobile: value });
			} else {
				setAttributes({ [mobileBorderRadiusHvrType[type]]: value });
			}
			break;
		}
	};

	const getPadding = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingTop;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingTopTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingRight;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingRightTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingBottom;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingLeft;
			case 'Tablet':
				return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingLeftMobile;
			}
		}

		return undefined;
	};


	const getMargin = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginTop;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginTopTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginRight;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginRightTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginBottom;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.marginType ? attributes.margin : attributes.marginLeft;
			case 'Tablet':
				return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginLeftMobile;
			}
		}

		return undefined;
	};
	const getBorderWidth = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthTop;
			case 'Tablet':
				return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthTopTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthRight;
			case 'Tablet':
				return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthRightTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthBottom;
			case 'Tablet':
				return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthLeft;
			case 'Tablet':
				return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthLeftMobile;
			}
		}

		return undefined;
	};

	const getBorderWidthHvr = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrTop;
			case 'Tablet':
				return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrTopTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrRight;
			case 'Tablet':
				return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrRightTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrBottom;
			case 'Tablet':
				return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrLeft;
			case 'Tablet':
				return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrLeftMobile;
			}
		}

		return undefined;
	};

	const getBorderRadius = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusTop;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusTopTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusTopMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusLeft;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusLeftMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusRight;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusRightTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusBottom;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusBottomMobile;
			}
		}

		return undefined;
	};

	const getBorderRadiusHvr = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrTop;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrTopTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrRight;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrRightTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrBottom;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrLeft;
			case 'Tablet':
				return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrLeftMobile;
			}
		}

		return undefined;
	};

	const changeFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				fontFamily: value,
				fontVariant: value
			});
		} else {
			setAttributes({
				fontFamily: value,
				fontVariant: 'normal',
				fontStyle: 'normal'
			});
		}
	};

	const getCustomWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.customWidth;
		case 'Tablet':
			return attributes.customWidthTablet;
		case 'Mobile':
			return attributes.customWidthMobile;
		default:
			return undefined;
		}
	};

	const changeCustomWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ customWidth: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ customWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ customWidthMobile: value });
		}
	};

	const getZindex = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.zindex;
		case 'Tablet':
			return attributes.zindexTablet;
		case 'Mobile':
			return attributes.zindexMobile;
		default:
			return undefined;
		}
	};

	const changeZindex = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ zindex: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ zindexTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ zindexMobile: value });
		}
	};
    
	const customTooltipFontsize = value => `${value}${attributes.fontSizeUnit}`
	const customTooltiplineHeight = value => `${value}`
	const customTooltipletterSpacing = value => `${value}px`
	const customTooltipCustomWidth = value => `${value}px`
	const customTooltipZindex = value => `${value}px`
	const customTooltiptransitionHeading = value => `${value}`
    const customTooltiptransitionBorder = value => `${value}`
	const customTooltiptransitionBackground = value => `${value}`
	const [ tab, setTab ] = useState( 'style' );
    const [ hover, setHover ] = useState( 'normal' );

    return (
    <Fragment>
        <InspectorControls>
            <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Style', 'themehunk-block' ),
							value: 'style'
						},
						{
							label: __( 'Advanced', 'themehunk-block' ),
							value: 'advanced'
						}
					]}
					onChange={ setTab }
            />

            {'style' === tab && (

                <Fragment>

                 <PanelBody title={ __( 'General', 'themehunk-block' ) }
							className="th-adv-h-panel"
						>

				<HoverControl value={ hover }
					options={[
						{
							label: __( 'Normal', 'themehunk-block' ),
							value: 'normal'
						},
						{
							label: __( 'Hover', 'themehunk-block' ),
							value: 'hover'
						}
					]}
					onChange={ setHover } />
						
				{ 'normal' ===  hover &&  (	
						
				<ColorGradientControl
								label={ __( 'Heading Color', 'themehunk-block' ) }
								colorValue={ attributes.headingColor }
								onColorChange={ e => setAttributes({ headingColor: e }) }
							/>	
			 

				) || 'hover' ===  hover && (
			    <>
				<ColorGradientControl
					label={ __( 'Heading Hover Color', 'themehunk-block' ) }
					colorValue={ attributes.headingHvrColor }
					onColorChange={ e => setAttributes({ headingHvrColor: e }) }
				/>

			
				<RangeControl
							    label={ __( 'Transition Duration', 'themehunk-block' ) }
							    renderTooltipContent={ customTooltiptransitionHeading }
								value={ attributes.transitionHeading }
								onChange={ transitionHeading => setAttributes({ transitionHeading }) }
								step={ 0.1 }
								min={ 0 }
								max={ 3 }
								allowReset={ true }
				/>
		
				</>
				
	
				) }
			
			
                <ResponsiveControl label={ __( 'Alignment', 'themehunk-block' ) } >
                <AlignmentToolbar
									value={ getAlignment() }
									onChange={ changeAlignment }
									isCollapsed={ false }
								/> 
                </ResponsiveControl>     

                </PanelBody>
				<PanelBody title={ __( 'Typographgy', 'themehunk-block' ) }
							className="th-adv-h-panel"
						>	
						<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.fontFamily }
								onChangeFontFamily={ changeFontFamily }
								valueVariant={ attributes.fontVariant }
								onChangeFontVariant={ fontVariant => setAttributes({ fontVariant }) }
								valueStyle={ attributes.fontStyle }
								onChangeFontStyle={ fontStyle => setAttributes({ fontStyle }) }
								valueTransform={ attributes.textTransform }
								onChangeTextTransform={ textTransform => setAttributes({ textTransform }) }
							/>
						<ClearButton
								values={[ 'fontFamily', 'fontVariant', 'fontStyle', 'textTransform' ]}
								setAttributes={ setAttributes }
							/>	
						<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							>    
							   <UnitChooser
								value={ attributes.fontSizeUnit }
								onClick={ ( unit ) => setAttributes( { fontSizeUnit: unit } ) }
								units={ [ 'px', 'em', '%' ] }
						       />
								<RangeControl
								    renderTooltipContent={ customTooltipFontsize }
									value={ getFontSize() || '' }
									onChange={ changeFontSize }
									step={ 0.1 }
									min={ 1 }
									max={ 500 }
									allowReset={ true }
								/>		
						</ResponsiveControl>

						<ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							>
							<RangeControl
							    renderTooltipContent={ customTooltiplineHeight }
								value={ getlineHeight() || '' }
								onChange={ changelineHeight }
								step={ 0.1 }
								min={ 0 }
								max={ 3 }
								allowReset={ true }
							/>
						</ResponsiveControl>

						<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							>
							<RangeControl
							    renderTooltipContent={ customTooltipletterSpacing }
								value={ getletterSpacing() || '' }
								onChange={ changeletterSpacing }
								step={ 0.1 }
								min={ -50 }
								max={ 100 }
								allowReset={ true }
							/>
						</ResponsiveControl>	   

                </PanelBody>

                </Fragment>

            ) || 'advanced' === tab && (

            <Fragment>
				<PanelBody
					title={ __( 'Layout', 'themehunk-block' ) }
					initialOpen={ false }
				>           
				            <SelectControl
								label={ __( 'Width', 'themehunk-block' ) }
								value={ attributes.widthType }
								options={ [
									{ label:  __( 'Default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'Full Width(100%)', 'themehunk-block' ), value: 'fullwidth' },
									{ label: __( 'Inline(Auto)', 'themehunk-block' ), value: 'inlinewidth' },
								    { label: __( 'Custom', 'themehunk-block' ), value: 'customwidth' },
								] }
								onChange={ e => setAttributes({ widthType: e }) }
							/>
							{ 'customwidth' == attributes.widthType && (

								<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
								<ResponsiveControl
								label={ __( 'Custom Width', 'themehunk-block' ) }
							     >	
								<RangeControl
								    renderTooltipContent={ customTooltipCustomWidth }
									value={ getCustomWidth() || '' }
									onChange={ changeCustomWidth }
									step={ 1 }
									min={ 1 }
									max={ 1000 }
									allowReset={ true }
								/>
								</ResponsiveControl>
								</Suspense>

							) }
                            <ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getPaddingType() }
									min={ 0 }
									max={ 500 }
									changeType={ changePaddingType }
									onChange={ changePadding }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getPadding( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getPadding( 'left' )
										}
									] }
								/>

							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Margin', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getMarginType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeMarginType }
									onChange={ changeMargin }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getMargin( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getMargin( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getMargin( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getMargin( 'left' )
										}
									] }
								/>

							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Z-index', 'themehunk-block' ) }
							     >	
								<RangeControl
								    renderTooltipContent={ customTooltipZindex }
									value={ getZindex() || '' }
									onChange={ changeZindex }
									step={ 1 }
									min={ -999999 }
									max={ 999999 }
									allowReset={ true }
								/>
							</ResponsiveControl>


				</PanelBody>
				<PanelBody
					title={ __( 'Border & Box Shadow', 'themehunk-block' ) }
					initialOpen={ false }
				> 
                <HoverControl value={ hover }
					options={[
						{
							label: __( 'Normal', 'themehunk-block' ),
							value: 'normal'
						},
						{
							label: __( 'Hover', 'themehunk-block' ),
							value: 'hover'
						}
					]}
					onChange={ setHover } />
						
				{ 'normal' ===  hover &&  (	
                    <>
					<SelectControl
						label={ __( 'Border Type', 'themehunk-block' ) }
						value={ attributes.borderType }
						options={ [
							{ label:  __( 'None', 'themehunk-block' ), value: 'none' },
							{ label: __( 'Solid', 'themehunk-block' ), value: 'solid' },
							{ label: __( 'Double', 'themehunk-block' ), value: 'double' },
							{ label: __( 'Dotted', 'themehunk-block' ), value: 'dotted' },
						    { label: __( 'Dashed', 'themehunk-block' ), value: 'dashed' },
							{ label: __( 'Groove', 'themehunk-block' ), value: 'groove' },
						] }
						onChange={ e => setAttributes({ borderType: e }) }
					/>	
					
						
					   { 'none' !== attributes.borderType && (

						<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
						<ResponsiveControl
								label={ __( 'Border Width', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getBorderWidthType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeBorderWidthType }
									onChange={ changeBorderWidth }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getBorderWidth( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getBorderWidth( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderWidth( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getBorderWidth( 'left' )
										}
									] }
								/>

							</ResponsiveControl>
									<ColorGradientControl
								label={ __( 'Border Color', 'themehunk-block' ) }
								colorValue={ attributes.borderColor }
								onColorChange={ e => setAttributes({ borderColor: e }) }
								/>
						</Suspense>
						
						) }
                        <ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getBorderRadiusType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeBorderRadiusType }
									onChange={ changeBorderRadius }
									options={ [
										{
											label: __( 'T-R', 'themehunk-block' ),
											type: 'top',
											value: getBorderRadius( 'top' )
										},
										{
											label: __( 'T-L', 'themehunk-block' ),
											type: 'right',
											value: getBorderRadius( 'right' )
										},
										{
											label: __( 'B-R', 'themehunk-block' ),
											type: 'left',
											value: getBorderRadius( 'left' )
										},
										{
											label: __( 'B-L', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderRadius( 'bottom' )
										}
									] }
								/>

							</ResponsiveControl>

							<ControlPanelControl
							label={ __( 'Box Shadow', 'themehunk-block' ) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							resetValues={ {
								boxShadow: false,
								boxShadowColor: undefined,
								boxShadowColorOpacity: 50,
								boxShadowBlur: 5,
								boxShadowSpread: 1,
								boxShadowHorizontal: 0,
								boxShadowVertical: 0
							} }
							onClick={ () => setAttributes({ boxShadow: true }) }
						>
						
							<ColorGradientControl
								label={ __( 'Shadow Color', 'themehunk-block' ) }
								colorValue={ attributes.boxShadowColor }
								onColorChange={ e => setAttributes({ boxShadowColor: e }) }
							/>

							<RangeControl
								label={ __( 'Opacity', 'themehunk-block' ) }
								value={ attributes.boxShadowColorOpacity }
								onChange={ e => setAttributes({ boxShadowColorOpacity: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Blur', 'themehunk-block' ) }
								value={ attributes.boxShadowBlur }
								onChange={ e => setAttributes({ boxShadowBlur: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Spread', 'themehunk-block' ) }
								value={ attributes.boxShadowSpread }
								onChange={ e => setAttributes({ boxShadowSpread: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Horizontal', 'themehunk-block' ) }
								value={ attributes.boxShadowHorizontal }
								onChange={ e => setAttributes({ boxShadowHorizontal: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Vertical', 'themehunk-block' ) }
								value={ attributes.boxShadowVertical }
								onChange={ e => setAttributes({ boxShadowVertical: e }) }
								min={ -100 }
								max={ 100 }
							/>
							</ControlPanelControl>
						

					</>

                ) || 'hover' ===  hover && (
                    <>
					<SelectControl
						label={ __( 'Border Type', 'themehunk-block' ) }
						value={ attributes.borderHvrType }
						options={ [
							{ label:  __( 'None', 'themehunk-block' ), value: 'none' },
							{ label: __( 'Solid', 'themehunk-block' ), value: 'solid' },
							{ label: __( 'Double', 'themehunk-block' ), value: 'double' },
							{ label: __( 'Dotted', 'themehunk-block' ), value: 'dotted' },
						    { label: __( 'Dashed', 'themehunk-block' ), value: 'dashed' },
							{ label: __( 'Groove', 'themehunk-block' ), value: 'groove' },
						] }
						onChange={ e => setAttributes({ borderHvrType: e }) }
					/>	
					
                    { 'none' !== attributes.borderHvrType && (
					<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
					<ResponsiveControl
								label={ __( 'Border Width', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getBorderWidthHvrType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeBorderWidthHvrType }
									onChange={ changeBorderWidthHvr }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getBorderWidthHvr( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getBorderWidthHvr( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderWidthHvr( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getBorderWidthHvr( 'left' )
										}
									] }
								/>

							</ResponsiveControl>		
					<ColorGradientControl
					label={ __( 'Border Hover Color', 'themehunk-block' ) }
					colorValue={ attributes.borderColorHvr }
					onColorChange={ e => setAttributes({ borderColorHvr: e }) }
				    />
					</Suspense>

					
					) }

                            <ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
							>
                            <SizingControl
									type={ getBorderRadiusHvrType() }
									min={ 0 }
									max={ 500 }
									changeType={ changeBorderRadiusHvrType }
									onChange={ changeBorderRadiusHvr }
									options={ [
										{
											label: __( 'T-R', 'themehunk-block' ),
											type: 'top',
											value: getBorderRadiusHvr( 'top' )
										},
										{
											label: __( 'T-L', 'themehunk-block' ),
											type: 'right',
											value: getBorderRadiusHvr( 'right' )
										},
										{
											label: __( 'B-R', 'themehunk-block' ),
											type: 'left',
											value: getBorderRadiusHvr( 'left' )
										},
										{
											label: __( 'B-L', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderRadiusHvr( 'bottom' )
										}
									] }
								/>

							</ResponsiveControl>
							<ControlPanelControl
							label={ __( 'Box Shadow', 'themehunk-block' ) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							resetValues={ {
								boxShadowHvr: false,
								boxShadowColorHvr: undefined,
								boxShadowColorOpacityHvr: 50,
								boxShadowBlurHvr: 5,
								boxShadowSpreadHvr: 1,
								boxShadowHorizontalHvr: 0,
								boxShadowVerticalHvr: 0
							} }
							onClick={ () => setAttributes({ boxShadowHvr: true }) }
						>
						
							<ColorGradientControl
								label={ __( 'Shadow Color', 'themehunk-block' ) }
								colorValue={ attributes.boxShadowColorHvr }
								onColorChange={ e => setAttributes({ boxShadowColorHvr: e }) }
							/>

							<RangeControl
								label={ __( 'Opacity', 'themehunk-block' ) }
								value={ attributes.boxShadowColorOpacityHvr }
								onChange={ e => setAttributes({ boxShadowColorOpacityHvr: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Blur', 'themehunk-block' ) }
								value={ attributes.boxShadowBlurHvr }
								onChange={ e => setAttributes({ boxShadowBlurHvr: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Spread', 'themehunk-block' ) }
								value={ attributes.boxShadowSpreadHvr }
								onChange={ e => setAttributes({ boxShadowSpreadHvr: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Horizontal', 'themehunk-block' ) }
								value={ attributes.boxShadowHorizontalHvr }
								onChange={ e => setAttributes({ boxShadowHorizontalHvr: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Vertical', 'themehunk-block' ) }
								value={ attributes.boxShadowVerticalHvr }
								onChange={ e => setAttributes({ boxShadowVerticalHvr: e }) }
								min={ -100 }
								max={ 100 }
							/>
							</ControlPanelControl>

							<RangeControl
							    label={ __( 'Transition Duration', 'themehunk-block' ) }
							    renderTooltipContent={ customTooltiptransitionBorder }
								value={ attributes.transitionBorder }
								onChange={ transitionBorder => setAttributes({ transitionBorder }) }
								step={ 0.1 }
								min={ 0 }
								max={ 3 }
								allowReset={ true }
				/>
					</>

				)}	

				</PanelBody>
				<PanelBody
					title={ __( 'Background', 'themehunk-block' ) }
					initialOpen={ false }
				> 

                <HoverControl value={ hover }
					options={[
						{
							label: __( 'Normal', 'themehunk-block' ),
							value: 'normal'
						},
						{
							label: __( 'Hover', 'themehunk-block' ),
							value: 'hover'
						}
					]}
					onChange={ setHover } />
				
				{ 'normal' ===  hover &&  (
                
				<BackgroundSelectorControl
							backgroundType={ attributes.backgroundType }
							backgroundColor={ attributes.backgroundColor }
							image={ attributes.backgroundImage }
							gradient={ attributes.backgroundGradient }
							focalPoint={ attributes.backgroundPosition }
							backgroundAttachment={ attributes.backgroundAttachment }
							backgroundRepeat={ attributes.backgroundRepeat }
							backgroundSize={ attributes.backgroundSize }
							changeBackgroundType={ value => setAttributes({ backgroundType: value }) }
							changeImage={ media => {
								setAttributes({
									backgroundImage: pick( media, [ 'id', 'url' ])
								});
							}}
							removeImage={ () => setAttributes({ backgroundImage: undefined })}
							changeColor={ value => setAttributes({ backgroundColor: value })}
							changeGradient={ value => setAttributes({ backgroundGradient: value }) }
							changeBackgroundAttachment={ value => setAttributes({ backgroundAttachment: value })}
							changeBackgroundRepeat={ value => setAttributes({ backgroundRepeat: value })}
							changeFocalPoint={ value => setAttributes({ backgroundPosition: value }) }
							changeBackgroundSize={ value => setAttributes({ backgroundSize: value }) }
						/>
					
				) || 'hover' ===  hover && (
					<>
					<BackgroundSelectorControl
					backgroundType={ attributes.backgroundTypeHvr }
					backgroundColor={ attributes.backgroundColorHvr }
					image={ attributes.backgroundImageHvr }
					gradient={ attributes.backgroundGradientHvr }
					focalPoint={ attributes.backgroundPositionHvr }
					backgroundAttachment={ attributes.backgroundAttachmentHvr }
					backgroundRepeat={ attributes.backgroundRepeatHvr }
					backgroundSize={ attributes.backgroundSizeHvr }
					changeBackgroundType={ value => setAttributes({ backgroundTypeHvr: value }) }
					changeImage={ media => {
						setAttributes({
							backgroundImageHvr: pick( media, [ 'id', 'url' ])
						});
					}}
					removeImage={ () => setAttributes({ backgroundImageHvr: undefined })}
					changeColor={ value => setAttributes({ backgroundColorHvr: value })}
					changeGradient={ value => setAttributes({ backgroundGradientHvr: value }) }
					changeBackgroundAttachment={ value => setAttributes({ backgroundAttachmentHvr: value })}
					changeBackgroundRepeat={ value => setAttributes({ backgroundRepeatHvr: value })}
					changeFocalPoint={ value => setAttributes({ backgroundPositionHvr: value }) }
					changeBackgroundSize={ value => setAttributes({ backgroundSizeHvr: value }) }
				/>
				<RangeControl
				label={ __( 'Transition Duration', 'themehunk-block' ) }
				renderTooltipContent={ customTooltiptransitionBackground }
				value={ attributes.transitionBackground }
				onChange={ transitionBackground => setAttributes({ transitionBackground }) }
				step={ 0.1 }
				min={ 0 }
				max={ 3 }
				allowReset={ true }
                />
				</>
				
				)}	
				
				</PanelBody>
				<PanelBody
					title={ __( 'Responsive', 'themehunk-block' ) }
					initialOpen={ false }
				> 
				<ToggleControl
								label={ __( 'Hide On Desktop', 'themehunk-block' ) }
								checked={ attributes.responsiveTogHideDesktop }
								onChange={ responsiveTogHideDesktop => setAttributes({ responsiveTogHideDesktop }) }
							/>
			    <ToggleControl
								label={ __( 'Hide On Tablet', 'themehunk-block' ) }
								checked={ attributes.responsiveTogHideTablet }
								onChange={ responsiveTogHideTablet => setAttributes({ responsiveTogHideTablet }) }
							/>				
                <ToggleControl
								label={ __( 'Hide On Mobile', 'themehunk-block' ) }
								checked={ attributes.responsiveTogHideMobile }
								onChange={ responsiveTogHideMobile => setAttributes({ responsiveTogHideMobile }) }
							/>
				</PanelBody>
		
		     </Fragment>

            )}

        </InspectorControls>
    </Fragment>
    );
};

export default InsSettings;