class ListDropdown {
  constructor(target) {
    this.containerClass = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
    if (!this.list.hasAttribute('hidden')) this.bindDomEventListener();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.list = this.container.querySelector('.js-list__container-wrapper');
    this.title = this.container.querySelector('.js-list__title');
  }

  handleTitleClick() {
    if (this.list.hasAttribute('hidden')) {
      this.list.toggleAttribute('hidden');
      this.title.classList.remove('list__title_closed');
      this.title.classList.add('list__title_expanded');
      this.bindDomEventListener();
    } else {
      this.list.toggleAttribute('hidden');
      this.title.classList.remove('list__title_expanded');
      this.title.classList.add('list__title_closed');
      this.removeDomEventListener();
    }
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
  }
}

export { ListDropdown };
