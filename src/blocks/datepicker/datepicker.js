function datepicerFunctionality(settings) {
  const {targetClass, inputFromClass, inputToClass, defaultSettings} = settings;
  
  function elementsInitialization() {
    let datepickerBody = document.querySelector(targetClass);
    let inputFrom = document.querySelector(inputFromClass);
    let inputTo = document.querySelector(inputToClass);
    let buttonPrevious = datepickerBody.querySelector(".js-datepicker__scroll-button_left");
    let buttonNext = datepickerBody.querySelector(".js-datepicker__scroll-button_right");
    let selectedMonth = datepickerBody.querySelector(".js-datepicker__selected-month");
    let calendar = datepickerBody.querySelector(".js-calendar");
    let calendarLine1 = calendar.querySelector(".js-calendar__line_num_1");
    let calendarLine2 = calendar.querySelector(".js-calendar__line_num_2");
    let calendarLine3 = calendar.querySelector(".js-calendar__line_num_3");
    let calendarLine4 = calendar.querySelector(".js-calendar__line_num_4");
    let calendarLine5 = calendar.querySelector(".js-calendar__line_num_5");
    let calendarLine6 = calendar.querySelector(".js-calendar__line_num_6");
    let clearButton = datepickerBody.querySelector(".js-datepicker__clear-button");
    let applyButton = datepickerBody.querySelector(".js-datepicker__apply-button");
    
    return {
      datepickerBody,
      inputFrom,
      inputTo,
      buttonPrevious,
      buttonNext,
      selectedMonth,
      calendar,
      clearButton,
      applyButton,
      lines: [
        calendarLine1,
        calendarLine2,
        calendarLine3,
        calendarLine4,
        calendarLine5,
        calendarLine6
      ]
    };
  };

  const {
    datepickerBody,
    inputFrom,
    inputTo,
    buttonPrevious,
    buttonNext,
    selectedMonth,
    calendar,
    lines,
    clearButton,
    applyButton,
  } = elementsInitialization();

  const monthNames = [
    "Январь", "Февраль", "Март",
    "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь",
    "Октябрь", "Ноябрь", "Декабрь"
  ];
  
  let currentInputTarget;

  let pickedYear;
  let pickedMonth;
  let currentDay;
  let from;
  let to;


  function setsStandardSettings() {
    if (defaultSettings) {
      defaultSettings.hasOwnProperty("pickedYear") ? pickedYear = defaultSettings.pickedYear : false;
      defaultSettings.hasOwnProperty("pickedMonth") ? pickedMonth = defaultSettings.pickedMonth : false;
      defaultSettings.hasOwnProperty("currentDay") ? currentDay = defaultSettings.currentDay : false;
      defaultSettings.hasOwnProperty("from") ? from = defaultSettings.from : false;
      defaultSettings.hasOwnProperty("to") ? to = defaultSettings.to : false;
    } else {
      pickedYear = new Date().getFullYear();
      pickedMonth = new Date().getMonth();
      currentDay = new Date()
    };
  };
  setsStandardSettings();
  
  function makesCalendarByDate(data) {
    const {year, month} = data;
    const calendarDays = [];
    function getPreviousMonthDays() {
      let previousDay = new Date(year, month, 0).getDay();

      for (let i = previousDay- 1; i >= 0; i--) {
        let date = new Date(year, month, -i);
        calendarDays.push(makeCalendarCell(date, "previous"))
      };
    };

    function getCurrentMonthDays() {
      let lastDay = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= lastDay; i++) {
        let date = new Date(year, month, i);
        calendarDays.push(makeCalendarCell(date, false));
      };
    };

    function getNextMonthDays() {
      let nextMonthDay = new Date(year, month + 1).getDay();
      if(nextMonthDay === 0) {
        nextMonthDay = 7
      };
      let day = 1;
      for (let i = nextMonthDay; i <= 7; i++) {
        let date = new Date(year, month + 1, day);
        calendarDays.push(makeCalendarCell(date, "next"));
        day++
      };
    };

    function makeCalendarCell(date, whatMonth) {
      let calendarCell = document.createElement("td");
      calendarCell.classList.add("calendar__cell");

      if(whatMonth === "next") {
        calendarCell.classList.add("calendar__cell_transparent");
        calendarCell.setAttribute("data-month", "next")
      } else if(whatMonth === "previous") {
        calendarCell.classList.add("calendar__cell_transparent");
        calendarCell.setAttribute("data-month", "previous")
      };

      function checkMatchByDay(day) {
        return day.getFullYear() == date.getFullYear() && day.getMonth() == date.getMonth() && day.getDate() == date.getDate();
      };
      function checkRangeMatch() {
        return (date >= from && date <= to);
      };
      
      if(checkMatchByDay(currentDay)) {
        calendarCell.classList.add("calendar__cell_current-day");
      };
      if (from) {
        if(checkMatchByDay(from)) {
          calendarCell.classList.add("calendar__cell_from");
        };
      };
      if (to) {
        if(checkMatchByDay(to)) {
          calendarCell.classList.add("calendar__cell_to");
        };
      };
      
      if (from && to) {
        if(checkRangeMatch() && checkMatchByDay(from)) {
          calendarCell.classList.add("calendar__cell_range-from");
        } else if(checkRangeMatch() && checkMatchByDay(to)) {
          calendarCell.classList.add("calendar__cell_range-to");
        } else if(checkRangeMatch()) {
          calendarCell.classList.add("calendar__cell_range");
        };
      };
      
      calendarCell.innerText = date.getDate();
      return calendarCell;
    };

    if (new Date(year, month).getDay() !== 1) {
      getPreviousMonthDays();
    };
    getCurrentMonthDays();
    if (new Date(year, month + 1, 0).getDay() !== 0) {
      getNextMonthDays();
    };
    
    return calendarDays;
  };

  function refreshCalendar(days) {
    let line = 0;
    let i = 0;
    while (i < days.length) {
      lines[line].append(days[i]);
      i++;
      if (Number.isInteger(i / 7) && i !== 0) {
        line++;
      };
    };
  };

  function clearCalendar() {
    lines.map(function(line) {
      line.innerHTML = "";
    });
  };

  function refreshSelectedMonth(month, year) {
    selectedMonth.innerText = `${monthNames[month]} ${year}`;
  };

  let calendarDays = makesCalendarByDate({year: pickedYear, month: pickedMonth});
  refreshCalendar(calendarDays);
  refreshSelectedMonth(pickedMonth, pickedYear);

  
  function bindEventListeners() {
    buttonPrevious.addEventListener("click", previousMonthButtonClick);
    buttonNext.addEventListener("click", nextMonthButtonClick);
    clearButton.addEventListener("click", clearButtonClick);
    applyButton.addEventListener("click", applyButtonClick);
    if (inputFrom) inputFrom.addEventListener("click", inputClick);
    if (inputTo) inputTo.addEventListener("click", inputClick);
  };

  function bindCalendarCellsListener() {
    let calendarCells = [...calendar.querySelectorAll("td")];
    if (inputFrom && inputTo) {
      calendarCells.map(function(cell) {
        cell.addEventListener("click", calendarCellClick);
      }); 
    }
  };

  function refreshDatepicker(date) {
    pickedYear = date.getFullYear();
    pickedMonth = date.getMonth();
    clearCalendar();
    let calendarDays = makesCalendarByDate({year: pickedYear, month: pickedMonth});
    refreshCalendar(calendarDays);
    refreshSelectedMonth(pickedMonth, pickedYear);
    bindCalendarCellsListener()
  };

  function nextMonthButtonClick() {
    let newDate = new Date(pickedYear, pickedMonth + 1);
    refreshDatepicker(newDate);
  };

  function previousMonthButtonClick() {
    let newDate = new Date(pickedYear, pickedMonth - 1);
    refreshDatepicker(newDate);
  };

  function clearButtonClick() {
    setsStandardSettings();
    let newDate = new Date(pickedYear, pickedMonth);
    refreshDatepicker(newDate);
  };

  function applyButtonClick() {
    if(inputFrom || inputTo) datepickerBody.setAttribute("hidden", "hidden");
  };
  
  function inputClick(event) {
    if (datepickerBody.hasAttribute("hidden", "hidden")) {
      currentInputTarget = event.target;
      currentInputTarget.classList.add("input_current-target")
      datepickerBody.removeAttribute("hidden", "hidden")
    } else {
      if(currentInputTarget && currentInputTarget !== event.target) {
        currentInputTarget.classList.remove("input_current-target")
        currentInputTarget = event.target;
        currentInputTarget.classList.add("input_current-target")
      } else {
        currentInputTarget.classList.remove("input_current-target")
        currentInputTarget = false;
        datepickerBody.setAttribute("hidden", "hidden");
      };
    };
  };

  function calendarCellClick(event) {
    let target = event.target;

    function leadsToDoubleDigit(value) {
      if(+value < 10) {
        return `0${value}`;
      } else {
        return `${value}`;
      }; 
    }

    function definesMonthOfSelectedDate() {
      if(target.getAttribute("data-month") === "next") {
        return pickedMonth + 2;
      } else if(target.getAttribute("data-month") === "previous") {
        return pickedMonth;
      } else {
        return pickedMonth + 1;
      };
    };

    let monthforOutput = definesMonthOfSelectedDate();
    let date = {
      day: leadsToDoubleDigit(target.innerText),
      month: leadsToDoubleDigit(monthforOutput),
      year: pickedYear
    };

    
    let value = `${date.day}.${date.month}.${date.year}`;

    function checkDateForValidity(value, date) {
      let pickedDate = new Date(date.year, date.month - 1, date.day);
      if (currentInputTarget === inputFrom) {
        if (to) {
          if (pickedDate > currentDay && pickedDate < to) {
            currentInputTarget.setAttribute("value", value);
            from = new Date(date.year, date.month - 1, date.day)
            refreshDatepicker(new Date(pickedYear, pickedMonth));
          } else {
            alert("Дата прибытия должна быть не ранее чем через день от текущей и как миниум за день до выезда!");
          }
        } else {
          if(pickedDate > currentDay) {
            currentInputTarget.setAttribute("value", value);
            from = new Date(date.year, date.month - 1, date.day)
            refreshDatepicker(new Date(pickedYear, pickedMonth));
          } else {
            alert("Дата прибытия должна быть не ранее чем через день от текущей!");
          };
        };
      } else if(currentInputTarget === inputTo) {
        if (from) {
          if (pickedDate > from) {
            currentInputTarget.setAttribute("value", value);
            to = new Date(date.year, date.month - 1, date.day)
            refreshDatepicker(new Date(pickedYear, pickedMonth));
          } else {
            alert("Дата выезда должна быть не ранее чем через день от даты прибытия!");
          }
        } else {
          if (pickedDate > new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1)) {
            to = new Date(date.year, date.month - 1, date.day)
            refreshDatepicker(new Date(pickedYear, pickedMonth));
          } else {
            alert("Дата выезда должна быть не ранее чем через два дня от текущей!");
          }
        };
      };
    };

    checkDateForValidity(value, date);
  };

  bindEventListeners();
  bindCalendarCellsListener()
};

export {datepicerFunctionality};