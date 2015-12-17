var Modals = {}

Modals.notice = function() {
	var $modal = $('#modalNotice');
	$modal.modal('show')
	.on('shown.bs.modal', function() {
		$modal.find('.modal-footer>button').focus();
	});
};

Modals.youtube = function() {
	var $modal = $('#modalYoutube');
	var $iframe = $modal.find('iframe');
	$('.media-box-play-btn').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var url = $this.data('youtube-embed');
		$iframe.attr('src', url);
		$modal.modal('show');
	});
	$modal.on('hidden.bs.modal', function() {
		$iframe.attr('src', null);
	});
};