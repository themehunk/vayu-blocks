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

import { IoIosHeartEmpty,IoMdRepeat,IoIosExpand} from "react-icons/io";
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
import googleFontsLoader from '../../../src/helpers/google-fonts.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Button } from '@wordpress/components';

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

  if ( ! id ) {
		setAttributes( { id: clientId } );
	}

  useEffect( () => {
		googleFontsLoader.attach();
	}, [ attributes.id ]);

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
    stockParam = `&stockstatus=['${attributes.stockStatus}']`;
  }


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
  }, [selectedCategory, currentPage, productsPerPage, attributes.productCategories, prdType, prdOrderBy, prdOrder, excludeProductParam, stockParam]);
  
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

  const deviceAttributeMap = {
    desktop: {
      titlefontSize: attributes.titlefontSize + attributes.titlefontSizeUnit,
      titlelineHeight: attributes.titlelineHeight + attributes.titlelineHeightUnit,
      titleletterSpacing: attributes.titleletterSpacing + attributes.titleletterSpacingUnit,
      catfontSize: attributes.catfontSize + attributes.catfontSizeUnit,
      catlineHeight: attributes.catlineHeight + attributes.catlineHeightUnit,
      catletterSpacing: attributes.catletterSpacing + attributes.catletterSpacingUnit,
      pricefontSize: attributes.pricefontSize + attributes.pricefontSizeUnit,
      pricelineHeight: attributes.pricelineHeight + attributes.pricelineHeightUnit,
      priceletterSpacing: attributes.priceletterSpacing + attributes.priceletterSpacingUnit,
      ratingfontSize: attributes.ratingfontSize + attributes.ratingfontSizeUnit,
      ratinglineHeight: attributes.ratinglineHeight + attributes.ratinglineHeightUnit,
      ratingletterSpacing: attributes.ratingletterSpacing + attributes.ratingletterSpacingUnit,
      buttonfontSize: attributes.buttonfontSize + attributes.buttonfontSizeUnit,
      buttonlineHeight: attributes.buttonlineHeight + attributes.buttonlineHeightUnit,
      buttonletterSpacing: attributes.buttonletterSpacing + attributes.buttonletterSpacingUnit,
      buttonBordertop : 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTop }${ attributes.buttonborderWidthUnit }`,
			buttonBorderbottom: 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottom }${ attributes.buttonborderWidthUnit }`,
			buttonBorderright: 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRight }${ attributes.buttonborderWidthUnit }`,
			buttonBorderleft: 'linked' === attributes.buttonborderWidthType ? `${ attributes.buttonborderWidth }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeft}${ attributes.buttonborderWidthUnit }`,
      buttonSpacetop : 'linked' === attributes.buttonSpaceType ? `${ attributes.buttonSpace }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceTop}${ attributes.buttonSpaceUnit }`,
			buttonSpacebottom: 'linked' === attributes.buttonSpaceType ? `${ attributes.buttonSpace }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceBottom}${ attributes.buttonSpaceUnit }`,
			buttonSpaceright: 'linked' === attributes.buttonSpaceType ? `${ attributes.buttonSpace }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceRight}${ attributes.buttonSpaceUnit }`,
			buttonSpaceleft: 'linked' === attributes.buttonSpaceType ? `${ attributes.buttonSpace }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceLeft}${ attributes.buttonSpaceUnit }`,
    

      buttonBrdrRadiustopright : 'linked' === attributes.buttonBrdrRadiusType ? `${ attributes.buttonBrdrRadius }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusTop}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiustopleft: 'linked' === attributes.buttonBrdrRadiusType ? `${ attributes.buttonBrdrRadius }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusBottom}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomright: 'linked' === attributes.buttonBrdrRadiusType ? `${ attributes.buttonBrdrRadius }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusRight}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomleft: 'linked' === attributes.buttonBrdrRadiusType ? `${ attributes.buttonBrdrRadius }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusLeft}${ attributes.buttonBrdrRadiusUnit }`,
      
      elementGap: attributes.elementGap + attributes.elementGapUnit,

      productPaddingtop : 'linked' === attributes.productPaddingType ? `${ attributes.productPadding }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingTop}${ attributes.productPaddingUnit }`,
			productPaddingbottom: 'linked' === attributes.productPaddingType ? `${ attributes.productPadding }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingBottom}${ attributes.productPaddingUnit }`,
			productPaddingright: 'linked' === attributes.productPaddingType ? `${ attributes.productPadding }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingRight}${ attributes.productPaddingUnit }`,
			productPaddingleft: 'linked' === attributes.productPaddingType ? `${ attributes.productPadding }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingLeft}${ attributes.productPaddingUnit }`,
      
      productBrdrRadiustopright : 'linked' === attributes.productBrdrRadiusType ? `${ attributes.productBrdrRadius }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusTop}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiustopleft: 'linked' === attributes.productBrdrRadiusType ? `${ attributes.productBrdrRadius }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusBottom}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomright: 'linked' === attributes.productBrdrRadiusType ? `${ attributes.productBrdrRadius }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusRight}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomleft: 'linked' === attributes.productBrdrRadiusType ? `${ attributes.productBrdrRadius }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusLeft}${ attributes.productBrdrRadiusUnit }`,
   
    },
    tablet: {
      titlefontSize: attributes.titlefontSizeTablet + attributes.titlefontSizeUnit,
      titlelineHeight: attributes.titlelineHeightTablet + attributes.titlelineHeightUnit,
      titleletterSpacing: attributes.titleletterSpacingTablet + attributes.titleletterSpacingUnit,
      catfontSize: attributes.catfontSizeTablet + attributes.catfontSizeUnit,
      catlineHeight: attributes.catlineHeightTablet + attributes.catlineHeightUnit,
      catletterSpacing: attributes.catletterSpacingTablet + attributes.catletterSpacingUnit,
      pricefontSize: attributes.pricefontSizeTablet + attributes.pricefontSizeUnit,
      pricelineHeight: attributes.pricelineHeightTablet + attributes.pricelineHeightUnit,
      priceletterSpacing: attributes.priceletterSpacingTablet + attributes.priceletterSpacingUnit,
      ratingfontSize: attributes.ratingfontSizeTablet + attributes.ratingfontSizeUnit,
      ratinglineHeight: attributes.ratinglineHeightTablet + attributes.ratinglineHeightUnit,
      ratingletterSpacing: attributes.ratingletterSpacingTablet + attributes.ratingletterSpacingUnit,
      buttonfontSize: attributes.buttonfontSizeTablet + attributes.buttonfontSizeUnit,
      buttonlineHeight: attributes.buttonlineHeightTablet + attributes.buttonlineHeightUnit,
      buttonletterSpacing: attributes.buttonletterSpacingTablet + attributes.buttonletterSpacingUnit,
      buttonBordertop : 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTopTablet }${ attributes.buttonborderWidthUnit }`,
			buttonBorderbottom: 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottomTablet }${ attributes.buttonborderWidthUnit }`,
			buttonBorderright: 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRightTablet }${ attributes.buttonborderWidthUnit }`,
			buttonBorderleft: 'linked' === attributes.buttonborderWidthTypeTablet ? `${ attributes.buttonborderWidthTablet }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeftTablet}${ attributes.buttonborderWidthUnit }`,
     
      buttonSpacetop : 'linked' === attributes.buttonSpaceTypeTablet ? `${ attributes.buttonSpaceTablet }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceTopTablet }${ attributes.buttonSpaceUnit }`,
			buttonSpacebottom: 'linked' === attributes.buttonSpaceTypeTablet ? `${ attributes.buttonSpaceTablet }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceBottomTablet }${ attributes.buttonSpaceUnit }`,
			buttonSpaceright: 'linked' === attributes.buttonSpaceTypeTablet ? `${ attributes.buttonSpaceTablet }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceRightTablet }${ attributes.buttonSpaceUnit }`,
			buttonSpaceleft: 'linked' === attributes.buttonSpaceTypeTablet ? `${ attributes.buttonSpaceTablet }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceLeftTablet}${ attributes.buttonSpaceUnit }`,
      
      buttonBrdrRadiustopright : 'linked' === attributes.buttonBrdrRadiusTypeTablet ? `${ attributes.buttonBrdrRadiusTablet }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusTopTablet}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiustopleft: 'linked' === attributes.buttonBrdrRadiusTypeTablet ? `${ attributes.buttonBrdrRadiusTablet }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusBottomTablet}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomright: 'linked' === attributes.buttonBrdrRadiusTypeTablet ? `${ attributes.buttonBrdrRadiusTablet }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusRightTablet}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomleft: 'linked' === attributes.buttonBrdrRadiusTypeTablet ? `${ attributes.buttonBrdrRadiusTablet }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusLeftTablet}${ attributes.buttonBrdrRadiusUnit }`,
   
      elementGap: attributes.elementGapTablet + attributes.elementGapUnit,

      productPaddingtop : 'linked' === attributes.productPaddingTypeTablet ? `${ attributes.productPaddingTablet }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingTopTablet}${ attributes.productPaddingUnit }`,
			productPaddingbottom: 'linked' === attributes.productPaddingTypeTablet ? `${ attributes.productPaddingTablet }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingBottomTablet}${ attributes.productPaddingUnit }`,
			productPaddingright: 'linked' === attributes.productPaddingTypeTablet ? `${ attributes.productPaddingTablet }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingRightTablet}${ attributes.productPaddingUnit }`,
			productPaddingleft: 'linked' === attributes.productPaddingTypeTablet ? `${ attributes.productPaddingTablet }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingLeftTablet}${ attributes.productPaddingUnit }`,
      
      productBrdrRadiustopright : 'linked' === attributes.productBrdrRadiusTypeTablet ? `${ attributes.productBrdrRadiusTablet }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusTopTablet}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiustopleft: 'linked' === attributes.productBrdrRadiusTypeTablet ? `${ attributes.productBrdrRadiusTablet }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusBottomTablet}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomright: 'linked' === attributes.productBrdrRadiusTypeTablet ? `${ attributes.productBrdrRadiusTablet }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusRightTablet}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomleft: 'linked' === attributes.productBrdrRadiusTypeTablet ? `${ attributes.productBrdrRadiusTablet }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusLeftTablet}${ attributes.productBrdrRadiusUnit }`,
    
    },
    mobile: {
      titlefontSize: attributes.titlefontSizeMobile + attributes.titlefontSizeUnit,
      titlelineHeight: attributes.titlelineHeightMobile + attributes.titlelineHeightUnit,
      titleletterSpacing: attributes.titleletterSpacingMobile + attributes.titleletterSpacingUnit,
      catfontSize: attributes.catfontSizeMobile + attributes.catfontSizeUnit,
      catlineHeight: attributes.catlineHeightMobile + attributes.catlineHeightUnit,
      catletterSpacing: attributes.catletterSpacingMobile + attributes.catletterSpacingUnit,
      pricefontSize: attributes.pricefontSizeMobile + attributes.pricefontSizeUnit,
      pricelineHeight: attributes.pricelineHeightMobile + attributes.pricelineHeightUnit,
      priceletterSpacing: attributes.priceletterSpacingMobile + attributes.priceletterSpacingUnit,
      ratingfontSize: attributes.ratingfontSizeMobile + attributes.ratingfontSizeUnit,
      ratinglineHeight: attributes.ratinglineHeightMobile + attributes.ratinglineHeightUnit,
      ratingletterSpacing: attributes.ratingletterSpacingMobile + attributes.ratingletterSpacingUnit,
      buttonfontSize: attributes.buttonfontSizeMobile + attributes.buttonfontSizeUnit,
      buttonlineHeight: attributes.buttonlineHeightMobile + attributes.buttonlineHeightUnit,
      buttonletterSpacing: attributes.buttonletterSpacingMobile + attributes.buttonletterSpacingUnit,
      buttonBordertop : 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthTopMobile }${ attributes.buttonborderWidthUnit }`,
			buttonBorderbottom: 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthBottomMobile }${ attributes.buttonborderWidthUnit }`,
			buttonBorderright: 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthRightMobile }${ attributes.buttonborderWidthUnit }`,
			buttonBorderleft: 'linked' === attributes.buttonborderWidthTypeMobile ? `${ attributes.buttonborderWidthMobile }${ attributes.buttonborderWidthUnit }` : `${ attributes.buttonborderWidthLeftMobile}${ attributes.buttonborderWidthUnit }`,
      
      buttonSpacetop : 'linked' === attributes.buttonSpaceTypeMobile ? `${ attributes.buttonSpaceMobile }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceTopMobile }${ attributes.buttonSpaceUnit }`,
			buttonSpacebottom: 'linked' === attributes.buttonSpaceTypeMobile ? `${ attributes.buttonSpaceMobile }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceBottomMobile }${ attributes.buttonSpaceUnit }`,
			buttonSpaceright: 'linked' === attributes.buttonSpaceTypeMobile ? `${ attributes.buttonSpaceMobile }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceRightMobile }${ attributes.buttonSpaceUnit }`,
			buttonSpaceleft: 'linked' === attributes.buttonSpaceTypeMobile ? `${ attributes.buttonSpaceMobile }${ attributes.buttonSpaceUnit }` : `${ attributes.buttonSpaceLeftMobile}${ attributes.buttonSpaceUnit }`,
     
      buttonBrdrRadiustopright : 'linked' === attributes.buttonBrdrRadiusTypeMobile ? `${ attributes.buttonBrdrRadiusMobile }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusTopMobile}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiustopleft: 'linked' === attributes.buttonBrdrRadiusTypeMobile ? `${ attributes.buttonBrdrRadiusMobile }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusBottomMobile}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomright: 'linked' === attributes.buttonBrdrRadiusTypeMobile ? `${ attributes.buttonBrdrRadiusMobile }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusRightMobile}${ attributes.buttonBrdrRadiusUnit }`,
			buttonBrdrRadiusbottomleft: 'linked' === attributes.buttonBrdrRadiusTypeMobile ? `${ attributes.buttonBrdrRadiusMobile }${ attributes.buttonBrdrRadiusUnit }` : `${ attributes.buttonBrdrRadiusLeftMobile}${ attributes.buttonBrdrRadiusUnit }`,
      
      elementGap: attributes.elementGapMobile + attributes.elementGapUnit,

      productPaddingtop : 'linked' === attributes.productPaddingTypeMobile ? `${ attributes.productPaddingMobile }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingTopMobile}${ attributes.productPaddingUnit }`,
			productPaddingbottom: 'linked' === attributes.productPaddingTyptMobile ? `${ attributes.productPaddingMobile }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingBottomMobile}${ attributes.productPaddingUnit }`,
			productPaddingright: 'linked' === attributes.productPaddingTypeMobile ? `${ attributes.productPaddingMobile }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingRightMobile}${ attributes.productPaddingUnit }`,
			productPaddingleft: 'linked' === attributes.productPaddingTypeMobile ? `${ attributes.productPaddingMobile }${ attributes.productPaddingUnit }` : `${ attributes.productPaddingLeftMobile}${ attributes.productPaddingUnit }`,
      
      productBrdrRadiustopright : 'linked' === attributes.productBrdrRadiusTypeMobile ? `${ attributes.productBrdrRadiusMobile }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusTopMobile}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiustopleft: 'linked' === attributes.productBrdrRadiusTypeMobile ? `${ attributes.productBrdrRadiusMobile }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusBottomMobile}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomright: 'linked' === attributes.productBrdrRadiusTypeMobile ? `${ attributes.productBrdrRadiusMobile }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusRightMobile}${ attributes.productBrdrRadiusUnit }`,
			productBrdrRadiusbottomleft: 'linked' === attributes.productBrdrRadiusTypeMobile ? `${ attributes.productBrdrRadiusMobile }${ attributes.productBrdrRadiusUnit }` : `${ attributes.productBrdrRadiusLeftMobile}${ attributes.productBrdrRadiusUnit }`,
    
    },
  };
  const deviceType = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
  // googlefontload
  useEffect( () => {
		if ( attributes.titlefontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.titlefontFamily, attributes.titlefontVariant );
		  googleFontsLoader.loadFontToBrowser( attributes.catfontFamily, attributes.catfontVariant );
      googleFontsLoader.loadFontToBrowser( attributes.pricefontFamily, attributes.pricefontVariant );
      googleFontsLoader.loadFontToBrowser( attributes.buttonfontFamily, attributes.buttonfontVariant );
    }
	}, [ attributes.titlefontFamily, attributes.catfontFamily, attributes.pricefontFamily, attributes.buttonfontFamily ]);


  // title setting
  const TitleTag = attributes.prouctTitleTag || 'h3';

  let ProductStyles;
  const TitleFontSize = deviceAttributeMap[deviceType].titlefontSize;
  const TitleLineHeight = deviceAttributeMap[deviceType].titlelineHeight;
  const TitleLetterSpacing = deviceAttributeMap[deviceType].titleletterSpacing;
  const CatFontSize = deviceAttributeMap[deviceType].catfontSize;
  const CatLineHeight = deviceAttributeMap[deviceType].catlineHeight;
  const CatLetterSpacing = deviceAttributeMap[deviceType].catletterSpacing;
  const PriceFontSize = deviceAttributeMap[deviceType].pricefontSize;
  const PriceLineHeight = deviceAttributeMap[deviceType].pricelineHeight;
  const PriceLetterSpacing = deviceAttributeMap[deviceType].priceletterSpacing;
  const RatingFontSize = deviceAttributeMap[deviceType].ratingfontSize;
  const RatingLineHeight = deviceAttributeMap[deviceType].ratinglineHeight;
  const RatingLetterSpacing = deviceAttributeMap[deviceType].ratingletterSpacing;
  const ButtonFontSize = deviceAttributeMap[deviceType].buttonfontSize;
  const ButtonLineHeight = deviceAttributeMap[deviceType].buttonlineHeight;
  const ButtonLetterSpacing = deviceAttributeMap[deviceType].buttonletterSpacing;
  const ButtonBorderTop = deviceAttributeMap[deviceType].buttonBordertop;
  const ButtonBorderBottom = deviceAttributeMap[deviceType].buttonBorderbottom;
  const ButtonBorderRight = deviceAttributeMap[deviceType].buttonBorderright;
  const ButtonBorderLeft = deviceAttributeMap[deviceType].buttonBorderleft;

  const ButtonSpaceTop = deviceAttributeMap[deviceType].buttonSpacetop;
  const ButtonSpaceBottom = deviceAttributeMap[deviceType].buttonSpacebottom;
  const ButtonSpaceRight = deviceAttributeMap[deviceType].buttonSpaceright;
  const ButtonSpaceLeft = deviceAttributeMap[deviceType].buttonSpaceleft;

  const ButtonBrdrRadiusTopRight    = deviceAttributeMap[deviceType].buttonBrdrRadiustopright;
  const ButtonBrdrRadiusTopLeft     = deviceAttributeMap[deviceType].buttonBrdrRadiustopleft;
  const ButtonBrdrRadiusBottomLeft  = deviceAttributeMap[deviceType].buttonBrdrRadiusbottomright;
  const ButtonBrdrRadiusBottomRight = deviceAttributeMap[deviceType].buttonBrdrRadiusbottomleft;

  const ElementGap = deviceAttributeMap[deviceType].elementGap;
  
  const ProductPaddingTop = deviceAttributeMap[deviceType].productPaddingtop;
  const ProductPaddingBottom = deviceAttributeMap[deviceType].productPaddingbottom;
  const ProductPaddingRight = deviceAttributeMap[deviceType].productPaddingright;
  const ProductPaddingLeft = deviceAttributeMap[deviceType].productPaddingleft;

  const ProductBrdrRadiusTopRight    = deviceAttributeMap[deviceType].productBrdrRadiustopright;
  const ProductBrdrRadiusTopLeft     = deviceAttributeMap[deviceType].productBrdrRadiustopleft;
  const ProductBrdrRadiusBottomLeft  = deviceAttributeMap[deviceType].productBrdrRadiusbottomright;
  const ProductBrdrRadiusBottomRight = deviceAttributeMap[deviceType].productBrdrRadiusbottomleft;

  ProductStyles = {
    '--title-color': attributes.productTitleColor,
    '--title-color-hvr': attributes.productTitleColorHvr,
    '--title-font-family':attributes.titlefontFamily,
    '--title-font-variant':attributes.titlefontVariant,
    '--title-font-style':attributes.titlefontStyle,
    '--title-font-transform':attributes.titletextTransform,
    '--title-font-size':TitleFontSize,
    '--title-line-height':TitleLineHeight,
    '--title-letter-spacing':TitleLetterSpacing,
    '--cat-color': attributes.catTxtColor,
    '--cat-color-hvr': attributes.catTxtColorHvr,
    '--cat-font-family':attributes.catfontFamily,
    '--cat-font-variant':attributes.catfontVariant,
    '--cat-font-style':attributes.catfontStyle,
    '--cat-font-transform':attributes.cattextTransform,
    '--cat-font-size':CatFontSize,
    '--cat-line-height':CatLineHeight,
    '--cat-letter-spacing':CatLetterSpacing,
    '--price-color': attributes.priceColor,
    '--price-color-del': attributes.priceDelColor,
    '--price-font-family':attributes.pricefontFamily,
    '--price-font-variant':attributes.pricefontVariant,
    '--price-font-style':attributes.pricefontStyle,
    '--price-font-transform':attributes.pricetextTransform,
    '--price-font-size':PriceFontSize,
    '--price-line-height':PriceLineHeight,
    '--price-letter-spacing':PriceLetterSpacing,
    '--rating-font-size':RatingFontSize,
    '--rating-line-height':RatingLineHeight,
    '--rating-letter-spacing':RatingLetterSpacing,
    '--button-font-family':attributes.buttonfontFamily,
    '--button-font-variant':attributes.buttonfontVariant,
    '--button-font-style':attributes.buttonfontStyle,
    '--button-font-transform':attributes.buttontextTransform,
    '--button-font-size':ButtonFontSize,
    '--button-line-height':ButtonLineHeight,
    '--button-letter-spacing':ButtonLetterSpacing,
    '--button-color': attributes.buttonTxtClr,
    '--button-bg-color': attributes.buttonBgClr,
    '--button-border-color': attributes.buttonBrdrClr,
    '--button-hvr-color': attributes.buttonTxtClrHvr,
    '--button-bg-hvr-color': attributes.buttonBgClrHvr,
    '--button-border-hvr-color': attributes.buttonBrdrClrHvr,
    '--button-border-type': attributes.buttonBrdrType,
    '--button-border-width-top': ButtonBorderTop,
    '--button-border-width-bottom':ButtonBorderBottom,
    '--button-border-width-right':ButtonBorderRight,
    '--button-border-width-left':ButtonBorderLeft,
    '--button-padding-top': ButtonSpaceTop,
    '--button-padding-bottom':ButtonSpaceBottom,
    '--button-padding-right':ButtonSpaceRight,
    '--button-padding-left':ButtonSpaceLeft,
    '--button-border-radius-top-right':ButtonBrdrRadiusTopRight,
    '--button-border-radius-top-left':ButtonBrdrRadiusTopLeft,
    '--button-border-radius-bottom-right':ButtonBrdrRadiusBottomRight,
    '--button-border-radius-bottom-left':ButtonBrdrRadiusBottomLeft,
    '--sale-color':attributes.saleClr,
    '--sale-bg-color':attributes.saleBgClr,
    '--post-meta-color':attributes.postMetaClr,
    '--post-meta-bg-color':attributes.postMetaBgClr,
    '--post-meta-hvr-color':attributes.postMetaHvrClr,
    '--post-meta-bg-hvr-color':attributes.postMetaBgHvrClr,
    '--alignment':attributes.productAlign,
    '--element-gap':ElementGap,
    '--element-padding-top':ProductPaddingTop,
    '--element-padding-bottom':ProductPaddingBottom,
    '--element-padding-right':ProductPaddingRight,
    '--element-padding-left':ProductPaddingLeft,
    '--product-box':attributes.productboxClr,
    '--product-box-hvr':attributes.productboxHvrClr,
    '--product-border-radius-top-right':ProductBrdrRadiusTopRight,
    '--product-border-radius-top-left':ProductBrdrRadiusTopLeft,
    '--product-border-radius-bottom-right':ProductBrdrRadiusBottomRight,
    '--product-border-radius-bottom-left':ProductBrdrRadiusBottomLeft,
  }
  
  const style = omitBy({
    ...ColStyles,
    ...ProductStyles,
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
                              {product.on_sale && attributes.showSale == true &&
                              <div className={`th-product-sale ${attributes.saleStyle} ${attributes.saleDesign} ${attributes.salePosition}`}>
                               {attributes.saleDesign =='saletext' &&
                               <span className="discount-percentage">{attributes.saleText}</span>
                               }

                               {attributes.saleDesign =='saledigit' && product.prices.regular_price &&  product.prices.sale_price && (
                                <span className="discount-percentage">
                                  {Math.round(
                                    ((product.prices.regular_price - product.prices.sale_price) /
                                    product.prices.regular_price) *
                                      100
                                  )}
                                  {__( '%', 'themehunk-blocks' )}
                                </span>
                              )}
                              </div>
                              }
                              <img src={product.images[0].thumbnail} alt={product.name} />
                              <div className="th-product-meta">
                                {attributes.showWishlist == true &&
                                  <div className="th-icon th-wishlist-button">
                                 <IoIosHeartEmpty></IoIosHeartEmpty>
                                 </div>
                                }
                                 {attributes.showCompare == true &&
                                 <div className="th-icon th-compare-button">
                                 <IoMdRepeat></IoMdRepeat>
                                 </div>
                                }
                                 {attributes.showView == true &&
                                 <div className="th-icon th-quickview-button">
                                 <IoIosExpand></IoIosExpand>
                                 </div>
                                }
                              </div>
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
                            <TitleTag className="th-product-title">
                              <a key={product.id} href={product.permalink}>
                                {product.name}
                              </a>
                            </TitleTag>
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
                                filledColor={attributes.ratingColor}
                                emptyColor={attributes.emptyratingColor}
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