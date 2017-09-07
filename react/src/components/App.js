import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getGif, getFavorited } from '../actions/actions';
import Gif from './gif';

class App extends Component {
  render() {
    return (
      <div>
        <Gif/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    query: state.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGifSubmit: query => {
      dispatch(getGif(query))
    },
    onSelectFavorited: favorited => {
      dispatch(getFavorited(favorited))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
