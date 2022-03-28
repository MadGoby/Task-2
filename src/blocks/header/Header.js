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
    this.button = this.container.querySelector('.js-header__navigation-button');
  }

  handleButtonClick() {
    const styles = getComputedStyle(this.navigation);

    if (styles.display === 'none') {
      this.navigation.style.display = 'block';
      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');
      this.bindDomEventListener();
    } else {
      this.navigation.style.display = 'none';
      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');
      this.removeDomEventListener();
    }
  }

  controlDisplayOnResize(userWidth) {
    const isNeedToBeDisplayed = userWidth > 350 && this.navigation.style.display === 'none';

    if (isNeedToBeDisplayed) {
      this.navigation.style.display = 'block';
    } else if (userWidth <= 350) {
      this.navigation.style.display = 'none';
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
    document.body.onresize = this.handleDOMResize;
  }
}

export { HeaderBurger };
