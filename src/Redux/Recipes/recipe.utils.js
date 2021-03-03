export const addRecipe = (recipeItems, recipeToAdd) => {
    const existingCartItem = recipeItems.find(
        cartItem => cartItem.id === recipeToAdd.id
    );

    if (existingCartItem) {
        return recipeItems.map((recipeItem) => recipeItem.id === recipeToAdd.id ? {
            ...recipeItem, quantity: recipeItem.quantity + 1
        } : recipeItem)
    }

    return [...recipeItems, { ...recipeToAdd, quantity: 1 }]
};
