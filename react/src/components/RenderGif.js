import React, { Component } from 'react';

class RenderGif extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSelected:false
    }
  }

  render(){
    const gifs = this.props.gifs.map((gif) =>
      <div className="gifContainer" key={gif.id}>
        <img src={gif.images.downsized.url} alt={gif.slug} width="200" height="200"/>
        <span onClick={(e) => this.props.saveGif(e)} className={"fa fa-star" + (this.state.isSelected ? "selected" : "")}></span>
      </div>
    )

    return (
      <div>
        <div className="result">
          {gifs}
        </div>
        {window.location.search ?
          <p className="numberItems">Il y a {this.props.gifs.length} éléments</p>
          : null }
      </div>
    )
  }
}

export default RenderGif;
