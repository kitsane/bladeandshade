$(document).ready(function() {
  var $carousel = $('.carousel')

  $carousel.height(window.innerHeight-70)
  $('.item').height(window.innerHeight-70)
  $('.carousel-item').height(window.innerHeight-70)
  $('.logo').height(window.innerHeight-70)

  $carousel.carousel()

  $('.gallery a').colorbox({rel:'gal', transition:"none", maxWidth:"75%", maxHeight:"75%", scrolling: false})

  $('.scroll-to').click(function(event) {
    event.preventDefault()

    var target = this.hash
    var $target = $(target)

    $('nav').find('.nav-active').removeClass('nav-active')
    $("a[href='#"+$target.attr('id')+"']").first().addClass('nav-active')
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-70
    }, 500, 'swing')
  })

  $(document).scroll(function () {
    var scrollPositionY = $(this).scrollTop()
    var navigationPositionY = $('#navigation').offset().top

    if (scrollPositionY >= navigationPositionY) {
      $('nav').addClass('fixed-top')
      $carousel.carousel('pause')
      $('#navigation').addClass('no-background')
      $('.brand img').css('opacity', '1')
    } else {
      $('nav').removeClass('fixed-top')
      $carousel.carousel()
      $('#navigation').removeClass('no-background')
      $('.brand img').css('opacity', '0')
    }
  })

  if($('#footer').length > 0) {
    $(document).scroll(function () {
      var scrollPositionY = $(this).scrollTop() + window.innerHeight
      var footerPositionY = $('#footer').position().top+$('#footer').height()

      if (scrollPositionY >= footerPositionY) {
        $('footer').addClass('fixed-bottom')
      } else {
        $('footer').removeClass('fixed-bottom')
      }
    })
  }
})
