import { ContentNavigation } from './ContentNavigation';

function ContentNavigationInitialize() {
  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {
    new ContentNavigation(item);
  });
}

export { ContentNavigationInitialize };
