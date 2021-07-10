//Main Menu
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});

//Append and Prepend
$('.first ul').clone().prependTo('.main-nav').addClass('desk-hide')
$('.last ul').clone().appendTo('.main-nav').addClass('desk-hide')

$('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed:2000,
            speed:1500,
            arrows:false,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
        });

        $('.products-slider').slick({
            autoplay: false,
            autoplaySpeed:2000,
            speed:1500,
            arrows:true,
            dots:false,
            prevArrow: '',
            nextArrow: '<button class="slide-arrow slick-next custom"><img src="assets/images/next-arrow.png"></button>',
            slidesToShow:3,
            slidesToScroll:1,
            responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $("#back-to-top").addClass("show");
                } else {
                    $("#back-to-top").removeClass("show");
                }
            });
            $("#back-to-top").click(function () {
                $("body,html").animate({ scrollTop: 0 }, 800);
                return false;
            });
        });

        wow = new WOW(
              {
                animateClass: 'animated',
                offset:       100,
                mobile:       false,
                callback:     function(box) {
                  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
              }
            );
            wow.init();