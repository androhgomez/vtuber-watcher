import React from 'react';
import {IntlProvider} from 'react-intl';
import FormattedDuration from 'react-intl-formatted-duration';

class VideoGallery extends React.Component{

  constructor(props){
    super(props);
    var data_div = document.querySelector("#react_data")
    if (typeof props !=='undefined' && typeof props.videos !=='undefined') {
      this.state = { videos: props.videos };
    } else if ( typeof dat_div !== null && data_div.querySelectorAll("#videos").length > 0 ) {
      this.state = { videos: JSON.parse(document.querySelector("#react_data").querySelectorAll("#videos")[0].dataset.value) };
    } else {
      // this.state = { videos: query json from api }
    }
  }

  videoCards(){
    return this.state.videos.map((video) => 
      this.videoCard(video)
    );
  }

  smallText(time){
    if (typeof time.duration !== 'undefined' && time.duration !== null) {
      return(
        <FormattedDuration seconds={time.duration / 1000} format="{hours} {minutes} {seconds}" />
      )
    } else if (typeof time.scheduled !== 'undefined' && time.scheduled !== null) {
      return (
        <FormattedDate value={time.scheduled} />
      )
    }
  }

  videoCard(video) {
    return (
      <a className="album-card" href={'https://www.youtube.com/watch?v=' + video._id} target="_blank" key={video._id}>
        <div className="col">
          <div className="card shadow-sm">
            <img aria-label="Placeholder: Thumbnail" focusable="false" preserveAspectRatio="xMidYMid slice" src={'https://img.youtube.com/vi/' + video._id + '/hqdefault.jpg'}/>
              <div className="card-body">
                  <p className="card-text">{video.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{this.smallText(video.time)}</small>
                  </div>
              </div>
          </div>
        </div>
      </a>
    );
  }

  render() {
    return(
      <IntlProvider locale="en">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {this.videoCards()}
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
};

export default VideoGallery;
