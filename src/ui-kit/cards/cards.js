import datepickerFunctionality from '../../blocks/datepicker/datepicker';
import dropdownFunctionality from '../../blocks/dropdown/dropdown';
import swiperSlider from '../../blocks/room-card/room-card';
import starRatting from '../../blocks/star-rate/star-rate';

datepickerFunctionality({
  targetClass: '.js-datepicker-4',
  inputFromClass: '.js-input__field_from-4',
  inputToClass: '.js-input__field_to-4',
});

datepickerFunctionality({
  targetClass: '.js-datepicker-5',
  inputFromClass: '.js-input__field_from-5',
  inputToClass: '.js-input__field_to-5',
});

dropdownFunctionality({
  inputClass: '.js-input__field-6',
  dropdownClass: '.js-dropdown__control-6',
  inputResultTemplate: { type: 'sum', values: 'гостя' },
  defaultTemplate: 'Сколько гостей',
});

dropdownFunctionality({
  inputClass: '.js-input__field-7',
  dropdownClass: '.js-dropdown__control-7',
  inputResultTemplate: { type: 'sum', values: 'гостя' },
  defaultTemplate: 'Сколько гостей',
});

swiperSlider({
  roomCardClass: '.js-room-card',
});

swiperSlider({
  roomCardClass: '.js-room-card-2',
});

datepickerFunctionality({
  targetClass: '.js-datepicker',
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23),
  },
});

starRatting({
  containerClass: '.js-star-rate-3',
});

starRatting({
  containerClass: '.js-star-rate-4',
});