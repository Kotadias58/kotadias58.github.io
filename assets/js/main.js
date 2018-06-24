$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();

		if (top >= wheight) {
			$(".navbar-dark, .main-menu").removeClass("bg-transparent");
			$(".navbar-dark, .main-menu").addClass("bg-dark");
		} else {
			$(".navbar-dark, .main-manu").removeClass("bg-dark");
			$(".navbar-darkm ,main-menu").addClass("bg-transparent");
		}
	});

});

