

$(function(){


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
    numStars: 1,
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