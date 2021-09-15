import './search-room.scss';
import { initAllDropdowns } from '../../blocks/dropdown/dropdown-init';
import { initAllDatepickers } from '../../blocks/datepicker/datepicker-init';
import { initAllLists } from '../../blocks/list/list-init';
import { initAllContentNavigations } from '../../blocks/content-navigation/content-navigation-init';
import { initAllStarRatings } from '../../blocks/stars-rating/stars-rating-init';
import { initAllRoomCards } from '../../blocks/room-card/room-card-init';
import { initAllHeaders } from '../../blocks/header/header-init';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('../../img/980.jpg');
require('../../img/856.jpg');
require('../../img/740.jpg');
require('../../img/982.jpg');
require('../../img/678.jpg');
require('../../img/450.jpg');
require('../../img/350.jpg');
require('../../img/666.jpg');
require('../../img/444.jpg');
require('../../img/352.jpg');

initAllDatepickers();
initAllDropdowns();
initAllLists();
initAllContentNavigations();
initAllStarRatings();
initAllRoomCards();
initAllHeaders();

$(document).ready(() => {
  function addPadding(outputStr) {
    let value = outputStr;

    if (value.length > 3) {
      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;
    }

    return value;
  }

  const $sliderBody = $('.js-slider__body');

  $sliderBody.slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide(event, ui) {
      $('.js-slider__output').val(`${addPadding(String(ui.values[0]))}₽ - ${addPadding(String(ui.values[1]))}₽`);
    },
  });

  const from = String($sliderBody.slider('values', 0));
  const to = String($sliderBody.slider('values', 1));

  $('.js-slider__output').val(`${addPadding(from)}₽ - ${addPadding(to)}₽`);
});

function sidebarDropdown(settings) {
  const { titleClass, sidebarClass } = settings;

  function getHtmlElements() {
    const title = document.querySelector(titleClass);
    const sidebar = document.querySelector(sidebarClass);
    return { title, sidebar };
  }

  const resultElements = getHtmlElements();
  const { title, sidebar } = resultElements;

  function discloseSidebar() {
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'inline-block';
      title.classList.remove('title_closed');
      title.classList.add('title_expanded');
    } else {
      sidebar.style.display = 'none';
      title.classList.remove('title_expanded');
      title.classList.add('title_closed');
    }
  }

  function changeSidebarDisplay(userWidth) {
    if (userWidth > 680 && sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
      if (title.classList.contains('title_expanded')) {
        title.classList.remove('title_expanded');
        title.classList.add('title_closed');
      }
    } else if (userWidth < 680) {
      sidebar.style.display = 'none';
    }
  }

  function passesPageWidth(event) {
    const userWidth = +event.target.innerWidth;
    changeSidebarDisplay(userWidth);
  }

  changeSidebarDisplay(+document.body.offsetWidth + 17);

  function bindEventListeners() {
    title.addEventListener('click', discloseSidebar);
    document.body.onresize = passesPageWidth;
  }

  bindEventListeners();
}

sidebarDropdown({
  titleClass: '.js-search-room__sidebar-title',
  sidebarClass: '.js-search-room__sidebar',
});