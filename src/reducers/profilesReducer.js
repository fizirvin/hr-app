const profilesReducer = (state = [], action) =>{
    if(action.type === 'FETCH_PROFILES'){
        return action.payload
    }
    return state
}

const profileReducer = (selected = null, action) =>{
    if(action.type === 'PROFILE_SELECTED'){
        return action.payload
    }
    return selected
}

export {
    profilesReducer, profileReducer
}