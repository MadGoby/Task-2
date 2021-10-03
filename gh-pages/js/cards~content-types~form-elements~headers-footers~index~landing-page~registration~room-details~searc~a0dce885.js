(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards~content-types~form-elements~headers-footers~index~landing-page~registration~room-details~searc~a0dce885"],{

/***/ "./blocks sync recursive .scss$|Init.js":
/*!************************************!*\
  !*** ./blocks sync .scss$|Init.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./button/button.scss\": \"./blocks/button/button.scss\",\n\t\"./color-description/color-description.scss\": \"./blocks/color-description/color-description.scss\",\n\t\"./content-navigation/content-navigation.scss\": \"./blocks/content-navigation/content-navigation.scss\",\n\t\"./content-navigation/contentNavigationInit.js\": \"./blocks/content-navigation/contentNavigationInit.js\",\n\t\"./copyright/copyright.scss\": \"./blocks/copyright/copyright.scss\",\n\t\"./datepicker/datepicker.scss\": \"./blocks/datepicker/datepicker.scss\",\n\t\"./datepicker/datepickerInit.js\": \"./blocks/datepicker/datepickerInit.js\",\n\t\"./dropdown/dropdown.scss\": \"./blocks/dropdown/dropdown.scss\",\n\t\"./dropdown/dropdownInit.js\": \"./blocks/dropdown/dropdownInit.js\",\n\t\"./final-booking/final-booking.scss\": \"./blocks/final-booking/final-booking.scss\",\n\t\"./footer/footer.scss\": \"./blocks/footer/footer.scss\",\n\t\"./header/header.scss\": \"./blocks/header/header.scss\",\n\t\"./header/headerInit.js\": \"./blocks/header/headerInit.js\",\n\t\"./impressions-diagram/impressions-diagram.scss\": \"./blocks/impressions-diagram/impressions-diagram.scss\",\n\t\"./input/input.scss\": \"./blocks/input/input.scss\",\n\t\"./list/list.scss\": \"./blocks/list/list.scss\",\n\t\"./list/listInit.js\": \"./blocks/list/listInit.js\",\n\t\"./login/login.scss\": \"./blocks/login/login.scss\",\n\t\"./logo/logo.scss\": \"./blocks/logo/logo.scss\",\n\t\"./navigation/navigation.scss\": \"./blocks/navigation/navigation.scss\",\n\t\"./positive-feature/positive-feature.scss\": \"./blocks/positive-feature/positive-feature.scss\",\n\t\"./registration/registration.scss\": \"./blocks/registration/registration.scss\",\n\t\"./reviews-counter/reviews-counter.scss\": \"./blocks/reviews-counter/reviews-counter.scss\",\n\t\"./room-card/room-card.scss\": \"./blocks/room-card/room-card.scss\",\n\t\"./room-card/roomCardInit.js\": \"./blocks/room-card/roomCardInit.js\",\n\t\"./room-information/room-information.scss\": \"./blocks/room-information/room-information.scss\",\n\t\"./search-room/search-room.scss\": \"./blocks/search-room/search-room.scss\",\n\t\"./sidebar/sidebar.scss\": \"./blocks/sidebar/sidebar.scss\",\n\t\"./sidebar/sidebarInit.js\": \"./blocks/sidebar/sidebarInit.js\",\n\t\"./slider/slider.scss\": \"./blocks/slider/slider.scss\",\n\t\"./slider/sliderInit.js\": \"./blocks/slider/sliderInit.js\",\n\t\"./social-media-link/social-media-link.scss\": \"./blocks/social-media-link/social-media-link.scss\",\n\t\"./stars-rating/stars-rating.scss\": \"./blocks/stars-rating/stars-rating.scss\",\n\t\"./stars-rating/starsRatingInit.js\": \"./blocks/stars-rating/starsRatingInit.js\",\n\t\"./text-sample/text-sample.scss\": \"./blocks/text-sample/text-sample.scss\",\n\t\"./title/title.scss\": \"./blocks/title/title.scss\",\n\t\"./toggle/toggle.scss\": \"./blocks/toggle/toggle.scss\",\n\t\"./user-comment/user-comment.scss\": \"./blocks/user-comment/user-comment.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./blocks sync recursive .scss$|Init.js\";\n\n//# sourceURL=webpack:///./blocks_sync_.scss$%7CInit.js?");

/***/ }),

/***/ "./blocks/button/button.scss":
/*!***********************************!*\
  !*** ./blocks/button/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/button/button.scss?");

/***/ }),

/***/ "./blocks/color-description/color-description.scss":
/*!*********************************************************!*\
  !*** ./blocks/color-description/color-description.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-description/color-description.scss?");

/***/ }),

/***/ "./blocks/content-navigation/ContentNavigation.js":
/*!********************************************************!*\
  !*** ./blocks/content-navigation/ContentNavigation.js ***!
  \********************************************************/
/*! exports provided: ContentNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentNavigation\", function() { return ContentNavigation; });\nclass ContentNavigation {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.initializes();\r\n  }\r\n\r\n  initializes() {\r\n    this.getHtmlElements();\r\n    this.buttons.forEach((button) => this.bindEventListeners(button));\r\n    this.controlNavigationDisplay();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.buttons = [...this.container.querySelectorAll('.content-navigation__button')];\r\n    this.counter = this.container.querySelector('.content-navigation__counter');\r\n    this.buttons.forEach((button) => {\r\n      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;\r\n    });\r\n  }\r\n\r\n  controlNavigationDisplay() {\r\n    this.buttons.forEach((elem) => {\r\n      elem.style.display = 'inline-block';\r\n    });\r\n\r\n    const hidesNavigationButtons = (buttonIndex) => {\r\n      buttonIndex.forEach((index) => {\r\n        this.buttons[index].style.display = 'none';\r\n      });\r\n    };\r\n\r\n    const currentPageNumber = this.currentButton.querySelector('.button__control').textContent;\r\n\r\n    switch (currentPageNumber) {\r\n      case '1':\r\n        hidesNavigationButtons([0, 2, 5]);\r\n        break;\r\n      case '2':\r\n        hidesNavigationButtons([5, 2]);\r\n        break;\r\n      case '3':\r\n        hidesNavigationButtons([2]);\r\n        break;\r\n      case '13':\r\n        hidesNavigationButtons([6]);\r\n        break;\r\n      case '14':\r\n        hidesNavigationButtons([6, 3]);\r\n        break;\r\n      case '15':\r\n        hidesNavigationButtons([6, 8, 3]);\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  editsCounterValues() {\r\n    const counterTo = this.currentButton.querySelector('.button__control').textContent * 12;\r\n    this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;\r\n  };\r\n\r\n\r\n  static controlCurrentPageClass(selectedButton) {\r\n    const currentButton = selectedButton.querySelector('.button__control');\r\n    currentButton.classList.toggle('button__control_color_purple');\r\n  }\r\n\r\n  controlButtonsNumbers(index, targetNumber, parent) {\r\n    const checkIsNegativeShiftNeeded = () => index === 5 && targetNumber <= 13;\r\n    const checkIsPositiveShiftNeeded = () => index === 3 && targetNumber >= 3;\r\n\r\n    switch (true) {\r\n      case checkIsNegativeShiftNeeded():\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index - 1]);\r\n        this.currentButton = this.buttons[index - 1];\r\n        this.buttons[index - 1].querySelector('.button__control').textContent = targetNumber;\r\n        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        this.buttons[index].querySelector('.button__control').textContent = targetNumber + 1;\r\n        break;\r\n      case checkIsPositiveShiftNeeded():\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index + 1]);\r\n        this.currentButton = this.buttons[index + 1];\r\n        this.buttons[index + 1].querySelector('.button__control').textContent = targetNumber;\r\n        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;\r\n        this.buttons[index].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        break;\r\n      case index === 7:\r\n        ContentNavigation.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);\r\n        this.buttons[index - 3].querySelector('.button__control').textContent = String(targetNumber - 2);\r\n        this.buttons[index - 4].querySelector('.button__control').textContent = String(targetNumber - 3);\r\n        break;\r\n      case index === 1:\r\n        ContentNavigation.controlCurrentPageClass(parent);\r\n        this.currentButton = parent;\r\n        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;\r\n        this.buttons[index + 3].querySelector('.button__control').textContent = targetNumber + 2;\r\n        this.buttons[index + 4].querySelector('.button__control').textContent = targetNumber + 3;\r\n        break;\r\n      default:\r\n        ContentNavigation.controlCurrentPageClass(this.buttons[index]);\r\n        this.currentButton = parent;\r\n        break;\r\n    }\r\n  };\r\n\r\n  prepareDataAfterPrevious() {\r\n    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);\r\n    const targetNumber = currentButtonText - 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 15:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText >= 3:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText === 2:\r\n        index = 1;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  };\r\n\r\n  prepareDataAfterNext() {\r\n    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);\r\n    const targetNumber = currentButtonText + 1;\r\n    let index;\r\n\r\n    switch (true) {\r\n      case currentButtonText === 1:\r\n        index = 3;\r\n        break;\r\n      case currentButtonText <= 13:\r\n        index = 5;\r\n        break;\r\n      case currentButtonText === 14:\r\n        index = 7;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    return { index, targetNumber };\r\n  };\r\n\r\n  handleButtonClick(event) {\r\n    let parent = false;\r\n\r\n    function getParent(button) {\r\n      if (button.parentNode.classList.contains('content-navigation__button')) {\r\n        parent = button.parentNode;\r\n      } else {\r\n        getParent(button.parentNode);\r\n      }\r\n    }\r\n\r\n    getParent(event.target);\r\n    if (parent.classList.contains('content-navigation__button_decorative')) return;\r\n    ContentNavigation.controlCurrentPageClass(this.currentButton);\r\n\r\n    let targetButtonData = {\r\n      index: this.buttons.indexOf(parent),\r\n      targetNumber: Number(event.target.textContent),\r\n    };\r\n\r\n    if (parent.classList.contains('content-navigation__button_purpose_previous')) {\r\n      targetButtonData = this.prepareDataAfterPrevious();\r\n      parent = this.buttons[targetButtonData.index];\r\n    } else if (parent.classList.contains('content-navigation__button_purpose_next')) {\r\n      targetButtonData = this.prepareDataAfterNext();\r\n      parent = this.buttons[targetButtonData.index];\r\n    }\r\n\r\n    this.controlButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, parent);\r\n    this.controlNavigationDisplay();\r\n    this.editsCounterValues();\r\n  }\r\n\r\n  bindEventListeners(button) {\r\n    button.addEventListener('click', this.handleButtonClick);\r\n  };\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/content-navigation/ContentNavigation.js?");

/***/ }),

/***/ "./blocks/content-navigation/content-navigation.scss":
/*!***********************************************************!*\
  !*** ./blocks/content-navigation/content-navigation.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/content-navigation/content-navigation.scss?");

/***/ }),

/***/ "./blocks/content-navigation/contentNavigationInit.js":
/*!************************************************************!*\
  !*** ./blocks/content-navigation/contentNavigationInit.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ContentNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentNavigation */ \"./blocks/content-navigation/ContentNavigation.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {\r\n    new _ContentNavigation__WEBPACK_IMPORTED_MODULE_0__[\"ContentNavigation\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\n\n//# sourceURL=webpack:///./blocks/content-navigation/contentNavigationInit.js?");

/***/ }),

/***/ "./blocks/copyright/copyright.scss":
/*!*****************************************!*\
  !*** ./blocks/copyright/copyright.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/copyright/copyright.scss?");

/***/ }),

/***/ "./blocks/datepicker/Datepicker.js":
/*!*****************************************!*\
  !*** ./blocks/datepicker/Datepicker.js ***!
  \*****************************************/
/*! exports provided: Datepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Datepicker\", function() { return Datepicker; });\nclass Datepicker {\r\n  constructor(target, templates) {\r\n    this.container = target;\r\n    this.templates = templates;\r\n    this.settings = { monthRu: templates.monthRu };\r\n\r\n    autoBind(this);\r\n    this.initializes();\r\n  }\r\n\r\n  initializes() {\r\n    this.setDefaultParameters();\r\n    this.getHtmlElements();\r\n    const calendarDays = this.makesCalendarByDate({\r\n      year: this.settings.pickedYear,\r\n      month: this.settings.pickedMonth,\r\n    });\r\n    this.refreshCalendar(calendarDays);\r\n    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);\r\n    this.bindEventListeners();\r\n    this.bindCalendarCellsListener();\r\n  }\r\n\r\n  setDefaultParameters() {\r\n    this.settings.pickedYear = this.templates.pickedYear ? Number(this.templates.pickedYear) : new Date().getFullYear();\r\n    this.settings.pickedMonth = this.templates.pickedMonth ? Number(this.templates.pickedMonth) : new Date().getMonth();\r\n    this.settings.currentDay = this.templates.currentDay ? this.templates.currentDay : new Date();\r\n    this.settings.from = this.templates.dataFrom ? this.templates.dataFrom : false;\r\n    this.settings.to = this.templates.dataTo ? this.templates.dataTo : false;\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.calendarWrapper = this.container.querySelector('.datepicker__calendar-wrapper');\r\n    this.inputFrom = this.container.querySelector('.js-input__field_from');\r\n    this.inputTo = this.container.querySelector('.js-input__field_to');\r\n    this.inputTotal = this.container.querySelector('.js-input__field_total');\r\n    this.buttonPrevious = this.container.querySelector('.js-datepicker__scroll-button_arrow_back');\r\n    this.buttonNext = this.container.querySelector('.js-datepicker__scroll-button_arrow_forward');\r\n    this.selectedMonth = this.container.querySelector('.js-datepicker__selected-month');\r\n    this.calendar = this.container.querySelector('.js-datepicker__calendar');\r\n    this.lines = [...this.container.querySelectorAll('.js-datepicker__calendar-line')];\r\n    this.clearButton = this.container.querySelector('.js-datepicker__clear-button');\r\n    this.applyButton = this.container.querySelector('.js-datepicker__apply-button');\r\n\r\n    if (this.inputTotal) {\r\n      this.currentInputTarget = this.inputTotal;\r\n    } else if (this.inputFrom) {\r\n      this.currentInputTarget = this.inputFrom;\r\n    } else {\r\n      this.currentInputTarget = 'noInput';\r\n    }\r\n\r\n    if (this.calendarWrapper.classList.contains('datepicker__calendar-wrapper_size_small')) {\r\n      this.size = 'small';\r\n    } else {\r\n      this.size = false;\r\n    }\r\n    this.currentValueTarget = 'from';\r\n  }\r\n\r\n  static checkIsMatchByDay(day, targetDate) {\r\n    return (\r\n      day.getFullYear() === targetDate.getFullYear() &&\r\n      day.getMonth() === targetDate.getMonth() &&\r\n      day.getDate() === targetDate.getDate()\r\n    );\r\n  }\r\n\r\n  checkIsCurrentDate(targetDate) {\r\n    return Datepicker.checkIsMatchByDay(this.settings.currentDay, targetDate);\r\n  }\r\n\r\n  checkIsFromDate(targetDate) {\r\n    return this.settings.from && Datepicker.checkIsMatchByDay(this.settings.from, targetDate);\r\n  }\r\n\r\n  checkIsToDate(targetDate) {\r\n    return this.settings.to && Datepicker.checkIsMatchByDay(this.settings.to, targetDate);\r\n  }\r\n\r\n  checkAreInSelectedRange(targetDate) {\r\n    return targetDate >= this.settings.from && targetDate <= this.settings.to;\r\n  }\r\n\r\n  checkAreInUnavailableRange(targetDate) {\r\n    return targetDate >= this.settings.currentDay && targetDate <= this.settings.from;\r\n  }\r\n\r\n  checkIsLessThenCurrent(targetDate) {\r\n    return targetDate < this.settings.currentDay;\r\n  }\r\n\r\n  highlightsUnavailableDates(cell, targetDate) {\r\n    const isCurrent = Datepicker.checkIsMatchByDay(this.settings.currentDay, targetDate);\r\n    const isFrom = Datepicker.checkIsMatchByDay(this.settings.from, targetDate);\r\n\r\n    switch (true) {\r\n      case isCurrent:\r\n        cell.classList.add('datepicker__calendar-cell_right-half_red');\r\n        break;\r\n      case isFrom:\r\n        cell.classList.add('datepicker__calendar-cell_left-half_red');\r\n        break;\r\n      case this.checkAreInUnavailableRange(targetDate):\r\n        cell.classList.add('datepicker__calendar-cell_shading_red');\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n    return cell;\r\n  }\r\n\r\n  highlightsSelectedRange(cell, targetDate) {\r\n    const isStartOfRange = this.checkAreInSelectedRange(targetDate) &&\r\n      Datepicker.checkIsMatchByDay(this.settings.from, targetDate);\r\n    const isEndOfRange = this.checkAreInSelectedRange(targetDate) &&\r\n      Datepicker.checkIsMatchByDay(this.settings.to, targetDate);\r\n\r\n    switch (true) {\r\n      case isStartOfRange:\r\n        cell.classList.add('datepicker__calendar-cell_right-half_purple');\r\n        break;\r\n      case isEndOfRange:\r\n        cell.classList.add('datepicker__calendar-cell_left-half_purple');\r\n        break;\r\n      case this.checkAreInSelectedRange(targetDate):\r\n        cell.classList.add('datepicker__calendar-cell_shading_purple');\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n    return cell;\r\n  }\r\n\r\n  makeCalendarCell(date, targetMonth) {\r\n    let calendarCell = document.createElement('td');\r\n    calendarCell.classList.add('datepicker__calendar-cell');\r\n    if (this.size === 'small') calendarCell.classList.add('datepicker__calendar-cell_size_small');\r\n\r\n    if (targetMonth === 'next') {\r\n      calendarCell.classList.add('datepicker__calendar-cell_transparent');\r\n      calendarCell.setAttribute('data-month', 'next');\r\n    } else if (targetMonth === 'previous') {\r\n      calendarCell.classList.add('datepicker__calendar-cell_transparent');\r\n      calendarCell.setAttribute('data-month', 'previous');\r\n    }\r\n\r\n    const isRangeExist = this.settings.from && this.settings.to;\r\n    const isOnlyForm = this.settings.from && !this.settings.to;\r\n\r\n    if (this.checkIsLessThenCurrent(date)) calendarCell.classList.add('datepicker__calendar-cell_shading_red');\r\n    if (this.checkIsCurrentDate(date)) {\r\n      calendarCell.classList.add('datepicker__calendar-cell_color_green');\r\n      calendarCell.classList.add('datepicker__calendar-cell_left-half_red');\r\n    }\r\n    if (this.checkIsFromDate(date)) calendarCell.classList.add('datepicker__calendar-cell_color_purple');\r\n    if (this.checkIsToDate(date)) calendarCell.classList.add('datepicker__calendar-cell_color_purple');\r\n    if (isOnlyForm) calendarCell = this.highlightsUnavailableDates(calendarCell, date);\r\n    if (isRangeExist) calendarCell = this.highlightsSelectedRange(calendarCell, date);\r\n\r\n    calendarCell.innerText = date.getDate();\r\n    return calendarCell;\r\n  };\r\n\r\n  getPreviousMonthDays(year, month) {\r\n    const days = [];\r\n    const previousDay = new Date(year, month, 0).getDay();\r\n\r\n    for (let i = previousDay - 1; i >= 0; i -= 1) {\r\n      const date = new Date(year, month, -i);\r\n      days.push(this.makeCalendarCell(date, 'previous'));\r\n    }\r\n\r\n    return days;\r\n  };\r\n\r\n  getCurrentMonthDays(year, month) {\r\n    const days = [];\r\n    const lastDay = new Date(year, month + 1, 0).getDate();\r\n\r\n    for (let i = 1; i <= lastDay; i += 1) {\r\n      const date = new Date(year, month, i);\r\n      days.push(this.makeCalendarCell(date, false));\r\n    }\r\n\r\n    return days;\r\n  };\r\n\r\n  getNextMonthDays(year, month) {\r\n    const days = [];\r\n    let nextMonthDay = new Date(year, month + 1).getDay();\r\n    let day = 1;\r\n    if (nextMonthDay === 0) nextMonthDay = 7;\r\n\r\n    for (let i = nextMonthDay; i <= 7; i += 1) {\r\n      const date = new Date(year, month + 1, day);\r\n      days.push(this.makeCalendarCell(date, 'next'));\r\n      day += 1;\r\n    }\r\n\r\n    return days;\r\n  };\r\n\r\n  makesCalendarByDate(data) {\r\n    const { year, month } = data;\r\n    let calendarDays = [];\r\n    const checkIsNeedPreviousMonth = () => new Date(year, month).getDay() !== 1;\r\n    const checkIsNeedNextMonth = () => new Date(year, month + 1, 0).getDay() !== 0;\r\n\r\n\r\n    if (checkIsNeedPreviousMonth()) calendarDays = calendarDays.concat(this.getPreviousMonthDays(year, month));\r\n    calendarDays = calendarDays.concat(this.getCurrentMonthDays(year, month));\r\n    if (checkIsNeedNextMonth()) calendarDays = calendarDays.concat(this.getNextMonthDays(year, month));\r\n\r\n    return calendarDays;\r\n  }\r\n\r\n  refreshCalendar(days) {\r\n    let line = 0;\r\n    let i = 0;\r\n\r\n    days.forEach(() => {\r\n      this.lines[line].append(days[i]);\r\n      i += 1;\r\n      if (i % 7 === 0 && i !== 0) line += 1;\r\n    });\r\n  }\r\n\r\n  clearCalendar() {\r\n    this.lines.forEach((line) => {\r\n      line.innerHTML = '';\r\n    });\r\n  }\r\n\r\n  refreshSelectedMonth(month, year) {\r\n    this.selectedMonth.innerText = `${this.settings.monthRu[month]} ${year}`;\r\n  }\r\n\r\n  passedValueToFrom(settings) {\r\n    const { pickedDate, value, date } = settings;\r\n    if (pickedDate <= this.settings.currentDay) return false;\r\n\r\n    this.currentInputTarget.setAttribute('value', value);\r\n    this.settings.from = new Date(date.year, date.month - 1, Number(date.day));\r\n\r\n    if (pickedDate > this.settings.to) {\r\n      this.inputTo.setAttribute('value', '');\r\n      this.settings.to = undefined;\r\n    }\r\n\r\n    this.currentInputTarget = this.inputTo;\r\n    return true;\r\n  }\r\n\r\n  passedValueToTo(settings) {\r\n    const { pickedDate, value, date } = settings;\r\n    const checkIsToLessThenFrom = () => this.settings.from && pickedDate <= this.settings.from;\r\n    if (checkIsToLessThenFrom()) return false;\r\n\r\n    this.currentInputTarget.setAttribute('value', value);\r\n    this.settings.to = new Date(date.year, date.month - 1, Number(date.day));\r\n    this.currentInputTarget = this.inputFrom;\r\n\r\n    return true;\r\n  }\r\n\r\n  passedValueToTotal(settings) {\r\n    const { pickedDate, date } = settings;\r\n\r\n    const checkIsFromLessCurrentDay = () => this.currentValueTarget === 'from' && pickedDate <= this.settings.currentDay;\r\n    const checkIsToLessThenFrom = () => this.currentValueTarget === 'to' &&\r\n      this.settings.from &&\r\n      pickedDate <= this.settings.from;\r\n    const isValidationPassed = checkIsFromLessCurrentDay() || checkIsToLessThenFrom();\r\n    if (isValidationPassed) return false;\r\n\r\n    const refreshFrom = () => {\r\n      this.settings.from = new Date(date.year, date.month - 1, Number(date.day));\r\n      this.currentValueTarget = 'to';\r\n      if (pickedDate > this.settings.to) this.settings.to = undefined;\r\n    };\r\n\r\n    if (this.currentValueTarget === 'from') {\r\n      refreshFrom();\r\n    } else {\r\n      this.settings.to = new Date(date.year, date.month - 1, Number(date.day));\r\n      this.currentValueTarget = 'from';\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  updateTotalInput() {\r\n    const getLowerMonth = (month) => this.settings.monthRu[month].slice(0, 3).toLowerCase();\r\n\r\n    const transformedFrom = `${this.settings.from.getDate()} ${getLowerMonth(this.settings.from.getMonth())}`;\r\n    let transformedTo = '...';\r\n\r\n    if (this.settings.to) {\r\n      transformedTo = `${this.settings.to.getDate()} ${getLowerMonth(this.settings.to.getMonth())}`;\r\n    }\r\n\r\n    const mainValue = `${transformedFrom} - ${transformedTo}`;\r\n    this.currentInputTarget.setAttribute('value', mainValue);\r\n  }\r\n\r\n  checkDateForValidity(value, date) {\r\n    const pickedDate = new Date(date.year, date.month - 1, date.day);\r\n    const isCurrentTotal = this.currentInputTarget === this.inputTotal;\r\n    const isNeedTotalRefresh = (result) => isCurrentTotal && result;\r\n    let result;\r\n\r\n    switch (true) {\r\n      case this.currentInputTarget === this.inputFrom:\r\n        result = this.passedValueToFrom({ pickedDate, value, date });\r\n        break;\r\n      case this.currentInputTarget === this.inputTo:\r\n        result = this.passedValueToTo({ pickedDate, value, date });\r\n        break;\r\n      default:\r\n        result = this.passedValueToTotal({ pickedDate, value, date });\r\n        if (isNeedTotalRefresh(result)) this.updateTotalInput();\r\n        break;\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  definesCellMonth(target) {\r\n    let result;\r\n    switch (true) {\r\n      case target.getAttribute('data-month') === 'next':\r\n        result = this.settings.pickedMonth + 2;\r\n        break;\r\n      case target.getAttribute('data-month') === 'previous':\r\n        result = this.settings.pickedMonth;\r\n        break;\r\n      default:\r\n        result = this.settings.pickedMonth + 1;\r\n        break;\r\n    }\r\n    return result;\r\n  }\r\n\r\n  static bringToTwoDigits(settings) {\r\n    let { value } = settings;\r\n    if (value < 10) value = `0${value}`;\r\n    return value;\r\n  }\r\n\r\n  bindCalendarCellsListener() {\r\n    const calendarCells = [...this.calendar.querySelectorAll('.datepicker__calendar-cell')];\r\n\r\n    calendarCells.forEach((cell) => {\r\n      cell.addEventListener('click', this.handleCalendarCellClick);\r\n    });\r\n  }\r\n\r\n  handleCalendarCellClick(event) {\r\n    const { target } = event;\r\n    const date = {\r\n      day: Datepicker.bringToTwoDigits({ value: Number(target.innerText) }),\r\n      month: Datepicker.bringToTwoDigits({ value: Number(this.definesCellMonth(target)) }),\r\n      year: this.settings.pickedYear,\r\n    };\r\n    const value = `${date.day}.${date.month}.${date.year}`;\r\n    const result = this.checkDateForValidity(value, date);\r\n\r\n    if (result) {\r\n      this.settings.pickedYear = new Date(this.settings.pickedYear, this.settings.pickedMonth).getFullYear();\r\n      this.settings.pickedMonth = new Date(this.settings.pickedYear, this.settings.pickedMonth).getMonth();\r\n      this.clearCalendar();\r\n      const days = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });\r\n      this.refreshCalendar(days);\r\n      this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);\r\n    }\r\n\r\n    this.bindCalendarCellsListener();\r\n  }\r\n\r\n  refreshDatepicker(date) {\r\n    this.settings.pickedYear = date.getFullYear();\r\n    this.settings.pickedMonth = date.getMonth();\r\n    this.clearCalendar();\r\n    const days = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });\r\n    this.refreshCalendar(days);\r\n    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);\r\n    this.bindCalendarCellsListener();\r\n  }\r\n\r\n  handleButtonNextClick() {\r\n    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) + 1);\r\n    this.refreshDatepicker(newDate);\r\n  }\r\n\r\n  handleButtonPreviousClick() {\r\n    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) - 1);\r\n    this.refreshDatepicker(newDate);\r\n  }\r\n\r\n  checkAreInputsExists() {\r\n    return this.inputTotal || this.inputFrom || this.inputTo;\r\n  }\r\n\r\n  resetsInputsToDefault() {\r\n    if (this.currentInputTarget === this.inputTotal) {\r\n      this.inputTotal.setAttribute('value', 'ДД.ММ - ДД.ММ');\r\n    } else {\r\n      this.inputFrom.setAttribute('value', 'ДД.ММ.ГГГГ');\r\n      this.inputTo.setAttribute('value', 'ДД.ММ.ГГГГ');\r\n      this.currentInputTarget = this.inputFrom;\r\n    }\r\n  }\r\n\r\n  handleClearButtonClick() {\r\n    if (this.settings.from) this.settings.from = undefined;\r\n    if (this.settings.to) this.settings.to = undefined;\r\n\r\n    if (this.checkAreInputsExists()) this.resetsInputsToDefault();\r\n\r\n    this.currentValueTarget = 'from';\r\n    this.refreshDatepicker(new Date(this.settings.pickedYear, this.settings.pickedMonth));\r\n  }\r\n\r\n  handleApplyButtonClick() {\r\n    if (this.checkAreInputsExists()) this.calendarWrapper.setAttribute('hidden', 'hidden');\r\n    if (this.inputFrom) this.inputFrom.classList.remove('input__field_active');\r\n    if (this.inputTo) this.inputTo.classList.remove('input__field_active');\r\n    if (this.inputTotal) this.inputTotal.classList.remove('input__field_active');\r\n    this.removeDomEventListener();\r\n  }\r\n\r\n  handleInputClick() {\r\n    if (this.calendarWrapper.hasAttribute('hidden')) {\r\n      this.calendarWrapper.removeAttribute('hidden', 'hidden');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.calendarWrapper.setAttribute('hidden', 'hidden');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  handleInputFromClick() {\r\n    this.handleInputClick();\r\n  }\r\n\r\n  handleInputToClick() {\r\n    this.handleInputClick();\r\n  }\r\n\r\n  handleInputTotalClick() {\r\n    this.handleInputClick();\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find(element => element === this.container));\r\n    if (result === false) this.handleInputClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.buttonPrevious.addEventListener('click', this.handleButtonPreviousClick);\r\n    this.buttonNext.addEventListener('click', this.handleButtonNextClick);\r\n    this.clearButton.addEventListener('click', this.handleClearButtonClick);\r\n    this.applyButton.addEventListener('click', this.handleApplyButtonClick);\r\n    if (this.inputFrom) this.inputFrom.addEventListener('click', this.handleInputFromClick);\r\n    if (this.inputTo) this.inputTo.addEventListener('click', this.handleInputToClick);\r\n    if (this.inputTotal) this.inputTotal.addEventListener('click', this.handleInputTotalClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/datepicker/Datepicker.js?");

/***/ }),

/***/ "./blocks/datepicker/datepicker.scss":
/*!*******************************************!*\
  !*** ./blocks/datepicker/datepicker.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/datepicker/datepicker.scss?");

/***/ }),

/***/ "./blocks/datepicker/datepickerInit.js":
/*!*********************************************!*\
  !*** ./blocks/datepicker/datepickerInit.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datepicker */ \"./blocks/datepicker/Datepicker.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-datepicker')].forEach((container) => {\r\n    const settings = {\r\n      monthRu: [\r\n        'Январь',\r\n        'Февраль',\r\n        'Март',\r\n        'Апрель',\r\n        'Май',\r\n        'Июнь',\r\n        'Июль',\r\n        'Август',\r\n        'Сентябрь',\r\n        'Октябрь',\r\n        'Ноябрь',\r\n        'Декабрь',\r\n      ],\r\n    };\r\n    if (container.hasAttribute('data-year')) settings.pickedYear = container.getAttribute('data-year');\r\n    if (container.hasAttribute('data-month')) settings.pickedMonth = container.getAttribute('data-month');\r\n    if (container.hasAttribute('data-day')) settings.currentDay = new Date(container.getAttribute('data-day'));\r\n    if (container.hasAttribute('data-from')) settings.dataFrom = new Date(container.getAttribute('data-from'));\r\n    if (container.hasAttribute('data-to')) settings.dataTo = new Date(container.getAttribute('data-to'));\r\n    new _Datepicker__WEBPACK_IMPORTED_MODULE_0__[\"Datepicker\"](container, settings);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/datepicker/datepickerInit.js?");

/***/ }),

/***/ "./blocks/dropdown/Dropdown.js":
/*!*************************************!*\
  !*** ./blocks/dropdown/Dropdown.js ***!
  \*************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dropdown\", function() { return Dropdown; });\nclass Dropdown {\r\n  constructor(settings) {\r\n    this.container = settings.container;\r\n    this.templates = settings.templates;\r\n\r\n    autoBind(this);\r\n    this.initializes();\r\n  }\r\n\r\n  initializes() {\r\n    this.getHtmlElements();\r\n    this.checkClearButtonVisibility();\r\n    this.bindEventListeners();\r\n    this.refreshInput();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.input = this.container.querySelector('.js-input__field');\r\n    this.dropdown = this.container.querySelector('.js-dropdown__control');\r\n    this.plusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(\r\n      (button) => button.getAttribute('data-action') === 'plus',\r\n    );\r\n    this.minusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(\r\n      (button) => button.getAttribute('data-action') === 'minus',\r\n    );\r\n    this.outputs = [...this.container.querySelectorAll('.dropdown__output')];\r\n    this.clearButton = this.container.querySelector('.dropdown__clear-button');\r\n    this.submitButton = this.container.querySelector('.dropdown__submit-button');\r\n  }\r\n\r\n  checkClearButtonVisibility() {\r\n    function isPositive(number) {\r\n      return number > 0;\r\n    }\r\n\r\n    const isNeedToDisplay = this.outputs.some((output) => isPositive(output.textContent));\r\n    const isNeedToHide = this.clearButton.hasAttribute('hidden') === false;\r\n\r\n    if (isNeedToDisplay) {\r\n      this.clearButton.style.display = 'inline-block';\r\n    } else if (isNeedToHide) {\r\n      this.clearButton.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  controlDropdownDisplay() {\r\n    this.dropdown.toggleAttribute('hidden');\r\n    this.input.classList.toggle('input__field_expanded');\r\n\r\n    if (this.dropdown.hasAttribute('hidden')) {\r\n      this.removeDomEventListener();\r\n    } else {\r\n      this.bindDomEventListener();\r\n    }\r\n  }\r\n\r\n  definesWordEnd(value, template, line) {\r\n    function checkIsEqualToZero(num) {\r\n      return num % 10 === 0;\r\n    }\r\n\r\n    function checksComplianceFromOneToFour() {\r\n      return checkIsEqualToZero(value - 2) ||\r\n        checkIsEqualToZero(value - 3) ||\r\n        checkIsEqualToZero(value - 4);\r\n    }\r\n\r\n    let index;\r\n    const isMinimumValue = value === 1 || checkIsEqualToZero(value - 1);\r\n    const isInMiddleRange = value > 4 && value < 21;\r\n\r\n    switch (true) {\r\n      case isInMiddleRange:\r\n        index = 3;\r\n        break;\r\n      case isMinimumValue:\r\n        index = 1;\r\n        break;\r\n      case checksComplianceFromOneToFour():\r\n        index = 2;\r\n        break;\r\n      default:\r\n        index = 3;\r\n        break;\r\n    }\r\n\r\n    if (this.container.getAttribute('data-output') === 'sum') {\r\n      return this.templates[template][index];\r\n    }\r\n    return this.templates[template][line][index];\r\n  }\r\n\r\n  setDefault() {\r\n    const outputValue =\r\n      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);\r\n    const template = this.container.getAttribute('data-template');\r\n    if (outputValue === 0) this.input.value = `${this.templates[`${template}Default`]}`;\r\n  }\r\n\r\n  prepareOutputSum() {\r\n    const outputValue =\r\n      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);\r\n    const template = this.container.getAttribute('data-template');\r\n    let output;\r\n    if (outputValue > 0) {\r\n      output = `${outputValue} ${this.templates[template][0]}${this.definesWordEnd(outputValue, template)}`;\r\n    } else {\r\n      output = `${this.templates[`${template}Default`]}`;\r\n    }\r\n    return output;\r\n  }\r\n\r\n  calculateTwoByOne(setting) {\r\n    const { valuesSum, values, template } = setting;\r\n    let output = '';\r\n\r\n    this.outputs.forEach((value, index) => {\r\n      const isNeedComma = index === 0 && valuesSum - values[0] - values[1] !== 0;\r\n      const addPunctuationMarks = () => {\r\n        if (isNeedComma) output += ', ';\r\n      };\r\n\r\n      const addDefinitionToNumber = () => {\r\n        if (index === 0) {\r\n          const valueText = Number(value.textContent) + Number(values[1]);\r\n          output += `${valueText} ${this.templates[template][index][0]}${this.definesWordEnd(\r\n            valueText,\r\n            template,\r\n            index,\r\n          )}`;\r\n          addPunctuationMarks(valueText);\r\n        } else if (index === 2) {\r\n          output += `${value.textContent} ${this.templates[template][1][0]}${this.definesWordEnd(\r\n            Number(value.textContent),\r\n            template,\r\n            1,\r\n          )}`;\r\n        }\r\n      };\r\n\r\n      const areFirstDefinitionNeeded = index === 0 && Number(values[0]) + Number(values[1]) > 0;\r\n      const areLastDefinitionNeeded = index === 2 && Number(value.textContent) > 0;\r\n\r\n      if (areFirstDefinitionNeeded) addDefinitionToNumber();\r\n      if (areLastDefinitionNeeded) addDefinitionToNumber();\r\n    });\r\n    return output;\r\n  }\r\n\r\n  prepareTwoByOne() {\r\n    const valuesSum =\r\n      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);\r\n    const values = this.outputs.map((value) => value.textContent);\r\n    const template = this.container.getAttribute('data-template');\r\n    let output;\r\n\r\n    if (valuesSum > 0) {\r\n      output = this.calculateTwoByOne({ valuesSum, values, template });\r\n    } else {\r\n      output = `${this.templates[`${template}Default`]}`;\r\n    }\r\n\r\n    return output;\r\n  }\r\n\r\n  calculateOneByOne(settings) {\r\n    const { values, template } = settings;\r\n    let output = '';\r\n\r\n    this.outputs.forEach((value, index) => {\r\n      const isFirstNotOnlyOne = index === 0 && (Number(values[1]) !== 0 || Number(values[2]) !== 0);\r\n      const isSecondNotOnlyOne = index === 1 && (Number(values[2]) !== 0);\r\n      const isNeedComma = isFirstNotOnlyOne || isSecondNotOnlyOne;\r\n\r\n      const addPunctuationMarks = () => {\r\n        if (isNeedComma) output += ', ';\r\n      };\r\n\r\n      const addDefinitionToNumber = () => {\r\n        const valueText = value.innerText;\r\n        output += `${valueText} ${this.templates[template][index][0]}${this.definesWordEnd(\r\n          Number(valueText),\r\n          template,\r\n          index,\r\n        )}`;\r\n        addPunctuationMarks();\r\n      };\r\n\r\n      const isValueNotZero = value.textContent > 0;\r\n\r\n      if (isValueNotZero) addDefinitionToNumber();\r\n    });\r\n    return output;\r\n  }\r\n\r\n  prepareOneByOne() {\r\n    const valuesSum =\r\n      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);\r\n    const values = this.outputs.map((value) => value.textContent);\r\n    const template = this.container.getAttribute('data-template');\r\n    let output;\r\n\r\n    if (valuesSum > 0) {\r\n      output = this.calculateOneByOne({ valuesSum, values, template });\r\n    } else {\r\n      output = `${this.templates[`${template}Default`]}`;\r\n    }\r\n\r\n    return output;\r\n  }\r\n\r\n  refreshInput() {\r\n    let inputText;\r\n    const template = this.container.getAttribute('data-output');\r\n    if (template === 'oneByOne') {\r\n      inputText = this.prepareOneByOne();\r\n    } else if (template === 'twoByOne') {\r\n      inputText = this.prepareTwoByOne();\r\n    } else {\r\n      inputText = this.prepareOutputSum();\r\n    }\r\n    this.input.value = inputText;\r\n  }\r\n\r\n  handlePlusButtonClick(event) {\r\n    const buttonIndex = this.plusButtons.indexOf(event.target);\r\n    const outputTarget = this.outputs[buttonIndex];\r\n\r\n    const refreshListLine = () => {\r\n      if (outputTarget.innerText === '0')\r\n        this.minusButtons[buttonIndex].classList.remove('dropdown__button_transparent');\r\n      outputTarget.innerText = Number(outputTarget.innerText) + 1;\r\n      if (outputTarget.innerText === '10') event.target.classList.add('dropdown__button_transparent');\r\n    };\r\n\r\n    if (outputTarget.innerText < 10) refreshListLine();\r\n\r\n    this.checkClearButtonVisibility();\r\n    this.refreshInput();\r\n  }\r\n\r\n  handleMinusButtonClick(event) {\r\n    const buttonIndex = this.minusButtons.indexOf(event.target);\r\n    const outputTarget = this.outputs[buttonIndex];\r\n\r\n    const refreshListLine = () => {\r\n      if (outputTarget.innerText === '10')\r\n        this.plusButtons[buttonIndex].classList.remove('dropdown__button_transparent');\r\n      outputTarget.innerText = Number(outputTarget.innerText) - 1;\r\n      if (outputTarget.innerText === '0') event.target.classList.add('dropdown__button_transparent');\r\n    };\r\n\r\n    if (outputTarget.innerText > 0) refreshListLine();\r\n\r\n    this.checkClearButtonVisibility();\r\n    this.refreshInput();\r\n  }\r\n\r\n  handleClearButtonClick() {\r\n    this.outputs.forEach((output) => {\r\n      output.textContent = 0;\r\n    });\r\n    this.minusButtons.forEach((button) => {\r\n      button.classList.add('dropdown__button_transparent');\r\n    });\r\n    this.plusButtons.forEach((button) => {\r\n      button.classList.remove('dropdown__button_transparent');\r\n    });\r\n    this.setDefault();\r\n    this.checkClearButtonVisibility();\r\n  }\r\n\r\n  handleInputClick() {\r\n    this.controlDropdownDisplay();\r\n  }\r\n\r\n  handleSubmitButtonClick() {\r\n    this.controlDropdownDisplay();\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find(element => element === this.container));\r\n    if (result === false) this.controlDropdownDisplay();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.input.addEventListener('click', this.handleInputClick);\r\n    this.clearButton.addEventListener('click', this.handleClearButtonClick);\r\n    this.submitButton.addEventListener('click', this.handleSubmitButtonClick);\r\n    this.plusButtons.forEach((plusButton) => plusButton.addEventListener('click', this.handlePlusButtonClick));\r\n    this.minusButtons.forEach((minusButton) => minusButton.addEventListener('click', this.handleMinusButtonClick));\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/dropdown/Dropdown.js?");

/***/ }),

/***/ "./blocks/dropdown/dropdown.scss":
/*!***************************************!*\
  !*** ./blocks/dropdown/dropdown.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/dropdown/dropdown.scss?");

/***/ }),

/***/ "./blocks/dropdown/dropdownInit.js":
/*!*****************************************!*\
  !*** ./blocks/dropdown/dropdownInit.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ \"./blocks/dropdown/Dropdown.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-dropdown')].forEach((container) => {\r\n    const templates = {\r\n      rooms: [\r\n        ['спал', 'ьня', 'ьни', 'ен'],\r\n        ['кроват', 'ь', 'и', 'ей'],\r\n        ['ванн', 'ая', 'ые', 'ых'],\r\n      ],\r\n      guestsWithBaby: [\r\n        ['гост', 'ь', 'я', 'ей'],\r\n        ['младен', 'ец', 'ца', 'ев'],\r\n      ],\r\n      guests: ['гост', 'ь', 'я', 'ей'],\r\n      guestsDefault: 'Сколько гостей',\r\n      guestsWithBabyDefault: 'Сколько гостей',\r\n      roomsDefault: 'Конфигурация номера',\r\n    };\r\n    new _Dropdown__WEBPACK_IMPORTED_MODULE_0__[\"Dropdown\"]({ container, templates });\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/dropdown/dropdownInit.js?");

/***/ }),

/***/ "./blocks/final-booking/final-booking.scss":
/*!*************************************************!*\
  !*** ./blocks/final-booking/final-booking.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/final-booking/final-booking.scss?");

/***/ }),

/***/ "./blocks/footer/footer.scss":
/*!***********************************!*\
  !*** ./blocks/footer/footer.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/footer/footer.scss?");

/***/ }),

/***/ "./blocks/header/Header.js":
/*!*********************************!*\
  !*** ./blocks/header/Header.js ***!
  \*********************************/
/*! exports provided: HeaderNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderNavigation\", function() { return HeaderNavigation; });\nclass HeaderNavigation {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.navigation = this.container.querySelector('.js-header__navigation-wrapper');\r\n    this.button = this.container.querySelector('.js-header__navigation-button');\r\n  }\r\n\r\n  handleButtonClick() {\r\n    const styles = getComputedStyle(this.navigation);\r\n\r\n    if (styles.display === 'none') {\r\n      this.navigation.style.display = 'block';\r\n      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.navigation.style.display = 'none';\r\n      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  controlDisplayOnResize(userWidth) {\r\n    const isNeedToBeDisplayed = userWidth > 350 && this.navigation.style.display === 'none';\r\n\r\n    if (isNeedToBeDisplayed) {\r\n      this.navigation.style.display = 'block';\r\n    } else if (userWidth <= 350) {\r\n      this.navigation.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  handleDOMResize(event) {\r\n    const userWidth = Number(event.target.innerWidth);\r\n    this.controlDisplayOnResize(userWidth);\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const checkIsClickInNavigation = (element) => element === this.navigation || element === this.button;\r\n    const result = Boolean(event.path.find(element => checkIsClickInNavigation(element)));\r\n    if (result === false) this.handleButtonClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.button.addEventListener('click', this.handleButtonClick);\r\n    document.body.onresize = this.handleDOMResize;\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/header/Header.js?");

/***/ }),

/***/ "./blocks/header/header.scss":
/*!***********************************!*\
  !*** ./blocks/header/header.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header/header.scss?");

/***/ }),

/***/ "./blocks/header/headerInit.js":
/*!*************************************!*\
  !*** ./blocks/header/headerInit.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./blocks/header/Header.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-header__navigation')].forEach((item) => {\r\n    new _Header__WEBPACK_IMPORTED_MODULE_0__[\"HeaderNavigation\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/header/headerInit.js?");

/***/ }),

/***/ "./blocks/impressions-diagram/impressions-diagram.scss":
/*!*************************************************************!*\
  !*** ./blocks/impressions-diagram/impressions-diagram.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/impressions-diagram/impressions-diagram.scss?");

/***/ }),

/***/ "./blocks/input/input.scss":
/*!*********************************!*\
  !*** ./blocks/input/input.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/input/input.scss?");

/***/ }),

/***/ "./blocks/list/List.js":
/*!*****************************!*\
  !*** ./blocks/list/List.js ***!
  \*****************************/
/*! exports provided: ListDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListDropdown\", function() { return ListDropdown; });\nclass ListDropdown {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.list = this.container.querySelector('.js-list__container');\r\n    this.title = this.container.querySelector('.js-title');\r\n  }\r\n\r\n  handleTitleClick() {\r\n    if (this.list.hasAttribute('hidden')) {\r\n      this.list.removeAttribute('hidden');\r\n      this.title.classList.remove('title_closed');\r\n      this.title.classList.add('title_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.list.setAttribute('hidden', 'hidden');\r\n      this.title.classList.remove('title_expanded');\r\n      this.title.classList.add('title_closed');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find(element => element === this.container));\r\n    if (result === false) this.handleTitleClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.title.addEventListener('click', this.handleTitleClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/list/List.js?");

/***/ }),

/***/ "./blocks/list/list.scss":
/*!*******************************!*\
  !*** ./blocks/list/list.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/list/list.scss?");

/***/ }),

/***/ "./blocks/list/listInit.js":
/*!*********************************!*\
  !*** ./blocks/list/listInit.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./blocks/list/List.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-list')].forEach((item) => {\r\n    new _List__WEBPACK_IMPORTED_MODULE_0__[\"ListDropdown\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/list/listInit.js?");

/***/ }),

/***/ "./blocks/login/login.scss":
/*!*********************************!*\
  !*** ./blocks/login/login.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/login/login.scss?");

/***/ }),

/***/ "./blocks/logo/logo.scss":
/*!*******************************!*\
  !*** ./blocks/logo/logo.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/logo/logo.scss?");

/***/ }),

/***/ "./blocks/navigation/navigation.scss":
/*!*******************************************!*\
  !*** ./blocks/navigation/navigation.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/navigation/navigation.scss?");

/***/ }),

/***/ "./blocks/positive-feature/positive-feature.scss":
/*!*******************************************************!*\
  !*** ./blocks/positive-feature/positive-feature.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/positive-feature/positive-feature.scss?");

/***/ }),

/***/ "./blocks/registration/registration.scss":
/*!***********************************************!*\
  !*** ./blocks/registration/registration.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/registration/registration.scss?");

/***/ }),

/***/ "./blocks/reviews-counter/reviews-counter.scss":
/*!*****************************************************!*\
  !*** ./blocks/reviews-counter/reviews-counter.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/reviews-counter/reviews-counter.scss?");

/***/ }),

/***/ "./blocks/room-card/RoomCard.js":
/*!**************************************!*\
  !*** ./blocks/room-card/RoomCard.js ***!
  \**************************************/
/*! exports provided: RoomCardSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomCardSlider\", function() { return RoomCardSlider; });\nclass RoomCardSlider {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.images = [...this.container.querySelectorAll('.room-card__image')];\r\n    this.previousButton = this.container.querySelector('.room-card__image-button_side_left');\r\n    this.nextButton = this.container.querySelector('.room-card__image-button_side_rigth');\r\n    this.imagePositions = [...this.container.querySelectorAll('.room-card__image-position')];\r\n    [this.currentImage] = this.images;\r\n    [this.currentImagePosition] = this.imagePositions;\r\n    this.currentImage.style.left = '0px';\r\n  }\r\n\r\n  animateSlide(settings) {\r\n    const { leftImage, rightImage, duration } = settings;\r\n    let { index } = settings;\r\n\r\n    if (index < 0) index = 3;\r\n    if (index > 3) index = 0;\r\n\r\n    this.images[index].animate(leftImage, {\r\n      duration,\r\n      easing: 'ease-in-out',\r\n    });\r\n\r\n    this.currentImage.animate(rightImage, {\r\n      duration,\r\n      easing: 'ease-in-out',\r\n    });\r\n\r\n    this.currentImage.style.left = '0px';\r\n    this.images[index].style.left = `${Number(this.container.offsetWidth) + 5}px`;\r\n  }\r\n\r\n  controlAnimateDirection(target, duration) {\r\n    let animationDuration = 500;\r\n    const isDurationSetCorrectly = duration && typeof duration === 'number';\r\n\r\n    if (isDurationSetCorrectly) animationDuration = duration;\r\n\r\n    if (target === 'previous') {\r\n      this.animateSlide({\r\n        leftImage: [{ left: '0px' }, { left: `${this.container.offsetWidth}px` }],\r\n        rightImage: [{ left: `${0 - this.container.offsetWidth}px` }, { left: '0px' }],\r\n        duration: animationDuration,\r\n        index: this.images.indexOf(this.currentImage, 0) + 1,\r\n      });\r\n    } else {\r\n      this.animateSlide({\r\n        leftImage: [{ left: '0px' }, { left: `${0 - this.container.offsetWidth}px` }],\r\n        rightImage: [{ left: `${this.container.offsetWidth}px` }, { left: '0px' }],\r\n        duration: animationDuration,\r\n        index: this.images.indexOf(this.currentImage, 0) - 1,\r\n      });\r\n    }\r\n  }\r\n\r\n  changeImage(button) {\r\n    let index = this.images.indexOf(this.currentImage, 0);\r\n    if (button.classList.contains('room-card__image-button_side_left')) {\r\n      index -= 1;\r\n    } else {\r\n      index += 1;\r\n    }\r\n\r\n    if (index < 0) {\r\n      index = 3;\r\n    } else if (index > 3) {\r\n      index = 0;\r\n    }\r\n\r\n    this.currentImage = this.images[index];\r\n\r\n    this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n    this.currentImagePosition = this.imagePositions[index];\r\n    this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n  }\r\n\r\n  controlImageButtonClick(event) {\r\n    const button = event.target;\r\n\r\n    this.changeImage(button);\r\n\r\n    if (button.classList.contains('room-card__image-button_side_left')) {\r\n      this.controlAnimateDirection('previous');\r\n    } else {\r\n      this.controlAnimateDirection('next');\r\n    }\r\n  }\r\n\r\n  controlMultipleAnimations(first, action, posIndex) {\r\n    let iteration = () => {\r\n      let i;\r\n\r\n      if (action === 'next') {\r\n        i = this.images.indexOf(this.currentImage) + 1;\r\n      } else {\r\n        i = this.images.indexOf(this.currentImage) - 1;\r\n      }\r\n\r\n      this.currentImage = this.images[i];\r\n      this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n      this.currentImagePosition = this.imagePositions[i];\r\n      this.currentImagePosition.classList.toggle('room-card__image-position_selected');\r\n\r\n      this.controlAnimateDirection(action, 300);\r\n\r\n      if (this.currentImage !== this.images[posIndex]) {\r\n        this.controlMultipleAnimations(false, action, posIndex);\r\n      }\r\n    };\r\n\r\n    iteration = iteration.bind(this);\r\n\r\n    if (first) {\r\n      iteration();\r\n    } else {\r\n      setTimeout(() => iteration(), 300);\r\n    }\r\n  }\r\n\r\n  handleImagePositionClick(event) {\r\n    const posIndex = this.imagePositions.indexOf(event.target);\r\n    let action;\r\n\r\n    if (posIndex > this.images.indexOf(this.currentImage)) {\r\n      action = 'next';\r\n    } else if (posIndex < this.images.indexOf(this.currentImage)) {\r\n      action = 'previous';\r\n    }\r\n\r\n    if (action) this.controlMultipleAnimations(true, action, posIndex);\r\n  }\r\n\r\n  handlePreviousButtonClick(event) {\r\n    this.controlImageButtonClick(event);\r\n  }\r\n\r\n  handleNextButtonClick(event) {\r\n    this.controlImageButtonClick(event);\r\n  }\r\n\r\n\r\n  bindEventListeners() {\r\n    this.previousButton.addEventListener('click', this.handlePreviousButtonClick);\r\n    this.nextButton.addEventListener('click', this.handleNextButtonClick);\r\n    this.imagePositions.forEach((imagePosition) => {\r\n      imagePosition.addEventListener('click', this.handleImagePositionClick);\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/room-card/RoomCard.js?");

/***/ }),

/***/ "./blocks/room-card/room-card.scss":
/*!*****************************************!*\
  !*** ./blocks/room-card/room-card.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/room-card/room-card.scss?");

/***/ }),

/***/ "./blocks/room-card/roomCardInit.js":
/*!******************************************!*\
  !*** ./blocks/room-card/roomCardInit.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RoomCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomCard */ \"./blocks/room-card/RoomCard.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-room-card')].forEach((item) => {\r\n    new _RoomCard__WEBPACK_IMPORTED_MODULE_0__[\"RoomCardSlider\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/room-card/roomCardInit.js?");

/***/ }),

/***/ "./blocks/room-information/room-information.scss":
/*!*******************************************************!*\
  !*** ./blocks/room-information/room-information.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/room-information/room-information.scss?");

/***/ }),

/***/ "./blocks/search-room/search-room.scss":
/*!*********************************************!*\
  !*** ./blocks/search-room/search-room.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/search-room/search-room.scss?");

/***/ }),

/***/ "./blocks/sidebar/Sidebar.js":
/*!***********************************!*\
  !*** ./blocks/sidebar/Sidebar.js ***!
  \***********************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\nclass Sidebar {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.prepareSidebar();\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.title = this.container.querySelector('.js-sidebar__title');\r\n    this.sidebar = this.container.querySelector('.js-sidebar__wrapper');\r\n  }\r\n\r\n  prepareSidebar() {\r\n    this.getHtmlElements();\r\n    this.changeDisplayOnresize(Number(document.body.offsetWidth));\r\n    this.bindEventListeners();\r\n  }\r\n\r\n  handleTitleClick() {\r\n    if (this.sidebar.style.display === 'none') {\r\n      this.sidebar.style.display = 'inline-block';\r\n      this.title.classList.remove('title_closed');\r\n      this.title.classList.add('title_expanded');\r\n      this.bindDomEventListener();\r\n    } else {\r\n      this.sidebar.style.display = 'none';\r\n      this.title.classList.remove('title_expanded');\r\n      this.title.classList.add('title_closed');\r\n      this.removeDomEventListener();\r\n    }\r\n  }\r\n\r\n  removeExpandedClass() {\r\n    this.title.classList.remove('title_expanded');\r\n    this.title.classList.add('title_closed');\r\n  }\r\n\r\n  changeDisplayOnresize(userWidth) {\r\n    const isLessThanLimit = userWidth > 697;\r\n    const notDisplayed = this.sidebar.style.display === 'none';\r\n    const checkNeedDisplay = () => isLessThanLimit && notDisplayed;\r\n\r\n    if (checkNeedDisplay()) {\r\n      this.sidebar.style.display = 'inline-block';\r\n      if (this.title.classList.contains('title_expanded')) this.removeExpandedClass();\r\n    } else if (userWidth < 697) {\r\n      this.sidebar.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  handleDOMResize(event) {\r\n    this.changeDisplayOnresize(Number(event.target.innerWidth));\r\n  }\r\n\r\n  handelDOMClick(event) {\r\n    const result = Boolean(event.path.find(element => element === this.container));\r\n    if (result === false) this.handleTitleClick();\r\n  }\r\n\r\n  bindDomEventListener() {\r\n    document.addEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  removeDomEventListener() {\r\n    document.removeEventListener('click', this.handelDOMClick);\r\n  }\r\n\r\n  bindEventListeners() {\r\n    this.title.addEventListener('click', this.handleTitleClick);\r\n    document.body.onresize = this.handleDOMResize;\r\n  }\r\n}\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/sidebar/Sidebar.js?");

/***/ }),

/***/ "./blocks/sidebar/sidebar.scss":
/*!*************************************!*\
  !*** ./blocks/sidebar/sidebar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/sidebar/sidebar.scss?");

/***/ }),

/***/ "./blocks/sidebar/sidebarInit.js":
/*!***************************************!*\
  !*** ./blocks/sidebar/sidebarInit.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ \"./blocks/sidebar/Sidebar.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-sidebar')].forEach((item) => {\r\n    new _Sidebar__WEBPACK_IMPORTED_MODULE_0__[\"Sidebar\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/sidebar/sidebarInit.js?");

/***/ }),

/***/ "./blocks/slider/slider.scss":
/*!***********************************!*\
  !*** ./blocks/slider/slider.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/slider/slider.scss?");

/***/ }),

/***/ "./blocks/slider/sliderInit.js":
/*!*************************************!*\
  !*** ./blocks/slider/sliderInit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\r\n__webpack_require__(/*! webpack-jquery-ui/css */ \"../node_modules/webpack-jquery-ui/css.js\");\r\n\r\nfunction initialize() {\r\n  function addPadding(outputStr) {\r\n    let value = outputStr;\r\n\r\n    if (value.length > 3) {\r\n      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;\r\n    }\r\n\r\n    return value;\r\n  }\r\n\r\n  const $sliderBody = $('.js-slider__body');\r\n  const $sliderOutput = $('.js-slider__output');\r\n\r\n  $sliderBody.slider({\r\n    range: true,\r\n    min: 0,\r\n    max: 15000,\r\n    values: [5000, 10000],\r\n    slide(event, ui) {\r\n      $sliderOutput.val(`${addPadding(String(ui.values[0]))}₽ - ${addPadding(String(ui.values[1]))}₽`);\r\n    },\r\n  });\r\n\r\n  const from = String($sliderBody.slider('values', 0));\r\n  const to = String($sliderBody.slider('values', 1));\r\n\r\n  $sliderOutput.val(`${addPadding(from)}₽ - ${addPadding(to)}₽`);\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./blocks/slider/sliderInit.js?");

/***/ }),

/***/ "./blocks/social-media-link/social-media-link.scss":
/*!*********************************************************!*\
  !*** ./blocks/social-media-link/social-media-link.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/social-media-link/social-media-link.scss?");

/***/ }),

/***/ "./blocks/stars-rating/StarsRating.js":
/*!********************************************!*\
  !*** ./blocks/stars-rating/StarsRating.js ***!
  \********************************************/
/*! exports provided: StarsRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(autoBind) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StarsRating\", function() { return StarsRating; });\nclass StarsRating {\r\n  constructor(target) {\r\n    this.container = target;\r\n\r\n    autoBind(this);\r\n    this.getHtmlElements();\r\n    this.stars.forEach((star) => this.bindEventListeners(star));\r\n  }\r\n\r\n  getHtmlElements() {\r\n    this.stars = [...this.container.querySelectorAll('.stars-rating__star')];\r\n  }\r\n\r\n  cleanActiveClass() {\r\n    this.stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));\r\n  }\r\n\r\n  addActiveClass(star) {\r\n    const index = this.stars.indexOf(star);\r\n\r\n    for (let i = 0; i <= index; i += 1) {\r\n      this.stars[i].classList.add('stars-rating__star_color_purple');\r\n    }\r\n  }\r\n\r\n  handleStarClick(event) {\r\n    this.cleanActiveClass();\r\n    this.addActiveClass(event.target);\r\n  }\r\n\r\n  bindEventListeners(star) {\r\n    star.addEventListener('click', this.handleStarClick);\r\n  }\r\n}\r\n\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! auto-bind */ \"../node_modules/auto-bind/index.js\")))\n\n//# sourceURL=webpack:///./blocks/stars-rating/StarsRating.js?");

/***/ }),

/***/ "./blocks/stars-rating/stars-rating.scss":
/*!***********************************************!*\
  !*** ./blocks/stars-rating/stars-rating.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/stars-rating/stars-rating.scss?");

/***/ }),

/***/ "./blocks/stars-rating/starsRatingInit.js":
/*!************************************************!*\
  !*** ./blocks/stars-rating/starsRatingInit.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StarsRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarsRating */ \"./blocks/stars-rating/StarsRating.js\");\n\r\n\r\nfunction initialize() {\r\n  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {\r\n    new _StarsRating__WEBPACK_IMPORTED_MODULE_0__[\"StarsRating\"](item);\r\n  });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", initialize);\r\n\n\n//# sourceURL=webpack:///./blocks/stars-rating/starsRatingInit.js?");

/***/ }),

/***/ "./blocks/text-sample/text-sample.scss":
/*!*********************************************!*\
  !*** ./blocks/text-sample/text-sample.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-sample/text-sample.scss?");

/***/ }),

/***/ "./blocks/title/title.scss":
/*!*********************************!*\
  !*** ./blocks/title/title.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/title/title.scss?");

/***/ }),

/***/ "./blocks/toggle/toggle.scss":
/*!***********************************!*\
  !*** ./blocks/toggle/toggle.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/toggle/toggle.scss?");

/***/ }),

/***/ "./blocks/user-comment/user-comment.scss":
/*!***********************************************!*\
  !*** ./blocks/user-comment/user-comment.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/user-comment/user-comment.scss?");

/***/ }),

/***/ "./common sync recursive .scss$":
/*!****************************!*\
  !*** ./common sync .scss$ ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./fonts.scss\": \"./common/fonts.scss\",\n\t\"./main.scss\": \"./common/main.scss\",\n\t\"./mixins.scss\": \"./common/mixins.scss\",\n\t\"./variables.scss\": \"./common/variables.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./common sync recursive .scss$\";\n\n//# sourceURL=webpack:///./common_sync_.scss$?");

/***/ }),

/***/ "./common/fonts.scss":
/*!***************************!*\
  !*** ./common/fonts.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common/fonts.scss?");

/***/ }),

/***/ "./common/main.scss":
/*!**************************!*\
  !*** ./common/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common/main.scss?");

/***/ }),

/***/ "./common/mixins.scss":
/*!****************************!*\
  !*** ./common/mixins.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common/mixins.scss?");

/***/ }),

/***/ "./common/variables.scss":
/*!*******************************!*\
  !*** ./common/variables.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common/variables.scss?");

/***/ }),

/***/ "./favicons sync recursive .png$":
/*!*****************************!*\
  !*** ./favicons sync .png$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./apple-touch-icon.png\": \"./favicons/apple-touch-icon.png\",\n\t\"./favicon-32x32.png\": \"./favicons/favicon-32x32.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./favicons sync recursive .png$\";\n\n//# sourceURL=webpack:///./favicons_sync_.png$?");

/***/ }),

/***/ "./favicons/apple-touch-icon.png":
/*!***************************************!*\
  !*** ./favicons/apple-touch-icon.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/apple-touch-icon.png\");\n\n//# sourceURL=webpack:///./favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./favicons/favicon-32x32.png":
/*!************************************!*\
  !*** ./favicons/favicon-32x32.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../img/favicon-32x32.png\");\n\n//# sourceURL=webpack:///./favicons/favicon-32x32.png?");

/***/ }),

/***/ "./tools/importContext.js":
/*!********************************!*\
  !*** ./tools/importContext.js ***!
  \********************************/
/*! exports provided: importContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importContext\", function() { return importContext; });\nfunction importAll(context) {\r\n  context.keys().map(context);\r\n}\r\n\r\nfunction importContext() {\r\n  importAll((__webpack_require__(\"./common sync recursive .scss$\")));\r\n  importAll((__webpack_require__(\"./blocks sync recursive .scss$|Init.js\")));\r\n  importAll((__webpack_require__(\"./favicons sync recursive .png$\")));\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./tools/importContext.js?");

/***/ })

}]);