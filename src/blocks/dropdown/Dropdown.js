import { dropdownData } from '@blocks/dropdown/dropdownData';

class Dropdown {
  constructor(settings) {
    this.container = settings.target;
    this.templates = dropdownData;
    if (settings.dataSettings.dataType.customValue) {
      this.templates.custom = settings.dataSettings.dataType.customValue;
    }
    this.dataSettings = settings.dataSettings;

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.addExpandedClassToInput();
    this.changeClearButtonDisplay();
    this.bindEventListeners();
    this.refreshInput();
  }

  getHtmlElements() {
    this.dropdownWrapper = this.container.querySelector('.js-dropdown');
    this.input = this.dropdownWrapper.querySelector('.js-dropdown-input__field');
    this.dropdown = this.dropdownWrapper.querySelector('.js-dropdown__control');
    this.plusButtons = [...this.dropdownWrapper.querySelectorAll('.js-dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'plus',
    );
    this.minusButtons = [...this.dropdownWrapper.querySelectorAll('.js-dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'minus',
    );
    this.outputs = [...this.dropdownWrapper.querySelectorAll('.js-dropdown__output')];
    this.clearButton = this.dropdownWrapper.querySelector('.js-dropdown__clear-button');
    this.submitButton = this.dropdownWrapper.querySelector('.js-dropdown__submit-button');
  }

  addExpandedClassToInput() {
    if (!this.dropdown.hasAttribute('hidden')) this.input.classList.add('dropdown-input__field_expanded');
  }

  changeClearButtonDisplay() {
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

  changeDropdownDisplay() {
    this.dropdown.toggleAttribute('hidden');
    this.input.classList.toggle('dropdown-input__field_expanded');
  }

  defineWordEnd(value, template, line) {
    function checkIsZero(num) {
      return num % 10 === 0;
    }

    const isComplianceFromOneToFour = checkIsZero(value - 2)
      || checkIsZero(value - 3)
      || checkIsZero(value - 4);

    const isMinimumValue = value === 1 || checkIsZero(value - 1);
    const isInMiddleRange = value > 4 && value < 21;

    const getWordEndIndex = () => {
      switch (true) {
        case isInMiddleRange:
          return 3;
        case isMinimumValue:
          return 1;
        case isComplianceFromOneToFour:
          return 2;
        default:
          return 3;
      }
    };

    const wordEndIndex = getWordEndIndex();

    if (this.dataSettings.outputType === 'sum') {
      return this.templates[template].templates[wordEndIndex];
    }

    return this.templates[template].templates[line][wordEndIndex];
  }

  setDefault() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.templates[this.dataSettings.dataType.name].default;
    if (outputValue === 0) this.input.value = template;
  }

  static addCommas(output) {
    const stringOutput = String(output);
    return stringOutput.replace(/,/g, ', ');
  }

  prepareSumOutput() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.dataSettings.dataType.name;
    return outputValue > 0
      ? `${outputValue} ${this.templates[template].templates[0]}${this.defineWordEnd(outputValue, template)}`
      : `${this.templates[template].default}`;
  }

  calculateTwoByOne(setting) {
    const { values, template } = setting;
    const outputParts = [];

    this.outputs.forEach((value, index) => {
      const combineNumberAndName = () => {
        if (index === 0) {
          const valueText = Number(value.textContent) + Number(values[1]);
          return `${valueText} ${this.templates[template].templates[index][0]}${this.defineWordEnd(
            valueText,
            template,
            index,
          )}`;
        }
        if (index === 2) {
          return `${value.textContent} ${this.templates[template].templates[1][0]}${this.defineWordEnd(
            Number(value.textContent),
            template,
            1,
          )}`;
        }
        return '';
      };

      const areFirstDefinitionNeeded = index === 0 && Number(values[0]) + Number(values[1]) > 0;
      const areLastDefinitionNeeded = index === 2 && Number(value.textContent) > 0;
      const isDefinitionNeeded = areFirstDefinitionNeeded || areLastDefinitionNeeded;

      return isDefinitionNeeded ? outputParts.push(combineNumberAndName()) : '';
    });

    return Dropdown.addCommas(outputParts);
  }

  prepareTwoByOneOutput() {
    const valuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.dataSettings.dataType.name;

    return valuesSum > 0
      ? this.calculateTwoByOne({ valuesSum, values, template })
      : `${this.templates[template].default}`;
  }

  calculateOneByOne(settings) {
    const { template } = settings;
    const outputParts = [];

    this.outputs.forEach((value, index) => {
      const combineNumberAndName = () => {
        const valueText = value.innerText;
        return (
          `${valueText} ${this.templates[template].templates[index][0]}${this.defineWordEnd(
            Number(valueText),
            template,
            index,
          )}`
        );
      };

      const isValueNotZero = value.textContent > 0;

      if (isValueNotZero) outputParts.push(combineNumberAndName());
    });

    return Dropdown.addCommas(outputParts);
  }

  prepareOneByOneOutput() {
    const valuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.dataSettings.dataType.name;

    return valuesSum > 0
      ? this.calculateOneByOne({ valuesSum, values, template })
      : `${this.templates[template].default}`;
  }

  refreshInput() {
    const template = this.dataSettings.outputType;

    const getOutput = () => {
      switch (template) {
        case 'oneByOne':
          return this.prepareOneByOneOutput();
        case 'twoByOne':
          return this.prepareTwoByOneOutput();
        default:
          return this.prepareSumOutput();
      }
    };

    this.input.value = getOutput();
  }

  handlePlusButtonClick(event) {
    const buttonIndex = this.plusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];

    const refreshListLineValues = () => {
      if (outputTarget.innerText === '0') this.minusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) + 1;
      if (outputTarget.innerText === '10') event.target.classList.add('dropdown__button_transparent');
    };

    if (outputTarget.innerText < 10) refreshListLineValues();

    this.changeClearButtonDisplay();
    this.refreshInput();
  }

  handleMinusButtonClick(event) {
    const buttonIndex = this.minusButtons.indexOf(event.target);
    const outputTarget = this.outputs[buttonIndex];

    const refreshListLineValues = () => {
      if (outputTarget.innerText === '10') this.plusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
      outputTarget.innerText = Number(outputTarget.innerText) - 1;
      if (outputTarget.innerText === '0') event.target.classList.add('dropdown__button_transparent');
    };

    if (outputTarget.innerText > 0) refreshListLineValues();

    this.changeClearButtonDisplay();
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
    this.changeClearButtonDisplay();
  }

  handleInputClick() {
    this.changeDropdownDisplay();
  }

  handleSubmitButtonClick() {
    this.changeDropdownDisplay();
  }

  handleDocumentClick(event) {
    const isInDropdownArea = Boolean(event.composedPath().find(
      (clickTargetParent) => clickTargetParent === this.dropdownWrapper,
    ));
    const isNeedToHide = isInDropdownArea === false && !this.dropdown.hasAttribute('hidden');
    if (isNeedToHide) this.changeDropdownDisplay();
  }

  bindEventListeners() {
    this.input.addEventListener('click', this.handleInputClick);
    this.clearButton.addEventListener('click', this.handleClearButtonClick);
    this.submitButton.addEventListener('click', this.handleSubmitButtonClick);
    this.plusButtons.forEach((plusButton) => plusButton.addEventListener('click', this.handlePlusButtonClick));
    this.minusButtons.forEach((minusButton) => minusButton.addEventListener('click', this.handleMinusButtonClick));
    document.addEventListener('click', this.handleDocumentClick);
  }
}

export { Dropdown };
