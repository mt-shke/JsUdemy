# Forkify App

## Starter install

###### npm install -g npm
###### npm i parcel@next -D
###### npm i sass@next -D
###### npm i core-js regenerator-runtime // Polyfilling
###### npm start

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
