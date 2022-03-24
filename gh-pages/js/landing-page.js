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
/******/ 	deferredModules.push(["./pages/landing-page/landing-page.js","cards~content-types~form-elements~headers-footers~index~landing-page~registration~room-details~searc~a0dce885","cards~form-elements~landing-page~room-details~search-room"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderNavigation\", function() { return HeaderNavigation; });\nclass HeaderNavigation {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.navigation = this.container.querySelector('.js-header__navigation-wrapper');\r\n    this.button = this.container.querySelector('.js-header__navigation-button');\r\n  }\r\n\r\n  handleButtonClick() {\r\n    const styles = getComputedStyle(this.navigation);\r\n\r\n    if (styles.display === 'none') {\r\n      this.navigation.style.display = 'block';\r\n      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.navigation.style.display = 'none';\r\n      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  controlDisplayOnResize(userWidth) {\r\n    const isNeedToBeDisplayed = userWidth > 350 && this.navigation.style.display === 'none';\r\n\r\n    if (isNeedToBeDisplayed) {\r\n      this.navigation.style.display = 'block';\r\n    } else if (userWidth <= 350) {\r\n      this.navigation.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  handleDOMResize(event) {\r\n    const userWidth = Number(event.target.innerWidth);\r\n    this.controlDisplayOnResize(userWidth);\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const checkIsClickInNavigation = (element) => element === this.navigation\r\n      || element === this.button;\r\n    const result = Boolean(event.path.find((element) => checkIsClickInNavigation(element)));\r\n    if (result === false) this.handleButtonClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.button.addEventListener('click', this.handleButtonClick);\r\n    document.body.onresize = this.handleDOMResize;\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/header/Header.js?");

/***/ }),

/***/ "./pages/landing-page/landing-page.js":
/*!********************************************!*\
  !*** ./pages/landing-page/landing-page.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/header/Header */ \"./blocks/header/Header.js\");\n/* harmony import */ var _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/datepicker/Datepicker */ \"./blocks/datepicker/Datepicker.js\");\n/* harmony import */ var _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/dropdown/Dropdown */ \"./blocks/dropdown/Dropdown.js\");\n/* harmony import */ var _tools_importContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/importContext */ \"./tools/importContext.js\");\n/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page.scss */ \"./pages/landing-page/landing-page.scss\");\n/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_landing_page_scss__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_tools_importContext__WEBPACK_IMPORTED_MODULE_3__[\"importContext\"])();\r\n\r\nfunction handleDocumentLoad() {\r\n  new _blocks_header_Header__WEBPACK_IMPORTED_MODULE_0__[\"HeaderNavigation\"]('js-landing-page__header');\r\n  new _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__[\"Datepicker\"]({\r\n    target: 'js-landing-page__search-room',\r\n  });\r\n  new _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__[\"Dropdown\"]({\r\n    target: 'js-landing-page__search-room',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'guests',\r\n      },\r\n      outputType: 'sum',\r\n    },\r\n  });\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', handleDocumentLoad);\r\n\n\n//# sourceURL=webpack:///./pages/landing-page/landing-page.js?");

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