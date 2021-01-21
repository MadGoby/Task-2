let adultMinus = document.querySelector('.ui-adult-calc-minus-button')
let adultPlus = document.querySelector('.ui-adult-calc-plus-button')
let adultOutput = document.querySelector('.ui-output-adult')
let childrenMinus = document.querySelector('.ui-children-calc-minus-button')
let childrenPlus = document.querySelector('.ui-children-calc-plus-button')
let childrenOutput = document.querySelector('.ui-output-children')
let babyMinus = document.querySelector('.ui-baby-calc-minus-button')
let babyPlus = document.querySelector('.ui-baby-calc-plus-button')
let babyOutput = document.querySelector('.ui-output-baby')
let guestsMainOutput = document.querySelector(".dropdown-quests_extended")
let uiFirstClearButton = document.querySelector(".ui-first-guests-clear-button")

// Rooms Dropdown Function

guestsMainOutput.innerHTML = 'Cколько гостей'

document.addEventListener('click', function(){
// Badrooms calc
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
// Bads calc
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
  // Bathrooms calc
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
  // ClearButton
  uiFirstClearButton.onclick = function() {
    adultOutput.innerHTML = 0;
    childrenOutput.innerHTML = 0;
    babyOutput.innerHTML = 0;
  }

  allUiGuests = Number(adultOutput.innerHTML) + Number(childrenOutput.innerHTML) + Number(babyOutput.innerHTML)
  
  if (allUiGuests === 0) {
    guestsMainOutput.innerHTML = 'Cколько гостей'
    uiFirstClearButton.style.display= 'none'
  } else {
    guestsMainOutput.innerHTML= allUiGuests + " гостя"
    uiFirstClearButton.style.display= 'inline-block';
  }
});