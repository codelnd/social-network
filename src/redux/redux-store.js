import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

const store = createStore()

export default store
