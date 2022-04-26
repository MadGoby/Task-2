class Navigation {
  constructor(target) {
    this.container = target;
    this.expandableLinks = [];
    this.wrappers = [];

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.wrappers.forEach((wrapper) => {
      this.bindWrapperEventListeners(wrapper);
    });
  }

  getHtmlElements() {
    [...this.container.querySelectorAll('.js-navigation__link-wrapper')].forEach((wrapper) => {
      const title = wrapper.querySelector('.js-navigation__expandable-title');
      const links = wrapper.querySelector('.js-navigation__expandable-wrapper');

      this.expandableLinks.push({ title, links });
      this.wrappers.push(wrapper);
    });
  }

  getList(targetTitle) {
    const listLinks = this.expandableLinks.map((list) => {
      if (list.title === targetTitle) return list.links;
      return false;
    });

    return listLinks.find((list) => Boolean(list));
  }

  handleWrapperMouseOver(event) {
    const links = this.getList(event.target);
    const isNeedToDisplay = Boolean(links) && links.hasAttribute('hidden');

    if (isNeedToDisplay) links.removeAttribute('hidden');
  }

  handleWrapperMouseOut(event) {
    const wrapper = event.target.closest('.js-navigation__link-wrapper');
    const title = wrapper.querySelector('.js-navigation__expandable-title');
    const isCursorOnTarget = event.relatedTarget.closest('.js-navigation__link-wrapper') === wrapper;

    if (!isCursorOnTarget) this.getList(title).setAttribute('hidden', 'hidden');
  }

  bindWrapperEventListeners(wrapper) {
    wrapper.addEventListener('mouseover', this.handleWrapperMouseOver);
    wrapper.addEventListener('mouseout', this.handleWrapperMouseOut);
  }
}

export { Navigation };
