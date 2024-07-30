import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function swiper () {

const swiper = new Swiper('.swiper', {
  slidesPerView: "1.5",
  spaceBetween: 12,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
    },

    breakpoints: {
      821: {
        slidesPerView: "2.7",
        spaceBetween: 20,
      },
      1184: {
        slidesPerView: "4",
        spaceBetween: 20,
      },
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },  

});
}

export default swiper