import Swiper, { Navigation, Scrollbar, Autoplay } from 'swiper';

Swiper.use([Navigation, Scrollbar, Autoplay]);

const swiper = new Swiper('.main-swiper', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.main-swiper__btn--next',
    prevEl: '.main-swiper__btn--prev',
  },

  speed: 1000,
});
