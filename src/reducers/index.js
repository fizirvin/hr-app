import { combineReducers } from 'redux'
import { profilesReducer } from './profilesReducer'
import { profileReducer } from './profilesReducer'

export default combineReducers({
    profiles: profilesReducer,
    profile: profileReducer
})