$(document).ready(function(){

	$('body').fadeIn('slow');
	
	var buttonRedirect = $('.btn-redirect');
	buttonRedirect.click(function(){
		window.location = 'http://www.google.com';
	});

	var facebookRedirect = $('.fa-facebook-official');
	facebookRedirect.click(function(){
		window.location = 'https://www.facebook.com/';
	});

	var twitterRedirect = $('.fa-twitter-square');
	twitterRedirect.click(function(){
		window.location = 'https://twitter.com/';
	});

	var linkedinRedirect = $('.fa-linkedin-square');
	linkedinRedirect.click(function(){
		window.location = 'https://www.linkedin.com/uas/login';
	});

	$('.nav a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});