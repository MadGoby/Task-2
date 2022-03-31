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
/******/ 		"headers-footers": 0
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
/******/ 	deferredModules.push(["./pages/headers-footers/headers-footers.js","cards~content-types~form-elements~headers-footers~index~landing-page~registration~room-details~searc~a0dce885"]);
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

/***/ "./blocks/navigation/Navigation.js":
/*!*****************************************!*\
  !*** ./blocks/navigation/Navigation.js ***!
  \*****************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\nclass Navigation {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n    this.expandablesLinksMap = [];\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindDomEventListener();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n\r\n    [...this.container.querySelectorAll('.js-navigation__link-wrapper')].forEach((wrapper) => {\r\n      const linkTitle = wrapper.querySelector('.navigation__expandable-title');\r\n      const expandableWrapper = wrapper.querySelector('.js-navigation__expandable-wrapper');\r\n\r\n      this.expandablesLinksMap.push({ title: linkTitle, list: expandableWrapper });\r\n    });\r\n  }\r\n\r\n  centersExpandableLinks() {\r\n    this.expandablesLinksMap.forEach((expandableLinks) => {\r\n      const isNeedToBeCenters = expandableLinks.title.offsetWidth\r\n        < expandableLinks.list.offsetWidth;\r\n\r\n      if (isNeedToBeCenters) {\r\n        const offset = (expandableLinks.title.offsetWidth - expandableLinks.list.offsetWidth) / 2;\r\n        expandableLinks.list.style.left = `${offset}px`;\r\n      }\r\n    });\r\n  }\r\n\r\n  controlExpandableLinksDisplay(target, relatedTarget) {\r\n    this.expandablesLinksMap.forEach((expandableLinks) => {\r\n      if (target === expandableLinks.title && relatedTarget === expandableLinks.list) {\r\n        return;\r\n      }\r\n\r\n      if (expandableLinks.title === target) {\r\n        expandableLinks.list.toggleAttribute('hidden');\r\n        this.centersExpandableLinks();\r\n      }\r\n    });\r\n  }\r\n\r\n  handleTitleOver(event) {\r\n    const { target, relatedTarget } = event;\r\n    this.controlExpandableLinksDisplay(target, relatedTarget);\r\n  }\r\n\r\n  handleTitleOut(event) {\r\n    const { target, relatedTarget } = event;\r\n    this.controlExpandableLinksDisplay(target, relatedTarget);\r\n  }\r\n\r\n  handleListOut(event) {\r\n    const { target, relatedTarget } = event;\r\n    let isNeedToBeHidden = true;\r\n\r\n    this.expandablesLinksMap.forEach((expandableLinks) => {\r\n      const isNeedToBeDisplayed = relatedTarget.classList.contains('navigation__expanded-link')\r\n        || relatedTarget === expandableLinks.title;\r\n\r\n      if (isNeedToBeDisplayed) isNeedToBeHidden = false;\r\n    });\r\n\r\n    if (isNeedToBeHidden) target.toggleAttribute('hidden');\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    this.expandablesLinksMap.forEach((expandableLinks) => {\r\n      expandableLinks.title.onmouseover = this.handleTitleOver;\r\n      expandableLinks.title.onmouseout = this.handleTitleOut;\r\n      expandableLinks.list.onmouseout = this.handleListOut;\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/navigation/Navigation.js?");

/***/ }),

/***/ "./pages/headers-footers/headers-footers.js":
/*!**************************************************!*\
  !*** ./pages/headers-footers/headers-footers.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_navigation_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/navigation/Navigation */ \"./blocks/navigation/Navigation.js\");\n/* harmony import */ var _tools_importContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/importContext */ \"./tools/importContext.js\");\n/* harmony import */ var _headers_footers_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers-footers.scss */ \"./pages/headers-footers/headers-footers.scss\");\n/* harmony import */ var _headers_footers_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headers_footers_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nconst headersNavigaton = [\r\n  'js-headers-footers__header',\r\n  'js-headers-footers__header_authorized',\r\n];\r\n\r\nfunction handleDocumentLoad() {\r\n  headersNavigaton.forEach((headerClass) => new _blocks_navigation_Navigation__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"](headerClass));\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', handleDocumentLoad);\r\n\r\nObject(_tools_importContext__WEBPACK_IMPORTED_MODULE_1__[\"importContext\"])();\r\n\n\n//# sourceURL=webpack:///./pages/headers-footers/headers-footers.js?");

/***/ }),

/***/ "./pages/headers-footers/headers-footers.scss":
/*!****************************************************!*\
  !*** ./pages/headers-footers/headers-footers.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/headers-footers/headers-footers.scss?");

/***/ })

/******/ });