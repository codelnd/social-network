import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

const store = createStore(rootReducer)

export default store
