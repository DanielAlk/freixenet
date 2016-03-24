class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_age, except: [:welcome, :raffle]

  private
  	def authenticate_age
  		#cookies.delete :full_age
  		unless cookies.signed[:full_age].present? and cookies.signed[:full_age]
  			redirect_to welcome_path
  		end
  	end

end
