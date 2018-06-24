$(document).ready( function() {
	var wheight = $(window).height();

	$(window).scroll(function() {
		var top = $(window).scrollTop(); 

		if ( top >= wheight) {
			$("#navbar-fixa").css("background-color", "rgba(255,255,255, 1)");
		} else {
			$("#navbar-fixa").css("background-color", "rgba(255,255,255, 0)");
		}
	});

});

