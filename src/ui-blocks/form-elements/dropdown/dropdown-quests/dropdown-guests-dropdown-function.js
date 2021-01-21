let uiGuestsButton = document.querySelector(".ui-dropdown-guests-button")
let uiExpendedGuestsBody = document.querySelector(".uiGuestsExpendedBody")
let uiGuestsBodyBorder = document.querySelector(".dropdown-guests_input")
let GuestsDisplayPosition = window.getComputedStyle(uiExpendedGuestsBody).display;

// Dropdown
uiGuestsButton.onclick = function(){
  if (GuestsDisplayPosition === "none") {
    uiExpendedGuestsBody.style.display = "block"
    GuestsDisplayPosition = "block"
    uiGuestsBodyBorder.style.borderColor = "rgba(31, 32, 65, 0.5)"
    uiGuestsBodyBorder.style.borderBottom = "none"
  } else {
    uiExpendedGuestsBody.style.display = "none"
    GuestsDisplayPosition = "none"
    uiGuestsBodyBorder.style.borderColor = "rgba(31, 32, 65, 0.25)"
    uiGuestsBodyBorder.style.borderBottom = "1px solid rgba(31, 32, 65, 0.25)"
  }
};