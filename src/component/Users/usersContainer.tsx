// @ts-ignore
import { Users } from "./users.tsx";
import { Loader } from "../common/preloader/loader";
import { getFetching } from "../../redux/usersSelectors";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import React, { useEffect } from "react";
// @ts-ignore
import { getUsersThunkCreator } from "../../redux/usersReducer.ts";
import {
  getFilter,
  getPageSize,
  getCurntPage,
} from "../../redux/usersSelectors";
import { useSearchParams } from "react-router-dom";

export const UserPage = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(getPageSize);
  const curntPage = useSelector(getCurntPage);
  const filter = useSelector(getFilter);
  const isFetching = useSelector(getFetching);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let page = searchParams.get(`page`);
    let term = searchParams.get(`term`);
    let friend = searchParams.get(`friend`);

    let actualPage = curntPage;
    let actualFilter = filter;

    if (!!page) actualPage = +page;
    if (!!term) actualFilter = { ...actualFilter, term: term };
    switch (friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
    }
    dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
  }, [curntPage, dispatch, filter, pageSize, searchParams]);
  return <>{isFetching ? <Loader /> : <Users />}</>;
};
