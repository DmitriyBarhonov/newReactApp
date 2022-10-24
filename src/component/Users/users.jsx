import user from './user.module.css'
import userPhoto from '../../img/user.png'
import { NavLink } from "react-router-dom";


export const Users = (props) => {
 
  let pages = [];

  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  for (let i = 1; i <= pageCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }
  
  return (
  <div>
    {pages.map(e => {
      return <button onClick={() => props.onPageChange(e)}
        key={e} className={props.curntPage === e ? user.selected_page_active : user.selected_page}>{e}</button>
    })}

    {props.users.map(u =>
        <div key={u.id} className={user.item}>

          <div className={user.img_btn}>
            <NavLink to={'/profile/' + u.id} >
              <img alt='img' className={user.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
            </NavLink>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.followThunkCreator(u.id)
                }

                }
                  className={user.button}>Подписаться</button>
                : <button onClick={() => {
                  props.umFollowThunkCreator(u.id)
                }

                } className={user.button}>Отписаться</button>}
            </div>
          </div>

          <div className={user.info}>
            <div className={user.status_name}>

              <div className="">{u.name}</div>
              <div className={user.status_user}>{u.status}</div>

            </div>

            <div className={user.location}>
              <div>{'u.location.contry'}</div>
              <div>{'u.location.city'}</div>
            </div>

          </div>
        </div>
      )
    }
  </div>)
}