// @ts-ignore
import { usersAPI, profileAPI,} from "../api/api.ts"
import { photoType } from "../types/types";
import {  postDataType, profileType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { AppStateType } from "./reduxStore";
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";
const SET_INFO_PROFILE = "SET_INFO_PROFILE"

 

let initialState = {
    postData: [{
        massage: "Я сегодня пил молоко",
        id: 1
    },
    {
        massage: "Мы все живем тут",
        id: 2
    },
    {
        massage: "Мы все умрем",
        id: 3
    },
    {
        massage: "Сегодня выдел кошку",
        id: 4
    },
    ] as Array<postDataType>,
    profile: null as profileType | null,
    status: "",
    newMassageText:  ""
}

export type initialStateType = typeof initialState;
type ActionsType = addPostActionCreatorType | setUserProfileACType | setStatusACType | savePhotoACType | SumbitInfoACType
const profileReducer = (state = initialState, action: ActionsType): initialStateType => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                massage: action.newTextPost,
                id: 5,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newMassageText:""
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile as profileType
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SAVE_PHOTO: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as profileType
            }
        }

        case SET_INFO_PROFILE: {
            return {
                ...state,
                profile: { ...state.profile, ...action.data } as profileType
            }
        }

        default:
            return state;
    }

}


type addPostActionCreatorType = {
    type: typeof ADD_POST,
    newTextPost: string
}

type setUserProfileACType = {
    type: typeof SET_USER_PROFILE,
    profile: object
}
type setStatusACType = {
    type: typeof SET_STATUS,
    status: string
}
type savePhotoACType = {
    type: typeof SAVE_PHOTO,
    photos: photoType
}
type SumbitInfoACType = {
    type: typeof SET_INFO_PROFILE,
    data: object
}

type DispathType = Dispatch<ActionsType>
type ThunkActionType = ThunkAction <void, AppStateType, unknown, ActionsType>

export const addPostActionCreator = (newTextPost: string): addPostActionCreatorType => ({
    type: ADD_POST,
    newTextPost: newTextPost
});


export const setUserProfileAC = (profile: object): setUserProfileACType => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatusAC = (status: string): setStatusACType => ({
    type: SET_STATUS,
    status
})

export const savePhotoAC = (photos: any): savePhotoACType => ({
    type: SAVE_PHOTO,
    photos
})

export const SumbitInfoAC = (data: object): SumbitInfoACType => ({
    type: SET_INFO_PROFILE,
    data
})



export const savePhoto = (file: object):ThunkActionType => {
    return (dispacth: DispathType) => {
        profileAPI.savePhoto(file)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispacth(savePhotoAC(r.data.data.photos))
                }
            });
    }
}

export const setProdileThunkCreactor = (userId: number):ThunkActionType => {
    return (dispacth: DispathType) => {
        usersAPI.getProfile(userId)
            .then(r => {

                dispacth(setUserProfileAC(r.data))
            });
    }
}

export const getStatusThunkCreactor = (id: number):ThunkActionType => {
    return (dispacth: DispathType) => {
        profileAPI.getStatus(id)
            .then(r => {
                dispacth(setStatusAC(r.data))
            });
    }
}

export const updateStatusThunkCreactor = (status: string):ThunkActionType => {
    return (dispacth: DispathType) => {
        profileAPI.updateStatus(status)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispacth(setStatusAC(status))
                }
            });
    }
}

export const onSumbitInfo = (data: any) => {
    return (dispacth: DispathType) => {
        profileAPI.getSumbitInfo(data)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispacth(SumbitInfoAC(data))
                }
            });
    }
}




export default profileReducer;