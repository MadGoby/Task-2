import { datepickerData } from './datepickerData';

class Datepicker {
  constructor(settings) {
    this.container = settings.target;
    this.templates = settings.templates ? settings.templates : {};
    this.settings = { monthRu: datepickerData.monthRu };

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.setDefaultParameters();
    const calendarDays = this.createCalendarByDate({
      year: this.settings.pickedYear,
      month: this.settings.pickedMonth,
    });
    this.refreshCalendar(calendarDays);
    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    this.bindEventListeners();
    this.bindCalendarCellsListener();
    if (this.checkAreInputsExists()) this.bindHandleDocumentClick();
  }

  setDefaultParameters() {
    this.settings.pickedYear = this.templates.pickedYear
      ? Number(this.templates.pickedYear) : new Date().getFullYear();
    this.settings.pickedMonth = this.templates.pickedMonth
      ? Number(this.templates.pickedMonth) : new Date().getMonth();
    if (this.templates.currentDay) {
      this.settings.currentDay = new Date(this.templates.currentDay);
    } else {
      this.settings.currentDay = new Date(
        new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
      );
    }
    if (this.templates.dataFrom) {
      this.settings.from = new Date(this.templates.dataFrom);
    }
    if (this.templates.dataTo) {
      this.settings.to = new Date(this.templates.dataTo);
    }
  }

  getHtmlElements() {
    this.datepickerWrapper = this.container.querySelector('.js-datepicker');
    this.calendarWrapper = this.datepickerWrapper.querySelector('.js-datepicker__calendar-wrapper');
    const fromWrapper = this.datepickerWrapper.querySelector('.js-datepicker__from');
    const toWrapper = this.datepickerWrapper.querySelector('.js-datepicker__to');
    const totalWrapper = this.datepickerWrapper.querySelector('.js-datepicker__total');
    if (fromWrapper) this.inputFrom = fromWrapper.querySelector('.js-dropdown-input__field');
    if (toWrapper) this.inputTo = toWrapper.querySelector('.js-dropdown-input__field');
    if (totalWrapper) this.inputTotal = totalWrapper.querySelector('.js-dropdown-input__field');
    this.buttonPrevious = this.datepickerWrapper.querySelector('.js-datepicker__scroll-button_arrow_back');
    this.buttonNext = this.datepickerWrapper.querySelector('.js-datepicker__scroll-button_arrow_forward');
    this.selectedMonth = this.datepickerWrapper.querySelector('.js-datepicker__selected-month');
    this.calendar = this.datepickerWrapper.querySelector('.js-datepicker__calendar');
    this.calendarDatesWrapper = this.datepickerWrapper.querySelector('.js-datepicker__dates');
    this.clearButton = this.datepickerWrapper.querySelector('.js-datepicker__clear-button');
    this.applyButton = this.datepickerWrapper.querySelector('.js-datepicker__apply-button');

    if (this.inputTotal) {
      this.currentInputTarget = this.inputTotal;
    } else if (this.inputFrom) {
      this.currentInputTarget = this.inputFrom;
    } else {
      this.currentInputTarget = 'noInput';
    }

    if (this.calendarWrapper.classList.contains('datepicker__calendar-wrapper_size_small')) {
      this.size = 'small';
    } else {
      this.size = false;
    }
    this.currentValueTarget = 'from';
  }

  static checkDatesMatch(day, targetDate) {
    return (
      day.getFullYear() === targetDate.getFullYear()
      && day.getMonth() === targetDate.getMonth()
      && day.getDate() === targetDate.getDate()
    );
  }

  checkIsCurrentDate(targetDate) {
    return Datepicker.checkDatesMatch(this.settings.currentDay, targetDate);
  }

  checkIsFromDate(targetDate) {
    return this.settings.from && Datepicker.checkDatesMatch(this.settings.from, targetDate);
  }

  checkIsToDate(targetDate) {
    return this.settings.to && Datepicker.checkDatesMatch(this.settings.to, targetDate);
  }

  checkAreInSelectedRange(targetDate) {
    return targetDate >= this.settings.from && targetDate <= this.settings.to;
  }

  checkAreInUnavailableRange(targetDate) {
    return targetDate >= this.settings.currentDay && targetDate <= this.settings.from;
  }

  checkIsLessThenCurrent(targetDate) {
    return targetDate < this.settings.currentDay;
  }

  highlightUnavailableDates(cell, targetDate) {
    if (this.checkAreInUnavailableRange(targetDate)) cell.classList.add('datepicker__date_transparent');
    return cell;
  }

  highlightSelectedRange(cell, targetDate) {
    const isStartOfRange = this.checkAreInSelectedRange(targetDate)
      && Datepicker.checkDatesMatch(this.settings.from, targetDate);
    const isEndOfRange = this.checkAreInSelectedRange(targetDate)
      && Datepicker.checkDatesMatch(this.settings.to, targetDate);

    switch (true) {
      case isStartOfRange:
        cell.classList.add('datepicker__date_right-half_purple');
        break;
      case isEndOfRange:
        cell.classList.add('datepicker__date_left-half_purple');
        break;
      case this.checkAreInSelectedRange(targetDate):
        cell.classList.add('datepicker__date_shading_purple');
        break;
      default:
        break;
    }

    return cell;
  }

  createCalendarCell(date, targetMonth) {
    const calendarCellElement = document.createElement('span');
    calendarCellElement.classList.add('datepicker__date');
    if (this.size === 'small') calendarCellElement.classList.add('datepicker__date_size_small');

    if (targetMonth === 'next') {
      calendarCellElement.classList.add('datepicker__date_transparent');
      calendarCellElement.setAttribute('data-month', 'next');
    } else if (targetMonth === 'previous') {
      calendarCellElement.classList.add('datepicker__date_transparent');
      calendarCellElement.setAttribute('data-month', 'previous');
    }

    const isRangeExist = Boolean(this.settings.from) && Boolean(this.settings.to);
    const isOnlyFrom = Boolean(this.settings.from) && !this.settings.to;

    if (this.checkIsLessThenCurrent(date)) {
      calendarCellElement.classList.add('datepicker__date_transparent');
    }
    if (this.checkIsCurrentDate(date)) {
      calendarCellElement.classList.add('datepicker__date_color_green');
      calendarCellElement.classList.add('datepicker__date_left-half_red');
    }

    if (this.checkIsFromDate(date)) {
      calendarCellElement.classList.add('datepicker__date_color_purple');
    }
    if (this.checkIsToDate(date)) calendarCellElement.classList.add('datepicker__date_color_purple');

    const getCalendarCell = () => {
      switch (true) {
        case isOnlyFrom:
          return this.highlightUnavailableDates(calendarCellElement, date);
        case isRangeExist:
          return this.highlightSelectedRange(calendarCellElement, date);
        default:
          return calendarCellElement;
      }
    };

    const calendarCell = getCalendarCell();
    calendarCell.innerText = date.getDate();

    return calendarCell;
  }

  getPreviousMonthDays(year, month) {
    const previousDaysAmount = new Date(year, month, 0).getDay() - 1;

    const defineRequiredDays = (daysCounter, daysCells = []) => {
      if (daysCounter >= 0) {
        const date = new Date(year, month, -daysCounter);
        daysCells.push(this.createCalendarCell(date, 'previous'));
        defineRequiredDays(daysCounter - 1, daysCells);
      }

      return daysCells;
    };

    return defineRequiredDays(previousDaysAmount);
  }

  getCurrentMonthDays(year, month) {
    const lastMonthDate = new Date(year, month + 1, 0).getDate();

    const defineRequiredDays = (daysCounter = 1, daysCells = []) => {
      if (daysCounter <= lastMonthDate) {
        const date = new Date(year, month, daysCounter);
        daysCells.push(this.createCalendarCell(date));
        defineRequiredDays(daysCounter + 1, daysCells);
      }

      return daysCells;
    };

    return defineRequiredDays();
  }

  getNextMonthDays(year, month) {
    const isNeedFullWeek = new Date(year, month + 1).getDay() === 0;
    const nextMonthDay = isNeedFullWeek ? 7 : new Date(year, month + 1).getDay();

    const defineRequiredDays = (daysCounter = 1, daysCells = [], dateNumber = 1) => {
      if (daysCounter <= 7) {
        const date = new Date(year, month + 1, dateNumber);
        daysCells.push(this.createCalendarCell(date, 'next'));
        defineRequiredDays(daysCounter + 1, daysCells, dateNumber + 1);
      }

      return daysCells;
    };

    return defineRequiredDays(nextMonthDay);
  }

  createCalendarByDate(data) {
    const { year, month } = data;
    const isNeedPreviousMonth = new Date(year, month).getDay() !== 1;
    const isNeedNextMonth = new Date(year, month + 1, 0).getDay() !== 0;

    const previousMonthDaysCells = isNeedPreviousMonth
      ? this.getPreviousMonthDays(year, month) : [];
    const currentDaysCells = this.getCurrentMonthDays(year, month);
    const nextMonthDaysCells = isNeedNextMonth ? this.getNextMonthDays(year, month) : [];

    return [...previousMonthDaysCells, ...currentDaysCells, ...nextMonthDaysCells];
  }

  refreshCalendar(days) {
    days.forEach((day) => {
      this.calendarDatesWrapper.append(day);
    });
    this.actualDays = days;
    this.changeDaysLineHeight();
  }

  clearCalendar() {
    this.calendarDatesWrapper.innerHTML = '';
  }

  refreshSelectedMonth(month, year) {
    this.selectedMonth.innerText = `${this.settings.monthRu[month]} ${year}`;
  }

  updateFromInput(settings) {
    const { pickedDate, value, date } = settings;
    const isLessThenCurrentDay = pickedDate <= this.settings.currentDay;

    if (isLessThenCurrentDay) return false;

    this.currentInputTarget.setAttribute('value', value);
    this.settings.from = new Date(date.year, date.month - 1, Number(date.day));

    if (pickedDate > this.settings.to) {
      this.inputTo.setAttribute('value', '');
      this.settings.to = null;
    }

    this.currentInputTarget = this.inputTo;
    return true;
  }

  updateToInput(settings) {
    const { pickedDate, value, date } = settings;
    const isToLessThenFrom = this.settings.from && pickedDate <= this.settings.from;
    if (isToLessThenFrom) return false;

    this.currentInputTarget.setAttribute('value', value);
    this.settings.to = new Date(date.year, date.month - 1, Number(date.day));
    this.currentInputTarget = this.inputFrom;

    return true;
  }

  checkIsValidTotalSplitData(pickedDate) {
    const isFromLessThenCurrentDay = this.currentValueTarget === 'from' && pickedDate <= this.settings.currentDay;
    const isToLessThenFrom = this.currentValueTarget === 'to'
      && this.settings.from
      && pickedDate <= this.settings.from;

    return isFromLessThenCurrentDay || isToLessThenFrom;
  }

  splitDataForTotalInput(settings) {
    const { pickedDate, date } = settings;

    if (this.checkIsValidTotalSplitData(pickedDate)) return false;

    const refreshFrom = () => {
      this.settings.from = new Date(date.year, date.month - 1, Number(date.day));
      this.currentValueTarget = 'to';
      if (pickedDate > this.settings.to) this.settings.to = undefined;
    };

    const refreshTo = () => {
      this.settings.to = new Date(date.year, date.month - 1, Number(date.day));
      this.currentValueTarget = 'from';
    };

    if (this.currentValueTarget === 'from') {
      refreshFrom();
    } else {
      refreshTo();
    }

    return true;
  }

  updateTotalInput() {
    const getLowerMonth = (month) => this.settings.monthRu[month].slice(0, 3).toLowerCase();
    const transformedFrom = `${this.settings.from.getDate()} ${getLowerMonth(this.settings.from.getMonth())}`;
    const transformedTo = this.settings.to
      ? `${this.settings.to.getDate()} ${getLowerMonth(this.settings.to.getMonth())}`
      : '...';
    const mainValue = `${transformedFrom} - ${transformedTo}`;

    this.currentInputTarget.setAttribute('value', mainValue);
  }

  checkDateForValidity(value, date) {
    const pickedDate = new Date(date.year, date.month - 1, date.day);
    const isCurrentTotal = this.currentInputTarget === this.inputTotal;
    const isNeedTotalRefresh = (result) => isCurrentTotal && result;

    const updateSingleInput = () => {
      switch (this.currentInputTarget) {
        case this.inputFrom:
          return this.updateFromInput({ pickedDate, value, date });
        case this.inputTo:
          return this.updateToInput({ pickedDate, value, date });
        default:
          return false;
      }
    };

    const areInputsUpdated = isCurrentTotal
      ? this.splitDataForTotalInput({ pickedDate, value, date })
      : updateSingleInput();
    if (isNeedTotalRefresh(areInputsUpdated)) this.updateTotalInput();

    return areInputsUpdated;
  }

  defineCellMonth(target) {
    switch (target.getAttribute('data-month')) {
      case 'next':
        return this.settings.pickedMonth + 2;
      case 'previous':
        return this.settings.pickedMonth;
      default:
        return this.settings.pickedMonth + 1;
    }
  }

  static convertSingleDigitsToDouble(settings) {
    const { value } = settings;
    return value < 10 ? `0${value}` : String(value);
  }

  bindHandleCellClick(cell) {
    cell.addEventListener('click', this.handleCellClick);
  }

  bindCalendarCellsListener() {
    const calendarCells = [...this.calendar.querySelectorAll('.datepicker__date')];

    calendarCells.forEach((cell) => {
      this.bindHandleCellClick(cell);
    });
  }

  handleCellClick(event) {
    const { target } = event;
    if (target.classList.contains('datepicker__date_value_week-day')) return;

    const date = {
      day: Datepicker.convertSingleDigitsToDouble({ value: Number(target.innerText) }),
      month: Datepicker.convertSingleDigitsToDouble(
        { value: Number(this.defineCellMonth(target)) },
      ),
      year: this.settings.pickedYear,
    };
    const value = `${date.day}.${date.month}.${date.year}`;
    const result = this.checkDateForValidity(value, date);

    if (result) {
      this.settings.pickedYear = new Date(
        this.settings.pickedYear, this.settings.pickedMonth,
      ).getFullYear();

      this.settings.pickedMonth = new Date(
        this.settings.pickedYear, this.settings.pickedMonth,
      ).getMonth();

      this.clearCalendar();
      const days = this.createCalendarByDate(
        { year: this.settings.pickedYear, month: this.settings.pickedMonth },
      );

      this.refreshCalendar(days);
      this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    }

    this.bindCalendarCellsListener();
  }

  refreshDatepicker(date) {
    this.settings.pickedYear = date.getFullYear();
    this.settings.pickedMonth = date.getMonth();
    this.clearCalendar();
    const days = this.createCalendarByDate({
      year: this.settings.pickedYear, month: this.settings.pickedMonth,
    });
    this.refreshCalendar(days);
    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    this.bindCalendarCellsListener();
  }

  handleButtonNextClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) + 1);
    this.refreshDatepicker(newDate);
  }

  handleButtonPreviousClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) - 1);
    this.refreshDatepicker(newDate);
  }

  checkAreInputsExists() {
    return this.inputTotal || this.inputFrom || this.inputTo;
  }

  resetInputsToDefault() {
    if (this.currentInputTarget === this.inputTotal) {
      this.inputTotal.setAttribute('value', 'ДД.ММ - ДД.ММ');
    } else {
      this.inputFrom.setAttribute('value', 'ДД.ММ.ГГГГ');
      this.inputTo.setAttribute('value', 'ДД.ММ.ГГГГ');
      this.currentInputTarget = this.inputFrom;
    }
  }

  handleClearButtonClick() {
    if (this.settings.from) this.settings.from = undefined;
    if (this.settings.to) this.settings.to = undefined;

    if (this.checkAreInputsExists()) this.resetInputsToDefault();

    this.currentValueTarget = 'from';
    this.refreshDatepicker(new Date(this.settings.pickedYear, this.settings.pickedMonth));
  }

  handleApplyButtonClick() {
    if (this.checkAreInputsExists()) this.calendarWrapper.setAttribute('hidden', 'hidden');
    if (this.inputFrom) this.inputFrom.classList.remove('input__field_active');
    if (this.inputTo) this.inputTo.classList.remove('input__field_active');
    if (this.inputTotal) this.inputTotal.classList.remove('input__field_active');
  }

  handleCalendarDisplay() {
    if (this.calendarWrapper.hasAttribute('hidden')) {
      this.calendarWrapper.removeAttribute('hidden');
      this.changeDaysLineHeight();
    } else {
      this.calendarWrapper.setAttribute('hidden', 'hidden');
    }
  }

  handleInputFromClick() {
    this.handleCalendarDisplay();
  }

  handleInputToClick() {
    this.handleCalendarDisplay();
  }

  handleInputTotalClick() {
    this.handleCalendarDisplay();
  }

  handleDocumentClick(event) {
    const isInDatepickerArea = Boolean(event.composedPath().find(
      (clickTargetParent) => clickTargetParent === this.datepickerWrapper,
    ));
    const isNeedToHide = isInDatepickerArea === false && !this.calendarWrapper.hasAttribute('hidden');
    if (isNeedToHide) this.handleCalendarDisplay();
  }

  changeDaysLineHeight() {
    this.actualDays.forEach((day) => {
      day.style.lineHeight = `${day.offsetWidth}px`;
    });
  }

  handleDocumentResize() {
    this.changeDaysLineHeight();
  }

  bindHandleDocumentClick() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  bindEventListeners() {
    this.buttonPrevious.addEventListener('click', this.handleButtonPreviousClick);
    this.buttonNext.addEventListener('click', this.handleButtonNextClick);
    this.clearButton.addEventListener('click', this.handleClearButtonClick);
    this.applyButton.addEventListener('click', this.handleApplyButtonClick);
    if (this.inputFrom) this.inputFrom.addEventListener('click', this.handleInputFromClick);
    if (this.inputTo) this.inputTo.addEventListener('click', this.handleInputToClick);
    if (this.inputTotal) this.inputTotal.addEventListener('click', this.handleInputTotalClick);
    window.addEventListener('resize', this.handleDocumentResize);
  }
}

export { Datepicker };
