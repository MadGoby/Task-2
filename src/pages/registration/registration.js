import { Input } from '@blocks/input/Input';
import { Header } from '@blocks/header/Header';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './registration.scss';

importContext();

function handleDocumentLoad() {
  new Header('js-registration-page__header');
  new Navigation('js-registration-page__header');
  new Input({
    target: 'js-registration-page__form',
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
