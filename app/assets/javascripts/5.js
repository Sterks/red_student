
	$(document).ready(function() {

		$("#consul input[type=text], #consul textarea").keypress(function() {
			$(this).removeClass("error");
		});

		$("#consul .consent.customP").click(function() {
			$(this).removeClass("error");
		});

		$("#consul").submit(function() {

			var data = $("#consul").serialize();

			$("#consul .required").each(function() {
				if (!$(this).val().length) {
					$(this).addClass("error");
				}
			});

			if (!$("#consul :checked").length) {
				$("#consul .consent.customP").addClass("error");
			}

			if (!$("#consul .error").length) {
				$.post("functions.php.htm", {action:"consul", data:data});
				$("#consul").fadeOut(250, function() {
					$("#consul input[type=text]").val('');
					$("#consul textarea").val('');
					$("#consul input[type=checkbox]").val('off');
					$("#consul").after('<p class="success">Ваш запрос успешно отправлен!</p>');
					setTimeout(function() {
						$("#consul").show();
						$("p.success").remove();
					}, 5000);
				});
			}

			return false;

		});

	});
