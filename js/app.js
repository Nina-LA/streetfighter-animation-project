$('.ryu').mouseenter(function() {
	$('.ryu_still').hide();
	$('.ryu_ready').show();
})
.mouseleave(function() {
	$('.ryu_still').show();
	$('.ryu_ready').hide();
})
.mousedown(function() {
	playHadouken();
	// play hadouken sounds
	$('.ryu_ready').hide();
	$('.ryu_throwing').show();
	$('.hadouken').show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '600px');
	// animate hadouken to the right of the screen
		}
	);
})
.mouseup(function () {
	$('.ryu_throwing').hide();
	$('.ryu_ready').show();
})
$(document).keydown(function (event) //parameter 
// function is an event handler
// keydown is an event listener
{ 
	if(event.keyCode === 88) {
		$('.action').hide();
		$('.ryu_cool').show();
	}
})
.keyup(function (event) //parameter 
{ 
	if(event.keyCode === 88) {
		$('.action').hide();
		$('.ryu_still').show();
	}
})


function playHadouken() {
	$('#hadouken_sound')[0].volume = 0.2;
	$('#hadouken_sound')[0].load();
	$('#hadouken_sound')[0].play();
}


