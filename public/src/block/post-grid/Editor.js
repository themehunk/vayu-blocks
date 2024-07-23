
import { PanelBody, ToggleControl, ColorPalette, FontSizePicker, RangeControl, __experimentalBoxControl as BoxControl, DropdownMenu, GradientPicker, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import './editor.scss';
import { MenuGroup, MenuItem } from '@wordpress/components';
import { more, arrowUp, arrowDown, trash ,moreVertical} from '@wordpress/icons';
import { Button, Popover } from '@wordpress/components';
import BorderBoxControlComponent from './Components/BorderBoxControlComponent';


import {
	InsSettingHeader,
	ResponsiveControl,
	SizingControl,
	HoverControl,
	ControlPanelControl,
	BackgroundSelectorControl,
	UnitChooser,
} from '../../components/index.js';
import { useSelect } from '@wordpress/data';


const Editor = ({ attributes, setAttributes }) => {

const {
	pg_ContentWeight,
	pg_spacing,
	pg_numberOfTags,
	pg_numberOfCategories,
	pg_postTopBorderRadius,
	pg_postBottomBorderRadius,
	pg_postLeftBorderRadius,
	pg_postRightBorderRadius,

	layoutTopborderType,
	layoutBottomborderType,
	layoutLeftborderType,
	layoutRightborderType,
	pg_layoutTopBorder,
	pg_layoutBottomBorder,
	pg_layoutLeftBorder,
	pg_layoutRightBorder,
	pg_layoutTopBorderColor,
	pg_layoutBottomBorderColor,
	pg_layoutLeftBorderColor,
	pg_layoutRightBorderColor,

	pg_categoryTopBorderRadius,
	pg_categoryBottomBorderRadius,
	pg_categoryLeftBorderRadius,
	pg_categoryRightBorderRadius,

	categoryTopborderType,
	categoryBottomborderType,
	categoryLeftborderType,
	categoryRightborderType,
	pg_categoryTopBorder,
	pg_categoryBottomBorder,
	pg_categoryLeftBorder,
	pg_categoryRightBorder,
	pg_categoryTopBorderColor,
	pg_categoryBottomBorderColor,
	pg_categoryLeftBorderColor,
	pg_categoryRightBorderColor,

	pg_featuredImageTopBorderRadius,
	pg_featuredImageBottomBorderRadius,
	pg_featuredImageLeftBorderRadius,
	pg_featuredImageRightBorderRadius,

	featuredImageTopborderType,
	featuredImageBottomborderType,
	featuredImageLeftborderType,
	featuredImageRightborderType,
	pg_featuredImageTopBorder,
	pg_featuredImageBottomBorder,
	pg_featuredImageLeftBorder,
	pg_featuredImageRightBorder,
	pg_featuredImageTopBorderColor,
	pg_featuredImageBottomBorderColor,
	pg_featuredImageLeftBorderColor,
	pg_featuredImageRightBorderColor,

	pg_tagTopBorderRadius,
	pg_tagBottomBorderRadius,
	pg_tagLeftBorderRadius,
	pg_tagRightBorderRadius,

	tagTopborderType,
	tagBottomborderType,
	tagLeftborderType,
	tagRightborderType,
	pg_tagTopBorder,
	pg_tagBottomBorder,
	pg_tagLeftBorder,
	pg_tagRightBorder,
	pg_tagTopBorderColor,
	pg_tagBottomBorderColor,
	pg_tagLeftBorderColor,
	pg_tagRightBorderColor,


	pg_backgroundType,
	pg_backgroundColor,
	pg_postBorderRadius,
	pg_layoutBorder,
	pg_layoutBorderColor,
	pg_layoutPaddingTop,
	pg_layoutPaddingRight,
	pg_layoutPaddingBottom,
	pg_layoutPaddingLeft,
	pg_blockTitleColor,
	pg_blockTitleSize,
	pg_blockTitleTag,
	pg_textColor,
	pg_textSize,
	pg_lineHeight,
	pg_showFeaturedImage,
	pg_imageBorderRadius,
	pg_showCategoriesMenu,
	pg_showTagsMenu,
	pg_showAuthorMenu,
	pg_showDateMenu,
	pg_showCategories,
	pg_showCategoriesOnImage,
	pg_categoryTextSize,
	pg_categoryTextColor,
	pg_categoryBackgroundColor,
	pg_categoryBorderRadius,
	pg_categoryBorder,
	pg_categoryBorderColor,
	pg_categoryPaddingTop,
	pg_categoryPaddingBottom,
	pg_categoryPaddingLeft,
	pg_categoryPaddingRight,
	pg_showTags,
	pg_tagTextSize,
	pg_tagTextColor,
	pg_tagBackgroundColor,
	pg_tagBorderRadius,
	pg_tagBorder,
	pg_tagBorderColor,
	pg_TagPaddingTop,
	pg_TagPaddingBottom,
	pg_TagPaddingLeft,
	pg_TagPaddingRight,
	pg_showAuthor,
	pg_authorTextSize,
	pg_authorTextColor,
	pg_authorImageScale,
	pg_showDate,
	pg_dateTextSize,
	pg_dateColor,
	buttonpaddingUnit,
	categorypaddingUnit,
	layoutborderType,
	categoryorderType,
	tagborderType,
	
	layout_backgroundType,
	layout_backgroundColor,
	layout_backgroundImage,
	layout_backgroundGradient,
	layout_backgroundPosition,
	layout_backgroundAttachment,
	layout_backgroundRepeat,
	layout_backgroundSize,
	
	category_backgroundType,
	category_backgroundColor,
	category_backgroundImage,
	category_backgroundGradient,
	category_backgroundPosition,
	category_backgroundAttachment,
	category_backgroundRepeat,
	category_backgroundSize,

	tag_backgroundType,
	tag_backgroundColor,
	tag_backgroundImage,
	tag_backgroundGradient,
	tag_backgroundPosition,
	tag_backgroundAttachment,
	tag_backgroundRepeat,
	tag_backgroundSize,
	tagpaddingUnit,

	pg_showBorderColorMenu,
	pg_showBorderSizeMenu ,
	pg_showBorderTypeMenu,
	pg_showBorderRadiusMenu,

	pg_showCategoriesBorderColorMenu,
	pg_showCategoriesBorderSizeMenu ,
	pg_showCategoriesBorderTypeMenu,
	pg_showCategoriesBorderRadiusMenu ,

	pg_showtagBorderColorMenu,
	pg_showtagBorderSizeMenu ,
	pg_showtagBorderTypeMenu,
	pg_showtagBorderRadiusMenu ,


	pg_layoutpaddingType,
	pg_layoutpaddingTypeTablet,
	pg_layoutpaddingTypeMobile,
	pg_layoutpadding,
	pg_layoutpaddingTop,
	pg_layoutpaddingRight,
	pg_layoutpaddingBottom,
	pg_layoutpaddingLeft,
	pg_layoutpaddingTablet,
	pg_layoutpaddingTopTablet,
	pg_layoutpaddingRightTablet,
	pg_layoutpaddingBottomTablet,
	pg_layoutpaddingLeftTablet,
	pg_layoutpaddingMobile,
	pg_layoutpaddingTopMobile,
	pg_layoutpaddingRightMobile,
	pg_layoutpaddingBottomMobile,
	pg_layoutpaddingLeftMobile,
	pg_layoutpaddingUnit,

	pg_TitlelineHeight,
	pg_TitleSize,
	pg_TitleColor,
	pg_dateImageScale

} = attributes;

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
	{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 18 },
	{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 22 },
	{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 25 },
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


const setpaddingtagUnit = (unit) => {
    setAttributes({ tagpaddingUnit: unit });
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

const [ isVisible, setIsVisible ] = useState( false );
const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
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

//category border-radius
const handlecategoryBorderRadiusChange = (newValues) => {
	console.log(newValues);
	setAttributes({
		pg_categoryTopBorderRadius: newValues.borderRadius.top,
		pg_categoryLeftBorderRadius: newValues.borderRadius.left,
		pg_categoryRightBorderRadius: newValues.borderRadius.right,
		pg_categoryBottomBorderRadius: newValues.borderRadius.bottom,
	});
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

//featuredImage border-radius
const handlefeaturedImageBorderRadiusChange = (newValues) => {
	setAttributes({
		pg_featuredImageTopBorderRadius: newValues.borderRadius.top,
		pg_featuredImageLeftBorderRadius: newValues.borderRadius.left,
		pg_featuredImageRightBorderRadius: newValues.borderRadius.right,
		pg_featuredImageBottomBorderRadius: newValues.borderRadius.bottom,
	});
};

    return (
        <>
          <PanelBody title={__('Layout', 'vayu-blocks')} initialOpen={false}>
						<h4>Background Color</h4>
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
						
							<BorderBoxControlComponent
									label={__('Border Radius', 'vayu-blocks')}
									value={{
									top: attributes.pg_postTopBorderRadius,
									right: attributes.pg_postRightBorderRadius,
									left: attributes.pg_postLeftBorderRadius,
									bottom: attributes.pg_postBottomBorderRadius,
									}}
									onChange={handleBorderRadiusChange}
									type="borderRadius"
								/>

						<RangeControl
							label={__('Spacing', 'vayu-blocks')}
							value={pg_spacing}
							onChange={(value) => setAttributes({ pg_spacing: value })}
							min={1}
							max={10}
							step={1}
						/>

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

			<PanelBody title={__('Title', 'vayu-blocks')} initialOpen={false}>
				<h4>Title</h4>

				<SelectControl
					label={__('Title Tag', 'text-domain')}
					value={attributes.pg_blockTitleTag}
					options={[
						{ label: __('Heading 1', 'text-domain'), value: 'h1' },
						{ label: __('Heading 2', 'text-domain'), value: 'h2' },
						{ label: __('Heading 3', 'text-domain'), value: 'h3' },
						{ label: __('Heading 4', 'text-domain'), value: 'h4' },
					]}
					onChange={(value) => setAttributes({ pg_blockTitleTag: value })}
				/>

				<h4>Color</h4>
				<ColorPalette
					label={__(' Color', 'vayu-blocks')}
					colors={colors}
					value={pg_TitleColor}
					onChange={(color) => setAttributes({ pg_TitleColor: color })}
				/>
				<h4> Font Size</h4>
				<FontSizePicker
					label={__(' Font Size', 'Post_blockk')}
					fontSizes={fontSizeextra}
					value={pg_TitleSize}
					onChange={(value) => setAttributes({ pg_TitleSize: value })}
				/>
				<br />
				<RangeControl
					label={__('Line Height', 'vayu-blocks')}
					value={pg_TitlelineHeight}
					onChange={(value) => setAttributes({ pg_TitlelineHeight: value })}
					min={1}
					max={3}
					step={0.1}
				/>

			</PanelBody>
			
			<PanelBody title={__('Content', 'vayu-blocks')} initialOpen={false}>
				<h4>Content</h4>
				<h4> Font Size</h4>
				<FontSizePicker
					label={__(' Font Size', 'Post_blockk')}
					fontSizes={fontSizes}
					value={pg_textSize}
					onChange={(value) => setAttributes({ pg_textSize: value })}
				/>
						<br />
				<SelectControl
					label={__('Font Weight', 'text-domain')}
					value={attributes.pg_ContentWeight}
					options={[
						{ label: __('Normal', 'text-domain'), value: 'normal' },
						{ label: __('Bold', 'text-domain'), value: 'bold' },
						{ label: __('Lighter', 'text-domain'), value: 'lighter' },
						{ label: __('Bolder', 'text-domain'), value: 'bolder' },
					]}
					onChange={(value) => setAttributes({ pg_ContentWeight: value })}
				/>
				
			
				<RangeControl
					label={__('Line Height', 'vayu-blocks')}
					value={pg_lineHeight}
					onChange={(value) => setAttributes({ pg_lineHeight: value })}
					min={1}
					max={3}
					step={0.1}
				/>
				<h4>Color</h4>
				<ColorPalette
					label={__(' Color', 'vayu-blocks')}
					colors={colors}
					value={pg_textColor}
					onChange={(color) => setAttributes({ pg_textColor: color })}
				/>

				

			</PanelBody>

			<PanelBody title={__('Featured Image', 'vayu-blocks')} initialOpen={false}>
				<h4>Featured Image</h4>
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
						
							<BorderBoxControlComponent
									label={__('Border Radius', 'vayu-blocks')}
									value={{
									top: attributes.pg_featuredImageTopBorderRadius,
									right: attributes.pg_featuredImageRightBorderRadius,
									left: attributes.pg_featuredImageLeftBorderRadius,
									bottom: attributes.pg_featuredImageBottomBorderRadius,
									}}
									onChange={handlefeaturedImageBorderRadiusChange}
									type="borderRadius"
								/>

</>
				)}
			</PanelBody>
			
			<PanelBody title = {__('Category','vayu-blocks')} initialOpen={false}> {/* Category Meta Settings */}
				<h2>Category</h2>
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

				<h4>{__('Font Size', 'vayu-blocks')}</h4>
				<FontSizePicker
					label={__('Font Size', 'vayu-blocks')}
					fontSizes={fontSizesmeta}
					value={pg_categoryTextSize}
					onChange={(value) => setAttributes({ pg_categoryTextSize: value })}
				/>
				<h4>{__('Color', 'vayu-blocks')}</h4>
				<ColorPalette
					label={__('Color', 'vayu-blocks')}
					colors={colors}
					value={pg_categoryTextColor}
					onChange={(color) => setAttributes({ pg_categoryTextColor: color })}
				/>
				<h4>{__('Background Color', 'vayu-blocks')}</h4>
				<BackgroundSelectorControl
					backgroundType={category_backgroundType}
					backgroundColor={category_backgroundColor}
					gradient={category_backgroundGradient}
					focalPoint={category_backgroundPosition}
					backgroundAttachment={category_backgroundAttachment}
					backgroundRepeat={category_backgroundRepeat}
					backgroundSize={category_backgroundSize}
					changeBackgroundType={(value) => setAttributes({ category_backgroundType: value })}
					changeColor={(value) => setAttributes({ category_backgroundColor: value })}
					changeGradient={(value) => setAttributes({ category_backgroundGradient: value })}
					changeBackgroundAttachment={(value) => setAttributes({ category_backgroundAttachment: value })}
					changeBackgroundRepeat={(value) => setAttributes({ category_backgroundRepeat: value })}
					changeFocalPoint={(value) => setAttributes({ category_backgroundPosition: value })}
					changeBackgroundSize={(value) => setAttributes({ category_backgroundSize: value })}
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
		
			<BorderBoxControlComponent
					label={__('Border Radius', 'vayu-blocks')}
					value={{
					top: attributes.pg_categoryTopBorderRadius,
					right: attributes.pg_categoryRightBorderRadius,
					left: attributes.pg_categoryLeftBorderRadius,
					bottom: attributes.pg_categoryBottomBorderRadius,
					}}
					onChange={handlecategoryBorderRadiusChange}
					type="borderRadius"
				/>
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
			<h2>Tags</h2>
			
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
				
			<h4>{__('Font Size', 'vayu-blocks')}</h4>
			<FontSizePicker
				label={__('Font Size', 'vayu-blocks')}
				fontSizes={fontSizesmeta}
				value={pg_tagTextSize}
				onChange={(value) => setAttributes({ pg_tagTextSize: value })}
			/>
			<h4>{__('Color', 'vayu-blocks')}</h4>
			<ColorPalette
				
				label={__('Color', 'vayu-blocks')}
				colors={colors}
				value={pg_tagTextColor}
				onChange={(color) => setAttributes({ pg_tagTextColor: color })}
			/>
			<h4>{__('Background Color', 'vayu-blocks')}</h4>
			<BackgroundSelectorControl
				backgroundType={tag_backgroundType}
				backgroundColor={tag_backgroundColor}
				
				gradient={tag_backgroundGradient}
				focalPoint={tag_backgroundPosition}
				backgroundAttachment={tag_backgroundAttachment}
				backgroundRepeat={tag_backgroundRepeat}
				backgroundSize={tag_backgroundSize}
				changeBackgroundType={(value) => setAttributes({ tag_backgroundType: value })}
				changeColor={(value) => setAttributes({ tag_backgroundColor: value })}
				changeGradient={(value) => setAttributes({ tag_backgroundGradient: value })}
				changeBackgroundAttachment={(value) => setAttributes({ tag_backgroundAttachment: value })}
				changeBackgroundRepeat={(value) => setAttributes({ tag_backgroundRepeat: value })}
				changeFocalPoint={(value) => setAttributes({ tag_backgroundPosition: value })}
				changeBackgroundSize={(value) => setAttributes({ tag_backgroundSize: value })}
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

			<BorderBoxControlComponent
					label={__('Border Radius', 'vayu-blocks')}
					value={{
					top: attributes.pg_tagTopBorderRadius,
					right: attributes.pg_tagRightBorderRadius,
					left: attributes.pg_tagLeftBorderRadius,
					bottom: attributes.pg_tagBottomBorderRadius,
					}}
					onChange={handletagBorderRadiusChange}
					type="borderRadius"
				/>

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
			<h4>{__('Font Size', 'vayu-blocks')}</h4>
			<FontSizePicker
				label={__('Font Size', 'vayu-blocks')}
				fontSizes={fontSizesauthor}
				value={pg_authorTextSize}
				onChange={(value) => setAttributes({ pg_authorTextSize: value })}
			/>
			<h4>{__('Color', 'vayu-blocks')}</h4>
			<ColorPalette
				label={__('Color', 'vayu-blocks')}
				colors={colors}
				value={pg_authorTextColor}
				onChange={(color) => setAttributes({ pg_authorTextColor: color })}
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
			<h2>Date</h2>
				<ToggleControl
					label={__('Show Date', 'vayu-blocks')}
					checked={pg_showDate}
					onChange={(value) => setAttributes({ pg_showDate: value })}
				/>
			{pg_showDate && (<>
			{/* Date Meta Settings */}
			<h4>{__('Font Size', 'vayu-blocks')}</h4>
			<FontSizePicker
				label={__('Font Size', 'vayu-blocks')}
				fontSizes={fontSizesauthor}
				value={pg_dateTextSize}
				onChange={(value) => setAttributes({ pg_dateTextSize: value })}
			/>
			<h4>{__('Color', 'vayu-blocks')}</h4>
			<ColorPalette
				
				label={__('Color', 'vayu-blocks')}
				colors={colors}
				value={pg_dateColor}
				onChange={(color) => setAttributes({pg_dateColor: color })}
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

