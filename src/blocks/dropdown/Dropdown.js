import { dropdownData } from '@blocks/dropdown/dropdownData';

class Dropdown {
  constructor(settings) {
    this.containerClass = settings.target;
    this.templates = dropdownData;
    if (settings.dataSettings.dataType.customValue) {
      this.templates.custom = settings.dataSettings.dataType.customValue;
    }
    this.dataSettings = settings.dataSettings;

    autoBind(this);
    this.initializes();
  }

  initializes() {
    this.getHtmlElements();
    this.addInputExpandedClass();
    this.checkClearButtonVisibility();
    this.bindEventListeners();
    this.refreshInput();
    if (!this.dropdown.hasAttribute('hidden')) this.bindDomEventListener();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.dropdownWrapper = this.container.querySelector('.js-dropdown');
    this.input = this.dropdownWrapper.querySelector('.js-input__field');
    this.dropdown = this.dropdownWrapper.querySelector('.js-dropdown__control');
    this.plusButtons = [...this.dropdownWrapper.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'plus',
    );
    this.minusButtons = [...this.dropdownWrapper.querySelectorAll('.dropdown__button')].filter(
      (button) => button.getAttribute('data-action') === 'minus',
    );
    this.outputs = [...this.dropdownWrapper.querySelectorAll('.dropdown__output')];
    this.clearButton = this.dropdownWrapper.querySelector('.dropdown__clear-button');
    this.submitButton = this.dropdownWrapper.querySelector('.dropdown__submit-button');
  }

  addInputExpandedClass() {
    if (!this.dropdown.hasAttribute('hidden')) this.input.classList.add('input__field_expanded');
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

    if (this.dropdown.hasAttribute('hidden')) {
      this.removeDomEventListener();
    } else {
      this.bindDomEventListener();
    }
  }

  definesWordEnd(value, template, line) {
    function checkIsEqualToZero(num) {
      return num % 10 === 0;
    }

    function checksComplianceFromOneToFour() {
      return checkIsEqualToZero(value - 2)
        || checkIsEqualToZero(value - 3)
        || checkIsEqualToZero(value - 4);
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

    if (this.dataSettings.outputType === 'sum') {
      return this.templates[template].templates[index];
    }

    return this.templates[template].templates[line][index];
  }

  setDefault() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.templates[this.dataSettings.dataType.name].default;
    if (outputValue === 0) this.input.value = template;
  }

  prepareOutputSum() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const template = this.dataSettings.dataType.name;
    let output;
    if (outputValue > 0) {
      output = `${outputValue} ${this.templates[template].templates[0]}${this.definesWordEnd(outputValue, template)}`;
    } else {
      output = `${this.templates[template].default}`;
    }
    return output;
  }

  calculateTwoByOne(setting) {
    const { valuesSum, values, template } = setting;
    let output = '';

    this.outputs.forEach((value, index) => {
      const isNeedComma = index === 0 && valuesSum - values[0] - values[1] !== 0;
      const addPunctuationMarks = () => {
        if (isNeedComma) output += ', ';
      };

      const addDefinitionToNumber = () => {
        if (index === 0) {
          const valueText = Number(value.textContent) + Number(values[1]);
          output += `${valueText} ${this.templates[template].templates[index][0]}${this.definesWordEnd(
            valueText,
            template,
            index,
          )}`;
          addPunctuationMarks(valueText);
        } else if (index === 2) {
          output += `${value.textContent} ${this.templates[template].templates[1][0]}${this.definesWordEnd(
            Number(value.textContent),
            template,
            1,
          )}`;
        }
      };

      const areFirstDefinitionNeeded = index === 0 && Number(values[0]) + Number(values[1]) > 0;
      const areLastDefinitionNeeded = index === 2 && Number(value.textContent) > 0;

      if (areFirstDefinitionNeeded) addDefinitionToNumber();
      if (areLastDefinitionNeeded) addDefinitionToNumber();
    });
    return output;
  }

  prepareTwoByOne() {
    const valuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.dataSettings.dataType.name;
    let output;

    if (valuesSum > 0) {
      output = this.calculateTwoByOne({ valuesSum, values, template });
    } else {
      output = `${this.templates[`${template}Default`]}`;
    }

    return output;
  }

  calculateOneByOne(settings) {
    const { values, template } = settings;
    let output = '';

    this.outputs.forEach((value, index) => {
      const isFirstNotOnlyOne = index === 0 && (Number(values[1]) !== 0 || Number(values[2]) !== 0);
      const isSecondNotOnlyOne = index === 1 && (Number(values[2]) !== 0);
      const isNeedComma = isFirstNotOnlyOne || isSecondNotOnlyOne;

      const addPunctuationMarks = () => {
        if (isNeedComma) output += ', ';
      };

      const addDefinitionToNumber = () => {
        const valueText = value.innerText;
        output += `${valueText} ${this.templates[template].templates[index][0]}${this.definesWordEnd(
          Number(valueText),
          template,
          index,
        )}`;
        addPunctuationMarks();
      };

      const isValueNotZero = value.textContent > 0;

      if (isValueNotZero) addDefinitionToNumber();
    });
    return output;
  }

  prepareOneByOne() {
    const valuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const values = this.outputs.map((value) => value.textContent);
    const template = this.dataSettings.dataType.name;
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
    const template = this.dataSettings.outputType;

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
      if (outputTarget.innerText === '0') this.minusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
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
      if (outputTarget.innerText === '10') this.plusButtons[buttonIndex].classList.remove('dropdown__button_transparent');
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

  handelDOMClick(event) {
    const result = Boolean(event.path.find((element) => element === this.dropdownWrapper));
    if (result === false) this.controlDropdownDisplay();
  }

  bindDomEventListener() {
    document.addEventListener('click', this.handelDOMClick);
  }

  removeDomEventListener() {
    document.removeEventListener('click', this.handelDOMClick);
  }

  bindEventListeners() {
    this.input.addEventListener('click', this.handleInputClick);
    this.clearButton.addEventListener('click', this.handleClearButtonClick);
    this.submitButton.addEventListener('click', this.handleSubmitButtonClick);
    this.plusButtons.forEach((plusButton) => plusButton.addEventListener('click', this.handlePlusButtonClick));
    this.minusButtons.forEach((minusButton) => minusButton.addEventListener('click', this.handleMinusButtonClick));
  }
}

export { Dropdown };
