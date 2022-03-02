$(function(){
    AOS.init();

    $(function(){
        $('.ham').on('click', function(){
            $('.gnb').toggleClass('on')
        })
    })
    var swiper1 = new Swiper(".notice1", {
        navigation: {
            nextEl: ".next1",
            prevEl: ".prev1",
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    v
    var swiper2 = new Swiper(".notice2", {
        navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    var swiper3 = new Swiper(".notice3", {
        navigation: {
            nextEl: ".next3",
            prevEl: ".prev3",
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

})