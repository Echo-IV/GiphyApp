import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RenderGif from './RenderGif';
import { searchGif, getGif, fetchGif, hideClearInput, showClearInput } from '../actions/actions';

const apiKey = "af93130f2dd3408cbbd9729b0ce176f0";
const favorited = [];

class Gif extends Component {

  componentWillMount() {

    if (window.location.search != '') {

      let params = new URLSearchParams(window.location.search);
      const query = params.get("q");
      this.props.fetchGif(apiKey, query);
    }
  }

  handleShowClearInput(e) {

    if (e.target.value.length > 1) {
      this.props.showClearInput(true)
    } else {
        this.props.showClearInput(false)
    }
  }

  handleClearInput() {
    this.textInput.value = '';
    this.props.showClearInput(false);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchGif(this.textInput.value);
    this.props.fetchGif(apiKey, this.textInput.value);
  }

  saveGif(container) {

    const id = Date.now();
    parseInt(localStorage['id'], id);
    const link = container.target.previousSibling.src;

    favorited.push({link, id})
    console.log(favorited);
    localStorage.setItem("favorited", JSON.stringify(favorited));

  }

  render() {
    return (
      <div>
        <header>
          <h1>Giphy App !</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="searchIcon">
              <button className="fa fa-search"></button>
            </div>
            <input ref={(input) => {
              this.textInput = input
            }} name="q" type="text" onKeyDown={(e) => this.handleShowClearInput(e)}/>
            {this.props.isHideClearInput ?
                <span onClick={() => this.handleClearInput()} className={"fa fa-times searchIconClean"}></span>
            : null}
          </form>
          <ul>
            <li>
              <Link to="/favorited">Favoris</Link>
            </li>
          </ul>
        </header>

        <div>

          <main>
            <div className="response">
              {this.props.visibleLoader
                ? <div className="loader"></div>
                : null}
            </div>

            <div>
              <RenderGif gifs={this.props.gifs} saveGif={this.saveGif}/>
            </div>
          </main>

          <footer>
            <div></div>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ reducersGif }) => {

  return {
    gifs: reducersGif.gifs,
    visibleLoader: reducersGif.visibleLoader,
    favorited: reducersGif.favorited,
    isHideClearInput: reducersGif.isHideClearInput,
    query: reducersGif.query
  }
}

const mapDispatchToProps = {
  searchGif,
  fetchGif,
  showClearInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
