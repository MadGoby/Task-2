import "./dates-dropdown.scss"
let startDate = document.querySelector(".dropdown-date-label-start");
let endDate = document.querySelector(".dropdown-date-label-end");
let datePicker = document.querySelector("#dropdown-datepicker-body");
let datePickerDisplayPosition = window.getComputedStyle(datePicker).display;
let startCalLabel = startDate.querySelector('.dropdown-date__text')
let endCalLabel = endDate.querySelector('.dropdown-date__text')
let arrivalEventListener = false;
let departurelEventListener = false;
let arrivalDatePicked = false;
let departureDatePicked = false;
let arrivalElement
let departureElement
let startFullPickedDate 
let endFullPickedDate
let intermediateMainFullDate
let intermediatePreviousFullDate
let intermediateNextFullDate

// Close and Open Function
startDate.onclick = function(){
  if ( datePickerDisplayPosition == "none" ) {
    datePicker.style.display = "block"
    endDate.disabled = true;
    datePicker.addEventListener('click',  startCalLabelFunction)
    arrivalEventListener = true;
    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;
  } else {
    datePicker.style.display = "none"
    endDate.disabled = false;
    if (departurelEventListener == true) {
      datePicker.removeEventListener('click', endCalLabelFunction)
      departurelEventListener = false
    } else {
      datePicker.removeEventListener('click',  startCalLabelFunction)
      arrivalEventListener = false
    }
    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;
  }
};
endDate.onclick = function(){
  if ( datePickerDisplayPosition == "none" ) {
    datePicker.style.display = "block"
    datePicker.addEventListener('click', endCalLabelFunction)
    departurelEventListener = true
    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;
  } else {
    datePicker.style.display = "none"
    if (arrivalEventListener == true) {
      datePicker.removeEventListener('click',  startCalLabelFunction)
      arrivalEventListener = false
    } else {
      datePicker.removeEventListener('click', endCalLabelFunction)
      departurelEventListener = false
    }
    datePickerDisplayPosition = window.getComputedStyle(datePicker).display;
  }
}

// Calendar Lines
let calendarLine1 = document.querySelector('.dropdown-datepicker__datepicker-line-1');
let calendarLine2 = document.querySelector('.dropdown-datepicker__datepicker-line-2')
let calendarLine3 = document.querySelector('.dropdown-datepicker__datepicker-line-3')
let calendarLine4 = document.querySelector('.dropdown-datepicker__datepicker-line-4')
let calendarLine5 = document.querySelector('.dropdown-datepicker__datepicker-line-5')
let calendarLine6 = document.querySelector('.dropdown-datepicker__datepicker-line-6')

let calendarBody = document.querySelector('.dropdown-datepicker__datepicker-body')

// Making Lines in calendar
let monthStartDateCounter = 1;
let tableCounter = 1;
let emptyTdCounter = 1;

// Dates
let monceTitle = document.querySelector('#dropdown-datepicker__monce-year');
let currentMonth = new Date().getMonth();
let currentMonthStr = new Date().toLocaleString('ru', { month: 'long' });
let currentYear = new Date().getFullYear();
let firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()
let actualFullDate = new Date()

// Days in previous month
let daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()
// Days in current month
let daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

// Calendar Dates
function getDateForCalendar (sign) {
  currentMonth = sign;
  if (currentMonth == -1) {
    currentMonth = 11
    currentYear = currentYear - 1
    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()
    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  } else if (currentMonth == 13 || currentMonth == 12) {
    currentMonth = 0
    currentYear = currentYear + 1
    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()
    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  } else {
    firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()
    daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  }
}

// Display Month and Year
function displayMonth() {
  currentMonthStr = new Date(currentYear, currentMonth, 1).toLocaleString('ru', {month: 'long'})
  currentMonthStr = currentMonthStr.charAt(0).toUpperCase() + currentMonthStr.slice(1);
  monceTitle.innerHTML = currentMonthStr + " " + currentYear
}
// Previous Month Days
function previousMonthDays() {
  if (firstMonthDay == 0) {
    firstMonthDay = 7;
  }
  daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()
  daysInPreviousMonth = daysInPreviousMonth - firstMonthDay + 2

  while(emptyTdCounter < firstMonthDay) {
    let emptyTd = document.createElement('td')
    emptyTd.innerHTML = daysInPreviousMonth
    emptyTd.setAttribute('data-month', currentMonth)
    emptyTd.setAttribute('data-date', daysInPreviousMonth)
    emptyTd.setAttribute('data-year', currentYear)
    intermediatePreviousFullDate = new Date(currentYear, currentMonth - 1, daysInPreviousMonth)
    emptyTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
    if (arrivalDatePicked == true & departureDatePicked == true) {
      if (intermediatePreviousFullDate > startFullPickedDate & intermediatePreviousFullDate < endFullPickedDate) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (emptyTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & emptyTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & emptyTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        emptyTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= daysInPreviousMonth;
        emptyTd.appendChild(startInnerDate)
      }
      if (emptyTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & emptyTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & emptyTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        emptyTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= daysInPreviousMonth;
        emptyTd.appendChild(endInnerDate)
      }
    } else if (arrivalDatePicked == true) {
      if (intermediatePreviousFullDate > startFullPickedDate) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (emptyTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & emptyTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & emptyTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        emptyTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= daysInPreviousMonth;
        emptyTd.appendChild(startInnerDate)
      }
    } else if (departureDatePicked == true) {
      if (intermediatePreviousFullDate < endFullPickedDate & intermediatePreviousFullDate > new Date()) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (emptyTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & emptyTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & emptyTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        emptyTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        emptyTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= daysInPreviousMonth;
        emptyTd.appendChild(endInnerDate)
      }
    }
    calendarLine1.append(emptyTd)
    daysInPreviousMonth++
    emptyTdCounter++
  }
  tableCounter = emptyTdCounter;
  emptyTdCounter = 1;
}

// Main Calendar Function
function oneCalendarLine(appendanleLine) {
  while (tableCounter <= 7 & monthStartDateCounter <= daysInCurrentMonth) {
    let fullTd = document.createElement('td')
    fullTd.setAttribute('data-month', currentMonth + 1)
    fullTd.setAttribute('data-date', monthStartDateCounter)
    fullTd.setAttribute('data-year', currentYear)
    intermediateMainFullDate = new Date(currentYear, currentMonth, monthStartDateCounter)
    fullTd.innerHTML= monthStartDateCounter;
    if (monthStartDateCounter == new Date().getDate() & currentYear == new Date().getFullYear() & currentMonth == new Date().getMonth()) {
      fullTd.classList.add('dropdown-datepicker__datepicker-body__current-day')
    }
    if(arrivalDatePicked == true & departureDatePicked == true) {
      if (intermediateMainFullDate > startFullPickedDate & intermediateMainFullDate < endFullPickedDate) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        fullTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(startInnerDate)
      }
      if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        fullTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(endInnerDate)
      }
    } else if (arrivalDatePicked == true) {
      if (intermediateMainFullDate > startFullPickedDate) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        fullTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(startInnerDate)
      }
    } else if (departureDatePicked == true) {
      if (intermediateMainFullDate < endFullPickedDate & intermediateMainFullDate > new Date()) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        fullTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(endInnerDate)
      }
    }
    appendanleLine.append(fullTd)
    monthStartDateCounter++
    tableCounter++
  }
  tableCounter = 1;
}

// Next Month Days
function nextMonthDays() {
  monthStartDateCounter = 1
  if (calendarLine6.childElementCount > 0) {
    let nextMonthDaysCounter = calendarLine6.childElementCount
    while (nextMonthDaysCounter < 7) {
      let fullTd = document.createElement('td')
      fullTd.innerHTML= monthStartDateCounter;
      fullTd.setAttribute('data-month', currentMonth + 2)
      fullTd.setAttribute('data-date', monthStartDateCounter)
      fullTd.setAttribute('data-year', currentYear)
      intermediateNextFullDate = new Date(currentYear, currentMonth + 1, monthStartDateCounter)
      fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
      if (arrivalDatePicked == true & departureDatePicked == true) {
        if (intermediateNextFullDate > startFullPickedDate & intermediateNextFullDate < endFullPickedDate) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
        }
        if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
          fullTd.innerHTML = ''
          let startInnerDate = document.createElement('p')
          startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
          startInnerDate.innerHTML= monthStartDateCounter;
          fullTd.appendChild(startInnerDate)
        }
        if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
          fullTd.innerHTML = ''
          let endInnerDate = document.createElement('p')
          endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
          endInnerDate.innerHTML= monthStartDateCounter;
          fullTd.appendChild(endInnerDate)
        }
      } else if (arrivalDatePicked == true) {
        if (intermediateNextFullDate > startFullPickedDate) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
        }
        if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
          fullTd.innerHTML = ''
          let startInnerDate = document.createElement('p')
          startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
          startInnerDate.innerHTML= monthStartDateCounter;
          fullTd.appendChild(startInnerDate)
        }
      } else if (departureDatePicked == true) {
        if (intermediateNextFullDate < endFullPickedDate & intermediateNextFullDate > new Date()) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
        }
        if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
          fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
          fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
          fullTd.innerHTML = ''
          let endInnerDate = document.createElement('p')
          endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
          endInnerDate.innerHTML= monthStartDateCounter;
          fullTd.appendChild(endInnerDate)
        }
      }
      calendarLine6.append(fullTd)
      monthStartDateCounter++
      nextMonthDaysCounter++
    }
  }
  let nextMonthDaysCounter = calendarLine5.childElementCount
  while (nextMonthDaysCounter < 7) {
    let fullTd = document.createElement('td')
    fullTd.innerHTML= monthStartDateCounter;
    fullTd.setAttribute('data-month', currentMonth + 2)
    fullTd.setAttribute('data-date', monthStartDateCounter)
    fullTd.setAttribute('data-year', currentYear)
    intermediateNextFullDate = new Date(currentYear, currentMonth + 1, monthStartDateCounter)
    fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
    if (arrivalDatePicked == true & departureDatePicked == true) {
      if (intermediateNextFullDate > startFullPickedDate & intermediateNextFullDate < endFullPickedDate) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        fullTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(startInnerDate)
      }
      if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        fullTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(endInnerDate)
      }
    }else if (arrivalDatePicked == true) {
      if (fullTd.getAttribute('data-date') == arrivalElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == arrivalElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == arrivalElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-start')
        fullTd.innerHTML = ''
        let startInnerDate = document.createElement('p')
        startInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-start-inner')
        startInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(startInnerDate)    
      }
      if (intermediateNextFullDate > startFullPickedDate) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
    } else if (departureDatePicked == true) {
      if (intermediateNextFullDate < endFullPickedDate & intermediateNextFullDate > new Date()) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-dates')
      }
      if (fullTd.getAttribute('data-date') == departureElement.getAttribute('data-date') & fullTd.getAttribute('data-month') == departureElement.getAttribute('data-month') & fullTd.getAttribute('data-year') == departureElement.getAttribute('data-year')) {
        fullTd.classList.add('dropdown-datepicker__datepicker-body__picked-date')
        fullTd.classList.add('dropdown-datepicker__datepicker-body__intermediate-end')
        fullTd.innerHTML = ''
        let endInnerDate = document.createElement('p')
        endInnerDate.classList.add('dropdown-datepicker__datepicker-body__intermediate-end-inner')
        endInnerDate.innerHTML= monthStartDateCounter;
        fullTd.appendChild(endInnerDate)
      }
    }
    calendarLine5.append(fullTd)
    monthStartDateCounter++
    nextMonthDaysCounter++
  }
}

// Date
function calendar() {
  displayMonth()
  previousMonthDays()
  oneCalendarLine(calendarLine1)
  oneCalendarLine(calendarLine2)
  oneCalendarLine(calendarLine3)
  oneCalendarLine(calendarLine4)
  oneCalendarLine(calendarLine5)
  oneCalendarLine(calendarLine6)
  nextMonthDays()
}

calendar()

// Cleaning Function
function CleaningOldData() {
  calendarLine1.innerHTML= ''
  calendarLine2.innerHTML= ''
  calendarLine3.innerHTML= ''
  calendarLine4.innerHTML= ''
  calendarLine5.innerHTML= ''
  calendarLine6.innerHTML= ''
}

// Calendar Next Month Function 
let calendarButtonNext = document.querySelector("#dropdown-datepicker__plus-button")

calendarButtonNext.addEventListener('click', function() {
  monthStartDateCounter = 1;
  tableCounter = 1;
  emptyTdCounter = 1;
  getDateForCalendar(currentMonth + 1)
  CleaningOldData()
  calendar()
})

// Calendar Previous Month Function 
let calendarButtonprevious = document.querySelector("#dropdown-datepicker__minus-button")

calendarButtonprevious.addEventListener('click', function() {
  monthStartDateCounter = 1;
  tableCounter = 1;
  emptyTdCounter = 1;
  getDateForCalendar(currentMonth - 1)
  CleaningOldData()
  calendar()
})

// Start Label EventListener
function startCalLabelFunction(event) {
  let pickedDate = event.target.innerHTML;
  let pickedMonth = event.target.getAttribute('data-month');
  if (pickedMonth == null) {
      return
  } else {
    if (departureDatePicked == true) {
      if (actualFullDate < new Date(currentYear, pickedMonth - 1, pickedDate) & new Date(currentYear, pickedMonth - 1, pickedDate) < endFullPickedDate) {
        arrivalDatePicked = true;
        arrivalElement = event.target
        startFullPickedDate = new Date(currentYear, pickedMonth - 1, pickedDate)
        if (pickedDate < 10 & pickedMonth < 10) {
          startCalLabel.innerText = '0' + pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else if (pickedDate < 10) {
          startCalLabel.innerText = '0' + pickedDate + '.' + pickedMonth + '.' + currentYear;
        } else if (pickedMonth < 10 ) {
          startCalLabel.innerText = pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else {
          startCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;
        }
      } else {
        alert('Пожалуйста, выберете дату, как минимум, на день позже текущей и на день раньше даты выезда. Сегодня: ' + actualFullDate)
      } 
    } else {
      if (actualFullDate < new Date(currentYear, pickedMonth - 1, pickedDate)) {
        arrivalDatePicked = true;
        arrivalElement = event.target
        startFullPickedDate = new Date(currentYear, pickedMonth - 1, pickedDate)
        if (pickedDate < 10 & pickedMonth < 10) {
          startCalLabel.innerText = '0' + pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else if (pickedDate < 10) {
          startCalLabel.innerText = '0' + pickedDate + '.' + pickedMonth + '.' + currentYear;
        } else if (pickedMonth < 10 ) {
          startCalLabel.innerText = pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else {
          startCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;
        }
      } else {
        alert('Пожалуйста, выберете дату, как минимум, на день позже текущей. Сегодня: ' + actualFullDate)
      }
    } 
  }
  monthStartDateCounter = 1;
  tableCounter = 1;
  emptyTdCounter = 1;
  getDateForCalendar(currentMonth)
  CleaningOldData()
  calendar()
}

// End Label EventListener
function endCalLabelFunction(event) {
  let pickedDate = event.target.innerHTML
  let pickedMonth = event.target.getAttribute('data-month')
  if (pickedMonth == null) {
    return
  } else {
    if (arrivalDatePicked == true) {
      if (startFullPickedDate < new Date(currentYear, pickedMonth - 1, pickedDate)) {
        departureDatePicked = true;
        departureElement = event.target
        endFullPickedDate = new Date(currentYear, pickedMonth - 1, pickedDate)
        if (pickedDate < 10 & pickedMonth < 10) {
          endCalLabel.innerText = '0' + pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else if (pickedDate < 10) {
          endCalLabel.innerText = '0' + pickedDate + '.' + pickedMonth + '.' + currentYear;
        } else if (pickedMonth < 10 ) {
          endCalLabel.innerText = pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else {
          endCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;
        } 
      } else {
        alert('Пожалуйста, выберете дату, как минимум, на день позже даты прибытия.')
      }
    } else {
      if (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1) < new Date(currentYear, pickedMonth - 1, pickedDate)) {
        departureDatePicked = true;
        departureElement = event.target
        endFullPickedDate = new Date(currentYear, pickedMonth - 1, pickedDate)
        if (pickedDate < 10 & pickedMonth < 10) {
          endCalLabel.innerText = '0' + pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else if (pickedDate < 10) {
          endCalLabel.innerText = '0' + pickedDate + '.' + pickedMonth + '.' + currentYear;
        } else if (pickedMonth < 10 ) {
          endCalLabel.innerText = pickedDate + '.' + '0' + pickedMonth + '.' + currentYear;
        } else {
          endCalLabel.innerText = pickedDate + '.' + pickedMonth + '.' + currentYear;
        }
      } else {
        alert('Пожалуйста, выберете дату, как минимум, на два дня позже текущей. Сегодня: ' + actualFullDate)
      }
    }
  } 
  monthStartDateCounter = 1;
  tableCounter = 1;
  emptyTdCounter = 1;
  getDateForCalendar(currentMonth)
  CleaningOldData()
  calendar()
}