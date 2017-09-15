import React, { Component } from 'react';
import DisplayGifs from './DisplayGifs';
import Header from './Header';

class Search extends Component {

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.handleScroll(e));
    window.addEventListener('popstate', (e) => this.handleGoBack(e));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", (e) => this.handleScroll(e));
    window.removeEventListener("popstate", (e) => this.handleGoBack(e));
  }

  handleGoBack = () => {

    if (location.search !== "") {
      let params = new URLSearchParams(location.search);
      const query = params.get("q");
      const offset = 25;
      this.props.fetchGif(query, offset)
    } else {
      this.props.fetchGif("", 25)
    }
  }

  handleScroll = (e) => {

    let scrollPosition = e.target.body.scrollTop;
    let bodyHeight = document.body.offsetHeight;

    if (scrollPosition + 1000 > bodyHeight) {
      const offset = this.props.gifs.length + 20;
      this.props.fetchGif(this.props.query, offset);
    }
  }

  render() {

    const { location, gifs } = this.props;

    return (
      <div>
        <Header history={this.props.history} />

        <div>
          <DisplayGifs
            add={this.props.addToFavorites}
            remove={this.props.removeFromFavorites}
            favorites={this.props.favorites}
            gifs={this.props.gifs} />
        </div>

        {this.props.history.location.search ?
          <p className="numberItems">Il y a {this.props.gifs.length} éléments</p>
          : null}

      </div>
    )
  }
}

export default Search;