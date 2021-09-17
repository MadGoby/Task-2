class HeaderNavigation {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.button = this.container.querySelector('.js-header__navigation-button');
    this.navigation = this.container.querySelector('.js-header__navigation');
  }

  controlNavigationDisplay() {
    const styles = getComputedStyle(this.navigation);

    if (styles.display === 'none') {
      this.navigation.style.display = 'block';
      this.button.querySelector('.header__hamburger').classList.add('header__hamburger_expanded');
    } else {
      this.navigation.style.display = 'none';
      this.button.querySelector('.header__hamburger').classList.remove('header__hamburger_expanded');
    }
  }

  controlDisplayOnResize(userWidth) {
    if (userWidth > 350 && this.navigation.style.display === 'none') {
      this.navigation.style.display = 'block';
    } else if (userWidth <= 350) {
      this.navigation.style.display = 'none';
    }
  }

  convertPassesVariable(event) {
    const userWidth = +event.target.innerWidth;
    this.controlDisplayOnResize(userWidth);
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.controlNavigationDisplay);
    document.body.onresize = this.convertPassesVariable;
  }
}

export { HeaderNavigation };
