module StaticPagesHelper
	def format_feed(feed)
		last_link = false
		message = feed['message'].gsub(/#(\w+)/, '<a>#\\1</a>') rescue ''
		message = message.gsub(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?[\w\d&=]*)?/) do |m| 
			last_link = m
			"<a href='#{m}' target='_blank'>Ver link</a>"
		end
		age = (Date.today - Date.parse(feed['created_time'])).to_i rescue ''
		{
			:message => message.html_safe,
			:image => feed['full_picture'],
			:age => 'Hace ' + pluralize(age, 'día', 'días') + '.',
			:link => last_link
		}
	end
end