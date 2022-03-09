import { Dropdown } from './Dropdown';

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

function initialize() {
  [...document.querySelectorAll('.js-dropdown')].forEach((container) => {
    new Dropdown({ container, templates });
  });
}

document.addEventListener('DOMContentLoaded', initialize);
