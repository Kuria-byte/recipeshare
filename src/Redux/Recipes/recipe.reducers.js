import { addRecipe} from './recipe.utils'

const INITIAL_STATE = {
    recipe: []
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

        default:
            return state;
    }

}

export default recipeReducer;