let uiRoomsButton = document.querySelector(".ui-dropdown-rooms-button")
let uiExpendedRoomsBody = document.querySelector(".uiRoomsExpendedBody")
let uiRoomsBodyBorder = document.querySelector(".ui-dropdown-rooms-button_border")
let uiRoomsDisplayPosition = window.getComputedStyle(uiExpendedRoomsBody).display;
let roomsStyle = uiExpendedRoomsBody.style
let borderButton = uiRoomsBodyBorder.style

uiRoomsButton.onclick = function(){
  if (uiRoomsDisplayPosition === "none") {
    roomsStyle.display = "block"
    uiRoomsDisplayPosition = 'block'
    borderButton.borderColor = "rgba(31, 32, 65, 0.5)"
    borderButton.borderBottom = "none"
  } else {
    roomsStyle.display = "none"
    uiRoomsDisplayPosition = 'none'
    borderButton.borderColor = "rgba(31, 32, 65, 0.25)"
    borderButton.borderBottom = "1px solid rgba(31, 32, 65, 0.25)"
  }
};

