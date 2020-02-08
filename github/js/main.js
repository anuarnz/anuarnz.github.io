$(function () {

  $('.funnytext').funnyText({
    speed: 700,
    direction: 'both'
  });

  var typed = new Typed('.typed-write', {
    strings: ["я Web-разработчик.", "я Web-разработчик."],
    typeSpeed: 60,
    startDelay: 5000,
    backdelay: 500,
    backSpeed: 35,
  });

  new WOW().init();

  // mobile-burger
  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
  });

  // spoiler
  $('.spoiler__title').click(function (event) {
    if ($('.spoiler').hasClass('one')) {
      $('.spoiler__title').not($(this)).removeClass('active');
      $('.spoiler__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  // page-scroll-to-id
  $(window).on("load", function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
      scrollSpeed: 900,
      scrollingEasing: "easeInOutQuint",
    });
  });

  // $("#portfolio-flip").click(function () {
  //   $(this).toggleClass("portfolio-col");
  // }); //portfolio при нажатии на карточку

});