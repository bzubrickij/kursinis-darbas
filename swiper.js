"use strict";

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  speed: 1500,
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pouseOnMouseEnter: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    900: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pouseOnMouseEnter: false,
      },
    },

    1275: {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pouseOnMouseEnter: false,
      },
    },
  },
});

// ---------------------------------------------------------------- Swiper 1
const swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: false,
  spaceBetween: 40,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pouseOnMouseEnter: false,
  },

  breakpoints: {
    1100: {
      spaceBetween: 100,
      slidesPerView: 3,
      slidesPerGroup: 3,
      autoplay: true,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next-mine",
    prevEl: ".swiper-button-prev-mine",
  },
});
