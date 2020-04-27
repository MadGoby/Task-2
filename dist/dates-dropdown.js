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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dates-dropdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dates-dropdown.js":
/*!***************************!*\
  !*** ./dates-dropdown.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dates_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates-dropdown.scss */ \"./dates-dropdown.scss\");\n/* harmony import */ var _dates_dropdown_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dates_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\nlet startDate = document.querySelector(\".dropdown-date-label-start\");\r\nlet endDate = document.querySelector(\".dropdown-date-label-end\");\r\nlet datePicker = document.querySelector(\"#dropdown-datepicker-body\");\r\nlet datePickerDisplayPosition = window.getComputedStyle(datePicker).display;\r\nlet startCalLabel = startDate.querySelector('.dropdown-date__text')\r\nlet endCalLabel = endDate.querySelector('.dropdown-date__text')\r\nlet arrivalEventListener = false;\r\nlet departurelEventListener = false;\r\n\r\n// Close and Open Function\r\nstartDate.onclick = function(){\r\n  if ( datePickerDisplayPosition == \"none\" ) {\r\n    datePicker.style.display = \"block\"\r\n    endDate.disabled = true;\r\n    datePicker.addEventListener('click',  startCalLabelFunction)\r\n    arrivalEventListener = true;\r\n    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;\r\n  } else {\r\n    datePicker.style.display = \"none\"\r\n    endDate.disabled = false;\r\n    if (departurelEventListener == true) {\r\n      datePicker.removeEventListener('click', endCalLabelFunction)\r\n      departurelEventListener = false\r\n    } else {\r\n      datePicker.removeEventListener('click',  startCalLabelFunction)\r\n      arrivalEventListener = false\r\n    }\r\n    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;\r\n  }\r\n};\r\n\r\nendDate.onclick = function(){\r\n  if ( datePickerDisplayPosition == \"none\" ) {\r\n    datePicker.style.display = \"block\"\r\n    datePicker.addEventListener('click', endCalLabelFunction)\r\n    departurelEventListener = true\r\n    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;\r\n  } else {\r\n    datePicker.style.display = \"none\"\r\n    if (arrivalEventListener == true) {\r\n      datePicker.removeEventListener('click',  startCalLabelFunction)\r\n      arrivalEventListener = false\r\n    } else {\r\n      datePicker.removeEventListener('click', endCalLabelFunction)\r\n      departurelEventListener = false\r\n    }\r\n    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;\r\n  }\r\n}\r\n\r\n// Calendar Lines\r\nlet calendarLine1 = document.querySelector('.dropdown-datepicker__datepicker-line-1');\r\nlet calendarLine2 = document.querySelector('.dropdown-datepicker__datepicker-line-2')\r\nlet calendarLine3 = document.querySelector('.dropdown-datepicker__datepicker-line-3')\r\nlet calendarLine4 = document.querySelector('.dropdown-datepicker__datepicker-line-4')\r\nlet calendarLine5 = document.querySelector('.dropdown-datepicker__datepicker-line-5')\r\nlet calendarLine6 = document.querySelector('.dropdown-datepicker__datepicker-line-6')\r\n\r\nlet calendarBody = document.querySelector('.dropdown-datepicker__datepicker-body')\r\n\r\n// Making Lines in calendar\r\nlet monthStartDateCounter = 1;\r\nlet tableCounter = 1;\r\nlet emptyTdCounter = 1;\r\n\r\n// Dates\r\nlet monceTitle = document.querySelector('#dropdown-datepicker__monce-year');\r\nlet currentMonth = new Date().getMonth();\r\nlet currentMonthStr = new Date().toLocaleString('ru', { month: 'long' });\r\nlet currentYear = new Date().getFullYear();\r\nlet firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()\r\n\r\n// Days in previous month\r\nlet daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()\r\n// Days in current month\r\nlet daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()\r\n\r\n// Calendar Dates\r\nfunction getDateForCalendar (sign) {\r\n  currentMonth = sign;\r\n  if (currentMonth == -1) {\r\n    currentMonth = 11\r\n    currentYear = currentYear - 1\r\n    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()\r\n    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()\r\n  } else if (currentMonth == 13 || currentMonth == 12) {\r\n    currentMonth = 0\r\n    currentYear = currentYear + 1\r\n    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()\r\n    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()\r\n  } else {\r\n    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()\r\n    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()\r\n  }\r\n}\r\n\r\n// Display Month and Year\r\nfunction displayMonth() {\r\n  currentMonthStr = new Date(currentYear, currentMonth, 1).toLocaleString('ru', {month: 'long'})\r\n  currentMonthStr = currentMonthStr.charAt(0).toUpperCase() + currentMonthStr.slice(1);\r\n  monceTitle.innerHTML = currentMonthStr + \" \" + currentYear\r\n}\r\n// Previous Month Days\r\nfunction previousMonthDays() {\r\n  if (firstMonthDay == 0) {\r\n    firstMonthDay = 7;\r\n  }\r\n  daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()\r\n  daysInPreviousMonth = daysInPreviousMonth - firstMonthDay + 2\r\n\r\n  while(emptyTdCounter < firstMonthDay) {\r\n    let emptyTd = document.createElement('td')\r\n    emptyTd.innerHTML = daysInPreviousMonth\r\n    emptyTd.setAttribute('data-month', currentMonth)\r\n    emptyTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')\r\n    calendarLine1.append(emptyTd)\r\n    daysInPreviousMonth++\r\n    emptyTdCounter++\r\n  }\r\n  tableCounter = emptyTdCounter;\r\n  emptyTdCounter = 1;\r\n}\r\n\r\n// Main Calendar Function\r\nfunction oneCalendarLine(appendanleLine) {\r\n  while (tableCounter <= 7 & monthStartDateCounter <= daysInCurrentMonth) {\r\n    let fullTd = document.createElement('td')\r\n    fullTd.setAttribute('data-month', currentMonth + 1)\r\n    fullTd.innerHTML= monthStartDateCounter;\r\n    if (monthStartDateCounter == new Date().getDate() & currentYear == new Date().getFullYear() & currentMonth == new Date().getMonth()) {\r\n      fullTd.classList.add('dropdown-datepicker__datepicker-body__current-day')\r\n    }\r\n    appendanleLine.append(fullTd)\r\n    monthStartDateCounter++\r\n    tableCounter++\r\n  }\r\n  tableCounter = 1;\r\n}\r\n\r\n// Next Month Days\r\nfunction nextMonthDays() {\r\n  monthStartDateCounter = 1\r\n  if (calendarLine6.childElementCount > 0) {\r\n    let nextMonthDaysCounter = calendarLine6.childElementCount\r\n    while (nextMonthDaysCounter < 7) {\r\n      let fullTd = document.createElement('td')\r\n      fullTd.innerHTML= monthStartDateCounter;\r\n      fullTd.setAttribute('data-month', currentMonth + 2)\r\n      fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')\r\n      calendarLine6.append(fullTd)\r\n      monthStartDateCounter++\r\n      nextMonthDaysCounter++\r\n    }\r\n  }\r\n  let nextMonthDaysCounter = calendarLine5.childElementCount\r\n  while (nextMonthDaysCounter < 7) {\r\n    let fullTd = document.createElement('td')\r\n    fullTd.innerHTML= monthStartDateCounter;\r\n    fullTd.setAttribute('data-month', currentMonth + 2)\r\n    fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')\r\n    calendarLine5.append(fullTd)\r\n    monthStartDateCounter++\r\n    nextMonthDaysCounter++\r\n  }\r\n}\r\n\r\n// Date\r\nfunction calendar() {\r\n  displayMonth()\r\n  previousMonthDays()\r\n  oneCalendarLine(calendarLine1)\r\n  oneCalendarLine(calendarLine2)\r\n  oneCalendarLine(calendarLine3)\r\n  oneCalendarLine(calendarLine4)\r\n  oneCalendarLine(calendarLine5)\r\n  oneCalendarLine(calendarLine6)\r\n  nextMonthDays()\r\n}\r\n\r\ncalendar()\r\n\r\n// Cleaning Function\r\nfunction CleaningOldData() {\r\n  calendarLine1.innerHTML= ''\r\n  calendarLine2.innerHTML= ''\r\n  calendarLine3.innerHTML= ''\r\n  calendarLine4.innerHTML= ''\r\n  calendarLine5.innerHTML= ''\r\n  calendarLine6.innerHTML= ''\r\n}\r\n\r\n// Calendar Next Month Function \r\nlet calendarButtonNext = document.querySelector(\"#dropdown-datepicker__plus-button\")\r\n\r\ncalendarButtonNext.addEventListener('click', function() {\r\n  monthStartDateCounter = 1;\r\n  tableCounter = 1;\r\n  emptyTdCounter = 1;\r\n  getDateForCalendar(currentMonth + 1)\r\n  CleaningOldData()\r\n  calendar()\r\n})\r\n\r\n// Calendar Previous Month Function \r\nlet calendarButtonprevious = document.querySelector(\"#dropdown-datepicker__minus-button\")\r\n\r\ncalendarButtonprevious.addEventListener('click', function() {\r\n  monthStartDateCounter = 1;\r\n  tableCounter = 1;\r\n  emptyTdCounter = 1;\r\n  getDateForCalendar(currentMonth - 1)\r\n  CleaningOldData()\r\n  calendar()\r\n  console.log(firstMonthDay)\r\n})\r\n\r\n// Start Label EventListener\r\nfunction startCalLabelFunction(event) {\r\n  monthStartDateCounter = 1;\r\n  tableCounter = 1;\r\n  emptyTdCounter = 1;\r\n  getDateForCalendar(currentMonth)\r\n  CleaningOldData()\r\n  calendar()\r\n  let pickedDate = event.target.innerHTML\r\n  let pickedMonth = event.target.getAttribute('data-month')\r\n  if (pickedMonth == null) {\r\n      return\r\n  } else {\r\n    startCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;\r\n  }\r\n}\r\n\r\n// End Label EventListener\r\nfunction endCalLabelFunction(event) {\r\n  monthStartDateCounter = 1;\r\n  tableCounter = 1;\r\n  emptyTdCounter = 1;\r\n  getDateForCalendar(currentMonth)\r\n  CleaningOldData()\r\n  calendar()\r\n  let pickedDate = event.target.innerHTML\r\n  let pickedMonth = event.target.getAttribute('data-month')\r\n  if (pickedMonth == null) {\r\n      return\r\n  } else {\r\n    endCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dates-dropdown.js?");

/***/ }),

/***/ "./dates-dropdown.scss":
/*!*****************************!*\
  !*** ./dates-dropdown.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dates-dropdown.scss?");

/***/ })

/******/ });