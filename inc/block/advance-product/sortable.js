/**
 * External dependencies
 */
import classnames from 'classnames';

import {
	SortableContainer,
	SortableElement,
	SortableHandle
} from 'react-sortable-hoc';
import { debounce } from 'lodash';
/**
 * WordPress dependencies
 */
import {__experimentalColorGradientControl as ColorGradientControl} from '@wordpress/block-editor';
import {
	__,
	sprintf
} from '@wordpress/i18n';

import {
	startCase,
	toLower
} from 'lodash';

import {
	Button,
	TextControl,
	SelectControl,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

import {
	InsSettingHeader,
	ResponsiveControl,
	SizingControl,
	HoverControl,
	ControlPanelControl,
	BackgroundSelectorControl,
	UnitChooser,
	ToogleGroupControl,
	GoogleFontsControl,
 } from '../../../src/components/index.js';

import {
    Fragment,
    useState,
    Suspense
} from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { applyFilters } from '@wordpress/hooks';

const DragHandle = SortableHandle( () => {
	return (
		<div className="th-sortable-handle" tabIndex="0">
			<span></span>
		</div>
	);
});

const fieldMapping = {
	image: 'displayFeaturedImage',
	category: 'displayCategory',
	title: 'displayTitle',
	price: 'displayPrice',
    rating: 'displayRating',
    button: 'displayButton',
	description: 'displayDescription'
};

export const SortableItem = ({
	attributes,
	setAttributes,
	template,
	disabled
}) => {
	const getView = useSelect( select => {

		const { getView } = select( 'themehunk-blocks/data' );

		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const [ isOpen, setOpen ] = useState( false );

	const isCustomMeta = template?.startsWith( 'custom_' );
	const customMeta = attributes?.customMetas?.filter( ({ id }) =>  id === template )?.pop();

	const templateLookUp = {
		image: attributes.displayFeaturedImage,
		category:attributes.displayCategory,
		title: attributes.displayTitle,
        price: attributes.displayPrice,
        rating:attributes.displayRating,
		button:attributes.displayButton
	};

	const toggleField = fieldName => {
		const field = fieldMapping[ fieldName ] || fieldName;
		setAttributes({ [field]: ! attributes[ field ] });
	};

	const setAttributesCustomMeta = attr => {
		const newMeta = { ...customMeta, ...attr };
		setAttributes({
			customMetas: attributes.customMetas.map( currentMeta => {
				if ( currentMeta.id === customMeta.id ) {
					return newMeta;
				}
				return currentMeta;
			})
		});
	};

	const label = ! isCustomMeta ? startCase( toLower( template ) ) : customMeta;
	const canEdit = templateLookUp[ template ] || customMeta?.display;
	const icon = canEdit ? 'visibility' : 'hidden';

	/* translators: %s Label */
	let message = sprintf( __( 'Display %s', 'themehunk-block' ), label );
	if ( canEdit ) {

		/* translators: %s Label */
		message = sprintf( __( 'Hide %s', 'themehunk-block' ), label );
	}

	// title font family
	const changetitleFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				titlefontFamily: value,
				titlefontVariant: value
			});
		} else {
			setAttributes({
				titlefontFamily: value,
				titlefontVariant: 'normal',
				titlefontStyle: 'normal'
			});
		}
	};
	//title lineheight
	const [titlelineHeightUnit, settitlelineHeightUnit] = useState('px');
	const maxtitlelineHeightUnit = titlelineHeightUnit === 'px' ? 150 : titlelineHeightUnit === 'em' ? 10 : titlelineHeightUnit === '%' ? 100:'';
	const customTooltiptitlelineHeight = value => `${value}${attributes.titlelineHeightUnit}`;
	// verticalOrientationOffset bottom
	const gettitlelineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titlelineHeight;
		case 'Tablet':
			return attributes.titlelineHeightTablet;
		case 'Mobile':
			return attributes.titlelineHeightMobile;
		default:
			return undefined;
		}
	};

    const changetitlelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titlelineHeight: value, titlelineHeightTablet: value, titlelineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titlelineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titlelineHeightMobile: value });
		}
	};

	//title fontsize
	const [titlefontSizeUnit, settitlefontSizeUnit] = useState('px');
	const maxtitlefontSizeUnit = titlefontSizeUnit === 'px' ? 150 : titlefontSizeUnit === 'em' ? 10 : titlefontSizeUnit === '%' ? 100:'';
	const customTooltiptitlefontSize = value => `${value}${attributes.titlefontSizeUnit}`;

	const gettitlefontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titlefontSize;
		case 'Tablet':
			return attributes.titlefontSizeTablet;
		case 'Mobile':
			return attributes.titlefontSizeMobile;
		default:
			return undefined;
		}
	};
    const changetitlefontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titlefontSize: value, titlefontSizeTablet: value, titlefontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titlefontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titlefontSizeMobile: value });
		}
	};

	//title letter spacing
	const [titleletterSpacingUnit, settitleletterSpacingUnit] = useState('px');
	const maxtitleletterSpacingUnit = titleletterSpacingUnit === 'px' ? 150 : titleletterSpacingUnit === 'em' ? 10 : titleletterSpacingUnit === '%' ? 100:'';
	const customTooltiptitleletterSpacing = value => `${value}${attributes.titleletterSpacingUnit}`;
	// verticalOrientationOffset bottom
	const gettitleletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.titleletterSpacing;
		case 'Tablet':
			return attributes.titleletterSpacingTablet;
		case 'Mobile':
			return attributes.titleletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changetitleletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ titleletterSpacing: value, titleletterSpacingTablet: value, titleletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ titleletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ titleletterSpacingMobile: value });
		}
	};

	// cat font family
	const changecatFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				catfontFamily: value,
				catfontVariant: value
			});
		} else {
			setAttributes({
				catfontFamily: value,
				catfontVariant: 'normal',
				catfontStyle: 'normal'
			});
		}
	};
	//cat lineheight
	const [catlineHeightUnit, setcatlineHeightUnit] = useState('px');
	const maxcatlineHeightUnit = catlineHeightUnit === 'px' ? 150 : catlineHeightUnit === 'em' ? 10 : catlineHeightUnit === '%' ? 100:'';
	const customTooltipcatlineHeight = value => `${value}${attributes.catlineHeightUnit}`;

	const getcatlineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catlineHeight;
		case 'Tablet':
			return attributes.catlineHeightTablet;
		case 'Mobile':
			return attributes.catlineHeightMobile;
		default:
			return undefined;
		}
	};

    const changecatlineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catlineHeight: value, catlineHeightTablet: value, catlineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catlineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catlineHeightMobile: value });
		}
	};

	//title fontsize
	const [catfontSizeUnit, setcatfontSizeUnit] = useState('px');
	const maxcatfontSizeUnit = catfontSizeUnit === 'px' ? 150 : catfontSizeUnit === 'em' ? 10 : catfontSizeUnit === '%' ? 100:'';
	const customTooltipcatfontSize = value => `${value}${attributes.catfontSizeUnit}`;

	const getcatfontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catfontSize;
		case 'Tablet':
			return attributes.catfontSizeTablet;
		case 'Mobile':
			return attributes.catfontSizeMobile;
		default:
			return undefined;
		}
	};
    const changecatfontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catfontSize: value, catfontSizeTablet: value, catfontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catfontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catfontSizeMobile: value });
		}
	};

	//title letter spacing
	const [catletterSpacingUnit, setcatletterSpacingUnit] = useState('px');
	const maxcatletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : catletterSpacingUnit === 'em' ? 10 : catletterSpacingUnit === '%' ? 100:'';
	const customTooltipcatletterSpacing = value => `${value}${attributes.catletterSpacingUnit}`;

	const getcatletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.catletterSpacing;
		case 'Tablet':
			return attributes.catletterSpacingTablet;
		case 'Mobile':
			return attributes.catletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changecatletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ catletterSpacing: value, catletterSpacingTablet: value, catletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ catletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ catletterSpacingMobile: value });
		}
	};
    // price font family
	const changepriceFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				pricefontFamily: value,
				pricefontVariant: value
			});
		} else {
			setAttributes({
				pricefontFamily: value,
				pricefontVariant: 'normal',
				pricefontStyle: 'normal'
			});
		}
	};
	//price lineheight
	const [pricelineHeightUnit, setpricelineHeightUnit] = useState('px');
	const maxpricelineHeightUnit = pricelineHeightUnit === 'px' ? 150 : pricelineHeightUnit === 'em' ? 10 : pricelineHeightUnit === '%' ? 100:'';
	const customTooltippricelineHeight = value => `${value}${attributes.pricelineHeightUnit}`;

	const getpricelineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.pricelineHeight;
		case 'Tablet':
			return attributes.pricelineHeightTablet;
		case 'Mobile':
			return attributes.pricelineHeightMobile;
		default:
			return undefined;
		}
	};

    const changepricelineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ pricelineHeight: value, pricelineHeightTablet: value, pricelineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ pricelineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ pricelineHeightMobile: value });
		}
	};

	//price fontsize
	const [pricefontSizeUnit, setpricefontSizeUnit] = useState('px');
	const maxpricefontSizeUnit = pricefontSizeUnit === 'px' ? 150 : pricefontSizeUnit === 'em' ? 10 : pricefontSizeUnit === '%' ? 100:'';
	const customTooltippricefontSize = value => `${value}${attributes.pricefontSizeUnit}`;

	const getpricefontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.pricefontSize;
		case 'Tablet':
			return attributes.pricefontSizeTablet;
		case 'Mobile':
			return attributes.pricefontSizeMobile;
		default:
			return undefined;
		}
	};
    const changepricefontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ pricefontSize: value, pricefontSizeTablet: value, pricefontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ pricefontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ pricefontSizeMobile: value });
		}
	};

	//price letter spacing
	const [priceletterSpacingUnit, setpriceletterSpacingUnit] = useState('px');
	const maxpriceletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : priceletterSpacingUnit === 'em' ? 10 : priceletterSpacingUnit === '%' ? 100:'';
	const customTooltippriceletterSpacing = value => `${value}${attributes.priceletterSpacingUnit}`;

	const getpriceletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.priceletterSpacing;
		case 'Tablet':
			return attributes.priceletterSpacingTablet;
		case 'Mobile':
			return attributes.priceletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changepriceletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ priceletterSpacing: value, priceletterSpacingTablet: value, priceletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ priceletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ priceletterSpacingMobile: value });
		}
	};

	//rating lineheight
	const [ratinglineHeightUnit, setratinglineHeightUnit] = useState('px');
	const maxratinglineHeightUnit = ratinglineHeightUnit === 'px' ? 150 : ratinglineHeightUnit === 'em' ? 10 : ratinglineHeightUnit === '%' ? 100:'';
	const customTooltipratinglineHeight = value => `${value}${attributes.ratinglineHeightUnit}`;

	const getratinglineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.ratinglineHeight;
		case 'Tablet':
			return attributes.ratinglineHeightTablet;
		case 'Mobile':
			return attributes.ratinglineHeightMobile;
		default:
			return undefined;
		}
	};

    const changeratinglineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ ratinglineHeight: value, ratinglineHeightTablet: value, ratinglineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ ratinglineHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ ratinglineHeightMobile: value });
		}
	};

	//rating fontsize
	const [ratingfontSizeUnit, setratingfontSizeUnit] = useState('px');
	const maxratingfontSizeUnit = ratingfontSizeUnit === 'px' ? 150 : ratingfontSizeUnit === 'em' ? 10 : ratingfontSizeUnit === '%' ? 100:'';
	const customTooltipratingfontSize = value => `${value}${attributes.ratingfontSizeUnit}`;

	const getratingfontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.ratingfontSize;
		case 'Tablet':
			return attributes.ratingfontSizeTablet;
		case 'Mobile':
			return attributes.ratingfontSizeMobile;
		default:
			return undefined;
		}
	};
    const changeratingfontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ ratingfontSize: value, ratingfontSizeTablet: value, ratingfontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ ratingfontSizeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ ratingfontSizeMobile: value });
		}
	};

	//rating letter spacing
	const [ratingletterSpacingUnit, setratingletterSpacingUnit] = useState('px');
	const maxratingletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : ratingletterSpacingUnit === 'em' ? 10 : ratingletterSpacingUnit === '%' ? 100:'';
	const customTooltipratingletterSpacing = value => `${value}${attributes.ratingletterSpacingUnit}`;

	const getratingletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.ratingletterSpacing;
		case 'Tablet':
			return attributes.ratingletterSpacingTablet;
		case 'Mobile':
			return attributes.ratingletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changeratingletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ ratingletterSpacing: value, ratingletterSpacingTablet: value, ratingletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ ratingletterSpacingTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ ratingletterSpacingMobile: value });
		}
	};


	    // button font family
		const changebuttonFontFamily = value => {
			if ( ! value ) {
				setAttributes({
					buttonfontFamily: value,
					buttonfontVariant: value
				});
			} else {
				setAttributes({
					buttonfontFamily: value,
					buttonfontVariant: 'normal',
					buttonfontStyle: 'normal'
				});
			}
		};
		//button lineheight
		const [buttonlineHeightUnit, setbuttonlineHeightUnit] = useState('px');
		const maxbuttonlineHeightUnit = buttonlineHeightUnit === 'px' ? 150 : buttonlineHeightUnit === 'em' ? 10 : buttonlineHeightUnit === '%' ? 100:'';
		const customTooltipbuttonlineHeight = value => `${value}${attributes.buttonlineHeightUnit}`;
	
		const getbuttonlineHeight = () => {
			switch ( getView ) {
			case 'Desktop':
				return attributes.buttonlineHeight;
			case 'Tablet':
				return attributes.buttonlineHeightTablet;
			case 'Mobile':
				return attributes.buttonlineHeightMobile;
			default:
				return undefined;
			}
		};
	
		const changebuttonlineHeight = value => {
			if ( 'Desktop' === getView ) {
				setAttributes({buttonlineHeight: value, buttonlineHeightTablet: value, buttonlineHeightMobile: value });
			} else if ( 'Tablet' === getView ) {
				setAttributes({buttonlineHeightTablet: value });
			} else if ( 'Mobile' === getView ) {
				setAttributes({buttonlineHeightMobile: value });
			}
		};
	
		//button fontsize
		const [buttonfontSizeUnit, setbuttonfontSizeUnit] = useState('px');
		const maxbuttonfontSizeUnit = buttonfontSizeUnit === 'px' ? 150 : buttonfontSizeUnit === 'em' ? 10 : buttonfontSizeUnit === '%' ? 100:'';
		const customTooltipbuttonfontSize = value => `${value}${attributes.buttonfontSizeUnit}`;
	
		const getbuttonfontSize = () => {
			switch ( getView ) {
			case 'Desktop':
				return attributes.buttonfontSize;
			case 'Tablet':
				return attributes.buttonfontSizeTablet;
			case 'Mobile':
				return attributes.buttonfontSizeMobile;
			default:
				return undefined;
			}
		};
		const changebuttonfontSize = value => {
			if ( 'Desktop' === getView ) {
				setAttributes({ buttonfontSize: value, buttonfontSizeTablet: value, buttonfontSizeMobile: value });
			} else if ( 'Tablet' === getView ) {
				setAttributes({ buttonfontSizeTablet: value });
			} else if ( 'Mobile' === getView ) {
				setAttributes({ buttonfontSizeMobile: value });
			}
		};
	
		//button letter spacing
		const [buttonletterSpacingUnit, setbuttonletterSpacingUnit] = useState('px');
		const maxbuttonletterSpacingUnit = buttonletterSpacingUnit === 'px' ? 150 : buttonletterSpacingUnit === 'em' ? 10 : buttonletterSpacingUnit === '%' ? 100:'';
		const customTooltipbuttonletterSpacing = value => `${value}${attributes.buttonletterSpacingUnit}`;
	
		const getbuttonletterSpacing = () => {
			switch ( getView ) {
			case 'Desktop':
				return attributes.buttonletterSpacing;
			case 'Tablet':
				return attributes.buttonletterSpacingTablet;
			case 'Mobile':
				return attributes.buttonletterSpacingMobile;
			default:
				return undefined;
			}
		};
	
		const changebuttonletterSpacing = value => {
			if ( 'Desktop' === getView ) {
				setAttributes({ buttonletterSpacing: value, buttonletterSpacingTablet: value, buttonletterSpacingMobile: value });
			} else if ( 'Tablet' === getView ) {
				setAttributes({ buttonletterSpacingTablet: value });
			} else if ( 'Mobile' === getView ) {
				setAttributes({ buttonletterSpacingMobile: value });
			}
		};
    // button boder
	const [buttonborderWidthUnit, setbuttonborderWidthUnit] = useState('px');
	const maxbuttonborderWidthUnit = buttonborderWidthUnit === 'px' ? 1500 : buttonborderWidthUnit === 'em' ? 50 : buttonborderWidthUnit === '%' ? 100:'';
    
	const getButtonborderWidthType = () => {
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
	const changeButtonborderWidthType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonborderWidthType: value, buttonborderWidthTypeTablet: value, buttonborderWidthTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonborderWidthTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonborderWidthTypeMobile: value });
		}
	};
	const desktopButtonBorderWidthType = {
		top: 'buttonborderWidthTop',
		right: 'buttonborderWidthRight',
		bottom: 'buttonborderWidthBottom',
		left: 'buttonborderWidthLeft'
	};
	const tabletButtonBorderWidthType = {
		top: 'buttonborderWidthTopTablet',
		right: 'buttonborderWidthRightTablet',
		bottom: 'buttonborderWidthBottomTablet',
		left: 'buttonborderWidthLeftTablet'
	};
	const mobileButtonBorderWidthType = {
		top: 'buttonborderWidthTopMobile',
		right: 'buttonborderWidthRightMobile',
		bottom: 'buttonborderWidthBottomMobile',
		left: 'buttonborderWidthLeftMobile'
	};
	const changeButtonBorderWidth = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonborderWidthType ) {
				setAttributes({ buttonborderWidth: value , buttonborderWidthTablet: value , buttonborderWidthMobile: value});
			} else {
				setAttributes({ [desktopButtonBorderWidthType[type]]: value, [tabletButtonBorderWidthType[type]]: value, [mobileButtonBorderWidthType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonborderWidthTypeTablet ) {
				setAttributes({ buttonborderWidthTablet: value });
			} else {
				setAttributes({ [tabletButtonBorderWidthType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonborderWidthTypeMobile ) {
				setAttributes({ buttonborderWidthMobile: value });
			} else {
				setAttributes({ [mobileButtonBorderWidthType[type]]: value });
			}
			break;
		}
	};

	const getButtonBorderWidth = type => {
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
				return 'linked' === attributes.buttonborderWidthTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonborderWidthMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthLeftMobile;
			}
		}

		return undefined;
	};
    // button boder radius
	const [buttonBrdrRadiusUnit, setbuttonBrdrRadiusUnit] = useState('px');
	const maxbuttonBrdrRadiusUnit = buttonBrdrRadiusUnit === 'px' ? 1500 : buttonBrdrRadiusUnit === 'em' ? 50 : buttonBrdrRadiusUnit === '%' ? 100:'';
    
	const getButtonBrdrRadiusType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.buttonBrdrRadiusType;
		case 'Tablet':
			return attributes.buttonBrdrRadiusTypeTablet;
		case 'Mobile':
			return attributes.buttonBrdrRadiusTypeMobile;
		default:
			return undefined;
		}
	};
	const changeButtonBrdrRadiusType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonBrdrRadiusType: value, buttonBrdrRadiusTypeTablet: value, buttonBrdrRadiusTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonBrdrRadiusTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonBrdrRadiusTypeMobile: value });
		}
	};
	const desktopButtonBrdrRadiusType = {
		top: 'buttonBrdrRadiusTop',
		right: 'buttonBrdrRadiusRight',
		bottom: 'buttonBrdrRadiusBottom',
		left: 'buttonBrdrRadiusLeft'
	};
	const tabletButtonBrdrRadiusType = {
		top: 'buttonBrdrRadiusTopTablet',
		right: 'buttonBrdrRadiusRightTablet',
		bottom: 'buttonBrdrRadiusBottomTablet',
		left: 'buttonBrdrRadiusLeftTablet'
	};
	const mobileButtonBrdrRadiusType = {
		top: 'buttonBrdrRadiusTopMobile',
		right: 'buttonBrdrRadiusRightMobile',
		bottom: 'buttonBrdrRadiusBottomMobile',
		left: 'buttonBrdrRadiusLeftMobile'
	};
	const changeButtonBrdrRadius = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonBrdrRadiusType ) {
				setAttributes({ buttonBrdrRadius: value , buttonBrdrRadiusTablet: value , buttonBrdrRadiusMobile: value});
			} else {
				setAttributes({ [desktopButtonBrdrRadiusType[type]]: value, [tabletButtonBrdrRadiusType[type]]: value, [mobileButtonBrdrRadiusType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonBrdrRadiusTypeTablet ) {
				setAttributes({ buttonBrdrRadiusTablet: value });
			} else {
				setAttributes({ [tabletButtonBrdrRadiusType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonBrdrRadiusTypeMobile ) {
				setAttributes({ buttonBrdrRadiusMobile: value });
			} else {
				setAttributes({ [mobileButtonBrdrRadiusType[type]]: value });
			}
			break;
		}
	};

	const getButtonBrdrRadius = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonBrdrRadiusType ? attributes.buttonBrdrRadius : attributes.buttonBrdrRadiusTop;
			case 'Tablet':
				return 'linked' === attributes.buttonBrdrRadiusTypeTablet ? attributes.buttonBrdrRadiusTablet : attributes.buttonBrdrRadiusTopTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonBrdrRadiusTypeMobile ? attributes.buttonBrdrRadiusMobile : attributes.buttonBrdrRadiusTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonBrdrRadiusType ? attributes.buttonBrdrRadius : attributes.buttonBrdrRadiusRight;
			case 'Tablet':
				return 'linked' === attributes.buttonBrdrRadiusTypeTablet ? attributes.buttonBrdrRadiusTablet : attributes.buttonBrdrRadiusRightTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonBrdrRadiusTypeMobile ? attributes.buttonBrdrRadiusMobile : attributes.buttonBrdrRadiusRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonBrdrRadiusType ? attributes.buttonBrdrRadius : attributes.buttonBrdrRadiusBottom;
			case 'Tablet':
				return 'linked' === attributes.buttonBrdrRadiusTypeTablet ? attributes.buttonBrdrRadiusTablet : attributes.buttonBrdrRadiusBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonBrdrRadiusTypeMobile ? attributes.buttonBrdrRadiusMobile : attributes.buttonBrdrRadiusBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonBrdrRadiusType ? attributes.buttonBrdrRadius : attributes.buttonBrdrRadiusLeft;
			case 'Tablet':
				return 'linked' === attributes.buttonBrdrRadiusTablet ? attributes.buttonBrdrRadiusTablet : attributes.buttonBrdrRadiusLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonBrdrRadiusMobile ? attributes.buttonBrdrRadiusMobile : attributes.buttonBrdrRadiusLeftMobile;
			}
		}

		return undefined;
	};

    // button Spacing boder
	const [buttonSpaceUnit, setbuttonSpaceUnit] = useState('px');
	const maxbuttonSpaceUnit = buttonSpaceUnit === 'px' ? 1500 : buttonSpaceUnit === 'em' ? 50 : buttonSpaceUnit === '%' ? 100:'';
    
	const getbuttonSpaceType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.buttonSpaceType;
		case 'Tablet':
			return attributes.buttonSpaceTypeTablet;
		case 'Mobile':
			return attributes.buttonSpaceTypeMobile;
		default:
			return undefined;
		}
	};
	const changebuttonSpaceType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ buttonSpaceType: value, buttonSpaceTypeTablet: value, buttonSpaceTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ buttonSpaceTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ buttonSpaceTypeMobile: value });
		}
	};
	const desktopbuttonSpaceType = {
		top: 'buttonSpaceTop',
		right: 'buttonSpaceRight',
		bottom: 'buttonSpaceBottom',
		left: 'buttonSpaceLeft'
	};
	const tabletbuttonSpaceType = {
		top: 'buttonSpaceTopTablet',
		right: 'buttonSpaceRightTablet',
		bottom: 'buttonSpaceBottomTablet',
		left: 'buttonSpaceLeftTablet'
	};
	const mobilebuttonSpaceType = {
		top: 'buttonSpaceTopMobile',
		right: 'buttonSpaceRightMobile',
		bottom: 'buttonSpaceBottomMobile',
		left: 'buttonSpaceLeftMobile'
	};
	const changebuttonSpace = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.buttonSpaceType ) {
				setAttributes({ buttonSpace: value , buttonSpaceTablet: value , buttonSpaceMobile: value});
			} else {
				setAttributes({ [desktopbuttonSpaceType[type]]: value, [tabletbuttonSpaceType[type]]: value, [mobilebuttonSpaceType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.buttonSpaceTypeTablet ) {
				setAttributes({ buttonSpaceTablet: value });
			} else {
				setAttributes({ [tabletbuttonSpaceType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.buttonSpaceTypeMobile ) {
				setAttributes({ buttonSpaceMobile: value });
			} else {
				setAttributes({ [mobilebuttonSpaceType[type]]: value });
			}
			break;
		}
	};

	const getbuttonSpace = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceTop;
			case 'Tablet':
				return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceTopTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceRight;
			case 'Tablet':
				return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceRightTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceBottom;
			case 'Tablet':
				return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceLeft;
			case 'Tablet':
				return 'linked' === attributes.buttonSpaceTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.buttonSpaceMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceLeftMobile;
			}
		}

		return undefined;
	};
	const [ title, settitle ] = useState( 'normal' );
    const [ cat, setcat ] = useState( 'normal' );
	const [ buttonclr, setbuttonclr ] = useState( 'normal' );
	const [ postmetaclr, setpostmetaclr ] = useState( 'normal' );
	return (
		<div
			className={ classnames(
				'th-sortable-item-area',
				`th-sortable-item-area-${ template }`
			) }
		>
			<div
				className={ classnames(
					'th-sortable-item',
					{
						'disabled': disabled,
						'hidden': ! canEdit,
						'editable': canEdit
					}
				) }
			>
				{ ! disabled && <DragHandle /> }

				<div className="th-sortable-label">
					{ label }
				</div>

				{ canEdit && (
					<Button
						icon={ isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2' }
						label={ isOpen ? __( 'Close Settings', 'themehunk-block' ) : __( 'Open Settings', 'themehunk-block' ) }
						showTooltip={ true }
						className="th-sortable-button"
						onClick={ () => setOpen( ! isOpen ) }
					/>
				) }

				<Button
					icon={ icon }
					label={ message }
					showTooltip={ true }
					className="th-sortable-button"
					onClick={ () => {
						if ( isCustomMeta ) {
							setAttributesCustomMeta({ display: ! customMeta.display });
						} else {
							toggleField( template );
						}
						setOpen( false );
					} }
				/>
			</div>

			{ canEdit &&  (
				<div
					className={ classnames(
						'th-sortable-control-area',
						{ 'opened': isOpen && canEdit }
					) }
				    >
					{ ( 'image' === template ) && (
						<Fragment >
							
							<SelectControl 
								label={ __( 'Image Size', 'themehunk-block' ) }
								value={ attributes.prdImage }
								options={ [
									{ label:  __( 'woocommerce_thumbnail', 'themehunk-block' ), value: 'woocommerce_thumbnail' },
									{ label: __( 'woocommerce_single', 'themehunk-block' ), value: 'woocommerce_single' },
									{ label: __( 'woocommerce_gallery_thumbnail', 'themehunk-block' ), value: 'woocommerce_gallery_thumbnail' },
								    
								] }
								onChange={ e => setAttributes({ prdImage: e }) }
							/>

                             <ToggleControl
								label={ __( 'Sale', 'themehunk-block' ) }
								checked={ attributes.showSale }
								onChange={ showSale => setAttributes({showSale}) }
							 />
							  { ( attributes.showSale == true ) && (
                              <>
							  <SelectControl 
								label={ __( 'Sale Style', 'themehunk-block' ) }
								value={ attributes.saleStyle }
								options={ [
									{ label:  __( 'Classic', 'themehunk-block' ), value: 'style1' },
									{ label: __( 'Ribbon', 'themehunk-block' ), value: 'style2' },
									{ label: __( 'Circle', 'themehunk-block' ), value: 'style3' },
								    
								] }
								onChange={ e => setAttributes({ saleStyle: e }) }
							  />
							  <div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Position', 'themehunk-block' )}</label>
									<ToogleGroupControl

												value={ attributes.salePosition }
												onChange={ salePosition => setAttributes({ salePosition }) }
												options={[
													
													{
										
														label: __( 'Right', 'themehunk-block' ),
														value: 'saleright'
													},
													{
													
														label: __( 'Left', 'themehunk-blocks' ),
														value: 'saleleft'
													}
												]}
												
											/>
								</div>
							  <div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Design', 'themehunk-block' )}</label>
									<ToogleGroupControl

												value={ attributes.saleDesign }
												onChange={ saleDesign => setAttributes({ saleDesign }) }
												options={[
													{
													
														label: __( 'Text', 'themehunk-blocks' ),
														value: 'saletext'
													},
													{
										
														label: __( 'Digit', 'themehunk-block' ),
														value: 'saledigit'
													}
												]}
												
											/>
								</div>
                                { ( attributes.saleDesign == 'saletext' ) && (
								<TextControl
									label={ __( 'Sale Text', 'themehunk-block' ) }
									value={ attributes.saleText }
									onChange={ ( saleText ) => setAttributes({saleText}) }
							    />
								)}
							  <ColorGradientControl
								 label={ __( 'Sale Color', 'themehunk-block' ) }
								 colorValue={ attributes.saleClr }
								 onColorChange={ e => setAttributes({ saleClr: e }) }
								 enableAlpha={true} 
								/>
								<ColorGradientControl
								 label={ __( 'Sale Bg Color', 'themehunk-block' ) }
								 colorValue={ attributes.saleBgClr }
								 onColorChange={ e => setAttributes({ saleBgClr: e }) }
								 enableAlpha={true} 
								/>
								</>
							  )}

							  <ToggleControl
								label={ __( 'Wishlist', 'themehunk-block' ) }
								checked={ attributes.showWishlist }
								onChange={ showWishlist => setAttributes({showWishlist}) }
							 />
							 <ToggleControl
								label={ __( 'Compare', 'themehunk-block' ) }
								checked={ attributes.showCompare }
								onChange={ showCompare => setAttributes({ showCompare }) }
							 />
							 <ToggleControl
								label={ __( 'Quick View', 'themehunk-block' ) }
								checked={ attributes.showView }
								onChange={ showView => setAttributes({ showView }) }
							 />
							 <HoverControl value={ postmetaclr }
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
						       onChange={ setpostmetaclr } 
						/>
                        { 'normal' ===  postmetaclr &&  (
                               <>
                               <ColorGradientControl
								 label={ __( 'Post Meta Color', 'themehunk-block' ) }
								 colorValue={ attributes.postMetaClr }
								 onColorChange={ e => setAttributes({ postMetaClr: e }) }
								 enableAlpha={true} 
								/>
								<ColorGradientControl
								 label={ __( 'Post Meta Bg Color', 'themehunk-block' ) }
								 colorValue={ attributes.postMetaBgClr }
								 onColorChange={ e => setAttributes({ postMetaBgClr: e }) }
								 enableAlpha={true} 
								/>    
								</>
						) || 'hover' ===  postmetaclr  && (
							<>
							 <ColorGradientControl
							  label={ __( 'Post Meta Hover Color', 'themehunk-block' ) }
							  colorValue={ attributes.postMetaHvrClr }
							  onColorChange={ e => setAttributes({ postMetaHvrClr: e }) }
							  enableAlpha={true} 
							 />
							 <ColorGradientControl
							  label={ __( 'Post Meta Bg Hover Color', 'themehunk-block' ) }
							  colorValue={ attributes.postMetaBgHvrClr }
							  onColorChange={ e => setAttributes({ postMetaBgHvrClr: e }) }
							  enableAlpha={true} 
							 />    
							 </>

						)}  
						</Fragment>
					) }

                   { ( 'category' === template ) && (
						<Fragment >
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ catTypography: true }) }
								resetValues={
									{
										catTypography:false,
										catfontFamily:"default",
										catfontVariant:"regular",
										catfontStyle:"regular",
										cattextTransform:"default",
										catfontSize:"",
										catlineHeight:"",
										catletterSpacing:"",
										catfontSizeUnit:"px",
										catlineHeightUnit:"px",
										catletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.catfontFamily }
								onChangeFontFamily={ changecatFontFamily }
								valueVariant={ attributes.catfontVariant }
								onChangeFontVariant={ catfontVariant => setAttributes({ catfontVariant }) }
								valueStyle={ attributes.catfontStyle }
								onChangeFontStyle={ catfontStyle => setAttributes({ catfontStyle }) }
								valueTransform={ attributes.cattextTransform }
								onChangeTextTransform={ cattextTransform => setAttributes({ cattextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catfontSizeUnit }
								onClick={catfontSizeUnit => {
									setAttributes({ catfontSizeUnit });
									setcatfontSizeUnit(catfontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatfontSize }
									value={ getcatfontSize() || '' }
									onChange={ changecatfontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatfontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catlineHeightUnit }
								onClick={catlineHeightUnit => {
									setAttributes({ catlineHeightUnit });
									setcatlineHeightUnit(catlineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatlineHeight }
									value={ getcatlineHeight() || '' }
									onChange={ changecatlineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatlineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.catletterSpacingUnit }
								onClick={catletterSpacingUnit => {
									setAttributes({catletterSpacingUnit });
									setcatletterSpacingUnit(catletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipcatletterSpacing }
									value={ getcatletterSpacing() || '' }
									onChange={ changecatletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxcatletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ catColor: true }) }
								resetValues={
									{
										catTypography:false,
										catTxtColor:"",
										catTxtColorHvr:"",
										
									}
								}
								
							>
                       <HoverControl value={ cat }
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
						onChange={ setcat } 
						/>
                        { 'normal' ===  cat &&  (
                                <ColorGradientControl
								 label={ __( ' Color', 'themehunk-block' ) }
								 colorValue={ attributes.catTxtColor }
								 onColorChange={ e => setAttributes({ catTxtColor: e }) }
								 enableAlpha={true} 
								 />
						) || 'hover' ===  cat && (
								 <ColorGradientControl
								 label={ __( ' Hover Color ', 'themehunk-block' ) }
								 colorValue={ attributes.catTxtColorHvr }
								 onColorChange={ e => setAttributes({ catTxtColorHvr: e }) }
								 enableAlpha={true} 
								 />
						)}

						</ControlPanelControl>
						</Fragment>
					) }

                    { ( 'title' === template ) && (
						<Fragment >
							<div className='th-component-group-label'>
							<label className='th-label'>{ __( 'Tag', 'themehunk-block' )}</label>
                             <ToogleGroupControl
                                        value={ attributes.prouctTitleTag }
                                        onChange={ prouctTitleTag => setAttributes({ prouctTitleTag })  }
										options={[
											{
												
												label: __( 'H2', 'themehunk-blocks' ),
												value: 'h2'
											},
											{
												
												label: __( 'H3', 'themehunk-block' ),
												value: 'h3'
											},
                                            {
												
												label: __( 'H4', 'themehunk-block' ),
												value: 'h4'
											},
                                            {
												
												label: __( 'H5', 'themehunk-block' ),
												value: 'h5'
											},
                                            {
												
												label: __( 'H6', 'themehunk-block' ),
												value: 'h6'
											}
										]}
										
										
									/>

							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ titleTypography: true }) }
								resetValues={
									{
										titleTypography:false,
										titlefontFamily:"default",
										titlefontVariant:"regular",
										titlefontStyle:"regular",
										titletextTransform:"default",
										titlefontSize:"",
										titlelineHeight:"",
										letterSpacing:"",
										titlefontSizeUnit:"px",
										titlelineHeightUnit:"px",
										titleletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.titlefontFamily }
								onChangeFontFamily={ changetitleFontFamily }
								valueVariant={ attributes.titlefontVariant }
								onChangeFontVariant={ titlefontVariant => setAttributes({ titlefontVariant }) }
								valueStyle={ attributes.titlefontStyle }
								onChangeFontStyle={ titlefontStyle => setAttributes({ titlefontStyle }) }
								valueTransform={ attributes.titletextTransform }
								onChangeTextTransform={ titletextTransform => setAttributes({ titletextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titlefontSizeUnit }
								onClick={titlefontSizeUnit => {
									setAttributes({ titlefontSizeUnit });
									settitlefontSizeUnit(titlefontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitlefontSize }
									value={ gettitlefontSize() || '' }
									onChange={ changetitlefontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitlefontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titlelineHeightUnit }
								onClick={titlelineHeightUnit => {
									setAttributes({ titlelineHeightUnit });
									settitlelineHeightUnit(titlelineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitlelineHeight }
									value={ gettitlelineHeight() || '' }
									onChange={ changetitlelineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitlelineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.titleletterSpacingUnit }
								onClick={titleletterSpacingUnit => {
									setAttributes({ titleletterSpacingUnit });
									settitleletterSpacingUnit(titleletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptitleletterSpacing }
									value={ gettitleletterSpacing() || '' }
									onChange={ changetitleletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxtitleletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>

						   <ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ titleColor: true }) }
								resetValues={
									{
										titleTypography:false,
										productTitleColor:"",
										productTitleColorHvr:"",
										
									}
								}
								
							>
                       <HoverControl value={ title }
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
						onChange={ settitle } 
						/>
                        { 'normal' ===  title &&  (
                                <ColorGradientControl
								 label={ __( 'Title Color', 'themehunk-block' ) }
								 colorValue={ attributes.productTitleColor }
								 onColorChange={ e => setAttributes({ productTitleColor: e }) }
								 enableAlpha={true} 
								 />
						) || 'hover' ===  title && (
								 <ColorGradientControl
								 label={ __( 'Title Hover Color ', 'themehunk-block' ) }
								 colorValue={ attributes.productTitleColorHvr }
								 onColorChange={ e => setAttributes({ productTitleColorHvr: e }) }
								 enableAlpha={true} 
								 />
						)}

						</ControlPanelControl>

						  </div>
						</Fragment>
					) }

					{ ( 'price' === template ) && (
						<Fragment>
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ priceTypography: true }) }
								resetValues={
									{
										priceTypography:false,
										pricefontFamily:"default",
										pricefontVariant:"regular",
										pricefontStyle:"regular",
										pricetextTransform:"default",
										pricefontSize:"",
										pricelineHeight:"",
										priceletterSpacing:"",
										pricefontSizeUnit:"px",
										pricelineHeightUnit:"px",
										priceletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.pricefontFamily }
								onChangeFontFamily={ changepriceFontFamily }
								valueVariant={ attributes.pricefontVariant }
								onChangeFontVariant={ pricefontVariant => setAttributes({ pricefontVariant }) }
								valueStyle={ attributes.pricefontStyle }
								onChangeFontStyle={ pricefontStyle => setAttributes({ pricefontStyle }) }
								valueTransform={ attributes.pricetextTransform }
								onChangeTextTransform={ pricetextTransform => setAttributes({ pricetextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.pricefontSizeUnit }
								onClick={pricefontSizeUnit => {
									setAttributes({ pricefontSizeUnit });
									setpricefontSizeUnit(pricefontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippricefontSize }
									value={ getpricefontSize() || '' }
									onChange={ changepricefontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxpricefontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.pricelineHeightUnit }
								onClick={pricelineHeightUnit => {
									setAttributes({ pricelineHeightUnit });
									setpricelineHeightUnit(pricelineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippricelineHeight }
									value={ getpricelineHeight() || '' }
									onChange={ changepricelineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxpricelineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.priceletterSpacingUnit }
								onClick={priceletterSpacingUnit => {
									setAttributes({priceletterSpacingUnit });
									setpriceletterSpacingUnit(priceletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippriceletterSpacing }
									value={ getpriceletterSpacing() || '' }
									onChange={ changepriceletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxpriceletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ PriceColor: true }) }
								resetValues={
									{
										PriceColor:false,
										priceColor:"",
										priceColorHvr:"",
										
									}
								}
								
							>
                          <ColorGradientControl
								 label={ __( 'Color', 'themehunk-block' ) }
								 colorValue={ attributes.priceColor }
								 onColorChange={ e => setAttributes({ priceColor: e }) }
								 enableAlpha={true} 
								 />
						   <ColorGradientControl
								 label={ __( 'Del Color', 'themehunk-block' ) }
								 colorValue={ attributes.priceDelColor }
								 onColorChange={ e => setAttributes({ priceDelColor: e }) }
								 enableAlpha={true} 
								 />		 

                       
                        
						</ControlPanelControl>
						</Fragment>
					) }

					{ ( 'rating' === template ) && (
						<Fragment >
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ ratingTypography: true }) }
								resetValues={
									  {
										ratingTypography:false,
										ratingfontSize:"",
										ratinglineHeight:"",
										ratingletterSpacing:"",
										ratingfontSizeUnit:"px",
										ratinglineHeightUnit:"px",
										ratingletterSpacingUnit:"px"
									  }
								   }
							  >	
							  <ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.ratingfontSizeUnit }
								onClick={ratingfontSizeUnit => {
									setAttributes({ ratingfontSizeUnit });
									setratingfontSizeUnit(ratingfontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltippricefontSize }
									value={ getratingfontSize() || '' }
									onChange={ changeratingfontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxratingfontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
                               <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.ratinglineHeightUnit }
								onClick={ratinglineHeightUnit => {
									setAttributes({ ratinglineHeightUnit });
									setratinglineHeightUnit(ratinglineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipratinglineHeight }
									value={ getratinglineHeight() || '' }
									onChange={ changeratinglineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxratinglineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.ratingletterSpacingUnit }
								onClick={ ratingletterSpacingUnit => {
									setAttributes({ratingletterSpacingUnit });
									setratingletterSpacingUnit(ratingletterSpacingUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipratingletterSpacing }
									value={ getratingletterSpacing() || '' }
									onChange={ changeratingletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxratingletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>
							</ControlPanelControl>
							<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ RatingColor: true }) }
								resetValues={
									{
										ratingColor:false,
										ratingColor:"",
										ratingColorHvr:"",
										
									}
								}
							>
                           <ColorGradientControl
								 label={ __( 'Star Color', 'themehunk-block' ) }
								 colorValue={ attributes.ratingColor }
								 onColorChange={ e => setAttributes({ ratingColor: e }) }
								 enableAlpha={true} 
								 />
						   <ColorGradientControl
								 label={ __( 'Empty Star Color', 'themehunk-block' ) }
								 colorValue={ attributes.emptyratingColor }
								 onColorChange={ e => setAttributes({ emptyratingColor: e }) }
								 enableAlpha={true} 
								 />		 
						   </ControlPanelControl>
						</Fragment>
					) }

                    { ( 'button' === template ) && (
						<Fragment >
							<ControlPanelControl
								label={ __( 'Typography', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ buttonTypography: true }) }
								resetValues={
									{
										buttonTypography:false,
										buttonfontFamily:"default",
										buttonfontVariant:"regular",
										buttonfontStyle:"regular",
										buttontextTransform:"default",
										buttonfontSize:"",
										buttonlineHeight:"",
										buttonletterSpacing:"",
										buttonfontSizeUnit:"px",
										buttonlineHeightUnit:"px",
										buttonletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'themehunk-block' ) }
								value={ attributes.buttonfontFamily }
								onChangeFontFamily={ changebuttonFontFamily }
								valueVariant={ attributes.buttonfontVariant }
								onChangeFontVariant={ buttonfontVariant => setAttributes({ buttonfontVariant }) }
								valueStyle={ attributes.buttonfontStyle }
								onChangeFontStyle={ buttonfontStyle => setAttributes({ buttonfontStyle }) }
								valueTransform={ attributes.buttontextTransform }
								onChangeTextTransform={ buttontextTransform => setAttributes({ buttontextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.buttonfontSizeUnit }
								onClick={buttonfontSizeUnit => {
									setAttributes({ buttonfontSizeUnit });
									setbuttonfontSizeUnit(buttonfontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipbuttonfontSize }
									value={ getbuttonfontSize() || '' }
									onChange={ changebuttonfontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxbuttonfontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                                <ResponsiveControl
								label={ __( 'Line Height', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.buttonlineHeightUnit }
								onClick={buttonlineHeightUnit => {
									setAttributes({ buttonlineHeightUnit });
									setbuttonlineHeightUnit(buttonlineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipbuttonlineHeight }
									value={ getbuttonlineHeight() || '' }
									onChange={ changebuttonlineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxbuttonlineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'themehunk-block' ) }
							     >	
								<UnitChooser
								value={ attributes.buttonletterSpacingUnit }
								onClick={buttonletterSpacingUnit => {
									setAttributes({buttonletterSpacingUnit });
									setbuttonletterSpacingUnit(buttonletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltipbuttonletterSpacing }
									value={ getbuttonletterSpacing() || '' }
									onChange={ changebuttonletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxbuttonletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'themehunk-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ buttonClr: true }) }
								resetValues={
									{
										buttonClr:false,
										buttonTxtClr:"",
										buttonBgClr:"",
										buttonBrdrClr:"",
										buttonTxtClrHvr:"",
										buttonBgClrHvr:"",
										buttonBrdrClrHvr:"",
									}
								}
						>
						<HoverControl value={ buttonclr }
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
						onChange={ setbuttonclr } 
						/>
                        { 'normal' ===  buttonclr &&  (		
						<>
                        <ColorGradientControl
								 label={ __( 'Text Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonTxtClr }
								 onColorChange={ e => setAttributes({ buttonTxtClr: e }) }
								 enableAlpha={true} 
								 />
						<ColorGradientControl
								 label={ __( 'Bg Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonBgClr }
								 onColorChange={ e => setAttributes({ buttonBgClr: e }) }
								 enableAlpha={true} 
								 />	
						<ColorGradientControl
								 label={ __( 'Border Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonBrdrClr }
								 onColorChange={ e => setAttributes({ buttonBrdrClr: e }) }
								 enableAlpha={true} 
								 />	
							</>
						) || 'hover' ===  buttonclr  && (
						<>
						<ColorGradientControl
								 label={ __( 'Text Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonTxtClrHvr }
								 onColorChange={ e => setAttributes({ buttonTxtClrHvr: e }) }
								 enableAlpha={true} 
								 />
						<ColorGradientControl
								 label={ __( 'Bg Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonBgClrHvr }
								 onColorChange={ e => setAttributes({ buttonBgClrHvr: e }) }
								 enableAlpha={true} 
								 />	
						<ColorGradientControl
								 label={ __( 'Border Color', 'themehunk-block' ) }
								 colorValue={ attributes.buttonBrdrClrHvr }
								 onColorChange={ e => setAttributes({ buttonBrdrClrHvr: e }) }
								 enableAlpha={true} 
								 />	
								 </>
						
						) }		 	 
						</ControlPanelControl>
						<SelectControl
						label={ __( 'Border Type', 'themehunk-block' ) }
						value={ attributes.buttonBrdrType }
						options={ [
							{ label:  __( 'None', 'themehunk-block' ), value: 'none' },
							{ label: __( 'Solid', 'themehunk-block' ), value: 'solid' },
							{ label: __( 'Double', 'themehunk-block' ), value: 'double' },
							{ label: __( 'Dotted', 'themehunk-block' ), value: 'dotted' },
						    { label: __( 'Dashed', 'themehunk-block' ), value: 'dashed' },
							{ label: __( 'Groove', 'themehunk-block' ), value: 'groove' },
						] }
						onChange={ e => setAttributes({ buttonBrdrType: e }) }
					   />	
                        { 'none' !== attributes.buttonBrdrType && (
							<>
                            <ResponsiveControl
								label={ __( 'Border Width', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonborderWidthUnit }
								
								onClick={buttonborderWidthUnit => {
									setAttributes({buttonborderWidthUnit });
									setbuttonborderWidthUnit(buttonborderWidthUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getButtonborderWidthType() }
									min={ 0 }
									max={ maxbuttonborderWidthUnit }
									changeType={ changeButtonborderWidthType }
									onChange={ changeButtonBorderWidth }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getButtonBorderWidth( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getButtonBorderWidth( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getButtonBorderWidth( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getButtonBorderWidth( 'left' )
										}
									] }
								/>

							</ResponsiveControl>
							
							<ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonBrdrRadiusUnit }
								
								onClick={buttonBrdrRadiusUnit => {
									setAttributes({buttonBrdrRadiusUnit });
									setbuttonBrdrRadiusUnit(buttonBrdrRadiusUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getButtonBrdrRadiusType() }
									min={ 0 }
									max={ maxbuttonBrdrRadiusUnit }
									changeType={ changeButtonBrdrRadiusType }
									onChange={ changeButtonBrdrRadius }
									options={ [
										{
											label: __(  'T-R', 'themehunk-block'),
											type: 'top',
											value: getButtonBrdrRadius( 'top' )
										},
										{
											label: __(  'T-L', 'themehunk-block' ),
											type: 'right',
											value: getButtonBrdrRadius( 'right' )
										},
										
										{
											label: __( 'B-R', 'themehunk-block'  ),
											type: 'left',
											value: getButtonBrdrRadius( 'left' )
										},
										{
											label: __( 'B-L', 'themehunk-block'),
											type: 'bottom',
											value: getButtonBrdrRadius( 'bottom' )
										},
									] }
								/>

							</ResponsiveControl>
							</>
						)}

                           <ResponsiveControl
								label={ __( 'Button Spacing', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.buttonSpaceUnit }
								
								onClick={buttonSpaceUnit => {
									setAttributes({buttonSpaceUnit });
									setbuttonSpaceUnit(buttonSpaceUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getbuttonSpaceType() }
									min={ 0 }
									max={ maxbuttonSpaceUnit }
									changeType={ changebuttonSpaceType }
									onChange={ changebuttonSpace }
									options={ [
										{
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getbuttonSpace( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getbuttonSpace( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getbuttonSpace( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getbuttonSpace( 'left' )
										}
									] }
								/>

							</ResponsiveControl>
						</Fragment>
					) }

				</div>
			) }
		</div>
	);
};

const SortableItemContainer = SortableElement( ({
	attributes,
	setAttributes,
	template,
	disabled
}) => {
	return (
		<SortableItem
			attributes={ attributes }
			setAttributes={ setAttributes }
			template={ template }
			disabled={ disabled }
		/>
	);
});

export const SortableList = SortableContainer( ({
	attributes,
	setAttributes
}) => {
	return (
		<div>
			{ attributes?.template
				?.filter( template => {
					if ( template?.startsWith( 'custom_' ) && ( window?.acf === undefined ) ) {
						return false;
					}
					return true;
				})
				.map( ( template, index ) => (
					<SortableItemContainer
						key={ `item-${ template }` }
						index={ index }
						attributes={ attributes }
						setAttributes={ setAttributes }
						template={ template }
					/>
				) ) }
		</div>
	);
});