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
				breakpoint: 1030,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true,
				}
			},
			// {
			// 	breakpoint: 999,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 1,
			// 	}
			// },

			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true,
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
					dots: false,
				}
			},
			{
				breakpoint: 1030,
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
					slidesToScroll: 1,
					arrows: false,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 569,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					infinite: true,
					dots: false
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

	function sliderOnMobile() {
		if ($('.program-card.slick-slider').length === 0  && $(window).width() <= 809) {
			console.log('Slick create');
			$('.program-card').slick({
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToScroll: 1,
				slidesToShow: 3,
				responsive: [{
					breakpoint: 680,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
					
				}]
			});
		} else if ($('.program-card.slick-slider').length !== 0 && $(window).width() > 809) {
			console.log('Slick destroyed');
			$('.program-card.slick-slider').slick('unslick');
		};

		if ($('.mentors-card.slick-slider').length === 0  && $(window).width() <= 1352) {
			console.log('Slick create');
			$('.mentors-card').slick({
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToScroll: 1,
				slidesToShow: 5,
				responsive: [{
					breakpoint: 920,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					},
					
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					
					},
					
				},
				{
					breakpoint: 324,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						
					}
					
				}]
			});
		} else if ($('.mentors-card.slick-slider').length !== 0 && $(window).width() > 1352) {
			console.log('Slick destroyed');
			$('.mentors-card.slick-slider').slick('unslick');
		}
	}
	sliderOnMobile();

	$(window).resize(function() {
		sliderOnMobile();
	})
});

