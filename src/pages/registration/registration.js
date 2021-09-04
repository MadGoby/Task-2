import './registration.scss';
import headerNavigation from '../../blocks/header/header';

require('../../img/room-background.jpg');
require('inputmask');

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));

headerNavigation({
  buttonClass: '.js-header-navigation-button',
  navigationClass: '.js-header-navigation',
});
