// 42 Launch Page Scripts

$(window).unload(function() {
    $('body').scrollTop(0);
    $(document).scrollTop(0);
});

$(document).ready(function(){

    // On load calculations
        var transitionwidth = 980;
    // Center background
        var bgImg = $('#bg');
        var startwidth = 1200; 
        var startheight = 800;
        var ratio = startheight/startwidth;
        var imagewidth = $(this).width();
        var imageheight = $(this).height();
        var browserwidth = $(window).width();
        var browserheight = $(window).height();


    // // Height of hero image
    //     $('.signup').height(browserheight);
    //     $('header').css("top", browserheight-100);
    //     $('.content').css('top', browserheight);

    //     $('#bg').delay(50).fadeIn(600, function () {
    //             // Fade in work icons one by one
    //         $(".work-icons li").each(function(index) {
    //             $(this).delay(500+index*100).fadeIn(700);
    //         });
    //     });;



    $(document).scroll(function() {
        heightOfTop = 600;

            if ($(document).scrollTop() >= heightOfTop) {

                $('header').css('position', 'fixed');
                $('header').css('top', 0);
                $('.logo-black').fadeIn(500);

            } else {
                $('.logo-black').stop();
                $('header').css('position', 'absolute');
                $('header').css('top', heightOfTop);
                $('.logo-black').fadeOut(300);
            }
    });

});



