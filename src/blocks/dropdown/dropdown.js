class Dropdown {
  constructor(settings) {
    this.container = settings.container;
    this.templates = settings.templates;

    this.getHtmlElements();
    this.checkClearButtonVisibility();
    this.bindObjectLink();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.input = this.container.querySelector('.js-input__field');
    this.dropdown = this.container.querySelector('.js-dropdown__control');
    this.plusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'plus'
    );
    this.minusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'minus'
    );
    this.outputs = [...this.container.querySelectorAll('.dropdown__output')];
    this.clearButton = this.container.querySelector('.dropdown__clear-button');
    this.submitButton = this.container.querySelector('.dropdown__submit-button');
  }

  checkClearButtonVisibility() {
    function isPositive(number) {
      return number > 0;
    }

    if (this.outputs.some((output) => isPositive(output.textContent))) {
      this.clearButton.style.display = 'inline-block';
    } else if (!this.clearButton.hasAttribute('hidden')) {
      this.clearButton.style.display = 'none';
    }
  }

  inputClicked() {
    this.dropdown.toggleAttribute('hidden');
    this.input.classList.toggle('input__field_expanded');
  }

  wordEndCheck(value, template, line) {
    function isEqualToZero(num) {
      return num % 10 === 0;
    }

    function fromOneToFour() {
      return isEqualToZero(value - 2) || isEqualToZero(value - 3) || isEqualToZero(value - 4);
    }

    let index;

    if (value > 4 && value < 21) {
      index = 3;
    } else if (value === 1 || isEqualToZero(value - 1)) {
      index = 1;
    } else if (fromOneToFour()) {
      index = 2;
    } else {
      index = 3;
    }

    if (this.container.getAttribute('data-output') === 'sum') {
      return this.templates[template][index];
    }
    return this.templates[template][line][index];
  }

  setDefaultIfZero() {
    const outputValue =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.container.getAttribute('data-template');
    if (outputValue === 0) this.input.value = `${this.templates[`${template}Default`]}`;
  }

  prepareOutputSum() {
    const outputValue =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.container.getAttribute('data-template');
    let output;
    if (outputValue > 0) {
      output = `${outputValue} ${this.templates[template][0]}${this.wordEndCheck(outputValue, template)}`;
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }
    return output;
  }

  prepareTwoByOne() {
    const valuesSum =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.container.getAttribute('data-template');
    let output = '';
    if (valuesSum > 0) {
      this.outputs.forEach((value, index) => {
        const iteration = () => {
          if (index === 0) {
            const valueText = Number(value.textContent) + Number(values[1]);
            output += `${valueText} ${this.templates[template][index][0]}${this.wordEndCheck(
              valueText,
              template,
              index
            )}`;
            if (valuesSum - valueText === 0) {
              output += '...';
            } else {
              output += ', ';
            }
          } else if (index === 2) {
            output += `${value.textContent} ${this.templates[template][1][0]}${this.wordEndCheck(
              +value.textContent,
              template,
              1
            )}`;
            if (Number(values[0]) === 0) output += '...';
          }
        };

        if (index === 0 && +values[0] + +values[1] > 0) iteration();
        if (index === 2 && +value.textContent > 0) iteration();
      });
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }
    return output;
  }

  prepareOneByOne() {
    const valuesSum =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.container.getAttribute('data-template');
    let output = '';
    if (valuesSum > 0) {
      this.outputs.forEach((value, index) => {
        const iteration = () => {
          const valueText = value.innerText;
          output += `${valueText} ${this.templates[template][index][0]}${this.wordEndCheck(
            +valueText,
            template,
            index
          )}`;
          if (index === 0) {
            if (valuesSum - values[0] === 0) {
              output += '...';
            } else {
              output += ', ';
            }
          } else if (index === 1) {
            if (Number(values[0]) === 0 && Number(values[2]) !== 0) {
              output += ', ';
            } else {
              output += '...';
            }
          } else if (index === 2) output += '...';
        };

        const isLastNotThird = () => index === 2 && (+values[0] === 0 || +values[1] === 0);

        if (isLastNotThird() && value.textContent > 0) {
          iteration();
        } else if (index !== 2 && value.textContent > 0) iteration();
      });
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }
    return output;
  }

  refreshInput() {
    let inputText;
    const template = this.container.getAttribute('data-output');
    if (template === 'oneByOne') {
      inputText = this.prepareOneByOne();
    } else if (template === 'twoByOne') {
      inputText = this.prepareTwoByOne();
    } else {
      inputText = this.prepareOutputSum();
    }
    this.input.value = inputText;
  }

  plusButtonClicked(event) {
    const buttonIndex = this.plusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];
    if (outputTarget.innerText < 10) {
      if (outputTarget.innerText === '0')
        this.minusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) + 1;
      if (outputTarget.innerText === '10') event.target.classList.add('dropdown__button_transparent');
    }
    this.checkClearButtonVisibility();
    this.refreshInput();
  }

  minusButtonClicked(event) {
    const buttonIndex = this.minusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];
    if (outputTarget.innerText > 0) {
      if (outputTarget.innerText === '10')
        this.plusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) - 1;
      if (outputTarget.innerText === '0') event.target.classList.add('dropdown__button_transparent');
    }
    this.checkClearButtonVisibility();
    this.refreshInput();
  }

  clearButtonClicked() {
    this.outputs.forEach((output) => {
      output.textContent = 0;
    });
    this.minusButtons.forEach((button) => {
      button.classList.add('dropdown__button_transparent');
    });
    this.plusButtons.forEach((button) => {
      button.classList.remove('dropdown__button_transparent');
    });
    this.setDefaultIfZero();
    this.checkClearButtonVisibility();
  }

  bindObjectLink() {
    this.checkClearButtonVisibility = this.checkClearButtonVisibility.bind(this);
    this.inputClicked = this.inputClicked.bind(this);
    this.plusButtonClicked = this.plusButtonClicked.bind(this);
    this.minusButtonClicked = this.minusButtonClicked.bind(this);
    this.clearButtonClicked = this.clearButtonClicked.bind(this);
    this.refreshInput = this.refreshInput.bind(this);
    this.prepareOutputSum = this.prepareOutputSum.bind(this);
    this.wordEndCheck = this.wordEndCheck.bind(this);
    this.setDefaultIfZero = this.setDefaultIfZero.bind(this);
    this.prepareOneByOne = this.prepareOneByOne.bind(this);
    this.prepareTwoByOne = this.prepareTwoByOne.bind(this);
  }

  bindEventListeners() {
    this.input.addEventListener('click', this.inputClicked);
    this.clearButton.addEventListener('click', this.clearButtonClicked);
    this.submitButton.addEventListener('click', this.inputClicked);
    this.plusButtons.forEach((button) => button.addEventListener('click', this.plusButtonClicked));
    this.minusButtons.forEach((button) => button.addEventListener('click', this.minusButtonClicked));
  }
}

export { Dropdown };
