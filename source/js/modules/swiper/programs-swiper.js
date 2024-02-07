//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

export const programsSwiper = new Swiper('[data-swiper="programs"]', {
  direction: 'horizontal',
  modules: [Pagination, Navigation],
  loop: false,
  init: false,
  pagination: {
    el: '[data-pagination="programs"]',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '[data-programs="btn-next"]',
    prevEl: '[data-programs="btn-prev"]',
  },
  autoHeight: true,
  initialSlide: 2,
  breakpoints: {
    0: {
      pagination: {
        enabled: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      pagination: {
        enabled: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: true,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
});
