class ListDropdown {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.list = this.container.querySelector('.js-list__container');
    this.title = this.container.querySelector('.js-title');
  }

  handleTitleClick() {
    if (this.list.hasAttribute('hidden')) {
      this.list.removeAttribute('hidden');
      this.title.classList.remove('title_closed');
      this.title.classList.add('title_expanded');
      this.bindDomEventListener();
    } else {
      this.list.setAttribute('hidden', 'hidden');
      this.title.classList.remove('title_expanded');
      this.title.classList.add('title_closed');
      this.removeDomEventListener();
    }
  }

  handelDOMClick(event) {
    const result = Boolean(event.path.find(element => element === this.container));
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
