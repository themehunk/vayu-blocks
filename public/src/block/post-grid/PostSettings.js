import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl,ToggleControl,GradientPicker, ColorPalette, FontSizePicker, RangeControl,  DropdownMenu, SelectControl ,FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';
import apiFetch from '@wordpress/api-fetch';
import { MdColorLens } from "react-icons/md";
import { PiGradient } from "react-icons/pi";
import {AlignmentToolbar} from '@wordpress/block-editor';
import {Start, Center , End,HorizontalLeft,HorizontalRight} from '../../../src/helpers/icon.js';

import {
	ResponsiveControl,	
	UnitChooser,
    SizingControl,
    ToogleGroupControl,
    HoverControl,
} from '../../components/index.js';
import { useEffect, useState } from 'react';
import {Vayu_blocks_typographycontrol} from '../../components/wp-default-compoents/Typography/Vayu_blocks_typographycontrol.js';
import ColorPanel from '../../components/wp-default-compoents/ColorPanel/ColorPanel.js';
import {Vayu_Block_Border_Control} from '../../components/wp-default-compoents/BorderControl/Vayu_Blocks_Border_control.js';

const PostSettings = ({ attributes, setAttributes }) => {
    const {
        pg_allCategories,
        pg_Paginationalignment,

        pg_paginationBorderRadiusunit,
        pg_paginationTopBorderRadius,
        pg_paginationRightBorderRadius,
        pg_paginationBottomBorderRadius,
        pg_paginationLeftBorderRadius,
        pg_paginationTopBorderRadiusTablet,
        pg_paginationRightBorderRadiusTablet,
        pg_paginationBottomBorderRadiusTablet,
        pg_paginationLeftBorderRadiusTablet,
        pg_paginationTopBorderRadiusMobile,
        pg_paginationRightBorderRadiusMobile,
        pg_paginationBottomBorderRadiusMobile,
        pg_paginationLeftBorderRadiusMobile,
        paginationBorderRadiusType,
        paginationBorderRadiusTypeTablet,
        paginationBorderRadiusTypeMobile,
        

        sortByOrder,
        sortByField,
        pg_featuredImageOnly,
        selectedCategories,
        pg_postLayoutColumns,
        pg_numberOfRow,
        pg_gap,
        pg_gapup,
        pg_showExcerpt,
        pg_excerptWords,
        pg_excerptSelector,
        pg_showFullContent,
        pg_showFeaturedImage,
        pg_showCategories,
        pg_showCategoriesOnImage,
        pg_showAuthor,
        pg_showDate,
        pg_showTags,
        showpagination,
        pg_numberOfCategories,
        pg_numberOfTags,

        pg_PaginationpaddingUnit,
        pg_PaginationpaddingType,
        pg_PaginationpaddingTypeTablet,
        pg_PaginationpaddingTypeMobile,
        pg_Paginationpadding,
        pg_PaginationpaddingTop,
        pg_PaginationpaddingRight,
        pg_PaginationpaddingBottom,
        pg_PaginationpaddingLeft,
        pg_PaginationpaddingTablet,
        pg_PaginationpaddingTopTablet,
        pg_PaginationpaddingRightTablet,
        pg_PaginationpaddingBottomTablet,
        pg_PaginationpaddingLeftTablet,
        pg_PaginationpaddingMobile,
        pg_PaginationpaddingTopMobile,
        pg_PaginationpaddingRightMobile,
        pg_PaginationpaddingBottomMobile,
        pg_PaginationpaddingLeftMobile,
        pg_showPaginationBorderColorMenu,
        pg_showPaginationBorderSizeMenu,
        pg_showPaginationBorderTypeMenu,
        pg_showPaginationBorderRadiusMenu,
        pg_PaginationBorder,
        pg_PaginationBorderColor,
        pg_PaginationBorderRadius,
        PaginationborderType,
        pg_PaginationbackgroundType,
        pg_PaginationbackgroundColor,
        pg_PaginationbackgroundGradient,
        pg_paginationBorderRadius,
        pg_PaginationColor,
        pg_PaginationactiveColor,
        pg_PaginationSize,

		paginationTopborderType,
        paginationBottomborderType,
        paginationLeftborderType,
        paginationRightborderType,
		pg_paginationTopBorder,
        pg_paginationBottomBorder,
        pg_paginationLeftBorder,
        pg_paginationRightBorder,
        pg_paginationTopBorderColor,
        pg_paginationBottomBorderColor,
        pg_paginationLeftBorderColor,
        pg_paginationRightBorderColor,
    } = attributes;

    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView;
	}, []);

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

    const fontSizes = [
		{ name: __('Small', 'vayu-blocks'), slug: 'small', size: 15 },
		{ name: __('Medium', 'vayu-blocks'), slug: 'medium', size: 20 },
		{ name: __('Large', 'vayu-blocks'), slug: 'large', size: 24 },
		{ name: __('Larger', 'vayu-blocks'), slug: 'larger', size: 28 },
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

    //Layout
    const getLayoutColumnsType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.layoutColumnsType;
            case 'Tablet':
                return attributes.layoutColumnsTypeTablet;
            case 'Mobile':
                return attributes.layoutColumnsTypeMobile;
            default:
                return undefined;
        }
    };
    
    const changeLayoutColumnsType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ layoutColumnsType: type, layoutColumnsTypeTablet: type, layoutColumnsTypeMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ layoutColumnsTypeTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ layoutColumnsTypeMobile: type });
        }
    };
    
    const getLayoutColumns = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_postLayoutColumns;
            case 'Tablet':
                return attributes.pg_postLayoutColumnsTablet;
            case 'Mobile':
                return attributes.pg_postLayoutColumnsMobile;
            default:
                return undefined;
        }
    };
    
    const changeLayoutColumns = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_postLayoutColumns: value });
                break;
            case 'Tablet':
                setAttributes({ pg_postLayoutColumnsTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_postLayoutColumnsMobile: value });
                break;
        }
    };

    //Rows
    const getRowsType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.RowsType;
            case 'Tablet':
                return attributes.RowsTypeTablet;
            case 'Mobile':
                return attributes.RowsTypeMobile;
            default:
                return undefined;
        }
    };
    
    const changeRowsType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ RowsType: type, RowsTypeTablet: type, RowsTypeMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ RowsTypeTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ RowsTypeMobile: type });
        }
    };
    
    const getRows = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_numberOfRow;
            case 'Tablet':
                return attributes.pg_numberOfRowTablet;
            case 'Mobile':
                return attributes.pg_numberOfRowMobile;
            default:
                return undefined;
        }
    };
    
    const changeRows = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_numberOfRow: value, postsPerPage: value * attributes.pg_postLayoutColumns });
                break;
            case 'Tablet':
                setAttributes({ pg_numberOfRowTablet: value, postsPerPage: value * attributes.pg_postLayoutColumnsTablet });
                break;
            case 'Mobile':
                setAttributes({ pg_numberOfRowMobile: value, postsPerPage: value * attributes.pg_postLayoutColumnsMobile });
                break;
        }
    };

    //Excerpt
    const getExcerptview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showExcerpt;
            case 'Tablet':
                return attributes.pg_showExcerptTablet;
            case 'Mobile':
                return attributes.pg_showExcerptMobile;
            default:
                return undefined;
        }
    };
    
    const getLayoutType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.Excerpt;
            case 'Tablet':
                return attributes.ExcerptTablet;
            case 'Mobile':
                return attributes.ExcerptMobile;
            default:
                return undefined;
        }
    };
    
    const changeLayoutType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ Excerpt: type, ExcerptTablet: type, ExcerptMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ ExcerptTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ ExcerptMobile: type });
        }
    };
    
    const changeExcerpt = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showExcerpt: value, pg_showFullContent: false });
                break;
            case 'Tablet':
                setAttributes({ pg_showExcerptTablet: value, pg_showFullContentTablet: false });
                break;
            case 'Mobile':
                setAttributes({ pg_showExcerptMobile: value, pg_showFullContentMobile: false });
                break;
        }
    };

    //Full Content
    const getFullContentview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showFullContent;
            case 'Tablet':
                return attributes.pg_showFullContentTablet;
            case 'Mobile':
                return attributes.pg_showFullContentMobile;
            default:
                return undefined;
        }
    };
    
    const getFullContentType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_FullContent;
            case 'Tablet':
                return attributes.pg_FullContentTablet;
            case 'Mobile':
                return attributes.pg_FullContentMobile;
            default:
                return undefined;
        }
    };
    
    const changeFullContentType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_FullContent: type, pg_FullContentTablet: type, pg_FullContentMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_FullContentTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_FullContentMobile: type });
        }
    };
    
    const changeFullContent= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showFullContent: value, pg_showExcerpt: false });
                break;
            case 'Tablet':
                setAttributes({ pg_showExcerptTablet: false, pg_showFullContentTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showExcerptMobile: false, pg_showFullContentMobile: value });
                break;
        }
    };

    //Featured Image
    const getFeaturedImageview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showFeaturedImage;
            case 'Tablet':
                return attributes.pg_showFeaturedImageTablet;
            case 'Mobile':
                return attributes.pg_showFeaturedImageMobile;
            default:
                return undefined;
        }
    };
    
    const getFeaturedImageType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_FeaturedImage;
            case 'Tablet':
                return attributes.pg_FeaturedImageTablet;
            case 'Mobile':
                return attributes.pg_FeaturedImageMobile;
            default:
                return undefined;
        }
    };
    
    const changeFeaturedImageType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_FeaturedImage: type, pg_FeaturedImageTablet: type, pg_FeaturedImageMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_FeaturedImageTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_FeaturedImageMobile: type });
        }
    };
    
    const changeFeaturedImage= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showFeaturedImage: value});
                break;
            case 'Tablet':
                setAttributes({pg_showFeaturedImageTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showFeaturedImageMobile: value });
                break;
        }
    };

    //Show Categories
    const getShowCategoriesview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showCategories;
            case 'Tablet':
                return attributes.pg_showCategoriesTablet;
            case 'Mobile':
                return attributes.pg_showCategoriesMobile;
            default:
                return undefined;
        }
    };
    
    const getShowCategoriesType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_Categories;
            case 'Tablet':
                return attributes.pg_CategoriesTablet;
            case 'Mobile':
                return attributes.pg_CategoriesMobile;
            default:
                return undefined;
        }
    };
    
    const changeShowCategoriesType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_Categories: type, pg_CategoriesTablet: type, pg_CategoriesMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_CategoriesTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_CategoriesMobile: type });
        }
    };
    
    const changeShowCategories= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showCategories: value});
                break;
            case 'Tablet':
                setAttributes({pg_showCategoriesTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showCategoriesMobile: value });
                break;
        }
    };

    //Author
    const getShowAuthorview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showAuthor;
            case 'Tablet':
                return attributes.pg_showAuthorTablet;
            case 'Mobile':
                return attributes.pg_showAuthorMobile;
            default:
                return undefined;
        }
    };
    
    const getShowAuthorType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_Author;
            case 'Tablet':
                return attributes.pg_AuthorTablet;
            case 'Mobile':
                return attributes.pg_AuthorMobile;
            default:
                return undefined;
        }
    };
    
    const changeShowAuthorType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_Author: type, pg_AuthorTablet: type, pg_AuthorMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_AuthorTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_AuthorMobile: type });
        }
    };
    
    const changeShowAuthor= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showAuthor: value});
                break;
            case 'Tablet':
                setAttributes({pg_showAuthorTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showAuthorMobile: value });
                break;
        }
    };

    //Date
    const getShowDateview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showDate;
            case 'Tablet':
                return attributes.pg_showDateTablet;
            case 'Mobile':
                return attributes.pg_showDateMobile;
            default:
                return undefined;
        }
    };
    
    const getShowDateType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_Date;
            case 'Tablet':
                return attributes.pg_DateTablet;
            case 'Mobile':
                return attributes.pg_DateMobile;
            default:
                return undefined;
        }
    };
    
    const changeShowDateType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_Date: type, pg_DateTablet: type, pg_DateMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_DateTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_DateMobile: type });
        }
    };
    
    const changeShowDate= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showDate: value});
                break;
            case 'Tablet':
                setAttributes({pg_showDateTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showDateMobile: value });
                break;
        }
    };
    
    //Tag
    const getShowTagview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_showTags;
            case 'Tablet':
                return attributes.pg_showTagTablet;
            case 'Mobile':
                return attributes.pg_showTagMobile;
            default:
                return undefined;
        }
    };
    
    const getShowTagType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_Tag;
            case 'Tablet':
                return attributes.pg_TagTablet;
            case 'Mobile':
                return attributes.pg_TagMobile;
            default:
                return undefined;
        }
    };
    
    const changeShowTagType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ pg_Tag: type, pg_TagTablet: type, pg_TagMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ pg_TagTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ pg_TagMobile: type });
        }
    };
    
    const changeShowTag= (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_showTags: value});
                break;
            case 'Tablet':
                setAttributes({pg_showTagTablet: value });
                break;
            case 'Mobile':
                setAttributes({ pg_showTagMobile: value });
                break;
        }
    };

    //Expert number of words
    const getExcerptnumberview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_excerptWords;
            case 'Tablet':
                return attributes.pg_excerptWordsTablet;
            case 'Mobile':
                return attributes.pg_excerptWordsMobile;
            default:
                return undefined;
        }
    };
    
    const getExcerptnumberType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.Excerptnumber;
            case 'Tablet':
                return attributes.ExcerptnumberTablet;
            case 'Mobile':
                return attributes.ExcerptnumberMobile;
            default:
                return undefined;
        }
    };
    
    const changeExcerptnumberType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ Excerpt: type, ExcerptTablet: type, ExcerptMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ ExcerptTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ ExcerptMobile: type });
        }
    };
    
    const changeExcerptnumber = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_excerptWords: value });
                break;
            case 'Tablet':
                setAttributes({ pg_excerptWordsTablet: value});
                break;
            case 'Mobile':
                setAttributes({pg_excerptWordsMobile: value });
                break;
        }
    };

    //Excerpt Selector
    const getExcerptSelectorview = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_excerptSelector;
            case 'Tablet':
                return attributes.pg_excerptSelectorTablet;
            case 'Mobile':
                return attributes.pg_excerptSelectorMobile;
            default:
                return undefined;
        }
    };
    
    const getExcerptSelectorType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.ExcerptSelector;
            case 'Tablet':
                return attributes.ExcerptSelectorTablet;
            case 'Mobile':
                return attributes.ExcerptSelectorMobile;
            default:
                return undefined;
        }
    };
    
    const changeExcerptSelectorType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ ExcerptSelector: type, ExcerptSelectorTablet: type, ExcerptSelectorMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ ExcerptSelectorTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ ExcerptSelectorMobile: type });
        }
    };
    
    const changeExcerptSelector = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_excerptSelector: value });
                break;
            case 'Tablet':
                setAttributes({ pg_excerptSelectorTablet: value});
                break;
            case 'Mobile':
                setAttributes({pg_excerptSelectorMobile: value });
                break;
        }
    };

    //gap
    const getgapType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.gap;
            case 'Tablet':
                return attributes.gapTablet;
            case 'Mobile':
                return attributes.gapMobile;
            default:
                return undefined;
        }
    };
    
    const changegapType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ gap: type, gapTablet: type, gapMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ gapTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ gapMobile: type });
        }
    };
    
    const getgap = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_gap;
            case 'Tablet':
                return attributes.pg_gapTablet;
            case 'Mobile':
                return attributes.pg_gapMobile;
            default:
                return undefined;
        }
    };
    
    const changegap = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_gap: value});
                break;
            case 'Tablet':
                setAttributes({ pg_gapTablet: value});
                break;
            case 'Mobile':
                setAttributes({ pg_gapMobile: value});
                break;
        }
    };

    //gapup
    const getgapupType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.gapup;
            case 'Tablet':
                return attributes.gapupTablet;
            case 'Mobile':
                return attributes.gapupMobile;
            default:
                return undefined;
        }
    };
    
    const changegapupType = (type) => {
        if ('Desktop' === getView) {
            setAttributes({ gapup: type, gapupTablet: type, gapupMobile: type });
        } else if ('Tablet' === getView) {
            setAttributes({ gapupTablet: type });
        } else if ('Mobile' === getView) {
            setAttributes({ gapupMobile: type });
        }
    };
    
    const getgapup = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.pg_gapup;
            case 'Tablet':
                return attributes.pg_gapupTablet;
            case 'Mobile':
                return attributes.pg_gapupMobile;
            default:
                return undefined;
        }
    };
    
    const changegapup = (value) => {
        switch (getView) {
            case 'Desktop':
                setAttributes({ pg_gapup: value});
                break;
            case 'Tablet':
                setAttributes({ pg_gapupTablet: value});
                break;
            case 'Mobile':
                setAttributes({ pg_gapupMobile: value});
                break;
        }
    };

    // Pagination Padding
	const desktopPaginationPaddingType = {
		top: 'pg_PaginationpaddingTop',
		right: 'pg_PaginationpaddingRight',
		bottom: 'pg_PaginationpaddingBottom',
		left: 'pg_PaginationpaddingLeft'
	};
	
	const tabletPaginationPaddingType = {
		top: 'pg_PaginationpaddingTopTablet',
		right: 'pg_PaginationpaddingRightTablet',
		bottom: 'pg_PaginationpaddingBottomTablet',
		left: 'pg_PaginationpaddingLeftTablet'
	};
	
	const mobilePaginationPaddingType = {
		top: 'pg_PaginationpaddingTopMobile',
		right: 'pg_PaginationpaddingRightMobile',
		bottom: 'pg_PaginationpaddingBottomMobile',
		left: 'pg_PaginationpaddingLeftMobile'
	};
	
	const getPaginationPaddingType = () => {
		switch (getView) {
		case 'Desktop':
			return attributes.pg_PaginationpaddingType;
		case 'Tablet':
			return attributes.pg_PaginationpaddingTypeTablet;
		case 'Mobile':
			return attributes.pg_PaginationpaddingTypeMobile;
		default:
			return undefined;
		}
	};
	
	const changePaginationPaddingType = (value) => {
		if ('Desktop' === getView) {
		setAttributes({ pg_PaginationpaddingType: value });
		} else if ('Tablet' === getView) {
		setAttributes({ pg_PaginationpaddingTypeTablet: value });
		} else if ('Mobile' === getView) {
		setAttributes({ pg_PaginationpaddingTypeMobile: value });
		}
	};
	
	const changePaginationPadding = (type, value) => {
		switch (getView) {
		case 'Desktop':
			if ('linked' === attributes.pg_PaginationpaddingType) {
			setAttributes({
				pg_Paginationpadding: value,
				pg_PaginationpaddingTop: value,
				pg_PaginationpaddingBottom: value,
				pg_PaginationpaddingLeft: value,
				pg_PaginationpaddingRight: value
			});
			} else {
			setAttributes({ [desktopPaginationPaddingType[type]]: value });
			}
			break;
		case 'Tablet':
			if ('linked' === attributes.pg_PaginationpaddingTypeTablet) {
			setAttributes({
				pg_PaginationpaddingTablet: value,
				pg_PaginationpaddingTopTablet: value,
				pg_PaginationpaddingBottomTablet: value,
				pg_PaginationpaddingLeftTablet: value,
				pg_PaginationpaddingRightTablet: value
			});
			} else {
			setAttributes({ [tabletPaginationPaddingType[type]]: value });
			}
			break;
		case 'Mobile':
			if ('linked' === attributes.pg_PaginationpaddingTypeMobile) {
			setAttributes({
				pg_PaginationpaddingMobile: value,
				pg_PaginationpaddingTopMobile: value,
				pg_PaginationpaddingBottomMobile: value,
				pg_PaginationpaddingLeftMobile: value,
				pg_PaginationpaddingRightMobile: value
			});
			} else {
			setAttributes({ [mobilePaginationPaddingType[type]]: value });
			}
			break;
		}
	};
	
	const getPaginationPadding = (type) => {
		switch (getView) {
		case 'Desktop':
			return 'linked' === attributes.pg_PaginationpaddingType
			? attributes.pg_Paginationpadding
			: attributes[desktopPaginationPaddingType[type]];
		case 'Tablet':
			return 'linked' === attributes.pg_PaginationpaddingTypeTablet
			? attributes.pg_PaginationpaddingTablet
			: attributes[tabletPaginationPaddingType[type]];
		case 'Mobile':
			return 'linked' === attributes.pg_PaginationpaddingTypeMobile
			? attributes.pg_PaginationpaddingMobile
			: attributes[mobilePaginationPaddingType[type]];
		}
		return undefined;
	};
    
    //pagination border
    const handlepaginationBorderChange = (newBorders) => {
        const updatedAttributes = {};
        if (newBorders.border.top) {
            if (newBorders.border.top) {
                updatedAttributes.pg_paginationTopBorderColor = newBorders.border.top.color;
                updatedAttributes.pg_paginationTopBorder = newBorders.border.top.width;
                updatedAttributes.paginationTopborderType = newBorders.border.top.style;
            }
            if (newBorders.border.bottom) {
                updatedAttributes.pg_paginationBottomBorderColor = newBorders.border.bottom.color;
                updatedAttributes.pg_paginationBottomBorder = newBorders.border.bottom.width;
                updatedAttributes.paginationBottomborderType = newBorders.border.bottom.style;
            }
            if (newBorders.border.left) {
                updatedAttributes.pg_paginationLeftBorderColor = newBorders.border.left.color;
                updatedAttributes.pg_paginationLeftBorder = newBorders.border.left.width;
                updatedAttributes.paginationLeftborderType = newBorders.border.left.style;
            }
            if (newBorders.border.right) {
                updatedAttributes.pg_paginationRightBorderColor = newBorders.border.right.color;
                updatedAttributes.pg_paginationRightBorder = newBorders.border.right.width;
                updatedAttributes.paginationRightborderType = newBorders.border.right.style;
            }
        } else {

            updatedAttributes.pg_paginationRightBorderColor = newBorders.border.color;
            updatedAttributes.pg_paginationRightBorder = newBorders.border.width;
            updatedAttributes.paginationRightborderType = newBorders.border.style;

            updatedAttributes.pg_paginationLeftBorderColor = newBorders.border.color;
            updatedAttributes.pg_paginationLeftBorder = newBorders.border.width;
            updatedAttributes.paginationLeftborderType = newBorders.border.style;

            updatedAttributes.pg_paginationBottomBorderColor = newBorders.border.color;
            updatedAttributes.pg_paginationBottomBorder = newBorders.border.width;
            updatedAttributes.paginationBottomborderType = newBorders.border.style;

            updatedAttributes.pg_paginationTopBorderColor = newBorders.border.color;
            updatedAttributes.pg_paginationTopBorder = newBorders.border.width;
            updatedAttributes.paginationTopborderType = newBorders.border.style;
        }
        setAttributes(updatedAttributes);
    };
    
    //pagination border-radius
    const handlepaginationBorderRadiusChange = (newValues) => {
        setAttributes({
            pg_paginationTopBorderRadius: newValues.borderRadius.top,
            pg_paginationLeftBorderRadius: newValues.borderRadius.left,
            pg_paginationRightBorderRadius: newValues.borderRadius.right,
            pg_paginationBottomBorderRadius: newValues.borderRadius.bottom,
        });
    };

    // Border radius types for different devices
    const desktopBorderRadiusType = {
        top: 'pg_paginationTopBorderRadius',
        right: 'pg_paginationRightBorderRadius',
        bottom: 'pg_paginationBottomBorderRadius',
        left: 'pg_paginationLeftBorderRadius'
    };

    const tabletBorderRadiusType = {
        top: 'pg_paginationTopBorderRadiusTablet',
        right: 'pg_paginationRightBorderRadiusTablet',
        bottom: 'pg_paginationBottomBorderRadiusTablet',
        left: 'pg_paginationLeftBorderRadiusTablet'
    };

    const mobileBorderRadiusType = {
        top: 'pg_paginationTopBorderRadiusMobile',
        right: 'pg_paginationRightBorderRadiusMobile',
        bottom: 'pg_paginationBottomBorderRadiusMobile',
        left: 'pg_paginationLeftBorderRadiusMobile'
    };

    // Function to get the current border-radius type
    const getBorderRadiusType = () => {
        switch (getView) {
            case 'Desktop':
                return attributes.paginationBorderRadiusType;
            case 'Tablet':
                return attributes.paginationBorderRadiusTypeTablet;
            case 'Mobile':
                return attributes.paginationBorderRadiusTypeMobile;
            default:
                return undefined;
        }
    };

    // Function to change the border-radius type
    const changeBorderRadiusType = value => {
        if ('Desktop' === getView) {
            setAttributes({
                paginationBorderRadiusType: value,
                paginationBorderRadiusTypeTablet: value,
                paginationBorderRadiusTypeMobile: value
            });
        } else if ('Tablet' === getView) {
            setAttributes({
                paginationBorderRadiusTypeTablet: value
            });
        } else if ('Mobile' === getView) {
            setAttributes({
                paginationBorderRadiusTypeMobile: value
            });
        }
    };

    // Function to change the border-radius values
    const changeBorderRadius = (type, value) => {
        switch (getView) {
            case 'Desktop':
                if ('linked' === attributes.paginationBorderRadiusType) {
                    setAttributes({
                        pg_paginationTopBorderRadius: value,
                        pg_paginationRightBorderRadius: value,
                        pg_paginationBottomBorderRadius: value,
                        pg_paginationLeftBorderRadius: value
                    });
                } else {
                    setAttributes({ [desktopBorderRadiusType[type]]: value });
                }
                break;
            case 'Tablet':
                if ('linked' === attributes.paginationBorderRadiusTypeTablet) {
                    setAttributes({
                        pg_paginationTopBorderRadiusTablet: value,
                        pg_paginationRightBorderRadiusTablet: value,
                        pg_paginationBottomBorderRadiusTablet: value,
                        pg_paginationLeftBorderRadiusTablet: value
                    });
                } else {
                    setAttributes({ [tabletBorderRadiusType[type]]: value });
                }
                break;
            case 'Mobile':
                if ('linked' === attributes.paginationBorderRadiusTypeMobile) {
                    setAttributes({
                        pg_paginationTopBorderRadiusMobile: value,
                        pg_paginationRightBorderRadiusMobile: value,
                        pg_paginationBottomBorderRadiusMobile: value,
                        pg_paginationLeftBorderRadiusMobile: value
                    });
                } else {
                    setAttributes({ [mobileBorderRadiusType[type]]: value });
                }
                break;
        }
    };

    // Function to get the current border-radius value for a specific side
    const getBorderRadius = type => {
        switch (type) {
            case 'top':
                switch (getView) {
                    case 'Desktop':
                        return 'linked' === attributes.paginationBorderRadiusType
                            ? attributes.pg_paginationTopBorderRadius
                            : attributes.pg_paginationTopBorderRadius;
                    case 'Tablet':
                        return 'linked' === attributes.paginationBorderRadiusTypeTablet
                            ? attributes.pg_paginationTopBorderRadiusTablet
                            : attributes.pg_paginationTopBorderRadiusTablet;
                    case 'Mobile':
                        return 'linked' === attributes.paginationBorderRadiusTypeMobile
                            ? attributes.pg_paginationTopBorderRadiusMobile
                            : attributes.pg_paginationTopBorderRadiusMobile;
                }
            case 'right':
                switch (getView) {
                    case 'Desktop':
                        return 'linked' === attributes.paginationBorderRadiusType
                            ? attributes.pg_paginationRightBorderRadius
                            : attributes.pg_paginationRightBorderRadius;
                    case 'Tablet':
                        return 'linked' === attributes.paginationBorderRadiusTypeTablet
                            ? attributes.pg_paginationRightBorderRadiusTablet
                            : attributes.pg_paginationRightBorderRadiusTablet;
                    case 'Mobile':
                        return 'linked' === attributes.paginationBorderRadiusTypeMobile
                            ? attributes.pg_paginationRightBorderRadiusMobile
                            : attributes.pg_paginationRightBorderRadiusMobile;
                }
            case 'bottom':
                switch (getView) {
                    case 'Desktop':
                        return 'linked' === attributes.paginationBorderRadiusType
                            ? attributes.pg_paginationBottomBorderRadius
                            : attributes.pg_paginationBottomBorderRadius;
                    case 'Tablet':
                        return 'linked' === attributes.paginationBorderRadiusTypeTablet
                            ? attributes.pg_paginationBottomBorderRadiusTablet
                            : attributes.pg_paginationBottomBorderRadiusTablet;
                    case 'Mobile':
                        return 'linked' === attributes.paginationBorderRadiusTypeMobile
                            ? attributes.pg_paginationBottomBorderRadiusMobile
                            : attributes.pg_paginationBottomBorderRadiusMobile;
                }
            case 'left':
                switch (getView) {
                    case 'Desktop':
                        return 'linked' === attributes.paginationBorderRadiusType
                            ? attributes.pg_paginationLeftBorderRadius
                            : attributes.pg_paginationLeftBorderRadius;
                    case 'Tablet':
                        return 'linked' === attributes.paginationBorderRadiusTypeTablet
                            ? attributes.pg_paginationLeftBorderRadiusTablet
                            : attributes.pg_paginationLeftBorderRadiusTablet;
                    case 'Mobile':
                        return 'linked' === attributes.paginationBorderRadiusTypeMobile
                            ? attributes.pg_paginationLeftBorderRadiusMobile
                            : attributes.pg_paginationLeftBorderRadiusMobile;
                }
            default:
                return undefined;
        }
    };

    // Handle pagination border-radius changes
    const handlePaginationBorderRadiusChange = (newValues) => {
        setAttributes({
            pg_paginationTopBorderRadius: newValues.borderRadius.top,
            pg_paginationLeftBorderRadius: newValues.borderRadius.left,
            pg_paginationRightBorderRadius: newValues.borderRadius.right,
            pg_paginationBottomBorderRadius: newValues.borderRadius.bottom,
        });
    };

    // Assuming pg_allCategories is defined and has a 'name' property
    const suggestions = pg_allCategories.length > 0 
    ? pg_allCategories.map(category => category.name)
    : [];// Define your validation function

    const tokenIsValid = (token) => {
        return suggestions.includes(token);
    };
    
    const [hover, sethover] = useState('normal');

    const handelBackgroundColor = (value) => {
        // Update the block’s attributes or state based on the changes
        if(value.color){
            setAttributes({pg_PaginationColor:value.color});
        }
        if(value.activeColor){
            setAttributes({pg_PaginationactiveColor:value.activeColor});
        }
        if(value.background){
            setAttributes({pg_PaginationbackgroundColor:value.background});
        }
    };

    return (
        <>
            <PanelBody  title={__('Layout', 'vayu-blocks')} initialOpen={false}>
                <ResponsiveControl label={__('Number of Columns', 'vayu-blocks')}>
                    <RangeControl
                        type={getLayoutColumnsType()}
                        changeType={changeLayoutColumnsType}
                        value={getLayoutColumns()}
                        onChange={(value) => changeLayoutColumns(value)}
                        min={1}
                        max={6}
                        label={__(getView, 'vayu-blocks')}
                    />
                </ResponsiveControl>

                <ResponsiveControl label={__('Number of Rows', 'vayu-blocks')}>
                        <RangeControl
                            type={getRowsType()}
                            changeType={changeRowsType}
                            value={getRows()}
                            onChange={(value) => changeRows(value)}
                            min={1}
                            max={6}
                            label={getView}
                        />
                </ResponsiveControl>

                <ResponsiveControl label={__('Gap Between Items Vertical', 'vayu-blocks')}>
                    <RangeControl
                        value={getgap()}
                        type={getgapType()}
                        changeType={changegapType}
                        onChange={(value) => changegap(value)}
                        min={0}
                        label={getView}
                        max={100}
                    />
                </ResponsiveControl>
                <ResponsiveControl label={__('Gap Between Items Horizantal', 'vayu-blocks')}>
                    <RangeControl
                        value={getgapup()}
                        type={getgapupType()}
                        changeType={changegapupType}
                        onChange={(value) => changegapup(value)}
                        min={0}
                        max={100}
                        label={getView}
                    />
                </ResponsiveControl>

            </PanelBody>
 
            <PanelBody title={__('Controls', 'vayu-blocks')} initialOpen={false}>
                <ResponsiveControl label={__(getView, 'vayu-blocks')}>
                <br />
                <ToggleControl
                    label={__('Show Excerpt', 'vayu-blocks')}
                    checked={getExcerptview()}
                    type={getLayoutType()}
                    changeType={changeLayoutType}
                    onChange={(value) => changeExcerpt(value)}
                />

                {getExcerptview() && (
                    <>
                        <RangeControl
                            label={__('Number of words in excerpt', 'vayu-blocks')}
                            value={getExcerptnumberview()}
                            type={getExcerptnumberType()}
                            changeType={changeExcerptnumberType}
                            onChange={(value) =>changeExcerptnumber(value)}
                            min={1}
                            max={100}
                        />
                        <TextControl
                            label={__('Last Word', 'vayu-blocks')}
                            value={getExcerptSelectorview()}
                            type={getExcerptSelectorType()}
                            changeType={changeExcerptSelectorType}
                            onChange={(value) =>changeExcerptSelector(value)}
                          
                        />
                        <br />
                    </>
                )}

                <ToggleControl
                    label={__('Show Full Content', 'vayu-blocks')}
                    checked={getFullContentview()}
                    type={getFullContentType()}
                    changeType={changeFullContentType}
                    onChange={(value) => changeFullContent(value)}
                />


                <ToggleControl
                    label={__('Show Featured Image', 'vayu-blocks')}
                    checked={getFeaturedImageview()}
                    type={getFeaturedImageType()}
                    changeType={changeFeaturedImageType}
                    onChange={(value) => changeFeaturedImage(value)}
                />


                <ToggleControl
                    label={__('Show Categories', 'vayu-blocks')}
                    checked={getShowCategoriesview()}
                    type={getShowCategoriesType()}
                    changeType={changeShowCategoriesType}
                    onChange={(value) => changeShowCategories(value)}
                />
                    {getShowCategoriesview() && (
                        <RangeControl
                            label={__('Number of Categories', 'vayu-blocks')}
                            value={pg_numberOfCategories}
                            onChange={(value) => setAttributes({pg_numberOfCategories:value})}
                            min={1}
                            max={5}
                        />
                    )}

                <ToggleControl
                    label={__('Show Author', 'vayu-blocks')}
                    checked={getShowAuthorview()}
                    type={getShowAuthorType()}
                    changeType={changeShowAuthorType}
                    onChange={(value) => changeShowAuthor(value)}
                />
                <ToggleControl
                    label={__('Show Date', 'vayu-blocks')}
                    checked={getShowDateview()}
                    type={getShowDateType()}
                    changeType={changeShowDateType}
                    onChange={(value) => changeShowDate(value)}
                />
                <ToggleControl
                    label={__('Show Tags', 'vayu-blocks')}
                    checked={getShowTagview()}
                    type={getShowTagType()}
                    changeType={changeShowTagType}
                    onChange={(value) => changeShowTag(value)}
                />
                 {getShowTagview() && (
                        <RangeControl
                            label={__('Number of Tags', 'vayu-blocks')}
                            value={pg_numberOfTags}
                            onChange={(value) => setAttributes({pg_numberOfTags:value})}
                            min={1}
                            max={5}
                        />
                    )}

                   
            </ResponsiveControl>
            <br />
            <ToggleControl
                        label={__('Show Pagination', 'vayu-blocks')}
                        checked={showpagination}
                        onChange={(value) => setAttributes({
                            showpagination:value
                        })}
                    />
            </PanelBody>

            <PanelBody title={__('Filter', 'vayu-blocks')} initialOpen={false}>
                <FormTokenField
                    __experimentalValidateInput={tokenIsValid}
                    __experimentalAutoSelectFirstMatch
                    __experimentalExpandOnFocus
                    label="By Category"
                    onChange={(value)=>setAttributes({selectedCategories:value}) }
                    suggestions={suggestions}
                    value={selectedCategories}   
                />
                <br />
                <ToggleControl
                    label={__('Featured Image Post Only', 'vayu-blocks')}
                    checked={pg_featuredImageOnly}
                    onChange={(value) => setAttributes({ pg_featuredImageOnly: value })}
                />
            <SelectControl
                label="Sort Order"
                value={sortByOrder}  // Corrected typo here
                options={[
                    { value: 'desc', label: 'Descending' },  // Corrected typo here
                    { value: 'asc', label: 'Ascending' }      // Corrected typo here
                ]}
                onChange={(value) => setAttributes({ sortByOrder: value })}  // Corrected typo here
            />
            <SelectControl
                label="Sort By Field"
                value={sortByField}
                options={[
                    { value: 'date', label: 'Date' },
                    { value: 'modified', label: 'Last Modified' },
                    { value: 'title', label: 'Title' },
                    { value: 'id', label: 'Post ID' }  // Corrected 'Id' to 'id' and 'PostId' to 'Post ID'
                ]}
                onChange={(value) => setAttributes({ sortByField: value })}
            />



            </PanelBody>

            <PanelBody title={__('Pagination', 'vayu-blocks')} initialOpen={false}>
                <ToggleControl
                    label={__('Show Pagination', 'vayu-blocks')}
                    checked={showpagination}
                    onChange={(value) => setAttributes({
                        showpagination:value
                    })}
                />
                {showpagination && (
                    <>
                        <h4>Alignment</h4>
                        <ToogleGroupControl
                            label={__('Alignment', 'vayu-blocks')}
                            value={ attributes.pg_Paginationalignment}
                            onChange={ e => setAttributes({ pg_Paginationalignment : e }) }		
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

                        <Vayu_blocks_typographycontrol
                            onChange={(value) => setAttributes({ pg_PaginationSize: value.size })}
                            value={{size:pg_PaginationSize}}
                            includeSize={true}
                            vayu_blocks_sizes={fontSizes}
                            para=""
                        /> 

                       
                            <ColorPanel
                                colorTool={[
                                    {
                                        active: ['gradient'],
                                        name: 'Background',
                                        value: pg_PaginationbackgroundColor,
                                        attribute: 'background',
                                    },
                                    {
                                        active: ['color'],
                                        name: 'Text',
                                        value: pg_PaginationColor,
                                        attribute: 'color',
                                    },
                                    {
                                        active: ['color'],
                                        name: 'Active Text',
                                        value: pg_PaginationactiveColor,
                                        attribute: 'activeColor',
                                    }
                                ]}

                                handelColorPanel={(value)=>handelBackgroundColor(value)}
                                initialTab="color"
                            />

                        <Vayu_Block_Border_Control
                            value={{border:{
                                top: {
                                    color: attributes.pg_paginationTopBorderColor,
                                    width: attributes.pg_paginationTopBorder,
                                    style: attributes.paginationTopborderType,
                                },
                                bottom: {
                                    color: attributes.pg_paginationBottomBorderColor,
                                    width: attributes.pg_paginationBottomBorder,
                                    style: attributes.paginationBottomborderType,
                                },
                                left: {
                                    color: attributes.pg_paginationLeftBorderColor,
                                    width: attributes.pg_paginationLeftBorder,
                                    style: attributes.paginationLeftborderType,
                                },
                                right: {
                                    color: attributes.pg_paginationRightBorderColor,
                                    width: attributes.pg_paginationRightBorder,
                                    style: attributes.paginationRightborderType,
                                },
                            }
                            }}
                            onChange={(value)=>handlepaginationBorderChange(value)}
                            includeBorder={true}
                            includeBorderRadius={false}
                            para=""
                        />  
                            
                        <ResponsiveControl label={ __( 'Border Radius', 'vayu-blocks' ) } >
                            <UnitChooser
                                value={ attributes.pg_paginationBorderRadiusunit }
                                    onClick={(unit) => {
                                        setAttributes({ pg_paginationBorderRadiusunit : unit });
                                    }}
                                units={ [ 'px', 'em', '%' ] }
                            />

                            <SizingControl
                                type={ getBorderRadiusType() }
                                min={ 0 }
                                changeType={ changeBorderRadiusType }
                                onChange={ changeBorderRadius }
                                options={ [
                                    {
                                        label: __( 'T-R', 'vayu-blocks' ),
                                        type: 'top',
                                        value: getBorderRadius( 'top' )
                                    },
                                    {
                                        label: __( 'T-L', 'vayu-blocks' ),
                                        type: 'right',
                                        value: getBorderRadius( 'right' )
                                    },
                                    {
                                        label: __( 'B-R', 'vayu-blocks' ),
                                        type: 'bottom',
                                        value: getBorderRadius( 'bottom' )
                                    },
                                    {
                                        label: __( 'B-L', 'vayu-blocks' ),
                                        type: 'left',
                                        value: getBorderRadius( 'left' )
                                    }
                                ] }
                            />
                        </ResponsiveControl>
                        
                        <ResponsiveControl label={__('Padding', 'vayu-blocks')}>
                                <UnitChooser
                                    value={attributes.pg_PaginationpaddingUnit}
                                    onClick={(unit) => {
                                    setAttributes({ pg_PaginationpaddingUnit: unit });
                                    }}
                                    units={['px', 'em', '%']}
                                />
                                <SizingControl
                                    min={0}
                                    type={getPaginationPaddingType()}
                                    changeType={changePaginationPaddingType}
                                    max={100} // Adjust as needed
                                    onChange={changePaginationPadding}
                                    options={[
                                    { label: __('Top', 'vayu-blocks'), type: 'top', value: getPaginationPadding('top') },
                                    { label: __('Right', 'vayu-blocks'), type: 'right', value: getPaginationPadding('right') },
                                    { label: __('Bottom', 'vayu-blocks'), type: 'bottom', value: getPaginationPadding('bottom') },
                                    { label: __('Left', 'vayu-blocks'), type: 'left', value: getPaginationPadding('left') }
                                    ]}
                                />
                        </ResponsiveControl>
                    </>
                )}

            </PanelBody>
        </>
    );
};

export default PostSettings;
