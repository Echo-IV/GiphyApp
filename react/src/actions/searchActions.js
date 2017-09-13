import {
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR,
} from './actionTypes';

const GIPHY_API_KEY = 'af93130f2dd3408cbbd9729b0ce176f0';

export const searchGifsSuccess = gifs => {
  return {
    type: SEARCH_GIFS_SUCCESS,
    gifs
  }
}

export const searchGifsError = error => {
  return {
    type: SEARCH_GIFS_ERROR,
    error,
  }
}

export function fetchGif(query) {
  return dispatch => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(
      json => dispatch(searchGifsSuccess(json.data)),
      error => dispatch(searchGifsError(error))
      );
  }
}
