import { Input } from '@blocks/input/Input';
import { Header } from '@blocks/header/Header';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './registration.scss';

importContext();

const header = document.querySelector('.js-registration-page__header');
const input = document.querySelector('.js-registration-page__form');

function handleDocumentLoad() {
  new Header(header);
  new Navigation(header);
  new Input({
    target: input,
    parameters: {
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    },
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
