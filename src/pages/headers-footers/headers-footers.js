import { importContext } from '../../tools/importContext';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import './headers-footers.scss';

importContext();

function handleDocumentLoad() {
  headerNavigationInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/logo.svg');
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
