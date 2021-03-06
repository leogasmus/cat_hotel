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
    appendDots: $('.carousel-review__dots'),
    responsive: [
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 1.8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
$('.carousel__review-prev').on('click', function(){
    $('.review-carousel').slick('slickPrev');
})
$('.carousel__review-next').on('click', function(){
    $('.review-carousel').slick('slickNext');
})
const mapHeight = $('.map-info').height();
$('.map-frame').css('height', Math.floor(mapHeight-1) + 'px');