	$(document).ready(function() {

		$('a.change-city, a.change-filial').click(function(){
			$('.pop2').show();
			$('.overlay').show();
			return false;
		});

		$(".city-list a").on("click", function() {

			var city = $(this).text();
			var code = $(this).attr("code");
			var phone = $(this).attr("phone");

			$(".b-phone .phone").html(code+' <strong>'+phone+'</strong>');
			$('a.change-city').text(city);

			$.post("functions.php.htm", {action:"set_city", city:city}, function(data) {
				if (data) {
									}
			});
			$(".overlay").click();

			return false;

		});

	});
