// import profile from "./ProfileInfo.module.css"
// import { Loader } from "../../common/preloader/loader";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {updateStatusThunkCreactor } from '../../../redux/profileReducer.ts'

export const StatusProfileHook = (props) => {
    const dispatch = useDispatch()
    const statusStore = useSelector((state)=>state.postPage.status)

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status)

useEffect(()=>{
    console.log(`params`)
    setStatus(statusStore)
},[statusStore])


const activateEditMode = ()=>{
    setEditMode(true);
}

const unActivateEditMode = ()=>{
    setEditMode(false);
    dispatch(updateStatusThunkCreactor(status));
}

const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value)
}



    return (
        <>
            {!editMode &&
                <div>
                <span  onClick={activateEditMode}>{statusStore}</span>
            </div>}

            {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={status}
                    onBlur={unActivateEditMode} type="text"/>
                </div>}
        </>
    )
};