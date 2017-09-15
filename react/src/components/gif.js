import React, { Component } from 'react';

class Gif extends Component {

  state = {
    isImageLoading: false
  }

  handleFavoriteButtonClick = (gif, favorites) => {

    const match = favorites.filter((favorite) => favorite.id === gif.id);

    if (!match.length) {
      this.props.add(gif);
    } else {
      this.props.remove(gif.id)
    }
  }

  handleLoadingImage = () => {

    this.setState({ isImageLoading: true })
  }

  render() {

    const { data, favorites, loading } = this.props;

    const match = favorites.filter((favorite) => favorite.id === data.id);

    return (
      <div>

        <div className="gifContainer" key={data.id}>

          {this.state.isImageLoading ? null : <div className="responseImage">
            <div className="loaderImage"></div>
          </div>}
          <img onLoad={this.handleLoadingImage} src={data.images.downsized.url} alt={`favoris ${data.id}`} width="200" height="200" />

          {this.state.isImageLoading ? <span
            onClick={() => this.handleFavoriteButtonClick(data, favorites)}
            className={"fa fa-star " + (match.length ? "selected" : '')}
          /> : null}

        </div>

      </div>
    )
  }
}

export default Gif;