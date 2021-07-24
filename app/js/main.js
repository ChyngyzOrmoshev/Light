$(document).ready(function () {
  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    appendArrows: $(".h2__arrows"),
  });
  $(".catalog").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    appendArrows: $(".catalog__link"),
    infinite: false,
  });
  $(".rent__item").slick({
    slidesToShow: 1,
    speed: 1000,
    appendArrows: $(".rent__arrows"),
  });
});
