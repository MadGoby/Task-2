import './search-room.scss';
import dropdownFunctionality from '../../blocks/dropdown/dropdown';
import listFunctionality from '../../blocks/list/list';
import swiperSlider from '../../blocks/room-card/room-card';
import contentNav from '../../blocks/content-nav/content-nav';
import datepickerFunctionality from '../../blocks/datepicker/datepicker';
import starRatting from '../../blocks/star-rate/star-rate';

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
require('../../img/room-slider.jpg');

const rooms = [
  ['спал', 'ьня', 'ьни', 'ен'],
  ['кроват', 'ь', 'и', 'ей'],
  ['ванн', 'ая', 'ые', 'ых'],
];
const guestsWithBaby = [
  ['гост', 'ь', 'я', 'ей'],
  ['младен', 'ец', 'ца', 'ев'],
];

dropdownFunctionality({
  inputClass: '.js-input__field',
  dropdownClass: '.js-dropdown__control',
  inputResultTemplate: { type: 'oneByOne', values: rooms },
  defaultTemplate: 'Конфигурация номера',
});

dropdownFunctionality({
  inputClass: '.js-input__field-2',
  dropdownClass: '.js-dropdown__control-2',
  inputResultTemplate: { type: 'twoByOne', values: guestsWithBaby },
  defaultTemplate: 'Сколько гостей',
});

listFunctionality({
  titleClass: '.js-list__title',
  listClass: '.js-list__container',
});

const $sliderBody = $('.js-slider__body');

$(document).ready(() => {
  function addPadding(outputStr) {
    let value = outputStr;

    if (value.length > 3) {
      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;
    }

    return value;
  }

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

  function convertPassesVariable(event) {
    const userWidth = +event.target.innerWidth;
    changeSidebarDisplay(userWidth);
  }

  changeSidebarDisplay(+document.body.offsetWidth + 17);

  function bindEventListeners() {
    title.addEventListener('click', discloseSidebar);
    document.body.onresize = convertPassesVariable;
  }

  bindEventListeners();
}

sidebarDropdown({
  titleClass: '.js-search-room__sidebar-title',
  sidebarClass: '.js-search-room__sidebar',
});

swiperSlider({
  roomCardClass: '.js-room-card',
});

swiperSlider({
  roomCardClass: '.js-room-card-2',
});

swiperSlider({
  roomCardClass: '.js-room-card-3',
});

swiperSlider({
  roomCardClass: '.js-room-card-4',
});

swiperSlider({
  roomCardClass: '.js-room-card-5',
});

swiperSlider({
  roomCardClass: '.js-room-card-6',
});

swiperSlider({
  roomCardClass: '.js-room-card-7',
});

swiperSlider({
  roomCardClass: '.js-room-card-8',
});

swiperSlider({
  roomCardClass: '.js-room-card-9',
});

swiperSlider({
  roomCardClass: '.js-room-card-10',
});

swiperSlider({
  roomCardClass: '.js-room-card-11',
});

swiperSlider({
  roomCardClass: '.js-room-card-12',
});

contentNav({
  navClass: '.js-content-nav',
});

datepickerFunctionality({
  targetClass: '.js-datepicker',
  inputTotalClass: '.js-input__field_total',
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23),
  },
  size: 'm',
});

starRatting({
  containerClass: '.js-star-rate',
});

starRatting({
  containerClass: '.js-star-rate-2',
});

starRatting({
  containerClass: '.js-star-rate-3',
});

starRatting({
  containerClass: '.js-star-rate-4',
});

starRatting({
  containerClass: '.js-star-rate-5',
});

starRatting({
  containerClass: '.js-star-rate-6',
});

starRatting({
  containerClass: '.js-star-rate-7',
});

starRatting({
  containerClass: '.js-star-rate-8',
});

starRatting({
  containerClass: '.js-star-rate-9',
});

starRatting({
  containerClass: '.js-star-rate-10',
});

starRatting({
  containerClass: '.js-star-rate-11',
});
