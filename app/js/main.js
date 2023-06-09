// ---- ---- menu button ---- ---- //
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__items');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__items--active');
  menuBtn.classList.toggle('menu__btn--active');
});
// ---- ---- tabs ---- ---- //
const tabBtn = document.querySelectorAll('.tabs__btn-item');
const tabItem = document.querySelectorAll('.tabs__content-item');

tabBtn.forEach(function (e) {
  e.addEventListener('click', open);
});
function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;
  tabBtn.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });
  tabTarget.classList.add('tabs__btn-item--active');

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });
  document
    .querySelector(`#${button}`)
    .classList.add('tabs__content-item--active');
}

// // ---- ---- swiper ---- ---- //
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
