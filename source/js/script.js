'use strict';

import smoothscroll from 'smoothscroll-polyfill';
import Swiper from "swiper";
import IMask from "imask";

smoothscroll.polyfill();

var subscriptionLink = document.querySelector('.button--header');
var subscriptionAncor = document.querySelector('.subscription > a');

var scrollIt = function (item) {
  item.scrollIntoView({behavior: 'smooth'});
};

subscriptionLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollIt(subscriptionAncor);
});

window.addEventListener(`load`, () => {
  var sliderBlock = document.querySelector('.coaches__container');
  if (sliderBlock) {
    var mainSlider = new Swiper('.coaches__container', {
      loop: true,
      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1210: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }

  var slideReviewsrBlock = document.querySelector(`.feedback__wrapper`);
  if (slideReviewsrBlock) {
    var reviewsSlider = new Swiper(`.feedback__wrapper`, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 57,
      navigation: {
        nextEl: `.feedback__button--next`,
        prevEl: `.feedback__button--prev`
      },
      breakpoints: {
        320: {
          spaceBetween: 33
        },
        768: {
          spaceBetween: 57
        },
        1200: {
          spaceBetween: 80
        }
      }
    });
  }

  var phoneMask = document.querySelector('.free__form-tel');
  if (phoneMask) {
    var validatePhone = new IMask(phoneMask, {
      mask: '+{7}(000)000-00-00'
    });
  }
});
