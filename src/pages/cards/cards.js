import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { RoomCard } from '@blocks/room-card/RoomCard';
import { StarsRating } from '@blocks/stars-rating/StarsRating';
import { Input } from '@blocks/input/Input';

import { importContext } from '../../tools/importContext';
import './cards.scss';

importContext();

const datepickersData = [
  { target: document.querySelector('.js-cards__search-room') },
  { target: document.querySelector('.js-cards__final-booking') },
  {
    target: document.querySelector('.js-cards__datepicker'),
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  },
];

const dropdownData = [
  {
    target: document.querySelector('.js-cards__search-room'),
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: document.querySelector('.js-cards__final-booking'),
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
];

const inputTarget = document.querySelector('.js-cards__registration');

const cardsData = [
  document.querySelector('.js-cards__room_number_888'),
  document.querySelector('.js-cards__room_number_848'),
];

function handleDocumentLoad() {
  datepickersData.forEach((settings) => new Datepicker(settings));
  dropdownData.forEach((settings) => new Dropdown(settings));
  cardsData.forEach((target) => {
    new RoomCard(target);
    new StarsRating(target);
  });
  new Input({
    target: inputTarget,
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
