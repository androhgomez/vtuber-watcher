require "modules/ChooksAPI"

class VideoQueryService < ApplicationService

  def initialize(**params)
    if params[:channels].present?
      @channels = params[:channels]
      @exclude_subscriptions = params[:exclude_subscriptions] || false
    end
  end

  def call
    setup_variables
    query_api
    format_results
    return @output
  end



private

  def query_api
    @res = ChooksAPI::Client.query(ChooksAPI::ChannelQuery, variables: @variables)
  end

  def format_results
    @output = @res.to_h["data"]["videos"]["items"].map(&:symbolize_keys)
  end

  def setup_variables
    @variables = {
      "channelId" => setup_channel_ids
    }
  end

  def setup_channel_ids
    return get_subscriptions unless @channels.present?
    return @channels.merge(get_subscriptions) unless @exclude_subscriptions
    return @channels
  end

  def channels_specified?
    @channels.present?
  end

  def get_subscriptions
    [
      "UCP4nMSTdwU1KqYWu3UH5DHQ",
      "UC6oDys1BGgBsIC3WhG1BovQ",
    ]
  end
end