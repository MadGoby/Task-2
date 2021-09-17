import { StarsRating } from './StarsRating';

function initAllStarRatings() {
  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {
    new StarsRating(item);
  });
}

export { initAllStarRatings };
