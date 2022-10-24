import { connect } from 'react-redux'
import { follow, unFollow, setCurntPage, getUsersThunkCreator, setfollowingInProgress, followThunkCreator, umFollowThunkCreator } from "../../redux/usersReducer"
import React from 'react'
import { Users } from './users';
import { Loader } from '../common/preloader/loader';
import { withAuthRedirect } from "./../Hoc/AuthRedirect"
import { compose } from 'redux';
import {getUsersSuperSelector, getPageSize, getUserCount, getCurntPage, getFetching, getFollowingIn} from '../../redux/usersSelectors';


export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.curntPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Loader /> : <Users pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChange={this.onPageChange}
                curntPage={this.props.curntPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                setFetching={this.props.setFetching}
                followThunkCreator={this.props.followThunkCreator}
                umFollowThunkCreator={this.props.umFollowThunkCreator}
                isAuth={this.props.isAuth}
            />}

        </>
    }
}



let mapStateToProps = (state) => {
    
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUserCount(state),
        curntPage: getCurntPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingIn(state),
    }
}



export const UsersContainer = compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurntPage,
        getUsersThunkCreator,
        setfollowingInProgress,
        followThunkCreator,
        umFollowThunkCreator
    }),
    withAuthRedirect,
)(UsersAPIComponent);


