const profilesReducer = (state = [], action) =>{
    if(action.type === 'FETCH_PROFILES'){
        return action.payload
    }
    return state
}

export {
    profilesReducer
}