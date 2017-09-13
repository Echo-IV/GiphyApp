import React, { Component } from 'react';
import Gif from './Gif';

class DisplayGifs extends Component {

  render() {

    const { favorites, gifs, remove, add } = this.props;

    return (
      <div className="result">
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            data={gif}
            favorites={favorites}
            remove={remove}
            add={add}
          />
        ))}

      </div>
    )
  }
}


export default DisplayGifs;