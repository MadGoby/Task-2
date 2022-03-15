import { ListDropdown } from './List';

function ListDropdownInitialize() {
  [...document.querySelectorAll('.js-list')].forEach((item) => {
    new ListDropdown(item);
  });
}

export { ListDropdownInitialize };
