import { importContext } from '../../tools/importContext';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';
import { datepickerInitialize } from '../../blocks/datepicker/datepickerInit';
import { dropdownInitialize } from '../../blocks/dropdown/dropdownInit';
import './room-details.scss';

importContext();

function handleDocumentLoad() {
  headerNavigationInitialize();
  initAllInputsMasks();
  datepickerInitialize();
  dropdownInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/room-photo-big.jpg');
require('../../img/room-photo-small1.jpg');
require('../../img/room-photo-small2.jpg');
require('../../img/diagram.svg');
require('../../img/user2.jpg');
require('../../img/flame.svg');
require('../../img/smile.svg');
require('../../img/house.svg');
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
