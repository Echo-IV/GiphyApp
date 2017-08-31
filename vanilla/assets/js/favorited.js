((app) => {

  const favorited = [];
  const favoritedContainer = document.getElementById("favorited");

  renderGif = (gifs, container) => {

    gifs.forEach(gif => {

      const containerGif = document.createElement("div");
      containerGif.classList.add("gif");

      const imgGif = document.createElement("img");
      imgGif.setAttribute("src", gif.link);
      imgGif.setAttribute("alt", "favoris " + gif.id);
      imgGif.setAttribute("width", "200");
      imgGif.setAttribute("height", "200");

      const buttonGif = document.createElement("span");
      buttonGif.setAttribute("id", "btnGif");
      buttonGif.classList.add("fa", "fa-star")

      buttonGif.setAttribute("onclick", "removeGif(this)");

      container.appendChild(containerGif);
      containerGif.appendChild(imgGif);
      containerGif.appendChild(buttonGif);
    })
  };



  renderFavorites = favorites => {
    renderGif(favorites, favoritedContainer);
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
    container.classList.add("fa", "fa-star");
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
