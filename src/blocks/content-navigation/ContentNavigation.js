class ContentNavigation {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.buttons.forEach((button) => this.bindHandleButtonClick(button));
    this.changeButtonsDisplay();
  }

  getHtmlElements() {
    this.buttons = [...this.container.querySelectorAll('.js-content-navigation__button')];
    this.counter = this.container.querySelector('.js-content-navigation__counter');
    this.buttons.forEach((button) => {
      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;
    });
  }

  changeButtonsDisplay() {
    this.buttons.forEach((elem) => {
      elem.style.display = 'inline-block';
    });

    const hideButtons = (buttonIndex) => {
      buttonIndex.forEach((index) => {
        this.buttons[index].style.display = 'none';
      });
    };

    const currentPageNumber = this.currentButton.textContent;

    switch (currentPageNumber) {
      case '1':
        hideButtons([0, 2, 5]);
        break;
      case '2':
        hideButtons([5, 2]);
        break;
      case '3':
        hideButtons([2]);
        break;
      case '13':
        hideButtons([6]);
        break;
      case '14':
        hideButtons([6, 3]);
        break;
      case '15':
        hideButtons([6, 8, 3]);
        break;
      default:
        break;
    }
  }

  updateCounterValues() {
    const contentCounter = this.currentButton.textContent * 12;
    this.counter.textContent = `${contentCounter - 11} – ${contentCounter} из 100+ вариантов аренды`;
  }

  static changeCurrentPageClass(selectedButton) {
    selectedButton.classList.toggle('content-navigation__button_color_purple');
  }

  updateButtonsNumbers(index, targetNumber, parent) {
    const isNegativeShiftNeeded = index === 5 && targetNumber <= 13;
    const isPositiveShiftNeeded = index === 3 && targetNumber >= 3;

    switch (true) {
      case isNegativeShiftNeeded:
        ContentNavigation.changeCurrentPageClass(this.buttons[index - 1]);
        this.currentButton = this.buttons[index - 1];
        this.buttons[index - 1].textContent = targetNumber;
        this.buttons[index - 2].textContent = String(targetNumber - 1);
        this.buttons[index].textContent = targetNumber + 1;
        break;
      case isPositiveShiftNeeded:
        ContentNavigation.changeCurrentPageClass(this.buttons[index + 1]);
        this.currentButton = this.buttons[index + 1];
        this.buttons[index + 1].textContent = targetNumber;
        this.buttons[index + 2].textContent = targetNumber + 1;
        this.buttons[index].textContent = String(targetNumber - 1);
        break;
      case index === 7:
        ContentNavigation.changeCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index - 2].textContent = String(targetNumber - 1);
        this.buttons[index - 3].textContent = String(targetNumber - 2);
        this.buttons[index - 4].textContent = String(targetNumber - 3);
        break;
      case index === 1:
        ContentNavigation.changeCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index + 2].textContent = targetNumber + 1;
        this.buttons[index + 3].textContent = targetNumber + 2;
        this.buttons[index + 4].textContent = targetNumber + 3;
        break;
      default:
        ContentNavigation.changeCurrentPageClass(this.buttons[index]);
        this.currentButton = parent;
        break;
    }
  }

  definePreviousButtonIndex() {
    const currentButtonText = Number(this.currentButton.textContent);
    const targetNumber = currentButtonText - 1;
    const getPreviousButtonIndex = () => {
      switch (true) {
        case currentButtonText === 15:
          return 5;
        case currentButtonText >= 3:
          return 3;
        case currentButtonText === 2:
          return 1;
        default:
          return 0;
      }
    };

    return { index: getPreviousButtonIndex(), targetNumber };
  }

  defineNextButtonIndex() {
    const currentButtonText = Number(this.currentButton.textContent);
    const targetNumber = currentButtonText + 1;
    const getNextButtonIndex = () => {
      switch (true) {
        case currentButtonText === 1:
          return 3;
        case currentButtonText <= 13:
          return 5;
        case currentButtonText === 14:
          return 7;
        default:
          return 0;
      }
    };

    return { index: getNextButtonIndex(), targetNumber };
  }

  handleButtonClick(event) {
    const { target: eventTarget } = event;
    if (eventTarget.classList.contains('content-navigation__button_decorative')) return;
    ContentNavigation.changeCurrentPageClass(this.currentButton);

    const getTargetButton = () => {
      if (eventTarget.classList.contains('content-navigation__button_purpose_previous')) {
        const targetButtonData = this.definePreviousButtonIndex();
        return {
          targetButtonData,
          targetButton: this.buttons[targetButtonData.index],
        };
      }
      if (eventTarget.classList.contains('content-navigation__button_purpose_next')) {
        const targetButtonData = this.defineNextButtonIndex();
        return {
          targetButtonData,
          targetButton: this.buttons[targetButtonData.index],
        };
      }
      return {};
    };

    const {
      targetButton = eventTarget,
      targetButtonData = {
        index: this.buttons.indexOf(eventTarget),
        targetNumber: Number(event.target.textContent),
      },
    } = getTargetButton();

    this.updateButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, targetButton);
    this.changeButtonsDisplay();
    this.updateCounterValues();
  }

  bindHandleButtonClick(button) {
    button.addEventListener('click', this.handleButtonClick);
  }
}

export { ContentNavigation };
