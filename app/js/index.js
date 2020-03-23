$('.rooms-carousel').slick({
    autoplay: true,
    speed: 1000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.carousel-room__dots')
  });
$('.btn-prev').on('click', function(){
    $('.rooms-carousel').slick('slickPrev');
})
$('.btn-next').on('click', function(){
    $('.rooms-carousel').slick('slickNext');
})
//  Review carousel
$('.review-carousel').slick({
    /* autoplay: true,
    speed: 1000,
    fade: true, */
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.carousel-review__dots')
  });
$('.btn-prev').on('click', function(){
    $('.review-carousel').slick('slickPrev');
})
$('.btn-next').on('click', function(){
    $('.review-carousel').slick('slickNext');
})
