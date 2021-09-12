import { ContentNavigation } from './content-navigation';

function initAllContentNavigations() {
  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {
    new ContentNavigation(item);
  });
}

export { initAllContentNavigations };
