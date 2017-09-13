import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from './actionTypes';

export const addToFavorites = gif => ({
  type: ADD_FAVORITE,
  favorite: gif,
});

export const removeFromFavorites = id => ({
  type: REMOVE_FAVORITE,
  id
});