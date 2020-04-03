import React from 'react'

function News() {
return ( 
    <div class="container">
      <div>
        <div className="ui bulleted list">
          <a className="item" href="#link">List Link</a>
          <a className="item" href="#link">List Link</a>
          <a className="item" href="#link">List Link</a>
        </div>
        <div className="ui card">
          <a className="image" href="#link">
            <img src="/images/avatar/large/steve.jpg" />
          </a>
          <div className="content">
            <a className="header" href="#link">Steve Jobes</a>
            <div className="meta">
              <a className="time">Last Seen 2 days ago</a>
            </div>
          </div>
        </div>
        <div className="ui very relaxed items">
          <div className="item">
            <div className="image">
              <img src="/images/wireframe/image.png" />
            </div>
            <div className="content">
              <a className="ui header" href="#link">Link Header</a>
              <div className="description">
                <p>Ut imperdiet dignissim feugiat. Phasellus tristique odio eu justo dapibus, nec rutrum ipsum luctus. Ut posuere nec tortor eu ullamcorper. <a href="#link">Etiam pellentesque</a> tincidunt tortor, non sagittis nibh pretium sit amet. Sed neque dolor, blandit eu ornare vel, lacinia porttitor nisi. Vestibulum sit amet diam rhoncus, consectetur enim sit amet, interdum mauris. Praesent feugiat finibus quam, porttitor varius est egestas id.</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src="/images/wireframe/image.png" />
            </div>
            <div className="content">
              <a className="ui header" href="#link">Link Header</a>
              <div className="description">
                <p>Ut imperdiet dignissim feugiat. Phasellus tristique odio eu justo dapibus, nec rutrum ipsum luctus. Ut posuere nec tortor eu ullamcorper. <a href="#link">Etiam pellentesque</a> tincidunt tortor, non sagittis nibh pretium sit amet. Sed neque dolor, blandit eu ornare vel, lacinia porttitor nisi. Vestibulum sit amet diam rhoncus, consectetur enim sit amet, interdum mauris. Praesent feugiat finibus quam, porttitor varius est egestas id.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default News
