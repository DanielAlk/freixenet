$(function() {
	$.fn.slider = Slider.plugin;
});

var Slider = {};

Slider.plugin = function(delay) {
	delay = delay || 8000;
	this.each(function() {
		var $slider = $(this);
		var $prev = $slider.find('.slider-prev');
		var $next = $slider.find('.slider-next');
		var $items = $slider.find('.slider-item');
		var $toggleMode = $slider.find('[data-mode]');
		var timer, active_mode = false;
		var start = function() {
			clearInterval(timer);
			timer = setInterval(next, delay);
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
			!!e && !active_mode && start();
			var $active = $items.filter('.active');
			var $next = $active.is($items.last()) ? $items.first() : $active.next();
			toggle($active, $next, 'right');
		};
		var prev = function(e) {
			!!e && e.preventDefault();
			!!e && !active_mode && start();
			var $active = $items.filter('.active');
			var $prev = $active.is($items.first()) ? $items.last() : $active.prev();
			toggle($active, $prev, 'left');
		};
		var toggleMode = function(e) {
			e.preventDefault();
			var mode = $(this).data('mode');
			if ($slider.hasClass(mode)) {
				$slider.removeClass(mode);
				active_mode = false;
				start();
			} else {
				clearInterval(timer);
				active_mode = mode;
				$slider.addClass(mode);
			};
		};
		$next.click(next);
		$prev.click(prev);
		$toggleMode.click(toggleMode);
		start();
	});
};