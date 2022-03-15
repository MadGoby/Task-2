import { Sidebar } from './Sidebar';

function sidebarInitialize() {
  [...document.querySelectorAll('.js-sidebar')].forEach((item) => {
    new Sidebar(item);
  });
}

export { sidebarInitialize };
