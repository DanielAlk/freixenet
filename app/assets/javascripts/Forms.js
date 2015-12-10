$(function() {
	jQuery.validator.setDefaults({
		errorPlacement: function(error, element) {
			if (element.attr("type") == "checkbox" || element.attr("type") == "radio" ) {
				error.insertAfter(element.parent('label'));
			} else {
				error.insertAfter(element);
			};
		}
	});
});

var Forms = {};

Forms.contact = function() {
	var $form = $('#contactForm');
	var $success = $($form.data('success'));
	$form.validate({
		submitHandler: function() {
			$form.fadeOut();
			$success.fadeIn();
		}
	});
};