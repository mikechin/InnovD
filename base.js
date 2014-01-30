$(window).load(function() {
	$('.button[data-action="download"]').on('click', function(event) {
		console.log('download');
		window.location.href = 'assets/downloads/move+resize.dmg';
	});
});
