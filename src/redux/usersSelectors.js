import { createSelector } from "reselect"


const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users)=>{
    return users.filter(u=>true)
    
})


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
