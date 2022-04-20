class Navigation {
  constructor(target) {
    this.container = target;
    this.expandablesLinksMap = [];

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();

    this.expandablesLinksMap.forEach((expandableLinks) => {
      this.bindDomEventListener(expandableLinks.title, expandableLinks.list);
    });
  }

  getHtmlElements() {
    [...this.container.querySelectorAll('.js-navigation__link-wrapper')].forEach((wrapper) => {
      const linkTitle = wrapper.querySelector('.js-navigation__expandable-title');
      const expandableWrapper = wrapper.querySelector('.js-navigation__expandable-wrapper');

      this.expandablesLinksMap.push({ title: linkTitle, list: expandableWrapper });
    });
  }

  controlExpandableLinksDisplay(target, relatedTarget) {
    this.expandablesLinksMap.forEach((expandableLinks) => {
      if (target === expandableLinks.title && relatedTarget === expandableLinks.list) {
        return;
      }

      if (expandableLinks.title === target) {
        expandableLinks.list.toggleAttribute('hidden');
      }
    });
  }

  handleTitleOver(event) {
    const { target, relatedTarget } = event;
    this.controlExpandableLinksDisplay(target, relatedTarget);
  }

  handleTitleOut(event) {
    const { target, relatedTarget } = event;
    this.controlExpandableLinksDisplay(target, relatedTarget);
  }

  handleListOut(event) {
    const { target, relatedTarget } = event;
    let isNeedToBeHidden = true;

    this.expandablesLinksMap.forEach((expandableLinks) => {
      const isNeedToBeDisplayed = relatedTarget.classList.contains('navigation__expanded-link')
        || relatedTarget === expandableLinks.title;

      if (isNeedToBeDisplayed) isNeedToBeHidden = false;
    });

    if (isNeedToBeHidden) target.toggleAttribute('hidden');
  }

  bindDomEventListener(title, list) {
    title.addEventListener('mouseover', this.handleTitleOver);
    title.addEventListener('mouseover', this.handleTitleOut);
    list.addEventListener('mouseover', this.handleListOut);
  }
}

export { Navigation };
