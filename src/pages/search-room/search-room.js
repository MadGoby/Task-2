import { Header } from '@blocks/header/Header';
import { Sidebar } from '@blocks/sidebar/Sidebar';
import { Datepicker } from '@blocks/datepicker/Datepicker';
import { Dropdown } from '@blocks/dropdown/Dropdown';
import { Slider } from '@blocks/slider/Slider';
import { List } from '@blocks/list/List';
import { ContentNavigation } from '@blocks/content-navigation/ContentNavigation';
import { RoomCard } from '@blocks/room-card/RoomCard';
import { Navigation } from '@blocks/navigation/Navigation';
import { StarsRating } from '@blocks/stars-rating/StarsRating';

import { importContext } from '../../tools/importContext';
import './search-room.scss';

importContext();

const dropdownData = [
  {
    target: document.querySelector('.js-sidebar__guests'),
    dataSettings: {
      dataType: {
        name: 'guestsWithBaby',
      },
      outputType: 'twoByOne',
    },
  },
  {
    target: document.querySelector('.js-sidebar__room-amenities'),
    dataSettings: {
      dataType: {
        name: 'rooms',
      },
      outputType: 'oneByOne',
    },
  },
];

const header = document.querySelector('.js-search-room-page__header');
const sidebar = document.querySelector('.js-search-room-page__sidebar-wrapper');
const datepicker = document.querySelector('.js-sidebar__date-filter');
const slider = document.querySelector('.js-sidebar__slider');
const list = document.querySelector('.js-sidebar__additional-amenities');
const contentNavigation = document.querySelector('.js-search-room-page__rooms-navigation');
const roomCards = document.querySelectorAll('.js-room-card');

function handleDocumentLoad() {
  dropdownData.forEach((settings) => new Dropdown(settings));
  new Header(header);
  new Navigation(header);
  new Sidebar(sidebar);
  new Datepicker({
    target: datepicker,
    templates: {
      pickedYear: '2019',
      pickedMonth: '7',
      currentDay: '2019, 8, 9',
      dataFrom: '2019, 8, 19',
      dataTo: '2019, 8, 23',
    },
  });
  new Slider({
    target: slider,
    options: {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
    },
  });
  new List(list);
  new ContentNavigation(contentNavigation);
  roomCards.forEach((element) => {
    new RoomCard(element);
    new StarsRating(element);
  });
}

document.addEventListener('DOMContentLoaded', handleDocumentLoad);
