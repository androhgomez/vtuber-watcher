# require "modules/ChooksAPI"

class VideoQueryService < ApplicationService

  def initialize(**params)
    if params[:channels].present?
      @channels = params[:channels]
      @exclude_subscriptions = params[:exclude_subscriptions] || false
      @dummy_call = params[:dummy_call] || false
    end
  end

  def call
    dummy_data
    # setup_variables
    # query_api
    # format_results
  end

private

  # def query_api
  #   @res = ChooksAPI::Client.query(ChooksAPI::ChannelQuery, variables: @variables)
  # end

  # def format_results
  #   @res.to_h["data"]["videos"]["items"].map(&:deep_symbolize_keys)
  # end

  # def setup_variables
  #   @variables = {
  #     "channelId" => setup_channel_ids
  #   }
  # end

  # def setup_channel_ids
  #   return get_subscriptions unless @channels.present?
  #   return @channels.push(*get_subscriptions) unless @exclude_subscriptions
  #   return @channels
  # end

  # def get_subscriptions
  #   I18n.t("video_query_service.subscribed_channels")
  # end

  def dummy_data
    JSON.parse(File.read('./public/dummyapi/result.json'))["data"]["videos"]["items"].to_json
  end
end