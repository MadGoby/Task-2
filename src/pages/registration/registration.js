import { InputMask } from '@blocks/input/InputMask';
import { HeaderNavigation } from '@blocks/header/Header';

import { importContext } from '../../tools/importContext';
import './registration.scss';

importContext();

function handleDocumentLoad() {
  new HeaderNavigation('js-registration-page__header');
  new InputMask({
    target: 'js-registration-page__form',
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
