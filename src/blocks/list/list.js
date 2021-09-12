class ListDropdown {
  constructor(target) {
    this.container = target;

    this.getHtmlElements();
    this.bindObjectLink();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.list = this.container.querySelector('.js-list__container');
    this.title = this.container.querySelector('.js-title');
  }

  changeListDisplay() {
    if (this.list.hasAttribute('hidden')) {
      this.list.removeAttribute('hidden');
      this.title.classList.remove('title_closed');
      this.title.classList.add('title_expanded');
    } else {
      this.list.setAttribute('hidden', 'hidden');
      this.title.classList.remove('title_expanded');
      this.title.classList.add('title_closed');
    }
  }

  bindObjectLink() {
    this.changeListDisplay = this.changeListDisplay.bind(this);
  }

  bindEventListeners() {
    this.title.addEventListener('click', this.changeListDisplay);
  }
}

export { ListDropdown };
