class StaticPagesController < ApplicationController
  def home
  	@products = Product.all
  end
  def news
  end
  def media
  end
  def contact
  end
end
