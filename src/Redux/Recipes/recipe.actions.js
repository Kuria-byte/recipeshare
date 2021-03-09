export const setRecipe = recipe =>({
    type : 'SET_RECIPE',
    payload : recipe
});

export const addRecipeBookmark = (recipe) => ({
    type :'ADD_RECIPE_BOOKMARK',
    payload : recipe

});

export const addFavourites = (recipe) => ({
    type :'ADD_FAVOURITE',
    payload : recipe

});

export const fetchUserRecipes = (userRecipes) => ({
    type :'FETCH_USER_RECIPES',
    payload : userRecipes

});


