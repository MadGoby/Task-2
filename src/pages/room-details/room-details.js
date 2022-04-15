import { Header } from '@blocks/header/Header';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Navigation } from '@blocks/navigation/Navigation';
import { LikeButton } from '@blocks/like-button/LikeButton';

import { importContext } from '../../tools/importContext';
import './room-details.scss';

importContext();

const likeButtonElements = [
  'room-details__comment_number_1',
  'room-details__comment_number_2',
];

function handleDocumentLoad() {
  new Header('js-room-details__header');
  new Navigation('js-room-details__header');
  new Datepicker({
    target: 'js-room-details__final-booking',
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  });
  new Dropdown({
    target: 'js-room-details__final-booking',
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
