import {Routes, Route} from "react-router-dom";
import { HeaderContainer } from './component/Header/headerContainer';
import { Navbar } from './component/Navbar/navbar';
// import  ProfileContainer  from './component/Profile/profileContainer';
import { News } from './component/News/news';
import { Music } from './component/Music/music';
import { Settings } from './component/Settings/settings';
// import  DialogsContainer  from './component/Dialogs/dialogsContainer';
import { UsersContainer } from './component/Users/usersContainer';
import { LoginContainer } from './component/Login/lofin';
import React, {Suspense, lazy} from "react";
import { connect } from "react-redux/es/exports";
import{initializeThunkCreator} from "./redux/appReducer"
import './App.css';
import { Loader } from "./component/common/preloader/loader";

const DialogsContainer = lazy(() => import('./component/Dialogs/dialogsContainer'));
const ProfileContainer = lazy(() => import('./component/Profile/profileContainer'));

export class App extends React.Component{
  componentDidMount() {
    this.props.initializeThunkCreator()
}
  render (){

    if(!this.props.initialize){
      return <Loader/>
    }

// console.log(this.props)


    return (
        <div className='app_wrapper'>
              <HeaderContainer />
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
                    <Route path="/users/*" element={<UsersContainer />}/>
                    <Route path="/login/*" element={<LoginContainer/>}/>
                </Routes>
                </React.Suspense>
              </div>
          </div>
      )

  }
}

const mapStateToProps = (state)=>({
  initialize: state.app.initialized
})

export default connect(mapStateToProps, {initializeThunkCreator})(App)
