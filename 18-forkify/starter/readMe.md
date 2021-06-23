# Forkify App

## Starter install

npm install -g npm
npm i parcel@next -D
npm i sass@next -D
npm i core-js regenerator-runtime // Polyfilling
npm start

---

## Concept

1-UStories
2-features

## Architecture plan

###### architecture -> structure - maintainability - expandability

- architecture -> Model View Controller
- controller.js refactoring to (model.js, recipeView.js)

## New Code

- spinner

#### Update -> Create new virtual DOM -> compare change DOM|DOM -> set virtual DOM changed attributes to current DOM

- const newDOM = document.createRange().createContextualFragment(newMarkup);
- const newElements = Array.from(newDOM.querySelectorAll('\*'));
- const curElements = Array.from(this.\_parentElement.querySelectorAll('\*'));

- newElements.forEach((newEl, i) => {
  const curEl = curElements[i];

###### Change text

- if (
  !newEl.isEqualNode(curEl) &&
  newEl.firstChild?.nodeValue.trim() !== ''
  )
  curEl.textContent = newEl.textContent;

###### Change attributes

- if (!newEl.isEqualNode(curEl)) {
  Array.from(newEl.attributes).forEach(attr =>
  curEl.setAttribute(attr.name, attr.value)
  );
  }
  });

##### hash

- const id = window.location.hash.slice(1);
- fetch : url(...${id});

- ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

##### npm fractional

- ${this.#data.ingredients.map(this.#generateMarkupIngredients).join('')}

##### modul x2 (project configuration, helper functions)

config: API_URL, TIMEOUT_SEC
helper: setTimeout(), getJSON( res = Promise.race([fetch, setTimeout(TIMEOUT_SEC)]))

---

##### publisher-suscriber pattern view-controller

##### implementing error and success message

- Throw err -> last catch err -> renderErrorView() -> 'User Message error';

##### Search

- state <- await model.loadSearchResults('pizza');
- searchView.js - view.js -> class View -> searchView extends View
- getSearchResult -> return arraySelectedNumberResults -> render
- arraySelectedNumberResults -> state.search.result -> paginationView.js
- paginationView -> addHandlerClick -> dataset goto page

#### Planning phase II

- Update servings/ing -> model.state.recipe.ing\*newServ/servings
- recipeView.addHandledUpDateServings -> dataset -> +updapteTo +/- 1

#### Update Dom
