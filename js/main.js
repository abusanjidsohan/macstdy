(function ($) {
"use strict";

	// meanmenu/mobile responsive
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767"
	});

	// counter
	$('.register-counter').counterUp({
		delay: 10,
		time: 10000,
	});

	// slick slider testimonial
	$('.testimonial-active').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 1000,
		dots: false,
		arrows: false,
		responsive: [
		  {
			breakpoint: 1199,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '60px',
			  slidesToShow: 2,
			  slidesToScroll: 1,
			},
			
		  },
		  {
			breakpoint: 991,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 2,
			  slidesToScroll: 1,
			},
			
		  },
		  {
			breakpoint: 767,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '50px',
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '20px',
			  slidesToShow: 1,
			slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 575,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1,
			  slidesToScroll: 1,
			}
		  }
		]
	  });


	  // slick slider brand
	  $('.brand-active').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1199,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			}
		  },
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);