import { RoomCardSlider } from './RoomCard';

function roomCardInitialize() {
  [...document.querySelectorAll('.js-room-card')].forEach((item) => {
    new RoomCardSlider(item);
  });
}

export { roomCardInitialize };
