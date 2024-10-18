/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import { __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    ToggleControl,
    BaseControl, 
    FormTokenField,
    RangeControl
} from '@wordpress/components';

import { useSelect} from '@wordpress/data';

import {
    Fragment,
    useState,useEffect
} from '@wordpress/element';

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
} from '../../components/index.js';
import OrderControl from './component/order-control';
import OrderByControl from './component/order-by-control'; 
import { usePostTypes } from './component/usePostTypes';
import OffsetControl from './component/offset-controls'; 
import PagesControl from './component/pages-control';
import PerPageControl from './component/per-page-control';
import AuthorControl from './component/author-control';
import { TaxonomyControls } from './component/taxonomy-controls';

import { Vayu_Block_Border_Control } from '../../components/wp-default-compoents/BorderControl/Vayu_Blocks_Border_control.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
    const [ tab, setTab ] = useState( 'genral' );
    const { query = {} } = attributes;
    const { inherit = false, author: authorIds, sticky = false, postType = 'post', exclude = [], order = 'desc', orderBy = 'date', perPage = null, pages ='0', offset='0'} = query;
    const { postTypesSelectOptions } = usePostTypes();
    const [ searchArg, setSearchArg ] = useState('');
    const [ posts, setPosts ] = useState([]);
    const setQuery = (newQuery) => {
        setAttributes({
            query: {
                ...query,
                ...newQuery,
            },
        });
    };
   // Fetch posts based on search argument and postType
    const fetchedPosts = useSelect((select) => {
    const { getEntityRecords } = select('core');
    return getEntityRecords('postType', postType, { search: searchArg, per_page: -1 });
    }, [searchArg, postType]);

    useEffect(() => {
        if (fetchedPosts) {
            setPosts(fetchedPosts);
        }
    }, [fetchedPosts]);

/******************************/
//    Advanced Setting Start
/******************************/

// view
const getView = useSelect( select => {

    const { getView } = select( 'vayu-blocks/data' );

    const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
}, []);

const [ hover, setHover ] = useState( 'normal' );

// Padding
const [paddingUnit, setpaddingUnit] = useState('px');
const maxpaddingUnit = paddingUnit === 'px' ? 1500 : paddingUnit === 'em' ? 50 : paddingUnit === '%' ? 100:'';
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
        setAttributes({ paddingTypeTablet: value,paddingTypeMobile: value });
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
            setAttributes({ paddingTablet: value, paddingMobile: value});
        } else {
            setAttributes({ [tabletPaddingType[type]]: value, [mobilePaddingType[type]]: value });
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
//margin
const [marginUnit, setmarginUnit] = useState('px');
const maxmarginUnit = marginUnit === 'px' ? 1500 : marginUnit === 'em' ? 50 : marginUnit === '%' ? 100:'';
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
        setAttributes({ marginTypeTablet: value, marginTypeMobile: value });
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
            setAttributes({ marginTablet: value, marginMobile: value });
        } else {
            setAttributes({ [tabletMarginType[type]]: value,[mobileMarginType[type]]: value });
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

// box shadow and border
const [borderWidthUnit, setborderWidthUnit] = useState('px');
const maxborderWidthUnit = borderWidthUnit === 'px' ? 1500 : borderWidthUnit === 'em' ? 50 : borderWidthUnit === '%' ? 100:'';
const [borderRadiusUnit, setborderRadiusUnit] = useState('px');
const maxborderRadiusUnit = borderRadiusUnit === 'px' ? 1500 : borderRadiusUnit === 'em' ? 50 : borderRadiusUnit === '%' ? 100:'';
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
        setAttributes({ borderWidthTypeTablet: value,borderWidthTypeMobile: value });
    } else if ( 'Mobile' === getView ) {
        setAttributes({ borderWidthTypeMobile: value });
    }
};

const changeBorderWidthHvrType = value => {
    if ( 'Desktop' === getView ) {
        setAttributes({ borderWidthHvrType: value, borderWidthHvrTypeTablet: value, borderWidthHvrTypeMobile: value });
    } else if ( 'Tablet' === getView ) {
        setAttributes({ borderWidthHvrTypeTablet: value,borderWidthHvrTypeMobile: value });
    } else if ( 'Mobile' === getView ) {
        setAttributes({ borderWidthHvrTypeMobile: value });
    }
};
const changeBorderRadiusType = value => {
    if ( 'Desktop' === getView ) {
        setAttributes({ borderRadiusType: value, borderRadiusTypeTablet: value, borderRadiusTypeMobile: value });
    } else if ( 'Tablet' === getView ) {
        setAttributes({ borderRadiusTypeTablet: value,borderRadiusTypeMobile: value });
    } else if ( 'Mobile' === getView ) {
        setAttributes({ borderRadiusTypeMobile: value });
    }
};

const changeBorderRadiusHvrType = value => {
    if ( 'Desktop' === getView ) {
        setAttributes({ borderRadiusHvrType: value, borderRadiusHvrTypeTablet: value, borderRadiusHvrTypeMobile: value });
    } else if ( 'Tablet' === getView ) {
        setAttributes({ borderRadiusHvrTypeTablet: value,borderRadiusHvrTypeMobile: value });
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
            setAttributes({ borderWidthTablet: value ,borderWidthMobile: value});
        } else {
            setAttributes({ [tabletBorderWidthType[type]]: value, [mobileBorderWidthType[type]]: value});
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
            setAttributes({ borderWidthHvrTablet: value,borderWidthHvrMobile: value  });
        } else {
            setAttributes({ [tabletBorderWidthHvrType[type]]: value,[mobileBorderWidthHvrType[type]]: value });
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
            setAttributes({ borderRadiusTablet: value, borderRadiusMobile: value  });
        } else {
            setAttributes({ [tabletBorderRadiusType[type]]: value,[mobileBorderRadiusType[type]]: value });
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
            setAttributes({ borderRadiusHvrTablet: value,borderRadiusHvrMobile: value });
        } else {
            setAttributes({ [tabletBorderRadiusHvrType[type]]: value,[mobileBorderRadiusHvrType[type]]: value });
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
/******************************/
//    Advanced Setting End
/******************************/

    return (
        <Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Genral', 'vayu-blocks' ),
							value: 'genral',
							icon: 'colorwand'
						},
						{
							label: __( 'Advanced', 'vayu-blocks' ),
							value: 'advanced',
							icon: 'colorpalette'
						}
					]}
					onChange={ setTab }
            />
        {'genral' === tab && (
            <Fragment>
            <PanelBody title={ __( 'Layout', 'vayu-blocks' ) }
                className="th-adv-loop-panel" initialOpen={ true }   
            >
                         <PerPageControl
                               perPage={ perPage }
                               offset={ offset }
                               onChange={ setQuery }
                          />
                           <OffsetControl
                                offset={ offset }
                                onChange={ setQuery }
                            />          

                        <OrderControl
                            order={order}
                            onChange={(newQuery) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        ...newQuery,
                                    },
                                });
                            }}
                        />     
                        
                        <OrderByControl
                            orderBy={orderBy}
                            onChange={(newQuery) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        ...newQuery,
                                    },
                                });
                            }}
                        />

                       <PagesControl pages={ pages } onChange={ setQuery } />
                       <ToggleControl
                            label={__('Hide Sticky Posts', 'vayu-blocks')}
                            checked={sticky}
                            onChange={(value) => {
                                setAttributes({
                                    query: {
                                        ...query,
                                        sticky: value,
                                    },
                                });
                            }}
                            />
   
           </PanelBody>
           <PanelBody title={ __( 'Content', 'vayu-blocks' ) } className="th-adv-loop-panel" initialOpen={ false } >
           <SelectControl
                        label={__('Post Type', 'vayu-blocks')}
                        value={postType}
                        options={postTypesSelectOptions}
                        onChange={(newPostType) => {
                            setAttributes({
                                query: {
                                    ...query,
                                    postType: newPostType,
                                },
                            });
                        }}
                        />
                        <TaxonomyControls
                                            onChange={ setQuery }
                                            query={ query }
                                        />
                                         <AuthorControl
                                            value={ authorIds }
                                            onChange={ setQuery }
                                        />
                        <BaseControl
                            label={__('Exclude Posts', 'vayu-blocks')}
                            help={__('Start typing to search for a post title or manually enter one.', 'vayu-blocks')}
                        >
                            <FormTokenField
                                value={exclude && exclude.length > 0 
                                    ? exclude.map(id => {
                                        const post = posts.find(post => post.id === id);
                                        return post ? post.title.rendered : '';
                                    })
                                    : []}
                                suggestions={posts && posts.length > 0 
                                    ? posts.map(post => post.title.rendered)
                                    : []}
                                onInputChange={(searchPost) => setSearchArg(searchPost)}
                                onChange={(titles) => {
                                    const selectedPostIds = titles.map(title => {
                                        const post = posts.find(post => post.title.rendered === title);
                                        return post ? post.id : null;
                                    }).filter(Boolean);

                                    setAttributes({
                                        query: {
                                            ...query,
                                            exclude: [...new Set(selectedPostIds)],
                                        },
                                    });
                                    setSearchArg('');
                                }}
                                __experimentalExpandOnFocus
                                __experimentalShowHowTo={false}
                                __next40pxDefaultSize
                            />
                        </BaseControl>
           </PanelBody>
           </Fragment>
        )} 
        {'advanced' === tab && (
        <Fragment>
           <PanelBody title={ __( 'Layout', 'vayu-blocks' ) }
							initialOpen={ true }
							className="th-button-panel"
						> 
                       <ResponsiveControl
								label={ __( 'Padding', 'vayu-blocks' ) }
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
											label: __( 'Top', 'vayu-blocks' ),
											type: 'top',
											value: getPadding( 'top' )
										},
										{
											label: __( 'Right', 'vayu-blocks' ),
											type: 'right',
											value: getPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'vayu-blocks' ),
											type: 'bottom',
											value: getPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'vayu-blocks' ),
											type: 'left',
											value: getPadding( 'left' )
										}
									] }
								/>

							</ResponsiveControl>
                            <ResponsiveControl
								label={ __( 'Margin', 'vayu-blocks' ) }
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
											label: __( 'Top', 'vayu-blocks' ),
											type: 'top',
											value: getMargin( 'top' )
										},
										{
											label: __( 'Right', 'vayu-blocks' ),
											type: 'right',
											value: getMargin( 'right' )
										},
										{
											label: __( 'Bottom', 'vayu-blocks' ),
											type: 'bottom',
											value: getMargin( 'bottom' )
										},
										{
											label: __( 'Left', 'vayu-blocks' ),
											type: 'left',
											value: getMargin( 'left' )
										},
									] }
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
                 <>
                <ResponsiveControl
                    label={ __( 'Border Width', 'vayu-blocks' ) }
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
                  </>
              )}
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
									type={ getBorderRadiusType() }
									min={ 0 }
									max={ maxborderRadiusUnit }
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
											type: 'left',
											value: getBorderRadius( 'left' )
										},
										{
											label: __( 'B-L', 'vayu-blocks' ),
											type: 'bottom',
											value: getBorderRadius( 'bottom' )
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
                    
                )}

        </PanelBody>

          
        </Fragment>   
        )}
        </InspectorControls>
        </Fragment>
        )

}
export default InsSettings;