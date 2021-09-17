class Datepicker {
  constructor(target, templates) {
    this.container = target;
    this.templates = templates;
    this.settings = { monthRu: templates.monthRu };

    autoBind(this);
    this.initializes();
  }

  initializes() {
    this.setDefaultParameters();
    this.getHtmlElements();
    const calendarDays = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });
    this.refreshCalendar(calendarDays);
    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    this.bindEventListeners();
    this.bindCalendarCellsListener();
  }

  setDefaultParameters() {
    this.settings.pickedYear = this.templates.pickedYear ? Number(this.templates.pickedYear) : new Date().getFullYear();
    this.settings.pickedMonth = this.templates.pickedMonth ? Number(this.templates.pickedMonth) : new Date().getMonth();
    this.settings.currentDay = this.templates.currentDay ? this.templates.currentDay : new Date();
    this.settings.from = this.templates.dataFrom ? this.templates.dataFrom : false;
    this.settings.to = this.templates.dataTo ? this.templates.dataTo : false;
  }

  getHtmlElements() {
    this.calendarWrapper = this.container.querySelector('.datepicker__calendar-wrapper');
    this.inputFrom = this.container.querySelector('.js-input__field_from');
    this.inputTo = this.container.querySelector('.js-input__field_to');
    this.inputTotal = this.container.querySelector('.js-input__field_total');
    this.buttonPrevious = this.container.querySelector('.js-datepicker__scroll-button_arrow_back');
    this.buttonNext = this.container.querySelector('.js-datepicker__scroll-button_arrow_forward');
    this.selectedMonth = this.container.querySelector('.js-datepicker__selected-month');
    this.calendar = this.container.querySelector('.js-datepicker__calendar');
    this.lines = [...this.container.querySelectorAll('.js-datepicker__calendar-line')];
    this.clearButton = this.container.querySelector('.js-datepicker__clear-button');
    this.applyButton = this.container.querySelector('.js-datepicker__apply-button');

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

  // eslint-disable-next-line class-methods-use-this
  isMatchByDay(day, targetDate) {
    return (
      day.getFullYear() === targetDate.getFullYear() &&
      day.getMonth() === targetDate.getMonth() &&
      day.getDate() === targetDate.getDate()
    );
  }

  isCurrentDate(targetDate) {
    return this.isMatchByDay(this.settings.currentDay, targetDate);
  }

  isFromDate(targetDate) {
    return this.settings.from && this.isMatchByDay(this.settings.from, targetDate);
  }

  isToDate(targetDate) {
    return this.settings.to && this.isMatchByDay(this.settings.to, targetDate);
  }

  inSelectedRange(targetDate) {
    return targetDate >= this.settings.from && targetDate <= this.settings.to;
  }

  highlightsSelectedRange(cell, targetDate) {
    switch (true) {
      case this.inSelectedRange(targetDate) && this.isMatchByDay(this.settings.from, targetDate):
        cell.classList.add('datepicker__calendar-cell_right-half_shaded');
        break;
      case this.inSelectedRange(targetDate) && this.isMatchByDay(this.settings.to, targetDate):
        cell.classList.add('datepicker__calendar-cell_left-half_shaded');
        break;
      case this.inSelectedRange(targetDate):
        cell.classList.add('datepicker__calendar-cell_shaded');
        break;
      default:
        break;
    }
    return cell;
  }

  makeCalendarCell(date, targetMonth) {
    let calendarCell = document.createElement('td');
    calendarCell.classList.add('datepicker__calendar-cell');
    if (this.size === 'small') calendarCell.classList.add('datepicker__calendar-cell_size_small');

    if (targetMonth === 'next') {
      calendarCell.classList.add('datepicker__calendar-cell_transparent');
      calendarCell.setAttribute('data-month', 'next');
    } else if (targetMonth === 'previous') {
      calendarCell.classList.add('datepicker__calendar-cell_transparent');
      calendarCell.setAttribute('data-month', 'previous');
    }

    if (this.isCurrentDate(date)) calendarCell.classList.add('datepicker__calendar-cell_color_green');
    if (this.isFromDate(date)) calendarCell.classList.add('datepicker__calendar-cell_color_purple');
    if (this.isToDate(date)) calendarCell.classList.add('datepicker__calendar-cell_color_purple');
    if (this.settings.from && this.settings.to) calendarCell = this.highlightsSelectedRange(calendarCell, date);

    calendarCell.innerText = date.getDate();
    return calendarCell;
  };

  getPreviousMonthDays(year, month) {
    const days = [];
    const previousDay = new Date(year, month, 0).getDay();

    for (let i = previousDay - 1; i >= 0; i -= 1) {
      const date = new Date(year, month, -i);
      days.push(this.makeCalendarCell(date, 'previous'));
    }

    return days;
  };

  getCurrentMonthDays(year, month) {
    const days = [];
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDay; i += 1) {
      const date = new Date(year, month, i);
      days.push(this.makeCalendarCell(date, false));
    }

    return days;
  };

  getNextMonthDays(year, month) {
    const days = [];
    let nextMonthDay = new Date(year, month + 1).getDay();
    let day = 1;
    if (nextMonthDay === 0) nextMonthDay = 7;

    for (let i = nextMonthDay; i <= 7; i += 1) {
      const date = new Date(year, month + 1, day);
      days.push(this.makeCalendarCell(date, 'next'));
      day += 1;
    }

    return days;
  };

  makesCalendarByDate(data) {
    const { year, month } = data;
    let calendarDays = [];
    const isNeedPreviousMonth = () => new Date(year, month).getDay() !== 1;
    const isNeedNextMonth = () => new Date(year, month + 1, 0).getDay() !== 0;


    if (isNeedPreviousMonth()) calendarDays = calendarDays.concat(this.getPreviousMonthDays(year, month));
    calendarDays = calendarDays.concat(this.getCurrentMonthDays(year, month));
    if (isNeedNextMonth()) calendarDays = calendarDays.concat(this.getNextMonthDays(year, month));

    return calendarDays;
  }

  refreshCalendar(days) {
    let line = 0;
    let i = 0;

    days.forEach(() => {
      this.lines[line].append(days[i]);
      i += 1;
      if (i % 7 === 0 && i !== 0) line += 1;
    });
  }

  clearCalendar() {
    this.lines.forEach((line) => {
      line.innerHTML = '';
    });
  }

  refreshSelectedMonth(month, year) {
    this.selectedMonth.innerText = `${this.settings.monthRu[month]} ${year}`;
  }

  passedValueToFrom(settings) {
    const { pickedDate, value, date } = settings;
    if (pickedDate <= this.settings.currentDay) return false;

    this.currentInputTarget.setAttribute('value', value);
    this.settings.from = new Date(date.year, date.month - 1, Number(date.day));

    if (pickedDate > this.settings.to) {
      this.inputTo.setAttribute('value', '');
      this.settings.to = undefined;
    }

    this.currentInputTarget = this.inputTo;
    return true;
  }

  passedValueToTo(settings) {
    const { pickedDate, value, date } = settings;
    const isToLessThenFrom = () => this.settings.from && pickedDate <= this.settings.from;
    if (isToLessThenFrom()) return false;

    this.currentInputTarget.setAttribute('value', value);
    this.settings.to = new Date(date.year, date.month - 1, Number(date.day));
    this.currentInputTarget = this.inputFrom;

    return true;
  }

  passedValueToTotal(settings) {
    const { pickedDate, date } = settings;
    const isFromLessCurrentDay = () => this.currentValueTarget === 'from' && pickedDate <= this.settings.currentDay;
    const isToLessThenFrom = () => this.currentValueTarget === 'to' &&
      this.settings.from && pickedDate <= this.settings.from;

    if (isFromLessCurrentDay() || isToLessThenFrom()) return false;

    if (this.currentValueTarget === 'from') {
      this.settings.from = new Date(date.year, date.month - 1, Number(date.day));
      this.currentValueTarget = 'to';
      if (pickedDate > this.settings.to) {
        this.settings.to = undefined;
      }
    } else {
      this.settings.to = new Date(date.year, date.month - 1, Number(date.day));
      this.currentValueTarget = 'from';
    }

    return true;
  }

  updateTotalInput() {
    const getLowerMonth = (month) => this.settings.monthRu[month].slice(0, 3).toLowerCase();

    const transformedFrom = `${this.settings.from.getDate()} ${getLowerMonth(this.settings.from.getMonth())}`;
    let transformedTo = '...';

    if (this.settings.to) {
      transformedTo = `${this.settings.to.getDate()} ${getLowerMonth(this.settings.to.getMonth())}`;
    }

    const mainValue = `${transformedFrom} - ${transformedTo}`;
    this.currentInputTarget.setAttribute('value', mainValue);
  }

  checkDateForValidity(value, date) {
    const pickedDate = new Date(date.year, date.month - 1, date.day);

    let result;

    switch (true) {
      case this.currentInputTarget === this.inputFrom:
        result = this.passedValueToFrom({ pickedDate, value, date });
        break;
      case this.currentInputTarget === this.inputTo:
        result = this.passedValueToTo({ pickedDate, value, date });
        break;
      default:
        result = this.passedValueToTotal({ pickedDate, value, date });
        if (this.currentInputTarget === this.inputTotal && result) this.updateTotalInput();
    }

    return result;
  }

  definesCellMonth(target) {
    let result;
    switch (true) {
      case target.getAttribute('data-month') === 'next':
        result = this.settings.pickedMonth + 2;
        break;
      case target.getAttribute('data-month') === 'previous':
        result = this.settings.pickedMonth;
        break;
      default:
        result = this.settings.pickedMonth + 1;
        break;
    }
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  bringToTwoDigits(settings) {
    let { value } = settings;
    if (value < 10) value = `0${value}`;
    return value;
  }

  bindCalendarCellsListener() {
    const calendarCells = [...this.calendar.querySelectorAll('td')];

    calendarCells.forEach((cell) => {
      cell.addEventListener('click', this.controlCellClick);
    });
  }

  controlCellClick(event) {
    const { target } = event;
    const date = {
      day: this.bringToTwoDigits({ value: Number(target.innerText) }),
      month: this.bringToTwoDigits({ value: Number(this.definesCellMonth(target)) }),
      year: this.settings.pickedYear,
    };
    const value = `${date.day}.${date.month}.${date.year}`;
    const result = this.checkDateForValidity(value, date);

    if (result) {
      this.settings.pickedYear = new Date(this.settings.pickedYear, this.settings.pickedMonth).getFullYear();
      this.settings.pickedMonth = new Date(this.settings.pickedYear, this.settings.pickedMonth).getMonth();
      this.clearCalendar();
      const days = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });
      this.refreshCalendar(days);
      this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    }

    this.bindCalendarCellsListener();
  }

  refreshDatepicker(date) {
    this.settings.pickedYear = date.getFullYear();
    this.settings.pickedMonth = date.getMonth();
    this.clearCalendar();
    const days = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });
    this.refreshCalendar(days);
    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    this.bindCalendarCellsListener();
  }

  controlNextButtonClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) + 1);
    this.refreshDatepicker(newDate);
  }

  controlPreviousButtonClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) - 1);
    this.refreshDatepicker(newDate);
  }

  areInputsExists() {
    return this.inputTotal || this.inputFrom || this.inputTo;
  }

  resetsInputsToDefault() {
    if (this.currentInputTarget === this.inputTotal) {
      this.inputTotal.setAttribute('value', 'ДД.ММ - ДД.ММ');
    } else {
      this.inputFrom.setAttribute('value', 'ДД.ММ.ГГГГ');
      this.inputTo.setAttribute('value', 'ДД.ММ.ГГГГ');
      this.currentInputTarget = this.inputFrom;
    }
  }

  controlClearButtonClick() {
    if (this.settings.from) this.settings.from = undefined;
    if (this.settings.to) this.settings.to = undefined;

    if (this.areInputsExists()) this.resetsInputsToDefault();

    this.currentValueTarget = 'from';
    this.refreshDatepicker(new Date(this.settings.pickedYear, this.settings.pickedMonth));
  }

  controlApplyButtonClick() {
    if (this.areInputsExists()) this.calendarWrapper.setAttribute('hidden', 'hidden');
    if (this.inputFrom) this.inputFrom.classList.remove('input__field_active');
    if (this.inputTo) this.inputTo.classList.remove('input__field_active');
    if (this.inputTotal) this.inputTotal.classList.remove('input__field_active');
  }

  controlInputClick() {
    if (this.calendarWrapper.hasAttribute('hidden')) {
      if (this.inputFrom) this.inputFrom.classList.add('input__field_active');
      if (this.inputTo) this.inputTo.classList.add('input__field_active');
      if (this.inputTotal) this.inputTotal.classList.add('input__field_active');
      this.calendarWrapper.removeAttribute('hidden', 'hidden');
    } else {
      if (this.inputFrom) this.inputFrom.classList.remove('input__field_active');
      if (this.inputTo) this.inputTo.classList.remove('input__field_active');
      if (this.inputTotal) this.inputTotal.classList.remove('input__field_active');
      this.calendarWrapper.setAttribute('hidden', 'hidden');
    }
  }

  bindEventListeners() {
    this.buttonPrevious.addEventListener('click', this.controlPreviousButtonClick);
    this.buttonNext.addEventListener('click', this.controlNextButtonClick);
    this.clearButton.addEventListener('click', this.controlClearButtonClick);
    this.applyButton.addEventListener('click', this.controlApplyButtonClick);
    if (this.inputFrom) this.inputFrom.addEventListener('click', this.controlInputClick);
    if (this.inputTo) this.inputTo.addEventListener('click', this.controlInputClick);
    if (this.inputTotal) this.inputTotal.addEventListener('click', this.controlInputClick);
  }
}

export { Datepicker };
