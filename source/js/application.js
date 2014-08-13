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
  $('.carousel').carousel({
    interval: 4000
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

$(window).bind("load", function() {
  $('nav').affix({
    offset: { top: function () {
        return (this.top = $('.carousel').height())
      }
    }
  })

  $(document).scroll(function () {
    var scrollPositionY = $(this).scrollTop() + window.innerHeight
    var footerPosition = $('footer').position().top+$('footer'). height()

    if (scrollPositionY >= footerPosition) {
      $('.footer').addClass('fixed')
    } else {
      $('.footer').removeClass('fixed')
    }
  });
});
