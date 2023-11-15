import { AppStateType, inferActionTypes } from './reduxStore';
// @ts-ignore
import { usersAPI } from "../api/api.ts"
import { userType } from "../types/types";
import { Dispatch } from "redux"
import { ThunkAction } from 'redux-thunk';

let initialState = {
    users: [] as Array<userType>,
    pageSize: 2,
    totalUsersCount: 0,
    curntPage: 1,
    isFetching: false,
    filter:{
        term:"",
        friend: null as null | boolean
    }
}

export const actions = {
    follow: (userID: number) => ({
        type: "FOLLOW",
        id: userID
    } as const),

    unFollow: (userID: number) => ({
        type: "UNFOLLOW",
        id: userID
    }as const),

    setUsers: (users: Array<userType>,) => ({
        type: "SET_USERS",
        users: users
    }as const),

    setCurntPage: (numberPage: number) => ({
        type: "SET_CURNT_PAGE",
        curntPage: numberPage
    }as const),

    setUserCout: (userCout: number) => ({
        type: "SET_USER_COUNT",
        totalUsersCount: userCout

    }as const),

    setFetching: (isFetching: boolean) => ({
        type: "TOGGLE_IS_FETCHING",
        isFetching: isFetching
    }as const),

    setfollowingInProgress: (followingInProgress: boolean) => ({
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        followingInProgress
    }as const),

    setFilter: (filter: any) => ({
        type: "SET_FILTER",
        filter
    }as const),
}

type ActionsType = inferActionTypes<typeof actions>

export type initialStateUserType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): initialStateUserType => {

    switch (action.type) {

        case 'SET_FILTER':{
            return {
                ...state,
               filter: action.filter
            }
        }

        case 'FOLLOW':
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
                })
            }

        case 'UNFOLLOW':
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

        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }

        case 'SET_CURNT_PAGE':

            return {
                ...state,
                curntPage: action.curntPage
            }

        case 'SET_USER_COUNT':

            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}


type dispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getUsersThunkCreator = (curntPage: number, pageSize: number, filter: any): ThunkType => {
    return (dispatch) => {
        dispatch(actions.setFetching(true))
        dispatch(actions.setCurntPage(curntPage))
        dispatch(actions.setFilter(filter))
        // console.log(filter.friend)
        usersAPI.getUsers(curntPage, pageSize, filter.term, filter.friend)
            .then(data => {
                dispatch(actions.setFetching(false))
                dispatch(actions.setUsers(data.items))
                dispatch(actions.setUserCout(data.totalCount))
            }); 
    }
}
export const followThunkCreator = (id: number): ThunkType => {
    return (dispatch: Dispatch<ActionsType>) => {
        usersAPI.unFollowAPI(id)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispatch(actions.follow(id))
                }
            })
    }
}

export const unFollowThunkCreator = (id: number) => {
    return (dispatch: dispatchType) => {
        usersAPI.followAPI(id)
            .then(r => {
                if (r.data.resultCode === 0) {
                    dispatch(actions.unFollow(id))
                }
            })
    }
}



export default usersReducer;