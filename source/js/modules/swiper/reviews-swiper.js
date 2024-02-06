//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

export const reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
  direction: 'horizontal',
  modules: [Pagination, Navigation],
  loop: false,
  init: false,
  pagination: {
    el: '[data-pagination="reviews"]',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '[data-reviews="btn-next"]',
    prevEl: '[data-reviews="btn-prev"]',
  },
  autoHeight: true,
  initialSlide: 1,
  breakpoints: {
    0: {
      pagination: {
        enabled: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      pagination: {
        enabled: true,
      },
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
  },
});
