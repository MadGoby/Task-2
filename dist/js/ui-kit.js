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
/******/ 		"ui-kit": 0
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
/******/ 	deferredModules.push(["./ui-kit.js","vendors~search-room~ui-kit","vendors~registration~ui-kit","landing-page~room-details~search-room~ui-kit","search-room~ui-kit"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/840.jpg":
/*!*********************!*\
  !*** ./img/840.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/840.jpg\");\n\n//# sourceURL=webpack:///./img/840.jpg?");

/***/ }),

/***/ "./img/888.jpg":
/*!*********************!*\
  !*** ./img/888.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/888.jpg\");\n\n//# sourceURL=webpack:///./img/888.jpg?");

/***/ }),

/***/ "./img/arrow-forward-white.svg":
/*!*************************************!*\
  !*** ./img/arrow-forward-white.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/arrow-forward-white.svg\");\n\n//# sourceURL=webpack:///./img/arrow-forward-white.svg?");

/***/ }),

/***/ "./img/arrow-forward.svg":
/*!*******************************!*\
  !*** ./img/arrow-forward.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/arrow-forward.svg\");\n\n//# sourceURL=webpack:///./img/arrow-forward.svg?");

/***/ }),

/***/ "./img/check-arrow.jpg":
/*!*****************************!*\
  !*** ./img/check-arrow.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/check-arrow.jpg\");\n\n//# sourceURL=webpack:///./img/check-arrow.jpg?");

/***/ }),

/***/ "./img/dropdown-nav.svg":
/*!******************************!*\
  !*** ./img/dropdown-nav.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/dropdown-nav.svg\");\n\n//# sourceURL=webpack:///./img/dropdown-nav.svg?");

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

/***/ "./img/favorite-border.svg":
/*!*********************************!*\
  !*** ./img/favorite-border.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/favorite-border.svg\");\n\n//# sourceURL=webpack:///./img/favorite-border.svg?");

/***/ }),

/***/ "./img/favorite.svg":
/*!**************************!*\
  !*** ./img/favorite.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/favorite.svg\");\n\n//# sourceURL=webpack:///./img/favorite.svg?");

/***/ }),

/***/ "./img/house.svg":
/*!***********************!*\
  !*** ./img/house.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/house.svg\");\n\n//# sourceURL=webpack:///./img/house.svg?");

/***/ }),

/***/ "./img/input-dropdown.svg":
/*!********************************!*\
  !*** ./img/input-dropdown.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/input-dropdown.svg\");\n\n//# sourceURL=webpack:///./img/input-dropdown.svg?");

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

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/logo.svg\");\n\n//# sourceURL=webpack:///./img/logo.svg?");

/***/ }),

/***/ "./img/scroll-arrow.svg":
/*!******************************!*\
  !*** ./img/scroll-arrow.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/scroll-arrow.svg\");\n\n//# sourceURL=webpack:///./img/scroll-arrow.svg?");

/***/ }),

/***/ "./img/smile.svg":
/*!***********************!*\
  !*** ./img/smile.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/smile.svg\");\n\n//# sourceURL=webpack:///./img/smile.svg?");

/***/ }),

/***/ "./img/star-border.jpg":
/*!*****************************!*\
  !*** ./img/star-border.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/star-border.jpg\");\n\n//# sourceURL=webpack:///./img/star-border.jpg?");

/***/ }),

/***/ "./img/star.jpg":
/*!**********************!*\
  !*** ./img/star.jpg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/star.jpg\");\n\n//# sourceURL=webpack:///./img/star.jpg?");

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

/***/ "./img/user.jpg":
/*!**********************!*\
  !*** ./img/user.jpg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/user.jpg\");\n\n//# sourceURL=webpack:///./img/user.jpg?");

/***/ }),

/***/ "./ui-kit-pages/cards/cards.js":
/*!*************************************!*\
  !*** ./ui-kit-pages/cards/cards.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/datepicker/datepicker.js */ \"./blocks/datepicker/datepicker.js\");\n/* harmony import */ var _blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown.js */ \"./blocks/dropdown/dropdown.js\");\n/* harmony import */ var _blocks_room_card_room_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/room-card/room-card.js */ \"./blocks/room-card/room-card.js\");\n\r\n\r\n\r\n\r\n_blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_0__[\"datepickerFunctionality\"]({\r\n  targetClass: \".js-datepicker-4\",\r\n  inputFromClass: \".js-input__field_from-4\",\r\n  inputToClass: \".js-input__field_to-4\"\r\n});\r\n\r\n_blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_0__[\"datepickerFunctionality\"]({\r\n  targetClass: \".js-datepicker-5\",\r\n  inputFromClass: \".js-input__field_from-5\",\r\n  inputToClass: \".js-input__field_to-5\"\r\n});\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field-6\",\r\n  dropdownClass: \".js-dropdown__control-6\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n});\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field-7\",\r\n  dropdownClass: \".js-dropdown__control-7\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n});\r\n\r\n_blocks_room_card_room_card_js__WEBPACK_IMPORTED_MODULE_2__[\"swiperSlider\"]({\r\n  roomCardClass: \".js-room-card\"\r\n});\r\n\r\n_blocks_room_card_room_card_js__WEBPACK_IMPORTED_MODULE_2__[\"swiperSlider\"]({\r\n  roomCardClass: \".js-room-card-2\"\r\n}); \r\n\r\n_blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_0__[\"datepickerFunctionality\"]({\r\n  targetClass: \".js-datepicker\",\r\n  defaultSettings: {\r\n    pickedYear: new Date(2019, 7, 8).getFullYear(),\r\n    pickedMonth: new Date(2019, 7, 8).getMonth(),\r\n    currentDay: new Date(2019, 7, 8),\r\n    from: new Date(2019, 7, 19),\r\n    to: new Date(2019, 7, 23)\r\n  },\r\n});\n\n//# sourceURL=webpack:///./ui-kit-pages/cards/cards.js?");

/***/ }),

/***/ "./ui-kit-pages/form-elements/form-elements.js":
/*!*****************************************************!*\
  !*** ./ui-kit-pages/form-elements/form-elements.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown.js */ \"./blocks/dropdown/dropdown.js\");\n/* harmony import */ var _blocks_list_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/list/list.js */ \"./blocks/list/list.js\");\n/* harmony import */ var _blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/datepicker/datepicker.js */ \"./blocks/datepicker/datepicker.js\");\n/* harmony import */ var _blocks_content_nav_content_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/content-nav/content-nav.js */ \"./blocks/content-nav/content-nav.js\");\n__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n__webpack_require__(/*! inputmask */ \"../node_modules/inputmask/dist/inputmask.js\");\r\n\r\n\r\n\r\n\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field\",\r\n  dropdownClass: \".js-dropdown__control\",\r\n  inputResultTemplate: {type: \"oneByOne\", values: ['спальни', 'кровати']},\r\n  defaultTemplate: \"Конфигурация номера\"\r\n})\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field_2\",\r\n  dropdownClass: \".js-dropdown__control_2\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n})\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field_3\",\r\n  dropdownClass: \".js-dropdown__control_3\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n})\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field_4\",\r\n  dropdownClass: \".js-dropdown__control_4\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n})\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field-5\",\r\n  dropdownClass: \".js-dropdown__control-5\",\r\n  inputResultTemplate: {type: \"sum\", values: 'гостя'},\r\n  defaultTemplate: \"Сколько гостей\"\r\n})\r\n\r\n_blocks_list_list_js__WEBPACK_IMPORTED_MODULE_1__[\"listFunctionality\"] ({\r\n  titleClass: \".js-list__title\",\r\n  listClass: \".js-list__container\"\r\n})\r\n\r\n_blocks_list_list_js__WEBPACK_IMPORTED_MODULE_1__[\"listFunctionality\"] ({\r\n  titleClass: \".js-list__title-2\",\r\n  listClass: \".js-list__container-2\"\r\n})\r\n\r\n_blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_2__[\"datepickerFunctionality\"]({\r\n  targetClass: \".js-datepicker-2\",\r\n  inputFromClass: \".js-input__field_from-2\",\r\n  inputToClass: \".js-input__field_to-2\",\r\n  defaultSettings: {\r\n    pickedYear: new Date(2019, 7, 8).getFullYear(),\r\n    pickedMonth: new Date(2019, 7, 8).getMonth(),\r\n    currentDay: new Date(2019, 7, 8),\r\n    to: new Date(2019, 7, 19)\r\n  },\r\n});\r\n\r\n_blocks_datepicker_datepicker_js__WEBPACK_IMPORTED_MODULE_2__[\"datepickerFunctionality\"]({\r\n  targetClass: \".js-datepicker-3\",\r\n  inputTotalClass: \".js-input__field_total-3\",\r\n  defaultSettings: {\r\n    pickedYear: new Date(2019, 7, 8).getFullYear(),\r\n    pickedMonth: new Date(2019, 7, 8).getMonth(),\r\n    currentDay: new Date(2019, 7, 8),\r\n    from: new Date(2019, 7, 19),\r\n    to: new Date(2019, 7, 23)\r\n  },\r\n});\r\n\r\n$(document).ready(function () {\r\n  $(\".js-slider__body\").slider({\r\n    range : true,\r\n    min: 0,\r\n    max: 15000,\r\n    values: [ 5000, 10000 ],\r\n    slide: function( event, ui ) {\r\n      $(\".js-slider__output\").val(ui.values[ 0 ] + \"₽\" + \" - \" + ui.values[ 1 ] + \"₽\" );\r\n    }\r\n  });\r\n  $(\".js-slider__output\").val( \r\n    \"\" + $(\".js-slider__body\").slider(\r\n    \"values\", 0 ) + \"₽\" + \" - \" + $(\".js-slider__body\").slider(\"values\", 1 ) + \"₽\" );\r\n});\r\n\r\n_blocks_content_nav_content_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"contentNav\"]({\r\n  navClass: \".js-content-nav\"\r\n});\r\n\r\nInputmask({\r\n  mask: '99.99.9999',\r\n  placeholder: 'ДД.ММ.ГГГГ',\r\n}).mask(document.querySelectorAll(\".input__field_type_date\"));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./ui-kit-pages/form-elements/form-elements.js?");

/***/ }),

/***/ "./ui-kit.js":
/*!*******************!*\
  !*** ./ui-kit.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_kit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-kit.scss */ \"./ui-kit.scss\");\n/* harmony import */ var _ui_kit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_kit_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_kit_pages_form_elements_form_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-kit-pages/form-elements/form-elements.js */ \"./ui-kit-pages/form-elements/form-elements.js\");\n/* harmony import */ var _ui_kit_pages_cards_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-kit-pages/cards/cards.js */ \"./ui-kit-pages/cards/cards.js\");\n__webpack_require__(/*! ./img/logo.svg */ \"./img/logo.svg\");\r\n__webpack_require__(/*! ./img/input-dropdown.svg */ \"./img/input-dropdown.svg\");\r\n__webpack_require__(/*! ./img/dropdown-nav.svg */ \"./img/dropdown-nav.svg\");\r\n__webpack_require__(/*! ./img/arrow-forward.svg */ \"./img/arrow-forward.svg\");\r\n__webpack_require__(/*! ./img/check-arrow.jpg */ \"./img/check-arrow.jpg\");\r\n__webpack_require__(/*! ./img/favorite.svg */ \"./img/favorite.svg\");\r\n__webpack_require__(/*! ./img/favorite-border.svg */ \"./img/favorite-border.svg\");\r\n__webpack_require__(/*! ./img/star.jpg */ \"./img/star.jpg\");\r\n__webpack_require__(/*! ./img/star-border.jpg */ \"./img/star-border.jpg\");\r\n__webpack_require__(/*! ./img/user.jpg */ \"./img/user.jpg\");\r\n__webpack_require__(/*! ./img/arrow-forward-white.svg */ \"./img/arrow-forward-white.svg\");\r\n__webpack_require__(/*! ./img/smile.svg */ \"./img/smile.svg\");\r\n__webpack_require__(/*! ./img/house.svg */ \"./img/house.svg\");\r\n__webpack_require__(/*! ./img/scroll-arrow.svg */ \"./img/scroll-arrow.svg\");\r\n__webpack_require__(/*! ./img/888.jpg */ \"./img/888.jpg\");\r\n__webpack_require__(/*! ./img/840.jpg */ \"./img/840.jpg\");\r\n__webpack_require__(/*! ./img/logo-color.svg */ \"./img/logo-color.svg\");\r\n__webpack_require__(/*! ./img/twitter.svg */ \"./img/twitter.svg\");\r\n__webpack_require__(/*! ./img/facebook.svg */ \"./img/facebook.svg\");\r\n__webpack_require__(/*! ./img/instagram.svg */ \"./img/instagram.svg\");\r\n__webpack_require__(/*! ./img/room-slider.jpg */ \"./img/room-slider.jpg\");\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./ui-kit.js?");

/***/ }),

/***/ "./ui-kit.scss":
/*!*********************!*\
  !*** ./ui-kit.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./ui-kit.scss?");

/***/ })

/******/ });