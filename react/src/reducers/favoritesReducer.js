import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/actionTypes.js';

const favoritesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.favorite];
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite.id !== action.id);
    default:
      return state;
  }
}

export default favoritesReducer;
