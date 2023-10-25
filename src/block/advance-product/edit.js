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
import getUniqueId from '../../helpers/get-unique-id.js';
import googleFontsLoader from '../../helpers/google-fonts.js';
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

  const { addUniqueID } = useDispatch( 'vayu-blocks/data' );
  const { isUniqueID, isUniqueBlock} = useSelect(
    ( select ) => {
      return {
        isUniqueID: ( value ) => select( 'vayu-blocks/data' ).isUniqueID( value ),
        isUniqueBlock: ( value, clientId ) => select( 'vayu-blocks/data' ).isUniqueBlock( value, clientId ),
        
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
  const [noproduct, setNoproduct] = useState();
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
          if (data.length === 0) {
            setNoproduct(true);
          } else {
            setNoproduct(false);
          }
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
   
      tabPaddingtop : 'linked' === attributes.tabPaddingType ? `${ attributes.tabPadding }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingTop}${ attributes.tabPaddingUnit }`,
			tabPaddingbottom: 'linked' === attributes.tabPaddingType ? `${ attributes.tabPadding }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingBottom}${ attributes.tabPaddingUnit }`,
			tabPaddingright: 'linked' === attributes.tabPaddingType ? `${ attributes.tabPadding }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingRight}${ attributes.tabPaddingUnit }`,
			tabPaddingleft: 'linked' === attributes.tabPaddingType ? `${ attributes.tabPadding }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingLeft}${ attributes.tabPaddingUnit }`,
      
      tabMargintop : 'linked' === attributes.tabMarginType ? `${ attributes.tabMargin }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginTop}${ attributes.tabMarginUnit }`,
			tabMarginbottom: 'linked' === attributes.tabMarginType ? `${ attributes.tabMargin }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginBottom}${ attributes.tabMarginUnit }`,
			tabMarginright: 'linked' === attributes.tabMarginType ? `${ attributes.tabMargin }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginRight}${ attributes.tabMarginUnit }`,
			tabMarginleft: 'linked' === attributes.tabMarginType ? `${ attributes.tabMargin }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginLeft}${ attributes.tabMarginUnit }`,
   
      tabfontSize: attributes.tabfontSize + attributes.tabfontSizeUnit,
      tablineHeight: attributes.tablineHeight + attributes.tablineHeightUnit,
      tabletterSpacing: attributes.tabletterSpacing + attributes.tabletterSpacingUnit,

      tabBorderWidthtop : 'linked' === attributes.tabBorderWidthType ? `${ attributes.tabBorderWidth }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthTop}${ attributes.tabBorderWidthUnit }`,
			tabBorderWidthbottom: 'linked' === attributes.tabBorderWidthType ? `${ attributes.tabBorderWidth }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthBottom}${ attributes.tabBorderWidthUnit }`,
			tabBorderWidthright: 'linked' === attributes.tabBorderWidthType ? `${ attributes.tabBorderWidth }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthRight}${ attributes.tabBorderWidthUnit }`,
			tabBorderWidthleft: 'linked' === attributes.tabBorderWidthType ? `${ attributes.tabBorderWidth }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthLeft}${ attributes.tabBorderWidthUnit }`,
      
      tabBorderRadiustop : 'linked' === attributes.tabBorderRadiusType ? `${ attributes.tabBorderRadius }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusTop}${ attributes.tabBorderRadiusUnit }`,
			tabBorderRadiusbottom: 'linked' === attributes.tabBorderRadiusType ? `${ attributes.tabBorderRadius }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusBottom}${ attributes.tabBorderRadiusUnit }`,
			tabBorderRadiusright: 'linked' === attributes.tabBorderRadiusType ? `${ attributes.tabBorderRadius }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusRight}${ attributes.tabBorderRadiusUnit }`,
			tabBorderRadiusleft: 'linked' === attributes.tabBorderRadiusType ? `${ attributes.tabBorderRadius }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusLeft}${ attributes.tabBorderRadiusUnit }`,
    
      paddingTop: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingTop }${ attributes.paddingUnit }`,
      paddingRight: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingRight }${ attributes.paddingUnit }`,
      paddingBottom: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingBottom }${ attributes.paddingUnit }`,
      paddingLeft: 'linked' === attributes.paddingType ? `${ attributes.padding }${ attributes.paddingUnit }` : `${ attributes.paddingLeft }${ attributes.paddingUnit }`,
    
      marginTop: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginTop }${ attributes.marginUnit }`,
      marginBottom: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginBottom }${ attributes.marginUnit }`,
      marginRight: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginRight }${ attributes.marginUnit }`,
      marginLeft: 'linked' === attributes.marginType ? `${ attributes.margin }${ attributes.marginUnit }` : `${ attributes.marginLeft }${ attributes.marginUnit }`,   
      
     
      
      zindex: attributes.zindex,
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
    
      tabPaddingtop : 'linked' === attributes.tabPaddingTypeTablet ? `${ attributes.tabPaddingTablet }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingTopTablet}${ attributes.tabPaddingUnit }`,
      tabPaddingbottom: 'linked' === attributes.tabPaddingTypeTablet ? `${ attributes.tabPaddingTablet }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingBottomTablet}${ attributes.tabPaddingUnit }`,
      tabPaddingright: 'linked' === attributes.tabPaddingTypeTablet ? `${ attributes.tabPaddingTablet }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingRightTablet}${ attributes.tabPaddingUnit }`,
      tabPaddingleft: 'linked' === attributes.tabPaddingTypeTablet ? `${ attributes.tabPaddingTablet }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingLeftTablet}${ attributes.tabPaddingUnit }`,
      
      tabMargintop : 'linked' === attributes.tabMarginTypeTablet ? `${ attributes.tabMarginTablet }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginTopTablet}${ attributes.tabMarginUnit }`,
      tabMarginbottom: 'linked' === attributes.tabMarginTypeTablet ? `${ attributes.tabMarginTablet }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginBottomTablet}${ attributes.tabMarginUnit }`,
      tabMarginright: 'linked' === attributes.tabMarginTypeTablet ? `${ attributes.tabMarginTablet }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginRightTablet}${ attributes.tabMarginUnit }`,
      tabMarginleft: 'linked' === attributes.tabMarginTypeTablet ? `${ attributes.tabMarginTablet }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginLeftTablet}${ attributes.tabMarginUnit }`,
      
      tabBorderWidthtop : 'linked' === attributes.tabBorderWidthTypeTablet ? `${ attributes.tabBorderWidthTablet }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthTopTablet}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthbottom: 'linked' === attributes.tabBorderWidthTypeTablet ? `${ attributes.tabBorderWidthTablet }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthBottomTablet}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthright: 'linked' === attributes.tabBorderWidthTypeTablet ? `${ attributes.tabBorderWidthTablet }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthRightTablet}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthleft: 'linked' === attributes.tabBorderWidthTypeTablet ? `${ attributes.tabBorderWidthTablet }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthLeftTablet}${ attributes.tabBorderWidthUnit }`,

      tabfontSize: attributes.tabfontSizeTablet + attributes.tabfontSizeUnit,
      tablineHeight: attributes.tablineHeightTablet + attributes.tablineHeightUnit,
      tabletterSpacing: attributes.tabletterSpacingTablet + attributes.tabletterSpacingUnit,

      tabBorderRadiustop : 'linked' === attributes.tabBorderRadiusTypeTablet ? `${ attributes.tabBorderRadiusTablet }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusTopTablet}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusbottom: 'linked' === attributes.tabBorderRadiusTypeTablet ? `${ attributes.tabBorderRadiusTablet }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusBottomTablet}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusright: 'linked' === attributes.tabBorderRadiusTypeTablet ? `${ attributes.tabBorderRadiusTablet }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusRightTablet}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusleft: 'linked' === attributes.tabBorderRadiusTypeTablet ? `${ attributes.tabBorderRadiusTablet }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusLeftTablet}${ attributes.tabBorderRadiusUnit }`,
      
      paddingTop: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingTopTablet }${ attributes.paddingUnit }`,
      paddingRight: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingRightTablet }${ attributes.paddingUnit }`,
      paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingBottomTablet }${ attributes.paddingUnit }`,
      paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }${ attributes.paddingUnit }` : `${ attributes.paddingLeftTablet }${ attributes.paddingUnit }`,
    
      marginTop: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginTopTablet }${ attributes.marginUnit }`,
      marginBottom: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginBottomTablet }${ attributes.marginUnit }`,
      marginRight: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginRightTablet }${ attributes.marginUnit }`,
      marginLeft: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }${ attributes.marginUnit }` : `${ attributes.marginLeftTablet }${ attributes.marginUnit }`,   
      
     
      
      zindex: attributes.zindexTablet,
    
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
    
      tabPaddingtop : 'linked' === attributes.tabPaddingTypeMobile ? `${ attributes.tabPaddingMobile }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingTopMobile}${ attributes.tabPaddingUnit }`,
      tabPaddingbottom: 'linked' === attributes.tabPaddingTypeMobile ? `${ attributes.tabPaddingMobile }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingBottomMobile}${ attributes.tabPaddingUnit }`,
      tabPaddingright: 'linked' === attributes.tabPaddingTypeMobile ? `${ attributes.tabPaddingMobile }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingRightMobile}${ attributes.tabPaddingUnit }`,
      tabPaddingleft: 'linked' === attributes.tabPaddingTypeMobile ? `${ attributes.tabPaddingMobile }${ attributes.tabPaddingUnit }` : `${ attributes.tabPaddingLeftMobile}${ attributes.tabPaddingUnit }`,
      
      tabMargintop : 'linked' === attributes.tabMarginTypeMobile ? `${ attributes.tabMarginMobile }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginTopMobile}${ attributes.tabMarginUnit }`,
      tabMarginbottom: 'linked' === attributes.tabMarginTypeMobile ? `${ attributes.tabMarginMobile }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginBottomMobile}${ attributes.tabMarginUnit }`,
      tabMarginright: 'linked' === attributes.tabMarginTypeMobile ? `${ attributes.tabMarginMobile }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginRightMobile}${ attributes.tabMarginUnit }`,
      tabMarginleft: 'linked' === attributes.tabMarginTypeMobile ? `${ attributes.tabMarginMobile }${ attributes.tabMarginUnit }` : `${ attributes.tabMarginLeftMobile}${ attributes.tabMarginUnit }`,
      
      tabBorderWidthtop : 'linked' === attributes.tabBorderWidthTypeMobile ? `${ attributes.tabBorderWidthMobile }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthTopMobile}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthbottom: 'linked' === attributes.tabBorderWidthTypeMobile ? `${ attributes.tabBorderWidthMobile }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthBottomMobile}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthright: 'linked' === attributes.tabBorderWidthTypeMobile ? `${ attributes.tabBorderWidthMobile }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthRightMobile}${ attributes.tabBorderWidthUnit }`,
      tabBorderWidthleft: 'linked' === attributes.tabBorderWidthTypeMobile ? `${ attributes.tabBorderWidthMobile }${ attributes.tabBorderWidthUnit }` : `${ attributes.tabBorderWidthLeftMobile}${ attributes.tabBorderWidthUnit }`,

      tabfontSize: attributes.tabfontSizeMobile + attributes.tabfontSizeUnit,
      tablineHeight: attributes.tablineHeightMobile + attributes.tablineHeightUnit,
      tabletterSpacing: attributes.tabletterSpacingMobile + attributes.tabletterSpacingUnit,
      
      tabBorderRadiustop : 'linked' === attributes.tabBorderRadiusTypeMobile ? `${ attributes.tabBorderRadiusMobile }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusTopMobile}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusbottom: 'linked' === attributes.tabBorderRadiusTypeMobile ? `${ attributes.tabBorderRadiusMobile }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusBottomMobile}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusright: 'linked' === attributes.tabBorderRadiusTypeMobile ? `${ attributes.tabBorderRadiusMobile }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusRightMobile}${ attributes.tabBorderRadiusUnit }`,
      tabBorderRadiusleft: 'linked' === attributes.tabBorderRadiusTypeMobile ? `${ attributes.tabBorderRadiusMobile }${ attributes.tabBorderRadiusUnit }` : `${ attributes.tabBorderRadiusLeftMobile}${ attributes.tabBorderRadiusUnit }`,

      paddingTop: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingTopMobile }${ attributes.paddingUnit }`,
      paddingRight: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingRightMobile }${ attributes.paddingUnit }`,
      paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingBottomMobile }${ attributes.paddingUnit }`,
      paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }${ attributes.paddingUnit }` : `${ attributes.paddingLeftMobile }${ attributes.paddingUnit }`,
      
      marginTop: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginTopMobile }${ attributes.marginUnit }`,
      marginBottom: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginBottomMobile }${ attributes.marginUnit }`,
      marginRight: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginRightMobile }${ attributes.marginUnit }`,
      marginLeft: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }${ attributes.marginUnit }` : `${ attributes.marginLeftMobile }${ attributes.marginUnit }`,   
      
    
      
      zindex: attributes.zindexMobile,
    
    }

  };
  const deviceType = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
  // googlefontload
  useEffect( () => {
		if ( attributes.titlefontFamily ) {
			googleFontsLoader.loadFontToBrowser( attributes.titlefontFamily, attributes.titlefontVariant );
		  googleFontsLoader.loadFontToBrowser( attributes.catfontFamily, attributes.catfontVariant );
      googleFontsLoader.loadFontToBrowser( attributes.pricefontFamily, attributes.pricefontVariant );
      googleFontsLoader.loadFontToBrowser( attributes.buttonfontFamily, attributes.buttonfontVariant );
      googleFontsLoader.loadFontToBrowser( attributes.tabfontFamily, attributes.tabfontVariant );
    }
	}, [ attributes.titlefontFamily, attributes.catfontFamily, attributes.pricefontFamily, attributes.buttonfontFamily, attributes.tabfontFamily ]);


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
  
  const TabPaddingTop = deviceAttributeMap[deviceType].tabPaddingtop;
  const TabPaddingBottom = deviceAttributeMap[deviceType].tabPaddingbottom;
  const TabPaddingRight = deviceAttributeMap[deviceType].tabPaddingright;
  const TabPaddingLeft = deviceAttributeMap[deviceType].tabPaddingleft;

  const TabMarginTop = deviceAttributeMap[deviceType].tabMargintop;
  const TabMarginBottom = deviceAttributeMap[deviceType].tabMarginbottom;
  const TabMarginRight = deviceAttributeMap[deviceType].tabMarginright;
  const TabMarginLeft = deviceAttributeMap[deviceType].tabMarginleft;

  const TabFontSize = deviceAttributeMap[deviceType].tabfontSize;
  const TabLineHeight = deviceAttributeMap[deviceType].tablineHeight;
  const TabLetterSpacing = deviceAttributeMap[deviceType].tabletterSpacing;

  const TabBorderWidthTop = deviceAttributeMap[deviceType].tabBorderWidthtop;
  const TabBorderWidthBottom = deviceAttributeMap[deviceType].tabBorderWidthbottom;
  const TabBorderWidthRight = deviceAttributeMap[deviceType].tabBorderWidthright;
  const TabBorderWidthLeft = deviceAttributeMap[deviceType].tabBorderWidthleft;

  const TabBorderRadiusTop = deviceAttributeMap[deviceType].tabBorderRadiustop;
  const TabBorderRadiusBottom = deviceAttributeMap[deviceType].tabBorderRadiusbottom;
  const TabBorderRadiusRight = deviceAttributeMap[deviceType].tabBorderRadiusright;
  const TabBorderRadiusLeft = deviceAttributeMap[deviceType].tabBorderRadiusleft;

  const PaddingTop    = deviceAttributeMap[deviceType].paddingTop;
  const PaddingBottom = deviceAttributeMap[deviceType].paddingBottom;
  const PaddingRight  = deviceAttributeMap[deviceType].paddingRight;
  const PaddingLeft   = deviceAttributeMap[deviceType].paddingLeft;

  const MarginTop     = deviceAttributeMap[deviceType].marginTop;
  const MarginBottom  = deviceAttributeMap[deviceType].marginBottom;
  const MarginRight   = deviceAttributeMap[deviceType].marginRight;
  const MarginLeft    = deviceAttributeMap[deviceType].marginLeft;

  const Zindex   = deviceAttributeMap[deviceType].zindex;

  let boxShadowStyle;
 

  if ( attributes.boxShadow ) {
    boxShadowStyle = {
      '--boxShadow': `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${ hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#fff' ), attributes.boxShadowColorOpacity ) }`
    };
  }
  if ( attributes.boxShadowHvr ) {
    boxShadowStyle = {...boxShadowStyle,
      '--boxShadow-hvr': `${ attributes.boxShadowHorizontalHvr }px ${ attributes.boxShadowVerticalHvr }px ${ attributes.boxShadowBlurHvr }px ${ attributes.boxShadowSpreadHvr }px ${ hexToRgba( ( attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff' ), attributes.boxShadowColorOpacityHvr ) }`
    };
  }

  let backgroundStyle;

  if ('color' === attributes.backgroundType) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background': attributes.backgroundColor,
    };
    }
    
    if ('color' === attributes.backgroundTypeHvr) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background-hover': attributes.backgroundColorHvr,
    };
    }
    
    if ('image' === attributes.backgroundType) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background': attributes.backgroundImage?.url ? `url('${attributes.backgroundImage.url}')` : 'none',
      '--background-attachment': attributes.backgroundAttachment,
      '--background-position': `${Math.round(attributes.backgroundPosition?.x * 100)}% ${Math.round(attributes.backgroundPosition?.y * 100)}%`,
      '--background-repeat': attributes.backgroundRepeat,
      '--background-size': attributes.backgroundSize,
    };
    }
    
    if ('image' === attributes.backgroundTypeHvr) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background-hover': attributes.backgroundImageHvr?.url ? `url('${attributes.backgroundImageHvr.url}')` : 'none',
      '--background-attachment-hvr': attributes.backgroundAttachmentHvr,
      '--background-position-hvr': `${Math.round(attributes.backgroundPositionHvr?.x * 100)}% ${Math.round(attributes.backgroundPositionHvr?.y * 100)}%`,
      '--background-repeat-hvr': attributes.backgroundRepeatHvr,
      '--background-size-hvr': attributes.backgroundSizeHvr,
    };
    }
    
    if ('gradient' === attributes.backgroundType) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background': attributes.backgroundGradient,
    };
    }
    
    if ('gradient' === attributes.backgroundTypeHvr) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background-hover': attributes.backgroundGradientHvr,
    };
    }

    let customwidth;

    if( attributes.widthType=='customwidth' ) {

		if ( isDesktop ) {

		customwidth = {
             
			'--custom-width':attributes.customWidth + attributes.customWidthUnit,
			'--custom-max-width':attributes.customWidth + attributes.customWidthUnit,
			
		};

	   }

	   if ( isTablet ) {

		customwidth = {
             
			'--custom-width':attributes.customWidthTablet + attributes.customWidthUnit,
			'--custom-max-width':attributes.customWidthTablet + attributes.customWidthUnit,
			
		};

	   }

	   if ( isMobile ) {

		customwidth = {
             
			'--custom-width':attributes.customWidthMobile + attributes.customWidthUnit,
			'--custom-max-width':attributes.customWidthMobile + attributes.customWidthUnit,
			
		};
		
	   }

	}

	if( attributes.widthType =='fullwidth' ) {

		customwidth = {
             
			'--custom-width':'100%',
      '--custom-max-width':'100%'
			
		};

	}

    if( attributes.widthType =='inlinewidth' ) {

		customwidth = {
             
	    '--display':'inline-flex',
			
		};

	}
  ProductStyles = {
    ...boxShadowStyle,
    ...backgroundStyle,
    ...customwidth,
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
    '--tab-padding-top':TabPaddingTop,
    '--tab-padding-bottom':TabPaddingBottom,
    '--tab-padding-right':TabPaddingRight,
    '--tab-padding-left':TabPaddingLeft,
    '--tab-margin-top':TabMarginTop,
    '--tab-margin-bottom':TabMarginBottom,
    '--tab-margin-right':TabMarginRight,
    '--tab-margin-left':TabMarginLeft,

    '--tab-font-family':attributes.tabfontFamily,
    '--tab-font-variant':attributes.tabfontVariant,
    '--tab-font-style':attributes.tabfontStyle,
    '--tab-font-transform':attributes.tabtextTransform,
    '--tab-font-size':TabFontSize,
    '--tab-line-height':TabLineHeight,
    '--tab-letter-spacing':TabLetterSpacing,
    '--tab-color':attributes.tabColor,
    '--tab-bg-color':attributes.tabBgColor,
    '--tab-hvr-color':attributes.tabColorHvr,
    '--tab-bg-hvr-color':attributes.tabBgColorHvr,

    '--tab-border-width-top':TabBorderWidthTop,
    '--tab-border-width-bottom':TabBorderWidthBottom,
    '--tab-border-width-right':TabBorderWidthRight,
    '--tab-border-width-left':TabBorderWidthLeft,
    '--tab-border-radius-top':TabBorderRadiusTop,
    '--tab-border-radius-bottom':TabBorderRadiusBottom,
    '--tab-border-radius-right':TabBorderRadiusRight,
    '--tab-border-radius-left':TabBorderRadiusLeft,

    '--tab-border-width-style':attributes.tabborderType,
    '--tab-border-color':attributes.tabBorderColor,
    '--tab-border-color-hvr':attributes.tabBorderColorHvr,

    '--padding-top':PaddingTop,
    '--padding-bottom':PaddingBottom,
    '--padding-right':PaddingRight,
    '--padding-left':PaddingLeft,

    '--margin-top':MarginTop,
    '--margin-bottom':MarginBottom,
    '--margin-right':MarginRight,
    '--margin-left':MarginLeft,
    '--z-index':Zindex,
    '--transition': attributes.transitionAll + 's',
    
  }
  
  let overlayBackground;
  const showShouldOverlay = ( 'color' === attributes.overlaybackgroundType && attributes.overlaybackgroundColor ) 
			|| ( 'gradient' === attributes.overlaybackgroundType && attributes.overlaybackgroundGradient ) 
			|| ( 'color' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundColorHvr )
            || ( 'gradien' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundGradientHvr )
			|| ( 'image' === attributes.overlaybackgroundType && attributes.overlaybackgroundImage )
            || ( 'image' === attributes.overlaybackgroundTypeHvr && attributes.overlaybackgroundImageHvr )
      if ( 'color' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					'--background-overlay': attributes.overlaybackgroundColor,
				    
				};
			}
			if ( 'color' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-hvr': attributes.overlaybackgroundColorHvr,
				    
				};
			}

			if ( 'gradient' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay': attributes.overlaybackgroundGradient,
				   
				};
			}

			if ( 'gradient' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-hvr': attributes.overlaybackgroundGradientHvr,
				  
				};
			}

            if ( 'image' === attributes.overlaybackgroundType ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay': `url( '${ attributes.overlaybackgroundImage?.url }' )`,
					'--background-overlay-attachment': attributes.overlaybackgroundAttachment,
					'--background-overlay-position': `${ Math.round( attributes.overlaybackgroundPosition?.x * 100 ) }% ${ Math.round( attributes.backgroundPosition?.y * 100 ) }%`,
					'--background-overlay-repeat': attributes.overlaybackgroundRepeat,
					'--background-overlay-size': attributes.overlaybackgroundSize,
				    
				};
			}

			if ( 'image' === attributes.overlaybackgroundTypeHvr ) {
				overlayBackground = {
					...overlayBackground,
					'--background-overlay-hvr': `url( '${ attributes.overlaybackgroundImageHvr?.url }' )`,
					'--background-overlay-attachment-hvr': attributes.overlaybackgroundAttachmentHvr,
					'--background-overlay-position-hvr': `${ Math.round( attributes.overlaybackgroundPositionHvr?.x * 100 ) }% ${ Math.round( attributes.backgroundPositionHvr?.y * 100 ) }%`,
					'--background-overlay-repeat-hvr': attributes.overlaybackgroundRepeatHvr,
					'--background-overlay-size-hvr': attributes.overlaybackgroundSizeHvr,
				    
				};
			}

	

	const overlayStyle = {
				...overlayBackground,
	};

  let containerClasses = classnames({
				
    "th-hide-desktop": attributes.responsiveTogHideDesktop,
    "th-hide-tablet": attributes.responsiveTogHideTablet,
    "th-hide-mobile": attributes.responsiveTogHideMobile,

    });

  const style = omitBy({
    ...ColStyles,
    ...ProductStyles,
  }, x => x?.includes?.( 'undefined' ));

  const blockProps = useBlockProps({
    id:attributes.id,
    className:containerClasses,
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
    {showShouldOverlay && (
							<div
								className="wp-block-th-blocks-overlay"
								style={overlayStyle}
							/>
		)}
        <>
        {attributes.showTab && (
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
        )}
          <div className="th-product-block-product-content">
            <div className="th-product-block-product-item-wrap">
             {isLoading && (
              <div className="th-block-loader">Loading...</div>
             )}

             {noproduct && (
              <p>No Product</p>
             )}


            
                {products.map((product) => (
                <div className="th-product-item" key={product.id}>
                  <div className="th-product-block-content-wrap">
                  {attributes.template.map((element) => {
                      switch (element) {
                        case 'image':
                          return (
                            attributes.displayFeaturedImage && (
                            <div className="th-product-image">
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
                                  {__( '%', 'vayu-blocks' )}
                                </span>
                              )}
                              </div>
                              }
                              <img src={product.images[0].thumbnail} alt={product.name} />
                              <div className="th-product-meta">
                                {attributes.showWishlist == true &&
                                  <div className="th-icons th-wishlist-button">
                                 <IoIosHeartEmpty></IoIosHeartEmpty>
                                 </div>
                                }
                                 {attributes.showCompare == true &&
                                 <div className="th-icons th-compare-button">
                                 <IoMdRepeat></IoMdRepeat>
                                 </div>
                                }
                                 {/* {attributes.showView == true &&
                                 <div className="th-icon th-quickview-button">
                                 <IoIosExpand></IoIosExpand>
                                 </div>
                                } */}
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
                               {attributes.hideRating === true && product.average_rating !== '0' && ( 
                                  <RatingStars
                                    rating={parseFloat(product.average_rating)}
                                    maxRating={5}
                                    filledColor={attributes.ratingColor || 'gold'}
                                    emptyColor={attributes.emptyratingColor}
                                  />
                                  )}
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
            {attributes.showNavs && !noproduct && (
  <div className="th-pagination">
    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
      <span className="dashicons dashicons-arrow-left-alt2"></span>
    </button>
    <button disabled={!hasNextPage} onClick={() => setCurrentPage(currentPage + 1)}>
      <span className="dashicons dashicons-arrow-right-alt2"></span>
    </button>
  </div>
)}

          </div>
        </>
        
    </div>
    </div> 
    </Fragment>
  );
}