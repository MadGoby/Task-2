import { HeaderNavigation } from './Header';

function initAllHeaders() {
  [...document.querySelectorAll('.js-header')].forEach((item) => {
    new HeaderNavigation(item);
  });
}

export { initAllHeaders };
