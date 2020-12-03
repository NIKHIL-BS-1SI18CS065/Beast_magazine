
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        if ($('#back-to-top').length) {
          var scrollTrigger = 100, // px
              backToTop = function () {
                  var scrollTop = $(window).scrollTop();
                  if (scrollTop > scrollTrigger) {
                      $('#back-to-top').addClass('show');
                  } else {
                      $('#back-to-top').removeClass('show');
                  }
              };
          backToTop();
          $(window).on('scroll', function () {
              backToTop();
          });
          $('#back-to-top').on('click', function (e) {
              e.preventDefault();
              $('html,body').animate({
                  scrollTop: 0
              }, 700);
          });
      }

      $('.scrolltocomments').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
                scrollTop: $("#disqus_thread").offset().top
          }, 700);
      });

$('#menu').slicknav();

      // site preloader -- also uncomment the div in the header and the css style for #preloader
      $(window).load(function(){
      	$('#preloader').fadeOut('fast',function(){$(this).remove();});
      });


    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
