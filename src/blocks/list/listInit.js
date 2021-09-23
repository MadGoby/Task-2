import { ListDropdown } from './List';

function initialize() {
  [...document.querySelectorAll('.js-list')].forEach((item) => {
    new ListDropdown(item);
  });
}

document.addEventListener("DOMContentLoaded", initialize);
