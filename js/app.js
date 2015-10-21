$('.ryu').mouseenter(function() {
	$('.ryu_still').hide();
	$('.ryu_ready').show();
})
.mouseleave(function() {
	$('.ryu_still').show();
	$('.ryu_ready').hide();
})
.mousedown(function() {
	// play hadouken sounds
	$('.ryu_ready').hide();
	$('.ryu_throwing').show();
	$('.hadouken').show();
	// show hadouken and animate it to the right of the screen
})
.mouseup(function () {
	$('.ryu_throwing').hide();
	$('.ryu_ready').show();
})