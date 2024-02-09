//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

export const newsSwiper = new Swiper('[data-swiper="news"]', {
  direction: 'horizontal',
  modules: [Pagination, Navigation],
  loop: false,
  init: false,
  pagination: {
    el: '[data-pagination="news"]',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '[data-news="btn-next"]',
    prevEl: '[data-news="btn-prev"]',
  },

  initialSlide: 0,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});
