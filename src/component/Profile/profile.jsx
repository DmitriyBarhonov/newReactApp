import { MyPostsContainer } from './MyPosts/myPostsContainer';
import clases from './profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export const Profile = (props) => {
  
  
  return (
    <>
      <div className={clases.content}>
        <ProfileInfo 
        savePhoto={props.savePhoto}
          onSumbitInfo={props.onSumbitInfo}
          isOvner={props.isOvner}
          updateStatusThunkCreactor={props.updateStatusThunkCreactor}
          status={props.status}
           profile={props.profile} />
        <MyPostsContainer />
      </div>
    </>
  )
}