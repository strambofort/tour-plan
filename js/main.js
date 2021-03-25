$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var mobileMenu = $(".menu-button");
  mobileMenu.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});

// Обработка форм
$(".modal__input_tel").mask("+0 (000) 000-00-00");
$(".footer__input_tel").mask("+0 (000) 000-00-00");
// Вариант с одной записью
// $(".form").each(function () {
//   $(this).validate({
//     errorClass: "invalid",
//     messages: {
//       name: {
//         required: "Please specify your name",
//         minlength: "At least 2 letters",
//       },
//       email: {
//         required: "We need your email address",
//         email: "Use form name@mail.ru",
//       },
//       phone: {
//         required: "Telephone required ",
//         minlength: "At least 11 letters",
//       },
//     },
//   });
// });
// Вариант с тремя записями
$(".modal__form").validate({
  errorClass: "invalid-modal",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "At least 2 letters",
    },
    email: {
      required: "Your email address",
      email: "Format: name@domain.ru",
    },
    phone: {
      required: "Telephone required",
      minlength: "At least 11 letters",
    },
  },
});

$(".form").validate({
  errorClass: "invalid",
  messages: {
    email: {
      required: "Your email address",
      email: "Format: name@domain.ru",
    },
  },
});

$(".footer__form").validate({
  errorClass: "invalid-footer",
  messages: {
    email: {
      required: "Your email address",
      email: "Format: name@domain.ru",
    },
    name: {
      required: "Please specify your name",
      minlength: "At least 2 letters",
    },
  },
});

AOS.init({
  disable: "mobile",
});
