$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();
		//alert("Height: " + wheight + " - Top: " + top); 

		if (top >= wheight) {
			$(".navbar-dark").removeClass("bg-transparent");
			$(".navbar-dark").addClass("bg-dark");
			alert("Top é maior ou igual a Height " + wheight + " - " +top); 
		} else {
			$(".navbar-dark").removeClass("bg-dark");
			$(".navbar-dark").addClass("bg-transparent");
			alert("Top é menos que Height: " + wheight + " - " +top); 
		}
	});

});

