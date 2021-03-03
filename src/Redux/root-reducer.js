import { combineReducers } from "redux";
import searchReducer from "./Search/search.reducers"
import recipeReducer from './Recipes/recipe.reducers'
import userReducer from "./User/user.reducer";


export default combineReducers ({
    query : searchReducer,
    recipes : recipeReducer,
    user: userReducer
});