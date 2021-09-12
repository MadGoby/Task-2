class StarsRating {
  constructor(target) {
    this.container = target;

    this.getHtmlElements();
    this.bindObjectLink();
    this.bindEventListeners();
  }

  getHtmlElements() {
    this.stars = [...this.container.querySelectorAll('.stars-rating__star')];
  }

  cleanActiveClass() {
    this.stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));
  }

  addActiveClass(star) {
    const index = this.stars.indexOf(star);

    for (let i = 0; i <= index; i += 1) {
      this.stars[i].classList.add('stars-rating__star_color_purple');
    }
  }

  starClicked(event) {
    const eStar = event.target;

    this.cleanActiveClass();
    this.addActiveClass(eStar);
  }

  bindObjectLink() {
    this.starClicked = this.starClicked.bind(this);
  }

  bindEventListeners() {
    this.stars.forEach((star) => star.addEventListener('click', this.starClicked));
  }
}

export { StarsRating };
