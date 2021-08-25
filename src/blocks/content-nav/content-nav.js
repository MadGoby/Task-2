export default function contentNav(settings) {
  const { navClass } = settings;

  function initializeElements() {
    const nav = document.querySelector(navClass);
    const navButtons = [...nav.querySelectorAll('.content-nav__button')];
    const counter = nav.querySelector('.content-nav__counter');
    let currentButton;

    navButtons.forEach((navButton) => {
      if (navButton.classList.contains('content-nav__button_current')) {
        currentButton = navButton;
      }
    });

    return {
      nav,
      navButtons,
      currentButton,
      counter,
    };
  }

  let { currentButton } = initializeElements();
  const { navButtons, counter } = initializeElements();

  function getButtonFromWrapper(element) {
    return element.querySelector('.button__control');
  }

  function navDisplayControl() {
    const currentPageNum = getButtonFromWrapper(currentButton).textContent;

    navButtons.forEach((elem) => {
      const button = elem;
      button.style.display = 'inline-block';
    });

    if (currentPageNum === '1') {
      navButtons[0].style.display = 'none';
      navButtons[2].style.display = 'none';
      navButtons[5].style.display = 'none';
    } else if (currentPageNum === '2') {
      navButtons[5].style.display = 'none';
      navButtons[2].style.display = 'none';
    } else if (currentPageNum === '3') {
      navButtons[2].style.display = 'none';
    } else if (currentPageNum === '13') {
      navButtons[6].style.display = 'none';
    } else if (currentPageNum === '14') {
      navButtons[6].style.display = 'none';
      navButtons[3].style.display = 'none';
    } else if (currentPageNum === '15') {
      navButtons[6].style.display = 'none';
      navButtons[8].style.display = 'none';
      navButtons[3].style.display = 'none';
    }
  }

  function navButtonClick(event) {
    let parent;

    function getParent(butoon) {
      if (butoon.parentNode.classList.contains('content-nav__button')) {
        parent = butoon.parentNode;
      } else {
        getParent(butoon.parentNode);
      }
    }

    getParent(event.target);

    function controlCurrentPageСlass(selectedButton) {
      selectedButton.querySelector('.button__control').classList.toggle('button__control_pagination_active');
    }

    function controlButtonsNumbers(ind, targetNum) {
      if (ind === 5 && targetNum <= 13) {
        controlCurrentPageСlass(navButtons[ind - 1]);
        currentButton = navButtons[ind - 1];
        getButtonFromWrapper(navButtons[ind - 1]).textContent = targetNum;
        getButtonFromWrapper(navButtons[ind - 2]).textContent = targetNum - 1;
        getButtonFromWrapper(navButtons[ind]).textContent = targetNum + 1;
      } else if (ind === 3 && targetNum >= 3) {
        controlCurrentPageСlass(navButtons[ind + 1]);
        currentButton = navButtons[ind + 1];
        getButtonFromWrapper(navButtons[ind + 1]).textContent = targetNum;
        getButtonFromWrapper(navButtons[ind + 2]).textContent = targetNum + 1;
        getButtonFromWrapper(navButtons[ind]).textContent = targetNum - 1;
      } else if (ind === 7) {
        controlCurrentPageСlass(parent);
        currentButton = parent;
        getButtonFromWrapper(navButtons[ind - 2]).textContent = targetNum - 1;
        getButtonFromWrapper(navButtons[ind - 3]).textContent = targetNum - 2;
        getButtonFromWrapper(navButtons[ind - 4]).textContent = targetNum - 3;
      } else if (ind === 1) {
        controlCurrentPageСlass(parent);
        currentButton = parent;
        getButtonFromWrapper(navButtons[ind + 2]).textContent = targetNum + 1;
        getButtonFromWrapper(navButtons[ind + 3]).textContent = targetNum + 2;
        getButtonFromWrapper(navButtons[ind + 4]).textContent = targetNum + 3;
      } else {
        controlCurrentPageСlass(navButtons[ind]);
        currentButton = parent;
      }
    }

    function multiplierEditor() {
      const counterTo = getButtonFromWrapper(currentButton).textContent * 12;
      counter.textContent = `${counterTo - 11} - ${counterTo} из 100+ вариантов аренды`;
    }

    if (!parent.classList.contains('content-nav__button_space')) {
      controlCurrentPageСlass(currentButton);

      let ind = navButtons.indexOf(parent);
      let targetNum = Number(event.target.textContent);

      if (parent.classList.contains('content-nav__button_previous')) {
        if (Number(getButtonFromWrapper(currentButton).textContent) === 15) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 5;
          parent = navButtons[ind];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) >= 4) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 3;
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 3) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 3;
          parent = navButtons[ind];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 2) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 1;
          parent = navButtons[ind];
        }
      } else if (parent.classList.contains('content-nav__button_next')) {
        if (Number(getButtonFromWrapper(currentButton).textContent) === 1) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 3;
          parent = navButtons[ind];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) <= 12) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 5;
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 13) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 5;
          parent = navButtons[ind];
        } else if (Number(getButtonFromWrapper(currentButton).textContent) === 14) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 7;
          parent = navButtons[ind];
        }
      }

      controlButtonsNumbers(ind, targetNum);
      navDisplayControl();
      multiplierEditor();
    }
  }

  function bindEventListeners() {
    navButtons.forEach((navButton) => {
      navButton.addEventListener('click', navButtonClick);
    });
  }

  bindEventListeners();
  navDisplayControl();
}