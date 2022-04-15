class HeaderBurger {
  constructor(target) {
    this.containerClass = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.navigation = this.container.querySelector('.js-header__navigation-wrapper');
    this.button = this.container.querySelector('.js-header__hamburger');
  }

  handleButtonClick() {
    const styles = getComputedStyle(this.navigation);

    if (styles.display === 'none') {
      this.navigation.style.display = 'block';
      this.button.classList.add('header__hamburger_expanded');
      this.bindDomEventListener();
    } else {
      this.navigation.style.display = 'none';
      this.button.classList.remove('header__hamburger_expanded');
      this.removeDomEventListener();
    }
  }

  controlDisplayOnResize(userWidth) {
    const isNeedToBeDisplayed = userWidth > 363 && this.button.classList.contains('header__hamburger_expanded');

    if (isNeedToBeDisplayed) {
      this.button.classList.remove('header__hamburger_expanded');
      this.navigation.style.display = '';
    }
  }

  handleDOMResize(event) {
    const userWidth = Number(event.target.innerWidth);
    this.controlDisplayOnResize(userWidth);
  }

  handelDOMClick(event) {
    const checkIsClickInNavigation = (element) => element === this.navigation
      || element === this.button;
    const result = Boolean(event.path.find((element) => checkIsClickInNavigation(element)));
    if (result === false) this.handleButtonClick();
  }

  bindDomEventListener() {
    document.addEventListener('click', this.handelDOMClick);
  }

  removeDomEventListener() {
    document.removeEventListener('click', this.handelDOMClick);
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.handleButtonClick);
    window.addEventListener('resize', this.handleDOMResize);
  }
}

export { HeaderBurger };
