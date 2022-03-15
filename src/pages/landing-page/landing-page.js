import { importContext } from '../../tools/importContext';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import { datepickerInitialize } from '../../blocks/datepicker/datepickerInit';
import { dropdownInitialize } from '../../blocks/dropdown/dropdownInit';
import './landing-page.scss';

importContext();

function handleDocumentLoad() {
  headerNavigationInitialize();
  datepickerInitialize();
  dropdownInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/logo-color.svg');
require('../../img/landing-main.jpg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
