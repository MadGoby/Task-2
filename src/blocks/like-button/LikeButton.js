class LikeButton {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.controller = this.container.querySelector('.js-like-button__controller');
    this.counter = this.container.querySelector('.js-like-button__counter');
  }

  handleControllerChecked(event) {
    const { target } = event;

    if (target.checked === true) {
      this.counter.textContent = `${Number(this.counter.textContent) + 1}`;
    } else {
      this.counter.textContent = `${Number(this.counter.textContent) - 1}`;
    }
  }

  bindEventListeners() {
    this.controller.addEventListener('change', this.handleControllerChecked);
  }
}

export { LikeButton };
