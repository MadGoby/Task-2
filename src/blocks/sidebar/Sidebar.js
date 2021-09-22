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
      this.title.classList.remove('title_closed');
      this.title.classList.add('title_expanded');
    } else {
      this.sidebar.style.display = 'none';
      this.title.classList.remove('title_expanded');
      this.title.classList.add('title_closed');
    }
  }

  removeExpandedClass() {
    this.title.classList.remove('title_expanded');
    this.title.classList.add('title_closed');
  }

  changeDisplayOnresize(userWidth) {
    const isLessThanLimit = userWidth > 697;
    const notDisplayed = this.sidebar.style.display === 'none';
    const checkNeedDisplay = () => isLessThanLimit && notDisplayed;

    if (checkNeedDisplay()) {
      this.sidebar.style.display = 'inline-block';
      if (this.title.classList.contains('title_expanded')) this.removeExpandedClass();
    } else if (userWidth < 697) {
      this.sidebar.style.display = 'none';
    }
  }

  handleMainWrapperOnResize(event) {
    this.changeDisplayOnresize(Number(event.target.innerWidth));
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.handleTitleClick);
    document.body.onresize = this.handleMainWrapperOnResize;
  }
}

export { Sidebar };