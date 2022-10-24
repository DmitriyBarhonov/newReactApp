import React from 'react';
import { Formik, Form, Field } from "formik";
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../redux/authReducer';
import {Navigate} from "react-router-dom"


const Login = (props) => {
    
    if(props.isAuth){
        return <Navigate to = {"/profile"} />
    }

    return (

        <div>
            <div>Login</div>
            <Formik initialValues={{ email: "", password: "", remember: false }} onSubmit={(values) => {
                let { email, password, remember } = values
                props.loginThunkCreator(email, password, remember)
            }}>
                <Form>
                    <div>
                        <div>
                            <Field name="email" type="email" placeholder='Логин' />
                        </div>
                        <div>
                            <Field name="password" type="password" placeholder='Пароль' />
                        </div>
                        <div>
                            <Field name="remember" type="checkbox" />
                            <label>Запомнить меня</label>
                        </div>
                        <div >
                            <button type="sumbit">Login</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})
export const LoginContainer = connect(mapStateToProps, { loginThunkCreator })(Login)
