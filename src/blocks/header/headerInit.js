import { HeaderNavigation } from './Header';

function initialize() {
  [...document.querySelectorAll('.js-header__navigation')].forEach((item) => {
    new HeaderNavigation(item);
  });
}

document.addEventListener("DOMContentLoaded", initialize);
