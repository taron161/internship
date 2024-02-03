import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {clickToggleButton} from './modules/header/open-menu';
import {scrollPage} from './modules/header/header-hide';
import {heroSwiper} from './modules/swiper/swiper';
import {initAccordions} from './vendor/accordion/init-accordion';
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

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    initAccordions();

    heroSwiper.init();
  });
});
