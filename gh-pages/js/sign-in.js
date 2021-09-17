/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/sign-in/sign-in.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/auto-bind/index.js":
/*!******************************************!*\
  !*** ../node_modules/auto-bind/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Gets all non-builtin properties up the prototype chain\nconst getAllProperties = object => {\n\tconst properties = new Set();\n\n\tdo {\n\t\tfor (const key of Reflect.ownKeys(object)) {\n\t\t\tproperties.add([object, key]);\n\t\t}\n\t} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);\n\n\treturn properties;\n};\n\nmodule.exports = (self, {include, exclude} = {}) => {\n\tconst filter = key => {\n\t\tconst match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);\n\n\t\tif (include) {\n\t\t\treturn include.some(match);\n\t\t}\n\n\t\tif (exclude) {\n\t\t\treturn !exclude.some(match);\n\t\t}\n\n\t\treturn true;\n\t};\n\n\tfor (const [object, key] of getAllProperties(self.constructor.prototype)) {\n\t\tif (key === 'constructor' || !filter(key)) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tconst descriptor = Reflect.getOwnPropertyDescriptor(object, key);\n\t\tif (descriptor && typeof descriptor.value === 'function') {\n\t\t\tself[key] = self[key].bind(self);\n\t\t}\n\t}\n\n\treturn self;\n};\n\n\n//# sourceURL=webpack:///../node_modules/auto-bind/index.js?");

/***/ }),

/***/ "./blocks/header/Header.js":
/*!*********************************!*\
  !*** ./blocks/header/Header.js ***!
  \*********************************/
/*! exports provided: HeaderNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderNavigation\", function() { return HeaderNavigation; });\nclass HeaderNavigation {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.button = this.container.querySelector('.js-header__navigation-button');\r\n    this.navigation = this.container.querySelector('.js-header__navigation');\r\n  }\r\n\r\n  controlNavigationDisplay() {\r\n    const styles = getComputedStyle(this.navigation);\r\n\r\n    if (styles.display === 'none') {\r\n      this.navigation.style.display = 'block';\r\n      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');\r\n    } else {\r\n      this.navigation.style.display = 'none';\r\n      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');\r\n    }\r\n  }\r\n\r\n  controlDisplayOnResize(userWidth) {\r\n    if (userWidth > 350 && this.navigation.style.display === 'none') {\r\n      this.navigation.style.display = 'block';\r\n    } else if (userWidth <= 350) {\r\n      this.navigation.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  convertPassesVariable(event) {\r\n    const userWidth = +event.target.innerWidth;\r\n    this.controlDisplayOnResize(userWidth);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.button.addEventListener('click', this.controlNavigationDisplay);\r\n    document.body.onresize = this.convertPassesVariable;\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/header/Header.js?");

/***/ }),

/***/ "./blocks/header/header-init.js":
/*!**************************************!*\
  !*** ./blocks/header/header-init.js ***!
  \**************************************/
/*! exports provided: initAllHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAllHeaders\", function() { return initAllHeaders; });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./blocks/header/Header.js\");\n\r\n\r\nfunction initAllHeaders() {\r\n  [...document.querySelectorAll('.js-header')].forEach((item) => {\r\n    new _Header__WEBPACK_IMPORTED_MODULE_0__[\"HeaderNavigation\"](item);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/header/header-init.js?");

/***/ }),

/***/ "./img/facebook.svg":
/*!**************************!*\
  !*** ./img/facebook.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/facebook.svg\");\n\n//# sourceURL=webpack:///./img/facebook.svg?");

/***/ }),

/***/ "./img/instagram.svg":
/*!***************************!*\
  !*** ./img/instagram.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/instagram.svg\");\n\n//# sourceURL=webpack:///./img/instagram.svg?");

/***/ }),

/***/ "./img/logo-color.svg":
/*!****************************!*\
  !*** ./img/logo-color.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/logo-color.svg\");\n\n//# sourceURL=webpack:///./img/logo-color.svg?");

/***/ }),

/***/ "./img/room-background.jpg":
/*!*********************************!*\
  !*** ./img/room-background.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/room-background.jpg\");\n\n//# sourceURL=webpack:///./img/room-background.jpg?");

/***/ }),

/***/ "./img/twitter.svg":
/*!*************************!*\
  !*** ./img/twitter.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/twitter.svg\");\n\n//# sourceURL=webpack:///./img/twitter.svg?");

/***/ }),

/***/ "./pages/sign-in/sign-in.js":
/*!**********************************!*\
  !*** ./pages/sign-in/sign-in.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.scss */ \"./pages/sign-in/sign-in.scss\");\n/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sign_in_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_header_header_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/header/header-init */ \"./blocks/header/header-init.js\");\n\r\n\r\n\r\nObject(_blocks_header_header_init__WEBPACK_IMPORTED_MODULE_1__[\"initAllHeaders\"])();\r\n\r\n__webpack_require__(/*! ../../img/room-background.jpg */ \"./img/room-background.jpg\");\r\n__webpack_require__(/*! ../../img/logo-color.svg */ \"./img/logo-color.svg\");\r\n__webpack_require__(/*! ../../img/instagram.svg */ \"./img/instagram.svg\");\r\n__webpack_require__(/*! ../../img/facebook.svg */ \"./img/facebook.svg\");\r\n__webpack_require__(/*! ../../img/twitter.svg */ \"./img/twitter.svg\");\n\n//# sourceURL=webpack:///./pages/sign-in/sign-in.js?");

/***/ }),

/***/ "./pages/sign-in/sign-in.scss":
/*!************************************!*\
  !*** ./pages/sign-in/sign-in.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/sign-in/sign-in.scss?");

/***/ })

/******/ });