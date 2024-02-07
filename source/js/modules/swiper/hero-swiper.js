//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

export const heroSwiper = new Swiper('[data-swiper="hero"]', {
  direction: 'horizontal',
  modules: [Pagination, Autoplay],
  loop: true,
  init: false,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-slide-active [data-pagination="hero"]',
    type: 'bullets',
    clickable: true,
  },
  on: {
    beforeTransitionStart: function () {
      this.pagination.init();
      this.pagination.render();
      this.pagination.update();
    }
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
    },
  },
});
