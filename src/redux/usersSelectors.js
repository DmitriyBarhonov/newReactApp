import { createSelector } from "reselect"


export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users)=>{
    return users.filter(u=>true)
    
})

export const getFilter = (state)=>{
    return state.usersPage.filter
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getUserCount = (state) => {
    return  state.usersPage.totalUsersCount
}

export const getCurntPage = (state) => {
    return state.usersPage.curntPage
}

export const getFetching = (state) => {
    return  state.usersPage.isFetching
}

export const getFollowingIn = (state) => {
    return state.usersPage.followingInProgress
}
