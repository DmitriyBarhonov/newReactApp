import { addPostActionCreator } from '../../../redux/profileReducer.ts';
import { MyPosts } from './myPosts';
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        // newPostText: state.postPage.newPostText,
        postText: state.postPage.postData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newText) => {
            dispatch(addPostActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);