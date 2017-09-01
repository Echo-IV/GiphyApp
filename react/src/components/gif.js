import React, {Component} from 'react';
import RenderGif from './RenderGif';
import Favorited from './favorited';
import gifService from '../services/gifService';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      gifs: [],
      visibleLoader: false,
      favorited: [],
      isFavorited: false,
      hideClearInput: true
    }
  }



  componentWillMount(){
    if(window.location.search != ''){
      let params = new URLSearchParams(window.location.search);
      const query = params.get("q");
      this.RenderGif(query);
    }
  }

  handleShowClearInput(e) {
    console.log(e.target.value)
    if(e.target.value.length > 1){
      this.setState({hideClearInput:false})
    }else{
      this.setState({hideClearInput:true})
    }
  }

  handleClearInput(){
     this.textInput.value = "";
  }

  toggleLoader() {
    this.setState({
      visibleLoader: !this.state.visibleLoader
    });
  }

  RenderGif(query) {

    this.setState({query})

    const apiKey = "af93130f2dd3408cbbd9729b0ce176f0";

    this.toggleLoader();

    gifService.getGif(apiKey, query).then((response) => {
      return response.json();
    }).then((responseJson) => {
      this.setState({gifs: responseJson.data});
    }).catch((error) => {
      console.log(error);
    }).then(() => {
      this.toggleLoader();
    })
  }

  handleSubmit(event) {

    this.RenderGif(this.state.query)
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  saveGif(container) {

    const favorited = [];
    const id = Date.now();
    parseInt(localStorage['id'], id);
    const link = container.target.previousSibling.src;
    favorited.push({link, id})
    localStorage.setItem("favorited", JSON.stringify(favorited));

  }

  getFavorited() {
    this.setState({isFavorited: true});
  }

  render() {
    return (
      <div>
        {this.state.isFavorited
          ? <Favorited/>
          : <div>
            <header>
              <h1>Giphy App !</h1>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="searchIcon">
                  <button className="fa fa-search"></button>
                </div>
                <input ref={(input) => {this.textInput = input}} name="q" type="text" onChange={(e) => this.handleChange(e)} value={this.state.query} onKeyDown={(e) => this.handleShowClearInput(e)}/>
                <span onClick={() => this.handleClearInput()} className={"fa fa-times searchIconClean" + (this.state.hideClearInput ? "hide" : "")}></span>
              </form>
              <ul>
                <li>
                  <a onClick={() => this.getFavorited()}>Favoris</a>
                </li>
              </ul>
            </header>

            <div>

              <main>
                <div className="response">
                  {this.state.visibleLoader ?
                  <div className="loader"></div> :
                  null }
                </div>

                <div>
                  <RenderGif gifs={this.state.gifs} saveGif={this.saveGif}/>
                </div>
              </main>

              <footer>
                <div></div>
              </footer>
            </div>
          </div>}
      </div>
    )
  }
}

export default Gif;
