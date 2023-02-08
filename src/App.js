// import  DialogsContainer  from './component/Dialogs/dialogsContainer';
// import  ProfileContainer  from './component/Profile/profileContainer';
import {Routes, Route} from "react-router-dom";
import { Header } from './component/Header/header';
import { Navbar } from './component/Navbar/navbar';
import { News } from './component/News/news';
import { Music } from './component/Music/music';
import { Settings } from './component/Settings/settings';
import { UserPage } from './component/Users/usersContainer.tsx';
import { LoginContainer } from './component/Login/lofin';
import React, {lazy, useEffect} from "react";
import {useDispatch, useSelector } from "react-redux/es/exports";
import{initializeThunkCreator} from "./redux/appReducer.ts"
import './App.css';
import { Loader } from "./component/common/preloader/loader";


const DialogsContainer = lazy(() => import('./component/Dialogs/dialogsContainer'));
const ProfileContainer = lazy(() => import('./component/Profile/profileContainer.tsx'));



export const App = ()=> {
  const initialize = useSelector((state)=>state.app.initialized)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(`хуй`)
    dispatch(initializeThunkCreator())
  },[])
 

if(!initialize){
  return <Loader/>
}

    return (
      
        <div className='app_wrapper'>
              <Header />
              <Navbar />
              <div className='wrapper_content'>
              <React.Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer  />}/>
                    <Route path="/profile" element={<ProfileContainer  />}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/users/*" element={<UserPage />}/>
                    <Route path="/login/*" element={<LoginContainer/>}/>
                </Routes>
                </React.Suspense>
              </div>
          </div>
      )

  }


// const mapStateToProps = (state)=>({
//   initialize: state.app.initialized
// })

// export default connect(mapStateToProps, {initializeThunkCreator})(App)
