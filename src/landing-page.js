require("./img/landing-main.jpg");

import "./landing-page.scss";
import * as dropdown from "./blocks/dropdown/dropdown.js";
import * as datepicer from "./blocks/datepicker/datepicker.js";

dropdown.dropdownFunctionality ({
  inputClass: ".js-input__field",
  dropdownClass: ".js-dropdown__control",
  inputResultTemplate: {type: "sum", values: 'гостя'},
  defaultTemplate: "Сколько гостей"
})

datepicer.datepicerFunctionality({
  targetClass: ".js-datepicker",
  inputFromClass: ".js-input__field_from",
  inputToClass: ".js-input__field_to"
});

