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
      { value: 'backorder', label: 'On Backorder' }
    ];
    
    const selectedStockStatus = attributes.stockStatus || ['instock', 'outofstock', 'backorder'];
    
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