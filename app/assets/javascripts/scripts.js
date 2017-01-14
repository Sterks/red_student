jQuery(document).ready(function() {
	$('.find-work select, #main_form select').styler({
        selectPlaceholder: 'Тип работы',
    });

     $('.top_slider').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="top_slider-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="top_slider-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('a[href^="#"]').click(function() {
		var $el = $($(this).attr('href'));
		if($el.length) $('body').animate({ scrollTop: $el.offset().top - 40 }, 800);
		return false;
    });

    $(window).scroll(function() {
        if($(document).scrollTop() < 64) $( ".second-header" ).removeClass("fixed-header");
        else $( ".second-header" ).addClass("fixed-header");
    });

    $('.menu-icon').click(function(){
        $('.nav-2').slideToggle('fast');
        
    });

    if ($(window).width() > 760) {

    setTimeout(function(){
  		$('.banner_overlay, .banner_popup').fadeIn('fast');
		}, 30000);

    };


    $('.banner_overlay').click(function(){
        $('.banner_overlay, .banner_popup').fadeOut('fast');
        
    });

    $('#feedback_call label a').click(function(){
    	$('.ez-checkbox-green').addClass('ez-checked-green');
    });


});



/*** Helpers.js ***/
function number_format(number, decimals, dec_point, thousands_sep) { // форматирование чисел, разделение по тысяче
    // 
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

    return km + kw + kd;
}
function intMorphy(num, im, rd, rdm) { // склонение чисел
    var a = num % 10, b = num % 100;
    if (a == 0 || a >= 5 || (b >= 10 && b <= 20))
        return rdm;
    if (a >= 2 && a <= 4)
        return rd;
    return im;
}
