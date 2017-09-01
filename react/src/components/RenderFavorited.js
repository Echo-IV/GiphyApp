import React, { Component } from 'react';

class RenderFavorited extends Component {
  constructor(props){
    super(props);
  }

  removeGif(e) {
    const itemsGif = JSON.parse(localStorage["favorited"]);

    itemsGif.forEach(gif => {
      itemsGif.splice(gif, 1);
    })

    const updateGif = JSON.stringify(itemsGif);
    localStorage.setItem("favorited", updateGif);

  }

  removeGifToFavorite(e){
    if(e.target.classList.contains("selected")){
      e.target.classList.remove("selected")
    }else{
        e.target.classList.add("selected");
    }


    this.removeGif(e)
  }

  render(){

    const favorited = localStorage.getItem("favorited");

    const favoritedGifs = JSON.parse(favorited).map((gif) =>

      <div className="gifContainer" key={gif.id}>
        <img src={gif.link} alt={`favoris ${gif.id}`} width="200" height="200"/>
          <span onClick={(e) => this.removeGifToFavorite(e)} className="fa fa-star"></span>
      </div>
    )

    return (
      <div>
        <div className="favorited">
          {favoritedGifs}
        </div>
      </div>
    )
  }
}

export default RenderFavorited;
