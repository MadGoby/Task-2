import './cards.scss';
import { initAllRoomCards } from '../../blocks/room-card/roomCardInit';
import { initAllDatepickers } from '../../blocks/datepicker/datepickerInit';
import { initAllDropdowns } from '../../blocks/dropdown/dropdownInit';
import { initAllStarRatings } from '../../blocks/stars-rating/starsRatingInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';

require('inputmask');
require('../../img/logo.svg');
require('../../img/888.jpg');
require('../../img/840.jpg');
require('../../img/room-slider.jpg');

initAllRoomCards();
initAllDatepickers();
initAllDropdowns();
initAllStarRatings();
initAllInputsMasks();