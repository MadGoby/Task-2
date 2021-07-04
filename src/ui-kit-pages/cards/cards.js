import * as datepicker from "../../blocks/datepicker/datepicker.js";
import * as dropdown from "../../blocks/dropdown/dropdown.js";
import * as swiperSlider from "../../blocks/room-card/room-card.js";

datepicker.datepickerFunctionality({
  targetClass: ".js-datepicker-4",
  inputFromClass: ".js-input__field_from-4",
  inputToClass: ".js-input__field_to-4"
});

datepicker.datepickerFunctionality({
  targetClass: ".js-datepicker-5",
  inputFromClass: ".js-input__field_from-5",
  inputToClass: ".js-input__field_to-5"
});

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-6",
  dropdownClass: ".js-dropdown__control-6",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
});

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field-7",
  dropdownClass: ".js-dropdown__control-7",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card"
});

swiperSlider.swiperSlider({
  roomCardClass: ".js-room-card-2"
}); 

datepicker.datepickerFunctionality({
  targetClass: ".js-datepicker",
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23)
  },
});