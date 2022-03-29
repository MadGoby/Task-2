class ContentNavigation {
  constructor(target) {
    this.containerClass = target;

    autoBind(this);
    this.initializes();
  }

  initializes() {
    this.getHtmlElements();
    this.buttons.forEach((button) => this.bindEventListeners(button));
    this.controlNavigationDisplay();
  }

  getHtmlElements() {
    this.container = document.querySelector(`.${this.containerClass}`);
    this.buttons = [...this.container.querySelectorAll('.js-content-navigation__button')];
    this.counter = this.container.querySelector('.js-content-navigation__counter');
    this.buttons.forEach((button) => {
      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;
    });
  }

  controlNavigationDisplay() {
    this.buttons.forEach((elem) => {
      elem.style.display = 'inline-block';
    });

    const hidesNavigationButtons = (buttonIndex) => {
      buttonIndex.forEach((index) => {
        this.buttons[index].style.display = 'none';
      });
    };

    const currentPageNumber = this.currentButton.textContent;

    switch (currentPageNumber) {
      case '1':
        hidesNavigationButtons([0, 2, 5]);
        break;
      case '2':
        hidesNavigationButtons([5, 2]);
        break;
      case '3':
        hidesNavigationButtons([2]);
        break;
      case '13':
        hidesNavigationButtons([6]);
        break;
      case '14':
        hidesNavigationButtons([6, 3]);
        break;
      case '15':
        hidesNavigationButtons([6, 8, 3]);
        break;
      default:
        break;
    }
  }

  editsCounterValues() {
    const counterTo = this.currentButton.textContent * 12;
    this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;
  }

  static controlCurrentPageClass(selectedButton) {
    selectedButton.classList.toggle('content-navigation__button_color_purple');
  }

  controlButtonsNumbers(index, targetNumber, parent) {
    const checkIsNegativeShiftNeeded = () => index === 5 && targetNumber <= 13;
    const checkIsPositiveShiftNeeded = () => index === 3 && targetNumber >= 3;

    switch (true) {
      case checkIsNegativeShiftNeeded():
        ContentNavigation.controlCurrentPageClass(this.buttons[index - 1]);
        this.currentButton = this.buttons[index - 1];
        this.buttons[index - 1].textContent = targetNumber;
        this.buttons[index - 2].textContent = String(targetNumber - 1);
        this.buttons[index].textContent = targetNumber + 1;
        break;
      case checkIsPositiveShiftNeeded():
        ContentNavigation.controlCurrentPageClass(this.buttons[index + 1]);
        this.currentButton = this.buttons[index + 1];
        this.buttons[index + 1].textContent = targetNumber;
        this.buttons[index + 2].textContent = targetNumber + 1;
        this.buttons[index].textContent = String(targetNumber - 1);
        break;
      case index === 7:
        ContentNavigation.controlCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index - 2].textContent = String(targetNumber - 1);
        this.buttons[index - 3].textContent = String(targetNumber - 2);
        this.buttons[index - 4].textContent = String(targetNumber - 3);
        break;
      case index === 1:
        ContentNavigation.controlCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index + 2].textContent = targetNumber + 1;
        this.buttons[index + 3].textContent = targetNumber + 2;
        this.buttons[index + 4].textContent = targetNumber + 3;
        break;
      default:
        ContentNavigation.controlCurrentPageClass(this.buttons[index]);
        this.currentButton = parent;
        break;
    }
  }

  prepareDataAfterPrevious() {
    const currentButtonText = Number(this.currentButton.textContent);
    const targetNumber = currentButtonText - 1;
    let index;

    switch (true) {
      case currentButtonText === 15:
        index = 5;
        break;
      case currentButtonText >= 3:
        index = 3;
        break;
      case currentButtonText === 2:
        index = 1;
        break;
      default:
        break;
    }

    return { index, targetNumber };
  }

  prepareDataAfterNext() {
    const currentButtonText = Number(this.currentButton.textContent);
    const targetNumber = currentButtonText + 1;
    let index;

    switch (true) {
      case currentButtonText === 1:
        index = 3;
        break;
      case currentButtonText <= 13:
        index = 5;
        break;
      case currentButtonText === 14:
        index = 7;
        break;
      default:
        break;
    }

    return { index, targetNumber };
  }

  handleButtonClick(event) {
    let { target } = event;
    if (target.classList.contains('content-navigation__button_decorative')) return;

    ContentNavigation.controlCurrentPageClass(this.currentButton);

    let targetButtonData = {
      index: this.buttons.indexOf(target),
      targetNumber: Number(event.target.textContent),
    };

    if (target.classList.contains('content-navigation__button_purpose_previous')) {
      targetButtonData = this.prepareDataAfterPrevious();
      target = this.buttons[targetButtonData.index];
    } else if (target.classList.contains('content-navigation__button_purpose_next')) {
      targetButtonData = this.prepareDataAfterNext();
      target = this.buttons[targetButtonData.index];
    }

    this.controlButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, target);
    this.controlNavigationDisplay();
    this.editsCounterValues();
  }

  bindEventListeners(button) {
    button.addEventListener('click', this.handleButtonClick);
  }
}

export { ContentNavigation };
