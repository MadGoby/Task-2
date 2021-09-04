export default function datepickerFunctionality(settings) {
  const { targetClass, inputFromClass, inputToClass, inputTotalClass, defaultSettings, size } = settings;

  function elementsInitialization() {
    const datepickerBody = document.querySelector(targetClass);
    const inputFrom = document.querySelector(inputFromClass);
    const inputTo = document.querySelector(inputToClass);
    const inputTotal = document.querySelector(inputTotalClass);
    const buttonPrevious = datepickerBody.querySelector('.js-datepicker__scroll-button_arrow_back');
    const buttonNext = datepickerBody.querySelector('.js-datepicker__scroll-button_arrow_forward');
    const selectedMonth = datepickerBody.querySelector('.js-datepicker__selected-month');
    const calendar = datepickerBody.querySelector('.js-datepicker__calendar');
    const lines = [...calendar.querySelectorAll('.js-datepicker__calendar-line')];
    const clearButton = datepickerBody.querySelector('.js-datepicker__clear-button');
    const applyButton = datepickerBody.querySelector('.js-datepicker__apply-button');

    return {
      datepickerBody,
      inputFrom,
      inputTo,
      inputTotal,
      buttonPrevious,
      buttonNext,
      selectedMonth,
      calendar,
      clearButton,
      applyButton,
      lines,
    };
  }

  const {
    datepickerBody,
    inputFrom,
    inputTo,
    inputTotal,
    buttonPrevious,
    buttonNext,
    selectedMonth,
    calendar,
    lines,
    clearButton,
    applyButton,
  } = elementsInitialization();

  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  let currentInputTarget = inputFrom;
  if (inputTotal) currentInputTarget = inputTotal;
  let currentValueTarget = 'from';

  let pickedYear;
  let pickedMonth;
  let currentDay;
  let from;
  let to;

  function setsStandardSettings() {
    if (defaultSettings) {
      if (Object.prototype.hasOwnProperty.call(defaultSettings, 'pickedYear')) pickedYear = defaultSettings.pickedYear;
      if (Object.prototype.hasOwnProperty.call(defaultSettings, 'pickedMonth'))
        pickedMonth = defaultSettings.pickedMonth;
      if (Object.prototype.hasOwnProperty.call(defaultSettings, 'currentDay')) currentDay = defaultSettings.currentDay;
      if (Object.prototype.hasOwnProperty.call(defaultSettings, 'from')) from = defaultSettings.from;
      if (Object.prototype.hasOwnProperty.call(defaultSettings, 'to')) to = defaultSettings.to;
    } else {
      pickedYear = new Date().getFullYear();
      pickedMonth = new Date().getMonth();
      currentDay = new Date();
      from = undefined;
      to = undefined;
    }
  }

  setsStandardSettings();

  function makesCalendarByDate(data) {
    const { year, month } = data;
    const calendarDays = [];

    function makeCalendarCell(date, whatMonth) {
      const calendarCell = document.createElement('td');
      calendarCell.classList.add('datepicker__calendar-cell');

      if (size === 'small') {
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

      function checkRangeMatch() {
        return date >= from && date <= to;
      }

      if (checkMatchByDay(currentDay)) {
        calendarCell.classList.add('datepicker__calendar-cell_color_green');
      }

      if (from) {
        if (checkMatchByDay(from)) {
          calendarCell.classList.add('datepicker__calendar-cell_color_purple');
        }
      }

      if (to) {
        if (checkMatchByDay(to)) {
          calendarCell.classList.add('datepicker__calendar-cell_color_purple');
        }
      }

      if (from && to) {
        if (checkRangeMatch() && checkMatchByDay(from)) {
          calendarCell.classList.add('datepicker__calendar-cell_right-half_shaded');
        } else if (checkRangeMatch() && checkMatchByDay(to)) {
          calendarCell.classList.add('datepicker__calendar-cell_left-half_shaded');
        } else if (checkRangeMatch()) {
          calendarCell.classList.add('datepicker__calendar-cell_shaded');
        }
      }

      calendarCell.innerText = date.getDate();
      return calendarCell;
    }

    function getPreviousMonthDays() {
      const previousDay = new Date(year, month, 0).getDay();

      for (let i = previousDay - 1; i >= 0; i -= 1) {
        const date = new Date(year, month, -i);
        calendarDays.push(makeCalendarCell(date, 'previous'));
      }
    }

    function getCurrentMonthDays() {
      const lastDay = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= lastDay; i += 1) {
        const date = new Date(year, month, i);
        calendarDays.push(makeCalendarCell(date, false));
      }
    }

    function getNextMonthDays() {
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
    }

    if (new Date(year, month).getDay() !== 1) {
      getPreviousMonthDays();
    }

    getCurrentMonthDays();

    if (new Date(year, month + 1, 0).getDay() !== 0) {
      getNextMonthDays();
    }

    return calendarDays;
  }

  function refreshCalendar(days) {
    let line = 0;
    let i = 0;

    while (i < days.length) {
      lines[line].append(days[i]);
      i += 1;
      if (Number.isInteger(i / 7) && i !== 0) {
        line += 1;
      }
    }
  }

  function clearCalendar() {
    lines.forEach((item) => {
      const line = item;
      line.innerHTML = '';
    });
  }

  function refreshSelectedMonth(month, year) {
    selectedMonth.innerText = `${monthNames[month]} ${year}`;
  }

  const calendarDays = makesCalendarByDate({ year: pickedYear, month: pickedMonth });
  refreshCalendar(calendarDays);
  refreshSelectedMonth(pickedMonth, pickedYear);

  function checkDateForValidity(value, date) {
    const pickedDate = new Date(date.year, date.month - 1, date.day);
    const nextDate = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1);
    let result = false;

    if (currentInputTarget === inputFrom && currentInputTarget) {
      if (pickedDate > currentDay) {
        currentInputTarget.setAttribute('value', value);
        from = new Date(date.year, date.month - 1, date.day);

        if (pickedDate > to) {
          inputTo.setAttribute('value', '');
          to = undefined;
        }

        currentInputTarget = inputTo;
        result = true;
      }
    } else if (currentInputTarget === inputTo && currentInputTarget) {
      if (from) {
        if (pickedDate > from) {
          currentInputTarget.setAttribute('value', value);
          to = new Date(date.year, date.month - 1, date.day);
          currentInputTarget = inputFrom;
          result = true;
        }
      } else if (pickedDate > nextDate) {
        currentInputTarget.setAttribute('value', value);
        to = new Date(date.year, date.month - 1, date.day);
        result = true;
      }
    } else if (currentInputTarget === inputTotal || !currentInputTarget) {
      if (currentValueTarget === 'from') {
        if (pickedDate > currentDay) {
          from = new Date(date.year, date.month - 1, date.day);
          currentValueTarget = 'to';
          if (pickedDate > to) {
            to = undefined;
          }
          result = true;
        }
      } else if (pickedDate > nextDate && pickedDate > from) {
        to = new Date(date.year, date.month - 1, date.day);
        currentValueTarget = 'from';
        result = true;
      }
      const transformedFrom = `${from.getDate()} ${monthNames[from.getMonth()].slice(0, 3).toLowerCase()}`;
      let transformedto = '...';
      if (to) transformedto = `${to.getDate()} ${monthNames[to.getMonth()].slice(0, 3).toLowerCase()}`;
      const mainValue = `${transformedFrom} - ${transformedto}`;
      if (currentInputTarget) currentInputTarget.setAttribute('value', mainValue);
    }
    return result;
  }

  function calendarCellClick(event) {
    const { target } = event;

    function leadsToDoubleDigit(value) {
      if (+value < 10) {
        return `0${value}`;
      }
      return `${value}`;
    }

    function definesMonthOfSelectedDate() {
      if (target.getAttribute('data-month') === 'next') {
        return pickedMonth + 2;
      }
      if (target.getAttribute('data-month') === 'previous') {
        return pickedMonth;
      }
      return pickedMonth + 1;
    }

    const monthforOutput = definesMonthOfSelectedDate();
    const date = {
      day: leadsToDoubleDigit(target.innerText),
      month: leadsToDoubleDigit(monthforOutput),
      year: pickedYear,
    };

    const value = `${date.day}.${date.month}.${date.year}`;

    const result = checkDateForValidity(value, date);
    if (result) {
      pickedYear = new Date(pickedYear, pickedMonth).getFullYear();
      pickedMonth = new Date(pickedYear, pickedMonth).getMonth();
      clearCalendar();
      const days = makesCalendarByDate({ year: pickedYear, month: pickedMonth });
      refreshCalendar(days);
      refreshSelectedMonth(pickedMonth, pickedYear);
    }

    const calendarCells = [...calendar.querySelectorAll('td')];
    calendarCells.forEach((item) => {
      const cell = item;
      cell.addEventListener('click', calendarCellClick);
    });
  }

  function bindCalendarCellsListener() {
    const calendarCells = [...calendar.querySelectorAll('td')];

    calendarCells.forEach((item) => {
      const cell = item;
      cell.addEventListener('click', calendarCellClick);
    });
  }

  function refreshDatepicker(date) {
    pickedYear = date.getFullYear();
    pickedMonth = date.getMonth();
    clearCalendar();
    const days = makesCalendarByDate({ year: pickedYear, month: pickedMonth });
    refreshCalendar(days);
    refreshSelectedMonth(pickedMonth, pickedYear);
    bindCalendarCellsListener();
  }

  function nextMonthButtonClick() {
    const newDate = new Date(pickedYear, pickedMonth + 1);
    refreshDatepicker(newDate);
  }

  function previousMonthButtonClick() {
    const newDate = new Date(pickedYear, pickedMonth - 1);
    refreshDatepicker(newDate);
  }

  function inputsExists() {
    return inputTotal || inputFrom || inputTo;
  }

  function clearButtonClick() {
    if (from) {
      from = undefined;
    }

    if (to) {
      to = undefined;
    }

    if (inputsExists()) {
      if (currentInputTarget === inputTotal) {
        inputTotal.setAttribute('value', 'ДД.ММ - ДД.ММ');
      } else {
        inputFrom.setAttribute('value', 'ДД.ММ.ГГГГ');
        inputTo.setAttribute('value', 'ДД.ММ.ГГГГ');
        currentInputTarget = inputFrom;
      }
    }
    currentValueTarget = 'from';
    refreshDatepicker(new Date(pickedYear, pickedMonth));
  }

  function applyButtonClick() {
    if (inputsExists()) datepickerBody.setAttribute('hidden', 'hidden');
    if (inputFrom) inputFrom.classList.remove('input__field_active');
    if (inputTo) inputTo.classList.remove('input__field_active');
    if (inputTotal) inputTotal.classList.remove('input__field_active');
  }

  function inputClick() {
    if (datepickerBody.hasAttribute('hidden', 'hidden')) {
      if (inputFrom) inputFrom.classList.add('input__field_active');
      if (inputTo) inputTo.classList.add('input__field_active');
      if (inputTotal) inputTotal.classList.add('input__field_active');
      datepickerBody.removeAttribute('hidden', 'hidden');
    } else {
      if (inputFrom) inputFrom.classList.remove('input__field_active');
      if (inputTo) inputTo.classList.remove('input__field_active');
      if (inputTotal) inputTotal.classList.remove('input__field_active');
      datepickerBody.setAttribute('hidden', 'hidden');
    }
  }

  function bindEventListeners() {
    buttonPrevious.addEventListener('click', previousMonthButtonClick);
    buttonNext.addEventListener('click', nextMonthButtonClick);
    clearButton.addEventListener('click', clearButtonClick);
    applyButton.addEventListener('click', applyButtonClick);
    if (inputFrom) inputFrom.addEventListener('click', inputClick);
    if (inputTo) inputTo.addEventListener('click', inputClick);
    if (inputTotal) inputTotal.addEventListener('click', inputClick);
  }

  bindEventListeners();
  bindCalendarCellsListener();
}
