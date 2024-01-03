// header
const header =  document.querySelector('.header')
if(header) {
  window.onscroll = function() {scrollFunction(header.offsetHeight)};
  function scrollFunction(scollHeight) {
    if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
      header.classList.add('header--active')
    } else {
      header.classList.remove('header--active')
    }
  }
}
// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // about-us
  var swiper = new Swiper(".map", {
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
      }

    }
  });
  // history
  var swiper = new Swiper(".past_record", {
    slidesPerView: 8,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      1440: {
        slidesPerView: 8.2,
      },
    
      992: {
        slidesPerView: 6,
      },
      600: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
      }

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });