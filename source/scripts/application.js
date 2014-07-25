/*
 *= require './vendor/jquery-1.11.1.min'
 *= require bootstrap/affix
 *= require bootstrap/transition
 *= require bootstrap/carousel
 *= require_self
 */

function scroller() {
$('.scroll-to').click(function(event) {
    event.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing');
  });
}

$(document).ready(function() {
  scroller();

  $('#carousel-header').carousel({
    interval: 4000
  })

  $('.navbar').affix({
    offset: {
      top: 400
    }
  })
});
