import { Datepicker } from './datepicker';

function initAllDatepickers() {
  [...document.querySelectorAll('.js-datepicker')].forEach((container) => {
    const settings = {
      monthRu: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
    };
    if (container.hasAttribute('data-year')) settings.pickedYear = container.getAttribute('data-year');
    if (container.hasAttribute('data-month')) settings.pickedMonth = container.getAttribute('data-month');
    if (container.hasAttribute('data-day')) settings.currentDay = new Date(container.getAttribute('data-day'));
    if (container.hasAttribute('data-from')) settings.dataFrom = new Date(container.getAttribute('data-from'));
    if (container.hasAttribute('data-to')) settings.dataTo = new Date(container.getAttribute('data-to'));
    new Datepicker(container, settings);
  });
}

export { initAllDatepickers };
