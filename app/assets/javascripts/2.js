	$(document).ready(function() {

		$("#feedback_call2 input[type=text], #feedback_call2 textarea, #feedback_call input[type=text], #feedback_call textarea").keypress(function() {
			$(this).removeClass("error");
		});

		$("#feedback_call2 .consent.customP, #feedback_call .consent.customP").click(function() {
			$(this).removeClass("error");
		});

		$("#feedback_call2, #feedback_call").submit(function() {
			var $t = $(this);
			$t.find(".required").each(function() { if (!$(this).val().length) $(this).addClass("error"); });
			if($t.is('#feedback_call') && !$t.find(":checked").length) t.find(".consent.customP").addClass("error");

			if(!$t.find(".error").length) {
				$.post("functions.php.htm", { action: "feedback_call", data: $t.serialize() }, function() {
					$t.fadeOut(250, function() {
						$t.find("input[type=text]").val('');
						$t.find("textarea").val('');
						$t.find("input[type=checkbox]").val('off');
						$t.after('<p class="success">Ваш запрос успешно отправлен!</p>');
						setTimeout(function() { $t.show(); $("p.success").remove(); }, 5000);
					});
				});
			}

			return false;

		});

	});
