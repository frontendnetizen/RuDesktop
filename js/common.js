$(document).ready(function() {


	//preloader
	setTimeout(() => {
		$(".preloader").fadeOut(200);
	}, 1500);

	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});

	  $(".item-question__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-question").removeClass("active");
    $(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });


  //video
$('.video-main').on('click', function () {
    const video = $(this).find('video').get(0);
    const playBtn = $(this).find('.video-main__play');

    if (video.paused) {
        video.controls = true;   
        video.play();
        playBtn.fadeOut(200);
    } else {
        video.pause();
        video.controls = false;  
        playBtn.fadeIn(200);
    }
});

// Когда видео закончилось
$('video').on('ended', function () {
    this.controls = false;         
    $(this).siblings('.video-main__play').fadeIn(200);
});

	//слайдер

	$('.slider-banner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		  autoplay: true,
  	autoplaySpeed: 4000,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
	});

		$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		variableWidth: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					speed: 15000,
				}
			}
		]
	});

		$('.slider-history').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#D32D2F" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					variableWidth: true
				}
			}
		]
	});

	//text about
	 $('.show-about').click(function(event) {
    event.preventDefault();
    $(".about__text").toggleClass('active');
    $(this).toggleClass('active');
			if ($(this).hasClass("active")) {
			$(this).find("span").html("Скрыть");
		} else {
			$(this).find("span").html("Читать полностью");
		}
  });

  	$('.tabs-wrapper').each(function () {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
	});
	$('.btn-tab').click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".tabs").slideToggle(200);
		$('.tabs-wrapper .tabs li a').click(function (event) {
			$(this).parent().parent().slideUp(200);
		});
	});

		$('.tabs-wrapper .tabs li a').click(function (e) {
			e.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().siblings(".btn-tab").html(textTab);
		$('.btn-tab').removeClass("active");
	});

	  $('.menu__haschild > a').click(function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');
	 $(this).siblings(".menu__dropdown").slideToggle(200);
  });

    $('.tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents("section").find(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
  });

    $('.tabs-functional li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents("section").find(".tab-pane-functional").fadeOut(0);
    var selectTab2 = $(this).attr("href");
    $(selectTab2).fadeIn(200);
  });

  //sub menu dropdown
  $('.menu__dropdown-wrap').each(function () {
        var $wrap = $(this);
        var $navItems = $wrap.find('.menu__dropdown-nav > li');
        var $tabs = $wrap.find('.menu__dropdown-tab');

        function setActiveTab(index) {
            $navItems.removeClass('active').eq(index).addClass('active');

            $tabs.removeClass('active').hide().eq(index).stop(true, true).fadeIn(150).addClass('active');
        }

        setActiveTab(0);

        $navItems.on('mouseenter', function () {
            var index = $(this).index();
            setActiveTab(index);
        });
    });

  {
		if ($(window).width() < 992) {
			//footer
			$(".footer__title--nav").click(function () {
				$(this).toggleClass("active");
				$(this).next(".footer__nav").slideToggle(200);
			});


		}
	}


//tabs tariffs
	  $(".item-tariff__term").click(function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });


//tabs consultation
function initConsultationTabs() {
        const $section = $('.consultation');
        if (!$section.length) return;

        function setActiveTab(tabId) {
            $section.find('.tabs-consultation__btn').removeClass('active');
            $section.find(`.tabs-consultation__btn[data-title="${tabId}"]`).addClass('active');

            $section.find('.tab-pane-consultation').removeClass('active').hide();
            $section.find(`.tab-pane-consultation[data-tab="${tabId}"]`).addClass('active').fadeIn(200);
        }

        $section.on('click', '.tabs-consultation__btn', function() {
            const targetTab = $(this).data('title');
            
            if ($(this).hasClass('active')) return;

            setActiveTab(targetTab);
        });

        const $initialBtn = $section.find('.tabs-consultation__btn.active').first();
        const initialTab = $initialBtn.length ? $initialBtn.data('title') : $section.find('.tabs-consultation__btn').first().data('title');
        
        if (initialTab) {
            setActiveTab(initialTab);
        }
    }

    initConsultationTabs();

	//form validation
	$('.consultation').on('submit', 'form', function(e) {
        e.preventDefault();

        const $form = $(this);

        if (this.checkValidity()) {
            
            const formData = $form.serializeArray().reduce((acc, item) => {
                acc[item.name || 'field'] = item.value;
                return acc;
            }, {});

             $.fancybox.open({
				src  : '#modal-thanks',
				type: 'inline',
				touch: false
			});


        } else {
            
            this.reportValidity();
        }
    });

    	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	 $('.select-step select').on('change', function() {
        var $currentStep = $(this).closest('.select-step');
        var $nextStep = $currentStep.next('.select-step');

        if ($(this).val()) {
            $nextStep.removeClass('select-hidden');
        } else {
            $currentStep.nextAll('.select-step').addClass('select-hidden');
            
            $currentStep.nextAll('.select-step').find('select').val('');
            
            $currentStep.nextAll('.select-step').find('select').trigger('refresh');
        }
    });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});



});
