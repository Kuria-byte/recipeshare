import { addRecipe, addFavouritesFunction } from './recipe.utils'

const INITIAL_STATE = {
    recipe: [],
    userRecipes: [],
    favouriteRecipes: [],
}


const recipeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_RECIPE':
            return {
                ...state,
                recipe: action.payload
            }
        case 'ADD_RECIPE_BOOKMARK':
            return {
                ...state,
                recipe: addRecipe(state.recipe, action.payload)
            }
        case 'ADD_FAVOURITE':
            return {
                ...state,
                favouriteRecipes: addFavouritesFunction(state.recipe, action.payload)
            }
        case 'FETCH_USER_RECIPES':
            return {
                ...state,
                userRecipes: action.payload
            }

        default:
            return state;
    }

}

export default recipeReducer;