$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
                slidesPerView: 1,
            },
            575: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1500: {
                spaceBetween: 180,
                slidesPerView: 3,
            },
            1600: {
                spaceBetween: 130,
                slidesPerView: 3,
            },
        },
    });

    var swiper = new Swiper(".mySwiper2", {

        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });


    if ($('select').length) {
        $('.styledselect').select2({
            // placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }


    if ($(".phoneinp").length) {
        $('.phoneinp').inputmask({
            "mask": "(999) 999-99-99",
            // showMaskOnHover: false,
            // showMaskOnFocus: false,
        });
    }

    $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });


    $('.header__language span').click(function () {
        $(this).next('ul').toggleClass('active');
    });

    $('.mainsection__left .redbtn').click(function () {
        $('.hiddentext').slideToggle();
    });

    $('.burger').click(function(){
        $(this).toggleClass('on');
        $('.header__wrapper').toggleClass('show');
        $('.menubg').toggleClass('active');
    })

})