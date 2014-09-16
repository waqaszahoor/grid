$('.gridlinesToggle').on("click", function () {
    $('.gridlines').toggle();
});

$('.fullGridToggle').on("click", function () {
	var $grid = $('.grid');
	if(!$grid.hasClass('full')){
		$('.grid').addClass('full');
		$('.inside').addClass('full');
	};
});

$('.marginGridToggle').on("click", function () {
	var $grid = $('.grid');
	if($grid.hasClass('full')){
		$('.grid').removeClass('full');
		$('.inside').removeClass('full');
	};
});

$('.headersToggle').on("click", function () {
    $('.fullGridDemo h1, .fullGridDemo h2, .fullGridDemo h3, .fullGridDemo h4').toggle();
});

$('.gridBackgroundToggle').on("click", function () {
    $('.fullGridDemo .row').toggleClass('light-gray');
    $('.extras .row').toggleClass('light-gray');
});

$(document).ready(function () {
		$('.colNum').each(function() {
			var cn = $(this).parent().attr('class')
			$(this).text(cn);
		});
});