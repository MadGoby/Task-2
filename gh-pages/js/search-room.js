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
/******/ 		"search-room": 0
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
/******/ 	deferredModules.push(["./pages/search-room/search-room.js","vendors~form-elements~search-room","cards~content-types~form-elements~headers-footers~index~landing-page~registration~room-details~searc~a0dce885","cards~form-elements~landing-page~room-details~search-room","form-elements~search-room"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/header/Header.js":
/*!*********************************!*\
  !*** ./blocks/header/Header.js ***!
  \*********************************/
/*! exports provided: HeaderNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderNavigation\", function() { return HeaderNavigation; });\nclass HeaderNavigation {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.navigation = this.container.querySelector('.js-header__navigation-wrapper');\r\n    this.button = this.container.querySelector('.js-header__navigation-button');\r\n  }\r\n\r\n  handleButtonClick() {\r\n    const styles = getComputedStyle(this.navigation);\r\n\r\n    if (styles.display === 'none') {\r\n      this.navigation.style.display = 'block';\r\n      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.navigation.style.display = 'none';\r\n      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  controlDisplayOnResize(userWidth) {\r\n    const isNeedToBeDisplayed = userWidth > 350 && this.navigation.style.display === 'none';\r\n\r\n    if (isNeedToBeDisplayed) {\r\n      this.navigation.style.display = 'block';\r\n    } else if (userWidth <= 350) {\r\n      this.navigation.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  handleDOMResize(event) {\r\n    const userWidth = Number(event.target.innerWidth);\r\n    this.controlDisplayOnResize(userWidth);\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const checkIsClickInNavigation = (element) => element === this.navigation\r\n      || element === this.button;\r\n    const result = Boolean(event.path.find((element) => checkIsClickInNavigation(element)));\r\n    if (result === false) this.handleButtonClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.button.addEventListener('click', this.handleButtonClick);\r\n    document.body.onresize = this.handleDOMResize;\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/header/Header.js?");

/***/ }),

/***/ "./blocks/room-card/RoomCard.js":
/*!**************************************!*\
  !*** ./blocks/room-card/RoomCard.js ***!
  \**************************************/
/*! exports provided: RoomCardSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomCardSlider\", function() { return RoomCardSlider; });\nclass RoomCardSlider {\r\n  constructor(target) {\r\n    if (typeof target === 'string') {\r\n      this.containerClass = target;\r\n    } else {\r\n      this.container = target;\r\n    }\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    if (this.containerClass) this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.images = [...this.container.querySelectorAll('.room-card__image')];\r\n    this.previousButton = this.container.querySelector('.room-card__image-button_side_left');\r\n    this.nextButton = this.container.querySelector('.room-card__image-button_side_right');\r\n    this.imagePositions = [...this.container.querySelectorAll('.room-card__image-position')];\r\n    [this.currentImage] = this.images;\r\n    [this.currentImagePosition] = this.imagePositions;\r\n    this.currentImage.style.left = '0px';\r\n  }\r\n\r\n  animateSlide(settings) {\r\n    const { leftImage, rightImage, duration } = settings;\r\n    let { index } = settings;\r\n\r\n    if (index < 0) index = 3;\r\n    if (index > 3) index = 0;\r\n\r\n    this.images[index].animate(leftImage, {\r\n      duration,\r\n      easing: 'ease-in-out',\r\n    });\r\n\r\n    this.currentImage.animate(rightImage, {\r\n      duration,\r\n      easing: 'ease-in-out',\r\n    });\r\n\r\n    this.currentImage.style.left = '0px';\r\n    this.images[index].style.left = `${Number(this.container.offsetWidth) + 5}px`;\r\n  }\r\n\r\n  controlAnimateDirection(target, duration) {\r\n    let animationDuration = 500;\r\n    const isDurationSetCorrectly = duration && typeof duration === 'number';\r\n\r\n    if (isDurationSetCorrectly) animationDuration = duration;\r\n\r\n    if (target === 'previous') {\r\n      this.animateSlide({\r\n        leftImage: [{ left: '0px' }, { left: `${this.container.offsetWidth}px` }],\r\n        rightImage: [{ left: `${0 - this.container.offsetWidth}px` }, { left: '0px' }],\r\n        duration: animationDuration,\r\n        index: this.images.indexOf(this.currentImage, 0) + 1,\r\n      });\r\n    } else {\r\n      this.animateSlide({\r\n        leftImage: [{ left: '0px' }, { left: `${0 - this.container.offsetWidth}px` }],\r\n        rightImage: [{ left: `${this.container.offsetWidth}px` }, { left: '0px' }],\r\n        duration: animationDuration,\r\n        index: this.images.indexOf(this.currentImage, 0) - 1,\r\n      });\r\n    }\r\n  }\r\n\r\n  changeImage(button) {\r\n    let index = this.images.indexOf(this.currentImage, 0);\r\n    if (button.classList.contains('room-card__image-button_side_left')) {\r\n      index -= 1;\r\n    } else {\r\n      index += 1;\r\n    }\r\n\r\n    if (index < 0) {\r\n      index = 3;\r\n    } else if (index > 3) {\r\n      index = 0;\r\n    }\r\n\r\n    this.currentImage = this.images[index];\r\n\r\n    this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n    this.currentImagePosition = this.imagePositions[index];\r\n    this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n  }\r\n\r\n  controlImageButtonClick(event) {\r\n    const button = event.target;\r\n\r\n    this.changeImage(button);\r\n\r\n    if (button.classList.contains('room-card__image-button_side_left')) {\r\n      this.controlAnimateDirection('previous');\r\n    } else {\r\n      this.controlAnimateDirection('next');\r\n    }\r\n  }\r\n\r\n  controlMultipleAnimations(first, action, posIndex) {\r\n    let iteration = () => {\r\n      let i;\r\n\r\n      if (action === 'next') {\r\n        i = this.images.indexOf(this.currentImage) + 1;\r\n      } else {\r\n        i = this.images.indexOf(this.currentImage) - 1;\r\n      }\r\n\r\n      this.currentImage = this.images[i];\r\n      this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n      this.currentImagePosition = this.imagePositions[i];\r\n      this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n\r\n      this.controlAnimateDirection(action, 300);\r\n\r\n      if (this.currentImage !== this.images[posIndex]) {\r\n        this.controlMultipleAnimations(false, action, posIndex);\r\n      }\r\n    };\r\n\r\n    iteration = iteration.bind(this);\r\n\r\n    if (first) {\r\n      iteration();\r\n    } else {\r\n      setTimeout(() => iteration(), 300);\r\n    }\r\n  }\r\n\r\n  handleImagePositionClick(event) {\r\n    const posIndex = this.imagePositions.indexOf(event.target);\r\n    let action;\r\n\r\n    if (posIndex > this.images.indexOf(this.currentImage)) {\r\n      action = 'next';\r\n    } else if (posIndex < this.images.indexOf(this.currentImage)) {\r\n      action = 'previous';\r\n    }\r\n\r\n    if (action) this.controlMultipleAnimations(true, action, posIndex);\r\n  }\r\n\r\n  handlePreviousButtonClick(event) {\r\n    this.controlImageButtonClick(event);\r\n  }\r\n\r\n  handleNextButtonClick(event) {\r\n    this.controlImageButtonClick(event);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.previousButton.addEventListener('click', this.handlePreviousButtonClick);\r\n    this.nextButton.addEventListener('click', this.handleNextButtonClick);\r\n    this.imagePositions.forEach((imagePosition) => {\r\n      imagePosition.addEventListener('click', this.handleImagePositionClick);\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/room-card/RoomCard.js?");

/***/ }),

/***/ "./blocks/sidebar/Sidebar.js":
/*!***********************************!*\
  !*** ./blocks/sidebar/Sidebar.js ***!
  \***********************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\nclass Sidebar {\r\n  constructor(target) {\r\n    this.containerClass = target;\r\n\r\n    autoBind(this);\r\n    this.prepareSidebar();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.container = document.querySelector(`.${this.containerClass}`);\r\n    this.title = this.container.querySelector('.js-sidebar__title');\r\n    this.sidebar = this.container.querySelector('.js-sidebar__wrapper');\r\n  }\r\n\r\n  prepareSidebar() {\r\n    this.getHtmlElements();\r\n    this.changeDisplayOnresize(Number(document.body.offsetWidth));\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  handleTitleClick() {\r\n    if (this.sidebar.style.display === 'none') {\r\n      this.sidebar.style.display = 'inline-block';\r\n      this.title.classList.remove('sidebar__title_closed');\r\n      this.title.classList.add('sidebar__title_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.sidebar.style.display = 'none';\r\n      this.title.classList.remove('sidebar__title_expanded');\r\n      this.title.classList.add('sidebar__title_closed');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  removeExpandedClass() {\r\n    const isTitleExpanded = this.title.classList.contains('sidebar__title_expanded');\r\n    if (isTitleExpanded) this.title.classList.remove('sidebar__title_expanded');\r\n    this.title.classList.add('sidebar__title_closed');\r\n  }\r\n\r\n  changeDisplayOnresize(userWidth) {\r\n    const isLessThanLimit = userWidth > 697;\r\n    const notDisplayed = this.sidebar.style.display === 'none';\r\n    const checkNeedDisplay = () => isLessThanLimit && notDisplayed;\r\n\r\n    if (checkNeedDisplay()) {\r\n      this.sidebar.style.display = 'inline-block';\r\n      this.removeExpandedClass();\r\n    } else if (userWidth < 697) {\r\n      this.sidebar.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  handleDOMResize(event) {\r\n    this.changeDisplayOnresize(Number(event.target.innerWidth));\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find((element) => element === this.container));\r\n    if (result === false) this.handleTitleClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.title.addEventListener('click', this.handleTitleClick);\r\n    document.body.onresize = this.handleDOMResize;\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/sidebar/Sidebar.js?");

/***/ }),

/***/ "./pages/search-room/search-room.js":
/*!******************************************!*\
  !*** ./pages/search-room/search-room.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/header/Header */ \"./blocks/header/Header.js\");\n/* harmony import */ var _blocks_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/sidebar/Sidebar */ \"./blocks/sidebar/Sidebar.js\");\n/* harmony import */ var _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/datepicker/Datepicker */ \"./blocks/datepicker/Datepicker.js\");\n/* harmony import */ var _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/dropdown/Dropdown */ \"./blocks/dropdown/Dropdown.js\");\n/* harmony import */ var _blocks_slider_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/slider/Slider */ \"./blocks/slider/Slider.js\");\n/* harmony import */ var _blocks_list_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/list/List */ \"./blocks/list/List.js\");\n/* harmony import */ var _blocks_content_navigation_ContentNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/content-navigation/ContentNavigation */ \"./blocks/content-navigation/ContentNavigation.js\");\n/* harmony import */ var _blocks_room_card_RoomCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/room-card/RoomCard */ \"./blocks/room-card/RoomCard.js\");\n/* harmony import */ var _blocks_stars_rating_StarsRating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/stars-rating/StarsRating */ \"./blocks/stars-rating/StarsRating.js\");\n/* harmony import */ var _tools_importContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/importContext */ \"./tools/importContext.js\");\n/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-room.scss */ \"./pages/search-room/search-room.scss\");\n/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_search_room_scss__WEBPACK_IMPORTED_MODULE_10__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_tools_importContext__WEBPACK_IMPORTED_MODULE_9__[\"importContext\"])();\r\n\r\nconst dropdownData = [\r\n  {\r\n    target: 'js-sidebar__guests',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'guestsWithBaby',\r\n      },\r\n      outputType: 'twoByOne',\r\n    },\r\n  },\r\n  {\r\n    target: 'js-sidebar__room-amenities',\r\n    dataSettings: {\r\n      dataType: {\r\n        name: 'rooms',\r\n      },\r\n      outputType: 'oneByOne',\r\n    },\r\n  },\r\n];\r\n\r\nfunction handleDocumentLoad() {\r\n  dropdownData.forEach((settings) => new _blocks_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"Dropdown\"](settings));\r\n  new _blocks_header_Header__WEBPACK_IMPORTED_MODULE_0__[\"HeaderNavigation\"]('js-search-room-page__header');\r\n  new _blocks_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"Sidebar\"]('js-search-room-page__sidebar-wrapper');\r\n  new _blocks_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_2__[\"Datepicker\"]({\r\n    target: 'js-sidebar__date-filter',\r\n    templates: {\r\n      pickedYear: '2019',\r\n      pickedMonth: '7',\r\n      currentDay: '2019, 8, 9',\r\n      dataFrom: '2019, 8, 19',\r\n      dataTo: '2019, 8, 23',\r\n    },\r\n  });\r\n  new _blocks_slider_Slider__WEBPACK_IMPORTED_MODULE_4__[\"Slider\"]({\r\n    targetClass: 'js-sidebar__slider',\r\n    options: {\r\n      range: true,\r\n      min: 0,\r\n      max: 15000,\r\n      values: [5000, 10000],\r\n    },\r\n  });\r\n  new _blocks_list_List__WEBPACK_IMPORTED_MODULE_5__[\"ListDropdown\"]('js-sidebar__additional-amenities');\r\n  new _blocks_content_navigation_ContentNavigation__WEBPACK_IMPORTED_MODULE_6__[\"ContentNavigation\"]('js-search-room-page__rooms-navigation');\r\n  document.querySelectorAll('.js-room-card').forEach((element) => {\r\n    new _blocks_room_card_RoomCard__WEBPACK_IMPORTED_MODULE_7__[\"RoomCardSlider\"](element);\r\n    new _blocks_stars_rating_StarsRating__WEBPACK_IMPORTED_MODULE_8__[\"StarsRating\"](element);\r\n  });\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', handleDocumentLoad);\r\n\n\n//# sourceURL=webpack:///./pages/search-room/search-room.js?");

/***/ }),

/***/ "./pages/search-room/search-room.scss":
/*!********************************************!*\
  !*** ./pages/search-room/search-room.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/search-room/search-room.scss?");

/***/ })

/******/ });