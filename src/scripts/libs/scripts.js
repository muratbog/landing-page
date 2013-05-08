
;(function() {

  $(window).unload(function() {
    $('body').scrollTop(0);
    $(document).scrollTop(0);
  });

  $(function() {
    var $header    = $('body > header')
      , $logo      = $header.find('.logo-black')
      , $document  = $(document);

    $header.css('bottom', 0);
    $logo.hide();

    $document.scroll(function() {
      var scrollTop  = $document.scrollTop();
      var breakpoint = $('.splash').height() - $header.height();

      if (scrollTop >= (breakpoint / 3) + 20) {
        $logo.fadeIn(150);
      } else {
        $logo.fadeOut(200);
      }

      if (scrollTop >= breakpoint) {
        $header.css({position: 'fixed', top:0, bottom: ''});
      } else {
        $header.css({position:'absolute', top:'', bottom:0});
      }

    });
  });

})();
