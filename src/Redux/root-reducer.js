import { combineReducers } from "redux";
import searchReducer from "./Search/search.reducers"
import recipeReducer from './Recipes/recipe.reducers'


export default combineReducers ({
    query : searchReducer,
    recipes : recipeReducer
});