((app) => {

  const search = document.getElementById("search");
  let query = window.location.search;
  const loader = document.getElementById("loader");
  const searchIconClean = document.getElementById("searchIconClean");
  const searchIcon = document.getElementById("searchIcon");
  const apiKey = "af93130f2dd3408cbbd9729b0ce176f0";

  const result = document.getElementById("result");

  handleSubmit = () => {

    let location = window.location.search.split("?q=")
    query = search.value || location[1] || "";

    if (location[1]) {
      search.value = location[1]
    }

    search.setAttribute("value", query);

    if (search.value) {
      searchIconClean.style.visibility = "visible";
    }

    if (search.value || location[1]) {
      showLoader();
    }

    callApi(query).then((response) => {

      return response.json();
    }).then((responseJson) => {
      renderGif(responseJson, result)
    }).catch((error) => {
      console.log(error);
    }).then(() => {
      hideLoader();
    })
  }

  showLoader = () => {
    loader.style.visibility = "visible";
  };

  hideLoader = () => {
    loader.style.visibility = "hidden";
  };

  showClearInput = e => {

    const lengthInput = e.split("");

    if (lengthInput.length > 1) {
      searchIconClean.style.visibility = "visible";
    } else {
      searchIconClean.style.visibility = "hidden";
    }
  };

  callApi = (query) => fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  renderGif = (response, container) => {

    const numberItems = document.getElementById("numberItems");
    numberItems.innerText = '';
    let resultsBuffer = '';

    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }

    if (response && response.data.length > 0) {
      for (let i = 0; i < response.data.length; i++) {

        const containerGif = document.createElement("div");
        containerGif.setAttribute("class", "gif");

        const buttonGif = document.createElement("span");
        buttonGif.setAttribute("class", "fa fa-star favoritedBtn");
        buttonGif.setAttribute("onclick", "app.favorited.saveGif(this.previousSibling,this)");

        const imgGif = document.createElement("img");
        imgGif.setAttribute("id", "imgGif");
        imgGif.setAttribute("src", response.data[i].images.downsized.url);
        imgGif.setAttribute("alt", response.data[i].slug);
        imgGif.setAttribute("width", "200");
        imgGif.setAttribute("height", "200");

        imgGif.setAttribute("onmouseover", "showAddFavorite(this)");


        resultsBuffer += result.appendChild(containerGif);
        resultsBuffer += containerGif.appendChild(imgGif);
        resultsBuffer += containerGif.appendChild(buttonGif);
      }

      numberItems.innerText = "Il y a " + response.data.length + " éléments"

    } else if (search.value) {
      numberItems.innerText = "Aucun résultat :(";
    } else {
      numberItems.innerText = '';
    }
  };

  clearInput = () => {
    search.value = "";
    searchIconClean.style.visibility = "hidden";
    renderGif();
  };

  showAddFavorite = (container) => {
    container.nextSibling.style.visibility = "visible";
  };



  searchIconClean.addEventListener("click", clearInput)
  search.addEventListener("change", handleSubmit())

  app.render = {
    handleSubmit,
    callApi,
    renderGif,
    clearInput,
    showClearInput,
    initPage() {
      conditionnalRendering(e);
    }
  }

})(window.app);
