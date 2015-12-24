module StaticPagesHelper
	def format_feed(feed)
		video = {}
		last_link = false
		message = feed['message'].gsub(/#(\w+)/, '<a>#\\1</a>') rescue ''
		message = message.gsub(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?[\w\d&=]*)?/) do |url| 
			if uri = URI.parse(url) and uri.host.include? 'youtube'
				video_id = URI.decode_www_form(uri.query).assoc('v').last
				video[:embed_url] = "https://www.youtube.com/embed/#{video_id}?rel=0&autoplay=1"
				video[:url] = url
			end
			last_link = url
			if video.present? 
				""
			else
				"<a href='#{url}' target='_blank'>Ver link</a>"
			end
		end
		age = (Date.today - Date.parse(feed['created_time'])).to_i rescue ''
		age = age == 0 ? 'Hoy' : 'Hace ' + pluralize(age, 'día', 'días') + '.'
		{
			:message => message.html_safe,
			:image => feed['full_picture'],
			:age => age,
			:link => last_link,
			:video => video.present? ? video : false
		}
	end
end