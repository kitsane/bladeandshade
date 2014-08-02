/*
 *= require './vendor/jquery-1.11.1.min'
 *= require bootstrap/affix
 *= require bootstrap/scrollspy
 *= require bootstrap/transition
 *= require bootstrap/collapse
 *= require bootstrap/carousel
 *= require_self
 */

$(document).ready(function() {
  $('#carousel-header').carousel({
    interval: 4000
  })
  $('nav').affix({
    offset: { top: 400 }
  })
  $('body').scrollspy({
    target: '.navbar'
  });

  $('.scroll-to').click(function(event) {
    event.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing');

    $('body').each(function () {
      $(this).scrollspy('refresh');
    });
  });
});
