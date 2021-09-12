class HeaderNavigation {
  constructor(target) {
    this.container = target;

    this.getHtmlElements();
    this.bindObjectLink();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.button = this.container.querySelector('.js-header__navigation-button');
    this.navigation = this.container.querySelector('.js-header__navigation');
  }

  turnsHamburgerIntoCross(state) {
    const sign = this.button.querySelector('.header__hamburger');

    if (state === 'block') {
      sign.classList.add('header__hamburger_expanded');
    } else {
      sign.classList.remove('header__hamburger_expanded');
    }
  }

  discloseNavigation() {
    const styles = getComputedStyle(this.navigation);

    if (styles.display === 'none') {
      this.navigation.style.display = 'block';
      this.turnsHamburgerIntoCross(styles.display);
    } else {
      this.navigation.style.display = 'none';
      this.turnsHamburgerIntoCross(styles.display);
    }
  }

  changeSidebarDisplay(userWidth) {
    if (userWidth > 350 && this.navigation.style.display === 'none') {
      this.navigation.style.display = 'block';
    } else if (userWidth <= 350) {
      this.navigation.style.display = 'none';
    }
  }

  convertPassesVariable(event) {
    const userWidth = +event.target.innerWidth;
    this.changeSidebarDisplay(userWidth);
  }

  bindObjectLink() {
    this.discloseNavigation = this.discloseNavigation.bind(this);
    this.convertPassesVariable = this.convertPassesVariable.bind(this);
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.discloseNavigation);
    document.body.onresize = this.convertPassesVariable;
  }
}

export { HeaderNavigation };
