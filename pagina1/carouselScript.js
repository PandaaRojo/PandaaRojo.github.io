$(document).ready(function(){
    $('#latest-released-slide').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000, // Tiempo en milisegundos entre cada cambio de slide
       prevArrow: '<button type="button" class="slick-prev">Previous</button>',
       nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});