/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/backup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/backup.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const backup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (backup);
//# sourceMappingURL=backup.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


const arrayMoveMutate = (array, from, to) => {
	const startIndex = from < 0 ? array.length + from : from;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = to < 0 ? array.length + to : to;

		const [item] = array.splice(from, 1);
		array.splice(endIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;


/***/ }),

/***/ "./inc/block/advance-product/edit.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-product/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hex-rgba */ "./node_modules/hex-rgba/index.js");
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hex_rgba__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.js */ "./inc/block/advance-product/settings.js");
/* harmony import */ var _src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/helpers/get-unique-id.js */ "./src/helpers/get-unique-id.js");
/* harmony import */ var _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/helpers/google-fonts.js */ "./src/helpers/google-fonts.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./inc/block/advance-product/editor.scss");

/**
 * WordPress dependencies.
 */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */








/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Internal dependencies
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


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

function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    toggleSelection,
    clientId,
    uniqueID
  } = _ref;
  const {
    id
  } = attributes;
  if (!id) {
    setAttributes({
      id: clientId
    });
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].attach();
  }, [attributes.id]);
  const {
    addUniqueID
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('themehunk-blocks/data');
  const {
    isUniqueID,
    isUniqueBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return {
      isUniqueID: value => select('themehunk-blocks/data').isUniqueID(value),
      isUniqueBlock: (value, clientId) => select('themehunk-blocks/data').isUniqueBlock(value, clientId)
    };
  }, [clientId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const uniqueId = (0,_src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_9__["default"])(uniqueID, clientId, isUniqueID, isUniqueBlock);
    if (uniqueId !== uniqueID) {
      attributes.uniqueID = uniqueId;
      setAttributes({
        uniqueID: uniqueId
      });
      addUniqueID(uniqueId, clientId);
    } else {
      addUniqueID(uniqueId, clientId);
    }
  }, []);
  const {
    isViewportAvailable,
    isPreviewDesktop,
    isPreviewTablet,
    isPreviewMobile
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return {
      isViewportAvailable: __experimentalGetPreviewDeviceType ? true : false,
      isPreviewDesktop: __experimentalGetPreviewDeviceType ? 'Desktop' === __experimentalGetPreviewDeviceType() : false,
      isPreviewTablet: __experimentalGetPreviewDeviceType ? 'Tablet' === __experimentalGetPreviewDeviceType() : false,
      isPreviewMobile: __experimentalGetPreviewDeviceType ? 'Mobile' === __experimentalGetPreviewDeviceType() : false
    };
  }, []);
  const isLarger = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('large', '>=');
  const isLarge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('large', '<=');
  const isSmall = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('small', '>=');
  const isSmaller = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('small', '<=');
  let isDesktop = isLarger && !isLarge && isSmall && !isSmaller;
  let isTablet = !isLarger && !isLarge && isSmall && !isSmaller;
  let isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;
  if (isViewportAvailable && !isMobile) {
    isDesktop = isPreviewDesktop;
    isTablet = isPreviewTablet;
    isMobile = isPreviewMobile;
  }
  let ColStyles;
  let productsPerPage;
  if (isDesktop) {
    productsPerPage = attributes.productShow || 4;
    ColStyles = {
      '--grid-col': attributes.productCol || '4'
    };
  }
  if (isTablet) {
    productsPerPage = attributes.productShowTablet || 4;
    ColStyles = {
      '--grid-col': attributes.productColTablet || '4'
    };
  }
  if (isMobile) {
    productsPerPage = attributes.productShowMobile || 4;
    ColStyles = {
      '--grid-col': attributes.productColMobile || '4'
    };
  }
  const [selectedCategory, setSelectedCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [products, setProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const homeUrl = ThBlockData.homeUrl;
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [hasNextPage, setHasNextPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
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
      const selectedManualProduct = attributes.manualProduct.map(maualP => maualP.value);
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
    const selectedExcludeProduct = attributes.excludeProduct.map(excldeP => excldeP.value);
    excludeProductParam = `&exclude=${selectedExcludeProduct.join(',')}`;
  }

  //stock status
  let stockParam = '';
  if (attributes.stockStatus && attributes.stockStatus.length > 0) {
    stockParam = `&stockstatus=['${attributes.stockStatus}']`;
  }

  // useEffect hook to fetch products based on selected category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedCategory) {
      setIsLoading(true);
      // Fetch products based on selected category
      fetch(`${homeUrl}/wp-json/wc/store/v1/products?category=${selectedCategory}&page=${currentPage}&per_page=${productsPerPage}${prdType}${prdOrderBy}${prdOrder}${excludeProductParam}${stockParam}`).then(response => response.json()).then(data => {
        setProducts(data);
        setIsLoading(false);
        setHasNextPage(data.length === productsPerPage);
      }).catch(error => {
        console.error('Error fetching products:', error);
      });
    } else {
      setIsLoading(true);
      // Fetch all products if no category is selected
      let categoryParam = "";
      if (attributes.productCategories && attributes.productCategories.length > 0) {
        const selectedCategories = attributes.productCategories.map(category => category.value);
        categoryParam = `&category=${selectedCategories.join(',')}`;
      }
      fetch(`${homeUrl}/wp-json/wc/store/v1/products?page=${currentPage}&per_page=${productsPerPage}${categoryParam}${prdType}${prdOrderBy}${prdOrder}${excludeProductParam}${stockParam}`).then(response => response.json()).then(data => {
        setProducts(data);
        setIsLoading(false);
        setHasNextPage(data.length === productsPerPage);
      }).catch(error => {
        console.error('Error fetching products:', error);
      });
    }
  }, [selectedCategory, currentPage, productsPerPage, attributes.productCategories, prdType, prdOrderBy, prdOrder, excludeProductParam, stockParam]);

  // Event handler for tab click
  const handleTabClick = categoryId => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Show star rating
  const RatingStars = _ref2 => {
    let {
      rating,
      maxRating = 5,
      filledColor = 'gold',
      emptyColor = 'lightgray'
    } = _ref2;
    const starCount = Math.min(Math.floor(rating), maxRating);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, Array(maxRating).fill().map((_, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      key: index,
      style: {
        color: index < starCount ? filledColor : emptyColor
      }
    }, "\u2605")));
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
      buttonBordertop: 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTop}${attributes.buttonborderWidthUnit}`,
      buttonBorderbottom: 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottom}${attributes.buttonborderWidthUnit}`,
      buttonBorderright: 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRight}${attributes.buttonborderWidthUnit}`,
      buttonBorderleft: 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeft}${attributes.buttonborderWidthUnit}`,
      buttonSpacetop: 'linked' === attributes.buttonSpaceType ? `${attributes.buttonSpace}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceTop}${attributes.buttonSpaceUnit}`,
      buttonSpacebottom: 'linked' === attributes.buttonSpaceType ? `${attributes.buttonSpace}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceBottom}${attributes.buttonSpaceUnit}`,
      buttonSpaceright: 'linked' === attributes.buttonSpaceType ? `${attributes.buttonSpace}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceRight}${attributes.buttonSpaceUnit}`,
      buttonSpaceleft: 'linked' === attributes.buttonSpaceType ? `${attributes.buttonSpace}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceLeft}${attributes.buttonSpaceUnit}`
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
      buttonBordertop: 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTopTablet}${attributes.buttonborderWidthUnit}`,
      buttonBorderbottom: 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottomTablet}${attributes.buttonborderWidthUnit}`,
      buttonBorderright: 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRightTablet}${attributes.buttonborderWidthUnit}`,
      buttonBorderleft: 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeftTablet}${attributes.buttonborderWidthUnit}`,
      buttonSpacetop: 'linked' === attributes.buttonSpaceTypeTablet ? `${attributes.buttonSpaceTablet}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceTopTablet}${attributes.buttonSpaceUnit}`,
      buttonSpacebottom: 'linked' === attributes.buttonSpaceTypeTablet ? `${attributes.buttonSpaceTablet}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceBottomTablet}${attributes.buttonSpaceUnit}`,
      buttonSpaceright: 'linked' === attributes.buttonSpaceTypeTablet ? `${attributes.buttonSpaceTablet}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceRightTablet}${attributes.buttonSpaceUnit}`,
      buttonSpaceleft: 'linked' === attributes.buttonSpaceTypeTablet ? `${attributes.buttonSpaceTablet}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceLeftTablet}${attributes.buttonSpaceUnit}`
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
      buttonBordertop: 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTopMobile}${attributes.buttonborderWidthUnit}`,
      buttonBorderbottom: 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottomMobile}${attributes.buttonborderWidthUnit}`,
      buttonBorderright: 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRightMobile}${attributes.buttonborderWidthUnit}`,
      buttonBorderleft: 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeftMobile}${attributes.buttonborderWidthUnit}`,
      buttonSpacetop: 'linked' === attributes.buttonSpaceTypeMobile ? `${attributes.buttonSpaceMobile}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceTopMobile}${attributes.buttonSpaceUnit}`,
      buttonSpacebottom: 'linked' === attributes.buttonSpaceTypeMobile ? `${attributes.buttonSpaceMobile}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceBottomMobile}${attributes.buttonSpaceUnit}`,
      buttonSpaceright: 'linked' === attributes.buttonSpaceTypeMobile ? `${attributes.buttonSpaceMobile}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceRightMobile}${attributes.buttonSpaceUnit}`,
      buttonSpaceleft: 'linked' === attributes.buttonSpaceTypeMobile ? `${attributes.buttonSpaceMobile}${attributes.buttonSpaceUnit}` : `${attributes.buttonSpaceLeftMobile}${attributes.buttonSpaceUnit}`
    }
  };
  const deviceType = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
  // googlefontload
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (attributes.titlefontFamily) {
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].loadFontToBrowser(attributes.titlefontFamily, attributes.titlefontVariant);
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].loadFontToBrowser(attributes.catfontFamily, attributes.catfontVariant);
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].loadFontToBrowser(attributes.pricefontFamily, attributes.pricefontVariant);
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].loadFontToBrowser(attributes.buttonfontFamily, attributes.buttonfontVariant);
    }
  }, [attributes.titlefontFamily, attributes.catfontFamily, attributes.pricefontFamily, attributes.buttonfontFamily]);

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
  ProductStyles = {
    '--title-color': attributes.productTitleColor,
    '--title-color-hvr': attributes.productTitleColorHvr,
    '--title-font-family': attributes.titlefontFamily,
    '--title-font-variant': attributes.titlefontVariant,
    '--title-font-style': attributes.titlefontStyle,
    '--title-font-transform': attributes.titletextTransform,
    '--title-font-size': TitleFontSize,
    '--title-line-height': TitleLineHeight,
    '--title-letter-spacing': TitleLetterSpacing,
    '--cat-color': attributes.catTxtColor,
    '--cat-color-hvr': attributes.catTxtColorHvr,
    '--cat-font-family': attributes.catfontFamily,
    '--cat-font-variant': attributes.catfontVariant,
    '--cat-font-style': attributes.catfontStyle,
    '--cat-font-transform': attributes.cattextTransform,
    '--cat-font-size': CatFontSize,
    '--cat-line-height': CatLineHeight,
    '--cat-letter-spacing': CatLetterSpacing,
    '--price-color': attributes.priceColor,
    '--price-color-del': attributes.priceDelColor,
    '--price-font-family': attributes.pricefontFamily,
    '--price-font-variant': attributes.pricefontVariant,
    '--price-font-style': attributes.pricefontStyle,
    '--price-font-transform': attributes.pricetextTransform,
    '--price-font-size': PriceFontSize,
    '--price-line-height': PriceLineHeight,
    '--price-letter-spacing': PriceLetterSpacing,
    '--rating-font-size': RatingFontSize,
    '--rating-line-height': RatingLineHeight,
    '--rating-letter-spacing': RatingLetterSpacing,
    '--button-font-family': attributes.buttonfontFamily,
    '--button-font-variant': attributes.buttonfontVariant,
    '--button-font-style': attributes.buttonfontStyle,
    '--button-font-transform': attributes.buttontextTransform,
    '--button-font-size': ButtonFontSize,
    '--button-line-height': ButtonLineHeight,
    '--button-letter-spacing': ButtonLetterSpacing,
    '--button-color': attributes.buttonTxtClr,
    '--button-bg-color': attributes.buttonBgClr,
    '--button-border-color': attributes.buttonBrdrClr,
    '--button-hvr-color': attributes.buttonTxtClrHvr,
    '--button-bg-hvr-color': attributes.buttonBgClrHvr,
    '--button-border-hvr-color': attributes.buttonBrdrClrHvr,
    '--button-border-type': attributes.buttonBrdrType,
    '--button-border-width-top': ButtonBorderTop,
    '--button-border-width-bottom': ButtonBorderBottom,
    '--button-border-width-right': ButtonBorderRight,
    '--button-border-width-left': ButtonBorderLeft,
    '--button-padding-top': ButtonSpaceTop,
    '--button-padding-bottom': ButtonSpaceBottom,
    '--button-padding-right': ButtonSpaceRight,
    '--button-padding-left': ButtonSpaceLeft
  };
  const style = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.omitBy)({
    ...ColStyles,
    ...ProductStyles
  }, x => {
    var _x$includes;
    return x === null || x === void 0 ? void 0 : (_x$includes = x.includes) === null || _x$includes === void 0 ? void 0 : _x$includes.call(x, 'undefined');
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)({
    id: attributes.id,
    style
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-block-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-block-cat-filter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "category-tabs"
  }, attributes.productCategories.map(category => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: category.value,
    className: selectedCategory === category.value ? 'active' : '',
    onClick: () => handleTabClick(category.value)
  }, category.label)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-block-product-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-block-product-item-wrap"
  }, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-block-loader"
  }, "Loading..."), products.map(product => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-item",
    key: product.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-product-block-content-wrap"
  }, attributes.template.map(element => {
    switch (element) {
      case 'image':
        return attributes.displayFeaturedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-imgae"
        }, product.on_sale && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "sale-tag"
        }, "Sale"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-sale"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: product.images[0].thumbnail,
          alt: product.name
        }));
      case 'category':
        return attributes.displayCategory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-cat"
        }, product.categories.map(category => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          key: category.id,
          href: category.link
        }, category.name)));
      case 'title':
        return attributes.displayTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TitleTag, {
          className: "th-product-title"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          key: product.id,
          href: product.permalink
        }, product.name));
      case 'price':
        return attributes.displayPrice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-price",
          dangerouslySetInnerHTML: {
            __html: product.price_html
          }
        });
      case 'rating':
        return attributes.displayRating && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-rating"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RatingStars, {
          rating: parseFloat(product.average_rating),
          maxRating: 5,
          filledColor: attributes.ratingColor,
          emptyColor: attributes.emptyratingColor
        }));
      case 'button':
        return attributes.displayButton && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "th-product-btn"
        }, product.add_to_cart.text);
      default:
        return null;
    }
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-pagination"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: currentPage === 1,
    onClick: () => setCurrentPage(currentPage - 1)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-arrow-left-alt2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: !hasNextPage,
    onClick: () => setCurrentPage(currentPage + 1)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-arrow-right-alt2"
  }))))))));
}

/***/ }),

/***/ "./inc/block/advance-product/index.js":
/*!********************************************!*\
  !*** ./inc/block/advance-product/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./inc/block/advance-product/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./inc/block/advance-product/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./inc/block/advance-product/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./inc/block/advance-product/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Product', 'themehunk-block'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AdvancedButton gives a spin to editor\'s Button block with much needed customization options. Powered by themehunk.', 'themehunk-block'),
  keywords: ['heading', 'title', 'advance product'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A product with more customization options', 'themehunk-block')
    }
  }
});

/***/ }),

/***/ "./inc/block/advance-product/save.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-product/save.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function Save() {
  return;
}

/***/ }),

/***/ "./inc/block/advance-product/settings.js":
/*!***********************************************!*\
  !*** ./inc/block/advance-product/settings.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _src_components_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/index.js */ "./src/components/index.js");
/* harmony import */ var _sortable_layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sortable-layout-.js */ "./inc/block/advance-product/sortable-layout-.js");

/**
 * WordPress dependencies.
 */






/**
* Internal dependencies
*/



const InsSettings = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getView
    } = select('themehunk-blocks/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('setting');
  const homeUrl = ThBlockData.homeUrl;
  const [SelectCategories, setSelectCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [SelectProduct, setSelectProduct] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // fetch category
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch product categories
    fetch(`${homeUrl}/wp-json/wc/store/v1/products/categories`).then(response => response.json()).then(data => {
      // Map through the data and convert it to the expected format
      const mappedCategories = data.map(category => ({
        value: category.id,
        label: category.name
      }));
      setSelectCategories(mappedCategories);
    }).catch(error => {
      console.error('Error fetching categories:', error);
    });
  }, []);

  //fetch product
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch product categories
    fetch(`${homeUrl}/wp-json/wc/store/v1/products`).then(response => response.json()).then(data => {
      // Map through the data and convert it to the expected format
      const mappedProduct = data.map(product => ({
        value: product.id,
        label: product.name
      }));
      setSelectProduct(mappedProduct);
    }).catch(error => {
      console.error('Error fetching categories:', error);
    });
  }, []);

  //show product per page
  const getProductShow = () => {
    switch (getView) {
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
    if ('Desktop' === getView) {
      setAttributes({
        productShow: value,
        productShowTablet: value,
        productShowMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        productShowTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        productShowMobile: value
      });
    }
  };
  //show product per page
  const getCol = () => {
    switch (getView) {
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
    if ('Desktop' === getView) {
      setAttributes({
        productCol: value,
        productColTablet: value,
        productColMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        productColTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        productColMobile: value
      });
    }
  };

  // stock status
  const stockstatus = [{
    value: 'instock',
    label: 'In Stock'
  }, {
    value: 'outofstock',
    label: 'Out of Stock'
  }, {
    value: 'onbackorder',
    label: 'On Backorder'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.InsSettingHeader, {
    value: tab,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Setting', 'themehunk-block'),
      value: 'setting'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'themehunk-block'),
      value: 'advanced'
    }],
    onChange: setTab
  }), 'setting' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'themehunk-block'),
    className: "th-adv-product-panel",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: attributes.productCategories,
    id: "th-cat-select",
    options: SelectCategories,
    isMulti: true,
    isClearable: true,
    maxMenuHeight: 300,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose Category', 'themehunk-block'),
    onChange: value => {
      setAttributes({
        productCategories: value ? value : []
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Source', 'themehunk-block'),
    value: attributes.productType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Latest Product', 'themehunk-block'),
      value: 'recent'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale', 'themehunk-block'),
      value: 'sale'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured', 'themehunk-block'),
      value: 'featured'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manual Product', 'themehunk-block'),
      value: 'manual'
    }],
    onChange: e => setAttributes({
      productType: e
    })
  }), 'manual' === attributes.productType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: attributes.manualProduct,
    id: "th-product-select",
    options: SelectProduct,
    isMulti: true,
    isClearable: true,
    maxMenuHeight: 300,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose Product', 'themehunk-block'),
    onChange: value => {
      setAttributes({
        manualProduct: value ? value : []
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of product to show per page', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: getProductShow() || '',
    onChange: changeProductShow,
    step: 1,
    min: 1,
    max: 500,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of column', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: getCol() || '',
    onChange: changeCol,
    step: 1,
    min: 1,
    max: 10,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('OrderBy', 'themehunk-block'),
    value: attributes.productOrderby,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date Product', 'themehunk-block'),
      value: 'date'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price', 'themehunk-block'),
      value: 'price'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('popularity', 'themehunk-block'),
      value: 'popularity'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rating', 'themehunk-block'),
      value: 'rating'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu Order', 'themehunk-block'),
      value: 'menu-order'
    }],
    onChange: e => setAttributes({
      productOrderby: e
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('OrderBy', 'themehunk-block'),
    value: attributes.productOrder,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ASC', 'themehunk-block'),
      value: 'asc'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('DESC', 'themehunk-block'),
      value: 'desc'
    }],
    onChange: e => setAttributes({
      productOrder: e
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude Product', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: attributes.excludeProduct,
    id: "th-product-select",
    options: SelectProduct,
    isMulti: true,
    isClearable: true,
    maxMenuHeight: 300,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude Product', 'themehunk-block'),
    onChange: value => {
      setAttributes({
        excludeProduct: value ? value : []
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stock Status', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: stockstatus.filter(option => attributes.stockStatus.includes(option.value)),
    id: "th-stock-status",
    options: stockstatus,
    isMulti: true,
    isClearable: true,
    maxMenuHeight: 300,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stock Status', 'themehunk-block'),
    onChange: selectedOptions => {
      const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
      setAttributes({
        stockStatus: values
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Elements', 'themehunk-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sortable_layout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))) || 'advanced' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'themehunk-block'),
    className: "th-adv-h-panel",
    initialOpen: true
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (InsSettings);

/***/ }),

/***/ "./inc/block/advance-product/sortable-layout-.js":
/*!*******************************************************!*\
  !*** ./inc/block/advance-product/sortable-layout-.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sortable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortable.js */ "./inc/block/advance-product/sortable.js");

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const LayoutBuilder = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const onSortEnd = _ref2 => {
    let {
      oldIndex,
      newIndex
    } = _ref2;
    const template = array_move__WEBPACK_IMPORTED_MODULE_1___default()(attributes.template, oldIndex, newIndex);
    setAttributes({
      template
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('th-sortable')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sortable_js__WEBPACK_IMPORTED_MODULE_6__.SortableList, {
    attributes: attributes,
    setAttributes: setAttributes,
    onSortEnd: onSortEnd,
    useDragHandle: true,
    axis: "y",
    lockAxis: "y"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutBuilder);

/***/ }),

/***/ "./inc/block/advance-product/sortable.js":
/*!***********************************************!*\
  !*** ./inc/block/advance-product/sortable.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortableItem": function() { return /* binding */ SortableItem; },
/* harmony export */   "SortableList": function() { return /* binding */ SortableList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/index.js */ "./src/components/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__);

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








const DragHandle = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__.SortableHandle)(() => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-sortable-handle",
    tabIndex: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null));
});
const fieldMapping = {
  image: 'displayFeaturedImage',
  category: 'displayCategory',
  title: 'displayTitle',
  price: 'displayPrice',
  rating: 'displayRating',
  button: 'displayButton',
  description: 'displayDescription'
};
const SortableItem = _ref => {
  var _attributes$customMet, _attributes$customMet2;
  let {
    attributes,
    setAttributes,
    template,
    disabled
  } = _ref;
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => {
    const {
      getView
    } = select('themehunk-blocks/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isCustomMeta = template === null || template === void 0 ? void 0 : template.startsWith('custom_');
  const customMeta = attributes === null || attributes === void 0 ? void 0 : (_attributes$customMet = attributes.customMetas) === null || _attributes$customMet === void 0 ? void 0 : (_attributes$customMet2 = _attributes$customMet.filter(_ref2 => {
    let {
      id
    } = _ref2;
    return id === template;
  })) === null || _attributes$customMet2 === void 0 ? void 0 : _attributes$customMet2.pop();
  const templateLookUp = {
    image: attributes.displayFeaturedImage,
    category: attributes.displayCategory,
    title: attributes.displayTitle,
    price: attributes.displayPrice,
    rating: attributes.displayRating,
    button: attributes.displayButton
  };
  const toggleField = fieldName => {
    const field = fieldMapping[fieldName] || fieldName;
    setAttributes({
      [field]: !attributes[field]
    });
  };
  const setAttributesCustomMeta = attr => {
    const newMeta = {
      ...customMeta,
      ...attr
    };
    setAttributes({
      customMetas: attributes.customMetas.map(currentMeta => {
        if (currentMeta.id === customMeta.id) {
          return newMeta;
        }
        return currentMeta;
      })
    });
  };
  const label = !isCustomMeta ? (0,lodash__WEBPACK_IMPORTED_MODULE_5__.startCase)((0,lodash__WEBPACK_IMPORTED_MODULE_5__.toLower)(template)) : customMeta;
  const canEdit = templateLookUp[template] || (customMeta === null || customMeta === void 0 ? void 0 : customMeta.display);
  const icon = canEdit ? 'visibility' : 'hidden';

  /* translators: %s Label */
  let message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Display %s', 'themehunk-block'), label);
  if (canEdit) {
    /* translators: %s Label */
    message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hide %s', 'themehunk-block'), label);
  }

  // title font family
  const changetitleFontFamily = value => {
    if (!value) {
      setAttributes({
        titlefontFamily: value,
        titlefontVariant: value
      });
    } else {
      setAttributes({
        titlefontFamily: value,
        titlefontVariant: 'normal',
        titlefontStyle: 'normal'
      });
    }
  };
  //title lineheight
  const [titlelineHeightUnit, settitlelineHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxtitlelineHeightUnit = titlelineHeightUnit === 'px' ? 150 : titlelineHeightUnit === 'em' ? 10 : titlelineHeightUnit === '%' ? 100 : '';
  const customTooltiptitlelineHeight = value => `${value}${attributes.titlelineHeightUnit}`;
  // verticalOrientationOffset bottom
  const gettitlelineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.titlelineHeight;
      case 'Tablet':
        return attributes.titlelineHeightTablet;
      case 'Mobile':
        return attributes.titlelineHeightMobile;
      default:
        return undefined;
    }
  };
  const changetitlelineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        titlelineHeight: value,
        titlelineHeightTablet: value,
        titlelineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        titlelineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        titlelineHeightMobile: value
      });
    }
  };

  //title fontsize
  const [titlefontSizeUnit, settitlefontSizeUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxtitlefontSizeUnit = titlefontSizeUnit === 'px' ? 150 : titlefontSizeUnit === 'em' ? 10 : titlefontSizeUnit === '%' ? 100 : '';
  const customTooltiptitlefontSize = value => `${value}${attributes.titlefontSizeUnit}`;
  const gettitlefontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.titlefontSize;
      case 'Tablet':
        return attributes.titlefontSizeTablet;
      case 'Mobile':
        return attributes.titlefontSizeMobile;
      default:
        return undefined;
    }
  };
  const changetitlefontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        titlefontSize: value,
        titlefontSizeTablet: value,
        titlefontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        titlefontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        titlefontSizeMobile: value
      });
    }
  };

  //title letter spacing
  const [titleletterSpacingUnit, settitleletterSpacingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxtitleletterSpacingUnit = titleletterSpacingUnit === 'px' ? 150 : titleletterSpacingUnit === 'em' ? 10 : titleletterSpacingUnit === '%' ? 100 : '';
  const customTooltiptitleletterSpacing = value => `${value}${attributes.titleletterSpacingUnit}`;
  // verticalOrientationOffset bottom
  const gettitleletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.titleletterSpacing;
      case 'Tablet':
        return attributes.titleletterSpacingTablet;
      case 'Mobile':
        return attributes.titleletterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changetitleletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        titleletterSpacing: value,
        titleletterSpacingTablet: value,
        titleletterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        titleletterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        titleletterSpacingMobile: value
      });
    }
  };

  // cat font family
  const changecatFontFamily = value => {
    if (!value) {
      setAttributes({
        catfontFamily: value,
        catfontVariant: value
      });
    } else {
      setAttributes({
        catfontFamily: value,
        catfontVariant: 'normal',
        catfontStyle: 'normal'
      });
    }
  };
  //cat lineheight
  const [catlineHeightUnit, setcatlineHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxcatlineHeightUnit = catlineHeightUnit === 'px' ? 150 : catlineHeightUnit === 'em' ? 10 : catlineHeightUnit === '%' ? 100 : '';
  const customTooltipcatlineHeight = value => `${value}${attributes.catlineHeightUnit}`;
  const getcatlineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.catlineHeight;
      case 'Tablet':
        return attributes.catlineHeightTablet;
      case 'Mobile':
        return attributes.catlineHeightMobile;
      default:
        return undefined;
    }
  };
  const changecatlineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        catlineHeight: value,
        catlineHeightTablet: value,
        catlineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        catlineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        catlineHeightMobile: value
      });
    }
  };

  //title fontsize
  const [catfontSizeUnit, setcatfontSizeUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxcatfontSizeUnit = titlefontSizeUnit === 'px' ? 150 : catfontSizeUnit === 'em' ? 10 : catfontSizeUnit === '%' ? 100 : '';
  const customTooltipcatfontSize = value => `${value}${attributes.catfontSizeUnit}`;
  const getcatfontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.catfontSize;
      case 'Tablet':
        return attributes.catfontSizeTablet;
      case 'Mobile':
        return attributes.catfontSizeMobile;
      default:
        return undefined;
    }
  };
  const changecatfontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        catfontSize: value,
        catfontSizeTablet: value,
        catfontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        catfontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        catfontSizeMobile: value
      });
    }
  };

  //title letter spacing
  const [catletterSpacingUnit, setcatletterSpacingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxcatletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : catletterSpacingUnit === 'em' ? 10 : catletterSpacingUnit === '%' ? 100 : '';
  const customTooltipcatletterSpacing = value => `${value}${attributes.catletterSpacingUnit}`;
  const getcatletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.catletterSpacing;
      case 'Tablet':
        return attributes.catletterSpacingTablet;
      case 'Mobile':
        return attributes.catletterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changecatletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        catletterSpacing: value,
        catletterSpacingTablet: value,
        catletterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        catletterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        catletterSpacingMobile: value
      });
    }
  };
  // price font family
  const changepriceFontFamily = value => {
    if (!value) {
      setAttributes({
        pricefontFamily: value,
        pricefontVariant: value
      });
    } else {
      setAttributes({
        pricefontFamily: value,
        pricefontVariant: 'normal',
        pricefontStyle: 'normal'
      });
    }
  };
  //price lineheight
  const [pricelineHeightUnit, setpricelineHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxpricelineHeightUnit = pricelineHeightUnit === 'px' ? 150 : pricelineHeightUnit === 'em' ? 10 : pricelineHeightUnit === '%' ? 100 : '';
  const customTooltippricelineHeight = value => `${value}${attributes.pricelineHeightUnit}`;
  const getpricelineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.pricelineHeight;
      case 'Tablet':
        return attributes.pricelineHeightTablet;
      case 'Mobile':
        return attributes.pricelineHeightMobile;
      default:
        return undefined;
    }
  };
  const changepricelineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        pricelineHeight: value,
        pricelineHeightTablet: value,
        pricelineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        pricelineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        pricelineHeightMobile: value
      });
    }
  };

  //price fontsize
  const [pricefontSizeUnit, setpricefontSizeUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxpricefontSizeUnit = pricefontSizeUnit === 'px' ? 150 : pricefontSizeUnit === 'em' ? 10 : pricefontSizeUnit === '%' ? 100 : '';
  const customTooltippricefontSize = value => `${value}${attributes.pricefontSizeUnit}`;
  const getpricefontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.pricefontSize;
      case 'Tablet':
        return attributes.pricefontSizeTablet;
      case 'Mobile':
        return attributes.pricefontSizeMobile;
      default:
        return undefined;
    }
  };
  const changepricefontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        pricefontSize: value,
        pricefontSizeTablet: value,
        pricefontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        pricefontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        pricefontSizeMobile: value
      });
    }
  };

  //price letter spacing
  const [priceletterSpacingUnit, setpriceletterSpacingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxpriceletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : priceletterSpacingUnit === 'em' ? 10 : priceletterSpacingUnit === '%' ? 100 : '';
  const customTooltippriceletterSpacing = value => `${value}${attributes.priceletterSpacingUnit}`;
  const getpriceletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.priceletterSpacing;
      case 'Tablet':
        return attributes.priceletterSpacingTablet;
      case 'Mobile':
        return attributes.priceletterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changepriceletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        priceletterSpacing: value,
        priceletterSpacingTablet: value,
        priceletterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        priceletterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        priceletterSpacingMobile: value
      });
    }
  };

  //rating lineheight
  const [ratinglineHeightUnit, setratinglineHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxratinglineHeightUnit = ratinglineHeightUnit === 'px' ? 150 : ratinglineHeightUnit === 'em' ? 10 : ratinglineHeightUnit === '%' ? 100 : '';
  const customTooltipratinglineHeight = value => `${value}${attributes.ratinglineHeightUnit}`;
  const getratinglineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.ratinglineHeight;
      case 'Tablet':
        return attributes.ratinglineHeightTablet;
      case 'Mobile':
        return attributes.ratinglineHeightMobile;
      default:
        return undefined;
    }
  };
  const changeratinglineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        ratinglineHeight: value,
        ratinglineHeightTablet: value,
        ratinglineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        ratinglineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        ratinglineHeightMobile: value
      });
    }
  };

  //rating fontsize
  const [ratingfontSizeUnit, setratingfontSizeUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxratingfontSizeUnit = ratingfontSizeUnit === 'px' ? 150 : ratingfontSizeUnit === 'em' ? 10 : ratingfontSizeUnit === '%' ? 100 : '';
  const customTooltipratingfontSize = value => `${value}${attributes.ratingfontSizeUnit}`;
  const getratingfontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.ratingfontSize;
      case 'Tablet':
        return attributes.ratingfontSizeTablet;
      case 'Mobile':
        return attributes.ratingfontSizeMobile;
      default:
        return undefined;
    }
  };
  const changeratingfontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        ratingfontSize: value,
        ratingfontSizeTablet: value,
        ratingfontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        ratingfontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        ratingfontSizeMobile: value
      });
    }
  };

  //rating letter spacing
  const [ratingletterSpacingUnit, setratingletterSpacingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxratingletterSpacingUnit = catletterSpacingUnit === 'px' ? 150 : ratingletterSpacingUnit === 'em' ? 10 : ratingletterSpacingUnit === '%' ? 100 : '';
  const customTooltipratingletterSpacing = value => `${value}${attributes.ratingletterSpacingUnit}`;
  const getratingletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.ratingletterSpacing;
      case 'Tablet':
        return attributes.ratingletterSpacingTablet;
      case 'Mobile':
        return attributes.ratingletterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changeratingletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        ratingletterSpacing: value,
        ratingletterSpacingTablet: value,
        ratingletterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        ratingletterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        ratingletterSpacingMobile: value
      });
    }
  };

  // button font family
  const changebuttonFontFamily = value => {
    if (!value) {
      setAttributes({
        buttonfontFamily: value,
        buttonfontVariant: value
      });
    } else {
      setAttributes({
        buttonfontFamily: value,
        buttonfontVariant: 'normal',
        buttonfontStyle: 'normal'
      });
    }
  };
  //button lineheight
  const [buttonlineHeightUnit, setbuttonlineHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxbuttonlineHeightUnit = buttonlineHeightUnit === 'px' ? 150 : buttonlineHeightUnit === 'em' ? 10 : buttonlineHeightUnit === '%' ? 100 : '';
  const customTooltipbuttonlineHeight = value => `${value}${attributes.buttonlineHeightUnit}`;
  const getbuttonlineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonlineHeight;
      case 'Tablet':
        return attributes.buttonlineHeightTablet;
      case 'Mobile':
        return attributes.buttonlineHeightMobile;
      default:
        return undefined;
    }
  };
  const changebuttonlineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonlineHeight: value,
        buttonlineHeightTablet: value,
        buttonlineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonlineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonlineHeightMobile: value
      });
    }
  };

  //button fontsize
  const [buttonfontSizeUnit, setbuttonfontSizeUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxbuttonfontSizeUnit = buttonfontSizeUnit === 'px' ? 150 : buttonfontSizeUnit === 'em' ? 10 : buttonfontSizeUnit === '%' ? 100 : '';
  const customTooltipbuttonfontSize = value => `${value}${attributes.buttonfontSizeUnit}`;
  const getbuttonfontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonfontSize;
      case 'Tablet':
        return attributes.buttonfontSizeTablet;
      case 'Mobile':
        return attributes.buttonfontSizeMobile;
      default:
        return undefined;
    }
  };
  const changebuttonfontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonfontSize: value,
        buttonfontSizeTablet: value,
        buttonfontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonfontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonfontSizeMobile: value
      });
    }
  };

  //button letter spacing
  const [buttonletterSpacingUnit, setbuttonletterSpacingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxbuttonletterSpacingUnit = buttonletterSpacingUnit === 'px' ? 150 : buttonletterSpacingUnit === 'em' ? 10 : buttonletterSpacingUnit === '%' ? 100 : '';
  const customTooltipbuttonletterSpacing = value => `${value}${attributes.buttonletterSpacingUnit}`;
  const getbuttonletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonletterSpacing;
      case 'Tablet':
        return attributes.buttonletterSpacingTablet;
      case 'Mobile':
        return attributes.buttonletterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changebuttonletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonletterSpacing: value,
        buttonletterSpacingTablet: value,
        buttonletterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonletterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonletterSpacingMobile: value
      });
    }
  };
  // button boder
  const [buttonborderWidthUnit, setbuttonborderWidthUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxbuttonborderWidthUnit = buttonborderWidthUnit === 'px' ? 1500 : buttonborderWidthUnit === 'em' ? 50 : buttonborderWidthUnit === '%' ? 100 : '';
  const getButtonborderWidthType = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonborderWidthType;
      case 'Tablet':
        return attributes.buttonborderWidthTypeTablet;
      case 'Mobile':
        return attributes.buttonborderWidthTypeMobile;
      default:
        return undefined;
    }
  };
  const changeButtonborderWidthType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonborderWidthType: value,
        buttonborderWidthTypeTablet: value,
        buttonborderWidthTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonborderWidthTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonborderWidthTypeMobile: value
      });
    }
  };
  const desktopButtonBorderWidthType = {
    top: 'buttonborderWidthTop',
    right: 'buttonborderWidthRight',
    bottom: 'buttonborderWidthBottom',
    left: 'buttonborderWidthLeft'
  };
  const tabletButtonBorderWidthType = {
    top: 'buttonborderWidthTopTablet',
    right: 'buttonborderWidthRightTablet',
    bottom: 'buttonborderWidthBottomTablet',
    left: 'buttonborderWidthLeftTablet'
  };
  const mobileButtonBorderWidthType = {
    top: 'buttonborderWidthTopMobile',
    right: 'buttonborderWidthRightMobile',
    bottom: 'buttonborderWidthBottomMobile',
    left: 'buttonborderWidthLeftMobile'
  };
  const changeButtonBorderWidth = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.buttonborderWidthType) {
          setAttributes({
            buttonborderWidth: value,
            buttonborderWidthTablet: value,
            buttonborderWidthMobile: value
          });
        } else {
          setAttributes({
            [desktopButtonBorderWidthType[type]]: value,
            [tabletButtonBorderWidthType[type]]: value,
            [mobileButtonBorderWidthType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.buttonborderWidthTypeTablet) {
          setAttributes({
            buttonborderWidthTablet: value
          });
        } else {
          setAttributes({
            [tabletButtonBorderWidthType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.buttonborderWidthTypeMobile) {
          setAttributes({
            buttonborderWidthMobile: value
          });
        } else {
          setAttributes({
            [mobileButtonBorderWidthType[type]]: value
          });
        }
        break;
    }
  };
  const getButtonBorderWidth = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthTop;
        case 'Tablet':
          return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthTopTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthRight;
        case 'Tablet':
          return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthRightTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthBottom;
        case 'Tablet':
          return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderWidthType ? attributes.buttonborderWidth : attributes.buttonborderWidthLeft;
        case 'Tablet':
          return 'linked' === attributes.buttonborderWidthTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderWidthMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthLeftMobile;
      }
    }
    return undefined;
  };

  // button Spacing boder
  const [buttonSpaceUnit, setbuttonSpaceUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxbuttonSpaceUnit = buttonSpaceUnit === 'px' ? 1500 : buttonSpaceUnit === 'em' ? 50 : buttonSpaceUnit === '%' ? 100 : '';
  const getbuttonSpaceType = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonSpaceType;
      case 'Tablet':
        return attributes.buttonSpaceTypeTablet;
      case 'Mobile':
        return attributes.buttonSpaceTypeMobile;
      default:
        return undefined;
    }
  };
  const changebuttonSpaceType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonSpaceType: value,
        buttonSpaceTypeTablet: value,
        buttonSpaceTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonSpaceTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonSpaceTypeMobile: value
      });
    }
  };
  const desktopbuttonSpaceType = {
    top: 'buttonSpaceTop',
    right: 'buttonSpaceRight',
    bottom: 'buttonSpaceBottom',
    left: 'buttonSpaceLeft'
  };
  const tabletbuttonSpaceType = {
    top: 'buttonSpaceTopTablet',
    right: 'buttonSpaceRightTablet',
    bottom: 'buttonSpaceBottomTablet',
    left: 'buttonSpaceLeftTablet'
  };
  const mobilebuttonSpaceType = {
    top: 'buttonSpaceTopMobile',
    right: 'buttonSpaceRightMobile',
    bottom: 'buttonSpaceBottomMobile',
    left: 'buttonSpaceLeftMobile'
  };
  const changebuttonSpace = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.buttonSpaceType) {
          setAttributes({
            buttonSpace: value,
            buttonSpaceTablet: value,
            buttonSpaceMobile: value
          });
        } else {
          setAttributes({
            [desktopbuttonSpaceType[type]]: value,
            [tabletbuttonSpaceType[type]]: value,
            [mobilebuttonSpaceType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.buttonSpaceTypeTablet) {
          setAttributes({
            buttonSpaceTablet: value
          });
        } else {
          setAttributes({
            [tabletbuttonSpaceType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.buttonSpaceTypeMobile) {
          setAttributes({
            buttonSpaceMobile: value
          });
        } else {
          setAttributes({
            [mobilebuttonSpaceType[type]]: value
          });
        }
        break;
    }
  };
  const getbuttonSpace = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceTop;
        case 'Tablet':
          return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceTopTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceRight;
        case 'Tablet':
          return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceRightTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceBottom;
        case 'Tablet':
          return 'linked' === attributes.buttonSpaceTypeTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonSpaceTypeMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonSpaceType ? attributes.buttonSpace : attributes.buttonSpaceLeft;
        case 'Tablet':
          return 'linked' === attributes.buttonSpaceTablet ? attributes.buttonSpaceTablet : attributes.buttonSpaceLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonSpaceMobile ? attributes.buttonSpaceMobile : attributes.buttonSpaceLeftMobile;
      }
    }
    return undefined;
  };
  const [title, settitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [cat, setcat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [buttonclr, setbuttonclr] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-sortable-item-area', `th-sortable-item-area-${template}`)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-sortable-item', {
      'disabled': disabled,
      'hidden': !canEdit,
      'editable': canEdit
    })
  }, !disabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DragHandle, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-sortable-label"
  }, label), canEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    icon: isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2',
    label: isOpen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close Settings', 'themehunk-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Open Settings', 'themehunk-block'),
    showTooltip: true,
    className: "th-sortable-button",
    onClick: () => setOpen(!isOpen)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    icon: icon,
    label: message,
    showTooltip: true,
    className: "th-sortable-button",
    onClick: () => {
      if (isCustomMeta) {
        setAttributesCustomMeta({
          display: !customMeta.display
        });
      } else {
        toggleField(template);
      }
      setOpen(false);
    }
  })), canEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-sortable-control-area', {
      'opened': isOpen && canEdit
    })
  }, 'image' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Crop Image to Fit', 'otter-blocks'),
    checked: attributes.cropImage,
    onChange: cropImage => setAttributes({
      cropImage
    })
  })), 'category' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Typography', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      catTypography: true
    }),
    resetValues: {
      catTypography: false,
      catfontFamily: "default",
      catfontVariant: "regular",
      catfontStyle: "regular",
      cattextTransform: "default",
      catfontSize: "",
      catlineHeight: "",
      catletterSpacing: "",
      catfontSizeUnit: "px",
      catlineHeightUnit: "px",
      catletterSpacingUnit: "px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.GoogleFontsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Family', 'themehunk-block'),
    value: attributes.catfontFamily,
    onChangeFontFamily: changecatFontFamily,
    valueVariant: attributes.catfontVariant,
    onChangeFontVariant: catfontVariant => setAttributes({
      catfontVariant
    }),
    valueStyle: attributes.catfontStyle,
    onChangeFontStyle: catfontStyle => setAttributes({
      catfontStyle
    }),
    valueTransform: attributes.cattextTransform,
    onChangeTextTransform: cattextTransform => setAttributes({
      cattextTransform
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.catfontSizeUnit,
    onClick: catfontSizeUnit => {
      setAttributes({
        catfontSizeUnit
      });
      setcatfontSizeUnit(catfontSizeUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipcatfontSize,
    value: getcatfontSize() || '',
    onChange: changecatfontSize,
    step: 0.1,
    min: 0,
    max: maxcatfontSizeUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.catlineHeightUnit,
    onClick: catlineHeightUnit => {
      setAttributes({
        catlineHeightUnit
      });
      setcatlineHeightUnit(catlineHeightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipcatlineHeight,
    value: getcatlineHeight() || '',
    onChange: changecatlineHeight,
    step: 0.1,
    min: 0,
    max: maxcatlineHeightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.catletterSpacingUnit,
    onClick: catletterSpacingUnit => {
      setAttributes({
        catletterSpacingUnit
      });
      setcatletterSpacingUnit(catletterSpacingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipcatletterSpacing,
    value: getcatletterSpacing() || '',
    onChange: changecatletterSpacing,
    step: 0.1,
    min: 0,
    max: maxcatletterSpacingUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      catColor: true
    }),
    resetValues: {
      catTypography: false,
      catTxtColor: "",
      catTxtColorHvr: ""
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.HoverControl, {
    value: cat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setcat
  }), 'normal' === cat && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(' Color', 'themehunk-block'),
    colorValue: attributes.catTxtColor,
    onColorChange: e => setAttributes({
      catTxtColor: e
    }),
    enableAlpha: true
  }) || 'hover' === cat && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(' Hover Color ', 'themehunk-block'),
    colorValue: attributes.catTxtColorHvr,
    onColorChange: e => setAttributes({
      catTxtColorHvr: e
    }),
    enableAlpha: true
  }))), 'title' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-component-group-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Tag', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ToogleGroupControl, {
    value: attributes.prouctTitleTag,
    onChange: prouctTitleTag => setAttributes({
      prouctTitleTag
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('H2', 'themehunk-blocks'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('H3', 'themehunk-block'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('H4', 'themehunk-block'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('H5', 'themehunk-block'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('H6', 'themehunk-block'),
      value: 'h6'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Typography', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      titleTypography: true
    }),
    resetValues: {
      titleTypography: false,
      titlefontFamily: "default",
      titlefontVariant: "regular",
      titlefontStyle: "regular",
      titletextTransform: "default",
      titlefontSize: "",
      titlelineHeight: "",
      letterSpacing: "",
      titlefontSizeUnit: "px",
      titlelineHeightUnit: "px",
      titleletterSpacingUnit: "px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.GoogleFontsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Family', 'themehunk-block'),
    value: attributes.titlefontFamily,
    onChangeFontFamily: changetitleFontFamily,
    valueVariant: attributes.titlefontVariant,
    onChangeFontVariant: titlefontVariant => setAttributes({
      titlefontVariant
    }),
    valueStyle: attributes.titlefontStyle,
    onChangeFontStyle: titlefontStyle => setAttributes({
      titlefontStyle
    }),
    valueTransform: attributes.titletextTransform,
    onChangeTextTransform: titletextTransform => setAttributes({
      titletextTransform
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.titlefontSizeUnit,
    onClick: titlefontSizeUnit => {
      setAttributes({
        titlefontSizeUnit
      });
      settitlefontSizeUnit(titlefontSizeUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltiptitlefontSize,
    value: gettitlefontSize() || '',
    onChange: changetitlefontSize,
    step: 0.1,
    min: 0,
    max: maxtitlefontSizeUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.titlelineHeightUnit,
    onClick: titlelineHeightUnit => {
      setAttributes({
        titlelineHeightUnit
      });
      settitlelineHeightUnit(titlelineHeightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltiptitlelineHeight,
    value: gettitlelineHeight() || '',
    onChange: changetitlelineHeight,
    step: 0.1,
    min: 0,
    max: maxtitlelineHeightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.titleletterSpacingUnit,
    onClick: titleletterSpacingUnit => {
      setAttributes({
        titleletterSpacingUnit
      });
      settitleletterSpacingUnit(titleletterSpacingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltiptitleletterSpacing,
    value: gettitleletterSpacing() || '',
    onChange: changetitleletterSpacing,
    step: 0.1,
    min: 0,
    max: maxtitleletterSpacingUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      titleColor: true
    }),
    resetValues: {
      titleTypography: false,
      productTitleColor: "",
      productTitleColorHvr: ""
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.HoverControl, {
    value: title,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: settitle
  }), 'normal' === title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title Color', 'themehunk-block'),
    colorValue: attributes.productTitleColor,
    onColorChange: e => setAttributes({
      productTitleColor: e
    }),
    enableAlpha: true
  }) || 'hover' === title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title Hover Color ', 'themehunk-block'),
    colorValue: attributes.productTitleColorHvr,
    onColorChange: e => setAttributes({
      productTitleColorHvr: e
    }),
    enableAlpha: true
  })))), 'price' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Typography', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      priceTypography: true
    }),
    resetValues: {
      priceTypography: false,
      pricefontFamily: "default",
      pricefontVariant: "regular",
      pricefontStyle: "regular",
      pricetextTransform: "default",
      pricefontSize: "",
      pricelineHeight: "",
      priceletterSpacing: "",
      pricefontSizeUnit: "px",
      pricelineHeightUnit: "px",
      priceletterSpacingUnit: "px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.GoogleFontsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Family', 'themehunk-block'),
    value: attributes.pricefontFamily,
    onChangeFontFamily: changepriceFontFamily,
    valueVariant: attributes.pricefontVariant,
    onChangeFontVariant: pricefontVariant => setAttributes({
      pricefontVariant
    }),
    valueStyle: attributes.pricefontStyle,
    onChangeFontStyle: pricefontStyle => setAttributes({
      pricefontStyle
    }),
    valueTransform: attributes.pricetextTransform,
    onChangeTextTransform: pricetextTransform => setAttributes({
      pricetextTransform
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.pricefontSizeUnit,
    onClick: pricefontSizeUnit => {
      setAttributes({
        pricefontSizeUnit
      });
      setpricefontSizeUnit(pricefontSizeUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltippricefontSize,
    value: getpricefontSize() || '',
    onChange: changepricefontSize,
    step: 0.1,
    min: 0,
    max: maxpricefontSizeUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.pricelineHeightUnit,
    onClick: pricelineHeightUnit => {
      setAttributes({
        pricelineHeightUnit
      });
      setpricelineHeightUnit(pricelineHeightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltippricelineHeight,
    value: getpricelineHeight() || '',
    onChange: changepricelineHeight,
    step: 0.1,
    min: 0,
    max: maxpricelineHeightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.priceletterSpacingUnit,
    onClick: priceletterSpacingUnit => {
      setAttributes({
        priceletterSpacingUnit
      });
      setpriceletterSpacingUnit(priceletterSpacingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltippriceletterSpacing,
    value: getpriceletterSpacing() || '',
    onChange: changepriceletterSpacing,
    step: 0.1,
    min: 0,
    max: maxpriceletterSpacingUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      PriceColor: true
    }),
    resetValues: {
      PriceColor: false,
      priceColor: "",
      priceColorHvr: ""
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    colorValue: attributes.priceColor,
    onColorChange: e => setAttributes({
      priceColor: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Del Color', 'themehunk-block'),
    colorValue: attributes.priceDelColor,
    onColorChange: e => setAttributes({
      priceDelColor: e
    }),
    enableAlpha: true
  }))), 'rating' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Typography', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      ratingTypography: true
    }),
    resetValues: {
      ratingTypography: false,
      ratingfontSize: "",
      ratinglineHeight: "",
      ratingletterSpacing: "",
      ratingfontSizeUnit: "px",
      ratinglineHeightUnit: "px",
      ratingletterSpacingUnit: "px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.ratingfontSizeUnit,
    onClick: ratingfontSizeUnit => {
      setAttributes({
        ratingfontSizeUnit
      });
      setratingfontSizeUnit(ratingfontSizeUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltippricefontSize,
    value: getratingfontSize() || '',
    onChange: changeratingfontSize,
    step: 0.1,
    min: 0,
    max: maxratingfontSizeUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.ratinglineHeightUnit,
    onClick: ratinglineHeightUnit => {
      setAttributes({
        ratinglineHeightUnit
      });
      setratinglineHeightUnit(ratinglineHeightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipratinglineHeight,
    value: getratinglineHeight() || '',
    onChange: changeratinglineHeight,
    step: 0.1,
    min: 0,
    max: maxratinglineHeightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.ratingletterSpacingUnit,
    onClick: ratingletterSpacingUnit => {
      setAttributes({
        ratingletterSpacingUnit
      });
      setratingletterSpacingUnit(ratingletterSpacingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipratingletterSpacing,
    value: getratingletterSpacing() || '',
    onChange: changeratingletterSpacing,
    step: 0.1,
    min: 0,
    max: maxratingletterSpacingUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      RatingColor: true
    }),
    resetValues: {
      ratingColor: false,
      ratingColor: "",
      ratingColorHvr: ""
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Star Color', 'themehunk-block'),
    colorValue: attributes.ratingColor,
    onColorChange: e => setAttributes({
      ratingColor: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Empty Star Color', 'themehunk-block'),
    colorValue: attributes.emptyratingColor,
    onColorChange: e => setAttributes({
      emptyratingColor: e
    }),
    enableAlpha: true
  }))), 'button' === template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Typography', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      buttonTypography: true
    }),
    resetValues: {
      buttonTypography: false,
      buttonfontFamily: "default",
      buttonfontVariant: "regular",
      buttonfontStyle: "regular",
      buttontextTransform: "default",
      buttonfontSize: "",
      buttonlineHeight: "",
      buttonletterSpacing: "",
      buttonfontSizeUnit: "px",
      buttonlineHeightUnit: "px",
      buttonletterSpacingUnit: "px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.GoogleFontsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Family', 'themehunk-block'),
    value: attributes.buttonfontFamily,
    onChangeFontFamily: changebuttonFontFamily,
    valueVariant: attributes.buttonfontVariant,
    onChangeFontVariant: buttonfontVariant => setAttributes({
      buttonfontVariant
    }),
    valueStyle: attributes.buttonfontStyle,
    onChangeFontStyle: buttonfontStyle => setAttributes({
      buttonfontStyle
    }),
    valueTransform: attributes.buttontextTransform,
    onChangeTextTransform: buttontextTransform => setAttributes({
      buttontextTransform
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.buttonfontSizeUnit,
    onClick: buttonfontSizeUnit => {
      setAttributes({
        buttonfontSizeUnit
      });
      setbuttonfontSizeUnit(buttonfontSizeUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipbuttonfontSize,
    value: getbuttonfontSize() || '',
    onChange: changebuttonfontSize,
    step: 0.1,
    min: 0,
    max: maxbuttonfontSizeUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.buttonlineHeightUnit,
    onClick: buttonlineHeightUnit => {
      setAttributes({
        buttonlineHeightUnit
      });
      setbuttonlineHeightUnit(buttonlineHeightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipbuttonlineHeight,
    value: getbuttonlineHeight() || '',
    onChange: changebuttonlineHeight,
    step: 0.1,
    min: 0,
    max: maxbuttonlineHeightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.buttonletterSpacingUnit,
    onClick: buttonletterSpacingUnit => {
      setAttributes({
        buttonletterSpacingUnit
      });
      setbuttonletterSpacingUnit(buttonletterSpacingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    renderTooltipContent: customTooltipbuttonletterSpacing,
    value: getbuttonletterSpacing() || '',
    onChange: changebuttonletterSpacing,
    step: 0.1,
    min: 0,
    max: maxbuttonletterSpacingUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Color', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    onClick: () => setAttributes({
      buttonClr: true
    }),
    resetValues: {
      buttonClr: false,
      buttonTxtClr: "",
      buttonBgClr: "",
      buttonBrdrClr: "",
      buttonTxtClrHvr: "",
      buttonBgClrHvr: "",
      buttonBrdrClrHvr: ""
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.HoverControl, {
    value: buttonclr,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setbuttonclr
  }), 'normal' === buttonclr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Color', 'themehunk-block'),
    colorValue: attributes.buttonTxtClr,
    onColorChange: e => setAttributes({
      buttonTxtClr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bg Color', 'themehunk-block'),
    colorValue: attributes.buttonBgClr,
    onColorChange: e => setAttributes({
      buttonBgClr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Color', 'themehunk-block'),
    colorValue: attributes.buttonBrdrClr,
    onColorChange: e => setAttributes({
      buttonBrdrClr: e
    }),
    enableAlpha: true
  })) || 'hover' === buttonclr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Color', 'themehunk-block'),
    colorValue: attributes.buttonTxtClrHvr,
    onColorChange: e => setAttributes({
      buttonTxtClrHvr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bg Color', 'themehunk-block'),
    colorValue: attributes.buttonBgClrHvr,
    onColorChange: e => setAttributes({
      buttonBgClrHvr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Color', 'themehunk-block'),
    colorValue: attributes.buttonBrdrClrHvr,
    onColorChange: e => setAttributes({
      buttonBrdrClrHvr: e
    }),
    enableAlpha: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Type', 'themehunk-block'),
    value: attributes.buttonBrdrType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('None', 'themehunk-block'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Solid', 'themehunk-block'),
      value: 'solid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Double', 'themehunk-block'),
      value: 'double'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Dotted', 'themehunk-block'),
      value: 'dotted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Dashed', 'themehunk-block'),
      value: 'dashed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Groove', 'themehunk-block'),
      value: 'groove'
    }],
    onChange: e => setAttributes({
      buttonBrdrType: e
    })
  }), 'none' !== attributes.buttonBrdrType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.buttonborderWidthUnit,
    onClick: buttonborderWidthUnit => {
      setAttributes({
        buttonborderWidthUnit
      });
      setbuttonborderWidthUnit(buttonborderWidthUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.SizingControl, {
    type: getButtonborderWidthType(),
    min: 0,
    max: maxbuttonborderWidthUnit,
    changeType: changeButtonborderWidthType,
    onChange: changeButtonBorderWidth,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getButtonBorderWidth('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getButtonBorderWidth('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getButtonBorderWidth('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getButtonBorderWidth('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.UnitChooser, {
    value: attributes.buttonSpaceUnit,
    onClick: buttonSpaceUnit => {
      setAttributes({
        buttonSpaceUnit
      });
      setbuttonSpaceUnit(buttonSpaceUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_7__.SizingControl, {
    type: getbuttonSpaceType(),
    min: 0,
    max: maxbuttonSpaceUnit,
    changeType: changebuttonSpaceType,
    onChange: changebuttonSpace,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getbuttonSpace('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getbuttonSpace('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getbuttonSpace('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getbuttonSpace('left')
    }]
  })))));
};
const SortableItemContainer = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__.SortableElement)(_ref3 => {
  let {
    attributes,
    setAttributes,
    template,
    disabled
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SortableItem, {
    attributes: attributes,
    setAttributes: setAttributes,
    template: template,
    disabled: disabled
  });
});
const SortableList = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__.SortableContainer)(_ref4 => {
  var _attributes$template;
  let {
    attributes,
    setAttributes
  } = _ref4;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes === null || attributes === void 0 ? void 0 : (_attributes$template = attributes.template) === null || _attributes$template === void 0 ? void 0 : _attributes$template.filter(template => {
    var _window;
    if (template !== null && template !== void 0 && template.startsWith('custom_') && ((_window = window) === null || _window === void 0 ? void 0 : _window.acf) === undefined) {
      return false;
    }
    return true;
  }).map((template, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SortableItemContainer, {
    key: `item-${template}`,
    index: index,
    attributes: attributes,
    setAttributes: setAttributes,
    template: template
  })));
});

/***/ }),

/***/ "./src/components/background-selector-control/index.js":
/*!*************************************************************!*\
  !*** ./src/components/background-selector-control/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/icon.js */ "./src/helpers/icon.js");
/* harmony import */ var _control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../control-panel-control/index.js */ "./src/components/control-panel-control/index.js");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


const BackgroundSelectorControl = _ref => {
  let {
    backgroundType,
    backgroundColor,
    image,
    gradient,
    backgroundAttachment,
    backgroundRepeat,
    backgroundSize,
    focalPoint,
    changeImage,
    changeColor,
    removeImage,
    changeBackgroundType,
    changeGradient,
    changeBackgroundAttachment,
    changeBackgroundRepeat,
    changeBackgroundSize,
    changeFocalPoint
  } = _ref;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(BackgroundSelectorControl);
  const id = `inspector-background-selector-control-${instanceId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: "components-base-control th-background-selector-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Type', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "linking-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_5__.Bgclr
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'themehunk-block'),
    showTooltip: true,
    isPrimary: 'color' === backgroundType,
    onClick: () => changeBackgroundType('color')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_5__.BgImg
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'themehunk-block'),
    showTooltip: true,
    isPrimary: 'image' === backgroundType,
    onClick: () => changeBackgroundType('image')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_5__.BgGraclr
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient', 'themehunk-block'),
    showTooltip: true,
    isPrimary: 'gradient' === backgroundType,
    onClick: () => changeBackgroundType('gradient')
  })))), ('color' === backgroundType || undefined === backgroundType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'themehunk-block'),
    colorValue: backgroundColor,
    onColorChange: changeColor,
    enableAlpha: true
  }), 'image' === backgroundType && (image !== null && image !== void 0 && image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Focal point picker', 'themehunk-block'),
    url: image.url,
    value: focalPoint,
    onDragStart: changeFocalPoint,
    onDrag: changeFocalPoint,
    onChange: changeFocalPoint
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Settings', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Attachment', 'themehunk-block'),
    value: backgroundAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll', 'themehunk-block'),
      value: 'scroll'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixed', 'themehunk-block'),
      value: 'fixed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Local', 'themehunk-block'),
      value: 'local'
    }],
    onChange: changeBackgroundAttachment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Repeat', 'themehunk-block'),
    value: backgroundRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat', 'themehunk-block'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No-repeat', 'themehunk-block'),
      value: 'no-repeat'
    }],
    onChange: changeBackgroundRepeat
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Size', 'themehunk-block'),
    value: backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'themehunk-block'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cover', 'themehunk-block'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contain', 'themehunk-block'),
      value: 'contain'
    }],
    onChange: changeBackgroundSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    onClick: removeImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Image', 'themehunk-block')))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    icon: "format-image",
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'themehunk-block'),
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('an image', 'themehunk-block')
    },
    value: image === null || image === void 0 ? void 0 : image.id,
    onSelect: changeImage,
    accept: "image/*",
    allowedTypes: ['image']
  })), 'gradient' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Gradient', 'themehunk-block'),
    gradientValue: gradient,
    disableCustomColors: true,
    onGradientChange: changeGradient,
    clearable: false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundSelectorControl);

/***/ }),

/***/ "./src/components/clear-button/index.js":
/*!**********************************************!*\
  !*** ./src/components/clear-button/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies.
 */



const ClearButton = _ref => {
  let {
    values,
    setAttributes
  } = _ref;
  const clearValues = () => {
    const attrToClear = ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(values) ? values : [values]).map(value => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {
        return value;
      } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)) {
        const keys = Object.keys(value);
        if (1 === keys.length) {
          return value[keys[0]] ? keys[0] : undefined;
        }
      }
      return undefined;
    }).filter(lodash__WEBPACK_IMPORTED_MODULE_2__.isString).reduce((acc, attrName) => {
      acc[attrName] = undefined;
      return acc;
    }, {});
    setAttributes(attrToClear);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-clear-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    onClick: clearValues
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'themehunk-block')));
};
/* harmony default export */ __webpack_exports__["default"] = (ClearButton);

/***/ }),

/***/ "./src/components/control-panel-control/index.js":
/*!*******************************************************!*\
  !*** ./src/components/control-panel-control/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/backup.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const ControlPanelControl = _ref => {
  let {
    label,
    attributes,
    setAttributes,
    resetValues,
    onClick,
    children
  } = _ref;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    for (const key in resetValues) {
      if (resetValues[key] !== attributes[key]) {
        return setActive(true);
      }
      setActive(false);
    }
  }, [attributes]);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(ControlPanelControl);
  const [isActive, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const id = `inspector-control-panel-control-${instanceId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-control-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: id
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    position: "top left",
    headerTitle: label,
    expandOnMobile: true,
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset to default', 'themehunk-block'),
        showTooltip: true,
        isTertiary: true,
        onClick: () => setAttributes({
          ...resetValues
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        id: id,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
        label: label,
        showTooltip: true,
        onClick: () => {
          onToggle();
          if (onClick) {
            onClick();
          }
        },
        "aria-expanded": isOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          'is-active': isActive
        })
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "th-popover-settings"
    }, children)
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ControlPanelControl);

/***/ }),

/***/ "./src/components/google-fonts-control/index.js":
/*!******************************************************!*\
  !*** ./src/components/google-fonts-control/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/google-fonts.js */ "./src/helpers/google-fonts.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
* Internal dependencies
*/


const GoogleFontsControl = _ref => {
  let {
    label,
    value,
    valueVariant,
    valueStyle,
    valueTransform,
    isSelect = false,
    onChangeFontFamily,
    onChangeFontVariant,
    onChangeFontStyle,
    onChangeTextTransform
  } = _ref;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(GoogleFontsControl);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_6__["default"].afterLoading().then(loader => {
      setFonts(loader.fonts);
      if (value) {
        setVariants(loader.getVariants(value));
      }
    });
  }, []);
  const [fonts, setFonts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [variants, setVariants] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const id = `inspector-google-fonts-control-${instanceId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-gfont-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: label,
    id: id
  }, null !== fonts ? isSelect ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: value || '',
    id: id,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'themehunk-block'),
      value: ''
    }, ...fonts.map(i => {
      return i = {
        label: i.family,
        value: i.family
      };
    })],
    onChange: e => {
      let variants = [];
      loadFontToPage(e, 'regular', fonts);
      if ('' === e) {
        variants = [{
          'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Regular', 'themehunk-block'),
          'value': 'regular'
        }, {
          'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Italic', 'themehunk-block'),
          'value': 'italic'
        }];
        onChangeFontFamily(undefined);
        setVariants(variants);
        return;
      }
      onChangeFontFamily(e);
      const font = fonts.find(i => e === i.family);
      variants = font.variants.filter(o => false === o.includes('italic')).map(o => {
        return o = {
          'label': (0,lodash__WEBPACK_IMPORTED_MODULE_2__.startCase)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.toLower)(o)),
          'value': o
        };
      });
      setVariants(variants);
    }
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    contentClassName: "th-gfont-popover",
    position: "bottom center",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "th-gfont-button",
        id: id,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, value ? value : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Font Family', 'themehunk-block'));
    },
    renderContent: _ref3 => {
      let {
        onToggle
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.MenuGroup, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Google Fonts', 'themehunk-block')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
        value: search,
        onChange: e => setSearch(e)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-popover__items"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
        onClick: () => {
          onToggle();
          onChangeFontFamily(undefined);
          setVariants([]);
          setSearch('');
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'themehunk-block')), fonts.map((i, index) => {
        if (!search || i.family.toLowerCase().includes(search.toLowerCase())) {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
            key: index,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
              'is-selected': i.family === value
            }),
            onClick: () => {
              onToggle();
              onChangeFontFamily(i.family);
              const variants = i.variants.filter(o => false === o.includes('italic')).map(o => {
                return o = {
                  'label': (0,lodash__WEBPACK_IMPORTED_MODULE_2__.startCase)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.toLower)(o)),
                  'value': o
                };
              });
              setVariants(variants);
              setSearch('');
            }
          }, i.family);
        }
      })));
    }
  }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Loading…', 'themehunk-block')), variants && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Weight', 'themehunk-block'),
    value: valueVariant || 'regular',
    options: variants,
    onChange: onChangeFontVariant
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Style', 'themehunk-block'),
    value: valueStyle,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Regular', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Italic', 'themehunk-block'),
      value: 'italic'
    }],
    onChange: onChangeFontStyle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Transform', 'themehunk-block'),
    value: valueTransform,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'themehunk-block'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Uppercase', 'themehunk-block'),
      value: 'uppercase'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Lowercase', 'themehunk-block'),
      value: 'lowercase'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Capitalize', 'themehunk-block'),
      value: 'capitalize'
    }],
    onChange: onChangeTextTransform
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (GoogleFontsControl);

/***/ }),

/***/ "./src/components/hover-tab/index.js":
/*!*******************************************!*\
  !*** ./src/components/hover-tab/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
  * WordPress dependencies.
  */




/**
  * Internal dependencies.
  */

const HoverControl = _ref => {
  let {
    value,
    options,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "th-hover-control"
  }, options.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-active': option.value === value
      }),
      onClick: () => onChange(option.value)
    }, option.label);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (HoverControl);

/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/components/icon-picker/editor.scss");
/* harmony import */ var _svgs_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs-list */ "./src/components/icon-picker/svgs-list.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */



function sanitizeSVG(svg) {
  return dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(svg, {
    USE_PROFILES: {
      svg: true,
      svgFilters: true
    }
  });
}

/**
 * WordPress dependencies
 */





/**
 * Typography Component
 */
class IconPicker extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      showIcons: false,
      showGeneralIcons: false,
      showSocialIcons: false
    };
  }
  render() {
    const {
      attributes,
      setAttributes,
      attrIcon,
      attrIconLocation,
      locationOptions,
      attrRemoveText,
      id
    } = this.props;
    let iconSVGSets = {
      general: {
        group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon Library', 'themehunk-block'),
        svgs: _svgs_list__WEBPACK_IMPORTED_MODULE_2__["default"]
      }
    };
    iconSVGSets = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.applyFilters)('thblocks.editor.iconSVGSets', iconSVGSets, {
      attributes
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      className: "th-svg-html"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "th-icon-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "th-icon-preview"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: sanitizeSVG(attributes[attrIcon])
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      isSmall: true,
      className: "reset-icon is-secondary",
      onClick: () => {
        setAttributes({
          [this.props['attrIcon']]: '',
          // eslint-disable-line dot-notation
          hasIcon: false,
          [this.props['attrRemoveText']]: false // eslint-disable-line dot-notation
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "editor-block-types-list__item-icon"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Clear', 'themehunk-block'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      className: "th-icon-chooser"
    }, Object.keys(iconSVGSets).map((svg, i) => {
      const svgItems = iconSVGSets[svg].svgs;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        className: "th-blocks-panel-label th-blocks-icon-panel",
        title: iconSVGSets[svg].group,
        initialOpen: false,
        key: i
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "th-blocks-icon-chooser"
      }, Object.keys(svgItems).map((svgItem, index) => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: `editor-pblock-types-list-item-${index}`
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
          text: svgItems[svgItem].label
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: "editor-block-list-item-button",
          onClick: () => {
            let iconValue = svgItems[svgItem].icon;
            if ('string' !== typeof iconValue) {
              iconValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.renderToString)(iconValue);
            }
            setAttributes({
              [this.props.attrIcon]: iconValue,
              hasIcon: true,
              display: 'headline' === id ? 'flex' : 'inline-flex',
              alignItems: 'center'
            });
          }
        }, 'string' === typeof svgItems[svgItem].icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "editor-block-types-list__item-icon",
          dangerouslySetInnerHTML: {
            __html: sanitizeSVG(svgItems[svgItem].icon)
          }
        })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "editor-block-types-list__item-icon"
        }, svgItems[svgItem].icon)))));
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('SVG Markup', 'themehunk-block'),
        value: attributes[attrIcon],
        onChange: value => {
          setAttributes({
            [this.props['attrIcon']]: sanitizeSVG(value) // eslint-disable-line dot-notation
          });

          if ('' !== value) {
            setAttributes({
              'hasIcon': true,
              // eslint-disable-line quote-props
              display: 'headline' === id ? 'flex' : 'inline-flex',
              alignItems: 'center'
            });
          } else {
            setAttributes({
              'hasIcon': true // eslint-disable-line quote-props
            });
          }
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Can also enter custom code', 'themehunk-block')))));
    })), typeof attributes[attrRemoveText] !== 'undefined' && !!attributes[attrIcon] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Remove Text', 'themehunk-block'),
      checked: !!attributes[attrRemoveText],
      onChange: value => {
        setAttributes({
          [this.props['attrRemoveText']]: value // eslint-disable-line dot-notation
        });
      }
    }));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (IconPicker);

/***/ }),

/***/ "./src/components/icon-picker/svgs-list.js":
/*!*************************************************!*\
  !*** ./src/components/icon-picker/svgs-list.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const svgs = {
  clock: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Clock', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm92.49 313l-20 25a16 16 0 01-22.49 2.5l-67-49.72a40 40 0 01-15-31.23V112a16 16 0 0116-16h32a16 16 0 0116 16v144l58 42.5a16 16 0 012.49 22.5z"
    }))
  },
  clockAlt: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Clock Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
    }))
  },
  asterisk: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Asterisk', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"
    }))
  },
  at: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('At', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"
    }))
  },
  award: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Award', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 384 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"
    }))
  },
  ban: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Ban', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"
    }))
  },
  bars: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Bars', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    }))
  },
  beer: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Beer', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
    }))
  },
  bolt: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Bolt', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 320 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
    }))
  },
  book: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Book', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
    }))
  },
  boxOpen: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Box - Open', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
    }))
  },
  bullhorn: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Bullhorn', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 576 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
    }))
  },
  bullseye: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Bullseye', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 496 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
    }))
  },
  burn: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Burn', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 384 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z"
    }))
  },
  calendarAlt: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Calender', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
    }))
  },
  check: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Check', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
    }))
  },
  checkCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Check - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
    }))
  },
  checkCircleOutline: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Check - Circle Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
    }))
  },
  checkSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Check - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
    }))
  },
  checkSquareOutline: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Check - Square Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"
    }))
  },
  chevronDown: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Chevron - Down', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
    }))
  },
  chevronLeft: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Chevron - Left', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 256 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
    }))
  },
  chevronRight: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Chevron - Right', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 256 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
    }))
  },
  chevronUp: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Chevron - Up', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
    }))
  },
  circle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
    }))
  },
  circleOutline: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Circle - Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
    }))
  },
  coffee: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Coffee', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
    }))
  },
  dotCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Dot - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
    }))
  },
  dotCircleOutline: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Dot - Circle Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
    }))
  },
  ellipsesH: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Ellipses - Horizontal', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
    }))
  },
  ellipsesV: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Ellipses - Vertical', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 192 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
    }))
  },
  envelope: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Envelope', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
    }))
  },
  fireAlt: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Fire', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"
    }))
  },
  heart: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Heart', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
    }))
  },
  mapMarkerAlt: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Map Marker', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 384 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    }))
  },
  paperPlane: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Paper Plane', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
    }))
  },
  phone: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Phone', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
    }))
  },
  plus: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Plus', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    }))
  },
  plusCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Plus - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
    }))
  },
  plusSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Plus - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
    }))
  },
  plusSquareOutline: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Plus - Square Outline', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
    }))
  },
  shield: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Shield', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
    }))
  },
  star: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Star', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 576 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    }))
  },
  tags: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Tags', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
    }))
  },
  userCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('User - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 496 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
    }))
  },
  facebook: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Facebook', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 320 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    }))
  },
  facebookCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Facebook - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
    }))
  },
  facebookSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Facebook - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
    }))
  },
  instagram: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Instagram', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    }))
  },
  linkedin: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('LinkedIn', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    }))
  },
  linkedinSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('LinkedIn - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    }))
  },
  pinterest: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Pinterest', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 384 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
    }))
  },
  pinterestCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Pinterest - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 496 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
    }))
  },
  pinterestSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Pinterest - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
    }))
  },
  reddit: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Reddit', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
    }))
  },
  redditCircle: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Reddit - Circle', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
    }))
  },
  redditSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Reddit - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8-14.9 0-26.8 11.9-26.8 26.8 0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5 0-14.9-11.9-26.8-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z"
    }))
  },
  snapchat: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Snapchat', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"
    }))
  },
  soundcloud: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Soundcloud', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 640 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"
    }))
  },
  twitch: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Twitch', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M40.1 32L10 108.9v314.3h107V480h60.2l56.8-56.8h87l117-117V32H40.1zm357.8 254.1L331 353H224l-56.8 56.8V353H76.9V72.1h321v214zM331 149v116.9h-40.1V149H331zm-107 0v116.9h-40.1V149H224z"
    }))
  },
  twitter: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Twitter', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    }))
  },
  twitterSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Twitter - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
    }))
  },
  vimeo: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Vimeo', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
    }))
  },
  vimeoSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Vimeo - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"
    }))
  },
  whatsapp: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('WhatsApp', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    }))
  },
  whatsappSquare: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('WhatsApp - Square', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"
    }))
  },
  youtube: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('YouTube', 'label', 'themehunk-block'),
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      role: "img",
      height: "1em",
      width: "1em",
      viewBox: "0 0 576 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
    }))
  }
};
/* harmony default export */ __webpack_exports__["default"] = (svgs);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundSelectorControl": function() { return /* reexport safe */ _background_selector_control_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "ClearButton": function() { return /* reexport safe */ _clear_button_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "ControlPanelControl": function() { return /* reexport safe */ _control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "GoogleFontsControl": function() { return /* reexport safe */ _google_fonts_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "HoverControl": function() { return /* reexport safe */ _hover_tab_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "IconPicker": function() { return /* reexport safe */ _icon_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "InsSettingHeader": function() { return /* reexport safe */ _ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ResponsiveControl": function() { return /* reexport safe */ _responsive_control_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "SizingControl": function() { return /* reexport safe */ _sizing_control_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "ToogleGroupControl": function() { return /* reexport safe */ _toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "UnitChooser": function() { return /* reexport safe */ _unit_picker_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ins-setting-header/index.js */ "./src/components/ins-setting-header/index.js");
/* harmony import */ var _sizing_control_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizing-control/index.js */ "./src/components/sizing-control/index.js");
/* harmony import */ var _responsive_control_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive-control/index.js */ "./src/components/responsive-control/index.js");
/* harmony import */ var _hover_tab_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hover-tab/index.js */ "./src/components/hover-tab/index.js");
/* harmony import */ var _control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-panel-control/index.js */ "./src/components/control-panel-control/index.js");
/* harmony import */ var _background_selector_control_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background-selector-control/index.js */ "./src/components/background-selector-control/index.js");
/* harmony import */ var _unit_picker_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-picker/index.js */ "./src/components/unit-picker/index.js");
/* harmony import */ var _toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toogle-group-control/index.js */ "./src/components/toogle-group-control/index.js");
/* harmony import */ var _clear_button_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clear-button/index.js */ "./src/components/clear-button/index.js");
/* harmony import */ var _google_fonts_control_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./google-fonts-control/index.js */ "./src/components/google-fonts-control/index.js");
/* harmony import */ var _icon_picker_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon-picker/index.js */ "./src/components/icon-picker/index.js");
/**
 * Import General Editor CSS
 */












/***/ }),

/***/ "./src/components/ins-setting-header/index.js":
/*!****************************************************!*\
  !*** ./src/components/ins-setting-header/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies.
 */


/**
 * WordPress dependencies.
 */



/**
  * Internal dependencies.
  */

const InsSettingHeader = _ref => {
  let {
    value,
    options,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    className: "th-setting-header"
  }, options.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-active': option.value === value
      }),
      onClick: () => onChange(option.value)
    }, option.label);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InsSettingHeader);

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/icon.js */ "./src/helpers/icon.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const ResponsiveControl = _ref => {
  let {
    label,
    className,
    children
  } = _ref;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(ResponsiveControl);
  const isLarger = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large', '>=');
  const isLarge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large', '<=');
  const isSmall = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('small', '>=');
  const isSmaller = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('small', '<=');
  const isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getView
    } = select('themehunk-blocks/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType && !isMobile ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  const {
    updateView
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('themehunk-blocks/data');
  const {
    __experimentalSetPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/edit-post') ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/edit-post') : false;
  const setView = __experimentalSetPreviewDeviceType && !isMobile ? __experimentalSetPreviewDeviceType : updateView;
  const id = `inspector-responsive-control-${instanceId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control', className)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    position: "top left",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: 'Mobile' === getView ? 'smartphone' : getView.toLowerCase(),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsiveness Settings', 'themehunk-block'),
        showTooltip: true,
        className: "is-button",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "o-responsive-control-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "o-responsive-control-settings-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control-settings-item', {
        'is-selected': 'Desktop' === getView
      }),
      onClick: () => setView('Desktop')
    }, 'Desktop' === getView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.checkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "popover-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop', 'themehunk-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control-settings-item', {
        'is-selected': 'Tablet' === getView
      }),
      onClick: () => setView('Tablet')
    }, 'Tablet' === getView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.checkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "popover-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'themehunk-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control-settings-item', {
        'is-selected': 'Mobile' === getView
      }),
      onClick: () => setView('Mobile')
    }, 'Mobile' === getView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.checkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "popover-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile', 'themehunk-block'))))
  }))), children));
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveControl);

/***/ }),

/***/ "./src/components/sizing-control/field.js":
/*!************************************************!*\
  !*** ./src/components/sizing-control/field.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */

const Field = _ref => {
  let {
    id,
    index,
    option,
    min,
    max,
    onChange
  } = _ref;
  const fieldRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-sizing-control-item"
  }, index.disabled ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    disabled: index.disabled,
    className: "th-sizing-control-item-input",
    id: `th-sizing-control-item-input-${option}`
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    className: "th-sizing-control-item-input",
    id: `th-sizing-control-item-input-${option}-${id}`,
    value: undefined !== index.value ? index.value : '',
    min: min,
    max: max,
    ref: fieldRef,
    onChange: e => onChange(index.type, parseInt(e.target.value))
  })), index.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-sizing-control-item-label",
    htmlFor: `th-sizing-control-item-input-${option}-${id}`
  }, index.label));
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./src/components/sizing-control/index.js":
/*!************************************************!*\
  !*** ./src/components/sizing-control/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field.js */ "./src/components/sizing-control/field.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const SizingControl = _ref => {
  let {
    label,
    type,
    min,
    max,
    changeType,
    options,
    onChange
  } = _ref;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(SizingControl);
  const id = `inspector-sizing-control-${instanceId}`;
  if (options && 1 > options.length) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please specify more options.', 'themehunk-block');
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: "th-sizing-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: id
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-sizing-control-wrapper', {
      'linking': type
    })
  }, options.map((i, n) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: n,
    id: instanceId,
    index: i,
    option: n,
    min: min,
    max: max,
    onChange: onChange
  })), type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-sizing-control-item', 'toggle-linking', {
      'is-linked': 'linked' === type
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: 'linked' === type ? 'admin-links' : 'editor-unlink',
    label: 'linked' === type ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unlink Values', 'themehunk-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Values', 'themehunk-block'),
    showTooltip: true,
    className: "th-sizing-control-item-input",
    onClick: () => changeType('linked' === type ? 'unlinked' : 'linked')
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (SizingControl);

/***/ }),

/***/ "./src/components/toogle-group-control/index.js":
/*!******************************************************!*\
  !*** ./src/components/toogle-group-control/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const ToogleGroupControl = _ref => {
  let {
    value,
    options,
    onChange,
    hasIcon = false
  } = _ref;
  const handleClick = option => {
    const newValue = value === option.value ? null : option.value;
    onChange(newValue);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('th-toggle-group-control', {
      'has-icon': hasIcon
    })
  }, options === null || options === void 0 ? void 0 : options.map(option => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: option.value,
      className: "th-toggle-option"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isPrimary: value === option.value,
      variant: value === option.value ? 'primary' : 'secondary',
      icon: option.icon,
      label: option.label,
      onClick: () => handleClick(option),
      showTooltip: hasIcon
    }, hasIcon ? '' : option.label));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ToogleGroupControl);

/***/ }),

/***/ "./src/components/unit-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/unit-picker/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnitChooser; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




class UnitChooser extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      label,
      value,
      onClick,
      units,
      id,
      singleOption = false
    } = this.props;
    const allUnits = singleOption ? [value] : units;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: label,
      id: id,
      className: "components-th-blocks-units-control-header__units"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-th-blocks-control__units"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "components-th-blocks-control-buttons__units",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Units', 'themehunk-blocks')
    }, allUnits.map(unit => {
      let unitName = unit;
      if ('px' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Pixel', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('em' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Em', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('%' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Percentage', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('deg' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Degree', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip
      /* translators: Unit type (px, em, %) */, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s Units', 'themehunk-blocks'), unitName),
        key: unit
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: unit,
        className: 'components-th-blocks-control-button__units--' + unit,
        isSmall: true,
        isPrimary: value === unit,
        "aria-pressed": value === unit
        /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s Units', 'themehunk-blocks'), unitName),
        onClick: () => onClick(unit)
      }, unit));
    }))));
  }
}

/***/ }),

/***/ "./src/helpers/get-unique-id.js":
/*!**************************************!*\
  !*** ./src/helpers/get-unique-id.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUniqueId; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Import WordPress Internals
 */
function getUniqueId(uniqueID, clientId, isUniqueID, isUniqueBlock) {
  let smallID = '_' + clientId.substr(2, 9);
  if (!uniqueID) {
    //new block
    if (!isUniqueID(smallID)) {
      smallID = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(smallID);
    }
    return smallID;
  } else if (!isUniqueID(uniqueID)) {
    // This checks if we are just switching views, client ID the same means we don't need to update.
    if (!isUniqueBlock(uniqueID, clientId)) {
      return smallID;
    }
  }
  //normal block loading 
  return uniqueID;
}

/***/ }),

/***/ "./src/helpers/google-fonts.js":
/*!*************************************!*\
  !*** ./src/helpers/google-fonts.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Get the iframe of the editor. Use in FSE or Mobile/Tablet Preview for Page/Post.
 */
const getEditorIframe = () => document.querySelector('iframe[name^="editor-canvas"]');

/**
 * Class that request the fonts and loaded them into the browser.
 */
class GoogleFontsLoader {
  /**
   * Initialize.
   */
  constructor() {
    this.fonts = [];
    this.status = 'none';
    this.controller = new AbortController();
    this.request = null;
    this.node = document.createElement('style');
    this.node.type = 'text/css';
    this.node.setAttribute('data-generator', 'otter-blocks-fonts-loader');
    this.isAttaching = false;
    this.usedFonts = [];
  }

  /**
   * The the loader after is loaded.
   *
   * @returns {Promise<GoogleFontsLoader>}
   */
  async afterLoading() {
    await this.requestFonts();
    return this;
  }

  /**
   * Get the font.
   *
   * @param {string} fontName The name of the font.
   * @returns {import('../components/google-fonts-control/types').GoogleFontItem}
   */
  getFont(fontName) {
    return this.fonts.find(font => font.family === fontName);
  }

  /**
   * Get the variants of the font.
   *
   * @param {string} fontName The name of the font.
   * @returns {{label: string, value: string}[]}
   */
  getVariants(fontName) {
    const font = this.getFont(fontName);
    if (font) {
      return font.variants.filter(o => false === o.includes('italic')).map(o => {
        return o = {
          'label': (0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toLower)(o)),
          'value': o
        };
      });
    }
    return [];
  }

  /**
   * Load the font to brower document. Can inject to an iframe.
   *
   * @param {string} fontName The name of the font.
   * @param {string} variant The font variant.
   * @returns {Promise<Error|import('../components/google-fonts-control/types').GoogleFontItem}
   */
  async loadFontToBrowser(fontName) {
    let variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'regular';
    if (!fontName) {
      return Error('Empty font name.');
    }
    if ('none' === this.status || 'loading' === this.status) {
      await this.afterLoading();
    }
    const font = this.getFont(fontName);
    if (!font) {
      return Error('Font does not exists.');
    }
    if (!this.usedFonts.find(_ => _.font.family === fontName && _.variant === variant)) {
      this.usedFonts.push({
        font,
        variant
      });
      this.updateCSSNode();
    }
    return font;
  }

  /**
   * Make a request to get the font list.
   *
   * @param {boolen} force Force the request to trigger again.
   * @returns {Promise<import('../components/google-fonts-control/types').GoogleFontItem[] | Promise<import('../components/google-fonts-control/types').GoogleFontItem[]>>} Return the result or the request that is in pending.
   */
  async requestFonts() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if ('done' === this.status) {
      return this.fonts;
    }
    if ('none' === this.status) {
      this.status = 'loading';
      this.request = new Promise(async (resolve, reject) => {
        if ('done' === this.status && !force) {
          resolve(this.fonts);
        }
        if (force) {
          this.controller.abort();
        }
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyClGdkPJ1BvgLOol5JAkQY4Mv2lkLYu00k', {
          signal: this.controller.signal
        }).then(blob => blob.json()).then(data => {
          this.fonts = data.items;
          this.status = 'done';
          resolve(this.fonts);
        }).catch(e => {
          this.status = 'error';
          reject(e);
        });
      });
    }
    return this.request;
  }

  /**
   * Update the node CSS.
   */
  updateCSSNode() {
    this.node.innerHTML = this.renderCSSFont();
  }
  attach() {
    if (!this.isAttaching) {
      this.isAttaching = true;
      setTimeout(() => {
        var _getEditorIframe$cont, _getEditorIframe, _getEditorIframe$cont2;
        const currentDocument = (_getEditorIframe$cont = (_getEditorIframe = getEditorIframe()) === null || _getEditorIframe === void 0 ? void 0 : (_getEditorIframe$cont2 = _getEditorIframe.contentWindow) === null || _getEditorIframe$cont2 === void 0 ? void 0 : _getEditorIframe$cont2.document) !== null && _getEditorIframe$cont !== void 0 ? _getEditorIframe$cont : document;
        if (!(currentDocument !== null && currentDocument !== void 0 && currentDocument.querySelector('[data-generator*="otter-blocks-fonts-loader"'))) {
          var _currentDocument$head;
          currentDocument === null || currentDocument === void 0 ? void 0 : (_currentDocument$head = currentDocument.head) === null || _currentDocument$head === void 0 ? void 0 : _currentDocument$head.appendChild(this.node);
        }
        this.isAttaching = false;
      }, 500);
    }
  }

  /**
   * Render the Font Face for every used font.
   */
  renderCSSFont() {
    return Array.from(this.usedFonts).map(_ref => {
      var _ref2, _font$files$variant, _font$files, _font$files2;
      let {
        font,
        variant
      } = _ref;
      const url = (_ref2 = (_font$files$variant = (_font$files = font.files) === null || _font$files === void 0 ? void 0 : _font$files[variant]) !== null && _font$files$variant !== void 0 ? _font$files$variant : (_font$files2 = font.files) === null || _font$files2 === void 0 ? void 0 : _font$files2.regular) === null || _ref2 === void 0 ? void 0 : _ref2.replace('http://', 'https://');
      return `
				@font-face {
					font-family: "${font.family}";
					src: url('${url}'); /* IE9 Compat Modes */
					src: url('${url}')  format('truetype'), /* Safari, Android, iOS */
				}
			`;
    }).join('\n');
  }
}
const googleFontsLoader = new GoogleFontsLoader();
Object.seal(googleFontsLoader);
/* harmony default export */ __webpack_exports__["default"] = (googleFontsLoader);

/***/ }),

/***/ "./src/helpers/icon.js":
/*!*****************************!*\
  !*** ./src/helpers/icon.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArwDn": function() { return /* binding */ ArwDn; },
/* harmony export */   "ArwLft": function() { return /* binding */ ArwLft; },
/* harmony export */   "ArwRgt": function() { return /* binding */ ArwRgt; },
/* harmony export */   "ArwUp": function() { return /* binding */ ArwUp; },
/* harmony export */   "BgGraclr": function() { return /* binding */ BgGraclr; },
/* harmony export */   "BgImg": function() { return /* binding */ BgImg; },
/* harmony export */   "Bgclr": function() { return /* binding */ Bgclr; },
/* harmony export */   "Center": function() { return /* binding */ Center; },
/* harmony export */   "ConatinerIcon": function() { return /* binding */ ConatinerIcon; },
/* harmony export */   "Custom": function() { return /* binding */ Custom; },
/* harmony export */   "End": function() { return /* binding */ End; },
/* harmony export */   "Grow": function() { return /* binding */ Grow; },
/* harmony export */   "HeadingIcon": function() { return /* binding */ HeadingIcon; },
/* harmony export */   "HorizontalLeft": function() { return /* binding */ HorizontalLeft; },
/* harmony export */   "HorizontalRight": function() { return /* binding */ HorizontalRight; },
/* harmony export */   "JfCntctr": function() { return /* binding */ JfCntctr; },
/* harmony export */   "JfCntctr1": function() { return /* binding */ JfCntctr1; },
/* harmony export */   "JfCntend": function() { return /* binding */ JfCntend; },
/* harmony export */   "JfCntend1": function() { return /* binding */ JfCntend1; },
/* harmony export */   "JfCntendRR": function() { return /* binding */ JfCntendRR; },
/* harmony export */   "JfCntsparnd": function() { return /* binding */ JfCntsparnd; },
/* harmony export */   "JfCntsparnd1": function() { return /* binding */ JfCntsparnd1; },
/* harmony export */   "JfCntspbtn": function() { return /* binding */ JfCntspbtn; },
/* harmony export */   "JfCntspbtn1": function() { return /* binding */ JfCntspbtn1; },
/* harmony export */   "JfCntspevn": function() { return /* binding */ JfCntspevn; },
/* harmony export */   "JfCntspevn1": function() { return /* binding */ JfCntspevn1; },
/* harmony export */   "JfCntstr": function() { return /* binding */ JfCntstr; },
/* harmony export */   "JfCntstr1": function() { return /* binding */ JfCntstr1; },
/* harmony export */   "JfCntstrRR": function() { return /* binding */ JfCntstrRR; },
/* harmony export */   "None": function() { return /* binding */ None; },
/* harmony export */   "OrderEnd": function() { return /* binding */ OrderEnd; },
/* harmony export */   "OrderStart": function() { return /* binding */ OrderStart; },
/* harmony export */   "Shrink": function() { return /* binding */ Shrink; },
/* harmony export */   "Start": function() { return /* binding */ Start; },
/* harmony export */   "Strech": function() { return /* binding */ Strech; },
/* harmony export */   "VerticalBottom": function() { return /* binding */ VerticalBottom; },
/* harmony export */   "VerticalTop": function() { return /* binding */ VerticalTop; },
/* harmony export */   "alignBottom": function() { return /* binding */ alignBottom; },
/* harmony export */   "alignCenter": function() { return /* binding */ alignCenter; },
/* harmony export */   "alignTop": function() { return /* binding */ alignTop; },
/* harmony export */   "alignitemcnt": function() { return /* binding */ alignitemcnt; },
/* harmony export */   "alignitemcnt1": function() { return /* binding */ alignitemcnt1; },
/* harmony export */   "alignitemend": function() { return /* binding */ alignitemend; },
/* harmony export */   "alignitemend1": function() { return /* binding */ alignitemend1; },
/* harmony export */   "alignitemstr": function() { return /* binding */ alignitemstr; },
/* harmony export */   "alignitemstr1": function() { return /* binding */ alignitemstr1; },
/* harmony export */   "alignitemstrech": function() { return /* binding */ alignitemstrech; },
/* harmony export */   "alignitemstrech1": function() { return /* binding */ alignitemstrech1; },
/* harmony export */   "checkIcon": function() { return /* binding */ checkIcon; },
/* harmony export */   "wrap1": function() { return /* binding */ wrap1; },
/* harmony export */   "wrap2": function() { return /* binding */ wrap2; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const checkIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
const alignBottom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
const alignCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
const alignTop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "101",
  y: "102",
  width: "298",
  height: "20",
  rx: "10",
  ry: "10"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy",
  "data-name": "Rounded Rectangle 1 copy",
  class: "cls-1",
  x: "101",
  y: "379",
  width: "298",
  height: "20",
  rx: "10",
  ry: "10"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_2_copy",
  "data-name": "Rounded Rectangle 2 copy",
  class: "cls-1",
  x: "182",
  y: "148",
  width: "46",
  height: "205",
  rx: "19.5",
  ry: "19.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_2_copy_2",
  "data-name": "Rounded Rectangle 2 copy 2",
  class: "cls-1",
  x: "272",
  y: "148",
  width: "46",
  height: "205",
  rx: "19.5",
  ry: "19.5"
}));
const Start = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "114",
  width: "372",
  height: "36",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy",
  "data-name": "Rounded Rectangle 1 copy",
  class: "cls-1",
  x: "194",
  y: "172",
  width: "41",
  height: "244",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_2",
  "data-name": "Rounded Rectangle 1 copy 2",
  class: "cls-1",
  x: "275",
  y: "172",
  width: "41",
  height: "141",
  rx: "18",
  ry: "18"
}));
const Center = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "232",
  width: "372",
  height: "36",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy",
  "data-name": "Rounded Rectangle 1 copy",
  class: "cls-1",
  x: "195",
  y: "128",
  width: "41",
  height: "244",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_2",
  "data-name": "Rounded Rectangle 1 copy 2",
  class: "cls-1",
  x: "262",
  y: "180",
  width: "41",
  height: "141",
  rx: "18",
  ry: "18"
}));
const End = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "347",
  width: "372",
  height: "36",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy",
  "data-name": "Rounded Rectangle 1 copy",
  class: "cls-1",
  x: "193",
  y: "84",
  width: "41",
  height: "244",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_2",
  "data-name": "Rounded Rectangle 1 copy 2",
  class: "cls-1",
  x: "276",
  y: "180",
  width: "41",
  height: "141",
  rx: "18",
  ry: "18"
}));
const Strech = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "384",
  width: "372",
  height: "36",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_3",
  "data-name": "Rounded Rectangle 1 copy 3",
  class: "cls-1",
  x: "64",
  y: "80",
  width: "372",
  height: "36",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy",
  "data-name": "Rounded Rectangle 1 copy",
  class: "cls-1",
  x: "190",
  y: "137",
  width: "41",
  height: "219",
  rx: "18",
  ry: "18"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_2",
  "data-name": "Rounded Rectangle 1 copy 2",
  class: "cls-1",
  x: "276",
  y: "137",
  width: "41",
  height: "219",
  rx: "18",
  ry: "18"
}));
const OrderStart = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  d: "M88,64h2.989a14,14,0,0,1,14,14V422a14,14,0,0,1-14,14H88a14,14,0,0,1-14-14V78A14,14,0,0,1,88,64Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  d: "M426.011,265.977l-223.5.142c10.788,29.72,16.161,49.1,16.728,75.529-24.524-45.547-56.382-69.25-94.877-91.535,38.467-21.393,68.89-47.493,94.761-91.689-1.635,28.722-6.091,46.069-16.966,77.688l223.835-.143Z"
}));
const OrderEnd = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "395",
  y: "64",
  width: "31",
  height: "372",
  rx: "14",
  ry: "14"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M73.99,234.023l223.5-.142c-10.788-29.72-16.161-49.1-16.728-75.529,24.524,45.547,56.382,69.25,94.877,91.535-38.467,21.393-68.89,47.493-94.761,91.689,1.635-28.722,6.091-46.069,16.966-77.688l-223.835.143Z"
}));
const Custom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  class: "cls-1",
  cx: "250",
  cy: "107",
  r: "40"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  id: "Ellipse_1_copy",
  "data-name": "Ellipse 1 copy",
  class: "cls-1",
  cx: "250",
  cy: "250",
  r: "40"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  id: "Ellipse_1_copy_2",
  "data-name": "Ellipse 1 copy 2",
  class: "cls-1",
  cx: "250",
  cy: "394",
  r: "40"
}));
const None = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  d: "M137.231,116.182a175,175,0,1,0,246.586,21.05A175,175,0,0,0,137.231,116.182Zm12.062,218.685a131.726,131.726,0,0,1,.773-170.66L317.614,363.03A131.726,131.726,0,0,1,149.293,334.867Zm200.641,0.926L182.386,136.971A131.711,131.711,0,0,1,349.934,335.793Z"
}));
const Shrink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "240",
  y: "64",
  width: "21",
  height: "372",
  rx: "10.5",
  ry: "10.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M56.995,247.762l116.336-.069c-5.616-14.437-8.412-23.852-8.708-36.689,12.766,22.125,29.348,33.639,49.385,44.464-20.022,10.392-35.858,23.07-49.324,44.539,0.851-13.952,3.17-22.379,8.831-37.738L57,262.338Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Shape_1_copy",
  "data-name": "Shape 1 copy",
  class: "cls-2",
  d: "M442.005,263.238l-116.335.069c5.616,14.437,8.412,23.852,8.708,36.689-12.766-22.125-29.348-33.639-49.385-44.464,20.022-10.392,35.858-23.07,49.324-44.539-0.851,13.952-3.17,22.379-8.831,37.738L442,248.662Z"
}));
const Grow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "388",
  y: "64",
  width: "21",
  height: "372",
  rx: "10.5",
  ry: "10.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1_copy_3",
  "data-name": "Rounded Rectangle 1 copy 3",
  class: "cls-1",
  x: "91",
  y: "64",
  width: "21",
  height: "372",
  rx: "10.5",
  ry: "10.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M307.005,252.042l-116.335.077c5.616,16.041,8.412,26.5,8.708,40.765-12.766-24.582-29.348-37.376-49.385-49.4,20.022-11.546,35.858-25.633,49.324-49.487-0.851,15.5-3.17,24.865-8.831,41.93L307,235.846Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Shape_1_copy",
  "data-name": "Shape 1 copy",
  class: "cls-2",
  d: "M197,235.958l116.335-.077c-5.616-16.041-8.412-26.5-8.708-40.765,12.766,24.582,29.348,37.376,49.385,49.4-20.022,11.546-35.858,25.633-49.324,49.487,0.851-15.5,3.17-24.865,8.831-41.93L197,252.154Z"
}));
const HorizontalLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "59",
  y: "64",
  width: "22",
  height: "372",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M441.012,268.521l-250.455.076c12.09,15.9,18.111,26.264,18.747,40.4-27.482-24.361-63.182-37.04-106.32-48.96,43.106-11.442,77.2-25.4,106.189-49.042-1.832,15.362-6.825,24.641-19.012,41.553l250.829-.076Z"
}));
const HorizontalRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "419",
  y: "64",
  width: "22",
  height: "372",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M58.988,231.479l250.455-.076c-12.09-15.9-18.111-26.264-18.747-40.4,27.482,24.361,63.182,37.04,106.32,48.96-43.106,11.442-77.2,25.4-106.189,49.042,1.832-15.362,6.825-24.641,19.012-41.553L59.01,247.53Z"
}));
const VerticalTop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "59",
  width: "372",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M231.479,441.012L231.4,190.557c-15.9,12.09-26.264,18.111-40.4,18.747,24.361-27.483,37.04-63.182,48.96-106.32,11.442,43.106,25.4,77.2,49.042,106.189-15.362-1.832-24.641-6.825-41.553-19.012L247.53,440.99Z"
}));
const VerticalBottom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_1",
  "data-name": "Rounded Rectangle 1",
  class: "cls-1",
  x: "64",
  y: "419",
  width: "372",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M268.521,58.988L268.6,309.443c15.9-12.09,26.264-18.111,40.4-18.747-24.361,27.483-37.04,63.182-48.96,106.32-11.442-43.106-25.4-77.2-49.042-106.189,15.362,1.832,24.641,6.825,41.553,19.012L252.47,59.01Z"
}));
const Bgclr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  "fill-rule": "evenodd",
  fill: "#5d5d5e",
  d: "M77,78h62.041V422H77V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy_3",
  "data-name": "Rectangle 1 copy 3",
  class: "cls-2",
  "fill-rule": "evenodd",
  fill: "#bbbbbc",
  d: "M360.959,78H423V422H360.959V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy",
  "data-name": "Rectangle 1 copy",
  class: "cls-3",
  "fill-rule": "evenodd",
  fill: "#bdbdbe",
  d: "M139.041,78H250V422H139.041V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy_2",
  "data-name": "Rectangle 1 copy 2",
  class: "cls-4",
  "fill-rule": "evenodd",
  fill: "#e3e3e5",
  d: "M250,78H360.959V422H250V78Z"
}));
const BgGraclr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  "fill-rule": "evenodd",
  fill: "#5d5d5e",
  d: "M77,78h62.041V422H77V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy_3",
  "data-name": "Rectangle 1 copy 3",
  class: "cls-2",
  "fill-rule": "evenodd",
  fill: "#bbbbbc",
  d: "M360.959,78H423V422H360.959V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy",
  "data-name": "Rectangle 1 copy",
  class: "cls-3",
  "fill-rule": "evenodd",
  fill: "#bdbdbe",
  d: "M139.041,78H250V422H139.041V78Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "Rectangle_1_copy_2",
  "data-name": "Rectangle 1 copy 2",
  class: "cls-4",
  "fill-rule": "evenodd",
  fill: "#e3e3e5",
  d: "M250,78H360.959V422H250V78Z"
}));
const BgImg = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  class: "cls-1",
  fill: "#5d5d5e",
  cx: "137.5",
  cy: "200.5",
  r: "32.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  "fill-rule": "evenodd",
  fill: "#5d5d5e",
  d: "M320.261,246.989L431,431.6l-98.452,1.416L186,431.918Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  fill: "#5d5d5e",
  d: "M146.8,267L227,420.423l-26.113,9.568L89.012,435.01Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-3",
  fill: "none",
  stroke: "#5d5d5e",
  "stroke-width": "15px",
  x: "49",
  y: "103",
  width: "408",
  height: "335",
  rx: "15",
  ry: "15"
}));
const ArwLft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  fill: "#5d5d5e",
  "fill-rule": "evenodd",
  d: "M447.994,265.555H156.067c14.066,29.692,21.068,49.056,21.787,75.452-32-45.51-73.587-69.206-123.848-91.49,50.261-21.344,90.021-47.395,123.848-91.524-2.158,28.688-7.993,46.013-22.224,77.588H447.994v29.974Z"
}));
const ArwRgt = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  fill: "#5d5d5e",
  "fill-rule": "evenodd",
  d: "M53.006,234.445H344.933c-14.066-29.692-21.068-49.056-21.787-75.452,32,45.51,73.587,69.206,123.848,91.49-50.261,21.344-90.021,47.395-123.848,91.524,2.158-28.688,7.993-46.013,22.224-77.588H53.006V234.445Z"
}));
const ArwUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  fill: "#5d5d5e",
  "fill-rule": "evenodd",
  d: "M235.445,446.994V155.067c-29.692,14.066-49.056,21.068-75.452,21.787,45.51-32,69.206-73.587,91.49-123.848,21.344,50.261,47.395,90.021,91.524,123.848-28.688-2.158-46.013-7.993-77.588-22.224V446.994H235.445Z"
}));
const ArwDn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  fill: "#5d5d5e",
  "fill-rule": "evenodd",
  d: "M266.555,53.006V344.933c29.692-14.066,49.056-21.068,75.452-21.787-45.51,32-69.206,73.587-91.49,123.848-21.344-50.261-47.395-90.021-91.524-123.848,28.688,2.158,46.013,7.993,77.588,22.224V53.006h29.974Z"
}));
const JfCntstr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "284",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "226",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "175",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntend = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "175",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "233",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "290",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntctr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "174",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "284",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "231",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntspbtn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "166",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "291",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "350",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_5",
  "data-name": "Rounded Rectangle 5 copy 5",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "115",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntsparnd = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "204",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "255",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "345",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_5",
  "data-name": "Rounded Rectangle 5 copy 5",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "119",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntspevn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content_more",
  "data-name": "Justify content more",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "189",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "133",
  y: "270",
  width: "235",
  height: "42",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "345",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_5",
  "data-name": "Rounded Rectangle 5 copy 5",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "107",
  y: "119",
  width: "287",
  height: "36",
  rx: "9",
  ry: "9"
}));
const JfCntstr1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "278",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "221",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "180",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const JfCntctr1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "283",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "176",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "236",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const JfCntend1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "180",
  y: "127",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "237",
  y: "127",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "294",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));

// row reverse
const JfCntstrRR = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content",
  "data-name": "Justify content",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "165",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "221",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "286",
  y: "92",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const JfCntendRR = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content",
  "data-name": "Justify content",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "282",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "226",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "177",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
/************************* */

const JfCntspbtn1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "161",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "300",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "363",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_4",
  "data-name": "Rounded Rectangle 5 copy 4",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "112",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const JfCntsparnd1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Justify_content",
  "data-name": "Justify content",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "201",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "258",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "360",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_7",
  "data-name": "Rounded Rectangle 5 copy 7",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "114",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const JfCntspevn1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy",
  "data-name": "Rounded Rectangle 5 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "198",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_3",
  "data-name": "Rounded Rectangle 5 copy 3",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "261",
  y: "128",
  width: "42",
  height: "245",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_2",
  "data-name": "Rounded Rectangle 5 copy 2",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "354",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_4",
  "data-name": "Rounded Rectangle 5 copy 4",
  fill: "#a1a1a2",
  class: "cls-2",
  x: "121",
  y: "91",
  width: "26",
  height: "318",
  rx: "9",
  ry: "9"
}));
const alignitemstr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5",
  "data-name": "Rounded Rectangle 5",
  fill: "#777778",
  class: "cls-1",
  x: "106",
  y: "62",
  width: "29",
  height: "376",
  rx: "14.5",
  ry: "14.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6",
  "data-name": "Rounded Rectangle 6",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "147",
  y: "190",
  width: "149",
  height: "52",
  rx: "24",
  ry: "24"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6_copy",
  "data-name": "Rounded Rectangle 6 copy",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "147",
  y: "258",
  width: "248",
  height: "52",
  rx: "24",
  ry: "24"
}));
const alignitemcnt = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5",
  "data-name": "Rounded Rectangle 5",
  fill: "#777778",
  class: "cls-1",
  x: "236",
  y: "62",
  width: "29",
  height: "376",
  rx: "14.5",
  ry: "14.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6",
  "data-name": "Rounded Rectangle 6",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "173",
  y: "259",
  width: "155",
  height: "52",
  rx: "24",
  ry: "24"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6_copy",
  "data-name": "Rounded Rectangle 6 copy",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "119",
  y: "189",
  width: "262",
  height: "52",
  rx: "24",
  ry: "24"
}));
const alignitemend = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5",
  "data-name": "Rounded Rectangle 5",
  fill: "#777778",
  class: "cls-1",
  x: "367",
  y: "62",
  width: "29",
  height: "376",
  rx: "14.5",
  ry: "14.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6",
  "data-name": "Rounded Rectangle 6",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "203",
  y: "198",
  width: "149",
  height: "52",
  rx: "24",
  ry: "24"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6_copy",
  "data-name": "Rounded Rectangle 6 copy",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "104",
  y: "266",
  width: "248",
  height: "52",
  rx: "24",
  ry: "24"
}));
const alignitemstrech = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5",
  "data-name": "Rounded Rectangle 5",
  fill: "#777778",
  class: "cls-1",
  x: "379",
  y: "62",
  width: "29",
  height: "376",
  rx: "14.5",
  ry: "14.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_5_copy_6",
  "data-name": "Rounded Rectangle 5 copy 6",
  fill: "#777778",
  class: "cls-1",
  x: "93",
  y: "62",
  width: "29",
  height: "376",
  rx: "14.5",
  ry: "14.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6",
  "data-name": "Rounded Rectangle 6",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "139",
  y: "190",
  width: "225",
  height: "52",
  rx: "24",
  ry: "24"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_6_copy",
  "data-name": "Rounded Rectangle 6 copy",
  fill: "#5d5d5e",
  class: "cls-2",
  x: "139",
  y: "258",
  width: "225",
  height: "52",
  rx: "24",
  ry: "24"
}));
const alignitemstr1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "78",
  y: "142",
  width: "344",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "201",
  y: "177",
  width: "40",
  height: "182",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy",
  "data-name": "Rectangle 8 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "259",
  y: "177",
  width: "40",
  height: "120",
  rx: "16",
  ry: "16"
}));
const alignitemcnt1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "78",
  y: "239",
  width: "344",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "200",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy",
  "data-name": "Rectangle 8 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "259",
  y: "190",
  width: "40",
  height: "120",
  rx: "16",
  ry: "16"
}));
const alignitemend1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "78",
  y: "337",
  width: "344",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "259",
  y: "142",
  width: "40",
  height: "182",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy",
  "data-name": "Rectangle 8 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "201",
  y: "204",
  width: "40",
  height: "120",
  rx: "16",
  ry: "16"
}));
const alignitemstrech1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "92",
  y: "97",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_7_copy",
  "data-name": "Rectangle 7 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "92",
  y: "384",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "196",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy_2",
  "data-name": "Rectangle 8 copy 2",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "264",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}));
const wrap1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "92",
  y: "97",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_7_copy",
  "data-name": "Rectangle 7 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "92",
  y: "384",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "196",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy_2",
  "data-name": "Rectangle 8 copy 2",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "264",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}));
const wrap2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "92",
  y: "97",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_7_copy",
  "data-name": "Rectangle 7 copy",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "92",
  y: "384",
  width: "316",
  height: "22",
  rx: "11",
  ry: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "cls-1",
  x: "196",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rectangle_8_copy_2",
  "data-name": "Rectangle 8 copy 2",
  fill: "#5d5d5e",
  class: "cls-1",
  x: "264",
  y: "131",
  width: "40",
  height: "238",
  rx: "16",
  ry: "16"
}));
const HeadingIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  class: "th-block-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
  id: "H",
  "font-size": "347.65px",
  "text-anchor": "middle",
  "font-family": "Comfortaa",
  "font-weight": "700",
  fill: "#777778",
  class: "cls-1",
  transform: "matrix(1.184, 0, 0, 1.184, 250, 405.422)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tspan", {
  x: "0"
}, "H")));
const ConatinerIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  class: "th-block-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  viewBox: "0 0 500 500"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10",
  "data-name": "Rounded Rectangle 10",
  fill: "#000",
  class: "cls-1",
  x: "110",
  y: "112",
  width: "83",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy",
  "data-name": "Rounded Rectangle 10 copy",
  fill: "#000",
  class: "cls-1",
  x: "110",
  y: "112",
  width: "8",
  height: "83",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_2",
  "data-name": "Rounded Rectangle 10 copy 2",
  fill: "#000",
  class: "cls-1",
  x: "307",
  y: "381",
  width: "83",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_3",
  "data-name": "Rounded Rectangle 10 copy 3",
  fill: "#000",
  class: "cls-1",
  x: "382",
  y: "306",
  width: "8",
  height: "83",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_6",
  "data-name": "Rounded Rectangle 10 copy 6",
  fill: "#000",
  class: "cls-1",
  x: "110",
  y: "306",
  width: "8",
  height: "83",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_7",
  "data-name": "Rounded Rectangle 10 copy 7",
  fill: "#000",
  class: "cls-1",
  x: "110",
  y: "381",
  width: "83",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_4",
  "data-name": "Rounded Rectangle 10 copy 4",
  fill: "#000",
  class: "cls-1",
  x: "382",
  y: "112",
  width: "8",
  height: "83",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_5",
  "data-name": "Rounded Rectangle 10 copy 5",
  fill: "#000",
  class: "cls-1",
  x: "307",
  y: "112",
  width: "83",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_8",
  "data-name": "Rounded Rectangle 10 copy 8",
  fill: "#000",
  class: "cls-2",
  x: "214",
  y: "112",
  width: "72",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_9",
  "data-name": "Rounded Rectangle 10 copy 9",
  fill: "#000",
  class: "cls-2",
  x: "110",
  y: "214",
  width: "8",
  height: "72",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_10",
  "data-name": "Rounded Rectangle 10 copy 10",
  fill: "#000",
  x: "382",
  y: "214",
  width: "8",
  height: "72",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_11",
  "data-name": "Rounded Rectangle 10 copy 11",
  fill: "#000",
  x: "382",
  y: "214",
  width: "8",
  height: "72",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_12",
  "data-name": "Rounded Rectangle 10 copy 12",
  fill: "#000",
  x: "214",
  y: "381",
  width: "72",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_13",
  "data-name": "Rounded Rectangle 10 copy 13",
  fill: "#000",
  x: "214",
  y: "246",
  width: "72",
  height: "8",
  rx: "4",
  ry: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  id: "Rounded_Rectangle_10_copy_14",
  "data-name": "Rounded Rectangle 10 copy 14",
  fill: "#000",
  x: "246",
  y: "214",
  width: "8",
  height: "72",
  rx: "4",
  ry: "4"
}));

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.5';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                value = trustedTypesPolicy.createHTML(value);
                break;

              case 'TrustedScriptURL':
                value = trustedTypesPolicy.createScriptURL(value);
                break;
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/hex-rgba/index.js":
/*!****************************************!*\
  !*** ./node_modules/hex-rgba/index.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


function hexToRgba(hex, opacity){
  var opacity = opacity || 100;
  var hex = hex.replace('#', '');
  if(hex.length === 6) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  } else {
    var rd = hex.substring(0, 1) + hex.substring(0, 1);
    var gd = hex.substring(1, 2) + hex.substring(1, 2);
    var bd = hex.substring(2, 3) + hex.substring(2, 3);
    var r = parseInt(rd, 16);
    var g = parseInt(gd, 16);
    var b = parseInt(bd, 16);
  }

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
};

module.exports = hexToRgba;

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./inc/block/advance-product/editor.scss":
/*!***********************************************!*\
  !*** ./inc/block/advance-product/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./inc/block/advance-product/style.scss":
/*!**********************************************!*\
  !*** ./inc/block/advance-product/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/icon-picker/editor.scss":
/*!************************************************!*\
  !*** ./src/components/icon-picker/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortableContainer": function() { return /* binding */ sortableContainer; },
/* harmony export */   "SortableElement": function() { return /* binding */ sortableElement; },
/* harmony export */   "SortableHandle": function() { return /* binding */ sortableHandle; },
/* harmony export */   "arrayMove": function() { return /* binding */ arrayMove; },
/* harmony export */   "sortableContainer": function() { return /* binding */ sortableContainer; },
/* harmony export */   "sortableElement": function() { return /* binding */ sortableElement; },
/* harmony export */   "sortableHandle": function() { return /* binding */ sortableHandle; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
















var Manager = function () {
  function Manager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_12___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_12___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_12___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      var _getPrototypeOf2;

      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle)).call.apply(_getPrototypeOf2, [this].concat(args)));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "wrappedInstance", (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)());

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(['x', 'y', 'xy']),
  contentWindow: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().any),
  disableAutoscroll: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  distance: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  getContainer: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  getHelperDimensions: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  helperClass: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), typeof HTMLElement === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_14___default().any) : prop_types__WEBPACK_IMPORTED_MODULE_14___default().instanceOf(HTMLElement)]),
  hideSortableGhost: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  keyboardSortingTransitionDuration: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  lockAxis: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]))]),
  lockToContainerEdges: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  onSortEnd: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortMove: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortOver: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  pressDelay: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  pressThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    up: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    down: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number))
  }),
  shouldCancelStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  transitionDuration: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  updateBeforeSortStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  useDragHandle: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  useWindowAsScrollContainer: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_12___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
var SortableContext = (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)({
  manager: {}
});
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition((0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? event.target : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function' && event.cancelable) {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      var manager = new Manager();
      validateProps(props);
      _this.manager = manager;
      _this.wrappedInstance = (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)();
      _this.sortableContextValue = {
        manager: manager
      };
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(SortableContext.Provider, {
          value: this.sortableContextValue
        }, (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps))));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), _temp;
}

var propTypes$1 = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number.isRequired),
  collection: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      var _getPrototypeOf2;

      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement)).call.apply(_getPrototypeOf2, [this].concat(args)));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "wrappedInstance", (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)());

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextType", SortableContext), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./inc/block/advance-product/block.json":
/*!**********************************************!*\
  !*** ./inc/block/advance-product/block.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"themehunk-blocks/advance-product","version":"0.1.0","title":"Advance Product","category":"themehunk-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","textdomain":"themehunk-block","attributes":{"id":{"type":"string"},"uniqueID":{"type":"string"},"productCategories":{"type":"array","default":[]},"productType":{"type":"string","default":"recent"},"productShow":{"type":"number"},"productShowTablet":{"type":"number"},"productShowMobile":{"type":"number"},"productCol":{"type":"number"},"productColTablet":{"type":"number"},"productColMobile":{"type":"number"},"productOrderby":{"type":"string"},"productOrder":{"type":"string"},"manualProduct":{"type":"array","default":[]},"excludeProduct":{"type":"array","default":[]},"stockStatus":{"type":"array","default":[]},"template":{"type":"array","default":["image","category","title","price","rating","button"]},"displayFeaturedImage":{"type":"boolean","default":true},"displayCategory":{"type":"boolean","default":true},"displayTitle":{"type":"boolean","default":true},"displayPrice":{"type":"boolean","default":true},"displayDescription":{"type":"boolean","default":true},"displayRating":{"type":"boolean","default":true},"displayButton":{"type":"boolean","default":true},"cropImage":{"type":"boolean","default":false},"prouctTitleTag":{"type":"number","default":"h3"},"titleTypography":{"type":"boolean","default":false},"titlefontFamily":{"type":"string","default":"default"},"titlefontVariant":{"type":"string"},"titlefontStyle":{"type":"string"},"titletextTransform":{"type":"string"},"titlefontSize":{"type":"number"},"titlefontSizeTablet":{"type":"number"},"titlefontSizeMobile":{"type":"number"},"titlefontSizeUnit":{"type":"string","default":"px"},"titlelineHeight":{"type":"number"},"titlelineHeightTablet":{"type":"number"},"titlelineHeightMobile":{"type":"number"},"titlelineHeightUnit":{"type":"string","default":"px"},"titleletterSpacing":{"type":"number"},"titleletterSpacingTablet":{"type":"number"},"titleletterSpacingMobile":{"type":"number"},"titleletterSpacingUnit":{"type":"string","default":"px"},"titleColor":{"type":"boolean","default":false},"productTitleColor":{"type":"string","default":""},"productTitleColorHvr":{"type":"string","default":""},"catTypography":{"type":"boolean","default":false},"catfontFamily":{"type":"string","default":"default"},"catfontVariant":{"type":"string"},"catfontStyle":{"type":"string"},"cattextTransform":{"type":"string"},"catfontSize":{"type":"number"},"catfontSizeTablet":{"type":"number"},"catfontSizeMobile":{"type":"number"},"catfontSizeUnit":{"type":"string","default":"px"},"catlineHeight":{"type":"number"},"catlineHeightTablet":{"type":"number"},"catlineHeightMobile":{"type":"number"},"catlineHeightUnit":{"type":"string","default":"px"},"catletterSpacing":{"type":"number"},"catletterSpacingTablet":{"type":"number"},"catletterSpacingMobile":{"type":"number"},"catletterSpacingUnit":{"type":"string","default":"px"},"catColor":{"type":"boolean","default":false},"catTxtColor":{"type":"string","default":""},"catTxtColorHvr":{"type":"string","default":""},"priceTypography":{"type":"boolean","default":false},"pricefontFamily":{"type":"string","default":"default"},"pricefontVariant":{"type":"string"},"pricefontStyle":{"type":"string"},"pricetextTransform":{"type":"string"},"pricefontSize":{"type":"number"},"pricefontSizeTablet":{"type":"number"},"pricefontSizeMobile":{"type":"number"},"pricefontSizeUnit":{"type":"string","default":"px"},"pricelineHeight":{"type":"number"},"pricelineHeightTablet":{"type":"number"},"pricelineHeightMobile":{"type":"number"},"pricelineHeightUnit":{"type":"string","default":"px"},"priceletterSpacing":{"type":"number"},"priceletterSpacingTablet":{"type":"number"},"priceletterSpacingMobile":{"type":"number"},"priceletterSpacingUnit":{"type":"string","default":"px"},"PriceColor":{"type":"boolean","default":false},"priceColor":{"type":"string","default":""},"priceDelColor":{"type":"string","default":""},"ratingfontSize":{"type":"number"},"ratingfontSizeTablet":{"type":"number"},"ratingfontSizeMobile":{"type":"number"},"ratingfontSizeUnit":{"type":"string","default":"px"},"ratinglineHeight":{"type":"number"},"ratinglineHeightTablet":{"type":"number"},"ratinglineHeightMobile":{"type":"number"},"ratinglineHeightUnit":{"type":"string","default":"px"},"ratingletterSpacing":{"type":"number"},"ratingletterSpacingTablet":{"type":"number"},"ratingletterSpacingMobile":{"type":"number"},"ratingletterSpacingUnit":{"type":"string","default":"px"},"RatingColor":{"type":"boolean","default":false},"ratingColor":{"type":"string","default":""},"emptyratingColor":{"type":"string","default":""},"buttonTypography":{"type":"boolean","default":false},"buttonfontFamily":{"type":"string","default":"default"},"buttonfontVariant":{"type":"string"},"buttonfontStyle":{"type":"string"},"buttontextTransform":{"type":"string"},"buttonfontSize":{"type":"number"},"buttonfontSizeTablet":{"type":"number"},"buttonfontSizeMobile":{"type":"number"},"buttonfontSizeUnit":{"type":"string","default":"px"},"buttonlineHeight":{"type":"number"},"buttonlineHeightTablet":{"type":"number"},"buttonlineHeightMobile":{"type":"number"},"buttonlineHeightUnit":{"type":"string","default":"px"},"buttonletterSpacing":{"type":"number"},"buttonletterSpacingTablet":{"type":"number"},"buttonletterSpacingMobile":{"type":"number"},"buttonletterSpacingUnit":{"type":"string","default":"px"},"buttonClr":{"type":"boolean","default":false},"buttonTxtClr":{"type":"string","default":""},"buttonBgClr":{"type":"string","default":""},"buttonBrdrClr":{"type":"string","default":""},"buttonTxtClrHvr":{"type":"string","default":""},"buttonBgClrHvr":{"type":"string","default":""},"buttonBrdrClrHvr":{"type":"string","default":""},"buttonBrdrType":{"type":"string","default":""},"buttonborderWidthType":{"type":"string","default":"linked"},"buttonborderWidthUnit":{"type":"string","default":"px"},"buttonborderWidthTypeTablet":{"type":"string","default":"linked"},"buttonborderWidthTypeMobile":{"type":"string","default":"linked"},"buttonborderWidth":{"type":"number","default":0},"buttonborderWidthTablet":{"type":"number"},"buttonborderWidthMobile":{"type":"number"},"buttonborderWidthTop":{"type":"number","default":0},"buttonborderWidthTopTablet":{"type":"number"},"buttonborderWidthTopMobile":{"type":"number"},"buttonborderWidthBottom":{"type":"number","default":0},"buttonborderWidthBottomTablet":{"type":"number"},"buttonborderWidthBottomMobile":{"type":"number"},"buttonborderWidthRight":{"type":"number","default":0},"buttonborderWidthRightTablet":{"type":"number"},"buttonborderWidthRightMobile":{"type":"number"},"buttonborderWidthLeft":{"type":"number","default":0},"buttonborderWidthLeftTablet":{"type":"number"},"buttonborderWidthLeftMobile":{"type":"number"},"buttonSpaceType":{"type":"string","default":"linked"},"buttonSpaceUnit":{"type":"string","default":"px"},"buttonSpaceTypeTablet":{"type":"string","default":"linked"},"buttonSpaceTypeMobile":{"type":"string","default":"linked"},"buttonSpace":{"type":"number","default":0},"buttonSpaceTablet":{"type":"number"},"buttonSpaceMobile":{"type":"number"},"buttonSpaceTop":{"type":"number","default":0},"buttonSpaceTopTablet":{"type":"number"},"buttonSpaceTopMobile":{"type":"number"},"buttonSpaceBottom":{"type":"number","default":0},"buttonSpaceBottomTablet":{"type":"number"},"buttonSpaceBottomMobile":{"type":"number"},"buttonSpaceRight":{"type":"number","default":0},"buttonSpaceRightTablet":{"type":"number"},"buttonSpaceRightMobile":{"type":"number"},"buttonSpaceLeft":{"type":"number","default":0},"buttonSpaceLeftTablet":{"type":"number"},"buttonSpaceLeftMobile":{"type":"number"}},"supports":{"align":["wide","full"],"html":false}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"advance-product": 0,
/******/ 			"./style-advance-product": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthemehunk_block"] = self["webpackChunkthemehunk_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-advance-product"], function() { return __webpack_require__("./inc/block/advance-product/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=advance-product.js.map