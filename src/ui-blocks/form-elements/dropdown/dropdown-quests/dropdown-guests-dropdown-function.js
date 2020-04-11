let uiGuestsButton = document.querySelector("#ui-dropdown-guests-button")
let uiExpendedGuestsBody = document.querySelector("#uiGuestsExpendedBody")
let uiGuestsBodyBorder = document.querySelector("#dropdown-guests_input")

let uiGuestsButton2 = document.querySelector("#ui-dropdown-guests-button_2")
let uiExpendedGuestsBody2 = document.querySelector("#uiGuestsExpendedBody_2")
let uiGuestsBodyBorder2 = document.querySelector("#dropdown-guests_input_2")


// First dropdown
uiGuestsButton.onclick = function(){
  if (uiExpendedGuestsBody.style.display === "none") {
    uiExpendedGuestsBody.style.display = "block"
    uiGuestsBodyBorder.style.borderColor = "rgba(31, 32, 65, 0.5)"
    uiGuestsBodyBorder.style.borderBottom = "none"
  } else {
    uiExpendedGuestsBody.style.display = "none"
    uiGuestsBodyBorder.style.borderColor = "rgba(31, 32, 65, 0.25)"
    uiGuestsBodyBorder.style.borderBottom = "1px solid rgba(31, 32, 65, 0.25)"
  }
};
// Second dropdown
uiGuestsButton2.onclick = function(){
  if (uiExpendedGuestsBody2.style.display === "none") {
    uiExpendedGuestsBody2.style.display = "block"
    uiGuestsBodyBorder2.style.borderColor = "rgba(31, 32, 65, 0.5)"
    uiGuestsBodyBorder2.style.borderBottom = "none"
  } else {
    uiExpendedGuestsBody2.style.display = "none"
    uiGuestsBodyBorder2.style.borderColor = "rgba(31, 32, 65, 0.25)"
    uiGuestsBodyBorder2.style.borderBottom = "1px solid rgba(31, 32, 65, 0.25)"
  }
};