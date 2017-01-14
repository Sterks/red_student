$(function(){
//main slider
	$('.slider1').bxSlider({
		slideWidth: 960,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0,
		mode: 'fade',
		controls: false,
		auto: true,
		pause: 5000
	  });
	  
//select
	$('.select-f select').selectbox();
	
//checkbox
	$('.customP input[type="checkbox"]').ezMark({checkboxCls: 'ez-checkbox-green', checkedCls: 'ez-checked-green'});
	
//placeholder
	$.Placeholder.init({ color: "#c5c5c5" });
	
//popup
	$('<div class="overlay"></div>').appendTo('body');
	$('a[href="#callback"]').click(function(){
		$('.pop1, .overlay').show();
		return false;
	});
	$('a[href="#consult"]').click(function(){
		$('.pop4, .overlay').show();
		return false;
	});
	$('.overlay').click(function(){
		$('.pop, .overlay').hide();
		return false;
	});
	$(window).resize(function(){
		$('.pop').each(function() {
			$(this).css({
				left: ($(window).width() - $(this).outerWidth()) * 0.5,
				top: ($(window).height() - $(this).outerHeight()) * 0.5
			});
		});
	}).resize();
	
	$('.selectbox .dropdown').on('click', 'ul li', function(){
		$(this).parent().parent().prev('.select').addClass('act');
	});
});