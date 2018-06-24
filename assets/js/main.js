$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();

		if (top > 100) /*wheight*/ {
			$(".navbar-dark").removeClass("bg-transparent");
			$(".navbar-dark").addClass("bg-dark");
		} else {
			$(".navbar-dark").removeClass("bg-dark");
			$(".navbar-dark").addClass("bg-transparent");
		}
	});

});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      alert("TARGET: " + target);
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbar-fixa',
    offset: 54
  });

})(jQuery); // End of use strict


