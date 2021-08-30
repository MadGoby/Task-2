export default function headerNav(settings) {
  const { buttonClass, navClass } = settings;

  function getHtmlElements() {
    const button = document.querySelector(buttonClass);
    const nav = document.querySelector(navClass);
    return { button, nav };
  }

  const resultElements = getHtmlElements();
  const { button, nav } = resultElements;

  function hambToArrow(state) {
    const sign = button.querySelector('.header__hamburger');

    if (state === 'block') {
      sign.classList.add('header__hamburger_open');
    } else {
      sign.classList.remove('header__hamburger_open');
    }
  }

  function discloseNav() {
    const styles = getComputedStyle(nav);

    if (styles.display === 'none') {
      nav.style.display = 'block';
      hambToArrow(styles.display);
    } else {
      nav.style.display = 'none';
      hambToArrow(styles.display);
    }
  }

  function changeSidebarDisplay(userWidth) {
    if (userWidth > 350 && nav.style.display === 'none') {
      nav.style.display = 'block';
    } else if (userWidth <= 350) {
      nav.style.display = 'none';
    }
  }

  function convertPassesVariable(event) {
    const userWidth = +event.target.innerWidth;
    changeSidebarDisplay(userWidth);
  }

  function bindEventListeners() {
    button.addEventListener('click', discloseNav);
    document.body.onresize = convertPassesVariable;
  }

  bindEventListeners();
}
