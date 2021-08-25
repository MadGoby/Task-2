export default function starRatting(settings) {
  const { containerClass } = settings;

  function initializeElements() {
    const container = document.querySelector(containerClass);
    const stars = [...container.querySelectorAll('.star-rate__star')];

    return stars;
  }

  const stars = initializeElements();

  function starClicked(event) {
    const eStar = event.target;

    function cleanActiveClass() {
      stars.forEach((star) => star.classList.remove('star-rate__star_active'));
    }

    function addActiveClass() {
      const index = stars.indexOf(eStar);

      for (let i = 0; i <= index; i += 1) {
        stars[i].classList.add('star-rate__star_active');
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