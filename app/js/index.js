$('.rooms-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
$('.btn-prev').on('click', function(){
    $('.rooms-carousel').slick('slickPrev');
})
$('.btn-next').on('click', function(){
    $('.rooms-carousel').slick('slickNext');
})