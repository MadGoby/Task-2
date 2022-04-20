class Sidebar {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initialize();
  }

  getHtmlElements() {
    this.title = this.container.querySelector('.js-sidebar__title');
    this.sidebar = this.container.querySelector('.js-sidebar__wrapper');
  }

  initialize() {
    this.getHtmlElements();
    this.changeDisplayOnResize(Number(document.body.offsetWidth));
    this.bindEventListeners();
  }

  handleTitleClick() {
    if (this.sidebar.style.display === 'none') {
      this.sidebar.style.display = 'inline-block';
      this.title.classList.remove('sidebar__title_closed');
      this.title.classList.add('sidebar__title_expanded');
    } else {
      this.sidebar.style.display = 'none';
      this.title.classList.remove('sidebar__title_expanded');
      this.title.classList.add('sidebar__title_closed');
    }
  }

  checkIsTitleExpanded() {
    return this.title.classList.contains('sidebar__title_expanded');
  }

  removeExpandedClass() {
    if (this.checkIsTitleExpanded()) this.title.classList.remove('sidebar__title_expanded');

    this.title.classList.add('sidebar__title_closed');
  }

  changeDisplayOnResize(windowWidth) {
    const isNeedToRemoveExpandedClass = windowWidth > 700 && this.checkIsTitleExpanded();
    const isNeedToBeDisplayed = windowWidth > 700 && this.sidebar.style.display === 'none';
    const isNeedToBeHidden = windowWidth < 700 && !this.checkIsTitleExpanded()
      && getComputedStyle(this.sidebar).display !== 'none';

    switch (true) {
      case isNeedToRemoveExpandedClass:
        this.removeExpandedClass();
        break;
      case isNeedToBeDisplayed:
        this.sidebar.style.display = '';
        break;
      case isNeedToBeHidden:
        this.sidebar.style.display = 'none';
        break;
      default:
        break;
    }
  }

  handleWindowResize(event) {
    const windowWidth = event.target.innerWidth;

    this.changeDisplayOnResize(windowWidth);
  }

  handleDocumentClick(event) {
    const result = Boolean(event.path.find((element) => element === this.container));
    const isNeedToHide = result === false && getComputedStyle(this.sidebar).display === 'block'
      && document.body.offsetWidth < 701;

    if (isNeedToHide) this.handleTitleClick();
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.handleTitleClick);
    window.addEventListener('resize', this.handleWindowResize);
    document.addEventListener('click', this.handleDocumentClick);
  }
}

export { Sidebar };
