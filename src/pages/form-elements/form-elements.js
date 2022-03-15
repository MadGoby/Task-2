import { importContext } from '../../tools/importContext';
import { datepickerInitialize } from '../../blocks/datepicker/datepickerInit';
import { dropdownInitialize } from '../../blocks/dropdown/dropdownInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';
import { starsRatingInitialize } from '../../blocks/stars-rating/starsRatingInit';
import { ListDropdownInitialize } from '../../blocks/list/listInit';
import { sliderInitialize } from '../../blocks/slider/sliderInit';
import { ContentNavigationInitialize } from '../../blocks/content-navigation/contentNavigationInit';
import './form-elements.scss';

importContext();

function handleDocumentLoad() {
  datepickerInitialize();
  dropdownInitialize();
  initAllInputsMasks();
  starsRatingInitialize();
  ListDropdownInitialize();
  sliderInitialize();
  ContentNavigationInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/user.jpg');
