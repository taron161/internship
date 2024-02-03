//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

const heroSwiper = new Swiper('[data-hero="swiper"]', {
  direction: 'horizontal',
  modules: [Pagination, Autoplay],
  loop: true,
  init: false,
  autoHeight: true,
  // autoplay: {
  //   delay: 3000,
  // },
  pagination: {
    el: '[data-hero="pagination"]',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'hero__pagination-bullet--active',
    bulletClass: 'hero__pagination-bullet',
    currentClass: 'hero__pagination-bullet--current',
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    1440: {
      allowTouchMove: false,
    }
  },
});

export {heroSwiper};
