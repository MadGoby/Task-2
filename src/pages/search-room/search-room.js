import './search-room.scss';
import { initAllDropdowns } from '../../blocks/dropdown/dropdownInit';
import { initAllDatepickers } from '../../blocks/datepicker/datepickerInit';
import { initAllLists } from '../../blocks/list/listInit';
import { initAllContentNavigations } from '../../blocks/content-navigation/contentNavigationInit';
import { initAllStarRatings } from '../../blocks/stars-rating/starsRatingInit';
import { initAllRoomCards } from '../../blocks/room-card/roomCardInit';
import { initAllHeaders } from '../../blocks/header/headerInit';
import { initAllSliders } from '../../blocks/slider/sliderInit';
import { initAllSidebars } from '../../blocks/sidebar/sidebarInit';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
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

initAllDatepickers();
initAllDropdowns();
initAllLists();
initAllContentNavigations();
initAllStarRatings();
initAllRoomCards();
initAllHeaders();
initAllSliders();
initAllSidebars();