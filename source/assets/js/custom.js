// /* Monitors window resize and creates/destroys the homepage slider */
//
$(document).ready(function() {
    var width = window.innerWidth;
    $(window).resize(function(){
        var width = window.innerWidth;
        slider(width);
    });
    slider(width);
});

function slider(width) {
    if (screen.width < 768 || width < 768) // change it here
    {

                var offer = $('.offer-slider').bxSlider({
                    pager: false,
                    auto: true,
                    controls: false,
                    slideWidth: 200,
                    slideMargin: 30
                });
                 var winner = $('.winner-slider').bxSlider({
                    pager: false,
                    auto: true,
                    controls: false,
                    slideWidth: 250,
                    slideMargin: 30
                });
                var upcoming = $('.upcoming-slider').bxSlider({
                    pager: false,
                    auto: true,
                    controls: false,
                    slideWidth: 200,
                    slideMargin: 30
                });



    }

};





// $(document).ready(function(){
//     if(screen.width < 768) // change it here
//     {
//         $('.offer-slider').bxSlider({
//             pager: false,
//             auto: true,
//             controls: false,
//             slideWidth: 200,
//             slideMargin: 30
//         });
//         $('.winner-slider').bxSlider({
//             pager: false,
//             auto: true,
//             controls: false,
//             slideWidth: 250,
//             slideMargin: 30
//         });
//         $('.upcoming-slider').bxSlider({
//             pager: false,
//             auto: true,
//             controls: false,
//             slideWidth: 200,
//             slideMargin: 30
//         });
//
//     }
// });


$('.show-info').click(function() {
    if(window.innerWidth < 768 || screen.width < 768) {
        $(this).next('.lw-compare__row').slideToggle();
        $(this).find('.compare-rating').slideToggle();
        $(this).find('.more-arrow').text($(this).find('.more-arrow').text() == 'More' ? 'Less' : 'More');
    }

});


/* Blurs background image */

$(function() {
    var BLUR_RADIUS = 1;
    var canvas = document.querySelector('[data-canvas]');
    if(canvas) {
        var canvasContext = canvas.getContext('2d');
        var image = new Image();
        image.src = document.querySelector('[data-canvas-image]').src;
        var drawBlur = function () {
            var w = canvas.width;
            var h = canvas.height;
            canvasContext.drawImage(image, 0, 0, w, h);
            stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
        };
        image.onload = function () {
            drawBlur();
        }
    }
});


$(function(){
    _Ticker = $(".TickerNews").newsTicker();
});






