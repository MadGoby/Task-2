import { StarsRating } from './stars-rating';

function initAllStarRatings() {
  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {
    new StarsRating(item);
  });
}

export { initAllStarRatings };
