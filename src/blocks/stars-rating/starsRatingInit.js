import { StarsRating } from './StarsRating';

function starsRatingInitialize() {
  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {
    new StarsRating(item);
  });
}

export { starsRatingInitialize };
