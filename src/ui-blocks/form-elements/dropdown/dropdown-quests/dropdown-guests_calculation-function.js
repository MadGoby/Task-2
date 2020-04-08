let adultMinus = document.querySelector('#ui-adult-calc-minus-button')
let adultPlus = document.querySelector('#ui-adult-calc-plus-button')
let adultOutput = document.querySelector('#ui-output-adult')
let childrenMinus = document.querySelector('#ui-children-calc-minus-button')
let childrenPlus = document.querySelector('#ui-children-calc-plus-button')
let childrenOutput = document.querySelector('#ui-output-children')
let babyMinus = document.querySelector('#ui-baby-calc-minus-button')
let babyPlus = document.querySelector('#ui-baby-calc-plus-button')
let babyOutput = document.querySelector('#ui-output-baby')
let guestsMainOutput = document.querySelector(".dropdown-quests_extended")
let uiFirstClearButton = document.querySelector("#ui-first-guests-clear-button")

let adultMinus2 = document.querySelector('#ui-adult-calc-minus-button_2')
let adultPlus2 = document.querySelector('#ui-adult-calc-plus-button_2')
let adultOutput2 = document.querySelector('#ui-output-adult_2')
let childrenMinus2 = document.querySelector('#ui-children-calc-minus-button_2')
let childrenPlus2 = document.querySelector('#ui-children-calc-plus-button_2')
let childrenOutput2 = document.querySelector('#ui-output-children_2')
let babyMinus2 = document.querySelector('#ui-baby-calc-minus-button_2')
let babyPlus2 = document.querySelector('#ui-baby-calc-plus-button_2')
let babyOutput2 = document.querySelector('#ui-output-baby_2')
let guestsMainOutput2 = document.querySelector(".dropdown-quests_extended_2")
let uiFirstClearButton2 = document.querySelector("#ui-first-guests-clear-button_2")

// Rooms Dropdown Function

guestsMainOutput.innerHTML = 'Cколько гостей'
guestsMainOutput2.innerHTML = '3 гостя'

document.addEventListener('click', function(){
// Badrooms calc

// first
  adultMinus.onclick = function () {
    if (adultOutput.innerHTML == 0) {
        return
    } else if (adultOutput.innerHTML == 1){
        adultMinus.style.opacity = 0.5;
        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1
    } else if (adultOutput.innerHTML == 10){
        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1
        adultPlus.style.opacity = 1;
    } else {
        adultOutput.innerHTML = Number(adultOutput.innerHTML) - 1;
    }
  };
  adultPlus.onclick = function () {
    if (adultOutput.innerHTML == 0) {
        adultMinus.style.opacity = 1;
        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;
    } else if (adultOutput.innerHTML == 9){
        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;
        adultPlus.style.opacity = 0.5;
    } else if (adultOutput.innerHTML == 10) {
        return
    } else {
        adultOutput.innerHTML = Number(adultOutput.innerHTML) + 1;
    }
  };
  // Second
  adultMinus2.onclick = function () {
    if (adultOutput2.innerHTML == 0) {
        return
    } else if (adultOutput2.innerHTML == 1){
        adultMinus2.style.opacity = 0.5;
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1
    } else if (adultOutput2.innerHTML == 10){
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1
        adultPlus2.style.opacity = 1;
    } else {
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) - 1;
    }
  };
  adultPlus2.onclick = function () {2
    if (adultOutput2.innerHTML == 0) {
        adultMinus2.style.opacity = 1;
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;
    } else if (adultOutput2.innerHTML == 9){
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;
        adultPlus2.style.opacity = 0.5;
    } else if (adultOutput2.innerHTML == 10) {
        return
    } else {
        adultOutput2.innerHTML = Number(adultOutput2.innerHTML) + 1;
    }
  };
// Bads calc
// First
  childrenMinus.onclick = function () {
    if (childrenOutput.innerHTML == 0) {
        return
    } else if (childrenOutput.innerHTML == 1){
        childrenMinus.style.opacity = 0.5;
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1
    } else if (childrenOutput.innerHTML == 10){
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1
        childrenPlus.style.opacity = 1;
    } else {
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) - 1;
    }
  };
  childrenPlus.onclick = function () {
    if (childrenOutput.innerHTML == 0) {
        childrenMinus.style.opacity = 1;
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;
    } else if (childrenOutput.innerHTML == 9){
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;
        childrenPlus.style.opacity = 0.5;
    } else if (childrenOutput.innerHTML == 10) {
        return
    } else {
        childrenOutput.innerHTML = Number(childrenOutput.innerHTML) + 1;
    }
  };
  // Second
  childrenMinus2.onclick = function () {
    if (childrenOutput2.innerHTML == 0) {
        return
    } else if (childrenOutput2.innerHTML == 1){
        childrenMinus2.style.opacity = 0.5;
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1
    } else if (childrenOutput2.innerHTML == 10){
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1
        childrenPlus2.style.opacity = 1;
    } else {
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) - 1;
    }
  };
  childrenPlus2.onclick = function () {
    if (childrenOutput2.innerHTML == 0) {
        childrenMinus2.style.opacity = 1;
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;
    } else if (childrenOutput2.innerHTML == 9){
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;
        childrenPlus2.style.opacity = 0.5;
    } else if (childrenOutput2.innerHTML == 10) {
        return
    } else {
        childrenOutput2.innerHTML = Number(childrenOutput2.innerHTML) + 1;
    }
  };
  // Bathrooms calc
  // First
  babyMinus.onclick = function () {
    if (babyOutput.innerHTML == 0) {
        return
    } else if (babyOutput.innerHTML == 1){
        babyMinus.style.opacity = 0.5;
        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1
    } else if (babyOutput.innerHTML == 10){
        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1
        babyPlus.style.opacity = 1;
    } else {
        babyOutput.innerHTML = Number(babyOutput.innerHTML) - 1;
    }
  };
  babyPlus.onclick = function () {
    if (babyOutput.innerHTML == 0) {
        babyMinus.style.opacity = 1;
        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;
    } else if (babyOutput.innerHTML == 9){
        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;
        babyPlus.style.opacity = 0.5;
    } else if (babyOutput.innerHTML == 10) {
        return
    } else {
        babyOutput.innerHTML = Number(babyOutput.innerHTML) + 1;
    }
  };
  // Second
  babyMinus2.onclick = function () {
    if (babyOutput2.innerHTML == 0) {
        return
    } else if (babyOutput2.innerHTML == 1){
        babyMinus2.style.opacity = 0.5;
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1
    } else if (babyOutput2.innerHTML == 10){
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1
        babyPlus2.style.opacity = 1;
    } else {
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) - 1;
    }
  };
  babyPlus2.onclick = function () {
    if (babyOutput2.innerHTML == 0) {
        babyMinus2.style.opacity = 1;
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;
    } else if (babyOutput2.innerHTML == 9){
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;
        babyPlus2.style.opacity = 0.5;
    } else if (babyOutput2.innerHTML == 10) {
        return
    } else {
        babyOutput2.innerHTML = Number(babyOutput2.innerHTML) + 1;
    }
  };
  // ClearButton1
  uiFirstClearButton.onclick = function() {
    adultOutput.innerHTML = 0;
    childrenOutput.innerHTML = 0;
    babyOutput.innerHTML = 0;
  }
  // ClearButton1
  uiFirstClearButton2.onclick = function() {
    adultOutput2.innerHTML = 0;
    childrenOutput2.innerHTML = 0;
    babyOutput2.innerHTML = 0;
  }

  allUiGuests = Number(adultOutput.innerHTML) + Number(childrenOutput.innerHTML) + Number(babyOutput.innerHTML)
  allUiGuests2 = Number(adultOutput2.innerHTML) + Number(childrenOutput2.innerHTML) + Number(babyOutput2.innerHTML)
  
  if (allUiGuests === 0) {
    guestsMainOutput.innerHTML = 'Cколько гостей'
    uiFirstClearButton.style.display= 'none'
  } else {
    guestsMainOutput.innerHTML= allUiGuests + " гостя"
    uiFirstClearButton.style.display= 'inline-block';
  }
  if (allUiGuests2 === 0) {
    guestsMainOutput2.innerHTML = 'Cколько гостей'
    uiFirstClearButton2.style.display= 'none'
  } else {
    guestsMainOutput2.innerHTML= allUiGuests2 + " гостя"
    uiFirstClearButton2.style.display= 'inline-block';
  }
  

});