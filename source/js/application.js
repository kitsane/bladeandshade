$(document).ready(function () {
  'use strict';

  var $carousel = $('.carousel'),
      $nav = $('nav'),
      navbarHeight = $nav.height(),
      windowHeight = window.innerHeight - navbarHeight;

  $carousel.height(windowHeight);
  $('.item').height(windowHeight);
  $('.carousel-item').height(windowHeight);
  $('.logo').height(windowHeight);

  $carousel.carousel();

  $('.gallery a').colorbox({
    rel:'gal',
    transition:"none",
    maxWidth:"75%",
    maxHeight:"75%",
    scrolling: false
  });

  $('.scroll-to').on('click', function(event) {
    event.preventDefault();

    var target = this.hash,
        $target = $(target);

    $nav.find('.nav-active').removeClass('nav-active')
    $nav.find('a[href="/#' + $target.attr('id') + '"]').addClass('nav-active')

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - navbarHeight
    }, 500, 'swing');
  });

  $(document).on('scroll', function () {
    var scrollPositionY = $(this).scrollTop(),
        navigationPositionY = $('#navigation').offset().top,
        $navigation = $('#navigation'),
        $brand = $('.brand')

    if (scrollPositionY >= navigationPositionY) {
      $nav.addClass('fixed');
      $carousel.carousel('pause');
      $navigation.addClass('no-background');
      $brand.addClass('visible');
    } else {
      $nav.removeClass('fixed');
      $carousel.carousel();
      $navigation.removeClass('no-background');
      $brand.removeClass('visible');
    }
  });

  if($('#footer').length > 0) {
    $(document).on('scroll', function () {
      var scrollPositionY = $(this).scrollTop() + window.innerHeight,
          footerPositionY = $('#footer').position().top + $('#footer').height();

      $('footer').toggleClass('fixed', scrollPositionY >= footerPositionY);
    });
  }
});
