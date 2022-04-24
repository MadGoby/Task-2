class Header {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.navigation = this.container.querySelector('.js-header__navigation-wrapper');
    this.button = this.container.querySelector('.js-header__hamburger');
  }

  handleButtonClick() {
    const styles = getComputedStyle(this.navigation);

    if (styles.display === 'none') {
      this.navigation.style.display = 'block';
      this.button.classList.add('header__hamburger_expanded');
    } else {
      this.navigation.style.display = 'none';
      this.button.classList.remove('header__hamburger_expanded');
    }
  }

  controlDisplayOnResize(userWidth) {
    const isNeedToBeDisplayed = userWidth > 363 && this.navigation.style.display === 'none';
    const isNeedToRemoveExpandedClass = this.button.classList.contains('header__hamburger_expanded');

    if (isNeedToRemoveExpandedClass) this.button.classList.remove('header__hamburger_expanded');
    if (isNeedToBeDisplayed) this.navigation.style.display = '';
  }

  handleDocumentResize(event) {
    const userWidth = Number(event.target.innerWidth);
    this.controlDisplayOnResize(userWidth);
  }

  handleDocumentClick(event) {
    const isInHeaderArea = Boolean(event.composedPath().find(
      (element) => element === this.navigation || element === this.button,
    ));
    const isNeedToHide = isInHeaderArea === false && (
      getComputedStyle(this.navigation).display === 'block'
        || getComputedStyle(this.navigation).display === 'inline-block'
    ) && document.body.offsetWidth < 363;

    if (isNeedToHide) this.handleButtonClick();
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.handleButtonClick);
    window.addEventListener('resize', this.handleDocumentResize);
    document.addEventListener('click', this.handleDocumentClick);
  }
}

export { Header };
