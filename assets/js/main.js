$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		let top = $(window).scrollTop();
		//alert("Height: " + wheight + " - Top: " + top); 

		if (top >= wheight) {
			$(".bg-dark").css("background-color", "rgba(255,255,255, 1)");
			alert("Height: " + wheight + " - Top: " + top); 
		} else {
			$(".bg-dark").css("background-color", "rgba(255,255,255, 0)");
			alert("Height: " + wheight + " - Top: " + top); 
		}
	});

});

