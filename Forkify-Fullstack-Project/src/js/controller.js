// console.log("test")
import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import "regenerator-runtime/runtime.js";
import 'core-js/stable';


// const recipeContainer = document.querySelector('.recipe');



const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner()
    // 1. Loading Recipe
    await model.loadRecipe(id)

    // 2. Rendering Recipe
    recipeView.render(model.state.recipe)

    
  } catch (err) {
    console.log(err);
    recipeView.renderError()
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query)
  } catch (error) {
    
  }
  
};


const init = function() {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults)
};
init();

// window.addEventListener('Load', showRecipe)
// window.addEventListener('hashchange', showRecipe)