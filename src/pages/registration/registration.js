import './registration.scss';
import { initAllHeaders } from '../../blocks/header/header-init';

require('inputmask');
require('../../img/room-background.jpg');
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));

initAllHeaders();
