function swiperSlider(settings) {
  const {roomCardClass} = settings;
  
  function initializeElements() {
    let roomCard = document.querySelector(roomCardClass);
    let images = [...roomCard.querySelectorAll(".room-card__image")]
    let previousButton = roomCard.querySelector(".room-card__image-button_previous");
    let nextButton = roomCard.querySelector(".room-card__image-button_next");
    let imagePositions = [...roomCard.querySelectorAll(".room-card__image-position")];
    let currentImage = images[0];
    currentImage.style.left = "0px"
    let currentImagePosition = imagePositions[0];

    return {
      roomCard, images, previousButton,
      nextButton, imagePositions, currentImage, currentImagePosition
    };
  };

  let {
    roomCard, images, previousButton,
    nextButton, imagePositions, currentImage, currentImagePosition
  } = initializeElements();
  
  function bindEventListeners() {
    previousButton.addEventListener("click", controlButtonClick);
    nextButton.addEventListener("click", controlButtonClick);
    imagePositions.map(function(elem) {
      elem.addEventListener("click", imagePositionClick)
    })
  };

  function animationOfImg(target, anim) {
    let animLength = 500;
    if(anim && typeof anim == "number") animLength = anim
    target == "previous" ? toPrevious() : toNext();
    
    function toPrevious() {
      let index = images.indexOf(currentImage, 0) + 1;
      if(index < 0) index = 3;
      if(index > 3) index = 0;

      images[index].animate([
        { left: "0px" },
        { left: `${roomCard.offsetWidth}px` }
      ], {
        duration: animLength,
        easing: "ease-in-out"
      })

      currentImage.animate([
        { left: `${0 - (roomCard.offsetWidth)}px` },
        { left: "0px" }
      ], {
        duration: animLength,
        easing: "ease-in-out"
      })

      currentImage.style.left = "0px"
      images[index].style.left = `${roomCard.offsetWidth + 5}px`
    };

    function toNext() {
      let index = images.indexOf(currentImage, 0) - 1;
      if(index < 0) index = 3;
      if(index > 3) index = 0;

      images[index].animate([
        { left: "0px" },
        { left: `${0 - roomCard.offsetWidth}px` }
      ], {
        duration: animLength,
        easing: "ease-in-out"
      })

      currentImage.animate([
        { left: `${(roomCard.offsetWidth)}px` },
        { left: "0px" }
      ], {
        duration: animLength,
        easing: "ease-in-out"
      })

      currentImage.style.left = "0px"
      images[index].style.left = `${roomCard.offsetWidth + 5}px`
    };
  };

  function controlButtonClick(event) {
    let button = event.target;

    function changeImage() {
      let index = images.indexOf(currentImage, 0);
      button.classList.contains("room-card__image-button_previous") ? index-- : index++
      if(index < 0) index = 3;
      if(index > 3) index = 0;

      currentImage = images[index];

      currentImagePosition.classList.toggle("room-card__image-position_active");
      currentImagePosition = imagePositions[index];
      currentImagePosition.classList.toggle("room-card__image-position_active");
    };
    
    changeImage();
    if (button.classList.contains("room-card__image-button_previous")) {
      animationOfImg("previous");
    } else {
      animationOfImg("next");
    }
  };

  function imagePositionClick(event) {
    let action;
    let posIndex = imagePositions.indexOf(event.target)

    if(posIndex > images.indexOf(currentImage)) {
      action = "next"
    } else if(posIndex < images.indexOf(currentImage)) {
      action = "previous"
    }
    
    if(action) {
      function anim(first) {
        function iteration() {
          if (action == "next") {
            let i = images.indexOf(currentImage) + 1
            currentImage = images[i];
            currentImagePosition.classList.toggle("room-card__image-position_active");
            currentImagePosition = imagePositions[i];
            currentImagePosition.classList.toggle("room-card__image-position_active");
          } else {
            let i = images.indexOf(currentImage) - 1
            currentImage = images[i];
            currentImagePosition.classList.toggle("room-card__image-position_active");
            currentImagePosition = imagePositions[i];
            currentImagePosition.classList.toggle("room-card__image-position_active");
          }
          animationOfImg(action, 300);
          if (currentImage !== images[posIndex] ) { 
            anim();
          } 
        };
        if(first) {
          iteration()
        } else {
          setTimeout(function() {
            iteration()
          }, 300) 
        }
      }

      anim(true);
    }
  }

  bindEventListeners()
};

export {swiperSlider};