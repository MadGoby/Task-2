class RoomCard {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.initialize();
  }

  initialize() {
    this.getHtmlElements();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.images = [...this.container.querySelectorAll('.js-room-card__image')];
    this.previousButton = this.container.querySelector('.js-room-card__image-button_side_left');
    this.nextButton = this.container.querySelector('.js-room-card__image-button_side_right');
    this.imagePositions = [...this.container.querySelectorAll('.js-room-card__image-position')];
    [this.currentImage] = this.images;
    [this.currentImagePosition] = this.imagePositions;
    this.currentImage.style.left = '0px';
  }

  animateImageChange(settings) {
    const { leftImage, rightImage, duration } = settings;
    let { index } = settings;

    if (index < 0) index = 3;
    if (index > 3) index = 0;

    this.images[index].animate(leftImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.animate(rightImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.style.left = '0px';
    this.images[index].style.left = `${Number(this.container.offsetWidth) + 5}px`;
  }

  changeAnimateDirection(target, duration) {
    if (target === 'previous') {
      this.animateImageChange({
        leftImage: [{ left: '0px' }, { left: `${this.container.offsetWidth}px` }],
        rightImage: [{ left: `${0 - this.container.offsetWidth}px` }, { left: '0px' }],
        duration,
        index: this.images.indexOf(this.currentImage, 0) + 1,
      });
    } else {
      this.animateImageChange({
        leftImage: [{ left: '0px' }, { left: `${0 - this.container.offsetWidth}px` }],
        rightImage: [{ left: `${this.container.offsetWidth}px` }, { left: '0px' }],
        duration,
        index: this.images.indexOf(this.currentImage, 0) - 1,
      });
    }
  }

  changeAnimateDuration(target, duration) {
    let animationDuration = 500;
    const isDurationSetCorrectly = duration && typeof duration === 'number';

    if (isDurationSetCorrectly) animationDuration = duration;

    this.changeAnimateDirection(target, animationDuration);
  }

  changeImage(button) {
    let index = this.images.indexOf(this.currentImage, 0);
    if (button.classList.contains('room-card__image-button_side_left')) {
      index -= 1;
    } else {
      index += 1;
    }

    if (index < 0) {
      index = 3;
    } else if (index > 3) {
      index = 0;
    }

    this.currentImage = this.images[index];

    this.currentImagePosition.classList.toggle('room-card__image-position_selected');
    this.currentImagePosition = this.imagePositions[index];
    this.currentImagePosition.classList.toggle('room-card__image-position_selected');
  }

  defineAnimationDirection(event) {
    const button = event.target;

    this.changeImage(button);

    if (button.classList.contains('room-card__image-button_side_left')) {
      this.changeAnimateDuration('previous');
    } else {
      this.changeAnimateDuration('next');
    }
  }

  iterateMultipleAnimations(first, action, posIndex) {
    let iteration = () => {
      let i;

      if (action === 'next') {
        i = this.images.indexOf(this.currentImage) + 1;
      } else {
        i = this.images.indexOf(this.currentImage) - 1;
      }

      this.currentImage = this.images[i];
      this.currentImagePosition.classList.toggle('room-card__image-position_selected');
      this.currentImagePosition = this.imagePositions[i];
      this.currentImagePosition.classList.toggle('room-card__image-position_selected');

      this.changeAnimateDuration(action, 300);

      if (this.currentImage !== this.images[posIndex]) {
        this.iterateMultipleAnimations(false, action, posIndex);
      }
    };

    iteration = iteration.bind(this);

    if (first) {
      iteration();
    } else {
      setTimeout(() => iteration(), 300);
    }
  }

  handleImagePositionClick(event) {
    const posIndex = this.imagePositions.indexOf(event.target);
    let action;

    if (posIndex > this.images.indexOf(this.currentImage)) {
      action = 'next';
    } else if (posIndex < this.images.indexOf(this.currentImage)) {
      action = 'previous';
    }

    if (action) this.iterateMultipleAnimations(true, action, posIndex);
  }

  handlePreviousButtonClick(event) {
    this.defineAnimationDirection(event);
  }

  handleNextButtonClick(event) {
    this.defineAnimationDirection(event);
  }

  bindEventListeners() {
    this.previousButton.addEventListener('click', this.handlePreviousButtonClick);
    this.nextButton.addEventListener('click', this.handleNextButtonClick);
    this.imagePositions.forEach((imagePosition) => {
      imagePosition.addEventListener('click', this.handleImagePositionClick);
    });
  }
}

export { RoomCard };
