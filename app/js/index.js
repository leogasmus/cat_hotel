$('.rooms-carousel').slick({
    autoplay: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.carousel-dots')
  });
$('.btn-prev').on('click', function(){
    $('.rooms-carousel').slick('slickPrev');
})
$('.btn-next').on('click', function(){
    $('.rooms-carousel').slick('slickNext');
})
//  Review carousel
