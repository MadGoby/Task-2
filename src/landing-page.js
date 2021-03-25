require("./img/landing-main.jpg");

import "./landing-page.scss";
import * as dropdown from "./blocks/dropdown/dropdown.js";
import * as datepicer from "./blocks/datepicker/datepicker.js";

dropdown.dropdownFunctionality ({
  inputClass: ".js-dropdown-input3",
  dropdownClass: ".js-dropdown3",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

datepicer.datepicerFunctionality({
  targetClass: ".js-datepicker",
  inputFromClass: ".js-input-from",
  inputToClass: ".js-input-to",
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23)
  },
});