$(document).ready(function(){"use strict";var o=$(".carousel"),e=$("nav"),t=e.height(),a=window.innerHeight-t-5;o.height(a),$(".item").height(a),$(".carousel-item").height(a),$(".logo").height(a),o.carousel(),$(".gallery a").colorbox({rel:"gal",transition:"none",maxWidth:"75%",maxHeight:"75%",scrolling:!1}),$(".scroll-to").on("click",function(o){o.preventDefault();var a=this.hash,l=$(a);e.find(".nav-active").removeClass("nav-active"),e.find('a[href="/#'+l.attr("id")+'"]').addClass("nav-active"),$("html, body").stop().animate({scrollTop:l.offset().top-t},500,"swing")}),$(".toggler").on("click",function(){$("nav .content").toggleClass("collapse"),$(this).css("opacity",1),$(window).scrollTop()<=219&&$("html, body").stop().animate({scrollTop:219},500,"swing"),$(".collapse").length>0&&$("nav a").on("click",function(){$(".collapse").removeClass("collapse")})}),$(document).on("scroll",function(){var t=$(this).scrollTop(),a=$("#navigation").offset().top,l=$("#navigation"),s=$(".brand");t>=a?(e.addClass("fixed"),o.carousel("pause"),l.addClass("no-background"),s.addClass("visible")):(e.removeClass("fixed"),o.carousel(),l.removeClass("no-background"),s.removeClass("visible"))}),$("#footer").length>0&&$(document).on("scroll",function(){var o=$(this).scrollTop()+window.innerHeight,e=$("#footer").position().top+$("#footer").height();$("footer").toggleClass("fixed",o>=e)})});