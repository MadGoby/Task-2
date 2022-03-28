import { HeaderBurger } from '@blocks/header/Header';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './landing-page.scss';

importContext();

function handleDocumentLoad() {
  new HeaderBurger('js-landing-page__header');
  new Navigation('js-landing-page__header');
  new Datepicker({
    target: 'js-landing-page__search-room',
  });
  new Dropdown({
    target: 'js-landing-page__search-room',
    dataSettings: {
      dataType: {
        name: 'guests',
      },
      outputType: 'sum',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
