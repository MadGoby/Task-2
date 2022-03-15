import { importContext } from '../../tools/importContext';
import { datepickerInitialize } from '../../blocks/datepicker/datepickerInit';
import { dropdownInitialize } from '../../blocks/dropdown/dropdownInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';
import { starsRatingInitialize } from '../../blocks/stars-rating/starsRatingInit';
import { ListDropdownInitialize } from '../../blocks/list/listInit';
import { sliderInitialize } from '../../blocks/slider/sliderInit';
import { ContentNavigationInitialize } from '../../blocks/content-navigation/contentNavigationInit';
import { roomCardInitialize } from '../../blocks/room-card/roomCardInit';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import { sidebarInitialize } from '../../blocks/sidebar/sidebarInit';
import './search-room.scss';

importContext();

function handleDocumentLoad() {
  datepickerInitialize();
  dropdownInitialize();
  initAllInputsMasks();
  starsRatingInitialize();
  ListDropdownInitialize();
  sliderInitialize();
  ContentNavigationInitialize();
  roomCardInitialize();
  headerNavigationInitialize();
  sidebarInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

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
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
