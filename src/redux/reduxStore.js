import {applyMiddleware, combineReducers,createStore } from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialigsReducer";
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import appReducer from "./appReducer"
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    postPage: profileReducer, 
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});


let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

window.storeRedux = storeRedux;

export default storeRedux;