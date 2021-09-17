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
/******/ 		"form-elements": 0
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
/******/ 	deferredModules.push(["./pages/form-elements/form-elements.js","vendors~cards~form-elements~registration","vendors~form-elements~search-room","cards~form-elements~landing-page~room-details~search-room"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/content-navigation/ContentNavigation.js":
/*!********************************************************!*\
  !*** ./blocks/content-navigation/ContentNavigation.js ***!
  \********************************************************/
/*! exports provided: ContentNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentNavigation\", function() { return ContentNavigation; });\nclass ContentNavigation {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.initializes();\r\n  }\r\n\r\n  initializes() {\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n    this.controlNavigationDisplay();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.buttons = [...this.container.querySelectorAll('.content-navigation__button')];\r\n    this.counter = this.container.querySelector('.content-navigation__counter');\r\n    this.buttons.forEach((button) => {\r\n      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;\r\n    });\r\n  }\r\n\r\n  controlNavigationDisplay() {\r\n    this.buttons.forEach((elem) => {\r\n      elem.style.display = 'inline-block';\r\n    });\r\n\r\n    const hidesNavigationButtons = (buttonIndex) => {\r\n      buttonIndex.forEach((index) => {\r\n        this.buttons[index].style.display = 'none';\r\n      });\r\n    };\r\n\r\n    const currentPageNumber = this.currentButton.querySelector('.button__control').textContent;\r\n\r\n    switch (currentPageNumber) {\r\n      case '1':\r\n        hidesNavigationButtons([0, 2, 5]);\r\n        break;\r\n      case '2':\r\n        hidesNavigationButtons([5, 2]);\r\n        break;\r\n      case '3':\r\n        hidesNavigationButtons([2]);\r\n        break;\r\n      case '13':\r\n        hidesNavigationButtons([6]);\r\n        break;\r\n      case '14':\r\n        hidesNavigationButtons([6, 3]);\r\n        break;\r\n      case '15':\r\n        hidesNavigationButtons([6, 8, 3]);\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  editsCounterValues() {\r\n    const counterTo = this.currentButton.querySelector('.button__control').textContent * 12;\r\n    this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;\r\n  };\r\n\r\n  // eslint-disable-next-line class-methods-use-this\r\n  controlCurrentPageClass(selectedButton) {\r\n    const currentButton = selectedButton.querySelector('.button__control');\r\n    currentButton.classList.toggle('button__control_color_purple');\r\n  }\r\n\r\n  controlButtonsNumbers(index, targetNumber, parent) {\r\n    switch (true) {\r\n      case index === 5 && targetNumber <= 13:\r\n        this.controlCurrentPageClass(this.buttons[index - 1]);\r\n        this.currentButton = this.buttons[index - 1];\r\n        this.buttons[index - 1].querySelector('.button__control').textContent = targetNumber;\r\n        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        this.buttons[index].querySelector('.button__control').textContent = targetNumber + 1;\r\n        break;\r\n      case index === 3 && targetNumber >= 3:\r\n        this.controlCurrentPageClass(this.buttons[index + 1]);\r\n        this.currentButton = this.buttons[index + 1];\r\n        this.buttons[index + 1].querySelector('.button__control').textContent = targetNumber;\r\n        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;\r\n        this.buttons[index].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        break;\r\n      case index === 7:\r\n        this.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        this.buttons[index - 3].querySelector('.button__control').textContent = String(targetNumber - 2);\r\n        this.buttons[index - 4].querySelector('.button__control').textContent = String(targetNumber - 3);\r\n        break;\r\n      case index === 1:\r\n        this.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;\r\n        this.buttons[index + 3].querySelector('.button__control').textContent = targetNumber + 2;\r\n        this.buttons[index + 4].querySelector('.button__control').textContent = targetNumber + 3;\r\n        break;\r\n      default:\r\n        this.controlCurrentPageClass(this.buttons[index]);\r\n        this.currentButton = parent;\r\n        break;\r\n    }\r\n  };\r\n\r\n  controlPreviousButtonClick() {\r\n    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);\r\n    const targetNumber = currentButtonText - 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 15:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText >= 3:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText === 2:\r\n        index = 1;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  };\r\n\r\n  controlNextButtonClick() {\r\n    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);\r\n    const targetNumber = currentButtonText + 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 1:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText <= 13:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText === 14:\r\n        index = 7;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  };\r\n\r\n  controlNavigationButtonClick(event) {\r\n    let parent = false;\r\n\r\n    function getParent(button) {\r\n      if (button.parentNode.classList.contains('content-navigation__button')) {\r\n        parent = button.parentNode;\r\n      } else {\r\n        getParent(button.parentNode);\r\n      }\r\n    }\r\n\r\n    getParent(event.target);\r\n    if (parent.classList.contains('content-navigation__button_decorative')) return;\r\n    this.controlCurrentPageClass(this.currentButton);\r\n\r\n    let targetButtonData = {\r\n      index: this.buttons.indexOf(parent),\r\n      targetNumber: Number(event.target.textContent),\r\n    };\r\n\r\n    if (parent.classList.contains('content-navigation__button_purpose_previous')) {\r\n      targetButtonData = this.controlPreviousButtonClick();\r\n      parent = this.buttons[targetButtonData.index];\r\n    } else if (parent.classList.contains('content-navigation__button_purpose_next')) {\r\n      targetButtonData = this.controlNextButtonClick();\r\n      parent = this.buttons[targetButtonData.index];\r\n    }\r\n\r\n    this.controlButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, parent);\r\n    this.controlNavigationDisplay();\r\n    this.editsCounterValues();\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.buttons.forEach((button) => {\r\n      button.addEventListener('click', this.controlNavigationButtonClick);\r\n    });\r\n  };\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/content-navigation/ContentNavigation.js?");

/***/ }),

/***/ "./blocks/content-navigation/content-navigation-init.js":
/*!**************************************************************!*\
  !*** ./blocks/content-navigation/content-navigation-init.js ***!
  \**************************************************************/
/*! exports provided: initAllContentNavigations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAllContentNavigations\", function() { return initAllContentNavigations; });\n/* harmony import */ var _ContentNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentNavigation */ \"./blocks/content-navigation/ContentNavigation.js\");\n\r\n\r\nfunction initAllContentNavigations() {\r\n  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {\r\n    new _ContentNavigation__WEBPACK_IMPORTED_MODULE_0__[\"ContentNavigation\"](item);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/content-navigation/content-navigation-init.js?");

/***/ }),

/***/ "./blocks/list/List.js":
/*!*****************************!*\
  !*** ./blocks/list/List.js ***!
  \*****************************/
/*! exports provided: ListDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListDropdown\", function() { return ListDropdown; });\nclass ListDropdown {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.list = this.container.querySelector('.js-list__container');\r\n    this.title = this.container.querySelector('.js-title');\r\n  }\r\n\r\n  changeListDisplay() {\r\n    if (this.list.hasAttribute('hidden')) {\r\n      this.list.removeAttribute('hidden');\r\n      this.title.classList.remove('title_closed');\r\n      this.title.classList.add('title_expanded');\r\n    } else {\r\n      this.list.setAttribute('hidden', 'hidden');\r\n      this.title.classList.remove('title_expanded');\r\n      this.title.classList.add('title_closed');\r\n    }\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.title.addEventListener('click', this.changeListDisplay);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/list/List.js?");

/***/ }),

/***/ "./blocks/list/list-init.js":
/*!**********************************!*\
  !*** ./blocks/list/list-init.js ***!
  \**********************************/
/*! exports provided: initAllLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAllLists\", function() { return initAllLists; });\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./blocks/list/List.js\");\n\r\n\r\nfunction initAllLists() {\r\n  [...document.querySelectorAll('.js-list')].forEach((item) => {\r\n    new _List__WEBPACK_IMPORTED_MODULE_0__[\"ListDropdown\"](item);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/list/list-init.js?");

/***/ }),

/***/ "./blocks/stars-rating/StarsRating.js":
/*!********************************************!*\
  !*** ./blocks/stars-rating/StarsRating.js ***!
  \********************************************/
/*! exports provided: StarsRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StarsRating\", function() { return StarsRating; });\nclass StarsRating {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.stars = [...this.container.querySelectorAll('.stars-rating__star')];\r\n  }\r\n\r\n  cleanActiveClass() {\r\n    this.stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));\r\n  }\r\n\r\n  addActiveClass(star) {\r\n    const index = this.stars.indexOf(star);\r\n\r\n    for (let i = 0; i <= index; i += 1) {\r\n      this.stars[i].classList.add('stars-rating__star_color_purple');\r\n    }\r\n  }\r\n\r\n  controlStarClick(event) {\r\n    const eStar = event.target;\r\n\r\n    this.cleanActiveClass();\r\n    this.addActiveClass(eStar);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.stars.forEach((star) => star.addEventListener('click', this.controlStarClick));\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/stars-rating/StarsRating.js?");

/***/ }),

/***/ "./blocks/stars-rating/stars-rating-init.js":
/*!**************************************************!*\
  !*** ./blocks/stars-rating/stars-rating-init.js ***!
  \**************************************************/
/*! exports provided: initAllStarRatings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAllStarRatings\", function() { return initAllStarRatings; });\n/* harmony import */ var _StarsRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarsRating */ \"./blocks/stars-rating/StarsRating.js\");\n\r\n\r\nfunction initAllStarRatings() {\r\n  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {\r\n    new _StarsRating__WEBPACK_IMPORTED_MODULE_0__[\"StarsRating\"](item);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/stars-rating/stars-rating-init.js?");

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

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/logo.svg\");\n\n//# sourceURL=webpack:///./img/logo.svg?");

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

/***/ "./pages/form-elements/form-elements.js":
/*!**********************************************!*\
  !*** ./pages/form-elements/form-elements.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements.scss */ \"./pages/form-elements/form-elements.scss\");\n/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_elements_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_datepicker_datepicker_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/datepicker/datepicker-init */ \"./blocks/datepicker/datepicker-init.js\");\n/* harmony import */ var _blocks_dropdown_dropdown_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown-init */ \"./blocks/dropdown/dropdown-init.js\");\n/* harmony import */ var _blocks_list_list_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/list/list-init */ \"./blocks/list/list-init.js\");\n/* harmony import */ var _blocks_content_navigation_content_navigation_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/content-navigation/content-navigation-init */ \"./blocks/content-navigation/content-navigation-init.js\");\n/* harmony import */ var _blocks_stars_rating_stars_rating_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/stars-rating/stars-rating-init */ \"./blocks/stars-rating/stars-rating-init.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n__webpack_require__(/*! inputmask */ \"../node_modules/inputmask/dist/inputmask.js\");\r\n__webpack_require__(/*! ../../img/logo.svg */ \"./img/logo.svg\");\r\n__webpack_require__(/*! ../../img/house.svg */ \"./img/house.svg\");\r\n__webpack_require__(/*! ../../img/user.jpg */ \"./img/user.jpg\");\r\n\r\nObject(_blocks_list_list_init__WEBPACK_IMPORTED_MODULE_3__[\"initAllLists\"])();\r\nObject(_blocks_content_navigation_content_navigation_init__WEBPACK_IMPORTED_MODULE_4__[\"initAllContentNavigations\"])();\r\nObject(_blocks_stars_rating_stars_rating_init__WEBPACK_IMPORTED_MODULE_5__[\"initAllStarRatings\"])();\r\nObject(_blocks_dropdown_dropdown_init__WEBPACK_IMPORTED_MODULE_2__[\"initAllDropdowns\"])();\r\nObject(_blocks_datepicker_datepicker_init__WEBPACK_IMPORTED_MODULE_1__[\"initAllDatepickers\"])();\r\n\r\n$(document).ready(() => {\r\n  function addPadding(outputStr) {\r\n    let value = outputStr;\r\n\r\n    if (value.length > 3) {\r\n      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;\r\n    }\r\n\r\n    return value;\r\n  }\r\n\r\n  const $sliderBody = $('.js-slider__body');\r\n\r\n  $sliderBody.slider({\r\n    range: true,\r\n    min: 0,\r\n    max: 15000,\r\n    values: [5000, 10000],\r\n    slide(event, ui) {\r\n      $('.js-slider__output').val(`${addPadding(String(ui.values[0]))}₽ - ${addPadding(String(ui.values[1]))}₽`);\r\n    },\r\n  });\r\n\r\n  const from = String($sliderBody.slider('values', 0));\r\n  const to = String($sliderBody.slider('values', 1));\r\n\r\n  $('.js-slider__output').val(`${addPadding(from)}₽ - ${addPadding(to)}₽`);\r\n});\r\n\r\nInputmask({\r\n  mask: '99.99.9999',\r\n  placeholder: 'ДД.ММ.ГГГГ',\r\n}).mask(document.querySelectorAll('.input__field_type_date'));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./pages/form-elements/form-elements.js?");

/***/ }),

/***/ "./pages/form-elements/form-elements.scss":
/*!************************************************!*\
  !*** ./pages/form-elements/form-elements.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/form-elements/form-elements.scss?");

/***/ })

/******/ });