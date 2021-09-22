import { ContentNavigation } from './ContentNavigation';

function initAllContentNavigations() {
  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {
    new ContentNavigation(item);
  });
}

export { initAllContentNavigations };
