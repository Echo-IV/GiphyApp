((app) => {

  const favorited = [];

  renderGif = (gifs, container) => {
    let favoritedBuffer = "";

    gifs.forEach(gif => {

      const containerGif = document.createElement("div");
      containerGif.setAttribute("class", "gif");

      const imgGif = document.createElement("img");
      imgGif.setAttribute("src", gif.link);
      imgGif.setAttribute("alt", "favoris " + gif.id);
      imgGif.setAttribute("width", "200");
      imgGif.setAttribute("height", "200");

      const buttonGif = document.createElement("span");
      buttonGif.setAttribute("class", "fa fa-star");
      buttonGif.setAttribute("onclick", "removeGif(this)");

      favoritedBuffer += container.appendChild(containerGif);
      favoritedBuffer += containerGif.appendChild(imgGif);
      favoritedBuffer += containerGif.appendChild(buttonGif);
    })
  };

  renderFavorites = favorites => {
    renderGif(favorites, document.getElementById("favorited"));
  };

  getFavoritesFromStorage = () => {

    const fav = localStorage.getItem("favorited");

    if (!fav) {
      return [];
    }
    return JSON.parse(fav);
  };

  removeGif = container => {
    localStorage.removeItem('favorited');
    container.setAttribute("class", "fa fa-star");
  };

  saveGif = (item, container) => {
    const id = Date.now();
    parseInt(localStorage['id'], id)
    container.classList.toggle("selected");
    const link = item.getAttribute("src");
    favorited.push({link, id});
    localStorage.setItem("favorited", JSON.stringify(favorited));
  };

  app.favorited = {
    renderGif,
    renderFavorites,
    getFavoritesFromStorage,
    saveGif,
    removeGif,
    initPage() {
      renderFavorites(getFavoritesFromStorage());
    }
  }

})(window.app);
