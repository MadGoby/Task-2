let uiGuestsButton2 = document.querySelector("#ui-dropdown-guests-button_2")
let uiExpendedGuestsBody2 = document.querySelector("#uiGuestsExpendedBody_2")
let uiGuestsBodyBorder2 = document.querySelector("#dropdown-guests_input_2")
let GuestsDisplayPosition2 = window.getComputedStyle(uiExpendedGuestsBody2).display;

// Dropdown
uiGuestsButton2.onclick = function(){
  if (uiExpendedGuestsBody2 === "none") {
    uiExpendedGuestsBody2.style.display = "block"
    uiExpendedGuestsBody2 = "block"
    uiGuestsBodyBorder2.style.borderColor = "rgba(31, 32, 65, 0.5)"
    uiGuestsBodyBorder2.style.borderBottom = "none"
  } else {
    uiExpendedGuestsBody2.style.display = "none"
    uiExpendedGuestsBody2 = "none"
    uiGuestsBodyBorder2.style.borderColor = "rgba(31, 32, 65, 0.25)"
    uiGuestsBodyBorder2.style.borderBottom = "1px solid rgba(31, 32, 65, 0.25)"
  }
};