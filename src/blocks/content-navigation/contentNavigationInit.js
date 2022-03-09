import { ContentNavigation } from './ContentNavigation';

function initialize() {
  [...document.querySelectorAll('.js-content-navigation')].forEach((item) => {
    new ContentNavigation(item);
  });
}

document.addEventListener('DOMContentLoaded', initialize);
