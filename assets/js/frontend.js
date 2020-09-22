// FUNCIONES
// 2.0
// Declaramos "addCar" que recibe un objeto "restaurant" desde la función "renderRestaurants";


// jQuery
$(document).ready(function(){
    // Loadmore
    setTimeout(function(){
        $('#js-restaurant-item').simpleLoadMore({
            item:'.col-lg-4',
            itemsToLoad: 6,
            count: 6,
            btnHTML:'<a href="#" class="btn btn--type1 load-more__btn">Ver más</a>'
      });
      // Loader
    $(".js-loader").fadeOut();
    },1500);
    // Scrolltop
    $(".js-scroll-top").click(function(e) {
        e.preventDefaul();
        $('html, body').animate({scrollTop : 0},800);
		return false;
    });
    $(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.js-scroll-top').fadeIn();
		} else {
			$('.js-scroll-top').fadeOut();
		}
    });
    
});

    
