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
    let links = false;
    const checkElementsMatch = (list) => {
      if (list.title === targetTitle) links = list.links;
    };

    this.expandableLinks.forEach((list) => checkElementsMatch(list));

    return links;
  }

  handleWrapperMouseOver(event) {
    const isTitle = event.target.classList.contains('js-navigation__expandable-title');
    const links = isTitle ? this.getList(event.target) : null;
    const isNeedToDisplay = links && links.hasAttribute('hidden');

    if (isNeedToDisplay) links.removeAttribute('hidden');
  }

  handleWrapperMouseOut(event) {
    const wrapper = event.target.closest('.js-navigation__link-wrapper');
    const title = wrapper ? wrapper.querySelector('.js-navigation__expandable-title') : null;
    const links = title ? this.getList(title) : null;
    const isCursorOnTarget = event.relatedTarget.closest('.js-navigation__link-wrapper') === wrapper;

    if (!isCursorOnTarget) links.setAttribute('hidden', 'hidden');
  }

  bindWrapperEventListeners(wrapper) {
    wrapper.addEventListener('mouseover', this.handleWrapperMouseOver);
    wrapper.addEventListener('mouseout', this.handleWrapperMouseOut);
  }
}

export { Navigation };
