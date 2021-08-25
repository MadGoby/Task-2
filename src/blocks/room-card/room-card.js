export default function swiperSlider(settings) {
  const { roomCardClass } = settings;

  function initializeElements() {
    const roomCard = document.querySelector(roomCardClass);
    const images = [...roomCard.querySelectorAll('.room-card__image')];
    const previousButton = roomCard.querySelector('.room-card__image-button_previous');
    const nextButton = roomCard.querySelector('.room-card__image-button_next');
    const imagePositions = [...roomCard.querySelectorAll('.room-card__image-position')];
    const currentImage = images[0];
    const currentImagePosition = imagePositions[0];

    currentImage.style.left = '0px';

    return {
      roomCard,
      images,
      previousButton,
      nextButton,
      imagePositions,
      currentImage,
      currentImagePosition,
    };
  }

  let { currentImage, currentImagePosition } = initializeElements();
  const { roomCard, images, previousButton, nextButton, imagePositions } = initializeElements();

  function animationOfImg(target, animation) {
    let animLength = 500;

    if (animation && typeof animation === 'number') animLength = animation;

    function toPrevious() {
      let index = images.indexOf(currentImage, 0) + 1;
      if (index < 0) index = 3;
      if (index > 3) index = 0;

      images[index].animate([{ left: '0px' }, { left: `${roomCard.offsetWidth}px` }], {
        duration: animLength,
        easing: 'ease-in-out',
      });

      currentImage.animate([{ left: `${0 - roomCard.offsetWidth}px` }, { left: '0px' }], {
        duration: animLength,
        easing: 'ease-in-out',
      });

      currentImage.style.left = '0px';
      images[index].style.left = `${roomCard.offsetWidth + 5}px`;
    }

    function toNext() {
      let index = images.indexOf(currentImage, 0) - 1;

      if (index < 0) index = 3;
      if (index > 3) index = 0;

      images[index].animate([{ left: '0px' }, { left: `${0 - roomCard.offsetWidth}px` }], {
        duration: animLength,
        easing: 'ease-in-out',
      });

      currentImage.animate([{ left: `${roomCard.offsetWidth}px` }, { left: '0px' }], {
        duration: animLength,
        easing: 'ease-in-out',
      });

      currentImage.style.left = '0px';
      images[index].style.left = `${roomCard.offsetWidth + 5}px`;
    }

    if (target === 'previous') {
      toPrevious();
    } else {
      toNext();
    }
  }

  function controlButtonClick(event) {
    const button = event.target;

    function changeImage() {
      let index = images.indexOf(currentImage, 0);
      if (button.classList.contains('room-card__image-button_previous')) {
        index -= 1;
      } else {
        index += 1;
      }

      if (index < 0) index = 3;
      if (index > 3) index = 0;

      currentImage = images[index];

      currentImagePosition.classList.toggle('room-card__image-position_active');
      currentImagePosition = imagePositions[index];
      currentImagePosition.classList.toggle('room-card__image-position_active');
    }

    changeImage();

    if (button.classList.contains('room-card__image-button_previous')) {
      animationOfImg('previous');
    } else {
      animationOfImg('next');
    }
  }

  function anim(first, action, posIndex) {
    function iteration() {
      if (action === 'next') {
        const i = images.indexOf(currentImage) + 1;
        
        currentImage = images[i];
        currentImagePosition.classList.toggle('room-card__image-position_active');
        currentImagePosition = imagePositions[i];
        currentImagePosition.classList.toggle('room-card__image-position_active');
      } else {
        const i = images.indexOf(currentImage) - 1;
        
        currentImage = images[i];
        currentImagePosition.classList.toggle('room-card__image-position_active');
        currentImagePosition = imagePositions[i];
        currentImagePosition.classList.toggle('room-card__image-position_active');
      }

      animationOfImg(action, 300);

      if (currentImage !== images[posIndex]) {
        anim(false, action, posIndex);
      }
    }

    if (first) {
      iteration();
    } else {
      setTimeout(() => {
        iteration();
      }, 300);
    }
  }

  function imagePositionClick(event) {
    const posIndex = imagePositions.indexOf(event.target);
    let action;

    if (posIndex > images.indexOf(currentImage)) {
      action = 'next';
    } else if (posIndex < images.indexOf(currentImage)) {
      action = 'previous';
    }

    if (action) {
      anim(true, action, posIndex);
    }
  }

  function bindEventListeners() {
    previousButton.addEventListener('click', controlButtonClick);
    nextButton.addEventListener('click', controlButtonClick);
    imagePositions.forEach((elem) => {
      elem.addEventListener('click', imagePositionClick);
    });
  }

  bindEventListeners();
}