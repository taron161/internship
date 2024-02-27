import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';
import {initModals} from './vendor/modals/init-modals';

import {clickToggleButton} from './modules/header/open-menu';
import {scrollPage} from './modules/header/header-hide';

import {initAccordions} from './vendor/accordion/init-accordion';

import {listNumeration} from './modules/grant/grant-list';

import {submitForm} from './modules/form/submit-form';
import {initPhoneMask} from './modules/phone-mask/phone-mask';

import {heroSwiper} from './modules/swiper/hero-swiper';
import {reviewsSwiper} from './modules/swiper/reviews-swiper';
import {programsSwiper} from './modules/swiper/programs-swiper';
import {newsSwiper} from './modules/swiper/news';

import {onClickTab} from './modules/news/news';
import {setSlidesNumbers} from './modules/news/news';

import {CustomSelect} from './vendor/select/custom-select';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // Бургерное меню
  clickToggleButton();

  // Появление и скрытие хедера при скролле
  scrollPage();

  // Нумерация списка в блоке "Grant"
  listNumeration();

  // Валидация и отправка формы
  submitForm();


  onClickTab();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    const select = new CustomSelect();
    select.init();

    initPhoneMask();

    initModals();

    initAccordions();

    heroSwiper.init();

    reviewsSwiper.init();

    programsSwiper.init();

    newsSwiper.init();

    setSlidesNumbers();
  });
});
