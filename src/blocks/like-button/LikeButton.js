class LikeButton {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindHandleCheckboxChange();
  }

  getHtmlElements() {
    this.checkbox = this.container.querySelector('.js-like-button__controller');
    this.counter = this.container.querySelector('.js-like-button__counter');
  }

  handleCheckboxChange(event) {
    const { target: checkbox } = event;

    if (checkbox.checked === true) {
      this.counter.textContent = `${Number(this.counter.textContent) + 1}`;
    } else {
      this.counter.textContent = `${Number(this.counter.textContent) - 1}`;
    }
  }

  bindHandleCheckboxChange() {
    this.checkbox.addEventListener('change', this.handleCheckboxChange);
  }
}

export { LikeButton };
