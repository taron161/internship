//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';

export const tabsSwiper = new Swiper('[data-swiper="tabs"]', {
  direction: 'horizontal',
  loop: false,
  init: false,
  autoHeight: true,
  initialSlide: 0,
  freeMode: true,
  breakpoints: {
    0: {
      allowTouchMove: true,
      spaceBetween: 12,
      slidesPerView: 5,
    },
    768: {
      allowTouchMove: false,
      spaceBetween: 20,
    },
    1440: {
      allowTouchMove: false,
      spaceBetween: 30,
    },
  },
});
