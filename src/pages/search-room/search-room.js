import { HeaderBurger } from '@blocks/header/Header';
import { Sidebar } from '@blocks/sidebar/Sidebar';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Slider } from '@blocks/slider/Slider';
import { ListDropdown } from '@blocks/list/List';
import { ContentNavigation } from '@blocks/content-navigation/ContentNavigation';
import { RoomCardSlider } from '@blocks/room-card/RoomCard';
import { Navigation } from '@blocks/navigation/Navigation';
import { StarsRating } from '@blocks/stars-rating/StarsRating';

import { importContext } from '../../tools/importContext';
import './search-room.scss';

importContext();

const dropdownData = [
  {
    target: 'js-sidebar__guests',
    dataSettings: {
      dataType: {
        name: 'guestsWithBaby',
      },
      outputType: 'twoByOne',
    },
  },
  {
    target: 'js-sidebar__room-amenities',
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
];

function handleDocumentLoad() {
  dropdownData.forEach((settings) => new Dropdown(settings));
  new HeaderBurger('js-search-room-page__header');
  new Navigation('js-search-room-page__header');
  new Sidebar('js-search-room-page__sidebar-wrapper');
  new Datepicker({
    target: 'js-sidebar__date-filter',
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  });
  new Slider({
    targetClass: 'js-sidebar__slider',
    options: {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
    },
  });
  new ListDropdown('js-sidebar__additional-amenities');
  new ContentNavigation('js-search-room-page__rooms-navigation');
  document.querySelectorAll('.js-room-card').forEach((element) => {
    new RoomCardSlider(element);
    new StarsRating(element);
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
