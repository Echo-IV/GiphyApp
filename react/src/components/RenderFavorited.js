import React, { Component } from 'react';

class RenderFavorited extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const favorited = localStorage.getItem("favorited");

    const gifs = JSON.parse(favorited).map((gif) =>
      <div key={gif.id}>
        <img src={gif}/>
      </div>
    )

    return (

    )
  }
}

export default RenderFavorited;
