const initialState = {
  query: '',
  gifs: [],
  visibleLoader: false,
  favorited: [],
  hideClearInput: true
};

const gif = (state = initialState, action) => {

  switch (action.type) {
    case 'SEARCH_GIFS':
      return {
        ...state,
        query: action.query,
        visibleLoader:true
      }
    case 'GET_GIFS':
      return {
        ...state,
        gifs: action.gifs,
        visibleLoader:false
      }
    case 'IS_HIDE_CLEAR_INPUT':
      return {
        ...state,
        isHideClearInput: action.isHideClearInput
      }
    default:
      return state
  }
}

export default gif;
