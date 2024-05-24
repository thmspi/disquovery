
const suggestionList = document.getElementById("item-list");
const input = document.getElementById("text-input");
const template = document.querySelector("[list-item-template]");
const searchButton = document.getElementById("search-button");

window.addEventListener("load", fetchJSON("../json/suggestion.json"));

function fetchJSON(url) {
  // Récupérer le JSON à partir de l'URL fournie
  fetch(url)
  //then est une méthode qui retourne une promesse et prend en paramètre une
  //fonction callback qui sera exécutée une fois la promesse résolue
  .then(response => {
  // Vérifier si la réponse est correcte
    if (!response.ok) {
    // Si la réponse n'est pas correcte, lancer une erreur
    throw new Error('Network response was not ok');
    }
    // Si la réponse est correcte, retourner le JSON
    return response.json();
    })
  //then ici permettra de récupérer le JSON retourné par la promesse
  .then(data => {
  // Vérifier si le JSON est vide ou mal formé
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      // Si le JSON est vide ou mal formé, lancer une erreur
      throw new Error('Empty JSON or malformed JSON');
    }
    // Passer les intentions à la fonction sendMessage qui sera définie plus tard
    createCard(data.suggestions);
  })
  //catch est une méthode qui retourne une promesse et prend en paramètre une
  //fonction callback qui sera exécutée en cas d’erreur
  .catch(error => {
  // En cas d’erreur, afficher un message d’erreur dans la console
  console.error("There was a problem with the fetch operation:", error);
  }) ;
}


function createCard(suggestions) {
  newList = suggestions.map(suggestion => {
    const card = template.content.cloneNode(true).children[0];
    card.href = "./"+suggestion.path;
    card.textContent = suggestion.name[0].toUpperCase()+suggestion.name.slice(1);
    suggestionList.append(card);
    return {name : suggestion.name, keywords : suggestion.keywords, path : suggestion.path, element : card}
  }
  );
}

searchButton.addEventListener("click", search);

function search() {
  let elements = document.getElementsByClassName("suggestion-element");
  var i = 0;
  while(elements[i].classList.contains("hide") && i < elements.length) {
    i++;
  }
  if(i != elements.length) {
    window.location.replace(elements[i].href);
  } else {
    console.log("not found")
  }
}

function test(array, value) {
  let isIncluded = false;
  array.forEach(word => {
    if (word.includes(value)) {
      isIncluded =  true;
    }
  })
  return isIncluded;
}

input.addEventListener("input", (e)=> {
  const value = e.target.value.toLowerCase();
  newList.forEach(suggestion => {
    const isVisible = suggestion.name.includes(value) || test(suggestion.keywords, value);
    suggestion.element.classList.toggle("hide", !isVisible);
  })
})

input.addEventListener('keydown', (event) => {
  if (input.focus) {
    if (event.key === 'Enter') {
      search();
    }
  }
});

