import profileInfo from "./ProfileInfo.module.css"
import { Loader } from "../../common/preloader/loader";
import { StatusProfileHook } from "./StatusProfileHook";
import userPhoto from '../../../img/user.png'
import { useState } from "react";
import { ProfileDataForm } from "./ProfileDataForm";
import { useDispatch, useSelector } from "react-redux";
import {savePhoto, onSumbitInfo } from '../../../redux/profileReducer.ts'
import { Navigate } from "react-router-dom"

export const ProfileInfo = (props) => {

    const profile = useSelector((state)=>state.postPage.profile)
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Loader />
    }

    if (!isAuth) {
        return <Navigate to={"/profile"} />
      }

    const maiPhotoSeled = (e) => {
        if (e.target.files[0]) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const onSumbitInfoMethod = (data) => {
        dispatch(onSumbitInfo(data))
        setEditMode(false)
    }


    return (
        <>

            <div className={profileInfo.photo}>
                <img alt="we" src={profile.photos.large || userPhoto} className={profileInfo.main_photo} />
                <div>{props.isOvner && <input onChange={maiPhotoSeled} type="file" />}</div>
                <StatusProfileHook />
            </div>

            {editMode ? <ProfileDataForm profile={profile} onSumbitInfoMethod={onSumbitInfoMethod} /> : <ProfileData isOvner={props.isOvner} setEditMode={setEditMode} profile={profile} />}
        </>
    )
};

const ProfileData = ({ profile, setEditMode, isOvner }) => {
    return <div>
        {isOvner ? <div><button onClick={() => setEditMode(true)} >Редактировать</button></div> : null}
        <div>
            <b>Ищу работу:</b>{profile.lookingForAJob ? <span>Да</span> : <span>Нет</span> }
        </div>
        {profile.lookingForAJobDescription ? <div>{profile.lookingForAJobDescription}</div> : <div> Нет информации</div>}
        {profile.fullName ? <div>{profile.fullName}</div> : <div> Нет информации</div>}
        {profile.fullName ? <div>{profile.aboutMe}</div> : <div> Нет информации</div>}
        <div>
            <b>Contact:</b> {Object.keys(profile.contacts).map((e) => {
                return <ProfileContact key={e} contactKey={e} contactValue={profile.contacts[e]} />
            })}
        </div>
    </div>
}



const ProfileContact = ({ contactKey, contactValue }) => {
    return <>
        <div><b>{contactKey}:</b>{contactValue}</div>
    </>
}