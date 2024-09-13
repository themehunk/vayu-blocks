import { PanelBody,TextControl, ToggleControl, ColorPalette, FontSizePicker, RangeControl, __experimentalBoxControl as BoxControl, DropdownMenu, GradientPicker, SelectControl} from '@wordpress/components';
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import './editor.scss';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';
import { MdColorLens } from "react-icons/md";
import { PiGradient } from "react-icons/pi";
import {AlignmentToolbar} from '@wordpress/block-editor';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';
import {Vayu_blocks_typographycontrol} from '../advance-slider/Components/Typography/Vayu_blocks_typographycontrol.js';
import ColorPanel from '../advance-slider/Components/ColorPanel/ColorPanel.js';
import {Vayu_Block_Border_Control} from '../advance-slider/Components/BorderControl/Vayu_Blocks_Border_control.js';



import {
	ResponsiveControl,
	SizingControl,
	HoverControl,
	BackgroundSelectorControl,
	UnitChooser,
	ToogleGroupControl,
} from '../../components/index.js';
import { useSelect } from '@wordpress/data';


const Editor = ({ attributes, setAttributes }) => {

const {
	titlechoicehvr,
	pg_spacing,
	pg_numberOfTags,
	pg_numberOfCategories,
	
	pg_textColor,
	pg_textSize,
	pg_lineHeight,
	pg_showFeaturedImage,
	
	pg_showCategories,
	pg_categoryTextSize,
	pg_categoryTextColor,
	
	pg_showTags,
	pg_tagTextSize,
	pg_tagTextColor,
	
	pg_showAuthor,
	pg_authorTextSize,
	pg_authorTextColor,
	pg_authorImageScale,
	pg_showDate,
	pg_dateTextSize,
	pg_dateColor,
	layout_backgroundType,
	layout_backgroundColor,
	layout_backgroundGradient,
	layout_backgroundPosition,
	layout_backgroundAttachment,
	layout_backgroundRepeat,
	layout_backgroundSize,
	category_backgroundType,
	category_backgroundColor,
	category_backgroundGradient,
	category_backgroundPosition,
	category_backgroundAttachment,
	category_backgroundRepeat,
	category_backgroundSize,
	tag_backgroundType,
	tag_backgroundColor,
	tag_backgroundGradient,
	tag_backgroundPosition,
	tag_backgroundAttachment,
	tag_backgroundRepeat,
	tag_backgroundSize,
	pg_TitlelineHeight,
	pg_TitleSize,
	pg_TitleColor,
	pg_TitleColorhvr,
	titlechoice,
	pg_dateImageScale,
	pg_layoutalignment

} = attributes;

const [hover, sethover] = useState('normal');

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

const fontSizes = [
	{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 10 },
	{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 14 },
	{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 16 },
	{ name: __('Larger', 'vayu-blocks'), slug: 'larger', size: 18 },
];
const fontSizesmeta =   [
	{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 8 },
	{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 12 },
	{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 16 },
	{ name: __('Larger', 'vayu-blocks'), slug: 'larger', size: 18},
];
const fontSizeextra =   [
	{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 16 },
	{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 18 },
	{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 24 },
	{ name: __('Larger', 'vayu-blocks'), slug: 'larger', size: 28},
];
const fontSizesauthor= [
	{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 10 },
	{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 14},
	{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 18 },
	{ name: __('Larger', 'vayu-blocks'), slug: 'larger', size: 24},
];
const colors = [
	{ name: 'Gray', color: '#808080' },         // Dark Gray
	{ name: 'Light Gray', color: '#D3D3D3' },   // Light Gray
	{ name: 'Black', color: '#000' },           // Black
	{ name: 'Light Black', color: '#333' },     // Light Black
	{ name: 'Blue', color: '#00f' },            // Blue
	{ name: 'Light Blue', color: '#add8e6' },   // Light Blue
	{ name: 'Green', color: '#008000' },        // Green
	{ name: 'Dark Blue', color: '#00008B' },    // Dark Blue
	{ name: 'Red', color: '#f00' },             // Red
	{ name: 'Light Red', color: '#FF6347' },    // Light Red
	{ name: 'Purple', color: '#800080' },       // Purple
];
const gradient = [
	{
	  gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
	  name: 'Vivid cyan blue to vivid purple',
	  slug: 'vivid-cyan-blue-to-vivid-purple'
	},
	{
	  gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
	  name: 'Light green cyan to vivid green cyan',
	  slug: 'light-green-cyan-to-vivid-green-cyan'
	},
	{
	  gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
	  name: 'Luminous vivid amber to luminous vivid orange',
	  slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
	},
	{
	  gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
	  name: 'Luminous vivid orange to vivid red',
	  slug: 'luminous-vivid-orange-to-vivid-red'
	},
	{
	  gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
	  name: 'Very light gray to cyan bluish gray',
	  slug: 'very-light-gray-to-cyan-bluish-gray'
	},
	{
	  gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
	  name: 'Cool to warm spectrum',
	  slug: 'cool-to-warm-spectrum'
	},
	{
	  gradient: 'linear-gradient(to right, #C90100 0%, #FF7B00 25%, #00D4E7 75%, #009DFF 100%)',
	  name: 'Red to blue gradient',
	  slug: 'red-to-blue-gradient'
	},
	{
	  gradient: 'linear-gradient(45deg, #09009f, #00ff95 80%)',
	  name: 'Blue to green gradient',
	  slug: 'blue-to-green-gradient'
	},
	{
	  gradient: 'linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4))',
	  name: 'Purple to red gradient',
	  slug: 'purple-to-red-gradient'
	},
	{
	  gradient: 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)',
	  name: 'Multicolor gradient',
	  slug: 'multicolor-gradient'
	}
];
  
// Layout Padding
const desktopLayoutPaddingType = {
	top: 'pg_layoutpaddingTop',
	right: 'pg_layoutpaddingRight',
	bottom: 'pg_layoutpaddingBottom',
	left: 'pg_layoutpaddingLeft'
};

const tabletLayoutPaddingType = {
	top: 'pg_layoutpaddingTopTablet',
	right: 'pg_layoutpaddingRightTablet',
	bottom: 'pg_layoutpaddingBottomTablet',
	left: 'pg_layoutpaddingLeftTablet'
};

const mobileLayoutPaddingType = {
	top: 'pg_layoutpaddingTopMobile',
	right: 'pg_layoutpaddingRightMobile',
	bottom: 'pg_layoutpaddingBottomMobile',
	left: 'pg_layoutpaddingLeftMobile'
};

const getLayoutPaddingType = () => {
	switch (getView) {
	case 'Desktop':
		return attributes.pg_layoutpaddingType;
	case 'Tablet':
		return attributes.pg_layoutpaddingTypeTablet;
	case 'Mobile':
		return attributes.pg_layoutpaddingTypeMobile;
	default:
		return undefined;
	}
};

const changeLayoutPaddingType = (value) => {
	if ('Desktop' === getView) {
	setAttributes({ pg_layoutpaddingType: value });
	} else if ('Tablet' === getView) {
	setAttributes({ pg_layoutpaddingTypeTablet: value });
	} else if ('Mobile' === getView) {
	setAttributes({ pg_layoutpaddingTypeMobile: value });
	}
};

const changeLayoutPadding = (type, value) => {
	switch (getView) {
	case 'Desktop':
		if ('linked' === attributes.pg_layoutpaddingType) {
		setAttributes({
			pg_layoutpadding: value,
			pg_layoutpaddingTop: value,
			pg_layoutpaddingBottom: value,
			pg_layoutpaddingLeft: value,
			pg_layoutpaddingRight: value
		});
		} else {
		setAttributes({ [desktopLayoutPaddingType[type]]: value });
		}
		break;
	case 'Tablet':
		if ('linked' === attributes.pg_layoutpaddingTypeTablet) {
		setAttributes({
			pg_layoutpaddingTablet: value,
			pg_layoutpaddingTopTablet: value,
			pg_layoutpaddingBottomTablet: value,
			pg_layoutpaddingLeftTablet: value,
			pg_layoutpaddingRightTablet: value
		});
		} else {
		setAttributes({ [tabletLayoutPaddingType[type]]: value });
		}
		break;
	case 'Mobile':
		if ('linked' === attributes.pg_layoutpaddingTypeMobile) {
		setAttributes({
			pg_layoutpaddingMobile: value,
			pg_layoutpaddingTopMobile: value,
			pg_layoutpaddingBottomMobile: value,
			pg_layoutpaddingLeftMobile: value,
			pg_layoutpaddingRightMobile: value
		});
		} else {
		setAttributes({ [mobileLayoutPaddingType[type]]: value });
		}
		break;
	}
};

const getLayoutPadding = (type) => {
	switch (getView) {
	case 'Desktop':
		return 'linked' === attributes.pg_layoutpaddingType
		? attributes.pg_layoutpadding
		: attributes[desktopLayoutPaddingType[type]];
	case 'Tablet':
		return 'linked' === attributes.pg_layoutpaddingTypeTablet
		? attributes.pg_layoutpaddingTablet
		: attributes[tabletLayoutPaddingType[type]];
	case 'Mobile':
		return 'linked' === attributes.pg_layoutpaddingTypeMobile
		? attributes.pg_layoutpaddingMobile
		: attributes[mobileLayoutPaddingType[type]];
	}
	return undefined;
};

// Category Padding
const desktopCategoryPaddingType = {
	top: 'pg_CategorypaddingTop',
	right: 'pg_CategorypaddingRight',
	bottom: 'pg_CategorypaddingBottom',
	left: 'pg_CategorypaddingLeft'
};

const tabletCategoryPaddingType = {
	top: 'pg_CategorypaddingTopTablet',
	right: 'pg_CategorypaddingRightTablet',
	bottom: 'pg_CategorypaddingBottomTablet',
	left: 'pg_CategorypaddingLeftTablet'
};

const mobileCategoryPaddingType = {
	top: 'pg_CategorypaddingTopMobile',
	right: 'pg_CategorypaddingRightMobile',
	bottom: 'pg_CategorypaddingBottomMobile',
	left: 'pg_CategorypaddingLeftMobile'
};

const getCategoryPaddingType = () => {
	switch (getView) {
	case 'Desktop':
		return attributes.pg_CategorypaddingType;
	case 'Tablet':
		return attributes.pg_CategorypaddingTypeTablet;
	case 'Mobile':
		return attributes.pg_CategorypaddingTypeMobile;
	default:
		return undefined;
	}
};

const changeCategoryPaddingType = (value) => {
	if ('Desktop' === getView) {
	setAttributes({ pg_CategorypaddingType: value });
	} else if ('Tablet' === getView) {
	setAttributes({ pg_CategorypaddingTypeTablet: value });
	} else if ('Mobile' === getView) {
	setAttributes({ pg_CategorypaddingTypeMobile: value });
	}
};

const changeCategoryPadding = (type, value) => {
	switch (getView) {
	case 'Desktop':
		if ('linked' === attributes.pg_CategorypaddingType) {
		setAttributes({
			pg_Categorypadding: value,
			pg_CategorypaddingTop: value,
			pg_CategorypaddingBottom: value,
			pg_CategorypaddingLeft: value,
			pg_CategorypaddingRight: value
		});
		} else {
		setAttributes({ [desktopCategoryPaddingType[type]]: value });
		}
		break;
	case 'Tablet':
		if ('linked' === attributes.pg_CategorypaddingTypeTablet) {
		setAttributes({
			pg_CategorypaddingTablet: value,
			pg_CategorypaddingTopTablet: value,
			pg_CategorypaddingBottomTablet: value,
			pg_CategorypaddingLeftTablet: value,
			pg_CategorypaddingRightTablet: value
		});
		} else {
		setAttributes({ [tabletCategoryPaddingType[type]]: value });
		}
		break;
	case 'Mobile':
		if ('linked' === attributes.pg_CategorypaddingTypeMobile) {
		setAttributes({
			pg_CategorypaddingMobile: value,
			pg_CategorypaddingTopMobile: value,
			pg_CategorypaddingBottomMobile: value,
			pg_CategorypaddingLeftMobile: value,
			pg_CategorypaddingRightMobile: value
		});
		} else {
		setAttributes({ [mobileCategoryPaddingType[type]]: value });
		}
		break;
	}
};

const getCategoryPadding = (type) => {
	switch (getView) {
	case 'Desktop':
		return 'linked' === attributes.pg_CategorypaddingType
		? attributes.pg_Categorypadding
		: attributes[desktopCategoryPaddingType[type]];
	case 'Tablet':
		return 'linked' === attributes.pg_CategorypaddingTypeTablet
		? attributes.pg_CategorypaddingTablet
		: attributes[tabletCategoryPaddingType[type]];
	case 'Mobile':
		return 'linked' === attributes.pg_CategorypaddingTypeMobile
		? attributes.pg_CategorypaddingMobile
		: attributes[mobileCategoryPaddingType[type]];
	}
	return undefined;
};
	
// Tag Padding
const desktopTagPaddingType = {
	top: 'pg_TagpaddingTop',
	right: 'pg_TagpaddingRight',
	bottom: 'pg_TagpaddingBottom',
	left: 'pg_TagpaddingLeft'
};

const tabletTagPaddingType = {
	top: 'pg_TagpaddingTopTablet',
	right: 'pg_TagpaddingRightTablet',
	bottom: 'pg_TagpaddingBottomTablet',
	left: 'pg_TagpaddingLeftTablet'
};

const mobileTagPaddingType = {
	top: 'pg_TagpaddingTopMobile',
	right: 'pg_TagpaddingRightMobile',
	bottom: 'pg_TagpaddingBottomMobile',
	left: 'pg_TagpaddingLeftMobile'
};

const getTagPaddingType = () => {
	switch (getView) {
	case 'Desktop':
		return attributes.pg_TagpaddingType;
	case 'Tablet':
		return attributes.pg_TagpaddingTypeTablet;
	case 'Mobile':
		return attributes.pg_TagpaddingTypeMobile;
	default:
		return undefined;
	}
};

const changeTagPaddingType = (value) => {
	if ('Desktop' === getView) {
	setAttributes({ pg_TagpaddingType: value });
	} else if ('Tablet' === getView) {
	setAttributes({ pg_TagpaddingTypeTablet: value });
	} else if ('Mobile' === getView) {
	setAttributes({ pg_TagpaddingTypeMobile: value });
	}
};

const changeTagPadding = (type, value) => {
	switch (getView) {
	case 'Desktop':
		if ('linked' === attributes.pg_TagpaddingType) {
		setAttributes({
			pg_Tagpadding: value,
			pg_TagpaddingTop: value,
			pg_TagpaddingBottom: value,
			pg_TagpaddingLeft: value,
			pg_TagpaddingRight: value
		});
		} else {
		setAttributes({ [desktopTagPaddingType[type]]: value });
		}
		break;
	case 'Tablet':
		if ('linked' === attributes.pg_TagpaddingTypeTablet) {
		setAttributes({
			pg_TagpaddingTablet: value,
			pg_TagpaddingTopTablet: value,
			pg_TagpaddingBottomTablet: value,
			pg_TagpaddingLeftTablet: value,
			pg_TagpaddingRightTablet: value
		});
		} else {
		setAttributes({ [tabletTagPaddingType[type]]: value });
		}
		break;
	case 'Mobile':
		if ('linked' === attributes.pg_TagpaddingTypeMobile) {
		setAttributes({
			pg_TagpaddingMobile: value,
			pg_TagpaddingTopMobile: value,
			pg_TagpaddingBottomMobile: value,
			pg_TagpaddingLeftMobile: value,
			pg_TagpaddingRightMobile: value
		});
		} else {
		setAttributes({ [mobileTagPaddingType[type]]: value });
		}
		break;
	}
};

const getTagPadding = (type) => {
	switch (getView) {
	case 'Desktop':
		return 'linked' === attributes.pg_TagpaddingType
		? attributes.pg_Tagpadding
		: attributes[desktopTagPaddingType[type]];
	case 'Tablet':
		return 'linked' === attributes.pg_TagpaddingTypeTablet
		? attributes.pg_TagpaddingTablet
		: attributes[tabletTagPaddingType[type]];
	case 'Mobile':
		return 'linked' === attributes.pg_TagpaddingTypeMobile
		? attributes.pg_TagpaddingMobile
		: attributes[mobileTagPaddingType[type]];
	}
	return undefined;
};

//post border
const handleBorderChange = (newBorders) => {
        const updatedAttributes = {};
        if (newBorders.borders.top) {
            if (newBorders.borders.top) {
				updatedAttributes.pg_layoutTopBorderColor = newBorders.borders.top.color !== undefined ? newBorders.borders.top.color : 'black';
				updatedAttributes.pg_layoutTopBorder = newBorders.borders.top.width || '0px'; // Providing a default width if undefined
				updatedAttributes.layoutTopborderType = newBorders.borders.top.style !== 'none' ? newBorders.borders.top.style : 'solid';
				
            }
            if (newBorders.borders.bottom) {
                updatedAttributes.pg_layoutBottomBorderColor = newBorders.borders.bottom.color;
                updatedAttributes.pg_layoutBottomBorder = newBorders.borders.bottom.width;
                updatedAttributes.layoutBottomborderType = newBorders.borders.bottom.style;
            }
            if (newBorders.borders.left) {
                updatedAttributes.pg_layoutLeftBorderColor = newBorders.borders.left.color;
                updatedAttributes.pg_layoutLeftBorder = newBorders.borders.left.width;
                updatedAttributes.layoutLeftborderType = newBorders.borders.left.style;
            }
            if (newBorders.borders.right) {
                updatedAttributes.pg_layoutRightBorderColor = newBorders.borders.right.color;
                updatedAttributes.pg_layoutRightBorder = newBorders.borders.right.width;
                updatedAttributes.layoutRightborderType = newBorders.borders.right.style;
            }
        } else {
            	updatedAttributes.pg_layoutBorderColor = newBorders.borders.color;
                updatedAttributes.pg_layoutBorder = newBorders.borders.width;
                updatedAttributes.layoutborderType = newBorders.borders.style;

				updatedAttributes.pg_layoutRightBorderColor = newBorders.borders.color;
                updatedAttributes.pg_layoutRightBorder = newBorders.borders.width;
                updatedAttributes.layoutRightborderType = newBorders.borders.style;

				updatedAttributes.pg_layoutLeftBorderColor = newBorders.borders.color;
                updatedAttributes.pg_layoutLeftBorder = newBorders.borders.width;
                updatedAttributes.layoutLeftborderType = newBorders.borders.style;

				updatedAttributes.pg_layoutBottomBorderColor = newBorders.borders.color;
                updatedAttributes.pg_layoutBottomBorder = newBorders.borders.width;
                updatedAttributes.layoutBottomborderType = newBorders.borders.style;

				updatedAttributes.pg_layoutTopBorderColor = newBorders.borders.color;
                updatedAttributes.pg_layoutTopBorder = newBorders.borders.width;
                updatedAttributes.layoutTopborderType = newBorders.borders.style;

        }
        setAttributes(updatedAttributes);
};

//post border-radius
const handleBorderRadiusChange = (newValues) => {
		setAttributes({
			pg_postTopBorderRadius: newValues.borderRadius.top,
			pg_postLeftBorderRadius: newValues.borderRadius.left,
			pg_postRightBorderRadius: newValues.borderRadius.right,
			pg_postBottomBorderRadius: newValues.borderRadius.bottom,
		});
};

//category border
const handlecategoryBorderChange = (newBorders) => {
	const updatedAttributes = {};
	if (newBorders.borders.top) {
		if (newBorders.borders.top) {
			updatedAttributes.pg_categoryTopBorderColor = newBorders.borders.top.color;
			updatedAttributes.pg_categoryTopBorder = newBorders.borders.top.width;
			updatedAttributes.categoryTopborderType = newBorders.borders.top.style;
		}
		if (newBorders.borders.bottom) {
			updatedAttributes.pg_categoryBottomBorderColor = newBorders.borders.bottom.color;
			updatedAttributes.pg_categoryBottomBorder = newBorders.borders.bottom.width;
			updatedAttributes.categoryBottomborderType = newBorders.borders.bottom.style;
		}
		if (newBorders.borders.left) {
			updatedAttributes.pg_categoryLeftBorderColor = newBorders.borders.left.color;
			updatedAttributes.pg_categoryLeftBorder = newBorders.borders.left.width;
			updatedAttributes.categoryLeftborderType = newBorders.borders.left.style;
		}
		if (newBorders.borders.right) {
			updatedAttributes.pg_categoryRightBorderColor = newBorders.borders.right.color;
			updatedAttributes.pg_categoryRightBorder = newBorders.borders.right.width;
			updatedAttributes.categoryRightborderType = newBorders.borders.right.style;
		}
	} else {
		updatedAttributes.pg_categoryBorderColor = newBorders.borders.color;
		updatedAttributes.pg_categoryBorder = newBorders.borders.width;
		updatedAttributes.categoryborderType = newBorders.borders.style;

		updatedAttributes.pg_categoryRightBorderColor = newBorders.borders.color;
		updatedAttributes.pg_categoryRightBorder = newBorders.borders.width;
		updatedAttributes.categoryRightborderType = newBorders.borders.style;

		updatedAttributes.pg_categoryLeftBorderColor = newBorders.borders.color;
		updatedAttributes.pg_categoryLeftBorder = newBorders.borders.width;
		updatedAttributes.categoryLeftborderType = newBorders.borders.style;

		updatedAttributes.pg_categoryBottomBorderColor = newBorders.borders.color;
		updatedAttributes.pg_categoryBottomBorder = newBorders.borders.width;
		updatedAttributes.categoryBottomborderType = newBorders.borders.style;

		updatedAttributes.pg_categoryTopBorderColor = newBorders.borders.color;
		updatedAttributes.pg_categoryTopBorder = newBorders.borders.width;
		updatedAttributes.categoryTopborderType = newBorders.borders.style;
	}
	setAttributes(updatedAttributes);
};

//tag border
const handletagBorderChange = (newBorders) => {
	const updatedAttributes = {};
	if (newBorders.borders.top) {
		if (newBorders.borders.top) {
			updatedAttributes.pg_tagTopBorderColor = newBorders.borders.top.color;
			updatedAttributes.pg_tagTopBorder = newBorders.borders.top.width;
			updatedAttributes.tagTopborderType = newBorders.borders.top.style;
		}
		if (newBorders.borders.bottom) {
			updatedAttributes.pg_tagBottomBorderColor = newBorders.borders.bottom.color;
			updatedAttributes.pg_tagBottomBorder = newBorders.borders.bottom.width;
			updatedAttributes.tagBottomborderType = newBorders.borders.bottom.style;
		}
		if (newBorders.borders.left) {
			updatedAttributes.pg_tagLeftBorderColor = newBorders.borders.left.color;
			updatedAttributes.pg_tagLeftBorder = newBorders.borders.left.width;
			updatedAttributes.tagLeftborderType = newBorders.borders.left.style;
		}
		if (newBorders.borders.right) {
			updatedAttributes.pg_tagRightBorderColor = newBorders.borders.right.color;
			updatedAttributes.pg_tagRightBorder = newBorders.borders.right.width;
			updatedAttributes.tagRightborderType = newBorders.borders.right.style;
		}
	} else {
		updatedAttributes.pg_tagBorderColor = newBorders.borders.color;
		updatedAttributes.pg_tagBorder = newBorders.borders.width;
		updatedAttributes.tagborderType = newBorders.borders.style;

		updatedAttributes.pg_tagRightBorderColor = newBorders.borders.color;
		updatedAttributes.pg_tagRightBorder = newBorders.borders.width;
		updatedAttributes.tagRightborderType = newBorders.borders.style;

		updatedAttributes.pg_tagLeftBorderColor = newBorders.borders.color;
		updatedAttributes.pg_tagLeftBorder = newBorders.borders.width;
		updatedAttributes.tagLeftborderType = newBorders.borders.style;

		updatedAttributes.pg_tagBottomBorderColor = newBorders.borders.color;
		updatedAttributes.pg_tagBottomBorder = newBorders.borders.width;
		updatedAttributes.tagBottomborderType = newBorders.borders.style;

		updatedAttributes.pg_tagTopBorderColor = newBorders.borders.color;
		updatedAttributes.pg_tagTopBorder = newBorders.borders.width;
		updatedAttributes.tagTopborderType = newBorders.borders.style;
	}
	setAttributes(updatedAttributes);
};

//tag border-radius
const handletagBorderRadiusChange = (newValues) => {
	setAttributes({
		pg_tagTopBorderRadius: newValues.borderRadius.top,
		pg_tagLeftBorderRadius: newValues.borderRadius.left,
		pg_tagRightBorderRadius: newValues.borderRadius.right,
		pg_tagBottomBorderRadius: newValues.borderRadius.bottom,
	});
};

//featuredImage border
const handlefeaturedImageBorderChange = (newBorders) => {
	const updatedAttributes = {};
	if (newBorders.borders.top) {
		if (newBorders.borders.top) {
			updatedAttributes.pg_featuredImageTopBorderColor = newBorders.borders.top.color;
			updatedAttributes.pg_featuredImageTopBorder = newBorders.borders.top.width;
			updatedAttributes.featuredImageTopborderType = newBorders.borders.top.style;
		}
		if (newBorders.borders.bottom) {
			updatedAttributes.pg_featuredImageBottomBorderColor = newBorders.borders.bottom.color;
			updatedAttributes.pg_featuredImageBottomBorder = newBorders.borders.bottom.width;
			updatedAttributes.featuredImageBottomborderType = newBorders.borders.bottom.style;
		}
		if (newBorders.borders.left) {
			updatedAttributes.pg_featuredImageLeftBorderColor = newBorders.borders.left.color;
			updatedAttributes.pg_featuredImageLeftBorder = newBorders.borders.left.width;
			updatedAttributes.featuredImageLeftborderType = newBorders.borders.left.style;
		}
		if (newBorders.borders.right) {
			updatedAttributes.pg_featuredImageRightBorderColor = newBorders.borders.right.color;
			updatedAttributes.pg_featuredImageRightBorder = newBorders.borders.right.width;
			updatedAttributes.featuredImageRightborderType = newBorders.borders.right.style;
		}
	} else {
		updatedAttributes.pg_featuredImageBorderColor = newBorders.borders.color;
		updatedAttributes.pg_featuredImageBorder = newBorders.borders.width;
		updatedAttributes.featuredImageborderType = newBorders.borders.style;

		updatedAttributes.pg_featuredImageRightBorderColor = newBorders.borders.color;
		updatedAttributes.pg_featuredImageRightBorder = newBorders.borders.width;
		updatedAttributes.featuredImageRightborderType = newBorders.borders.style;

		updatedAttributes.pg_featuredImageLeftBorderColor = newBorders.borders.color;
		updatedAttributes.pg_featuredImageLeftBorder = newBorders.borders.width;
		updatedAttributes.featuredImageLeftborderType = newBorders.borders.style;

		updatedAttributes.pg_featuredImageBottomBorderColor = newBorders.borders.color;
		updatedAttributes.pg_featuredImageBottomBorder = newBorders.borders.width;
		updatedAttributes.featuredImageBottomborderType = newBorders.borders.style;

		updatedAttributes.pg_featuredImageTopBorderColor = newBorders.borders.color;
		updatedAttributes.pg_featuredImageTopBorder = newBorders.borders.width;
		updatedAttributes.featuredImageTopborderType = newBorders.borders.style;
	}
	setAttributes(updatedAttributes);
};

/// Function to get the current border-radius type
const getlayoutBorderRadiusType = () => {
    switch (getView) {
        case 'Desktop':
            return attributes.layoutBorderRadiusType;
        case 'Tablet':
            return attributes.layoutBorderRadiusTypeTablet;
        case 'Mobile':
            return attributes.layoutBorderRadiusTypeMobile;
        default:
            return undefined;
    }
};

// Function to change the border-radius type
const changelayoutBorderRadiusType = value => {
    if ('Desktop' === getView) {
        setAttributes({
            layoutBorderRadiusType: value,
            layoutBorderRadiusTypeTablet: value,
            layoutBorderRadiusTypeMobile: value
        });
    } else if ('Tablet' === getView) {
        setAttributes({
            layoutBorderRadiusTypeTablet: value
        });
    } else if ('Mobile' === getView) {
        setAttributes({
            layoutBorderRadiusTypeMobile: value
        });
    }
};

// Function to change the border-radius values
const changelayoutBorderRadius = (type, value) => {
    switch (getView) {
        case 'Desktop':
            if ('linked' === attributes.layoutBorderRadiusType) {
                setAttributes({
                    pg_layoutTopBorderRadius: value,
                    pg_layoutRightBorderRadius: value,
                    pg_layoutBottomBorderRadius: value,
                    pg_layoutLeftBorderRadius: value
                });
            } else {
                setAttributes({ [`pg_layout${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadius`]: value });
            }
            break;
        case 'Tablet':
            if ('linked' === attributes.layoutBorderRadiusTypeTablet) {
                setAttributes({
                    pg_layoutTopBorderRadiusTablet: value,
                    pg_layoutRightBorderRadiusTablet: value,
                    pg_layoutBottomBorderRadiusTablet: value,
                    pg_layoutLeftBorderRadiusTablet: value
                });
            } else {
                setAttributes({ [`pg_layout${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusTablet`]: value });
            }
            break;
        case 'Mobile':
            if ('linked' === attributes.layoutBorderRadiusTypeMobile) {
                setAttributes({
                    pg_layoutTopBorderRadiusMobile: value,
                    pg_layoutRightBorderRadiusMobile: value,
                    pg_layoutBottomBorderRadiusMobile: value,
                    pg_layoutLeftBorderRadiusMobile: value
                });
            } else {
                setAttributes({ [`pg_layout${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusMobile`]: value });
            }
            break;
    }
};

// Function to get the current border-radius value for a specific side
const getlayoutBorderRadius = type => {
    switch (type) {
        case 'top':
            switch (getView) {
                case 'Desktop':
                    return attributes.layoutBorderRadiusType === 'linked'
                        ? attributes.pg_layoutTopBorderRadius
                        : attributes.pg_layoutTopBorderRadius;
                case 'Tablet':
                    return attributes.layoutBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_layoutTopBorderRadiusTablet
                        : attributes.pg_layoutTopBorderRadiusTablet;
                case 'Mobile':
                    return attributes.layoutBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_layoutTopBorderRadiusMobile
                        : attributes.pg_layoutTopBorderRadiusMobile;
            }
        case 'right':
            switch (getView) {
                case 'Desktop':
                    return attributes.layoutBorderRadiusType === 'linked'
                        ? attributes.pg_layoutRightBorderRadius
                        : attributes.pg_layoutRightBorderRadius;
                case 'Tablet':
                    return attributes.layoutBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_layoutRightBorderRadiusTablet
                        : attributes.pg_layoutRightBorderRadiusTablet;
                case 'Mobile':
                    return attributes.layoutBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_layoutRightBorderRadiusMobile
                        : attributes.pg_layoutRightBorderRadiusMobile;
            }
        case 'bottom':
            switch (getView) {
                case 'Desktop':
                    return attributes.layoutBorderRadiusType === 'linked'
                        ? attributes.pg_layoutBottomBorderRadius
                        : attributes.pg_layoutBottomBorderRadius;
                case 'Tablet':
                    return attributes.layoutBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_layoutBottomBorderRadiusTablet
                        : attributes.pg_layoutBottomBorderRadiusTablet;
                case 'Mobile':
                    return attributes.layoutBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_layoutBottomBorderRadiusMobile
                        : attributes.pg_layoutBottomBorderRadiusMobile;
            }
        case 'left':
            switch (getView) {
                case 'Desktop':
                    return attributes.layoutBorderRadiusType === 'linked'
                        ? attributes.pg_layoutLeftBorderRadius
                        : attributes.pg_layoutLeftBorderRadius;
                case 'Tablet':
                    return attributes.layoutBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_layoutLeftBorderRadiusTablet
                        : attributes.pg_layoutLeftBorderRadiusTablet;
                case 'Mobile':
                    return attributes.layoutBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_layoutLeftBorderRadiusMobile
                        : attributes.pg_layoutLeftBorderRadiusMobile;
            }
        default:
            return undefined;
    }
};

// Handle pagination border-radius changes
const handlelayoutBorderRadiusChange = (newValues) => {
    setAttributes({
        pg_layoutTopBorderRadius: newValues.borderRadius.top,
        pg_layoutLeftBorderRadius: newValues.borderRadius.left,
        pg_layoutRightBorderRadius: newValues.borderRadius.right,
        pg_layoutBottomBorderRadius: newValues.borderRadius.bottom,
    });
};

//featuredimage
/// Function to get the current border-radius type
const getfeaturedImageBorderRadiusType = () => {
    switch (getView) {
        case 'Desktop':
            return attributes.featuredImageBorderRadiusType;
        case 'Tablet':
            return attributes.featuredImageBorderRadiusTypeTablet;
        case 'Mobile':
            return attributes.featuredImageBorderRadiusTypeMobile;
        default:
            return undefined;
    }
};

// Function to change the border-radius type
const changefeaturedImageBorderRadiusType = value => {
    if ('Desktop' === getView) {
        setAttributes({
            featuredImageBorderRadiusType: value,
            featuredImageBorderRadiusTypeTablet: value,
            featuredImageBorderRadiusTypeMobile: value
        });
    } else if ('Tablet' === getView) {
        setAttributes({
            featuredImageBorderRadiusTypeTablet: value
        });
    } else if ('Mobile' === getView) {
        setAttributes({
            featuredImageBorderRadiusTypeMobile: value
        });
    }
};

// Function to change the border-radius values
const changefeaturedImageBorderRadius = (type, value) => {
    switch (getView) {
        case 'Desktop':
            if ('linked' === attributes.featuredImageBorderRadiusType) {
                setAttributes({
                    pg_featuredImageTopBorderRadius: value,
                    pg_featuredImageRightBorderRadius: value,
                    pg_featuredImageBottomBorderRadius: value,
                    pg_featuredImageLeftBorderRadius: value
                });
            } else {
                setAttributes({ [`pg_featuredImage${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadius`]: value });
            }
            break;
        case 'Tablet':
            if ('linked' === attributes.featuredImageBorderRadiusTypeTablet) {
                setAttributes({
                    pg_featuredImageTopBorderRadiusTablet: value,
                    pg_featuredImageRightBorderRadiusTablet: value,
                    pg_featuredImageBottomBorderRadiusTablet: value,
                    pg_featuredImageLeftBorderRadiusTablet: value
                });
            } else {
                setAttributes({ [`pg_featuredImage${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusTablet`]: value });
            }
            break;
        case 'Mobile':
            if ('linked' === attributes.featuredImageBorderRadiusTypeMobile) {
                setAttributes({
                    pg_featuredImageTopBorderRadiusMobile: value,
                    pg_featuredImageRightBorderRadiusMobile: value,
                    pg_featuredImageBottomBorderRadiusMobile: value,
                    pg_featuredImageLeftBorderRadiusMobile: value
                });
            } else {
                setAttributes({ [`pg_featuredImage${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusMobile`]: value });
            }
            break;
    }
};

// Function to get the current border-radius value for a specific side
const getfeaturedImageBorderRadius = type => {
    switch (type) {
        case 'top':
            switch (getView) {
                case 'Desktop':
                    return attributes.featuredImageBorderRadiusType === 'linked'
                        ? attributes.pg_featuredImageTopBorderRadius
                        : attributes.pg_featuredImageTopBorderRadius;
                case 'Tablet':
                    return attributes.featuredImageBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_featuredImageTopBorderRadiusTablet
                        : attributes.pg_featuredImageTopBorderRadiusTablet;
                case 'Mobile':
                    return attributes.featuredImageBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_featuredImageTopBorderRadiusMobile
                        : attributes.pg_featuredImageTopBorderRadiusMobile;
            }
        case 'right':
            switch (getView) {
                case 'Desktop':
                    return attributes.featuredImageBorderRadiusType === 'linked'
                        ? attributes.pg_featuredImageRightBorderRadius
                        : attributes.pg_featuredImageRightBorderRadius;
                case 'Tablet':
                    return attributes.featuredImageBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_featuredImageRightBorderRadiusTablet
                        : attributes.pg_featuredImageRightBorderRadiusTablet;
                case 'Mobile':
                    return attributes.featuredImageBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_featuredImageRightBorderRadiusMobile
                        : attributes.pg_featuredImageRightBorderRadiusMobile;
            }
        case 'bottom':
            switch (getView) {
                case 'Desktop':
                    return attributes.featuredImageBorderRadiusType === 'linked'
                        ? attributes.pg_featuredImageBottomBorderRadius
                        : attributes.pg_featuredImageBottomBorderRadius;
                case 'Tablet':
                    return attributes.featuredImageBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_featuredImageBottomBorderRadiusTablet
                        : attributes.pg_featuredImageBottomBorderRadiusTablet;
                case 'Mobile':
                    return attributes.featuredImageBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_featuredImageBottomBorderRadiusMobile
                        : attributes.pg_featuredImageBottomBorderRadiusMobile;
            }
        case 'left':
            switch (getView) {
                case 'Desktop':
                    return attributes.featuredImageBorderRadiusType === 'linked'
                        ? attributes.pg_featuredImageLeftBorderRadius
                        : attributes.pg_featuredImageLeftBorderRadius;
                case 'Tablet':
                    return attributes.featuredImageBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_featuredImageLeftBorderRadiusTablet
                        : attributes.pg_featuredImageLeftBorderRadiusTablet;
                case 'Mobile':
                    return attributes.featuredImageBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_featuredImageLeftBorderRadiusMobile
                        : attributes.pg_featuredImageLeftBorderRadiusMobile;
            }
        default:
            return undefined;
    }
};

// Handle pagination border-radius changes
const handlefeaturedImageBorderRadiusChange = (newValues) => {
    setAttributes({
        pg_featuredImageTopBorderRadius: newValues.borderRadius.top,
        pg_featuredImageLeftBorderRadius: newValues.borderRadius.left,
        pg_featuredImageRightBorderRadius: newValues.borderRadius.right,
        pg_featuredImageBottomBorderRadius: newValues.borderRadius.bottom,
    });
};

//category
/// Function to get the current border-radius type
const getcategoryBorderRadiusType = () => {
    switch (getView) {
        case 'Desktop':
            return attributes.categoryBorderRadiusType;
        case 'Tablet':
            return attributes.categoryBorderRadiusTypeTablet;
        case 'Mobile':
            return attributes.categoryBorderRadiusTypeMobile;
        default:
            return undefined;
    }
};

// Function to change the border-radius type
const changecategoryBorderRadiusType = value => {
    if ('Desktop' === getView) {
        setAttributes({
            categoryBorderRadiusType: value,
            categoryBorderRadiusTypeTablet: value,
            categoryBorderRadiusTypeMobile: value
        });
    } else if ('Tablet' === getView) {
        setAttributes({
            categoryBorderRadiusTypeTablet: value
        });
    } else if ('Mobile' === getView) {
        setAttributes({
            categoryBorderRadiusTypeMobile: value
        });
    }
};

// Function to change the border-radius values
const changecategoryBorderRadius = (type, value) => {
    switch (getView) {
        case 'Desktop':
            if ('linked' === attributes.categoryBorderRadiusType) {
                setAttributes({
                    pg_categoryTopBorderRadius: value,
                    pg_categoryRightBorderRadius: value,
                    pg_categoryBottomBorderRadius: value,
                    pg_categoryLeftBorderRadius: value
                });
            } else {
                setAttributes({ [`pg_category${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadius`]: value });
            }
            break;
        case 'Tablet':
            if ('linked' === attributes.categoryBorderRadiusTypeTablet) {
                setAttributes({
                    pg_categoryTopBorderRadiusTablet: value,
                    pg_categoryRightBorderRadiusTablet: value,
                    pg_categoryBottomBorderRadiusTablet: value,
                    pg_categoryLeftBorderRadiusTablet: value
                });
            } else {
                setAttributes({ [`pg_category${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusTablet`]: value });
            }
            break;
        case 'Mobile':
            if ('linked' === attributes.categoryBorderRadiusTypeMobile) {
                setAttributes({
                    pg_categoryTopBorderRadiusMobile: value,
                    pg_categoryRightBorderRadiusMobile: value,
                    pg_categoryBottomBorderRadiusMobile: value,
                    pg_categoryLeftBorderRadiusMobile: value
                });
            } else {
                setAttributes({ [`pg_category${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusMobile`]: value });
            }
            break;
    }
};

// Function to get the current border-radius value for a specific side
const getcategoryBorderRadius = type => {
    switch (type) {
        case 'top':
            switch (getView) {
                case 'Desktop':
                    return attributes.categoryBorderRadiusType === 'linked'
                        ? attributes.pg_categoryTopBorderRadius
                        : attributes.pg_categoryTopBorderRadius;
                case 'Tablet':
                    return attributes.categoryBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_categoryTopBorderRadiusTablet
                        : attributes.pg_categoryTopBorderRadiusTablet;
                case 'Mobile':
                    return attributes.categoryBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_categoryTopBorderRadiusMobile
                        : attributes.pg_categoryTopBorderRadiusMobile;
            }
        case 'right':
            switch (getView) {
                case 'Desktop':
                    return attributes.categoryBorderRadiusType === 'linked'
                        ? attributes.pg_categoryRightBorderRadius
                        : attributes.pg_categoryRightBorderRadius;
                case 'Tablet':
                    return attributes.categoryBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_categoryRightBorderRadiusTablet
                        : attributes.pg_categoryRightBorderRadiusTablet;
                case 'Mobile':
                    return attributes.categoryBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_categoryRightBorderRadiusMobile
                        : attributes.pg_categoryRightBorderRadiusMobile;
            }
        case 'bottom':
            switch (getView) {
                case 'Desktop':
                    return attributes.categoryBorderRadiusType === 'linked'
                        ? attributes.pg_categoryBottomBorderRadius
                        : attributes.pg_categoryBottomBorderRadius;
                case 'Tablet':
                    return attributes.categoryBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_categoryBottomBorderRadiusTablet
                        : attributes.pg_categoryBottomBorderRadiusTablet;
                case 'Mobile':
                    return attributes.categoryBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_categoryBottomBorderRadiusMobile
                        : attributes.pg_categoryBottomBorderRadiusMobile;
            }
        case 'left':
            switch (getView) {
                case 'Desktop':
                    return attributes.categoryBorderRadiusType === 'linked'
                        ? attributes.pg_categoryLeftBorderRadius
                        : attributes.pg_categoryLeftBorderRadius;
                case 'Tablet':
                    return attributes.categoryBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_categoryLeftBorderRadiusTablet
                        : attributes.pg_categoryLeftBorderRadiusTablet;
                case 'Mobile':
                    return attributes.categoryBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_categoryLeftBorderRadiusMobile
                        : attributes.pg_categoryLeftBorderRadiusMobile;
            }
        default:
            return undefined;
    }
};

// Handle pagination border-radius changes
const handlecategoryBorderRadiusChange = (newValues) => {
    setAttributes({
        pg_categoryTopBorderRadius: newValues.borderRadius.top,
        pg_categoryLeftBorderRadius: newValues.borderRadius.left,
        pg_categoryRightBorderRadius: newValues.borderRadius.right,
        pg_categoryBottomBorderRadius: newValues.borderRadius.bottom,
    });
};

//tags
/// Function to get the current border-radius type
const gettagsBorderRadiusType = () => {
    switch (getView) {
        case 'Desktop':
            return attributes.tagsBorderRadiusType;
        case 'Tablet':
            return attributes.tagsBorderRadiusTypeTablet;
        case 'Mobile':
            return attributes.tagsBorderRadiusTypeMobile;
        default:
            return undefined;
    }
};

// Function to change the border-radius type
const changetagsBorderRadiusType = value => {
    if ('Desktop' === getView) {
        setAttributes({
            tagsBorderRadiusType: value,
            tagsBorderRadiusTypeTablet: value,
            tagsBorderRadiusTypeMobile: value
        });
    } else if ('Tablet' === getView) {
        setAttributes({
            tagsBorderRadiusTypeTablet: value
        });
    } else if ('Mobile' === getView) {
        setAttributes({
            tagsBorderRadiusTypeMobile: value
        });
    }
};

// Function to change the border-radius values
const changetagsBorderRadius = (type, value) => {
    switch (getView) {
        case 'Desktop':
            if ('linked' === attributes.tagsBorderRadiusType) {
                setAttributes({
                    pg_tagsTopBorderRadius: value,
                    pg_tagsRightBorderRadius: value,
                    pg_tagsBottomBorderRadius: value,
                    pg_tagsLeftBorderRadius: value
                });
            } else {
                setAttributes({ [`pg_tags${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadius`]: value });
            }
            break;
        case 'Tablet':
            if ('linked' === attributes.tagsBorderRadiusTypeTablet) {
                setAttributes({
                    pg_tagsTopBorderRadiusTablet: value,
                    pg_tagsRightBorderRadiusTablet: value,
                    pg_tagsBottomBorderRadiusTablet: value,
                    pg_tagsLeftBorderRadiusTablet: value
                });
            } else {
                setAttributes({ [`pg_tags${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusTablet`]: value });
            }
            break;
        case 'Mobile':
            if ('linked' === attributes.tagsBorderRadiusTypeMobile) {
                setAttributes({
                    pg_tagsTopBorderRadiusMobile: value,
                    pg_tagsRightBorderRadiusMobile: value,
                    pg_tagsBottomBorderRadiusMobile: value,
                    pg_tagsLeftBorderRadiusMobile: value
                });
            } else {
                setAttributes({ [`pg_tags${type.charAt(0).toUpperCase() + type.slice(1)}BorderRadiusMobile`]: value });
            }
            break;
    }
};

// Function to get the current border-radius value for a specific side
const gettagsBorderRadius = type => {
    switch (type) {
        case 'top':
            switch (getView) {
                case 'Desktop':
                    return attributes.tagsBorderRadiusType === 'linked'
                        ? attributes.pg_tagsTopBorderRadius
                        : attributes.pg_tagsTopBorderRadius;
                case 'Tablet':
                    return attributes.tagsBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_tagsTopBorderRadiusTablet
                        : attributes.pg_tagsTopBorderRadiusTablet;
                case 'Mobile':
                    return attributes.tagsBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_tagsTopBorderRadiusMobile
                        : attributes.pg_tagsTopBorderRadiusMobile;
            }
        case 'right':
            switch (getView) {
                case 'Desktop':
                    return attributes.tagsBorderRadiusType === 'linked'
                        ? attributes.pg_tagsRightBorderRadius
                        : attributes.pg_tagsRightBorderRadius;
                case 'Tablet':
                    return attributes.tagsBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_tagsRightBorderRadiusTablet
                        : attributes.pg_tagsRightBorderRadiusTablet;
                case 'Mobile':
                    return attributes.tagsBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_tagsRightBorderRadiusMobile
                        : attributes.pg_tagsRightBorderRadiusMobile;
            }
        case 'bottom':
            switch (getView) {
                case 'Desktop':
                    return attributes.tagsBorderRadiusType === 'linked'
                        ? attributes.pg_tagsBottomBorderRadius
                        : attributes.pg_tagsBottomBorderRadius;
                case 'Tablet':
                    return attributes.tagsBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_tagsBottomBorderRadiusTablet
                        : attributes.pg_tagsBottomBorderRadiusTablet;
                case 'Mobile':
                    return attributes.tagsBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_tagsBottomBorderRadiusMobile
                        : attributes.pg_tagsBottomBorderRadiusMobile;
            }
        case 'left':
            switch (getView) {
                case 'Desktop':
                    return attributes.tagsBorderRadiusType === 'linked'
                        ? attributes.pg_tagsLeftBorderRadius
                        : attributes.pg_tagsLeftBorderRadius;
                case 'Tablet':
                    return attributes.tagsBorderRadiusTypeTablet === 'linked'
                        ? attributes.pg_tagsLeftBorderRadiusTablet
                        : attributes.pg_tagsLeftBorderRadiusTablet;
                case 'Mobile':
                    return attributes.tagsBorderRadiusTypeMobile === 'linked'
                        ? attributes.pg_tagsLeftBorderRadiusMobile
                        : attributes.pg_tagsLeftBorderRadiusMobile;
            }
        default:
            return undefined;
    }
};

// Handle tags border-radius changes
const handletagsBorderRadiusChange = (newValues) => {
    setAttributes({
        pg_tagsTopBorderRadius: newValues.borderRadius.top,
        pg_tagsLeftBorderRadius: newValues.borderRadius.left,
        pg_tagsRightBorderRadius: newValues.borderRadius.right,
        pg_tagsBottomBorderRadius: newValues.borderRadius.bottom,
    });
};

const maxpxvalue = attributes.globalwidth/attributes.pg_postLayoutColumns;
// unit switch max value
const [layoutcustomWidthUnit, setlayoutcustomWidthUnit] = useState('%');
const maxlayoutcustomWidthUnit = layoutcustomWidthUnit === 'px' ? maxpxvalue : layoutcustomWidthUnit === 'em' ? 50 : layoutcustomWidthUnit === '%' ? 100:'';
const customTooltipCustomWidth = value => `${value}${attributes.layoutcustomWidthUnit}`;

//layout width
const getlayoutCustomWidth = () => {
	switch ( getView ) {
	case 'Desktop':
		return attributes.layoutcustomWidth;
	case 'Tablet':
		return attributes.layoutcustomWidthTablet;
	case 'Mobile':
		return attributes.layoutcustomWidthMobile;
	default:
		return undefined;
	}
};

const changelayoutCustomWidth = value => {
	if ( 'Desktop' === getView ) {
		setAttributes({ layoutcustomWidth: value });
	} else if ( 'Tablet' === getView ) {
		setAttributes({ layoutcustomWidthTablet: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ layoutcustomWidthMobile: value });
	}
};

// Function to map title tag to title size
const getTitleSize = (tag) => {
    switch (tag) {
        case 'h1':
            return 24;
        case 'h2':
            return 18;
        case 'h3':
            return 16;
        case 'h4':
            return 12;
        case 'h5':
            return 10;
        case 'h6':
            return 8;
        default:
            return 16; // default size if the tag doesn't match any case
    }
};

const handleTitleTagChange = (value) => {
	const titleSize = getTitleSize(value);
	setAttributes({
		pg_blockTitleTag: value,
		pg_TitleSize: titleSize,
	});
};

const handelBackgroundColor = (value) => {
	// Update the block’s attributes or state based on the changes
	if(value.color){
		setAttributes({pg_TitleColorhvr:value.color});
	}
	if(value.background){
		setAttributes({pg_TitleColor:value.background});
	}
};

const handleTypographyChange = (value) => {

	if(value.size){
		setAttributes({pg_textSize:value.size})
	}
	if(value.appearance){
		setAttributes({pg_ContentWeight:value.appearance})
	}
	if(value.lineHeight){
		setAttributes({pg_lineHeight:value.lineHeight})
	}
	
};

const handelcategoryBackgroundColor = (value) => {
	// Update the block’s attributes or state based on the changes
	if(value.color){
		setAttributes({pg_categoryTextColor:value.color});
	}
	if(value.background){
		setAttributes({category_backgroundColor:value.background});
	}
};

const handeltagBackgroundColor = (value) => {
	// Update the block’s attributes or state based on the changes
	if(value.color){
		setAttributes({pg_tagTextColor:value.color});
	}
	if(value.background){
		setAttributes({tag_backgroundColor:value.background});
	}
};

const handlesizeandlineheight = (value) => {
	if(value.size){
		setAttributes({pg_TitleSize:value.size})
	}
	if(value.lineHeight){
		setAttributes({pg_TitlelineHeight:value.lineHeight})
	}
}	


    return (
        <>
			{/* Layout Panel */}
			<PanelBody title={__('Layout', 'vayu-blocks')} initialOpen={false}>
				<ResponsiveControl
					label={ __( 'Post Width', 'vayu-blocks' ) }
					>	
					<UnitChooser
					value={ attributes.layoutcustomWidthUnit }
					onClick={ layoutcustomWidthUnit => {
						setAttributes({ layoutcustomWidthUnit });
						setlayoutcustomWidthUnit(layoutcustomWidthUnit); 
						}}
					units={ [ 'px', 'em', '%' ] }
					/>

					<RangeControl
						renderTooltipContent={ customTooltipCustomWidth }
						value={ getlayoutCustomWidth() || '' }
						onChange={ changelayoutCustomWidth }
						step={ 1 }
						min={ 1 }
						max={ maxlayoutcustomWidthUnit }
						allowReset={ true }
					/>
				</ResponsiveControl>

				<h4>Alignment</h4>
				<ToogleGroupControl
					label={__('Alignment', 'vayu-blocks')}
					value={ attributes.pg_layoutalignment }
					onChange={ e => setAttributes({ pg_layoutalignment : e }) }		
					options={[
						{
							icon: HorizontalLeft,
							label: __( 'Left', 'vayu-blocks' ),
							value: 'left'
						},
						{
							icon: Center,
							label: __( 'Center', 'vayu-blocks' ),
							value: 'center'
						},
						{
							icon: HorizontalRight,
							label: __( 'Right', 'vayu-blocks' ),
							value: 'right'
						},
					]}
					
					hasIcon
				/>
			<br/>
				<BackgroundSelectorControl
					backgroundType={layout_backgroundType}
					backgroundColor={layout_backgroundColor}
					//image={layout_backgroundImage}
					gradient={layout_backgroundGradient}
					focalPoint={layout_backgroundPosition}
					backgroundAttachment={layout_backgroundAttachment}
					backgroundRepeat={layout_backgroundRepeat}
					backgroundSize={layout_backgroundSize}
					changeBackgroundType={(value) => setAttributes({ layout_backgroundType: value })}
					changeImage={(media) => {
						setAttributes({
							layout_backgroundImage: pick(media, ['id', 'url'])
						});
					}}
					removeImage={() => setAttributes({ layout_backgroundImage: undefined })}
					changeColor={(value) => setAttributes({ layout_backgroundColor: value })}
					changeGradient={(value) => setAttributes({ layout_backgroundGradient: value })}
					changeBackgroundAttachment={(value) => setAttributes({ layout_backgroundAttachment: value })}
					changeBackgroundRepeat={(value) => setAttributes({ layout_backgroundRepeat: value })}
					changeFocalPoint={(value) => setAttributes({ layout_backgroundPosition: value })}
					changeBackgroundSize={(value) => setAttributes({ layout_backgroundSize: value })}
			/>
		
			<RangeControl
				label={__('Spacing', 'vayu-blocks')}
				value={pg_spacing}
				onChange={(value) => setAttributes({ pg_spacing: value })}
				min={1}
				max={10}
				step={1}
			/>

			<BorderBoxControlComponent
				label={__('Border','vayu-blocks')}
				value={{
					all: {
						color: attributes.pg_layoutBorderColor,
						width: attributes.pg_layoutBorder,
						style: attributes.layoutborderType,
					},
					top: {
						color: attributes.pg_layoutTopBorderColor,
						width: attributes.pg_layoutTopBorder,
						style: attributes.layoutTopborderType,
					},
					bottom: {
						color: attributes.pg_layoutBottomBorderColor,
						width: attributes.pg_layoutBottomBorder,
						style: attributes.layoutBottomborderType,
					},
					left: {
						color: attributes.pg_layoutLeftBorderColor,
						width: attributes.pg_layoutLeftBorder,
						style: attributes.layoutLeftborderType,
					},
					right: {
						color: attributes.pg_layoutRightBorderColor,
						width: attributes.pg_layoutRightBorder,
						style: attributes.layoutRightborderType,
					},
				}}
				onChange={handleBorderChange}
				type="border"
			/>
				
			<ResponsiveControl label={ __( 'Border Radius', 'vayu-blocks' ) } >
				<UnitChooser
					value={ attributes.pg_layoutBorderRadiusunit }
						onClick={(unit) => {
							setAttributes({ pg_layoutBorderRadiusunit : unit });
						}}
					units={ [ 'px', 'em', '%' ] }
				/>

				<SizingControl
					type={ getlayoutBorderRadiusType() }
					min={ 0 }
					changeType={ changelayoutBorderRadiusType }
					onChange={ changelayoutBorderRadius }
					options={ [
						{
							label: __( 'T-R', 'vayu-blocks' ),
							type: 'top',
							value: getlayoutBorderRadius( 'top' )
						},
						{
							label: __( 'T-L', 'vayu-blocks' ),
							type: 'right',
							value: getlayoutBorderRadius( 'right' )
						},
						{
							label: __( 'B-R', 'vayu-blocks' ),
							type: 'bottom',
							value: getlayoutBorderRadius( 'bottom' )
						},
						{
							label: __( 'B-L', 'vayu-blocks' ),
							type: 'left',
							value: getlayoutBorderRadius( 'left' )
						}
					] }
				/>
			</ResponsiveControl>

			<ResponsiveControl label={__('Padding', 'vayu-blocks')}>
				<UnitChooser
					value={attributes.pg_layoutpaddingUnit}
					onClick={(unit) => {
					setAttributes({ pg_layoutpaddingUnit: unit });
					}}
					units={['px', 'em', '%']}
				/>
				<SizingControl
					min={0}
					type={getLayoutPaddingType()}
					changeType={changeLayoutPaddingType}
					max={100} // Adjust as needed
					onChange={changeLayoutPadding}
					options={[
					{ label: __('Top', 'vayu-blocks'), type: 'top', value: getLayoutPadding('top') },
					{ label: __('Right', 'vayu-blocks'), type: 'right', value: getLayoutPadding('right') },
					{ label: __('Bottom', 'vayu-blocks'), type: 'bottom', value: getLayoutPadding('bottom') },
					{ label: __('Left', 'vayu-blocks'), type: 'left', value: getLayoutPadding('left') }
					]}
				/>
			</ResponsiveControl>
			</PanelBody>

			{/* Title Panel */}
			<PanelBody title={__('Title', 'vayu-blocks')} initialOpen={false}>

				<SelectControl
					label={__('Title Tag', 'vayu-blocks')}
					value={attributes.pg_blockTitleTag}
					options={[
						{ label: __('H1 Heading h1', 'vayu-blocks'), value: 'h1' },
						{ label: __('H2 Heading h2', 'vayu-blocks'), value: 'h2' },
						{ label: __('H3 Heading h3', 'vayu-blocks'), value: 'h3' },
						{ label: __('H4 Heading h4', 'vayu-blocks'), value: 'h4' },
						{ label: __('H5 Heading h5', 'vayu-blocks'), value: 'h5' },
						{ label: __('H6 Heading h6', 'vayu-blocks'), value: 'h6' },
					]}
					onChange={handleTitleTagChange}
				/>

				<Vayu_blocks_typographycontrol
					onChange={(value) => handlesizeandlineheight(value)}
					value={{size:pg_TitleSize,lineHeight:pg_TitlelineHeight}}
					includeSize={true}
					includeLineHeight = {true}
					vayu_blocks_sizes={fontSizeextra}
					para=""
				/> 

				<ColorPanel
					colorTool={[
						{
							active: ['gradient'],
							name: 'Color',
							value: pg_TitleColor,
							attribute: 'background',
						},
						{
							active: ['gradient'],
							name: 'Hover',
							value: pg_TitleColorhvr,
							attribute: 'color',
						},
					]}

					handelColorPanel={(value)=>handelBackgroundColor(value)}
					initialTab="color"
				/>

				

			</PanelBody>

			{/* Content Panel */}
			<PanelBody title={__('Content', 'vayu-blocks')} initialOpen={false}>

			<Vayu_blocks_typographycontrol
                    onChange={handleTypographyChange}
					value = {{size:pg_textSize,appearance:attributes.pg_ContentWeight,lineHeight:pg_lineHeight}}
                    includeSize={true}
                    includeLineHeight={true}
                    includeAppearance={true}
                    para=""
					vayu_blocks_sizes={fontSizes}
					appearanceOptions ={[
						{ label: __('Normal', 'text-domain'), value: 'normal' },
						{ label: __('Bold', 'text-domain'), value: 'bold' },
						{ label: __('Lighter', 'text-domain'), value: 'lighter' },
						{ label: __('Bolder', 'text-domain'), value: 'bolder' },
					]}
                /> 

				<ColorPanel
					colorTool={[
						{
							active: ['gradient'],
							name: 'Color',
							value: pg_textColor,
							attribute: 'color',
						}
					]}

					handelColorPanel={(value)=>setAttributes({pg_textColor:value.color})}
					initialTab="color"
				/>
			</PanelBody>

			{/* Featured Image Panel */}
			<PanelBody title={__('Featured Image', 'vayu-blocks')} initialOpen={false}>
				<ToggleControl
					label={__('Show Featured Image', 'vayu-blocks')}
					checked={pg_showFeaturedImage}
					onChange={(value) => {
						setAttributes({ pg_showFeaturedImage: value });

						// Automatically disable and uncheck 'Show Categories on Image' if 'Show Featured Image' is false
						if (!value) {
							setAttributes({ pg_showCategoriesOnImage: false });
						}
					}}
				/>
				{pg_showFeaturedImage && (
					<>
					<BorderBoxControlComponent
							label={__('Border','vayu-blocks')}
							value={{
								all: {
									color: attributes.pg_featuredImageBorderColor,
									width: attributes.pg_featuredImageBorder,
									style: attributes.featuredImageborderType,
								},
								top: {
									color: attributes.pg_featuredImageTopBorderColor,
									width: attributes.pg_featuredImageTopBorder,
									style: attributes.featuredImageTopborderType,
								},
								bottom: {
									color: attributes.pg_featuredImageBottomBorderColor,
									width: attributes.pg_featuredImageBottomBorder,
									style: attributes.featuredImageBottomborderType,
								},
								left: {
									color: attributes.pg_featuredImageLeftBorderColor,
									width: attributes.pg_featuredImageLeftBorder,
									style: attributes.featuredImageLeftborderType,
								},
								right: {
									color: attributes.pg_featuredImageRightBorderColor,
									width: attributes.pg_featuredImageRightBorder,
									style: attributes.featuredImageRightborderType,
								},
							}}
							onChange={handlefeaturedImageBorderChange}
							type="border"
						/>
						
						<ResponsiveControl label={ __( 'Border Radius', 'vayu-blocks' ) } >
                        <UnitChooser
                            value={ attributes.pg_featuredImageBorderRadiusunit }
                                onClick={(unit) => {
                                    setAttributes({ pg_featuredImageBorderRadiusunit : unit });
                                }}
                            units={ [ 'px', 'em', '%' ] }
                        />

                        <SizingControl
                            type={ getfeaturedImageBorderRadiusType() }
                            min={ 0 }
                            changeType={ changefeaturedImageBorderRadiusType }
                            onChange={ changefeaturedImageBorderRadius }
                            options={ [
                                {
                                    label: __( 'T-R', 'vayu-blocks' ),
                                    type: 'top',
                                    value: getfeaturedImageBorderRadius( 'top' )
                                },
                                {
                                    label: __( 'T-L', 'vayu-blocks' ),
                                    type: 'right',
                                    value: getfeaturedImageBorderRadius( 'right' )
                                },
                                {
                                    label: __( 'B-R', 'vayu-blocks' ),
                                    type: 'bottom',
                                    value: getfeaturedImageBorderRadius( 'bottom' )
                                },
                                {
                                    label: __( 'B-L', 'vayu-blocks' ),
                                    type: 'left',
                                    value: getfeaturedImageBorderRadius( 'left' )
                                }
                            ] }
                        />
                    	</ResponsiveControl>

					</>
				)}
			</PanelBody>

			{/* Category Panel */}
			<PanelBody title = {__('Category','vayu-blocks')} initialOpen={false}> {/* Category Meta Settings */}
				<ToggleControl
				label={__('Show Categories', 'vayu-blocks')}
				checked={pg_showCategories}
				onChange={(value) => setAttributes({ pg_showCategories: value })}
			/>
			{pg_showCategories && (<>

				<RangeControl
						label={__('Number of Categories', 'vayu-blocks')}
						value={pg_numberOfCategories}
						onChange={(value) => setAttributes({pg_numberOfCategories:value})}
						min={1}
						max={5}
					/>

				<Vayu_blocks_typographycontrol
					onChange={(value) => setAttributes({ pg_categoryTextSize: value.size })}
					value={{size:pg_categoryTextSize}}
					includeSize={true}
					vayu_blocks_sizes={fontSizesmeta}
					para=""
				/> 

				<ColorPanel
					colorTool={[
						{
							active: ['gradient'],
							name: 'Background',
							value: category_backgroundColor,
							attribute: 'background',
						},
						{
							active: ['color'],
							name: 'Text',
							value: pg_categoryTextColor,
							attribute: 'color',
						}
					]}

					handelColorPanel={(value)=>handelcategoryBackgroundColor(value)}
					initialTab="color"
				/>

				<BorderBoxControlComponent
					label={__('Border','vayu-blocks')}
					value={{
						all: {
							color: attributes.pg_categoryBorderColor,
							width: attributes.pg_categoryBorder,
							style: attributes.categoryborderType,
						},
						top: {
							color: attributes.pg_categoryTopBorderColor,
							width: attributes.pg_categoryTopBorder,
							style: attributes.categoryTopborderType,
						},
						bottom: {
							color: attributes.pg_categoryBottomBorderColor,
							width: attributes.pg_categoryBottomBorder,
							style: attributes.categoryBottomborderType,
						},
						left: {
							color: attributes.pg_categoryLeftBorderColor,
							width: attributes.pg_categoryLeftBorder,
							style: attributes.categoryLeftborderType,
						},
						right: {
							color: attributes.pg_categoryRightBorderColor,
							width: attributes.pg_categoryRightBorder,
							style: attributes.categoryRightborderType,
						},
					}}
					onChange={handlecategoryBorderChange}
					type="border"
				/>
		
				<ResponsiveControl label={ __( 'Border Radius', 'vayu-blocks' ) } >
					<UnitChooser
						value={ attributes.pg_categoryBorderRadiusunit }
							onClick={(unit) => {
								setAttributes({ pg_categoryBorderRadiusunit : unit });
							}}
						units={ [ 'px', 'em', '%' ] }
					/>

					<SizingControl
						type={ getcategoryBorderRadiusType() }
						min={ 0 }
						changeType={ changecategoryBorderRadiusType }
						onChange={ changecategoryBorderRadius }
						options={ [
							{
								label: __( 'T-R', 'vayu-blocks' ),
								type: 'top',
								value: getcategoryBorderRadius( 'top' )
							},
							{
								label: __( 'T-L', 'vayu-blocks' ),
								type: 'right',
								value: getcategoryBorderRadius( 'right' )
							},
							{
								label: __( 'B-R', 'vayu-blocks' ),
								type: 'bottom',
								value: getcategoryBorderRadius( 'bottom' )
							},
							{
								label: __( 'B-L', 'vayu-blocks' ),
								type: 'left',
								value: getcategoryBorderRadius( 'left' )
							}
						] }
					/>
				</ResponsiveControl>

				<ResponsiveControl label={__('Padding', 'vayu-blocks')}>
					<UnitChooser
						value={attributes.categorypaddingUnit}
						onClick={(unit) => {
						setAttributes({ categorypaddingUnit: unit });
						}}
						units={['px', 'em', '%']}
					/>
					<SizingControl
						min={0}
						type={getCategoryPaddingType()}
						changeType={changeCategoryPaddingType}
						max={100} // Adjust as needed
						onChange={changeCategoryPadding}
						options={[
						{ label: __('Top', 'vayu-blocks'), type: 'top', value: getCategoryPadding('top') },
						{ label: __('Right', 'vayu-blocks'), type: 'right', value: getCategoryPadding('right') },
						{ label: __('Bottom', 'vayu-blocks'), type: 'bottom', value: getCategoryPadding('bottom') },
						{ label: __('Left', 'vayu-blocks'), type: 'left', value: getCategoryPadding('left') }
						]}
					/>
				</ResponsiveControl>
									
			</>)}
			</PanelBody>

			{/* Tag Panel */}
			<PanelBody title = {__('Tags','vayu-blocks')} initialOpen={false}>
				<ToggleControl
					label={__('Show Tags', 'vayu-blocks')}
					checked={pg_showTags}
					onChange={(value) => setAttributes({ pg_showTags: value })}
				/>
			{/* Tag Meta Settings */}
			{pg_showTags && (<>
				<RangeControl
					label={__('Number of Tags', 'vayu-blocks')}
					value={pg_numberOfTags}
					onChange={(value) => setAttributes({pg_numberOfTags:value})}
					min={1}
					max={5}
				/>
				
			<Vayu_blocks_typographycontrol
				onChange={(value) => setAttributes({ pg_tagTextSize: value.size })}
				value={{size:pg_tagTextSize}}
				includeSize={true}
				vayu_blocks_sizes={fontSizesmeta}
				para=""
			/> 

			<ColorPanel
				colorTool={[
					{
						active: ['gradient'],
						name: 'Background',
						value: tag_backgroundColor,
						attribute: 'background',
					},
					{
						active: ['color'],
						name: 'Text',
						value: pg_tagTextColor,
						attribute: 'color',
					}
				]}

				handelColorPanel={(value)=>handeltagBackgroundColor(value)}
				initialTab="color"
			/>

	
			<BorderBoxControlComponent
				label={__('Border','vayu-blocks')}
				value={{
					all: {
						color: attributes.pg_tagBorderColor,
						width: attributes.pg_tagBorder,
						style: attributes.tagborderType,
					},
					top: {
						color: attributes.pg_tagTopBorderColor,
						width: attributes.pg_tagTopBorder,
						style: attributes.tagTopborderType,
					},
					bottom: {
						color: attributes.pg_tagBottomBorderColor,
						width: attributes.pg_tagBottomBorder,
						style: attributes.tagBottomborderType,
					},
					left: {
						color: attributes.pg_tagLeftBorderColor,
						width: attributes.pg_tagLeftBorder,
						style: attributes.tagLeftborderType,
					},
					right: {
						color: attributes.pg_tagRightBorderColor,
						width: attributes.pg_tagRightBorder,
						style: attributes.tagRightborderType,
					},
				}}
				onChange={handletagBorderChange}
				type="border"
			/>

				
			<ResponsiveControl label={ __( 'Border Radius', 'vayu-blocks' ) } >
				<UnitChooser
					value={ attributes.pg_tagsBorderRadiusunit }
						onClick={(unit) => {
							setAttributes({ pg_tagsBorderRadiusunit : unit });
						}}
					units={ [ 'px', 'em', '%' ] }
				/>

				<SizingControl
					type={ gettagsBorderRadiusType() }
					min={ 0 }
					changeType={ changetagsBorderRadiusType }
					onChange={ changetagsBorderRadius }
					options={ [
						{
							label: __( 'T-R', 'vayu-blocks' ),
							type: 'top',
							value: gettagsBorderRadius( 'top' )
						},
						{
							label: __( 'T-L', 'vayu-blocks' ),
							type: 'right',
							value: gettagsBorderRadius( 'right' )
						},
						{
							label: __( 'B-R', 'vayu-blocks' ),
							type: 'bottom',
							value: gettagsBorderRadius( 'bottom' )
						},
						{
							label: __( 'B-L', 'vayu-blocks' ),
							type: 'left',
							value: gettagsBorderRadius( 'left' )
						}
					] }
				/>
			</ResponsiveControl>

			<h4>Padding</h4>
			<ResponsiveControl label={__('Padding', 'vayu-blocks')}>
						<UnitChooser
						value={attributes.tagpaddingUnit}
						onClick={(unit) => {
						setAttributes({ tagpaddingUnit: unit });
						}}
						units={['px', 'em', '%']}
						/>
						<SizingControl
						min={0}
						type={getTagPaddingType()}
						changeType={changeTagPaddingType}
						max={100} // Adjust as needed
						onChange={changeTagPadding}
						options={[
						{ label: __('Top', 'vayu-blocks'), type: 'top', value: getTagPadding('top') },
						{ label: __('Right', 'vayu-blocks'), type: 'right', value: getTagPadding('right') },
						{ label: __('Bottom', 'vayu-blocks'), type: 'bottom', value: getTagPadding('bottom') },
						{ label: __('Left', 'vayu-blocks'), type: 'left', value: getTagPadding('left') }
						]}
						/>
			</ResponsiveControl>
			
			</>)}
			</PanelBody>
		
			{/* Author Panel */}
			<PanelBody title = {__('Author','vayu-blocks')} initialOpen={false}>
			<h2>Author</h2>
			<ToggleControl
					label={__('Show Author', 'vayu-blocks')}
					checked={pg_showAuthor}
					onChange={(value) => setAttributes({ pg_showAuthor: value })}
			/>
			{(pg_showAuthor) && (	
				<>
			{/* Author Meta Settings */}
		
			<Vayu_blocks_typographycontrol
				onChange={(value) => setAttributes({ pg_authorTextSize: value.size })}
				value={{size:pg_authorTextSize}}
				includeSize={true}
				vayu_blocks_sizes={fontSizesauthor}
				para=""
			/> 

			<ColorPanel
				colorTool={[
					{
						active: ['color'],
						name: 'Text',
						value: pg_authorTextColor,
						attribute: 'color',
					}
				]}

				handelColorPanel={(value)=>setAttributes({pg_authorTextColor:value.color})}
				initialTab="color"
			/>

			<RangeControl
				label={__('Image Scale', 'vayu-blocks')}
				value={pg_authorImageScale}
				onChange={(value) => setAttributes({ pg_authorImageScale: value })}
				min={0.5} // Minimum scale value
				max={2}   // Maximum scale value
				step={0.1} // Step increment
			/>
			</>
		)}
			</PanelBody>

			{/* Date Panel */}
			<PanelBody title = {__('Date','vayu-blocks')} initialOpen={false}>
				<ToggleControl
					label={__('Show Date', 'vayu-blocks')}
					checked={pg_showDate}
					onChange={(value) => setAttributes({ pg_showDate: value })}
				/>
			{pg_showDate && (<>
			{/* Date Meta Settings */}

			<Vayu_blocks_typographycontrol
					onChange={(value) => setAttributes({ pg_dateTextSize: value.size })}
					value={{size:pg_dateTextSize}}
					includeSize={true}
					vayu_blocks_sizes={fontSizesauthor}
					para=""
				/> 

			<ColorPanel
				colorTool={[
					{
						active: ['color'],
						name: 'Text',
						value: pg_dateColor,
						attribute: 'color',
					}
				]}

				handelColorPanel={(value)=>setAttributes({pg_dateColor:value.color})}
				initialTab="color"
			/>

			<RangeControl
				label={__('Image Scale', 'vayu-blocks')}
				value={pg_dateImageScale}
				onChange={(value) => setAttributes({ pg_dateImageScale: value })}
				min={0.5} // Minimum scale value
				max={2}   // Maximum scale value
				step={0.1} // Step increment
			/>
		</>)}
			</PanelBody>
								
        </>
    );
};

export default Editor;

