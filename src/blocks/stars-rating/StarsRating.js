class StarsRating {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
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

  handleStarClick(event) {
    this.cleanActiveClass();
    this.addActiveClass(event.target);
  }

  bindEventListeners() {
    this.stars.forEach((star) => star.addEventListener('click', this.handleStarClick));
  }
}

export { StarsRating };
