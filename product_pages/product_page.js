$(document).ready(function(){

	$('color-choose input').on('click',function() {
		var hatColor = $(this).attr('data-image');

		$('.active').removeClass('active');
		$('.left-column img[data-image = ' + hatColor + ' ] ').addClass('active');
		$(this).addClass('active');
	});
});