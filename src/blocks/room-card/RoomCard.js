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

  static getCorrectIndex(index) {
    switch (true) {
      case index < 0:
        return 3;
      case index > 3:
        return 0;
      default:
        return index;
    }
  }

  animateImageChange(settings) {
    const { leftImage, rightImage, duration } = settings;
    const imageIndex = RoomCard.getCorrectIndex(settings.index);

    this.images[imageIndex].animate(leftImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.animate(rightImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.style.left = '0px';
    this.images[imageIndex].style.left = `${Number(this.container.offsetWidth) + 5}px`;
  }

  changeAnimateDirection(target, duration) {
    const animateToPrevious = () => {
      this.animateImageChange({
        leftImage: [{ left: '0px' }, { left: `${this.container.offsetWidth}px` }],
        rightImage: [{ left: `${0 - this.container.offsetWidth}px` }, { left: '0px' }],
        duration,
        index: this.images.indexOf(this.currentImage, 0) + 1,
      });
    };

    const animateToNext = () => {
      this.animateImageChange({
        leftImage: [{ left: '0px' }, { left: `${0 - this.container.offsetWidth}px` }],
        rightImage: [{ left: `${this.container.offsetWidth}px` }, { left: '0px' }],
        duration,
        index: this.images.indexOf(this.currentImage, 0) - 1,
      });
    };

    if (target === 'previous') {
      animateToPrevious();
    } else {
      animateToNext();
    }
  }

  changeAnimateDuration(target, duration) {
    const isDurationSetCorrectly = duration && typeof duration === 'number';
    const animationDuration = isDurationSetCorrectly ? duration : 500;

    this.changeAnimateDirection(target, animationDuration);
  }

  changeImage(button) {
    const imageIndex = this.images.indexOf(this.currentImage, 0);
    const isPreviousButton = button.classList.contains('room-card__image-button_side_left');
    const changedImageIndex = isPreviousButton ? imageIndex - 1 : imageIndex + 1;
    const correctImageIndex = RoomCard.getCorrectIndex(changedImageIndex);

    this.currentImage = this.images[correctImageIndex];

    this.currentImagePosition.classList.toggle('room-card__image-position_selected');
    this.currentImagePosition = this.imagePositions[correctImageIndex];
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
    const iteration = () => {
      const oldImageIndex = this.images.indexOf(this.currentImage);
      const newImageIndex = action === 'next' ? oldImageIndex + 1 : oldImageIndex - 1;

      this.currentImage = this.images[newImageIndex];
      this.currentImagePosition.classList.toggle('room-card__image-position_selected');
      this.currentImagePosition = this.imagePositions[newImageIndex];
      this.currentImagePosition.classList.toggle('room-card__image-position_selected');

      this.changeAnimateDuration(action, 300);

      if (this.currentImage !== this.images[posIndex]) {
        this.iterateMultipleAnimations(false, action, posIndex);
      }
    };

    if (first) {
      iteration();
    } else {
      setTimeout(() => iteration(), 300);
    }
  }

  handleImagePositionClick(event) {
    const posIndex = this.imagePositions.indexOf(event.target);
    const isNextAction = posIndex > this.images.indexOf(this.currentImage);
    const isPreviousAction = posIndex < this.images.indexOf(this.currentImage);

    const defineAction = () => {
      switch (true) {
        case isNextAction:
          return 'next';
        case isPreviousAction:
          return 'previous';
        default:
          return '';
      }
    };

    const action = defineAction();

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
