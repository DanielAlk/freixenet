var Slider = {};

Slider.init = function() {
	$.fn.slider = Slider.plugin;
};

Slider.plugin = function(delay) {
	delay = delay || 8000;
	this.each(function() {
		var $slider = $(this);
		var $prev = $slider.find('.slider-prev');
		var $next = $slider.find('.slider-next');
		var $items = $slider.find('.slider-item');
		var timer;
		var start = function() {
			timer = setInterval(next, delay);
		};
		var restart = function() {
			clearInterval(timer);
			start();
		};
		var toggle = function($active, $target, direction) {
			var d = Number(direction=='left');
			$active.find('.slider-content').hide('slide', { direction: ['left', 'right'][d] });
			$target.find('.slider-content').show('slide', { direction: ['left', 'right'][Number(!d)] }, function() {
				$items.removeClass('active');
				$target.addClass('active');
			});
		};
		var next = function(e) {
			!!e && e.preventDefault();
			!!e && restart();
			var $active = $items.filter('.active');
			var $next = $active.is($items.last()) ? $items.first() : $active.next();
			toggle($active, $next, 'right');
		};
		var prev = function(e) {
			!!e && e.preventDefault();
			!!e && restart();
			var $active = $items.filter('.active');
			var $prev = $active.is($items.first()) ? $items.last() : $active.prev();
			toggle($active, $prev, 'left');
		};
		$next.click(next);
		$prev.click(prev);
		start();
	});
};