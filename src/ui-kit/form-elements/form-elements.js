require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('inputmask');
import * as dropdown from "../../blocks/dropdown/dropdown.js";
import * as list from "../../blocks/list/list.js";
import * as datepicker from "../../blocks/datepicker/datepicker.js";
import * as contentNavigation from "../../blocks/content-nav/content-nav.js";
import * as starRatting from "../../blocks/star-rate/star-rate.js";

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field",
  dropdownClass: ".js-dropdown__control",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-2",
  dropdownClass: ".js-dropdown__control-2",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-3",
  dropdownClass: ".js-dropdown__control-3",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-4",
  dropdownClass: ".js-dropdown__control-4",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-5",
  dropdownClass: ".js-dropdown__control-5",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
})

list.listFunctionality ({
  titleClass: ".js-list__title",
  listClass: ".js-list__container"
})

list.listFunctionality ({
  titleClass: ".js-list__title-2",
  listClass: ".js-list__container-2"
})

datepicker.datepickerFunctionality({
  targetClass: ".js-datepicker-2",
  inputFromClass: ".js-input__field_from-2",
  inputToClass: ".js-input__field_to-2",
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    to: new Date(2019, 7, 19)
  },
});

datepicker.datepickerFunctionality({
  targetClass: ".js-datepicker-3",
  inputTotalClass: ".js-input__field_total-3",
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23)
  },
  size: "m"
});

$(document).ready(function () {
  $(".js-slider__body").slider({
    range : true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $(".js-slider__output").val(ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
    }
  });
  $(".js-slider__output").val( 
    "" + $(".js-slider__body").slider(
    "values", 0 ) + "₽" + " - " + $(".js-slider__body").slider("values", 1 ) + "₽" );
});

contentNavigation.contentNav({
  navClass: ".js-content-nav"
});

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll(".input__field_type_date"));

starRatting.starRatting({
  containerClass: ".js-star-rate"
})

starRatting.starRatting({
  containerClass: ".js-star-rate-2"
})
