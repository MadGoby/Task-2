import Inputmask from 'inputmask/lib/inputmask';

class Input {
  constructor(settings) {
    this.containerClass = settings.target;
    this.parameters = settings.parameters;

    this.getHtmlElements();
    this.initializeInput();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.input = this.container.querySelector('.js-input__field');
  }

  initializeInput() {
    Inputmask(this.parameters).mask(this.input);
  }
}

export { Input };
