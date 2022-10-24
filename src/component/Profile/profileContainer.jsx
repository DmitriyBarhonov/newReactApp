import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './profile';
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from "./../Hoc/AuthRedirect"
import { setUserProfileAC, savePhoto, getStatusThunkCreactor, updateStatusThunkCreactor, addPostActionCreator, setProdileThunkCreactor } from '../../redux/profileReducer';
import { compose } from 'redux';
import { profileAPI } from '..//../api/api'


export const withRouter = (Children) => {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}


class ProfileContainerAPI extends React.Component {

  refreshProfile(){
   
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.auth.id;
    }
    this.props.getStatusThunkCreactor(userId)
    this.props.setProdileThunkCreactor(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snaphot){
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile()
    }
  }
  render() {
    return <Profile {...this.props} 
    isOvner={!this.props.match.params.userId} 
    status={this.props.status}
     updateStatusThunkCreactor={this.props.updateStatusThunkCreactor}
     profile={this.props.profile}
     savePhoto={this.props.savePhoto}
      />
  }
}



let mapStateToProps = (state) => {
  // console.log(state)
  return {
    profile: state.postPage.profile,
    status: state.postPage.status,
    auth: state.auth,
  }
}

 const ProfileContainer = compose(
  connect(mapStateToProps, { setUserProfileAC, profileAPI, getStatusThunkCreactor, updateStatusThunkCreactor, addPostActionCreator, setProdileThunkCreactor, savePhoto }),
  withRouter,
  withAuthRedirect,
)(ProfileContainerAPI)

export default ProfileContainer;