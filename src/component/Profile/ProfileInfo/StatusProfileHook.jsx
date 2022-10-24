// import profile from "./ProfileInfo.module.css"
// import { Loader } from "../../common/preloader/loader";
import React, { useEffect, useState } from 'react'

export const StatusProfileHook = (props) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status)

useEffect(()=>{
    setStatus(props.status)
},[props.status])

const activateEditMode = ()=>{
    setEditMode(true);
}

const unActivateEditMode = ()=>{
    setEditMode(false);
    props.updateStatusThunkCreactor(status);
}

const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value)
}



    return (
        <>

            {!editMode &&
                <div>
                <span  onClick={activateEditMode}>{props.status}</span>
            </div>}

            {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={status}
                    onBlur={unActivateEditMode} type="text"/>
                </div>}
        </>
    )
};