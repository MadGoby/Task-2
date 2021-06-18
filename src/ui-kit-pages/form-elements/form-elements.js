require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
import * as dropdown from "../../blocks/dropdown/dropdown.js";
import * as list from "../../blocks/list/list.js";

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field",
  dropdownClass: ".js-dropdown__control",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field_2",
  dropdownClass: ".js-dropdown__control_2",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field_3",
  dropdownClass: ".js-dropdown__control_3",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

list.listFunctionality ({
  titleClass: ".js-list__title",
  listClass: ".js-list__container"
})

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