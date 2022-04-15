import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './headers-footers.scss';

const headersNavigation = [
  document.querySelector('.js-headers-footers__header'),
  document.querySelector('.js-headers-footers__header_authorized'),
];

function handleDocumentLoad() {
  headersNavigation.forEach((header) => new Navigation(header));
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

importContext();
