import { Dropdown } from './Dropdown';

function initAllDropdowns() {
  [...document.querySelectorAll('.js-dropdown')].forEach((container) => {
    const templates = {
      rooms: [
        ['спал', 'ьня', 'ьни', 'ен'],
        ['кроват', 'ь', 'и', 'ей'],
        ['ванн', 'ая', 'ые', 'ых'],
      ],
      guestsWithBaby: [
        ['гост', 'ь', 'я', 'ей'],
        ['младен', 'ец', 'ца', 'ев'],
      ],
      guests: ['гост', 'ь', 'я', 'ей'],
      guestsDefault: 'Сколько гостей',
      guestsWithBabyDefault: 'Сколько гостей',
      roomsDefault: 'Конфигурация номера',
    };
    new Dropdown({ container, templates });
  });
}

export { initAllDropdowns };
