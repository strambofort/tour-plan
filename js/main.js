const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
ymaps.ready(function () {
  // Указывается идентификатор HTML-элемента.
  var hotel_map = new ymaps.Map("map", {
    center: [6.93, 79.84],
    zoom: 10,
  });
});
