import { InputMask } from '@blocks/input/InputMask';
import { HeaderBurger } from '@blocks/header/Header';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './registration.scss';

importContext();

function handleDocumentLoad() {
  new HeaderBurger('js-registration-page__header');
  new Navigation('js-registration-page__header');
  new InputMask({
    target: 'js-registration-page__form',
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
