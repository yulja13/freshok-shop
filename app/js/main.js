

$(function(){

  $('.related-slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    // centerMode: true,
    // centerPadding: '60px',
    
    speed: 3000
    // cssEase: 'linear'
  });

  // =----------------------------------------------------------------------

  $('.product-tabs__top-item').on('click', function (e) {

    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
  
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  
    });


  // ------------------------------------------------------------------------

  $('.product-slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
    
    
});

  // --------------------------------------------------------------

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function (){
      $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function (){
    $('.product-card').removeClass('product-card--list');
});

// -------------------------------------------------------------------

  $('.shop-content-select-style, .product-one__input').styler();


  $('.top-slider__inner').slick({
    
    arrows: true,
    fade: true,
    infinite: false
    // autoplay: true,
    // autoplaySpeed: 2000
    
  });

  $(".star").rateYo({
    starWidth: "16px",
    ratedFill: "#FFB800",
    maxValue: 5,
    numStars: 1
  });

  
  new SimpleBar(document.getElementById('myEl'), {
    autoHide: false,
    scrollbarMaxSize: 129
  });
  

  // var mixer = mixitup('.top-goods__items');


  $(".product-card__title").text(function(i, text) {

    if (text.length >= 50) {
      text = text.substring(0, 50);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
    }
    
    $(this).text(text);
    
  });

});