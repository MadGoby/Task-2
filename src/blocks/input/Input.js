import Inputmask from 'inputmask/lib/inputmask';

class Input {
  constructor(settings) {
    this.container = settings.target;
    this.parameters = settings.parameters;

    this.getInput();
    this.initialize();
  }

  getInput() {
    this.input = this.container.querySelector('.js-input__field');
  }

  initialize() {
    Inputmask(this.parameters).mask(this.input);
  }
}

export { Input };
