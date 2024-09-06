/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/block/advance-slider/view.js ***!
  \******************************************/
jQuery(document).ready(function ($) {
  $('.vayu-blocks-advance-slider').each(function () {
    var slider = $(this);
    var sliderParams = {
      uniqueId: slider.data('unique-id'),
      dotslength: slider.data('dots-length'),
      dots_show: slider.data('dots-show'),
      infinite: slider.data('infinite'),
      speed: slider.data('speed'),
      slidesToScroll: slider.data('slides-to-scroll'),
      rows: slider.data('slides-per-row'),
      centerMode: slider.data('center-mode'),
      fade: slider.data('fade'),
      waitForAnimate: slider.data('wait-for-animate'),
      lazyLoad: slider.data('lazy-load'),
      autoplay: slider.data('autoplay'),
      autoplaySpeed: slider.data('autoplay-speed'),
      pauseOnHover: slider.data('pause-on-hover'),
      focusOnSelect: slider.data('focus-on-select'),
      rtl: slider.data('rtl'),
      arrows: slider.data('arrows'),
      swipe: slider.data('swipe'),
      animationtype: slider.data('animation-type'),
      slidesToShow: slider.data('slides-to-show'),
      initialSlide: slider.data('initial-slide')
    };

    // Initialize slick for each slider instance
    slider.slick({
      dots: sliderParams.dotslength <= 1 || !sliderParams.dots_show ? false : true,
      infinite: sliderParams.infinite,
      speed: sliderParams.speed,
      slidesToScroll: sliderParams.slidesToScroll,
      rows: sliderParams.rows,
      centerMode: sliderParams.centerMode,
      fade: sliderParams.fade,
      waitForAnimate: sliderParams.waitForAnimate,
      lazyLoad: sliderParams.lazyLoad,
      autoplay: sliderParams.autoplay,
      autoplaySpeed: sliderParams.autoplaySpeed,
      cssEase: 'linear',
      pauseOnHover: sliderParams.pauseOnHover,
      focusOnSelect: sliderParams.focusOnSelect,
      centerPadding: '60px',
      initialSlide: sliderParams.initialSlide,
      arrows: sliderParams.arrows,
      appendDots: slider,
      slidesToShow: sliderParams.slidesToShow,
      swipe: sliderParams.swipe
    });

    // Determine animation class based on sliderParams
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
    $('.slick-slide.slick-active').each(function () {
      $(this).find('.vayu_blocks_heading, .vayu_blocks_sub_heading, .vayu_blocks_slider_button1, .vayu_blocks_slider_button2').addClass(animationClass);
    });

    // Add animation class to the active slide
    slider.on('afterChange', function (event, slick, currentSlide) {
      slider.find('.slick-slide.slick-active').each(function () {
        $(this).find('.vayu_blocks_heading, .vayu_blocks_sub_heading, .vayu_blocks_slider_button1, .vayu_blocks_slider_button2').addClass(animationClass);
      });
    });

    // Remove animation class before slide change
    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      slider.find('.slick-slide .vayu_blocks_heading, .slick-slide .vayu_blocks_sub_heading, .slick-slide .vayu_blocks_slider_button1, .slick-slide .vayu_blocks_slider_button2').removeClass(animationClass);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view-grid.js.map