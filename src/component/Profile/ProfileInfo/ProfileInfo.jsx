import profileInfo from "./ProfileInfo.module.css"
import { Loader } from "../../common/preloader/loader";
import { StatusProfileHook } from "./StatusProfileHook";
import userPhoto from '../../../img/user.png'
import { useState } from "react";
import { ProfileDataForm } from "./ProfileDataForm";

export const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Loader />
    }
console.log(props)
    const maiPhotoSeled = (e) => {
        if (e.target.files[0]) {
            props.savePhoto(e.target.files[0])
        }
    }

  let profile = props.profile

    return (
        <>

            <div className={profileInfo.photo}>
                <img alt="we" src={profile.photos.large || userPhoto} className={profileInfo.main_photo} />
                <div>{props.isOvner && <input onChange={maiPhotoSeled} type="file" />}</div>
                <StatusProfileHook updateStatusThunkCreactor={props.updateStatusThunkCreactor} status={props.status} />
            </div>
            
            {editMode ? <ProfileDataForm/> : <ProfileData  isOvner={props.isOvner} setEditMode={setEditMode} profile={profile}/>}
        </>
    )
};

const ProfileData = ({profile,setEditMode, isOvner}) => {
    return <div>
        {isOvner ? <div><button onClick={()=>setEditMode(true)} >Редактировать</button></div> : null}
        <div>
            <b>Ищу работу:</b>{profile.lookingForAJob ? <span>Нет</span> : <span>Да</span>}
        </div>
        {profile.lookingForAJobDescription &&
            <div>Моя работа</div>
        }
        <div>
            <b>Contact:</b> {Object.keys(profile.contacts).map((e) => {
                return <ProfileContact key={e} contactKey={e} contactValue={profile.contacts[e]} />
            })}
        </div>
    </div>
}



const ProfileContact = ({contactKey,contactValue}) => {
    return <>
        <div><b>{contactKey}:</b>{contactValue}</div>
    </>
}