import { HeaderNavigation } from '@blocks/header/Header';

import { importContext } from '../../tools/importContext';
import './registration.scss';

importContext();

function handleDocumentLoad() {
  new HeaderNavigation('js-registration-page__header');
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
