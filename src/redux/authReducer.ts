// @ts-ignore
import { usersAPI, AuthAPI, ResultCodeEnum } from "../api/api.ts";
const SET_USER_DATA = "SET_USER_DATA";

type SET_USER_DATA_TYPE = typeof SET_USER_DATA;

let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
};

export type initialStateAuthType = typeof initialState;

const authReducer = (state = initialState, action): initialStateAuthType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

type authData = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | null;
};

type setAuthUserDataType = {
  type: SET_USER_DATA_TYPE;
  data: authData;
};

export const setAuthUserData = (
  email: string | null,
  id: number | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: {
    id,
    login,
    email,
    isAuth,
  },
});

export const AuthUserDataThunkCreator = () => {
  return (dispatch: any) => {
    return usersAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;

        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  };
};

export const loginThunkCreator = (email, password, remember) => {
  return (dispatch: any) => {
    AuthAPI.loginApi(email, password, remember).then((data) => {
      if (data.data.resultCode === ResultCodeEnum.Success) {
        dispatch(AuthUserDataThunkCreator());
      }
    });
  };
};

export const loginOutThunkCreator = () => {
  return (dispatch: any) => {
    AuthAPI.logiout().then((data) => {
      console.log();
      if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
