import './landing-page.scss';
import { initAllDropdowns } from '../../blocks/dropdown/dropdownInit';
import { initAllDatepickers } from '../../blocks/datepicker/datepickerInit';
import { initAllHeaders } from '../../blocks/header/headerInit';

require('../../img/logo-color.svg');
require('../../img/landing-main.jpg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');

initAllHeaders();
initAllDropdowns();
initAllDatepickers();
