import React, { useEffect } from 'react'
import { Profile } from './profile';
// @ts-ignore
import { getStatusThunkCreactor, setProdileThunkCreactor } from '../../redux/profileReducer.ts';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"


 const  ProfileContainer = ()=> {
  const dispatch = useDispatch()
  const params = useParams()

  const auth = useSelector((state:any)=> state.auth)


 const refreshProfile = () => {
    let userId = params.userId;
    if (!userId) {
      userId = auth.id;
    }
    dispatch(getStatusThunkCreactor(userId))
    dispatch(setProdileThunkCreactor(userId))
   
  }


 useEffect(()=>{
    refreshProfile()
   },[])  
 


  if (!auth.isAuth) {
    return <Navigate to = {"/login"} />
}
 
    return <Profile 
      isOvner={!params.userId}
    />
  }

  export default ProfileContainer
