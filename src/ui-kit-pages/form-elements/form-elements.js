import slider from "../../blocks/slider/slider.js";
import * as dropdown from "../../blocks/dropdown/dropdown.js";
import * as list from "../../blocks/list/list.js";

dropdown.dropdownFunctionality ({
  inputClass: ".js-dropdown-input",
  dropdownClass: ".js-dropdown",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-dropdown-input2",
  dropdownClass: ".js-dropdown2",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-dropdown-input3",
  dropdownClass: ".js-dropdown3",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

list.listFunctionality ({
  titleClass: ".js-list__title",
  listClass: ".js-list"
})

$(document).ready(function () {
  $(".js-slider").slider({
    range : true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $(".js-slider__output").val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
    }
  });
  $(".js-slider__output").val( 
    "" + $(".js-slider").slider(
    "values", 0 ) + "₽" + " - " + $(".js-slider").slider("values", 1 ) + "₽" );
});