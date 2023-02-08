// @ts-ignore
import user from './user.module.css'
// @ts-ignore
import userPhoto from '../../img/user.png'
import { NavLink, useSearchParams } from "react-router-dom";
import React from 'react';
// @ts-ignore
import { FormSearch } from './usersFormSearch'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersSuperSelector, getFilter, getPageSize, getUserCount, getCurntPage } from '../../redux/usersSelectors';
// @ts-ignore
import { getUsersThunkCreator, followThunkCreator, unFollowThunkCreator } from "../../redux/usersReducer.ts"
import { Navigate, useNavigate, } from "react-router-dom"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


export const Users = () => {
  const totalUsersCount = useSelector(getUserCount)
  const pageSize = useSelector(getPageSize)
  const curntPage = useSelector(getCurntPage)
  const users = useSelector(getUsersSuperSelector)
  const filter = useSelector(getFilter)
  const isAuth = useSelector((state: any) => state.auth.isAuth)
  const dispatch = useDispatch()
  const history = useNavigate()
  // const params = useParams()
  // const g = useSearchParams()
  const [searchParams] = useSearchParams();


  useEffect(() => {
    history(`?term=${filter.term}&friend=${filter.friend}&page=${curntPage}`)
  }, [filter, curntPage])




  const onPageChange = (curntPage: number) => {
    dispatch(getUsersThunkCreator(curntPage, pageSize, filter))
  }

  const onFilterChange = (filter) => {
    dispatch(getUsersThunkCreator(1, pageSize, filter))
  }

  const follow = (id: number) => {
    dispatch(followThunkCreator(id))
  }

  const unFollow = (id: number) => {
    dispatch(unFollowThunkCreator(id))
  }

  let pages: Array<number> = []
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i < pageCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  if (!isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (

    <div>
      {pages.map(e => {
        return <button onClick={() => onPageChange(e)}
          key={e} className={curntPage === e ? user.selected_page_active : user.selected_page}>{e}</button>
      })}
      <FormSearch onFilterChange={onFilterChange} />

      {users.map(u =>
        <div key={u.id} className={user.item}>

          <div className={user.img_btn}>
            <NavLink to={'/profile/' + u.id} >
              <img alt='img' className={user.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
            </NavLink>
            <div>
              {u.followed
                ? <button onClick={() => {
                  follow(u.id)
                }

                }
                  className={user.button}>Подписаться</button>
                : <button onClick={() => {
                  unFollow(u.id)
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