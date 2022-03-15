import { HeaderNavigation } from './Header';

function headerNavigationInitialize() {
  [...document.querySelectorAll('.js-header__navigation')].forEach((item) => {
    new HeaderNavigation(item);
  });
}

export { headerNavigationInitialize };
