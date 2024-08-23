jQuery(document).ready(function($) {
    $('.your-slider-class').slick({
        dots: true,           // Show dot navigation
        infinite: true,       // Infinite loop
        speed: 300,           // Transition speed
        slidesToShow: 1,      // Number of slides to show
        slidesToScroll: 1,    // Number of slides to scroll at a time
        autoplay: true,       // Autoplay the slides
        autoplaySpeed: 2000,  // Autoplay speed
        arrows: true,         // Show next/prev arrows
    });
});
