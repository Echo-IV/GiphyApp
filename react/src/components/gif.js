import React, { Component } from 'react';

class Gif extends Component {

  handleFavoriteButtonClick = (gif, favorites) => {

    const match = favorites.filter((favorite) => favorite.id === gif.id);

    if (!match.length) {
      this.props.add(gif);
    } else {
      this.props.remove(gif.id)
    }
  }

  render() {

    const { data, favorites } = this.props;

    const match = favorites.filter((favorite) => favorite.id === data.id);

    return (
      <div className="gifContainer" key={data.id}>
        <img src={data.images.downsized.url} alt={`favoris ${data.id}`} />
        <span onClick={() => this.handleFavoriteButtonClick(data, favorites)} className={"fa fa-star " + (match.length ? "selected" : '')} />
      </div>
    )
  }
}

export default Gif;