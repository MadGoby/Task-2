import datepickerFunctionality from '../../blocks/datepicker/datepicker';
import dropdownFunctionality from '../../blocks/dropdown/dropdown';
import './room-details.scss';

require('../../img/room-photo-big.jpg');
require('../../img/room-photo-small1.jpg');
require('../../img/room-photo-small2.jpg');
require('../../img/diagram.svg');
require('../../img/user2.jpg');
require('../../img/flame.svg');

datepickerFunctionality({
  targetClass: '.js-datepicker',
  inputFromClass: '.js-input__field_from',
  inputToClass: '.js-input__field_to',
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23),
  },
});

dropdownFunctionality({
  inputClass: '.js-input__field',
  dropdownClass: '.js-dropdown__control',
  inputResultTemplate: { type: 'sum', values: 'гостя' },
  defaultTemplate: 'Сколько гостей',
});