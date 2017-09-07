export const getGif = query => {
  return {
    type: 'GET_GIFS',
    query
  }
}

export const getFavorited = favorited => {
  return {
    type: 'GET_FAVORITED',
    favorited
  }
}
