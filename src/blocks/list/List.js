class List {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.bindEventListeners();
    this.bindHandelDocumentClick();
  }

  getHtmlElements() {
    this.list = this.container.querySelector('.js-list__container-wrapper');
    this.title = this.container.querySelector('.js-list__title');
  }

  handleTitleClick() {
    if (this.list.hasAttribute('hidden')) {
      this.list.toggleAttribute('hidden');
      this.title.classList.remove('list__title_closed');
      this.title.classList.add('list__title_expanded');
    } else {
      this.list.toggleAttribute('hidden');
      this.title.classList.remove('list__title_expanded');
      this.title.classList.add('list__title_closed');
    }
  }

  handelDocumentClick(event) {
    const result = Boolean(event.path.find((element) => element === this.container));
    if (result === false) this.handleTitleClick();
  }

  bindHandelDocumentClick() {
    document.addEventListener('click', this.handelDocumentClick);
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.handleTitleClick);
    document.addEventListener('click', this.handelDocumentClick);
  }
}

export { List };
