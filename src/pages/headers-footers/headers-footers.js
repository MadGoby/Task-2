import { Navigation } from '@blocks/navigation/Navigation';

import { importContext } from '../../tools/importContext';
import './headers-footers.scss';

const headersNavigaton = [
  'js-headers-footers__header',
  'js-headers-footers__header_authorized',
];

function handleDocumentLoad() {
  headersNavigaton.forEach((headerClass) => new Navigation(headerClass));
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

importContext();
