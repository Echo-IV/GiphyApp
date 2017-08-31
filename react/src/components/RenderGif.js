import React, { Component } from 'react';
import gifService from '../services/gifService';

class RenderGif extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibleLoader: false,
      gifs: []
    }
  }

  toggleLoader(){
    this.setState({visibleLoader: !this.state.visibleLoader});
  }

  componentWillMount() {

    const apiKey = "af93130f2dd3408cbbd9729b0ce176f0";
    const query = "cat";

    gifService.getGif(apiKey,query).then((response) => {
      return response.json();
    }).then((responseJson) => {
      this.setState({gifs:responseJson.data});
    }).catch((error) => {
      console.log(error);
    }).then(() => {
      this.toggleLoader();
    })
  }

  render(){

    const gifs = this.state.gifs.map((gif, i) =>
      <div key={gif.id}>
        <img src={gif.images.downsized.url} alt={gif.slug} width="200" height="200"/>
      </div>
    )

    return (
      <div>
        <div className="result">
          {gifs}
        </div>
          <p className="numberItems">Il y a {this.state.gifs.length} éléments</p>
      </div>
    )
  }
}

export default RenderGif;
