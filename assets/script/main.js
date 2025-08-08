'use strict';

$(document).ready(function () {
	// カルーセル
	$('#js-voices-carousel').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	// if (window.matchMedia('(min-width: 768px)').matches) {
	// 	$('#js-voices-carousel').slick({
	// 		dots: true,
	// 		slidesToShow: 3,
	// 		slidesToScroll: 3,
	// 		responsive: [{
	// 			breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 1
	// 			}
	// 		}]
	// 	});
	// } else {
	// 	$('#js-voices-carousel').slick({
	// 		dots: true,
	// 	});
	// }

	// スクロールボタン表示制御
	$(window).scroll(function() {
		if($(this).scrollTop()) {
			$('#js-scroll-to-top-btn').show();
		}else{
			$('#js-scroll-to-top-btn').hide();
		}
	});
});