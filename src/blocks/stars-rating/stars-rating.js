export default function starsRating(settings) {
  const { containerClass } = settings;

  function initializeElements() {
    const container = document.querySelector(containerClass);
    const stars = [...container.querySelectorAll('.stars-rating__star')];

    return stars;
  }

  const stars = initializeElements();

  function starClicked(event) {
    const eStar = event.target;

    function cleanActiveClass() {
      stars.forEach((star) => star.classList.remove('stars-rating__star_color_purple'));
    }

    function addActiveClass() {
      const index = stars.indexOf(eStar);

      for (let i = 0; i <= index; i += 1) {
        stars[i].classList.add('stars-rating__star_color_purple');
      }
    }

    cleanActiveClass();
    addActiveClass();
  }
  function bindEventListeners() {
    stars.forEach((star) => star.addEventListener('click', starClicked));
  }

  bindEventListeners();
}