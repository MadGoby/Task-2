import { HeaderNavigation } from './header';

function initAllHeaders() {
  [...document.querySelectorAll('.js-header')].forEach((item) => {
    new HeaderNavigation(item);
  });
}

export { initAllHeaders };
