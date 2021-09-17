class ContentNavigation {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initializes();
  }

  initializes() {
    this.getHtmlElements();
    this.bindEventListeners();
    this.controlNavigationDisplay();
  }

  getHtmlElements() {
    this.buttons = [...this.container.querySelectorAll('.content-navigation__button')];
    this.counter = this.container.querySelector('.content-navigation__counter');
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

    const currentPageNumber = this.currentButton.querySelector('.button__control').textContent;

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
    const counterTo = this.currentButton.querySelector('.button__control').textContent * 12;
    this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;
  };

  // eslint-disable-next-line class-methods-use-this
  controlCurrentPageClass(selectedButton) {
    const currentButton = selectedButton.querySelector('.button__control');
    currentButton.classList.toggle('button__control_color_purple');
  }

  controlButtonsNumbers(index, targetNumber, parent) {
    switch (true) {
      case index === 5 && targetNumber <= 13:
        this.controlCurrentPageClass(this.buttons[index - 1]);
        this.currentButton = this.buttons[index - 1];
        this.buttons[index - 1].querySelector('.button__control').textContent = targetNumber;
        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);
        this.buttons[index].querySelector('.button__control').textContent = targetNumber + 1;
        break;
      case index === 3 && targetNumber >= 3:
        this.controlCurrentPageClass(this.buttons[index + 1]);
        this.currentButton = this.buttons[index + 1];
        this.buttons[index + 1].querySelector('.button__control').textContent = targetNumber;
        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;
        this.buttons[index].querySelector('.button__control').textContent = String(targetNumber - 1);
        break;
      case index === 7:
        this.controlCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index - 2].querySelector('.button__control').textContent = String(targetNumber - 1);
        this.buttons[index - 3].querySelector('.button__control').textContent = String(targetNumber - 2);
        this.buttons[index - 4].querySelector('.button__control').textContent = String(targetNumber - 3);
        break;
      case index === 1:
        this.controlCurrentPageClass(parent);
        this.currentButton = parent;
        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;
        this.buttons[index + 3].querySelector('.button__control').textContent = targetNumber + 2;
        this.buttons[index + 4].querySelector('.button__control').textContent = targetNumber + 3;
        break;
      default:
        this.controlCurrentPageClass(this.buttons[index]);
        this.currentButton = parent;
        break;
    }
  };

  controlPreviousButtonClick() {
    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);
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
  };

  controlNextButtonClick() {
    const currentButtonText = Number(this.currentButton.querySelector('.button__control').textContent);
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
  };

  controlNavigationButtonClick(event) {
    let parent = false;

    function getParent(button) {
      if (button.parentNode.classList.contains('content-navigation__button')) {
        parent = button.parentNode;
      } else {
        getParent(button.parentNode);
      }
    }

    getParent(event.target);
    if (parent.classList.contains('content-navigation__button_decorative')) return;
    this.controlCurrentPageClass(this.currentButton);

    let targetButtonData = {
      index: this.buttons.indexOf(parent),
      targetNumber: Number(event.target.textContent),
    };

    if (parent.classList.contains('content-navigation__button_purpose_previous')) {
      targetButtonData = this.controlPreviousButtonClick();
      parent = this.buttons[targetButtonData.index];
    } else if (parent.classList.contains('content-navigation__button_purpose_next')) {
      targetButtonData = this.controlNextButtonClick();
      parent = this.buttons[targetButtonData.index];
    }

    this.controlButtonsNumbers(targetButtonData.index, targetButtonData.targetNumber, parent);
    this.controlNavigationDisplay();
    this.editsCounterValues();
  }

  bindEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.controlNavigationButtonClick);
    });
  };
}

export { ContentNavigation };
