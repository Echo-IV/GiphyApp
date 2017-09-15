import {
  SEARCH_GIFS,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR
} from '../actions/actionTypes';

const initialState = {
  gifs: []
};

const gif = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        query: action.query
      };
    case SEARCH_GIFS_SUCCESS:
      return {
        ...state,
        gifs: action.gifs
      };
    case SEARCH_GIFS_ERROR:
      return {
        ...state
      };
    default:
      return state
  }
}

export default gif;
