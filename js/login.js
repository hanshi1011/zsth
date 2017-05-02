// JavaScript Document

$(document).ready(function() {
    $('.enroll').click(function(){
		$('#register').fadeIn(400);
		$('#login').fadeOut(0);
	});
	
	$('.landing').click(function(){
		$('#register').fadeOut(0);
		$('#login').fadeIn(400);
	});
});
