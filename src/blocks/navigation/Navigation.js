class Navigation {
  constructor(target) {
    this.container = target;
    this.expandablesLinksMap = [];

    autoBind(this);
    this.getHtmlElements();
    this.bindDomEventListener();
  }

  getHtmlElements() {
    [...this.container.querySelectorAll('.js-navigation__link-wrapper')].forEach((wrapper) => {
      const linkTitle = wrapper.querySelector('.navigation__expandable-title');
      const expandableWrapper = wrapper.querySelector('.js-navigation__expandable-wrapper');

      this.expandablesLinksMap.push({ title: linkTitle, list: expandableWrapper });
    });
  }

  centersExpandableLinks() {
    this.expandablesLinksMap.forEach((expandableLinks) => {
      const isNeedToBeCenters = expandableLinks.title.offsetWidth
        < expandableLinks.list.offsetWidth;

      if (isNeedToBeCenters) {
        const offset = (expandableLinks.title.offsetWidth - expandableLinks.list.offsetWidth) / 2;
        expandableLinks.list.style.left = `${offset}px`;
      }
    });
  }

  controlExpandableLinksDisplay(target, relatedTarget) {
    this.expandablesLinksMap.forEach((expandableLinks) => {
      if (target === expandableLinks.title && relatedTarget === expandableLinks.list) {
        return;
      }

      if (expandableLinks.title === target) {
        expandableLinks.list.toggleAttribute('hidden');
        this.centersExpandableLinks();
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

  bindDomEventListener() {
    this.expandablesLinksMap.forEach((expandableLinks) => {
      expandableLinks.title.onmouseover = this.handleTitleOver;
      expandableLinks.title.onmouseout = this.handleTitleOut;
      expandableLinks.list.onmouseout = this.handleListOut;
    });
  }
}

export { Navigation };
