let adultMinus2 = document.querySelector('.ui-adult-calc-minus-button_2')
let adultPlus2 = document.querySelector('.ui-adult-calc-plus-button_2')
let adultOutput2 = document.querySelector('.ui-output-adult_2')
let childrenMinus2 = document.querySelector('.ui-children-calc-minus-button_2')
let childrenPlus2 = document.querySelector('.ui-children-calc-plus-button_2')
let childrenOutput2 = document.querySelector('.ui-output-children_2')
let babyMinus2 = document.querySelector('.ui-baby-calc-minus-button_2')
let babyPlus2 = document.querySelector('.ui-baby-calc-plus-button_2')
let babyOutput2 = document.querySelector('.ui-output-baby_2')
let guestsMainOutput2 = document.querySelector(".dropdown-quests_extended_2")
let uiFirstClearButton2 = document.querySelector(".ui-first-guests-clear-button_2")

guestsMainOutput2.innerHTML = '3 гостя'

document.addEventListener('click', function(){
  
  // Badrooms calc
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
    // ClearButton
    uiFirstClearButton2.onclick = function() {
      adultOutput2.innerHTML = 0;
      childrenOutput2.innerHTML = 0;
      babyOutput2.innerHTML = 0;
    }
  
    allUiGuests2 = Number(adultOutput2.innerHTML) + Number(childrenOutput2.innerHTML) + Number(babyOutput2.innerHTML)
    
    if (allUiGuests2 === 0) {
      guestsMainOutput2.innerHTML = 'Cколько гостей'
      uiFirstClearButton2.style.display= 'none'
    } else {
      guestsMainOutput2.innerHTML= allUiGuests2 + " гостя"
      uiFirstClearButton2.style.display= 'inline-block';
    }
  });