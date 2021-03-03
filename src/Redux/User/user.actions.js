 
 export const setCurrentUser = user =>({
    type : 'SET_CURRENT_USER',
    payload : user
});

export const logOut = () =>({
    type: 'LOG_OUT_USER'
});