export default function contentNavigation(settings) {
  const { navigationClass } = settings;

  function initializeElements() {
    const navigation = document.querySelector(navigationClass);
    const navigationButtons = [...navigation.querySelectorAll('.content-navigation__button')];
    const counter = navigation.querySelector('.content-navigation__counter');
    let currentButton;

    navigationButtons.forEach((navigationButton) => {
      if (navigationButton.classList.contains('content-navigation__button_active')) {
        currentButton = navigationButton;
      }
    });

    return {
      navigation,
      navigationButtons,
      currentButton,
      counter,
    };
  }

  let { currentButton } = initializeElements();
  const { navigationButtons, counter } = initializeElements();

  function getButtonFromWrapper(element) {
    return element.querySelector('.button__control');
  }

  function navigationDisplayControl() {
    const currentPageNumber = getButtonFromWrapper(currentButton).textContent;

    navigationButtons.forEach((elem) => {
      const button = elem;
      button.style.display = 'inline-block';
    });

    if (currentPageNumber === '1') {
      navigationButtons[0].style.display = 'none';
      navigationButtons[2].style.display = 'none';
      navigationButtons[5].style.display = 'none';
    } else if (currentPageNumber === '2') {
      navigationButtons[5].style.display = 'none';
      navigationButtons[2].style.display = 'none';
    } else if (currentPageNumber === '3') {
      navigationButtons[2].style.display = 'none';
    } else if (currentPageNumber === '13') {
      navigationButtons[6].style.display = 'none';
    } else if (currentPageNumber === '14') {
      navigationButtons[6].style.display = 'none';
      navigationButtons[3].style.display = 'none';
    } else if (currentPageNumber === '15') {
      navigationButtons[6].style.display = 'none';
      navigationButtons[8].style.display = 'none';
      navigationButtons[3].style.display = 'none';
    }
  }

  function navigationButtonClick(event) {
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
        controlCurrentPageСlass(navigationButtons[index - 1]);
        currentButton = navigationButtons[index - 1];
        getButtonFromWrapper(navigationButtons[index - 1]).textContent = targetNumber;
        getButtonFromWrapper(navigationButtons[index - 2]).textContent = targetNumber - 1;
        getButtonFromWrapper(navigationButtons[index]).textContent = targetNumber + 1;
      } else if (index === 3 && targetNumber >= 3) {
        controlCurrentPageСlass(navigationButtons[index + 1]);
        currentButton = navigationButtons[index + 1];
        getButtonFromWrapper(navigationButtons[index + 1]).textContent = targetNumber;
        getButtonFromWrapper(navigationButtons[index + 2]).textContent = targetNumber + 1;
        getButtonFromWrapper(navigationButtons[index]).textContent = targetNumber - 1;
      } else if (index === 7) {
        controlCurrentPageСlass(parent);
        currentButton = parent;
        getButtonFromWrapper(navigationButtons[index - 2]).textContent = targetNumber - 1;
        getButtonFromWrapper(navigationButtons[index - 3]).textContent = targetNumber - 2;
        getButtonFromWrapper(navigationButtons[index - 4]).textContent = targetNumber - 3;
      } else if (index === 1) {
        controlCurrentPageСlass(parent);
        currentButton = parent;
        getButtonFromWrapper(navigationButtons[index + 2]).textContent = targetNumber + 1;
        getButtonFromWrapper(navigationButtons[index + 3]).textContent = targetNumber + 2;
        getButtonFromWrapper(navigationButtons[index + 4]).textContent = targetNumber + 3;
      } else {
        controlCurrentPageСlass(navigationButtons[index]);
        currentButton = parent;
      }
    }

    function multiplierEditor() {
      const counterTo = getButtonFromWrapper(currentButton).textContent * 12;
      counter.textContent = `${counterTo - 11} – ${counterTo} из 100+ вариантов аренды`;
    }

    if (!parent.classList.contains('content-navigation__decorative-button')) {
      controlCurrentPageСlass(currentButton);

      let index = navigationButtons.indexOf(parent);
      let targetNumber = Number(event.target.textContent);

      if (parent.classList.contains('content-navigation__button_purpose_previous')) {
        if (Number(getButtonFromWrapper(currentButton).textContent) === 15) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          index = 5;
          parent = navigationButtons[index];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) >= 4) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          index = 3;
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 3) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          index = 3;
          parent = navigationButtons[index];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 2) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          index = 1;
          parent = navigationButtons[index];
        }
      } else if (parent.classList.contains('content-navigation__button_purpose_next')) {
        if (Number(getButtonFromWrapper(currentButton).textContent) === 1) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          index = 3;
          parent = navigationButtons[index];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) <= 12) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          index = 5;
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 13) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          index = 5;
          parent = navigationButtons[index];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 14) {
          targetNumber = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          index = 7;
          parent = navigationButtons[index];
        }
      }

      controlButtonsNumbers(index, targetNumber);
      navigationDisplayControl();
      multiplierEditor();
    }
  }

  function bindEventListeners() {
    navigationButtons.forEach((navigationButton) => {
      navigationButton.addEventListener('click', navigationButtonClick);
    });
  }

  bindEventListeners();
  navigationDisplayControl();
}