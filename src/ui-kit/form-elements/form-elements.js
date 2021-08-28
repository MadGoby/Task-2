import dropdownFunctionality from '../../blocks/dropdown/dropdown';
import listFunctionality from '../../blocks/list/list';
import datepickerFunctionality from '../../blocks/datepicker/datepicker';
import contentNav from '../../blocks/content-nav/content-nav';
import starRatting from '../../blocks/star-rate/star-rate';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('inputmask');

const rooms = [
  ['спал', 'ьня', 'ьни', 'ен'],
  ['кроват', 'ь', 'и', 'ей'],
  ['ванн', 'ая', 'ые', 'ых'],
];
const guests = ['гост', 'ь', 'я', 'ей'];

dropdownFunctionality({
  inputClass: '.js-input__field',
  dropdownClass: '.js-dropdown__control',
  inputResultTemplate: { type: 'oneByOne', values: rooms },
  defaultTemplate: 'Конфигурация номера',
});

dropdownFunctionality({
  inputClass: '.js-input__field-2',
  dropdownClass: '.js-dropdown__control-2',
  inputResultTemplate: { type: 'sum', values: guests },
  defaultTemplate: 'Сколько гостей',
});

dropdownFunctionality({
  inputClass: '.js-input__field-3',
  dropdownClass: '.js-dropdown__control-3',
  inputResultTemplate: { type: 'sum', values: guests },
  defaultTemplate: 'Сколько гостей',
});

dropdownFunctionality({
  inputClass: '.js-input__field-4',
  dropdownClass: '.js-dropdown__control-4',
  inputResultTemplate: { type: 'sum', values: guests },
  defaultTemplate: 'Сколько гостей',
});

dropdownFunctionality({
  inputClass: '.js-input__field-5',
  dropdownClass: '.js-dropdown__control-5',
  inputResultTemplate: { type: 'oneByOne', values: rooms },
  defaultTemplate: 'Конфигурация номера',
});

listFunctionality({
  titleClass: '.js-list__title',
  listClass: '.js-list__container',
});

listFunctionality({
  titleClass: '.js-list__title-2',
  listClass: '.js-list__container-2',
});

datepickerFunctionality({
  targetClass: '.js-datepicker-2',
  inputFromClass: '.js-input__field_from-2',
  inputToClass: '.js-input__field_to-2',
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    to: new Date(2019, 7, 19),
  },
});

datepickerFunctionality({
  targetClass: '.js-datepicker-3',
  inputTotalClass: '.js-input__field_total-3',
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23),
  },
  size: 'm',
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

contentNav({
  navClass: '.js-content-nav',
});

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));

starRatting({
  containerClass: '.js-star-rate',
});

starRatting({
  containerClass: '.js-star-rate-2',
});
