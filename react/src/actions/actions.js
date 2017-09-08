export const getGif = gifs => {
  return {
    type: 'GET_GIFS',
    gifs
  }
}

export const searchGif = query => {
  return {
    type: 'SEARCH_GIFS',
    query
  }
}

export function fetchGif(apiKey,query){
  return dispatch => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(getGif(json.data)));
  }
}

  export const showClearInput = isHideClearInput => {
  return {
    type: 'IS_HIDE_CLEAR_INPUT',
    isHideClearInput
  }
}
