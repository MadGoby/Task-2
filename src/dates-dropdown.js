import "./dates-dropdown.scss"
let startDate = document.querySelector(".dropdown-date-label-start");
let endDate = document.querySelector(".dropdown-date-label-end");
let datePicker = document.querySelector("#dropdown-datepicker-body");

startDate.onclick = function(){
  if ( datePicker.style.display == "none" ) {
    datePicker.style.display = "block"
    endDate.disabled = true; 
  } else {
    datePicker.style.display = "none"
    endDate.disabled = false; 
  }
};
endDate.onclick = function(){
  if ( datePicker.style.display == "none" ) {
    datePicker.style.display = "block"
  } else {
    datePicker.style.display = "none"
  }
};

// Calendar Lines
let calendarLine1 = document.querySelector('.dropdown-datepicker__datepicker-line-1');
let calendarLine2 = document.querySelector('.dropdown-datepicker__datepicker-line-2')
let calendarLine3 = document.querySelector('.dropdown-datepicker__datepicker-line-3')
let calendarLine4 = document.querySelector('.dropdown-datepicker__datepicker-line-4')
let calendarLine5 = document.querySelector('.dropdown-datepicker__datepicker-line-5')
let calendarLine6 = document.querySelector('.dropdown-datepicker__datepicker-line-6')

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
    emptyTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
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
    fullTd.innerHTML= monthStartDateCounter;
    if (monthStartDateCounter == new Date().getDate() & currentYear == new Date().getFullYear() & currentMonth == new Date().getMonth()) {
      fullTd.classList.add('dropdown-datepicker__datepicker-body__current-day')
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
      fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
      calendarLine6.append(fullTd)
      monthStartDateCounter++
      nextMonthDaysCounter++
    }
  }
  let nextMonthDaysCounter = calendarLine5.childElementCount
  while (nextMonthDaysCounter < 7) {
    let fullTd = document.createElement('td')
    fullTd.innerHTML= monthStartDateCounter;
    fullTd.classList.add('dropdown-datepicker__datepicker-body__bright-td')
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
  console.log(firstMonthDay)
})






