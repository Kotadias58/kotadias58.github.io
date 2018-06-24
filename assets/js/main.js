$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();
		//alert("Height: " + wheight + " - Top: " + top); 

		if (top >= wheight) {
			$(".bg-dark").css("background-color", "rgba(255,255,255, 1) !important");
			alert("Top é maior ou igual a Height " + wheight + " - " +top); 
		} else {
			$(".bg-dark").css("background-color", "rgba(255,255,255, 0) !important");
			alert("Top é menos que Height: " + wheight + " - " +top); 
		}
	});

});

