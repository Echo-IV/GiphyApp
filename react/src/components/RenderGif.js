import React from 'react';

  const RenderGif = () => {

    addGifToFavorite = (e) => {
      if(e.target.classList.contains("selected")){
        e.target.classList.remove("selected")
      }else{
          e.target.classList.add("selected");
      }
      this.props.saveGif(e);
    }

    const gifs = this.props.gifs.map((gif) =>
      <div className="gifContainer" key={gif.id}>
        <img src={gif.images.downsized.url} alt={gif.slug} width="200" height="200"/>
        <span onClick={(e) => this.addGifToFavorite(e)} className="fa fa-star"></span>
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

export default RenderGif;
