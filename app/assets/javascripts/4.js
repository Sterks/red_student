	$(document).ready(function() {

		$("#go_to_vacancy").click(function() {
			$(".pop3").show();
			$(".overlay").show()
			return false;
		});

		$("#vacancy input[type=text], #vacancy textarea").keypress(function() {
			$(this).removeClass("error");
		});

		$("#vacancy .consent.customP").click(function() {
			$(this).removeClass("error");
		});

		$("#vacancy").submit(function() {

			var data = $("#vacancy").serialize();

			$("#vacancy .required").each(function() {
				if (!$(this).val().length) {
					$(this).addClass("error");
				}
			});

			if (!$("#vacancy :checked").length) {
				$("#vacancy .consent.customP").addClass("error");
			}

			if (!$("#vacancy .error").length) {
				$.post("functions.php.htm", {action:"vacancy", data:data});
				$("#vacancy").fadeOut(250, function() {
					$("#vacancy input[type=text], #vacancy textarea").val("");
					$("#vacancy").after('<p class="success">Ваши данные успешно отправлены!</p>');
					setTimeout(function() {
						$("#vacancy").show();
						$("p.success").remove();
					}, 5000);
				});
			}

			return false;

		});

	});
