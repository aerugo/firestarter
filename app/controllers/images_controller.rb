class ImagesController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  before_filter :camp_id

  def index
    @images = Image.where camp_id: @camp_id
  end

  def show
    image = Image.find_by_id params[:id]
    send_data image.image, disposition: :inline
  end

  def create
    image_io = params[:image]
    if image_io.blank? 
      flash[:alert] = "No file was chosen!"
    elsif image_io.content_type != "image/jpeg" and image_io.content_type != "image/gif" and image_io.content_type != "image/png"
      flash[:alert] = "Image file type must be jpeg, png or gif"
    elsif image_io.size > 8000000
      flash[:alert] = "File size must be smaller than 8 mb"
    else
      Image.create! camp_id: @camp_id, image: image_io.read, user_id: current_user.id
    end
    redirect_to camp_images_path(camp_id: @camp_id)
  end

  def destroy
    Image.find_by_id( params[:id] ).destroy!
    redirect_to camp_images_path(camp_id: @camp_id)
  end

  def camp_id
    @camp_id = params[:camp_id]
  end
end
