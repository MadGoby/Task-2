import { importContext } from '../../tools/importContext';
import { datepickerInitialize } from '../../blocks/datepicker/datepickerInit';
import { dropdownInitialize } from '../../blocks/dropdown/dropdownInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';
import { starsRatingInitialize } from '../../blocks/stars-rating/starsRatingInit';
import { roomCardInitialize } from '../../blocks/room-card/roomCardInit';
import './cards.scss';

importContext();

function handleDocumentLoad() {
  datepickerInitialize();
  dropdownInitialize();
  initAllInputsMasks();
  starsRatingInitialize();
  roomCardInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/logo.svg');
require('../../img/888.jpg');
require('../../img/840.jpg');
require('../../img/room-slider.jpg');
