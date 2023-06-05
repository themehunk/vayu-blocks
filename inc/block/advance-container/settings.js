/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {InspectorAdvancedControls , __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    Placeholder,
    Spinner,
    ToggleControl,TextControl
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
	ToogleGroupControl
} from '../../../src/components/index.js';

import { Start, Center , End, Strech, 
	  OrderStart, OrderEnd,
	  Custom, None, Shrink, Grow, 
	  HorizontalLeft, HorizontalRight, 
	  VerticalTop, VerticalBottom,
	  ArwLft, ArwRgt, ArwUp, ArwDn,JfCntstr,JfCntend,JfCntctr,JfCntspbtn,JfCntsparnd,JfCntspevn,
	  JfCntstr1,JfCntend1,JfCntctr1,JfCntspbtn1,JfCntsparnd1,JfCntspevn1,alignitemstr,alignitemcnt,alignitemend,alignitemstrech,
	  alignitemstr1,alignitemcnt1,alignitemend1,alignitemstrech1
	  , JfCntstrRR, JfCntendRR} from '../../../src/helpers/icon.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
         const getView = useSelect( select => {

		const { getView } = select( 'themehunk-blocks/data' );

		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

    const [ tab, setTab ] = useState( 'layout' );
	const [ hover, setHover ] = useState( 'normal' );
	const [ shaper, setShaper ] = useState( 'top' );
	const ANCHOR_REGEX = /[\s#]/g;
    //boxed width
    const getBoxedcontentWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.boxedcontentWidth;
		case 'Tablet':
			return attributes.boxedcontentWidthTablet;
		case 'Mobile':
			return attributes.boxedcontentWidthMobile;
		default:
			return undefined;
		}
	};

	const changeBoxedcontentWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ boxedcontentWidth: value, boxedcontentWidthTablet: value, boxedcontentWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ boxedcontentWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ boxedcontentWidthMobile: value });
		}
	};

    const customTooltipBoxedcontentWidth = value => `${value}${attributes.boxedcontentWidthUnit}`;
    
     //full width width
     const getFullcontentWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.fullcontentWidth;
		case 'Tablet':
			return attributes.fullcontentWidthTablet;
		case 'Mobile':
			return attributes.fullcontentWidthMobile;
		default:
			return undefined;
		}
	};

	const changeFullcontentWidth = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ fullcontentWidth: value, fullcontentWidthTablet: value, fullcontentWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ fullcontentWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ fullcontentWidthMobile: value });
		}
	};

    const customTooltipFullcontentWidth = value => `${value}${attributes.fullcontentWidthUnit}`;
    // MIN HEIGHT
    const getContentMinHgt = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.contentMinHgt;
		case 'Tablet':
			return attributes.contentMinHgtTablet;
		case 'Mobile':
			return attributes.contentMinHgtMobile;
		default:
			return undefined;
		}
	};

	const changeContentMinHgt = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ contentMinHgt: value, contentMinHgtTablet: value, contentMinHgtMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ contentMinHgtTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ contentMinHgtMobile: value });
		}
	};

    const customTooltipContentMinHgt = value => `${value}${attributes.contentMinHgtUnit}`;

    // direction property
	const getDirection = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.direction;
		case 'Tablet':
			return attributes.directionTablet;
		case 'Mobile':
			return attributes.directionMobile;
		default:
			return undefined;
		}
	};
    const changeDirection = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ direction: value, directionTablet: value, directionMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ directionTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ directionMobile: value });
		}
	};

     // Justify property
	const getJustify = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.Justify;
		case 'Tablet':
			return attributes.JustifyTablet;
		case 'Mobile':
			return attributes.JustifyMobile;
		default:
			return undefined;
		}
	};

    const changeJustify = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ Justify: value, JustifyTablet: value, JustifyMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ JustifyTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ JustifyMobile: value });
		}
	};
    // AlignItem property
	const getAlignItem = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.AlignItem;
		case 'Tablet':
			return attributes.AlignItemyTablet;
		case 'Mobile':
			return attributes.AlignItemMobile;
		default:
			return undefined;
		}
	};

    const changeAlignItem = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ AlignItem: value, AlignItemTablet: value, AlignItemMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ AlignItemTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ AlignItemMobile: value });
		}
	};
    // wrap property
	const getWrap = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.Wrap;
		case 'Tablet':
			return attributes.WrapTablet;
		case 'Mobile':
			return attributes.WrapMobile;
		default:
			return undefined;
		}
	};

    const changeWrap = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ Wrap: value, WrapTablet: value, WrapMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ WrapTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ WrapMobile: value });
		}
	};

    // aligncontent property
	const getAlignContent = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.AlignContent;
		case 'Tablet':
			return attributes.AlignContentTablet;
		case 'Mobile':
			return attributes.AlignContentMobile;
		default:
			return undefined;
		}
	};

    const changeAlignContent = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({AlignContent: value, AlignContentTablet: value, AlignContentMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ AlignContentTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ AlignContentMobile: value });
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

	// margin
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
	const desktopMarginType = {
		top: 'marginTop',
		right: 'marginRight',
		bottom: 'marginBottom',
		left: 'marginLeft'
	};
	const tabletMarginType = {
		top: 'marginTopTablet',
		right: 'margingRightTablet',
		bottom: 'marginBottomTablet',
		left: 'marginLeftTablet'
	};
	const mobileMarginType = {
		top: 'marginTopMobile',
		right: 'marginRightMobile',
		bottom: 'marginBottomMobile',
		left: 'marginLeftMobile'
	};
	const changeMargin = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.marginType ) {
				setAttributes({ margin: value, marginTablet: value, marginMobile: value });
			} else {
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



    const customTooltiphorizontalOrientationOffset = value => `${value}${attributes.horizontalOrientationOffsetUnit}`
	const customTooltiphorizontalOrientationOffsetRight = value => `${value}${attributes.horizontalOrientationOffsetRightUnit}`
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


	const customTooltipverticalOrientationOffsetTop = value => `${value}${attributes.verticalOrientationOffsetTopUnit}`
	const customTooltipverticalOrientationOffsetBottom = value => `${value}${attributes.verticalOrientationOffsetBottomUnit}`
    
	// verticalOrientationOffset top
	
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

	// verticalOrientationOffset bottom
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

	const customTooltipZindex = value => `${value}px`;

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

	// border and box shadow
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

	const changeBorderWidthType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderWidthType: value, borderWidthTypeTablet: value, borderWidthTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderWidthTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderWidthTypeMobile: value });
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
	const changeBorderRadiusType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ borderRadiusType: value, borderRadiusTypeTablet: value, borderRadiusTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ borderRadiusTypeTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ borderRadiusTypeMobile: value });
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
   
	const customTooltiptransitionAll = value => `${value}`;

	const customTooltipshapeTopWidth = value => `${value}${attributes.shapeTopWidthUnit}`;
    const customTooltipshapeBottomWidth = value => `${value}${attributes.shapeBottomWidthUnit}`;
	const customTooltipshapeTopHeight = value => `${value}${attributes.shapeTopHeightUnit}`;
    const customTooltipshapeBottomHeight = value => `${value}${attributes.shapeBottomHeightUnit}`;
    const customTooltipElementGap = value => `${value}${attributes.elementGapUnit}`;
	// shaper width top
	const getShapeTopWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.shapeTopWidth;
		case 'Tablet':
			return attributes.shapeTopWidthTablet;
		case 'Mobile':
			return attributes.shapeTopWidthMobile;
		default:
			return undefined;
		}
	};

	const changeShapeTopWidth = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ shapeTopWidth: value, shapeTopWidthTablet: value, shapeTopWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ shapeTopWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ shapeTopWidthMobile: value });
		}

	};

	// shaper top height
	const getShapeTopHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.shapeTopHeight;
		case 'Tablet':
			return attributes.shapeTopHeightTablet;
		case 'Mobile':
			return attributes.shapeTopHeightMobile;
		default:
			return undefined;
		}
	};

	const changeShapeTopHeight = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ shapeTopHeight: value, shapeTopHeightTablet: value, shapeTopHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ shapeTopHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ shapeTopHeightMobile: value });
		}

	};

	// shaper width Bottom
	const getShapeBottomWidth = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.shapeBottomWidth;
		case 'Tablet':
			return attributes.shapeBottomWidthTablet;
		case 'Mobile':
			return attributes.shapeBottomWidthMobile;
		default:
			return undefined;
		}
	};

	const changeShapeBottomWidth = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ shapeBottomWidth: value, shapeBottomWidthTablet: value, shapeBottomWidthMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ shapeBottomWidthTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ shapeBottomWidthMobile: value });
		}

	};

	// shaper height Bottom
	const getShapeBottomHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.shapeBottomHeight;
		case 'Tablet':
			return attributes.shapeBottomHeightTablet;
		case 'Mobile':
			return attributes.shapeBottomHeightMobile;
		default:
			return undefined;
		}
	};

	const changeShapeBottomHeight = value => {

		if ( 'Desktop' === getView ) {
			setAttributes({ shapeBottomHeight: value, shapeBottomHeightTablet: value, shapeBottomHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ shapeBottomHeightTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ shapeBottomHeightMobile: value });
		}

	};

	// element gap
	const getElementGap = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.elementGap;
		case 'Tablet':
			return attributes.elementGapTablet;
		case 'Mobile':
			return attributes.elementGapMobile;
		default:
			return undefined;
		}
	};

	const changeElementGap = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ elementGap: value, elementGapTablet: value, elementGapMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ elementGapTablet: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ elementGapMobile: value });
		}
	};


    // unit switch max value
	const [boxedcontentWidthUnit, setBoxedcontentWidthUnit] = useState('px');
	const maxBoxedcontentWidth = boxedcontentWidthUnit === 'px' ? 1500 : boxedcontentWidthUnit === 'em' ? 50 : boxedcontentWidthUnit === '%' ? 100:'';
    const [fullcontentWidthUnit, setfullcontentWidthUnit] = useState('px');
	const maxfullcontentWidthUnit = fullcontentWidthUnit === 'px' ? 1500 : fullcontentWidthUnit === 'em' ? 50 : fullcontentWidthUnit === '%' ? 100:'';
	const [contentMinHgtUnit, setcontentMinHgtUnit] = useState('px');
	const maxcontentMinHgtUnit = contentMinHgtUnit === 'px' ? 1500 : contentMinHgtUnit === 'em' ? 50 : contentMinHgtUnit === '%' ? 100:'';
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
	
	const [shapeTopWidthUnit, setshapeTopWidthUnit] = useState('px');
	const maxShapeTopWidthUnit = shapeTopWidthUnit === 'px' ? 1500 : shapeTopWidthUnit === 'em' ? 50 : shapeTopWidthUnit === '%' ? 100:'';
    
	const [shapeBottomWidthUnit, setshapeBottomWidthUnit] = useState('px');
	const maxShapeBottomWidthUnit = shapeBottomWidthUnit === 'px' ? 1500 : shapeBottomWidthUnit === 'em' ? 50 : shapeBottomWidthUnit === '%' ? 100:'';
	
	const [shapeTopHeightUnit, setshapeTopHeightUnit] = useState('px');
	const maxShapeTopHeightUnit = shapeTopHeightUnit === 'px' ? 1500 : shapeTopHeightUnit === 'em' ? 50 : shapeTopWidthUnit === '%' ? 100:'';
    
	const [shapeBottomHeightUnit, setshapeBottomHeightUnit] = useState('px');
	const maxShapeBottomHeightUnit = shapeBottomHeightUnit === 'px' ? 1500 : shapeBottomHeightUnit === 'em' ? 50 : shapeBottomHeightUnit === '%' ? 100:'';
	
	const [elementGapUnit, setelementGapUnit] = useState('px');
	const maxelementGapUnit = elementGapUnit === 'px' ? 1500 : elementGapUnit === 'em' ? 50 : elementGapUnit === '%' ? 100:'';
	
	return (
        <Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Layout', 'themehunk-block' ),
							value: 'layout'
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

        {'layout' === tab && (

        <Fragment>
        <PanelBody title={ __( 'Container', 'themehunk-block' ) } className="th-container-panel" initialOpen={ true }>
                      <SelectControl
								label={ __( 'Content Width', 'themehunk-block' ) }
								value={ attributes.contentWidthType }
								options={ [
									{ label:  __( 'Boxed', 'themehunk-block' ), value: 'boxed' },
									{ label: __( 'Full Width', 'themehunk-block' ), value: 'fullwidth' },
									
								] }
								onChange={ e => setAttributes({ contentWidthType: e }) }
					/>

                   { 'boxed' == attributes.contentWidthType && (
                        <ResponsiveControl
                        label={ __( 'Width', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.boxedcontentWidthUnit }
						onClick={boxedcontentWidthUnit => {
							setAttributes({ boxedcontentWidthUnit });
							setBoxedcontentWidthUnit(boxedcontentWidthUnit);
						  }}
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipBoxedcontentWidth }
                            value={ getBoxedcontentWidth() || '' }
                            onChange={ changeBoxedcontentWidth }
                            step={ 1 }
                            min={ 1 }
                            max={maxBoxedcontentWidth}
                            allowReset={ true }
                        />
                        </ResponsiveControl>
                   )}

                   { 'fullwidth' == attributes.contentWidthType && (
                        <ResponsiveControl
                        label={ __( 'Width', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.fullcontentWidthUnit }
						onClick={fullcontentWidthUnit => {
							setAttributes({ fullcontentWidthUnit });
							setfullcontentWidthUnit(fullcontentWidthUnit);
						  }}
                       
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipFullcontentWidth }
                            value={ getFullcontentWidth() || '' }
                            onChange={ changeFullcontentWidth }
                            step={ 1 }
                            min={ 1 }
                            max={maxfullcontentWidthUnit}
                            allowReset={ true }
                        />
                        </ResponsiveControl>
                        )}
                        <ResponsiveControl
                        label={ __( 'Min Height', 'themehunk-block' ) }
                        >	
                        <UnitChooser
                        value={ attributes.contentMinHgtUnit }
						onClick={contentMinHgtUnit => {
							setAttributes({ contentMinHgtUnit });
							setcontentMinHgtUnit(contentMinHgtUnit);
						  }}
                        
                        units={ [ 'px', 'em', '%' ] }
                        />
                        <RangeControl
                            renderTooltipContent={ customTooltipContentMinHgt }
                            value={ getContentMinHgt() || '' }
                            onChange={ changeContentMinHgt }
                            step={ 1 }
                            min={ 1 }
                            max={ maxcontentMinHgtUnit }
                            allowReset={ true }
                        />
                        </ResponsiveControl>

                        <div className='th-component-group-label'>
                            <ResponsiveControl
                            label={ __( 'Direction', 'themehunk-block' ) }
                            >
                             <ToogleGroupControl
                                        value={ getDirection() }
                                        onChange={ changeDirection }
										options={[
											{
												icon: ArwRgt,
												label: __( 'row-horizontal', 'themehunk-blocks' ),
												value: 'row'
											},
											{
												icon: ArwDn,
												label: __( 'column-vertical', 'themehunk-block' ),
												value: 'column'
											},
                                            {
												icon: ArwLft,
												label: __( 'row-reversed', 'themehunk-block' ),
												value: 'row-reverse'
											},
                                            {
												icon: ArwUp,
												label: __( 'column-reversed', 'themehunk-block' ),
												value: 'column-reverse'
											}
										]}
										
										hasIcon
									/>
                                    </ResponsiveControl>
						</div>

						{ (attributes.direction === 'row') ? (
									
										<ResponsiveControl
										label={ __( 'Justify Content', 'themehunk-block' ) }
										>
										<ToogleGroupControl
											value={ getJustify() }
											onChange={ changeJustify }
											options={[
											{
												icon: JfCntstr1,
												label: __( 'start', 'themehunk-blocks' ),
												value: 'flex-start'
											},
											{
												icon: JfCntctr1,
												label: __( 'center', 'themehunk-block' ),
												value: 'center'
											},
											{
												icon: JfCntend1,
												label: __( 'end', 'themehunk-block' ),
												value: 'flex-end'
											},
											{
												icon: JfCntspbtn1,
												label: __( 'space-between', 'themehunk-block' ),
												value: 'space-between'
											},
											{
												icon: JfCntsparnd1,
												label: __( 'space-around', 'themehunk-block' ),
												value: 'space-around'
											},
											{
												icon: JfCntspevn1,
												label: __( 'space-evenly', 'themehunk-block' ),
												value: 'space-evenly'
											}
											]}
											hasIcon
										/>
										</ResponsiveControl>
						) : (attributes.direction === 'row-reverse') ? (

                                   <ResponsiveControl
								   label={ __( 'Justify Content', 'themehunk-block' ) }
								   >
								   <ToogleGroupControl
									   value={ getJustify() }
									   onChange={ changeJustify }
									   options={[
									   {
										   icon: JfCntstrRR,
										   label: __( 'start', 'themehunk-blocks' ),
										   value: 'flex-start'
									   },
									   {
										   icon: JfCntctr1,
										   label: __( 'center', 'themehunk-block' ),
										   value: 'center'
									   },
									   {
										   icon: JfCntendRR,
										   label: __( 'end', 'themehunk-block' ),
										   value: 'flex-end'
									   },
									   {
										   icon: JfCntspbtn1,
										   label: __( 'space-between', 'themehunk-block' ),
										   value: 'space-between'
									   },
									   {
										   icon: JfCntsparnd1,
										   label: __( 'space-around', 'themehunk-block' ),
										   value: 'space-around'
									   },
									   {
										   icon: JfCntspevn1,
										   label: __( 'space-evenly', 'themehunk-block' ),
										   value: 'space-evenly'
									   }
									   ]}
									   hasIcon
								   />
								   </ResponsiveControl>
							): (attributes.direction === 'column-reverse') ? (
							
								<ResponsiveControl
								label={ __( 'Justify Content', 'themehunk-block' ) }
								>
								<ToogleGroupControl
									value={ getJustify() }
									onChange={ changeJustify }
									options={[
									{
										icon: JfCntend,
										label: __( 'start', 'themehunk-blocks' ),
										value: 'flex-start'
									},
									{
										icon: JfCntctr,
										label: __( 'center', 'themehunk-block' ),
										value: 'center'
									},
									{
										icon: JfCntstr,
										label: __( 'end', 'themehunk-block' ),
										value: 'flex-end'
									},
									{
										icon: JfCntspbtn,
										label: __( 'space-between', 'themehunk-block' ),
										value: 'space-between'
									},
									{
										icon: JfCntsparnd,
										label: __( 'space-around', 'themehunk-block' ),
										value: 'space-around'
									},
									{
										icon: JfCntspevn,
										label: __( 'space-evenly', 'themehunk-block' ),
										value: 'space-evenly'
									}
									]}
									hasIcon
								/>
								</ResponsiveControl>
										
									) : (
                                     <ResponsiveControl
										label={ __( 'Justify Content', 'themehunk-block' ) }
										>
										<ToogleGroupControl
											value={ getJustify() }
											onChange={ changeJustify }
											options={[
											{
												icon: JfCntstr,
												label: __( 'start', 'themehunk-blocks' ),
												value: 'flex-start'
											},
											{
												icon: JfCntctr,
												label: __( 'center', 'themehunk-block' ),
												value: 'center'
											},
											{
												icon:JfCntend,
												label: __( 'end', 'themehunk-block' ),
												value: 'flex-end'
											},
											{
												icon: JfCntspbtn,
												label: __( 'space-between', 'themehunk-block' ),
												value: 'space-between'
											},
											{
												icon: JfCntsparnd,
												label: __( 'space-around', 'themehunk-block' ),
												value: 'space-around'
											},
											{
												icon: JfCntspevn,
												label: __( 'space-evenly', 'themehunk-block' ),
												value: 'space-evenly'
											}
											]}
											hasIcon
										/>
										</ResponsiveControl>
					  )
					}

                        {(attributes.direction === 'row' || attributes.direction === 'row-reverse') ? (
								 <div className='th-component-group-label'>			
                                <ResponsiveControl
                                label={ __( 'AlignItem', 'themehunk-block' ) }
                                >
                                <ToogleGroupControl
                                            value={getAlignItem()}
                                            onChange={changeAlignItem}
                                            options={[
                                                {
                                                    icon: alignitemstr1,
                                                    label: __( 'start', 'themehunk-blocks' ),
                                                    value: 'flex-start'
                                                },
                                                {
                                                    icon: alignitemcnt1,
                                                    label: __( 'center', 'themehunk-block' ),
                                                    value: 'center'
                                                },
                                                {
                                                    icon: alignitemend1,
                                                    label: __( 'end', 'themehunk-block' ),
                                                    value: 'flex-end'
                                                },
                                                
                                                {
                                                    icon: alignitemstrech1,
                                                    label: __( 'stretch', 'themehunk-block' ),
                                                    value: 'stretch'
                                                }
                                            ]}
                                            
                                            hasIcon
                                        />
                                        </ResponsiveControl>
										</div>
								) : (		
									<div className='th-component-group-label'>
										<ResponsiveControl
                                label={ __( 'AlignItem', 'themehunk-block' ) }
                                >
                                <ToogleGroupControl
                                            value={getAlignItem()}
                                            onChange={changeAlignItem}
                                            options={[
                                                {
                                                    icon: alignitemstr,
                                                    label: __( 'start', 'themehunk-blocks' ),
                                                    value: 'flex-start'
                                                },
                                                {
                                                    icon: alignitemcnt,
                                                    label: __( 'center', 'themehunk-block' ),
                                                    value: 'center'
                                                },
                                                {
                                                    icon: alignitemend,
                                                    label: __( 'end', 'themehunk-block' ),
                                                    value: 'flex-end'
                                                },
                                                
                                                {
                                                    icon: alignitemstrech,
                                                    label: __( 'stretch', 'themehunk-block' ),
                                                    value: 'stretch'
                                                }
                                            ]}
                                            
                                            hasIcon
                                        />
                                        </ResponsiveControl>
                                 
                                </div>
								)
							}

                                <div className='th-component-group-label'>
                                <ResponsiveControl
                                label={ __( 'Wrap', 'themehunk-block' ) }
                                >
                                <ToogleGroupControl
                                            value={getWrap()}
                                            onChange={changeWrap}
                                            options={[
                                                {
                                                    icon: HorizontalLeft,
                                                    label: __( 'no-wrap', 'themehunk-blocks' ),
                                                    value: 'nowrap'
                                                },
                                                {
                                                    icon: HorizontalRight,
                                                    label: __( 'wrap', 'themehunk-block' ),
                                                    value: 'wrap'
                                                }
                                            ]}
                                            
                                            hasIcon
                                        />
                                        </ResponsiveControl>
								
                                </div>
								<ResponsiveControl
								label={ __( 'Gap between elements', 'themehunk-block' ) }
								>	
								<UnitChooser
								value={ attributes.elementGapUnit }
								onClick={elementGapUnit => {
									setAttributes({ elementGapUnit });
									setelementGapUnit(elementGapUnit);
								}}
								
								units={ [ 'px', 'em', '%' ] }
								/>
								<RangeControl
									renderTooltipContent={ customTooltipElementGap }
									initialPosition={20}
									value={ getElementGap() || '' }
									onChange={ changeElementGap }
									step={ 1 }
									min={ 1 }
									max={ maxelementGapUnit }
									allowReset={ true }
								/>
                                </ResponsiveControl>
								{ 'wrap' == attributes.Wrap && (
                                <ResponsiveControl
                                label={ __( 'Align Content', 'themehunk-block' ) }
                                >
                                <SelectControl
								value={getAlignContent()}
                                onChange={changeAlignContent}
								options={ [
									{ label:  __( 'default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'center', 'themehunk-block' ), value: 'center' },
									{ label: __( 'flex-start', 'themehunk-block' ), value: 'flex-start' },
                                    { label: __( 'flex-end', 'themehunk-block' ), value: 'flex-end' },
                                    { label: __( 'space-between', 'themehunk-block' ), value: 'space-between' },
                                    { label: __( 'space-around', 'themehunk-block' ), value: 'space-around' },
                                    { label: __( 'space-evenly', 'themehunk-block' ), value: 'space-evenly' },
								] }
				             	/>
                              </ResponsiveControl>
							)}
                
        </PanelBody>
        </Fragment>

        )}

		{'style' === tab && (

                        <>
						<PanelBody
						title={ __( 'Background', 'themehunk-block' ) }
						className="th-container-panel"
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

						</>

						)}	
                        
						</PanelBody>
						<PanelBody
						title={ __( 'Overlay', 'themehunk-block' ) }
						initialOpen={ false }
						className="th-container-panel th-overlay-control"
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
							backgroundType={ attributes.overlaybackgroundType }
							backgroundColor={ attributes.overlaybackgroundColor }
							image={ attributes.overlaybackgroundImage }
							gradient={ attributes.overlaybackgroundGradient }
							focalPoint={ attributes.overlaybackgroundPosition }
							backgroundAttachment={ attributes.overlaybackgroundAttachment }
							backgroundRepeat={ attributes.overlaybackgroundRepeat }
							backgroundSize={ attributes.overlaybackgroundSize }
							changeBackgroundType={ value => setAttributes({ overlaybackgroundType: value }) }
							changeImage={ media => {
								setAttributes({
									overlaybackgroundImage: pick( media, [ 'id', 'url' ])
								});
							}}
							removeImage={ () => setAttributes({ overlaybackgroundImage: undefined })}
							changeColor={ value => setAttributes({ overlaybackgroundColor: value })}
							changeGradient={ value => setAttributes({ overlaybackgroundGradient: value }) }
							changeBackgroundAttachment={ value => setAttributes({ overlaybackgroundAttachment: value })}
							changeBackgroundRepeat={ value => setAttributes({ overlaybackgroundRepeat: value })}
							changeFocalPoint={ value => setAttributes({ overlaybackgroundPosition: value }) }
							changeBackgroundSize={ value => setAttributes({ overlaybackgroundSize: value }) }
							/>	

						) || 'hover' ===  hover && (
						<>
						<BackgroundSelectorControl
							backgroundType={ attributes.overlaybackgroundTypeHvr }
							backgroundColor={ attributes.overlaybackgroundColorHvr }
							image={ attributes.overlaybackgroundImageHvr }
							gradient={ attributes.overlaybackgroundGradientHvr }
							focalPoint={ attributes.overlaybackgroundPositionHvr }
							backgroundAttachment={ attributes.overlaybackgroundAttachmentHvr }
							backgroundRepeat={ attributes.overlaybackgroundRepeatHvr }
							backgroundSize={ attributes.overlaybackgroundSizeHvr }
							changeBackgroundType={ value => setAttributes({ overlaybackgroundTypeHvr: value }) }
							changeImage={ media => {
								setAttributes({
									overlaybackgroundImageHvr: pick( media, [ 'id', 'url' ])
								});
							}}
							removeImage={ () => setAttributes({ overlaybackgroundImageHvr: undefined })}
							changeColor={ value => setAttributes({ overlaybackgroundColorHvr: value })}
							changeGradient={ value => setAttributes({ overlaybackgroundGradientHvr: value }) }
							changeBackgroundAttachment={ value => setAttributes({ overlaybackgroundAttachmentHvr: value })}
							changeBackgroundRepeat={ value => setAttributes({ overlaybackgroundRepeatHvr: value })}
							changeFocalPoint={ value => setAttributes({ overlaybackgroundPositionHvr: value }) }
							changeBackgroundSize={ value => setAttributes({ overlaybackgroundSizeHvr: value }) }
							/>	

						</>

						)}	
                        
						</PanelBody>

						<PanelBody
						title={ __( 'Shape Divider', 'themehunk-block' ) }
						initialOpen={ false }
						className="th-container-panel th-Shape-ivider-control"
						> 

                        <HoverControl value={ shaper }
						options={[
							{
								label: __( 'Top', 'themehunk-block' ),
								value: 'top'
							},
							{
								label: __( 'Bottom', 'themehunk-block' ),
								value: 'bottom'
							}
						]}
						onChange={ setShaper } />
                        { 'top' ===  shaper &&  (
							<>
                            <SelectControl
								value={ attributes.shapeTop }
								onChange={ e => setAttributes({ shapeTop: e }) }
								options={ [
									{ label:  __( 'default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'curve', 'themehunk-block' ), value: 'curve' },
									{ label: __( 'triangle', 'themehunk-block' ), value: 'triangle' },
                                    { label: __( 'wave', 'themehunk-block' ), value: 'wave' },
                                    { label: __( 'mountain', 'themehunk-block' ), value: 'mountain' },         
								] }

								
				             	/>
								 <ColorGradientControl
								 label={ __( 'Color', 'themehunk-block' ) }
								 colorValue={ attributes.shapeTopClr }
								 onColorChange={ e => setAttributes({ shapeTopClr: e }) }
								 enableAlpha={true} 
								 />

									<ResponsiveControl
									label={ __( 'Width', 'themehunk-block' ) }
									>	
									
									<RangeControl
										renderTooltipContent={ customTooltipshapeTopWidth }
										value={ getShapeTopWidth() || '' }
										onChange={ changeShapeTopWidth }
										step={ 1 }
										min={ 100 }
										max={ 300 }
										allowReset={ true }
									/>
									</ResponsiveControl>
									<ResponsiveControl
									label={ __( 'Height', 'themehunk-block' ) }
									>	
									
									<RangeControl
										renderTooltipContent={ customTooltipshapeTopHeight }
										value={ getShapeTopHeight() || '' }
										onChange={ changeShapeTopHeight }
										step={ 1 }
										min={ 1 }
										max={ 1500 }
										allowReset={ true }
									/>
									</ResponsiveControl>

									<div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Flip', 'themehunk-block' )}</label>
									<ToogleGroupControl

												value={ attributes.shapeTopFlip }
												onChange={ shapeTopFlip => setAttributes({ shapeTopFlip }) }
												options={[
													{
													
														label: __( 'On', 'themehunk-blocks' ),
														value: true
													},
													{
										
														label: __( 'Off', 'themehunk-block' ),
														value: false
													}
												]}
												
											/>
									</div>
									<div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Bring to Front', 'themehunk-block' )}</label>
									<ToogleGroupControl

												value={ attributes.shapeTopFront }
												onChange={ shapeTopFront => setAttributes({ shapeTopFront }) }
												options={[
													{
													
														label: __( 'On', 'themehunk-blocks' ),
														value: true
													},
													{
										
														label: __( 'Off', 'themehunk-block' ),
														value: false
													}
												]}
												
											/>
									</div>
									
								 </>
						) || 'bottom' ===  shaper && (
                            <>
                            <SelectControl
								value={ attributes.shapeBottom }
								onChange={ e => setAttributes({ shapeBottom: e }) }
								options={ [
									{ label:  __( 'default', 'themehunk-block' ), value: 'default' },
									{ label: __( 'curve', 'themehunk-block' ), value: 'curve' },
									{ label: __( 'triangle', 'themehunk-block' ), value: 'triangle' },
                                    { label: __( 'wave', 'themehunk-block' ), value: 'wave' },
                                    { label: __( 'mountain', 'themehunk-block' ), value: 'mountain' },         
								] }
				             	/>
								 <ColorGradientControl
								 label={ __( 'Color', 'themehunk-block' ) }
								 colorValue={ attributes.shapeBottomClr }
								 onColorChange={ e => setAttributes({ shapeBottomClr: e }) }
								 enableAlpha={true} 
								 />
								 
								 <ResponsiveControl
								 label={ __( 'Width', 'themehunk-block' ) }
								 >	
								
								 <RangeControl
									 renderTooltipContent={ customTooltipshapeBottomWidth }
									 value={ getShapeBottomWidth() || '' }
									 onChange={ changeShapeBottomWidth }
									 step={ 1 }
									 min={ 100 }
									 max={ 300 }
									 allowReset={ true }
								 />
								 </ResponsiveControl>
								 <ResponsiveControl
								 label={ __( 'Height', 'themehunk-block' ) }
								 >	
								 
								 <RangeControl
									 renderTooltipContent={ customTooltipshapeBottomHeight }
									 value={ getShapeBottomHeight() || '' }
									 onChange={ changeShapeBottomHeight }
									 step={ 1 }
									 min={ 1 }
									 max={ 1500 }
									 allowReset={ true }
								 />
								 </ResponsiveControl>
								 <div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Flip', 'themehunk-block' )}</label>
									<ToogleGroupControl

												value={ attributes.shapeBottomFlip }
												onChange={ shapeBottomFlip => setAttributes({ shapeBottomFlip }) }
												options={[
													{
													
														label: __( 'On', 'themehunk-blocks' ),
														value: true
													},
													{
										
														label: __( 'Off', 'themehunk-block' ),
														value: false
													}
												]}
												
											/>
									</div>
									<div className='th-component-group-label'>
									<label className='th-label'>{ __( 'Bring to Front', 'themehunk-block' )}</label>
									<ToogleGroupControl
												value={ attributes.shapeBottomFront }
												onChange={ shapeBottomFront => setAttributes({ shapeBottomFront }) }
												options={[
													{
													
														label: __( 'On', 'themehunk-blocks' ),
														value: true
													},
													{
										
														label: __( 'Off', 'themehunk-block' ),
														value: false
													}
												]}
											/>
									</div>
									
								 </>
						)}
                        </PanelBody>
						</>
		 )}

         {'advanced' === tab && (
			 <Fragment>
				<PanelBody
					title={ __( 'Layout', 'themehunk-block' ) }
					className="th-container-panel"
					initialOpen={ false }
				> 
				  <ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
							>
							<UnitChooser
								value={ attributes.paddingUnit }
								onClick={paddingUnit => {
									setAttributes({ paddingUnit });
									setpaddingUnit(paddingUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />	
                            <SizingControl
									type={ getPaddingType() }
									min={ 0 }
									max={maxpaddingUnit}
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
										},
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
									max={maxhorizontalOrientationOffsetUnit }
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
												label: __( 'start', 'themehunk-blocks' ),
												value: 'start'
											},
											{
												icon: Center,
												label: __( 'Center', 'themehunk-block' ),
												value: 'center'
											},
											{
												icon: End,
												label: __( 'end', 'themehunk-blocks' ),
												value: 'end'
											},
											{
												icon: Strech,
												label: __( 'stretch', 'themehunk-block' ),
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
												label: __( 'start', 'themehunk-blocks' ),
												value: 'start'
											},
											{
												icon: OrderEnd,
												label: __( 'end', 'themehunk-blocks' ),
												value: 'end'
											},
											{
												icon: Custom,
												label: __( 'cutsom', 'themehunk-block' ),
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
												label: __( 'none', 'themehunk-blocks' ),
												value: 'none'
											},
											{
												icon: Grow,
												label: __( 'grow', 'themehunk-blocks' ),
												value: 'grow'
											},
											{
												icon: Shrink,
												label: __( 'shrink', 'themehunk-block' ),
												value: 'shrink'
											},
											{
												icon: Custom,
												label: __( 'custom', 'themehunk-block' ),
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
					className="th-container-panel"
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
							<UnitChooser
								value={ attributes.borderWidthUnit }
								onClick={borderWidthUnit => {
									setAttributes({borderWidthUnit });
									setborderWidthUnit(borderWidthUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
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
							<UnitChooser
								value={ attributes.borderWidthHvrUnit }
								
								onClick={borderWidthHvrUnit => {
									setAttributes({borderWidthHvrUnit });
									setborderWidthHvrUnit(borderWidthHvrUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
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
					enableAlpha={true} 
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
									max={ maxborderRadiusHvrUnit }
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

				)}	

				</PanelBody>

				<PanelBody
					title={ __( 'Responsive', 'themehunk-block' ) }
					className="th-container-panel"
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
				<PanelBody
					title={ __( 'Transition', 'themehunk-block' ) }
					className="th-container-panel"
					initialOpen={ false }
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

		 )}
         
        </InspectorControls>

		<InspectorAdvancedControls>
				    <SelectControl
							label={ __( 'HTML Tag', 'themehunk-block' ) }
							value={ attributes.containerHTMLTag }
							options={ [
								{ label: __( 'Default (div)', 'themehunk-block' ), value: 'div' },
								{ label: 'section', value: 'section' },
								{ label: 'header', value: 'header' },
								{ label: 'footer', value: 'footer' },
								{ label: 'article', value: 'article' },
								{ label: 'main', value: 'main' }
							] }
							onChange={ value => setAttributes({ containerHTMLTag: value }) }
						/>
						<TextControl
						label={ __( 'HTML Anchor', 'themehunk-block' ) }
						help={ __( 'Anchors lets you link directly to a section on a page.', 'themehunk-block' ) }
						value={ attributes.anchor || '' }
						onChange={ ( value ) => {
							const anchorValue = value.replace( ANCHOR_REGEX, '-' );
							setAttributes( { anchor: anchorValue } );
						} } />
		</InspectorAdvancedControls>
		
        </Fragment>
    );

}
export default InsSettings;