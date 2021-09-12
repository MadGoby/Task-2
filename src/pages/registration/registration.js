import './registration.scss';
import { initAllHeaders } from '../../blocks/header/header-init';

require('../../img/room-background.jpg');
require('inputmask');

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));

initAllHeaders();
