
(function ($) {
    "use strict";
    jQuery(document).ready(function($){

         // slik slider start here 

		 $('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "992",
		
			});  
         // slick slider
			$('.blogSlider').slick({
				dots: false,
				autoplay: true,
				infinite: true,
				button: true,				
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
				  {
					breakpoint: 1140,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2,
					  infinite: true,
					  button: true,					  
					}
				  },
				  {
					breakpoint: 960,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2,
					  button: true,
					}
				  },
				  {
					breakpoint: 720,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					  button: true,
					}
				  }
				  // You can unslick at a given breakpoint now by adding:
				  // settings: "unslick"
				  // instead of a settings object
				]
			  });

			  
          // slik slider end here 
		  $(".menu-trigger").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
            return false;
        });
        $(".menu-close, .off-canvar-overlay").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
            return false;
        }); 
		
		  
        

      
    }); 

}(jQuery));





























      