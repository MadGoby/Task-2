class RoomCardSlider {
  constructor(target) {
    this.container = target;

    this.getHtmlElements();
    this.bindObjectLink();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.images = [...this.container.querySelectorAll('.room-card__image')];
    this.previousButton = this.container.querySelector('.room-card__image-button_side_left');
    this.nextButton = this.container.querySelector('.room-card__image-button_side_rigth');
    this.imagePositions = [...this.container.querySelectorAll('.room-card__image-position')];
    [this.currentImage] = this.images;
    [this.currentImagePosition] = this.imagePositions;
    this.currentImage.style.left = '0px';
  }

  animateSlide(settings) {
    const { leftImage, rigthImage, duration } = settings;
    let { index } = settings;

    if (index < 0) index = 3;
    if (index > 3) index = 0;

    this.images[index].animate(leftImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.animate(rigthImage, {
      duration,
      easing: 'ease-in-out',
    });

    this.currentImage.style.left = '0px';
    this.images[index].style.left = `${this.container.offsetWidth + 5}px`;
  }

  controlAnimateDirection(target, duration) {
    let animationDuration = 500;
    if (duration && typeof duration === 'number') animationDuration = duration;

    if (target === 'previous') {
      this.animateSlide({
        leftImage: [{ left: '0px' }, { left: `${this.container.offsetWidth}px` }],
        rigthImage: [{ left: `${0 - this.container.offsetWidth}px` }, { left: '0px' }],
        duration: animationDuration,
        index: this.images.indexOf(this.currentImage, 0) + 1,
      });
    } else {
      this.animateSlide({
        leftImage: [{ left: '0px' }, { left: `${0 - this.container.offsetWidth}px` }],
        rigthImage: [{ left: `${this.container.offsetWidth}px` }, { left: '0px' }],
        duration: animationDuration,
        index: this.images.indexOf(this.currentImage, 0) - 1,
      });
    }
  }

  changeImage(button) {
    let index = this.images.indexOf(this.currentImage, 0);
    if (button.classList.contains('room-card__image-button_side_left')) {
      index -= 1;
    } else {
      index += 1;
    }

    if (index < 0) index = 3;
    if (index > 3) index = 0;

    this.currentImage = this.images[index];

    this.currentImagePosition.classList.toggle('room-card__image-position_selected');
    this.currentImagePosition = this.imagePositions[index];
    this.currentImagePosition.classList.toggle('room-card__image-position_selected');
  }

  imageButtonClicked(event) {
    const button = event.target;

    this.changeImage(button);

    if (button.classList.contains('room-card__image-button_side_left')) {
      this.controlAnimateDirection('previous');
    } else {
      this.controlAnimateDirection('next');
    }
  }

  controlMultipleAnimations(first, action, posIndex) {
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

      this.controlAnimateDirection(action, 300);

      if (this.currentImage !== this.images[posIndex]) {
        this.controlMultipleAnimations(false, action, posIndex);
      }
    };

    iteration = iteration.bind(this);

    if (first) {
      iteration();
    } else {
      setTimeout(() => iteration(), 300);
    }
  }

  imagePositionClicked(event) {
    const posIndex = this.imagePositions.indexOf(event.target);
    let action;

    if (posIndex > this.images.indexOf(this.currentImage)) {
      action = 'next';
    } else if (posIndex < this.images.indexOf(this.currentImage)) {
      action = 'previous';
    }

    if (action) {
      this.controlMultipleAnimations(true, action, posIndex);
    }
  }

  bindObjectLink() {
    this.imageButtonClicked = this.imageButtonClicked.bind(this);
    this.imagePositionClicked = this.imagePositionClicked.bind(this);
    this.controlMultipleAnimations = this.controlMultipleAnimations.bind(this);
  }

  bindEventListeners() {
    this.previousButton.addEventListener('click', this.imageButtonClicked);
    this.nextButton.addEventListener('click', this.imageButtonClicked);
    this.imagePositions.forEach((elem) => {
      elem.addEventListener('click', this.imagePositionClicked);
    });
  }
}

export { RoomCardSlider };
