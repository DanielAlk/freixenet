var Utils = {};

Utils.init = function() {
	Utils.toggler();
	Utils.dropdownFor();
};

Utils.toggler = function() {
	var show = function($target) {
		$target.stop(true,true).addClass('active').fadeIn();
	};
	var hide = function($target) {
		$target.stop(true,true).removeClass('active').fadeOut();
	};
	var toggle = function($target) {
		if ($target.hasClass('active')) hide($target);
		else show($target);
	};
	var handler = function(e) {
		e.preventDefault();
		var $target = $($(this).data('toggle'));
		$(this).toggleClass('active');
		toggle($target);
	};
	$('[data-toggle]').click(handler);
};

Utils.dropdownFor = function() {
	var handler = function(e) {
		e.preventDefault();
		var $this = $(this);
		var $dropdown = $this.parents('.dropdown').first();
		var id = '#' + $dropdown.data('for');
		var $target = $(id);
		var text = $this.text();
		var value = $this.data('value') || text;
		$dropdown.find('.dropdown-text').text(text);
		$target.val(value);
	};
	$('.dropdown[data-for] ul a').click(handler);
};