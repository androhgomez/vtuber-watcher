var VideoGallery = React.createClass({

  propTypes: {
    videos: React.PropTypes.array
  },

  videoCards: function(){
    return this.props.videos.map((video) => 
      <VideoCard video={video} />
    );
  },

  render: function() {
    return(
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {this.videoCards()}
          </div>
        </div>
      </div>
    );
  }
});
