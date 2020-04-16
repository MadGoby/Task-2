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

let monceTitle = document.querySelector('#dropdown-datepicker__monce-year');
let currentMonth = new Date().getMonth();
let currentMonthStr = new Date().toLocaleString('ru', { month: 'long' });
let currentYear = new Date().getFullYear();
let firstMonthDay = new Date(currentYear, currentMonth, 1).getDay()

// Дней в текущем месяце
let daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate()

// Calendar Lines
let calendarLine1 = document.querySelector('.dropdown-datepicker__datepicker-line-1');
let calendarLine2 = document.querySelector('.dropdown-datepicker__datepicker-line-2')
let calendarLine3 = document.querySelector('.dropdown-datepicker__datepicker-line-3')
let calendarLine4 = document.querySelector('.dropdown-datepicker__datepicker-line-4')
let calendarLine5 = document.querySelector('.dropdown-datepicker__datepicker-line-5')
// Display Month and Year
currentMonthStr = currentMonthStr.charAt(0).toUpperCase() + currentMonthStr.slice(1);
monceTitle.innerHTML = currentMonthStr + " " + currentYear
// Making Lines in calendar
let monthStartDateCounter = 1;
let tableCounter = 1;
let emptyTdCounter = 1;

function oneCalendarLine(appendanleLine) {
  if (firstMonthDay > 1) {
    while(emptyTdCounter < firstMonthDay) {
      let emptyTd = document.createElement('td')
      calendarLine1.append(emptyTd)
      emptyTdCounter++
    }
    tableCounter = emptyTdCounter;
    emptyTdCounter = 1;
    firstMonthDay = 0;
  }
  while (tableCounter <= 7 & monthStartDateCounter <= daysInCurrentMonth) {
    let fullTd = document.createElement('td')
    fullTd.innerHTML= monthStartDateCounter;
    appendanleLine.append(fullTd)
    monthStartDateCounter++
    tableCounter++
  }
  tableCounter = 1;
}

// Date
function calendar() {
  oneCalendarLine(calendarLine1)
  oneCalendarLine(calendarLine2)
  oneCalendarLine(calendarLine3)
  oneCalendarLine(calendarLine4)
  oneCalendarLine(calendarLine5)
}

calendar()