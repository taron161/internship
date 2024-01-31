//Swiper v11.0.5 released on November 22, 2023
import Swiper from 'swiper';

const heroSwiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export {heroSwiper};
