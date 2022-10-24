import { Header } from "./header"
import { connect } from "react-redux"
import React from 'react'
import {  loginOutThunkCreator } from "../../redux/authReducer"



export class HeaderContainerAPI extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect(mapStateToProps, {loginOutThunkCreator})(HeaderContainerAPI)

