class StaticPagesController < ApplicationController
  layout 'welcome', only: :welcome

  def home
  	@products = Product.all
  	@articles = Article.limit(4).order("RAND()")
  end

  def news
  	offset = params[:offset] || 0
  	@articles_count = Article.all.count
  	@articles = Article.offset(offset).limit(3).order(created_at: :desc)
  end

  def media
    graph = Koala::Facebook::API.new(ENV['OAUTH_ACCESS_TOKEN'], ENV['FACEBOOK_APP_SECRET'])
    @feed = graph.get_connections("me", "posts?fields=message,created_time,full_picture")
  end

  def welcome
    if request.post?
      if params[:full_age].present? and params[:full_age] == 'true'
        cookies.signed[:full_age] = true
        redirect_to root_path
      end
    end
  end

  def raffle
    raffle_params = params.require(:raffle).permit(:code, :name, :email, :location)
    @raffle = Raffle.new(raffle_params)
    respond_to do |format|
      if @raffle.save
        AdminNotifier.raffle(@raffle).deliver_now
        format.json { render json: { success: true } }
      else
        format.json { render json: { success: false } }
      end
    end
  end

end