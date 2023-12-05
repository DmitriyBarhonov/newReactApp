// @ts-ignore
import s from "./user.module.css";
// @ts-ignore
import userPhoto from "../../img/user.png";
import { NavLink } from "react-router-dom";
import React from "react";
// @ts-ignore
import { FormSearch } from "./usersFormSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersSuperSelector,
  getFilter,
  getPageSize,
  getUserCount,
  getCurntPage,
} from "../../redux/usersSelectors";
// @ts-ignore
import {
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator,
} from "../../redux/usersReducer.ts";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "antd";

export const Users = () => {
  const totalUsersCount = useSelector(getUserCount);
  const pageSize = useSelector(getPageSize);
  const curntPage = useSelector(getCurntPage);
  const users = useSelector(getUsersSuperSelector);
  const filter = useSelector(getFilter);
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    history(`?term=${filter.term}&friend=${filter.friend}&page=${curntPage}`);
  }, [filter, curntPage, history]);

  const onPageChange = (curntPage: number) => {
    dispatch(getUsersThunkCreator(curntPage, pageSize, filter));
  };

  const onFilterChange = (filter) => {
    dispatch(getUsersThunkCreator(1, pageSize, filter));
  };

  const follow = (id: number) => {
    dispatch(followThunkCreator(id));
  };

  const unFollow = (id: number) => {
    dispatch(unFollowThunkCreator(id));
  };

  let pages: Array<number> = [];
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i < pageCount; i++) {
    if (pages.length < 15) {
      pages.push(i);
    }
  }

  if (!isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      {pages.map((e) => {
        return (
          <Button
            type="primary"
            onClick={() => onPageChange(e)}
            key={e}
            className={
              curntPage === e ? s.selected_page_active : s.selected_page
            }
          >
            {e}
          </Button>
        );
      })}
      <FormSearch onFilterChange={onFilterChange} />

      {users.map((u) => (
        <div key={u.id} className={s.item}>
          <div className={s.img_btn}>
            <NavLink to={"/profile/" + u.id}>
              <img
                alt="img"
                className={s.img}
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    follow(u.id);
                  }}
                  className={s.button}
                >
                  Подписаться
                </button>
              ) : (
                <button
                  onClick={() => {
                    unFollow(u.id);
                  }}
                  className={s.button}
                >
                  Отписаться
                </button>
              )}
            </div>
          </div>

          <div className={s.info}>
            <div className={s.status_name}>
              <div>{u.name}</div>
              <div className={s.status_user}>{u.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
