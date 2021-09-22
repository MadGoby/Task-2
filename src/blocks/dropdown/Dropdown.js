class Dropdown {
  constructor(settings) {
    this.container = settings.container;
    this.templates = settings.templates;

    autoBind(this);
    this.initializes();
  }

  initializes() {
    this.getHtmlElements();
    this.checkClearButtonVisibility();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.input = this.container.querySelector('.js-input__field');
    this.dropdown = this.container.querySelector('.js-dropdown__control');
    this.plusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'plus',
    );
    this.minusButtons = [...this.container.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'minus',
    );
    this.outputs = [...this.container.querySelectorAll('.dropdown__output')];
    this.clearButton = this.container.querySelector('.dropdown__clear-button');
    this.submitButton = this.container.querySelector('.dropdown__submit-button');
  }

  checkClearButtonVisibility() {
    function isPositive(number) {
      return number > 0;
    }

    const isNeedToDisplay = this.outputs.some((output) => isPositive(output.textContent));
    const isNeedToHide = this.clearButton.hasAttribute('hidden') === false;

    if (isNeedToDisplay) {
      this.clearButton.style.display = 'inline-block';
    } else if (isNeedToHide) {
      this.clearButton.style.display = 'none';
    }
  }

  controlDropdownDisplay() {
    this.dropdown.toggleAttribute('hidden');
    this.input.classList.toggle('input__field_expanded');
  }

  definesWordEnd(value, template, line) {
    function checkIsEqualToZero(num) {
      return num % 10 === 0;
    }

    function checksComplianceFromOneToFour() {
      return checkIsEqualToZero(value - 2) ||
        checkIsEqualToZero(value - 3) ||
        checkIsEqualToZero(value - 4);
    }

    let index;
    const isMinimumValue = value === 1 || checkIsEqualToZero(value - 1);
    const isInMiddleRange = value > 4 && value < 21;

    switch (true) {
      case isInMiddleRange:
        index = 3;
        break;
      case isMinimumValue:
        index = 1;
        break;
      case checksComplianceFromOneToFour():
        index = 2;
        break;
      default:
        index = 3;
        break;
    }

    if (this.container.getAttribute('data-output') === 'sum') {
      return this.templates[template][index];
    }
    return this.templates[template][line][index];
  }

  setDefault() {
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
      output = `${outputValue} ${this.templates[template][0]}${this.definesWordEnd(outputValue, template)}`;
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }
    return output;
  }

  calculateTwoByOne(setting) {
    const { valuesSum, values, template } = setting;
    let output = '';

    this.outputs.forEach((value, index) => {
      const checkIsNeedEtc = (valueTextContent) => valuesSum - valueTextContent === 0 || Number(values[0]) === 0;
      const addPunctuationMarks = (valueTextContent) => {
        switch (true) {
          case checkIsNeedEtc(valueTextContent):
            output += '...';
            break;
          case index !== 2:
            output += ', ';
            break;
          default:
            break;
        }
      };

      const addDefinitionToNumber = () => {
        if (index === 0) {
          const valueText = Number(value.textContent) + Number(values[1]);
          output += `${valueText} ${this.templates[template][index][0]}${this.definesWordEnd(
            valueText,
            template,
            index,
          )}`;
          addPunctuationMarks(valueText);
        } else if (index === 2) {
          output += `${value.textContent} ${this.templates[template][1][0]}${this.definesWordEnd(
            +value.textContent,
            template,
            1,
          )}`;
          addPunctuationMarks(false);
        }
      };

      const areFirstDefinitionNeeded = index === 0 && +values[0] + +values[1] > 0;
      const areLastDefinitionNeeded = index === 2 && +value.textContent > 0;

      if (areFirstDefinitionNeeded) addDefinitionToNumber();
      if (areLastDefinitionNeeded) addDefinitionToNumber();
    });
    return output;
  }

  prepareTwoByOne() {
    const valuesSum =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.container.getAttribute('data-template');
    let output;

    if (valuesSum > 0) {
      output = this.calculateTwoByOne({ valuesSum, values, template });
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }

    return output;
  }

  calculateOneByOne(settings) {
    const { valuesSum, values, template } = settings;
    let output = '';

    this.outputs.forEach((value, index) => {
      const isFirstsOnlyOne = index === 0 && (valuesSum - values[0] === 0);
      const isSecondOnlyOne = index === 1 && (Number(values[0]) === 0 && Number(values[2]) === 0);
      const isThirdWheel = index === 1 && Number(values[0]) !== 0;
      const isNeedEtc = isSecondOnlyOne || isFirstsOnlyOne || index === 2;

      const addPunctuationMarks = () => {
        switch (true) {
          case isNeedEtc || isThirdWheel:
            output += '...';
            break;
          default:
            output += ', ';
            break;
        }
      };

      const addDefinitionToNumber = () => {
        const valueText = value.innerText;
        output += `${valueText} ${this.templates[template][index][0]}${this.definesWordEnd(
          +valueText,
          template,
          index,
        )}`;
        addPunctuationMarks();
      };

      const isLastNotThird = index === 2 && (+values[0] === 0 || +values[1] === 0);
      const isThirdRequired = isLastNotThird && value.textContent > 0;
      const isValueNotZero = index !== 2 && value.textContent > 0;

      if (isThirdRequired) {
        addDefinitionToNumber();
      } else if (isValueNotZero) addDefinitionToNumber();
    });
    return output;
  }

  prepareOneByOne() {
    const valuesSum =
      Number(this.outputs[0].textContent) + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.container.getAttribute('data-template');
    let output;

    if (valuesSum > 0) {
      output = this.calculateOneByOne({ valuesSum, values, template });
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

  handlePlusButtonClick(event) {
    const buttonIndex = this.plusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];

    const refreshListLine = () => {
      if (outputTarget.innerText === '0')
        this.minusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) + 1;
      if (outputTarget.innerText === '10') event.target.classList.add('dropdown__button_transparent');
    };

    if (outputTarget.innerText < 10) refreshListLine();

    this.checkClearButtonVisibility();
    this.refreshInput();
  }

  handleMinusButtonClick(event) {
    const buttonIndex = this.minusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];

    const refreshListLine = () => {
      if (outputTarget.innerText === '10')
        this.plusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) - 1;
      if (outputTarget.innerText === '0') event.target.classList.add('dropdown__button_transparent');
    };

    if (outputTarget.innerText > 0) refreshListLine();

    this.checkClearButtonVisibility();
    this.refreshInput();
  }

  handleClearButtonClick() {
    this.outputs.forEach((output) => {
      output.textContent = 0;
    });
    this.minusButtons.forEach((button) => {
      button.classList.add('dropdown__button_transparent');
    });
    this.plusButtons.forEach((button) => {
      button.classList.remove('dropdown__button_transparent');
    });
    this.setDefault();
    this.checkClearButtonVisibility();
  }

  handleInputClick() {
    this.controlDropdownDisplay();
  }

  handleSubmitButtonClick() {
    this.controlDropdownDisplay();
  }

  bindEventListeners() {
    this.input.addEventListener('click', this.handleInputClick);
    this.clearButton.addEventListener('click', this.handleClearButtonClick);
    this.submitButton.addEventListener('click', this.handleSubmitButtonClick);
    this.plusButtons.forEach((button) => button.addEventListener('click', this.handlePlusButtonClick));
    this.minusButtons.forEach((button) => button.addEventListener('click', this.handleMinusButtonClick));
  }
}

export { Dropdown };
