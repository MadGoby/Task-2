import './landing-page.scss';
import dropdownFunctionality from '../../blocks/dropdown/dropdown';
import datepickerFunctionality from '../../blocks/datepicker/datepicker';

require('../../img/landing-main.jpg');

const guests = ['гост', 'ь', 'я', 'ей'];

dropdownFunctionality({
  inputClass: '.js-input__field',
  dropdownClass: '.js-dropdown__control',
  inputResultTemplate: { type: 'sum', values: guests },
  defaultTemplate: 'Сколько гостей',
});

datepickerFunctionality({
  targetClass: '.js-datepicker',
  inputFromClass: '.js-input__field_from',
  inputToClass: '.js-input__field_to',
});
