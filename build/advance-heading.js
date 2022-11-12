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
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H1"));
      case 'h2':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H2"));
      case 'h3':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H3"));
      case 'h4':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H4"));
      case 'h5':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H5"));
      case 'h6':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "H6"));
      case 'div':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "DIV"));
      case 'p':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          x: "0",
          y: "15"
        }, "P"));
      case 'span':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "SPAN"));
      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          style: {
            width: '25px',
            height: '20px'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
          style: {
            fontSize: '12px'
          },
          x: "0",
          y: "15"
        }, "DEFAULT"));
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
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 1',
      icon: getTagIcon('h1'),
      onClick: () => changeTag('h1')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 2',
      icon: getTagIcon('h2'),
      onClick: () => changeTag('h2')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 3',
      icon: getTagIcon('h3'),
      onClick: () => changeTag('h3')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 4',
      icon: getTagIcon('h4'),
      onClick: () => changeTag('h4')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 5',
      icon: getTagIcon('h5'),
      onClick: () => changeTag('h5')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'themehunk-block') + ' 6',
      icon: getTagIcon('h6'),
      onClick: () => changeTag('h6')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Division', 'themehunk-block'),
      icon: getTagIcon('div'),
      onClick: () => changeTag('div')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraph', 'themehunk-block'),
      icon: getTagIcon('p'),
      onClick: () => changeTag('p')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Span Tag', 'themehunk-block'),
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./inc/block/advance-heading/block.json");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls.js */ "./inc/block/advance-heading/controls.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings.js */ "./inc/block/advance-heading/settings.js");
/* harmony import */ var _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/helpers/google-fonts.js */ "./src/helpers/google-fonts.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor.scss */ "./inc/block/advance-heading/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);


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
    clientId
  } = _ref;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_12__["default"].attach();
  }, [attributes.id]);
  const {
    id
  } = attributes;
  if (!id) {
    setAttributes({
      id: clientId
    });
  }
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
  if (isDesktop) {
    stylesheet = {
      textAlign: attributes.align,
      fontSize: attributes.fontSize,
      zIndex: attributes.zindex,
      lineHeight: (3 < attributes.lineHeight ? attributes.lineHeight + 'px' : attributes.lineHeight) || undefined,
      letterSpacing: attributes.letterSpacing && `${attributes.letterSpacing}px`,
      paddingTop: 'linked' === attributes.paddingType ? `${attributes.padding}px` : `${attributes.paddingTop}px`,
      paddingRight: 'linked' === attributes.paddingType ? `${attributes.padding}px` : `${attributes.paddingRight}px`,
      paddingBottom: 'linked' === attributes.paddingType ? `${attributes.padding}px` : `${attributes.paddingBottom}px`,
      paddingLeft: 'linked' === attributes.paddingType ? `${attributes.padding}px` : `${attributes.paddingLeft}px`,
      marginTop: 'linked' === attributes.marginType ? `${attributes.margin}px` : `${attributes.marginTop}px`,
      marginBottom: 'linked' === attributes.marginType ? `${attributes.margin}px` : `${attributes.marginBottom}px`,
      marginRight: 'linked' === attributes.marginType ? `${attributes.margin}px` : `${attributes.marginRight}px`,
      marginLeft: 'linked' === attributes.marginType ? `${attributes.margin}px` : `${attributes.marginLeft}px`,
      borderTopWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthTop}px`,
      borderBottomWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthBottom}px`,
      borderRightWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthRight}px`,
      borderLeftWidth: 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthLeft}px`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusTop}px`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusRight}px`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusLeft}px`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusBottom}px`
    };
  }
  if (isTablet) {
    stylesheet = {
      textAlign: attributes.alignTablet,
      fontSize: attributes.fontSizeTablet,
      zIndex: attributes.zindexTablet,
      lineHeight: (3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + 'px' : attributes.lineHeightTablet) || undefined,
      letterSpacing: attributes.letterSpacingTablet && `${attributes.letterSpacingTablet}px`,
      paddingTop: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}px` : `${attributes.paddingTopTablet}px`,
      paddingRight: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}px` : `${attributes.paddingRightTablet}px`,
      paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}px` : `${attributes.paddingBottomTablet}px`,
      paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${attributes.paddingTablet}px` : `${attributes.paddingLeftTablet}px`,
      marginTop: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}px` : `${attributes.marginTopTablet}px`,
      marginBottom: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}px` : `${attributes.marginBottomTablet}px`,
      marginRight: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}px` : `${attributes.marginRightTablet}px`,
      marginLeft: 'linked' === attributes.marginTypeTablet ? `${attributes.marginTablet}px` : `${attributes.marginLeftTablet}px`,
      borderTopWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthTopTablet}px`,
      borderBottomWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthBottomTablet}px`,
      borderRightWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthRightTablet}px`,
      borderLeftWidth: 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthLeftTablet}px`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusTopTablet}px`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusRightTablet}px`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusLeftTablet}px`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusBottomTablet}px`
    };
  }
  if (isMobile) {
    stylesheet = {
      textAlign: attributes.alignMobile,
      fontSize: attributes.fontSizeMobile,
      zIndex: attributes.zindexMobile,
      lineHeight: (3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + 'px' : attributes.lineHeightMobile) || undefined,
      letterSpacing: attributes.letterSpacingMobile && `${attributes.letterSpacingMobile}px`,
      paddingTop: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}px` : `${attributes.paddingTopMobile}px`,
      paddingRight: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}px` : `${attributes.paddingRightMobile}px`,
      paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}px` : `${attributes.paddingBottomMobile}px`,
      paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${attributes.paddingMobile}px` : `${attributes.paddingLeftMobile}px`,
      marginTop: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}px` : `${attributes.marginTopMobile}px`,
      marginBottom: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}px` : `${attributes.marginBottomMobile}px`,
      marginRight: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}px` : `${attributes.marginRightMobile}px`,
      marginLeft: 'linked' === attributes.marginTypeMobile ? `${attributes.marginMobile}px` : `${attributes.marginLeftMobile}px`,
      borderTopWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthTopMobile}px`,
      borderBottomWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthBottomMobile}px`,
      borderRightWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthRightMobile}px`,
      borderLeftWidth: 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthLeftMobile}px`,
      borderTopRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusTopMobile}px`,
      borderTopLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusRightMobile}px`,
      borderBottomRightRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusLeftMobile}px`,
      borderBottomLeftRadius: 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusBottomMobile}px`
    };
  }
  let customwidth;
  if (attributes.widthType == 'customwidth') {
    if (isDesktop) {
      customwidth = {
        width: attributes.customWidth,
        maxWidh: attributes.customWidth
      };
    }
    if (isTablet) {
      customwidth = {
        width: attributes.customWidthTablet,
        maxWidh: attributes.customWidthTablet
      };
    }
    if (isMobile) {
      customwidth = {
        width: attributes.customWidthMobile,
        maxWidh: attributes.customWidthMobile
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
      boxShadow: `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#000000', attributes.boxShadowColorOpacity)}`
    };
  }
  let transitionHeadingStyle = {};
  if (attributes.transitionHeading) {
    transitionHeadingStyle = {
      transition: `color ${attributes.transitionHeading}s`,
      WebkitTransition: `color ${attributes.transitionHeading}s`,
      MozTransition: `color ${attributes.transitionHeading}s`,
      OTransition: `color ${attributes.transitionHeading}s`
    };
  }
  let transitionBorderStyle = {};
  if (attributes.transitionBorder) {
    transitionBorderStyle = {
      transition: ` border ${attributes.transitionBorder}s`,
      WebkitTransition: ` border ${attributes.transitionBorder}s`,
      MozTransition: ` border ${attributes.transitionBorder}s`,
      OTransition: ` border ${attributes.transitionBorder}s`
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
    ...transitionBorderStyle
  }, x => {
    var _x$includes;
    return x === null || x === void 0 ? void 0 : (_x$includes = x.includes) === null || _x$includes === void 0 ? void 0 : _x$includes.call(x, 'undefined');
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (attributes.fontFamily) {
      _src_helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_12__["default"].loadFontToBrowser(attributes.fontFamily, attributes.fontVariant);
    }
  }, [attributes.fontFamily]);
  const onMouseEnter = e => {
    e.target.style.color = attributes.headingHvrColor;
    e.target.style.borderColor = attributes.borderColorHvr;
    e.target.style.borderStyle = attributes.borderHvrType;
    e.target.style.boxShadow = `${attributes.boxShadowHorizontalHvr}px ${attributes.boxShadowVerticalHvr}px ${attributes.boxShadowBlurHvr}px ${attributes.boxShadowSpreadHvr}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#000000', attributes.boxShadowColorOpacityHvr)}`;
    if (isDesktop) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}px` : `${attributes.borderWidthHvrTop}px`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}px` : `${attributes.borderWidthHvrBottom}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}px` : `${attributes.borderWidthHvrRight}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrType ? `${attributes.borderWidthHvr}px` : `${attributes.borderWidthHvrLeft}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}px` : `${attributes.borderRadiusHvrTop}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}px` : `${attributes.borderRadiusHvrRight}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}px` : `${attributes.borderRadiusHvrLeft}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrType ? `${attributes.borderRadiusHvr}px` : `${attributes.borderRadiusHvrBottom}px`;
    }
    if (isTablet) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}px` : `${attributes.borderWidthHvrTopTablet}px`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}px` : `${attributes.borderWidthHvrBottomTablet}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}px` : `${attributes.borderWidthHvrRightTablet}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeTablet ? `${attributes.borderWidthHvrTablet}px` : `${attributes.borderWidthHvrLeftTablet}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}px` : `${attributes.borderRadiusHvrTopTablet}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}px` : `${attributes.borderRadiusHvrRightTablet}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}px` : `${attributes.borderRadiusHvrLeftTablet}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeTablet ? `${attributes.borderRadiusHvrTablet}px` : `${attributes.borderRadiusHvrBottomTablet}px`;
    }
    if (isMobile) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}px` : `${attributes.borderWidthHvrTopMobile}px`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}px` : `${attributes.borderWidthHvrBottomMobile}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}px` : `${attributes.borderWidthHvrRightMobile}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthHvrTypeMobile ? `${attributes.borderWidthHvrMobile}px` : `${attributes.borderWidthHvrLeftMobile}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}px` : `${attributes.borderRadiusHvrTopMobile}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}px` : `${attributes.borderRadiusHvrRightMobile}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}px` : `${attributes.borderRadiusHvrLeftMobile}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusHvrTypeMobile ? `${attributes.borderRadiusHvrMobile}px` : `${attributes.borderRadiusHvrBottomMobile}px`;
    }
  };
  const onMouseLeave = e => {
    e.target.style.color = attributes.headingColor;
    e.target.style.borderColor = attributes.borderColor;
    e.target.style.borderStyle = attributes.borderType;
    e.target.style.boxShadow = `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_7___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#000000', attributes.boxShadowColorOpacity)}`;
    if (isDesktop) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthTop}px`;
      e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthBottom}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthRight}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthType ? `${attributes.borderWidth}px` : `${attributes.borderWidthLeft}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusTop}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusRight}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusLeft}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusType ? `${attributes.borderRadius}px` : `${attributes.borderRadiusBottom}px`;
    }
    if (isTablet) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthTopTablet}px`, e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthBottomTablet}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthRightTablet}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeTablet ? `${attributes.borderWidthTablet}px` : `${attributes.borderWidthLeftTablet}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusTopTablet}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusRightTablet}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusLeftTablet}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeTablet ? `${attributes.borderRadiusTablet}px` : `${attributes.borderRadiusBottomTablet}px`;
    }
    if (isMobile) {
      e.target.style.borderTopWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthTopMobile}px`, e.target.style.borderBottomWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthBottomMobile}px`;
      e.target.style.borderRightWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthRightMobile}px`;
      e.target.style.borderLeftWidth = 'linked' === attributes.borderWidthTypeMobile ? `${attributes.borderWidthMobile}px` : `${attributes.borderWidthLeftMobile}px`;
      e.target.style.borderTopRightRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusTopMobile}px`;
      e.target.style.borderTopLeftRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusRightMobile}px`;
      e.target.style.borderBottomRightRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusLeftMobile}px`;
      e.target.style.borderBottomLeftRadius = 'linked' === attributes.borderRadiusTypeMobile ? `${attributes.borderRadiusMobile}px` : `${attributes.borderRadiusBottomMobile}px`;
    }
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    id: attributes.id,
    style,
    onMouseEnter,
    onMouseLeave
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_controls_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  const family = attributes.fontFamily || '';
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    id: `thmk-block-${attributes.id}`
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
				   @import url(https://fonts.googleapis.com/css?family=${family.replace(/\s/g, '+')});
				   #thmk-block-${attributes.id} {
						text-align:${attributes.align};
						color:${attributes.headingColor};
						font-size:${attributes.fontSize}px;
						letter-spacing:${attributes.letterSpacing}px;
						line-height:${attributes.lineHeight};
						font-family:${attributes.fontFamily};
						font-style: ${attributes.fontStyle};
						font-weight: ${attributes.fontVariant};
		                text-transform: ${attributes.textTransform};
						padding-top:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingTop}px;
						padding-bottom:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingBottom}px;
						padding-right:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingRight}px;
						padding-left:${'linked' === attributes.paddingType ? attributes.padding : attributes.paddingLeft}px;
						margin-top:${'linked' === attributes.marginType ? attributes.margin : attributes.marginTop}px;
						margin-bottom:${'linked' === attributes.marginType ? attributes.margin : attributes.marginBottom}px;
						margin-right:${'linked' === attributes.marginType ? attributes.margin : attributes.marginRight}px;
						margin-left:${'linked' === attributes.marginType ? attributes.margin : attributes.marginLeft}px;
						
					}
					@media only screen and (max-width: 1024px) { #thmk-block-${attributes.id} {
						text-align:${attributes.alignTablet};
						font-size:${attributes.fontSizeTablet}px;
						letter-spacing:${attributes.letterSpacingTablet}px;
						line-height:${attributes.lineHeightTablet};
						padding-top:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingTopTablet}px;
						padding-bottom:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingBottomTablet}px;
						padding-right:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingRightTablet}px;
						padding-left:${'linked' === attributes.paddingTypeTablet ? attributes.paddingTablet : attributes.paddingLeftTablet}px;
						margin-top:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginTopTablet}px;
						margin-bottom:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginBottomTablet}px;
						margin-right:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginRightTablet}px;
						margin-left:${'linked' === attributes.marginTypeTablet ? attributes.marginTablet : attributes.marginLeftTablet}px;
					}}

					@media only screen and (max-width: 767px) { #thmk-block-${attributes.id} {
						text-align:${attributes.alignMobile};
						font-size:${attributes.fontSizeMobile}px;
						letter-spacing:${attributes.letterSpacingMobile}px;
						line-height:${attributes.lineHeightMobile};
						padding-top:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingTopMobile}px;
						padding-bottom:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingBottomMobile}px;
						padding-right:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingRightMobile}px;
						padding-left:${'linked' === attributes.paddingTypeMobile ? attributes.paddingMobile : attributes.paddingLeftMobile}px;
						margin-top:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginTopMobile}px;
						margin-bottom:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginBottomMobile}px;
						margin-right:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginRightMobile}px;
						margin-left:${'linked' === attributes.marginTypeMobile ? attributes.marginMobile : attributes.marginLeftMobile}px;
					}}
					`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tagName: attributes.tag,
    value: attributes.content
  }, blockProps)));
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
/* harmony import */ var _src_components_ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/ins-setting-header/index.js */ "./src/components/ins-setting-header/index.js");
/* harmony import */ var _src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/responsive-control/index.js */ "./src/components/responsive-control/index.js");
/* harmony import */ var _src_components_google_fonts_control_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/google-fonts-control/index.js */ "./src/components/google-fonts-control/index.js");
/* harmony import */ var _src_components_clear_button_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/components/clear-button/index.js */ "./src/components/clear-button/index.js");
/* harmony import */ var _src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/components/sizing-control/index.js */ "./src/components/sizing-control/index.js");
/* harmony import */ var _src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/components/hover-tab/index.js */ "./src/components/hover-tab/index.js");
/* harmony import */ var _src_components_control_panel_control_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/components/control-panel-control/index.js */ "./src/components/control-panel-control/index.js");

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
        align: value
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
        fontSize: value
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
        lineHeight: value
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
        letterSpacing: value
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
        paddingType: value
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
        marginType: value
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
        borderWidthType: value
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
        borderWidthHvrType: value
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
        borderRadiusType: value
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
        borderRadiusHvrType: value
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
            padding: value
          });
        } else {
          setAttributes({
            [desktopPaddingType[type]]: value
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
            margin: value
          });
        } else {
          setAttributes({
            [desktopMarginType[type]]: value
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
            borderWidth: value
          });
        } else {
          setAttributes({
            [desktopBorderWidthType[type]]: value
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
            borderWidthHvr: value
          });
        } else {
          setAttributes({
            [desktopBorderWidthHvrType[type]]: value
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
            borderRadius: value
          });
        } else {
          setAttributes({
            [desktopBorderRadiusType[type]]: value
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
            borderRadiusHvr: value
          });
        } else {
          setAttributes({
            [desktopBorderRadiusHvrType[type]]: value
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
        customWidth: value
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
        zindex: value
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
  const customTooltipFontsize = value => `${value}px`;
  const customTooltiplineHeight = value => `${value}`;
  const customTooltipletterSpacing = value => `${value}px`;
  const customTooltipCustomWidth = value => `${value}px`;
  const customTooltipZindex = value => `${value}px`;
  const customTooltiptransitionHeading = value => `${value}`;
  const customTooltiptransitionBorder = value => `${value}`;
  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('style');
  const [hover, setHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_ins_setting_header_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    className: "th-adv-h-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    })
  }) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Hover Color', 'themehunk-block'),
    colorValue: attributes.headingHvrColor,
    onColorChange: e => setAttributes({
      headingHvrColor: e
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition Duration', 'themehunk-block'),
    renderTooltipContent: customTooltiptransitionHeading,
    value: attributes.transitionHeading,
    onChange: transitionHeading => setAttributes({
      transitionHeading
    }),
    step: 0.1,
    min: 0,
    max: 3,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: getAlignment(),
    onChange: changeAlignment,
    isCollapsed: false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typographgy', 'themehunk-block'),
    className: "th-adv-h-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_google_fonts_control_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_clear_button_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    values: ['fontFamily', 'fontVariant', 'fontStyle', 'textTransform'],
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipFontsize,
    value: getFontSize() || '',
    onChange: changeFontSize,
    step: 0.1,
    min: 1,
    max: 500,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltiplineHeight,
    value: getlineHeight() || '',
    onChange: changelineHeight,
    step: 0.1,
    min: 0,
    max: 3,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipletterSpacing,
    value: getletterSpacing() || '',
    onChange: changeletterSpacing,
    step: 0.1,
    min: -50,
    max: 100,
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipCustomWidth,
    value: getCustomWidth() || '',
    onChange: changeCustomWidth,
    step: 1,
    min: 1,
    max: 1000,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-index', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    renderTooltipContent: customTooltipZindex,
    value: getZindex() || '',
    onChange: changeZindex,
    step: 1,
    min: -999999,
    max: 999999,
    allowReset: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border & Box Shadow', 'themehunk-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_hover_tab_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_responsive_control_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_sizing_control_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition Duration', 'themehunk-block'),
    renderTooltipContent: customTooltiptransitionBorder,
    value: attributes.transitionBorder,
    onChange: transitionBorder => setAttributes({
      transitionBorder
    }),
    step: 0.1,
    min: 0,
    max: 3,
    allowReset: true
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
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (InsSettings);

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/components/clear-button/editor.scss");

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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/components/google-fonts-control/editor.scss");
/* harmony import */ var _helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/google-fonts.js */ "./src/helpers/google-fonts.js");

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
    _helpers_google_fonts_js__WEBPACK_IMPORTED_MODULE_7__["default"].afterLoading().then(loader => {
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
/* harmony export */   "StarFilled": function() { return /* binding */ StarFilled; },
/* harmony export */   "StarHalf": function() { return /* binding */ StarHalf; },
/* harmony export */   "alignBottom": function() { return /* binding */ alignBottom; },
/* harmony export */   "alignCenter": function() { return /* binding */ alignCenter; },
/* harmony export */   "alignTop": function() { return /* binding */ alignTop; },
/* harmony export */   "authorIcon": function() { return /* binding */ authorIcon; },
/* harmony export */   "barcodeIcon": function() { return /* binding */ barcodeIcon; },
/* harmony export */   "buttonsIcon": function() { return /* binding */ buttonsIcon; },
/* harmony export */   "check": function() { return /* binding */ check; },
/* harmony export */   "checkIcon": function() { return /* binding */ checkIcon; },
/* harmony export */   "close": function() { return /* binding */ close; },
/* harmony export */   "cols112": function() { return /* binding */ cols112; },
/* harmony export */   "cols12": function() { return /* binding */ cols12; },
/* harmony export */   "cols121": function() { return /* binding */ cols121; },
/* harmony export */   "cols131": function() { return /* binding */ cols131; },
/* harmony export */   "cols21": function() { return /* binding */ cols21; },
/* harmony export */   "cols211": function() { return /* binding */ cols211; },
/* harmony export */   "cols2Equal": function() { return /* binding */ cols2Equal; },
/* harmony export */   "cols2Grid": function() { return /* binding */ cols2Grid; },
/* harmony export */   "cols3Equal": function() { return /* binding */ cols3Equal; },
/* harmony export */   "cols3Grid": function() { return /* binding */ cols3Grid; },
/* harmony export */   "cols4Equal": function() { return /* binding */ cols4Equal; },
/* harmony export */   "cols5Equal": function() { return /* binding */ cols5Equal; },
/* harmony export */   "cols6Equal": function() { return /* binding */ cols6Equal; },
/* harmony export */   "colsCollapsed": function() { return /* binding */ colsCollapsed; },
/* harmony export */   "colsFull": function() { return /* binding */ colsFull; },
/* harmony export */   "columnIcon": function() { return /* binding */ columnIcon; },
/* harmony export */   "columnsIcon": function() { return /* binding */ columnsIcon; },
/* harmony export */   "contactIcon": function() { return /* binding */ contactIcon; },
/* harmony export */   "faIcon": function() { return /* binding */ faIcon; },
/* harmony export */   "headingIcon": function() { return /* binding */ headingIcon; },
/* harmony export */   "inputIcon": function() { return /* binding */ inputIcon; },
/* harmony export */   "mapIcon": function() { return /* binding */ mapIcon; },
/* harmony export */   "otterIcon": function() { return /* binding */ otterIcon; },
/* harmony export */   "otterIconColored": function() { return /* binding */ otterIconColored; },
/* harmony export */   "pluginsIcon": function() { return /* binding */ pluginsIcon; },
/* harmony export */   "postsIcon": function() { return /* binding */ postsIcon; },
/* harmony export */   "pricingIcon": function() { return /* binding */ pricingIcon; },
/* harmony export */   "rowsCollapsed": function() { return /* binding */ rowsCollapsed; },
/* harmony export */   "servicesIcon": function() { return /* binding */ servicesIcon; },
/* harmony export */   "sharingIcon": function() { return /* binding */ sharingIcon; },
/* harmony export */   "testimonialsIcon": function() { return /* binding */ testimonialsIcon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const otterIcon = _ref => {
  let {
    className
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 29 32",
    width: "20",
    height: "20",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('otter-icon', className)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M19.831 7.877c0.001-0.003 0.001-0.005 0.001-0.009s-0-0.006-0.001-0.009l0 0c-0.047-0.081-0.092-0.164-0.132-0.247l-0.057-0.115c-0.277-0.498-0.381-0.99-1.033-1.064h-0.045c-0.001 0-0.002 0-0.003 0-0.486 0-0.883 0.382-0.908 0.862l-0 0.002c0.674 0.126 1.252 0.278 1.813 0.468l-0.092-0.027 0.283 0.096 0.147 0.053s0.028 0 0.028-0.011z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M23.982 13.574c-0.008-2.41-0.14-4.778-0.39-7.112l0.026 0.299 0.070-0.019c0.459-0.139 0.787-0.558 0.787-1.053 0-0.479-0.307-0.887-0.735-1.037l-0.008-0.002h-0.026c-0.479-0.164-0.874-0.468-1.149-0.861l-0.005-0.007c-2.7-3.96-8.252-3.781-8.252-3.781s-5.55-0.179-8.25 3.781c-0.28 0.401-0.676 0.704-1.14 0.862l-0.016 0.005c-0.441 0.148-0.754 0.557-0.754 1.040 0 0.009 0 0.017 0 0.026l-0-0.001c-0 0.010-0.001 0.022-0.001 0.034 0 0.493 0.335 0.907 0.789 1.029l0.007 0.002 0.045 0.011c-0.224 2.034-0.356 4.403-0.364 6.801l-0 0.012s-9.493 13.012-1.277 17.515c4.733 2.431 6.881-0.769 6.881-0.769s1.397-1.661-1.784-3.355v-4.609c0.006-0.344 0.282-0.621 0.625-0.628h1.212v-0.59c0-0.275 0.223-0.498 0.498-0.498v0h1.665c0.274 0.001 0.496 0.224 0.496 0.498 0 0 0 0 0 0v0 0.59h2.721v-0.59c0-0.275 0.223-0.498 0.498-0.498v0h1.665c0.271 0.005 0.49 0.226 0.49 0.498 0 0 0 0 0 0v0 0.59h1.209c0 0 0 0 0 0 0.349 0 0.633 0.28 0.639 0.627v4.584c-3.193 1.703-1.784 3.355-1.784 3.355s2.148 3.193 6.879 0.769c8.222-4.503-1.269-17.515-1.269-17.515zM22.586 10.261c-0.097 1.461-0.67 2.772-1.563 3.797l0.007-0.008c-1.703 2.010-4.407 3.249-6.721 4.432v0c-2.325-1.177-5.026-2.416-6.736-4.432-0.883-1.019-1.455-2.329-1.555-3.769l-0.001-0.020c-0.126-2.22 0.583-5.929 3.044-6.74 2.416-0.788 3.947 1.288 4.494 2.227 0.152 0.258 0.429 0.428 0.745 0.428s0.593-0.17 0.743-0.424l0.002-0.004c0.551-0.932 2.080-3.008 4.494-2.22 2.474 0.805 3.174 4.513 3.046 6.734z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M19.463 10.087h-0.028c-0.192 0.026-0.121 0.251-0.047 0.356 0.254 0.349 0.407 0.787 0.407 1.26 0 0.006-0 0.012-0 0.018v-0.001c-0.001 0.469-0.255 0.878-0.633 1.1l-0.006 0.003c-0.739 0.426-1.377-0.145-2.054-0.398-0.72-0.269-1.552-0.434-2.42-0.455l-0.009-0v-1.033c1.020-0.233 1.894-0.76 2.551-1.486l0.004-0.004c0.151-0.163 0.244-0.383 0.244-0.623 0-0.316-0.159-0.595-0.402-0.76l-0.003-0.002c-0.768-0.551-1.728-0.881-2.764-0.881-1.054 0-2.029 0.341-2.819 0.92l0.013-0.009c-0.224 0.166-0.367 0.429-0.367 0.726 0 0.226 0.083 0.433 0.221 0.591l-0.001-0.001c0.665 0.751 1.55 1.295 2.553 1.53l0.033 0.007v1.050c-0.742 0.021-1.448 0.14-2.118 0.343l0.057-0.015c-0.341 0.103-0.631 0.219-0.908 0.358l0.033-0.015c-0.519 0.26-1.037 0.436-1.58 0.121-0.371-0.213-0.617-0.607-0.617-1.058 0-0.002 0-0.004 0-0.007v0c0-0.002 0-0.004 0-0.007 0-0.47 0.153-0.905 0.411-1.257l-0.004 0.006c0.047-0.068 0.089-0.17 0.026-0.241s-0.189 0-0.27 0.030c-0.189 0.099-0.348 0.227-0.479 0.381l-0.002 0.002c-0.245 0.296-0.394 0.679-0.394 1.097 0 0.004 0 0.007 0 0.011v-0.001c0.008 0.706 0.393 1.321 0.964 1.651l0.009 0.005c0.296 0.178 0.654 0.283 1.036 0.283 0.364 0 0.706-0.095 1.001-0.263l-0.010 0.005c0.877-0.461 1.917-0.731 3.019-0.731 0.069 0 0.137 0.001 0.206 0.003l-0.010-0h0.030c1.277 0 2.382 0.266 3.266 0.775 0.27 0.159 0.594 0.253 0.94 0.253 0.001 0 0.002 0 0.003 0h-0c0.355-0.002 0.688-0.098 0.974-0.265l-0.009 0.005c0.606-0.357 1.007-1.007 1.007-1.75 0-0.001 0-0.003 0-0.004v0c0.001-0.026 0.002-0.056 0.002-0.086 0-0.625-0.34-1.171-0.846-1.462l-0.008-0.004c-0.056-0.040-0.125-0.065-0.199-0.070l-0.001-0zM13.101 8.831c-0.238 0.213-0.468 0.581-0.832 0.345-0.061-0.041-0.114-0.086-0.161-0.136l-0-0c-0.063-0.063-0.101-0.15-0.101-0.247 0-0.133 0.074-0.248 0.182-0.308l0.002-0.001c0.594-0.309 1.203-0.543 1.884-0.49-0.324 0.281-0.649 0.56-0.973 0.837z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M15.89 13.578c-0.367 0.483-0.941 0.792-1.588 0.792s-1.221-0.309-1.585-0.787l-0.004-0.005c-0.064-0.103-0.177-0.171-0.306-0.171-0.199 0-0.36 0.161-0.36 0.36 0 0.091 0.034 0.174 0.090 0.238l-0-0c0.499 0.659 1.283 1.080 2.164 1.080s1.665-0.421 2.159-1.073l0.005-0.007c0.043-0.059 0.068-0.132 0.068-0.212 0-0.116-0.055-0.22-0.14-0.286l-0.001-0.001c-0.059-0.045-0.134-0.072-0.215-0.072-0.117 0-0.221 0.056-0.286 0.143l-0.001 0.001z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M18.507 11.707c0 0.194-0.157 0.351-0.351 0.351s-0.351-0.157-0.351-0.351c0-0.194 0.157-0.351 0.351-0.351s0.351 0.157 0.351 0.351z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M17.389 11.049c0 0.194-0.157 0.351-0.351 0.351s-0.351-0.157-0.351-0.351c0-0.194 0.157-0.351 0.351-0.351s0.351 0.157 0.351 0.351z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M10.798 11.707c0 0.194-0.157 0.351-0.351 0.351s-0.351-0.157-0.351-0.351c0-0.194 0.157-0.351 0.351-0.351s0.351 0.157 0.351 0.351z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M11.918 11.049c0 0.194-0.157 0.351-0.351 0.351s-0.351-0.157-0.351-0.351c0-0.194 0.157-0.351 0.351-0.351s0.351 0.157 0.351 0.351z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M8.773 7.877c-0.001-0.003-0.002-0.005-0.002-0.009s0.001-0.006 0.002-0.009l-0 0c0.047-0.081 0.089-0.164 0.132-0.247 0.019-0.038 0.036-0.079 0.057-0.115 0.275-0.498 0.379-0.99 1.033-1.064h0.045c0 0 0.001 0 0.001 0 0.487 0 0.884 0.382 0.91 0.862l0 0.002c-0.678 0.124-1.261 0.277-1.827 0.468l0.092-0.027-0.275 0.096-0.1 0.036-0.045 0.017s-0.023 0-0.023-0.011z"
  }));
};
const otterIconColored = _ref2 => {
  let {
    className
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('otter-icon', className)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.G, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M19.9877 9.42008C19.6369 9.61724 19.3785 10.0999 19.1922 10.38C19.3704 10.3719 19.6396 10.38 19.9061 10.3474C19.5651 12.7604 18.4405 14.9944 16.7053 16.7054C15.6732 17.7477 14.448 18.5791 13.098 19.1529C10.5336 20.2407 7.70811 20.2883 5.31094 19.2576C4.29167 18.8247 3.36554 18.1991 2.58336 17.4152C1.21259 16.0355 0.334714 14.2424 0.0855683 12.3136C0.478525 12.149 0.765424 11.6092 0.961223 11.3101C0.642655 11.3103 0.324535 11.334 0.00942443 11.3808C-0.100712 8.55259 1.00745 5.57482 3.29177 3.29186C6.55508 0.0285557 11.2379 -0.836221 14.8779 0.823987C14.7269 1.02115 14.6059 1.2319 14.4999 1.38827C14.7936 1.37195 15.3157 1.39643 15.6978 1.2523C16.0056 1.43293 16.3009 1.63418 16.5816 1.85465C16.515 1.95935 16.4456 2.05589 16.398 2.13747C16.534 2.13747 16.7135 2.13747 16.9106 2.12115C17.0833 2.26664 17.2533 2.42301 17.4151 2.58481C19.248 4.41906 20.0978 6.89102 19.9877 9.42008Z",
    fill: "#E8D3C9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M4.32515 5.25665C3.92192 6.11059 3.77512 7.06318 3.90255 7.99889C4.02998 8.93461 4.42617 9.81325 5.04307 10.5283C5.78956 11.3645 6.80118 11.907 7.79105 12.4318C8.1473 12.6208 8.51714 12.8153 8.92097 12.8506C9.44718 12.8969 9.95843 12.6671 10.4167 12.406C11.5996 11.7357 12.6615 10.8016 13.3047 9.60365C13.9478 8.40574 14.1314 6.92774 13.6174 5.66864C13.3523 5.04048 12.9456 4.48207 12.429 4.03699C11.486 3.2291 10.2823 2.79004 9.04063 2.80101C8.43429 2.81396 7.83536 2.93698 7.273 3.16406C6.72912 3.36529 6.19611 3.39385 5.69166 3.70794C5.10339 4.08984 4.63083 4.62542 4.32515 5.25665Z",
    fill: "#D6AF99"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M13.1008 19.1488C12.6689 19.3318 12.2256 19.4867 11.7738 19.6125C11.5236 19.6832 11.2707 19.7485 11.0137 19.7933C10.9838 19.7933 10.9579 19.8042 10.928 19.8124C10.9172 19.811 10.9062 19.811 10.8954 19.8124C10.0118 19.9817 9.10938 20.0306 8.21268 19.9578C7.92865 19.9366 7.64591 19.9008 7.36558 19.8504C7.31397 19.8449 7.26269 19.8368 7.21193 19.826H7.19561L7.07732 19.8015C6.83665 19.7525 6.60006 19.6941 6.36483 19.6261C6.00688 19.5234 5.65582 19.398 5.31377 19.2508C5.24487 18.9778 5.20971 18.6975 5.20907 18.4159C5.15469 17.2072 5.10302 16.0024 5.05271 14.7937C5.01716 14.4481 5.04154 14.0989 5.12477 13.7616C5.18474 13.5696 5.28262 13.3916 5.41263 13.238C5.54264 13.0845 5.70213 12.9587 5.88165 12.8679C6.06118 12.7771 6.2571 12.7233 6.4578 12.7096C6.65851 12.6959 6.85992 12.7226 7.05012 12.7881C8.63555 12.5297 10.2726 12.2809 11.8336 12.6521C12.1926 12.7378 12.5692 12.8751 12.7772 13.181C12.9472 13.434 12.9689 13.7521 12.988 14.0567C13.0605 15.3104 13.133 16.5649 13.2055 17.8204C13.2327 18.2759 13.2545 18.7368 13.1008 19.1488Z",
    fill: "#F4816B"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M12.6452 8.15827C12.7187 7.47841 12.0361 6.85431 11.3535 6.93453C11.1316 6.97029 10.9165 7.04 10.7158 7.14121C10.5294 7.21597 10.3327 7.26182 10.1325 7.27718C9.81839 7.34244 9.5179 7.47841 9.2038 7.49745C8.93186 7.52056 8.57698 7.5532 8.31183 7.46346L7.57351 7.21599L7.40218 7.15344C7.2061 7.06715 6.99944 7.00725 6.7876 6.97532C6.01528 6.89782 5.30551 7.71228 5.5489 8.471C5.79229 9.22972 6.72777 9.36841 7.39403 9.18621C7.67413 9.11007 7.93791 8.99313 8.22345 8.92651C8.711 8.83154 9.21264 8.83523 9.69874 8.93739C10.1869 9.02169 10.6669 9.1495 11.1577 9.20933C11.7981 9.29363 12.4916 8.91563 12.6289 8.24801C12.6344 8.22082 12.6452 8.1909 12.6452 8.15827Z",
    fill: "#E8D3C9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M8.21258 15.6802V19.966C7.92855 19.9448 7.64581 19.9089 7.36548 19.8586V15.6802C7.3657 15.5064 7.40363 15.3347 7.47663 15.1769C7.54964 15.0192 7.65599 14.8791 7.78835 14.7665C7.9211 14.8789 8.0278 15.0189 8.10106 15.1766C8.17432 15.3344 8.21237 15.5062 8.21258 15.6802Z",
    fill: "#D87768"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M11.7737 17.3839V19.6152C11.5235 19.6859 11.2706 19.7512 11.0136 19.7961C10.9837 19.7961 10.9579 19.8069 10.928 19.8151V17.3839C10.9282 16.9735 11.0787 16.5774 11.3508 16.2703C11.6236 16.5771 11.7741 16.9734 11.7737 17.3839Z",
    fill: "#F59085"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M7.89865 6.5035C7.82719 6.54284 7.76612 6.59863 7.72049 6.66625C7.67485 6.73387 7.64597 6.81138 7.63623 6.89238C7.6383 6.94844 7.65369 7.00321 7.68111 7.05215C7.70854 7.10109 7.74722 7.1428 7.79396 7.17384C7.88831 7.23528 7.99969 7.26527 8.11213 7.2595C8.30157 7.24621 8.4826 7.17608 8.63154 7.05826C8.78032 6.94126 8.91698 6.80962 9.03945 6.6653C9.0742 6.63585 9.10242 6.59948 9.12232 6.55851C9.14222 6.51754 9.15336 6.47287 9.15503 6.42736C9.12783 6.20164 8.78791 6.24379 8.62746 6.24243C8.36436 6.257 8.11116 6.3477 7.89865 6.5035Z",
    fill: "#E8D3C9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M12.0756 6.35666C12.0763 6.35353 12.0763 6.35027 12.0756 6.34714C12.0498 6.30227 12.0253 6.2574 12.0035 6.21117C11.9926 6.19077 11.9831 6.16902 11.9709 6.14862C11.82 5.87668 11.7629 5.60473 11.4066 5.56666H11.3808C11.2524 5.56576 11.1286 5.61423 11.035 5.70204C10.9413 5.78986 10.885 5.91031 10.8777 6.03848C11.1999 6.09813 11.5179 6.17898 11.8295 6.28051L11.9845 6.33354L12.0389 6.35258L12.0647 6.36209C12.0658 6.36252 12.0669 6.36271 12.0681 6.36266C12.0692 6.36261 12.0703 6.36232 12.0714 6.36181C12.0724 6.36129 12.0733 6.36057 12.074 6.35968C12.0748 6.35879 12.0753 6.35776 12.0756 6.35666Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M14.3489 9.47719C14.3489 9.47719 14.3489 7.40363 14.1504 5.75023C14.1631 5.74517 14.1763 5.74153 14.1898 5.73935C14.3124 5.70316 14.4203 5.62893 14.4979 5.52739C14.5755 5.42585 14.6188 5.30226 14.6215 5.17449C14.6242 5.04673 14.5862 4.92141 14.513 4.81665C14.4398 4.71189 14.3352 4.63313 14.2143 4.59175H14.198C13.942 4.50432 13.7209 4.33703 13.5671 4.11449C12.8791 3.10015 11.8498 2.58346 10.9496 2.31831C10.3317 2.13562 9.69042 2.04401 9.04604 2.04637C8.35768 2.04746 7.67354 2.15384 7.01735 2.36182C6.14986 2.63377 5.18174 3.15182 4.52364 4.11721C4.36993 4.33921 4.14865 4.50564 3.89274 4.59175C3.77192 4.63227 3.6672 4.71031 3.59382 4.8145C3.52045 4.91869 3.48226 5.04358 3.48482 5.17099C3.48245 5.30229 3.52435 5.43057 3.60378 5.53516C3.6832 5.63974 3.79553 5.71454 3.92265 5.74751L3.94712 5.75566C3.88186 6.28187 3.83835 6.84343 3.81115 7.37916C3.74997 8.51724 3.74997 9.48263 3.74997 9.48263C3.74997 9.48263 1.42214 12.6535 1.22362 15.5007C1.12028 16.9216 1.54723 18.2596 3.04564 19.0795C5.63725 20.4106 6.81612 18.658 6.81612 18.658C6.81612 18.658 7.58163 17.747 5.83712 16.8196V14.3042C5.83784 14.213 5.87455 14.1259 5.93924 14.0617C6.00393 13.9975 6.09136 13.9615 6.18249 13.9615H6.84467V13.6379C6.84467 13.5658 6.87332 13.4966 6.92432 13.4456C6.97532 13.3946 7.04449 13.366 7.11661 13.366H8.02762C8.09974 13.366 8.16891 13.3946 8.21991 13.4456C8.27091 13.4966 8.29956 13.5658 8.29956 13.6379V13.9615H9.78981V13.6379C9.78981 13.5658 9.81846 13.4966 9.86946 13.4456C9.92046 13.3946 9.98962 13.366 10.0617 13.366H10.9728C11.0449 13.366 11.114 13.3946 11.165 13.4456C11.216 13.4966 11.2447 13.5658 11.2447 13.6379V13.9615H11.9082C11.9989 13.9619 12.0857 13.9981 12.1496 14.0624C12.2136 14.1266 12.2495 14.2135 12.2495 14.3042V16.8169C10.5077 17.7442 11.2746 18.6552 11.2746 18.6552C11.2746 18.6552 12.4494 20.4079 15.0437 19.0768C19.5512 16.6089 14.3489 9.47719 14.3489 9.47719ZM13.5861 7.66198C13.5354 8.43053 13.2351 9.16149 12.7309 9.7437C11.7954 10.8437 10.3187 11.5236 9.04876 12.1708C7.77607 11.5236 6.29535 10.8437 5.35715 9.7437C4.8555 9.16014 4.5564 8.42977 4.50461 7.66198C4.4339 6.4464 4.82006 4.41363 6.17433 3.97036C7.49733 3.53661 8.33627 4.67469 8.63541 5.1941C8.67753 5.26489 8.73721 5.32361 8.80867 5.36458C8.88013 5.40555 8.96096 5.42739 9.04333 5.42797C9.12588 5.42833 9.20708 5.4069 9.2787 5.36584C9.35032 5.32477 9.40984 5.26553 9.45124 5.1941C9.75717 4.67469 10.5934 3.53525 11.9178 3.97036C13.2707 4.41363 13.6541 6.4464 13.5861 7.66198Z",
    fill: "#87574C"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M11.9763 7.60351C11.946 7.58302 11.9108 7.57083 11.8743 7.56816H11.858C11.7533 7.58176 11.7927 7.70413 11.8335 7.7626C11.9807 7.96822 12.0583 8.21546 12.0551 8.46829C12.0541 8.59201 12.02 8.71319 11.9564 8.81932C11.8928 8.92546 11.802 9.01269 11.6935 9.072C11.2855 9.30451 10.9415 8.9945 10.569 8.85445C10.144 8.70162 9.69741 8.61762 9.24598 8.60562V8.03182C9.78596 7.91128 10.2753 7.62625 10.6465 7.21599C10.695 7.1622 10.7316 7.09864 10.7536 7.02959C10.7756 6.96053 10.7825 6.88757 10.774 6.8156C10.7655 6.74362 10.7418 6.67429 10.7043 6.61226C10.6668 6.55023 10.6165 6.49692 10.5567 6.45591C10.1115 6.14086 9.57875 5.97303 9.03329 5.97596C8.48782 5.97889 7.95695 6.15242 7.51507 6.47223C7.4601 6.51237 7.41409 6.5635 7.37994 6.62238C7.34579 6.68125 7.32427 6.74659 7.31672 6.81423C7.30918 6.88187 7.31578 6.95034 7.33612 7.01529C7.35645 7.08024 7.39007 7.14026 7.43484 7.19152C7.80594 7.6164 8.30264 7.91214 8.85302 8.0359V8.6097C8.47005 8.61985 8.09011 8.68066 7.7231 8.79054C7.55681 8.83782 7.39487 8.89923 7.23904 8.9741C6.9535 9.11007 6.66932 9.21205 6.37291 9.03937C6.26953 8.98066 6.18374 8.89535 6.12444 8.7923C6.06515 8.68925 6.03451 8.57222 6.0357 8.45333C6.03418 8.20663 6.11081 7.96578 6.25461 7.76532C6.28181 7.72725 6.30356 7.67014 6.26821 7.62935C6.23286 7.58856 6.16351 7.62935 6.12 7.64566C6.02013 7.69831 5.93146 7.7699 5.85894 7.85642C5.71284 8.02755 5.63405 8.24602 5.6373 8.47101C5.63957 8.65652 5.69034 8.8382 5.78456 8.99802C5.87878 9.15783 6.01317 9.29022 6.17439 9.38202C6.34253 9.48028 6.5333 9.5332 6.72804 9.53558C6.92277 9.53797 7.11478 9.48974 7.28527 9.39561C7.8313 9.11543 8.43948 8.97836 9.0529 8.99722C9.05781 8.99848 9.06295 8.99848 9.06786 8.99722C9.6917 8.98021 10.3091 9.12695 10.8586 9.42281C11.0173 9.51459 11.1974 9.56292 11.3807 9.56292C11.5641 9.56292 11.7442 9.51459 11.9029 9.42281C12.072 9.32549 12.2124 9.18519 12.3098 9.01612C12.4072 8.84706 12.4582 8.65525 12.4576 8.46013C12.4667 8.28643 12.4262 8.11374 12.341 7.96211C12.2558 7.81047 12.1293 7.68613 11.9763 7.60351ZM8.388 6.88014C8.25203 6.99028 8.13102 7.1956 7.9325 7.06915C7.90018 7.04675 7.87012 7.02124 7.84276 6.993C7.8218 6.97182 7.80603 6.94607 7.79669 6.91778C7.78734 6.88948 7.78467 6.85941 7.78888 6.82991C7.7931 6.80041 7.80408 6.77229 7.82098 6.74774C7.83787 6.7232 7.86022 6.70289 7.88627 6.68843C8.1967 6.4998 8.55521 6.40533 8.91829 6.41648L8.388 6.88014Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M9.915 9.48126C9.81366 9.6161 9.68234 9.72552 9.53143 9.80088C9.38052 9.87624 9.21415 9.91547 9.04547 9.91547C8.87679 9.91547 8.71042 9.87624 8.55951 9.80088C8.4086 9.72552 8.27728 9.6161 8.17593 9.48126C8.14456 9.43925 8.09778 9.41142 8.04589 9.4039C7.994 9.39638 7.94124 9.40978 7.89923 9.44115C7.85722 9.47253 7.82939 9.5193 7.82187 9.5712C7.81435 9.62309 7.82775 9.67584 7.85912 9.71785C7.99751 9.90144 8.17663 10.0504 8.38238 10.1529C8.58814 10.2555 8.81489 10.3089 9.04479 10.3089C9.27469 10.3089 9.50144 10.2555 9.7072 10.1529C9.91295 10.0504 10.0921 9.90144 10.2305 9.71785C10.246 9.69714 10.2573 9.67357 10.2637 9.64849C10.2701 9.62341 10.2716 9.59731 10.2679 9.57168C10.2642 9.54605 10.2556 9.52139 10.2424 9.49911C10.2292 9.47683 10.2117 9.45737 10.191 9.44183C10.1703 9.4263 10.1467 9.41499 10.1217 9.40857C10.0966 9.40214 10.0705 9.40072 10.0448 9.40438C10.0192 9.40804 9.99456 9.41672 9.97228 9.42991C9.95 9.4431 9.93054 9.46055 9.915 9.48126Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M11.1577 8.64913C11.2643 8.64913 11.3508 8.56268 11.3508 8.45605C11.3508 8.34941 11.2643 8.26297 11.1577 8.26297C11.051 8.26297 10.9646 8.34941 10.9646 8.45605C10.9646 8.56268 11.051 8.64913 11.1577 8.64913Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M10.5446 8.28743C10.6513 8.28743 10.7377 8.20099 10.7377 8.09435C10.7377 7.98772 10.6513 7.90128 10.5446 7.90128C10.438 7.90128 10.3516 7.98772 10.3516 8.09435C10.3516 8.20099 10.438 8.28743 10.5446 8.28743Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M6.93307 8.64913C7.0397 8.64913 7.12615 8.56268 7.12615 8.45605C7.12615 8.34941 7.0397 8.26297 6.93307 8.26297C6.82643 8.26297 6.73999 8.34941 6.73999 8.45605C6.73999 8.56268 6.82643 8.64913 6.93307 8.64913Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M7.54635 8.28743C7.65299 8.28743 7.73943 8.20099 7.73943 8.09435C7.73943 7.98772 7.65299 7.90128 7.54635 7.90128C7.43972 7.90128 7.35327 7.98772 7.35327 8.09435C7.35327 8.20099 7.43972 8.28743 7.54635 8.28743Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M6.01525 6.35664C6.01445 6.35352 6.01445 6.35025 6.01525 6.34713C6.04109 6.30226 6.06556 6.25739 6.08868 6.21115C6.09955 6.19076 6.10907 6.169 6.11995 6.14861C6.27088 5.87667 6.32799 5.60472 6.68559 5.56665H6.71007C6.83819 5.56646 6.96151 5.61543 7.05461 5.70347C7.1477 5.7915 7.20348 5.91189 7.21044 6.03983C6.88812 6.09915 6.57014 6.18 6.25864 6.28186L6.10227 6.33489L6.04789 6.35392L6.02341 6.36344C6.02341 6.36344 6.01525 6.36208 6.01525 6.35664Z",
    fill: "#53484A"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M13.3525 15.1282C13.3523 15.3089 13.323 15.4884 13.2655 15.6598C13.2118 15.8229 13.1363 15.9779 13.0411 16.1207C13.0003 16.1903 12.9548 16.2571 12.9051 16.3206C12.8496 16.3777 12.7911 16.4317 12.7297 16.4824L12.7066 16.5042C12.6386 16.5627 12.5625 16.617 12.4904 16.6714L12.4659 16.6905L12.436 16.7081C12.4143 16.7217 12.3966 16.7353 12.3748 16.7462C12.3531 16.7571 12.3341 16.7734 12.315 16.7843L12.2824 16.8033L12.2525 16.8196C12.2497 16.7825 12.2497 16.7453 12.2525 16.7081V15.8162C12.2525 15.4762 12.2525 15.1363 12.2525 14.7937V14.3042C12.2525 14.2135 12.2166 14.1266 12.1526 14.0624C12.0886 13.9981 12.0018 13.9619 11.9112 13.9615H11.2463V13.6379C11.2463 13.5658 11.2176 13.4966 11.1666 13.4456C11.1156 13.3946 11.0465 13.366 10.9743 13.366H10.062C9.98985 13.366 9.92068 13.3946 9.86968 13.4456C9.81868 13.4966 9.79003 13.5658 9.79003 13.6379V13.9615H8.30115V13.6379C8.30115 13.5658 8.27249 13.4966 8.2215 13.4456C8.1705 13.3946 8.10133 13.366 8.0292 13.366H7.1182C7.04607 13.366 6.9769 13.3946 6.9259 13.4456C6.8749 13.4966 6.84625 13.5658 6.84625 13.6379V13.9615H6.18271C6.13754 13.9613 6.09277 13.9701 6.05096 13.9872C6.00916 14.0043 5.97114 14.0295 5.93907 14.0613C5.907 14.0931 5.88151 14.131 5.86405 14.1726C5.8466 14.2143 5.83753 14.259 5.83735 14.3042V16.6714C5.8412 16.7167 5.8412 16.7622 5.83735 16.8074C5.62372 16.6941 5.42806 16.5498 5.25675 16.3791C5.17926 16.3062 5.11161 16.2234 5.05551 16.133C5.16311 15.994 5.26298 15.8492 5.35465 15.6992C5.22956 15.7074 5.03648 15.6992 4.8502 15.7264C4.77619 15.5342 4.73794 15.3301 4.73734 15.1241C4.7369 15.0596 4.74053 14.9951 4.74822 14.931C4.86978 14.7846 4.97936 14.6286 5.07591 14.4646H4.86923C5.34105 13.3252 7.03389 12.4699 9.04627 12.4699C10.0345 12.4547 11.0113 12.6826 11.8908 13.1335C11.8201 13.2327 11.7548 13.3333 11.7099 13.4054C11.8991 13.4057 12.0881 13.3929 12.2756 13.3673C12.9446 13.8419 13.3525 14.4551 13.3525 15.1282Z",
    fill: "#775049"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M4.56173 9.71378C3.03477 10.9334 1.76752 13.589 1.22363 15.5007C1.42215 12.6535 3.74182 9.47719 3.74182 9.47719C3.74182 9.47719 3.74182 8.5118 3.80301 7.37372C3.84176 7.88946 3.96677 8.39504 4.17285 8.8694C4.05771 9.01407 3.95232 9.16624 3.85739 9.32491C3.98113 9.31675 4.17829 9.3249 4.36185 9.29771C4.42983 9.43912 4.49646 9.57917 4.56173 9.71378Z",
    fill: "#775049"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M9.04627 2.03956C8.35791 2.04065 7.67377 2.14703 7.01758 2.35501C7.22969 2.45427 7.42549 2.55897 7.60905 2.66639C7.51251 2.79284 7.43229 2.93833 7.36566 3.03079C7.60034 3.03533 7.83478 3.01344 8.06456 2.96552C8.1611 3.03623 8.24812 3.10965 8.3365 3.18172C8.29163 3.2497 8.2522 3.31769 8.21684 3.368C8.29707 3.368 8.40448 3.368 8.52006 3.35712C8.61198 3.45013 8.69654 3.55014 8.77297 3.65626C8.79314 3.68406 8.81962 3.70669 8.85022 3.7223C8.88083 3.73791 8.91469 3.74604 8.94905 3.74604C8.9834 3.74604 9.01727 3.73791 9.04787 3.7223C9.07848 3.70669 9.10496 3.68406 9.12513 3.65626C9.46914 3.16404 10.1014 2.70446 10.9539 2.31694C10.335 2.13201 9.69228 2.03857 9.04627 2.03956Z",
    fill: "#775049"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M16.107 12.6372C16.035 12.4672 15.9615 12.2972 15.884 12.1354C15.6814 11.6935 15.4652 11.2856 15.2613 10.928C15.1688 10.7635 15.0804 10.6126 14.9893 10.4725C14.6209 9.85655 14.3421 9.47719 14.3421 9.47719C14.3421 9.47719 14.3421 8.5118 14.2809 7.37372C14.2211 8.31192 13.8404 9.04888 13.5222 9.71378C13.6754 9.83888 13.8268 9.97485 13.9764 10.1217C14.1123 10.2577 14.2483 10.4072 14.3748 10.5636C14.4346 10.6316 14.4876 10.6996 14.5447 10.7744C14.4455 10.9035 14.3639 11.0463 14.2973 11.1401C14.4237 11.132 14.6127 11.1401 14.7976 11.117C15.0714 11.5 15.3211 11.8997 15.5455 12.3136C15.412 12.4654 15.2936 12.6297 15.1919 12.8044C15.3894 12.805 15.5866 12.7913 15.7821 12.7636C16.2263 13.6403 16.5873 14.5566 16.8603 15.5007C16.7978 14.538 16.4878 13.5373 16.107 12.6372Z",
    fill: "#775049"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Defs, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("clipPath", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    width: "20",
    height: "19.9986",
    fill: "white"
  }))));
};
const authorIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M17.348 20.657v-0.135c1.029-0.471 1.758-1.446 1.916-2.563 0.434-0.157 0.739-0.576 0.739-1.051 0-0.408-0.221-0.774-0.562-0.969 0.036-0.111 0.065-0.223 0.087-0.335 0.182-0.901-0.025-1.822-0.583-2.592-0.548-0.758-1.373-1.281-2.321-1.473-0.255-0.051-0.515-0.077-0.773-0.077-0.813 0-1.607 0.262-2.234 0.739-0.646 0.49-1.088 1.187-1.244 1.962-0.118 0.587-0.070 1.193 0.139 1.762-0.355 0.191-0.59 0.566-0.59 0.985 0 0.481 0.31 0.901 0.751 1.055 0.163 1.144 0.916 2.128 1.978 2.587v0.106c-2.207 0.5-3.729 2.151-3.729 4.079v0.515h10.153v-0.515c0-1.929-1.522-3.58-3.729-4.080zM15.853 12.492c0.189 0 0.381 0.019 0.569 0.057 0.693 0.14 1.293 0.519 1.689 1.066 0.369 0.511 0.518 1.111 0.423 1.701-0.507-0.237-1.173-0.487-1.874-0.583-1.318-0.18-1.339-0.241-1.417-0.469l-0.252-0.728-0.579 0.512c-0.062 0.054-0.528 0.464-1.066 0.91-0.015-0.198-0.002-0.396 0.037-0.593 0.219-1.086 1.257-1.873 2.469-1.873zM13.67 16.025c0.361-0.292 0.718-0.594 0.977-0.816 0.358 0.323 0.916 0.414 1.874 0.545 0.65 0.089 1.287 0.349 1.748 0.578v1.161c0 1.268-1.031 2.299-2.299 2.299s-2.299-1.031-2.299-2.299v-1.468zM15.682 20.81c0.213 0.019 0.425 0.017 0.635-0.006v0.318l-0.318 0.177-0.317-0.176v-0.313zM12.006 24.22c0.237-1.154 1.25-2.113 2.646-2.501v0.010l1.346 0.748 1.35-0.748v-0.010c1.396 0.388 2.409 1.348 2.646 2.502l-7.987-0zM21.076 27.499h-10.153c-0.307 0-0.556-0.249-0.556-0.556s0.249-0.556 0.556-0.556h10.153c0.307 0 0.556 0.249 0.556 0.556s-0.249 0.556-0.556 0.556zM28.112 3.393h-9.422v-1.689c0-0.832-0.677-1.509-1.509-1.509h-2.363c-0.832 0-1.509 0.677-1.509 1.509v1.689h-9.422c-0.832 0-1.509 0.677-1.509 1.509v25.395c0 0.832 0.677 1.509 1.509 1.509h24.225c0.832 0 1.509-0.677 1.509-1.509v-25.395c-0-0.832-0.677-1.509-1.509-1.509zM14.421 1.703c0-0.219 0.178-0.397 0.397-0.397h2.363c0.219 0 0.397 0.178 0.397 0.397v5.083c0 0.219-0.178 0.397-0.397 0.397h-2.363c-0.219 0-0.397-0.178-0.397-0.397v-5.083zM28.509 30.297c0 0.219-0.178 0.397-0.397 0.397h-24.225c-0.219 0-0.397-0.178-0.397-0.397v-25.395c0-0.219 0.178-0.397 0.397-0.397h9.422v2.282c0 0.832 0.677 1.509 1.509 1.509h2.363c0.832 0 1.509-0.677 1.509-1.509v-2.282h9.422c0.219 0 0.397 0.178 0.397 0.397v25.395z"
  }));
};
const buttonsIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M30.457 11.777h-28.914c-0.829 0-1.503 0.674-1.503 1.503v5.606c0 0.829 0.674 1.503 1.503 1.503h28.914c0.829 0 1.503-0.674 1.503-1.503v-5.606c-0-0.829-0.674-1.503-1.503-1.503zM30.84 18.886c0 0.211-0.172 0.383-0.383 0.383h-28.914c-0.211 0-0.383-0.172-0.383-0.383v-5.606c0-0.211 0.172-0.383 0.383-0.383h28.914c0.211 0 0.383 0.172 0.383 0.383v5.606zM4.67 15.133c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95 0.95-0.425 0.95-0.95c0-0.525-0.425-0.95-0.95-0.95zM7.947 15.133c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM11.224 15.133c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM27.871 15.523h-11.386c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h11.386c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM30.457 23.388h-28.914c-0.829 0-1.503 0.674-1.503 1.503v5.606c0 0.829 0.674 1.503 1.503 1.503h28.914c0.829 0 1.503-0.674 1.503-1.503v-5.606c-0-0.829-0.674-1.503-1.503-1.503zM30.84 30.497c0 0.211-0.172 0.383-0.383 0.383h-28.914c-0.211 0-0.383-0.172-0.383-0.383v-5.606c0-0.211 0.172-0.383 0.383-0.383h28.914c0.211 0 0.383 0.172 0.383 0.383v5.606zM4.67 26.744c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95 0.95-0.425 0.95-0.95c0-0.525-0.425-0.95-0.95-0.95zM7.947 26.744c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM11.224 26.744c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM27.871 27.134h-11.386c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h11.386c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM30.457 0h-28.914c-0.829 0-1.503 0.674-1.503 1.503v5.606c0 0.829 0.674 1.503 1.503 1.503h28.914c0.829 0 1.503-0.674 1.503-1.503v-5.606c0-0.829-0.674-1.503-1.503-1.503zM30.84 7.109c0 0.211-0.172 0.383-0.383 0.383h-28.914c-0.211 0-0.383-0.172-0.383-0.383v-5.606c0-0.211 0.172-0.383 0.383-0.383h28.914c0.211 0 0.383 0.172 0.383 0.383v5.606zM5.62 4.306c0 0.525-0.425 0.95-0.95 0.95s-0.95-0.425-0.95-0.95c0-0.525 0.425-0.95 0.95-0.95s0.95 0.425 0.95 0.95zM7.947 3.356c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM11.224 3.356c-0.525 0-0.95 0.425-0.95 0.95s0.425 0.95 0.95 0.95c0.525 0 0.95-0.425 0.95-0.95s-0.425-0.95-0.95-0.95zM27.871 3.746h-11.386c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h11.386c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56z"
  }));
};
const contactIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 14 9 L 14 15 L 23 15 L 23 9 Z M 9 11 L 9 13 L 12 13 L 12 11 Z M 16 11 L 21 11 L 21 13 L 16 13 Z M 14 17 L 14 23 L 23 23 L 23 17 Z M 9 19 L 9 21 L 12 21 L 12 19 Z M 16 19 L 21 19 L 21 21 L 16 21 Z"
  }));
};
const inputIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M 1 9 L 1 10 L 1 23 L 31 23 L 31 9 L 1 9 z M 3 11 L 29 11 L 29 21 L 3 21 L 3 11 z M 5 17 L 5 19 L 7 19 L 7 17 L 5 17 z M 9 17 L 9 19 L 11 19 L 11 17 L 9 17 z M 13 17 L 13 19 L 15 19 L 15 17 L 13 17 z"
  }));
};
const columnsIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M30.584 0.099h-29.068c-0.781 0-1.417 0.635-1.417 1.416v29.068c0 0.781 0.635 1.416 1.417 1.416h29.068c0.781 0 1.416-0.635 1.416-1.416v-29.068c0-0.781-0.635-1.416-1.416-1.416zM1.515 1.219h29.068c0.163 0 0.296 0.133 0.296 0.296v3.476h-29.661v-3.476c0-0.163 0.133-0.296 0.296-0.296zM30.584 30.88h-29.068c-0.163 0-0.296-0.133-0.296-0.296v-24.472h29.661v24.472c0 0.163-0.133 0.296-0.296 0.296zM26.999 20.461h-21.062c-0.838 0-1.52 0.682-1.52 1.52v5.601c0 0.838 0.682 1.52 1.52 1.52h21.062c0.838 0 1.52-0.682 1.52-1.52v-5.601c0-0.838-0.682-1.52-1.52-1.52zM27.399 27.582c0 0.221-0.18 0.4-0.4 0.4h-21.062c-0.221 0-0.4-0.18-0.4-0.4v-5.601c0-0.221 0.179-0.4 0.4-0.4h21.062c0.221 0 0.4 0.179 0.4 0.4v5.601zM5.937 16.247h5.432c0.838 0 1.52-0.682 1.52-1.52v-5.432c0-0.838-0.682-1.52-1.52-1.52h-5.432c-0.838 0-1.52 0.682-1.52 1.52v5.432c0 0.838 0.682 1.52 1.52 1.52zM5.537 9.294c0-0.221 0.179-0.4 0.4-0.4h5.432c0.221 0 0.4 0.179 0.4 0.4v5.432c0 0.221-0.18 0.4-0.4 0.4h-5.432c-0.221 0-0.4-0.18-0.4-0.4v-5.432zM27.959 17.714h-22.982c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h22.982c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM27.959 14.793h-12.696c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h12.696c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM27.959 11.433h-12.696c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h12.696c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM27.959 8.072h-12.696c-0.309 0-0.56 0.251-0.56 0.56s0.251 0.56 0.56 0.56h12.696c0.309 0 0.56-0.251 0.56-0.56s-0.251-0.56-0.56-0.56zM4.543 3.051c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9zM7.384 3.051c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9zM10.224 3.051c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9z"
  }));
};
const columnIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M31.276 3.351h-14.587l-3.23-3.028c-0.103-0.097-0.239-0.15-0.38-0.15h-12.354c-0.307 0-0.556 0.249-0.556 0.556v30.697c0 0.307 0.249 0.556 0.556 0.556h30.551c0.307 0 0.556-0.249 0.556-0.556v-27.518c0-0.307-0.249-0.556-0.556-0.556zM1.281 1.286h11.578l3.23 3.028c0.103 0.097 0.239 0.15 0.38 0.15h14.25v3.013h-29.439v-6.191zM30.719 30.87h-29.439v-22.281h29.439v22.281z"
  }));
};
const headingIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M30.958 13.988h-0.64c-0.572-5.298-4.029-9.744-8.764-11.73h5.439v0.555c0 0.309 0.25 0.559 0.559 0.559h2.23c0.309 0 0.559-0.25 0.559-0.559v-2.229c0-0.309-0.25-0.559-0.559-0.559h-2.23c-0.309 0-0.559 0.25-0.559 0.559v0.555h-9.319v-0.555c0-0.309-0.25-0.559-0.559-0.559h-2.23c-0.309 0-0.559 0.25-0.559 0.559v0.555h-9.319v-0.555c0-0.309-0.25-0.559-0.559-0.559h-2.229c-0.309 0-0.559 0.25-0.559 0.559v2.229c0 0.309 0.25 0.559 0.559 0.559h2.229c0.309 0 0.559-0.25 0.559-0.559v-0.555h5.439c-4.735 1.987-8.191 6.432-8.764 11.73h-0.64c-0.309 0-0.559 0.25-0.559 0.559v2.229c0 0.309 0.25 0.559 0.559 0.559h2.23c0.309 0 0.559-0.25 0.559-0.559v-2.229c0-0.309-0.25-0.559-0.559-0.559h-0.464c0.709-6.044 5.49-10.86 11.518-11.621v0.446c0 0.309 0.25 0.559 0.559 0.559h2.23c0.309 0 0.559-0.25 0.559-0.559v-0.446c6.028 0.761 10.809 5.578 11.518 11.621h-0.464c-0.309 0-0.559 0.25-0.559 0.559v2.23c0 0.309 0.25 0.559 0.559 0.559h2.23c0.309 0 0.559-0.25 0.559-0.559v-2.229c0-0.309-0.25-0.559-0.559-0.559zM29.223 2.253h-1.111v-1.111h1.111v1.111zM2.777 1.142h1.111v1.111h-1.111v-1.111zM2.712 15.608v0.609h-1.111v-0.973c0.001-0.046 0.002-0.092 0.003-0.138h1.108v0.501zM16 1.142c0.186 0 0.371 0.005 0.555 0.012v1.099h-1.111v-1.099c0.184-0.007 0.37-0.012 0.556-0.012zM30.399 15.25v0.967h-1.111v-1.111h1.107c0.002 0.048 0.003 0.096 0.004 0.144zM16.512 4.461c-0.089-0.204-0.29-0.336-0.513-0.336s-0.424 0.132-0.513 0.336l-7.287 16.694c-0.058 0.134-0.062 0.285-0.011 0.421l0.009 0.023c0.059 0.157 0.186 0.279 0.345 0.333 1.743 0.585 2.914 2.213 2.914 4.052 0 0.766-0.206 1.518-0.595 2.175-0.012 0.020-0.022 0.041-0.032 0.063-0.063 0.091-0.101 0.201-0.101 0.32v2.832c0 0.307 0.248 0.557 0.555 0.559l9.42 0.068c0.001 0 0.003 0 0.004 0 0.307 0 0.557-0.248 0.559-0.555 0.002-0.309-0.246-0.561-0.555-0.563l-8.865-0.064v-1.405h8.654c0.234 0 0.443-0.145 0.524-0.364l0.153-0.41c0.059-0.158 0.043-0.335-0.043-0.48-0.389-0.657-0.595-1.409-0.595-2.174 0-1.838 1.171-3.467 2.914-4.052 0.16-0.054 0.287-0.176 0.346-0.334l0.009-0.023c0.051-0.136 0.047-0.287-0.011-0.42l-7.287-16.694zM16 20.028c0.619 0 1.122 0.503 1.122 1.122s-0.504 1.122-1.122 1.122c-0.619 0-1.122-0.503-1.122-1.122s0.503-1.122 1.122-1.122zM19.424 25.983c0 0.802 0.179 1.591 0.52 2.31h-7.887c0.341-0.719 0.52-1.509 0.52-2.31 0-2.121-1.235-4.020-3.127-4.894l5.991-13.726v11.616c-0.966 0.249-1.682 1.128-1.682 2.17 0 1.236 1.005 2.241 2.241 2.241s2.241-1.005 2.241-2.241c0-1.043-0.716-1.921-1.682-2.17v-11.616l5.991 13.726c-1.892 0.874-3.127 2.773-3.127 4.894z"
  }));
};
const faIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M30.424 0.171h-28.847c-0.775 0-1.406 0.631-1.406 1.406v28.848c0 0.775 0.631 1.406 1.406 1.406h28.847c0.775 0 1.406-0.631 1.406-1.406v-28.848c0-0.775-0.631-1.406-1.406-1.406zM1.576 1.282h28.847c0.162 0 0.294 0.132 0.294 0.294v3.45h-29.435v-3.45c0-0.162 0.132-0.294 0.294-0.294zM30.424 30.718h-28.847c-0.162 0-0.294-0.132-0.294-0.294v-24.286h29.435v24.286c0 0.162-0.132 0.294-0.294 0.294zM3.688 3.994c0.493 0 0.893-0.4 0.893-0.893s-0.4-0.893-0.893-0.893-0.893 0.4-0.893 0.893c0 0.493 0.4 0.893 0.893 0.893zM6.507 3.994c0.493 0 0.893-0.4 0.893-0.893s-0.4-0.893-0.893-0.893-0.893 0.4-0.893 0.893c0 0.493 0.4 0.893 0.893 0.893zM9.326 3.994c0.493 0 0.893-0.4 0.893-0.893s-0.4-0.893-0.893-0.893-0.893 0.4-0.893 0.893c0 0.493 0.4 0.893 0.893 0.893zM20.662 19.394l3.855-3.758c0.152-0.148 0.206-0.369 0.141-0.57s-0.239-0.348-0.449-0.378l-5.328-0.774-2.383-4.828c-0.094-0.19-0.287-0.31-0.498-0.31s-0.405 0.12-0.498 0.31l-2.383 4.828-5.328 0.774c-0.209 0.030-0.383 0.177-0.449 0.378s-0.011 0.422 0.141 0.57l3.855 3.758-0.91 5.307c-0.036 0.209 0.050 0.419 0.221 0.544s0.398 0.141 0.585 0.042l4.766-2.506 4.766 2.506c0.081 0.043 0.17 0.064 0.259 0.064 0.115 0 0.23-0.036 0.327-0.106 0.171-0.124 0.257-0.335 0.221-0.544l-0.91-5.307zM16.259 21.661c-0.162-0.085-0.355-0.085-0.517 0l-4.027 2.117 0.769-4.485c0.031-0.18-0.029-0.364-0.16-0.492l-3.258-3.176 4.503-0.654c0.181-0.026 0.338-0.14 0.418-0.304l2.014-4.080 2.014 4.080c0.081 0.164 0.238 0.278 0.419 0.304l4.503 0.654-3.258 3.176c-0.131 0.128-0.191 0.312-0.16 0.492l0.769 4.485-4.027-2.117zM16 25.179c-0.307 0-0.556 0.249-0.556 0.556v1.887c0 0.307 0.249 0.556 0.556 0.556s0.556-0.249 0.556-0.556v-1.887c0-0.307-0.249-0.556-0.556-0.556zM25.319 20.446l-1.794-0.583c-0.293-0.095-0.606 0.065-0.7 0.357s0.065 0.606 0.357 0.7l1.794 0.583c0.057 0.019 0.115 0.027 0.172 0.027 0.234 0 0.452-0.149 0.529-0.384 0.095-0.292-0.065-0.606-0.357-0.7zM20.218 12.197c0.099 0.072 0.213 0.106 0.326 0.106 0.172 0 0.341-0.079 0.45-0.229l1.109-1.526c0.18-0.248 0.125-0.596-0.123-0.776s-0.596-0.125-0.776 0.123l-1.109 1.526c-0.18 0.248-0.125 0.596 0.123 0.776zM11.006 12.075c0.109 0.15 0.278 0.229 0.45 0.229 0.113 0 0.228-0.034 0.326-0.106 0.248-0.18 0.303-0.528 0.123-0.776l-1.109-1.526c-0.18-0.248-0.528-0.303-0.776-0.123s-0.303 0.528-0.123 0.776l1.109 1.526zM8.475 19.863l-1.794 0.583c-0.292 0.095-0.452 0.408-0.357 0.7 0.076 0.235 0.294 0.384 0.529 0.384 0.057 0 0.115-0.009 0.172-0.027l1.794-0.583c0.292-0.095 0.452-0.408 0.357-0.7s-0.408-0.452-0.7-0.357z"
  }));
};
const sharingIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M6.348 13.197c-0.308 0-0.557 0.249-0.557 0.557s0.249 0.557 0.557 0.557c0.495 0 1.655 0.598 1.655 1.759 0 0.308 0.249 0.557 0.557 0.557s0.557-0.249 0.557-0.557c0-1.886-1.803-2.873-2.769-2.873zM25.842 3.161c0.495 0 1.655 0.598 1.655 1.759 0 0.308 0.249 0.557 0.557 0.557s0.557-0.249 0.557-0.557c0-1.886-1.802-2.873-2.769-2.873-0.308 0-0.557 0.249-0.557 0.557s0.249 0.557 0.557 0.557zM25.742 22.433c-0.826 0-1.641 0.22-2.359 0.636-0.567 0.328-1.040 0.758-1.41 1.252l-11.344-6.569c0.069-0.174 0.13-0.353 0.179-0.537 0.276-1.036 0.194-2.11-0.226-3.079l11.319-6.555c0.878 1.235 2.316 1.986 3.848 1.986 0.825 0 1.641-0.22 2.359-0.636 1.090-0.631 1.869-1.649 2.194-2.866s0.155-2.488-0.476-3.578c-0.841-1.452-2.406-2.353-4.085-2.353-0.826 0-1.641 0.22-2.359 0.636-2.051 1.188-2.872 3.694-2.015 5.833l-11.344 6.569c-0.884-1.176-2.285-1.888-3.776-1.888-0.825 0-1.641 0.22-2.359 0.636-2.25 1.303-3.021 4.194-1.718 6.444 0.841 1.452 2.406 2.353 4.085 2.353 0.826 0 1.641-0.22 2.359-0.636 0.595-0.345 1.097-0.805 1.483-1.35l11.319 6.554c-0.567 1.323-0.526 2.888 0.249 4.227 0.841 1.452 2.406 2.353 4.085 2.353 0.825 0 1.641-0.22 2.359-0.636 1.090-0.631 1.869-1.649 2.194-2.866s0.155-2.488-0.476-3.578c-0.841-1.452-2.406-2.353-4.085-2.353zM23.941 1.734c0.549-0.318 1.171-0.486 1.801-0.486 1.283 0 2.479 0.689 3.121 1.798 0.482 0.833 0.611 1.803 0.363 2.733s-0.843 1.707-1.675 2.189c-0.549 0.318-1.171 0.486-1.801 0.486-1.283 0-2.479-0.689-3.121-1.798-0.995-1.719-0.407-3.927 1.312-4.922zM8.056 19.117c-0.549 0.318-1.171 0.486-1.801 0.486-1.283 0-2.479-0.689-3.121-1.797-0.995-1.719-0.407-3.927 1.312-4.922 0.549-0.318 1.171-0.486 1.801-0.486 1.283 0 2.479 0.689 3.121 1.798 0.482 0.833 0.611 1.803 0.363 2.733s-0.843 1.707-1.675 2.189zM29.226 28.077c-0.248 0.93-0.843 1.707-1.675 2.189-0.549 0.318-1.171 0.486-1.801 0.486-1.283 0-2.479-0.689-3.121-1.797-0.995-1.719-0.407-3.927 1.312-4.922 0.549-0.318 1.171-0.486 1.801-0.486 1.283 0 2.479 0.689 3.121 1.798 0.482 0.832 0.611 1.803 0.363 2.733zM25.842 24.346c-0.308 0-0.557 0.249-0.557 0.557s0.249 0.557 0.557 0.557c0.495 0 1.655 0.598 1.655 1.759 0 0.308 0.249 0.557 0.557 0.557s0.557-0.249 0.557-0.557c0-1.886-1.802-2.873-2.769-2.873z"
  }));
};
const mapIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M16 27.667l7.849-7.849c0.146-0.139 0.464-0.469 0.478-0.483l0.006-0.007c1.972-2.116 3.059-4.874 3.059-7.766 0-6.282-5.11-11.392-11.392-11.392s-11.392 5.11-11.392 11.392c0 2.893 1.086 5.651 3.058 7.766l8.334 8.339zM16 1.265c5.677 0 10.297 4.619 10.297 10.297 0 2.613-0.981 5.104-2.761 7.016-0.092 0.096-0.343 0.353-0.446 0.451l-7.089 7.089-7.539-7.543c-1.779-1.911-2.758-4.401-2.758-7.012 0-5.678 4.619-10.297 10.297-10.297zM17.755 4.005c1.966 0 5.792 2.149 5.792 6.090 0 0.303 0.245 0.548 0.548 0.548s0.548-0.245 0.548-0.548c0-2.051-0.906-3.953-2.552-5.354-1.306-1.112-3.008-1.831-4.335-1.831-0.302 0-0.548 0.245-0.548 0.548s0.245 0.548 0.548 0.548zM22.875 24.197c-0.427-0.174-0.886-0.33-1.371-0.467l-0.897 0.897c2.645 0.631 4.275 1.756 4.275 2.802 0 1.564-3.648 3.306-8.882 3.306s-8.882-1.742-8.882-3.306c0-1.045 1.631-2.171 4.275-2.802l-0.897-0.897c-0.485 0.137-0.944 0.293-1.371 0.467-2.001 0.818-3.102 1.966-3.102 3.232s1.102 2.415 3.102 3.232c1.845 0.754 4.287 1.169 6.875 1.169s5.030-0.415 6.875-1.169c2.001-0.818 3.102-1.966 3.102-3.232s-1.102-2.415-3.102-3.232zM16.032 16.804c-3.043 0-5.519-2.476-5.519-5.519s2.476-5.519 5.519-5.519c3.043 0 5.519 2.476 5.519 5.519s-2.476 5.519-5.519 5.519zM16.032 6.862c-2.439 0-4.423 1.984-4.423 4.423s1.984 4.423 4.423 4.423c2.439 0 4.423-1.984 4.423-4.423s-1.984-4.423-4.423-4.423z"
  }));
};
const postsIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M4.285 5.775c0.004 0 0.009 0.001 0.013 0.001h8.279c0.307 0 0.556-0.249 0.556-0.556s-0.249-0.556-0.556-0.556h-8.279c-0.307 0-0.556 0.249-0.556 0.556 0 0.302 0.242 0.548 0.542 0.555zM3.743 8.005c0 0.307 0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556s-0.249-0.556-0.556-0.556h-13.679c-0.307 0-0.556 0.249-0.556 0.556zM17.977 10.236h-13.679c-0.145 0-0.276 0.056-0.375 0.147-0.11 0.102-0.18 0.247-0.18 0.409 0 0.307 0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556 0-0.162-0.070-0.307-0.18-0.409-0.099-0.091-0.23-0.147-0.375-0.147zM17.977 13.022h-13.679c-0.307 0-0.556 0.249-0.556 0.556s0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556s-0.249-0.556-0.556-0.556zM17.977 15.807h-13.679c-0.145 0-0.276 0.056-0.375 0.147-0.11 0.102-0.18 0.247-0.18 0.409 0 0.307 0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556 0-0.162-0.070-0.307-0.18-0.409-0.099-0.091-0.23-0.147-0.375-0.147zM17.977 18.593h-13.679c-0.307 0-0.556 0.249-0.556 0.555s0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556s-0.249-0.555-0.556-0.555zM17.977 21.379h-13.679c-0.307 0-0.556 0.249-0.556 0.556s0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556s-0.249-0.556-0.556-0.556zM17.977 24.165h-13.679c-0.145 0-0.276 0.056-0.375 0.147-0.11 0.102-0.18 0.247-0.18 0.409 0 0.307 0.249 0.556 0.556 0.556h13.679c0.307 0 0.556-0.249 0.556-0.556 0-0.162-0.070-0.307-0.18-0.409-0.099-0.091-0.23-0.147-0.375-0.147zM21.93 4.466l-4.277-3.87c-0.094-0.085-0.212-0.132-0.334-0.139h-15.831c-0.812 0-1.473 0.664-1.473 1.481v28.153c0 0.817 0.661 1.481 1.473 1.481h19.174c0.812 0 1.473-0.664 1.473-1.481v-25.222c-0.008-0.163-0.086-0.308-0.205-0.403zM17.833 2.238l2.331 2.109h-2.331v-2.109zM21.043 30.091c0 0.215-0.171 0.39-0.381 0.39h-19.174c-0.21 0-0.382-0.175-0.382-0.39v-28.153c0-0.215 0.171-0.39 0.382-0.39h15.251v3.348c0 0.303 0.245 0.549 0.547 0.549h3.758v24.647zM31.975 3.213c-0.125-1.57-1.442-2.809-3.044-2.809-0 0-0 0-0 0-0.816 0-1.583 0.318-2.16 0.895-0.519 0.519-0.827 1.191-0.884 1.915h-0.010v0.242c0 0.001-0 0.002-0 0.003s0 0.001 0 0.001l-0 24.342h0.003c0.010 0.096 0.045 0.191 0.108 0.273l2.509 3.305c0.103 0.136 0.264 0.216 0.435 0.216s0.331-0.080 0.435-0.216l2.508-3.305c0.063-0.083 0.098-0.177 0.108-0.274h0.003v-24.589h-0.011zM27.543 2.070c0.371-0.371 0.864-0.575 1.388-0.575h0c0.893 0 1.649 0.6 1.886 1.417h-3.772c0.091-0.315 0.26-0.604 0.498-0.842zM28.362 26.711l-1.394 0 0-22.406h3.926v22.406h-1.442l0-18.071-1.090 0 0 18.071zM28.931 30.148l-1.781-2.346 3.562-0-1.781 2.346z"
  }));
};
const pluginsIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M31.908 1.543c0-0.815-0.677-1.478-1.51-1.478h-28.731c-0.815 0-1.478 0.677-1.478 1.51v14.441c0 0.022 0.002 0.044 0.004 0.065-0.003 0.021-0.004 0.043-0.004 0.065v14.357c0 0.815 0.677 1.478 1.51 1.478h28.731c0.815 0 1.478-0.677 1.478-1.51v-14.441c0-0.022-0.002-0.044-0.004-0.065 0.003-0.021 0.004-0.043 0.004-0.065v-14.357zM30.792 1.543v13.799h-4.324c0.587-0.66 0.932-1.525 0.932-2.453 0-0.737-0.218-1.423-0.592-2-0.648-1.066-1.82-1.78-3.156-1.78-2.034 0-3.689 1.655-3.689 3.689 0 0.745 0.223 1.449 0.615 2.039 0.111 0.178 0.236 0.347 0.376 0.504h-4.372v-6.025c0-0.184-0.090-0.347-0.228-0.449-0.101-0.103-0.242-0.167-0.398-0.167h-0.173c-0.24 0-0.453 0.153-0.529 0.38-0.352 1.049-1.332 1.754-2.439 1.754-0.419 0-0.815-0.101-1.166-0.28-0.776-0.444-1.301-1.279-1.301-2.235 0-1.419 1.154-2.574 2.574-2.574 0.408 0 0.799 0.096 1.147 0.27 0.546 0.305 0.976 0.804 1.185 1.426 0.052 0.155 0.169 0.275 0.314 0.335 0.092 0.065 0.204 0.103 0.322 0.103h0.133c0.308 0 0.558-0.25 0.558-0.558v-6.142h13.816c0.217 0 0.394 0.162 0.394 0.362zM1.305 1.575c0-0.217 0.162-0.394 0.362-0.394h13.732v4.404c-0.239-0.216-0.505-0.401-0.793-0.549-0.536-0.297-1.148-0.464-1.791-0.464-2.034 0-3.689 1.655-3.689 3.689 0 1.423 0.81 2.659 1.992 3.274 0.534 0.301 1.149 0.473 1.804 0.473 0.939 0 1.813-0.354 2.476-0.955v4.404h-6.016c-0.308 0-0.558 0.25-0.558 0.558v0.173c0 0.127 0.043 0.245 0.117 0.34 0.065 0.129 0.178 0.231 0.321 0.279 0.562 0.189 1.023 0.558 1.332 1.030 0.232 0.39 0.364 0.842 0.364 1.318 0 1.419-1.154 2.574-2.574 2.574-0.894 0-1.682-0.458-2.144-1.151-0.236-0.389-0.372-0.844-0.372-1.331-0-1.107 0.705-2.087 1.754-2.44 0.227-0.076 0.38-0.289 0.38-0.529v-0.133c0-0.106-0.030-0.204-0.081-0.288-0.068-0.231-0.282-0.4-0.535-0.4h-6.084v-13.883zM1.305 30.505v-13.799h4.324c-0.587 0.66-0.932 1.525-0.932 2.453 0 0.737 0.218 1.424 0.592 2 0.647 1.066 1.82 1.78 3.156 1.78 2.034 0 3.689-1.655 3.689-3.689-0-0.745-0.223-1.449-0.615-2.040-0.111-0.178-0.236-0.347-0.376-0.504h4.372v6.025c0 0.184 0.090 0.347 0.228 0.449 0.101 0.103 0.242 0.167 0.398 0.167h0.173c0.24 0 0.453-0.153 0.529-0.38 0.352-1.049 1.332-1.754 2.439-1.754 0.419 0 0.815 0.101 1.165 0.28 0.776 0.444 1.301 1.279 1.301 2.236 0 1.419-1.154 2.574-2.574 2.574-0.408 0-0.799-0.096-1.147-0.27-0.546-0.305-0.976-0.804-1.185-1.426-0.052-0.155-0.169-0.275-0.314-0.336-0.092-0.065-0.204-0.103-0.322-0.103h-0.133c-0.308 0-0.558 0.25-0.558 0.558v6.142h-13.816c-0.217-0-0.394-0.163-0.394-0.362zM30.792 30.472c0 0.217-0.162 0.394-0.362 0.394h-13.732v-4.404c0.239 0.216 0.505 0.401 0.792 0.548 0.536 0.297 1.148 0.464 1.791 0.464 2.034 0 3.689-1.655 3.689-3.689 0-1.423-0.81-2.659-1.993-3.274-0.534-0.301-1.149-0.473-1.804-0.473-0.939 0-1.813 0.354-2.476 0.955v-4.404h6.016c0.308 0 0.558-0.25 0.558-0.558v-0.173c0-0.126-0.044-0.245-0.117-0.34-0.064-0.129-0.178-0.231-0.321-0.279-0.562-0.189-1.023-0.558-1.332-1.030-0.232-0.389-0.363-0.842-0.363-1.318 0-1.419 1.154-2.574 2.574-2.574 0.894 0 1.682 0.458 2.144 1.151 0.236 0.389 0.372 0.844 0.372 1.331 0 1.107-0.705 2.087-1.754 2.439-0.227 0.076-0.38 0.289-0.38 0.529v0.133c0 0.106 0.030 0.204 0.081 0.289 0.068 0.231 0.282 0.4 0.535 0.4h6.084v13.883z"
  }));
};
const servicesIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M15.517 23.581c-0.036 0.002-0.069-0.003-0.102-0.009-0.108-0.019-0.211-0.070-0.294-0.153l-9.153-9.153c-0.104-0.104-0.162-0.245-0.162-0.392s0.058-0.288 0.163-0.392l2.13-2.129c0.217-0.217 0.568-0.217 0.784 0l6.633 6.633 12.94-12.94c0.217-0.217 0.568-0.217 0.785 0l2.13 2.13c0.104 0.104 0.163 0.245 0.163 0.392s-0.058 0.288-0.162 0.392l-15.46 15.46c-0.104 0.104-0.245 0.163-0.392 0.163zM7.145 13.873l8.37 8.37 14.678-14.678-1.345-1.345-12.94 12.94c-0.217 0.217-0.568 0.217-0.785 0l-6.633-6.633-1.345 1.345zM30.087 11.781c0.401 1.337 0.618 2.753 0.618 4.219 0 8.108-6.596 14.704-14.705 14.704s-14.704-6.596-14.704-14.704c0-8.108 6.596-14.705 14.704-14.705 3.79 0 7.25 1.442 9.86 3.805l0.785-0.785c-2.812-2.564-6.549-4.129-10.645-4.129-8.72 0-15.814 7.094-15.814 15.814s7.094 15.814 15.814 15.814c8.72 0 15.814-7.094 15.814-15.814 0-1.784-0.297-3.501-0.845-5.102l-0.883 0.883z"
  }));
};
const pricingIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M17.425 25.368h-3.22v-2.107c-1.234-0.109-2.518-0.463-3.389-0.944l-0.373-0.206 0.93-3.628 0.622 0.341c0.602 0.33 1.835 0.883 3.323 0.883 0.769 0 1.545-0.244 1.545-0.789 0-0.365-0.235-0.783-1.938-1.358-1.985-0.668-4.264-1.78-4.264-4.477 0-2.098 1.387-3.709 3.652-4.289v-2.162h3.22v1.931c1.366 0.11 2.263 0.465 2.838 0.736l0.416 0.196-0.937 3.53-0.621-0.298c-0.539-0.259-1.442-0.692-2.853-0.692-0.488 0-1.307 0.088-1.307 0.681 0 0.448 1.192 0.94 2.231 1.319 2.781 0.973 3.971 2.344 3.971 4.58 0 1.114-0.391 2.124-1.13 2.922-0.668 0.721-1.601 1.236-2.716 1.503v2.328zM15.307 24.266h1.016v-2.139l0.457-0.079c2.090-0.36 3.389-1.676 3.389-3.433 0-1.446-0.551-2.601-3.24-3.542-1.624-0.592-2.962-1.176-2.962-2.357 0-0.862 0.633-1.783 2.409-1.783 1.213 0 2.119 0.278 2.746 0.536l0.36-1.354c-0.565-0.222-1.372-0.445-2.517-0.479l-0.535-0.016v-1.886h-1.016v1.959l-0.45 0.084c-2.005 0.375-3.202 1.61-3.202 3.305 0 1.577 1.051 2.604 3.514 3.432 1.396 0.472 2.688 1.089 2.688 2.402 0 1.149-1.039 1.891-2.647 1.891-1.312 0-2.447-0.366-3.222-0.708l-0.369 1.437c0.709 0.309 1.808 0.617 3.045 0.654l0.535 0.016v2.058zM15.901 30.607c-8.054 0-14.607-6.552-14.607-14.606s6.552-14.607 14.607-14.607c8.054 0 14.607 6.552 14.607 14.607 0 2.567-0.667 4.981-1.834 7.079l1.095 0.293c1.174-2.2 1.841-4.71 1.841-7.373 0-8.662-7.047-15.709-15.709-15.709s-15.709 7.047-15.709 15.709 7.047 15.709 15.709 15.709c2.752 0 5.34-0.712 7.592-1.96l-0.294-1.099c-2.148 1.244-4.641 1.957-7.297 1.957zM29.539 31.709c-0.141 0-0.282-0.054-0.39-0.161l-2.673-2.673-0.86 1.786c-0.1 0.208-0.32 0.331-0.548 0.31s-0.421-0.184-0.481-0.406l-1.977-7.377c-0.051-0.19 0.004-0.393 0.143-0.532s0.342-0.194 0.532-0.143l7.377 1.977c0.222 0.060 0.385 0.252 0.406 0.481s-0.102 0.448-0.31 0.548l-1.787 0.86 2.673 2.672c0.103 0.103 0.161 0.244 0.161 0.39s-0.058 0.286-0.161 0.39l-1.717 1.717c-0.108 0.107-0.249 0.161-0.39 0.161zM26.318 27.385c0.145 0 0.285 0.057 0.39 0.161l2.832 2.832 0.938-0.938-2.832-2.832c-0.126-0.126-0.184-0.306-0.154-0.482s0.143-0.327 0.304-0.404l1.148-0.552-5.020-1.345 1.345 5.020 0.552-1.148c0.077-0.161 0.228-0.274 0.404-0.304 0.031-0.005 0.062-0.008 0.092-0.008zM20.272 5.201c1.977 0 5.826 2.162 5.826 6.126 0 0.304 0.247 0.551 0.551 0.551s0.551-0.247 0.551-0.551c0-2.063-0.912-3.976-2.568-5.387-1.314-1.119-3.025-1.842-4.361-1.842-0.304 0-0.551 0.247-0.551 0.551s0.247 0.551 0.551 0.551z"
  }));
};
const testimonialsIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 32 32",
    style: {
      padding: '1px',
      fill: '#000000'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M31.438 1.423h-30.877c-0.31 0-0.562 0.251-0.562 0.562v22.175c0 0.31 0.251 0.562 0.562 0.562h3.103v5.294c0 0.201 0.107 0.386 0.281 0.486 0.087 0.050 0.184 0.075 0.281 0.075s0.194-0.025 0.281-0.075l10.012-5.78h16.919c0.31 0 0.562-0.251 0.562-0.562v-22.175c0-0.31-0.251-0.562-0.562-0.562zM30.877 23.598h-16.508c-0.099 0-0.195 0.026-0.281 0.075l-9.3 5.369v-4.883c0-0.31-0.251-0.562-0.562-0.562h-3.103v-21.052h29.753v21.052zM4.386 7.532h22.894c0.31 0 0.562-0.251 0.562-0.562s-0.251-0.562-0.562-0.562h-22.894c-0.31 0-0.562 0.251-0.562 0.562s0.251 0.562 0.562 0.562zM4.386 11.865h22.894c0.31 0 0.562-0.251 0.562-0.562s-0.251-0.562-0.562-0.562h-22.894c-0.31 0-0.562 0.251-0.562 0.562s0.251 0.562 0.562 0.562zM4.386 16.198h22.894c0.31 0 0.562-0.251 0.562-0.562s-0.251-0.562-0.562-0.562h-22.894c-0.31 0-0.562 0.251-0.562 0.562s0.251 0.562 0.562 0.562zM4.386 20.53h22.894c0.31 0 0.562-0.251 0.562-0.562s-0.251-0.562-0.562-0.562h-22.894c-0.31 0-0.562 0.252-0.562 0.562s0.251 0.562 0.562 0.562z"
  }));
};
const barcodeIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"
  }));
};
const checkIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
const StarFilled = _ref3 => {
  let {
    className
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
  }));
};
const StarHalf = _ref4 => {
  let {
    className
  } = _ref4;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
  }));
};
const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"
}));
const close = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
const colsFull = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }));
};
const cols2Equal = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols12 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols21 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols3Equal = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols112 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "12.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols211 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "32.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols121 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "13.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "31.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols131 = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "11.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "33.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols4Equal = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "13.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "32.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols5Equal = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "10.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "34.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "26.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "18.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const colsCollapsed = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "4",
    y: "22.9",
    width: "40",
    height: "2.2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const rowsCollapsed = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "6",
    y: "22.9",
    width: "36",
    height: "2.2"
  })));
};
const cols6Equal = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "10.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "35.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "29.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "16.4",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const cols2Grid = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "4",
    y: "18.9",
    width: "40",
    height: "2.2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "22.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "4",
    y: "26.9",
    width: "40",
    height: "2.2"
  }));
};
const cols3Grid = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/1999/xlink"
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
    d: "M41.8,13.2V34.8H6.2V13.2H41.8M42,11H6a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "4",
    y: "22.9",
    width: "40",
    height: "2.2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "28.9",
    y: "13",
    width: "2.2",
    height: "22"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Rect, {
    x: "16.9",
    y: "13",
    width: "2.2",
    height: "22"
  }));
};
const alignBottom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
const alignCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
const alignTop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Path, {
  d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
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

/***/ "./src/components/clear-button/editor.scss":
/*!*************************************************!*\
  !*** ./src/components/clear-button/editor.scss ***!
  \*************************************************/
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

/***/ "./src/components/google-fonts-control/editor.scss":
/*!*********************************************************!*\
  !*** ./src/components/google-fonts-control/editor.scss ***!
  \*********************************************************/
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
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"themehunk-blocks/advance-heading","version":"0.1.0","title":"Advance Heading","category":"themehunk-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","keywords":["heading","title","advanced heading"],"textdomain":"themehunk-block","attributes":{"id":{"type":"string"},"content":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6,div,p,span","default":""},"tag":{"default":"h2","type":"string"},"align":{"type":"string"},"alignTablet":{"type":"string"},"alignMobile":{"type":"string"},"headingColor":{"type":"string"},"headingHvrColor":{"type":"string"},"highlightColor":{"type":"string"},"highlightBackground":{"type":"string"},"fontSize":{"type":"number"},"fontSizeTablet":{"type":"number"},"fontSizeMobile":{"type":"number"},"fontFamily":{"type":"string"},"fontVariant":{"type":"string"},"fontStyle":{"type":"string"},"textTransform":{"type":"string"},"lineHeight":{"type":"number"},"lineHeightTablet":{"type":"number"},"lineHeightMobile":{"type":"number"},"letterSpacing":{"type":"number"},"letterSpacingTablet":{"type":"number"},"letterSpacingMobile":{"type":"number"},"textShadow":{"type":"boolean","default":false},"textShadowColor":{"type":"string","default":"#000000"},"textShadowColorOpacity":{"type":"number","default":50},"textShadowBlur":{"type":"number","default":5},"textShadowHorizontal":{"type":"number","default":0},"textShadowVertical":{"type":"number","default":0},"paddingType":{"type":"string","default":"linked"},"paddingTypeTablet":{"type":"string","default":"linked"},"paddingTypeMobile":{"type":"string","default":"linked"},"padding":{"type":"number","default":0},"paddingTablet":{"type":"number"},"paddingMobile":{"type":"number"},"paddingTop":{"type":"number","default":0},"paddingTopTablet":{"type":"number"},"paddingTopMobile":{"type":"number"},"paddingRight":{"type":"number","default":0},"paddingRightTablet":{"type":"number"},"paddingRightMobile":{"type":"number"},"paddingBottom":{"type":"number","default":0},"paddingBottomTablet":{"type":"number"},"paddingBottomMobile":{"type":"number"},"paddingLeft":{"type":"number","default":0},"paddingLeftTablet":{"type":"number"},"paddingLeftMobile":{"type":"number"},"marginType":{"type":"string","default":"linked"},"marginTypeTablet":{"type":"string","default":"linked"},"marginTypeMobile":{"type":"string","default":"linked"},"margin":{"type":"number","default":0},"marginTablet":{"type":"number"},"marginMobile":{"type":"number"},"marginTop":{"type":"number","default":0},"marginTopTablet":{"type":"number"},"marginTopMobile":{"type":"number"},"marginBottom":{"type":"number","default":0},"marginBottomTablet":{"type":"number"},"marginBottomMobile":{"type":"number"},"marginRight":{"type":"number","default":0},"marginRightTablet":{"type":"number"},"marginRightMobile":{"type":"number"},"marginLeft":{"type":"number","default":0},"marginLeftTablet":{"type":"number"},"marginLeftMobile":{"type":"number"},"widthType":{"type":"string","default":"none"},"customWidth":{"type":"number"},"customWidthTablet":{"type":"number"},"customWidthMobile":{"type":"number"},"zindex":{"type":"number"},"zindexTablet":{"type":"number"},"zindexMobile":{"type":"number"},"transitionHeading":{"type":"number"},"responsiveTogHideDesktop":{"type":"boolean","default":false},"responsiveTogHideTablet":{"type":"boolean","default":false},"responsiveTogHideMobile":{"type":"boolean","default":false},"borderColor":{"type":"string"},"borderColorHvr":{"type":"string"},"borderType":{"type":"string","default":"none"},"borderHvrType":{"type":"string","default":"none"},"borderWidthType":{"type":"string","default":"linked"},"borderWidthTypeTablet":{"type":"string","default":"linked"},"borderWidthTypeMobile":{"type":"string","default":"linked"},"borderWidth":{"type":"number","default":0},"borderWidthTablet":{"type":"number"},"borderWidthMobile":{"type":"number"},"borderWidthTop":{"type":"number","default":0},"borderWidthTopTablet":{"type":"number"},"borderWidthTopMobile":{"type":"number"},"borderWidthBottom":{"type":"number","default":0},"borderWidthBottomTablet":{"type":"number"},"borderWidthBottomMobile":{"type":"number"},"borderWidthRight":{"type":"number","default":0},"borderWidthRightTablet":{"type":"number"},"borderWidthRightMobile":{"type":"number"},"borderWidthLeft":{"type":"number","default":0},"borderWidthLeftTablet":{"type":"number"},"borderWidthLeftMobile":{"type":"number"},"borderWidthHvrType":{"type":"string","default":"linked"},"borderWidthHvrTypeTablet":{"type":"string","default":"linked"},"borderWidthHvrTypeMobile":{"type":"string","default":"linked"},"borderWidthHvr":{"type":"number","default":0},"borderWidthHvrTablet":{"type":"number"},"borderWidthHvrMobile":{"type":"number"},"borderWidthHvrTop":{"type":"number","default":0},"borderWidthHvrTopTablet":{"type":"number"},"borderWidthHvrTopMobile":{"type":"number"},"borderWidthHvrBottom":{"type":"number","default":0},"borderWidthHvrBottomTablet":{"type":"number"},"borderWidthHvrBottomMobile":{"type":"number"},"borderWidthHvrRight":{"type":"number","default":0},"borderWidthHvrRightTablet":{"type":"number"},"borderWidthHvrRightMobile":{"type":"number"},"borderWidthHvrLeft":{"type":"number","default":0},"borderWidthHvrLeftTablet":{"type":"number"},"borderWidthHvrLeftMobile":{"type":"number"},"borderRadiusType":{"type":"string","default":"linked"},"borderRadiusTypeTablet":{"type":"string","default":"linked"},"borderRadiusTypeMobile":{"type":"string","default":"linked"},"borderRadius":{"type":"number","default":0},"borderRadiusTablet":{"type":"number"},"borderRadiusMobile":{"type":"number"},"borderRadiusTop":{"type":"number","default":0},"borderRadiusTopTablet":{"type":"number"},"borderRadiusTopMobile":{"type":"number"},"borderRadiusLeft":{"type":"number","default":0},"borderRadiusLeftTablet":{"type":"number"},"borderRadiusLeftMobile":{"type":"number"},"borderRadiusBottom":{"type":"number","default":0},"borderRadiusBottomTablet":{"type":"number"},"borderRadiusBottomMobile":{"type":"number"},"borderRadiusRight":{"type":"number","default":0},"borderRadiusRightTablet":{"type":"number"},"borderRadiusRightMobile":{"type":"number"},"borderRadiusHvrType":{"type":"string","default":"linked"},"borderRadiusHvrTypeTablet":{"type":"string","default":"linked"},"borderRadiusHvrTypeMobile":{"type":"string","default":"linked"},"borderRadiusHvr":{"type":"number","default":0},"borderRadiusHvrTablet":{"type":"number"},"borderRadiusHvrMobile":{"type":"number"},"borderRadiusHvrTop":{"type":"number","default":0},"borderRadiusHvrTopTablet":{"type":"number"},"borderRadiusHvrTopMobile":{"type":"number"},"borderRadiusHvrBottom":{"type":"number","default":0},"borderRadiusHvrBottomTablet":{"type":"number"},"borderRadiusHvrBottomMobile":{"type":"number"},"borderRadiusHvrRight":{"type":"number","default":0},"borderRadiusHvrRightTablet":{"type":"number"},"borderRadiusHvrRightMobile":{"type":"number"},"borderRadiusHvrLeft":{"type":"number","default":0},"borderRadiusHvrLeftTablet":{"type":"number"},"borderRadiusHvrLeftMobile":{"type":"number"},"boxShadow":{"type":"boolean","default":false},"boxShadowColor":{"type":"string"},"boxShadowColorOpacity":{"type":"number","default":50},"boxShadowBlur":{"type":"number","default":5},"boxShadowSpread":{"type":"number","default":1},"boxShadowHorizontal":{"type":"number","default":0},"boxShadowVertical":{"type":"number","default":0},"boxShadowHvr":{"type":"boolean","default":false},"boxShadowColorHvr":{"type":"string"},"boxShadowColorOpacityHvr":{"type":"number","default":50},"boxShadowBlurHvr":{"type":"number","default":5},"boxShadowSpreadHvr":{"type":"number","default":1},"boxShadowHorizontalHvr":{"type":"number","default":0},"boxShadowVerticalHvr":{"type":"number","default":0},"transitionBorder":{"type":"number"}},"editorScript":"file:../../../build/advance-heading.js","editorStyle":"file:../../../build/advance-heading.css","style":"file:../../../build/style-advance-heading.css"}');

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