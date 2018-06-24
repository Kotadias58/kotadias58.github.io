$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();

		if (top >= wheight) {
			$(".navbar-dark").removeClass("bg-transparent");
			$(".navbar-dark").addClass("bg-dark");
		} else {
			$(".navbar-dark").removeClass("bg-dark");
			$(".navbar-dark").addClass("bg-transparent");
		}
	});

});

