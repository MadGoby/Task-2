import './form-elements.scss';
import { initAllDatepickers } from '../../blocks/datepicker/datepicker-init';
import { initAllDropdowns } from '../../blocks/dropdown/dropdown-init';
import { initAllLists } from '../../blocks/list/list-init';
import { initAllContentNavigations } from '../../blocks/content-navigation/content-navigation-init';
import { initAllStarRatings } from '../../blocks/stars-rating/stars-rating-init';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('inputmask');

initAllLists();
initAllContentNavigations();
initAllStarRatings();
initAllDropdowns();
initAllDatepickers();

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

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));
