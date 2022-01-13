class ApplicationController < ActionController::Base

	before_action :dummy_query_videos, only: [:index]

	def index
	end

private

	def query_videos
		@videos = VideoQueryService.call()
	end

	def dummy_query_videos
		@videos = JSON.parse(File.read('./public/dummyapi/result.json'))["data"]["videos"]["items"].map(&:deep_symbolize_keys)
	end

end
