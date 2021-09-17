import './cards.scss';
import { initAllRoomCards } from '../../blocks/room-card/room-card-init';
import { initAllDatepickers } from '../../blocks/datepicker/datepicker-init';
import { initAllDropdowns } from '../../blocks/dropdown/dropdown-init';
import { initAllStarRatings } from '../../blocks/stars-rating/stars-rating-init';

require('inputmask');
require('../../img/logo.svg');
require('../../img/888.jpg');
require('../../img/840.jpg');
require('../../img/room-slider.jpg');

initAllRoomCards();
initAllDatepickers();
initAllDropdowns();
initAllStarRatings();

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));