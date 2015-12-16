class StaticPagesController < ApplicationController
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
end