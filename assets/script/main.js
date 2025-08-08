'use strict';

$(document).ready(function () {
	// カルーセル
	$('#js-voices-carousel').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 767.96,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	// スクロールボタン表示制御
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('#js-scroll-to-top-btn').fadeIn();
		}else{
			$('#js-scroll-to-top-btn').fadeOut();
		}
	});
});