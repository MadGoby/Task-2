import "./search-room.scss";
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
import * as dropdown from "./blocks/dropdown/dropdown.js";
import * as list from "./blocks/list/list.js";
import * as swiperSlider from "./blocks/room-card/room-card.js";
import * as contentNavigation from "./blocks/content-nav/content-nav.js";
import { event } from "jquery";

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
require("./img/room-slider.jpg");

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field",
  dropdownClass: ".js-dropdown__control",
  inputResultTemplate: {type: "oneByOne", values: ['спальни', 'кровати']},
  defaultTemplate: "Конфигурация номера"
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

function sidebarDropdown(settings) {
  const {titleClass, sidebarClass} = settings;
  
  function getHtmlElements() {
    const title = document.querySelector(titleClass);
    const sidebar = document.querySelector(sidebarClass);
    return {title, sidebar}
  };

  const resultElements = getHtmlElements();
  const {title, sidebar} = resultElements;
  
  function bindEventListeners() {
    title.addEventListener("click", discloseSidebar);
    document.body.onresize = convertPassesVariable;
  };

  function discloseSidebar(event) {
    if(sidebar.style.display == "none") {
      sidebar.style.display = "inline-block";
      title.classList.remove("title_closed");
      title.classList.add("title_expanded");
    } else {
      sidebar.style.display = "none";
      title.classList.remove("title_expanded");
      title.classList.add("title_closed");
    };
  };
  
  function changeSidebarDisplay(userWidth) {
    if (userWidth > 680 && sidebar.style.display == "none") {
      sidebar.style.display = "block";
      if(title.classList.contains("title_expanded")) {
        title.classList.remove("title_expanded");
        title.classList.add("title_closed");
      }
    } else if (userWidth < 680) {
      sidebar.style.display = "none";
    }; 
  }

  function convertPassesVariable(event) {
    let userWidth = +event.target.innerWidth;
    changeSidebarDisplay(userWidth);
  };

  changeSidebarDisplay(+document.body.offsetWidth + 17)
  
  bindEventListeners()
};

sidebarDropdown({
  titleClass: ".js-search-room__sidebar-title",
  sidebarClass: ".js-search-room__sidebar"
})

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-2"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-3"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-4"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-5"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-6"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-7"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-8"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-9"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-10"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-11"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-12"
});

contentNavigation.contentNav({
  navClass: ".js-content-nav"
});