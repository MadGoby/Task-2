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

/***/ "./blocks/header/header.js":
/*!*********************************!*\
  !*** ./blocks/header/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return headerNavigation; });\nfunction headerNavigation(settings) {\r\n  const { buttonClass, navigationClass } = settings;\r\n\r\n  function getHtmlElements() {\r\n    const button = document.querySelector(buttonClass);\r\n    const navigation = document.querySelector(navigationClass);\r\n    return { button, navigation };\r\n  }\r\n\r\n  const resultElements = getHtmlElements();\r\n  const { button, navigation } = resultElements;\r\n\r\n  function hambToArrow(state) {\r\n    const sign = button.querySelector('.header__hamburger');\r\n\r\n    if (state === 'block') {\r\n      sign.classList.add('header__hamburger_expanded');\r\n    } else {\r\n      sign.classList.remove('header__hamburger_expanded');\r\n    }\r\n  }\r\n\r\n  function discloseNavigation() {\r\n    const styles = getComputedStyle(navigation);\r\n\r\n    if (styles.display === 'none') {\r\n      navigation.style.display = 'block';\r\n      hambToArrow(styles.display);\r\n    } else {\r\n      navigation.style.display = 'none';\r\n      hambToArrow(styles.display);\r\n    }\r\n  }\r\n\r\n  function changeSidebarDisplay(userWidth) {\r\n    if (userWidth > 350 && navigation.style.display === 'none') {\r\n      navigation.style.display = 'block';\r\n    } else if (userWidth <= 350) {\r\n      navigation.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  function convertPassesVariable(event) {\r\n    const userWidth = +event.target.innerWidth;\r\n    changeSidebarDisplay(userWidth);\r\n  }\r\n\r\n  function bindEventListeners() {\r\n    button.addEventListener('click', discloseNavigation);\r\n    document.body.onresize = convertPassesVariable;\r\n  }\r\n\r\n  bindEventListeners();\r\n}\r\n\n\n//# sourceURL=webpack:///./blocks/header/header.js?");

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

/***/ "./pages/sign-in/sign-in.js":
/*!**********************************!*\
  !*** ./pages/sign-in/sign-in.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.scss */ \"./pages/sign-in/sign-in.scss\");\n/* harmony import */ var _sign_in_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sign_in_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/header/header */ \"./blocks/header/header.js\");\n\r\n\r\n\r\n__webpack_require__(/*! ../../img/room-background.jpg */ \"./img/room-background.jpg\");\r\n\r\nObject(_blocks_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  buttonClass: '.js-header-navigation-button',\r\n  navigationClass: '.js-header-navigation',\r\n});\n\n//# sourceURL=webpack:///./pages/sign-in/sign-in.js?");

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