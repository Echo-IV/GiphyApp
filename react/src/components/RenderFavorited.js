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

  render(){

    const favorited = localStorage.getItem("favorited");

    const favoritedGifs = JSON.parse(favorited).map((gif) =>

      <div key={gif.id}>
        <img onClick={(e) => this.removeGif(e)} src={gif.link} alt={`favoris ${gif.id}`} width="200" height="200"/>
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
