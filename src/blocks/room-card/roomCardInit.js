import { RoomCardSlider } from './RoomCard';

function initialize() {
  [...document.querySelectorAll('.js-room-card')].forEach((item) => {
    new RoomCardSlider(item);
  });
}

document.addEventListener("DOMContentLoaded", initialize);
