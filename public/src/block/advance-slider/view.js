jQuery(document).ready(function($) {
    var sliderParams = window.slider_params || {}; // Handle case where slider_params might be undefined

    console.log(sliderParams);
    $('.vayu-blocks-advance-slider').slick({
        dots: sliderParams.dotslength <= 1 || !sliderParams.dots_show ? false : true,
        infinite: sliderParams.infinite === 'true',
        speed: parseInt(sliderParams.speed, 10),
        slidesToScroll: parseInt(sliderParams.slidesToScroll, 10),
        rows: parseInt(sliderParams.slidesPerRow, 10),
        centerMode: sliderParams.centerMode === 'true',
        fade: sliderParams.fade === 'true',
        waitForAnimate: sliderParams.waitForAnimate === 'true',
        lazyLoad: sliderParams.lazyLoad === 'true',
        autoplay: sliderParams.autoplay === 'true',
        autoplaySpeed: parseInt(sliderParams.autoplaySpeed, 10),
        cssEase: 'linear',
        pauseOnHover: sliderParams.pauseOnHover === 'true',
        focusOnSelect: sliderParams.focusOnSelect === 'true',
        centerPadding: '60px',
        initialSlide: parseInt(sliderParams.initialSlide, 10),
        arrows: sliderParams.arrows === 'true',
        appendDots: $('.vayu-blocks-advance-slider'),
        slidesToShow: parseInt(sliderParams.slidesToShow, 10),
        swipe: sliderParams.swipe === 'true',
    });

    // Determine animation class
    var animationClass = '';
    switch (sliderParams.animationtype) {
        case 'animation1':
            animationClass = 'vayu-blocks-animate-on-slide';
            break;
        case 'animation2':
            animationClass = 'vayu-blocks-animate-on-slide-down';
            break;
        case 'animation3':
            animationClass = 'vayu-blocks-animate-on-slide-left';
            break;
        case 'animation4':
            animationClass = 'vayu-blocks-animate-on-slide-right';
            break;
    }

    // Add animation class to the active slide
    $('.slick-slide.slick-active').each(function() {
        $(this).find('.vayu_blocks_heading, .vayu_blocks_sub_heading, .vayu_blocks_slider_button1, .vayu_blocks_slider_button2').addClass(animationClass);
    });

    // Remove animation class before slide change
    $('.vayu-blocks-advance-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-slide .vayu_blocks_heading, .slick-slide .vayu_blocks_sub_heading, .slick-slide .vayu_blocks_slider_button1, .slick-slide .vayu_blocks_slider_button2').removeClass(animationClass);
    });

    // Add animation class after slide change
    $('.vayu-blocks-advance-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.slick-slide.slick-active').each(function() {
            $(this).find('.vayu_blocks_heading, .vayu_blocks_sub_heading, .vayu_blocks_slider_button1, .vayu_blocks_slider_button2').addClass(animationClass);
        });
    });
});
