/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

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

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
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

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

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

/***/ "./inc/block/advance-button/controls.js":
/*!**********************************************!*\
  !*** ./inc/block/advance-button/controls.js ***!
  \**********************************************/
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");

/**
 * WordPress dependencies.
 */





const Controls = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "th-link-button",
    contentClassName: "my-popover-content-classname",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
      searchInputPlaceholder: "Search here...",
      value: attributes.post,
      settings: [{
        id: 'opensInNewTab',
        title: 'New tab?'
      }
      // ,{
      //     id: 'customDifferentSetting',
      //     title: 'Has this custom setting?'
      // }
      ],

      onChange: newPost => setAttributes({
        post: newPost
      }),
      withCreateSuggestion: true,
      createSuggestion: inputValue => setAttributes({
        post: {
          ...attributes.post,
          title: inputValue,
          type: "custom-url",
          id: Date.now(),
          url: inputValue
        }
      }),
      createSuggestionButtonText: newValue => `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New:")} ${newValue}`
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./inc/block/advance-button/edit.js":
/*!******************************************!*\
  !*** ./inc/block/advance-button/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./inc/block/advance-button/editor.scss");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls.js */ "./inc/block/advance-button/controls.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.js */ "./inc/block/advance-button/settings.js");
/* harmony import */ var _src_helpers_get_unique_id_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/helpers/get-unique-id.js */ "./src/helpers/get-unique-id.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_12__);

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





function sanitizeSVG(svg) {
  return dompurify__WEBPACK_IMPORTED_MODULE_12___default().sanitize(svg, {
    USE_PROFILES: {
      svg: true,
      svgFilters: true
    }
  });
}

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
    clientId,
    uniqueID
  } = _ref;
  const {
    id
  } = attributes;
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
  if (!id) {
    setAttributes({
      id: clientId
    });
  }
  let customwidth;
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
  } else if (attributes.widthType == 'fullwidth') {
    customwidth = {
      '--width': '100%',
      '--maxWidth-fullwidth': '100%'
    };
  } else if (attributes.widthType == 'inlinewidth') {
    customwidth = {
      '--width': 'auto',
      '--display': 'inline-flex'
    };
  } else {
    customwidth = {
      '--width': '100%',
      '--maxWidth-fullwidth': '100%'
    };
  }
  let buttonWrapperStyle;
  let iconPositionStyle;
  let PositionProperties;
  let flexProperties;
  let buttonFullWidth;
  let buttonStyleSheet;
  if (attributes.iconPosition == 'before') {
    iconPositionStyle = {
      '--orderButton': 5,
      '--iconMargin': `0 ${attributes.iconSpacing}px 0 0`
    };
  } else {
    iconPositionStyle = {
      '--orderButton': 15,
      '--iconMargin': `0 0 0 ${attributes.iconSpacing}px`
    };
  }
  if (isDesktop) {
    buttonWrapperStyle = {
      '--justify-content': attributes.align,
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

    //Button Inside Border Radius
    buttonStyleSheet = {
      '--paddingTop': 'linked' === attributes.buttonpaddingType ? `${attributes.buttonpadding}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingTop}${attributes.buttonpaddingUnit}`,
      '--paddingRight': 'linked' === attributes.buttonpaddingType ? `${attributes.buttonpadding}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingRight}${attributes.buttonpaddingUnit}`,
      '--paddingBottom': 'linked' === attributes.buttonpaddingType ? `${attributes.buttonpadding}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingBottom}${attributes.buttonpaddingUnit}`,
      '--paddingLeft': 'linked' === attributes.buttonpaddingType ? `${attributes.buttonpadding}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingLeft}${attributes.buttonpaddingUnit}`,
      '--border-top-width': 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTop}${attributes.buttonborderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottom}${attributes.buttonborderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRight}${attributes.buttonborderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.buttonborderWidthType ? `${attributes.buttonborderWidth}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeft}${attributes.buttonborderWidthUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusType ? `${attributes.buttonborderRadius}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusTop}${attributes.buttonborderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusType ? `${attributes.buttonborderRadius}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusRight}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusType ? `${attributes.buttonborderRadius}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusLeft}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusType ? `${attributes.buttonborderRadius}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusBottom}${attributes.buttonborderRadiusUnit}`,
      '--fontSize': attributes.fontSize + attributes.fontSizeUnit,
      '--lineHeight': (3 < attributes.lineHeight ? attributes.lineHeight + attributes.lineHeightUnit : attributes.lineHeight) || undefined,
      '--letterSpacing': attributes.letterSpacing && `${attributes.letterSpacing}${attributes.letterSpacingUnit}`
    };
  }
  if (isTablet) {
    buttonWrapperStyle = {
      '--justify-content': attributes.alignTablet,
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

    //Button Inside Border Radius
    buttonStyleSheet = {
      '--paddingTop': 'linked' === attributes.buttonpaddingTypeTablet ? `${attributes.buttonpaddingTablet}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingTopTablet}${attributes.buttonpaddingUnit}`,
      '--paddingRight': 'linked' === attributes.buttonpaddingTypeTablet ? `${attributes.buttonpaddingTablet}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingRightTablet}${attributes.buttonpaddingUnit}`,
      '--paddingBottom': 'linked' === attributes.buttonpaddingTypeTablet ? `${attributes.buttonpaddingTablet}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingBottomTablet}${attributes.buttonpaddingUnit}`,
      '--paddingLeft': 'linked' === attributes.buttonpaddingTypeTablet ? `${attributes.buttonpaddingTablet}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingLeftTablet}${attributes.buttonpaddingUnit}`,
      '--border-top-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTopTablet}${attributes.buttonborderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottomTablet}${attributes.buttonborderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRightTablet}${attributes.buttonborderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.buttonborderWidthTypeTablet ? `${attributes.buttonborderWidthTablet}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeftTablet}${attributes.buttonborderWidthUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${attributes.buttonborderRadiusTablet}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusTopTablet}${attributes.buttonborderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${attributes.buttonborderRadiusTablet}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusRightTablet}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${attributes.buttonborderRadiusTablet}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusLeftTablet}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusTypeTablet ? `${attributes.buttonborderRadiusTablet}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusBottomTablet}${attributes.buttonborderRadiusUnit}`,
      '--fontSize': attributes.fontSizeTablet + attributes.fontSizeUnit,
      '--lineHeight': (3 < attributes.lineHeightTablet ? attributes.lineHeightTablet + attributes.lineHeightUnit : attributes.lineHeightTablet) || undefined,
      '--letterSpacing': attributes.letterSpacingTablet && `${attributes.letterSpacingTablet}${attributes.letterSpacingUnit}`
    };
  }
  if (isMobile) {
    buttonWrapperStyle = {
      '--justify-content': attributes.alignMobile,
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

    //Button Inside Border Radius
    buttonStyleSheet = {
      '--paddingTop': 'linked' === attributes.buttonpaddingTypeMobile ? `${attributes.buttonpaddingMobile}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingTopMobile}${attributes.buttonpaddingUnit}`,
      '--paddingRight': 'linked' === attributes.buttonpaddingTypeMobile ? `${attributes.buttonpaddingMobile}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingRightMobile}${attributes.buttonpaddingUnit}`,
      '--paddingBottom': 'linked' === attributes.buttonpaddingTypeMobile ? `${attributes.buttonpaddingMobile}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingBottomMobile}${attributes.buttonpaddingUnit}`,
      '--paddingLeft': 'linked' === attributes.buttonpaddingTypeMobile ? `${attributes.buttonpaddingMobile}${attributes.buttonpaddingUnit}` : `${attributes.buttonpaddingLeftMobile}${attributes.buttonpaddingUnit}`,
      '--border-top-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthTopMobile}${attributes.buttonborderWidthUnit}`,
      '--border-bottom-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthBottomMobile}${attributes.buttonborderWidthUnit}`,
      '--border-right-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthRightMobile}${attributes.buttonborderWidthUnit}`,
      '--border-left-width': 'linked' === attributes.buttonborderWidthTypeMobile ? `${attributes.buttonborderWidthMobile}${attributes.buttonborderWidthUnit}` : `${attributes.buttonborderWidthLeftMobile}${attributes.buttonborderWidthUnit}`,
      '--borderTopRightRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${attributes.buttonborderRadiusMobile}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusTopMobile}${attributes.buttonborderRadiusUnit}`,
      '--borderTopLeftRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${attributes.buttonborderRadiusMobile}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusRightMobile}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomRightRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${attributes.buttonborderRadiusMobile}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusLeftMobile}${attributes.buttonborderRadiusUnit}`,
      '--borderBottomLeftRadius': 'linked' === attributes.buttonborderRadiusTypeMobile ? `${attributes.buttonborderRadiusMobile}${attributes.buttonborderRadiusUnit}` : `${attributes.buttonborderRadiusBottomMobile}${attributes.buttonborderRadiusUnit}`,
      '--fontSize': attributes.fontSizeMobile + attributes.fontSizeUnit,
      '--lineHeight': (3 < attributes.lineHeightMobile ? attributes.lineHeightMobile + attributes.lineHeightUnit : attributes.lineHeightMobile) || undefined,
      '--letterSpacing': attributes.letterSpacingMobile && `${attributes.letterSpacingMobile}${attributes.letterSpacingUnit}`
    };
  }
  // Button Full-Width
  if (attributes.align == 'space-around') {
    buttonFullWidth = {
      '--width': '100%',
      '--justify-content': 'center'
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
      '--boxShadow': `${attributes.boxShadowHorizontal}px ${attributes.boxShadowVertical}px ${attributes.boxShadowBlur}px ${attributes.boxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_6___default()(attributes.boxShadowColor ? attributes.boxShadowColor : '#fff', attributes.boxShadowColorOpacity)}`
    };
  }
  if (attributes.boxShadowHvr) {
    boxShadowStyle = {
      ...boxShadowStyle,
      '--boxShadow-hvr': `${attributes.boxShadowHorizontalHvr}px ${attributes.boxShadowVerticalHvr}px ${attributes.boxShadowBlurHvr}px ${attributes.boxShadowSpreadHvr}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_6___default()(attributes.boxShadowColorHvr ? attributes.boxShadowColorHvr : '#fff', attributes.boxShadowColorOpacityHvr)}`
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
  const style = {
    ...borderStyle,
    ...boxShadowStyle,
    ...customwidth,
    ...iconPositionStyle,
    ...buttonWrapperStyle,
    ...backgroundStyle,
    ...PositionProperties,
    ...flexProperties,
    ...transitionSpacerStyle
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)({
    id: attributes.id,
    className: 'th-button-wrapper',
    style: style
  });

  //Background

  let backgroundStyleButton = {};
  if ('color' === attributes.backgroundType) {
    backgroundStyleButton = {
      '--background-color': attributes.buttonbackgroundColor
    };
  }
  if ('image' === attributes.buttonbackgroundType) {
    var _attributes$buttonbac, _attributes$buttonbac2, _attributes$backgroun7;
    backgroundStyleButton = {
      ...backgroundStyleButton,
      '--backgroundImage': `url( '${(_attributes$buttonbac = attributes.buttonbackgroundImage) === null || _attributes$buttonbac === void 0 ? void 0 : _attributes$buttonbac.url}' )`,
      '--backgroundAttachment': attributes.buttonbackgroundAttachment,
      '--backgroundPosition': `${Math.round(((_attributes$buttonbac2 = attributes.buttonbackgroundPosition) === null || _attributes$buttonbac2 === void 0 ? void 0 : _attributes$buttonbac2.x) * 100)}% ${Math.round(((_attributes$backgroun7 = attributes.backgroundPosition) === null || _attributes$backgroun7 === void 0 ? void 0 : _attributes$backgroun7.y) * 100)}%`,
      '--backgroundRepeat': attributes.buttonbackgroundRepeat,
      '--backgroundSize': attributes.buttonbackgroundSize
    };
  }
  if ('gradient' === attributes.buttonbackgroundType) {
    backgroundStyleButton = {
      '--backgroundImage': attributes.buttonbackgroundGradient
    };
  }
  if ('color' === attributes.buttonbackgroundTypeHvr) {
    backgroundStyleButton = {
      ...backgroundStyleButton,
      '--background-color-hvr': attributes.buttonbackgroundColorHvr
    };
  }
  if ('image' === attributes.buttonbackgroundTypeHvr) {
    var _attributes$buttonbac3, _attributes$buttonbac4, _attributes$backgroun8;
    backgroundStyleButton = {
      ...backgroundStyleButton,
      '--backgroundImage-hvr': `url( '${(_attributes$buttonbac3 = attributes.buttonbackgroundImageHvr) === null || _attributes$buttonbac3 === void 0 ? void 0 : _attributes$buttonbac3.url}' )`,
      '--backgroundAttachment-hvr': attributes.buttonbackgroundAttachmentHvr,
      '--backgroundPosition-hvr': `${Math.round(((_attributes$buttonbac4 = attributes.buttonbackgroundPositionHvr) === null || _attributes$buttonbac4 === void 0 ? void 0 : _attributes$buttonbac4.x) * 100)}% ${Math.round(((_attributes$backgroun8 = attributes.backgroundPositionHvr) === null || _attributes$backgroun8 === void 0 ? void 0 : _attributes$backgroun8.y) * 100)}%`,
      '--backgroundRepeat-hvr': attributes.buttonbackgroundRepeatHvr,
      '--backgroundSize-hvr': attributes.buttonbackgroundSizeHvr
    };
  }
  if ('gradient' === attributes.backgroundTypeHvr) {
    backgroundStyleButton = {
      ...backgroundStyleButton,
      '--backgroundImage-hvr': attributes.buttonbackgroundGradientHvr
    };
  }
  let borderStyleButton;
  borderStyleButton = {
    '--border-style': attributes.buttonborderType,
    '--border-color': attributes.buttonborderColor,
    '--border-style-hvr': attributes.buttonborderHvrType,
    '--border-color-hvr': attributes.buttonborderColorHvr
  };
  let boxShadowStyleButton = {};
  if (attributes.buttonboxShadow) {
    boxShadowStyleButton = {
      '--boxShadow': `${attributes.buttonboxShadowHorizontal}px ${attributes.buttonboxShadowVertical}px ${attributes.buttonboxShadowBlur}px ${attributes.buttonboxShadowSpread}px ${hex_rgba__WEBPACK_IMPORTED_MODULE_6___default()(attributes.buttonboxShadowColor ? attributes.buttonboxShadowColor : '#fff', attributes.buttonboxShadowColorOpacity)}`
    };
  }
  let colorStyleButton;
  colorStyleButton = {
    '--color': attributes.buttonColor,
    '--color-hvr': attributes.buttonColorHvr
  };
  const buttonStyle = {
    '--font-family': attributes.fontFamily || undefined,
    '--font-weight': 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
    '--font-style': attributes.fontStyle || undefined,
    '--text-transform': attributes.textTransform || undefined,
    ...backgroundStyleButton,
    ...borderStyleButton,
    ...boxShadowStyleButton,
    ...colorStyleButton,
    ...buttonFullWidth,
    ...buttonStyleSheet
  };
  const blockPropsButton = {
    className: 'th-button th-button-inside',
    style: buttonStyle
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: sanitizeSVG(attributes.icon)
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText, {
    tagName: "span" // The tag here is the element output and editable in the admin
    ,
    value: attributes.content // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: content => setAttributes({
      content
    }) // Store updated content as a block attribute
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button...', 'themehunk-blocks') // Display this text before any content has been added by the user
  }))));
}

/***/ }),

/***/ "./inc/block/advance-button/index.js":
/*!*******************************************!*\
  !*** ./inc/block/advance-button/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./inc/block/advance-button/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./inc/block/advance-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./inc/block/advance-button/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./inc/block/advance-button/block.json");
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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Button', 'themehunk-block'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('AdvancedButton gives a spin to editor\'s Button block with much needed customization options. Powered by themehunk.', 'themehunk-block'),
  keywords: ['heading', 'title', 'advance button'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A Button with more customization options', 'themehunk-block')
    }
  }
});

/***/ }),

/***/ "./inc/block/advance-button/save.js":
/*!******************************************!*\
  !*** ./inc/block/advance-button/save.js ***!
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
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_2__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


function sanitizeSVG(svg) {
  return dompurify__WEBPACK_IMPORTED_MODULE_2___default().sanitize(svg, {
    USE_PROFILES: {
      svg: true,
      svgFilters: true
    }
  });
}

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
    className: `th-button-wrapper${attributes.uniqueID}`,
    href: 'post' in attributes ? attributes.post.url : '',
    target: 'post' in attributes ? '_blank' : '_self',
    rel: "noopener"
  });
  const blockPropsButton = {
    className: 'th-button th-button-inside'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: sanitizeSVG(attributes.icon)
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span" // The tag here is the element output and editable in the admin
    ,
    value: attributes.content
  }))));
}

/***/ }),

/***/ "./inc/block/advance-button/settings.js":
/*!**********************************************!*\
  !*** ./inc/block/advance-button/settings.js ***!
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
/* harmony import */ var _src_components_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/index.js */ "./src/components/index.js");
/* harmony import */ var _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/helpers/icon.js */ "./src/helpers/icon.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");








/**
 * Internal dependencies
 */



const AnimationSelectControlObject = {
  // None.
  'none': {
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'ultimate-addons-for-gutenberg')
  },
  // Fade.
  'fade': {
    value: 'fade',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'ultimate-addons-for-gutenberg')
  },
  'fade-down': {
    value: 'fade-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Down', 'ultimate-addons-for-gutenberg')
  },
  'fade-up': {
    value: 'fade-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Up', 'ultimate-addons-for-gutenberg')
  },
  'fade-left': {
    value: 'fade-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Left', 'ultimate-addons-for-gutenberg')
  },
  'fade-right': {
    value: 'fade-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Right', 'ultimate-addons-for-gutenberg')
  },
  // Flip.
  'flip-down': {
    value: 'flip-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Down', 'ultimate-addons-for-gutenberg')
  },
  'flip-up': {
    value: 'flip-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Up', 'ultimate-addons-for-gutenberg')
  },
  'flip-left': {
    value: 'flip-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Left', 'ultimate-addons-for-gutenberg')
  },
  'flip-right': {
    value: 'flip-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Right', 'ultimate-addons-for-gutenberg')
  },
  // Slide.
  'slide-down': {
    value: 'slide-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Down', 'ultimate-addons-for-gutenberg')
  },
  'slide-up': {
    value: 'slide-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Up', 'ultimate-addons-for-gutenberg')
  },
  'slide-left': {
    value: 'slide-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Left', 'ultimate-addons-for-gutenberg')
  },
  'slide-right': {
    value: 'slide-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Right', 'ultimate-addons-for-gutenberg')
  },
  // Zoom.
  'zoom-in': {
    value: 'zoom-in',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In', 'ultimate-addons-for-gutenberg')
  },
  'zoom-in-down': {
    value: 'zoom-in-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Down', 'ultimate-addons-for-gutenberg')
  },
  'zoom-in-up': {
    value: 'zoom-in-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Up', 'ultimate-addons-for-gutenberg')
  },
  'zoom-in-left': {
    value: 'zoom-in-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Left', 'ultimate-addons-for-gutenberg')
  },
  'zoom-in-right': {
    value: 'zoom-in-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Right', 'ultimate-addons-for-gutenberg')
  },
  'zoom-out': {
    value: 'zoom-out',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out', 'ultimate-addons-for-gutenberg')
  },
  'zoom-out-down': {
    value: 'zoom-out-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Down', 'ultimate-addons-for-gutenberg')
  },
  'zoom-out-up': {
    value: 'zoom-out-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Up', 'ultimate-addons-for-gutenberg')
  },
  'zoom-out-left': {
    value: 'zoom-out-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Left', 'ultimate-addons-for-gutenberg')
  },
  'zoom-out-right': {
    value: 'zoom-out-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Right', 'ultimate-addons-for-gutenberg')
  }
};
const AnimationList = [
// None.
{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'ultimate-addons-for-gutenberg')
},
// Fade.
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'ultimate-addons-for-gutenberg'),
  options: [{
    value: 'fade',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'fade-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Down', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'fade-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Up', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'fade-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Left', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'fade-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade Right', 'ultimate-addons-for-gutenberg')
  }]
},
// Flip.
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip', 'ultimate-addons-for-gutenberg'),
  options: [{
    value: 'flip-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Down', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'flip-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Up', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'flip-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Left', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'flip-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Right', 'ultimate-addons-for-gutenberg')
  }]
},
// Slide.
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide', 'ultimate-addons-for-gutenberg'),
  options: [{
    value: 'slide-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Down', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'slide-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Up', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'slide-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Left', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'slide-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Right', 'ultimate-addons-for-gutenberg')
  }]
},
// Zoom-In.
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In', 'ultimate-addons-for-gutenberg'),
  options: [{
    value: 'zoom-in',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-in-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Down', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-in-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Up', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-in-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Left', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-in-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-In Right', 'ultimate-addons-for-gutenberg')
  }]
},
// Zoom-Out.
{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out', 'ultimate-addons-for-gutenberg'),
  options: [{
    value: 'zoom-out',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-out-down',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Down', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-out-up',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Up', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-out-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Left', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'zoom-out-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom-Out Right', 'ultimate-addons-for-gutenberg')
  }]
}];
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
  const customTooltipFontsize = value => `${value}${attributes.fontSizeUnit}`;
  const customTooltiplineHeight = value => `${value}${attributes.lineHeightUnit}`;
  const customTooltipletterSpacing = value => `${value}${attributes.letterSpacingUnit}`;
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

  // Button PADDING PROPERTIES
  //Padding
  const desktopPaddingButtonType = {
    top: 'buttonpaddingTop',
    right: 'buttonpaddingRight',
    bottom: 'buttonpaddingBottom',
    left: 'buttonpaddingLeft'
  };
  const tabletPaddingButtonType = {
    top: 'buttonpaddingTopTablet',
    right: 'buttonpaddingRightTablet',
    bottom: 'buttonpaddingBottomTablet',
    left: 'buttonpaddingLeftTablet'
  };
  const mobilePaddingButtonType = {
    top: 'buttonpaddingTopMobile',
    right: 'buttonpaddingRightMobile',
    bottom: 'buttonpaddingBottomMobile',
    left: 'buttonpaddingLeftMobile'
  };
  const getPaddingButtonType = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonpaddingType;
      case 'Tablet':
        return attributes.buttonpaddingTypeTablet;
      case 'Mobile':
        return attributes.buttonpaddingTypeMobile;
      default:
        return undefined;
    }
  };
  const changePaddingButtonType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonpaddingType: value,
        buttonpaddingTypeTablet: value,
        buttonpaddingTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonpaddingTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonpaddingTypeMobile: value
      });
    }
  };
  const changeButtonPadding = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.buttonpaddingType) {
          setAttributes({
            buttonpadding: value,
            buttonpaddingTablet: value,
            buttonpaddingMobile: value
          });
        } else {
          setAttributes({
            [desktopPaddingButtonType[type]]: value
          });
          setAttributes({
            [desktopPaddingButtonType[type]]: value,
            [tabletPaddingButtonType[type]]: value,
            [mobilePaddingButtonType[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.buttonpaddingTypeTablet) {
          setAttributes({
            buttonpaddingTablet: value
          });
        } else {
          setAttributes({
            [tabletPaddingButtonType[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.buttonpaddingTypeMobile) {
          setAttributes({
            buttonpaddingMobile: value
          });
        } else {
          setAttributes({
            [mobilePaddingButtonType[type]]: value
          });
        }
        break;
    }
  };
  const getButtonPadding = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingTop;
        case 'Tablet':
          return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingTopTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingTopMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingRight;
        case 'Tablet':
          return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingRightTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingBottom;
        case 'Tablet':
          return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingBottomMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonpaddingType ? attributes.buttonpadding : attributes.buttonpaddingLeft;
        case 'Tablet':
          return 'linked' === attributes.buttonpaddingTypeTablet ? attributes.buttonpaddingTablet : attributes.buttonpaddingLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonpaddingTypeMobile ? attributes.buttonpaddingMobile : attributes.buttonpaddingLeftMobile;
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
  const getBorderWidthButton = type => {
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
          return 'linked' === attributes.buttonborderWidthTypeTablet ? attributes.buttonborderWidthTablet : attributes.buttonborderWidthLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderWidthTypeMobile ? attributes.buttonborderWidthMobile : attributes.buttonborderWidthLeftMobile;
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
  const desktopBorderWidthTypeButton = {
    top: 'buttonborderWidthTop',
    right: 'buttonborderWidthRight',
    bottom: 'buttonborderWidthBottom',
    left: 'buttonborderWidthLeft'
  };
  const tabletBorderWidthTypeButton = {
    top: 'buttonborderWidthTopTablet',
    right: 'buttonborderWidthRightTablet',
    bottom: 'buttonborderWidthBottomTablet',
    left: 'buttonborderWidthLeftTablet'
  };
  const mobileBorderWidthTypeButton = {
    top: 'buttonborderWidthTopMobile',
    right: 'buttonborderWidthRightMobile',
    bottom: 'buttonborderWidthBottomMobile',
    left: 'buttonborderWidthLeftMobile'
  };
  const desktopBorderRadiusTypeButton = {
    top: 'buttonborderRadiusTop',
    left: 'buttonborderRadiusLeft',
    right: 'buttonborderRadiusRight',
    bottom: 'buttonborderRadiusBottom'
  };
  const tabletBorderRadiusTypeButton = {
    top: 'buttonborderRadiusTopTablet',
    left: 'buttonborderRadiusLeftTablet',
    right: 'buttonborderRadiusRightTablet',
    bottom: 'buttonborderRadiusBottomTablet'
  };
  const mobileBorderRadiusTypeButton = {
    top: 'buttonborderRadiusTopMobile',
    left: 'buttonborderRadiusLeftMobile',
    right: 'buttonborderRadiusRightMobile',
    bottom: 'buttonborderRadiusBottomMobile'
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

  //Button Border & Box Shadow

  const getBorderWidthTypeButton = () => {
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
  const changeBorderWidthTypeButton = value => {
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
  const changeBorderWidthButton = (type, value) => {
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
            [desktopBorderWidthTypeButton[type]]: value,
            [tabletBorderWidthTypeButton[type]]: value,
            [mobileBorderWidthTypeButton[type]]: value
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
            [tabletBorderWidthTypeButton[type]]: value
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
            [mobileBorderWidthTypeButton[type]]: value
          });
        }
        break;
    }
  };
  const getBorderRadiusButtonType = () => {
    switch (getView) {
      case 'Desktop':
        return attributes.buttonborderRadiusType;
      case 'Tablet':
        return attributes.buttonborderRadiusTypeTablet;
      case 'Mobile':
        return attributes.buttonborderRadiusTypeMobile;
      default:
        return undefined;
    }
  };
  const changeBorderRadiusButtonType = value => {
    if ('Desktop' === getView) {
      setAttributes({
        buttonborderRadiusType: value,
        buttonborderRadiusTypeTablet: value,
        buttonborderRadiusTypeMobile: value
      });
    } else if ('Tablet' === getView) {
      setAttributes({
        buttonborderRadiusTypeTablet: value
      });
    } else if ('Mobile' === getView) {
      setAttributes({
        buttonborderRadiusTypeMobile: value
      });
    }
  };
  const changeBorderButtonRadius = (type, value) => {
    switch (getView) {
      case 'Desktop':
        if ('linked' === attributes.buttonborderRadiusType) {
          setAttributes({
            buttonborderRadius: value,
            buttonborderRadiusTablet: value,
            buttonborderRadiusMobile: value
          });
        } else {
          setAttributes({
            [desktopBorderRadiusTypeButton[type]]: value,
            [tabletBorderRadiusTypeButton[type]]: value,
            [mobileBorderRadiusTypeButton[type]]: value
          });
        }
        break;
      case 'Tablet':
        if ('linked' === attributes.buttonborderRadiusTypeTablet) {
          setAttributes({
            buttonborderRadiusTablet: value
          });
        } else {
          setAttributes({
            [tabletBorderRadiusTypeButton[type]]: value
          });
        }
        break;
      case 'Mobile':
        if ('linked' === attributes.buttonborderRadiusTypeMobile) {
          setAttributes({
            buttonborderRadiusMobile: value
          });
        } else {
          setAttributes({
            [mobileBorderRadiusTypeButton[type]]: value
          });
        }
        break;
    }
  };
  const getBorderRadiusButton = type => {
    if ('top' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusTop;
        case 'Tablet':
          return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusTopTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusTopMobile;
      }
    } else if ('left' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusLeft;
        case 'Tablet':
          return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusLeftTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusLeftMobile;
      }
    } else if ('right' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusRight;
        case 'Tablet':
          return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusRightTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusRightMobile;
      }
    } else if ('bottom' == type) {
      switch (getView) {
        case 'Desktop':
          return 'linked' === attributes.buttonborderRadiusType ? attributes.buttonborderRadius : attributes.buttonborderRadiusBottom;
        case 'Tablet':
          return 'linked' === attributes.buttonborderRadiusTypeTablet ? attributes.buttonborderRadiusTablet : attributes.buttonborderRadiusBottomTablet;
        case 'Mobile':
          return 'linked' === attributes.buttonborderRadiusTypeMobile ? attributes.buttonborderRadiusMobile : attributes.buttonborderRadiusBottomMobile;
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
  const [borderRadiusButtonUnit, setborderRadiusButtonUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxborderRadiusButtonUnit = borderRadiusButtonUnit === 'px' ? 1500 : borderRadiusButtonUnit === 'em' ? 50 : borderRadiusButtonUnit === '%' ? 100 : '';
  const [paddingButtonUnit, setpaddingButtonUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('px');
  const maxpaddingButtonUnit = paddingButtonUnit === 'px' ? 1500 : paddingButtonUnit === 'em' ? 50 : paddingButtonUnit === '%' ? 100 : '';

  // flex align-self property
  const getButtonAlign = () => {
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
  const changeButtonAlign = value => {
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

  // Typography
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

  //Animation
  // Get the easing functions from Pro.
  const AnimationEasingFunctions = '';

  // Function to trigger animation in editor (when changing animation type or clicking on play button).
  // animationType - holds UAGAnimationType attribute by default but sometimes the attribute is not updated instantaneously, so we pass in the value from the Animation Type select component.
  const playAnimation = function () {
    let animationType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : attributes.UAGAnimationType;
    // For responsive preview.
    const editorIframe = document.querySelector('iframe[name="editor-canvas"]');
    const innerDoc = (editorIframe === null || editorIframe === void 0 ? void 0 : editorIframe.contentDocument) || (editorIframe === null || editorIframe === void 0 ? void 0 : editorIframe.contentWindow.document);

    // Get block and the setTimeout code to clear from previous usage. Also check responsive preview.
    const animatedBlock = editorIframe ? innerDoc.getElementById('block-' + attributes.uniqueID) : document.getElementById('block-' + attributes.uniqueID);
    const aosWaitPreviousCode = parseInt(localStorage.getItem(`aosWaitTimeoutCode-${attributes.uniqueID}`));
    const aosRemoveClassesTimeoutPreviousCode = parseInt(localStorage.getItem(`aosRemoveClassesTimeoutCode-${attributes.uniqueID}`));

    // If the animation is played previously, remove the AOS class and attribute first.
    // We ensure that the AOS class and attribute is removed in case the user repeated taps the play button.
    if (aosWaitPreviousCode) {
      animatedBlock.removeAttribute('data-aos');
      animatedBlock.classList.remove('aos-animate');
    }

    // transition duration is set to 0s, cause the block first goes to the last frame (animated in reverse) when the AOS attribute is added and this should be instantaneous.
    animatedBlock.style.transitionDuration = '0s';
    // Add back the AOS attribute.
    animatedBlock.setAttribute('data-aos', animationType);

    // Due to CSS conflicts across themes in the editor, we set the easing using JS.
    // Also we only provide default 'ease' in the free version, so if the easing function list is empty then use the default 'ease' function.
    animatedBlock.style.transitionTimingFunction = AnimationEasingFunctions ? AnimationEasingFunctions[UAGAnimationEasing] : 'cubic-bezier(.250, .100, .250, 1)';

    // Clear previous timeouts.
    clearTimeout(aosWaitPreviousCode);
    clearTimeout(aosRemoveClassesTimeoutPreviousCode);

    // Add the aos-animate class to play the animation with the given duration.
    const aosWait = setTimeout(() => {
      // Astra theme overrides (or even other themes may) the transition duration to a fixed value.
      // Hence we do the calculation on the next line.
      animatedBlock.style.transitionDuration = UAGAnimationTime / 1000 + 's';
      animatedBlock.classList.add('aos-animate');
    }, 0);

    // Remove the classes and attributes after the animation has played.
    // Keeping the classes and attributes after the animation has played can lead to buggy behavior in the editor.
    const aosRemoveClasses = setTimeout(() => {
      animatedBlock.removeAttribute('data-aos');
      animatedBlock.classList.remove('aos-animate');
      animatedBlock.style.transitionDuration = '';
      animatedBlock.style.transitionTimingFunction = '';
    }, UAGAnimationDelay + UAGAnimationTime);

    // Set local storage so we can fetch the value during later usage to clear the intervals.
    localStorage.setItem(`aosWaitTimeoutCode-${attributes.uniqueID}`, aosWait);
    localStorage.setItem(`aosRemoveClassesTimeoutCode-${attributes.uniqueID}`, aosRemoveClasses);
  };
  console.log(attributes.UAGAnimationType);
  // console.log(attributes.attributes.uniqueID);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.InsSettingHeader, {
    value: tab,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Setting', 'themehunk-block'),
      value: 'setting'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'themehunk-block'),
      value: 'style'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'themehunk-block'),
      value: 'advanced'
    }],
    onChange: setTab
  }), 'setting' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'themehunk-block'),
    initialOpen: true,
    className: "th-button-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'themehunk-block'),
    className: "th-alig-self-control th-component-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: getButtonAlign(),
    onChange: changeButtonAlign,
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Start,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Center,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'themehunk-block'),
      value: 'center'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.End,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Strech,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Justify', 'themehunk-block'),
      value: 'space-around'
    }],
    hasIcon: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.IconPicker, {
    attributes: attributes,
    setAttributes: setAttributes,
    attrIcon: 'icon',
    attrRemoveText: 'removeText',
    attrAriaLabel: 'ariaLabel',
    id: ""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th-component-group-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "th-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'themehunk-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ToogleGroupControl, {
    value: attributes.iconPosition,
    onChange: iconPosition => setAttributes({
      iconPosition
    }),
    options: [{
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.HorizontalLeft,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Before', 'themehunk-blocks'),
      value: 'before'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.HorizontalRight,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('After', 'themehunk-block'),
      value: 'after'
    }],
    hasIcon: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Spacing', 'themehunk-block'),
    value: attributes.iconSpacing,
    onChange: e => setAttributes({
      iconSpacing: e
    }),
    min: 0,
    max: 108
  }))) || 'advanced' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'themehunk-block'),
    initialOpen: false,
    className: "th-button-panel"
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
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.paddingUnit,
    onClick: paddingUnit => {
      setAttributes({
        paddingUnit
      });
      setpaddingUnit(paddingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.marginUnit,
    onClick: marginUnit => {
      setAttributes({
        marginUnit
      });
      setmarginUnit(marginUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
  })), 'right' == attributes.horizontalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
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
  })), 'bottom' == attributes.verticalOrientation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Center,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'themehunk-block'),
      value: 'center'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.End,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Strech,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stretch', 'themehunk-block'),
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'themehunk-blocks'),
      value: 'start'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.OrderEnd,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'themehunk-blocks'),
      value: 'end'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cutsom', 'themehunk-block'),
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'themehunk-blocks'),
      value: 'none'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Grow,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grow', 'themehunk-blocks'),
      value: 'grow'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Shrink,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shrink', 'themehunk-block'),
      value: 'shrink'
    }, {
      icon: _src_helpers_icon_js__WEBPACK_IMPORTED_MODULE_7__.Custom,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'themehunk-block'),
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
    initialOpen: false,
    className: "th-button-panel"
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
    onClick: borderWidthUnit => {
      setAttributes({
        borderWidthUnit
      });
      setborderWidthUnit(borderWidthUnit);
    },
    units: ['px', 'em']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderRadiusUnit,
    onClick: borderRadiusUnit => {
      setAttributes({
        borderRadiusUnit
      });
      setborderRadiusUnit(borderRadiusUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
    onClick: borderWidthHvrUnit => {
      setAttributes({
        borderWidthHvrUnit
      });
      setborderWidthHvrUnit(borderWidthHvrUnit);
    },
    units: ['px', 'em']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.borderRadiusHvrUnit,
    onClick: borderRadiusHvrUnit => {
      setAttributes({
        borderRadiusHvrUnit
      });
      setborderRadiusHvrUnit(borderRadiusHvrUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
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
    initialOpen: false,
    className: "th-button-panel"
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
    initialOpen: false,
    className: "th-button-panel"
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
    className: "th-button-panel"
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
  }))) || 'style' === tab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'themehunk-block'),
    initialOpen: true,
    className: "th-button-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.buttonpaddingUnit,
    onClick: buttonpaddingUnit => {
      setAttributes({
        buttonpaddingUnit
      });
      setpaddingButtonUnit(buttonpaddingUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getPaddingButtonType(),
    min: 0,
    max: maxpaddingUnit,
    changeType: changePaddingButtonType,
    onChange: changeButtonPadding,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getButtonPadding('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getButtonPadding('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getButtonPadding('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getButtonPadding('left')
    }]
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
  }), 'normal' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundSelectorControl, {
    backgroundType: attributes.buttonbackgroundType,
    backgroundColor: attributes.buttonbackgroundColor,
    image: attributes.buttonbackgroundImage,
    gradient: attributes.buttonbackgroundGradient,
    focalPoint: attributes.buttonbackgroundPosition,
    backgroundAttachment: attributes.buttonbackgroundAttachment,
    backgroundRepeat: attributes.buttonbackgroundRepeat,
    backgroundSize: attributes.buttonbackgroundSize,
    changeBackgroundType: value => setAttributes({
      buttonbackgroundType: value
    }),
    changeImage: media => {
      setAttributes({
        buttonbackgroundImage: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.pick)(media, ['id', 'url'])
      });
    },
    removeImage: () => setAttributes({
      buttonbackgroundImage: undefined
    }),
    changeColor: value => setAttributes({
      buttonbackgroundColor: value
    }),
    changeGradient: value => setAttributes({
      buttonbackgroundGradient: value
    }),
    changeBackgroundAttachment: value => setAttributes({
      buttonbackgroundAttachment: value
    }),
    changeBackgroundRepeat: value => setAttributes({
      buttonbackgroundRepeat: value
    }),
    changeFocalPoint: value => setAttributes({
      buttonbackgroundPosition: value
    }),
    changeBackgroundSize: value => setAttributes({
      buttonbackgroundSize: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'themehunk-block'),
    colorValue: attributes.buttonColor,
    onColorChange: e => setAttributes({
      buttonColor: e
    }),
    enableAlpha: true
  })) || 'hover' === hover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundSelectorControl, {
    backgroundType: attributes.buttonbackgroundTypeHvr,
    backgroundColor: attributes.buttonbackgroundColorHvr,
    image: attributes.buttonbackgroundImageHvr,
    gradient: attributes.buttonbackgroundGradientHvr,
    focalPoint: attributes.buttonbackgroundPositionHvr,
    backgroundAttachment: attributes.buttonbackgroundAttachmentHvr,
    backgroundRepeat: attributes.buttonbackgroundRepeatHvr,
    backgroundSize: attributes.buttonbackgroundSizeHvr,
    changeBackgroundType: value => setAttributes({
      buttonbackgroundTypeHvr: value
    }),
    changeImage: media => {
      setAttributes({
        buttonbackgroundImageHvr: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.pick)(media, ['id', 'url'])
      });
    },
    removeImage: () => setAttributes({
      buttonbackgroundImageHvr: undefined
    }),
    changeColor: value => setAttributes({
      buttonbackgroundColorHvr: value
    }),
    changeGradient: value => setAttributes({
      buttonbackgroundGradientHvr: value
    }),
    changeBackgroundAttachment: value => setAttributes({
      buttonbackgroundAttachmentHvr: value
    }),
    changeBackgroundRepeat: value => setAttributes({
      buttonbackgroundRepeatHvr: value
    }),
    changeFocalPoint: value => setAttributes({
      buttonbackgroundPositionHvr: value
    }),
    changeBackgroundSize: value => setAttributes({
      buttonbackgroundSizeHvr: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'themehunk-block'),
    colorValue: attributes.buttonColorHvr,
    onColorChange: e => setAttributes({
      buttonColorHvr: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Hover Color', 'themehunk-block'),
    colorValue: attributes.buttonborderColorHvr,
    onColorChange: e => setAttributes({
      buttonborderColorHvr: e
    }),
    enableAlpha: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border & Box Shadow', 'themehunk-block'),
    initialOpen: false,
    className: "th-button-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Type', 'themehunk-block'),
    value: attributes.buttonborderType,
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
      buttonborderType: e
    })
  }), 'none' !== attributes.buttonborderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.buttonborderWidthUnit,
    onClick: buttonborderWidthUnit => {
      setAttributes({
        buttonborderWidthUnit
      });
      setborderWidthUnit(buttonborderWidthUnit);
    },
    units: ['px', 'em']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderWidthTypeButton(),
    min: 0,
    max: maxborderWidthUnit,
    changeType: changeBorderWidthTypeButton,
    onChange: changeBorderWidthButton,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'themehunk-block'),
      type: 'top',
      value: getBorderWidthButton('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'themehunk-block'),
      type: 'right',
      value: getBorderWidthButton('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'themehunk-block'),
      type: 'bottom',
      value: getBorderWidthButton('bottom')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'themehunk-block'),
      type: 'left',
      value: getBorderWidthButton('left')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'themehunk-block'),
    colorValue: attributes.buttonborderColor,
    onColorChange: e => setAttributes({
      buttonborderColor: e
    }),
    enableAlpha: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ResponsiveControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'themehunk-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.UnitChooser, {
    value: attributes.buttonborderRadiusUnit,
    onClick: buttonborderRadiusUnit => {
      setAttributes({
        buttonborderRadiusUnit
      });
      setborderRadiusButtonUnit(borderRadiusButtonUnit);
    },
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.SizingControl, {
    type: getBorderRadiusButtonType(),
    min: 0,
    max: maxborderRadiusButtonUnit,
    changeType: changeBorderRadiusButtonType,
    onChange: changeBorderButtonRadius,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-R', 'themehunk-block'),
      type: 'top',
      value: getBorderRadiusButton('top')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-L', 'themehunk-block'),
      type: 'right',
      value: getBorderRadiusButton('right')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-R', 'themehunk-block'),
      type: 'left',
      value: getBorderRadiusButton('left')
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('B-L', 'themehunk-block'),
      type: 'bottom',
      value: getBorderRadiusButton('bottom')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_index_js__WEBPACK_IMPORTED_MODULE_6__.ControlPanelControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Shadow', 'themehunk-block'),
    attributes: attributes,
    setAttributes: setAttributes,
    resetValues: {
      buttonboxShadow: false,
      buttonboxShadowColor: undefined,
      buttonboxShadowColorOpacity: 50,
      buttonboxShadowBlur: 5,
      buttonboxShadowSpread: 1,
      buttonboxShadowHorizontal: 0,
      buttonboxShadowVertical: 0
    },
    onClick: () => setAttributes({
      buttonboxShadow: true
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Color', 'themehunk-block'),
    colorValue: attributes.buttonboxShadowColor,
    onColorChange: e => setAttributes({
      buttonboxShadowColor: e
    }),
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Opacity', 'themehunk-block'),
    value: attributes.buttonboxShadowColorOpacity,
    onChange: e => setAttributes({
      buttonboxShadowColorOpacity: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur', 'themehunk-block'),
    value: attributes.buttonboxShadowBlur,
    onChange: e => setAttributes({
      buttonboxShadowBlur: e
    }),
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spread', 'themehunk-block'),
    value: attributes.buttonboxShadowSpread,
    onChange: e => setAttributes({
      buttonboxShadowSpread: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'themehunk-block'),
    value: attributes.buttonboxShadowHorizontal,
    onChange: e => setAttributes({
      buttonboxShadowHorizontal: e
    }),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'themehunk-block'),
    value: attributes.buttonboxShadowVertical,
    onChange: e => setAttributes({
      buttonboxShadowVertical: e
    }),
    min: -100,
    max: 100
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Type', 'themehunk-block'),
    value: attributes.UAGAnimationType !== '' ? AnimationSelectControlObject[attributes.UAGAnimationType] : AnimationSelectControlObject.none,
    options: AnimationList,
    onChange: selection => {
      setAttributes({
        UAGAnimationType: selection.value
      });
      // Play animation when the animation type is changed.
      // We pass in 'value' since the UAGAnimationType may still hold the old animation type value.
      playAnimation(selection.value);
    },
    isSearchable: true
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

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/create-emotion/node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/create-emotion/node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/create-emotion/node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/create-emotion/node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/create-emotion/node_modules/@emotion/hash/dist/hash.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/create-emotion/node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/create-emotion/node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/create-emotion/node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/create-emotion/node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/create-emotion/node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/create-emotion/node_modules/stylis-rule-sheet/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/create-emotion/node_modules/stylis-rule-sheet/index.js ***!
  \*****************************************************************************/
/***/ (function(module) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		0
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/***/ (function(module, exports) {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

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

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caches": function() { return /* binding */ caches; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "cx": function() { return /* binding */ cx; },
/* harmony export */   "flush": function() { return /* binding */ flush; },
/* harmony export */   "getRegisteredStyles": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "hydrate": function() { return /* binding */ hydrate; },
/* harmony export */   "injectGlobal": function() { return /* binding */ injectGlobal; },
/* harmony export */   "keyframes": function() { return /* binding */ keyframes; },
/* harmony export */   "merge": function() { return /* binding */ merge; },
/* harmony export */   "sheet": function() { return /* binding */ sheet; }
/* harmony export */ });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var _createEmotion = (0,create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;




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

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./inc/block/advance-button/editor.scss":
/*!**********************************************!*\
  !*** ./inc/block/advance-button/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./inc/block/advance-button/style.scss":
/*!*********************************************!*\
  !*** ./inc/block/advance-button/style.scss ***!
  \*********************************************/
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

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


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

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": function() { return /* binding */ polyfill; }
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Async": function() { return /* binding */ Async; },
/* harmony export */   "AsyncCreatable": function() { return /* binding */ AsyncCreatable; },
/* harmony export */   "Creatable": function() { return /* binding */ Creatable; },
/* harmony export */   "SelectBase": function() { return /* binding */ Select; },
/* harmony export */   "components": function() { return /* binding */ components; },
/* harmony export */   "createFilter": function() { return /* binding */ createFilter; },
/* harmony export */   "defaultTheme": function() { return /* binding */ defaultTheme; },
/* harmony export */   "makeAnimated": function() { return /* binding */ index; },
/* harmony export */   "makeAsyncSelect": function() { return /* binding */ makeAsyncSelect; },
/* harmony export */   "makeCreatableSelect": function() { return /* binding */ makeCreatableSelect; },
/* harmony export */   "mergeStyles": function() { return /* binding */ mergeStyles; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-select/node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);









function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  return Constructor;
}

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

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      raf__WEBPACK_IMPORTED_MODULE_3___default()(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, "backgroundColor", colors.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius), _defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, "marginBottom", spacing.menuGutter), _defineProperty(_ref3, "marginTop", spacing.menuGutter), _defineProperty(_ref3, "position", 'absolute'), _defineProperty(_ref3, "width", '100%'), _defineProperty(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  _createClass(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(MenuPlacer, "contextTypes", {
  getPortalPlacement: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  var cn = cx(
  /*#__PURE__*/
  (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('menu', props)), {
    menu: true
  }, className);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cn
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('menuList', props)), {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('noOptionsMessage', props)), {
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('loadingMessage', props)), {
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  _createClass(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('menuPortal', state))
      }, children);
      return appendTo ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(MenuPortal, "childContextTypes", {
  getPortalPlacement: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var A11yText = function A11yText(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: 'a11yText',
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck(this, DummyInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DummyInput).apply(this, arguments));
  }

  _createClass(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = _objectWithoutProperties(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        ref: innerRef
      }, props, {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)({
          label: 'dummyInput',
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);

  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, _getPrototypeOf(NodeResolver).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef((0,react_dom__WEBPACK_IMPORTED_MODULE_2__.findDOMNode)(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "originalStyles", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  _createClass(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      touchScrollTarget: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  _createClass(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        onClick: this.blurSelectInput,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)({
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        })
      }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isBottom", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isTop", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollTarget", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "touchStart", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  _createClass(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no scroll available
      if (!el) return;
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  _inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollCaptorSwitch).apply(this, arguments));
  }

  _createClass(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = _objectWithoutProperties(_this$props2, ["isEnabled"]);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('container', props)), {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck(this, ValueContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValueContainer).apply(this, arguments));
  }

  _createClass(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: cx(
        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('valueContainer', this.props)), {
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('indicatorsContainer', props)), {
      'indicators': true
    }, className)
  }, children);
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused,
      _ref2$theme = _ref2.theme,
      baseUnit = _ref2$theme.spacing.baseUnit,
      colors = _ref2$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('dropdownIndicator', props)), {
      'indicator': true,
      'dropdown-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('clearIndicator', props)), {
      'indicator': true,
      'clear-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('indicatorSeparator', props)), {
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size,
      _ref4$theme = _ref4.theme,
      colors = _ref4$theme.colors,
      baseUnit = _ref4$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)({
      animationDuration: '1s',
      animationDelay: "".concat(delay, "ms"),
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl,
      colors = props.theme.colors;
  var color = isFocused ? colors.neutral80 : colors.neutral20;

  if (!keyframesInjected) {
    // eslint-disable-next-line no-unused-expressions
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.injectGlobal)("@keyframes ", keyframesName, "{0%,80%,100%{opacity:0;}40%{opacity:1;}};");
    keyframesInjected = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('loadingIndicator', props)), {
      'indicator': true,
      'loading-indicator': true
    }, className)
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingDot, {
    color: color,
    delay: 0,
    offset: isRtl
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingDot, {
    color: color,
    delay: 160,
    offset: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingDot, {
    color: color,
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('control', props)), {
      'control': true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('group', props)), {
      'group': true
    }, className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('groupHeading', _objectSpread({
      theme: theme
    }, cleanProps))), {
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutProperties(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('input', _objectSpread({
      theme: theme
    }, props)))
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: cx(null, {
      'input': true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValueRemove).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", innerProps, children || react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValue).apply(this, arguments));
  }

  _createClass(MultiValue, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;

      var containerInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx(
        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
        data: data,
        innerProps: containerInnerProps,
        selectProps: selectProps
      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, {
        data: data,
        innerProps: labelInnerProps,
        selectProps: selectProps
      }, children), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Remove, {
        data: data,
        innerProps: removeInnerProps,
        selectProps: selectProps
      }));
    }
  }]);

  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('option', props)), {
      'option': true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className)
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('placeholder', props)), {
      'placeholder': true
    }, className)
  }, innerProps), children);
};

var css$2 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(getStyles('singleValue', props)), {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$2,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
var baseUnit = 4;
/* Used to calculate consistent margin/padding on elements */

var controlHeight = 38;
/* The minimum height of the control */

var menuGutter = baseUnit * 2;
/* The amount of space between the control and menu */

var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blockOptionHover", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isComposing", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearFocusValueOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "commonProps", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "components", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasGroups", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchX", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchY", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputIsHiddenAfterUpdate", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "instancePrefix", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openAfterFocus", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToFocusedOptionOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userIsDragging", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "controlRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusedOptionRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuListRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cacheComponents", function (components$$1) {
      _this.components = defaultComponents({
        components: components$$1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focus", _this.focusInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blur", _this.blurInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread({}, actionMeta, {
        name: name
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      _this.onChange(selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      }), {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(selectValue.slice(0, selectValue.length - 1), {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;
      setTimeout(function () {
        return _this.focusInput();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionStart", function () {
      _this.isComposing = true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionEnd", function () {
      _this.isComposing = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(value);

    var _menuOptions = _this.buildMenuOptions(_props, _selectValue);

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = this.buildMenuOptions(nextProps, selectValue);
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled$$1(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Input, _extends({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isOptionFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu$$1 = _this$components3.Menu,
          MenuList$$1 = _this$components3.MenuList,
          MenuPortal$$1 = _this$components3.MenuPortal,
          LoadingMessage$$1 = _this$components3.LoadingMessage,
          NoOptionsMessage$$1 = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, _extends({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Group, _extends({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadingMessage$$1, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoOptionsMessage$$1, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Menu$$1, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuList$$1, _extends({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuPortal$$1, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
            name: name,
            type: "hidden"
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A11yText, {
        "aria-live": "assertive"
      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Select, "defaultProps", defaultProps);

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    _createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _defineProperty(_class, "defaultProps", defaultProps$1), _temp;
};

var defaultProps$2 = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Async, _Component);

    function Async(props) {
      var _this;

      _classCallCheck(this, Async);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Async).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastRequest", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mounted", false);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsCache", {});

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      });

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    _createClass(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            props = _objectWithoutProperties(_this$props2, ["loadOptions"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _defineProperty(_class, "defaultProps", defaultProps$2), _temp;
};
var SelectState = manageState(Select);
var Async = makeAsyncSelect(SelectState);

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps$3 = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Creatable, _Component);

    function Creatable(props) {
      var _this;

      _classCallCheck(this, Creatable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Creatable).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option'
            };

            if (isMulti) {
              onChange([].concat(_toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      });

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    _createClass(Creatable, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = _extends({}, this.props);

        var options = this.state.options;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _defineProperty(_class, "defaultProps", defaultProps$3), _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(Select);
var Creatable = manageState(SelectCreatable);

var SelectCreatable$1 = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable$1);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutProperties(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutProperties(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.Transition, {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _objectSpread({}, transition[state])
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "duration", collapseDuration);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rafID", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: 'auto'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transition", {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getWidth", function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyle", function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTransition", function (state) {
      return _this.transition[state];
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    } // width must be calculated; cannot transition from `undefined` to `number`

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in;
      var width = this.state.width;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.Transition, {
        enter: false,
        mountOnEnter: true,
        unmountOnExit: true,
        in: inProp,
        timeout: this.duration
      }, function (state) {
        var style = _objectSpread({}, _this2.getStyle(width), _this2.getTransition(state));

        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      });
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutProperties(_ref, ["in", "onExited"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, _extends({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fade, _extends({
      component: WrappedComponent
    }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.TransitionGroup, _extends({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components$$1 = defaultComponents({
    components: externalComponents
  });

  var Input = components$$1.Input,
      MultiValue = components$$1.MultiValue,
      Placeholder = components$$1.Placeholder,
      SingleValue = components$$1.SingleValue,
      ValueContainer = components$$1.ValueContainer,
      rest = _objectWithoutProperties(components$$1, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _objectSpread({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input$1 = AnimatedComponents.Input;
var MultiValue$1 = AnimatedComponents.MultiValue;
var Placeholder$1 = AnimatedComponents.Placeholder;
var SingleValue$1 = AnimatedComponents.SingleValue;
var ValueContainer$1 = AnimatedComponents.ValueContainer;
var index = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(makeAnimated, exportedEqual);

var index$1 = manageState(Select);

/* harmony default export */ __webpack_exports__["default"] = (index$1);



/***/ }),

/***/ "./node_modules/react-select/node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-select/node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports["default"] = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : 0;
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : 0;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : 0;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : 0;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : 0;
exports.classNamesShape = classNamesShape;

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./inc/block/advance-button/block.json":
/*!*********************************************!*\
  !*** ./inc/block/advance-button/block.json ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"themehunk-blocks/advance-button","version":"0.1.0","title":"Advance Button","category":"themehunk-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"themehunk-block","attributes":{"id":{"type":"string"},"uniqueID":{"type":"string"},"tag":{"default":"h2","type":"string"},"linkUrl":{"type":"string"},"linkTarget":{"type":"string"},"content":{"type":"string","default":"Read"},"post":{"type":"object"},"align":{"type":"string"},"alignTablet":{"type":"string"},"alignMobile":{"type":"string"},"icon":{"type":"html"},"hasIcon":{"type":"boolean","default":false},"iconPosition":{"type":"string","default":"before"},"iconSpacing":{"type":"number","default":2},"widthType":{"type":"string","default":"none"},"customWidth":{"type":"number"},"customWidthUnit":{"type":"string","default":"px"},"customWidthTablet":{"type":"number"},"customWidthMobile":{"type":"number"},"paddingType":{"type":"string","default":"linked"},"paddingTypeTablet":{"type":"string","default":"linked"},"paddingTypeMobile":{"type":"string","default":"linked"},"padding":{"type":"number","default":0},"paddingUnit":{"type":"string","default":"px"},"paddingTablet":{"type":"number"},"paddingMobile":{"type":"number"},"paddingTop":{"type":"number","default":0},"paddingTopTablet":{"type":"number"},"paddingTopMobile":{"type":"number"},"paddingRight":{"type":"number","default":0},"paddingRightTablet":{"type":"number"},"paddingRightMobile":{"type":"number"},"paddingBottom":{"type":"number","default":0},"paddingBottomTablet":{"type":"number"},"paddingBottomMobile":{"type":"number"},"paddingLeft":{"type":"number","default":0},"paddingLeftTablet":{"type":"number"},"paddingLeftMobile":{"type":"number"},"marginType":{"type":"string","default":"linked"},"marginTypeTablet":{"type":"string","default":"linked"},"marginTypeMobile":{"type":"string","default":"linked"},"margin":{"type":"number","default":0},"marginUnit":{"type":"string","default":"px"},"marginTablet":{"type":"number"},"marginMobile":{"type":"number"},"marginTop":{"type":"number","default":0},"marginTopTablet":{"type":"number"},"marginTopMobile":{"type":"number"},"marginRight":{"type":"number","default":0},"marginRightTablet":{"type":"number"},"marginRightMobile":{"type":"number"},"marginBottom":{"type":"number","default":0},"marginBottomTablet":{"type":"number"},"marginBottomMobile":{"type":"number"},"marginLeft":{"type":"number","default":0},"marginLeftTablet":{"type":"number"},"marginLeftMobile":{"type":"number"},"zindex":{"type":"number"},"zindexTablet":{"type":"number"},"zindexMobile":{"type":"number"},"backgroundType":{"type":"string","default":"color"},"backgroundColor":{"type":"string"},"backgroundImage":{"type":"object"},"backgroundAttachment":{"type":"string","default":"scroll"},"backgroundPosition":{"type":"object"},"backgroundRepeat":{"type":"string","default":"repeat"},"backgroundSize":{"type":"string","default":"auto"},"backgroundGradient":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"backgroundTypeHvr":{"type":"string","default":"color"},"backgroundColorHvr":{"type":"string"},"backgroundImageHvr":{"type":"object"},"backgroundAttachmentHvr":{"type":"string","default":"scroll"},"backgroundPositionHvr":{"type":"object"},"backgroundRepeatHvr":{"type":"string","default":"repeat"},"backgroundSizeHvr":{"type":"string","default":"auto"},"backgroundGradientHvr":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"borderType":{"type":"string","default":"none"},"borderWidthType":{"type":"string","default":"linked"},"borderWidthTypeTablet":{"type":"string","default":"linked"},"borderWidthTypeMobile":{"type":"string","default":"linked"},"borderWidthUnit":{"type":"string","default":"px"},"borderWidth":{"type":"number","default":0},"borderWidthTablet":{"type":"number"},"borderWidthMobile":{"type":"number"},"borderWidthTop":{"type":"number","default":0},"borderWidthTopTablet":{"type":"number"},"borderWidthTopMobile":{"type":"number"},"borderWidthBottom":{"type":"number","default":0},"borderWidthBottomTablet":{"type":"number"},"borderWidthBottomMobile":{"type":"number"},"borderWidthRight":{"type":"number","default":0},"borderWidthRightTablet":{"type":"number"},"borderWidthRightMobile":{"type":"number"},"borderWidthLeft":{"type":"number","default":0},"borderWidthLeftTablet":{"type":"number"},"borderWidthLeftMobile":{"type":"number"},"borderColor":{"type":"string"},"borderRadiusUnit":{"type":"string","default":"px"},"borderRadiusType":{"type":"string","default":"linked"},"borderRadiusTypeTablet":{"type":"string","default":"linked"},"borderRadiusTypeMobile":{"type":"string","default":"linked"},"borderRadius":{"type":"number","default":0},"borderRadiusTablet":{"type":"number"},"borderRadiusMobile":{"type":"number"},"borderRadiusTop":{"type":"number","default":0},"borderRadiusTopTablet":{"type":"number"},"borderRadiusTopMobile":{"type":"number"},"borderRadiusLeft":{"type":"number","default":0},"borderRadiusLeftTablet":{"type":"number"},"borderRadiusLeftMobile":{"type":"number"},"borderRadiusBottom":{"type":"number","default":0},"borderRadiusBottomTablet":{"type":"number"},"borderRadiusBottomMobile":{"type":"number"},"borderRadiusRight":{"type":"number","default":0},"borderRadiusRightTablet":{"type":"number"},"borderRadiusRightMobile":{"type":"number"},"boxShadow":{"type":"boolean","default":false},"boxShadowColor":{"type":"string"},"boxShadowColorOpacity":{"type":"number","default":50},"boxShadowBlur":{"type":"number","default":5},"boxShadowSpread":{"type":"number","default":1},"boxShadowHorizontal":{"type":"number","default":0},"boxShadowVertical":{"type":"number","default":0},"borderHvrType":{"type":"string"},"borderWidthHvrUnit":{"type":"string","default":"px"},"borderWidthHvrType":{"type":"string","default":"linked"},"borderWidthHvrTypeTablet":{"type":"string","default":"linked"},"borderWidthHvrTypeMobile":{"type":"string","default":"linked"},"borderWidthHvr":{"type":"number"},"borderWidthHvrTablet":{"type":"number"},"borderWidthHvrMobile":{"type":"number"},"borderWidthHvrTop":{"type":"number"},"borderWidthHvrTopTablet":{"type":"number"},"borderWidthHvrTopMobile":{"type":"number"},"borderWidthHvrBottom":{"type":"number"},"borderWidthHvrBottomTablet":{"type":"number"},"borderWidthHvrBottomMobile":{"type":"number"},"borderWidthHvrRight":{"type":"number"},"borderWidthHvrRightTablet":{"type":"number"},"borderWidthHvrRightMobile":{"type":"number"},"borderWidthHvrLeft":{"type":"number"},"borderWidthHvrLeftTablet":{"type":"number"},"borderWidthHvrLeftMobile":{"type":"number"},"borderColorHvr":{"type":"string"},"borderRadiusHvrUnit":{"type":"string","default":"px"},"borderRadiusHvrType":{"type":"string","default":"linked"},"borderRadiusHvrTypeTablet":{"type":"string","default":"linked"},"borderRadiusHvrTypeMobile":{"type":"string","default":"linked"},"borderRadiusHvr":{"type":"number"},"borderRadiusHvrTablet":{"type":"number"},"borderRadiusHvrMobile":{"type":"number"},"borderRadiusHvrTop":{"type":"number"},"borderRadiusHvrTopTablet":{"type":"number"},"borderRadiusHvrTopMobile":{"type":"number"},"borderRadiusHvrBottom":{"type":"number"},"borderRadiusHvrBottomTablet":{"type":"number"},"borderRadiusHvrBottomMobile":{"type":"number"},"borderRadiusHvrRight":{"type":"number"},"borderRadiusHvrRightTablet":{"type":"number"},"borderRadiusHvrRightMobile":{"type":"number"},"borderRadiusHvrLeft":{"type":"number"},"borderRadiusHvrLeftTablet":{"type":"number"},"borderRadiusHvrLeftMobile":{"type":"number"},"boxShadowHvr":{"type":"boolean"},"boxShadowColorHvr":{"type":"string"},"boxShadowColorOpacityHvr":{"type":"number"},"boxShadowBlurHvr":{"type":"number"},"boxShadowSpreadHvr":{"type":"number"},"boxShadowHorizontalHvr":{"type":"number"},"boxShadowVerticalHvr":{"type":"number"},"position":{"type":"string","default":"relative"},"horizontalOrientation":{"type":"string"},"horizontalOrientationOffset":{"type":"number","default":"0"},"horizontalOrientationOffsetTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetUnit":{"type":"string","default":"px"},"horizontalOrientationOffsetRight":{"type":"number","default":"0"},"horizontalOrientationOffsetRightTablet":{"type":"number","default":"0"},"horizontalOrientationOffsetRightMobile":{"type":"number","default":"0"},"horizontalOrientationOffsetRightUnit":{"type":"string","default":"px"},"verticalOrientation":{"type":"string"},"verticalOrientationOffsetTop":{"type":"number","default":"0"},"verticalOrientationOffsetTopTablet":{"type":"number","default":"0"},"verticalOrientationOffsetTopMobile":{"type":"number","default":"0"},"verticalOrientationOffsetTopUnit":{"type":"string","default":"px"},"verticalOrientationOffsetBottom":{"type":"number","default":"0"},"verticalOrientationOffsetBottomTablet":{"type":"number","default":"0"},"verticalOrientationOffsetBottomMobile":{"type":"number","default":"0"},"verticalOrientationOffsetBottomUnit":{"type":"string","default":"px"},"alignSelf":{"type":"string"},"alignSelfTablet":{"type":"string"},"alignSelfMobile":{"type":"string"},"order":{"type":"string"},"orderTablet":{"type":"string"},"orderMobile":{"type":"string"},"customOrder":{"type":"string"},"customOrderTablet":{"type":"string"},"customOrderMobile":{"type":"string"},"flexSize":{"type":"string"},"flexSizeTablet":{"type":"string"},"flexSizeMobile":{"type":"string"},"FlexGrowSize":{"type":"string"},"FlexGrowSizeTablet":{"type":"string"},"FlexGrowSizeMobile":{"type":"string"},"FlexShrinkSize":{"type":"string"},"FlexShrinkSizeTablet":{"type":"string"},"FlexShrinkSizeMobile":{"type":"string"},"responsiveTogHideDesktop":{"type":"boolean","default":false},"responsiveTogHideTablet":{"type":"boolean","default":false},"responsiveTogHideMobile":{"type":"boolean","default":false},"transitionAll":{"type":"number","default":"0.2"},"buttonColor":{"type":"string"},"buttonColorHvr":{"type":"string"},"buttonbackgroundType":{"type":"string","default":"color"},"buttonbackgroundColor":{"type":"string","default":"#ff6912"},"buttonbackgroundImage":{"type":"object"},"buttonbackgroundAttachment":{"type":"string","default":"scroll"},"buttonbackgroundPosition":{"type":"object"},"buttonbackgroundRepeat":{"type":"string","default":"repeat"},"buttonbackgroundSize":{"type":"string","default":"auto"},"buttonbackgroundGradient":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"buttonbackgroundTypeHvr":{"type":"string","default":"color"},"buttonbackgroundColorHvr":{"type":"string"},"buttonbackgroundImageHvr":{"type":"object"},"buttonbackgroundAttachmentHvr":{"type":"string","default":"scroll"},"buttonbackgroundPositionHvr":{"type":"object"},"buttonbackgroundRepeatHvr":{"type":"string","default":"repeat"},"buttonbackgroundSizeHvr":{"type":"string","default":"auto"},"buttonbackgroundGradientHvr":{"type":"string","default":"linear-gradient(90deg,rgba(54,209,220,1) 0%,rgba(91,134,229,1) 100%)"},"buttonborderType":{"type":"string","default":"none"},"buttonborderWidthType":{"type":"string","default":"linked"},"buttonborderWidthTypeTablet":{"type":"string","default":"linked"},"buttonborderWidthTypeMobile":{"type":"string","default":"linked"},"buttonborderWidthUnit":{"type":"string","default":"px"},"buttonborderWidth":{"type":"number","default":0},"buttonborderWidthTablet":{"type":"number"},"buttonborderWidthMobile":{"type":"number"},"buttonborderWidthTop":{"type":"number","default":0},"buttonborderWidthTopTablet":{"type":"number"},"buttonborderWidthTopMobile":{"type":"number"},"buttonborderWidthBottom":{"type":"number","default":0},"buttonborderWidthBottomTablet":{"type":"number"},"buttonborderWidthBottomMobile":{"type":"number"},"buttonborderWidthRight":{"type":"number","default":0},"buttonborderWidthRightTablet":{"type":"number"},"buttonborderWidthRightMobile":{"type":"number"},"buttonborderWidthLeft":{"type":"number","default":0},"buttonborderWidthLeftTablet":{"type":"number"},"buttonborderWidthLeftMobile":{"type":"number"},"buttonborderColor":{"type":"string"},"buttonborderColorHvr":{"type":"string"},"buttonborderRadiusUnit":{"type":"string","default":"px"},"buttonborderRadiusType":{"type":"string","default":"linked"},"buttonborderRadiusTypeTablet":{"type":"string","default":"linked"},"buttonborderRadiusTypeMobile":{"type":"string","default":"linked"},"buttonborderRadius":{"type":"number","default":0},"buttonborderRadiusTablet":{"type":"number"},"buttonborderRadiusMobile":{"type":"number"},"buttonborderRadiusTop":{"type":"number","default":0},"buttonborderRadiusTopTablet":{"type":"number"},"buttonborderRadiusTopMobile":{"type":"number"},"buttonborderRadiusLeft":{"type":"number","default":0},"buttonborderRadiusLeftTablet":{"type":"number"},"buttonborderRadiusLeftMobile":{"type":"number"},"buttonborderRadiusBottom":{"type":"number","default":0},"buttonborderRadiusBottomTablet":{"type":"number"},"buttonborderRadiusBottomMobile":{"type":"number"},"buttonborderRadiusRight":{"type":"number","default":0},"buttonborderRadiusRightTablet":{"type":"number"},"buttonborderRadiusRightMobile":{"type":"number"},"buttonboxShadow":{"type":"boolean","default":false},"buttonboxShadowColor":{"type":"string"},"buttonboxShadowColorOpacity":{"type":"number","default":50},"buttonboxShadowBlur":{"type":"number","default":5},"buttonboxShadowSpread":{"type":"number","default":1},"buttonboxShadowHorizontal":{"type":"number","default":0},"buttonboxShadowVertical":{"type":"number","default":0},"buttonpaddingType":{"type":"string","default":"unlinked"},"buttonpaddingTypeTablet":{"type":"string","default":"unlinked"},"buttonpaddingTypeMobile":{"type":"string","default":"unlinked"},"buttonpaddingUnit":{"type":"string","default":"px"},"buttonpadding":{"type":"number","default":0},"buttonpaddingTablet":{"type":"number"},"buttonpaddingMobile":{"type":"number"},"buttonpaddingTop":{"type":"number","default":16},"buttonpaddingTopTablet":{"type":"number"},"buttonpaddingTopMobile":{"type":"number"},"buttonpaddingRight":{"type":"number","default":40},"buttonpaddingRightTablet":{"type":"number"},"buttonpaddingRightMobile":{"type":"number"},"buttonpaddingBottom":{"type":"number","default":16},"buttonpaddingBottomTablet":{"type":"number"},"buttonpaddingBottomMobile":{"type":"number"},"buttonpaddingLeft":{"type":"number","default":40},"buttonpaddingLeftTablet":{"type":"number"},"buttonpaddingLeftMobile":{"type":"number"},"fontFamily":{"type":"string"},"fontVariant":{"type":"string"},"fontStyle":{"type":"string"},"textTransform":{"type":"string"},"lineHeightUnit":{"type":"string","default":"px"},"lineHeight":{"type":"number"},"lineHeightTablet":{"type":"number"},"lineHeightMobile":{"type":"number"},"letterSpacingUnit":{"type":"string","default":"px"},"letterSpacing":{"type":"number"},"letterSpacingTablet":{"type":"number"},"letterSpacingMobile":{"type":"number"},"fontSizeUnit":{"type":"string","default":"px"},"fontSize":{"type":"number"},"fontSizeTablet":{"type":"number"},"fontSizeMobile":{"type":"number"},"UAGAnimationType":{"type":"string","default":""},"UAGAnimationTime":{"type":"number","default":400},"UAGAnimationDelay":{"type":"number","default":0},"UAGAnimationEasing":{"type":"string","default":"esae"},"UAGAnimationRepeat":{"type":"boolean","default":false}}}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"advance-button": 0,
/******/ 			"./style-advance-button": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-advance-button"], function() { return __webpack_require__("./inc/block/advance-button/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=advance-button.js.map