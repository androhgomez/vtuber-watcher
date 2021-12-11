require 'rails_helper'

RSpec.describe ::VideoQueryService do

  let(:raw_result) {
    { "data" =>
      { "videos"=>
        { "items"=>
          [
            { "_id"=>"testvideoid1", 
              "platform_id"=>"yt", 
              "channel_id"=>"testchannelid1", 
              "organization"=>"testorg", 
              "title"=>"testtitle", 
              "status"=>"ended", 
              "time"=> { 
                "scheduled"=>"2021-12-05T13:00:00.000Z", 
                "published"=>"2021-12-05T10:03:20.000Z", 
                "start"=>"2021-12-05T13:00:26.000Z", 
                "end"=>"2021-12-05T14:11:46.000Z", 
                "duration"=>4280000
              }
            },
          ]
        }
      }
    }
  }

  before do 
    allow(ChooksAPI::Client).to receive(:query).and_return(raw_result)
  end

  it 'executes an API request and returns a clean symbolized result' do
    expect(ChooksAPI::Client).to receive(:query).with(
      ChooksAPI::ChannelQuery, 
      variables: { 
          "channelId" => I18n.t("video_query_service.subscribed_channels")
        }
      )
    result = described_class.call
    expect(result.first[:_id]).to eq("testvideoid1")
  end

  context 'if channel ids are specified' do

    let(:channel_params) { { channels: ["newchannelid1"] } }

    it 'adds the channel ids to the query' do
      expect(ChooksAPI::Client).to receive(:query).with(
        ChooksAPI::ChannelQuery, 
        variables: { 
          "channelId" => channel_params[:channels].push(*I18n.t("video_query_service.subscribed_channels"))
        }
      )

      described_class.call(channel_params)
    end
       
    context 'if exclude_subscriptions is set' do

      let(:channel_params) { { 
        channels: ["newchannelid1"],  
        exclude_subscriptions: true
      } }


      it 'queries only the specified channels' do
        expect(ChooksAPI::Client).to receive(:query).with(
          ChooksAPI::ChannelQuery, 
          variables: { 
            "channelId" => channel_params[:channels]
          }
        )

        described_class.call(channel_params)
      end

    end
    
  end

end