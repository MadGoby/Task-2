import { RoomCardSlider } from './room-card';

function initAllRoomCards() {
  [...document.querySelectorAll('.js-room-card')].forEach((item) => {
    new RoomCardSlider(item);
  });
}

export { initAllRoomCards };
