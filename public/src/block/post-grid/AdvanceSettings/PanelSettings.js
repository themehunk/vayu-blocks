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

import PostSettings from '../PostSettings';
import Editor from '../Editor';

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
} from '../../../components/index.js';
import { alignitemstr,alignitemcnt,alignitemend,alignitemstrech, Start, Center , End, Strech, OrderStart, OrderEnd, Custom, None, Shrink, Grow, HorizontalLeft, HorizontalRight, VerticalTop, VerticalBottom} from '../../../helpers/icon.js';

import Select from 'react-select';

const PanelSettings = ({
    attributes,
    setAttributes
}) => {


    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const pick = (object, keys) => {
		if (!object || typeof object !== 'object') {
		  throw new Error('Input must be an object');
		}
	  
		return keys.reduce((acc, key) => {
		  if (object.hasOwnProperty(key)) {
			acc[key] = object[key];
		  }
		  return acc;
		}, {});
	  };
    
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
			setAttributes({ customWidth: value });
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

	//padding
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
		switch (getView) {
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
		if ('Desktop' === getView) {
			setAttributes({ marginType: value, marginTypeTablet: value, marginTypeMobile: value });
		} else if ('Tablet' === getView) {
			setAttributes({ marginTypeTablet: value });
		} else if ('Mobile' === getView) {
			setAttributes({ marginTypeMobile: value });
		}
	};
	
	const changeMargin = (type, value) => {
		switch (getView) {
			case 'Desktop':
				if ('linked' === attributes.marginType) {
					setAttributes({ margin: value, marginTop: value, marginRight: value, marginBottom: value, marginLeft: value });
				} else {
					setAttributes({ [desktopMarginType[type]]: value });
				}
				break;
			case 'Tablet':
				if ('linked' === attributes.marginTypeTablet) {
					setAttributes({ marginTopTablet: value, marginRightTablet: value, marginBottomTablet: value, marginLeftTablet: value });
				} else {
					setAttributes({ [tabletMarginType[type]]: value });
				}
				break;
			case 'Mobile':
				if ('linked' === attributes.marginTypeMobile) {
					setAttributes({ marginTopMobile: value, marginRightMobile: value, marginBottomMobile: value, marginLeftMobile: value });
				} else {
					setAttributes({ [mobileMarginType[type]]: value });
				}
				break;
		}
	};
	
	const getMargin = type => {
		switch (type) {
			case 'top':
				switch (getView) {
					case 'Desktop':
						return 'linked' === attributes.marginType ? attributes.marginTop : attributes.marginTop;
					case 'Tablet':
						return 'linked' === attributes.marginTypeTablet ? attributes.marginTopTablet : attributes.marginTopTablet;
					case 'Mobile':
						return 'linked' === attributes.marginTypeMobile ? attributes.marginTopMobile : attributes.marginTopMobile;
				}
			case 'right':
				switch (getView) {
					case 'Desktop':
						return 'linked' === attributes.marginType ? attributes.marginRight : attributes.marginRight;
					case 'Tablet':
						return 'linked' === attributes.marginTypeTablet ? attributes.marginRightTablet : attributes.marginRightTablet;
					case 'Mobile':
						return 'linked' === attributes.marginTypeMobile ? attributes.marginRightMobile : attributes.marginRightMobile;
				}
			case 'bottom':
				switch (getView) {
					case 'Desktop':
						return 'linked' === attributes.marginType ? attributes.marginBottom : attributes.marginBottom;
					case 'Tablet':
						return 'linked' === attributes.marginTypeTablet ? attributes.marginBottomTablet : attributes.marginBottomTablet;
					case 'Mobile':
						return 'linked' === attributes.marginTypeMobile ? attributes.marginBottomMobile : attributes.marginBottomMobile;
				}
			case 'left':
				switch (getView) {
					case 'Desktop':
						return 'linked' === attributes.marginType ? attributes.marginLeft : attributes.marginLeft;
					case 'Tablet':
						return 'linked' === attributes.marginTypeTablet ? attributes.marginLeftTablet : attributes.marginLeftTablet;
					case 'Mobile':
						return 'linked' === attributes.marginTypeMobile ? attributes.marginLeftMobile : attributes.marginLeftMobile;
				}
		}
	
		return undefined;
	};
	
	// Padding
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
	switch (getView) {
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
	if ('Desktop' === getView) {
	  setAttributes({ buttonpaddingType: value });
	} else if ('Tablet' === getView) {
	  setAttributes({ buttonpaddingTypeTablet: value });
	} else if ('Mobile' === getView) {
	  setAttributes({ buttonpaddingTypeMobile: value });
	}
  };
  
  const changeButtonPadding = (type, value) => {
	switch (getView) {
	  case 'Desktop':
		if ('linked' === attributes.buttonpaddingType) {
		  setAttributes({ buttonpadding: value,buttonpaddingTop:value,buttonpaddingBottom:value,buttonpaddingLeft:value,buttonpaddingRight:value });
		} else {
		  setAttributes({ [desktopPaddingButtonType[type]]: value });
		}
		break;
	  case 'Tablet':
		if ('linked' === attributes.buttonpaddingTypeTablet) {
		  setAttributes({ buttonpaddingTablet: value,buttonpaddingTopTablet:value,buttonpaddingBottomablet:value,buttonpaddingLeftablet:value,buttonpaddingRightablet:value });
		} else {
		  setAttributes({ [tabletPaddingButtonType[type]]: value });
		}
		break;
	  case 'Mobile':
		if ('linked' === attributes.buttonpaddingTypeMobile) {
			setAttributes({ buttonpaddingMobile: value,buttonpaddingTopMobile:value,buttonpaddingBottomablet:value,buttonpaddingLefMobile:value,buttonpaddingRighMobile:value });
		} else {
		  setAttributes({ [mobilePaddingButtonType[type]]: value });
		}
		break;
	}
  };
  
const getButtonPadding = type => {
	switch (getView) {
			case 'Desktop':
				return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes[desktopPaddingButtonType[type]];
			case 'Tablet':
				return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes[tabletPaddingButtonType[type]];
			case 'Mobile':
				return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes[mobilePaddingButtonType[type]];
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


//border radius
const desktopborderradiusType = {
	top: 'borderradiusTop',
	right: 'borderradiusRight',
	bottom: 'borderradiusBottom',
	left: 'borderradiusLeft'
};

const tabletborderradiusType = {
	top: 'borderradiusTopTablet',
	right: 'borderradiusRightTablet',
	bottom: 'borderradiusBottomTablet',
	left: 'borderradiusLeftTablet'
};

const mobileborderradiusType = {
	top: 'borderradiusTopMobile',
	right: 'borderradiusRightMobile',
	bottom: 'borderradiusBottomMobile',
	left: 'borderradiusLeftMobile'
};

const getborderradiusType = () => {
	switch (getView) {
		case 'Desktop':
			return attributes.borderradiusType;
		case 'Tablet':
			return attributes.borderradiusTypeTablet;
		case 'Mobile':
			return attributes.borderradiusTypeMobile;
		default:
			return undefined;
	}
};

const changeborderradiusType = value => {
	if ('Desktop' === getView) {
		setAttributes({ borderradiusType: value, borderradiusTypeTablet: value, borderradiusTypeMobile: value });
	} else if ('Tablet' === getView) {
		setAttributes({ borderradiusTypeTablet: value });
	} else if ('Mobile' === getView) {
		setAttributes({ borderradiusTypeMobile: value });
	}
};

const changeborderradius = (type, value) => {
	switch (getView) {
		case 'Desktop':
			if ('linked' === attributes.borderradiusType) {
				setAttributes({ borderradius: value, borderradiusTop: value, borderradiusRight: value, borderradiusBottom: value, borderradiusLeft: value });
			} else {
				setAttributes({ [desktopborderradiusType[type]]: value });
			}
			break;
		case 'Tablet':
			if ('linked' === attributes.borderradiusTypeTablet) {
				setAttributes({ borderradiusTopTablet: value, borderradiusRightTablet: value, borderradiusBottomTablet: value, borderradiusLeftTablet: value });
			} else {
				setAttributes({ [tabletborderradiusType[type]]: value });
			}
			break;
		case 'Mobile':
			if ('linked' === attributes.borderradiusTypeMobile) {
				setAttributes({ borderradiusTopMobile: value, borderradiusRightMobile: value, borderradiusBottomMobile: value, borderradiusLeftMobile: value });
			} else {
				setAttributes({ [mobileborderradiusType[type]]: value });
			}
			break;
	}
};

const getborderradius = type => {
	switch (type) {
		case 'top':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusType ? attributes.borderradiusTop : attributes.borderradiusTop;
				case 'Tablet':
					return 'linked' === attributes.borderradiusTypeTablet ? attributes.borderradiusTopTablet : attributes.borderradiusTopTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusTypeMobile ? attributes.borderradiusTopMobile : attributes.borderradiusTopMobile;
			}
		case 'right':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusType ? attributes.borderradiusRight : attributes.borderradiusRight;
				case 'Tablet':
					return 'linked' === attributes.borderradiusTypeTablet ? attributes.borderradiusRightTablet : attributes.borderradiusRightTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusTypeMobile ? attributes.borderradiusRightMobile : attributes.borderradiusRightMobile;
			}
		case 'bottom':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusType ? attributes.borderradiusBottom : attributes.borderradiusBottom;
				case 'Tablet':
					return 'linked' === attributes.borderradiusTypeTablet ? attributes.borderradiusBottomTablet : attributes.borderradiusBottomTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusTypeMobile ? attributes.borderradiusBottomMobile : attributes.borderradiusBottomMobile;
			}
		case 'left':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusType ? attributes.borderradiusLeft : attributes.borderradiusLeft;
				case 'Tablet':
					return 'linked' === attributes.borderradiusTypeTablet ? attributes.borderradiusLeftTablet : attributes.borderradiusLeftTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusTypeMobile ? attributes.borderradiusLeftMobile : attributes.borderradiusLeftMobile;
			}
	}

	return undefined;
};

//border radius Hvr
const desktopborderradiusHvrType = {
	top: 'borderradiusHvrTop',
	right: 'borderradiusHvrRight',
	bottom: 'borderradiusHvrBottom',
	left: 'borderradiusHvrLeft'
};

const tabletborderradiusHvrType = {
	top: 'borderradiusHvrTopTablet',
	right: 'borderradiusHvrRightTablet',
	bottom: 'borderradiusHvrBottomTablet',
	left: 'borderradiusHvrLeftTablet'
};

const mobileborderradiusHvrType = {
	top: 'borderradiusHvrTopMobile',
	right: 'borderradiusHvrRightMobile',
	bottom: 'borderradiusHvrBottomMobile',
	left: 'borderradiusHvrLeftMobile'
};

const getborderradiusHvrType = () => {
	switch (getView) {
		case 'Desktop':
			return attributes.borderradiusHvrType;
		case 'Tablet':
			return attributes.borderradiusHvrTypeTablet;
		case 'Mobile':
			return attributes.borderradiusHvrTypeMobile;
		default:
			return undefined;
	}
};

const changeborderradiusHvrType = value => {
	if ('Desktop' === getView) {
		setAttributes({ borderradiusHvrType: value, borderradiusHvrTypeTablet: value, borderradiusHvrTypeMobile: value });
	} else if ('Tablet' === getView) {
		setAttributes({ borderradiusHvrTypeTablet: value });
	} else if ('Mobile' === getView) {
		setAttributes({ borderradiusHvrTypeMobile: value });
	}
};

const changeborderradiusHvr = (type, value) => {
	switch (getView) {
		case 'Desktop':
			if ('linked' === attributes.borderradiusHvrType) {
				setAttributes({ borderradiusHvr: value, borderradiusHvrTop: value, borderradiusHvrRight: value, borderradiusHvrBottom: value, borderradiusHvrLeft: value });
			} else {
				setAttributes({ [desktopborderradiusHvrType[type]]: value });
			}
			break;
		case 'Tablet':
			if ('linked' === attributes.borderradiusHvrTypeTablet) {
				setAttributes({ borderradiusHvrTopTablet: value, borderradiusHvrRightTablet: value, borderradiusHvrBottomTablet: value, borderradiusHvrLeftTablet: value });
			} else {
				setAttributes({ [tabletborderradiusHvrType[type]]: value });
			}
			break;
		case 'Mobile':
			if ('linked' === attributes.borderradiusHvrTypeMobile) {
				setAttributes({ borderradiusHvrTopMobile: value, borderradiusHvrRightMobile: value, borderradiusHvrBottomMobile: value, borderradiusHvrLeftMobile: value });
			} else {
				setAttributes({ [mobileborderradiusHvrType[type]]: value });
			}
			break;
	}
};

const getborderradiusHvr = type => {
	switch (type) {
		case 'top':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusHvrType ? attributes.borderradiusHvrTop : attributes.borderradiusHvrTop;
				case 'Tablet':
					return 'linked' === attributes.borderradiusHvrTypeTablet ? attributes.borderradiusHvrTopTablet : attributes.borderradiusHvrTopTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusHvrTypeMobile ? attributes.borderradiusHvrTopMobile : attributes.borderradiusHvrTopMobile;
			}
		case 'right':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusHvrType ? attributes.borderradiusHvrRight : attributes.borderradiusHvrRight;
				case 'Tablet':
					return 'linked' === attributes.borderradiusHvrTypeTablet ? attributes.borderradiusHvrRightTablet : attributes.borderradiusHvrRightTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusHvrTypeMobile ? attributes.borderradiusHvrRightMobile : attributes.borderradiusHvrRightMobile;
			}
		case 'bottom':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusHvrType ? attributes.borderradiusHvrBottom : attributes.borderradiusHvrBottom;
				case 'Tablet':
					return 'linked' === attributes.borderradiusHvrTypeTablet ? attributes.borderradiusHvrBottomTablet : attributes.borderradiusHvrBottomTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusHvrTypeMobile ? attributes.borderradiusHvrBottomMobile : attributes.borderradiusHvrBottomMobile;
			}
		case 'left':
			switch (getView) {
				case 'Desktop':
					return 'linked' === attributes.borderradiusHvrType ? attributes.borderradiusHvrLeft : attributes.borderradiusHvrLeft;
				case 'Tablet':
					return 'linked' === attributes.borderradiusHvrTypeTablet ? attributes.borderradiusHvrLeftTablet : attributes.borderradiusHvrLeftTablet;
				case 'Mobile':
					return 'linked' === attributes.borderradiusHvrTypeMobile ? attributes.borderradiusHvrLeftMobile : attributes.borderradiusHvrLeftMobile;
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
				setAttributes({ borderRadiusHvr: value , borderRadiusHvrTablet: value , borderRadiusHvrMobile: value });
			} else {
				//setAttributes({ [desktopborderRadiusHvrType[type]]: value , [tabletborderRadiusHvrType[type]]: value , [mobileborderRadiusHvrType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.borderRadiusHvrTypeTablet ) {
				setAttributes({ borderRadiusHvrTablet: value });
			} else {
				//setAttributes({ [tabletborderRadiusHvrType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.borderRadiusHvrTypeMobile ) {
				setAttributes({ borderRadiusHvrMobile: value });
			} else {
				//setAttributes({ [mobileborderRadiusHvrType[type]]: value });
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
				return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusTopTablet;
			case 'Mobile':
				return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusTopMobile;
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
			setAttributes({ verticalOrientationOffsetBottomMobile: value });
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
	const [customWidthUnit, setcustomWidthUnit] = useState('%');
	const maxcustomWidthUnit = customWidthUnit === 'px' ? 1200 : customWidthUnit === 'em' ? 50 : customWidthUnit === '%' ? 100:'';
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

    return (
		<Fragment>
			<InspectorControls>
				<div className='th-block-ins th-button-panel'>
			<InsSettingHeader value={ tab }
						options={[
							{
								label: __( 'Setting', 'vayu-blocks' ),
								value: 'setting',
								icon: 'colorwand'
							},
							{
								label: __( 'Style', 'vayu-blocks' ),
								value: 'style',
								icon: 'diamond'
							},
							{
								label: __( 'Advanced', 'vayu-blocks' ),
								value: 'advanced',
								icon: 'colorpalette'
							}
						]}
						onChange={ setTab }
				/>
				{'setting' === tab && (
									<Fragment>
										<PostSettings attributes={attributes} setAttributes={setAttributes} />
									</Fragment>

				) || 'advanced' === tab && (
					<Fragment>
						
						<PanelBody title={ __( 'Layout', 'vayu-blocks' ) }
							initialOpen={ false }
							className="th-button-panel"
						>           
									<SelectControl
										label={ __( 'Width', 'vayu-blocks' ) }
										value={ attributes.widthType }
										options={ [
											{ label:  __( 'Default', 'vayu-blocks' ), value: 'default' },
											{ label: __( 'Wide Width', 'vayu-blocks' ), value: 'alignwide' },
											{ label: __( 'Full Width', 'vayu-blocks' ), value: 'alignfull' },
										] }
										onChange={ e => setAttributes({ widthType: e,customWidth:100 }) }
									/>

									<ResponsiveControl
									label={ __( 'Custom Width', 'vayu-blocks' ) }
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
									

									<ResponsiveControl label={__('Padding', 'your-text-domain')}>

										<UnitChooser
											value={attributes.paddingUnit}
											onClick={paddingUnit => {
												setAttributes({ paddingUnit });
												// Optionally update other state or props
											}}
											units={['px', 'em', '%']}
										/>
										<SizingControl
											type={getPaddingButtonType()}
											min={0}
											max={maxpaddingUnit} // Define max margin unit
											changeType={changePaddingButtonType}
											onChange={(type, value) => changeButtonPadding(type, value)}
											options={[
												{ label: __('Top', 'your-text-domain'), type: 'top', value: getButtonPadding('top') },
												{ label: __('Right', 'your-text-domain'), type: 'right', value: getButtonPadding('right') },
												{ label: __('Bottom', 'your-text-domain'), type: 'bottom', value: getButtonPadding('bottom') },
												{ label: __('Left', 'your-text-domain'), type: 'left', value: getButtonPadding('left') }
											]}
										/>
									</ResponsiveControl>
									
									<ResponsiveControl label={__('Margin', 'your-text-domain')}>
										<UnitChooser
											value={attributes.marginUnit}
											onClick={marginUnit => {
												setAttributes({ marginUnit });
												// Optionally update other state or props
											}}
											units={['px', 'em', '%']}
										/>
										<SizingControl
											type={getMarginType()}
											min={0}
											max={maxmarginUnit} // Define max margin unit
											changeType={changeMarginType}
											onChange={(type, value) => changeMargin(type, value)}
											options={[
												{ label: __('Top', 'your-text-domain'), type: 'top', value: getMargin('top') },
												{ label: __('Right', 'your-text-domain'), type: 'right', value: getMargin('right') },
												{ label: __('Bottom', 'your-text-domain'), type: 'bottom', value: getMargin('bottom') },
												{ label: __('Left', 'your-text-domain'), type: 'left', value: getMargin('left') }
											]}
										/>
									</ResponsiveControl>

									<SelectControl
										label={ __( 'Position', 'vayu-blocks' ) }
										value={ attributes.position }
										options={ [
											{ label:  __( 'Default', 'vayu-blocks' ), value: 'relative' },
											{ label: __( 'Absolute', 'vayu-blocks' ), value: 'absolute' },
											{ label: __( 'Fixed', 'vayu-blocks' ), value: 'fixed' },
											
										] }
										onChange={ e => setAttributes({ position: e }) }
									/>
									<ResponsiveControl
										label={ __( 'Z-index', 'vayu-blocks' ) }
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

						<PanelBody title={ __( 'Border & Box Shadow', 'vayu-blocks' ) }
							initialOpen={ false }
							className="th-button-panel"
						> 
						<HoverControl value={ hover }
							options={[
								{
									label: __( 'Normal', 'vayu-blocks' ),
									value: 'normal'
								},
								{
									label: __( 'Hover', 'vayu-blocks' ),
									value: 'hover'
								}
							]}
							onChange={ setHover } />
								
						{ 'normal' ===  hover &&  (	
							<>
							<SelectControl
								label={ __( 'Border Type', 'vayu-blocks' ) }
								value={ attributes.borderType }
								options={ [
									{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
									{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
									{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
									{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
									{ label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
									{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
								] }
								onChange={ e => setAttributes({ borderType: e }) }
							/>	
								
							{ 'none' !== attributes.borderType && (

								<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
								<ResponsiveControl
										label={ __( 'Border Width', 'vayu-blocks' ) }
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
													label: __( 'Top', 'vayu-blocks' ),
													type: 'top',
													value: getBorderWidth( 'top' )
												},
												{
													label: __( 'Right', 'vayu-blocks' ),
													type: 'right',
													value: getBorderWidth( 'right' )
												},
												{
													label: __( 'Bottom', 'vayu-blocks' ),
													type: 'bottom',
													value: getBorderWidth( 'bottom' )
												},
												{
													label: __( 'Left', 'vayu-blocks' ),
													type: 'left',
													value: getBorderWidth( 'left' )
												}
											] }
										/>

									</ResponsiveControl>
											<ColorGradientControl
										label={ __( 'Border Color', 'vayu-blocks' ) }
										colorValue={ attributes.borderColor }
										onColorChange={ e => setAttributes({ borderColor: e }) }
										enableAlpha={true} 
										/>
								</Suspense>
								
								) }
								<ResponsiveControl
										label={ __( 'Border Radius', 'vayu-blocks' ) }
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
											type={ getborderradiusType() }
											min={ 0 }
											max={ maxborderRadiusUnit }
											changeType={ changeborderradiusType }
											onChange={ changeborderradius }
											options={ [
												{
													label: __( 'T-R', 'vayu-blocks' ),
													type: 'top',
													value: getborderradius( 'top' )
												},
												{
													label: __( 'T-L', 'vayu-blocks' ),
													type: 'right',
													value: getborderradius( 'right' )
												},
												{
													label: __( 'B-R', 'vayu-blocks' ),
													type: 'left',
													value: getborderradius( 'left' )
												},
												{
													label: __( 'B-L', 'vayu-blocks' ),
													type: 'bottom',
													value: getborderradius( 'bottom' )
												}
											] }
										/>

									</ResponsiveControl>

									<ControlPanelControl
									label={ __( 'Box Shadow', 'vayu-blocks' ) }
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
										label={ __( 'Shadow Color', 'vayu-blocks' ) }
										colorValue={ attributes.boxShadowColor }
										onColorChange={ e => setAttributes({ boxShadowColor: e }) }
										enableAlpha={true} 
									/>

									<RangeControl
										label={ __( 'Opacity', 'vayu-blocks' ) }
										value={ attributes.boxShadowColorOpacity }
										onChange={ e => setAttributes({ boxShadowColorOpacity: e }) }
										min={ 0 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Blur', 'vayu-blocks' ) }
										value={ attributes.boxShadowBlur }
										onChange={ e => setAttributes({ boxShadowBlur: e }) }
										min={ 0 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Spread', 'vayu-blocks' ) }
										value={ attributes.boxShadowSpread }
										onChange={ e => setAttributes({ boxShadowSpread: e }) }
										min={ -100 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Horizontal', 'vayu-blocks' ) }
										value={ attributes.boxShadowHorizontal }
										onChange={ e => setAttributes({ boxShadowHorizontal: e }) }
										min={ -100 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Vertical', 'vayu-blocks' ) }
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
								label={ __( 'Border Type', 'vayu-blocks' ) }
								value={ attributes.borderHvrType }
								options={ [
									{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
									{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
									{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
									{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
									{ label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
									{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
								] }
								onChange={ e => setAttributes({ borderHvrType: e }) }
							/>	

						{ 'none' !== attributes.borderHvrType && (
							<Suspense fallback={<Placeholder><Spinner/></Placeholder>}>
							<ResponsiveControl
										label={ __( 'Border Width', 'vayu-blocks' ) }
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
													label: __( 'Top', 'vayu-blocks' ),
													type: 'top',
													value: getBorderWidthHvr( 'top' )
												},
												{
													label: __( 'Right', 'vayu-blocks' ),
													type: 'right',
													value: getBorderWidthHvr( 'right' )
												},
												{
													label: __( 'Bottom', 'vayu-blocks' ),
													type: 'bottom',
													value: getBorderWidthHvr( 'bottom' )
												},
												{
													label: __( 'Left', 'vayu-blocks' ),
													type: 'left',
													value: getBorderWidthHvr( 'left' )
												}
											] }
										/>

									</ResponsiveControl>		
							<ColorGradientControl
							label={ __( 'Border Hover Color', 'vayu-blocks' ) }
							colorValue={ attributes.borderColorHvr }
							onColorChange={ e => setAttributes({ borderColorHvr: e }) }
							/>
							</Suspense>
			
							) }

									<ResponsiveControl
										label={ __( 'Border Radius', 'vayu-blocks' ) }
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
											type={ getborderradiusHvrType() }
											min={ 0 }
											max={ maxborderRadiusUnit }
											changeType={ changeborderradiusHvrType }
											onChange={ changeborderradiusHvr }
											options={ [
												{
													label: __( 'T-R', 'vayu-blocks' ),
													type: 'top',
													value: getborderradiusHvr( 'top' )
												},
												{
													label: __( 'T-L', 'vayu-blocks' ),
													type: 'right',
													value: getborderradiusHvr( 'right' )
												},
												{
													label: __( 'B-R', 'vayu-blocks' ),
													type: 'left',
													value: getborderradiusHvr( 'left' )
												},
												{
													label: __( 'B-L', 'vayu-blocks' ),
													type: 'bottom',
													value: getborderradiusHvr( 'bottom' )
												}
											] }
										/>

									</ResponsiveControl>

									<ControlPanelControl
									label={ __( 'Box Shadow', 'vayu-blocks' ) }
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
										label={ __( 'Shadow Color', 'vayu-blocks' ) }
										colorValue={ attributes.boxShadowColorHvr }
										onColorChange={ e => setAttributes({ boxShadowColorHvr: e }) }
										enableAlpha={true} 
									/>

									<RangeControl
										label={ __( 'Opacity', 'vayu-blocks' ) }
										value={ attributes.boxShadowColorOpacityHvr }
										onChange={ e => setAttributes({ boxShadowColorOpacityHvr: e }) }
										min={ 0 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Blur', 'vayu-blocks' ) }
										value={ attributes.boxShadowBlurHvr }
										onChange={ e => setAttributes({ boxShadowBlurHvr: e }) }
										min={ 0 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Spread', 'vayu-blocks' ) }
										value={ attributes.boxShadowSpreadHvr }
										onChange={ e => setAttributes({ boxShadowSpreadHvr: e }) }
										min={ -100 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Horizontal', 'vayu-blocks' ) }
										value={ attributes.boxShadowHorizontalHvr }
										onChange={ e => setAttributes({ boxShadowHorizontalHvr: e }) }
										min={ -100 }
										max={ 100 }
									/>

									<RangeControl
										label={ __( 'Vertical', 'vayu-blocks' ) }
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

						<PanelBody title={ __( 'Background', 'vayu-blocks' ) }
							initialOpen={ false }
							className="th-button-panel"
						> 

						<HoverControl value={ hover }
							options={[
								{
									label: __( 'Normal', 'vayu-blocks' ),
									value: 'normal'
								},
								{
									label: __( 'Hover', 'vayu-blocks' ),
									value: 'hover'
								}
							]}
							onChange={ setHover } />
						
						{ 'normal' ===  hover &&  (
						
						<BackgroundSelectorControl
									backgroundType={ attributes.backgroundType }
									backgroundColor={ attributes.backgroundColor }
									image={ attributes.backgroundImage }
								//	gradient={ attributes.backgroundGradient }
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

						<PanelBody title={ __( 'Transition', 'vayu-blocks' ) }
							initialOpen={ false }
							className="th-button-panel"
						> 
						<RangeControl
						label={ __( 'Transition Duration', 'vayu-blocks' ) }
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
				<Editor attributes={attributes} setAttributes={setAttributes} />

					{/* <PanelBody title={ __( 'Typographgy', 'vayu-blocks' ) }
								className="th-adv-h-panel" initialOpen={ false }
							>	
							<GoogleFontsControl
									label={ __( 'Font Family', 'vayu-blocks' ) }
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
									label={ __( 'Font Size', 'vayu-blocks' ) }
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
									label={ __( 'Line Height', 'vayu-blocks' ) }
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
									label={ __( 'Letter Spacing', 'vayu-blocks' ) }
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

					</PanelBody> */}

					</Fragment>
				)	
			}
			</div>
			</InspectorControls>  

    	</Fragment>
	);
}

export default PanelSettings;