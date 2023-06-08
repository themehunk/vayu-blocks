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

/***/ "./inc/block/advance-heading/controls.js":
/*!***********************************************!*\
  !*** ./inc/block/advance-heading/controls.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies.
 */




const Controls = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const getTagIcon = value => {
    switch (value) {
      case 'h1':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H1");
      case 'h2':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H2");
      case 'h3':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H3");
      case 'h4':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H4");
      case 'h5':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H5");
      case 'h6':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "H6");
      case 'div':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "DIV");
      case 'p':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "P");
      case 'span':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "SPAN");
      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          },
          x: "0",
          y: "15"
        }, "DEFAULT");
    }
  };
  const changeTag = value => {
    setAttributes({
      tag: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
    icon: getTagIcon(attributes.tag),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select tag', 'themehunk-block'),
    className: "components-toolbar",
    controls: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 1', 'themehunk-block'),
      icon: getTagIcon('h1'),
      onClick: () => changeTag('h1')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 2', 'themehunk-block'),
      icon: getTagIcon('h2'),
      onClick: () => changeTag('h2')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 3', 'themehunk-block'),
      icon: getTagIcon('h3'),
      onClick: () => changeTag('h3')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 4', 'themehunk-block'),
      icon: getTagIcon('h4'),
      onClick: () => changeTag('h4')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 5', 'themehunk-block'),
      icon: getTagIcon('h5'),
      onClick: () => changeTag('h5')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 6', 'themehunk-block'),
      icon: getTagIcon('h6'),
      onClick: () => changeTag('h6')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Div', 'themehunk-block'),
      icon: getTagIcon('div'),
      onClick: () => changeTag('div')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraph', 'themehunk-block'),
      icon: getTagIcon('p'),
      onClick: () => changeTag('p')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Span', 'themehunk-block'),
      icon: getTagIcon('span'),
      onClick: () => changeTag('span')
    }]
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./inc/block/advance-heading/edit.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-heading/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hex-rgba */ "./node_modules/hex-rgba/index.js");
/* harmony import */ var hex_rgba__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hex_rgba__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls.js */ "./inc/block/advance-heading/controls.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ "./inc/block/advance-heading/settings.js");
/* harmony import */ var _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/helpers/google-fonts.js */ "./src/helpers/google-fonts.js");
/* harmony import */ var _src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/helpers/get-unique-id.js */ "./src/helpers/get-unique-id.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./inc/block/advance-heading/editor.scss");


/**
 * WordPress dependencies.
 */








/**
 * Internal dependencies
 */






function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    uniqueID
  } = _ref;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].attach();
  }, [attributes.id]);
  const {
    id
  } = attributes;
  if (!id) {
    setAttributes({
      id: clientId
    });
  }
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
  const changeContent = value => {
    setAttributes({
      content: value
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
  let stylesheet;
  let flexProperties;
  let PositionProperties;
  if (isDesktop) {
    stylesheet = {
      textAlign: attributes.align,
      fontSize: attributes.fontSize + attributes.fontSizeUnit,
      zIndex: attributes.zindex,
      lineHeight: (3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight) || undefined,
      letterSpacing: attributes.letterSpacing && `${attributes.letterSpacing}${attributes.letterSpacingUnit}`,
      paddingTop: 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingTop}${attributes.paddingUnit}`,
      paddingRight: 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingRight}${attributes.paddingUnit}`,
      paddingBottom: 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingBottom}${attributes.paddingUnit}`,
      paddingLeft: 'linked' === attributes.paddingType ? `${attributes.padding}${attributes.paddingUnit}` : `${attributes.paddingLeft}${attributes.paddingUnit}`,
      marginTop: 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginTop}${attributes.marginUnit}`,
      marginBottom: 'linked' === attributes.marginType ? `${attributes.margin}${attributes.marginUnit}` : `${attributes.marginBottom}${attributes.marginUnit}`,
      borderTopWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthTop}${attributes.borderWidthUnit}`,
      borderBottomWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottom}${attributes.borderWidthUnit}`,
      borderRightWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthRight}${attributes.borderWidthUnit}`,
      borderLeftWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeft}${attributes.borderWidthUnit}`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTop}${attributes.borderRadiusUnit}`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRight}${attributes.borderRadiusUnit}`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeft}${attributes.borderRadiusUnit}`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottom}${attributes.borderRadiusUnit}`
    };

    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      alignSelf: attributes.alignSelf
    };

    // flex order
    if (attributes.order === 'start') {
      flexProperties = {
        ...flexProperties,
        order: '-9999'
      };
    } else if (attributes.order === 'end') {
      flexProperties = {
        ...flexProperties,
        order: '9999'
      };
    } else if (attributes.order === 'custom') {
      flexProperties = {
        ...flexProperties,
        order: attributes.customOrder
      };
    }

    //flex size
    if (attributes.flexSize === 'none') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '0'
      };
    } else if (attributes.flexSize === 'grow') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '1',
        flexShrink: '0'
      };
    } else if (attributes.flexSize === 'shrink') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '1'
      };
    } else if (attributes.flexSize === 'custom') {
      flexProperties = {
        ...flexProperties,
        flexGrow: attributes.FlexGrowSize,
        flexShrink: attributes.FlexShrinkSize
      };
    }

    /********************* */
    // position properies 
    /********************* */
    PositionProperties = {
      position: attributes.position
    };
    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        left: attributes.horizontalOrientationOffset + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        right: attributes.horizontalOrientationOffsetRight + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetTop + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetBottom + attributes.verticalOrientationOffsetBottomUnit
      };
    }
  }
  if (isTablet) {
    stylesheet = {
      textAlign: attributes.alignTablet,
      fontSize: attributes.fontSizeTablet + attributes.fontSizeUnit,
      zIndex: attributes.zindexTablet,
      lineHeight: (3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet) || undefined,
      letterSpacing: attributes.letterSpacingTablet && `${attributes.letterSpacingTablet}${attributes.letterSpacingUnit}`,
      paddingTop: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingTopTablet}${attributes.paddingUnit}`,
      paddingRight: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingRightTablet}${attributes.paddingUnit}`,
      paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingBottomTablet}${attributes.paddingUnit}`,
      paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}${attributes.paddingUnit}` : `${attributes.paddingLeftTablet}${attributes.paddingUnit}`,
      marginTop: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginTopTablet}${attributes.marginUnit}`,
      marginBottom: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}${attributes.marginUnit}` : `${attributes.marginBottomTablet}${attributes.marginUnit}`,
      borderTopWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopTablet}${attributes.borderWidthUnit}`,
      borderBottomWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomTablet}${attributes.borderWidthUnit}`,
      borderRightWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightTablet}${attributes.borderWidthUnit}`,
      borderLeftWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftTablet}${attributes.borderWidthUnit}`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopTablet}${attributes.borderRadiusUnit}`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightTablet}${attributes.borderRadiusUnit}`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftTablet}${attributes.borderRadiusUnit}`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomTablet}${attributes.borderRadiusUnit}`
    };

    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      alignSelf: attributes.alignSelfTablet
    };

    // flex order
    if (attributes.orderTablet === 'start') {
      flexProperties = {
        ...flexProperties,
        order: '-9999'
      };
    } else if (attributes.orderTablet === 'end') {
      flexProperties = {
        ...flexProperties,
        order: '9999'
      };
    } else if (attributes.orderTablet === 'custom') {
      flexProperties = {
        ...flexProperties,
        order: attributes.customOrderTablet
      };
    }

    //flex size
    if (attributes.flexSizeTablet === 'none') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '0'
      };
    } else if (attributes.flexSizeTablet === 'grow') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '1',
        flexShrink: '0'
      };
    } else if (attributes.flexSizeTablet === 'shrink') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '1'
      };
    } else if (attributes.flexSizeTablet === 'custom') {
      flexProperties = {
        ...flexProperties,
        flexGrow: attributes.FlexGrowSizeTablet,
        flexShrink: attributes.FlexShrinkSizeTablet
      };
    }

    // position properties

    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        left: attributes.horizontalOrientationOffsetTablet + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        right: attributes.horizontalOrientationOffsetRightTablet + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetTopTablet + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetBottomTablet + attributes.verticalOrientationOffsetBottomUnit
      };
    }
  }
  if (isMobile) {
    stylesheet = {
      textAlign: attributes.alignMobile,
      fontSize: attributes.fontSizeMobile + attributes.fontSizeUnit,
      zIndex: attributes.zindexMobile,
      lineHeight: (3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile) || undefined,
      letterSpacing: attributes.letterSpacingMobile && `${attributes.letterSpacingMobile}${attributes.letterSpacingUnit}`,
      paddingTop: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingTopMobile}${attributes.paddingUnit}`,
      paddingRight: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingRightMobile}${attributes.paddingUnit}`,
      paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingBottomMobile}${attributes.paddingUnit}`,
      paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}${attributes.paddingUnit}` : `${attributes.paddingLeftMobile}${attributes.paddingUnit}`,
      marginTop: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginTopMobile}${attributes.marginUnit}`,
      marginBottom: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}${attributes.marginUnit}` : `${attributes.marginBottomMobile}${attributes.marginUnit}`,
      borderTopWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopMobile}${attributes.borderWidthUnit}`,
      borderBottomWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomMobile}${attributes.borderWidthUnit}`,
      borderRightWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightMobile}${attributes.borderWidthUnit}`,
      borderLeftWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftMobile}${attributes.borderWidthUnit}`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopMobile}${attributes.borderRadiusUnit}`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightMobile}${attributes.borderRadiusUnit}`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftMobile}${attributes.borderRadiusUnit}`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomMobile}${attributes.borderRadiusUnit}`
    };
    /********************* */
    // flex properies 
    /********************* */

    // flex align self
    flexProperties = {
      alignSelf: attributes.alignSelfMobile
    };

    // flex order
    if (attributes.orderMobile === 'start') {
      flexProperties = {
        ...flexProperties,
        order: '-9999'
      };
    } else if (attributes.orderMobile === 'end') {
      flexProperties = {
        ...flexProperties,
        order: '9999'
      };
    } else if (attributes.orderMobile === 'custom') {
      flexProperties = {
        ...flexProperties,
        order: attributes.customOrderMobile
      };
    }

    //flex size
    if (attributes.flexSizeMobile === 'none') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '0'
      };
    } else if (attributes.flexSizeMobile === 'grow') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '1',
        flexShrink: '0'
      };
    } else if (attributes.flexSizeMobile === 'shrink') {
      flexProperties = {
        ...flexProperties,
        flexGrow: '0',
        flexShrink: '1'
      };
    } else if (attributes.flexSizeMobile === 'custom') {
      flexProperties = {
        ...flexProperties,
        flexGrow: attributes.FlexGrowSizeMobile,
        flexShrink: attributes.FlexShrinkSizeMobile
      };
    }

    // position properties

    if (attributes.horizontalOrientation === 'left' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        left: attributes.horizontalOrientationOffsetMobile + attributes.horizontalOrientationOffsetUnit
      };
    }
    if (attributes.horizontalOrientation === 'right' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        right: attributes.horizontalOrientationOffsetRightMobile + attributes.horizontalOrientationOffsetRightUnit
      };
    }
    if (attributes.verticalOrientation === 'top' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetTopMobile + attributes.verticalOrientationOffsetTopUnit
      };
    }
    if (attributes.verticalOrientation === 'bottom' && attributes.position !== 'inherit') {
      PositionProperties = {
        ...PositionProperties,
        top: attributes.verticalOrientationOffsetBottomMobile + attributes.verticalOrientationOffsetBottomUnit
      };
    }
  }
  let customwidth;
  if (attributes.widthType == 'customwidth') {
    if (isDesktop) {
      customwidth = {
        width: attributes.customWidth + attributes.customWidthUnit,
        maxWidh: attributes.customWidth + attributes.customWidthUnit
      };
    }
    if (isTablet) {
      customwidth = {
        width: attributes.customWidthTablet + attributes.customWidthUnit,
        maxWidh: attributes.customWidthTablet + attributes.customWidthUnit
      };
    }
    if (isMobile) {
      customwidth = {
        width: attributes.customWidthMobile + attributes.customWidthUnit,
        maxWidh: attributes.customWidthMobile + attributes.customWidthUnit
      };
    }
  }
  if (attributes.widthType == 'fullwidth') {
    customwidth = {
      width: '100%'
    };
  }
  if (attributes.widthType == 'inlinewidth') {
    customwidth = {
      display: 'inline-flex'
    };
  }
  let boxShadowStyle = {};
  if (attributes.boxShadow) {
    boxShadowStyle = {
      boxShadow: `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#fff', attributes.boxShadowColorOpacity)}`
    };
  }
  let transitionHeadingStyle = {};
  if (attributes.transitionAll) {
    transitionHeadingStyle = {
      transition: `all ${attributes.transitionAll}s`,
      WebkitTransition: `all ${attributes.transitionAll}s`,
      MozTransition: `all ${attributes.transitionAll}s`,
      OTransition: `all ${attributes.transitionAll}s`
    };
  }
  let backgroundStyle = {};
  if ('color' === attributes.backgroundType) {
    backgroundStyle = {
      backgroundColor: attributes.backgroundColor
    };
  }
  if ('image' === attributes.backgroundType) {
    var _attributes$backgroun, _attributes$backgroun2, _attributes$backgroun3;
    backgroundStyle = {
      backgroundImage: `url( '${(_attributes$backgroun = attributes.backgroundImage) === null || _attributes$backgroun === void 0 ? void 0 : _attributes$backgroun.url}' )`,
      backgroundAttachment: attributes.backgroundAttachment,
      backgroundPosition: `${Math.round(((_attributes$backgroun2 = attributes.backgroundPosition) === null || _attributes$backgroun2 === void 0 ? void 0 : _attributes$backgroun2.x) * 100)}% ${Math.round(((_attributes$backgroun3 = attributes.backgroundPosition) === null || _attributes$backgroun3 === void 0 ? void 0 : _attributes$backgroun3.y) * 100)}%`,
      backgroundRepeat: attributes.backgroundRepeat,
      backgroundSize: attributes.backgroundSize
    };
  }
  if ('gradient' === attributes.backgroundType) {
    backgroundStyle = {
      backgroundImage: attributes.backgroundGradient
    };
  }
  const style = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.omitBy)({
    color: attributes.headingColor,
    fontFamily: attributes.fontFamily || undefined,
    fontWeight: 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
    fontStyle: attributes.fontStyle || undefined,
    textTransform: attributes.textTransform || undefined,
    borderStyle: attributes.borderType,
    borderColor: attributes.borderColor,
    ...stylesheet,
    ...customwidth,
    ...boxShadowStyle,
    ...transitionHeadingStyle,
    ...backgroundStyle,
    ...flexProperties,
    ...PositionProperties
  }, x => {
    var _x$includes;
    return x === null || x === void 0 ? void 0 : (_x$includes = x.includes) === null || _x$includes === void 0 ? void 0 : _x$includes.call(x, 'undefined');
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (attributes.fontFamily) {
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_10__["default"].loadFontToBrowser(attributes.fontFamily, attributes.fontVariant);
    }
  }, [attributes.fontFamily]);
  const onMouseEnter = e => {
    e.target.style.color = attributes.headingHvrColor;
    e.target.style.borderColor = attributes.borderColorHvr;
    e.target.style.borderStyle = attributes.borderHvrType;
    e.target.style.boxShadow = `${attributes.boxShadowHorizontalHvr}px ${attributes.boxShadowVerticalHvr}px ${attributes.boxShadowBlurHvr}px ${attributes.boxShadowSpreadHvr}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff', attributes.boxShadowColorOpacityHvr)}`;
    if ('color' === attributes.backgroundType) {
      e.target.style.backgroundColor = attributes.backgroundColorHvr;
    }
    if ('image' === attributes.backgroundType) {
      var _attributes$backgroun4, _attributes$backgroun5, _attributes$backgroun6;
      e.target.style.backgroundImage = `url( '${(_attributes$backgroun4 = attributes.backgroundImageHvr) === null || _attributes$backgroun4 === void 0 ? void 0 : _attributes$backgroun4.url}' )`, e.target.style.backgroundAttachment = attributes.backgroundAttachmentHvr, e.target.style.backgroundPosition = `${Math.round(((_attributes$backgroun5 = attributes.backgroundPositionHvr) === null || _attributes$backgroun5 === void 0 ? void 0 : _attributes$backgroun5.x) * 100)}% ${Math.round(((_attributes$backgroun6 = attributes.backgroundPositionHvr) === null || _attributes$backgroun6 === void 0 ? void 0 : _attributes$backgroun6.y) * 100)}%`, e.target.style.backgroundRepeat = attributes.backgroundRepeatHvr, e.target.style.backgroundSize = attributes.backgroundSizeHvr;
    }
    if ('gradient' === attributes.backgroundType) {
      e.target.style.backgroundImage = attributes.backgroundGradientHvr;
    }
    if (isDesktop) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTop}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottom}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRight}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeft}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTop}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRight}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeft}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottom}${attributes.borderRadiusHvrUnit}`;
    }
    if (isTablet) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTopTablet}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottomTablet}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRightTablet}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeftTablet}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTopTablet}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRightTablet}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeftTablet}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottomTablet}${attributes.borderRadiusHvrUnit}`;
    }
    if (isMobile) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrTopMobile}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrBottomMobile}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrRightMobile}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}${attributes.borderWidthHvrUnit}` : `${attributes.borderWidthHvrLeftMobile}${attributes.borderWidthHvrUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrTopMobile}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrRightMobile}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrLeftMobile}${attributes.borderRadiusHvrUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}${attributes.borderRadiusHvrUnit}` : `${attributes.borderRadiusHvrBottomMobile}${attributes.borderRadiusHvrUnit}`;
    }
  };
  const onMouseLeave = e => {
    e.target.style.color = attributes.headingColor;
    e.target.style.borderColor = attributes.borderColor;
    e.target.style.borderStyle = attributes.borderType;
    e.target.style.boxShadow = `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#fff', attributes.boxShadowColorOpacity)}`;
    if ('color' === attributes.backgroundType) {
      e.target.style.backgroundColor = attributes.backgroundColor;
    }
    if ('image' === attributes.backgroundType) {
      var _attributes$backgroun7, _attributes$backgroun8, _attributes$backgroun9;
      e.target.style.backgroundImage = `url( '${(_attributes$backgroun7 = attributes.backgroundImage) === null || _attributes$backgroun7 === void 0 ? void 0 : _attributes$backgroun7.url}' )`, e.target.style.backgroundAttachment = attributes.backgroundAttachment, e.target.style.backgroundPosition = `${Math.round(((_attributes$backgroun8 = attributes.backgroundPosition) === null || _attributes$backgroun8 === void 0 ? void 0 : _attributes$backgroun8.x) * 100)}% ${Math.round(((_attributes$backgroun9 = attributes.backgroundPosition) === null || _attributes$backgroun9 === void 0 ? void 0 : _attributes$backgroun9.y) * 100)}%`, e.target.style.backgroundRepeat = attributes.backgroundRepeat, e.target.style.backgroundSize = attributes.backgroundSize;
    }
    if ('gradient' === attributes.backgroundType) {
      e.target.style.backgroundImage = attributes.backgroundGradient;
    }
    if (isDesktop) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthTop}${attributes.borderWidthUnit}`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottom}${attributes.borderWidthUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthRight}${attributes.borderWidthUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeft}${attributes.borderWidthUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTop}${attributes.borderRadiusUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRight}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeft}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottom}${attributes.borderRadiusUnit}`;
    }
    if (isTablet) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopTablet}${attributes.borderWidthUnit}`, e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomTablet}${attributes.borderWidthUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightTablet}${attributes.borderWidthUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftTablet}${attributes.borderWidthUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopTablet}${attributes.borderRadiusUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightTablet}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftTablet}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomTablet}${attributes.borderRadiusUnit}`;
    }
    if (isMobile) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthTopMobile}${attributes.borderWidthUnit}`, e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthBottomMobile}${attributes.borderWidthUnit}`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthRightMobile}${attributes.borderWidthUnit}`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}${attributes.borderWidthUnit}` : `${attributes.borderWidthLeftMobile}${attributes.borderWidthUnit}`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusTopMobile}${attributes.borderRadiusUnit}`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusRightMobile}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusLeftMobile}${attributes.borderRadiusUnit}`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}${attributes.borderRadiusUnit}` : `${attributes.borderRadiusBottomMobile}${attributes.borderRadiusUnit}`;
    }
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    id: `th-block-heading-${attributes.uniqueID}`,
    style,
    onMouseEnter,
    onMouseLeave
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_controls_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    identifier: "content",
    tagName: attributes.tag // The tag here is the element output and editable in the admin
    ,
    value: attributes.content // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: ['core/bold', 'core/italic', 'core/link'] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: changeContent // Store updated content as a block attribute
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Write heading…', 'themehunk-block') // Display this text before any content has been added by the user
  }, blockProps)));
}

/***/ }),

/***/ "./inc/block/advance-heading/index.js":
/*!********************************************!*\
  !*** ./inc/block/advance-heading/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./inc/block/advance-heading/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./inc/block/advance-heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./inc/block/advance-heading/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./inc/block/advance-heading/block.json");
/* harmony import */ var _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/helpers/icon.js */ "./src/helpers/icon.js");
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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Heading', 'themehunk-block'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Heading gives a spin to editor\'s Heading block with much needed customization options. Powered by themehunk.', 'themehunk-block'),
  icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_6__.HeadingIcon,
  keywords: ['heading', 'title', 'advanced heading'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A heading with more customization options', 'themehunk-block')
    }
  }
});

/***/ }),

/***/ "./inc/block/advance-heading/save.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-heading/save.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies.
 */

const Save = _ref => {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    id: attributes.uniqueID,
    className: `wp-block-th-advance-heading th-h${attributes.uniqueID}`
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tagName: attributes.tag,
    value: attributes.content
  }, blockProps));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./inc/block/advance-heading/settings.js":
/*!***********************************************!*\
  !*** ./inc/block/advance-heading/settings.js ***!
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
/* harmony import */ var _src_components_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/index.js */ "./src/components/index.js");
/* harmony import */ var _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/helpers/icon.js */ "./src/helpers/icon.js");

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
  const getAlignment = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.align;
      case 'Tablet':
        return attributes.alignTablet;
      case 'Mobile':
        return attributes.alignMobile;
      default:
        return undefined;
    }
  };
  const changeAlignment = value => {
    if ('Desktop' === getView) {
      setAttributes({
        align: value,
        alignTablet: value,
        alignMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        alignTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        alignMobile: value
      });
    }
  };
  const getFontSize = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.fontSize;
      case 'Tablet':
        return attributes.fontSizeTablet;
      case 'Mobile':
        return attributes.fontSizeMobile;
      default:
        return undefined;
    }
  };
  const changeFontSize = value => {
    if ('Desktop' === getView) {
      setAttributes({
        fontSize: value,
        fontSizeTablet: value,
        fontSizeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        fontSizeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        fontSizeMobile: value
      });
    }
  };
  const getlineHeight = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.lineHeight;
      case 'Tablet':
        return attributes.lineHeightTablet;
      case 'Mobile':
        return attributes.lineHeightMobile;
      default:
        return undefined;
    }
  };
  const changelineHeight = value => {
    if ('Desktop' === getView) {
      setAttributes({
        lineHeight: value,
        lineHeightTablet: value,
        lineHeightMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        lineHeightTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        lineHeightMobile: value
      });
    }
  };
  const getletterSpacing = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.letterSpacing;
      case 'Tablet':
        return attributes.letterSpacingTablet;
      case 'Mobile':
        return attributes.letterSpacingMobile;
      default:
        return undefined;
    }
  };
  const changeletterSpacing = value => {
    if ('Desktop' === getView) {
      setAttributes({
        letterSpacing: value,
        letterSpacingTablet: value,
        letterSpacingMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        letterSpacingTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        letterSpacingMobile: value
      });
    }
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
  const desktopPaddingType = {
    top: 'paddingTop',
    right: 'paddingRight',
    bottom: 'paddingBottom',
    left: 'paddingLeft'
  };
  const desktopMarginType = {
    top: 'marginTop',
    right: 'marginRight',
    bottom: 'marginBottom',
    left: 'marginLeft'
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
  const tabletPaddingType = {
    top: 'paddingTopTablet',
    right: 'paddingRightTablet',
    bottom: 'paddingBottomTablet',
    left: 'paddingLeftTablet'
  };
  const tabletMarginType = {
    top: 'marginTopTablet',
    right: 'margingRightTablet',
    bottom: 'marginBottomTablet',
    left: 'marginLeftTablet'
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
  const mobilePaddingType = {
    top: 'paddingTopMobile',
    right: 'paddingRightMobile',
    bottom: 'paddingBottomMobile',
    left: 'paddingLeftMobile'
  };
  const mobileMarginType = {
    top: 'marginTopMobile',
    right: 'marginRightMobile',
    bottom: 'marginBottomMobile',
    left: 'marginLeftMobile'
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
  const changeFontFamily = value => {
    if (!value) {
      setAttributes({
        fontFamily: value,
        fontVariant: value
      });
    } else {
      setAttributes({
        fontFamily: value,
        fontVariant: 'normal',
        fontStyle: 'normal'
      });
    }
  };
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
  const customTooltipFontsize = value => `${value}${attributes.fontSizeUnit}`;
  const customTooltiplineHeight = value => `${value}${attributes.lineHeightUnit}`;
  const customTooltipletterSpacing = value => `${value}${attributes.letterSpacingUnit}`;
  const customTooltipCustomWidth = value => `${value}${attributes.customWidthUnit}`;
  const customTooltipZindex = value => `${value}px`;
  const customTooltiptransitionAll = value => `${value}`;
  const customTooltipCustomOrder = value => `${value}`;
  const customTooltipFlexGrow = value => `${value}`;
  const customTooltipFlexShrink = value => `${value}`;
  const customTooltiphorizontalOrientationOffset = value => `${value}${attributes.horizontalOrientationOffsetUnit}`;
  const customTooltiphorizontalOrientationOffsetRight = value => `${value}${attributes.horizontalOrientationOffsetRightUnit}`;
  const customTooltipverticalOrientationOffsetTop = value => `${value}${attributes.verticalOrientationOffsetTopUnit}`;
  const customTooltipverticalOrientationOffsetBottom = value => `${value}${attributes.verticalOrientationOffsetBottomUnit}`;
  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('style');
  const [hover, setHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.InsSettingHeader, {
    value: tab,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'themehunk-block'),
      value: 'style'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'themehunk-block'),
      value: 'advanced'
    }],
    onChange: setTab
  }), 'style' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'themehunk-block'),
    className: "th-adv-h-panel",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: getAlignment(),
    onChange: changeAlignment,
    isCollapsed: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.HoverControl, {
    value: hover,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setHover
  }), 'normal' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Color', 'themehunk-block'),
    colorValue: attributes.headingColor,
    onColorChange: e => setAttributes({
      headingColor: e
    }),
    enableAlpha: true
  }) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Hover Color', 'themehunk-block'),
    colorValue: attributes.headingHvrColor,
    onColorChange: e => setAttributes({
      headingHvrColor: e
    }),
    enableAlpha: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typographgy', 'themehunk-block'),
    className: "th-adv-h-panel",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.GoogleFontsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Family', 'themehunk-block'),
    value: attributes.fontFamily,
    onChangeFontFamily: changeFontFamily,
    valueVariant: attributes.fontVariant,
    onChangeFontVariant: fontVariant => setAttributes({
      fontVariant
    }),
    valueStyle: attributes.fontStyle,
    onChangeFontStyle: fontStyle => setAttributes({
      fontStyle
    }),
    valueTransform: attributes.textTransform,
    onChangeTextTransform: textTransform => setAttributes({
      textTransform
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.fontSizeUnit,
    onClick: fontSizeUnit => setAttributes({
      fontSizeUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipFontsize,
    value: getFontSize() || '',
    onChange: changeFontSize,
    step: 0.1,
    min: 1,
    max: 500,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.lineHeightUnit,
    onClick: lineHeightUnit => setAttributes({
      lineHeightUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiplineHeight,
    value: getlineHeight() || '',
    onChange: changelineHeight,
    step: 0.1,
    min: 0,
    max: 300,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.letterSpacingUnit,
    onClick: letterSpacingUnit => setAttributes({
      letterSpacingUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipletterSpacing,
    value: getletterSpacing() || '',
    onChange: changeletterSpacing,
    step: 0.1,
    min: -300,
    max: 300,
    allowReset: true
  })))) || 'advanced' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'themehunk-block'),
    initialOpen: false
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.customWidthUnit,
    onClick: customWidthUnit => setAttributes({
      customWidthUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipCustomWidth,
    value: getCustomWidth() || '',
    onChange: changeCustomWidth,
    step: 1,
    min: 1,
    max: 1000,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.paddingUnit,
    onClick: paddingUnit => setAttributes({
      paddingUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getPaddingType(),
    min: 0,
    max: 500,
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.marginUnit,
    onClick: marginUnit => setAttributes({
      marginUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getMarginType(),
    min: 0,
    max: 500,
    changeType: changeMarginType,
    onChange: changeMargin,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getMargin('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getMargin('bottom')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'themehunk-block'),
    value: attributes.position,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'themehunk-block'),
      value: 'inherit'
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal Orientation', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: attributes.horizontalOrientation,
    onChange: horizontalOrientation => setAttributes({
      horizontalOrientation
    }),
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.HorizontalLeft,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('left', 'themehunk-blocks'),
      value: 'left'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.HorizontalRight,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('right', 'themehunk-block'),
      value: 'right'
    }],
    hasIcon: true
  })), 'left' == attributes.horizontalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.horizontalOrientationOffsetUnit,
    onClick: horizontalOrientationOffsetUnit => setAttributes({
      horizontalOrientationOffsetUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiphorizontalOrientationOffset,
    value: gethorizontalOrientationOffset() || '',
    onChange: changehorizontalOrientationOffset,
    step: 1,
    min: -999,
    max: 1000,
    allowReset: true
  })), 'right' == attributes.horizontalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.horizontalOrientationOffsetRightUnit,
    onClick: horizontalOrientationOffsetRightUnit => setAttributes({
      horizontalOrientationOffsetRightUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiphorizontalOrientationOffsetRight,
    value: gethorizontalOrientationOffsetRight() || '',
    onChange: changehorizontalOrientationOffsetRight,
    step: 1,
    min: -999,
    max: 1000,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-component-group-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Orientation', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: attributes.verticalOrientation,
    onChange: verticalOrientation => setAttributes({
      verticalOrientation
    }),
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.VerticalTop,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('top', 'themehunk-blocks'),
      value: 'top'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.VerticalBottom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('bottom', 'themehunk-block'),
      value: 'bottom'
    }],
    hasIcon: true
  })), 'top' == attributes.verticalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.verticalOrientationOffsetTopUnit,
    onClick: verticalOrientationOffsetTopUnit => setAttributes({
      verticalOrientationsetTopUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipverticalOrientationOffsetTop,
    value: getverticalOrientationOffsetTop() || '',
    onChange: changeverticalOrientationOffsetTop,
    step: 1,
    min: -999,
    max: 1000,
    allowReset: true
  })), 'bottom' == attributes.verticalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.verticalOrientationOffsetBottomUnit,
    onClick: verticalOrientationOffsetBottomUnit => setAttributes({
      verticalOrientationOffsetBottomUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipverticalOrientationOffsetBottom,
    value: getverticalOrientationOffsetBottom() || '',
    onChange: changeverticalOrientationOffsetBottom,
    step: 1,
    min: -999,
    max: 1000,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-index', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipZindex,
    value: getZindex() || '',
    onChange: changeZindex,
    step: 1,
    min: -999999,
    max: 999999,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align Self', 'themehunk-block'),
    className: "th-alig-self-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: getSelfAlign(),
    onChange: changeSelfAlign,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Start,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Center,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'themehunk-block'),
      value: 'center'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.End,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('end', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Strech,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('stretch', 'themehunk-block'),
      value: 'stretch'
    }],
    hasIcon: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'themehunk-block'),
    className: "th-order-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: getorder(),
    onChange: changeorder,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.OrderStart,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.OrderEnd,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('end', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('cutsom', 'themehunk-block'),
      value: 'custom'
    }],
    hasIcon: true
  })), 'custom' == attributes.order && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Order', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipCustomOrder,
    value: getcustomOrder() || '',
    onChange: changecustomOrder,
    step: 1,
    min: -9999,
    max: 9999,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'themehunk-block'),
    className: "th-size-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: getflexSize(),
    onChange: changeflexSize,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.None,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('none', 'themehunk-blocks'),
      value: 'none'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Grow,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('grow', 'themehunk-blocks'),
      value: 'grow'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Shrink,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shrink', 'themehunk-block'),
      value: 'shrink'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('custom', 'themehunk-block'),
      value: 'custom'
    }],
    hasIcon: true
  })), 'custom' == attributes.flexSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex Grow', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipFlexGrow,
    value: getFlexGrowSize() || '',
    onChange: changeFlexGrowSize,
    step: 1,
    min: 1,
    max: 500,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
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
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.HoverControl, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderWidthUnit,
    onClick: borderWidthUnit => setAttributes({
      borderWidthUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderWidthType(),
    min: 0,
    max: 500,
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderRadiusUnit,
    onClick: borderWidthUnit => setAttributes({
      borderWidthUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderRadiusType(),
    min: 0,
    max: 500,
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ControlPanelControl, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderWidthHvrUnit,
    onClick: borderWidthHvrUnit => setAttributes({
      borderWidthHvrUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderWidthHvrType(),
    min: 0,
    max: 500,
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
    }),
    enableAlpha: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderRadiusHvrUnit,
    onClick: borderRadiusHvrUnit => setAttributes({
      borderRadiusHvrUnit
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderRadiusHvrType(),
    min: 0,
    max: 500,
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ControlPanelControl, {
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
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.HoverControl, {
    value: hover,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'themehunk-block'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'themehunk-block'),
      value: 'hover'
    }],
    onChange: setHover
  }), 'normal' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundSelectorControl, {
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
  }) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundSelectorControl, {
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
    initialOpen: false
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
    initialOpen: false
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

/***/ "./inc/block/advance-heading/editor.scss":
/*!***********************************************!*\
  !*** ./inc/block/advance-heading/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./inc/block/advance-heading/style.scss":
/*!**********************************************!*\
  !*** ./inc/block/advance-heading/style.scss ***!
  \**********************************************/
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

/***/ "./inc/block/advance-heading/block.json":
/*!**********************************************!*\
  !*** ./inc/block/advance-heading/block.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"themehunk-blocks/advance-heading","version":"0.1.0","title":"Advance Heading","category":"themehunk-blocks","description":"Example block scaffolded with Create Block tool.","keywords":["heading","title","advanced heading"],"textdomain":"themehunk-block","attributes":{"id":{"type":"string"},"uniqueID":{"type":"string"},"content":{"type":"string","selector":"h1,h2,h3,h4,h5,h6,div,p,span","default":""},"tag":{"default":"h2","type":"string"},"align":{"type":"string"},"alignTablet":{"type":"string"},"alignMobile":{"type":"string"},"headingColor":{"type":"string"},"headingHvrColor":{"type":"string"},"highlightColor":{"type":"string"},"highlightBackground":{"type":"string"},"fontSize":{"type":"number"},"fontSizeUnit":{"type":"string","default":"px"},"fontSizeTablet":{"type":"number"},"fontSizeMobile":{"type":"number"},"fontFamily":{"type":"string"},"fontVariant":{"type":"string"},"fontStyle":{"type":"string"},"textTransform":{"type":"string"},"lineHeight":{"type":"number"},"lineHeightUnit":{"type":"string","default":"px"},"lineHeightTablet":{"type":"number"},"lineHeightMobile":{"type":"number"},"letterSpacing":{"type":"number"},"letterSpacingUnit":{"type":"string","default":"px"},"letterSpacingTablet":{"type":"number"},"letterSpacingMobile":{"type":"number"},"textShadow":{"type":"boolean","default":false},"textShadowColor":{"type":"string","default":"#000000"},"textShadowColorOpacity":{"type":"number","default":50},"textShadowBlur":{"type":"number","default":5},"textShadowHorizontal":{"type":"number","default":0},"textShadowVertical":{"type":"number","default":0},"paddingType":{"type":"string","default":"linked"},"paddingTypeTablet":{"type":"string","default":"linked"},"paddingTypeMobile":{"type":"string","default":"linked"},"padding":{"type":"number","default":0},"paddingUnit":{"type":"string","default":"px"},"paddingTablet":{"type":"number"},"paddingMobile":{"type":"number"},"paddingTop":{"type":"number","default":0},"paddingTopTablet":{"type":"number"},"paddingTopMobile":{"type":"number"},"paddingRight":{"type":"number","default":0},"paddingRightTablet":{"type":"number"},"paddingRightMobile":{"type":"number"},"paddingBottom":{"type":"number","default":0},"paddingBottomTablet":{"type":"number"},"paddingBottomMobile":{"type":"number"},"paddingLeft":{"type":"number","default":0},"paddingLeftTablet":{"type":"number"},"paddingLeftMobile":{"type":"number"},"marginType":{"type":"string","default":"linked"},"marginTypeTablet":{"type":"string","default":"linked"},"marginTypeMobile":{"type":"string","default":"linked"},"margin":{"type":"number","default":0},"marginUnit":{"type":"string","default":"px"},"marginTablet":{"type":"number"},"marginMobile":{"type":"number"},"marginTop":{"type":"number","default":0},"marginTopTablet":{"type":"number"},"marginTopMobile":{"type":"number"},"marginBottom":{"type":"number","default":0},"marginBottomTablet":{"type":"number"},"marginBottomMobile":{"type":"number"},"marginRight":{"type":"number","default":0},"marginRightTablet":{"type":"number"},"marginRightMobile":{"type":"number"},"marginLeft":{"type":"number","default":0},"marginLeftTablet":{"type":"number"},"marginLeftMobile":{"type":"number"},"widthType":{"type":"string","default":"none"},"customWidth":{"type":"number"},"customWidthUnit":{"type":"string","default":"px"},"customWidthTablet":{"type":"number"},"customWidthMobile":{"type":"number"},"zindex":{"type":"number"},"zindexTablet":{"type":"number"},"zindexMobile":{"type":"number"},"responsiveTogHideDesktop":{"type":"boolean","default":false},"responsiveTogHideTablet":{"type":"boolean","default":false},"responsiveTogHideMobile":{"type":"boolean","default":false},"borderColor":{"type":"string"},"borderColorHvr":{"type":"string"},"borderType":{"type":"string","default":"none"},"borderHvrType":{"type":"string","default":"none"},"borderWidthType":{"type":"string","default":"linked"},"borderWidthUnit":{"type":"string","default":"px"},"borderWidthTypeTablet":{"type":"string","default":"linked"},"borderWidthTypeMobile":{"type":"string","default":"linked"},"borderWidth":{"type":"number","default":0},"borderWidthTablet":{"type":"number"},"borderWidthMobile":{"type":"number"},"borderWidthTop":{"type":"number","default":0},"borderWidthTopTablet":{"type":"number"},"borderWidthTopMobile":{"type":"number"},"borderWidthBottom":{"type":"number","default":0},"borderWidthBottomTablet":{"type":"number"},"borderWidthBottomMobile":{"type":"number"},"borderWidthRight":{"type":"number","default":0},"borderWidthRightTablet":{"type":"number"},"borderWidthRightMobile":{"type":"number"},"borderWidthLeft":{"type":"number","default":0},"borderWidthLeftTablet":{"type":"number"},"borderWidthLeftMobile":{"type":"number"},"borderWidthHvrType":{"type":"string","default":"linked"},"borderWidthHvrUnit":{"type":"string","default":"px"},"borderWidthHvrTypeTablet":{"type":"string","default":"linked"},"borderWidthHvrTypeMobile":{"type":"string","default":"linked"},"borderWidthHvr":{"type":"number","default":0},"borderWidthHvrTablet":{"type":"number"},"borderWidthHvrMobile":{"type":"number"},"borderWidthHvrTop":{"type":"number","default":0},"borderWidthHvrTopTablet":{"type":"number"},"borderWidthHvrTopMobile":{"type":"number"},"borderWidthHvrBottom":{"type":"number","default":0},"borderWidthHvrBottomTablet":{"type":"number"},"borderWidthHvrBottomMobile":{"type":"number"},"borderWidthHvrRight":{"type":"number","default":0},"borderWidthHvrRightTablet":{"type":"number"},"borderWidthHvrRightMobile":{"type":"number"},"borderWidthHvrLeft":{"type":"number","default":0},"borderWidthHvrLeftTablet":{"type":"number"},"borderWidthHvrLeftMobile":{"type":"number"},"borderRadiusType":{"type":"string","default":"linked"},"borderRadiusUnit":{"type":"string","default":"px"},"borderRadiusTypeTablet":{"type":"string","default":"linked"},"borderRadiusTypeMobile":{"type":"string","default":"linked"},"borderRadius":{"type":"number","default":0},"borderRadiusTablet":{"type":"number"},"borderRadiusMobile":{"type":"number"},"borderRadiusTop":{"type":"number","default":0},"borderRadiusTopTablet":{"type":"number"},"borderRadiusTopMobile":{"type":"number"},"borderRadiusLeft":{"type":"number","default":0},"borderRadiusLeftTablet":{"type":"number"},"borderRadiusLeftMobile":{"type":"number"},"borderRadiusBottom":{"type":"number","default":0},"borderRadiusBottomTablet":{"type":"number"},"borderRadiusBottomMobile":{"type":"number"},"borderRadiusRight":{"type":"number","default":0},"borderRadiusRightTablet":{"type":"number"},"borderRadiusRightMobile":{"type":"number"},"borderRadiusHvrType":{"type":"string","default":"linked"},"borderRadiusHvrUnit":{"type":"string","default":"px"},"borderRadiusHvrTypeTablet":{"type":"string","default":"linked"},"borderRadiusHvrTypeMobile":{"type":"string","default":"linked"},"borderRadiusHvr":{"type":"number","default":0},"borderRadiusHvrTablet":{"type":"number"},"borderRadiusHvrMobile":{"type":"number"},"borderRadiusHvrTop":{"type":"number","default":0},"borderRadiusHvrTopTablet":{"type":"number"},"borderRadiusHvrTopMobile":{"type":"number"},"borderRadiusHvrBottom":{"type":"number","default":0},"borderRadiusHvrBottomTablet":{"type":"number"},"borderRadiusHvrBottomMobile":{"type":"number"},"borderRadiusHvrRight":{"type":"number","default":0},"borderRadiusHvrRightTablet":{"type":"number"},"borderRadiusHvrRightMobile":{"type":"number"},"borderRadiusHvrLeft":{"type":"number","default":0},"borderRadiusHvrLeftTablet":{"type":"number"},"borderRadiusHvrLeftMobile":{"type":"number"},"boxShadow":{"type":"boolean","default":false},"boxShadowColor":{"type":"string"},"boxShadowColorOpacity":{"type":"number","default":50},"boxShadowBlur":{"type":"number","default":5},"boxShadowSpread":{"type":"number","default":1},"boxShadowHorizontal":{"type":"number","default":0},"boxShadowVertical":{"type":"number","default":0},"boxShadowHvr":{"type":"boolean","default":false},"boxShadowColorHvr":{"type":"string"},"boxShadowColorOpacityHvr":{"type":"number","default":50},"boxShadowBlurHvr":{"type":"number","default":5},"boxShadowSpreadHvr":{"type":"number","default":1},"boxShadowHorizontalHvr":{"type":"number","default":0},"boxShadowVerticalHvr":{"type":"number","default":0},"backgroundType":{"type":"string","default":"color"},"backgroundColor":{"type":"string"},"backgroundImage":{"type":"object"},"backgroundAttachment":{"type":"string","default":"scroll"},"backgroundPosition":{"type":"object"},"backgroundRepeat":{"type":"string","default":"repeat"},"backgroundSize":{"type":"string","default":"auto"},"backgroundGradient":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"backgroundTypeHvr":{"type":"string","default":"color"},"backgroundColorHvr":{"type":"string"},"backgroundImageHvr":{"type":"object"},"backgroundAttachmentHvr":{"type":"string","default":"scroll"},"backgroundPositionHvr":{"type":"object"},"backgroundRepeatHvr":{"type":"string","default":"repeat"},"backgroundSizeHvr":{"type":"string","default":"auto"},"backgroundGradientHvr":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"transitionAll":{"type":"number","default":"0.2"},"alignSelf":{"type":"string"},"alignSelfTablet":{"type":"string"},"alignSelfMobile":{"type":"string"},"order":{"type":"string"},"orderTablet":{"type":"string"},"orderMobile":{"type":"string"},"customOrder":{"type":"string"},"customOrderTablet":{"type":"string"},"customOrderMobile":{"type":"string"},"flexSize":{"type":"string"},"flexSizeTablet":{"type":"string"},"flexSizeMobile":{"type":"string"},"FlexGrowSize":{"type":"string"},"FlexGrowSizeTablet":{"type":"string"},"FlexGrowSizeMobile":{"type":"string"},"FlexShrinkSize":{"type":"string"},"FlexShrinkSizeTablet":{"type":"string"},"FlexShrinkSizeMobile":{"type":"string"},"position":{"type":"string"},"horizontalOrientation":{"type":"string"},"horizontalOrientationOffset":{"type":"number","default":"0"},"horizontalOrientationOffsetTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetUnit":{"type":"string","default":"px"},"horizontalOrientationOffsetRight":{"type":"number","default":"0"},"horizontalOrientationOffsetRightTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetRightMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetRightUnit":{"type":"string","default":"px"},"verticalOrientation":{"type":"string"},"verticalOrientationOffsetTop":{"type":"number","default":"0"},"verticalOrientationOffsetTopTablet":{"type":"number","default":"0"},"verticalOrientationOffsetTopMobile":{"type":"number","default":"0"},"verticalOrientationOffsetTopUnit":{"type":"string","default":"px"},"verticalOrientationOffsetBottom":{"type":"number","default":"0"},"verticalOrientationOffsetBottomTablet":{"type":"number","default":"0"},"verticalOrientationOffsetBottomMobile":{"type":"number","default":"0"},"verticalOrientationOffsetBottomUnit":{"type":"string","default":"px"}}}');

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
/******/ 			"advance-heading": 0,
/******/ 			"./style-advance-heading": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-advance-heading"], function() { return __webpack_require__("./inc/block/advance-heading/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=advance-heading.js.map