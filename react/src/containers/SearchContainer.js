import Search from '../components/Search';
import { connect } from 'react-redux';
import { removeFromFavorites, addToFavorites } from '../actions/favoritesActions';

const mapStateToProps = ({ search, favorites }) => {

  return {
    gifs: search.gifs,
    favorites,
    visibleLoader: search.visibleLoader
  }
}

const mapDispatchToProps = {
  removeFromFavorites,
  addToFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
