import './registration.scss';

require('../../img/reg-back.jpg');
require('inputmask');

Inputmask({
  mask: '99.99.9999',
  placeholder: 'ДД.ММ.ГГГГ',
}).mask(document.querySelectorAll('.input__field_type_date'));
