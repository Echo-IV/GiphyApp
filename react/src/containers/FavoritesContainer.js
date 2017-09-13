import Favorites from '../components/Favorites';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';

const mapStateToProps = ({ favorites }) => {
  return {
    favorites
  }
}

const mapDispatchToProps = {
  removeFromFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);