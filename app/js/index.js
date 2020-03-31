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
$('.carousel__room-prev').on('click', function(){
    $('.rooms-carousel').slick('slickPrev');
})
$('.carousel__room-next').on('click', function(){
    $('.rooms-carousel').slick('slickNext');
})
//  Review carousel
$('.review-carousel').slick({
    /* autoplay: true,
    speed: 1000,
    fade: true, */
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.carousel-review__dots')
  });
$('.carousel__review-prev').on('click', function(){
    $('.review-carousel').slick('slickPrev');
})
$('.carousel__review-next').on('click', function(){
    $('.review-carousel').slick('slickNext');
})
const mapHeight = $('.map').height();
$('.map-frame').css('height', mapHeight);