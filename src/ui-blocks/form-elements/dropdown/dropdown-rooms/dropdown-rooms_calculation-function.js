let bedroomMinus = document.querySelector('#ui-bedroom-calc-minus-button')
let bedroomPlus = document.querySelector('#ui-bedroom-calc-plus-button')
let bedroomOutput = document.querySelector('#ui-output-bedroom')
let bedsMinus = document.querySelector('#ui-beds-calc-minus-button')
let bedsPlus = document.querySelector('#ui-beds-calc-plus-button')
let bedsOutput = document.querySelector('#ui-output-beds')
let bathroomMinus = document.querySelector('#ui-bathroom-calc-minus-button')
let bathroomPlus = document.querySelector('#ui-bathroom-calc-plus-button')
let bathroomOutput = document.querySelector('#ui-output-bathroom')
let mainOutput = document.querySelector("#dropdown-room-mainOutput")

// Rooms Dropdown Function
mainOutput.innerHTML= bedroomOutput.innerHTML + ' спальни, ' + bedsOutput.innerHTML + ' кровати...'

document.addEventListener('click', function(){
// Badrooms calc
  bedroomMinus.onclick = function () {
    if (bedroomOutput.innerHTML == 0) {
        return
    } else if (bedroomOutput.innerHTML == 1){
        bedroomMinus.style.opacity = 0.5;
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1
    } else if (bedroomOutput.innerHTML == 10){
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1
        bedroomPlus.style.opacity = 1;
    } else {
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) - 1;
    }
  };
  bedroomPlus.onclick = function () {
    if (bedroomOutput.innerHTML == 0) {
        bedroomMinus.style.opacity = 1;
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;
    } else if (bedroomOutput.innerHTML == 9){
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;
        bedroomPlus.style.opacity = 0.5;
    } else if (bedroomOutput.innerHTML == 10) {
        return
    } else {
        bedroomOutput.innerHTML = Number(bedroomOutput.innerHTML) + 1;
    }
  };
// Bads calc
  bedsMinus.onclick = function () {
    if (bedsOutput.innerHTML == 0) {
        return
    } else if (bedsOutput.innerHTML == 1){
        bedsMinus.style.opacity = 0.5;
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1
    } else if (bedsOutput.innerHTML == 10){
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1
        bedsPlus.style.opacity = 1;
    } else {
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) - 1;
    }
  };
  bedsPlus.onclick = function () {
    if (bedsOutput.innerHTML == 0) {
        bedsMinus.style.opacity = 1;
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;
    } else if (bedsOutput.innerHTML == 9){
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;
        bedsPlus.style.opacity = 0.5;
    } else if (bedsOutput.innerHTML == 10) {
        return
    } else {
        bedsOutput.innerHTML = Number(bedsOutput.innerHTML) + 1;
    }
  };
  // Bathrooms calc
  bathroomMinus.onclick = function () {
    if (bathroomOutput.innerHTML == 0) {
        return
    } else if (bathroomOutput.innerHTML == 1){
        bathroomMinus.style.opacity = 0.5;
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1
    } else if (bathroomOutput.innerHTML == 10){
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1
        bathroomPlus.style.opacity = 1;
    } else {
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) - 1;
    }
  };
  bathroomPlus.onclick = function () {
    if (bathroomOutput.innerHTML == 0) {
        bathroomMinus.style.opacity = 1;
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;
    } else if (bathroomOutput.innerHTML == 9){
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;
        bathroomPlus.style.opacity = 0.5;
    } else if (bathroomOutput.innerHTML == 10) {
        return
    } else {
        bathroomOutput.innerHTML = Number(bathroomOutput.innerHTML) + 1;
    }
  };

  mainOutput.innerHTML= bedroomOutput.innerHTML + ' спальни, ' + bedsOutput.innerHTML + ' кровати...'

});