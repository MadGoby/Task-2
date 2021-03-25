import "./search-room.scss";
import slider from "./blocks/slider/slider.js";
import * as dropdown from "./blocks/dropdown/dropdown.js";
import * as list from "./blocks/list/list.js";
require("./img/980.jpg");
require("./img/856.jpg");
require("./img/740.jpg");
require("./img/982.jpg");
require("./img/678.jpg");
require("./img/450.jpg");
require("./img/350.jpg");
require("./img/666.jpg");
require("./img/444.jpg");
require("./img/352.jpg");

dropdown.dropdownFunctionality ({
  inputClass: ".js-dropdown-input",
  dropdownClass: ".js-dropdown",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
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