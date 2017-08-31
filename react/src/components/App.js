import React, { Component } from 'react';
import RenderGif from './RenderGif';
import gifService from '../services/gifService';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        query:'',
        gifs: [],
        visibleLoader: false,
        favorited:[]
      }
    }



    handleShowClearInput(e){
      //console.log(e);
    }

    toggleLoader(){
      this.setState({visibleLoader: !this.state.visibleLoader});
    }

    RenderGif(){

      const apiKey = "af93130f2dd3408cbbd9729b0ce176f0";

      gifService.getGif(apiKey,this.state.query).then((response) => {
        return response.json();
      }).then((responseJson) => {
        this.setState({gifs:responseJson.data});
      }).catch((error) => {
        console.log(error);
      }).then(() => {
        this.toggleLoader();
      })
    }

    handleSubmit(event){

      event.preventDefault();
      this.RenderGif()
    }

    handleChange(event){
       this.setState({query: event.target.value});
    }

    saveGif(container){
      const favorited = [];
      const id = Date.now();
      parseInt(localStorage['id'], id);
      const link = container.target.src;
      favorited.push({link,id})
      localStorage.setItem("favorited", JSON.stringify(favorited));
    }

    render(){


        return (
            <div>
              <header>
                <h1>Giphy App !</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="searchIcon">
                    <button className="fa fa-search"></button>
                  </div>
                    <input name="q" type="text" onChange={(e) => this.handleChange(e)} value={this.state.query} onKeyPress={(e) => this.handleShowClearInput(e)}/>
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
                  <RenderGif gifs={this.state.gifs} saveGif={this.saveGif} />
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
