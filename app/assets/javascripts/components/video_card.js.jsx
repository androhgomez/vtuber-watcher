var VideoCard = React.createClass({

  smallText: function(){
    if (this.props.video.time.duration) {
      return (
        <p>Duration text</p>
      );
    } else if (this.props.video.time.scheduled) {
      return (
        <p>Scheduled text</p>
      )
    }
  },

  render: function() {
    return (
      <a className="album-card" href={'https://www.youtube.com/watch?v=' + this.props.video._id} target="_blank">
        <div className="col">
          <div className="card shadow-sm">
            <img aria-label="Placeholder: Thumbnail" focusable="false" preserveAspectRatio="xMidYMid slice" src={'https://img.youtube.com/vi/' + this.props.video._id + '/hqdefault.jpg'}/>
              <div className="card-body">
                  <p className="card-text">{this.props.video.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{this.smallText()}</small>
                  </div>
              </div>
          </div>
        </div>
      </a>
    );
  }
});
