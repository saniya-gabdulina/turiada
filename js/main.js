$(document).ready(function () {


	$('.skills-slide').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1353,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true,
				}
			},

			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.bonus-slide').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1352,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});

$(window).resize(function() {
	if ($('.mentors-card.slick-slider').length === 0  && $(window).width() <= 768) {
		console.log('Slick create');
		$('.mentors-card').slick();
	} else if ($('.mentors-card.slick-slider').length !== 0 && $(window).width() > 768) {
		console.log('Slick destroyed');
		$('.mentors-card.slick-slider').slick('unslick');
	}
})