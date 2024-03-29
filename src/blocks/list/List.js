class List {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.list = this.container.querySelector('.js-list__container-wrapper');
    this.title = this.container.querySelector('.js-list__title');
  }

  handleTitleClick() {
    const isListHidden = this.list.hasAttribute('hidden');

    if (isListHidden) {
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
    const isInContainerArea = Boolean(event.composedPath().find(
      (clickTargetParent) => clickTargetParent === this.container,
    ));
    const isNeedToHide = isInContainerArea === false && !this.list.hasAttribute('hidden');
    if (isNeedToHide) this.handleTitleClick();
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.handleTitleClick);
    document.addEventListener('click', this.handelDocumentClick);
  }
}

export { List };
