import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { StarsRating } from '@blocks/stars-rating/StarsRating';
import { Slider } from '@blocks/slider/Slider';
import { ContentNavigation } from '@blocks/content-navigation/ContentNavigation';
import { ListDropdown } from '@blocks/list/List';

import { importContext } from '../../tools/importContext';
import './form-elements.scss';

require('inputmask');

importContext();

const datepickersData = [
  {
    target: 'js-form-elements__date-dropdowns',
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataTo: '2019, 8, 19',
    },
  },
  {
    target: 'js-form-elements__filter-dropdown',
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  },
];

const dropdownData = [
  {
    target: 'js-form-elements__dropdown',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: 'js-form-elements__closed-dropdown',
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
  {
    target: 'js-form-elements__expanded-dropdown',
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
  {
    target: 'js-form-elements__guests-dropdown_counter_0',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: 'js-form-elements__guests-dropdown_counter_3',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
];

const listElements = [
  'js-form-elements__closed-list',
  'js-form-elements__expanded-list',
];

const starsRatingElements = [
  'js-form-elements__rating_number_1',
  'js-form-elements__rating_number_2',
];

const inputMask = document.querySelector('.js-form-elements__masked-input').firstChild.lastChild;

function handleDocumentLoad() {
  datepickersData.forEach((settings) => new Datepicker(settings));
  dropdownData.forEach((settings) => new Dropdown(settings));
  starsRatingElements.forEach((target) => new StarsRating(target));
  listElements.forEach((target) => new ListDropdown(target));
  new ContentNavigation('js-form-elements__pagination');
  new Slider({
    targetClass: 'js-form-elements__slider',
    options: {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
    },
  });
  Inputmask({
    mask: '99.99.9999',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask(inputMask);
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
