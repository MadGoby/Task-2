class StarsRating {
  constructor(target) {
    this.container = target;

    autoBind(this);
    this.getHtmlElements();
    this.stars.forEach((star) => this.bindHandleStarClick(star));
  }

  getHtmlElements() {
    this.stars = [...this.container.querySelectorAll('.stars-rating__star')];
  }

  removeActiveClass() {
    this.stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));
  }

  addActiveClass(star) {
    const lastActiveStar = this.stars.indexOf(star) + 1;
    const activeStars = this.stars.slice(0, lastActiveStar);

    activeStars.forEach((activeStar) => {
      activeStar.classList.add('stars-rating__star_color_purple');
    });
  }

  handleStarClick(event) {
    this.removeActiveClass();
    this.addActiveClass(event.target);
  }

  bindHandleStarClick(star) {
    star.addEventListener('click', this.handleStarClick);
  }
}

export { StarsRating };
