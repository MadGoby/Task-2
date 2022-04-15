class Sidebar {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.prepareSidebar();
  }

  getHtmlElements() {
    this.title = this.container.querySelector('.js-sidebar__title');
    this.sidebar = this.container.querySelector('.js-sidebar__wrapper');
  }

  prepareSidebar() {
    this.getHtmlElements();
    this.changeDisplayOnresize(Number(document.body.offsetWidth));
    this.bindEventListeners();
  }

  handleTitleClick() {
    if (this.sidebar.style.display === 'none') {
      this.sidebar.style.display = 'inline-block';
      this.title.classList.remove('sidebar__title_closed');
      this.title.classList.add('sidebar__title_expanded');
      this.bindDomEventListener();
    } else {
      this.sidebar.style.display = 'none';
      this.title.classList.remove('sidebar__title_expanded');
      this.title.classList.add('sidebar__title_closed');
      this.removeDomEventListener();
    }
  }

  removeExpandedClass() {
    const isTitleExpanded = this.title.classList.contains('sidebar__title_expanded');
    if (isTitleExpanded) this.title.classList.remove('sidebar__title_expanded');
    this.title.classList.add('sidebar__title_closed');
  }

  changeDisplayOnresize(userWidth) {
    const isLessThanLimit = userWidth > 700;
    const notDisplayed = this.sidebar.style.display === 'none';
    const checkNeedDisplay = () => isLessThanLimit && notDisplayed;

    if (checkNeedDisplay()) {
      this.title.style.display = 'none';
      this.sidebar.style.display = 'inline-block';
      this.removeExpandedClass();
    } else if (userWidth < 701) {
      this.title.style.display = 'inline-block';
      this.sidebar.style.display = 'none';
    }
  }

  handleDOMResize(event) {
    this.changeDisplayOnresize(Number(event.target.innerWidth));
  }

  handelDOMClick(event) {
    const result = Boolean(event.path.find((element) => element === this.container));
    if (result === false) this.handleTitleClick();
  }

  bindDomEventListener() {
    document.addEventListener('click', this.handelDOMClick);
  }

  removeDomEventListener() {
    document.removeEventListener('click', this.handelDOMClick);
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.handleTitleClick);
    window.addEventListener('resize', this.handleDOMResize);
  }
}

export { Sidebar };
