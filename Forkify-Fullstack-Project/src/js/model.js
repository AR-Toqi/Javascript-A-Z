import "regenerator-runtime/runtime.js";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJson } from "./helpers";


export const state = {
    recipe: {},
    search:{
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    },
    bookmarks: []
};

export const loadRecipe = async function (id){
    try {
        const data = await getJson(`${API_URL}${id}`)
            let {recipe} = data.data;
            state.recipe = {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url,
                image: recipe.image_url,
                servings: recipe.servings,
                cookingTime: recipe.cooking_time,
                ingredients: recipe.ingredients
            }

            const isBookmarked = state.bookmarks?.some(bookmark => bookmark.id === id);
            if (isBookmarked)
            state.recipe.bookmarked = true;
            else state.recipe.bookmarked = false;
            console.log(state.recipe)
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query
        const data = await getJson(`${API_URL}?search=${query}`)

       state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            }
        })

        state.search.page = 1;
        
    } catch (error) {
        console.log(error)
        throw error;
    }
    
};

export const getSearchResultsPage = function(page = state.search.page){

    state.search.page = page;
    const start = (page - 1)* state.search.resultsPerPage; //0
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};

// Update servings and ingredient quantities
export const updateServings = function (newServings) {
  // guard
  if (!state.recipe.servings || newServings <= 0) return;

  state.recipe.ingredients.forEach(ing => {
    if (ing.quantity != null) {
      ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    }
  });

  state.recipe.servings = newServings;
};

export const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);

    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
};
