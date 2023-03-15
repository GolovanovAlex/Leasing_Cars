const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
