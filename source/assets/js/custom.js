// /* Monitors window resize and creates/destroys the homepage slider */
//
// $(document).ready(function() {
//     var width = window.innerWidth;
//     $(window).resize(function(){
//         var width = window.innerWidth;
//         slider(width);
//     });
//     slider(width);
// });
//
// function slider()
// {
//     if(screen.width < 768) // change it here
//     {
//         if(window.sldr==undefined)
//         {
//             window.sldr=$('.offer-slider').bxSlider({
//                 pager: false,
//                 auto: true,
//                 controls: false,
//                 slideWidth: 200,
//                 slideMargin: 30,
//             });
//
//
//             window.sldr=$('.winner-slider').bxSlider({
//                 pager: false,
//                 auto: true,
//                 controls: false,
//                 slideWidth: 200,
//                 slideMargin: 30,
//             });
//         }
//
//     } else
//     {
//         if(window.sldr!=undefined)
//         {
//             window.sldr.destroySlider();
//             window.sldr = undefined;
//         }
//     }
// }


$(document).ready(function(){
    if(screen.width < 768) // change it here
    {
        $('.offer-slider').bxSlider({
            pager: false,
            auto: true,
            controls: false,
            slideWidth: 200,
            slideMargin: 30
        });
        $('.winner-slider').bxSlider({
            pager: false,
            auto: true,
            controls: false,
            slideWidth: 200,
            slideMargin: 30
        });

    }
});


