'use strict';
var subscriptionLink = document.querySelector('.button--header');
var subscriptionAncor = document.querySelector('.subscription > a');

var scrollIt = function (item) {
  item.scrollIntoView({behavior: 'smooth'});
};

subscriptionLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollIt(subscriptionAncor);
});

