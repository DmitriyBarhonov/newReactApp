// @ts-ignore
import { AuthUserDataThunkCreator } from "./authReducer.ts";
const SET_INITIALIZED = 'SET_INITIALIZED';

export type initialStateType ={
    initialized: boolean
}


let initialState: initialStateType = {
  initialized: false
}



const appReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

            default:
                return state;
    }

}

type setInitializedType ={
    type: typeof SET_INITIALIZED,
}

export const setInitializedAuthUserData = ():setInitializedType => ({
    type: SET_INITIALIZED,
})


export const initializeThunkCreator = () => {
    return (dispatch:any) => {
      let  promise = dispatch(AuthUserDataThunkCreator())
        promise.then(()=>{
            dispatch(setInitializedAuthUserData())
        })
    }
}


export default appReducer;