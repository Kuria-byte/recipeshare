export const setRecipe = recipe =>({
    type : 'SET_RECIPE',
    payload : recipe
});

export const addRecipeBookmark = (recipe) => ({
    type :'ADD_RECIPE_BOOKMARK',
    payload : recipe

});

