export const setSearchQuery = query =>({
    type : 'SET_SEARCH_QUERY',
    payload : query
});

export const setParameters = query =>({
    type : 'SET_PARAMETERS',
    payload : query
});
export const setDishType = dishType =>({
    type : 'SET_DISH',
    payload : dishType
});
export const setMealType = mealType =>({
    type : 'SET_MEAL',
    payload : mealType
});
export const setCuisineType = cuisineType =>({
    type : 'SET_CUISINE',
    payload : cuisineType
});

export const setSearchCount = count =>({
    type : 'SET_SEARCH_COUNT',
    payload : count
});