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

  defineWordEnd(settings) {
    const { outputValue, outputTemplate, line } = settings;

    function checkIsZero(num) {
      return num % 10 === 0;
    }

    const isComplianceFromOneToFour = checkIsZero(outputValue - 2)
      || checkIsZero(outputValue - 3)
      || checkIsZero(outputValue - 4);

    const isMinimumValue = outputValue === 1 || checkIsZero(outputValue - 1);
    const isInMiddleRange = outputValue > 4 && outputValue < 21;

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
      return this.templates[outputTemplate].templates[wordEndIndex];
    }

    return this.templates[outputTemplate].templates[line][wordEndIndex];
  }

  setDefault() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const outputTemplate = this.templates[this.dataSettings.dataType.name].default;
    if (outputValue === 0) this.input.value = outputTemplate;
  }

  static addCommas(output) {
    const stringOutput = String(output);
    return stringOutput.replace(/,/g, ', ');
  }

  prepareSumOutput() {
    const outputValue = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const outputTemplate = this.dataSettings.dataType.name;
    return outputValue > 0
      ? `${outputValue} ${this.templates[outputTemplate].templates[0]}${this.defineWordEnd({ outputValue, outputTemplate })}`
      : `${this.templates[outputTemplate].default}`;
  }

  calculateTwoByOne(setting) {
    const { outputValues, outputTemplate } = setting;
    const outputParts = [];

    this.outputs.forEach((outputValue, index) => {
      const combineNumberAndName = () => {
        if (index === 0) {
          const outputValueText = Number(outputValue.textContent) + Number(outputValues[1]);
          return `${outputValueText} ${this.templates[outputTemplate].templates[index][0]}${this.defineWordEnd({
            outputValue: outputValueText,
            outputTemplate,
            line: index,
          })}`;
        }
        if (index === 2) {
          return `${outputValue.textContent} ${this.templates[outputTemplate].templates[1][0]}${this.defineWordEnd({
            outputValue: Number(outputValue.textContent),
            outputTemplate,
            line: 1,
          })}`;
        }
        return '';
      };

      const isFirstDefinitionNeeded = index === 0
        && Number(outputValues[0]) + Number(outputValues[1]) > 0;
      const isLastDefinitionNeeded = index === 2 && Number(outputValue.textContent) > 0;
      const isDefinitionNeeded = isFirstDefinitionNeeded || isLastDefinitionNeeded;

      return isDefinitionNeeded ? outputParts.push(combineNumberAndName()) : '';
    });

    return Dropdown.addCommas(outputParts);
  }

  prepareTwoByOneOutput() {
    const outputValuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const outputValues = this.outputs.map((outputValue) => outputValue.textContent);
    const outputTemplate = this.dataSettings.dataType.name;

    return outputValuesSum > 0
      ? this.calculateTwoByOne({ outputValuesSum, outputValues, outputTemplate })
      : `${this.templates[outputTemplate].default}`;
  }

  calculateOneByOne(settings) {
    const { outputTemplate } = settings;
    const outputParts = [];

    this.outputs.forEach((outputValue, index) => {
      const combineNumberAndName = () => {
        const outputValueText = outputValue.innerText;
        return (
          `${outputValueText} ${this.templates[outputTemplate].templates[index][0]}${this.defineWordEnd({
            outputValue: Number(outputValueText),
            outputTemplate,
            line: index,
          })}`
        );
      };

      const isValueNotZero = outputValue.textContent > 0;

      if (isValueNotZero) outputParts.push(combineNumberAndName());
    });

    return Dropdown.addCommas(outputParts);
  }

  prepareOneByOneOutput() {
    const outputValuesSum = Number(this.outputs[0].textContent)
      + Number(this.outputs[1].textContent) + Number(this.outputs[2].textContent);
    const outputValues = this.outputs.map((outputValue) => outputValue.textContent);
    const outputTemplate = this.dataSettings.dataType.name;

    return outputValuesSum > 0
      ? this.calculateOneByOne({ outputValuesSum, outputValues, outputTemplate })
      : `${this.templates[outputTemplate].default}`;
  }

  refreshInput() {
    const outputTemplate = this.dataSettings.outputType;

    const getOutput = () => {
      switch (outputTemplate) {
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
      (targetParent) => targetParent === this.dropdownWrapper,
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
