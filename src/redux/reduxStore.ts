import {applyMiddleware, combineReducers,createStore } from 'redux'
// @ts-ignore
import profileReducer from "./profileReducer.ts";
// @ts-ignore
import dialogsReducer from "./dialigsReducer.ts";
// @ts-ignore
import usersReducer from "./usersReducer.ts"
// @ts-ignore
import authReducer from "./authReducer.ts"
// @ts-ignore
import appReducer from "./appReducer.ts"
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    postPage: profileReducer, 
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducerType = typeof reducers
type PropertTypes<T> = T extends {[key: string]: infer U} ? U : never
export type inferActionTypes<T extends {[key: string]: (...arg:[any])=> any}> = ReturnType<PropertTypes<T>>
export type AppStateType = ReturnType<RootReducerType>


let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

export default storeRedux;

