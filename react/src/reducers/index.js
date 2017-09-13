import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';

const gifApp = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
});

export default gifApp;
