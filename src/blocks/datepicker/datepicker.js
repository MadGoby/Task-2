class Datepicker {
  constructor(target, templates) {
    this.container = target;
    this.settings = { monthRu: templates.monthRu };
    if (templates.pickedYear) {
      this.settings.pickedYear = Number(templates.pickedYear);
    } else {
      this.settings.pickedYear = new Date().getFullYear();
    }
    if (templates.pickedMonth) {
      this.settings.pickedMonth = Number(templates.pickedMonth);
    } else {
      this.settings.pickedMonth = new Date().getMonth();
    }
    if (templates.currentDay) {
      this.settings.currentDay = templates.currentDay;
    } else {
      this.settings.currentDay = new Date();
    }
    if (templates.dataFrom) {
      this.settings.from = templates.dataFrom;
    } else {
      this.settings.from = false;
    }
    if (templates.dataTo) {
      this.settings.to = templates.dataTo;
    } else {
      this.settings.to = false;
    }
    this.getHtmlElements();
    const calendarDays = this.makesCalendarByDate({ year: this.settings.pickedYear, month: this.settings.pickedMonth });
    this.refreshCalendar(calendarDays);
    this.refreshSelectedMonth(this.settings.pickedMonth, this.settings.pickedYear);
    this.bindObjectLink();
    this.bindEventListeners();
    this.bindCalendarCellsListener();
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

    this.currentInputTarget = this.inputFrom;
    if (this.inputTotal) {
      this.currentInputTarget = this.inputTotal;
    } else {
      this.currentInputTarget = this.inputFrom;
    }
    if (this.calendarWrapper.classList.contains('datepicker__calendar-wrapper_size_small')) {
      this.size = 'small';
    } else {
      this.size = false;
    }
    this.currentValueTarget = 'from';
  }

  makesCalendarByDate(data) {
    const { year, month } = data;
    const calendarDays = [];

    let makeCalendarCell = (date, whatMonth) => {
      const calendarCell = document.createElement('td');
      calendarCell.classList.add('datepicker__calendar-cell');

      if (this.size === 'small') {
        calendarCell.classList.add('datepicker__calendar-cell_size_small');
      }

      if (whatMonth === 'next') {
        calendarCell.classList.add('datepicker__calendar-cell_transparent');
        calendarCell.setAttribute('data-month', 'next');
      } else if (whatMonth === 'previous') {
        calendarCell.classList.add('datepicker__calendar-cell_transparent');
        calendarCell.setAttribute('data-month', 'previous');
      }

      function checkMatchByDay(day) {
        return (
          day.getFullYear() === date.getFullYear() &&
          day.getMonth() === date.getMonth() &&
          day.getDate() === date.getDate()
        );
      }

      let checkRangeMatch = () => date >= this.settings.from && date <= this.settings.to;
      checkRangeMatch = checkRangeMatch.bind(this);

      if (checkMatchByDay(this.settings.currentDay)) {
        calendarCell.classList.add('datepicker__calendar-cell_color_green');
      }

      if (this.settings.from) {
        if (checkMatchByDay(this.settings.from)) {
          calendarCell.classList.add('datepicker__calendar-cell_color_purple');
        }
      }

      if (this.settings.to) {
        if (checkMatchByDay(this.settings.to)) {
          calendarCell.classList.add('datepicker__calendar-cell_color_purple');
        }
      }

      if (this.settings.from && this.settings.to) {
        if (checkRangeMatch() && checkMatchByDay(this.settings.from)) {
          calendarCell.classList.add('datepicker__calendar-cell_right-half_shaded');
        } else if (checkRangeMatch() && checkMatchByDay(this.settings.to)) {
          calendarCell.classList.add('datepicker__calendar-cell_left-half_shaded');
        } else if (checkRangeMatch()) {
          calendarCell.classList.add('datepicker__calendar-cell_shaded');
        }
      }

      calendarCell.innerText = date.getDate();
      return calendarCell;
    };

    let getPreviousMonthDays = () => {
      const previousDay = new Date(year, month, 0).getDay();

      for (let i = previousDay - 1; i >= 0; i -= 1) {
        const date = new Date(year, month, -i);
        calendarDays.push(makeCalendarCell(date, 'previous'));
      }
    };
    getPreviousMonthDays = getPreviousMonthDays.bind(this);

    let getCurrentMonthDays = () => {
      const lastDay = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= lastDay; i += 1) {
        const date = new Date(year, month, i);
        calendarDays.push(makeCalendarCell(date, false));
      }
    };
    getCurrentMonthDays = getCurrentMonthDays.bind(this);

    let getNextMonthDays = () => {
      let nextMonthDay = new Date(year, month + 1).getDay();

      if (nextMonthDay === 0) {
        nextMonthDay = 7;
      }

      let day = 1;
      for (let i = nextMonthDay; i <= 7; i += 1) {
        const date = new Date(year, month + 1, day);
        calendarDays.push(makeCalendarCell(date, 'next'));
        day += 1;
      }
    };
    getNextMonthDays = getNextMonthDays.bind(this);

    makeCalendarCell = makeCalendarCell.bind(this);

    if (new Date(year, month).getDay() !== 1) {
      getPreviousMonthDays();
    }

    getCurrentMonthDays();

    if (new Date(year, month + 1, 0).getDay() !== 0) {
      getNextMonthDays();
    }

    return calendarDays;
  }

  refreshCalendar(days) {
    let line = 0;
    let i = 0;

    while (i < days.length) {
      this.lines[line].append(days[i]);
      i += 1;
      if (Number.isInteger(i / 7) && i !== 0) {
        line += 1;
      }
    }
  }

  clearCalendar() {
    this.lines.forEach((item) => {
      const line = item;
      line.innerHTML = '';
    });
  }

  refreshSelectedMonth(month, year) {
    this.selectedMonth.innerText = `${this.settings.monthRu[month]} ${year}`;
  }

  checkDateForValidity(value, date) {
    const pickedDate = new Date(date.year, date.month - 1, date.day);
    const nextDate = new Date(
      this.settings.currentDay.getFullYear(),
      this.settings.currentDay.getMonth(),
      this.settings.currentDay.getDate() + 1
    );
    let result = false;

    if (this.currentInputTarget === this.inputFrom && this.currentInputTarget) {
      if (pickedDate > this.settings.currentDay) {
        this.currentInputTarget.setAttribute('value', value);
        this.settings.from = new Date(date.year, date.month - 1, date.day);

        if (pickedDate > this.settings.to) {
          this.inputTo.setAttribute('value', '');
          this.settings.to = undefined;
        }

        this.currentInputTarget = this.inputTo;
        result = true;
      }
    } else if (this.currentInputTarget === this.inputTo && this.currentInputTarget) {
      if (this.settings.from) {
        if (pickedDate > this.settings.from) {
          this.currentInputTarget.setAttribute('value', value);
          this.settings.to = new Date(date.year, date.month - 1, date.day);
          this.currentInputTarget = this.inputFrom;
          result = true;
        }
      } else if (pickedDate > nextDate) {
        this.currentInputTarget.setAttribute('value', value);
        this.settings.to = new Date(date.year, date.month - 1, date.day);
        result = true;
      }
    } else if (this.currentInputTarget === this.inputTotal || !this.currentInputTarget) {
      if (this.currentValueTarget === 'from') {
        if (pickedDate > this.settings.currentDay) {
          this.settings.from = new Date(date.year, date.month - 1, date.day);
          this.currentValueTarget = 'to';
          if (pickedDate > this.settings.to) {
            this.settings.to = undefined;
          }
          result = true;
        }
      } else if (pickedDate > nextDate && pickedDate > this.settings.from) {
        this.settings.to = new Date(date.year, date.month - 1, date.day);
        this.currentValueTarget = 'from';
        result = true;
      }
      const transformedFrom = `${this.settings.from.getDate()} ${this.settings.monthRu[this.settings.from.getMonth()]
        .slice(0, 3)
        .toLowerCase()}`;
      let transformedto = '...';
      if (this.settings.to)
        transformedto = `${this.settings.to.getDate()} ${this.settings.monthRu[this.settings.to.getMonth()]
          .slice(0, 3)
          .toLowerCase()}`;
      const mainValue = `${transformedFrom} - ${transformedto}`;
      if (this.currentInputTarget) this.currentInputTarget.setAttribute('value', mainValue);
    }
    return result;
  }

  calendarCellClick(event) {
    const { target } = event;

    function leadsToDoubleDigit(value) {
      if (+value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }

    let definesMonthOfSelectedDate = () => {
      if (target.getAttribute('data-month') === 'next') {
        return this.settings.pickedMonth + 2;
      }
      if (target.getAttribute('data-month') === 'previous') {
        return this.settings.pickedMonth;
      }
      return this.settings.pickedMonth + 1;
    };
    definesMonthOfSelectedDate = definesMonthOfSelectedDate.bind(this);

    const monthforOutput = definesMonthOfSelectedDate();
    const date = {
      day: leadsToDoubleDigit(target.innerText),
      month: leadsToDoubleDigit(monthforOutput),
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

    const calendarCells = [...this.calendar.querySelectorAll('td')];
    calendarCells.forEach((item) => {
      const cell = item;
      cell.addEventListener('click', this.calendarCellClick);
    });
  }

  bindCalendarCellsListener() {
    const calendarCells = [...this.calendar.querySelectorAll('td')];

    calendarCells.forEach((item) => {
      const cell = item;
      cell.addEventListener('click', this.calendarCellClick);
    });
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

  nextMonthButtonClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) + 1);
    this.refreshDatepicker(newDate);
  }

  previousMonthButtonClick() {
    const newDate = new Date(this.settings.pickedYear, Number(this.settings.pickedMonth) - 1);
    this.refreshDatepicker(newDate);
  }

  inputsExists() {
    return this.inputTotal || this.inputFrom || this.inputTo;
  }

  clearButtonClick() {
    if (this.settings.from) {
      this.settings.from = undefined;
    }

    if (this.settings.to) {
      this.settings.to = undefined;
    }

    if (this.inputsExists()) {
      if (this.currentInputTarget === this.inputTotal) {
        this.inputTotal.setAttribute('value', 'ДД.ММ - ДД.ММ');
      } else {
        this.inputFrom.setAttribute('value', 'ДД.ММ.ГГГГ');
        this.inputTo.setAttribute('value', 'ДД.ММ.ГГГГ');
        this.currentInputTarget = this.inputFrom;
      }
    }
    this.currentValueTarget = 'from';
    this.refreshDatepicker(new Date(this.settings.pickedYear, this.settings.pickedMonth));
  }

  applyButtonClick() {
    if (this.inputsExists()) this.calendarWrapper.setAttribute('hidden', 'hidden');
    if (this.inputFrom) this.inputFrom.classList.remove('input__field_active');
    if (this.inputTo) this.inputTo.classList.remove('input__field_active');
    if (this.inputTotal) this.inputTotal.classList.remove('input__field_active');
  }

  inputClick() {
    if (this.calendarWrapper.hasAttribute('hidden', 'hidden')) {
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

  bindObjectLink() {
    this.inputClick = this.inputClick.bind(this);
    this.makesCalendarByDate = this.makesCalendarByDate.bind(this);
    this.refreshCalendar = this.refreshCalendar.bind(this);
    this.refreshSelectedMonth = this.refreshSelectedMonth.bind(this);
    this.previousMonthButtonClick = this.previousMonthButtonClick.bind(this);
    this.nextMonthButtonClick = this.nextMonthButtonClick.bind(this);
    this.clearButtonClick = this.clearButtonClick.bind(this);
    this.applyButtonClick = this.applyButtonClick.bind(this);
    this.calendarCellClick = this.calendarCellClick.bind(this);
  }

  bindEventListeners() {
    this.buttonPrevious.addEventListener('click', this.previousMonthButtonClick);
    this.buttonNext.addEventListener('click', this.nextMonthButtonClick);
    this.clearButton.addEventListener('click', this.clearButtonClick);
    this.applyButton.addEventListener('click', this.applyButtonClick);
    if (this.inputFrom) this.inputFrom.addEventListener('click', this.inputClick);
    if (this.inputTo) this.inputTo.addEventListener('click', this.inputClick);
    if (this.inputTotal) this.inputTotal.addEventListener('click', this.inputClick);
  }
}

export { Datepicker };
