require('inputmask');

function initAllInputsMasks() {
  Inputmask({
    mask: '99.99.9999',
    placeholder: 'ДД.ММ.ГГГГ',
  }).mask(document.querySelectorAll('.input__field_type_date'));
}

document.addEventListener("DOMContentLoaded", initAllInputsMasks);
