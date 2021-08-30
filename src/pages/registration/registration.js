import './registration.scss';
import headerNav from '../../blocks/header/header';

require('../../img/reg-back.jpg');
require('inputmask');

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));

headerNav({
  buttonClass: '.js-header-nav-button',
  navClass: '.js-header-nav',
});
