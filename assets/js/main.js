// ==================== Navbar Toogler =====================

let navbarToogler = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.navbar');

navbarToogler.addEventListener('click', function() {
   navbar.classList.toggle('bg-black-back')
})


// ======================== Navbar On Scroll ======================

window.addEventListener('scroll', function() {
  let header = document.querySelector('.navbar');
  header.classList.toggle('nav-scroll', window.scrollY > 5)
})


/*==================== First  Swiper On Landing Page  ====================*/
let swiper = new Swiper(".slider-1", {
  slidesPerView: 2.5,
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    
    300: {
      slidesPerView: 2.5,
      centeredSlides: true,
      spaceBetween: 100,
    },
    700: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 2.5,
    }
    
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  }
});

/*==================== Second Swiper On Landing Page  ====================*/

let secondLandSwiper = new Swiper(".slider-landing", {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: ".button-next-ln",
    prevEl: ".button-prev-ln",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3
    },
    300: {
      slidesPerView: 2
    },
  }
});

/* ==================== Inspired =====================  */

let secondSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
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

/* ======================  Get Inspired =============== */

let thirdSwiper = new Swiper(".slider-3", {
  slidesPerView: 2,
  draggable: true,
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1.2
    },
  },
});
