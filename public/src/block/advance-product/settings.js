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
    QueryControls,
    PanelRow
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';

import {Fragment,useState,Suspense,useEffect} from '@wordpress/element';

/**
* Internal dependencies
*/
import Select from 'react-select';
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
} from '../../components/index.js';

import LayoutBuilder from './sortable-layout-.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {

     const getView = useSelect( select => {

		const { getView } = select( 'vayu-blocks/data' );

		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  	}, []);

    const [ tab, setTab ] = useState( 'setting' );
   
    const homeUrl = ThBlockData.homeUrl;
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
    
    const [SelectCategories, setSelectCategories] = useState([]);
    const [SelectProduct, setSelectProduct] = useState([]);

	
    
    // fetch category
    useEffect(() => {
        // Fetch product categories
        fetch(`${homeUrl}/wp-json/wc/store/v1/products/categories`)
          .then((response) => response.json())
          .then((data) => {
            // Map through the data and convert it to the expected format
            const mappedCategories = data.map((category) => ({
              value: category.id,
              label: category.name,
			  slug: category.slug,
            }));
            setSelectCategories(mappedCategories);
          })
          .catch((error) => {
            console.error('Error fetching categories:', error);
          });
      }, []);

    //fetch product
    useEffect(() => {
      // Fetch product categories
      fetch(`${homeUrl}/wp-json/wc/store/v1/products`)
        .then((response) => response.json())
        .then((data) => {
          // Map through the data and convert it to the expected format
          const mappedProduct = data.map((product) => ({
            value: product.id,
            label: product.name,
          }));
          setSelectProduct(mappedProduct);
        })
        .catch((error) => {
          console.error('Error fetching categories:', error);
        });
    }, []);

    //show product per page
    const getProductShow = () => {
      switch ( getView ) {
      case 'Desktop':
        return attributes.productShow;
      case 'Tablet':
        return attributes.productShowTablet;
      case 'Mobile':
        return attributes.productShowMobile;
      default:
        return undefined;
      }
    };
    const changeProductShow = value => {
      if ( 'Desktop' === getView ) {
        setAttributes({ productShow: value, productShowTablet: value, productShowMobile: value });
      } else if ( 'Tablet' === getView ) {
        setAttributes({ productShowTablet: value, productShowMobile: value });
      } else if ( 'Mobile' === getView ) {
        setAttributes({ productShowMobile: value });
      }
    };
    //show product per page
    const getCol = () => {
      switch ( getView ) {
      case 'Desktop':
        return attributes.productCol;
      case 'Tablet':
        return attributes.productColTablet;
      case 'Mobile':
        return attributes.productColMobile;
      default:
        return undefined;
      }
    };
    const changeCol = value => {
      if ( 'Desktop' === getView ) {
        setAttributes({ productCol: value, productColTablet: value, productColMobile: value });
      } else if ( 'Tablet' === getView ) {
        setAttributes({ productColTablet: value, productColMobile: value });
      } else if ( 'Mobile' === getView ) {
        setAttributes({ productColMobile: value });
      }
    };

    // stock status
    const stockstatus = [
      { value: 'instock', label: 'In Stock' },
      { value: 'outofstock', label: 'Out of Stock' },
      { value: 'onbackorder', label: 'On Backorder' }
    ];
    
     // product box padding
	const [productPaddingUnit, setproductPaddingUnit] = useState('px');
	const maxproductPaddingUnit = productPaddingUnit === 'px' ? 1500 : productPaddingUnit === 'em' ? 50 : productPaddingUnit === '%' ? 100:'';
    
	const getproductPaddingType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.productPaddingType;
		case 'Tablet':
			return attributes.productPaddingTypeTablet;
		case 'Mobile':
			return attributes.productPaddingTypeMobile;
		default:
			return undefined;
		}
	};
	const changeproductPaddingType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ productPaddingType: value, productPaddingTypeTablet: value, productPaddingTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ productPaddingTypeTablet: value, productPaddingTypeMobile: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ productPaddingTypeMobile: value });
		}
	};
	const desktopproductPaddingType = {
		top: 'productPaddingTop',
		right: 'productPaddingRight',
		bottom: 'productPaddingBottom',
		left: 'productPaddingLeft'
	};
	const tabletproductPaddingType = {
		top: 'productPaddingTopTablet',
		right: 'productPaddingRightTablet',
		bottom: 'productPaddingBottomTablet',
		left: 'productPaddingLeftTablet'
	};
	const mobileproductPaddingType = {
		top: 'productPaddingTopMobile',
		right: 'productPaddingRightMobile',
		bottom: 'productPaddingBottomMobile',
		left: 'productPaddingLeftMobile'
	};
	const changeproductPadding = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.productPaddingType ) {
				setAttributes({ productPadding: value , productPaddingTablet: value , productPaddingMobile: value});
			} else {
				setAttributes({ [desktopproductPaddingType[type]]: value, [tabletproductPaddingType[type]]: value, [mobileproductPaddingType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.productPaddingTypeTablet ) {
				setAttributes({ productPaddingTablet: value,productPaddingMobile: value });
			} else {
				setAttributes({ [tabletproductPaddingType[type]]: value, [mobileproductPaddingType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.productPaddingTypeMobile ) {
				setAttributes({ productPaddingMobile: value });
			} else {
				setAttributes({ [mobileproductPaddingType[type]]: value });
			}
			break;
		}
	};

	const getproductPadding = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productPaddingType ? attributes.productPadding : attributes.productPaddingTop;
			case 'Tablet':
				return 'linked' === attributes.productPaddingTypeTablet ? attributes.productPaddingTablet : attributes.productPaddingTopTablet;
			case 'Mobile':
				return 'linked' === attributes.productPaddingTypeMobile ? attributes.productPaddingMobile : attributes.productPaddingTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productPaddingType ? attributes.productPadding : attributes.productPaddingRight;
			case 'Tablet':
				return 'linked' === attributes.productPaddingTypeTablet ? attributes.productPaddingTablet : attributes.productPaddingRightTablet;
			case 'Mobile':
				return 'linked' === attributes.productPaddingTypeMobile ? attributes.productPaddingMobile : attributes.productPaddingRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productPaddingType ? attributes.productPadding : attributes.productPaddingBottom;
			case 'Tablet':
				return 'linked' === attributes.productPaddingTypeTablet ? attributes.productPaddingTablet : attributes.productPaddingBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.productPaddingTypeMobile ? attributes.productPaddingMobile : attributes.productPaddingBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productPaddingType ? attributes.productPadding : attributes.productPaddingLeft;
			case 'Tablet':
				return 'linked' === attributes.productPaddingTablet ? attributes.productPaddingTablet : attributes.productPaddingLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.productPaddingMobile ? attributes.productPaddingMobile : attributes.productPaddingLeftMobile;
			}
		}

		return undefined;
	};

  const customTooltipElementGap = value => `${value}${attributes.elementGapUnit}`;
  const [elementGapUnit, setelementGapUnit] = useState('px');
	const maxelementGapUnit = elementGapUnit === 'px' ? 1500 : elementGapUnit === 'em' ? 50 : elementGapUnit === '%' ? 100:'';
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
			setAttributes({ elementGapTablet: value, elementGapMobile: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ elementGapMobile: value });
		}
	}; 

  const [ productelementclr, setproductelementclr ] = useState( 'normal' );
  

  // product boder radius
	const [productBrdrRadiusUnit, setproductBrdrRadiusUnit] = useState('px');
	const maxproductBrdrRadiusUnit = productBrdrRadiusUnit === 'px' ? 1500 : productBrdrRadiusUnit === 'em' ? 50 : productBrdrRadiusUnit === '%' ? 100:'';
    
	const getproductBrdrRadiusType = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.productBrdrRadiusType;
		case 'Tablet':
			return attributes.productBrdrRadiusTypeTablet;
		case 'Mobile':
			return attributes.productBrdrRadiusTypeMobile;
		default:
			return undefined;
		}
	};
	const changeproductBrdrRadiusType = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ productBrdrRadiusType: value, productBrdrRadiusTypeTablet: value, productBrdrRadiusTypeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ productBrdrRadiusTypeTablet: value, productBrdrRadiusTypeMobile: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ productBrdrRadiusTypeMobile: value });
		}
	};
	const desktopproductBrdrRadiusType = {
		top: 'productBrdrRadiusTop',
		right: 'productBrdrRadiusRight',
		bottom: 'productBrdrRadiusBottom',
		left: 'productBrdrRadiusLeft'
	};
	const tabletproductBrdrRadiusType = {
		top: 'productBrdrRadiusTopTablet',
		right: 'productBrdrRadiusRightTablet',
		bottom: 'productBrdrRadiusBottomTablet',
		left: 'productBrdrRadiusLeftTablet'
	};
	const mobileproductBrdrRadiusType = {
		top: 'productBrdrRadiusTopMobile',
		right: 'productBrdrRadiusRightMobile',
		bottom: 'productBrdrRadiusBottomMobile',
		left: 'productBrdrRadiusLeftMobile'
	};
	const changeproductBrdrRadius = ( type, value ) => {
		switch ( getView ) {
		case 'Desktop':
			if ( 'linked' === attributes.productBrdrRadiusType ) {
				setAttributes({ productBrdrRadius: value , productBrdrRadiusTablet: value , productBrdrRadiusMobile: value});
			} else {
				setAttributes({ [desktopproductBrdrRadiusType[type]]: value, [tabletproductBrdrRadiusType[type]]: value, [mobileproductBrdrRadiusType[type]]: value });
			}
			break;
		case 'Tablet':
			if ( 'linked' === attributes.productBrdrRadiusTypeTablet ) {
				setAttributes({ productBrdrRadiusTablet: value, productBrdrRadiusMobile: value });
			} else {
				setAttributes({ [tabletproductBrdrRadiusType[type]]: value, [mobileproductBrdrRadiusType[type]]: value });
			}
			break;
		case 'Mobile':
			if ( 'linked' === attributes.productBrdrRadiusTypeMobile ) {
				setAttributes({ productBrdrRadiusMobile: value });
			} else {
				setAttributes({ [mobileproductBrdrRadiusType[type]]: value });
			}
			break;
		}
	};

	const getproductBrdrRadius = type => {
		if ( 'top' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productBrdrRadiusType ? attributes.productBrdrRadius : attributes.productBrdrRadiusTop;
			case 'Tablet':
				return 'linked' === attributes.productBrdrRadiusTypeTablet ? attributes.productBrdrRadiusTablet : attributes.productBrdrRadiusTopTablet;
			case 'Mobile':
				return 'linked' === attributes.productBrdrRadiusTypeMobile ? attributes.productBrdrRadiusMobile : attributes.productBrdrRadiusTopMobile;
			}
		} else if ( 'right' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productBrdrRadiusType ? attributes.productBrdrRadius : attributes.productBrdrRadiusRight;
			case 'Tablet':
				return 'linked' === attributes.productBrdrRadiusTypeTablet ? attributes.productBrdrRadiusTablet : attributes.productBrdrRadiusRightTablet;
			case 'Mobile':
				return 'linked' === attributes.productBrdrRadiusTypeMobile ? attributes.productBrdrRadiusMobile : attributes.productBrdrRadiusRightMobile;
			}
		} else if ( 'bottom' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productBrdrRadiusType ? attributes.productBrdrRadius : attributes.productBrdrRadiusBottom;
			case 'Tablet':
				return 'linked' === attributes.productBrdrRadiusTypeTablet ? attributes.productBrdrRadiusTablet : attributes.productBrdrRadiusBottomTablet;
			case 'Mobile':
				return 'linked' === attributes.productBrdrRadiusTypeMobile ? attributes.productBrdrRadiusMobile : attributes.productBrdrRadiusBottomMobile;
			}
		} else if ( 'left' == type ) {
			switch ( getView ) {
			case 'Desktop':
				return 'linked' === attributes.productBrdrRadiusType ? attributes.productBrdrRadius : attributes.productBrdrRadiusLeft;
			case 'Tablet':
				return 'linked' === attributes.productBrdrRadiusTablet ? attributes.productBrdrRadiusTablet : attributes.productBrdrRadiusLeftTablet;
			case 'Mobile':
				return 'linked' === attributes.productBrdrRadiusMobile ? attributes.productBrdrRadiusMobile : attributes.productBrdrRadiusLeftMobile;
			}
		}

		return undefined;
	};

  // tab font family
	const changetabFontFamily = value => {
		if ( ! value ) {
			setAttributes({
				tabfontFamily: value,
				tabfontVariant: value
			});
		} else {
			setAttributes({
				tabfontFamily: value,
				tabfontVariant: 'normal',
				tabfontStyle: 'normal'
			});
		}
	};
	//title lineheight
	const [tablineHeightUnit, settablineHeightUnit] = useState('px');
	const maxtablineHeightUnit = tablineHeightUnit === 'px' ? 150 : tablineHeightUnit === 'em' ? 10 : tablineHeightUnit === '%' ? 100:'';
	const customTooltiptablineHeight = value => `${value}${attributes.tablineHeightUnit}`;

	const gettablineHeight = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.tablineHeight;
		case 'Tablet':
			return attributes.tablineHeightTablet;
		case 'Mobile':
			return attributes.tablineHeightMobile;
		default:
			return undefined;
		}
	};

    const changetablineHeight = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ tablineHeight: value, tablineHeightTablet: value, tablineHeightMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ tablineHeightTablet: value, tablineHeightMobile: value});
		} else if ( 'Mobile' === getView ) {
			setAttributes({ tablineHeightMobile: value });
		}
	};

	//title fontsize
	const [tabfontSizeUnit, settabfontSizeUnit] = useState('px');
	const maxtabfontSizeUnit = tabfontSizeUnit === 'px' ? 150 : tabfontSizeUnit === 'em' ? 10 : tabfontSizeUnit === '%' ? 100:'';
	const customTooltiptabfontSize = value => `${value}${attributes.tabfontSizeUnit}`;

	const gettabfontSize = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.tabfontSize;
		case 'Tablet':
			return attributes.tabfontSizeTablet;
		case 'Mobile':
			return attributes.tabfontSizeMobile;
		default:
			return undefined;
		}
	};
	const changetabfontSize = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ tabfontSize: value, tabfontSizeTablet: value, tabfontSizeMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ tabfontSizeTablet: value, tabfontSizeMobile: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ tabfontSizeMobile: value });
		}
	};

	//tab letter spacing
	const [tabletterSpacingUnit, settabletterSpacingUnit] = useState('px');
	const maxtabletterSpacingUnit = tabletterSpacingUnit === 'px' ? 150 : tabletterSpacingUnit === 'em' ? 10 : tabletterSpacingUnit === '%' ? 100:'';
	const customTooltiptabletterSpacing = value => `${value}${attributes.tabletterSpacingUnit}`;
	
	const gettabletterSpacing = () => {
		switch ( getView ) {
		case 'Desktop':
			return attributes.tabletterSpacing;
		case 'Tablet':
			return attributes.tabletterSpacingTablet;
		case 'Mobile':
			return attributes.tabletterSpacingMobile;
		default:
			return undefined;
		}
	};

    const changetabletterSpacing = value => {
		if ( 'Desktop' === getView ) {
			setAttributes({ tabletterSpacing: value, tabletterSpacingTablet: value, tabletterSpacingMobile: value });
		} else if ( 'Tablet' === getView ) {
			setAttributes({ tabletterSpacingTablet: value, tabletterSpacingMobile: value });
		} else if ( 'Mobile' === getView ) {
			setAttributes({ tabletterSpacingMobile: value });
		}
	};
 
 const [ filtertab, setfiltertab ] = useState( 'normal' );
// tab padding
const [tabPaddingUnit, settabPaddingUnit] = useState('px');
const maxtabPaddingUnit = tabPaddingUnit === 'px' ? 1500 : tabPaddingUnit === 'em' ? 50 : tabPaddingUnit === '%' ? 100:'';

const gettabPaddingType = () => {
	switch ( getView ) {
	case 'Desktop':
		return attributes.tabPaddingType;
	case 'Tablet':
		return attributes.tabPaddingTypeTablet;
	case 'Mobile':
		return attributes.tabPaddingTypeMobile;
	default:
		return undefined;
	}
};
const changetabPaddingType = value => {
	if ( 'Desktop' === getView ) {
		setAttributes({ tabPaddingType: value, tabPaddingTypeTablet: value, tabPaddingTypeMobile: value });
	} else if ( 'Tablet' === getView ) {
		setAttributes({ tabPaddingTypeTablet: value, tabPaddingTypeMobile: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ tabPaddingTypeMobile: value });
	}
};
const desktoptabPaddingType = {
	top: 'tabPaddingTop',
	right: 'tabPaddingRight',
	bottom: 'tabPaddingBottom',
	left: 'tabPaddingLeft'
};
const tablettabPaddingType = {
	top: 'tabPaddingTopTablet',
	right: 'tabPaddingRightTablet',
	bottom: 'tabPaddingBottomTablet',
	left: 'tabPaddingLeftTablet'
};
const mobiletabPaddingType = {
	top: 'tabPaddingTopMobile',
	right: 'tabPaddingRightMobile',
	bottom: 'tabPaddingBottomMobile',
	left: 'tabPaddingLeftMobile'
};
const changetabPadding = ( type, value ) => {
	switch ( getView ) {
	case 'Desktop':
		if ( 'linked' === attributes.tabPaddingType ) {
			setAttributes({ tabPadding: value , tabPaddingTablet: value , tabPaddingMobile: value});
		} else {
			setAttributes({ [desktoptabPaddingType[type]]: value, [tablettabPaddingType[type]]: value, [mobiletabPaddingType[type]]: value });
		}
		break;
	case 'Tablet':
		if ( 'linked' === attributes.tabPaddingTypeTablet ) {
			setAttributes({ tabPaddingTablet: value, tabPaddingMobile: value });
		} else {
			setAttributes({ [tablettabPaddingType[type]]: value, [mobiletabPaddingType[type]]: value });
		}
		break;
	case 'Mobile':
		if ( 'linked' === attributes.tabPaddingTypeMobile ) {
			setAttributes({ tabPaddingMobile: value });
		} else {
			setAttributes({ [mobiletabPaddingType[type]]: value });
		}
		break;
	}
};

const gettabPadding = type => {
	if ( 'top' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabPaddingType ? attributes.tabPadding : attributes.tabPaddingTop;
		case 'Tablet':
			return 'linked' === attributes.tabPaddingTypeTablet ? attributes.tabPaddingTablet : attributes.tabPaddingTopTablet;
		case 'Mobile':
			return 'linked' === attributes.tabPaddingTypeMobile ? attributes.tabPaddingMobile : attributes.tabPaddingTopMobile;
		}
	} else if ( 'right' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabPaddingType ? attributes.tabPadding : attributes.tabPaddingRight;
		case 'Tablet':
			return 'linked' === attributes.tabPaddingTypeTablet ? attributes.tabPaddingTablet : attributes.tabPaddingRightTablet;
		case 'Mobile':
			return 'linked' === attributes.tabPaddingTypeMobile ? attributes.tabPaddingMobile : attributes.tabPaddingRightMobile;
		}
	} else if ( 'bottom' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabPaddingType ? attributes.tabPadding : attributes.tabPaddingBottom;
		case 'Tablet':
			return 'linked' === attributes.tabPaddingTypeTablet ? attributes.tabPaddingTablet : attributes.tabPaddingBottomTablet;
		case 'Mobile':
			return 'linked' === attributes.tabPaddingTypeMobile ? attributes.tabPaddingMobile : attributes.tabPaddingBottomMobile;
		}
	} else if ( 'left' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabPaddingType ? attributes.tabPadding : attributes.tabPaddingLeft;
		case 'Tablet':
			return 'linked' === attributes.tabPaddingTablet ? attributes.tabPaddingTablet : attributes.tabPaddingLeftTablet;
		case 'Mobile':
			return 'linked' === attributes.tabPaddingMobile ? attributes.tabPaddingMobile : attributes.tabPaddingLeftMobile;
		}
	}

	return undefined;
};
// tabMargin
const gettabMarginType = () => {
	switch ( getView ) {
	case 'Desktop':
		return attributes.tabMarginType;
	case 'Tablet':
		return attributes.tabMarginTypeTablet;
	case 'Mobile':
		return attributes.tabMarginTypeMobile;
	default:
		return undefined;
	}
};
const changetabMarginType = value => {
	if ( 'Desktop' === getView ) {
		setAttributes({ tabMarginType: value,tabMarginTypeTablet: value, tabMarginTypeMobile: value });
	} else if ( 'Tablet' === getView ) {
		setAttributes({ tabMarginTypeTablet: value, tabMarginTypeMobile: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ tabMarginTypeMobile: value });
	}
};
const desktoptabMarginType = {
	top: 'tabMarginTop',
	right: 'tabMarginRight',
	bottom: 'tabMarginBottom',
	left: 'tabMarginLeft'
};
const tablettabMarginType = {
	top: 'tabMarginTopTablet',
	right: 'tabMargingRightTablet',
	bottom: 'tabMarginBottomTablet',
	left: 'tabMarginLeftTablet'
};
const mobiletabMarginType = {
	top: 'tabMarginTopMobile',
	right: 'tabMarginRightMobile',
	bottom: 'tabMarginBottomMobile',
	left: 'tabMarginLeftMobile'
};
const changetabMargin = ( type, value ) => {
	switch ( getView ) {
	case 'Desktop':
		if ( 'linked' === attributes.tabMarginType ) {
			setAttributes({ tabMargin: value, tabMarginTablet: value, tabMarginMobile: value });
		} else {
			setAttributes({ [desktoptabMarginType[type]]: value,[tablettabMarginType[type]]: value, [mobiletabMarginType[type]]: value });
		}
		break;
	case 'Tablet':
		if ( 'linked' === attributes.tabMarginTypeTablet ) {
			setAttributes({ tabMarginTablet: value, tabMarginMobile: value });
		} else {
			setAttributes({ [tablettabMarginType[type]]: value, [mobiletabMarginType[type]]: value });
		}
		break;
	case 'Mobile':
		if ( 'linked' === attributes.tabMarginTypeMobile ) {
			setAttributes({ tabMarginMobile: value });
		} else {
			setAttributes({ [mobiletabMarginType[type]]: value });
		}
		break;
	}
};
const gettabMargin = type => {
	if ( 'top' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabMarginType ? attributes.tabMargin : attributes.tabMarginTop;
		case 'Tablet':
			return 'linked' === attributes.tabMarginTypeTablet ? attributes.tabMarginTablet : attributes.tabMarginTopTablet;
		case 'Mobile':
			return 'linked' === attributes.tabMarginTypeMobile ? attributes.tabMarginMobile : attributes.tabMarginTopMobile;
		}
	} else if ( 'right' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabMarginType ? attributes.tabMargin : attributes.tabMarginRight;
		case 'Tablet':
			return 'linked' === attributes.tabMarginTypeTablet ? attributes.tabMarginTablet : attributes.tabMarginRightTablet;
		case 'Mobile':
			return 'linked' === attributes.tabMarginTypeMobile ? attributes.tabMarginMobile : attributes.tabMarginRightMobile;
		}
	} else if ( 'bottom' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabMarginType ? attributes.tabMargin : attributes.tabMarginBottom;
		case 'Tablet':
			return 'linked' === attributes.tabMarginTypeTablet ? attributes.tabMarginTablet : attributes.tabMarginBottomTablet;
		case 'Mobile':
			return 'linked' === attributes.tabMarginTypeMobile ? attributes.tabMarginMobile : attributes.tabMarginBottomMobile;
		}
	} else if ( 'left' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabMarginType ? attributes.tabMargin : attributes.tabMarginLeft;
		case 'Tablet':
			return 'linked' === attributes.tabMarginTypeTablet ? attributes.tabMarginTablet : attributes.tabMarginLeftTablet;
		case 'Mobile':
			return 'linked' === attributes.tabMarginTypeMobile ? attributes.tabMarginMobile : attributes.tabMarginLeftMobile;
		}
	}

	return undefined;
};
const [tabMarginUnit, settabMarginUnit] = useState('px');
const maxtabMarginUnit = tabMarginUnit === 'px' ? 1500 : tabMarginUnit === 'em' ? 50 : tabMarginUnit === '%' ? 100:'';
  
// tab border-width
const [tabBorderWidthUnit, settabBorderWidthUnit] = useState('px');
const maxtabBorderWidthUnit = tabBorderWidthUnit === 'px' ? 1500 : tabBorderWidthUnit === 'em' ? 50 : tabBorderWidthUnit === '%' ? 100:'';

const gettabBorderWidthType = () => {
	switch ( getView ) {
	case 'Desktop':
		return attributes.tabBorderWidthType;
	case 'Tablet':
		return attributes.tabBorderWidthTypeTablet;
	case 'Mobile':
		return attributes.tabBorderWidthTypeMobile;
	default:
		return undefined;
	}
};
const changetabBorderWidthType = value => {
	if ( 'Desktop' === getView ) {
		setAttributes({ tabBorderWidthType: value, tabBorderWidthTypeTablet: value, tabBorderWidthTypeMobile: value });
	} else if ( 'Tablet' === getView ) {
		setAttributes({ tabBorderWidthTypeTablet: value, tabBorderWidthTypeMobile: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ tabBorderWidthTypeMobile: value });
	}
};
const desktoptabBorderWidthType = {
	top: 'tabBorderWidthTop',
	right: 'tabBorderWidthRight',
	bottom: 'tabBorderWidthBottom',
	left: 'tabBorderWidthLeft'
};
const tablettabBorderWidthType = {
	top: 'tabBorderWidthTopTablet',
	right: 'tabBorderWidthRightTablet',
	bottom: 'tabBorderWidthBottomTablet',
	left: 'tabBorderWidthLeftTablet'
};
const mobiletabBorderWidthType = {
	top: 'tabBorderWidthTopMobile',
	right: 'tabBorderWidthRightMobile',
	bottom: 'tabBorderWidthBottomMobile',
	left: 'tabBorderWidthLeftMobile'
};
const changetabBorderWidth = ( type, value ) => {
	switch ( getView ) {
	case 'Desktop':
		if ( 'linked' === attributes.tabBorderWidthType ) {
			setAttributes({ tabBorderWidth: value , tabBorderWidthTablet: value , tabBorderWidthMobile: value});
		} else {
			setAttributes({ [desktoptabBorderWidthType[type]]: value, [tablettabBorderWidthType[type]]: value, [mobiletabBorderWidthType[type]]: value });
		}
		break;
	case 'Tablet':
		if ( 'linked' === attributes.tabBorderWidthTypeTablet ) {
			setAttributes({ tabBorderWidthTablet: value, tabBorderWidthMobile: value });
		} else {
			setAttributes({ [tablettabBorderWidthType[type]]: value, [mobiletabBorderWidthType[type]]: value });
		}
		break;
	case 'Mobile':
		if ( 'linked' === attributes.tabBorderWidthTypeMobile ) {
			setAttributes({ tabBorderWidthMobile: value });
		} else {
			setAttributes({ [mobiletabBorderWidthType[type]]: value });
		}
		break;
	}
};

const gettabBorderWidth = type => {
	if ( 'top' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderWidthType ? attributes.tabBorderWidth : attributes.tabBorderWidthTop;
		case 'Tablet':
			return 'linked' === attributes.tabBorderWidthTypeTablet ? attributes.tabBorderWidthTablet : attributes.tabBorderWidthTopTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderWidthTypeMobile ? attributes.tabBorderWidthMobile : attributes.tabBorderWidthTopMobile;
		}
	} else if ( 'right' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderWidthType ? attributes.tabBorderWidth : attributes.tabBorderWidthRight;
		case 'Tablet':
			return 'linked' === attributes.tabBorderWidthTypeTablet ? attributes.tabBorderWidthTablet : attributes.tabBorderWidthRightTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderWidthTypeMobile ? attributes.tabBorderWidthMobile : attributes.tabBorderWidthRightMobile;
		}
	} else if ( 'bottom' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderWidthType ? attributes.tabBorderWidth : attributes.tabBorderWidthBottom;
		case 'Tablet':
			return 'linked' === attributes.tabBorderWidthTypeTablet ? attributes.tabBorderWidthTablet : attributes.tabBorderWidthBottomTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderWidthTypeMobile ? attributes.tabBorderWidthMobile : attributes.tabBorderWidthBottomMobile;
		}
	} else if ( 'left' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderWidthType ? attributes.tabBorderWidth : attributes.tabBorderWidthLeft;
		case 'Tablet':
			return 'linked' === attributes.tabBorderWidthTablet ? attributes.tabBorderWidthTablet : attributes.tabBorderWidthLeftTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderWidthMobile ? attributes.tabBorderWidthMobile : attributes.tabBorderWidthLeftMobile;
		}
	}

	return undefined;
};

// tab border-radius
const [tabBorderRadiusUnit, settabBorderRadiusUnit] = useState('px');
const maxtabBorderRadiusUnit = tabBorderRadiusUnit === 'px' ? 1500 : tabBorderRadiusUnit === 'em' ? 50 : tabBorderRadiusUnit === '%' ? 100:'';

const gettabBorderRadiusType = () => {
	switch ( getView ) {
	case 'Desktop':
		return attributes.tabBorderRadiusType;
	case 'Tablet':
		return attributes.tabBorderRadiusTypeTablet;
	case 'Mobile':
		return attributes.tabBorderRadiusTypeMobile;
	default:
		return undefined;
	}
};
const changetabBorderRadiusType = value => {
	if ( 'Desktop' === getView ) {
		setAttributes({ tabBorderRadiusType: value, tabBorderRadiusTypeTablet: value, tabBorderRadiusTypeMobile: value });
	} else if ( 'Tablet' === getView ) {
		setAttributes({ tabBorderRadiusTypeTablet: value, tabBorderRadiusTypeMobile: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ tabBorderRadiusTypeMobile: value });
	}
};
const desktoptabBorderRadiusType = {
	top: 'tabBorderRadiusTop',
	right: 'tabBorderRadiusRight',
	bottom: 'tabBorderRadiusBottom',
	left: 'tabBorderRadiusLeft'
};
const tablettabBorderRadiusType = {
	top: 'tabBorderRadiusTopTablet',
	right: 'tabBorderRadiusRightTablet',
	bottom: 'tabBorderRadiusBottomTablet',
	left: 'tabBorderRadiusLeftTablet'
};
const mobiletabBorderRadiusType = {
	top: 'tabBorderRadiusTopMobile',
	right: 'tabBorderRadiusRightMobile',
	bottom: 'tabBorderRadiusBottomMobile',
	left: 'tabBorderRadiusLeftMobile'
};
const changetabBorderRadius = ( type, value ) => {
	switch ( getView ) {
	case 'Desktop':
		if ( 'linked' === attributes.tabBorderRadiusType ) {
			setAttributes({ tabBorderRadius: value , tabBorderRadiusTablet: value , tabBorderRadiusMobile: value});
		} else {
			setAttributes({ [desktoptabBorderRadiusType[type]]: value, [tablettabBorderRadiusType[type]]: value, [mobiletabBorderRadiusType[type]]: value });
		}
		break;
	case 'Tablet':
		if ( 'linked' === attributes.tabBorderRadiusTypeTablet ) {
			setAttributes({ tabBorderRadiusTablet: value, tabBorderRadiusMobile: value });
		} else {
			setAttributes({ [tablettabBorderRadiusType[type]]: value, [mobiletabBorderRadiusType[type]]: value });
		}
		break;
	case 'Mobile':
		if ( 'linked' === attributes.tabBorderRadiusTypeMobile ) {
			setAttributes({ tabBorderRadiusMobile: value });
		} else {
			setAttributes({ [mobiletabBorderRadiusType[type]]: value });
		}
		break;
	}
};

const gettabBorderRadius = type => {
	if ( 'top' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderRadiusType ? attributes.tabBorderRadius : attributes.tabBorderRadiusTop;
		case 'Tablet':
			return 'linked' === attributes.tabBorderRadiusTypeTablet ? attributes.tabBorderRadiusTablet : attributes.tabBorderRadiusTopTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderRadiusTypeMobile ? attributes.tabBorderRadiusMobile : attributes.tabBorderRadiusTopMobile;
		}
	} else if ( 'right' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderRadiusType ? attributes.tabBorderRadius : attributes.tabBorderRadiusRight;
		case 'Tablet':
			return 'linked' === attributes.tabBorderRadiusTypeTablet ? attributes.tabBorderRadiusTablet : attributes.tabBorderRadiusRightTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderRadiusTypeMobile ? attributes.tabBorderRadiusMobile : attributes.tabBorderRadiusRightMobile;
		}
	} else if ( 'bottom' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderRadiusType ? attributes.tabBorderRadius : attributes.tabBorderRadiusBottom;
		case 'Tablet':
			return 'linked' === attributes.tabBorderRadiusTypeTablet ? attributes.tabBorderRadiusTablet : attributes.tabBorderRadiusBottomTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderRadiusTypeMobile ? attributes.tabBorderRadiusMobile : attributes.tabBorderRadiusBottomMobile;
		}
	} else if ( 'left' == type ) {
		switch ( getView ) {
		case 'Desktop':
			return 'linked' === attributes.tabBorderRadiusType ? attributes.tabBorderRadius : attributes.tabBorderRadiusLeft;
		case 'Tablet':
			return 'linked' === attributes.tabBorderRadiusTablet ? attributes.tabBorderRadiusTablet : attributes.tabBorderRadiusLeftTablet;
		case 'Mobile':
			return 'linked' === attributes.tabBorderRadiusMobile ? attributes.tabBorderRadiusMobile : attributes.tabBorderRadiusLeftMobile;
		}
	}

	return undefined;
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
		setAttributes({ paddingTypeTablet: value, paddingTypeMobile: value });
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
			setAttributes({ paddingTablet: value, paddingMobile: value });
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
const [paddingUnit, setpaddingUnit] = useState('px');
const maxpaddingUnit = paddingUnit === 'px' ? 1500 : paddingUnit === 'em' ? 50 : paddingUnit === '%' ? 100:'';
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
const [marginUnit, setmarginUnit] = useState('px');
const maxmarginUnit = marginUnit === 'px' ? 1500 : marginUnit === 'em' ? 50 : marginUnit === '%' ? 100:'';

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
		setAttributes({ zindexTablet: value, zindexMobile: value });
	} else if ( 'Mobile' === getView ) {
		setAttributes({ zindexMobile: value });
	}
};


// tab alignment
const getTabAlign = () => {
	switch (getView) {
		case 'Desktop':
			return attributes.tabAlign;
		case 'Tablet':
			return attributes.tabAlignTablet;
		case 'Mobile':
			return attributes.tabAlignMobile;
		default:
			return 'center';
	}
};

const changeTabAlign = value => {
	if ('Desktop' === getView) {
		setAttributes({ 
			tabAlign: value, 
			tabAlignTablet: value, 
			tabAlignMobile: value 
		});
	} else if ('Tablet' === getView) {
		setAttributes({ tabAlignTablet: value, tabAlignMobile: value });
	} else if ('Mobile' === getView) {
		setAttributes({ tabAlignMobile: value });
	}
};

const [ hover, setHover ] = useState( 'normal' );
const customTooltiptransitionAll = value => `${value}`;

return (
        <Fragment>
           <InspectorControls>
			<div className='th-block-ins'>
           <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Setting', 'vayu-blocks' ),
							value: 'setting',
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
             {'setting' === tab && (

            <Fragment>
            <PanelBody title={ __( 'General', 'vayu-blocks' ) }
                className="th-adv-product-panel" initialOpen={ true }
                
            >
            <Select
            value={attributes.productCategories}
            id="th-cat-select"
            options={SelectCategories}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Choose Category', 'vayu-blocks')}
            onChange={( value ) => {
              setAttributes( { productCategories: ( value ? value : [] ) } );
            }}
            />
            <SelectControl
								label={ __( 'Source', 'vayu-blocks' ) }
								value={ attributes.productType }
								options={ [
									{ label:  __( 'Latest Product', 'vayu-blocks' ), value: 'recent' },
									{ label: __( 'Sale', 'vayu-blocks' ), value: 'sale' },
                  { label: __( 'Featured', 'vayu-blocks' ), value: 'featured' },
                  { label: __( 'Manual Product', 'vayu-blocks' ), value: 'manual' },
								] }
								onChange={ e => setAttributes({ productType: e }) }
					  />
            {'manual' === attributes.productType && (
            <Select
            value={attributes.manualProduct}
            id="th-product-select"
            options={SelectProduct}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Choose Product', 'vayu-blocks')}
            onChange={( value ) => {
              setAttributes( { manualProduct: ( value ? value : [] ) } );
            }}
            />
            )}
             <ResponsiveControl
                        label={ __( 'Number of product to show per page', 'vayu-blocks' ) }
                        >
               <RangeControl
                            value={ getProductShow() || '' }
                            onChange={ changeProductShow }
                            step={ 1 }
                            min={ 1 }
                            max={100}
                            allowReset={ true }
                   />            

            </ResponsiveControl>

            <ResponsiveControl
                        label={ __( 'Number of column', 'vayu-blocks' ) }
                        >
               <RangeControl
                            
                            value={ getCol() || '' }
                            onChange={ changeCol }
                            step={ 1 }
                            min={ 1 }
                            max={10}
                            allowReset={ true }
                   />            

            </ResponsiveControl>

            <SelectControl
								label={ __( 'OrderBy', 'vayu-blocks' ) }
								value={ attributes.productOrderby }
								options={ [
									{ label:  __( 'Date Product', 'vayu-blocks' ), value: 'date' },
									{ label: __( 'Price', 'vayu-blocks' ), value: 'price' },
                  { label: __( 'popularity', 'vayu-blocks' ), value: 'popularity' },
                  { label: __( 'Rating', 'vayu-blocks' ), value: 'rating' },
                  { label: __( 'Menu Order', 'vayu-blocks' ), value: 'menu-order' },
								] }
								onChange={ e => setAttributes({ productOrderby: e }) }
					  />

            <SelectControl
								label={ __( 'OrderBy', 'vayu-blocks' ) }
								value={ attributes.productOrder }
								options={ [
									{ label:  __( 'ASC', 'vayu-blocks' ), value: 'asc' },
									{ label: __( 'DESC', 'vayu-blocks' ), value: 'desc' },
								] }
								onChange={ e => setAttributes({ productOrder: e }) }
					   />
             <div className='components-base-control'>
            <label>
            { __( 'Exclude Product', 'vayu-blocks' ) }
           </label>
           <Select
            value={attributes.excludeProduct}
            id="th-product-select"
            options={SelectProduct}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Exclude Product', 'vayu-blocks')}
            onChange={( value ) => {
              setAttributes( { excludeProduct: ( value ? value : [] ) } );
            }}
            />
            </div>
            <div className='components-base-control'>
            <label>
            { __( 'Stock Status', 'vayu-blocks' ) }
            </label>
            <Select
              value={stockstatus.filter((option) => attributes.stockStatus.includes(option.value))}
              id="th-stock-status"
              options={stockstatus}
              isMulti
              isClearable
              maxMenuHeight={300}
              placeholder={__('Stock Status', 'vayu-blocks')}
              onChange={(selectedOptions) => {
                const values = selectedOptions ? selectedOptions.map((option) => option.value) : [];
                setAttributes({ stockStatus: values });
              }}
            />
            </div>
			<ToggleControl
								label={ __( 'Show Nav', 'vayu-blocks' ) }
								checked={ attributes.showNavs }
								onChange={ showNavs => setAttributes({showNavs}) }
							 />
            </PanelBody>
            <PanelBody
						title={ __( 'Product Elements', 'vayu-blocks' ) }
						initialOpen={ false }
					  >
						<LayoutBuilder
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					 </PanelBody>
                     <PanelBody
						title={ __( 'Product Box', 'vayu-blocks' ) }
						initialOpen={ false }
					  >
               <div className='th-component-group-label th-ins-alignment'>

            <label className='th-label'>{ __( 'Alignment', 'vayu-blocks' ) } </label>
						<AlignmentToolbar

									value={ attributes.productAlign }
									onChange={ e => setAttributes({ productAlign: e }) }
									isCollapsed={ false }
							/>
              </div>

              <ResponsiveControl
								label={ __( 'Padding', 'vayu-blocks' ) }
							>
							<UnitChooser
								value={ attributes.productPaddingUnit }
								
								onClick={productPaddingUnit => {
									setAttributes({productPaddingUnit });
									setproductPaddingUnit(productPaddingUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getproductPaddingType() }
									min={ 0 }
									max={ maxproductPaddingUnit }
									changeType={ changeproductPaddingType }
									onChange={ changeproductPadding }
									options={ [
										{
											label: __( 'Top', 'vayu-blocks' ),
											type: 'top',
											value: getproductPadding( 'top' )
										},
										{
											label: __( 'Right', 'vayu-blocks' ),
											type: 'right',
											value: getproductPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'vayu-blocks' ),
											type: 'bottom',
											value: getproductPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'vayu-blocks' ),
											type: 'left',
											value: getproductPadding( 'left' )
										}
									] }
								/>
              
							</ResponsiveControl>
                            <ResponsiveControl
								label={ __( 'Border Radius', 'vayu-blocks' ) }
							>
							<UnitChooser
								value={ attributes.productBrdrRadiusUnit }
								
								onClick={productBrdrRadiusUnit => {
									setAttributes({productBrdrRadiusUnit });
									setproductBrdrRadiusUnit(productBrdrRadiusUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ getproductBrdrRadiusType() }
									min={ 0 }
									max={ maxproductBrdrRadiusUnit }
									changeType={ changeproductBrdrRadiusType }
									onChange={ changeproductBrdrRadius }
									options={ [
										{
											label: __(  'T-R', 'vayu-blocks'),
											type: 'top',
											value: getproductBrdrRadius( 'top' )
										},
										{
											label: __(  'T-L', 'vayu-blocks' ),
											type: 'right',
											value: getproductBrdrRadius( 'right' )
										},
										
										{
											label: __( 'B-R', 'vayu-blocks'  ),
											type: 'left',
											value: getproductBrdrRadius( 'left' )
										},
										{
											label: __( 'B-L', 'vayu-blocks'),
											type: 'bottom',
											value: getproductBrdrRadius( 'bottom' )
										},
									] }
								/>

							</ResponsiveControl>
              <ResponsiveControl
								label={ __( 'Gap between elements', 'vayu-blocks' ) }
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

                 <HoverControl value={ productelementclr }
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
						       onChange={ setproductelementclr } 
						   />
                 { 'normal' ===  productelementclr &&  (
                               <>
                               <ColorGradientControl
								 label={ __( 'Bg Color', 'vayu-blocks' ) }
								 colorValue={ attributes.productboxClr }
								 onColorChange={ e => setAttributes({ productboxClr: e }) }
								 enableAlpha={true} 
								/>
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
						) || 'hover' ===  productelementclr  && (
							<>
							 <ColorGradientControl
							  label={ __( 'Bg Hover Color', 'vayu-blocks' ) }
							  colorValue={ attributes.productboxHvrClr }
							  onColorChange={ e => setAttributes({ productboxHvrClr: e }) }
							  enableAlpha={true} 
							 />
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
					 <PanelBody
						title={ __( 'Tab Filter', 'vayu-blocks' ) }
						initialOpen={ false }
					  >
						<ToggleControl
								label={ __( 'Show Tab', 'vayu-blocks' ) }
								checked={ attributes.showTab }
								onChange={ showTab => setAttributes({showTab}) }
							 />

                        <ResponsiveControl
								label={ __( 'Alignment', 'vayu-blocks' ) }
							     >
									<div className='th-component-group-label th-ins-alignment'>
									<AlignmentToolbar
												value={ getTabAlign() }
									            onChange={ changeTabAlign }
												isCollapsed={ false }
										/>
										</div>
						</ResponsiveControl>
						<ControlPanelControl
								label={ __( 'Typography', 'vayu-blocks' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ tabTypography: true }) }
								resetValues={
									{
										tabTypography:false,
										tabfontFamily:"default",
										tabfontVariant:"regular",
										tabfontStyle:"regular",
										tabtextTransform:"default",
										tabfontSize:"",
										tablineHeight:"",
										tabletterSpacing:"",
										tabfontSizeUnit:"px",
										tablineHeightUnit:"px",
										tabletterSpacingUnit:"px"
									}
								}
							>
							<GoogleFontsControl
								label={ __( 'Font Family', 'vayu-blocks' ) }
								value={ attributes.tabfontFamily }
								onChangeFontFamily={ changetabFontFamily }
								valueVariant={ attributes.tabfontVariant }
								onChangeFontVariant={tabfontVariant => setAttributes({ tabfontVariant }) }
								valueStyle={ attributes.tabfontStyle }
								onChangeFontStyle={ tabfontStyle => setAttributes({ tabfontStyle }) }
								valueTransform={ attributes.tabtextTransform }
								onChangeTextTransform={ tabtextTransform => setAttributes({ tabtextTransform }) }
							    
							/>
							<ResponsiveControl
								label={ __( 'Font Size', 'vayu-blocks' ) }
							     >	
								<UnitChooser
								value={ attributes.tabfontSizeUnit }
								onClick={tabfontSizeUnit => {
									setAttributes({ tabfontSizeUnit });
									settabfontSizeUnit(tabfontSizeUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptabfontSize }
									value={ gettabfontSize() || '' }
									onChange={ changetabfontSize }
									step={ 0.1 }
									min={ 0 }
									max={ maxtabfontSizeUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

                               <ResponsiveControl
								label={ __( 'Line Height', 'vayu-blocks' ) }
							     >	
								<UnitChooser
								value={ attributes.tablineHeightUnit }
								onClick={tablineHeightUnit => {
									setAttributes({ tablineHeightUnit });
									settablineHeightUnit(tablineHeightUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptablineHeight }
									value={ gettablineHeight() || '' }
									onChange={ changetablineHeight }
									step={ 0.1 }
									min={ 0 }
									max={ maxtablineHeightUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

							<ResponsiveControl
								label={ __( 'Letter Spacing', 'vayu-blocks' ) }
							     >	
								<UnitChooser
								value={ attributes.tabletterSpacingUnit }
								onClick={tabletterSpacingUnit => {
									setAttributes({ tabletterSpacingUnit });
									settabletterSpacingUnit(tabletterSpacingUnit);
								  }}
			
								units={ [ 'px', 'em', '%' ] }
						        />
								<RangeControl
								    renderTooltipContent={ customTooltiptabletterSpacing }
									value={ gettabletterSpacing() || '' }
									onChange={ changetabletterSpacing }
									step={ 0.1 }
									min={ 0 }
									max={ maxtabletterSpacingUnit }
									allowReset={ true }
								/>
							</ResponsiveControl>

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Color', 'vayu-blocks' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ tabColorset: true }) }
								resetValues={
									{
										
										tabColor:"",
										tabColorHvr:"",
										
									}
								}
								
							>
                       <HoverControl value={ filtertab }
						options={[
							{
								label: __( 'Normal', 'vayu-blocks' ),
								value: 'normal'
							},
							{
								label: __( 'Active / Hover', 'vayu-blocks' ),
								value: 'hover'
							}
						]}
						onChange={ setfiltertab } 
						/>
                        { 'normal' ===  filtertab &&  (
							   <>
                                <ColorGradientControl
								 label={ __( 'Tab Color', 'vayu-blocks' ) }
								 colorValue={ attributes.tabColor }
								 onColorChange={ e => setAttributes({ tabColor: e }) }
								 enableAlpha={true} 
								 />
								 <ColorGradientControl
								 label={ __( 'Tab BG Color', 'vayu-blocks' ) }
								 colorValue={ attributes.tabBgColor }
								 onColorChange={ e => setAttributes({ tabBgColor : e }) }
								 enableAlpha={true} 
								 />
								 </>
						) || 'hover' ===  filtertab && (
							     <>
								 <ColorGradientControl
								 label={ __( 'Tab Hover/Active Color ', 'vayu-blocks' ) }
								 colorValue={ attributes.tabColorHvr }
								 onColorChange={ e => setAttributes({ tabColorHvr: e }) }
								 enableAlpha={true} 
								 /> 
								 <ColorGradientControl
								 label={ __( 'Tab BG Hover/Active Color ', 'vayu-blocks' ) }
								 colorValue={ attributes.tabBgColorHvr }
								 onColorChange={ e => setAttributes({ tabBgColorHvr: e }) }
								 enableAlpha={true} 
								 />
								 </>
						)}

						</ControlPanelControl>
						<ControlPanelControl
								label={ __( 'Border', 'vayu-blocks' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								onClick={ () => setAttributes({ tabBorder: true }) }
								resetValues={
									{
										
										tabborderType:"none",
										tabBorderWidthUnit:"px",
										tabBorderRadiusUnit:"px",
										tabBorderColor:"",
										tabBorderRadiusType:"linked",
										tabBorderWidthType:"linked",

									}
								}
							>
                        <SelectControl
						label={ __( 'Border Type', 'vayu-blocks' ) }
						value={ attributes.tabborderType }
						options={ [
							{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
							{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
							{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
							{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
						    { label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
							{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
						] }
						onChange={ e => setAttributes({ tabborderType: e }) }
					   />	
					   { 'none' !== attributes.tabborderType && (
						   <>
							<ResponsiveControl
									label={ __( 'Border Width', 'vayu-blocks' ) }
								>
								<UnitChooser
									value={ attributes.tabBorderWidthUnit }
									onClick={tabBorderWidthUnit => {
										setAttributes({tabBorderWidthUnit });
										settabBorderWidthUnit(tabBorderWidthUnit);
									}}
									units={ [ 'px', 'em', '%' ] }
								/>
								<SizingControl
										type={ gettabBorderWidthType() }
										min={ 0 }
										max={ maxtabBorderWidthUnit }
										changeType={ changetabBorderWidthType }
										onChange={ changetabBorderWidth }
										options={ [
											{
												label: __( 'Top', 'vayu-blocks' ),
												type: 'top',
												value: gettabBorderWidth( 'top' )
											},
											{
												label: __( 'Right', 'vayu-blocks' ),
												type: 'right',
												value: gettabBorderWidth( 'right' )
											},
											{
												label: __( 'Bottom', 'vayu-blocks' ),
												type: 'bottom',
												value: gettabBorderWidth( 'bottom' )
											},
											{
												label: __( 'Left', 'vayu-blocks' ),
												type: 'left',
												value: gettabBorderWidth( 'left' )
											}
										] }
									/>

								</ResponsiveControl>
								<ResponsiveControl
									label={ __( 'Border Radius', 'vayu-blocks' ) }
								>
								<UnitChooser
									value={ attributes.tabBorderRadiusUnit }
									onClick={tabBorderRadiusUnit => {
										setAttributes({tabBorderRadiusUnit });
										settabBorderRadiusUnit(tabBorderRadiusUnit);
									}}
									units={ [ 'px', 'em', '%' ] }
								/>
								<SizingControl
										type={ gettabBorderRadiusType() }
										min={ 0 }
										max={ maxtabBorderRadiusUnit }
										changeType={ changetabBorderRadiusType }
										onChange={ changetabBorderRadius }
										options={ [
											{
												label: __( 'Top', 'vayu-blocks' ),
												type: 'top',
												value: gettabBorderRadius( 'top' )
											},
											{
												label: __( 'Right', 'vayu-blocks' ),
												type: 'right',
												value: gettabBorderRadius( 'right' )
											},
											{
												label: __( 'Bottom', 'vayu-blocks' ),
												type: 'bottom',
												value: gettabBorderRadius( 'bottom' )
											},
											{
												label: __( 'Left', 'vayu-blocks' ),
												type: 'left',
												value: gettabBorderRadius( 'left' )
											}
										] }
									/>

								</ResponsiveControl>
								<ColorGradientControl
									label={ __( 'Border Color', 'vayu-blocks' ) }
									colorValue={ attributes.tabBorderColor }
									onColorChange={ e => setAttributes({ tabBorderColor: e }) }
									enableAlpha={true} 
									/>
								<ColorGradientControl
									label={ __( 'Border Hover Color', 'vayu-blocks' ) }
									colorValue={ attributes.tabBorderColorHvr }
									onColorChange={ e => setAttributes({ tabBorderColorHvr: e }) }
									enableAlpha={true} 
									/>	
							     </>

							) }
						</ControlPanelControl>

						<ResponsiveControl
								label={ __( 'Padding', 'vayu-blocks' ) }
							>
							<UnitChooser
								value={ attributes.tabPaddingUnit }
								
								onClick={tabPaddingUnit => {
									setAttributes({tabPaddingUnit });
									settabPaddingUnit(tabPaddingUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ gettabPaddingType() }
									min={ 0 }
									max={ maxtabPaddingUnit }
									changeType={ changetabPaddingType }
									onChange={ changetabPadding }
									options={ [
										{
											label: __( 'Top', 'vayu-blocks' ),
											type: 'top',
											value: gettabPadding( 'top' )
										},
										{
											label: __( 'Right', 'vayu-blocks' ),
											type: 'right',
											value: gettabPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'vayu-blocks' ),
											type: 'bottom',
											value: gettabPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'vayu-blocks' ),
											type: 'left',
											value: gettabPadding( 'left' )
										}
									] }
								/>
              
							</ResponsiveControl>
							<ResponsiveControl
								label={ __( 'Margin', 'vayu-blocks' ) }
							>
							<UnitChooser
								value={ attributes.tabMarginUnit }
								
								onClick={tabMarginUnit => {
									setAttributes({ tabMarginUnit });
									settabMarginUnit(tabMarginUnit);
								  }}
								units={ [ 'px', 'em', '%' ] }
						    />
                            <SizingControl
									type={ gettabMarginType() }
									min={ 0 }
									max={ maxtabMarginUnit }
									changeType={ changetabMarginType }
									onChange={ changetabMargin }
									options={ [
										{
											label: __( 'Top', 'vayu-blocks' ),
											type: 'top',
											value: gettabMargin( 'top' )
										},
										{
											label: __( 'Right', 'vayu-blocks' ),
											type: 'right',
											value: gettabMargin( 'right' )
										},
										{
											label: __( 'Bottom', 'vayu-blocks' ),
											type: 'bottom',
											value: gettabMargin( 'bottom' )
										},
										{
											label: __( 'Left', 'vayu-blocks' ),
											type: 'left',
											value: gettabMargin( 'left' )
										},
									] }
								/>

							</ResponsiveControl>

                    </PanelBody>
            </Fragment>
             ) || 'advanced' === tab && (
            <Fragment>
              <PanelBody title={ __( 'Layout', 'vayu-blocks' ) }
						initialOpen={ true }        
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

							<SelectControl
								label={ __( 'Width', 'vayu-blocks' ) }
								value={ attributes.widthType }
								options={ [
									{ label: __( 'Default', 'vayu-blocks' ), value: 'default' },
									{ label: __( 'Inline(Auto)', 'vayu-blocks' ), value: 'inlinewidth' },
								] }
								onChange={ e => setAttributes({ widthType: e }) }
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
			           <PanelBody
						title={ __( 'Background', 'vayu-blocks' ) }
						className="th-product-panel"
						initialOpen={ false }
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
						title={ __( 'Overlay', 'vayu-blocks' ) }
						initialOpen={ false }
						className="th-product-panel th-overlay-control"
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
							title={ __( 'Transition', 'vayu-blocks' ) }
							className="th-product-panel"
							initialOpen={ false }
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

						<PanelBody
							title={ __( 'Responsive', 'vayu-blocks' ) }
							className="th-product-panel"
							initialOpen={ false }
						> 
						<ToggleControl
										label={ __( 'Hide On Desktop', 'vayu-blocks' ) }
										checked={ attributes.responsiveTogHideDesktop }
										onChange={ responsiveTogHideDesktop => setAttributes({ responsiveTogHideDesktop }) }
									/>
						<ToggleControl
										label={ __( 'Hide On Tablet', 'vayu-blocks' ) }
										checked={ attributes.responsiveTogHideTablet }
										onChange={ responsiveTogHideTablet => setAttributes({ responsiveTogHideTablet }) }
									/>				
						<ToggleControl
										label={ __( 'Hide On Mobile', 'vayu-blocks' ) }
										checked={ attributes.responsiveTogHideMobile }
										onChange={ responsiveTogHideMobile => setAttributes({ responsiveTogHideMobile }) }
									/>
						</PanelBody>
            </Fragment>
         )}
		 </div>
           </InspectorControls>
        </Fragment>
        );

}
export default InsSettings;