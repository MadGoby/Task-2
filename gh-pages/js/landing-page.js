/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"landing-page": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./pages/landing-page/landing-page.js","landing-page~room-details~search-room~ui-kit"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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

/***/ "./img/landing-main.jpg":
/*!******************************!*\
  !*** ./img/landing-main.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/landing-main.jpg\");\n\n//# sourceURL=webpack:///./img/landing-main.jpg?");

/***/ }),

/***/ "./pages/landing-page/landing-page.js":
/*!********************************************!*\
  !*** ./pages/landing-page/landing-page.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.scss */ \"./pages/landing-page/landing-page.scss\");\n/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_landing_page_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown */ \"./blocks/dropdown/dropdown.js\");\n/* harmony import */ var _blocks_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/datepicker/datepicker */ \"./blocks/datepicker/datepicker.js\");\n/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/header/header */ \"./blocks/header/header.js\");\n\r\n\r\n\r\n\r\n\r\n__webpack_require__(/*! ../../img/landing-main.jpg */ \"./img/landing-main.jpg\");\r\n\r\nconst guests = ['гост', 'ь', 'я', 'ей'];\r\n\r\nObject(_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  inputClass: '.js-input__field',\r\n  dropdownClass: '.js-dropdown__control',\r\n  inputResultTemplate: { type: 'sum', values: guests },\r\n  defaultTemplate: 'Сколько гостей',\r\n});\r\n\r\nObject(_blocks_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n  targetClass: '.js-datepicker',\r\n  inputFromClass: '.js-input__field_from',\r\n  inputToClass: '.js-input__field_to',\r\n});\r\n\r\nObject(_blocks_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  buttonClass: '.js-header-navigation-button',\r\n  navigationClass: '.js-header-navigation',\r\n});\r\n\n\n//# sourceURL=webpack:///./pages/landing-page/landing-page.js?");

/***/ }),

/***/ "./pages/landing-page/landing-page.scss":
/*!**********************************************!*\
  !*** ./pages/landing-page/landing-page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/landing-page/landing-page.scss?");

/***/ })

/******/ });