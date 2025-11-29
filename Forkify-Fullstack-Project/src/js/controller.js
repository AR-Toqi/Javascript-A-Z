// console.log("test")
import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import resultsView from './Views/resultsView.js';
import paginationView from './Views/paginationView.js';
import "regenerator-runtime/runtime.js";
import 'core-js/stable';


// const recipeContainer = document.querySelector('.recipe');



const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

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

    resultsView.renderSpinner()
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage())
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.renderError()
  }
  
};

const controlPagination = function (goToPage) {
  // render new results page
  resultsView.render(model.getSearchResultsPage(goToPage));
  // update pagination buttons
  paginationView.render(model.state.search);
};

// update servings handler
const controlServings = function (newServings) {
  // 1) update the state
  model.updateServings(newServings);

  // 2) re-render recipe view with updated state
  recipeView.render(model.state.recipe);
};


const controlAddBookmark = function() {
  // add/remove bookmark
  if (!model.state.recipe.bookmarked){
    model.addBookmark(model.state.recipe);
  }
  else {

    model.deleteBookmark(model.state.recipe.id);
  } 

  // update recipe view
  recipeView.render(model.state.recipe);
};


const init = function() {
  recipeView.addHandlerRender(showRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

// window.addEventListener('Load', showRecipe)
// window.addEventListener('hashchange', showRecipe)