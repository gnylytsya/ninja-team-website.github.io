$('#mainCarousel').carousel({
	interval: 3000
});

/* lightbox   */

lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true,
	showImageNumberLabel: false,
});

/*  Mixit Up  */

var portfolioContent = $('.portfolio-content');

portfolioContent.mixItUp();
// map
var map = new GMaps({
	el: '#map',
	lat: -12.043333,
	lng: -77.028333
});