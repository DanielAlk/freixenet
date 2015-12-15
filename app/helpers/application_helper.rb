module ApplicationHelper
	def head_allow_robots?
		true
	end

	def head_title
		case params['action']
		when 'news'
			'Novedades | Freixenet'
		when 'media'
			'Media | Freixenet'
		when 'contact'
			'Contacto | Freixenet'
		else
			'Freixenet'
		end
	end

	def head_description
		''
	end

	def head_og_image
		''
	end

	def navigation_background
		case params['action']
		when 'home'
			'bg-beach-party'
		when 'news'
			'bg-cake-couple'
		when 'media'
			'bg-dancing-couple'
		when 'contact'
			'bg-traffic-couple'
		else
			'bg-beach-party'
		end
	end

	def navigation_class(action, match_to = :action)
		if action.is_a?(Hash)
			'active' if action[:action] == params[:action] or action[:controller] == params[:controller]
		else
			'active' if action == params[match_to]
		end
	end
end
