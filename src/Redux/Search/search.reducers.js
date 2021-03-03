
const INITIAL_STATE = {
    query: "",
    dishType: "",
    mealType: "",
    cuisineType: "",
    count: 10
}


const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                query: action.payload
            }
        case 'SET_DISH':
            return {
                ...state,
                dishType: action.payload
            }

        case 'SET_MEAL':
            return {
                ...state,
                mealType: action.payload
            }

        case 'SET_CUISINE':
            return {
                ...state,
                cuisineType: action.payload
            }
        case 'SET_SEARCH_COUNT':
            return {
                ...state,
                count: action.payload
            }

        default:
            return state;
    }

}

export default searchReducer;