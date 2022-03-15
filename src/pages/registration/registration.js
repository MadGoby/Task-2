import { importContext } from '../../tools/importContext';
import { headerNavigationInitialize } from '../../blocks/header/headerInit';
import { initAllInputsMasks } from '../../blocks/input/inputMask';
import './registration.scss';

importContext();

function handleDocumentLoad() {
  headerNavigationInitialize();
  initAllInputsMasks();
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);

require('../../img/room-background.jpg');
require('../../img/logo-color.svg');
require('../../img/instagram.svg');
require('../../img/facebook.svg');
require('../../img/twitter.svg');
