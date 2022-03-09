import { StarsRating } from './StarsRating';

function initialize() {
  [...document.querySelectorAll('.js-stars-rating')].forEach((item) => {
    new StarsRating(item);
  });
}

document.addEventListener('DOMContentLoaded', initialize);
