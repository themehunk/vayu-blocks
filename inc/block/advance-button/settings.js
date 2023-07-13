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
import {
	InsSettingHeader,
	ResponsiveControl,
	SizingControl,
	HoverControl,
	ControlPanelControl,
	BackgroundSelectorControl,
	UnitChooser,
	ToogleGroupControl,
	IconPicker,
	GoogleFontsControl
} from '../../../src/components/index.js';
import { alignBottom, alignCenter,  Start, Center , End, Strech, OrderStart, OrderEnd, Custom, None, Shrink, Grow, HorizontalLeft, HorizontalRight, VerticalTop, VerticalBottom} from '../../../src/helpers/icon.js';

import Select from 'react-select';

const InsSettings = ({
    attributes,
    setAttributes
}) => {

    const getView = useSelect( select => {
		const { getView } = select( 'themehunk-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);
    
    const [ tab, setTab ] = useState( 'setting' );
	const [ hover, setHover ] = useState( 'normal' );

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
			setAttributes({ customWidth: value, customWidthTablet: value, customWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ customWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ customWidthMobile: value });
		}
	};

	const customTooltipCustomWidth = value => `${value}${attributes.customWidthUnit}`;
	const customTooltipFontsize = value => `${value}${attributes.fontSizeUnit}`;
	const customTooltiplineHeight = value => `${value}${attributes.lineHeightUnit}`;
	const customTooltipletterSpacing = value => `${value}${attributes.letterSpacingUnit}`;

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
			setAttributes({ lineHeight: value, lineHeightTablet: value, lineHeightMobile: value });
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
			setAttributes({ letterSpacing: value, letterSpacingTablet: value, letterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ letterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ letterSpacingMobile: value });
		}
	};

	//Padding
	const desktopPaddingType = {
		top: 'paddingTop',
		right: 'paddingRight',
		bottom: 'paddingBottom',
		left: 'paddingLeft'
	};

	const tabletPaddingType = {
		top: 'paddingTopTablet',
		right: 'paddingRightTablet',
		bottom: 'paddingBottomTablet',
		left: 'paddingLeftTablet'
	};

	const mobilePaddingType = {
		top: 'paddingTopMobile',
		right: 'paddingRightMobile',
		bottom: 'paddingBottomMobile',
		left: 'paddingLeftMobile'
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

	const changePaddingType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ paddingType: value,paddingTypeTablet: value, paddingTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ paddingTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ paddingTypeMobile: value });
		}
	};

	const changePadding = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.paddingType ) {
				setAttributes({ padding: value,paddingTablet: value, paddingMobile: value });
			} else {
				setAttributes({ [desktopPaddingType[type]]: value });
				setAttributes({ [desktopPaddingType[type]]: value,[tabletPaddingType[type]]: value, [mobilePaddingType[type]]: value });
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

	//Margin 
	const desktopMarginType = {
		top: 'marginTop',
		right: 'marginRight',
		bottom: 'marginBottom',
		left: 'marginLeft'
	};

	const tabletMarginType = {
		top: 'marginTopTablet',
		right: 'marginRightTablet',
		bottom: 'marginBottomTablet',
		left: 'marginLeftTablet'
	};

	const mobileMarginType = {
		top: 'marginTopMobile',
		right: 'marginRightMobile',
		bottom: 'marginBottomMobile',
		left: 'marginLeftMobile'
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

	const changeMarginType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ marginType: value,marginTypeTablet: value, marginTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ marginTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ marginTypeMobile: value });
		}
	};

	const changeMargin = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.marginType ) {
				setAttributes({margin: value,marginTablet: value, marginMobile: value });
			} else {
				setAttributes({ [desktopMarginType[type]]: value });
				setAttributes({ [desktopMarginType[type]]: value,[tabletMarginType[type]]: value, [mobileMarginType[type]]: value });
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

	// Button PADDING PROPERTIES
	//Padding
	const desktopPaddingButtonType = {
		top: 'buttonpaddingTop',
		right: 'buttonpaddingRight',
		bottom: 'buttonpaddingBottom',
		left: 'buttonpaddingLeft'
	};

	const tabletPaddingButtonType = {
		top: 'buttonpaddingTopTablet',
		right: 'buttonpaddingRightTablet',
		bottom: 'buttonpaddingBottomTablet',
		left: 'buttonpaddingLeftTablet'
	};

	const mobilePaddingButtonType = {
		top: 'buttonpaddingTopMobile',
		right: 'buttonpaddingRightMobile',
		bottom: 'buttonpaddingBottomMobile',
		left: 'buttonpaddingLeftMobile'
	};
	const getPaddingButtonType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.buttonpaddingType;
		case 'Tablet':
			return attributes.buttonpaddingTypeTablet;
		case 'Mobile':
			return attributes.buttonpaddingTypeMobile;
		default:
			return undefined;
		}
	};

	const changePaddingButtonType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonpaddingType: value,buttonpaddingTypeTablet: value, buttonpaddingTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonpaddingTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonpaddingTypeMobile: value });
		}
	};

	const changeButtonPadding = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonpaddingType ) {
				setAttributes({ buttonpadding: value,buttonpaddingTablet: value, buttonpaddingMobile: value });
			} else {
				setAttributes({ [desktopPaddingButtonType[type]]: value });
				setAttributes({ [desktopPaddingButtonType[type]]: value,[tabletPaddingButtonType[type]]: value, [mobilePaddingButtonType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonpaddingTypeTablet ) {
				setAttributes({ buttonpaddingTablet: value });
			} else {
				setAttributes({ [tabletPaddingButtonType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonpaddingTypeMobile ) {
				setAttributes({ buttonpaddingMobile: value });
			} else {
				setAttributes({ [mobilePaddingButtonType[type]]: value });
			}
			break;
		}
	};

	const getButtonPadding = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingTop;
			case 'Tablet':
				return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingTopTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingRight;
			case 'Tablet':
				return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingRightTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingBottom;
			case 'Tablet':
				return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingLeft;
			case 'Tablet':
				return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingLeftMobile;
			}
		}

		return undefined;
	};

	//Z Index
	const customTooltipZindex = value => `${value}px`

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
			setAttributes({ zindex: value, zindexTablet: value, zindexMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ zindexTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ zindexMobile: value });
		}
	};

	// Border & Box Shadow
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

	const getBorderWidthButton = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthTop;
			case 'Tablet':
				return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthTopTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthRight;
			case 'Tablet':
				return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthRightTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthBottom;
			case 'Tablet':
				return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthLeft;
			case 'Tablet':
				return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthLeftMobile;
			}
		}

		return undefined;
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

	const mobileBorderWidthHvrType = {
		top: 'borderWidthHvrTopMobile',
		right: 'borderWidthHvrRightMobile',
		bottom: 'borderWidthHvrBottomMobile',
		left: 'borderWidthHvrLeftMobile'
	};

	const mobileBorderWidthType = {
		top: 'borderWidthTopMobile',
		right: 'borderWidthRightMobile',
		bottom: 'borderWidthBottomMobile',
		left: 'borderWidthLeftMobile'
	};

	const desktopBorderRadiusType = {
		top: 'borderRadiusTop',
		left: 'borderRadiusLeft',
		right: 'borderRadiusRight',
		bottom: 'borderRadiusBottom'
	};

	const tabletBorderRadiusType = {
		top: 'borderRadiusTopTablet',
		left: 'borderRadiusLeftTablet',
		right: 'borderRadiusRightTablet',
		bottom: 'borderRadiusBottomTablet'
	};

	const mobileBorderRadiusType = {
		top: 'borderRadiusTopMobile',
		left: 'borderRadiusLeftMobile',
		right: 'borderRadiusRightMobile',
		bottom: 'borderRadiusBottomMobile'
	};

	const desktopBorderWidthTypeButton = {
		top: 'buttonborderWidthTop',
		right: 'buttonborderWidthRight',
		bottom: 'buttonborderWidthBottom',
		left: 'buttonborderWidthLeft'
	};
	
	const tabletBorderWidthTypeButton = {
		top: 'buttonborderWidthTopTablet',
		right: 'buttonborderWidthRightTablet',
		bottom: 'buttonborderWidthBottomTablet',
		left: 'buttonborderWidthLeftTablet'
	};
	
	const mobileBorderWidthTypeButton = {
		top: 'buttonborderWidthTopMobile',
		right: 'buttonborderWidthRightMobile',
		bottom: 'buttonborderWidthBottomMobile',
		left: 'buttonborderWidthLeftMobile'
	};
	
	const desktopBorderRadiusTypeButton = {
		top: 'buttonborderRadiusTop',
		left: 'buttonborderRadiusLeft',
		right: 'buttonborderRadiusRight',
		bottom: 'buttonborderRadiusBottom'
	};
	
	const tabletBorderRadiusTypeButton = {
		top: 'buttonborderRadiusTopTablet',
		left: 'buttonborderRadiusLeftTablet',
		right: 'buttonborderRadiusRightTablet',
		bottom: 'buttonborderRadiusBottomTablet'
	};
	
	const mobileBorderRadiusTypeButton = {
		top: 'buttonborderRadiusTopMobile',
		left: 'buttonborderRadiusLeftMobile',
		right: 'buttonborderRadiusRightMobile',
		bottom: 'buttonborderRadiusBottomMobile'
	};

	const changeBorderWidthType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderWidthType: value, borderWidthTypeTablet: value, borderWidthTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderWidthTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderWidthTypeMobile: value });
		}
	};

	const changeBorderWidth = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderWidthType ) {
				setAttributes({ borderWidth: value , borderWidthTablet: value , borderWidthMobile: value});
			} else {
				setAttributes({ [desktopBorderWidthType[type]]: value, [tabletBorderWidthType[type]]: value, [mobileBorderWidthType[type]]: value });
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

	const changeBorderRadiusType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderRadiusType: value, borderRadiusTypeTablet: value, borderRadiusTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderRadiusTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderRadiusTypeMobile: value });
		}
	};

	const changeBorderRadius = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderRadiusType ) {
				setAttributes({ borderRadius: value , borderRadiusTablet: value , borderRadiusMobile: value });
			} else {
				setAttributes({ [desktopBorderRadiusType[type]]: value , [tabletBorderRadiusType[type]]: value , [mobileBorderRadiusType[type]]: value });
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
	

	const changeBorderWidthHvrType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderWidthHvrType: value, borderWidthHvrTypeTablet: value, borderWidthHvrTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderWidthHvrTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderWidthHvrTypeMobile: value });
		}
	};

		const changeBorderWidthHvr = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderWidthHvrType ) {
				setAttributes({ borderWidthHvr: value, borderWidthHvrTablet: value, borderWidthHvrMobile: value });
			} else {
				setAttributes({ [desktopBorderWidthHvrType[type]]: value, [tabletBorderWidthHvrType[type]]: value, [mobileBorderWidthHvrType[type]]: value });
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

	const changeBorderRadiusHvrType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderRadiusHvrType: value, borderRadiusHvrTypeTablet: value, borderRadiusHvrTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderRadiusHvrTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderRadiusHvrTypeMobile: value });
		}
	};

	const changeBorderRadiusHvr = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.borderRadiusHvrType ) {
				setAttributes({ borderRadiusHvr: value,  borderRadiusHvrTablet: value,  borderRadiusHvrMobile: value });
			} else {
				setAttributes({ [desktopBorderRadiusHvrType[type]]: value,[tabletBorderRadiusHvrType[type]]: value, [mobileBorderRadiusHvrType[type]]: value });
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

	//Button Border & Box Shadow

	const getBorderWidthTypeButton = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.buttonborderWidthType;
		case 'Tablet':
			return attributes.buttonborderWidthTypeTablet;
		case 'Mobile':
			return attributes.buttonborderWidthTypeMobile;
		default:
			return undefined;
		}
	};

	const changeBorderWidthTypeButton = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonborderWidthType: value, buttonborderWidthTypeTablet: value, buttonborderWidthTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonborderWidthTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonborderWidthTypeMobile: value });
		}
	};

	const changeBorderWidthButton = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonborderWidthType ) {
				setAttributes({ buttonborderWidth: value , buttonborderWidthTablet: value , buttonborderWidthMobile: value});
			} else {
				setAttributes({ [desktopBorderWidthTypeButton[type]]: value, [tabletBorderWidthTypeButton[type]]: value, [mobileBorderWidthTypeButton[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonborderWidthTypeTablet ) {
				setAttributes({ buttonborderWidthTablet: value });
			} else {
				setAttributes({ [tabletBorderWidthTypeButton[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonborderWidthTypeMobile ) {
				setAttributes({ buttonborderWidthMobile: value });
			} else {
				setAttributes({ [mobileBorderWidthTypeButton[type]]: value });
			}
			break;
		}
	};

	
	const getBorderRadiusButtonType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.buttonborderRadiusType;
		case 'Tablet':
			return attributes.buttonborderRadiusTypeTablet;
		case 'Mobile':
			return attributes.buttonborderRadiusTypeMobile;
		default:
			return undefined;
		}
	};

	const changeBorderRadiusButtonType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonborderRadiusType: value, buttonborderRadiusTypeTablet: value, buttonborderRadiusTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonborderRadiusTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonborderRadiusTypeMobile: value });
		}
	};

	const changeBorderButtonRadius = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonborderRadiusType ) {
				setAttributes({ buttonborderRadius: value , buttonborderRadiusTablet: value , buttonborderRadiusMobile: value });
			} else {
				setAttributes({ [desktopBorderRadiusTypeButton[type]]: value , [tabletBorderRadiusTypeButton[type]]: value , [mobileBorderRadiusTypeButton[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonborderRadiusTypeTablet ) {
				setAttributes({ buttonborderRadiusTablet: value });
			} else {
				setAttributes({ [tabletBorderRadiusTypeButton[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonborderRadiusTypeMobile ) {
				setAttributes({ buttonborderRadiusMobile: value });
			} else {
				setAttributes({ [mobileBorderRadiusTypeButton[type]]: value });
			}
			break;
		}
	};

	const getBorderRadiusButton = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusTop;
			case 'Tablet':
				return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusTopTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusTopMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusLeft;
			case 'Tablet':
				return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusLeftMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusRight;
			case 'Tablet':
				return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusRightTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusBottom;
			case 'Tablet':
				return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusBottomMobile;
			}
		}

		return undefined;
	};

	

	//Position
	const customTooltiphorizontalOrientationOffset = value => `${value}${attributes.horizontalOrientationOffsetUnit}`
    const customTooltiphorizontalOrientationOffsetRight = value => `${value}${attributes.horizontalOrientationOffsetRightUnit}`
	const customTooltipverticalOrientationOffsetTop = value => `${value}${attributes.verticalOrientationOffsetTopUnit}`
	const customTooltipverticalOrientationOffsetBottom = value => `${value}${attributes.verticalOrientationOffsetBottomUnit}`

	// horizontalOrientationOffset left
	const gethorizontalOrientationOffset = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.horizontalOrientationOffset;
		case 'Tablet':
			return attributes.horizontalOrientationOffsetTablet;
		case 'Mobile':
			return attributes.horizontalOrientationOffsetMobile;
		default:
			return undefined;
		}
	};

	const changehorizontalOrientationOffset = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ horizontalOrientationOffset: value, horizontalOrientationOffsetTablet: value, horizontalOrientationOffsetMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ horizontalOrientationOffsetTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ horizontalOrientationOffsetMobile: value });
		}
	};

	// horizontalOrientationOffset right
	const gethorizontalOrientationOffsetRight = () => {
			switch ( getView ) {
			case 'Desktop':
				return attributes.horizontalOrientationOffsetRight;
			case 'Tablet':
				return attributes.horizontalOrientationOffsetRightTablet;
			case 'Mobile':
				return attributes.horizontalOrientationOffsetRightMobile;
			default:
				return undefined;
			}
		};

		const changehorizontalOrientationOffsetRight = value => {
			if ( 'Desktop' === getView ) {
				setAttributes({ horizontalOrientationOffsetRight: value, horizontalOrientationOffsetRightTablet: value, horizontalOrientationOffsetRightMobile: value });
			} else if ( 'Tablet' === getView ) {
				setAttributes({ horizontalOrientationOffsetRightTablet: value });
			} else if ( 'Mobile' === getView ) {
				setAttributes({ horizontalOrientationOffsetRightMobile: value });
			}
		};

		
	// verticalOrientationOffset left
	const getverticalOrientationOffsetTop = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.verticalOrientationOffsetTop;
		case 'Tablet':
			return attributes.verticalOrientationOffsetTopTablet;
		case 'Mobile':
			return attributes.verticalOrientationOffsetTopMobile;
		default:
			return undefined;
		}
	};

	const changeverticalOrientationOffsetTop = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ verticalOrientationOffsetTop: value, verticalOrientationOffsetTopTablet: value, verticalOrientationOffsetTopMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ verticalOrientationOffsetTopTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ verticalOrientationOffsetTopMobile: value });
		}
	};

	
	// verticalOrientationOffset right
	const getverticalOrientationOffsetBottom = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.verticalOrientationOffsetBottom;
		case 'Tablet':
			return attributes.verticalOrientationOffsetBottomTablet;
		case 'Mobile':
			return attributes.verticalOrientationOffsetBottomMobile;
		default:
			return undefined;
		}
	};

	const changeverticalOrientationOffsetBottom = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ verticalOrientationOffsetBottom: value, verticalOrientationOffsetBottomTablet: value, verticalOrientationOffsetBottomMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ verticalOrientationOffsetBottomTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ verticalOrientationnOffsetBottomMobile: value });
		}
	};

//Properties of flex Container

	// flex align-self property
	const getSelfAlign = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.alignSelf;
		case 'Tablet':
			return attributes.alignSelfTablet;
		case 'Mobile':
			return attributes.alignSelfMobile;
		default:
			return undefined;
		}
	};
    const changeSelfAlign = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ alignSelf: value, alignSelfTablet: value, alignSelfMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ alignSelfTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ alignSelfMobile: value });
		}
	};

	// flex order property
	const getorder = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.order;
		case 'Tablet':
			return attributes.orderTablet;
		case 'Mobile':
			return attributes.orderMobile;
		default:
			return undefined;
		}
	};

  

    const changeorder = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ order: value, orderTablet: value, orderMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ orderTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ orderMobile: value });
		}

	};

    //custom order
	const getcustomOrder = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.customOrder;
		case 'Tablet':
			return attributes.customOrderTablet;
		case 'Mobile':
			return attributes.customOrderMobile;
		default:
			return undefined;
		}
	};

	const changecustomOrder = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ customOrder: value, customOrderTablet: value, customOrderMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ customOrderTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ customOrderMobile: value });
		}
	};
    
	// flex size property
	const getflexSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.flexSize;
		case 'Tablet':
			return attributes.flexSizeTablet;
		case 'Mobile':
			return attributes.flexSizeMobile;
		default:
			return undefined;
		}
	};

    const changeflexSize = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ flexSize: value, flexSizeTablet: value, flexSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ flexSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ flexSizeMobile: value });
		}

	};

	// flex grow size property
	const getFlexGrowSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.FlexGrowSize;
		case 'Tablet':
			return attributes.FlexGrowSizeTablet;
		case 'Mobile':
			return attributes.FlexGrowSizeMobile;
		default:
			return undefined;
		}
	};

    const changeFlexGrowSize = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ FlexGrowSize: value, FlexGrowSizeTablet: value, FlexGrowSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ FlexGrowSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ FlexGrowSizeMobile: value });
		}

	};

	// flex shrink size property
	const getFlexShrinkSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.FlexShrinkSize;
		case 'Tablet':
			return attributes.FlexShrinkSizeTablet;
		case 'Mobile':
			return attributes.FlexShrinkSizeMobile;
		default:
			return undefined;
		}
	};

    const changeFlexShrinkSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ FlexShrinkSize: value, FlexShrinkSizeTablet: value, FlexShrinkSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ FlexShrinkSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ FlexShrinkSizeMobile: value });
		}
	};

	const customTooltipCustomOrder = value => `${value}`
	const customTooltipFlexGrow = value => `${value}`
	const customTooltipFlexShrink = value => `${value}`

	// Transition
	const customTooltiptransitionAll = value => `${value}`

	// unit switch max value
	const [customWidthUnit, setcustomWidthUnit] = useState('px');
	const maxcustomWidthUnit = customWidthUnit === 'px' ? 1500 : customWidthUnit === 'em' ? 50 : customWidthUnit === '%' ? 100:'';
	const [heightUnit, setheightUnit] = useState('px');
	const maxheightUnit = heightUnit === 'px' ? 1500 : heightUnit === 'em' ? 50 : heightUnit === '%' ? 100:'';
	const [paddingUnit, setpaddingUnit] = useState('px');
	const maxpaddingUnit = paddingUnit === 'px' ? 1500 : paddingUnit === 'em' ? 50 : paddingUnit === '%' ? 100:'';
	const [marginUnit, setmarginUnit] = useState('px');
	const maxmarginUnit = marginUnit === 'px' ? 1500 : marginUnit === 'em' ? 50 : marginUnit === '%' ? 100:'';
	const [horizontalOrientationOffsetUnit, sethorizontalOrientationOffsetUnit] = useState('px');
	const maxhorizontalOrientationOffsetUnit = horizontalOrientationOffsetUnit === 'px' ? 1500 : horizontalOrientationOffsetUnit === 'em' ? 50 : horizontalOrientationOffsetUnit === '%' ? 100:'';
	const [horizontalOrientationOffsetRightUnit, sethorizontalOrientationOffsetRightUnit] = useState('px');
	const maxhorizontalOrientationOffsetRightUnit = horizontalOrientationOffsetRightUnit === 'px' ? 1500 : horizontalOrientationOffsetRightUnit === 'em' ? 50 : horizontalOrientationOffsetRightUnit === '%' ? 100:'';	
	const [verticalOrientationOffsetTopUnit, setverticalOrientationOffsetTopUnit] = useState('px');
	const maxverticalOrientationOffsetTopUnit = verticalOrientationOffsetTopUnit === 'px' ? 1500 : verticalOrientationOffsetTopUnit === 'em' ? 50 : verticalOrientationOffsetTopUnit === '%' ? 100:'';
	const [verticalOrientationOffsetBottomUnit, setverticalOrientationOffsetBottomUnit] = useState('px');
	const maxverticalOrientationOffsetBottomUnit = verticalOrientationOffsetBottomUnit === 'px' ? 1500 : verticalOrientationOffsetBottomUnit === 'em' ? 50 : verticalOrientationOffsetBottomUnit === '%' ? 100:'';
	const [borderWidthUnit, setborderWidthUnit] = useState('px');
	const maxborderWidthUnit = borderWidthUnit === 'px' ? 1500 : borderWidthUnit === 'em' ? 50 : borderWidthUnit === '%' ? 100:'';
	const [borderRadiusUnit, setborderRadiusUnit] = useState('px');
	const maxborderRadiusUnit = borderRadiusUnit === 'px' ? 1500 : borderRadiusUnit === 'em' ? 50 : borderRadiusUnit === '%' ? 100:'';
	const [borderWidthHvrUnit, setborderWidthHvrUnit] = useState('px');
	const maxborderWidthHvrUnit = borderWidthHvrUnit === 'px' ? 1500 : borderWidthHvrUnit === 'em' ? 50 : borderWidthHvrUnit === '%' ? 100:'';
	const [borderRadiusHvrUnit, setborderRadiusHvrUnit] = useState('px');
	const maxborderRadiusHvrUnit = borderRadiusHvrUnit === 'px' ? 1500 : borderRadiusHvrUnit === 'em' ? 50 : borderRadiusHvrUnit === '%' ? 100:'';
	const [borderRadiusButtonUnit, setborderRadiusButtonUnit] = useState('px');
	const maxborderRadiusButtonUnit = borderRadiusButtonUnit === 'px' ? 1500 : borderRadiusButtonUnit === 'em' ? 50 : borderRadiusButtonUnit === '%' ? 100:'';
	const [paddingButtonUnit, setpaddingButtonUnit] = useState('px');
	const maxpaddingButtonUnit = paddingButtonUnit === 'px' ? 1500 : paddingButtonUnit === 'em' ? 50 : paddingButtonUnit === '%' ? 100:'';

	// flex align-self property
	const getButtonAlign = () => {
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
    const changeButtonAlign = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ align: value, alignTablet: value, alignMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ alignTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ alignMobile: value });
		}
	};

	// Typography
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

    return (<Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Setting', 'themehunk-block' ),
							value: 'setting'
						},
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

            {'setting' === tab && (
								<Fragment>
								<PanelBody
									title={ __( 'General', 'themehunk-block' ) }
									initialOpen={ true }
									className="th-button-panel"
								> 
								<ResponsiveControl
									label={ __( 'Alignment', 'themehunk-block' ) }
									className="th-alig-self-control th-component-group"
								>
									<ToogleGroupControl
										value={ getButtonAlign() }
										onChange={ changeButtonAlign }
										options={[
											{
												icon: Start,
												label: __( 'Left', 'themehunk-blocks' ),
												value: 'start'
											},
											{
												icon: Center,
												label: __( 'Center', 'themehunk-block' ),
												value: 'center'
											},
											{
												icon: End,
												label: __( 'Right', 'themehunk-blocks' ),
												value: 'end'
											},
											{
												icon: Strech,
												label: __( 'Justify', 'themehunk-block' ),
												value: 'space-around'
											}
										]}
										
										hasIcon
									/>
								</ResponsiveControl>

								<IconPicker
									attributes={ attributes }
									setAttributes={ setAttributes }
									attrIcon={ 'icon' }
									attrRemoveText={ 'removeText' }
									attrAriaLabel={ 'ariaLabel' }
									id= ''
								/>

							<div className='th-component-group-label'>
                            	<label className='th-label'>{ __( 'Position', 'themehunk-block' )}</label>
                           	 <ToogleGroupControl

										value={ attributes.iconPosition }
								        onChange={ iconPosition => setAttributes({ iconPosition }) }
										options={[
											{
												icon: HorizontalLeft,
												label: __( 'Before', 'themehunk-blocks' ),
												value: 'before'
											},
											{
												icon: HorizontalRight,
												label: __( 'After', 'themehunk-block' ),
												value: 'after'
											}
										]}
										
										hasIcon
									/>
							</div>

							<RangeControl
								label={ __( 'Icon Spacing', 'themehunk-block' ) }
								value={ attributes.iconSpacing }
								onChange={ e => setAttributes({ iconSpacing: e }) }
								min={ 0 }
								max={ 108 }
							/>
								
								</PanelBody>
								</Fragment>

		

            ) || 'advanced' === tab && (
                <Fragment>
					
				<PanelBody
					title={ __( 'Layout', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
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
							<UnitChooser
							value={ attributes.customWidthUnit }
							onClick={ customWidthUnit => {
								setAttributes({ customWidthUnit });
								setcustomWidthUnit(customWidthUnit); 
								}}
							units={ [ 'px', 'em', '%' ] }
							/>
							<RangeControl
								renderTooltipContent={ customTooltipCustomWidth }
								value={ getCustomWidth() || '' }
								onChange={ changeCustomWidth }
								step={ 1 }
								min={ 1 }
								max={ maxcustomWidthUnit }
								allowReset={ true }
							/>
							</ResponsiveControl>
							</Suspense>

							) }

						  <ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.paddingUnit }
								onClick={ paddingUnit => {
									setAttributes({ paddingUnit });
									setpaddingUnit( paddingUnit );
								 }}
								units={ [ 'px', 'em', '%' ] }
						    />	
                            <SizingControl
									type={ getPaddingType() }
									min={ 0 }
									max={ maxpaddingUnit }
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
							<UnitChooser
								value={ attributes.marginUnit }
								onClick={marginUnit => {
									setAttributes({ marginUnit });
									setmarginUnit(marginUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />	
                            <SizingControl
									type={ getMarginType() }
									min={ 0 }
									max={ maxmarginUnit }
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

							<SelectControl
								label={ __( 'Position', 'themehunk-block' ) }
								value={ attributes.position }
								options={ [
									{ label:  __( 'Default', 'themehunk-block' ), value: 'relative' },
									{ label: __( 'Absolute', 'themehunk-block' ), value: 'absolute' },
									{ label: __( 'Fixed', 'themehunk-block' ), value: 'fixed' },
								    
								] }
								onChange={ e => setAttributes({ position: e }) }
							/>

							{ ('absolute'== attributes.position || 'fixed'== attributes.position) && (
							<>
							<div className='th-component-group-label'>
                            <label className='th-label'>{ __( 'Horizontal Orientation', 'themehunk-block' )}</label>
                            <ToogleGroupControl

										value={ attributes.horizontalOrientation }
								        onChange={ horizontalOrientation => setAttributes({ horizontalOrientation }) }
										options={[
											{
												icon: HorizontalLeft,
												label: __( 'left', 'themehunk-blocks' ),
												value: 'left'
											},
											{
												icon: HorizontalRight,
												label: __( 'right', 'themehunk-block' ),
												value: 'right'
											}
										]}
										
										hasIcon
									/>
							</div>
                          { 'left' == attributes.horizontalOrientation && (
                               <ResponsiveControl
								label={ __( 'Offset', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.horizontalOrientationOffsetUnit }
								onClick={horizontalOrientationOffsetUnit => {
									setAttributes({ horizontalOrientationOffsetUnit });
									sethorizontalOrientationOffsetUnit(horizontalOrientationOffsetUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiphorizontalOrientationOffset }
									value={ gethorizontalOrientationOffset() || '' }
									onChange={ changehorizontalOrientationOffset }
									step={ 1 }
									min={ -999 }
									max={ maxhorizontalOrientationOffsetUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
						  )}
						  { 'right' == attributes.horizontalOrientation && (
							<ResponsiveControl
								label={ __( 'Offset', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.horizontalOrientationOffsetRightUnit }
								onClick={horizontalOrientationOffsetRightUnit => {
									setAttributes({ horizontalOrientationOffsetRightUnit });
									sethorizontalOrientationOffsetRightUnit(horizontalOrientationOffsetRightUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiphorizontalOrientationOffsetRight }
									value={ gethorizontalOrientationOffsetRight() || '' }
									onChange={ changehorizontalOrientationOffsetRight }
									step={ 1 }
									min={ -999 }
									max={ maxhorizontalOrientationOffsetRightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
						  )}	

                           <div className='th-component-group-label'>
                            <label className='th-label'>{ __( 'Vertical Orientation', 'themehunk-block' )}</label>
                            <ToogleGroupControl

										value={ attributes.verticalOrientation }
								        onChange={ verticalOrientation => setAttributes({ verticalOrientation }) }
										options={[
											{
												icon: VerticalTop,
												label: __( 'top', 'themehunk-blocks' ),
												value: 'top'
											},
											{
												icon: VerticalBottom,
												label: __( 'bottom', 'themehunk-block' ),
												value: 'bottom'
											}
										]}
										
										hasIcon
									/>
									</div>
								{ 'top' == attributes.verticalOrientation && (
                               <ResponsiveControl
								label={ __( 'Offset', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.verticalOrientationOffsetTopUnit }
								onClick={verticalOrientationOffsetTopUnit => {
									setAttributes({ verticalOrientationOffsetTopUnit });
									setverticalOrientationOffsetTopUnit(verticalOrientationOffsetTopUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipverticalOrientationOffsetTop }
									value={ getverticalOrientationOffsetTop() || '' }
									onChange={ changeverticalOrientationOffsetTop }
									step={ 1 }
									min={ -999 }
									max={ maxverticalOrientationOffsetTopUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
						  )}

                          { 'bottom' == attributes.verticalOrientation && (
							<ResponsiveControl
								label={ __( 'Offset', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.verticalOrientationOffsetBottomUnit }
								onClick={verticalOrientationOffsetBottomUnit => {
									setAttributes({ verticalOrientationOffsetBottomUnit });
									setverticalOrientationOffsetBottomUnit(verticalOrientationOffsetBottomUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipverticalOrientationOffsetBottom }
									value={ getverticalOrientationOffsetBottom() || '' }
									onChange={ changeverticalOrientationOffsetBottom }
									step={ 1 }
									min={ -999 }
									max={ maxverticalOrientationOffsetBottomUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
						  )}  
                         </>
					)}

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

							<ResponsiveControl
									label={ __( 'Align Self', 'themehunk-block' ) }
									className="th-alig-self-control th-component-group"
								>
									<ToogleGroupControl
										value={ getSelfAlign() }
										onChange={ changeSelfAlign }
										options={[
											{
												icon: Start,
												label: __( 'Start', 'themehunk-blocks' ),
												value: 'start'
											},
											{
												icon: Center,
												label: __( 'Center', 'themehunk-block' ),
												value: 'center'
											},
											{
												icon: End,
												label: __( 'End', 'themehunk-blocks' ),
												value: 'end'
											},
											{
												icon: Strech,
												label: __( 'Stretch', 'themehunk-block' ),
												value: 'stretch'
											}
										]}
										
										hasIcon
									/>
								</ResponsiveControl>

								<ResponsiveControl
									label={ __( 'Order', 'themehunk-block' ) }
									className="th-order-control th-component-group"
								>
									<ToogleGroupControl
										value={ getorder() }
										onChange={ changeorder }
										options={[
											{
												icon: OrderStart,
												label: __( 'Start', 'themehunk-blocks' ),
												value: 'start'
											},
											{
												icon: OrderEnd,
												label: __( 'End', 'themehunk-blocks' ),
												value: 'end'
											},
											{
												icon: Custom,
												label: __( 'Cutsom', 'themehunk-block' ),
												value: 'custom'
											}
										]}
										
										hasIcon
									/>
								</ResponsiveControl>
								{ 'custom' == attributes.order && (
								<ResponsiveControl
								label={ __( 'Custom Order', 'themehunk-block' ) }
							    >    
								<RangeControl
								    renderTooltipContent={ customTooltipCustomOrder }
									value={ getcustomOrder() || '' }
								    onChange={ changecustomOrder }
									step={ 1 }
									min={ -9999 }
									max={ 9999 }
									allowReset={ true }
								/>		
						      </ResponsiveControl>

								)}

							  <ResponsiveControl
									label={ __( 'Size', 'themehunk-block' ) }
									className="th-size-control th-component-group"
								>
									<ToogleGroupControl
										value={ getflexSize() }
										onChange={ changeflexSize }
										options={[
											{
												icon: None,
												label: __( 'None', 'themehunk-blocks' ),
												value: 'none'
											},
											{
												icon: Grow,
												label: __( 'Grow', 'themehunk-blocks' ),
												value: 'grow'
											},
											{
												icon: Shrink,
												label: __( 'Shrink', 'themehunk-block' ),
												value: 'shrink'
											},
											{
												icon: Custom,
												label: __( 'Custom', 'themehunk-block' ),
												value: 'custom'
											}
										]}
										
										hasIcon
									/>
								</ResponsiveControl>
								{ 'custom' == attributes.flexSize && (
                                <>
								<ResponsiveControl
								label={ __( 'Flex Grow', 'themehunk-block' ) }
							    >    
								<RangeControl
								    renderTooltipContent={ customTooltipFlexGrow }
									value={ getFlexGrowSize() || '' }
								    onChange={ changeFlexGrowSize }
									step={ 1 }
									min={ 1 }
									max={ 500 }
									allowReset={ true }
								/>		
						      </ResponsiveControl>

							  <ResponsiveControl
								label={ __( 'Flex Shrink', 'themehunk-block' ) }
								>    
								<RangeControl
									renderTooltipContent={ customTooltipFlexShrink }
									value={ getFlexShrinkSize() || '' }
									onChange={ changeFlexShrinkSize }
									step={ 1 }
									min={ 1 }
									max={ 500 }
									allowReset={ true }
								/>		
								</ResponsiveControl>
                                </>
							  

								)}


				</PanelBody>

				<PanelBody
					title={ __( 'Border & Box Shadow', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
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
							<UnitChooser
								value={ attributes.borderWidthUnit }
								onClick={borderWidthUnit => {
									setAttributes({borderWidthUnit });
									setborderWidthUnit(borderWidthUnit);
								  }}
								units={ [ 'px', 'em' ] }
						    />
                            <SizingControl
									type={ getBorderWidthType() }
									min={ 0 }
									max={ maxborderWidthUnit }
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
								enableAlpha={true} 
								/>
						</Suspense>
						
						) }
                        <ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.borderRadiusUnit }
								onClick={borderRadiusUnit => {
									setAttributes({borderRadiusUnit });
									setborderRadiusUnit(borderRadiusUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getBorderRadiusType() }
									min={ 0 }
									max={ maxborderRadiusUnit }
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
								enableAlpha={true} 
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

                ) 	|| 'hover' ===  hover && (
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
							<UnitChooser
								value={ attributes.borderWidthHvrUnit }
								onClick={borderWidthHvrUnit => {
									setAttributes({borderWidthHvrUnit });
									setborderWidthHvrUnit(borderWidthHvrUnit);
								  }}
								units={ [ 'px', 'em' ] }
						    />
                            <SizingControl
									type={ getBorderWidthHvrType() }
									min={ 0 }
									max={ maxborderWidthHvrUnit }
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
							<UnitChooser
								value={ attributes.borderRadiusHvrUnit }
								onClick={borderRadiusHvrUnit => {
									setAttributes({borderRadiusHvrUnit });
									setborderRadiusHvrUnit(borderRadiusHvrUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getBorderRadiusHvrType() }
									min={ 0 }
									max={  maxborderRadiusHvrUnit }
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
								enableAlpha={true} 
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

					</>
				)
						}
						</PanelBody>

				<PanelBody
					title={ __( 'Background', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
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
				
				</>
				
				)}	
				
				</PanelBody>

				<PanelBody
					title={ __( 'Responsive', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
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
				<PanelBody
					title={ __( 'Transition', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
				> 
				<RangeControl
				label={ __( 'Transition Duration', 'themehunk-block' ) }
				renderTooltipContent={ customTooltiptransitionAll }
				value={ attributes.transitionAll }
				onChange={ transitionAll => setAttributes({ transitionAll }) }
				step={ 0.1 }
				min={ 0 }
				max={ 3 }
				allowReset={ true }
                />
				</PanelBody>
				
                </Fragment>
            ) || 'style' === tab && (
				<Fragment>
					<PanelBody
						title={ __( 'Button', 'themehunk-block' ) }
						initialOpen={ true }
						className="th-button-panel"
					> 

					<ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonpaddingUnit }
								onClick={ buttonpaddingUnit => {
									setAttributes({ buttonpaddingUnit });
									setpaddingButtonUnit( buttonpaddingUnit );
								 }}
								units={ [ 'px', 'em', '%' ] }
						    />	
                            <SizingControl
									type={ getPaddingButtonType() }
									min={ 0 }
									max={ maxpaddingUnit }
									changeType={ changePaddingButtonType }
									onChange={ changeButtonPadding }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getButtonPadding( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getButtonPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getButtonPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getButtonPadding( 'left' )
										}
									] }
								/>

							</ResponsiveControl>  

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
				<BackgroundSelectorControl
							backgroundType={ attributes.buttonbackgroundType }
							backgroundColor={ attributes.buttonbackgroundColor }
							image={ attributes.buttonbackgroundImage }
							gradient={ attributes.buttonbackgroundGradient }
							focalPoint={ attributes.buttonbackgroundPosition }
							backgroundAttachment={ attributes.buttonbackgroundAttachment }
							backgroundRepeat={ attributes.buttonbackgroundRepeat }
							backgroundSize={ attributes.buttonbackgroundSize }
							changeBackgroundType={ value => setAttributes({ buttonbackgroundType: value }) }
							changeImage={ media => {
								setAttributes({
									buttonbackgroundImage: pick( media, [ 'id', 'url' ])
								});
							}}
							removeImage={ () => setAttributes({ buttonbackgroundImage: undefined })}
							changeColor={ value => setAttributes({ buttonbackgroundColor: value })}
							changeGradient={ value => setAttributes({ buttonbackgroundGradient: value }) }
							changeBackgroundAttachment={ value => setAttributes({ buttonbackgroundAttachment: value })}
							changeBackgroundRepeat={ value => setAttributes({ buttonbackgroundRepeat: value })}
							changeFocalPoint={ value => setAttributes({ buttonbackgroundPosition: value }) }
							changeBackgroundSize={ value => setAttributes({ buttonbackgroundSize: value }) }
						/>
						<ColorGradientControl
					label={ __( 'Color', 'themehunk-block' ) }
					colorValue={ attributes.buttonColor }
				    onColorChange={ e => setAttributes({ buttonColor: e }) }
					enableAlpha={true}
				/>
				</>
						
					
				) || 'hover' ===  hover && (
					<>
					<BackgroundSelectorControl
					backgroundType={ attributes.buttonbackgroundTypeHvr }
					backgroundColor={ attributes.buttonbackgroundColorHvr }
					image={ attributes.buttonbackgroundImageHvr }
					gradient={ attributes.buttonbackgroundGradientHvr }
					focalPoint={ attributes.buttonbackgroundPositionHvr }
					backgroundAttachment={ attributes.buttonbackgroundAttachmentHvr }
					backgroundRepeat={ attributes.buttonbackgroundRepeatHvr }
					backgroundSize={ attributes.buttonbackgroundSizeHvr }
					changeBackgroundType={ value => setAttributes({ buttonbackgroundTypeHvr: value }) }
					changeImage={ media => {
						setAttributes({
							buttonbackgroundImageHvr: pick( media, [ 'id', 'url' ])
						});
					}}
					removeImage={ () => setAttributes({ buttonbackgroundImageHvr: undefined })}
					changeColor={ value => setAttributes({ buttonbackgroundColorHvr: value })}
					changeGradient={ value => setAttributes({ buttonbackgroundGradientHvr: value }) }
					changeBackgroundAttachment={ value => setAttributes({ buttonbackgroundAttachmentHvr: value })}
					changeBackgroundRepeat={ value => setAttributes({ buttonbackgroundRepeatHvr: value })}
					changeFocalPoint={ value => setAttributes({ buttonbackgroundPositionHvr: value }) }
					changeBackgroundSize={ value => setAttributes({ buttonbackgroundSizeHvr: value }) }
				/>
				
				<ColorGradientControl
					label={ __( 'Color', 'themehunk-block' ) }
					colorValue={ attributes.buttonColorHvr }
				    onColorChange={ e => setAttributes({ buttonColorHvr: e }) }
					enableAlpha={true}
				/>

				<ColorGradientControl
					label={ __( 'Border Hover Color', 'themehunk-block' ) }
					colorValue={ attributes.buttonborderColorHvr }
					onColorChange={ e => setAttributes({ buttonborderColorHvr: e }) }
					enableAlpha={true} 
				/>
				

				</>
				
				)}
				</PanelBody>

				<PanelBody
					title={ __( 'Border & Box Shadow', 'themehunk-block' ) }
					initialOpen={ false }
					className="th-button-panel"
				> 
				<>
				<SelectControl
						label={ __( 'Border Type', 'themehunk-block' ) }
						value={ attributes.buttonborderType }
						options={ [
							{ label:  __( 'None', 'themehunk-block' ), value: 'none' },
							{ label: __( 'Solid', 'themehunk-block' ), value: 'solid' },
							{ label: __( 'Double', 'themehunk-block' ), value: 'double' },
							{ label: __( 'Dotted', 'themehunk-block' ), value: 'dotted' },
						    { label: __( 'Dashed', 'themehunk-block' ), value: 'dashed' },
							{ label: __( 'Groove', 'themehunk-block' ), value: 'groove' },
						] }
						onChange={ e => setAttributes({ buttonborderType: e }) }
					/>	
					
						
					   { 'none' !== attributes.buttonborderType && (

						<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
						<ResponsiveControl
								label={ __( 'Border Width', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonborderWidthUnit }
								onClick={buttonborderWidthUnit => {
									setAttributes({buttonborderWidthUnit });
									setborderWidthUnit(buttonborderWidthUnit);
								  }}
								units={ [ 'px', 'em' ] }
						    />
                            <SizingControl
									type={ getBorderWidthTypeButton() }
									min={ 0 }
									max={ maxborderWidthUnit }
									changeType={ changeBorderWidthTypeButton }
									onChange={ changeBorderWidthButton }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getBorderWidthButton( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getBorderWidthButton( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderWidthButton( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getBorderWidthButton( 'left' )
										}
									] }
								/>

							</ResponsiveControl>
									<ColorGradientControl
								label={ __( 'Border Color', 'themehunk-block' ) }
								colorValue={ attributes.buttonborderColor }
								onColorChange={ e => setAttributes({ buttonborderColor: e }) }
								enableAlpha={true} 
								/>
						</Suspense>
						
						) }
                        <ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonborderRadiusUnit }
								onClick={buttonborderRadiusUnit => {
									setAttributes({buttonborderRadiusUnit });
									setborderRadiusButtonUnit(borderRadiusButtonUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getBorderRadiusButtonType() }
									min={ 0 }
									max={  maxborderRadiusButtonUnit }
									changeType={ changeBorderRadiusButtonType }
									onChange={ changeBorderButtonRadius }
									options={ [
										{
											label: __( 'T-R', 'themehunk-block' ),
											type: 'top',
											value: getBorderRadiusButton( 'top' )
										},
										{
											label: __( 'T-L', 'themehunk-block' ),
											type: 'right',
											value: getBorderRadiusButton( 'right' )
										},
										{
											label: __( 'B-R', 'themehunk-block' ),
											type: 'left',
											value: getBorderRadiusButton( 'left' )
										},
										{
											label: __( 'B-L', 'themehunk-block' ),
											type: 'bottom',
											value: getBorderRadiusButton( 'bottom' )
										}
									] }
								/>

							</ResponsiveControl>

							<ControlPanelControl
							label={ __( 'Box Shadow', 'themehunk-block' ) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							resetValues={ {
								buttonboxShadow: false,
								buttonboxShadowColor: undefined,
								buttonboxShadowColorOpacity: 50,
								buttonboxShadowBlur: 5,
								buttonboxShadowSpread: 1,
								buttonboxShadowHorizontal: 0,
								buttonboxShadowVertical: 0
							} }
							onClick={ () => setAttributes({ buttonboxShadow: true }) }
						>
						
							<ColorGradientControl
								label={ __( 'Shadow Color', 'themehunk-block' ) }
								colorValue={ attributes.buttonboxShadowColor }
								onColorChange={ e => setAttributes({ buttonboxShadowColor: e }) }
								enableAlpha={true} 
							/>

							<RangeControl
								label={ __( 'Opacity', 'themehunk-block' ) }
								value={ attributes.buttonboxShadowColorOpacity }
								onChange={ e => setAttributes({ buttonboxShadowColorOpacity: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Blur', 'themehunk-block' ) }
								value={ attributes.buttonboxShadowBlur }
								onChange={ e => setAttributes({ buttonboxShadowBlur: e }) }
								min={ 0 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Spread', 'themehunk-block' ) }
								value={ attributes.buttonboxShadowSpread }
								onChange={ e => setAttributes({ buttonboxShadowSpread: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Horizontal', 'themehunk-block' ) }
								value={ attributes.buttonboxShadowHorizontal }
								onChange={ e => setAttributes({ buttonboxShadowHorizontal: e }) }
								min={ -100 }
								max={ 100 }
							/>

							<RangeControl
								label={ __( 'Vertical', 'themehunk-block' ) }
								value={ attributes.buttonboxShadowVertical }
								onChange={ e => setAttributes({ buttonboxShadowVertical: e }) }
								min={ -100 }
								max={ 100 }
							/>
							</ControlPanelControl>
				</>

				</PanelBody>

				<PanelBody title={ __( 'Typographgy', 'themehunk-block' ) }
							className="th-adv-h-panel" initialOpen={ false }
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

						<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							>    
							   <UnitChooser
								value={ attributes.fontSizeUnit }
								onClick={ fontSizeUnit => setAttributes({ fontSizeUnit }) }
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
							<UnitChooser
								value={ attributes.lineHeightUnit }
								onClick={ lineHeightUnit => setAttributes({ lineHeightUnit }) }
								units={ [ 'px', 'em', '%' ] }
						       />
							<RangeControl
							    renderTooltipContent={ customTooltiplineHeight }
								value={ getlineHeight() || '' }
								onChange={ changelineHeight }
								step={ 0.1 }
								min={ 0 }
								max={ 300 }
								allowReset={ true }
							/>
						</ResponsiveControl>

						<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							>
								<UnitChooser
								value={ attributes.letterSpacingUnit }
								onClick={ letterSpacingUnit => setAttributes({ letterSpacingUnit }) }
								units={ [ 'px', 'em', '%' ] }
						       />
							<RangeControl
							    renderTooltipContent={ customTooltipletterSpacing }
								value={ getletterSpacing() || '' }
								onChange={ changeletterSpacing }
								step={ 0.1 }
								min={ -300 }
								max={ 300 }
								allowReset={ true }
							/>
						</ResponsiveControl>					   

                </PanelBody>

				</Fragment>
			)
            
          }


        </InspectorControls>


      
    </Fragment>
	);
}

export default InsSettings;