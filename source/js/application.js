$(document).ready(function () {
  'use strict';

  var $carousel = $('.carousel'),
      navbarHeight = $('nav').height(),
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

  $('.scroll-to').click(function(event) {
    event.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('nav').find('.nav-active').removeClass('nav-active');
    $("a[href='#" + $target.attr('id') + "']").first().addClass('nav-active');
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - navbarHeight
    }, 500, 'swing');
  });

  $(document).scroll(function () {
    var scrollPositionY = $(this).scrollTop(),
        navigationPositionY = $('#navigation').offset().top;

    if (scrollPositionY >= navigationPositionY) {
      $('nav').addClass('fixed');
      $carousel.carousel('pause');
      $('#navigation').addClass('no-background');
      $('.brand').css('display', 'block');
      $('.brand img').css('opacity', '.5');
    } else {
      $('nav').removeClass('fixed');
      $carousel.carousel();
      $('#navigation').removeClass('no-background');
      $('.brand').css('display', 'none');
      $('.brand img').css('opacity', '0');
    }
  });

  if($('#footer').length > 0) {
    $(document).scroll(function () {
      var scrollPositionY = $(this).scrollTop() + window.innerHeight,
          footerPositionY = $('#footer').position().top + $('#footer').height();

      $('footer').toggleClass('fixed', scrollPositionY >= footerPositionY);
    });
  }
});
