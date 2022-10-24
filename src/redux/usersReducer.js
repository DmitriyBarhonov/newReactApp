import {usersAPI} from "../api/api"
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURNT_PAGE = "SET_CURNT_PAGE";
const SET_USER_COUNT = "SET_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    curntPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                }),
            }

            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {
                                ...u,
                                followed: true
                            }
                        }
                        return u
                    }),
                }

                case SET_USERS:

                    return {
                        ...state,
                        users: [...action.users]
                    }

                    case SET_CURNT_PAGE:

                        return {
                            ...state,
                            curntPage: action.curntPage
                        }

                        case SET_USER_COUNT:

                            return {
                                ...state,
                                totalUsersCount: action.totalUsersCount
                            }

                            case TOGGLE_IS_FETCHING:
                                return {
                                    ...state,
                                    isFetching: action.isFetching
                                }

                                case TOGGLE_IS_FOLLOWING_PROGRESS: {
                                    return {
                                        ...state,
                                        followingInProgress: action.followingInProgress
                                    }
                                }

                                default:
                                    return state;
    }


}

export const follow = (userID) => ({
    type: FOLLOW,
    id: userID
});
export const unFollow = (userID) => ({
    type: UNFOLLOW,
    id: userID
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurntPage = (numberPage) => ({
    type: SET_CURNT_PAGE,
    curntPage: numberPage
});

export const setUserCout = (userCout) => ({
    type: SET_USER_COUNT,
    totalUsersCount: userCout

})

export const setFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export const setfollowingInProgress =(followingInProgress)=>({
    type:TOGGLE_IS_FOLLOWING_PROGRESS ,
    followingInProgress: followingInProgress
})

export const getUsersThunkCreator = (curntPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        dispatch(setCurntPage(curntPage))
        usersAPI.getUsers(curntPage, pageSize)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUserCout(data.totalCount))
            });
    }
}
export const followThunkCreator = (id)=>{
    return (dispatch)=>{
       dispatch(setfollowingInProgress(true))
        usersAPI.unFollowAPI(id)
          .then(r => {
            if (r.data.resultCode === 0) {
              dispatch(unFollow(id))
            }
        dispatch(setfollowingInProgress(false))
          })
    }
}

export const umFollowThunkCreator = (id)=>{
    return (dispatch)=>{
       dispatch(setfollowingInProgress(true))
        usersAPI.followAPI(id)
          .then(r => {
            if (r.data.resultCode === 0) {
              dispatch(follow(id))
            }
            dispatch(setfollowingInProgress(false))
          })
    }
}



export default usersReducer;