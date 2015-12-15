var Articles = {};

Articles.init = function() {
	var $template = $('#articleTemplate>div');
	var $container = $('#articlesContainer');
	var $btn = $('#articlesPagination');
	var action = $btn.attr('href');
	var step = $btn.data('step');
	var offset = $btn.data('offset');
	var count = $btn.data('count');
	$btn.click(function(e) {
		e.preventDefault();
		$.post(action, { offset: offset }, function(articles) {
			articles.forEach(function(article) {
				var $clone = $template.clone();
				$clone.children('img').attr('src', article.large_image);
				$clone.children('h2').text(article.title);
				$clone.children('div').html(article.text);
				$clone.hide().appendTo($container);
			});
			$container.children(':nth-child(n+'+Number(offset+1)+')').fadeIn();
			if ((offset+=step) > count) $btn.attr('disabled', true);
		}, 'json');
	});
};