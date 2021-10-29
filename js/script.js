$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$('li.phone .phone__btn').click(function(event) {
		$('.sub-phone,li.phone').toggleClass('active')
	})
});