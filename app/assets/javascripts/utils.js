var Utils = {};

Utils.init = function() {
	Utils.toggler();
	Utils.dropdownFor();
	Utils.scroller();
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

Utils.scroller = function() {
	var $body =	$('html,body');
	var handler = function(e) {
		e.preventDefault();
		var $this = $(this);
		var id = $this.data('scroll');
		var $target = $(id);
		if ($target.length) {
			var offset = $target.offset().top;
			$body.stop(true,true).animate({scrollTop: offset});
		} else {
			var href = $this.attr('href');
			window.location.href = href+id;
		};
	};
	$('[data-scroll]').click(handler);
};

Utils.adminButtons = function() {
	$admin_buttons = $('.admin-buttons').css('display', $.cookie('admin_buttons_display'));
	$('.admin-info').css('cursor', 'pointer').click(function(e) {
		$admin_buttons.toggle(400, function() {
			$.cookie('admin_buttons_display', $admin_buttons.css('display'), { path: '/' });
		});
	});
};