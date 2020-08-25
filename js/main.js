(function($) { "use strict";
   
    //IMG BACKGROUND
    function slide_bg(){
        $('.slide-img').each(function(){
            var bgSrc = $(this).attr('src');
            $(this).parent().css({'background-image':'url('+bgSrc+')'});
            $(this).remove();
        });
    }
    slide_bg();

    //MENU
    $('.menu-button').on('click', function () {
        var menu = $('.menu').slideToggle(400);
        $(this).toggleClass('active');

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

    $('.menu-home-menu').on('click', function () {
        var menuHome = $('.nav-home');
        menuHome.toggleClass('nav-home-active');

    });


    //SWIPER
    if($('.home-slider').length){
        var customerSlider = new Swiper('.home-slider',{
            pagination: '.home-pagination',
            paginationClickable: true,
            calculateHeight: true,
            mode:'vertical',
            loop: true,
            paginationElement:   'a',
            onSwiperCreated: function(){
                $('.home-pagination a').each(function(key){
                    var num = '0' + ( key + 1);
                   $(this).text(num);
                });

            }
        });
    };

    if($('.customer-slider').length){
        var customerSlider = new Swiper('.customer-slider',{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            calculateHeight: true,
            loop: true
        });
    };

    if($('.feed-slider').length){
        var feedSlider = new Swiper('.feed-slider',{
            calculateHeight: true,
            loop: true
        });
        $('.arrow-left-ico').on('click', function(e){
            e.preventDefault();
            feedSlider.swipePrev();
        });
        $('.arrow-right-ico').on('click', function(e){
            e.preventDefault();
            feedSlider.swipeNext();
        });
    };

    //TO TOP
    $('.to-top').click(function() {
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });

    //PLAY VIDEO
    $('#play').click(function(e){
        e.preventDefault();
        var srcVideo = $(this).data('src');
        setTimeout(function() {
            $('.close-video').addClass('close-video-active');
        },1000);
        $('.video').addClass('video-active').attr("src", srcVideo);
    });

    $('.close-video').on('click', function () {
        $(this).removeClass('close-video-active');
        $('.video').removeClass('video-active').attr("src", ' ');
    });

    //MAGNIFIC POPUP
    if($('.gallery-parent').length) {
        $('.gallery-parent').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {enabled: true},
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true

        });
    };

    //MIX UP
    if($('#container').length) {
    $('#container').mixItUp(
        {
            animation: {
                duration: 400,
                effects: 'fade translateZ(-360px) stagger(34ms)',
                easing: 'ease'
            }
        }
    );};

    //theme config - changing color scheme
    $('.theme-config .open').click(function(){
        $('.theme-config').toggleClass('active');
    });

    $('.theme-config .colours-wrapper .entry').click(function(){
        var newColour = $(this).attr('data-colour');
        if($(this).hasClass('active')) return false;
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('body').removeClass('colour-1 colour-2 colour-3 colour-4 colour-5 colour-6 colour-7').addClass(newColour);
    });

     $('.theme-config .colours-wrapper .bg-style').click(function(){
        var newBg = $(this).attr('data-bg');
        if($(this).hasClass('active')) return false;
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('body').removeClass('bg-1 bg-2 bg-3 bg-4 bg-5 bg-6').addClass(newBg);
    });


     //Animation
    $(window).on('scroll', function () {
        $('.animate-top').each(function () {
            var elmentPosition = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + $(window).height() > elmentPosition) {
                $(this).addClass("slideUp");
            }
        });

    });

})(jQuery);


// sadegh******************************************


