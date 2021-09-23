import { Sidebar } from './Sidebar';

function initialize() {
  [...document.querySelectorAll('.js-sidebar')].forEach((item) => {
    new Sidebar(item);
  });
}

document.addEventListener("DOMContentLoaded", initialize);
