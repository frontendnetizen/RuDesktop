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

  
	  $(".unit-compare__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
  });

  	  $(".unit-dropdown__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
  });

//text registration radio
$('input[name="register"]').on('change', function() {
    let selectedText = $(this).data('text');
    
    $('.txt-radio').text(selectedText);
  });


  	/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

  //hint position
  $('.hint').on('mouseenter', function() {
        var $hint = $(this);
        var $content = $hint.find('.hint__content');
        
        $hint.removeClass('hint--left hint--right');

        var contentWidth = $content.outerWidth();
        var contentOffsetLeft = $content.offset().left;
        var windowWidth = $(window).width();

        if (contentOffsetLeft + contentWidth > windowWidth) {
            $hint.addClass('hint--left');
        } 
        else if (contentOffsetLeft < 0) {
            $hint.addClass('hint--right');
        }
    });

  //filters
  $('.filter-page__btn').on('click', function () {
        const $btn = $(this);
        const filterValue = $btn.data('filter');
        const $sections = $('.section-solutions');
        

        if ($btn.hasClass('active')) return;

        $('.filter-page__btn').removeClass('active');
        $btn.addClass('active');

        if (filterValue === 'all') {
            $sections.stop(true, true).fadeIn(300);
        } else {
            $sections.stop(true, true).hide();
            $sections.filter(`[data-tab="${filterValue}"]`).stop(true, true).fadeIn(300);
        }

        var textTab = $(this).html();
      $(this).parent().siblings(".btn-filter").html(textTab);
      $('.btn-filter').removeClass("active");

    });

      	$('.filter-page-wrapper').each(function () {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".filter-page__btn.active").html();
		currentTab.find(".btn-filter").html(initalTextTab);
	});
	$('.btn-filter').click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".filter-page").slideToggle(200);
		$('.filter-page-wrapper .filter-page .filter-page__btn').click(function (event) {
			$(this).parent().slideUp(200);
		});
	});


  //nav questions
     	$('.nav-question-wrapper').each(function () {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".nav-questions .active a").html();
		currentTab.find(".btn-nav-question").html(initalTextTab);
	});
	$('.btn-nav-question').click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".nav-questions").slideToggle(200);
		$('.nav-question-wrapper .nav-questions:not(.nav-questions--notabs) a').click(function (event) {
			$(this).parent().parent().slideUp(200);

		});
	});

    $('.nav-questions:not(.nav-questions--notabs) a').on('click', function () {
        var textTab = $(this).html();
      $(this).parent().parent().siblings(".btn-nav-question").html(textTab);
           $(".btn-nav-question").removeClass("active");

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

  $('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 3,
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

  	  $('.menu__haschild > a').click(function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');
	 $(this).siblings(".menu__dropdown").slideToggle(200);
  });
//tabs
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

		$('.tabs-wrapper .tabs:not(.no-tabs) li a').click(function (e) {
			e.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().siblings(".btn-tab").html(textTab);
		$('.btn-tab').removeClass("active");
	});


    $('.tabs:not(.no-tabs) li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents("section").find(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
  });

  //tabs inner
  	$('.tabs-wrapper-inners').each(function () {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab-inner").html(initalTextTab);
	});
	$('.btn-tab-inner').click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".tabs-inner").slideToggle(200);
		$('.tabs-wrapper-inners .tabs-inner li a').click(function (event) {
			$(this).parent().parent().slideUp(200);
		});
	});

		$('.tabs-wrapper-inners .tabs-inner li a').click(function (e) {
			e.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().siblings(".btn-tab-inner").html(textTab);
		$('.btn-tab-inner').removeClass("active");
	});


    $('.tabs-inner li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents(".tab-pane").find(".tab-pane-inner").fadeOut(0);
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
  function updateKpLink($card) {
    var activeKp = $card.find('.item-tariff__term.active').data('kp');
    
    if (activeKp) {
      $card.find('.btn-get-kp').attr('href', '#get-kp-' + activeKp);
    }
  }

  $('.item-tariff').each(function() {
    updateKpLink($(this));
  });

  $('.item-tariff__term').click(function() {
    var $this = $(this);
    
    $this.addClass('active').siblings().removeClass('active');
    
    var $parentCard = $this.closest('.item-tariff');
    updateKpLink($parentCard);
  });

  //inputs
  // Функция проверки и переключения класса
  function toggleFilledClass($input) {
    const $parent = $input.closest('.control-form');
    
    if ($input.val().trim() !== '') {
      $parent.addClass('filled');
    } else {
      $parent.removeClass('filled');
    }
  }

  // 1. Отслеживаем ввод текста (включая вставку и автозаполнение)
  $('.control-form input').on('input change', function () {
    toggleFilledClass($(this));
  });

  // 2. Обработка клика по кнопке очистки
  $('.control-form').on('click', '.control-form__clear', function () {
    const $container = $(this).closest('.control-form');
    const $input = $container.find('input');

    // Очищаем значение, убираем класс и возвращаем фокус в инпут
    $input.val('').trigger('input').focus();
  });

  // 3. Проверяем поля при загрузке (если браузер уже что-то вставил)
  $('.control-form input').each(function () {
    toggleFilledClass($(this));
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
	$('.consultation, .modal-wrap').on('submit', 'form', function(e) {
        e.preventDefault();

        const $form = $(this);

        if (this.checkValidity()) {
            
            const formData = $form.serializeArray().reduce((acc, item) => {
                acc[item.name || 'field'] = item.value;
                return acc;
            }, {});

			 $.fancybox.close();

			setTimeout(() => {
		$.fancybox.open({
				src  : '#modal-thanks',
				type: 'inline',
				touch: false
			});
	}, 150);
             


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

	$(".input-phone").intlTelInput({
		initialCountry:"ru",
		utilsScript: "libs/intl-tel-input-master/build/js/utils.js",

	});


  //scroll checkout
const $scrollBlock = $('.scroll-checkout');
  const $sidebar = $('.sidebar-checkout');
  const scrollOffset = 100; // Через сколько px от верха включать .fixed

  function checkScroll() {
    // 1. Проверяем, существует ли сайдбар на странице
    if (!$sidebar.length) return;

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const sidebarTop = $sidebar.offset().top; 

    const reachedSidebar = (scrollTop + windowHeight) >= sidebarTop;

    // 2. Условие: проскроллили ниже 100px И ЕЩЕ НЕ дошли до сайдбара
    if (scrollTop > scrollOffset && !reachedSidebar) {
      $scrollBlock.addClass('fixed');
    } else {
      $scrollBlock.removeClass('fixed');
    }
  }

  $(window).on('scroll resize', checkScroll);
  
  checkScroll();

  
	$('.scroll-checkout').on('click', function(e) {
  e.preventDefault();
  
  var headerHeight = $('.header').outerHeight();


  $('html, body').animate({
      scrollTop: $(".sidebar-checkout").offset().top - headerHeight
  }, 800); 
});

//js change ckeckout

	$('.js-change-checkout').on('click', function(e) {
  e.preventDefault();
 $(".change-checkout").slideToggle(200);
});

// js open requisites
	$('.js-open-requisites').on('click', function(e) {
  e.preventDefault();
 $(".requisites-checkout").slideToggle(200);
 $(".requisites-checkout").prev(".text-small.text-small--gray").slideToggle(200);
});


// js open requisites
	$('.js-open-check-login').on('click', function(e) {
  e.preventDefault();
 $(".check-user__form").slideToggle(200);
});


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

	//scrolls
	$('.js-scroll-consult').on('click', function(e) {
  e.preventDefault();
  
  var headerHeight = $('.header').outerHeight();

     $(".tabs-consultation__btn").removeClass("active");
  $(".tabs-consultation__btn:nth-child(1)").addClass("active");

     $(".tab-pane-consultation").removeClass("active").fadeOut();
  $(".tab-pane-consultation:nth-child(1)").addClass("active").fadeIn();
  
  $('html, body').animate({
      scrollTop: $(".consultation__main").offset().top - headerHeight
  }, 800); 
});

	$('.js-scroll-demo').on('click', function(e) {
  e.preventDefault();
  
  var headerHeight = $('.header').outerHeight();

   $(".tabs-consultation__btn").removeClass("active");
  $(".tabs-consultation__btn:nth-child(2)").addClass("active");

     $(".tab-pane-consultation").removeClass("active").fadeOut();
  $(".tab-pane-consultation:nth-child(2)").addClass("active").fadeIn();

  $('html, body').animate({
      scrollTop: $(".consultation__main").offset().top - headerHeight
  }, 800); 
});

$('.tariffs-links a, .link-scroll, .nav-questions:not(.nav-questions--notabs) a, .nav-article a').on('click', function(e) {
  e.preventDefault();
  
  var targetId = $(this).attr('href');
  var headerHeight = $('.header').outerHeight();
  
  $('html, body').animate({
      scrollTop: $(targetId).offset().top - headerHeight
  }, 800); 
});


$('.nav-questions a').on('click', function(e) {
 $(this).parent().addClass("active");
 $(this).parent().siblings().removeClass("active");
});


  //copy
  $(".copy-btn").on("click", function () {
    var btnCopy = $(this);
    var value = $(this).siblings(".copy-value").text().trim();

    navigator.clipboard.writeText(value).then(function () {
      btnCopy.addClass("active");
      setTimeout(function () {
       btnCopy.removeClass("active");
      }, 1000);
    });
  });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});



});
