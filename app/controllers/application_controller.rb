class ApplicationController < ActionController::Base

	before_action :query_videos, only: [:index]

	def index
	end

private

	def query_videos
		@videos = VideoQueryService.call()
	end

end
