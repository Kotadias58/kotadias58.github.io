$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();

		if (top >= wheight) {
			$(".navbar-dark").removeClass("bg-transparent");
			$(".navbar-dark").addClass("bg-dark");
			$(".main-menu").css("background-color", "rgba(0,0,0, 1)");
		} else {
			$(".navbar-dark").removeClass("bg-dark");
			$(".navbar-dark").addClass("bg-transparent");
			$(".main-menu").css("background-color", "rgba(0,0,0, 0)");
		}
	});

});

