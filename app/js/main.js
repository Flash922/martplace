$(document).ready(function (){

  $('.slider__container').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('.slider__header-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-left"><i class="chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-right"><i class="chevron-right" aria-hidden="true"></i></button>'
  });

  $('.slider__container-2').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.slider__header-arrow2'),
            prevArrow: '<button id="prev" type="button" class="btn btn-left"><i class="chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-right"><i class="chevron-right" aria-hidden="true"></i></button>'
  });
  
  $(".slider-rating").rateYo({
    rating: 3.6,
    starWidth: "17px"
  });
});