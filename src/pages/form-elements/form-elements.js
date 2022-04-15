import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { StarsRating } from '@blocks/stars-rating/StarsRating';
import { Slider } from '@blocks/slider/Slider';
import { ContentNavigation } from '@blocks/content-navigation/ContentNavigation';
import { List } from '@blocks/list/List';
import { Input } from '@blocks/input/Input';
import { LikeButton } from '@blocks/like-button/LikeButton';

import { importContext } from '../../tools/importContext';
import './form-elements.scss';

importContext();

const datepickersData = [
  {
    target: document.querySelector('.js-form-elements__date-dropdowns'),
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataTo: '2019, 8, 19',
    },
  },
  {
    target: document.querySelector('.js-form-elements__filter-dropdown'),
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
    target: document.querySelector('.js-form-elements__dropdown'),
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: document.querySelector('.js-form-elements__closed-dropdown'),
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
  {
    target: document.querySelector('.js-form-elements__expanded-dropdown'),
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
  {
    target: document.querySelector('.js-form-elements__guests-dropdown_counter_0'),
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: document.querySelector('.js-form-elements__guests-dropdown_counter_3'),
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
];

const listElements = [
  document.querySelector('.js-form-elements__closed-list'),
  document.querySelector('.js-form-elements__expanded-list'),
];

const starsRatingElements = [
  document.querySelector('.js-form-elements__rating_number_1'),
  document.querySelector('.js-form-elements__rating_number_2'),
];

const likeButtonsElements = [
  document.querySelector('.js-form-elements__like_unchecked'),
  document.querySelector('.js-form-elements__like_checked'),
  document.querySelector('.js-form-elements__user-comment'),
];

const contentNavigationElement = document.querySelector('.js-form-elements__pagination');
const sliderElement = document.querySelector('.js-form-elements__slider');
const inputElement = document.querySelector('.js-form-elements__masked-input');

function handleDocumentLoad() {
  datepickersData.forEach((settings) => new Datepicker(settings));
  dropdownData.forEach((settings) => new Dropdown(settings));
  starsRatingElements.forEach((target) => new StarsRating(target));
  listElements.forEach((target) => new List(target));
  new ContentNavigation(contentNavigationElement);
  new Slider({
    target: sliderElement,
    options: {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
    },
  });
  new Input({
    target: inputElement,
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
  likeButtonsElements.forEach((target) => new LikeButton(target));
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
