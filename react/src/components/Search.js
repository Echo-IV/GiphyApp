import React, { Component } from 'react';
import DisplayGifs from './DisplayGifs';
import Header from './Header';

class Search extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        {this.props.visibleLoader ?
          <div className="response">
            <div className="loader"></div>
          </div>
          
          : <div>
            <DisplayGifs
              add={this.props.addToFavorites}
              remove={this.props.removeFromFavorites}
              favorites={this.props.favorites}
              gifs={this.props.gifs} />
          </div>
        }
        {this.props.history.location.search ?
          <p className="numberItems">Il y a {this.props.gifs.length} éléments</p>
          : null}
      </div>
    )
  }
}

export default Search;