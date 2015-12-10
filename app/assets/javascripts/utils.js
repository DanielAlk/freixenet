var Utils = {};

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