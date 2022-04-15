import { Header } from '@blocks/header/Header';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Navigation } from '@blocks/navigation/Navigation';
import { LikeButton } from '@blocks/like-button/LikeButton';

import { importContext } from '../../tools/importContext';
import './room-details.scss';

importContext();

const likeButtonElements = [
  document.querySelector('.room-details__comment_number_1'),
  document.querySelector('.room-details__comment_number_2'),
];

const header = document.querySelector('.js-room-details__header');
const datepicker = document.querySelector('.js-room-details__final-booking');
const dropdown = document.querySelector('.js-room-details__final-booking');

function handleDocumentLoad() {
  new Header(header);
  new Navigation(header);
  new Datepicker({
    target: datepicker,
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  });
  new Dropdown({
    target: dropdown,
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  });
  likeButtonElements.forEach((target) => new LikeButton(target));
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
