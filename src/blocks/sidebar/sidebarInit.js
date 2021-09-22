import { Sidebar } from './Sidebar';

function initAllSidebars() {
  [...document.querySelectorAll('.js-sidebar')].forEach((item) => {
    new Sidebar(item);
  });
}

export { initAllSidebars };
