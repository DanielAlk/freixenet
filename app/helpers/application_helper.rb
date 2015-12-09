module ApplicationHelper
	def head_allow_robots?
		true
	end

	def head_title
		'Freixenet'
	end

	def head_description
		''
	end

	def head_og_image
		''
	end

	def navigation_background
		'bg-beach-party'
	end

	def navigation_class(action, match_to = :action)
		'active' if action == params[match_to]
	end
end
