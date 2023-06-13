/**
 * WordPress dependencies.
 */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect, useDispatch  } from '@wordpress/data';
import { omitBy } from 'lodash';
import hexToRgba from 'hex-rgba';
import {Fragment,useState,Suspense,useEffect} from '@wordpress/element';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import InsSettings from './settings.js';
import getUniqueId from '../../../src/helpers/get-unique-id.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Internal dependencies
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes, toggleSelection, clientId, uniqueID }) {
  const { id } = attributes;

  const { addUniqueID } = useDispatch( 'themehunk-blocks/data' );
  const { isUniqueID, isUniqueBlock} = useSelect(
    ( select ) => {
      return {
        isUniqueID: ( value ) => select( 'themehunk-blocks/data' ).isUniqueID( value ),
        isUniqueBlock: ( value, clientId ) => select( 'themehunk-blocks/data' ).isUniqueBlock( value, clientId ),
        
      };
    },
    [ clientId ]
  );

  useEffect( () => {
  const uniqueId = getUniqueId( uniqueID, clientId, isUniqueID, isUniqueBlock );
  if ( uniqueId !== uniqueID ) {
    attributes.uniqueID = uniqueId;
    setAttributes( { uniqueID: uniqueId } );
    addUniqueID( uniqueId, clientId );
  } else {
    addUniqueID( uniqueId, clientId );
  }
  }, [] );
  
  const {
		isViewportAvailable,
		isPreviewDesktop,
		isPreviewTablet,
		isPreviewMobile
	} = useSelect( select => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return {
			isViewportAvailable: __experimentalGetPreviewDeviceType ? true : false,
			isPreviewDesktop: __experimentalGetPreviewDeviceType ? 'Desktop' === __experimentalGetPreviewDeviceType() : false,
			isPreviewTablet: __experimentalGetPreviewDeviceType ? 'Tablet' === __experimentalGetPreviewDeviceType() : false,
			isPreviewMobile: __experimentalGetPreviewDeviceType ? 'Mobile' === __experimentalGetPreviewDeviceType() : false
		};
	}, []);

    const isLarger = useViewportMatch( 'large', '>=' );

	const isLarge = useViewportMatch( 'large', '<=' );

	const isSmall = useViewportMatch( 'small', '>=' );

	const isSmaller = useViewportMatch( 'small', '<=' );

    let isDesktop = isLarger && ! isLarge && isSmall && ! isSmaller;

	let isTablet = ! isLarger && ! isLarge && isSmall && ! isSmaller;

	let isMobile = ! isLarger && ! isLarge && ! isSmall && ! isSmaller;

    if ( isViewportAvailable && ! isMobile ) {
		isDesktop = isPreviewDesktop;
		isTablet = isPreviewTablet;
		isMobile = isPreviewMobile;
	}

  let ColStyles;
  let productsPerPage;

  if ( isDesktop ) {
    productsPerPage = attributes.productShow || 4;
    ColStyles = { 
      '--grid-col': (attributes.productCol || '4'),
    }

  }
  if ( isTablet ) {
    productsPerPage = attributes.productShowTablet || 4;
    ColStyles = { 
      '--grid-col': (attributes.productColTablet || '4'),
    }

  }
  if ( isMobile) {
    productsPerPage = attributes.productShowMobile || 4;
    ColStyles = { 
      '--grid-col': (attributes.productColMobile || '4'),
    }

  }
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const homeUrl = ThBlockData.homeUrl;
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  
  
  let prdType = ''; 
  let prdOrderBy = '';
  let prdOrder = '';

  if (attributes.productType === 'sale') {
    prdType = '&on_sale=true';
  } else if (attributes.productType === 'featured') {
    prdType = '&featured=true';
  } else if (attributes.productType === 'manual') {
    // Fetch all products if no category is selected
    let manualProductParam = '';
    if (attributes.manualProduct && attributes.manualProduct.length > 0) {
      const selectedManualProduct = attributes.manualProduct.map((maualP) => maualP.value);
      manualProductParam = selectedManualProduct.join(',');
    }
    prdType = `&include=${manualProductParam}`;
  }

  //orderby
  if (attributes.productOrderby === 'date') {
    prdOrderBy = '&orderby=date';
  } else if (attributes.productOrderby === 'price') {
    prdOrderBy = '&orderby=price';
  } else if (attributes.productOrderby === 'popularity') {
    prdOrderBy = '&orderby=popularity';
  } else if (attributes.productOrderby === 'rating') {
    prdOrderBy = '&orderby=rating';
  } else if (attributes.productOrderby === 'menu-order') {
    prdOrderBy = '&orderby=menu_order';
  }
  
  // order
  if (attributes.productOrder === 'desc') {
    prdOrder = '&order=desc';
  } else {
    prdOrder = '&order=asc';
  }

  // product exclude
  let excludeProductParam = '';
  if (attributes.excludeProduct && attributes.excludeProduct.length > 0) {
    const selectedExcludeProduct = attributes.excludeProduct.map((excldeP) => excldeP.value);
    excludeProductParam = `&exclude=${selectedExcludeProduct.join(',')}`;
  }

  //stock status
  let stockParam = '';
  if (attributes.stockStatus && attributes.stockStatus.length > 0) {
    stockParam = `&stock_status=['outofstock']`;
  }

  console.log(stockParam);

  // useEffect hook to fetch products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      // Fetch products based on selected category
      fetch(`${homeUrl}/wp-json/wc/store/v1/products?category=${selectedCategory}&page=${currentPage}&per_page=${productsPerPage}${prdType}${prdOrderBy}${prdOrder}${excludeProductParam}${stockParam}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
          setHasNextPage(data.length === productsPerPage);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    } else {
      setIsLoading(true);
      // Fetch all products if no category is selected
      let categoryParam="";
      if (attributes.productCategories && attributes.productCategories.length > 0) {
        const selectedCategories = attributes.productCategories.map((category) => category.value);
        categoryParam = `&category=${selectedCategories.join(',')}`;
      }
      fetch(`${homeUrl}/wp-json/wc/store/v1/products?page=${currentPage}&per_page=${productsPerPage}${categoryParam}${prdType}${prdOrderBy}${prdOrder}${excludeProductParam}${stockParam}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
          setHasNextPage(data.length === productsPerPage);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [selectedCategory, currentPage, productsPerPage, attributes.productCategories, prdType, prdOrderBy, prdOrder, excludeProductParam]);
  
  // Event handler for tab click
  const handleTabClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };
   
  // Show star rating
  const RatingStars = ({ rating, maxRating = 5, filledColor = 'gold', emptyColor = 'lightgray' }) => {
    const starCount = Math.min(Math.floor(rating), maxRating);

    return (
      <div>
        {Array(maxRating)
          .fill()
          .map((_, index) => (
            <span key={index} style={{ color: index < starCount ? filledColor : emptyColor }}>
              &#9733;
            </span>
          ))}
      </div>
    );
  };

  const style = omitBy({
    ...ColStyles,
  }, x => x?.includes?.( 'undefined' ));

  const blockProps = useBlockProps({
    id:attributes.id,
    style
  });
  

  return ( 
     <Fragment>
		<InsSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>	
    <div {...blockProps} >   
    <div className="th-product-block-wrapper">
     
        <>
          <div className="th-product-block-cat-filter">
            <ul className="category-tabs">
              {attributes.productCategories.map((category) => (
                <li
                  key={category.value}
                  className={selectedCategory === category.value ? 'active' : ''}
                  onClick={() => handleTabClick(category.value)}
                  >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="th-product-block-product-content">
            <div className="th-product-block-product-item-wrap">
             {isLoading && (
              <div className="th-block-loader">Loading...</div>
             )}
                {products.map((product) => (
                <div className="th-product-item" key={product.id}>
                  <div className="th-product-block-content-wrap">
                  {attributes.template.map((element) => {
                      switch (element) {
                        case 'image':
                          return (
                            attributes.displayFeaturedImage && (
                            <div className="th-product-imgae">
                              {product.on_sale && <span className="sale-tag">Sale</span>}
                              <div className="th-product-sale"></div>
                              <img src={product.images[0].thumbnail} alt={product.name} />
                            </div>
                            )
                          );
                        case 'category':
                          return (
                            attributes.displayCategory && (
                            <div className="th-product-cat">
                              {product.categories.map((category) => (
                                <a key={category.id} href={category.link}>
                                  {category.name}
                                </a>
                              ))}
                            </div>
                            )
                          );
                        case 'title':
                          return (
                            attributes.displayTitle && (
                            <h3 className="th-product-title">
                              <a key={product.id} href={product.permalink}>
                                {product.name}
                              </a>
                            </h3>
                            )
                          );
                        case 'price':
                          return (
                            attributes.displayPrice && (
                            <div
                              className="th-product-price"
                              dangerouslySetInnerHTML={{ __html: product.price_html }}
                            ></div>
                            )
                          );
                        case 'rating':
                          return (
                            attributes.displayRating && (
                            <div className="th-product-rating">
                              <RatingStars
                                rating={parseFloat(product.average_rating)}
                                maxRating={5}
                                filledColor="gold"
                                emptyColor="lightgray"
                              />
                            </div>
                            )
                          );
                        case 'button':
                          return attributes.displayButton && (
                          <div className="th-product-btn">{product.add_to_cart.text}</div>
                          );
                        default:
                          return null; 
                      }
                    })}
                    </div>
                </div>
              ))}
            </div>
            <div className="th-pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            <span className="dashicons dashicons-arrow-left-alt2"></span>
            </button>
            <button disabled={!hasNextPage} onClick={() => setCurrentPage(currentPage + 1)}>
            <span className="dashicons dashicons-arrow-right-alt2"></span>
            </button>
          </div>
          </div>
        </>
        
    </div>
    </div> 
    </Fragment>
  );
}