import React, { Component } from 'react';
import RenderGif from './RenderGif';

class App extends Component {

    handleShowClearInput(e){
      console.log(e);
    }

    render(){
        return (
            <div>
              <header>
                <h1>Giphy App !</h1>
                <form>
                  <div className="searchIcon">
                    <button className="fa fa-search">

                    </button>
                  </div>
                    <input onSubmit={(query) => console.log("test")} onKeyPress={(e) => this.handleShowClearInput(e)}/>
                    <span></span>
                </form>
                <ul>
                  <li>
                     <a href="#">Favoris</a>
                  </li>
                </ul>
              </header>

              <main>
                <div>
                  <div></div>
                </div>
                <div>
                  <RenderGif />
                </div>
              </main>


            <footer>
              <div></div>
            </footer>

            </div>
        )
    }
}

export default App;
