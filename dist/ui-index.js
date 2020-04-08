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
/******/ 		"ui-index": 0
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
/******/ 	deferredModules.push(["./ui-index.js","vendors~ui-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/arrow_white.svg":
/*!*****************************!*\
  !*** ./img/arrow_white.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/arrow_white.svg\");\n\n//# sourceURL=webpack:///./img/arrow_white.svg?");

/***/ }),

/***/ "./img/star.svg":
/*!**********************!*\
  !*** ./img/star.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/star.svg\");\n\n//# sourceURL=webpack:///./img/star.svg?");

/***/ }),

/***/ "./img/star_border.svg":
/*!*****************************!*\
  !*** ./img/star_border.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/star_border.svg\");\n\n//# sourceURL=webpack:///./img/star_border.svg?");

/***/ }),

/***/ "./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests-dropdown-function.js":
/*!***********************************************************************************************!*\
  !*** ./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests-dropdown-function.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let uiGuestsButton = document.querySelector(\"#ui-dropdown-guests-button\")\r\nlet uiExpendedGuestsBody = document.querySelector(\"#uiGuestsExpendedBody\")\r\nlet uiGuestsBodyBorder = document.querySelector(\"#dropdown-guests_input\")\r\n\r\nlet uiGuestsButton2 = document.querySelector(\"#ui-dropdown-guests-button_2\")\r\nlet uiExpendedGuestsBody2 = document.querySelector(\"#uiGuestsExpendedBody_2\")\r\nlet uiGuestsBodyBorder2 = document.querySelector(\"#dropdown-guests_input_2\")\r\n\r\n\r\n// First dropdown\r\nuiGuestsButton.onclick = function(){\r\n  if (uiExpendedGuestsBody.style.display === \"none\") {\r\n    uiExpendedGuestsBody.style.display = \"block\"\r\n    uiGuestsBodyBorder.style.borderBottom = \"none\"\r\n  } else {\r\n    uiExpendedGuestsBody.style.display = \"none\"\r\n    uiGuestsBodyBorder.style.borderColor = \"rgba(31, 32, 65, 0.25)\"\r\n    uiGuestsBodyBorder.style.borderBottom = \"1px solid rgba(31, 32, 65, 0.25)\"\r\n  }\r\n};\r\n// Second dropdown\r\nuiGuestsButton2.onclick = function(){\r\n  if (uiExpendedGuestsBody2.style.display === \"none\") {\r\n    uiExpendedGuestsBody2.style.display = \"block\"\r\n    uiGuestsBodyBorder2.style.borderColor = \"rgba(31, 32, 65, 0.5)\"\r\n    uiGuestsBodyBorder2.style.borderBottom = \"none\"\r\n  } else {\r\n    uiExpendedGuestsBody2.style.display = \"none\"\r\n    uiGuestsBodyBorder2.style.borderColor = \"rgba(31, 32, 65, 0.25)\"\r\n    uiGuestsBodyBorder2.style.borderBottom = \"1px solid rgba(31, 32, 65, 0.25)\"\r\n  }\r\n};\n\n//# sourceURL=webpack:///./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests-dropdown-function.js?");

/***/ }),

/***/ "./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests_calculation-function.js":
/*!**************************************************************************************************!*\
  !*** ./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests_calculation-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let adultMinus = document.querySelector('#ui-adult-calc-minus-button')\r\nlet adultPlus = document.querySelector('#ui-adult-calc-plus-button')\r\nlet adultOutput = document.querySelector('#ui-output-adult')\r\nlet childrenMinus = document.querySelector('#ui-children-calc-minus-button')\r\nlet childrenPlus = document.querySelector('#ui-children-calc-plus-button')\r\nlet childrenOutput = document.querySelector('#ui-output-children')\r\nlet babyMinus = document.querySelector('#ui-baby-calc-minus-button')\r\nlet babyPlus = document.querySelector('#ui-baby-calc-plus-button')\r\nlet babyOutput = document.querySelector('#ui-output-baby')\r\nlet guestsMainOutput = document.querySelector(\".dropdown-quests_extended\")\r\nlet uiFirstClearButton = document.querySelector(\"#ui-first-guests-clear-button\")\r\n\r\nlet adultMinus2 = document.querySelector('#ui-adult-calc-minus-button_2')\r\nlet adultPlus2 = document.querySelector('#ui-adult-calc-plus-button_2')\r\nlet adultOutput2 = document.querySelector('#ui-output-adult_2')\r\nlet childrenMinus2 = document.querySelector('#ui-children-calc-minus-button_2')\r\nlet childrenPlus2 = document.querySelector('#ui-children-calc-plus-button_2')\r\nlet childrenOutput2 = document.querySelector('#ui-output-children_2')\r\nlet babyMinus2 = document.querySelector('#ui-baby-calc-minus-button_2')\r\nlet babyPlus2 = document.querySelector('#ui-baby-calc-plus-button_2')\r\nlet babyOutput2 = document.querySelector('#ui-output-baby_2')\r\nlet guestsMainOutput2 = document.querySelector(\".dropdown-quests_extended_2\")\r\nlet uiFirstClearButton2 = document.querySelector(\"#ui-first-guests-clear-button_2\")\r\n\r\n// Rooms Dropdown Function\r\n\r\nguestsMainOutput.innerHTML = 'Cколько гостей'\r\nguestsMainOutput2.innerHTML = '3 гостя'\r\n\r\ndocument.addEventListener('click', function(){\r\n// Badrooms calc\r\n\r\n// first\r\n  adultMinus.onclick = function () {\r\n    if (adultOutput.innerHTML == 0) {\r\n        return\r\n    } else if (adultOutput.innerHTML == 1){\r\n        adultMinus.style.opacity = 0.5;\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1\r\n    } else if (adultOutput.innerHTML == 10){\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1\r\n        adultPlus.style.opacity = 1;\r\n    } else {\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  adultPlus.onclick = function () {\r\n    if (adultOutput.innerHTML == 0) {\r\n        adultMinus.style.opacity = 1;\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;\r\n    } else if (adultOutput.innerHTML == 9){\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;\r\n        adultPlus.style.opacity = 0.5;\r\n    } else if (adultOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n  // Second\r\n  adultMinus2.onclick = function () {\r\n    if (adultOutput2.innerHTML == 0) {\r\n        return\r\n    } else if (adultOutput2.innerHTML == 1){\r\n        adultMinus2.style.opacity = 0.5;\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1\r\n    } else if (adultOutput2.innerHTML == 10){\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1\r\n        adultPlus2.style.opacity = 1;\r\n    } else {\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1;\r\n    }\r\n  };\r\n  adultPlus2.onclick = function () {2\r\n    if (adultOutput2.innerHTML == 0) {\r\n        adultMinus2.style.opacity = 1;\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;\r\n    } else if (adultOutput2.innerHTML == 9){\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;\r\n        adultPlus2.style.opacity = 0.5;\r\n    } else if (adultOutput2.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;\r\n    }\r\n  };\r\n// Bads calc\r\n// First\r\n  childrenMinus.onclick = function () {\r\n    if (childrenOutput.innerHTML == 0) {\r\n        return\r\n    } else if (childrenOutput.innerHTML == 1){\r\n        childrenMinus.style.opacity = 0.5;\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1\r\n    } else if (childrenOutput.innerHTML == 10){\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1\r\n        childrenPlus.style.opacity = 1;\r\n    } else {\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  childrenPlus.onclick = function () {\r\n    if (childrenOutput.innerHTML == 0) {\r\n        childrenMinus.style.opacity = 1;\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;\r\n    } else if (childrenOutput.innerHTML == 9){\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;\r\n        childrenPlus.style.opacity = 0.5;\r\n    } else if (childrenOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n  // Second\r\n  childrenMinus2.onclick = function () {\r\n    if (childrenOutput2.innerHTML == 0) {\r\n        return\r\n    } else if (childrenOutput2.innerHTML == 1){\r\n        childrenMinus2.style.opacity = 0.5;\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1\r\n    } else if (childrenOutput2.innerHTML == 10){\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1\r\n        childrenPlus2.style.opacity = 1;\r\n    } else {\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1;\r\n    }\r\n  };\r\n  childrenPlus2.onclick = function () {\r\n    if (childrenOutput2.innerHTML == 0) {\r\n        childrenMinus2.style.opacity = 1;\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;\r\n    } else if (childrenOutput2.innerHTML == 9){\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;\r\n        childrenPlus2.style.opacity = 0.5;\r\n    } else if (childrenOutput2.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;\r\n    }\r\n  };\r\n  // Bathrooms calc\r\n  // First\r\n  babyMinus.onclick = function () {\r\n    if (babyOutput.innerHTML == 0) {\r\n        return\r\n    } else if (babyOutput.innerHTML == 1){\r\n        babyMinus.style.opacity = 0.5;\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1\r\n    } else if (babyOutput.innerHTML == 10){\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1\r\n        babyPlus.style.opacity = 1;\r\n    } else {\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  babyPlus.onclick = function () {\r\n    if (babyOutput.innerHTML == 0) {\r\n        babyMinus.style.opacity = 1;\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;\r\n    } else if (babyOutput.innerHTML == 9){\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;\r\n        babyPlus.style.opacity = 0.5;\r\n    } else if (babyOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n  // Second\r\n  babyMinus2.onclick = function () {\r\n    if (babyOutput2.innerHTML == 0) {\r\n        return\r\n    } else if (babyOutput2.innerHTML == 1){\r\n        babyMinus2.style.opacity = 0.5;\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1\r\n    } else if (babyOutput2.innerHTML == 10){\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1\r\n        babyPlus2.style.opacity = 1;\r\n    } else {\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1;\r\n    }\r\n  };\r\n  babyPlus2.onclick = function () {\r\n    if (babyOutput2.innerHTML == 0) {\r\n        babyMinus2.style.opacity = 1;\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;\r\n    } else if (babyOutput2.innerHTML == 9){\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;\r\n        babyPlus2.style.opacity = 0.5;\r\n    } else if (babyOutput2.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;\r\n    }\r\n  };\r\n  // ClearButton1\r\n  uiFirstClearButton.onclick = function() {\r\n    adultOutput.innerHTML = 0;\r\n    childrenOutput.innerHTML = 0;\r\n    babyOutput.innerHTML = 0;\r\n  }\r\n  // ClearButton1\r\n  uiFirstClearButton2.onclick = function() {\r\n    adultOutput2.innerHTML = 0;\r\n    childrenOutput2.innerHTML = 0;\r\n    babyOutput2.innerHTML = 0;\r\n  }\r\n\r\n  allUiGuests = Number(adultOutput.innerHTML) + Number(childrenOutput.innerHTML) + Number(babyOutput.innerHTML)\r\n  allUiGuests2 = Number(adultOutput2.innerHTML) + Number(childrenOutput2.innerHTML) + Number(babyOutput2.innerHTML)\r\n  \r\n  if (allUiGuests === 0) {\r\n    guestsMainOutput.innerHTML = 'Cколько гостей'\r\n    uiFirstClearButton.style.display= 'none'\r\n  } else {\r\n    guestsMainOutput.innerHTML= allUiGuests + \" гостя\"\r\n    uiFirstClearButton.style.display= 'inline-block';\r\n  }\r\n  if (allUiGuests2 === 0) {\r\n    guestsMainOutput2.innerHTML = 'Cколько гостей'\r\n    uiFirstClearButton2.style.display= 'none'\r\n  } else {\r\n    guestsMainOutput2.innerHTML= allUiGuests2 + \" гостя\"\r\n    uiFirstClearButton2.style.display= 'inline-block';\r\n  }\r\n  \r\n\r\n});\n\n//# sourceURL=webpack:///./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests_calculation-function.js?");

/***/ }),

/***/ "./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_calculation-function.js":
/*!************************************************************************************************!*\
  !*** ./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_calculation-function.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let bedroomMinus = document.querySelector('#ui-bedroom-calc-minus-button')\r\nlet bedroomPlus = document.querySelector('#ui-bedroom-calc-plus-button')\r\nlet bedroomOutput = document.querySelector('#ui-output-bedroom')\r\nlet bedsMinus = document.querySelector('#ui-beds-calc-minus-button')\r\nlet bedsPlus = document.querySelector('#ui-beds-calc-plus-button')\r\nlet bedsOutput = document.querySelector('#ui-output-beds')\r\nlet bathroomMinus = document.querySelector('#ui-bathroom-calc-minus-button')\r\nlet bathroomPlus = document.querySelector('#ui-bathroom-calc-plus-button')\r\nlet bathroomOutput = document.querySelector('#ui-output-bathroom')\r\nlet mainOutput = document.querySelector(\"#dropdown-room-mainOutput\")\r\n\r\n// Rooms Dropdown Function\r\nmainOutput.innerHTML= bedroomOutput.innerHTML + ' спальни, ' + bedsOutput.innerHTML + ' кровати...'\r\n\r\ndocument.addEventListener('click', function(){\r\n// Badrooms calc\r\n  bedroomMinus.onclick = function () {\r\n    if (bedroomOutput.innerHTML == 0) {\r\n        return\r\n    } else if (bedroomOutput.innerHTML == 1){\r\n        bedroomMinus.style.opacity = 0.5;\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1\r\n    } else if (bedroomOutput.innerHTML == 10){\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1\r\n        bedroomPlus.style.opacity = 1;\r\n    } else {\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  bedroomPlus.onclick = function () {\r\n    if (bedroomOutput.innerHTML == 0) {\r\n        bedroomMinus.style.opacity = 1;\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;\r\n    } else if (bedroomOutput.innerHTML == 9){\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;\r\n        bedroomPlus.style.opacity = 0.5;\r\n    } else if (bedroomOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n// Bads calc\r\n  bedsMinus.onclick = function () {\r\n    if (bedsOutput.innerHTML == 0) {\r\n        return\r\n    } else if (bedsOutput.innerHTML == 1){\r\n        bedsMinus.style.opacity = 0.5;\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1\r\n    } else if (bedsOutput.innerHTML == 10){\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1\r\n        bedsPlus.style.opacity = 1;\r\n    } else {\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  bedsPlus.onclick = function () {\r\n    if (bedsOutput.innerHTML == 0) {\r\n        bedsMinus.style.opacity = 1;\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;\r\n    } else if (bedsOutput.innerHTML == 9){\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;\r\n        bedsPlus.style.opacity = 0.5;\r\n    } else if (bedsOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n  // Bathrooms calc\r\n  bathroomMinus.onclick = function () {\r\n    if (bathroomOutput.innerHTML == 0) {\r\n        return\r\n    } else if (bathroomOutput.innerHTML == 1){\r\n        bathroomMinus.style.opacity = 0.5;\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1\r\n    } else if (bathroomOutput.innerHTML == 10){\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1\r\n        bathroomPlus.style.opacity = 1;\r\n    } else {\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1;\r\n    }\r\n  };\r\n  bathroomPlus.onclick = function () {\r\n    if (bathroomOutput.innerHTML == 0) {\r\n        bathroomMinus.style.opacity = 1;\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;\r\n    } else if (bathroomOutput.innerHTML == 9){\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;\r\n        bathroomPlus.style.opacity = 0.5;\r\n    } else if (bathroomOutput.innerHTML == 10) {\r\n        return\r\n    } else {\r\n        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;\r\n    }\r\n  };\r\n\r\n  mainOutput.innerHTML= bedroomOutput.innerHTML + ' спальни, ' + bedsOutput.innerHTML + ' кровати...'\r\n\r\n});\n\n//# sourceURL=webpack:///./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_calculation-function.js?");

/***/ }),

/***/ "./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_dropdown-function.js":
/*!*********************************************************************************************!*\
  !*** ./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_dropdown-function.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let uiRoomsButton = document.querySelector(\"#ui-dropdown-rooms-button\")\r\nlet uiExpendedRoomsBody = document.querySelector(\"#uiRoomsExpendedBody\")\r\nlet uiRoomsBodyBorder = document.querySelector(\"#ui-dropdown-rooms-button_border\")\r\nlet roomsStyle = uiExpendedRoomsBody.style\r\nlet borderButton = uiRoomsBodyBorder.style\r\n\r\nuiRoomsButton.onclick = function(){\r\n  if (roomsStyle.display === \"none\") {\r\n    roomsStyle.display = \"block\"\r\n    borderButton.borderColor = \"rgba(31, 32, 65, 0.5)\"\r\n    borderButton.borderBottom = \"none\"\r\n  } else {\r\n    roomsStyle.display = \"none\"\r\n    borderButton.borderColor = \"rgba(31, 32, 65, 0.25)\"\r\n    borderButton.borderBottom = \"1px solid rgba(31, 32, 65, 0.25)\"\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_dropdown-function.js?");

/***/ }),

/***/ "./ui-blocks/form-elements/fields-toggles-buttons/buttons/range-slider-script.js":
/*!***************************************************************************************!*\
  !*** ./ui-blocks/form-elements/fields-toggles-buttons/buttons/range-slider-script.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {\r\n  $('#range-slider-body').slider({\r\n    range : true,\r\n    min: 0,\r\n    max: 15000,\r\n    values: [ 5000, 10000 ],\r\n    slide: function( event, ui ) {\r\n      $( \"#amount-slider-price\" ).val( ui.values[ 0 ] + \"₽\" + \" - \" + ui.values[ 1 ] + \"₽\" );\r\n    }\r\n  });\r\n  $( \"#amount-slider-price\" ).val( \"\" + $( \"#range-slider-body\" ).slider( \"values\", 0 ) + \"₽\" +\r\n      \" - \" + $( \"#range-slider-body\" ).slider( \"values\", 1 ) + \"₽\" );\r\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./ui-blocks/form-elements/fields-toggles-buttons/buttons/range-slider-script.js?");

/***/ }),

/***/ "./ui-index.js":
/*!*********************!*\
  !*** ./ui-index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-style.scss */ \"./ui-style.scss\");\n/* harmony import */ var _ui_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_blocks_form_elements_fields_toggles_buttons_buttons_range_slider_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-blocks/form-elements/fields-toggles-buttons/buttons/range-slider-script.js */ \"./ui-blocks/form-elements/fields-toggles-buttons/buttons/range-slider-script.js\");\n/* harmony import */ var _ui_blocks_form_elements_fields_toggles_buttons_buttons_range_slider_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_blocks_form_elements_fields_toggles_buttons_buttons_range_slider_script_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_dropdown_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_dropdown-function.js */ \"./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_dropdown-function.js\");\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_dropdown_function_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_dropdown_function_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_calculation_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_calculation-function.js */ \"./ui-blocks/form-elements/dropdown/dropdown-rooms/dropdown-rooms_calculation-function.js\");\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_calculation_function_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_blocks_form_elements_dropdown_dropdown_rooms_dropdown_rooms_calculation_function_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_dropdown_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests-dropdown-function.js */ \"./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests-dropdown-function.js\");\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_dropdown_function_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_dropdown_function_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_calculation_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests_calculation-function */ \"./ui-blocks/form-elements/dropdown/dropdown-quests/dropdown-guests_calculation-function.js\");\n/* harmony import */ var _ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_calculation_function__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui_blocks_form_elements_dropdown_dropdown_quests_dropdown_guests_calculation_function__WEBPACK_IMPORTED_MODULE_5__);\n__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n__webpack_require__(/*! ./img/star.svg */ \"./img/star.svg\");\r\n__webpack_require__(/*! ./img/star_border.svg */ \"./img/star_border.svg\");\r\n__webpack_require__(/*! ./img/arrow_white.svg */ \"./img/arrow_white.svg\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n// -------------------------------------------------------------\n\n//# sourceURL=webpack:///./ui-index.js?");

/***/ }),

/***/ "./ui-style.scss":
/*!***********************!*\
  !*** ./ui-style.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./ui-style.scss?");

/***/ })

/******/ });