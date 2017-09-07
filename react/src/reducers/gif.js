import gifService from '../services/gifService';


export const receiveGifs = gifs => ({
  type: 'RECEIVE_GIFS',
  gifs:gifs
})

export const getGif = () => dispatch => {
  gifService.getGif(gif => {
    dispatch(receiveGifs(gif))
  })
}

const gif = (state = [], action) => {
  //console.log(action.query, "action")
  switch (action.type) {
    case 'SEARCH_GIFS':
    return [
      ...state,
      {
        query:action.query
      }
    ]
    case 'GET_GIFS':
    return [
      ...state,
      {
        gifs: action.gifs
      }
    ]
    case 'GET_FAVORITED':
    return [
      ...state,
      {
        favorited: action.favorited
      }
    ]
    case 'SHOW_FAVORITED':
    return [
      ...state,
      {
        isFavorited: action.isFavorited
      }
    ]
    case 'SHOW_LOADER':
    return [
      ...state,
      {
        visibleLoader: action.visibleLoader
      }
    ]
    case 'SHOW_CLEAR_INPUT':
    return [
      ...state,
      {
        hideClearInput: action.hideClearInput
      }
    ]

    default:
      return state
  }
}

export default gif;
