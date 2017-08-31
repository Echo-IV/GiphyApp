import React, { Component } from 'react';

class RenderGif extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const gifs = this.props.gifs.map((gif) =>
      <div key={gif.id}>
        <img onClick={(e) => this.props.saveGif(e)} src={gif.images.downsized.url} alt={gif.slug} width="200" height="200"/>
        <span className="fa fa-star"></span>
      </div>
    )

    return (
      <div>
        <div className="result">
          {gifs}
        </div>
          <p className="numberItems">Il y a {this.props.gifs.length} éléments</p>
      </div>
    )
  }
}

export default RenderGif;
