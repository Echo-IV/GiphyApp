function getGif(apiKey,query){
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json'
    }
  })
}

export default  { getGif };
