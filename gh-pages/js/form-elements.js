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
/******/ 	deferredModules.push(["./pages/form-elements/form-elements.js","vendors~cards~form-elements~registration","vendors~form-elements~search-room","cards~content-types~form-elements~headers-footers~index~landing-page~registration~room-details~searc~a0dce885","cards~form-elements~landing-page~room-details~search-room"]);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentNavigation\", function() { return ContentNavigation; });\nclass ContentNavigation {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n\r\n    autoBind(this);\r\n    this.initializes();\r\n  }\r\n\r\n  initializes() {\r\n    this.getHtmlElements();\r\n    this.buttons.forEach((button) => this.bindEventListeners(button));\r\n    this.controlNavigationDisplay();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.buttons = [...this.container.querySelectorAll('.js-content-navigation__button')];\r\n    this.counter = this.container.querySelector('.js-content-navigation__counter');\r\n    this.buttons.forEach((button) => {\r\n      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;\r\n    });\r\n  }\r\n\r\n  controlNavigationDisplay() {\r\n    this.buttons.forEach((elem) => {\r\n      elem.style.display = 'inline-block';\r\n    });\r\n\r\n    const hidesNavigationButtons = (buttonIndex) => {\r\n      buttonIndex.forEach((index) => {\r\n        this.buttons[index].style.display = 'none';\r\n      });\r\n    };\r\n\r\n    const currentPageNumber = this.currentButton.textContent;\r\n\r\n    switch (currentPageNumber) {\r\n      case '1':\r\n        hidesNavigationButtons([0, 2, 5]);\r\n        break;\r\n      case '2':\r\n        hidesNavigationButtons([5, 2]);\r\n        break;\r\n      case '3':\r\n        hidesNavigationButtons([2]);\r\n        break;\r\n      case '13':\r\n        hidesNavigationButtons([6]);\r\n        break;\r\n      case '14':\r\n        hidesNavigationButtons([6, 3]);\r\n        break;\r\n      case '15':\r\n        hidesNavigationButtons([6, 8, 3]);\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  editsCounterValues() {\r\n    const counterTo = this.currentButton.textContent * 12;\r\n    this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;\r\n  }\r\n\r\n  static controlCurrentPageClass(selectedButton) {\r\n    selectedButton.classList.toggle('content-navigation__button_color_purple');\r\n  }\r\n\r\n  controlButtonsNumbers(index, targetNumber, parent) {\r\n    const checkIsNegativeShiftNeeded = () => index === 5 && targetNumber <= 13;\r\n    const checkIsPositiveShiftNeeded = () => index === 3 && targetNumber >= 3;\r\n\r\n    switch (true) {\r\n      case checkIsNegativeShiftNeeded():\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index - 1]);\r\n        this.currentButton = this.buttons[index - 1];\r\n        this.buttons[index - 1].textContent = targetNumber;\r\n        this.buttons[index - 2].textContent = String(targetNumber - 1);\r\n        this.buttons[index].textContent = targetNumber + 1;\r\n        break;\r\n      case checkIsPositiveShiftNeeded():\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index + 1]);\r\n        this.currentButton = this.buttons[index + 1];\r\n        this.buttons[index + 1].textContent = targetNumber;\r\n        this.buttons[index + 2].textContent = targetNumber + 1;\r\n        this.buttons[index].textContent = String(targetNumber - 1);\r\n        break;\r\n      case index === 7:\r\n        ContentNavigation.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index - 2].textContent = String(targetNumber - 1);\r\n        this.buttons[index - 3].textContent = String(targetNumber - 2);\r\n        this.buttons[index - 4].textContent = String(targetNumber - 3);\r\n        break;\r\n      case index === 1:\r\n        ContentNavigation.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index + 2].textContent = targetNumber + 1;\r\n        this.buttons[index + 3].textContent = targetNumber + 2;\r\n        this.buttons[index + 4].textContent = targetNumber + 3;\r\n        break;\r\n      default:\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index]);\r\n        this.currentButton = parent;\r\n        break;\r\n    }\r\n  }\r\n\r\n  prepareDataAfterPrevious() {\r\n    const currentButtonText = Number(this.currentButton.textContent);\r\n    const targetNumber = currentButtonText - 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 15:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText >= 3:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText === 2:\r\n        index = 1;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  }\r\n\r\n  prepareDataAfterNext() {\r\n    const currentButtonText = Number(this.currentButton.textContent);\r\n    const targetNumber = currentButtonText + 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 1:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText <= 13:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText === 14:\r\n        index = 7;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  }\r\n\r\n  handleButtonClick(event) {\r\n    let { target } = event;\r\n    if (target.classList.contains('content-navigation__button_decorative')) return;\r\n\r\n    ContentNavigation.controlCurrentPageClass(this.currentButton);\r\n\r\n    let targetButtonData = {\r\n      index: this.buttons.indexOf(target),\r\n      targetNumber: Number(event.target.textContent),\r\n    };\r\n\r\n    if (target.classList.contains('content-navigation__button_purpose_previous')) {\r\n      targetButtonData = this.prepareDataAfterPrevious();\r\n      target = this.buttons[targetButtonData.index];\r\n    } else if (target.classList.contains('content-navigation__button_purpose_next')) {\r\n      targetButtonData = this.prepareDataAfterNext();\r\n      target = this.buttons[targetButtonData.index];\r\n    }\r\n\r\n    this.controlButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, target);\r\n    this.controlNavigationDisplay();\r\n    this.editsCounterValues();\r\n  }\r\n\r\n  bindEventListeners(button) {\r\n    button.addEventListener('click', this.handleButtonClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/content-navigation/ContentNavigation.js?");

/***/ }),

/***/ "./blocks/input/InputMask.js":
/*!***********************************!*\
  !*** ./blocks/input/InputMask.js ***!
  \***********************************/
/*! exports provided: InputMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputMask\", function() { return InputMask; });\n/* harmony import */ var inputmask_lib_inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask/lib/inputmask */ \"../node_modules/inputmask/lib/inputmask.js\");\n\r\n\r\nclass InputMask {\r\n  constructor(settings) {\r\n    this.containerClass = settings.target;\r\n    this.parameters = settings.parameters;\r\n\r\n    this.getHtmlElements();\r\n    this.initializeInputMask();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.input = this.container.querySelector('.js-input__field');\r\n  }\r\n\r\n  initializeInputMask() {\r\n    Object(inputmask_lib_inputmask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.parameters).mask(this.input);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/input/InputMask.js?");

/***/ }),

/***/ "./blocks/like-button/LikeButton.js":
/*!******************************************!*\
  !*** ./blocks/like-button/LikeButton.js ***!
  \******************************************/
/*! exports provided: LikeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LikeButton\", function() { return LikeButton; });\nclass LikeButton {\r\n  constructor(target) {\r\n    this.contaienrClass = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.contaienrClass}`);\r\n    this.controller = this.container.querySelector('.js-like-button__controller');\r\n    this.counter = this.container.querySelector('.js-like-button__counter');\r\n  }\r\n\r\n  handleControllerChecked(event) {\r\n    const { target } = event;\r\n\r\n    if (target.checked === true) {\r\n      this.counter.textContent = `${Number(this.counter.textContent) + 1}`;\r\n    } else {\r\n      this.counter.textContent = `${Number(this.counter.textContent) - 1}`;\r\n    }\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.controller.addEventListener('change', this.handleControllerChecked);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/like-button/LikeButton.js?");

/***/ }),

/***/ "./blocks/list/List.js":
/*!*****************************!*\
  !*** ./blocks/list/List.js ***!
  \*****************************/
/*! exports provided: ListDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListDropdown\", function() { return ListDropdown; });\nclass ListDropdown {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n    if (!this.list.hasAttribute('hidden')) this.bindDomEventListener();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.list = this.container.querySelector('.js-list__container');\r\n    this.title = this.container.querySelector('.js-list__title');\r\n  }\r\n\r\n  handleTitleClick() {\r\n    if (this.list.hasAttribute('hidden')) {\r\n      this.list.removeAttribute('hidden');\r\n      this.title.classList.remove('list__title_closed');\r\n      this.title.classList.add('list__title_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.list.setAttribute('hidden', 'hidden');\r\n      this.title.classList.remove('list__title_expanded');\r\n      this.title.classList.add('list__title_closed');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find((element) => element === this.container));\r\n    if (result === false) this.handleTitleClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.title.addEventListener('click', this.handleTitleClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/list/List.js?");

/***/ }),

/***/ "./blocks/slider/Slider.js":
/*!*********************************!*\
  !*** ./blocks/slider/Slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n\r\nclass Slider {\r\n  constructor(settings) {\r\n    this.targetClass = settings.targetClass;\r\n    this.options = settings.options;\r\n\r\n    this.initializeElements();\r\n    this.initializeSlider();\r\n  }\r\n\r\n  initializeElements() {\r\n    this.target = document.querySelector(`.${this.targetClass}`);\r\n    this.body = this.target.querySelector('.js-slider__body');\r\n    this.output = this.target.querySelector('.js-slider__output');\r\n  }\r\n\r\n  static addPadding(outputStr) {\r\n    let value = outputStr;\r\n\r\n    if (value.length > 3) {\r\n      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;\r\n    }\r\n\r\n    return value;\r\n  }\r\n\r\n  initializeSlider() {\r\n    const { output } = this;\r\n\r\n    $(this.body).slider(\r\n      $.extend({},\r\n        {\r\n          slide(event, ui) {\r\n            $(output).val(`${Slider.addPadding(String(ui.values[0]))}₽ - ${Slider.addPadding(String(ui.values[1]))}₽`);\r\n          },\r\n        }, this.options),\r\n    );\r\n    const from = String($(this.body).slider('values', 0));\r\n    const to = String($(this.body).slider('values', 1));\r\n\r\n    $(output).val(`${Slider.addPadding(from)}₽ - ${Slider.addPadding(to)}₽`);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./blocks/slider/Slider.js?");

/***/ }),

/***/ "./blocks/stars-rating/StarsRating.js":
/*!********************************************!*\
  !*** ./blocks/stars-rating/StarsRating.js ***!
  \********************************************/
/*! exports provided: StarsRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StarsRating\", function() { return StarsRating; });\nclass StarsRating {\r\n  constructor(target) {\r\n    if (typeof target === 'string') {\r\n      this.containerClass = target;\r\n    } else {\r\n      this.container = target;\r\n    }\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.stars.forEach((star) => this.bindEventListeners(star));\r\n  }\r\n\r\n  getHtmlElements() {\r\n    if (this.containerClass) this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.stars = [...this.container.querySelectorAll('.stars-rating__star')];\r\n  }\r\n\r\n  cleanActiveClass() {\r\n    this.stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));\r\n  }\r\n\r\n  addActiveClass(star) {\r\n    const index = this.stars.indexOf(star);\r\n\r\n    for (let i = 0; i <= index; i += 1) {\r\n      this.stars[i].classList.add('stars-rating__star_color_purple');\r\n    }\r\n  }\r\n\r\n  handleStarClick(event) {\r\n    this.cleanActiveClass();\r\n    this.addActiveClass(event.target);\r\n  }\r\n\r\n  bindEventListeners(star) {\r\n    star.addEventListener('click', this.handleStarClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/stars-rating/StarsRating.js?");

/***/ }),

/***/ "./pages/form-elements/form-elements.js":
/*!**********************************************!*\
  !*** ./pages/form-elements/form-elements.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/dropdown/Dropdown */ \"./blocks/dropdown/Dropdown.js\");\n/* harmony import */ var _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/datepicker/Datepicker */ \"./blocks/datepicker/Datepicker.js\");\n/* harmony import */ var _blocks_stars_rating_StarsRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/stars-rating/StarsRating */ \"./blocks/stars-rating/StarsRating.js\");\n/* harmony import */ var _blocks_slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/slider/Slider */ \"./blocks/slider/Slider.js\");\n/* harmony import */ var _blocks_content_navigation_ContentNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/content-navigation/ContentNavigation */ \"./blocks/content-navigation/ContentNavigation.js\");\n/* harmony import */ var _blocks_list_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/list/List */ \"./blocks/list/List.js\");\n/* harmony import */ var _blocks_input_InputMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/input/InputMask */ \"./blocks/input/InputMask.js\");\n/* harmony import */ var _blocks_like_button_LikeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/like-button/LikeButton */ \"./blocks/like-button/LikeButton.js\");\n/* harmony import */ var _tools_importContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/importContext */ \"./tools/importContext.js\");\n/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-elements.scss */ \"./pages/form-elements/form-elements.scss\");\n/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_form_elements_scss__WEBPACK_IMPORTED_MODULE_9__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_tools_importContext__WEBPACK_IMPORTED_MODULE_8__[\"importContext\"])();\r\n\r\nconst datepickersData = [\r\n  {\r\n    target: 'js-form-elements__date-dropdowns',\r\n    templates: {\r\n      pickedYear: '2019',\r\n      pickedMonth: '7',\r\n      currentDay: '2019, 8, 9',\r\n      dataTo: '2019, 8, 19',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-form-elements__filter-dropdown',\r\n    templates: {\r\n      pickedYear: '2019',\r\n      pickedMonth: '7',\r\n      currentDay: '2019, 8, 9',\r\n      dataFrom: '2019, 8, 19',\r\n      dataTo: '2019, 8, 23',\r\n    },\r\n  },\r\n];\r\n\r\nconst dropdownData = [\r\n  {\r\n    target: 'js-form-elements__dropdown',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'guests',\r\n      },\r\n      outputType: 'sum',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-form-elements__closed-dropdown',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'rooms',\r\n      },\r\n      outputType: 'oneByOne',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-form-elements__expanded-dropdown',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'rooms',\r\n      },\r\n      outputType: 'oneByOne',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-form-elements__guests-dropdown_counter_0',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'guests',\r\n      },\r\n      outputType: 'sum',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-form-elements__guests-dropdown_counter_3',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'guests',\r\n      },\r\n      outputType: 'sum',\r\n    },\r\n  },\r\n];\r\n\r\nconst listElements = [\r\n  'js-form-elements__closed-list',\r\n  'js-form-elements__expanded-list',\r\n];\r\n\r\nconst starsRatingElements = [\r\n  'js-form-elements__rating_number_1',\r\n  'js-form-elements__rating_number_2',\r\n];\r\n\r\nconst likeButtonsElements = [\r\n  'js-form-elements__like_unchecked',\r\n  'js-form-elements__like_checked',\r\n  'js-form-elements__user-comment',\r\n];\r\n\r\nfunction handleDocumentLoad() {\r\n  datepickersData.forEach((settings) => new _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__[\"Datepicker\"](settings));\r\n  dropdownData.forEach((settings) => new _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_0__[\"Dropdown\"](settings));\r\n  starsRatingElements.forEach((target) => new _blocks_stars_rating_StarsRating__WEBPACK_IMPORTED_MODULE_2__[\"StarsRating\"](target));\r\n  listElements.forEach((target) => new _blocks_list_List__WEBPACK_IMPORTED_MODULE_5__[\"ListDropdown\"](target));\r\n  new _blocks_content_navigation_ContentNavigation__WEBPACK_IMPORTED_MODULE_4__[\"ContentNavigation\"]('js-form-elements__pagination');\r\n  new _blocks_slider_Slider__WEBPACK_IMPORTED_MODULE_3__[\"Slider\"]({\r\n    targetClass: 'js-form-elements__slider',\r\n    options: {\r\n      range: true,\r\n      min: 0,\r\n      max: 15000,\r\n      values: [5000, 10000],\r\n    },\r\n  });\r\n  new _blocks_input_InputMask__WEBPACK_IMPORTED_MODULE_6__[\"InputMask\"]({\r\n    target: 'js-form-elements__masked-input',\r\n    parameters: {\r\n      mask: '99.99.9999',\r\n      placeholder: 'ДД.ММ.ГГГГ',\r\n    },\r\n  });\r\n  likeButtonsElements.forEach((target) => new _blocks_like_button_LikeButton__WEBPACK_IMPORTED_MODULE_7__[\"LikeButton\"](target));\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', handleDocumentLoad);\r\n\n\n//# sourceURL=webpack:///./pages/form-elements/form-elements.js?");

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