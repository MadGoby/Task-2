import Inputmask from 'inputmask/lib/inputmask';

class Input {
  constructor(settings) {
    this.container = settings.target;
    this.parameters = settings.parameters;

    this.getHtmlElements();
    this.initializeInput();
  }

  getHtmlElements() {
    this.input = this.container.querySelector('.js-input__field');
  }

  initializeInput() {
    Inputmask(this.parameters).mask(this.input);
  }
}

export { Input };
