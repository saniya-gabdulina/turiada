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


	$('.news__form').validate ({
		errorClass: "invalid" ,
		errorElement: "em" ,
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 30,
			},
			userEmail: {
				required: true,
				email: true
			}
		},
		messages: {
			userName: {
				required: "Обязательно",
				minlength: "Не короче 2 букв",
				maxlength: "Не длиннее 30 букв",
			},
			userEmail: {
				required: "Обязательно укажите email",
				email: "Введите в формате: name@domail.com"
			}
		},
		submitHandler: function (form) {

			$.ajax({
				type: "POST",
				url: "/send.php",
				data: $(form).serialize(),
				success: function (response) {
					$('.modal-thanks').addClass('modal--visible');
					$('.news__form')[0].reset();
					setTimeout(function () {
						$('.modal-thanks').removeClass('modal--visible');
					}, 2000); //убирает окно благодарности через 2000мс (2 секунды) 
					console.log('Success', $(form).serialize());
				},
				error: function (response) {
					$('.modal-error').addClass('modal--visible');
					setTimeout(function () {
						$('.modal-error').removeClass('modal--visible');
					}, 3000); //убирает окно благодарности через 2000мс (2 секунды) 
					console.log('Error', $(form).serialize());
				}
			});
		}
	})
});

