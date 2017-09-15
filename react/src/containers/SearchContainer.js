import Search from '../components/Search';
import { connect } from 'react-redux';
import { fetchGif } from '../actions/searchActions';
import { removeFromFavorites, addToFavorites } from '../actions/favoritesActions';

const mapStateToProps = ({ search, favorites }) => {

  return {
    gifs: search.gifs,
    query: search.query,
    favorites
  }
}

const mapDispatchToProps = {
  removeFromFavorites,
  addToFavorites,
  fetchGif
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
