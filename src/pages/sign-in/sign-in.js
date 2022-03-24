import { HeaderNavigation } from '@blocks/header/Header';

import { importContext } from '../../tools/importContext';
import './sign-in.scss';

importContext();

function handleDocumentLoad() {
  new HeaderNavigation('js-sign-in__header');
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
