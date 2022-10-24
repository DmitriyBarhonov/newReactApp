import nav from './navbar.module.css'
import { NavLink } from "react-router-dom";
import  Friend  from '../FriendItem/friendItem';


export const Navbar = (props) => {

  // let nameFriend = props.dataD.map(item => <Friend name ={item.name} key={item.id} img ={item.img}/>);
  

  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink to='/profile' className={set => set.isActive ? nav.active : nav.item}>Profile</NavLink>
      </div>

      <div className={nav.item}>
        <NavLink to='/dialogs' className={set => set.isActive ? nav.active : nav.item}>Massage</NavLink>
      </div>

      <div className={nav.item}>
        <NavLink to='news' className={set => set.isActive ? nav.active : nav.item}>News</NavLink>
      </div>

      <div className={nav.item}>
        <NavLink to='Music' className={set => set.isActive ? nav.active : nav.item}>Music</NavLink>
      </div>

      <div className={nav.item}>
        <NavLink to='settings' className={set => set.isActive ? nav.active : nav.item}>Settings</NavLink>
      </div>

      <div className={nav.item}>
        <NavLink to='users' className={set => set.isActive ? nav.active : nav.item}>Users</NavLink>
      </div>


      <div className={nav.fri}>

<h3>Друзья</h3>
          {/* {nameFriend} */}

      </div>
    </nav>
  )
}