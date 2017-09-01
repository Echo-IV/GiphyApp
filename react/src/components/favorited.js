import React, {Component} from 'react';
import RenderFavorited from './RenderFavorited';
import Gif from './gif';

class Favorited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: true
    }
  }



  getGifs() {
    this.setState({isFavorited: false});
  }

  render() {
    return (
      <div>
        {this.state.isFavorited
          ? <div>
              <header>
                <h1>Giphy App !</h1>
                <ul>
                  <li>
                    <a onClick={() => this.getGifs()}>Chercher un gif</a>
                  </li>
                </ul>
              </header>

              <main>
                <div>
                  <RenderFavorited/>
                </div>
              </main>
            </div>
          : <Gif/>}
      </div>
    )
  }
}

export default Favorited;
