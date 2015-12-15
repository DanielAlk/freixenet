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
	Forms.dateSelect();
	var $form = $('#contactForm');
	$form.validate();
};

Forms.dateSelect = function() {
	$('[data-date-select]').each(function() {
		var $selects = $(this).find('select');
		var $container = $($(this).data('date-select'));
		$selects.each(function() {
			var select = this;
			var $dropdown = $('<div>', { class: 'dropdown', 'data-for': select.id });
			var $button = $('<button>', {
				class: 'form-control dropdown-toggle',
				type: 'button',
				id: 'dropdown'+select.id,
				'data-toggle': "dropdown",
				'aria-haspopup': true,
				'aria-expanded': true,
				html: '<span class="dropdown-text">'+select.selectedOptions[0].text+'</span> <span class="caret"></span>'
			});
			var $ul = $('<ul>', { class: 'dropdown-menu', 'aria-labelledby': 'dropdown'+select.id });
			[].forEach.call(select.options, function(option) {
				$('<li>')
				.append($('<a>', { 'data-value': option.value, href: '#', text: option.text }))
				.appendTo($ul);
			});
			$dropdown.append($button).append($ul).appendTo($container);
			Utils.dropdownFor($ul.find('a'));
		});
	});
};