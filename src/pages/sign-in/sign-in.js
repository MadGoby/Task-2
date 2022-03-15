import { importContext } from '../../tools/importContext';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import './sign-in.scss';

importContext();

function handleDocumentLoad() {
  headerNavigationInitialize();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/room-background.jpg');
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
