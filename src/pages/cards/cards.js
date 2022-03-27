import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { RoomCardSlider } from '@blocks/room-card/RoomCard';
import { StarsRating } from '@blocks/stars-rating/StarsRating';
import { InputMask } from '@blocks/input/InputMask';

import { importContext } from '../../tools/importContext';
import './cards.scss';

importContext();

const datepickersData = [
  { target: 'js-cards__search-room' },
  { target: 'js-cards__final-booking' },
  {
    target: 'js-cards__datepicker',
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
    target: 'js-cards__search-room',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
  {
    target: 'js-cards__final-booking',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  },
];

const cardsData = [
  'js-cards__room_number_888',
  'js-cards__room_number_848',
];

function handleDocumentLoad() {
  datepickersData.forEach((settings) => new Datepicker(settings));
  dropdownData.forEach((settings) => new Dropdown(settings));
  cardsData.forEach((target) => {
    new RoomCardSlider(target);
    new StarsRating(target);
  });
  new InputMask({
    target: 'js-cards__registration',
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
