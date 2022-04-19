class LikeButton {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.bindHandleCheckboxChecked();
  }

  getHtmlElements() {
    this.checkbox = this.container.querySelector('.js-like-button__controller');
    this.counter = this.container.querySelector('.js-like-button__counter');
  }

  handleCheckboxChecked(event) {
    const { target } = event;

    if (target.checked === true) {
      this.counter.textContent = `${Number(this.counter.textContent) + 1}`;
    } else {
      this.counter.textContent = `${Number(this.counter.textContent) - 1}`;
    }
  }

  bindHandleCheckboxChecked() {
    this.checkbox.addEventListener('change', this.handleCheckboxChecked);
  }
}

export { LikeButton };
