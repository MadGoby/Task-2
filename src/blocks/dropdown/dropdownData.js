const dropdownData = {
  rooms: {
    templates: [
      ['спал', 'ьня', 'ьни', 'ен'],
      ['кроват', 'ь', 'и', 'ей'],
      ['ванн', 'ая', 'ые', 'ых'],
    ],
    default: 'Конфигурация номера',
  },
  guestsWithBaby: {
    templates: [
      ['гост', 'ь', 'я', 'ей'],
      ['младен', 'ец', 'ца', 'ев'],
    ],
    default: 'Сколько гостей',
  },
  guests: {
    templates: ['гост', 'ь', 'я', 'ей'],
    default: 'Сколько гостей',
  },
};

// function dropdownInitialize() {
//   [...document.querySelectorAll('.js-dropdown')].forEach((container) => {
//     new Dropdown({ container, templates });
//   });
// }

export { dropdownData };
