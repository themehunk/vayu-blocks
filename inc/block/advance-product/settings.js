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


import { pick } from 'lodash';
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
} from '../../../src/components/index.js';

import LayoutBuilder from './sortable-layout-.js';

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
   
    const homeUrl = ThBlockData.homeUrl;
    
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
        setAttributes({ productShowTablet: value });
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
        setAttributes({ productColTablet: value });
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
			setAttributes({ productPaddingTypeTablet: value });
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
				setAttributes({ productPaddingTablet: value });
			} else {
				setAttributes({ [tabletproductPaddingType[type]]: value });
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
			setAttributes({ elementGapTablet: value });
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
			setAttributes({ productBrdrRadiusTypeTablet: value });
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
				setAttributes({ productBrdrRadiusTablet: value });
			} else {
				setAttributes({ [tabletproductBrdrRadiusType[type]]: value });
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


  return (
        <Fragment>
           <InspectorControls>
           <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Setting', 'themehunk-block' ),
							value: 'setting'
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
            <PanelBody title={ __( 'General', 'themehunk-block' ) }
                className="th-adv-product-panel" initialOpen={ true }
                
            >
            <Select
            value={attributes.productCategories}
            id="th-cat-select"
            options={SelectCategories}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Choose Category', 'themehunk-block')}
            onChange={( value ) => {
              setAttributes( { productCategories: ( value ? value : [] ) } );
            }}
            />
            <SelectControl
								label={ __( 'Source', 'themehunk-block' ) }
								value={ attributes.productType }
								options={ [
									{ label:  __( 'Latest Product', 'themehunk-block' ), value: 'recent' },
									{ label: __( 'Sale', 'themehunk-block' ), value: 'sale' },
                  { label: __( 'Featured', 'themehunk-block' ), value: 'featured' },
                  { label: __( 'Manual Product', 'themehunk-block' ), value: 'manual' },
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
            placeholder={__('Choose Product', 'themehunk-block')}
            onChange={( value ) => {
              setAttributes( { manualProduct: ( value ? value : [] ) } );
            }}
            />
            )}
             <ResponsiveControl
                        label={ __( 'Number of product to show per page', 'themehunk-block' ) }
                        >
               <RangeControl
                            value={ getProductShow() || '' }
                            onChange={ changeProductShow }
                            step={ 1 }
                            min={ 1 }
                            max={500}
                            allowReset={ true }
                   />            

            </ResponsiveControl>

            <ResponsiveControl
                        label={ __( 'Number of column', 'themehunk-block' ) }
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
								label={ __( 'OrderBy', 'themehunk-block' ) }
								value={ attributes.productOrderby }
								options={ [
									{ label:  __( 'Date Product', 'themehunk-block' ), value: 'date' },
									{ label: __( 'Price', 'themehunk-block' ), value: 'price' },
                  { label: __( 'popularity', 'themehunk-block' ), value: 'popularity' },
                  { label: __( 'Rating', 'themehunk-block' ), value: 'rating' },
                  { label: __( 'Menu Order', 'themehunk-block' ), value: 'menu-order' },
								] }
								onChange={ e => setAttributes({ productOrderby: e }) }
					  />

            <SelectControl
								label={ __( 'OrderBy', 'themehunk-block' ) }
								value={ attributes.productOrder }
								options={ [
									{ label:  __( 'ASC', 'themehunk-block' ), value: 'asc' },
									{ label: __( 'DESC', 'themehunk-block' ), value: 'desc' },
								] }
								onChange={ e => setAttributes({ productOrder: e }) }
					   />
             <div className='components-base-control'>
            <label>
            { __( 'Exclude Product', 'themehunk-block' ) }
           </label>
           <Select
            value={attributes.excludeProduct}
            id="th-product-select"
            options={SelectProduct}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Exclude Product', 'themehunk-block')}
            onChange={( value ) => {
              setAttributes( { excludeProduct: ( value ? value : [] ) } );
            }}
            />
            </div>
            <div className='components-base-control'>
            <label>
            { __( 'Stock Status', 'themehunk-block' ) }
            </label>
            <Select
              value={stockstatus.filter((option) => attributes.stockStatus.includes(option.value))}
              id="th-stock-status"
              options={stockstatus}
              isMulti
              isClearable
              maxMenuHeight={300}
              placeholder={__('Stock Status', 'themehunk-block')}
              onChange={(selectedOptions) => {
                const values = selectedOptions ? selectedOptions.map((option) => option.value) : [];
                setAttributes({ stockStatus: values });
              }}
            />
            </div>
            </PanelBody>
            <PanelBody
						title={ __( 'Product Elements', 'themehunk-block' ) }
						initialOpen={ false }
					  >
						<LayoutBuilder
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					 </PanelBody>
           <PanelBody
						title={ __( 'Product Box', 'themehunk-block' ) }
						initialOpen={ false }
					  >
               <div className='th-component-group-label'>

            <label className='th-label'>{ __( 'Alignment', 'themehunk-block' ) } </label>
						<AlignmentToolbar

									value={ attributes.productAlign }
									onChange={ e => setAttributes({ productAlign: e }) }
									isCollapsed={ false }
							/>
              </div>

              <ResponsiveControl
								label={ __( 'Padding', 'themehunk-block' ) }
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
											label: __( 'Top', 'themehunk-block' ),
											type: 'top',
											value: getproductPadding( 'top' )
										},
										{
											label: __( 'Right', 'themehunk-block' ),
											type: 'right',
											value: getproductPadding( 'right' )
										},
										{
											label: __( 'Bottom', 'themehunk-block' ),
											type: 'bottom',
											value: getproductPadding( 'bottom' )
										},
										{
											label: __( 'Left', 'themehunk-block' ),
											type: 'left',
											value: getproductPadding( 'left' )
										}
									] }
								/>
              
							</ResponsiveControl>
              <ResponsiveControl
								label={ __( 'Border Radius', 'themehunk-block' ) }
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
											label: __(  'T-R', 'themehunk-block'),
											type: 'top',
											value: getproductBrdrRadius( 'top' )
										},
										{
											label: __(  'T-L', 'themehunk-block' ),
											type: 'right',
											value: getproductBrdrRadius( 'right' )
										},
										
										{
											label: __( 'B-R', 'themehunk-block'  ),
											type: 'left',
											value: getproductBrdrRadius( 'left' )
										},
										{
											label: __( 'B-L', 'themehunk-block'),
											type: 'bottom',
											value: getproductBrdrRadius( 'bottom' )
										},
									] }
								/>

							</ResponsiveControl>
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

                 <HoverControl value={ productelementclr }
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
						       onChange={ setproductelementclr } 
						   />
                { 'normal' ===  productelementclr &&  (
                               <>
                               <ColorGradientControl
								 label={ __( 'Bg Color', 'themehunk-block' ) }
								 colorValue={ attributes.productboxClr }
								 onColorChange={ e => setAttributes({ productboxClr: e }) }
								 enableAlpha={true} 
								/>
								  
								</>
						) || 'hover' ===  productelementclr  && (
							<>
							 <ColorGradientControl
							  label={ __( 'Bg Hover Color', 'themehunk-block' ) }
							  colorValue={ attributes.productboxHvrClr }
							  onColorChange={ e => setAttributes({ productboxHvrClr: e }) }
							  enableAlpha={true} 
							 />
							 </>

						)
            }  
					 </PanelBody>
            </Fragment>
             ) || 'advanced' === tab && (
            <Fragment>
                <PanelBody title={ __( 'General', 'themehunk-block' ) }
                     className="th-adv-h-panel" initialOpen={ true }         
                >
             </PanelBody>
            </Fragment>
         )}
           </InspectorControls>
        </Fragment>
        );

}
export default InsSettings;