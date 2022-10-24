import {
    usersAPI,
    AuthAPI
} from "../api/api"
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}



const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            // console.log(action.data)
            return {
                ...state,
                ...action.data,
            }

            default:
                return state;
    }

}

export const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email,
        isAuth
    },

})


export const AuthUserDataThunkCreator = () => {
    return (dispatch) => {
        return usersAPI.authMe()
            .then(data => {
                
                if (data.resultCode === 0) {
                    let {
                        email,
                        id,
                        login
                    } = data.data;
                    
                    dispatch(setAuthUserData(email, id, login, true));
                }
            });

    }
}


export const loginThunkCreator = (email, password, remember) => {
    return (dispatch) => {
        AuthAPI.loginApi(email, password, remember)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(AuthUserDataThunkCreator())
                }
            });
    }
}

export const loginOutThunkCreator = () => {
    return (dispatch) => {
        AuthAPI.logiout()
            .then(data => {
                console.log()
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer;