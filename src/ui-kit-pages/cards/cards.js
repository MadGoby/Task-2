import * as datepicer from "../../blocks/datepicker/datepicker.js";

datepicer.datepicerFunctionality({
  targetClass: ".js-datepicker",
  defaultSettings: {
    pickedYear: new Date(2019, 7, 8).getFullYear(),
    pickedMonth: new Date(2019, 7, 8).getMonth(),
    currentDay: new Date(2019, 7, 8),
    from: new Date(2019, 7, 19),
    to: new Date(2019, 7, 23)
  },
});