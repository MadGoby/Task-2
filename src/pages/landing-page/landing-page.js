import './landing-page.scss';
import { initAllDropdowns } from '../../blocks/dropdown/dropdown-init';
import { initAllDatepickers } from '../../blocks/datepicker/datepicker-init';
import { initAllHeaders } from '../../blocks/header/header-init';

require('../../img/logo-color.svg');
require('../../img/landing-main.jpg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');

initAllHeaders();
initAllDropdowns();
initAllDatepickers();
