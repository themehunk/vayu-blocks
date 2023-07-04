/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./inc/block/animation/utils.js":
/*!**************************************!*\
  !*** ./inc/block/animation/utils.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domReady": function() { return /* binding */ domReady; },
/* harmony export */   "makeInterval": function() { return /* binding */ makeInterval; }
/* harmony export */ });
/**
 * Create utility functions for an interval timer.
 * @param {number} duration The duration, in seconds.
 * @param {number} deltaTime The time between two time ticks, in seconds.
 * @returns Utility functions.
 */
const makeInterval = (duration, deltaTime) => {
  let interval;
  let currentStep = 0;
  const steps = Math.ceil(duration / deltaTime) + 1 || 1;

  /**
   * Stop the interval. Get a callback function that execute at the end.
   * @param {Function} callback Function that execute at the end.
   */
  const stop = callback => {
    clearInterval(interval);
    callback === null || callback === void 0 ? void 0 : callback();
  };

  /**
   * Start the interval. Get a callback function that execute at every tick and the one that execute at the end.
   * @param {Function} callback Function that execute at every tick.
   * @param {Function} endCallback Function that execute at the end.
   */
  const start = (callback, endCallback) => {
    interval = setInterval(() => {
      if (currentStep < steps) {
        callback === null || callback === void 0 ? void 0 : callback(currentStep);
        currentStep += 1;
      } else {
        stop(endCallback);
      }
    }, deltaTime * 1000);
  };
  return {
    steps,
    start,
    stop
  };
};

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 * @return {void}
 */
const domReady = callback => {
  if ('undefined' === typeof document) {
    return;
  }
  if ('complete' === document.readyState ||
  // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  'interactive' === document.readyState // DOMContentLoaded fires at this point, so we call directly.
  ) {
    return void callback();
  }

  // DOMContentLoaded has not fired yet, delay callback until then.
  document.addEventListener('DOMContentLoaded', callback);
};

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************************************!*\
  !*** ./inc/block/animation/frontend/count/index.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./inc/block/animation/utils.js");
/**
 * Internal dependencies
 */

const MAX_PARENT_SEARCH = 3;
const speedConfig = {
  'none': undefined,
  'o-count-slower': 3,
  'o-count-slow': 2,
  'o-count-fast': 1.5,
  'o-count-fastest': 1
};

/**
 * Get the configuration option from the element CSS classes.
 * @param {HTMLDivElement} elem
 * @returns Configuration options.
 */
const getConfiguration = elem => {
  let parent = elem.parentElement;
  for (let i = 0; i < MAX_PARENT_SEARCH; ++i) {
    if (Array.from(parent.classList).some(o => o.includes('o-count-'))) {
      var _delay$split, _arr$filter;
      const arr = Array.from(parent.classList);
      const delay = arr.filter(x => x.includes('o-count-delay-')).pop();
      const number = parseInt((delay === null || delay === void 0 ? void 0 : (_delay$split = delay.split('-')) === null || _delay$split === void 0 ? void 0 : _delay$split[3]) || '0');
      const isMS = delay === null || delay === void 0 ? void 0 : delay.includes('ms');
      const speedOptions = Object.keys(speedConfig);
      const speed = (arr === null || arr === void 0 ? void 0 : (_arr$filter = arr.filter(x => speedOptions.includes(x))) === null || _arr$filter === void 0 ? void 0 : _arr$filter.pop()) || 'fast';
      return {
        speed: speedConfig[speed],
        delay: number * (isMS ? 0 : 1000)
      };
    }
  }
  return undefined;
};

// List to all characters that can be in a number structure.
const NUMERIC_FORMATS = new Set(Array.from('0123456789,.'));

// List to extra characters that ca be in a number format. E.g: `-` with 23-34-12-12.
const NUMBER_EXTRA_FORMAT = new Set(Array.from(','));

/**
 * Extract the number, prefix, and suffix.
 * @param {string} text The selected text
 * @returns An object with the number, prefix and suffix
 */
const extract = text => {
  const arr = Array.from(text);
  const prefix = [];
  const suffix = [];
  const number = [];
  let isPrefix = true;
  let isSuffix = false;
  for (let x of arr) {
    if (NUMERIC_FORMATS.has(x)) {
      if (isPrefix) {
        isPrefix = false;
      }
      if (isSuffix) {
        // If there are more numbers in the selection, consider them as suffix.
        suffix.push(x);
      } else {
        number.push(x);
      }
    } else {
      if (isPrefix) {
        prefix.push(x);
      } else {
        if (!isSuffix) {
          isSuffix = true;
        }
        suffix.push(x);
      }
    }
  }
  return {
    prefix: prefix.join(''),
    suffix: suffix.join(''),
    number
  };
};

/**
 * Start the count animation.
 * @param {HTMLDivElement} elem The HTML element.
 */
const initCount = elem => {
  var _number$join, _number$join$split, _number$join$split$;
  const text = (elem === null || elem === void 0 ? void 0 : elem.innerHTML) || '';
  const config = getConfiguration(elem);
  const {
    suffix,
    prefix,
    number
  } = extract(text);
  const formatElements = [...number].reverse().map((c, idx) => {
    if (NUMBER_EXTRA_FORMAT.has(c)) {
      return {
        position: idx,
        character: c
      };
    }
    return null;
  }).filter(x => x);

  // Get the precision based on the numbers after the comma.
  const numAfterComma = ((_number$join = number.join('')) === null || _number$join === void 0 ? void 0 : (_number$join$split = _number$join.split('.')) === null || _number$join$split === void 0 ? void 0 : (_number$join$split$ = _number$join$split[1]) === null || _number$join$split$ === void 0 ? void 0 : _number$join$split$.length) || 0;

  // Clean the string and the get the number.
  const parsedNumber = parseFloat(number.filter(c => ',' !== c).join(''));
  const paddingLen = text.length - suffix.length;

  /**
   * Apply the format to the number.
   * @param {number} n The number.
   */
  const applyFormat = n => {
    const num = n.split('').reverse();
    formatElements.forEach(f => {
      if (f.position < num.length) {
        num.splice(f.position, 0, f.character);
      }
    });
    return ((prefix || '') + num.reverse().join('')).padStart(paddingLen, ' ') + suffix || '';
  };
  const {
    start,
    steps
  } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeInterval)((config === null || config === void 0 ? void 0 : config.speed) || 2, 0.05);
  const delta = parseFloat((parsedNumber / steps).toFixed(numAfterComma || 2));

  // Don't animate it if the difference is very small.
  if (0.000000000001 > delta) {
    return;
  }
  let values = [0];
  for (let i = 1; i < steps; ++i) {
    values.push(values[i - 1] + delta);
  }
  values = values.map(n => n.toFixed(numAfterComma));
  if (0 < values.length) {
    values[steps - 1] = parsedNumber.toFixed(numAfterComma || 0);
    elem.innerHTML = applyFormat(values[0]);
    setTimeout(() => {
      elem.style.whiteSpace = 'pre';
      start(i => {
        elem.innerHTML = applyFormat(values[i]);
      }, () => {
        elem.style.whiteSpace = '';
        elem.innerHTML = text;
      });
    }, (config === null || config === void 0 ? void 0 : config.delay) || 0);
  }
};
(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.domReady)(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.6]
  };
  const NUMBERS = new Set('0123456789');
  setTimeout(() => {
    const anims = document.querySelectorAll('o-anim-count');
    anims.forEach(elem => {
      if (Array.from(elem.innerHTML).some(c => NUMBERS.has(c))) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && 0 < entry.intersectionRect.height) {
              observer.unobserve(elem);
              initCount(elem);
            }
          });
        }, options);
        observer.observe(elem);
      }
    });
  }, 300);
});
}();
/******/ })()
;
//# sourceMappingURL=anim-count.js.map