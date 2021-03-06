export const addRecipe = (recipeItems, recipeToAdd) => {

    const existingRecipe = recipeItems.find(
        recipeItem => recipeItem.id === recipeToAdd.id
    );

    if (existingRecipe) {
        return recipeItems.map((recipeItem) => recipeItem.id === recipeToAdd.id ? {
            ...recipeItem
        } : recipeItem)
    }

    return [...recipeItems, { ...recipeToAdd }]
};

export const addFavouritesFunction = (recipeItems, recipeToAdd) => {

    const existingRecipe = recipeItems.find(
        recipeItem => recipeItem.id === recipeToAdd.id
    );


    if (existingRecipe){
        return  recipeItems.map((recipeItem) => recipeItem.id === recipeToAdd.id ?  { ...recipeItem } : recipeItem )
    }

   
    return [...recipeItems, {...recipeToAdd}]
};


