$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    arrows: true,
    infinite: true,
    prevArrow: "<div class='arrow arrow-previous'><img src='img/testimonials/arrows/arrow-left-active.svg' alt='' /><p class='arrow-text'>Previous</p></div>",
    nextArrow: "<div class='arrow arrow-next'><p class='arrow-text'>Next</p><img src='img/testimonials/arrows/arrow-right-active.svg' alt='' /></div>"
    });
  });
  