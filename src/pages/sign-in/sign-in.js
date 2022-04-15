import { Header } from '@blocks/header/Header';
import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './sign-in.scss';

importContext();

function handleDocumentLoad() {
  new Header('js-sign-in__header');
  new Navigation('js-sign-in__header');
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
