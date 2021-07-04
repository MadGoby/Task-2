function contentNav(settings) {
  const {navClass} = settings;

  function initializeElements() {
    let nav = document.querySelector(navClass);
    let navButtons = [...nav.querySelectorAll(".content-nav__button")];
    let currentButton;
    let counter = nav.querySelector(".content-nav__counter");
    navButtons.map(function(navButton) {
      if(navButton.classList.contains("content-nav__button_current")) {
        currentButton = navButton;
      }
    });
 
    return {nav, navButtons, currentButton, counter};
  };
  
  let {nav, navButtons, currentButton, counter} = initializeElements();

  function bindEventListeners() {
    navButtons.map(function(navButton) {
      navButton.addEventListener("click", navButtonClick);
    });
  };

  function getButtonFromWrapper(element) {
    return element.querySelector(".button__control");
  };
  
  function navDisplayControl() {
    let currentPageNum = getButtonFromWrapper(currentButton).textContent;
    
    navButtons.map(function(elem) {
      elem.style.display = "inline-block"
    })

    if (currentPageNum == 1) {
      navButtons[0].style.display = "none";
      navButtons[2].style.display = "none";
      navButtons[5].style.display = "none";
    } else if (currentPageNum == 2) {
      navButtons[5].style.display = "none";
      navButtons[2].style.display = "none";
    } else if (currentPageNum == 3) {
      navButtons[2].style.display = "none";
    } else if (currentPageNum == 13) {
      navButtons[6].style.display = "none";
    } else if (currentPageNum == 14) {
      navButtons[6].style.display = "none";
      navButtons[3].style.display = "none";
    } else if (currentPageNum == 15) {
      navButtons[6].style.display = "none";
      navButtons[8].style.display = "none";
      navButtons[3].style.display = "none";
    };
  };

  

  function navButtonClick(event) {
    
    let parent;

    function getParent(currentButton) {
      if (currentButton.parentNode.classList.contains("content-nav__button")) {
        parent = currentButton.parentNode;
      } else {
        getParent(currentButton.parentNode);
      }
    };

    getParent(event.target);

    if (!parent.classList.contains("content-nav__button_space")) {
      function controlCurrentPageСlass(selectedButton) {
        selectedButton.classList.toggle("content-nav__button_current");
      };
  
      function controlButtonsNumbers(ind, targetNum) {
        if (ind == 5 && targetNum <= 13) {
          controlCurrentPageСlass(navButtons[ind - 1]);
          currentButton = navButtons[ind - 1];
          getButtonFromWrapper(navButtons[ind - 1]).textContent = targetNum;
          getButtonFromWrapper(navButtons[ind - 2]).textContent = targetNum - 1;
          getButtonFromWrapper(navButtons[ind]).textContent = targetNum + 1;
        } else if (ind == 3 && targetNum >= 3) {
          controlCurrentPageСlass(navButtons[ind + 1]);
          currentButton = navButtons[ind + 1];
          getButtonFromWrapper(navButtons[ind + 1]).textContent = targetNum;
          getButtonFromWrapper(navButtons[ind + 2]).textContent = targetNum + 1;
          getButtonFromWrapper(navButtons[ind]).textContent = targetNum - 1;
        } else if (ind == 7) {
          controlCurrentPageСlass(parent);
          currentButton = parent;
          getButtonFromWrapper(navButtons[ind - 2]).textContent = targetNum - 1;
          getButtonFromWrapper(navButtons[ind - 3]).textContent = targetNum - 2;
          getButtonFromWrapper(navButtons[ind - 4]).textContent = targetNum - 3;
        } else if (ind == 1) {
          controlCurrentPageСlass(parent);
          currentButton = parent;
          getButtonFromWrapper(navButtons[ind + 2]).textContent = targetNum + 1;
          getButtonFromWrapper(navButtons[ind + 3]).textContent = targetNum + 2;
          getButtonFromWrapper(navButtons[ind + 4]).textContent = targetNum + 3;
        } else {
          controlCurrentPageСlass(navButtons[ind]);
          currentButton = parent;
        }
      };
  
      controlCurrentPageСlass(currentButton);
  
      let ind = navButtons.indexOf(parent);
      let targetNum = Number(event.target.textContent);
  
      if (parent.classList.contains("content-nav__button_previous")) {
        if (getButtonFromWrapper(currentButton).textContent == 15) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 5;
          parent = navButtons[5];
        } else if (getButtonFromWrapper(currentButton).textContent >= 4) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 3;
        } else if (getButtonFromWrapper(currentButton).textContent == 3) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 3;
          parent = navButtons[3];
        } else if (getButtonFromWrapper(currentButton).textContent == 2) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) - 1;
          ind = 1;
          parent = navButtons[1];
        };
      } else if (parent.classList.contains("content-nav__button_next")) {
        if (getButtonFromWrapper(currentButton).textContent == 1) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 3;
          parent = navButtons[3];
        } else if (getButtonFromWrapper(currentButton).textContent <= 12) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 5;
        } else if (getButtonFromWrapper(currentButton).textContent == 13) {
          console.log("111")
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 5;
          parent = navButtons[5];
        } else if (getButtonFromWrapper(currentButton).textContent == 14) {
          targetNum = Number(getButtonFromWrapper(currentButton).textContent) + 1;
          ind = 7;
          parent = navButtons[7];
        };
      };

      function multiplierEditor() {
        let counterTo = getButtonFromWrapper(currentButton).textContent * 12;
        counter.textContent = `${counterTo - 11} - ${counterTo} из 100+ вариантов аренды`
      };
      
      controlButtonsNumbers(ind, targetNum);
      navDisplayControl();
      multiplierEditor();
    };
  };

  bindEventListeners()
  navDisplayControl()
};

export {contentNav};