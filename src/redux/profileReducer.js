import {
    usersAPI,
    profileAPI,
} from "../api/api"
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";


let initialState = {
    postData: [{
            massage: "Я сегоня пил молоко",
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
    ],
    profile: null,
    status: "",

}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                massage: action.newTextPost,
                id: 5,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        }
        
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
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
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state;
    }

}


export const addPostActionCreator = (newTextPost) => ({
    type: ADD_POST,
    newTextPost: newTextPost
});


export const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatusAC = (status) => ({
    type: SET_STATUS,
    status
})

export const savePhotoAC = (photos) => ({
    type: SAVE_PHOTO,
    photos
})


export const savePhoto = (file)=>{
    return (dispacth) => {
        profileAPI.savePhoto(file)
            .then(r =>{
                if (r.data.resultCode === 0) {
                    console.log(r.data)
                    dispacth(savePhotoAC(r.data.data.photos))
                }
            });
    }
}

export const setProdileThunkCreactor = (userId) => {
    return (dispacth) => {
        usersAPI.getProfile(userId)
            .then(r =>{
                
                dispacth(setUserProfileAC(r.data))
            });
    }
}

export const getStatusThunkCreactor = (id) => {
    return (dispacth) => {
        profileAPI.getStatus(id)
            .then(r =>{   
                dispacth(setStatusAC(r.data))
            });
    }
}

export const updateStatusThunkCreactor = (status) => {
    return (dispacth) => {
        profileAPI.updateStatus(status)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispacth(setStatusAC(status))
                }});
    }
}




export default profileReducer;