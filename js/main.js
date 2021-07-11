$(document).ready(function () {
     // Start Navbar 

     $('.overlay').fadeOut();

     $(".mob-collaps").click(function () {
         $(this).parents('nav').find("ul").toggleClass('open-nav');
         $('.overlay').fadeToggle();
         $(this).find("span:first-child").toggleClass('rotate');
         $(this).find("span:nth-child(2)").toggleClass('none');
         $(this).find("span:nth-child(3)").toggleClass('rotate2');
     });
 
     $(".overlay").click(function () {
         $("nav ul").removeClass('open-nav');
         $(this).fadeOut();
         $(".mob-collaps span:first-child").removeClass('rotate');
         $(".mob-collaps span:nth-child(2)").removeClass('none');
         $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
     });
    //team slider
    $('.team .owl-carousel').owlCarousel({
        loop:false ,
        margin:15,
        nav:true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            461:{
                items:2
            },
            767:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    //client slider
    $('.client .owl-carousel').owlCarousel({
        touchDrag: false,
        mouseDrag: false,
        loop:false ,
        margin:15,
        nav:true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            461:{
                items:1
            },
            767:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});
//loader
$(window).on('load', function () {
    $("#preloader_6").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    })
});

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
