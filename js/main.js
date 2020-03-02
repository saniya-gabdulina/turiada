$(document).ready(function () {


    //initialize swiper when document ready
    var bonusSlide = new Swiper('#bonus-slide', {
        loop: true, 
        slidesPerView: 2,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })


    // next.css('left', prev.width() + 10 + bulllets.width() + 10)
    // bulllets.css('left', prev.width() + 10)

});