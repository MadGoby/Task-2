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
/******/ 	deferredModules.push(["./search-room.js","vendors~search-room~ui-kit"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/dropdown/dropdown.js":
/*!*************************************!*\
  !*** ./blocks/dropdown/dropdown.js ***!
  \*************************************/
/*! exports provided: dropdownFunctionality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownFunctionality\", function() { return dropdownFunctionality; });\nfunction dropdownFunctionality(settings) {\r\n  const {\r\n    inputClass,\r\n    dropdownClass,\r\n    inputResultTemplate,\r\n    defaultTemplate,\r\n  } = settings;\r\n  \r\n  function getHtmlElements() {\r\n    const input = document.querySelector(inputClass);\r\n    const dropdown = document.querySelector(dropdownClass);\r\n    return {input, dropdown}\r\n  };\r\n\r\n  function writeDefaultValues(dropdown) {\r\n    const defaultValues = [];\r\n\r\n    let outputs = [...dropdown.querySelectorAll(\"output\")];\r\n    outputs.map(function(output) {\r\n      defaultValues.push(output.innerText)  \r\n    })\r\n    \r\n    return defaultValues;\r\n  };\r\n\r\n  const resultElements = getHtmlElements();\r\n  const {input, dropdown} = resultElements;\r\n  const dropdownButtons = [...dropdown.querySelectorAll(\"button\")];\r\n  const defaultValues = writeDefaultValues(dropdown);\r\n\r\n  function bindEventListeners() {\r\n    input.addEventListener(\"click\", discloseDropdown);\r\n    dropdownButtons.map(function(button) {\r\n      button.addEventListener(\"click\", implementsButtonsFunctionality)\r\n    })\r\n  };\r\n\r\n  function discloseDropdown(event) {\r\n    if(dropdown.hasAttribute(\"hidden\")) {\r\n      dropdown.removeAttribute(\"hidden\");\r\n      input.parentNode.parentNode.parentNode.classList.add(\"dropdown__input_expanded\");\r\n    } else {\r\n      dropdown.setAttribute(\"hidden\", \"hidden\");\r\n      input.parentNode.parentNode.parentNode.classList.remove(\"dropdown__input_expanded\");\r\n    };\r\n  };\r\n\r\n  function implementsButtonsFunctionality(event) {\r\n    const button = event.target;\r\n\r\n    function definesModifiesOutput(button) {\r\n      const target = button.getAttribute(\"data-target\");\r\n\r\n      function getDesiredOutput(target) {\r\n        let result;\r\n        [...dropdown.querySelectorAll(\"output\")].map(function(out) {\r\n          if(out.getAttribute(\"data-target\") == target) {result = out};\r\n        });\r\n        return result;\r\n      };\r\n\r\n      const output = getDesiredOutput(target);\r\n      const action = button.getAttribute(\"data-action\");\r\n\r\n      function checkAdditionPossinility(action) {\r\n        return (action === \"plus\") && (Number(output.innerText) < 10)\r\n      };\r\n      function checkSubtractionPossinility(action) {\r\n        return (action === \"minus\") && (Number(output.innerText) > 0)\r\n      };\r\n      function isButtonTransparent(button, action) {\r\n        return (button.classList.contains(\"dropdown__button_transparent\")) && (button.getAttribute(\"data-action\") == action && button.getAttribute(\"data-target\") == target);\r\n      };\r\n\r\n      function removeTransparentClass(action, num, target) {\r\n        if(Number(output.innerText) == num) {\r\n          [...dropdown.querySelectorAll(\"button\")].map(function(button) {\r\n            if(isButtonTransparent(button, action, target)) {\r\n              button.classList.remove(\"dropdown__button_transparent\");\r\n            };\r\n          });\r\n        };\r\n      };\r\n\r\n      if(checkAdditionPossinility(action)) {\r\n        if(Number(output.innerText) == 0) {\r\n          const target = button.getAttribute(\"data-rarget\");\r\n          removeTransparentClass(\"minus\", 0, target);\r\n        };\r\n        output.innerText = Number(output.innerText) + 1;\r\n        input.setAttribute(`data-${target}`, output.innerText);\r\n        if(Number(output.innerText) == 10) {\r\n          button.classList.add('dropdown__button_transparent');\r\n        };\r\n      } else if (checkSubtractionPossinility(action)) {\r\n        if(Number(output.innerText) == 10) {\r\n          const target = button.getAttribute(\"data-rarget\");\r\n          removeTransparentClass(\"plus\", 10, target);\r\n        };\r\n        output.innerText = Number(output.innerText) - 1;\r\n        input.setAttribute(`data-${target}`, output.innerText);\r\n        if(Number(output.innerText) == 0) {\r\n          button.classList.add('dropdown__button_transparent');\r\n        };\r\n      };\r\n    };\r\n    \r\n    function refreshInput(input) {\r\n      function getOutputValues() {\r\n        let result = [];\r\n        let i = 1;\r\n        [...dropdown.querySelectorAll(\"output\")].map(function(output) {\r\n          result.push(Number(output.innerText));\r\n          i++;\r\n        });\r\n        return result;\r\n      }\r\n  \r\n      const outputVal = getOutputValues();\r\n  \r\n      function setToZero(arr) {\r\n        return arr.every(function(val) {\r\n          return val == 0}\r\n        );\r\n      };\r\n      \r\n      if(setToZero(outputVal)) {\r\n        input.setAttribute(\"value\", defaultTemplate);\r\n        dropdownButtons.map(function(button) {\r\n          if (button.getAttribute(\"data-action\") === 'minus') button.classList.add('dropdown__button_transparent');\r\n        });\r\n      } else {\r\n        dropdownButtons.map(function(button) {\r\n          if (button.getAttribute(\"data-target\") === 'clear') button.removeAttribute(\"hidden\")\r\n        });\r\n\r\n        let result = \"\";\r\n        if(inputResultTemplate.type === 'oneByOne') {\r\n          for(let i = 0; i < outputVal.length; i++) {\r\n            if (inputResultTemplate.values.length < outputVal.length && i == Number(inputResultTemplate.values.length - 1)) {\r\n              result += `${outputVal[i]} ${inputResultTemplate.values[i]}...`\r\n              break\r\n            } else {\r\n              result += `${outputVal[i]} ${inputResultTemplate.values[i]}, `\r\n            };\r\n          };\r\n        } else if(inputResultTemplate.type === 'sum') {\r\n          outputVal.map(function(value) {\r\n            result = Number(result) + value;\r\n          });\r\n          result = String(result) + \" \" + String(inputResultTemplate.values)\r\n        };\r\n        input.setAttribute(\"value\", result);\r\n      }\r\n    };\r\n\r\n    function setDefaultValues(dropdown) {\r\n      let outputs = [...dropdown.querySelectorAll(\"output\")];\r\n      let i = 0;\r\n      outputs.map(function(output) {\r\n        output.innerText = defaultValues[i];\r\n        i++\r\n      });\r\n    }\r\n\r\n    if (button.getAttribute(\"data-target\") === \"clear\") {\r\n      setDefaultValues(dropdown)\r\n      refreshInput(input);\r\n      button.setAttribute(\"hidden\", \"hidden\")\r\n    } else if (button.getAttribute(\"data-target\") === \"submit\") {\r\n      discloseDropdown()\r\n    } else {\r\n      definesModifiesOutput(button);\r\n      refreshInput(input);\r\n    };\r\n  };\r\n  bindEventListeners();\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/dropdown/dropdown.js?");

/***/ }),

/***/ "./blocks/list/list.js":
/*!*****************************!*\
  !*** ./blocks/list/list.js ***!
  \*****************************/
/*! exports provided: listFunctionality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listFunctionality\", function() { return listFunctionality; });\nfunction listFunctionality(settings) {\r\n  const {titleClass, listClass} = settings;\r\n  \r\n  function getHtmlElements() {\r\n    const title = document.querySelector(titleClass);\r\n    const list = document.querySelector(listClass);\r\n    return {title, list}\r\n  };\r\n\r\n  const resultElements = getHtmlElements();\r\n  const {title, list} = resultElements;\r\n  \r\n  function bindEventListeners() {\r\n    title.addEventListener(\"click\", discloseList);\r\n  };\r\n\r\n  function discloseList(event) {\r\n    if(list.hasAttribute(\"hidden\")) {\r\n      list.removeAttribute(\"hidden\");\r\n      title.classList.remove(\"title_closed\");\r\n      title.classList.add(\"title_expanded\");\r\n    } else {\r\n      list.setAttribute(\"hidden\", \"hidden\");\r\n      title.classList.remove(\"title_expanded\");\r\n      title.classList.add(\"title_closed\");\r\n    };\r\n  };\r\n  \r\n  bindEventListeners()\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/list/list.js?");

/***/ }),

/***/ "./img/350.jpg":
/*!*********************!*\
  !*** ./img/350.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/350.jpg\");\n\n//# sourceURL=webpack:///./img/350.jpg?");

/***/ }),

/***/ "./img/352.jpg":
/*!*********************!*\
  !*** ./img/352.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/352.jpg\");\n\n//# sourceURL=webpack:///./img/352.jpg?");

/***/ }),

/***/ "./img/444.jpg":
/*!*********************!*\
  !*** ./img/444.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/444.jpg\");\n\n//# sourceURL=webpack:///./img/444.jpg?");

/***/ }),

/***/ "./img/450.jpg":
/*!*********************!*\
  !*** ./img/450.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/450.jpg\");\n\n//# sourceURL=webpack:///./img/450.jpg?");

/***/ }),

/***/ "./img/666.jpg":
/*!*********************!*\
  !*** ./img/666.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/666.jpg\");\n\n//# sourceURL=webpack:///./img/666.jpg?");

/***/ }),

/***/ "./img/678.jpg":
/*!*********************!*\
  !*** ./img/678.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/678.jpg\");\n\n//# sourceURL=webpack:///./img/678.jpg?");

/***/ }),

/***/ "./img/740.jpg":
/*!*********************!*\
  !*** ./img/740.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/740.jpg\");\n\n//# sourceURL=webpack:///./img/740.jpg?");

/***/ }),

/***/ "./img/856.jpg":
/*!*********************!*\
  !*** ./img/856.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/856.jpg\");\n\n//# sourceURL=webpack:///./img/856.jpg?");

/***/ }),

/***/ "./img/980.jpg":
/*!*********************!*\
  !*** ./img/980.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/980.jpg\");\n\n//# sourceURL=webpack:///./img/980.jpg?");

/***/ }),

/***/ "./img/982.jpg":
/*!*********************!*\
  !*** ./img/982.jpg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/982.jpg\");\n\n//# sourceURL=webpack:///./img/982.jpg?");

/***/ }),

/***/ "./search-room.js":
/*!************************!*\
  !*** ./search-room.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-room.scss */ \"./search-room.scss\");\n/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search_room_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/dropdown/dropdown.js */ \"./blocks/dropdown/dropdown.js\");\n/* harmony import */ var _blocks_list_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/list/list.js */ \"./blocks/list/list.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n\r\n__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n\r\n\r\n\r\n__webpack_require__(/*! ./img/980.jpg */ \"./img/980.jpg\");\r\n__webpack_require__(/*! ./img/856.jpg */ \"./img/856.jpg\");\r\n__webpack_require__(/*! ./img/740.jpg */ \"./img/740.jpg\");\r\n__webpack_require__(/*! ./img/982.jpg */ \"./img/982.jpg\");\r\n__webpack_require__(/*! ./img/678.jpg */ \"./img/678.jpg\");\r\n__webpack_require__(/*! ./img/450.jpg */ \"./img/450.jpg\");\r\n__webpack_require__(/*! ./img/350.jpg */ \"./img/350.jpg\");\r\n__webpack_require__(/*! ./img/666.jpg */ \"./img/666.jpg\");\r\n__webpack_require__(/*! ./img/444.jpg */ \"./img/444.jpg\");\r\n__webpack_require__(/*! ./img/352.jpg */ \"./img/352.jpg\");\r\n\r\n_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"dropdownFunctionality\"] ({\r\n  inputClass: \".js-input__field\",\r\n  dropdownClass: \".js-dropdown__control\",\r\n  inputResultTemplate: {type: \"oneByOne\", values: ['спальни', 'кровати']},\r\n  defaultTemplate: \"Конфигурация номера\"\r\n})\r\n\r\n_blocks_list_list_js__WEBPACK_IMPORTED_MODULE_2__[\"listFunctionality\"] ({\r\n  titleClass: \".js-list__title\",\r\n  listClass: \".js-list__container\"\r\n})\r\n\r\n$(document).ready(function () {\r\n  $(\".js-slider__body\").slider({\r\n    range : true,\r\n    min: 0,\r\n    max: 15000,\r\n    values: [ 5000, 10000 ],\r\n    slide: function( event, ui ) {\r\n      $(\".js-slider__output\").val(ui.values[ 0 ] + \"₽\" + \" - \" + ui.values[ 1 ] + \"₽\" );\r\n    }\r\n  });\r\n  $(\".js-slider__output\").val( \r\n    \"\" + $(\".js-slider__body\").slider(\r\n    \"values\", 0 ) + \"₽\" + \" - \" + $(\".js-slider__body\").slider(\"values\", 1 ) + \"₽\" );\r\n});\r\n\r\nfunction sidebarDropdown(settings) {\r\n  const {titleClass, sidebarClass} = settings;\r\n  \r\n  function getHtmlElements() {\r\n    const title = document.querySelector(titleClass);\r\n    const sidebar = document.querySelector(sidebarClass);\r\n    return {title, sidebar}\r\n  };\r\n\r\n  const resultElements = getHtmlElements();\r\n  const {title, sidebar} = resultElements;\r\n  \r\n  function bindEventListeners() {\r\n    title.addEventListener(\"click\", discloseSidebar);\r\n    document.body.onresize = convertPassesVariable;\r\n  };\r\n\r\n  function discloseSidebar(event) {\r\n    if(sidebar.style.display == \"none\") {\r\n      sidebar.style.display = \"inline-block\";\r\n      title.classList.remove(\"title_closed\");\r\n      title.classList.add(\"title_expanded\");\r\n    } else {\r\n      sidebar.style.display = \"none\";\r\n      title.classList.remove(\"title_expanded\");\r\n      title.classList.add(\"title_closed\");\r\n    };\r\n  };\r\n  \r\n  function changeSidebarDisplay(userWidth) {\r\n    if (userWidth > 680 && sidebar.style.display == \"none\") {\r\n      sidebar.style.display = \"block\";\r\n      if(title.classList.contains(\"title_expanded\")) {\r\n        title.classList.remove(\"title_expanded\");\r\n        title.classList.add(\"title_closed\");\r\n      }\r\n    } else if (userWidth < 680) {\r\n      sidebar.style.display = \"none\";\r\n    }; \r\n  }\r\n\r\n  function convertPassesVariable(event) {\r\n    let userWidth = +event.target.innerWidth;\r\n    changeSidebarDisplay(userWidth);\r\n  };\r\n\r\n  changeSidebarDisplay(+document.body.offsetWidth + 17)\r\n  \r\n  bindEventListeners()\r\n};\r\n\r\nsidebarDropdown({\r\n  titleClass: \".js-search-room__sidebar-title\",\r\n  sidebarClass: \".js-search-room__sidebar\"\r\n})\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./search-room.js?");

/***/ }),

/***/ "./search-room.scss":
/*!**************************!*\
  !*** ./search-room.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./search-room.scss?");

/***/ })

/******/ });