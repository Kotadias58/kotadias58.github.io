$(document).ready( function() {
	let wheight = $(window).height();

	$(window).on("scroll", function() {
		var top = $(window).scrollTop();
		alert("Height: " + wheight + "- Top: " + top); 

		if ( top >= wheight) {
			$("#navbar-fixa").css("background-color", "rgba(255,255,255, 1)");
		} else {
			$("#navbar-fixa").css("background-color", "rgba(255,255,255, 0)");
		}
	});

});

