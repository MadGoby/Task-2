import './landing-page.scss';
import { initAllDropdowns } from '../../blocks/dropdown/dropdown-init';
import { initAllDatepickers } from '../../blocks/datepicker/datepicker-init';
import { initAllHeaders } from '../../blocks/header/header-init';

require('../../img/landing-main.jpg');

initAllHeaders();
initAllDropdowns();
initAllDatepickers();
