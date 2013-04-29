// 42 Launch Page Scripts

$(window).unload(function() {
  $('body').scrollTop(0);
  $(document).scrollTop(0);
});

$(document).ready(function(){
  $('.logo-black').hide();

  $(document).scroll(function() {
    heightOfTop = 525;

      if ($(document).scrollTop() >= heightOfTop) {

        $('.signup').css('position', 'fixed');
        $('.signup').css('top', 0);
        $('.logo-black').fadeIn(200);

      } else {
        $('.logo-black').stop();
        $('.signup').css('position', 'absolute');
        $('.signup').css('top', heightOfTop);
        $('.logo-black').fadeOut(25);
    }
  });
});



