import React, { Component } from 'react';
import DisplayGifs from './DisplayGifs';
import Header from './Header';

class Favorites extends Component {

  render() {

    return (
      <div>
        <Header history={this.props.history} />
        <div className="favorited">
          <DisplayGifs
            gifs={this.props.favorites}
            remove={this.props.removeFromFavorites}
            favorites={this.props.favorites}
          />
        </div>
      </div>
    )
  }
}

export default Favorites;