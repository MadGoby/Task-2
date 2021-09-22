import './form-elements.scss';
import { initAllDatepickers } from '../../blocks/datepicker/datepickerInit';
import { initAllDropdowns } from '../../blocks/dropdown/dropdownInit';
import { initAllLists } from '../../blocks/list/listInit';
import { initAllContentNavigations } from '../../blocks/content-navigation/contentNavigationInit';
import { initAllStarRatings } from '../../blocks/stars-rating/starsRatingInit';
import { initAllSliders } from '../../blocks/slider/sliderInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('inputmask');
require('../../img/logo.svg');
require('../../img/house.svg');
require('../../img/user.jpg');

initAllLists();
initAllContentNavigations();
initAllStarRatings();
initAllDropdowns();
initAllDatepickers();
initAllSliders();
initAllInputsMasks();
