import {
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  gifs: [],
  visibleLoader: false,
};

const gif = (state = initialState, action) => {

  switch (action.type) {
    case SEARCH_GIFS_SUCCESS:
      return {
        ...state,
        gifs: action.gifs,
        visibleLoader: false
      };
    case SEARCH_GIFS_ERROR:
      return {
        ...state,
        visibleLoader: false
      };
    default:
      return state
  }
}

export default gif;
