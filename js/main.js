$(document).ready(function() {
// SLIDE BAR CLICK
	$('.product-sidebar li').click(function(event){
		event.preventDefault();
		$('.product-sidebar').find('li.active-sidebar').removeClass('active-sidebar');
		$(this).addClass('active-sidebar');
	});


// SLIDE MAIN
	$('.main-slide').owlCarousel({
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
    	dots: true,
    	rewind: true,
		responsive:{
	        0:{
	            items:1
	        },

    	}, 
	});

// SLIDE BRAND
	$(".brand-list").owlCarousel({
		loop: false,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
    	dots: false,
    	rewind: true,
		responsive:{
	        0:{
	            items:2
	        },
	        567:{
	            items:3
	        },
	        768:{
	            items:6
	        }
    	},
	});

	// PRODUCT SLIDE
	$('.product-slide').owlCarousel({
		nav: false,
		dots: true,
    	rewind: true,
		responsive: {
			0: {
				items:1
			},
			768: {
				items:3
			}
		}
	});

	// HOTSALE SLIDE
	$('.silde-hotsale').owlCarousel({
		nav: false,
		dots: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
    	rewind: true,
		responsive: {
			0: {
				items:1
			},
			768: {
				items:3
			}
		}
	})

});