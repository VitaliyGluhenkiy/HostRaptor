$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>$(window).height()){
            $('.scrolltotop').show();
        }else{
            $('.scrolltotop').hide();
        }
    });
    $('.scrolltotop').on('click', function () {
        $('body,html').animate({scrollTop: 0}, 600);
        return false;
    })
});

$('.slider-one').owlCarousel({
    loop:true,
    items: 1,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

})
$('.slider-two').owlCarousel({
    loop:true,
    items: 5,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

})


$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});
$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('.navbar-img img').addClass('mini');
    } else {
        $('.navbar-img img').removeClass('mini');
    }
});
// $(document).ready(function () {
//
//     $('.timer').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 1500,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//
// });

var show = true;
$(window).on('scroll', function ()  {
    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $('.counter').offset().top;

    console.log(w_top);
    console.log(e_top);

    if(w_top + 300 >= e_top){
        $('.timer').spincrement({
            thousandSeparator: "",
            duration: 5000
        });
        show = false;
    }
});
$(".header-navbar").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});


