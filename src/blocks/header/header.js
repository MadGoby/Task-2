export default function headerNavigation(settings) {
  const { buttonClass, navigationClass } = settings;

  function getHtmlElements() {
    const button = document.querySelector(buttonClass);
    const navigation = document.querySelector(navigationClass);
    return { button, navigation };
  }

  const resultElements = getHtmlElements();
  const { button, navigation } = resultElements;

  function hambToArrow(state) {
    const sign = button.querySelector('.header__hamburger');

    if (state === 'block') {
      sign.classList.add('header__hamburger_expanded');
    } else {
      sign.classList.remove('header__hamburger_expanded');
    }
  }

  function discloseNavigation() {
    const styles = getComputedStyle(navigation);

    if (styles.display === 'none') {
      navigation.style.display = 'block';
      hambToArrow(styles.display);
    } else {
      navigation.style.display = 'none';
      hambToArrow(styles.display);
    }
  }

  function changeSidebarDisplay(userWidth) {
    if (userWidth > 350 && navigation.style.display === 'none') {
      navigation.style.display = 'block';
    } else if (userWidth <= 350) {
      navigation.style.display = 'none';
    }
  }

  function convertPassesVariable(event) {
    const userWidth = +event.target.innerWidth;
    changeSidebarDisplay(userWidth);
  }

  function bindEventListeners() {
    button.addEventListener('click', discloseNavigation);
    document.body.onresize = convertPassesVariable;
  }

  bindEventListeners();
}
