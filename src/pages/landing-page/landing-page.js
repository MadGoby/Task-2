import { Header } from '@blocks/header/Header';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './landing-page.scss';

importContext();

const header = document.querySelector('.js-landing-page__header');
const searchRoom = document.querySelector('.js-landing-page__search-room');

function handleDocumentLoad() {
  new Header(header);
  new Navigation(header);
  new Datepicker({
    target: searchRoom,
  });
  new Dropdown({
    target: searchRoom,
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
