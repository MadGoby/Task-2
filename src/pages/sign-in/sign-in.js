import { Header } from '@blocks/header/Header';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './sign-in.scss';

importContext();

const header = document.querySelector('.js-sign-in__header');

function handleDocumentLoad() {
  new Header(header);
  new Navigation(header);
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
