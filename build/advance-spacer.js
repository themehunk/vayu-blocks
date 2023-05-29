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

/***/ "./inc/block/advance-spacer/edit.js":
/*!******************************************!*\
  !*** ./inc/block/advance-spacer/edit.js ***!
  \******************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hex-rgba */ "./node_modules/hex-rgba/index.js");
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hex_rgba__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./inc/block/advance-spacer/editor.scss");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.js */ "./inc/block/advance-spacer/settings.js");
/* harmony import */ var _src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/helpers/get-unique-id.js */ "./src/helpers/get-unique-id.js");

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
  const {
    addUniqueID
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('themehunk-blocks/data');
  const {
    isUniqueID,
    isUniqueBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return {
      isUniqueID: value => select('themehunk-blocks/data').isUniqueID(value),
      isUniqueBlock: (value, clientId) => select('themehunk-blocks/data').isUniqueBlock(value, clientId)
    };
  }, [clientId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const uniqueId = (0,_src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_11__["default"])(uniqueID, clientId, isUniqueID, isUniqueBlock);
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
  const onChangeHeight = newHeight => {
    setAttributes({
      height: newHeight
    });
  };
  const {
    isViewportAvailable,
    isPreviewDesktop,
    isPreviewTablet,
    isPreviewMobile
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
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
  const isLarger = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large', '>=');
  const isLarge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large', '<=');
  const isSmall = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('small', '>=');
  const isSmaller = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('small', '<=');
  let isDesktop = isLarger && !isLarge && isSmall && !isSmaller;
  let isTablet = !isLarger && !isLarge && isSmall && !isSmaller;
  let isMobile = !isLarger && !isLarge && !isSmall && !isSmaller;
  if (isViewportAvailable && !isMobile) {
    isDesktop = isPreviewDesktop;
    isTablet = isPreviewTablet;
    isMobile = isPreviewMobile;
  }
  if (!id) {
    setAttributes({
      id: clientId
    });
  }
  let customwidth;
  let stylesheet;
  let PositionProperties;
  let flexProperties;
  if (attributes.widthType == 'customwidth') {
    if (isDesktop) {
      customwidth = {
        '--width': attributes.customWidth + attributes.customWidthUnit,
        '--maxWidth': attributes.customWidth + attributes.customWidthUnit
      };
    }
    if (isTablet) {
      customwidth = {
        '--width': attributes.customWidthTablet + attributes.customWidthUnit,
        '--maxWidth': attributes.customWidthTablet + attributes.customWidthUnit
      };
    }
    if (isMobile) {
      customwidth = {
        '--width': attributes.customWidthMobile + attributes.customWidthUnit,
        '--maxWidth': attributes.customWidthMobile + attributes.customWidthUnit
      };
    }
  }
  if (isDesktop) {
    stylesheet = {
      '--height': attributes.height + attributes.heightUnit,
      '--paddingTop': 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingTop}${attributes.paddingUnit}`,
      '--paddingRight': 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingRight}${attributes.paddingUnit}`,
      '--paddingBottom': 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingBottom}${attributes.paddingUnit}`,
      '--paddingLeft': 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingLeft}${attributes.paddingUnit}`,
      '--marginTop': 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginTop}${attributes.marginUnit}`,
      '--marginRight': 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginRight}${attributes.marginUnit}`,
      '--marginBottom': 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginBottom}${attributes.marginUnit}`,
      '--marginLeft': 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginLeft}${attributes.marginUnit}`,
      '--zIndex': attributes.zindex,
      '--border-top-width': 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthTop}${attributes.borderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottom}${attributes.borderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthRight}${attributes.borderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeft}${attributes.borderWidthUnit}`,
      '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTop}${attributes.borderWidthHvrUnit}`,
      '--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottom}${attributes.borderWidthHvrUnit}`,
      '--border-right-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRight}${attributes.borderWidthHvrUnit}`,
      '--border-left-width-hvr': 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeft}${attributes.borderWidthHvrUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTop}${attributes.borderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRight}${attributes.borderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeft}${attributes.borderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottom}${attributes.borderRadiusUnit}`,
      '--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTop}${attributes.borderRadiusHvrUnit}`,
      '--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRight}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeft}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottom}${attributes.borderRadiusHvrUnit}`
    };

    /********************* */
    // position properies 
    /********************* */
    PositionProperties = {
      '--position': attributes.position
    };
    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--left': attributes.horizontalOrientationOffset + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--right': attributes.horizontalOrientationOffsetRight + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--top': attributes.verticalOrientationOffsetTop + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--bottom': attributes.verticalOrientationOffsetBottom + attributes.verticalOrientationOffsetBottomUnit
      };
    }

    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      '--align-self': attributes.alignSelf
    };

    // flex order
    if (attributes.order === 'start') {
      flexProperties = {
        ...flexProperties,
        '--order': '-9999'
      };
    } else if (attributes.order === 'end') {
      flexProperties = {
        ...flexProperties,
        '--order': '9999'
      };
    } else if (attributes.order === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--order': attributes.customOrder
      };
    }

    //flex size
    if (attributes.flexSize === 'none') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSize === 'grow') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '1',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSize === 'shrink') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '1'
      };
    } else if (attributes.flexSize === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': attributes.FlexGrowSize,
        '--flex-shrink': attributes.FlexShrinkSize
      };
    }
  }
  if (isTablet) {
    stylesheet = {
      '--height': attributes.heightTablet + attributes.heightUnit,
      '--paddingTop': 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingTopTablet}${attributes.paddingUnit}`,
      '--paddingRight': 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingRightTablet}${attributes.paddingUnit}`,
      '--paddingBottom': 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingBottomTablet}${attributes.paddingUnit}`,
      '--paddingLeft': 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingLeftTablet}${attributes.paddingUnit}`,
      '--marginTop': 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginTopTablet}${attributes.marginUnit}`,
      '--marginRight': 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginRightTablet}${attributes.marginUnit}`,
      '--marginBottom': 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginBottomTablet}${attributes.marginUnit}`,
      '--marginLeft': 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginLeftTablet}${attributes.marginUnit}`,
      '--zIndex': attributes.zindexTablet,
      '--border-top-width': 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopTablet}${attributes.borderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomTablet}${attributes.borderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightTablet}${attributes.borderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftTablet}${attributes.borderWidthUnit}`,
      '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTopTablet}${attributes.borderWidthHvrUnit}`,
      '--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottomTablet}${attributes.borderWidthHvrUnit}`,
      '--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRightTablet}${attributes.borderWidthHvrUnit}`,
      '--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeftTablet}${attributes.borderWidthHvrUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopTablet}${attributes.borderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightTablet}${attributes.borderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftTablet}${attributes.borderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomTablet}${attributes.borderRadiusUnit}`,
      '--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTopTablet}${attributes.borderRadiusHvrUnit}`,
      '--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRightTablet}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeftTablet}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottomTablet}${attributes.borderRadiusHvrUnit}`
    };

    // position properties

    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--left': attributes.horizontalOrientationOffsetTablet + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--right': attributes.horizontalOrientationOffsetRightTablet + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--top': attributes.verticalOrientationOffsetTopTablet + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--bottom': attributes.verticalOrientationOffsetBottomTablet + attributes.verticalOrientationOffsetBottomUnit
      };
    }

    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      '--align-self': attributes.alignSelfTablet
    };

    // flex order
    if (attributes.orderTablet === 'start') {
      flexProperties = {
        ...flexProperties,
        '--order': '-9999'
      };
    } else if (attributes.orderTablet === 'end') {
      flexProperties = {
        ...flexProperties,
        '--order': '9999'
      };
    } else if (attributes.orderTablet === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--order': attributes.customOrderTablet
      };
    }

    //flex size
    if (attributes.flexSizeTablet === 'none') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSizeTablet === 'grow') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '1',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSizeTablet === 'shrink') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '1'
      };
    } else if (attributes.flexSizeTablet === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': attributes.FlexGrowSizeTablet,
        '--flex-shrink': attributes.FlexShrinkSizeTablet
      };
    }
  }
  if (isMobile) {
    stylesheet = {
      '--height': attributes.heightMobile + attributes.heightUnit,
      '--paddingTop': 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingTopMobile}${attributes.paddingUnit}`,
      '--paddingRight': 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingRightMobile}${attributes.paddingUnit}`,
      '--paddingBottom': 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingBottomMobile}${attributes.paddingUnit}`,
      '--paddingLeft': 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingLeftMobile}${attributes.paddingUnit}`,
      '--marginTop': 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginTopMobile}${attributes.marginUnit}`,
      '--marginRight': 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginRightMobile}${attributes.marginUnit}`,
      '--marginBottom': 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginBottomMobile}${attributes.marginUnit}`,
      '--marginLeft': 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginLeftMobile}${attributes.marginUnit}`,
      '--zIndex': attributes.zindexMobile,
      '--border-top-width': 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopMobile}${attributes.borderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomMobile}${attributes.borderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightMobile}${attributes.borderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftMobile}${attributes.borderWidthUnit}`,
      '--border-top-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTopMobile}${attributes.borderWidthHvrUnit}`,
      '--border-bottom-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottomMobile}${attributes.borderWidthHvrUnit}`,
      '--border-right-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRightMobile}${attributes.borderWidthHvrUnit}`,
      '--border-left-width-hvr': 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeftMobile}${attributes.borderWidthHvrUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopMobile}${attributes.borderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightMobile}${attributes.borderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftMobile}${attributes.borderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomMobile}${attributes.borderRadiusUnit}`,
      '--borderTopRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTopMobile}${attributes.borderRadiusHvrUnit}`,
      '--borderTopLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRightMobile}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomRightRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeftMobile}${attributes.borderRadiusHvrUnit}`,
      '--borderBottomLeftRadiushvr': 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottomMobile}${attributes.borderRadiusHvrUnit}`
    };

    // position properties

    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--left': attributes.horizontalOrientationOffsetMobile + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--right': attributes.horizontalOrientationOffsetRightMobile + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--top': attributes.verticalOrientationOffsetTopMobile + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        '--bottom': attributes.verticalOrientationOffsetBottomMobile + attributes.verticalOrientationOffsetBottomUnit
      };
    }

    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      '--align-self': attributes.alignSelfMobile
    };

    // flex order
    if (attributes.orderMobile === 'start') {
      flexProperties = {
        ...flexProperties,
        '--order': '-9999'
      };
    } else if (attributes.orderMobile === 'end') {
      flexProperties = {
        ...flexProperties,
        '--order': '9999'
      };
    } else if (attributes.orderMobile === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--order': attributes.customOrderMobile
      };
    }

    //flex size
    if (attributes.flexSizeMobile === 'none') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSizeMobile === 'grow') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '1',
        '--flex-shrink': '0'
      };
    } else if (attributes.flexSizeMobile === 'shrink') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': '0',
        '--flex-shrink': '1'
      };
    } else if (attributes.flexSizeMobile === 'custom') {
      flexProperties = {
        ...flexProperties,
        '--flex-grow': attributes.FlexGrowSizeMobile,
        '--flex-shrink': attributes.FlexShrinkSizeMobile
      };
    }
  }
  if (attributes.widthType == 'fullwidth') {
    customwidth = {
      '--width': '100%',
      '--maxWidth-fullwidth': '100%'
    };
  }
  if (attributes.widthType == 'inlinewidth') {
    customwidth = {
      '--width': 'auto',
      '--display': 'inline-flex'
    };
  }

  //Background

  let backgroundStyle = {};
  if ('color' === attributes.backgroundType) {
    backgroundStyle = {
      '--background-color': attributes.backgroundColor
    };
  }
  if ('image' === attributes.backgroundType) {
    var _attributes$backgroun, _attributes$backgroun2, _attributes$backgroun3;
    backgroundStyle = {
      ...backgroundStyle,
      '--backgroundImage': `url( '${(_attributes$backgroun = attributes.backgroundImage) === null || _attributes$backgroun === void 0 ? void 0 : _attributes$backgroun.url}' )`,
      '--backgroundAttachment': attributes.backgroundAttachment,
      '--backgroundPosition': `${Math.round(((_attributes$backgroun2 = attributes.backgroundPosition) === null || _attributes$backgroun2 === void 0 ? void 0 : _attributes$backgroun2.x) * 100)}% ${Math.round(((_attributes$backgroun3 = attributes.backgroundPosition) === null || _attributes$backgroun3 === void 0 ? void 0 : _attributes$backgroun3.y) * 100)}%`,
      '--backgroundRepeat': attributes.backgroundRepeat,
      '--backgroundSize': attributes.backgroundSize
    };
  }
  if ('gradient' === attributes.backgroundType) {
    backgroundStyle = {
      '--backgroundImage': attributes.backgroundGradient
    };
  }
  if ('color' === attributes.backgroundTypeHvr) {
    backgroundStyle = {
      ...backgroundStyle,
      '--background-color-hvr': attributes.backgroundColorHvr
    };
  }
  if ('image' === attributes.backgroundTypeHvr) {
    var _attributes$backgroun4, _attributes$backgroun5, _attributes$backgroun6;
    backgroundStyle = {
      ...backgroundStyle,
      '--backgroundImage-hvr': `url( '${(_attributes$backgroun4 = attributes.backgroundImageHvr) === null || _attributes$backgroun4 === void 0 ? void 0 : _attributes$backgroun4.url}' )`,
      '--backgroundAttachment-hvr': attributes.backgroundAttachmentHvr,
      '--backgroundPosition-hvr': `${Math.round(((_attributes$backgroun5 = attributes.backgroundPositionHvr) === null || _attributes$backgroun5 === void 0 ? void 0 : _attributes$backgroun5.x) * 100)}% ${Math.round(((_attributes$backgroun6 = attributes.backgroundPositionHvr) === null || _attributes$backgroun6 === void 0 ? void 0 : _attributes$backgroun6.y) * 100)}%`,
      '--backgroundRepeat-hvr': attributes.backgroundRepeatHvr,
      '--backgroundSize-hvr': attributes.backgroundSizeHvr
    };
  }
  if ('gradient' === attributes.backgroundTypeHvr) {
    backgroundStyle = {
      ...backgroundStyle,
      '--backgroundImage-hvr': attributes.backgroundGradientHvr
    };
  }
  let boxShadowStyle = {};
  if (attributes.boxShadow) {
    boxShadowStyle = {
      '--boxShadow': `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#fff', attributes.boxShadowColorOpacity)}`
    };
  }
  if (attributes.boxShadowHvr) {
    boxShadowStyle = {
      ...boxShadowStyle,
      '--boxShadow-hvr': `${attributes.boxShadowHorizontalHvr}px ${attributes.boxShadowVerticalHvr}px ${attributes.boxShadowBlurHvr}px ${attributes.boxShadowSpreadHvr}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff', attributes.boxShadowColorOpacityHvr)}`
    };
  }
  let borderStyle;
  borderStyle = {
    '--border-style': attributes.borderType,
    '--border-color': attributes.borderColor,
    '--border-style-hvr': attributes.borderHvrType,
    '--border-color-hvr': attributes.borderColorHvr
  };
  let transitionSpacerStyle = {};
  if (attributes.transitionAll) {
    transitionSpacerStyle = {
      '--transition': `all ${attributes.transitionAll}s`,
      '--WebkitTransition': `all ${attributes.transitionAll}s`,
      '--MozTransition': `all ${attributes.transitionAll}s`,
      '--OTransition': `all ${attributes.transitionAll}s`
    };
  }
  let spacerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "th-hide-desktop": attributes.responsiveTogHideDesktop,
    "th-hide-tablet": attributes.responsiveTogHideTablet,
    "th-hide-mobile": attributes.responsiveTogHideMobile
  });
  const style = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.omitBy)({
    // backgroundColor: '#090',
    ...borderStyle,
    ...customwidth,
    ...stylesheet,
    ...backgroundStyle,
    ...boxShadowStyle,
    ...PositionProperties,
    ...flexProperties,
    ...transitionSpacerStyle
  }, x => {
    var _x$includes;
    return x === null || x === void 0 ? void 0 : (_x$includes = x.includes) === null || _x$includes === void 0 ? void 0 : _x$includes.call(x, 'undefined');
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)({
    id: attributes.id,
    className: spacerClasses,
    style
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ResizableBox, {
    enable: {
      bottom: true,
      bottomLeft: false,
      bottomRight: false,
      left: false,
      right: false,
      top: false,
      topLeft: false,
      topRight: false
    },
    size: {
      height: '100%'
    },
    onResizeStop: (event, direction, elt, delta) => {
      onChangeHeight(attributes.height + delta.height);
      toggleSelection(true);
    },
    onResizeStart: () => {
      toggleSelection(false);
    }
  })));
}

/***/ }),

/***/ "./inc/block/advance-spacer/index.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-spacer/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./inc/block/advance-spacer/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./inc/block/advance-spacer/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./inc/block/advance-spacer/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./inc/block/advance-spacer/block.json");
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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Spacer', 'themehunk-block'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Spacer gives a spin to editor\'s Spacer block with much needed customization options. Powered by themehunk.', 'themehunk-block'),
  keywords: ['heading', 'title', 'advanced heading'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A spacer with more customization options', 'themehunk-block')
    }
  }
});

/***/ }),

/***/ "./inc/block/advance-spacer/save.js":
/*!******************************************!*\
  !*** ./inc/block/advance-spacer/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

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
function Save(_ref) {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    id: attributes.uniqueID,
    className: `th-spacer${attributes.uniqueID}`
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps);
}

/***/ }),

/***/ "./inc/block/advance-spacer/settings.js":
/*!**********************************************!*\
  !*** ./inc/block/advance-spacer/settings.js ***!
  \**********************************************/
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
/* harmony import */ var _src_components_ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/ins-setting-header/index.js */ "./src/components/ins-setting-header/index.js");
/* harmony import */ var _src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/responsive-control/index.js */ "./src/components/responsive-control/index.js");
/* harmony import */ var _src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/components/sizing-control/index.js */ "./src/components/sizing-control/index.js");
/* harmony import */ var _src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/components/hover-tab/index.js */ "./src/components/hover-tab/index.js");
/* harmony import */ var _src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/components/unit-picker/index.js */ "./src/components/unit-picker/index.js");
/* harmony import */ var _src_components_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/components/control-panel-control/index.js */ "./src/components/control-panel-control/index.js");
/* harmony import */ var _src_components_background_selector_control_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/components/background-selector-control/index.js */ "./src/components/background-selector-control/index.js");
/* harmony import */ var _src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/components/toogle-group-control/index.js */ "./src/components/toogle-group-control/index.js");
/* harmony import */ var _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../src/helpers/icon.js */ "./src/helpers/icon.js");








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
  const [hover, setHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const getCustomWidth = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.customWidth;
      case 'Tablet':
        return attributes.customWidthTablet;
      case 'Mobile':
        return attributes.customWidthMobile;
      default:
        return undefined;
    }
  };
  const changeCustomWidth = value => {
    if ('Desktop' === getView) {
      setAttributes({
        customWidth: value,
        customWidthTablet: value,
        customWidthMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        customWidthTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        customWidthMobile: value
      });
    }
  };
  const customTooltipCustomWidth = value => `${value}${attributes.customWidthUnit}`;
  const getHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.height;
      case 'Tablet':
        return attributes.heightTablet;
      case 'Mobile':
        return attributes.heightMobile;
      default:
        return undefined;
    }
  };
  const changeHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        height: value,
        heightTablet: value,
        heightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        heightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        heightMobile: value
      });
    }
  };
  const customTooltipHeight = value => `${value}${attributes.heightUnit}`;

  //Padding
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
  const getPaddingType = () => {
    switch (getView) {
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
    if ('Desktop' === getView) {
      setAttributes({
        paddingType: value,
        paddingTypeTablet: value,
        paddingTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        paddingTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        paddingTypeMobile: value
      });
    }
  };
  const changePadding = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.paddingType) {
          setAttributes({
            padding: value,
            paddingTablet: value,
            paddingMobile: value
          });
        } else {
          setAttributes({
            [desktopPaddingType[type]]: value
          });
          setAttributes({
            [desktopPaddingType[type]]: value,
            [tabletPaddingType[type]]: value,
            [mobilePaddingType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.paddingTypeTablet) {
          setAttributes({
            paddingTablet: value
          });
        } else {
          setAttributes({
            [tabletPaddingType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.paddingTypeMobile) {
          setAttributes({
            paddingMobile: value
          });
        } else {
          setAttributes({
            [mobilePaddingType[type]]: value
          });
        }
        break;
    }
  };
  const getPadding = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingTop;
        case 'Tablet':
          return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingTopTablet;
        case 'Mobile':
          return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingRight;
        case 'Tablet':
          return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingRightTablet;
        case 'Mobile':
          return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.paddingType ? attributes.padding : attributes.paddingBottom;
        case 'Tablet':
          return 'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
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

  //Margin 
  const desktopMarginType = {
    top: 'marginTop',
    right: 'marginRight',
    bottom: 'marginBottom',
    left: 'marginLeft'
  };
  const tabletMarginType = {
    top: 'marginTopTablet',
    right: 'marginRightTablet',
    bottom: 'marginBottomTablet',
    left: 'marginLeftTablet'
  };
  const mobileMarginType = {
    top: 'marginTopMobile',
    right: 'marginRightMobile',
    bottom: 'marginBottomMobile',
    left: 'marginLeftMobile'
  };
  const getMarginType = () => {
    switch (getView) {
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
    if ('Desktop' === getView) {
      setAttributes({
        marginType: value,
        marginTypeTablet: value,
        marginTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        marginTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        marginTypeMobile: value
      });
    }
  };
  const changeMargin = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.marginType) {
          setAttributes({
            margin: value,
            marginTablet: value,
            marginMobile: value
          });
        } else {
          setAttributes({
            [desktopMarginType[type]]: value
          });
          setAttributes({
            [desktopMarginType[type]]: value,
            [tabletMarginType[type]]: value,
            [mobileMarginType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.marginTypeTablet) {
          setAttributes({
            marginTablet: value
          });
        } else {
          setAttributes({
            [tabletMarginType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.marginTypeMobile) {
          setAttributes({
            marginMobile: value
          });
        } else {
          setAttributes({
            [mobileMarginType[type]]: value
          });
        }
        break;
    }
  };
  const getMargin = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.marginType ? attributes.margin : attributes.marginTop;
        case 'Tablet':
          return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginTopTablet;
        case 'Mobile':
          return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.marginType ? attributes.margin : attributes.marginRight;
        case 'Tablet':
          return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginRightTablet;
        case 'Mobile':
          return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.marginType ? attributes.margin : attributes.marginBottom;
        case 'Tablet':
          return 'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
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

  //Z Index
  const customTooltipZindex = value => `${value}px`;
  const getZindex = () => {
    switch (getView) {
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
    if ('Desktop' === getView) {
      setAttributes({
        zindex: value,
        zindexTablet: value,
        zindexMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        zindexTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        zindexMobile: value
      });
    }
  };

  // Border & Box Shadow
  const getBorderWidthType = () => {
    switch (getView) {
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
  const getBorderRadiusType = () => {
    switch (getView) {
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
  const getBorderRadius = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusTop;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusTopTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusTopMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusLeft;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusLeftMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusType ? attributes.borderRadius : attributes.borderRadiusRight;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusTypeTablet ? attributes.borderRadiusTablet : attributes.borderRadiusRightTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusTypeMobile ? attributes.borderRadiusMobile : attributes.borderRadiusRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
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
  const getBorderWidth = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthTop;
        case 'Tablet':
          return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthTopTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthRight;
        case 'Tablet':
          return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthRightTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthType ? attributes.borderWidth : attributes.borderWidthBottom;
        case 'Tablet':
          return 'linked' === attributes.borderWidthTypeTablet ? attributes.borderWidthTablet : attributes.borderWidthBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthTypeMobile ? attributes.borderWidthMobile : attributes.borderWidthBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
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
  const mobileBorderWidthHvrType = {
    top: 'borderWidthHvrTopMobile',
    right: 'borderWidthHvrRightMobile',
    bottom: 'borderWidthHvrBottomMobile',
    left: 'borderWidthHvrLeftMobile'
  };
  const mobileBorderWidthType = {
    top: 'borderWidthTopMobile',
    right: 'borderWidthRightMobile',
    bottom: 'borderWidthBottomMobile',
    left: 'borderWidthLeftMobile'
  };
  const desktopBorderRadiusType = {
    top: 'borderRadiusTop',
    left: 'borderRadiusLeft',
    right: 'borderRadiusRight',
    bottom: 'borderRadiusBottom'
  };
  const tabletBorderRadiusType = {
    top: 'borderRadiusTopTablet',
    left: 'borderRadiusLeftTablet',
    right: 'borderRadiusRightTablet',
    bottom: 'borderRadiusBottomTablet'
  };
  const mobileBorderRadiusType = {
    top: 'borderRadiusTopMobile',
    left: 'borderRadiusLeftMobile',
    right: 'borderRadiusRightMobile',
    bottom: 'borderRadiusBottomMobile'
  };
  const changeBorderWidthType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        borderWidthType: value,
        borderWidthTypeTablet: value,
        borderWidthTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        borderWidthTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        borderWidthTypeMobile: value
      });
    }
  };
  const changeBorderWidth = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.borderWidthType) {
          setAttributes({
            borderWidth: value,
            borderWidthTablet: value,
            borderWidthMobile: value
          });
        } else {
          setAttributes({
            [desktopBorderWidthType[type]]: value,
            [tabletBorderWidthType[type]]: value,
            [mobileBorderWidthType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.borderWidthTypeTablet) {
          setAttributes({
            borderWidthTablet: value
          });
        } else {
          setAttributes({
            [tabletBorderWidthType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.borderWidthTypeMobile) {
          setAttributes({
            borderWidthMobile: value
          });
        } else {
          setAttributes({
            [mobileBorderWidthType[type]]: value
          });
        }
        break;
    }
  };
  const changeBorderRadiusType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        borderRadiusType: value,
        borderRadiusTypeTablet: value,
        borderRadiusTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        borderRadiusTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        borderRadiusTypeMobile: value
      });
    }
  };
  const changeBorderRadius = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.borderRadiusType) {
          setAttributes({
            borderRadius: value,
            borderRadiusTablet: value,
            borderRadiusMobile: value
          });
        } else {
          setAttributes({
            [desktopBorderRadiusType[type]]: value,
            [tabletBorderRadiusType[type]]: value,
            [mobileBorderRadiusType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.borderRadiusTypeTablet) {
          setAttributes({
            borderRadiusTablet: value
          });
        } else {
          setAttributes({
            [tabletBorderRadiusType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.borderRadiusTypeMobile) {
          setAttributes({
            borderRadiusMobile: value
          });
        } else {
          setAttributes({
            [mobileBorderRadiusType[type]]: value
          });
        }
        break;
    }
  };
  const getBorderWidthHvrType = () => {
    switch (getView) {
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
  const getBorderRadiusHvrType = () => {
    switch (getView) {
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
  const changeBorderWidthHvrType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        borderWidthHvrType: value,
        borderWidthHvrTypeTablet: value,
        borderWidthHvrTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        borderWidthHvrTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        borderWidthHvrTypeMobile: value
      });
    }
  };
  const changeBorderWidthHvr = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.borderWidthHvrType) {
          setAttributes({
            borderWidthHvr: value,
            borderWidthHvrTablet: value,
            borderWidthHvrMobile: value
          });
        } else {
          setAttributes({
            [desktopBorderWidthHvrType[type]]: value,
            [tabletBorderWidthHvrType[type]]: value,
            [mobileBorderWidthHvrType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.borderWidthHvrTypeTablet) {
          setAttributes({
            borderWidthHvrTablet: value
          });
        } else {
          setAttributes({
            [tabletBorderWidthHvrType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.borderWidthHvrTypeMobile) {
          setAttributes({
            borderWidthHvrMobile: value
          });
        } else {
          setAttributes({
            [mobileBorderWidthHvrType[type]]: value
          });
        }
        break;
    }
  };
  const getBorderWidthHvr = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrTop;
        case 'Tablet':
          return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrTopTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrRight;
        case 'Tablet':
          return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrRightTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderWidthHvrType ? attributes.borderWidthHvr : attributes.borderWidthHvrBottom;
        case 'Tablet':
          return 'linked' === attributes.borderWidthHvrTypeTablet ? attributes.borderWidthHvrTablet : attributes.borderWidthHvrBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.borderWidthHvrTypeMobile ? attributes.borderWidthHvrMobile : attributes.borderWidthHvrBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
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
  const changeBorderRadiusHvrType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        borderRadiusHvrType: value,
        borderRadiusHvrTypeTablet: value,
        borderRadiusHvrTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        borderRadiusHvrTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        borderRadiusHvrTypeMobile: value
      });
    }
  };
  const changeBorderRadiusHvr = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.borderRadiusHvrType) {
          setAttributes({
            borderRadiusHvr: value,
            borderRadiusHvrTablet: value,
            borderRadiusHvrMobile: value
          });
        } else {
          setAttributes({
            [desktopBorderRadiusHvrType[type]]: value,
            [tabletBorderRadiusHvrType[type]]: value,
            [mobileBorderRadiusHvrType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.borderRadiusHvrTypeTablet) {
          setAttributes({
            borderRadiusHvrTablet: value
          });
        } else {
          setAttributes({
            [tabletBorderRadiusHvrType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.borderRadiusHvrTypeMobile) {
          setAttributes({
            borderRadiusHvrMobile: value
          });
        } else {
          setAttributes({
            [mobileBorderRadiusHvrType[type]]: value
          });
        }
        break;
    }
  };
  const getBorderRadiusHvr = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrTop;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrTopTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrRight;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrRightTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.borderRadiusHvrType ? attributes.borderRadiusHvr : attributes.borderRadiusHvrBottom;
        case 'Tablet':
          return 'linked' === attributes.borderRadiusHvrTypeTablet ? attributes.borderRadiusHvrTablet : attributes.borderRadiusHvrBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.borderRadiusHvrTypeMobile ? attributes.borderRadiusHvrMobile : attributes.borderRadiusHvrBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
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

  //Position
  const customTooltiphorizontalOrientationOffset = value => `${value}${attributes.horizontalOrientationOffsetUnit}`;
  const customTooltiphorizontalOrientationOffsetRight = value => `${value}${attributes.horizontalOrientationOffsetRightUnit}`;
  const customTooltipverticalOrientationOffsetTop = value => `${value}${attributes.verticalOrientationOffsetTopUnit}`;
  const customTooltipverticalOrientationOffsetBottom = value => `${value}${attributes.verticalOrientationOffsetBottomUnit}`;

  // horizontalOrientationOffset left
  const gethorizontalOrientationOffset = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.horizontalOrientationOffset;
      case 'Tablet':
        return attributes.horizontalOrientationOffsetTablet;
      case 'Mobile':
        return attributes.horizontalOrientationOffsetMobile;
      default:
        return undefined;
    }
  };
  const changehorizontalOrientationOffset = value => {
    if ('Desktop' === getView) {
      setAttributes({
        horizontalOrientationOffset: value,
        horizontalOrientationOffsetTablet: value,
        horizontalOrientationOffsetMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        horizontalOrientationOffsetTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        horizontalOrientationOffsetMobile: value
      });
    }
  };

  // horizontalOrientationOffset right
  const gethorizontalOrientationOffsetRight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.horizontalOrientationOffsetRight;
      case 'Tablet':
        return attributes.horizontalOrientationOffsetRightTablet;
      case 'Mobile':
        return attributes.horizontalOrientationOffsetRightMobile;
      default:
        return undefined;
    }
  };
  const changehorizontalOrientationOffsetRight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        horizontalOrientationOffsetRight: value,
        horizontalOrientationOffsetRightTablet: value,
        horizontalOrientationOffsetRightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        horizontalOrientationOffsetRightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        horizontalOrientationOffsetRightMobile: value
      });
    }
  };

  // verticalOrientationOffset left
  const getverticalOrientationOffsetTop = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.verticalOrientationOffsetTop;
      case 'Tablet':
        return attributes.verticalOrientationOffsetTopTablet;
      case 'Mobile':
        return attributes.verticalOrientationOffsetTopMobile;
      default:
        return undefined;
    }
  };
  const changeverticalOrientationOffsetTop = value => {
    if ('Desktop' === getView) {
      setAttributes({
        verticalOrientationOffsetTop: value,
        verticalOrientationOffsetTopTablet: value,
        verticalOrientationOffsetTopMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        verticalOrientationOffsetTopTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        verticalOrientationOffsetTopMobile: value
      });
    }
  };

  // verticalOrientationOffset right
  const getverticalOrientationOffsetBottom = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.verticalOrientationOffsetBottom;
      case 'Tablet':
        return attributes.verticalOrientationOffsetBottomTablet;
      case 'Mobile':
        return attributes.verticalOrientationOffsetBottomMobile;
      default:
        return undefined;
    }
  };
  const changeverticalOrientationOffsetBottom = value => {
    if ('Desktop' === getView) {
      setAttributes({
        verticalOrientationOffsetBottom: value,
        verticalOrientationOffsetBottomTablet: value,
        verticalOrientationOffsetBottomMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        verticalOrientationOffsetBottomTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        verticalOrientationnOffsetBottomMobile: value
      });
    }
  };

  //Properties of flex Container

  // flex align-self property
  const getSelfAlign = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.alignSelf;
      case 'Tablet':
        return attributes.alignSelfTablet;
      case 'Mobile':
        return attributes.alignSelfMobile;
      default:
        return undefined;
    }
  };
  const changeSelfAlign = value => {
    if ('Desktop' === getView) {
      setAttributes({
        alignSelf: value,
        alignSelfTablet: value,
        alignSelfMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        alignSelfTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        alignSelfMobile: value
      });
    }
  };

  // flex order property
  const getorder = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.order;
      case 'Tablet':
        return attributes.orderTablet;
      case 'Mobile':
        return attributes.orderMobile;
      default:
        return undefined;
    }
  };
  const changeorder = value => {
    if ('Desktop' === getView) {
      setAttributes({
        order: value,
        orderTablet: value,
        orderMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        orderTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        orderMobile: value
      });
    }
  };

  //custom order
  const getcustomOrder = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.customOrder;
      case 'Tablet':
        return attributes.customOrderTablet;
      case 'Mobile':
        return attributes.customOrderMobile;
      default:
        return undefined;
    }
  };
  const changecustomOrder = value => {
    if ('Desktop' === getView) {
      setAttributes({
        customOrder: value,
        customOrderTablet: value,
        customOrderMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        customOrderTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        customOrderMobile: value
      });
    }
  };

  // flex size property
  const getflexSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.flexSize;
      case 'Tablet':
        return attributes.flexSizeTablet;
      case 'Mobile':
        return attributes.flexSizeMobile;
      default:
        return undefined;
    }
  };
  const changeflexSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        flexSize: value,
        flexSizeTablet: value,
        flexSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        flexSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        flexSizeMobile: value
      });
    }
  };

  // flex grow size property
  const getFlexGrowSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.FlexGrowSize;
      case 'Tablet':
        return attributes.FlexGrowSizeTablet;
      case 'Mobile':
        return attributes.FlexGrowSizeMobile;
      default:
        return undefined;
    }
  };
  const changeFlexGrowSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        FlexGrowSize: value,
        FlexGrowSizeTablet: value,
        FlexGrowSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        FlexGrowSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        FlexGrowSizeMobile: value
      });
    }
  };

  // flex shrink size property
  const getFlexShrinkSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.FlexShrinkSize;
      case 'Tablet':
        return attributes.FlexShrinkSizeTablet;
      case 'Mobile':
        return attributes.FlexShrinkSizeMobile;
      default:
        return undefined;
    }
  };
  const changeFlexShrinkSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        FlexShrinkSize: value,
        FlexShrinkSizeTablet: value,
        FlexShrinkSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        FlexShrinkSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        FlexShrinkSizeMobile: value
      });
    }
  };
  const customTooltipCustomOrder = value => `${value}`;
  const customTooltipFlexGrow = value => `${value}`;
  const customTooltipFlexShrink = value => `${value}`;

  // Transition
  const customTooltiptransitionAll = value => `${value}`;

  // unit switch max value
  const [customWidthUnit, setcustomWidthUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxcustomWidthUnit = customWidthUnit === 'px' ? 1500 : customWidthUnit === 'em' ? 50 : customWidthUnit === '%' ? 100 : '';
  const [heightUnit, setheightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxheightUnit = heightUnit === 'px' ? 1500 : heightUnit === 'em' ? 50 : heightUnit === '%' ? 100 : '';
  const [paddingUnit, setpaddingUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxpaddingUnit = paddingUnit === 'px' ? 1500 : paddingUnit === 'em' ? 50 : paddingUnit === '%' ? 100 : '';
  const [marginUnit, setmarginUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxmarginUnit = marginUnit === 'px' ? 1500 : marginUnit === 'em' ? 50 : marginUnit === '%' ? 100 : '';
  const [horizontalOrientationOffsetUnit, sethorizontalOrientationOffsetUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxhorizontalOrientationOffsetUnit = horizontalOrientationOffsetUnit === 'px' ? 1500 : horizontalOrientationOffsetUnit === 'em' ? 50 : horizontalOrientationOffsetUnit === '%' ? 100 : '';
  const [horizontalOrientationOffsetRightUnit, sethorizontalOrientationOffsetRightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxhorizontalOrientationOffsetRightUnit = horizontalOrientationOffsetRightUnit === 'px' ? 1500 : horizontalOrientationOffsetRightUnit === 'em' ? 50 : horizontalOrientationOffsetRightUnit === '%' ? 100 : '';
  const [verticalOrientationOffsetTopUnit, setverticalOrientationOffsetTopUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxverticalOrientationOffsetTopUnit = verticalOrientationOffsetTopUnit === 'px' ? 1500 : verticalOrientationOffsetTopUnit === 'em' ? 50 : verticalOrientationOffsetTopUnit === '%' ? 100 : '';
  const [verticalOrientationOffsetBottomUnit, setverticalOrientationOffsetBottomUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxverticalOrientationOffsetBottomUnit = verticalOrientationOffsetBottomUnit === 'px' ? 1500 : verticalOrientationOffsetBottomUnit === 'em' ? 50 : verticalOrientationOffsetBottomUnit === '%' ? 100 : '';
  const [borderWidthUnit, setborderWidthUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxborderWidthUnit = borderWidthUnit === 'px' ? 1500 : borderWidthUnit === 'em' ? 50 : borderWidthUnit === '%' ? 100 : '';
  const [borderRadiusUnit, setborderRadiusUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxborderRadiusUnit = borderRadiusUnit === 'px' ? 1500 : borderRadiusUnit === 'em' ? 50 : borderRadiusUnit === '%' ? 100 : '';
  const [borderWidthHvrUnit, setborderWidthHvrUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxborderWidthHvrUnit = borderWidthHvrUnit === 'px' ? 1500 : borderWidthHvrUnit === 'em' ? 50 : borderWidthHvrUnit === '%' ? 100 : '';
  const [borderRadiusHvrUnit, setborderRadiusHvrUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxborderRadiusHvrUnit = borderRadiusHvrUnit === 'px' ? 1500 : borderRadiusHvrUnit === 'em' ? 50 : borderRadiusHvrUnit === '%' ? 100 : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    initialOpen: true,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.heightUnit,
    onClick: heightUnit => {
      setAttributes({
        heightUnit
      });
      setheightUnit(heightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipHeight,
    value: getHeight() || '',
    onChange: changeHeight,
    step: 1,
    min: 0,
    max: maxheightUnit,
    allowReset: true
  })))) || 'advanced' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'themehunk-block'),
    initialOpen: false,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width', 'themehunk-block'),
    value: attributes.widthType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'themehunk-block'),
      value: 'default'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Width(100%)', 'themehunk-block'),
      value: 'fullwidth'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline(Auto)', 'themehunk-block'),
      value: 'inlinewidth'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'themehunk-block'),
      value: 'customwidth'
    }],
    onChange: e => setAttributes({
      widthType: e
    })
  }), 'customwidth' == attributes.widthType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.customWidthUnit,
    onClick: customWidthUnit => {
      setAttributes({
        customWidthUnit
      });
      setcustomWidthUnit(customWidthUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipCustomWidth,
    value: getCustomWidth() || '',
    onChange: changeCustomWidth,
    step: 1,
    min: 1,
    max: maxcustomWidthUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.paddingUnit,
    onClick: paddingUnit => {
      setAttributes({
        paddingUnit
      });
      setpaddingUnit(paddingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getPaddingType(),
    min: 0,
    max: maxpaddingUnit,
    changeType: changePaddingType,
    onChange: changePadding,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getPadding('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getPadding('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getPadding('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getPadding('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.marginUnit,
    onClick: marginUnit => {
      setAttributes({
        marginUnit
      });
      setmarginUnit(marginUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getMarginType(),
    min: 0,
    max: maxmarginUnit,
    changeType: changeMarginType,
    onChange: changeMargin,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getMargin('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getMargin('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getMargin('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getMargin('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'themehunk-block'),
    value: attributes.position,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'themehunk-block'),
      value: 'relative'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Absolute', 'themehunk-block'),
      value: 'absolute'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixed', 'themehunk-block'),
      value: 'fixed'
    }],
    onChange: e => setAttributes({
      position: e
    })
  }), ('absolute' == attributes.position || 'fixed' == attributes.position) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-component-group-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal Orientation', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: attributes.horizontalOrientation,
    onChange: horizontalOrientation => setAttributes({
      horizontalOrientation
    }),
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.HorizontalLeft,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('left', 'themehunk-blocks'),
      value: 'left'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.HorizontalRight,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('right', 'themehunk-block'),
      value: 'right'
    }],
    hasIcon: true
  })), 'left' == attributes.horizontalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.horizontalOrientationOffsetUnit,
    onClick: horizontalOrientationOffsetUnit => {
      setAttributes({
        horizontalOrientationOffsetUnit
      });
      sethorizontalOrientationOffsetUnit(horizontalOrientationOffsetUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiphorizontalOrientationOffset,
    value: gethorizontalOrientationOffset() || '',
    onChange: changehorizontalOrientationOffset,
    step: 1,
    min: -999,
    max: maxhorizontalOrientationOffsetUnit,
    allowReset: true
  })), 'right' == attributes.horizontalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.horizontalOrientationOffsetRightUnit,
    onClick: horizontalOrientationOffsetRightUnit => {
      setAttributes({
        horizontalOrientationOffsetRightUnit
      });
      sethorizontalOrientationOffsetRightUnit(horizontalOrientationOffsetRightUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiphorizontalOrientationOffsetRight,
    value: gethorizontalOrientationOffsetRight() || '',
    onChange: changehorizontalOrientationOffsetRight,
    step: 1,
    min: -999,
    max: maxhorizontalOrientationOffsetRightUnit,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-component-group-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Orientation', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: attributes.verticalOrientation,
    onChange: verticalOrientation => setAttributes({
      verticalOrientation
    }),
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.VerticalTop,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('top', 'themehunk-blocks'),
      value: 'top'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.VerticalBottom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('bottom', 'themehunk-block'),
      value: 'bottom'
    }],
    hasIcon: true
  })), 'top' == attributes.verticalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.verticalOrientationOffsetTopUnit,
    onClick: verticalOrientationOffsetTopUnit => {
      setAttributes({
        verticalOrientationOffsetTopUnit
      });
      setverticalOrientationOffsetTopUnit(verticalOrientationOffsetTopUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipverticalOrientationOffsetTop,
    value: getverticalOrientationOffsetTop() || '',
    onChange: changeverticalOrientationOffsetTop,
    step: 1,
    min: -999,
    max: maxverticalOrientationOffsetTopUnit,
    allowReset: true
  })), 'bottom' == attributes.verticalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.verticalOrientationOffsetBottomUnit,
    onClick: verticalOrientationOffsetBottomUnit => {
      setAttributes({
        verticalOrientationOffsetBottomUnit
      });
      setverticalOrientationOffsetBottomUnit(verticalOrientationOffsetBottomUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipverticalOrientationOffsetBottom,
    value: getverticalOrientationOffsetBottom() || '',
    onChange: changeverticalOrientationOffsetBottom,
    step: 1,
    min: -999,
    max: maxverticalOrientationOffsetBottomUnit,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-index', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipZindex,
    value: getZindex() || '',
    onChange: changeZindex,
    step: 1,
    min: -999999,
    max: 999999,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Self', 'themehunk-block'),
    className: "th-alig-self-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: getSelfAlign(),
    onChange: changeSelfAlign,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Start,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Center,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'themehunk-block'),
      value: 'center'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.End,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Strech,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'themehunk-block'),
      value: 'stretch'
    }],
    hasIcon: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'themehunk-block'),
    className: "th-order-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: getorder(),
    onChange: changeorder,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.OrderStart,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.OrderEnd,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cutsom', 'themehunk-block'),
      value: 'custom'
    }],
    hasIcon: true
  })), 'custom' == attributes.order && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Order', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipCustomOrder,
    value: getcustomOrder() || '',
    onChange: changecustomOrder,
    step: 1,
    min: -9999,
    max: 9999,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'themehunk-block'),
    className: "th-size-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_toogle_group_control_index_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: getflexSize(),
    onChange: changeflexSize,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.None,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'themehunk-blocks'),
      value: 'none'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Grow,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grow', 'themehunk-blocks'),
      value: 'grow'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Shrink,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shrink', 'themehunk-block'),
      value: 'shrink'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_14__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'themehunk-block'),
      value: 'custom'
    }],
    hasIcon: true
  })), 'custom' == attributes.flexSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Grow', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipFlexGrow,
    value: getFlexGrowSize() || '',
    onChange: changeFlexGrowSize,
    step: 1,
    min: 1,
    max: 500,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Shrink', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipFlexShrink,
    value: getFlexShrinkSize() || '',
    onChange: changeFlexShrinkSize,
    step: 1,
    min: 1,
    max: 500,
    allowReset: true
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border & Box Shadow', 'themehunk-block'),
    initialOpen: false,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: hover,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setHover
  }), 'normal' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Type', 'themehunk-block'),
    value: attributes.borderType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'themehunk-block'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'themehunk-block'),
      value: 'solid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Double', 'themehunk-block'),
      value: 'double'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted', 'themehunk-block'),
      value: 'dotted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed', 'themehunk-block'),
      value: 'dashed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Groove', 'themehunk-block'),
      value: 'groove'
    }],
    onChange: e => setAttributes({
      borderType: e
    })
  }), 'none' !== attributes.borderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.borderWidthUnit,
    onClick: borderWidthUnit => {
      setAttributes({
        borderWidthUnit
      });
      setborderWidthUnit(borderWidthUnit);
    },
    units: ['px', 'em']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getBorderWidthType(),
    min: 0,
    max: maxborderWidthUnit,
    changeType: changeBorderWidthType,
    onChange: changeBorderWidth,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getBorderWidth('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getBorderWidth('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getBorderWidth('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getBorderWidth('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'themehunk-block'),
    colorValue: attributes.borderColor,
    onColorChange: e => setAttributes({
      borderColor: e
    }),
    enableAlpha: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.borderRadiusUnit,
    onClick: borderRadiusUnit => {
      setAttributes({
        borderRadiusUnit
      });
      setborderRadiusUnit(borderRadiusUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getBorderRadiusType(),
    min: 0,
    max: maxborderRadiusUnit,
    changeType: changeBorderRadiusType,
    onChange: changeBorderRadius,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-R', 'themehunk-block'),
      type: 'top',
      value: getBorderRadius('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-L', 'themehunk-block'),
      type: 'right',
      value: getBorderRadius('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-R', 'themehunk-block'),
      type: 'left',
      value: getBorderRadius('left')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-L', 'themehunk-block'),
      type: 'bottom',
      value: getBorderRadius('bottom')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Shadow', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    resetValues: {
      boxShadow: false,
      boxShadowColor: undefined,
      boxShadowColorOpacity: 50,
      boxShadowBlur: 5,
      boxShadowSpread: 1,
      boxShadowHorizontal: 0,
      boxShadowVertical: 0
    },
    onClick: () => setAttributes({
      boxShadow: true
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Color', 'themehunk-block'),
    colorValue: attributes.boxShadowColor,
    onColorChange: e => setAttributes({
      boxShadowColor: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Opacity', 'themehunk-block'),
    value: attributes.boxShadowColorOpacity,
    onChange: e => setAttributes({
      boxShadowColorOpacity: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur', 'themehunk-block'),
    value: attributes.boxShadowBlur,
    onChange: e => setAttributes({
      boxShadowBlur: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spread', 'themehunk-block'),
    value: attributes.boxShadowSpread,
    onChange: e => setAttributes({
      boxShadowSpread: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'themehunk-block'),
    value: attributes.boxShadowHorizontal,
    onChange: e => setAttributes({
      boxShadowHorizontal: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'themehunk-block'),
    value: attributes.boxShadowVertical,
    onChange: e => setAttributes({
      boxShadowVertical: e
    }),
    min: -100,
    max: 100
  }))) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Type', 'themehunk-block'),
    value: attributes.borderHvrType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'themehunk-block'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'themehunk-block'),
      value: 'solid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Double', 'themehunk-block'),
      value: 'double'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted', 'themehunk-block'),
      value: 'dotted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed', 'themehunk-block'),
      value: 'dashed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Groove', 'themehunk-block'),
      value: 'groove'
    }],
    onChange: e => setAttributes({
      borderHvrType: e
    })
  }), 'none' !== attributes.borderHvrType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.borderWidthHvrUnit,
    onClick: borderWidthHvrUnit => {
      setAttributes({
        borderWidthHvrUnit
      });
      setborderWidthHvrUnit(borderWidthHvrUnit);
    },
    units: ['px', 'em']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getBorderWidthHvrType(),
    min: 0,
    max: maxborderWidthHvrUnit,
    changeType: changeBorderWidthHvrType,
    onChange: changeBorderWidthHvr,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getBorderWidthHvr('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getBorderWidthHvr('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getBorderWidthHvr('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getBorderWidthHvr('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Hover Color', 'themehunk-block'),
    colorValue: attributes.borderColorHvr,
    onColorChange: e => setAttributes({
      borderColorHvr: e
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_unit_picker_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: attributes.borderRadiusHvrUnit,
    onClick: borderRadiusHvrUnit => {
      setAttributes({
        borderRadiusHvrUnit
      });
      setborderRadiusHvrUnit(borderRadiusHvrUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: getBorderRadiusHvrType(),
    min: 0,
    max: maxborderRadiusHvrUnit,
    changeType: changeBorderRadiusHvrType,
    onChange: changeBorderRadiusHvr,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-R', 'themehunk-block'),
      type: 'top',
      value: getBorderRadiusHvr('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-L', 'themehunk-block'),
      type: 'right',
      value: getBorderRadiusHvr('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-R', 'themehunk-block'),
      type: 'left',
      value: getBorderRadiusHvr('left')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-L', 'themehunk-block'),
      type: 'bottom',
      value: getBorderRadiusHvr('bottom')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Shadow', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    resetValues: {
      boxShadowHvr: false,
      boxShadowColorHvr: undefined,
      boxShadowColorOpacityHvr: 50,
      boxShadowBlurHvr: 5,
      boxShadowSpreadHvr: 1,
      boxShadowHorizontalHvr: 0,
      boxShadowVerticalHvr: 0
    },
    onClick: () => setAttributes({
      boxShadowHvr: true
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Color', 'themehunk-block'),
    colorValue: attributes.boxShadowColorHvr,
    onColorChange: e => setAttributes({
      boxShadowColorHvr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Opacity', 'themehunk-block'),
    value: attributes.boxShadowColorOpacityHvr,
    onChange: e => setAttributes({
      boxShadowColorOpacityHvr: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur', 'themehunk-block'),
    value: attributes.boxShadowBlurHvr,
    onChange: e => setAttributes({
      boxShadowBlurHvr: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spread', 'themehunk-block'),
    value: attributes.boxShadowSpreadHvr,
    onChange: e => setAttributes({
      boxShadowSpreadHvr: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'themehunk-block'),
    value: attributes.boxShadowHorizontalHvr,
    onChange: e => setAttributes({
      boxShadowHorizontalHvr: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'themehunk-block'),
    value: attributes.boxShadowVerticalHvr,
    onChange: e => setAttributes({
      boxShadowVerticalHvr: e
    }),
    min: -100,
    max: 100
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'themehunk-block'),
    initialOpen: false,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: hover,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setHover
  }), 'normal' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_background_selector_control_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    backgroundType: attributes.backgroundType,
    backgroundColor: attributes.backgroundColor,
    image: attributes.backgroundImage,
    gradient: attributes.backgroundGradient,
    focalPoint: attributes.backgroundPosition,
    backgroundAttachment: attributes.backgroundAttachment,
    backgroundRepeat: attributes.backgroundRepeat,
    backgroundSize: attributes.backgroundSize,
    changeBackgroundType: value => setAttributes({
      backgroundType: value
    }),
    changeImage: media => {
      setAttributes({
        backgroundImage: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.pick)(media, ['id', 'url'])
      });
    },
    removeImage: () => setAttributes({
      backgroundImage: undefined
    }),
    changeColor: value => setAttributes({
      backgroundColor: value
    }),
    changeGradient: value => setAttributes({
      backgroundGradient: value
    }),
    changeBackgroundAttachment: value => setAttributes({
      backgroundAttachment: value
    }),
    changeBackgroundRepeat: value => setAttributes({
      backgroundRepeat: value
    }),
    changeFocalPoint: value => setAttributes({
      backgroundPosition: value
    }),
    changeBackgroundSize: value => setAttributes({
      backgroundSize: value
    })
  }) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_background_selector_control_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    backgroundType: attributes.backgroundTypeHvr,
    backgroundColor: attributes.backgroundColorHvr,
    image: attributes.backgroundImageHvr,
    gradient: attributes.backgroundGradientHvr,
    focalPoint: attributes.backgroundPositionHvr,
    backgroundAttachment: attributes.backgroundAttachmentHvr,
    backgroundRepeat: attributes.backgroundRepeatHvr,
    backgroundSize: attributes.backgroundSizeHvr,
    changeBackgroundType: value => setAttributes({
      backgroundTypeHvr: value
    }),
    changeImage: media => {
      setAttributes({
        backgroundImageHvr: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.pick)(media, ['id', 'url'])
      });
    },
    removeImage: () => setAttributes({
      backgroundImageHvr: undefined
    }),
    changeColor: value => setAttributes({
      backgroundColorHvr: value
    }),
    changeGradient: value => setAttributes({
      backgroundGradientHvr: value
    }),
    changeBackgroundAttachment: value => setAttributes({
      backgroundAttachmentHvr: value
    }),
    changeBackgroundRepeat: value => setAttributes({
      backgroundRepeatHvr: value
    }),
    changeFocalPoint: value => setAttributes({
      backgroundPositionHvr: value
    }),
    changeBackgroundSize: value => setAttributes({
      backgroundSizeHvr: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive', 'themehunk-block'),
    initialOpen: false,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Desktop', 'themehunk-block'),
    checked: attributes.responsiveTogHideDesktop,
    onChange: responsiveTogHideDesktop => setAttributes({
      responsiveTogHideDesktop
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Tablet', 'themehunk-block'),
    checked: attributes.responsiveTogHideTablet,
    onChange: responsiveTogHideTablet => setAttributes({
      responsiveTogHideTablet
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Mobile', 'themehunk-block'),
    checked: attributes.responsiveTogHideMobile,
    onChange: responsiveTogHideMobile => setAttributes({
      responsiveTogHideMobile
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition', 'themehunk-block'),
    initialOpen: false,
    className: "th-spacer-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition Duration', 'themehunk-block'),
    renderTooltipContent: customTooltiptransitionAll,
    value: attributes.transitionAll,
    onChange: transitionAll => setAttributes({
      transitionAll
    }),
    step: 0.1,
    min: 0,
    max: 3,
    allowReset: true
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (InsSettings);

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/background-selector-control/editor.scss");
/* harmony import */ var _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/icon.js */ "./src/helpers/icon.js");
/* harmony import */ var _control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../control-panel-control/index.js */ "./src/components/control-panel-control/index.js");

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
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.Bgclr
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'themehunk-block'),
    showTooltip: true,
    isPrimary: 'color' === backgroundType,
    onClick: () => changeBackgroundType('color')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.BgImg
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'themehunk-block'),
    showTooltip: true,
    isPrimary: 'image' === backgroundType,
    onClick: () => changeBackgroundType('image')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.BgGraclr
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/backup.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/control-panel-control/editor.scss");

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
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset to default', 'themehunk-block'),
        showTooltip: true,
        isTertiary: true,
        onClick: () => setAttributes({
          ...resetValues
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        id: id,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/components/hover-tab/editor.scss");

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/components/ins-setting-header/editor.scss");

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/components/responsive-control/editor.scss");
/* harmony import */ var _helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/icon.js */ "./src/helpers/icon.js");

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
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.checkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "popover-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop', 'themehunk-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control-settings-item', {
        'is-selected': 'Tablet' === getView
      }),
      onClick: () => setView('Tablet')
    }, 'Tablet' === getView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.checkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "popover-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'themehunk-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('o-responsive-control-settings-item', {
        'is-selected': 'Mobile' === getView
      }),
      onClick: () => setView('Mobile')
    }, 'Mobile' === getView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      icon: _helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.checkIcon
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/sizing-control/editor.scss");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field.js */ "./src/components/sizing-control/field.js");

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
  }, options.map((i, n) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_field_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/components/toogle-group-control/editor.scss");

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/components/unit-picker/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

// Import CSS




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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: label,
      id: id,
      className: "components-th-blocks-units-control-header__units"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-th-blocks-control__units"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "components-th-blocks-control-buttons__units",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Units', 'themehunk-blocks')
    }, allUnits.map(unit => {
      let unitName = unit;
      if ('px' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Pixel', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('em' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Em', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('%' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Percentage', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      if ('deg' === unit) {
        unitName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Degree', 'A size unit for CSS markup', 'themehunk-blocks');
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip
      /* translators: Unit type (px, em, %) */, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s Units', 'themehunk-blocks'), unitName),
        key: unit
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: unit,
        className: 'components-th-blocks-control-button__units--' + unit,
        isSmall: true,
        isPrimary: value === unit,
        "aria-pressed": value === unit
        /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s Units', 'themehunk-blocks'), unitName),
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
/* harmony export */   "Custom": function() { return /* binding */ Custom; },
/* harmony export */   "End": function() { return /* binding */ End; },
/* harmony export */   "Grow": function() { return /* binding */ Grow; },
/* harmony export */   "HorizontalLeft": function() { return /* binding */ HorizontalLeft; },
/* harmony export */   "HorizontalRight": function() { return /* binding */ HorizontalRight; },
/* harmony export */   "JfCntctr": function() { return /* binding */ JfCntctr; },
/* harmony export */   "JfCntctr1": function() { return /* binding */ JfCntctr1; },
/* harmony export */   "JfCntend": function() { return /* binding */ JfCntend; },
/* harmony export */   "JfCntend1": function() { return /* binding */ JfCntend1; },
/* harmony export */   "JfCntsparnd": function() { return /* binding */ JfCntsparnd; },
/* harmony export */   "JfCntsparnd1": function() { return /* binding */ JfCntsparnd1; },
/* harmony export */   "JfCntspbtn": function() { return /* binding */ JfCntspbtn; },
/* harmony export */   "JfCntspbtn1": function() { return /* binding */ JfCntspbtn1; },
/* harmony export */   "JfCntspevn": function() { return /* binding */ JfCntspevn; },
/* harmony export */   "JfCntspevn1": function() { return /* binding */ JfCntspevn1; },
/* harmony export */   "JfCntstr": function() { return /* binding */ JfCntstr; },
/* harmony export */   "JfCntstr1": function() { return /* binding */ JfCntstr1; },
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
/* harmony export */   "alignitemend": function() { return /* binding */ alignitemend; },
/* harmony export */   "alignitemstr": function() { return /* binding */ alignitemstr; },
/* harmony export */   "alignitemstrech": function() { return /* binding */ alignitemstrech; },
/* harmony export */   "checkIcon": function() { return /* binding */ checkIcon; }
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

/***/ "./inc/block/advance-spacer/editor.scss":
/*!**********************************************!*\
  !*** ./inc/block/advance-spacer/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./inc/block/advance-spacer/style.scss":
/*!*********************************************!*\
  !*** ./inc/block/advance-spacer/style.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/background-selector-control/editor.scss":
/*!****************************************************************!*\
  !*** ./src/components/background-selector-control/editor.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/control-panel-control/editor.scss":
/*!**********************************************************!*\
  !*** ./src/components/control-panel-control/editor.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/hover-tab/editor.scss":
/*!**********************************************!*\
  !*** ./src/components/hover-tab/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ins-setting-header/editor.scss":
/*!*******************************************************!*\
  !*** ./src/components/ins-setting-header/editor.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/responsive-control/editor.scss":
/*!*******************************************************!*\
  !*** ./src/components/responsive-control/editor.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sizing-control/editor.scss":
/*!***************************************************!*\
  !*** ./src/components/sizing-control/editor.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/toogle-group-control/editor.scss":
/*!*********************************************************!*\
  !*** ./src/components/toogle-group-control/editor.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/unit-picker/editor.scss":
/*!************************************************!*\
  !*** ./src/components/unit-picker/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./inc/block/advance-spacer/block.json":
/*!*********************************************!*\
  !*** ./inc/block/advance-spacer/block.json ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"themehunk-blocks/advance-spacer","version":"0.1.0","title":"Advance Spacer","category":"themehunk-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"themehunk-block","attributes":{"id":{"type":"string"},"uniqueID":{"type":"string"},"content":{"type":"string"},"widthType":{"type":"string","default":"none"},"customWidth":{"type":"number"},"customWidthUnit":{"type":"string","default":"px"},"customWidthTablet":{"type":"number"},"customWidthMobile":{"type":"number"},"displayType":{"type":"string"},"heightUnit":{"type":"string","default":"px"},"height":{"type":"number","default":50},"heightTablet":{"type":"number"},"heightMobile":{"type":"number"},"paddingType":{"type":"string","default":"linked"},"paddingTypeTablet":{"type":"string","default":"linked"},"paddingTypeMobile":{"type":"string","default":"linked"},"padding":{"type":"number","default":0},"paddingUnit":{"type":"string","default":"px"},"paddingTablet":{"type":"number"},"paddingMobile":{"type":"number"},"paddingTop":{"type":"number","default":0},"paddingTopTablet":{"type":"number"},"paddingTopMobile":{"type":"number"},"paddingRight":{"type":"number","default":0},"paddingRightTablet":{"type":"number"},"paddingRightMobile":{"type":"number"},"paddingBottom":{"type":"number","default":0},"paddingBottomTablet":{"type":"number"},"paddingBottomMobile":{"type":"number"},"paddingLeft":{"type":"number","default":0},"paddingLeftTablet":{"type":"number"},"paddingLeftMobile":{"type":"number"},"marginType":{"type":"string","default":"linked"},"marginTypeTablet":{"type":"string","default":"linked"},"marginTypeMobile":{"type":"string","default":"linked"},"margin":{"type":"number","default":0},"marginUnit":{"type":"string","default":"px"},"marginTablet":{"type":"number"},"marginMobile":{"type":"number"},"marginTop":{"type":"number","default":0},"marginTopTablet":{"type":"number"},"marginTopMobile":{"type":"number"},"marginRight":{"type":"number","default":0},"marginRightTablet":{"type":"number"},"marginRightMobile":{"type":"number"},"marginBottom":{"type":"number","default":0},"marginBottomTablet":{"type":"number"},"marginBottomMobile":{"type":"number"},"marginLeft":{"type":"number","default":0},"marginLeftTablet":{"type":"number"},"marginLeftMobile":{"type":"number"},"zindex":{"type":"number"},"zindexTablet":{"type":"number"},"zindexMobile":{"type":"number"},"backgroundType":{"type":"string","default":"color"},"backgroundColor":{"type":"string"},"backgroundImage":{"type":"object"},"backgroundAttachment":{"type":"string","default":"scroll"},"backgroundPosition":{"type":"object"},"backgroundRepeat":{"type":"string","default":"repeat"},"backgroundSize":{"type":"string","default":"auto"},"backgroundGradient":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"backgroundTypeHvr":{"type":"string","default":"color"},"backgroundColorHvr":{"type":"string"},"backgroundImageHvr":{"type":"object"},"backgroundAttachmentHvr":{"type":"string","default":"scroll"},"backgroundPositionHvr":{"type":"object"},"backgroundRepeatHvr":{"type":"string","default":"repeat"},"backgroundSizeHvr":{"type":"string","default":"auto"},"backgroundGradientHvr":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"borderType":{"type":"string","default":"none"},"borderWidthType":{"type":"string","default":"linked"},"borderWidthTypeTablet":{"type":"string","default":"linked"},"borderWidthTypeMobile":{"type":"string","default":"linked"},"borderWidthUnit":{"type":"string","default":"px"},"borderWidth":{"type":"number","default":0},"borderWidthTablet":{"type":"number"},"borderWidthMobile":{"type":"number"},"borderWidthTop":{"type":"number","default":0},"borderWidthTopTablet":{"type":"number"},"borderWidthTopMobile":{"type":"number"},"borderWidthBottom":{"type":"number","default":0},"borderWidthBottomTablet":{"type":"number"},"borderWidthBottomMobile":{"type":"number"},"borderWidthRight":{"type":"number","default":0},"borderWidthRightTablet":{"type":"number"},"borderWidthRightMobile":{"type":"number"},"borderWidthLeft":{"type":"number","default":0},"borderWidthLeftTablet":{"type":"number"},"borderWidthLeftMobile":{"type":"number"},"borderColor":{"type":"string"},"borderRadiusUnit":{"type":"string","default":"px"},"borderRadiusType":{"type":"string","default":"linked"},"borderRadiusTypeTablet":{"type":"string","default":"linked"},"borderRadiusTypeMobile":{"type":"string","default":"linked"},"borderRadius":{"type":"number","default":0},"borderRadiusTablet":{"type":"number"},"borderRadiusMobile":{"type":"number"},"borderRadiusTop":{"type":"number","default":0},"borderRadiusTopTablet":{"type":"number"},"borderRadiusTopMobile":{"type":"number"},"borderRadiusLeft":{"type":"number","default":0},"borderRadiusLeftTablet":{"type":"number"},"borderRadiusLeftMobile":{"type":"number"},"borderRadiusBottom":{"type":"number","default":0},"borderRadiusBottomTablet":{"type":"number"},"borderRadiusBottomMobile":{"type":"number"},"borderRadiusRight":{"type":"number","default":0},"borderRadiusRightTablet":{"type":"number"},"borderRadiusRightMobile":{"type":"number"},"boxShadow":{"type":"boolean","default":false},"boxShadowColor":{"type":"string"},"boxShadowColorOpacity":{"type":"number","default":50},"boxShadowBlur":{"type":"number","default":5},"boxShadowSpread":{"type":"number","default":1},"boxShadowHorizontal":{"type":"number","default":0},"boxShadowVertical":{"type":"number","default":0},"borderHvrType":{"type":"string"},"borderWidthHvrUnit":{"type":"string","default":"px"},"borderWidthHvrType":{"type":"string","default":"linked"},"borderWidthHvrTypeTablet":{"type":"string","default":"linked"},"borderWidthHvrTypeMobile":{"type":"string","default":"linked"},"borderWidthHvr":{"type":"number"},"borderWidthHvrTablet":{"type":"number"},"borderWidthHvrMobile":{"type":"number"},"borderWidthHvrTop":{"type":"number"},"borderWidthHvrTopTablet":{"type":"number"},"borderWidthHvrTopMobile":{"type":"number"},"borderWidthHvrBottom":{"type":"number"},"borderWidthHvrBottomTablet":{"type":"number"},"borderWidthHvrBottomMobile":{"type":"number"},"borderWidthHvrRight":{"type":"number"},"borderWidthHvrRightTablet":{"type":"number"},"borderWidthHvrRightMobile":{"type":"number"},"borderWidthHvrLeft":{"type":"number"},"borderWidthHvrLeftTablet":{"type":"number"},"borderWidthHvrLeftMobile":{"type":"number"},"borderColorHvr":{"type":"string"},"borderRadiusHvrUnit":{"type":"string","default":"px"},"borderRadiusHvrType":{"type":"string","default":"linked"},"borderRadiusHvrTypeTablet":{"type":"string","default":"linked"},"borderRadiusHvrTypeMobile":{"type":"string","default":"linked"},"borderRadiusHvr":{"type":"number"},"borderRadiusHvrTablet":{"type":"number"},"borderRadiusHvrMobile":{"type":"number"},"borderRadiusHvrTop":{"type":"number"},"borderRadiusHvrTopTablet":{"type":"number"},"borderRadiusHvrTopMobile":{"type":"number"},"borderRadiusHvrBottom":{"type":"number"},"borderRadiusHvrBottomTablet":{"type":"number"},"borderRadiusHvrBottomMobile":{"type":"number"},"borderRadiusHvrRight":{"type":"number"},"borderRadiusHvrRightTablet":{"type":"number"},"borderRadiusHvrRightMobile":{"type":"number"},"borderRadiusHvrLeft":{"type":"number"},"borderRadiusHvrLeftTablet":{"type":"number"},"borderRadiusHvrLeftMobile":{"type":"number"},"boxShadowHvr":{"type":"boolean"},"boxShadowColorHvr":{"type":"string"},"boxShadowColorOpacityHvr":{"type":"number"},"boxShadowBlurHvr":{"type":"number"},"boxShadowSpreadHvr":{"type":"number"},"boxShadowHorizontalHvr":{"type":"number"},"boxShadowVerticalHvr":{"type":"number"},"position":{"type":"string","default":"relative"},"horizontalOrientation":{"type":"string"},"horizontalOrientationOffset":{"type":"number","default":"0"},"horizontalOrientationOffsetTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetUnit":{"type":"string","default":"px"},"horizontalOrientationOffsetRight":{"type":"number","default":"0"},"horizontalOrientationOffsetRightTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetRightMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetRightUnit":{"type":"string","default":"px"},"verticalOrientation":{"type":"string"},"verticalOrientationOffsetTop":{"type":"number","default":"0"},"verticalOrientationOffsetTopTablet":{"type":"number","default":"0"},"verticalOrientationOffsetTopMobile":{"type":"number","default":"0"},"verticalOrientationOffsetTopUnit":{"type":"string","default":"px"},"verticalOrientationOffsetBottom":{"type":"number","default":"0"},"verticalOrientationOffsetBottomTablet":{"type":"number","default":"0"},"verticalOrientationOffsetBottomMobile":{"type":"number","default":"0"},"verticalOrientationOffsetBottomUnit":{"type":"string","default":"px"},"alignSelf":{"type":"string"},"alignSelfTablet":{"type":"string"},"alignSelfMobile":{"type":"string"},"order":{"type":"string"},"orderTablet":{"type":"string"},"orderMobile":{"type":"string"},"customOrder":{"type":"string"},"customOrderTablet":{"type":"string"},"customOrderMobile":{"type":"string"},"flexSize":{"type":"string"},"flexSizeTablet":{"type":"string"},"flexSizeMobile":{"type":"string"},"FlexGrowSize":{"type":"string"},"FlexGrowSizeTablet":{"type":"string"},"FlexGrowSizeMobile":{"type":"string"},"FlexShrinkSize":{"type":"string"},"FlexShrinkSizeTablet":{"type":"string"},"FlexShrinkSizeMobile":{"type":"string"},"responsiveTogHideDesktop":{"type":"boolean","default":false},"responsiveTogHideTablet":{"type":"boolean","default":false},"responsiveTogHideMobile":{"type":"boolean","default":false},"transitionAll":{"type":"number","default":"0.2"}},"editorScript":"file:../../../build/advance-spacer.js","editorStyle":"file:../../../build/advance-spacer.css","style":"file:../../../build/style-advance-spacer.css"}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"advance-spacer": 0,
/******/ 			"./style-advance-spacer": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-advance-spacer"], function() { return __webpack_require__("./inc/block/advance-spacer/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=advance-spacer.js.map