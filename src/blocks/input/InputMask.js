import Inputmask from 'inputmask/lib/inputmask';

class InputMask {
  constructor(settings) {
    this.containerClass = settings.target;
    this.parameters = settings.parameters;

    this.getHtmlElements();
    this.initializeInputMask();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.input = this.container.querySelector('.js-input__field');
  }

  initializeInputMask() {
    Inputmask(this.parameters).mask(this.input);
  }
}

export { InputMask };
