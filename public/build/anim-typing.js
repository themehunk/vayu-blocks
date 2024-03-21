/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/animation/utils.js":
/*!**************************************!*\
  !*** ./src/block/animation/utils.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domReady: function() { return /* binding */ domReady; },
/* harmony export */   makeInterval: function() { return /* binding */ makeInterval; }
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
    callback?.();
  };

  /**
   * Start the interval. Get a callback function that execute at every tick and the one that execute at the end.
   * @param {Function} callback Function that execute at every tick.
   * @param {Function} endCallback Function that execute at the end.
   */
  const start = (callback, endCallback) => {
    interval = setInterval(() => {
      if (currentStep < steps) {
        callback?.(currentStep);
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
/*!******************************************************!*\
  !*** ./src/block/animation/frontend/typing/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./src/block/animation/utils.js");
/**
 * Internal dependencies
 */

const MAX_PARENT_SEARCH = 3;

/**
 * This is the speed per characher and not the total one like in the other animations.
 */
const speedConfig = {
  'none': undefined,
  'o-typing-slower': 0.4,
  'o-typing-slow': 0.25,
  'o-typing-fast': 0.05,
  'o-typing-faster': 0.01
};

/**
 * Get the configuration option from the element CSS classes.
 * @param {HTMLDivElement} elem
 * @returns Configuration options.
 */
const getConfiguration = elem => {
  let parent = elem.parentElement;
  for (let i = 0; i < MAX_PARENT_SEARCH; ++i) {
    if (Array.from(parent.classList).some(o => o.includes('o-typing-'))) {
      const arr = Array.from(parent.classList);
      const delay = arr.filter(x => x.includes('o-typing-delay-')).pop();
      const number = parseInt(delay?.split('-')?.[3] || '0');
      const isMS = delay?.includes('ms');
      const speedOptions = Object.keys(speedConfig);
      const speed = arr?.filter(x => speedOptions.includes(x))?.pop() || 'fast';
      return {
        speed: speedConfig[speed],
        delay: number * (isMS ? 0 : 1000)
      };
    }
  }
  return undefined;
};

/**
 * Start the count animation.
 * @param {HTMLDivElement} elem The HTML element.
 * @return {Function} Start the typing animation.
 */
const initTyping = elem => {
  const text = elem?.innerHTML || '';
  const config = getConfiguration(elem);
  if (!text?.length) {
    returnl;
  }
  const len = text.length;
  const totalTime = (config?.speed || 0.1) * len;
  const {
    start,
    steps,
    stop
  } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeInterval)(totalTime, config?.speed || 0.1);
  const typingPlaceholder = document.createElement('span');
  typingPlaceholder.classList.add('o-anim-typing-caret');
  typingPlaceholder.style.whiteSpace = 'pre-wrap';
  const fillPlaceholder = document.createElement('span');
  fillPlaceholder.style.whiteSpace = 'pre-wrap';
  fillPlaceholder.style.visibility = 'hidden';
  const originalContent = elem.innerHTML;
  elem.innerHTML = '';
  elem.appendChild(typingPlaceholder);
  elem.appendChild(fillPlaceholder);
  typingPlaceholder.innerHTML = text.slice(0, 0);
  fillPlaceholder.innerHTML = text.slice(0);
  return () => {
    setTimeout(() => {
      start(i => {
        typingPlaceholder.innerHTML = text.slice(0, i);
        if (i < len) {
          fillPlaceholder.innerHTML = text.slice(i);
        }
        if (len >= steps) {
          stop();
        }
      }, () => {
        elem.innerHTML = originalContent;
      });
    }, config?.delay || 0);
  };
};
(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.domReady)(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.6]
  };
  let styles = `
		.o-anim-typing-caret::after {
			font-weight: 100;
			content: '|';
			color: #2E3D48;
			animation: 1s blink step-end infinite;
		}
	
		@keyframes blink {
			from, to {
			  color: transparent;
		   }
			50% {
			  color: black;
		   }
		}
	`;
  styles = styles.replace(/(\r\n|\n|\r|\t)/gm, '');
  let hasStyles = false;
  setTimeout(() => {
    const anims = document.querySelectorAll('o-anim-typing');
    anims.forEach(elem => {
      if (!hasStyles) {
        const styleSheet = document.createElement('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        hasStyles = true;
      }
      const startTyping = initTyping(elem);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && 0 < entry.intersectionRect.height) {
            observer.unobserve(elem);
            startTyping();
          }
        });
      }, options);
      observer.observe(elem);
    });
  }, 100);
});
}();
/******/ })()
;
//# sourceMappingURL=anim-typing.js.map