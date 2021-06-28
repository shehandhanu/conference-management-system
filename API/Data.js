import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer, userAuthReducer, userListReducer } from '../reducers/userReducer'
import { getResearchsReducer } from '../reducers/researchReducer'
import { getSessionReducer } from '../reducers/sessionReducer'
import { getNotificationReducer } from '../reducers/notificationReducer'

const reducer = combineReducers({

    user: userReducer,
    auth: userAuthReducer,
    research: getResearchsReducer,
    sessions: getSessionReducer,
    users: userListReducer,
    notification: getNotificationReducer

})

const userFromStorage = localStorage.getItem('User') ? JSON.parse
    (localStorage.getItem('User')) : []

let initialState = {
    user: userFromStorage
}

const middlware = [thunk];
const application = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware)));

export default application;