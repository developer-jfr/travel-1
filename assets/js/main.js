/*==================== SWIPER  ====================*/
let swiper = new Swiper(".slider-1", {
  slidesPerView: 2.5,
  draggables: true,
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

let secondSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  draggable: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".button-next-test",
    prevEl: ".button-prev-test",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper,currentClass, totalClass) {
      return `0${currentClass}/0${totalClass}`;
    },
  },
});
