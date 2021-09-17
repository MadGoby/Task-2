import { RoomCardSlider } from './RoomCard';

function initAllRoomCards() {
  [...document.querySelectorAll('.js-room-card')].forEach((item) => {
    new RoomCardSlider(item);
  });
}

export { initAllRoomCards };
