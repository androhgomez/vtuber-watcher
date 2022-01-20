import React from 'react';
import {IntlProvider} from 'react-intl';
import FormattedDuration from 'react-intl-formatted-duration';

class VideoGallery extends React.Component{

  videoCards(){
    return this.props.videos.map((video) => 
      this.videoCard(video)
    );
  }

  smallText(time){
    if (typeof time.duration !== 'undefined') {
      return(
        <FormattedDuration seconds={time.duration / 1000} format="{hours} {minutes} {seconds}" />
      )
    } else if (typeof time.scheduled !== 'undefined') {
      return (
        <FormattedDate value={time.scheduled} />
      )
    }
  }

  videoCard(video) {
    return (
      <a className="album-card" href={'https://www.youtube.com/watch?v=' + video._id} target="_blank">
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
