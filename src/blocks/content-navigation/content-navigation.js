class ContentNavigation {
  constructor(target) {
    this.container = target;

    this.getHtmlElements();
    this.bindObjectLink();
    this.bindEventListeners();
    this.navigationDisplayControl();
  }

  getHtmlElements() {
    this.buttons = [...this.container.querySelectorAll('.content-navigation__button')];
    this.counter = this.container.querySelector('.content-navigation__counter');
    this.buttons.forEach((button) => {
      if (button.classList.contains('content-navigation__button_active')) this.currentButton = button;
    });
  }

  navigationDisplayControl() {
    const currentPageNumber = this.currentButton.querySelector('.button__control').textContent;

    this.buttons.forEach((elem) => {
      const button = elem;
      button.style.display = 'inline-block';
    });

    if (currentPageNumber === '1') {
      this.buttons[0].style.display = 'none';
      this.buttons[2].style.display = 'none';
      this.buttons[5].style.display = 'none';
    } else if (currentPageNumber === '2') {
      this.buttons[5].style.display = 'none';
      this.buttons[2].style.display = 'none';
    } else if (currentPageNumber === '3') {
      this.buttons[2].style.display = 'none';
    } else if (currentPageNumber === '13') {
      this.buttons[6].style.display = 'none';
    } else if (currentPageNumber === '14') {
      this.buttons[6].style.display = 'none';
      this.buttons[3].style.display = 'none';
    } else if (currentPageNumber === '15') {
      this.buttons[6].style.display = 'none';
      this.buttons[8].style.display = 'none';
      this.buttons[3].style.display = 'none';
    }
  }

  clickedNavigationButton(event) {
    let parent;

    function getParent(button) {
      if (button.parentNode.classList.contains('content-navigation__button')) {
        parent = button.parentNode;
      } else {
        getParent(button.parentNode);
      }
    }

    getParent(event.target);

    function controlCurrentPageСlass(selectedButton) {
      selectedButton.querySelector('.button__control').classList.toggle('button__control_color_purple');
    }

    function controlButtonsNumbers(index, targetNumber) {
      if (index === 5 && targetNumber <= 13) {
        controlCurrentPageСlass(this.buttons[index - 1]);
        this.currentButton = this.buttons[index - 1];
        this.buttons[index - 1].querySelector('.button__control').textContent = targetNumber;
        this.buttons[index - 2].querySelector('.button__control').textContent = targetNumber - 1;
        this.buttons[index].querySelector('.button__control').textContent = targetNumber + 1;
      } else if (index === 3 && targetNumber >= 3) {
        controlCurrentPageСlass(this.buttons[index + 1]);
        this.currentButton = this.buttons[index + 1];
        this.buttons[index + 1].querySelector('.button__control').textContent = targetNumber;
        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;
        this.buttons[index].querySelector('.button__control').textContent = targetNumber - 1;
      } else if (index === 7) {
        controlCurrentPageСlass(parent);
        this.currentButton = parent;
        this.buttons[index - 2].querySelector('.button__control').textContent = targetNumber - 1;
        this.buttons[index - 3].querySelector('.button__control').textContent = targetNumber - 2;
        this.buttons[index - 4].querySelector('.button__control').textContent = targetNumber - 3;
      } else if (index === 1) {
        controlCurrentPageСlass(parent);
        this.currentButton = parent;
        this.buttons[index + 2].querySelector('.button__control').textContent = targetNumber + 1;
        this.buttons[index + 3].querySelector('.button__control').textContent = targetNumber + 2;
        this.buttons[index + 4].querySelector('.button__control').textContent = targetNumber + 3;
      } else {
        controlCurrentPageСlass(this.buttons[index]);
        this.currentButton = parent;
      }
    }

    function multiplierEditor() {
      const counterTo = this.currentButton.querySelector('.button__control').textContent * 12;
      this.counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;
    }

    if (!parent.classList.contains('content-navigation__decorative-button')) {
      controlCurrentPageСlass(this.currentButton);

      let index = this.buttons.indexOf(parent);
      let targetNumber = Number(event.target.textContent);

      if (parent.classList.contains('content-navigation__button_purpose_previous')) {
        if (Number(this.currentButton.querySelector('.button__control').textContent) === 15) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) - 1;
          index = 5;
          parent = this.buttons[index];
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) >= 4) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) - 1;
          index = 3;
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) === 3) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) - 1;
          index = 3;
          parent = this.buttons[index];
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) === 2) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) - 1;
          index = 1;
          parent = this.buttons[index];
        }
      } else if (parent.classList.contains('content-navigation__button_purpose_next')) {
        if (Number(this.currentButton.querySelector('.button__control').textContent) === 1) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) + 1;
          index = 3;
          parent = this.buttons[index];
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) <= 12) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) + 1;
          index = 5;
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) === 13) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) + 1;
          index = 5;
          parent = this.buttons[index];
        } else if (Number(this.currentButton.querySelector('.button__control').textContent) === 14) {
          targetNumber = Number(this.currentButton.querySelector('.button__control').textContent) + 1;
          index = 7;
          parent = this.buttons[index];
        }
      }

      const bindedControlButtonsNumbers = controlButtonsNumbers.bind(this);
      const bindedMultiplierEditor = multiplierEditor.bind(this);
      bindedControlButtonsNumbers(index, targetNumber);
      this.navigationDisplayControl();
      bindedMultiplierEditor();
    }
  }

  bindObjectLink() {
    this.clickedNavigationButton = this.clickedNavigationButton.bind(this);
  }

  bindEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.clickedNavigationButton);
    });
  }
}

export { ContentNavigation };
