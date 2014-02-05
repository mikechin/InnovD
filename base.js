$(window).load(function() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-47669414-1', 'innovd.com');
	ga('send', 'pageview');

	$('.button[data-action="download"]').on('click', function(event) {
		ga('send', 'event', 'button', 'click', 'download');
		window.location.href = 'assets/downloads/move+resize.zip';
	});
	$('.button[data-action="buy"]').on('click', function(event) {
		ga('send', 'event', 'button', 'click', 'buy');
		var win = window.open('https://sites.fastspring.com/innovationdistrict/instant/moveresize', '_blank');
		win.focus();
	});
	$('.link[data-action="headline"]').on('click', function(event) {
		event.preventDefault();
		ga('send', 'event', 'link', 'click', 'reddit');
		var win = window.open('http://www.reddit.com/comments/1wr678/moveresize_windows_using_multitouch_gestures_mac/', '_blank');
		win.focus();
	});
});
