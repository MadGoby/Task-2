import { ListDropdown } from './List';

function initAllLists() {
  [...document.querySelectorAll('.js-list')].forEach((item) => {
    new ListDropdown(item);
  });
}

export { initAllLists };
