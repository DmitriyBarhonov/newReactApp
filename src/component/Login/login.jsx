import React from "react";
import { Formik, Form, Field } from "formik";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginThunkCreator } from "../../redux/authReducer.ts";
import { Navigate } from "react-router-dom";
import s from "./login.module.css";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const captcha = useSelector((state) => state.auth.captcha);
  const dispatch = useDispatch();

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
          captcha: "",
        }}
        onSubmit={(values) => {
          let { email, password, remember, captcha } = values;
          dispatch(loginThunkCreator(email, password, remember, captcha));
        }}
      >
        <Form>
          <div>
            <div className={s.inputLogin}>
              <Field name="email" type="email" placeholder="Логин" />
            </div>
            <div className={s.inputLogin}>
              <Field name="password" type="password" placeholder="Пароль" />
            </div>
            <div className={s.checkboxLogin}>
              <Field name="remember" type="checkbox" />
              <label>Remember me</label>
            </div>
            <div>
              {captcha ? (
                <div>
                  <img alt="img" src={captcha} />
                  <div>
                    <Field name="captcha" type="text" placeholder="captcha" />
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              <button className={s.buttonLogin} type="sumbit">Login</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});
export const LoginContainer = connect(mapStateToProps, { loginThunkCreator })(
  Login
);
