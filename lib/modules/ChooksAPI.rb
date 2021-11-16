require "graphql/client"
require "graphql/client/http"

module ChooksAPI

  HTTP = GraphQL::Client::HTTP.new("https://api.chooks.app/v1") do

    def headers(context)
      # Optionally set any HTTP headers
      { 
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Connection": "keep-alive",
        "DNT": "1",
        "Origin": "https://api.chooks.app",
      }
    end

  end

  Schema = GraphQL::Client.load_schema(HTTP)
  Client = GraphQL::Client.new(schema: Schema, execute: HTTP)

  ChannelQuery = Client.parse <<-'GRAPHQL'
    query($channelId: [ID]) {
      videos(platforms: yt, channel_id: $channelId) {
        items {
          _id,
          platform_id,
          channel_id,
          organization,
          title,
          status,
          time{
            scheduled,
            published,
            start,     
            end,
            duration,
          }
        },
      }
    }
  GRAPHQL

end