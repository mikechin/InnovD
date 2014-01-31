$(window).load(function() {
	$('.button[data-action="download"]').on('click', function(event) {
		window.location.href = 'assets/downloads/move+resize.zip';
	});
	$('.button[data-action="buy"]').on('click', function(event) {
		var win = window.open('https://sites.fastspring.com/innovationdistrict/instant/moveresize', '_blank');
		win.focus();
	});
});
